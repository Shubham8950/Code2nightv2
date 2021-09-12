using System;
using System.Web.Mvc;

namespace Code2Night.DAL.Common
{
    public class Blog
    {
        public int Id { get; set; }
        public int BlogId { get; set; }
        public string Title { get; set; }
        public string Categories { get; set; }
        public DateTime Date { get; set; }
        [AllowHtml]
        public string BlogBody { get; set; }
        [AllowHtml]
        public string VideoEmbed { get; set; }
        public string BlogUrl { get; set; }
        public string BlogEncodedUrl { get; set; }
        public string BlogMonth { get; set; }
        public Users User { get; set; }
        public string Tags { get; set; }
        public string AuthorName { get; set; }
        public string AuthorId { get; set; }
        public int TotalView { get; set; }
        public string BlogIntroduction { get; set; }
        public string Document { get; set; }
        public int TotalRecords { get; set; }
        public bool IsPrivate { get; set; }
        public bool IsApproved { get; set; }

    }

    public class Tag
    {
        public string Tags { get; set; }
    }

    public class TodoItem
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsCompleted { get; set; }
        public string ToDoTime { get; set; }
        public string Color { get; set; }
    }
}