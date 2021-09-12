using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
using GroupDocs.Viewer.Results;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Code2Night.Controllers
{
    public class Docreader : Controller
    {
        private IHostingEnvironment Environment;

        public Docreader(IHostingEnvironment _environment)
        {
            Environment = _environment;
        }

        private static string filePath;

        public IActionResult Index()
        {
            string path = Path.Combine(this.Environment.WebRootPath, "output");
            string path2 = Path.Combine(this.Environment.WebRootPath, "storage");
            System.IO.DirectoryInfo output = new DirectoryInfo(path);
            System.IO.DirectoryInfo di = new DirectoryInfo(path2);

            if (Directory.Exists(path))
            {
                foreach (System.IO.FileInfo file in output.GetFiles())
                {
                    file.Delete();
                }
            }
            if (Directory.Exists(path2))
            {
                foreach (System.IO.FileInfo file in di.GetFiles())
                {
                    file.Delete();
                }
            }
            return View();
        }

        private string GetDocumentInfo(string fileName)

        {
            string totalpages = "";
            try
            {
                using (Viewer viewer = new Viewer(Path.Combine(fileName)))
                {
                    ViewInfo info = viewer.GetViewInfo(ViewInfoOptions.ForPngView(false));
                    totalpages = info.Pages.Count.ToString();
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message.ToString();
            }
            return totalpages;
        }

        [HttpPost]
        public async Task<string> GetPage(string value)
        {
            string PageFilePathFormat = "";
            try
            {
                string StorageFolder = filePath.Replace("\\", "/");
                int PageNumber = Convert.ToInt32(value);
                string filename = string.Format("img{0}.png", PageNumber);
                string OutputPath = Path.Combine(this.Environment.WebRootPath, "output");
                PageFilePathFormat = Path.Combine(OutputPath.Replace("\\", "/"), filename);
                using (Viewer viewer = new Viewer(Path.Combine(StorageFolder)))
                {
                    PngViewOptions options = new PngViewOptions(PageFilePathFormat);

                    viewer.View(options, PageNumber);
                }
                PageFilePathFormat = Path.Combine("/output", string.Format("img{0}.png", PageNumber));
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return PageFilePathFormat;
        }

        [HttpPost]
        public ActionResult UploadFiles(IFormFile fileData)
        {
            string wwwPath = this.Environment.WebRootPath;
            string contentPath = this.Environment.ContentRootPath;
            //EnvironmentPath env = new EnvironmentPath
            //{
            //    webroot = this.Environment.WebRootPath,
            //    contentroot = this.Environment.ContentRootPath,
            //};
            var value = "";
            try
            {
                var fileName = "";
                string path = Path.Combine(this.Environment.WebRootPath, "output");
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                string path2 = Path.Combine(this.Environment.WebRootPath, "storage");
                if (!Directory.Exists(path2))
                {
                    Directory.CreateDirectory(path2);
                }
                if (fileData != null && fileData.Length > 0)
                {
                    System.Random random = new System.Random();
                    int rnd = random.Next();
                    fileName = Path.GetFileName(fileData.FileName);
                    fileName = path2.Replace("\\", "/") + "/" + rnd + fileName;
                    filePath = Path.Combine(Directory.GetCurrentDirectory(), fileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        fileData.CopyToAsync(fileStream);
                    }
                }

                GetDocumentInfo(fileName);
                value = GetDocumentInfo(fileName);
            }
            catch (Exception ex)
            {
                value = ex.Message;
            }
            return Json(value);
        }
    }
}