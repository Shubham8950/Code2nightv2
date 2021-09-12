using Microsoft.AspNetCore.Mvc;

namespace Code2Night.Controllers
{
    public class HtmlBeautifierController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}