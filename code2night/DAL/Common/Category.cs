using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Code2Night.DAL.Common
{
    public class Category
    {
        public int categoryid { get; set; }
        [Required]
        public string categoryname { get; set; }
    }

    public class Topics
    {
        public int categoryid { get; set; }
        public string topicid { get; set; }
        [Required]
        public string title { get; set; }
        [Required]
        public string topicurl { get; set; }
        public string Image { get; set; }
        [Required]
        public string Category { get; set; }
    }
}
