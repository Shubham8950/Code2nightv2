using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Code2Night.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Linq;

namespace Code2Night.Controllers
{
    public class TutorialsController : BaseController
    {
        private ITutorial _tutorial;

        public TutorialsController(ITutorial tutorial) : base(new BlogRepo(), new TutorialRepo())
        {
            _tutorial = tutorial;
        }

        public IActionResult Index()
        {
            var getAllTutorial = _tutorial.TutorialsList();
            return View(getAllTutorial);
        }

        public IActionResult Article(string id)
        {
            var getAllTutorial = _tutorial.ArticleList(id);
            var model = new AritclesModel
            {
                GetArticles = getAllTutorial,
                ArticleDetails = new Article()
            };

            return View(model);
        }

        [Route("/Tutorials/Article/{topic}/{article}")]
        public IActionResult Article(string topic, string article)
        {
            var getAllTutorial = _tutorial.ArticleByUrl(topic, article);
            var model = new AritclesModel
            {
                GetArticles = getAllTutorial.Tables[0].DataTableToList<Article>(),
                ArticleDetails = getAllTutorial.Tables[1].DataTableToList<Article>().FirstOrDefault()
            };
            model.ArticleDetails = model.ArticleDetails ?? new Article();
            return View(model);
        }

        public IActionResult ArticleDetail(int id)
        {
            var getArticle = _tutorial.Article(id);
            if (getArticle.BlogId != 0)
            {
                using (StreamReader reader = new StreamReader(CurrentDirectoryHelpers.GetServerPath() + "/BlogFiles/Blog_" + getArticle.BlogId + ".txt"))
                {
                    getArticle.ArticleBody = reader.ReadToEnd();
                }
            }
            return PartialView("_Article", getArticle);
        }
    }
}