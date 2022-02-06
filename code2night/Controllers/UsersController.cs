using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using Google.Apis.YouTube.v3;
using GoogleAuthentication.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Code2Night.Controllers
{
    public class UsersController : BaseController
    {
        private IUserRepo _userrepo;
        private HomeViewModel home = new HomeViewModel();
        private readonly IBlog _blogrepo;
        IConfiguration _iconfiguration;
        IHostingEnvironment _env;
        public UsersController(IUserRepo userrepo, IBlog blog, IConfiguration iconfiguration, IHostingEnvironment env) : base(new BlogRepo(), new TutorialRepo())
        {
            _userrepo = userrepo;
            _blogrepo = blog;
            _iconfiguration = iconfiguration;
            _env = env;
        }

        public IActionResult Index()
        {

            if (this.GetUserRoleCookieValue() == "Admin")
            {
                ViewBag.IsAdmin = true;
            }
            var GetBlogs = _blogrepo.GetBlogsPaging();
          
            
            return View(GetBlogs);
        }

        public async Task<IActionResult> GoogleLoginCallback(string code)
        {
            try
            {
                var ClientSecret = _iconfiguration.GetValue<string>("Google_Id:client_secret");
                var ClientID = _iconfiguration.GetValue<string>("Google_Id:client_id");
                var url = _iconfiguration.GetValue<string>("Google_Id:redirect_uri");
                var token = await GoogleAuth.GetAuthAccessToken(code, ClientID, ClientSecret, url);
                ErrorLogs(JsonConvert.SerializeObject(token));
                var userProfile = await GoogleAuth.GetProfileResponseAsync(token.AccessToken.ToString());
                var googleUser = JsonConvert.DeserializeObject<GoogleProfile>(userProfile);
                var getusr = _userrepo.GetUsers();
                if (getusr.Where(x => x.Email == googleUser.Email).Any())
                {
                    var user = _userrepo.CheckUserExists(googleUser.Email);
                    if (user.UserRole == "Admin")
                    {
                        SaveUserCookies(user);
                        return RedirectToAction("Index", "DashboardGraph");
                    }
                    else
                    {
                        SaveUserCookies(user);
                        return RedirectToAction("index", "Users");
                    }
                }
                else
                {
                    Users user = new Users()
                    {
                        Username = googleUser.Email,
                        Email = googleUser.Email,
                        ContactNo = "",
                        Password = "",
                        Name = googleUser.Name,
                        UserRole = "Author",
                        IsActive = false,
                        ProfileDescription = "",
                        Skills = "",
                        ProfileImage = ""
                    };
                    int i = _userrepo.AddNewAccount(user, true);
                    user = _userrepo.CheckUserExists(googleUser.Email);
                    if (user.UserRole == "Admin")
                    {
                        SaveUserCookies(user);
                        return RedirectToAction("Index", "DashboardGraph");
                    }
                    else
                    {
                        SaveUserCookies(user);
                        return RedirectToAction("index", "Users");
                    }
                }
            }
            catch (Exception ex)
            {
                ErrorLogs(ex.Message);
            }
            return RedirectToAction("index", "Users");
        }
        public void ErrorLogs(string msg)
        {
            if (!Directory.Exists(_env.ContentRootPath + "/log"))
            {
                Directory.CreateDirectory(_env.ContentRootPath + "/log");
            }
            var filename = _env.ContentRootPath + "/log/LogFile.txt";
            var sw = new System.IO.StreamWriter(filename, true);
            sw.WriteLine(DateTime.Now.ToString() + ": " + msg);
            sw.Close();
        }
        public IActionResult BindPagingBlog(int pageNumber)
        {
            var GetBlogs = _blogrepo.GetBlogsPaging(pageNumber);
            return PartialView("_BlogHome", GetBlogs);
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
            var ClientID = _iconfiguration.GetValue<string>("Google_Id:client_id");
            var url = _iconfiguration.GetValue<string>("Google_Id:redirect_uri");
            var response = GoogleAuth.GetAuthUrl(ClientID, url);
            ViewBag.response = response;
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