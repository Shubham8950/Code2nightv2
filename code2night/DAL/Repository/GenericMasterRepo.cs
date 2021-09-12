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
    public abstract class GenericMasterRepo<T> : IGenericMaster<T> where T : class
    {
        public IDbConnection DapperCon
        {
            get
            {
                return new Connection().GetConnection();
            }
        }

        public List<T> GetAll(string spname, string Activity)
        {
            List<T> objlist = new List<T>();
            Connection objCon = new Connection();
            SqlConnection con = objCon.GetConnection();
            if (con.State == ConnectionState.Open)
            {
                con.Close();
            }
            else
            {
                con.Open();
            }
            var list = new List<T>();
            SqlCommand cmd = new SqlCommand();
            cmd.CommandTimeout = 200000;
            cmd.Connection = con;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = spname;
            if (!string.IsNullOrEmpty(Activity))
                cmd.Parameters.AddWithValue("@Activity", Activity);
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            adp.Fill(dt);
            objlist = Encrypt.ConvertDataTableToList<T>(dt);
            con.Close();
            return objlist;
        }

        public IEnumerable<T> GetList(string spname, DynamicParameters param)
        {
            using (IDbConnection db = DapperCon)
            {
                DapperCon.Open();
                var list= db.Query<T>(spname, param, commandType: CommandType.StoredProcedure);
                DapperCon.Close();
                return list;
            }
        }

        public DataTable GetTableByCustomParameters(string spname, List<SqlParameter> Parameters = null)
        {
            Connection conn = new Connection();
            using (SqlConnection con = new SqlConnection(Connection.sqlConStr))
            {
                DataTable dt = new DataTable();
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }
                try
                {
                    SqlDataAdapter adp = new SqlDataAdapter(spname, con);
                    adp.SelectCommand.CommandType = CommandType.StoredProcedure;
                    adp.SelectCommand.Parameters.AddRange(Parameters.ToArray());

                    adp.Fill(dt);
                    adp.Dispose();
                    con.Close();
                }
                catch (Exception ex)
                {
                    return new DataTable();
                }
                finally
                {
                    con.Close();
                }
                return dt;
            }
       
        }

        public string SaveData(string spname, List<SqlParameter> Parameters = null)
        {
            using (SqlConnection con = new SqlConnection(Connection.sqlConStr))
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }
                try
                {
                    SqlCommand cmd = new SqlCommand(spname, con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddRange(Parameters.ToArray());
                    return Connection.ExecuteNonQuery(cmd);
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }
                finally
                {
                    con.Close();
                }
            }
        }

        public DataSet GetDataSetByCustomParameters(string spname, List<SqlParameter> Parameters = null)
        {
            Connection conn = new Connection();
               DataSet ds = new DataSet();
            using (SqlConnection con = conn.GetConnection())
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }
                SqlDataAdapter adp = new SqlDataAdapter(spname, con);
                adp.SelectCommand.CommandType = CommandType.StoredProcedure;
                adp.SelectCommand.Parameters.AddRange(Parameters.ToArray());
             
                adp.Fill(ds);
                adp.Dispose();
                con.Close();
            }
            return ds;
        }

        public async Task<IEnumerable<T>> GetListAsync(string spname, DynamicParameters param)
        {
            using (IDbConnection db = DapperCon)
            {
                DapperCon.Open();
                var data= await db.QueryAsync<T>(spname, param, commandType: CommandType.StoredProcedure).ConfigureAwait(false);
                DapperCon.Close();
                return data;
            }
        }

        public List<T> GetListOptimized(string spname, string Activity, int? Id = 0)
        {
            using (IDbConnection db = DapperCon)
            {
                DapperCon.Open();
                var queryParameters = new DynamicParameters();
                if (!string.IsNullOrEmpty(Activity))
                    queryParameters.Add("@Activity", Activity);
                if (Id != 0)
                    queryParameters.Add("@id", Id);
                var list= db.Query<T>(spname, queryParameters, commandType: CommandType.StoredProcedure).ToList<T>();
                DapperCon.Close();
                return list;
            }
        }

        public T GetRecordsById(string spname, string Activity, int id)
        {
            List<T> objlist = new List<T>();
            Connection objCon = new Connection();
            using (SqlConnection con = objCon.GetConnection())
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }

                SqlCommand cmd = new SqlCommand
                {
                    CommandTimeout = 2000,
                    Connection = con,
                    CommandType = CommandType.StoredProcedure,
                    CommandText = spname
                };
                cmd.Parameters.AddWithValue("@id", id);
                if (!string.IsNullOrEmpty(Activity))
                    cmd.Parameters.AddWithValue("@Activity", Activity);
                SqlDataAdapter adp = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                adp.Fill(dt);
                objlist = Encrypt.ConvertDataTableToList<T>(dt);
                con.Close();
            }
            return objlist.FirstOrDefault();
        }

        public DataTable GetTableById(string spname, string Activity, int? id = 0)
        {
            DataTable dt = new DataTable();
            Connection objCon = new Connection();
            using (SqlConnection con = objCon.GetConnection())
            {
                
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }
                SqlCommand cmd = new SqlCommand
                {
                    CommandTimeout = 2000,
                    Connection = con,
                    CommandType = CommandType.StoredProcedure,
                    CommandText = spname
                };
                if (id != 0)
                    cmd.Parameters.AddWithValue("@id", id);
                if (!string.IsNullOrEmpty(Activity))
                    cmd.Parameters.AddWithValue("@Activity", Activity);
                SqlDataAdapter adp = new SqlDataAdapter(cmd);
            
                adp.Fill(dt);
                con.Close();
            }
            return dt;
        }

        public async Task<DataTable> GetTableByIdAsync(string spname, string Activity, int? id = 0)
        {
            DataTable dt = new DataTable();
            Connection objCon = new Connection();
            using (SqlConnection con = objCon.GetConnection())
            {

                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }
                SqlCommand cmd = new SqlCommand
                {
                    CommandTimeout = 2000,
                    Connection = con,
                    CommandType = CommandType.StoredProcedure,
                    CommandText = spname
                };
                if (id != 0)
                    cmd.Parameters.AddWithValue("@id", id);
                if (!string.IsNullOrEmpty(Activity))
                    cmd.Parameters.AddWithValue("@Activity", Activity);
                SqlDataAdapter adp = new SqlDataAdapter(cmd);

                adp.Fill(dt);
                con.Close();
            }
            return dt;
        }

        public DataSet GetDataSetById(string spname, string Activity, int? id = 0)
        {
            Connection objCon = new Connection();
            DataSet dt = new DataSet();
            using (SqlConnection con = objCon.GetConnection())
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }

                SqlCommand cmd = new SqlCommand
                {
                    CommandTimeout = 2000,
                    Connection = con,
                    CommandType = CommandType.StoredProcedure,
                    CommandText = spname
                };
                if (id != 0)
                    cmd.Parameters.AddWithValue("@id", id);
                if (!string.IsNullOrEmpty(Activity))
                    cmd.Parameters.AddWithValue("@Activity", Activity);
                SqlDataAdapter adp = new SqlDataAdapter(cmd);
              
                adp.Fill(dt);
                con.Close();
            }
            return dt;
        }

        public List<T> GetAllById(string spname, string Activity, int? id)
        {
            List<T> objlist = new List<T>();
            Connection objCon = new Connection();
            DataTable dt = new DataTable();
            using (SqlConnection con = objCon.GetConnection())
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }

                SqlCommand cmd = new SqlCommand
                {
                    CommandTimeout = 200000,
                    Connection = con,
                    CommandType = CommandType.StoredProcedure,
                    CommandText = spname
                };
                if (id != 0)
                    cmd.Parameters.AddWithValue("@id", id);
                if (!string.IsNullOrEmpty(Activity))
                    cmd.Parameters.AddWithValue("@Activity", Activity);
                SqlDataAdapter adp = new SqlDataAdapter(cmd);
              
                adp.Fill(dt);
                objlist = Encrypt.ConvertDataTableToList<T>(dt);
                con.Close();
            }
            return objlist;
        }

        public string Insert(string spname, DynamicParameters param)
        {
            using (IDbConnection db = DapperCon)
            {
                DapperCon.Open();
                var result = db.Execute(spname, param, commandType: CommandType.StoredProcedure);
                DapperCon.Close();
                return Convert.ToString(result);
            }
        }

        public int ExecuteScalar(string spname, DynamicParameters param)
        {
            using (IDbConnection db = DapperCon)
            {
                DapperCon.Open();
                var result = db.ExecuteScalar(spname, param, commandType: CommandType.StoredProcedure);
                DapperCon.Close();
                return Convert.ToInt32(result);
            }
        }

        public List<T> GetAllByUserId(string spname, string Activity, string id)
        {
            List<T> objlist = new List<T>();
            Connection objCon = new Connection();
            DataTable dt = new DataTable();
            using (SqlConnection con = objCon.GetConnection())
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
                else
                {
                    con.Open();
                }

                SqlCommand cmd = new SqlCommand();
                cmd.CommandTimeout = 200000;
                cmd.Connection = con;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = spname;
                cmd.Parameters.AddWithValue("@id", id);
                if (!string.IsNullOrEmpty(Activity))
                    cmd.Parameters.AddWithValue("@Activity", Activity);
                SqlDataAdapter adp = new SqlDataAdapter(cmd);
           
                adp.Fill(dt);
                objlist = Encrypt.ConvertDataTableToList<T>(dt);
                con.Close();
            }

            return objlist;
        }
    }
}