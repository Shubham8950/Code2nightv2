using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using System.IO;
using System.Linq;
using System.Xml;

namespace Code2Night.Controllers
{
    public class SiteMapController : BaseController
    {
        private IBlog _blogrepo;

        public SiteMapController(IBlog blogrepo) : base(new BlogRepo(), new TutorialRepo())
        {
            _blogrepo = blogrepo;
        }

        [AdminAuthenticateUser]
        public IActionResult Index()
        {
            ViewBag.IsFileAvailable = false;
            if (System.IO.File.Exists(CurrentDirectoryHelpers.GetServerPath() + "/Sitemap.xml"))
            {
                ViewBag.IsFileAvailable = true;
            }
            return View();
        }

        public IActionResult DownloadFile()
        {
            return PhysicalFile(CurrentDirectoryHelpers.GetServerPath() + "/Sitemap.xml", MimeTypes.GetMimeType("Sitemap.xml"), Path.GetFileName("Sitemap.xml"));
        }

        public IActionResult GenerateSiteMap()
        {
            CreateSiteMaps();
            return RedirectToAction("Index", "SiteMap");
        }

        public IActionResult AddNewSitemapElement()
        {
            SitemapGenerator sg = new SitemapGenerator();
            var list = _blogrepo.GetBlogs();
            var siteMapItems = list.Select(x => new SitemapItem(
            Urls + x.BlogUrl, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList();
            foreach (var item in siteMapItems.Take(50000))
            {
                var NewItem = sg.CreateItemElement(item);
                XmlDocument document = new XmlDocument();
                document.Load(CurrentDirectoryHelpers.GetServerPath() + "/Sitemap.xml");
                XmlElement childElement = document.ReadNode(NewItem.CreateReader()) as XmlElement;
                XmlNode parentNode = document.SelectSingleNode("urlset");
                document.GetElementsByTagName("urlset")[0].InsertBefore(childElement, document.GetElementsByTagName("urlset")[0].LastChild);
                document.Save(CurrentDirectoryHelpers.GetServerPath() + "/Sitemap.xml");
            }

            return RedirectToAction("Index", "Home");
        }
    }
}