using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Security.Application;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Code2Night.Controllers
{
    public class BlogController : BaseController
    {
        private IBlog _blogrepo;
        private IUserRepo _userrepo;
        private IHttpContextAccessor httpContextAccessor;

        public BlogController(IBlog blogrepo, IUserRepo userRepo, IHttpContextAccessor context) : base(new BlogRepo(), new TutorialRepo())
        {
            _blogrepo = blogrepo;
            _userrepo = userRepo;
            httpContextAccessor = context;
        }

        public async Task<IActionResult> Index()
        {
            var list = await _blogrepo.GetFilterBlog(1, 3, "", false);
            var blog = new MyBlogs
            {
                BlogsList = list.ToList()
            };
            return View("index", blog);
        }

        public async Task<IActionResult> BindBlogs()
        {
            var list = await _blogrepo.GetFilterBlog(1, 3, "", false);
            var blog = new MyBlogs
            {
                BlogsList = list.ToList()
            };
            return PartialView("_BlogsList", blog);
        }

        [HttpPost]
        public async Task<IActionResult> FilterBlog(int? pageNumber, string search, bool IsFilter)
        {
            var list = await _blogrepo.GetFilterBlog(pageNumber, 3, "", true);
            var blog = new MyBlogs
            {
                BlogsList = list.ToList()
            };
            return PartialView("_BlogsList", blog);
        }

        [AuthenticateUser]
        [EncryptedActionParameterAttribute]
        public IActionResult EditBlog(int? Id)
        {
            if (Id != null && Id > 0)
            {
                var blog = _blogrepo.GetBlogsById(Convert.ToInt32(Id));
                var body = "";
                using (StreamReader reader = new StreamReader(CurrentDirectoryHelpers.GetServerPath() + "/BlogFiles/Blog_" + blog.Id + ".txt"))
                {
                    body = reader.ReadToEnd();
                }
                blog.BlogBody = body;
                return View("AddBlog", blog);
            }
            else
            {
                return View("AddBlog", new Blog());
            }
        }

        [AuthenticateUser]
        public IActionResult AddBlog()
        {
            return View(new Blog());
        }

        [HttpPost]
        public JsonResult AddBlog(Blog blog, IFormFile documents, string Visibility)
        {
            var file = "";
            if (documents?.Length > 0 && documents.FileName != "")
            {
                file = FileUploads.SaveFile(documents, CurrentDirectoryHelpers.GetServerPath() + "/Uploads/BlogDocs");
            }
            string textfile = blog.BlogBody;

            var user = _userrepo.GetUserByUserId(Convert.ToInt32(this.GetUserIdCookieValue()));
            string Blogurl = HttpUtility.UrlEncode(blog.Title.Replace(' ', '-')); //Sanitizer.GetSafeHtmlFragment(blog.Title).Trim().Replace(' ', '-').Replace(".", "");
            if (blog.Tags != null)
            {
                var items = blog.Tags.Split(',');
                var NewListItems = new List<string>();
                foreach (var item in items)
                {
                    NewListItems.Add(item.Trim().Replace(".", "").Replace(" ", "-"));
                }
                blog.Tags = string.Join(",", NewListItems);
            }
            var myblog = new Blog()
            {
                Title = blog.Title,
                Tags = blog.Tags,
                BlogBody = blog.BlogBody,
                Date = DateTime.Now,
                User = new Users() { Name = user.Name, Email = user.Email, Id = user.UserID },
                BlogUrl = blog.Title.Replace(' ', '-'),
                BlogMonth = DateTime.Now.ToString("MMM-yyyy"),
                VideoEmbed = blog.VideoEmbed,
                AuthorId = Convert.ToString(user.UserID),
                BlogIntroduction = blog.BlogIntroduction,
                BlogEncodedUrl= Blogurl,
                Id = blog.Id,
                Document = file,
                IsPrivate = Visibility == "Private"
            };
            var id = _blogrepo.AddBlog(myblog);
            if (blog.Id > 0)
            {
                if (System.IO.File.Exists(CurrentDirectoryHelpers.GetServerPath() + "/BlogFiles/Blog_" + blog.Id + ".txt"))
                {
                    string fullPath = CurrentDirectoryHelpers.GetServerPath() + "/BlogFiles/Blog_" + blog.Id + ".txt";
                    using (StreamWriter writer = new StreamWriter(fullPath, false))
                    {
                        writer.WriteLine(textfile);
                    }
                }
                else
                {
                    string fullPath = CurrentDirectoryHelpers.GetServerPath() + "/BlogFiles/Blog_" + blog.Id + ".txt";
                    using (StreamWriter writer = new StreamWriter(fullPath))
                    {
                        writer.WriteLine(textfile);
                    }
                }
            }
            else
            {
                string fullPath = CurrentDirectoryHelpers.GetServerPath() + "/BlogFiles/Blog_" + id + ".txt";
                using (StreamWriter writer = new StreamWriter(fullPath))
                {
                    writer.WriteLine(textfile);
                }
            }
            CreateSiteMaps();
            return Json(new { Success = true });
        }

        [HttpPost]
        public IActionResult UploadFile(IFormFile aUploadedFile)
        {
            var vReturnImagePath = string.Empty;
            if (aUploadedFile.Length > 0)
            {
                var vFileName = Path.GetFileNameWithoutExtension(aUploadedFile.FileName);
                var vExtension = Path.GetExtension(aUploadedFile.FileName);

                string sImageName = vFileName + DateTime.Now.ToString("yyyyMMddhhmmss");

                var vImageSavePath = CurrentDirectoryHelpers.GetServerPath() + "/Uploads/" + sImageName + vExtension;
                vReturnImagePath = "/Uploads/" + sImageName + vExtension;
                var path = vImageSavePath;
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    aUploadedFile.CopyTo(stream);
                }
            }
            return Json(Convert.ToString(vReturnImagePath));
        }

        public IActionResult Logout()
        {
            Encrypt.CloseUserSession(httpContextAccessor.HttpContext);
            return RedirectToAction("Login", "Users");
        }

        [AuthenticateUser]
        public IActionResult MyBlogs()
        {
            var user = _userrepo.GetUserByUserId(Convert.ToInt32(this.GetUserIdCookieValue()));
            var myblogs = _blogrepo.GetMyBlogs(user);
            return View(myblogs);
        }


        public IActionResult MyBlog(string id)
        {
            string body = string.Empty;
            var blog = new MyBlogs
            {
                BlogsList = _blogrepo.GetBlogs()
            };
            blog.MyBlog = _blogrepo.BlogDetail(id);
            if (blog.MyBlog == null)
            {
                return RedirectToAction("Index", "Error");
            }
            else
            {
                using (StreamReader reader = new StreamReader(CurrentDirectoryHelpers.GetServerPath() + "/BlogFiles/Blog_" + blog.MyBlog.Id + ".txt"))
                {
                    body = reader.ReadToEnd();
                }
            }
            blog.MyBlog.BlogBody = body;
            return View("BlogDetail", blog);
        }

        public IActionResult Tags(string id)
        {
            var blog = new MyBlogs
            {
                BlogsList = _blogrepo.GetBlogs().Where(x => x.Tags?.Contains(id, StringComparison.OrdinalIgnoreCase) == true).ToList(),
                Tag = Sanitizer.GetSafeHtmlFragment(id)
            };
            return View("Tags", blog);
        }

        public IActionResult TagsList()
        {
            var blog = new MyBlogs
            {
                Tags = string.Join(",", _blogrepo.Tag().Select(x => x.Tags)).Split(',').ToList()
            };
            return PartialView("_Tags", blog);
        }

        public IActionResult Author(string id)
        {
            var blog = new MyBlogs
            {
                BlogsList = _blogrepo.GetBlogs().Where(x => x.AuthorId.Contains(id.Split('-')[0])).ToList(),
                Author = id.Split('-').Last(),
                AuthorDetail = _userrepo.GetUserByUserId(Convert.ToInt32(id.Split('-')[0]))
            };
            return View("Author", blog);
        }

        [AdminAuthenticateUser]
        public IActionResult Listing()
        {
            var GetBlogs = _blogrepo.GetBlogs();
            return View(GetBlogs);
        }

        [HttpGet]
        public IActionResult Delete(int Blogid)
        {
            _blogrepo.BlogDelete(Blogid);
            return RedirectToAction("Listing");
        }
        [AdminAuthenticateUser]
        [HttpGet]
        public IActionResult BlogIsApprovedDelete(int Blogid)
        {
            _blogrepo.BlogDelete(Blogid);
            return RedirectToAction("ApprovedBlogs");
        }
        [AdminAuthenticateUser]
        public IActionResult BlogIsApprovedUpdate(int Blogid)
        {
            _blogrepo.BlogIsApprovedUpdates(Blogid);
            return RedirectToAction("ApprovedBlogs");
        }

        [AdminAuthenticateUser]
        public IActionResult ApprovedBlogs()
        {
            var GetBlogs = _blogrepo.ApprovedGetBlogs();
            return View(GetBlogs);
        }
    }
}