using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Code2Night.DAL.Repository
{
    public class BlogRepo : GenericMasterRepo<Blog>, IBlog
    {
        public List<Blog> GetBlogs()
        {
            var blog =  GetTableById("sprBlogs", "ListBlogFile").DataTableToList<Blog>();
            return blog;
        }
        public async Task<List<Blog>> GetBlogsAsync()
        {

            return (await GetTableByIdAsync("sprBlogs", "ListBlogFile")).DataTableToList<Blog>(); 
        }

        public async Task<IEnumerable<Blog>> GetFilterBlog(int? pageNumber = 1, int pageSize = 3, string search = "", bool IsFilter = false)
        {
            var DynamicParameter = new DynamicParameters();
            DynamicParameter.Add("@pageSize", pageSize);
            DynamicParameter.Add("@IsFilter", IsFilter);
            DynamicParameter.Add("@pageNumber", pageNumber);
            DynamicParameter.Add("@search", search);
            return await GetListAsync("sprBlogFilter", DynamicParameter);
        }

        public Blog GetBlogsById(int Id)
        {
            return GetTableById("sprBlogs", "BlogsById", Id).DataTableToList<Blog>().FirstOrDefault();
        }

        public void BlogDelete(int Id)
        {
            Connection.Delete(Id, "sprBlogs", "Delete", "Id");
        }

        public List<Blog> ApprovedGetBlogs()
        {
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@Activity", "ApprovedListBlogFile"));
           
            var blogList = GetTableByCustomParameters("sprBlogs", list).DataTableToList<Blog>();

            return blogList;
        }

        public string BlogIsApprovedUpdates(int Blogid)
        {
            bool IsApproved = false;
            if (Blogid != 0)
            {
                IsApproved = true;
            }
            var com = new SqlCommand("BlogIsApprovedUpdate");
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@Id", Blogid);
            com.Parameters.AddWithValue("@IsApproved", IsApproved);
            return Connection.ExecuteNonQuery(com);
        }

        public List<Blog> GetMyBlogs(Users user)
        {
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@Activity", "BlogsByUser"));
            list.Add(new SqlParameter("@UserId", user.UserID));
            var blogList = GetTableByCustomParameters("sprBlogs", list).DataTableToList<Blog>();
            return blogList;
        }

        public List<Tag> Tag()
        {
            return GetTableById("sprTags", "List").DataTableToList<Tag>();
        }

        public Blog BlogDetail(string name)
        {
            List<SqlParameter> list = new List<SqlParameter>();
            list.Add(new SqlParameter("@Activity", "BlogsByURL"));
            list.Add(new SqlParameter("@BlogUrl", name));
            var blogList = GetTableByCustomParameters("sprBlogs", list).DataTableToList<Blog>();
            return blogList.FirstOrDefault();
        }

        public string AddBlog(Blog blog)
        {
            var adp = new SqlDataAdapter("sprBlogs", Connection.sqlConStr);
            adp.SelectCommand.CommandType = System.Data.CommandType.StoredProcedure;
            adp.SelectCommand.Parameters.AddWithValue("@Activity", blog.Id > 0 ? "Edit" : "Add");
            adp.SelectCommand.Parameters.AddWithValue("@BlogUrl", blog.BlogUrl);
            adp.SelectCommand.Parameters.AddWithValue("@UserID", blog.User.Id);
            adp.SelectCommand.Parameters.AddWithValue("@BlogMonth", blog.BlogMonth);
            adp.SelectCommand.Parameters.AddWithValue("@BlogBody", blog.BlogBody);
            adp.SelectCommand.Parameters.AddWithValue("@Title", blog.Title);
            adp.SelectCommand.Parameters.AddWithValue("@Categories", blog.Categories);
            adp.SelectCommand.Parameters.AddWithValue("@Tags", blog.Tags);
            adp.SelectCommand.Parameters.AddWithValue("@BlogIntroduction", blog.BlogIntroduction);
            adp.SelectCommand.Parameters.AddWithValue("@Document", blog.Document);
            adp.SelectCommand.Parameters.AddWithValue("@VideoEmbed", blog.VideoEmbed);
            adp.SelectCommand.Parameters.AddWithValue("@IsPrivate", blog.IsPrivate);
            adp.SelectCommand.Parameters.AddWithValue("@BlogEncodedUrl", blog.BlogEncodedUrl);
            adp.SelectCommand.Parameters.AddWithValue("@Id", blog.Id);
            DataTable dt = new DataTable();
            adp.Fill(dt);
            adp.SelectCommand.Connection.Close();
            adp.Dispose();
            return Convert.ToString(dt.Rows[0][0]);
        }

        public List<EmployeeDashboard> EmployeeDashboards()
        {
            return GetTableById("TrafficWeeklyGraph", "").DataTableToList<EmployeeDashboard>();
        }

        public DashBoardCount EmployeeDashboardsCount()
        {
            return GetTableById("sprDashBoardView", "").DataTableToList<DashBoardCount>().FirstOrDefault();
        }

        public string AddItem(TodoItem toDoItem)
        {
            var com = new SqlCommand("TaskToDos");
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@TaskName", toDoItem.TaskName);
            return Connection.ExecuteNonQuery(com);
        }

        public List<TodoItem> GetToDo()
        {
            return GetTableById("GetToDo", "").DataTableToList<TodoItem>();
        }

        public string SaveUpdateItem(TodoItem todoItem)
        {
            if (todoItem.IsCompleted)
            {
            }
            var com = new SqlCommand("SaveUpdateItem");
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@Id", todoItem.Id);
            com.Parameters.AddWithValue("@IsCompleted", todoItem.IsCompleted);
            return Connection.ExecuteNonQuery(com);
        }
    }
}