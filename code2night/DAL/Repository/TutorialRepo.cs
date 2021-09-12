using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Code2Night.DAL.Repository
{
    public class TutorialRepo : GenericMasterRepo<Article>, ITutorial
    {
        public List<Tutorial> TutorialsList()
        {
            var getAllCategoryList = GetTableById("GetAllCategoryList", "").DataTableToList<Tutorial>();
            return getAllCategoryList.ToList();
        }

        public List<Article> ArticleList(string blogUrl)
        {
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@topicUrl", blogUrl));

            return GetTableByCustomParameters("GetTutorialbyid", list).DataTableToList<Article>();
        }

        public Article Article(int id)
        {
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@id", id));
            return GetTableByCustomParameters("GetArticle", list).DataTableToList<Article>().FirstOrDefault();
           
        }

        public DataSet ArticleByUrl(string topicUrl, string articleUrl)
        {
            List<SqlParameter> listParameters = new List<SqlParameter>
            {
                new SqlParameter("@topicUrl",topicUrl),
                 new SqlParameter("@articleUrl",articleUrl)
             };
            return GetDataSetByCustomParameters("GetArticleByUrl", listParameters);
        }

        public string InsertCategory(Category category)
        {
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@categoryname", category.categoryname));
            string existsornot = SaveData("insertcategory", list);
            return existsornot;
        }

        public string InsertTopic(Topics topic)
        {
            var DynamicParameter = new DynamicParameters();
            DynamicParameter.Add("@categoryid", topic.categoryid);
            DynamicParameter.Add("@title", topic.title);
            DynamicParameter.Add("@Image", topic.Image);
            DynamicParameter.Add("@topicurl", topic.topicurl);
            DynamicParameter.Add("@topicid", topic.topicid);
            DynamicParameter.Add("@Activity", topic.topicid != null && topic.topicid != "" && topic.topicid != "0" ? "Edit" : "Add");
            string existsornot = Insert("sprTopic", DynamicParameter);
            return existsornot;
        }

        public List<Category> GetCategories()
        {
            return GetTableById("sprCategory", "List").DataTableToList<Category>();
        }

        public List<Topics> GetTopics()
        {
            return GetTableById("sprTopic", "List").DataTableToList<Topics>();
        }

        public Topics GetTopicsById(int id)
        {
            return GetTableById("sprTopic", "Find", id).DataTableToList<Topics>().FirstOrDefault();
        }

        public string InsertArticle(Article article)
        {
            var DynamicParameter = new DynamicParameters();
            DynamicParameter.Add("@articletitle", article.articletitle);
            DynamicParameter.Add("@topicArticleIntroduction", article.topicArticleIntroduction);
            DynamicParameter.Add("@ArticleBody", article.ArticleBody);
            DynamicParameter.Add("@articleurl", article.articleurl);
            DynamicParameter.Add("@topicid", article.topicid);
            DynamicParameter.Add("@articleid", article.articleid);
            DynamicParameter.Add("@Activity", article.articleid > 0 ? "Edit" : "Add");
            string existsornot = Insert("sprTopicArticle", DynamicParameter);
            return existsornot;
        }

        public List<Article> GetArticles()
        {
            return GetTableById("sprTopicArticle", "List").DataTableToList<Article>();
        }

        public Article GetArticlesById(int id)
        {
            return GetTableById("sprTopicArticle", "Find", id).DataTableToList<Article>().FirstOrDefault();
        }
    }
}