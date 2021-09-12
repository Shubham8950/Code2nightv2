using Code2Night.Controllers;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Code2Night.Areas.Admin.Controllers
{
    [AdminAuthenticateUser]
    public class DashboardController : BaseController
    {
        public DashboardController() : base(new BlogRepo(), new TutorialRepo())
        {
        }

        public IActionResult Home()
        {
            return View();
        }
    }
}