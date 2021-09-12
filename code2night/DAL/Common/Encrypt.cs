using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Routing;

namespace Code2Night.DAL.Common
{
    public static class Encrypt
    {
        public static string EncryptPassword(string clearText)
        {
            //  string EncryptionKey = "MAKV2SPBNI99212";
            string EncryptionKey = "MAKV2SPBNI99212";
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return clearText;
        }

        public static string DecryptPassword(string cipherText)
        {
            string EncryptionKey = "MAKV2SPBNI99212";
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

        public static void CloseUserSession(HttpContext context)
        {
            foreach (var cookie in context.Request.Cookies.Keys)
            {
                context.Response.Cookies.Delete(cookie);
            }

            context.Session.Remove("LoginUser");
        }

        public static string EncodedActionLink(this IHtmlHelper htmlHelper, string linkText, string actionName, string controllerName, object routeValues, object htmlAttributes, string iconclass)
        {
            string queryString = string.Empty;
            string htmlAttributesString = string.Empty;
            if (routeValues != null)
            {
                RouteValueDictionary d = new RouteValueDictionary(routeValues);
                for (int i = 0; i < d.Keys.Count; i++)
                {
                    if (i > 0)
                    {
                        queryString += "?";
                    }
                    queryString += d.Keys.ElementAt(i) + "=" + d.Values.ElementAt(i);
                }
            }

            if (htmlAttributes != null)
            {
                RouteValueDictionary d = new RouteValueDictionary(htmlAttributes);
                for (int i = 0; i < d.Keys.Count; i++)
                {
                    htmlAttributesString += " " + d.Keys.ElementAt(i) + "=" + d.Values.ElementAt(i);
                }
            }
            StringBuilder ancor = new StringBuilder();
            ancor.Append("<a ");
            if (htmlAttributesString != string.Empty)
            {
                ancor.Append(htmlAttributesString);
            }
            ancor.Append(" href='");
            if (controllerName != string.Empty)
            {
                ancor.Append("/" + controllerName);
            }

            if (actionName != "Index")
            {
                ancor.Append("/" + actionName);
            }
            if (queryString != string.Empty)
            {
                ancor.Append("?q=" + EncryptURL(queryString));
            }
            ancor.Append("'");
            ancor.Append(">");
            ancor.Append("<i class='" + iconclass + "'></i> ");
            ancor.Append(linkText);
            ancor.Append("");
            return ancor.ToString();
        }

        public static string EncryptURL(string clearText)
        {
            string EncryptionKey = "JUDHAAUMAKV2SPBNI99212";
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return clearText;
        }

        public static List<T> ConvertDataTableToList<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }

        public static string GetUserCookieValue(string Keyname,HttpContext context)
        {
            var cookies = context.Request.Cookies[Keyname];
            if (cookies == null)
            {
                return "0";
            }
            else
                return Convert.ToString(cookies);
        }

        private static T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (string.Equals(pro.Name, column.ColumnName, StringComparison.OrdinalIgnoreCase))
                    {
                        if (pro.PropertyType.Name == "String")
                        {
                            pro.SetValue(obj, Convert.ToString(dr[column.ColumnName]), null);
                        }
                        else if (pro.PropertyType.Name == "Int32")
                        {
                            pro.SetValue(obj, string.IsNullOrEmpty(Convert.ToString(dr[column.ColumnName])) ? 0 : Convert.ToInt32(dr[column.ColumnName]), null);
                        }
                        else
                        {
                            if (!string.IsNullOrEmpty(Convert.ToString(dr[column.ColumnName])))
                            {
                                pro.SetValue(obj, dr[column.ColumnName], null);
                            }
                        }
                    }
                    else
                    {
                        continue;
                    }
                }
            }
            return obj;
        }
    }
}