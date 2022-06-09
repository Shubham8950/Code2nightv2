using System;
using System.IO;
using System.IO.Compression;
using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Code2Night.DAL.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;

namespace Code2Night
{
    public class Startup
    {
        public IConfigurationRoot Configuration
        {
            get;
            set;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.Configure<CookiePolicyOptions>(options =>
            //{
            //    options.CheckConsentNeeded = context => false;
            //    options.MinimumSameSitePolicy = Microsoft.AspNetCore.Http.SameSiteMode.None;
            //});
            services.ConfigureApplicationCookie(options =>
            {
                // Cookie settings
                options.Cookie.HttpOnly = true;
                options.ExpireTimeSpan = TimeSpan.FromDays(1);

                options.SlidingExpiration = true;
            });
            services.AddMvc().AddSessionStateTempDataProvider();
            services.AddSession();
            services.Configure<GzipCompressionProviderOptions>(options =>
            {
                options.Level = CompressionLevel.Fastest;
            });
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            //services.AddMvc();
            services.AddRazorPages();
            services.AddTransient<IBlog, BlogRepo>();
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IFeedback, FeedbackRepo>();
            services.AddScoped<ISitemapGenerator, SitemapGenerator>();
            services.AddScoped<ITutorial, TutorialRepo>();
            services.AddScoped<IIncome, IncomeRepo>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseExceptionHandler(a => a.Run(async context =>
            {
                var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
                var exception = exceptionHandlerPathFeature.Error;
                if (!Directory.Exists(env.ContentRootPath + "\\App_Data\\log\\"))
                {
                    Directory.CreateDirectory(env.ContentRootPath + "\\App_Data\\log\\");
                }
                var filename = env.ContentRootPath + "\\App_Data\\" + "log\\" + "Logerror.txt";
                var sw = new System.IO.StreamWriter(filename, true);
                sw.WriteLine(DateTime.Now.ToString() + " " + exception.Message + " " + exception.InnerException + " " + exception.StackTrace + " " + exception.Source);
                sw.Close();
                var result = JsonConvert.SerializeObject(new { error = exception.Message });
                context.Response.ContentType = "application/json";

                await context.Response.WriteAsync(result);
                app.UseExceptionHandler("/Error/Index");
            }));
            app.UseHsts();
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
            app.UseSession();
            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    const int durationInSeconds = 60 * 60 * 24 * 365;
                    ctx.Context.Response.Headers[HeaderNames.CacheControl] =
                        "public,max-age=" + durationInSeconds;
                }
            });
            if (!Directory.Exists(Path.Combine(CurrentDirectoryHelpers.GetServerPath(), "Uploads")))
                Directory.CreateDirectory(Path.Combine(CurrentDirectoryHelpers.GetServerPath(), "Uploads"));
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(CurrentDirectoryHelpers.GetServerPath(), "Uploads")),
                RequestPath = "/Uploads",
                OnPrepareResponse = ctx =>
                {
                    const int durationInSeconds = 60 * 60 * 24 * 365;
                    ctx.Context.Response.Headers[HeaderNames.CacheControl] =
                        "public,max-age=" + durationInSeconds;
                }
            });
            app.UseCookiePolicy();
            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller=Users}/{action=index}/{id?}");
            //});
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "Default",
                    pattern: "{controller=Users}/{action=index}/{id?}");
            });
        }
    }
}
