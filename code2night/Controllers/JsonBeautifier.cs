using Microsoft.AspNetCore.Mvc;

namespace Code2Night.Controllers
{
    public class JsonBeautifier : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}