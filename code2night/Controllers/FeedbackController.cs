using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Code2Night.Controllers
{
    public class FeedbackController : Controller
    {
        private IFeedback _feedback;

        public FeedbackController()
        {
            this._feedback = new FeedbackRepo();
        }

        public FeedbackController(IFeedback feedback)
        {
            _feedback = feedback;
        }

        public ActionResult Index()
        {
            return View();
        }

        public IActionResult SaveFeedback(Feedback feedback)
        {
            var result = _feedback.SaveFeedback(feedback);
            return Json(new { Success = true });
        }
    }
}