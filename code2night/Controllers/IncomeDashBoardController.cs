using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Code2Night.Controllers
{
    [AdminAuthenticateUser]
    public class IncomeDashBoardController : BaseController
    {
        
        private IIncome _incomeRepo;
            public IncomeDashBoardController(IIncome incomeRepo) : base(new BlogRepo(), new TutorialRepo())
        {
            _incomeRepo = incomeRepo;
        }
        public IActionResult Index()
        {
            var result = _incomeRepo.GetIncomes();
            return View(result);
        }

        [HttpPost]
        public IActionResult InsertIncome(Income model)
        {
           var result= _incomeRepo.AddIncome(model);
            return Json(result);
        }
    }
}
