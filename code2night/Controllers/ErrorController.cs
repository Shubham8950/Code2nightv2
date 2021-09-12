using Microsoft.AspNetCore.Mvc;

namespace Code2Night.Controllers
{
    public class ErrorController : Controller
    {
        // GET: Error
        public IActionResult index()
        {
            return View();
        }
    }
}