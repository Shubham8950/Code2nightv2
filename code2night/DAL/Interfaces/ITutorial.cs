using Code2Night.DAL.Common;
using System.Collections.Generic;
using System.Data;

namespace Code2Night.DAL.Interfaces
{
    public interface ITutorial
    {
        List<Tutorial> TutorialsList();

        List<Article> ArticleList(string blogUrl);

        Article Article(int blogUrl);

        DataSet ArticleByUrl(string topicUrl, string articleUrl);

        string InsertCategory(Category category);

        string InsertTopic(Topics topic);

        List<Category> GetCategories();

        List<Topics> GetTopics();

        Topics GetTopicsById(int id);

        string InsertArticle(Article article);

        List<Article> GetArticles();

        Article GetArticlesById(int id);
    }
}