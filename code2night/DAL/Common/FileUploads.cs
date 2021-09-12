using Microsoft.AspNetCore.Http;
using System;
using System.IO;

namespace Code2Night.DAL.Common
{
    public static class FileUploads
    {
        private const string FileRemovedSuccesfully = "Files Removed Successfully !";
        private const string FileRemovedFailed = "Files Removed Successfully !";

        public static string SaveFile(IFormFile file, string serverpath)
        {
            string FileNameWithoutExtension = Path.GetFileNameWithoutExtension(file.FileName.Replace(" ", ""));
            if (FileNameWithoutExtension.Length > 20)
            {
                FileNameWithoutExtension = FileNameWithoutExtension.Substring(0, 15);
            }
            string filename = FileNameWithoutExtension + DateTime.Now.ToString("ddMMyyyyhhmmssfff") + Path.GetExtension(file.FileName.Replace(" ", ""));
            if (!Directory.Exists(serverpath))
            {
                Directory.CreateDirectory(serverpath);
            }
            var fullpath = Path.Combine(serverpath, filename);
            if (File.Exists(fullpath))
                File.Delete(fullpath);
            using (var stream = new FileStream(fullpath, FileMode.Create))
            {
                file.CopyTo(stream);
            }

            return filename;
        }

        public static string ReadHTMLTemplate(string path)
        {
            string filedata = "";
            using (StreamReader SourceReader = System.IO.File.OpenText(path))
            {
                filedata = SourceReader.ReadToEnd();
            }
            return filedata;
        }
    }
}