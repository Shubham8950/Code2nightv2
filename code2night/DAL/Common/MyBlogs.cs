using System.Collections.Generic;

namespace Code2Night.DAL.Common
{
    public class MyBlogs
    {
        public List<Blog> BlogsList { get; set; }
        public Blog MyBlog { get; set; }
        public string Tag { get; set; }
        public string Author { get; set; }
        public List<string> Tags { get; set; }
        public Users AuthorDetail { get; set; }
    }
}


