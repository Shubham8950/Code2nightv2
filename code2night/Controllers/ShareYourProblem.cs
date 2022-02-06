using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Code2Night.Controllers
{
    public class ShareYourProblem : Controller
    {
        private IFeedback _feedback;

        public ShareYourProblem()
        {
            this._feedback = new FeedbackRepo();
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Saveproblem(string Name,string ProblemDescription,string ProblemSuggestion)
        {
            var result = _feedback.SaveProblem(Name, ProblemDescription, ProblemSuggestion);
            return Json(new { Success = true });
        }
    }
}
