using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Dapper;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;

namespace Code2Night.DAL.Repository
{
    public class UserRepo : GenericMasterRepo<Users>, IUserRepo
    {
        public List<Users> GetUsers()
        {
            return GetAll("sprUsers", "List");
        }

        public List<string> GetExistingUserNames()
        {
            return GetAll("sprUsers", "List").Select(x => x.Username).ToList();
        }

        public List<SelectListItem> GetSkills()
        {
            return GetTableById("sprSkills", "").DataTableToList<SelectListItem>();
        }

        public Users UserLogin(string UserName, string Password)
        {
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@Activity", "Login"));
            list.Add(new SqlParameter("@UserName", UserName));
            list.Add(new SqlParameter("@Password", Encrypt(Password)));

           var userlist= GetTableByCustomParameters("sprUsers", list).DataTableToList<Users>();
            if (userlist.Any())
            {
                Users user = userlist.First();
                return user;
            }
            else
                return new Users();
        }

        public Users GetUserByUserId(int userId)
        {
            return GetTableById("sprUsers", "GetById", userId).DataTableToList<Users>().FirstOrDefault();
        }

        public void UserDelete(int userid)
        {
            Connection.Delete(userid, "sprUsers", "Delete", "UserId");
        }

        public bool ResendVerificationMail(string Email)
        {
            Guid activationCode = Guid.NewGuid();
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@Activity", "Resend"));
            list.Add(new SqlParameter("@Resend", Email));
            list.Add(new SqlParameter("@ActivationCode", activationCode));
            var userlist = GetTableByCustomParameters("sprUsers", list).DataTableToList<Users>();

            if (Convert.ToInt32(userlist) > 0)
            {
                SendVerificationLinkEmail(Email, activationCode);
                return true;
            }
            return false;
        }

        public long ActivateAccount(Guid ActivationCode)
        {
       
            var DynamicParameter = new DynamicParameters();
            DynamicParameter.Add("@Activity", "Activate");

            DynamicParameter.Add("@ActivationCode", ActivationCode);

            return Convert.ToInt64(Insert("sprUsers", DynamicParameter));
        }

        public int AddNewAccount(Users user)
        {

            var DynamicParameter = new DynamicParameters();
            DynamicParameter.Add("@Activity", "FindByMail");
            DynamicParameter.Add("@Email", user.Email);

            int exists = ExecuteScalar("sprUsers", DynamicParameter);

            Guid activationcode = Guid.NewGuid();
            user.ActivationCode = activationcode;
            user.Password = Encrypt(user.Password);
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@Password", user.Password));
            list.Add(new SqlParameter("@Email", user.Email));
            list.Add(new SqlParameter("@ContactNo", user.ContactNo));
            list.Add(new SqlParameter("@Name", user.Name));
            list.Add(new SqlParameter("@Username", user.Username));
            list.Add(new SqlParameter("@ActivationCode", user.ActivationCode));
            list.Add(new SqlParameter("@Activity", "Add"));
            list.Add(new SqlParameter("@UserRole", user.UserRole));
            list.Add(new SqlParameter("@IsActive", user.IsActive));
            list.Add(new SqlParameter("@ProfileDescription", user.ProfileDescription));
            list.Add(new SqlParameter("@Skills", user.Skills));
            list.Add(new SqlParameter("@ProfileImage", user.ProfileImage));
          
            if (exists < 1)
            {
                SendVerificationLinkEmail(user.Email, activationcode);
                SaveData("sprUsers", list);
                // users.InsertOne(user);
            }
            return exists;
        }

        private string Encrypt(string clearText)
        {
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

        private string Decrypt(string cipherText)
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

        public void SendVerificationLinkEmail(string emailID, Guid activationCode)
        {
            var verifyUrl = "https://www.code2night.com/Users/VerifyAccount/" + activationCode;
            var link = verifyUrl;

            var fromEmail = new MailAddress("info@code2night.com", "Code2night");
            var toEmail = new MailAddress(emailID);
            var fromEmailPassword = "87Lkce~2"; // Replace with actual password
            string subject = "Your account is successfully created!";

            string body = "<br/><br/>We are excited to tell you that your Code2night account is" +
                " successfully created. Please click on the below link to verify your account" +
                " <br/><br/><a href='" + link + "'>" + link + "</a> ";

            var smtp = new SmtpClient
            {
                Host = "185.52.53.206",
                Port = 587,
                EnableSsl = false,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromEmail.Address, fromEmailPassword)
            };

            using (var message = new MailMessage(fromEmail, toEmail)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
                smtp.Send(message);
        }
    }
}