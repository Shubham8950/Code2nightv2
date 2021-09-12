using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Code2Night.Controllers
{
    [AdminAuthenticateUser]
    public class DashboardGraphController : BaseController
    {
        private IBlog _blogrepo;
        private IIncome _incomerepo;
        private HomeViewModel home = new HomeViewModel();

        public DashboardGraphController(IBlog blogrepo, IIncome incomerepo) : base(new BlogRepo(), new TutorialRepo())
        {
            _blogrepo = blogrepo;
            _incomerepo = incomerepo;
        }

        public IActionResult Index()
        {
            var obj = new HomeViewModel
            {
                EmployeeDashboardList = _blogrepo.EmployeeDashboards(),
                DashBoardItem = _blogrepo.EmployeeDashboardsCount(),
                GettodoItems = _blogrepo.GetToDo(),
                IncomeList = _incomerepo.GetIncomes()
            };
            return View(obj);
        }

        public IActionResult BindTodo()
        {
            var obj = new HomeViewModel
            {
                GettodoItems = _blogrepo.GetToDo()
            };
            return PartialView("_ToDo", obj);
        }

        [System.Web.Mvc.HttpPost]
        public IActionResult Additems(TodoItem todoItem)
        {
            _blogrepo.AddItem(todoItem);
            return Json(new { Success = true });
        }

        [System.Web.Mvc.HttpPost]
        public IActionResult SaveUpdateItem(TodoItem todoItem)
        {
            _blogrepo.SaveUpdateItem(todoItem);
            return Json(new { Success = true });
        }
    }
}