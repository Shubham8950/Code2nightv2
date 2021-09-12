using System;
using System.Collections.Generic;
using System.Linq;

namespace Code2Night.DAL.Common
{
    public class SlideShow
    {
        // [BsonId(IdGenerator = typeof(ObjectIdGenerator))]
        public object Id { get; set; }

        public string Title { get; set; }
        public string Tagline { get; set; }
        public string Logo { get; set; }
    }
}