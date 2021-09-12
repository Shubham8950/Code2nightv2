using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Code2Night.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Code2Night.Controllers
{
    [AdminAuthenticateUser]
    public class CategoryController : BaseController
    {
        private ITutorial _tutorial;

        public CategoryController(ITutorial tutorial) : base(new BlogRepo(), new TutorialRepo())
        {
            _tutorial = tutorial;
        }

        public IActionResult Index()
        {
            var list = _tutorial.GetCategories();
            return View(list);
        }

        public IActionResult EditTopic(int id)
        {
            var list = _tutorial.GetCategories();
            var model = new AritcleViewModel
            {
                GetCategories = list,
                GetTopics = _tutorial.GetTopics(),
                TopicDetail = _tutorial.GetTopicsById(id)
            };

            return View("Topics", model);
        }

        [HttpPost]
        public JsonResult InsertCategory(Category category)
        {
            var insertCate = _tutorial.InsertCategory(category);
            return Json(insertCate);
        }

        [HttpPost]
        public ActionResult SaveTopic(AritcleViewModel model, IFormFile documents)
        {
            if (documents?.Length > 0 && documents.FileName != "")
            {
                model.TopicDetail.Image = FileUploads.SaveFile(documents, CurrentDirectoryHelpers.GetServerPath() + "/Uploads/Topic");
            }
            model.TopicDetail.topicurl = model.TopicDetail.topicurl.Trim().Replace(" ", "-").Replace(".", "").Replace("#", "").Replace("&", "");
            _tutorial.InsertTopic(model.TopicDetail);
            return RedirectToAction("Topics");
        }

        public ActionResult Delete(int id)
        {
            Connection.Delete(id, "sprCategory", "Delete");
            return RedirectToAction("Index");
        }

        public ActionResult DeleteTopic(int id)
        {
            Connection.Delete(id, "sprTopic", "Delete");
            return RedirectToAction("Topics");
        }

        public IActionResult Topics()
        {
            var list = _tutorial.GetCategories();
            var model = new AritcleViewModel
            {
                GetCategories = list,
                GetTopics = _tutorial.GetTopics(),
                TopicDetail = new Topics()
            };
            return View(model);
        }

        public IActionResult Articles()
        {
            var listTopics = _tutorial.GetTopics();
            var model = new AritclesModel
            {
                GetTopicsTitle = listTopics,
                GetArticles = _tutorial.GetArticles()
            };
            return View(model);
        }

        public IActionResult EditArticle(int id)
        {
            var listTopics = _tutorial.GetTopics();
            var model = new AritclesModel
            {
                GetTopicsTitle = listTopics,
                GetArticles = _tutorial.GetArticles(),
                ArticleDetails = _tutorial.GetArticlesById(id)
            };
            return View("Articles", model);
        }

        public ActionResult SaveArticle(AritclesModel model)
        {
            model.ArticleDetails.articleurl = model.ArticleDetails.articleurl.Trim().Replace(" ", "-").Replace(".", "").Replace("#", "").Replace("&", "");
            _tutorial.InsertArticle(model.ArticleDetails);
            return RedirectToAction("Articles");
        }

        public ActionResult DeleteArticle(int id)
        {
            Connection.Delete(id, "sprTopicArticle", "DELETE", "articleid");
            return RedirectToAction("Articles");
        }
    }
}