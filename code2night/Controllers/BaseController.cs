using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace Code2Night.Controllers
{
    public class BaseController : Controller
    {
        public const string Urls = "https://www.code2night.com/Blog/MyBlog?id=";
        public const string Urls2 = "https://www.code2night.com/Blog/MyBlog/";
        public const string TagUrl = "https://www.code2night.com/blog/tags/";
        public const string TopicUrl = "https://www.code2night.com/Tutorials/Article/";
        public const string Urls1 = "https://code2night.com/Blog/MyBlog?id=";
        public const string TagUrl1 = "https://code2night.com/blog/tags/";
        public const string TopicUrl1 = "https://code2night.com/Tutorials/Article/";
        public const string JsonBeautifier = "https://www.code2night.com/JsonBeautifier";
        public const string HtmlBeautifier = "https://www.code2night.com/HtmlBeautifier";
        private IBlog _blogrepo;
        private ITutorial _tutorialRepo;

        public BaseController(IBlog blogrepo, ITutorial tutorialRepo)
        {
            _blogrepo = blogrepo;
            _tutorialRepo = tutorialRepo;
        }

        public void SaveCookie(string key, string value)
        {
            CookieOptions option = new CookieOptions
            {
                Expires = DateTime.Now.AddDays(1)
            };
            Response.Cookies.Append(key, value, option);
        }

        public string GetUserCookieValue(string keyName)
        {
            var cookies = Request.Cookies[keyName];
            return cookies == null ? "0" : Convert.ToString(cookies);
        }

        public void ErrorLog(string msg)
        {
            if (!Directory.Exists(Directory.GetCurrentDirectory() + "/log"))
            {
                Directory.CreateDirectory(Directory.GetCurrentDirectory() + "/log");
            }
            var filename = Directory.GetCurrentDirectory() + "/log/LogFile.txt";
            var sw = new System.IO.StreamWriter(filename, true);
            sw.WriteLine(DateTime.Now.ToString() + ": " + msg);
            sw.Close();
        }

        public void CreateSiteMaps()
        {
            try
            {
                if (System.IO.File.Exists(CurrentDirectoryHelpers.GetServerPath() + "/Sitemap.xml"))
                {
                    System.IO.File.Delete(CurrentDirectoryHelpers.GetServerPath() + "/Sitemap.xml");
                }
                var list = _blogrepo.GetBlogs();
                var tagslist = string.Join(",", _blogrepo.Tag().Select(x => x.Tags.TrimEnd(','))).TrimEnd(',').Split(',').ToList<string>();
                var sitemapItems = list.Select(x => new SitemapItem(
                Urls + System.Web.HttpUtility.UrlEncode(x.BlogUrl), lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList();
                sitemapItems.AddRange( list.Select(x => new SitemapItem(
               Urls1 + System.Web.HttpUtility.UrlEncode(x.BlogUrl), lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList());
                sitemapItems.AddRange(list.Select(x => new SitemapItem(
             Urls2 +x.BlogUrl, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList());

                var topis = _tutorialRepo.GetTopics();
                var articles = _tutorialRepo.GetArticles();

                sitemapItems.AddRange(topis.Select(x => new SitemapItem(
                TopicUrl + x.topicurl, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList());

                sitemapItems.AddRange(topis.Select(x => new SitemapItem(
                               TopicUrl1 + x.topicurl, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList());

                sitemapItems.AddRange(articles.Select(x => new SitemapItem(
               TopicUrl + x.topicurl + "/" + x.articleurl, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList());
                sitemapItems.AddRange(articles.Select(x => new SitemapItem(
              TopicUrl1 + x.topicurl + "/" + x.articleurl, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList());

                //sitemapItems.AddRange(tagslist.Select(x => new SitemapItem(
                //TagUrl + x, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList());
                //sitemapItems.AddRange(tagslist.Select(x => new SitemapItem(
                //TagUrl1 + x, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0)).ToList());
                sitemapItems.Add( new SitemapItem(
               JsonBeautifier, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0));
                sitemapItems.Add(new SitemapItem(
               HtmlBeautifier, lastModified: DateTime.Now, changeFrequency: SitemapChangeFrequency.Always, priority: 1.0));

                SitemapGenerator sg = new SitemapGenerator();
                var doc = sg.GenerateSiteMap(sitemapItems.AsEnumerable<SitemapItem>());

                doc.Save(CurrentDirectoryHelpers.GetServerPath() + "/Sitemap.xml");
            }
            catch (Exception ex)
            {
                ErrorLog(ex.Message);
            }
        }

        public string GetUserIdCookieValue()
        {
            return GetUserCookieValue("UserId");
        }

        public string GetUserEmailCookieValue()
        {
            return GetUserCookieValue("Email");
        }

        public string GetUserRoleCookieValue()
        {
            return GetUserCookieValue("Role");
        }

        public void SaveUserCookies(Users user)
        {
            SaveCookie("Email", user.Email);
            SaveCookie("UserId", Convert.ToString(user.UserID));
            SaveCookie("Role", Convert.ToString(user.UserRole));
        }
    }

    public class AuthenticateUser : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            if (!ISValidLogin(context))
            {
                context.Result = new RedirectToRouteResult(
                new RouteValueDictionary
                {
                        {"controller", "Users"},
                        {"action", "Login"}
                });
            }
        }

        public bool ISValidLogin(ActionExecutingContext context)
        {
            var cookies = context.HttpContext.Request.Cookies["UserId"];
            return cookies != null;
        }
    }

    public class AdminAuthenticateUser : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            if (!ISValidLogin(context))
            {
                context.Result = new RedirectToRouteResult(
                new RouteValueDictionary
                {
                        {"controller", "Users"},
                        {"action", "Login"}
                });
            }
        }

        public bool ISValidLogin(ActionExecutingContext context)
        {
            string value = default;
            var cookies = context.HttpContext.Request.Cookies["UserId"];
            if (cookies == null)
            {
                value = "0";
                return false;
            }
            else
            {
                value = Convert.ToString(cookies);
                return true;
            }
        }
    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class EncryptedActionParameterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (!ISValidLogin(filterContext))
            {
                filterContext.Result = new RedirectToRouteResult(
                new RouteValueDictionary
                {
                        {"controller", "Users"},
                        {"action", "Login"}
                });
                return;
            }
            Dictionary<string, object> decryptedParameters = new Dictionary<string, object>();
            if (Convert.ToString(filterContext.HttpContext.Request.Query["q"]) != "")
            {
                string encryptedQueryString = Convert.ToString(filterContext.HttpContext.Request.Query["q"]);
                string decrptedString = Decrypt(encryptedQueryString);
                string[] paramsArrs = decrptedString.Split('?');

                for (int i = 0; i < paramsArrs.Length; i++)
                {
                    string[] paramArr = paramsArrs[i].Split('=');
                    decryptedParameters.Add(paramArr[0], Convert.ToInt32(paramArr[1]));
                }
            }
            for (int i = 0; i < decryptedParameters.Count; i++)
            {
                filterContext.ActionArguments[decryptedParameters.Keys.ElementAt(i)] = decryptedParameters.Values.ElementAt(i);
            }
            base.OnActionExecuting(filterContext);
        }

        public bool ISValidLogin(ActionExecutingContext context)
        {
            var cookies = context.HttpContext.Request.Cookies["UserId"];
            return cookies != null;
        }

        private string Decrypt(string cipherText)
        {
            string EncryptionKey = "JUDHAAUMAKV2SPBNI99212";
            cipherText = cipherText.Replace(" ", "+");
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }
    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class DecodeActionParameterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
           
            Dictionary<string, object> decryptedParameters = new Dictionary<string, object>();
            if (Convert.ToString(filterContext.HttpContext.Request.Query["q"]) != "")
            {
                string encryptedQueryString = Convert.ToString(filterContext.HttpContext.Request.Query["q"]);
                string decrptedString = Decrypt(encryptedQueryString);
                string[] paramsArrs = decrptedString.Split('?');

                for (int i = 0; i < paramsArrs.Length; i++)
                {
                    string[] paramArr = paramsArrs[i].Split('=');
                    decryptedParameters.Add(paramArr[0], Convert.ToInt32(paramArr[1]));
                }
            }
            for (int i = 0; i < decryptedParameters.Count; i++)
            {
                filterContext.ActionArguments[decryptedParameters.Keys.ElementAt(i)] = decryptedParameters.Values.ElementAt(i);
            }
            base.OnActionExecuting(filterContext);
        }

        public bool ISValidLogin(ActionExecutingContext context)
        {
            var cookies = context.HttpContext.Request.Cookies["UserId"];
            return cookies != null;
        }

        private string Decrypt(string cipherText)
        {
            string EncryptionKey = "JUDHAAUMAKV2SPBNI99212";
            cipherText = cipherText.Replace(" ", "+");
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }
    }
}