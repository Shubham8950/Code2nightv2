using Code2Night.DAL.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Code2Night.Models
{
    public class AritcleViewModel
    {
        public List<Category> GetCategories { get; set; }
        public List<Topics> GetTopics { get; set; }
        public Topics TopicDetail { get; set; }
    }
    public class AritclesModel
    {
        public List<Topics> GetTopicsTitle { get; set; }
        public Article ArticleDetails { get; set; }
        public List<Article> GetArticles { get; set; }

    }
}
