using Code2Night.DAL.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Code2Night.DAL.Interfaces
{
    public interface IBlog
    {
        List<Blog> GetBlogs();
        Task<List<Blog>> GetBlogsAsync();
        List<Blog> GetBlogsPaging(int pageNumber = 0);
        Task<IEnumerable<Blog>> GetFilterBlog(int? pageNumber, int pageSize, string search, bool IsFilter);

        string AddBlog(Blog blog);

        List<Blog> GetMyBlogs(Users user);

        List<Tag> Tag();

        Blog BlogDetail(string name);

        void BlogDelete(int Blogid);

        List<EmployeeDashboard> EmployeeDashboards();

        DashBoardCount EmployeeDashboardsCount();

        string AddItem(TodoItem todoItem);

        string SaveUpdateItem(TodoItem todoItem);

        List<TodoItem> GetToDo();

        Blog GetBlogsById(int Id);

        List<Blog> ApprovedGetBlogs();

        string BlogIsApprovedUpdates(int Blogid);
    }
}