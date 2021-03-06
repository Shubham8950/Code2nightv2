#pragma checksum "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "0a972ee54fd614c3ba8f3a6f8c04e46d19fd8fcf"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Blog_Blogs), @"mvc.1.0.view", @"/Views/Blog/Blogs.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Blog/Blogs.cshtml", typeof(AspNetCore.Views_Blog_Blogs))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
#line 2 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\_ViewImports.cshtml"
using Newtonsoft.Json;

#line default
#line hidden
#line 5 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\_ViewImports.cshtml"
using Code2Night;

#line default
#line hidden
#line 6 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\_ViewImports.cshtml"
using Code2Night.Models;

#line default
#line hidden
#line 7 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\_ViewImports.cshtml"
using Code2Night.DAL.Common;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0a972ee54fd614c3ba8f3a6f8c04e46d19fd8fcf", @"/Views/Blog/Blogs.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Blog_Blogs : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Code2Night.DAL.Common.MyBlogs>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("pull-right link"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
  
    ViewBag.Title = "Blogs";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(122, 218, true);
            WriteLiteral("<div class=\"page-intro\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li><i class=\"fa fa-home pr-10\"></i><a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 340, "\"", 375, 1);
#line 11 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
WriteAttributeValue("", 347, Url.Action("Index","Users"), 347, 28, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(376, 55, true);
            WriteLiteral(">Home</a></li>\r\n                    <li class=\"active\">");
            EndContext();
            BeginContext(432, 13, false);
#line 12 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                  Write(ViewBag.Title);

#line default
#line hidden
            EndContext();
            BeginContext(445, 321, true);
            WriteLiteral(@"</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<section class=""main-container"">
    <div class=""container"">
        <div class=""row"">
             <div class=""main col-md-12"" >
                    <div>
                    <div id=""lvCandidatestbl""  class=""masonry-grid row"">
");
            EndContext();
#line 24 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                     foreach (var blog in Model.BlogsList)
                    {

#line default
#line hidden
            BeginContext(849, 159, true);
            WriteLiteral("                            <div class=\"masonry-grid-item col-sm-6 col-md-4\" id=\"mydiv\">\r\n                                <article class=\"clearfix blogpost\">\r\n");
            EndContext();
#line 28 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                     if (!string.IsNullOrWhiteSpace( blog.VideoEmbed))
                                    {

#line default
#line hidden
            BeginContext(1135, 131, true);
            WriteLiteral("                                    <div class=\"embed-responsive embed-responsive-16by9\">\r\n                                        ");
            EndContext();
            BeginContext(1267, 25, false);
#line 31 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                   Write(Html.Raw(blog.VideoEmbed));

#line default
#line hidden
            EndContext();
            BeginContext(1292, 46, true);
            WriteLiteral("\r\n                                    </div>\r\n");
            EndContext();
#line 33 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                    }

#line default
#line hidden
            BeginContext(1377, 192, true);
            WriteLiteral("                                    <div class=\"blogpost-body\">\r\n                                        <div class=\"post-info\">\r\n                                            <span class=\"day\">");
            EndContext();
            BeginContext(1570, 24, false);
#line 36 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                                         Write(blog.Date.ToString("dd"));

#line default
#line hidden
            EndContext();
            BeginContext(1594, 73, true);
            WriteLiteral("</span>\r\n                                            <span class=\"month\">");
            EndContext();
            BeginContext(1668, 30, false);
#line 37 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                                           Write(blog.Date.ToString("MMM yyyy"));

#line default
#line hidden
            EndContext();
            BeginContext(1698, 249, true);
            WriteLiteral("</span>\r\n                                        </div>\r\n                                        <div class=\"blogpost-content\">\r\n                                            <header>\r\n                                                <h2 class=\"title\">");
            EndContext();
            BeginContext(1947, 87, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "0a972ee54fd614c3ba8f3a6f8c04e46d19fd8fcf8473", async() => {
                BeginContext(2020, 10, false);
#line 41 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                                                                                                                     Write(blog.Title);

#line default
#line hidden
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 1956, "~/Blog/MyBlog/", 1956, 14, true);
#line 41 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
AddHtmlAttributeValue("", 1970, System.Web.HttpUtility.UrlEncode(blog.BlogUrl), 1970, 47, false);

#line default
#line hidden
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2034, 114, true);
            WriteLiteral("</h2>\r\n                                                <div class=\"sdubmitted\"><i class=\"fa fa-user pr-5\"></i> by ");
            EndContext();
            BeginContext(2148, 76, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "0a972ee54fd614c3ba8f3a6f8c04e46d19fd8fcf10548", async() => {
                BeginContext(2205, 15, false);
#line 42 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                                                                                                                                              Write(blog.AuthorName);

#line default
#line hidden
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 4, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 2157, "~/Blog/Author/", 2157, 14, true);
#line 42 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
AddHtmlAttributeValue("", 2171, blog.AuthorId, 2171, 14, false);

#line default
#line hidden
            AddHtmlAttributeValue("", 2185, "-", 2185, 1, true);
#line 42 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
AddHtmlAttributeValue("", 2186, blog.AuthorName, 2186, 16, false);

#line default
#line hidden
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2224, 110, true);
            WriteLiteral("</div>\r\n                                            </header>\r\n                                            <p>");
            EndContext();
            BeginContext(2335, 23, false);
#line 44 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                          Write(Html.Raw(blog.BlogBody));

#line default
#line hidden
            EndContext();
            BeginContext(2358, 312, true);
            WriteLiteral(@"</p>
                                        </div>
                                    </div>
                                    <footer class=""clearfix"">
                                        <ul class=""links pull-left"">
                                            <li><i class=""fa fa-tags pr-5""></i>
");
            EndContext();
#line 50 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                             foreach (var str in blog.Tags.Split(',').ToList())
                                            {
                                                if (!string.IsNullOrWhiteSpace(str))
                                                {

#line default
#line hidden
            BeginContext(2951, 48, true);
            WriteLiteral("                                                ");
            EndContext();
            BeginContext(2999, 174, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "0a972ee54fd614c3ba8f3a6f8c04e46d19fd8fcf14077", async() => {
                BeginContext(3061, 3, false);
#line 54 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                                                                                        Write(str);

#line default
#line hidden
                EndContext();
                BeginContext(3064, 1, true);
                WriteLiteral(" ");
                EndContext();
                BeginContext(3067, 101, false);
#line 54 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                                                                                              Write(blog.Tags.Split(',').ToList().IndexOf(str).Equals(blog.Tags.Split(',').ToList().Count - 1) ? "" : ",");

#line default
#line hidden
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 3008, "~/blog/tags/", 3008, 12, true);
#line 54 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
AddHtmlAttributeValue("", 3020, System.Web.HttpUtility.UrlEncode(str), 3020, 38, false);

#line default
#line hidden
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3173, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 55 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                                                }
                                            }

#line default
#line hidden
            BeginContext(3273, 138, true);
            WriteLiteral("                                            </li>\r\n                                        </ul>\r\n                                        ");
            EndContext();
            BeginContext(3411, 122, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "0a972ee54fd614c3ba8f3a6f8c04e46d19fd8fcf16964", async() => {
                BeginContext(3507, 22, true);
                WriteLiteral("<span>Read more</span>");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 3444, "~/Blog/MyBlog/", 3444, 14, true);
#line 59 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
AddHtmlAttributeValue("", 3458, System.Web.HttpUtility.UrlEncode(blog.BlogUrl), 3458, 47, false);

#line default
#line hidden
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3533, 129, true);
            WriteLiteral("\r\n                                    </footer>\r\n                                </article>\r\n                            </div>\r\n");
            EndContext();
#line 63 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\Blogs.cshtml"
                    }

#line default
#line hidden
            BeginContext(3685, 182, true);
            WriteLiteral("                    </div>\r\n                </div>\r\n                <div style=\"margin:auto auto\" id=\"pagination\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public IHttpContextAccessor HttpContextAccessor { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Code2Night.DAL.Common.MyBlogs> Html { get; private set; }
    }
}
#pragma warning restore 1591
