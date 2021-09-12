using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using Google.Apis.YouTube.v3;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Code2Night.Controllers
{
    public class UsersController : BaseController
    {
        private IUserRepo _userrepo;
        private HomeViewModel home = new HomeViewModel();
        private readonly IBlog _blogrepo;

        public UsersController(IUserRepo userrepo, IBlog blog) : base(new BlogRepo(), new TutorialRepo())
        {
            _userrepo = userrepo;
            _blogrepo = blog;
        }

        public  IActionResult Index()
        {
            if(this.GetUserRoleCookieValue()== "Admin")
            {
                ViewBag.IsAdmin = true;
            }
            var GetBlogs =_blogrepo.GetBlogs();
            return View(GetBlogs);
        }

        public IActionResult Login()
        {
            if (GetUserCookieValue("UserId") != null && !string.IsNullOrEmpty(GetUserCookieValue("UserId")) && GetUserCookieValue("UserId") != "0")
            {
                if (GetUserCookieValue("Role") == "Admin")
                {
                    return RedirectToAction("index", "DashboardGraph");
                }
                else
                {
                    return RedirectToAction("index", "Users");
                }
            }
            else
            {
                CloseUserSession();
            }
            return View();
        }

        public void CloseUserSession()
        {
            var cookies = Request.Cookies["UserId"];
            if (cookies != null)
            {
                CookieOptions option = new CookieOptions
                {
                    Expires = DateTime.Now.AddDays(-1)
                };
                Response.Cookies.Append("UserId", "", option);
            }
        }

        public ActionResult SqlServerTutorial()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Register()
        {
            var list = _userrepo.GetExistingUserNames();
            var skills = _userrepo.GetSkills();
            return View(skills);
        }

        public ActionResult ContactUs()
        {
            return View();
        }

        [HttpGet]
        public ActionResult VerifyAccount(Guid Id)
        {
            ViewBag.Activated = _userrepo.ActivateAccount(Id);
            return View();
        }

        [HttpPost]
        public JsonResult ResendVerificationMail(string Email)
        {
            var result = _userrepo.ResendVerificationMail(Email);
            return Json(result);
        }

        [HttpPost]
        public JsonResult UserFetch(string Name)
        {
            var list = _userrepo.GetExistingUserNames();
            return Json(list.Contains(Name));
        }

        public ActionResult Blog(string id)
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(string UserName, string Password, bool Remember)
        {
            var user = _userrepo.UserLogin(UserName, Password);
            if (user.Username == null || !user.IsActive)
            {
                return Json(new string[] { "0", !user.IsActive && user.Username == null ? "Incorrect UserName or Password" : "Your account is not active .Please click on Activation link in mail sent on your registered email." });
            }
            else
            {
                SaveUserCookies(user);
                return Json(new string[] { "1", user.UserRole });
            }
        }

        [HttpPost]
        public PartialViewResult SuccessFulRegistration()
        {
            return PartialView("~/Views/Shared/_SuccessfulRegistration.cshtml");
        }

        [HttpPost]
        public JsonResult Registerations(string Name, string Email, string Contact, string Username, string Password, string ProfileDescription, string Skills, IFormFile profileimage)
        {
            var file = "";
            if (profileimage?.Length > 0 && profileimage.FileName != "")
            {
                file = FileUploads.SaveFile(profileimage, CurrentDirectoryHelpers.GetServerPath() + "/Uploads/Pics");
            }
            Users user = new Users()
            {
                Username = Username,
                Email = Email,
                ContactNo = Contact,
                Password = Password,
                Name = Name,
                UserRole = "Author",
                IsActive = false,
                ProfileDescription = ProfileDescription,
                Skills = Skills,
                ProfileImage = file
            };
            int i = _userrepo.AddNewAccount(user);
            return Json(i);
        }

        [AdminAuthenticateUser]
        public ActionResult UserLists()
        {
            var getusr = _userrepo.GetUsers();
            return View(getusr);
        }

        [HttpGet]
        public ActionResult Delete(int id)
        {
            _userrepo.UserDelete(id);
            return RedirectToAction("UserLists");
        }
    }
}