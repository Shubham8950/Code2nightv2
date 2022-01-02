#pragma checksum "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "38202ca753eaa769c2fdc16ed7538c375bec6519"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Blog_MyBlogs), @"mvc.1.0.view", @"/Views/Blog/MyBlogs.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Blog/MyBlogs.cshtml", typeof(AspNetCore.Views_Blog_MyBlogs))]
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
#line 2 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
using Code2Night.DAL.Common;

#line default
#line hidden
#line 3 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
using System.Web.Mvc;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"38202ca753eaa769c2fdc16ed7538c375bec6519", @"/Views/Blog/MyBlogs.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Blog_MyBlogs : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Code2Night.DAL.Common.Blog>>
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
#line 4 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
  
    ViewBag.Title = "MyBlogs | Code2Night.com";
    ViewBag.MetaDescription = "Welcome To Code2night, write your own blog and reach to the whole world.";
    ViewBag.MetaKeywords = "Code2Night,Blogs,Stripe,Slick,MVC,Exception Handling,Code,Programming,Tutotials,Slick Slider,IIS,Internet Information Services";
    ViewBag.Canonical = "https://www.code2night.com/Blog/MyBlogs";
    Layout = "~/Views/Shared/_Layout.cshtml";
    var count = 1;

#line default
#line hidden
            BeginContext(550, 412, true);
            WriteLiteral(@"
<section class=""main-container"">

    <div class=""container"">
        <div class=""row"">

            <!-- main start -->
            <!-- ================ -->
            <div class=""main col-md-12"">

                <!-- page-title start -->
                <!-- ================ -->
                <h1 class=""page-title"">Your Blogs Timeline</h1>
                <div class=""separator-2""></div>
");
            EndContext();
            BeginContext(1147, 416, true);
            WriteLiteral(@"                <!-- page-title end -->

                <div class=""row"">
                    <div class=""col-md-10 col-md-offset-1"">

                        <!-- timeline start -->
                        <div class=""timeline row"">

                            <div class=""timeline-icon hidden-xs""><i class=""fa fa-angle-double-up""></i></div>


                            <!-- timeline item end -->

");
            EndContext();
#line 40 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                             foreach (var mnth in Model.OrderByDescending(x => x.Date).GroupBy(x => x.BlogMonth).Select(x => x.Key).ToList())
                            {

#line default
#line hidden
            BeginContext(1737, 74, true);
            WriteLiteral("                                <div class=\"timeline-date-label clearfix\">");
            EndContext();
            BeginContext(1812, 4, false);
#line 42 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                                                     Write(mnth);

#line default
#line hidden
            EndContext();
            BeginContext(1816, 8, true);
            WriteLiteral("</div>\r\n");
            EndContext();
#line 43 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                foreach (var item in Model.Where(x => x.BlogMonth == mnth).ToList().OrderByDescending(x => x.Date))
                                {


#line default
#line hidden
            BeginContext(1994, 40, true);
            WriteLiteral("                                    <div");
            EndContext();
            BeginWriteAttribute("class", " class=\"", 2034, "\"", 2112, 4);
            WriteAttributeValue("", 2042, "timeline-item", 2042, 13, true);
#line 46 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
WriteAttributeValue(" ", 2055, count%2==0?"pull-right":"", 2056, 29, false);

#line default
#line hidden
            WriteAttributeValue("  ", 2085, "object-non-visible", 2087, 20, true);
            WriteAttributeValue(" ", 2105, "myblog", 2106, 7, true);
            EndWriteAttribute();
            BeginContext(2113, 209, true);
            WriteLiteral(" data-animation-effect=\"fadeInUpSmall\" data-effect-delay=\"200\">\r\n                                        <!-- blogpost start -->\r\n\r\n                                        <article class=\"clearfix blogpost\">\r\n");
            EndContext();
#line 50 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                             if (item.VideoEmbed != null)
                                            {

#line default
#line hidden
            BeginContext(2444, 155, true);
            WriteLiteral("                                                <div class=\"embed-responsive embed-responsive-16by9\">\r\n                                                    ");
            EndContext();
            BeginContext(2600, 25, false);
#line 53 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                               Write(Html.Raw(item.VideoEmbed));

#line default
#line hidden
            EndContext();
            BeginContext(2625, 2, true);
            WriteLiteral("  ");
            EndContext();
            BeginContext(2725, 58, true);
            WriteLiteral("\r\n                                                </div>\r\n");
            EndContext();
#line 55 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                            }

#line default
#line hidden
            BeginContext(2830, 216, true);
            WriteLiteral("                                            <div class=\"blogpost-body\">\r\n                                                <div class=\"post-info\">\r\n                                                    <span class=\"day\">");
            EndContext();
            BeginContext(3047, 24, false);
#line 58 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                                                 Write(item.Date.ToString("dd"));

#line default
#line hidden
            EndContext();
            BeginContext(3071, 81, true);
            WriteLiteral("</span>\r\n                                                    <span class=\"month\">");
            EndContext();
            BeginContext(3153, 30, false);
#line 59 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                                                   Write(item.Date.ToString("MMM yyyy"));

#line default
#line hidden
            EndContext();
            BeginContext(3183, 284, true);
            WriteLiteral(@"</span>
                                                </div>
                                                <div class=""blogpost-content"">
                                                    <header>
                                                        <h2 class=""title""><a>");
            EndContext();
            BeginContext(3468, 10, false);
#line 63 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                                                        Write(item.Title);

#line default
#line hidden
            EndContext();
            BeginContext(3478, 137, true);
            WriteLiteral("</a></h2>\r\n                                                        <div class=\"submitted\"><i class=\"fa fa-user pr-5\"></i> by <a href=\"#\">");
            EndContext();
            BeginContext(3616, 15, false);
#line 64 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                                                                                                         Write(item.AuthorName);

#line default
#line hidden
            EndContext();
            BeginContext(3631, 142, true);
            WriteLiteral("</a></div>\r\n                                                    </header>\r\n                                                    <div id=\"body\">");
            EndContext();
            BeginContext(3774, 31, false);
#line 66 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                                              Write(Html.Raw(item.BlogIntroduction));

#line default
#line hidden
            EndContext();
            BeginContext(3805, 391, true);
            WriteLiteral(@"</div>
                                                </div>
                                            </div>
                                            <footer class=""clearfix"">
                                                <ul class=""links pull-left"" style=""display:block;width:100%"">
                                                    <li><i class=""fa fa-comment-o pr-5""></i> ");
            EndContext();
            BeginContext(4196, 59, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "38202ca753eaa769c2fdc16ed7538c375bec651912371", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 3, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 4205, "~/Blog/MyBlog?id=", 4205, 17, true);
#line 71 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
AddHtmlAttributeValue("", 4222, item.BlogUrl, 4222, 13, false);

#line default
#line hidden
            AddHtmlAttributeValue("", 4235, "#disqus_thread", 4235, 14, true);
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4255, 109, true);
            WriteLiteral(" |</li>\r\n                                                    <li><i class=\"fa fa-tags pr-5\"></i> <a href=\"#\">");
            EndContext();
            BeginContext(4366, 27, false);
#line 72 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                                                                                Write(item.Tags?.Replace("-"," "));

#line default
#line hidden
            EndContext();
            BeginContext(4394, 114, true);
            WriteLiteral("</a></li>\r\n                                                </ul>\r\n                                                ");
            EndContext();
            BeginContext(4508, 125, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "38202ca753eaa769c2fdc16ed7538c375bec651914688", async() => {
                BeginContext(4607, 22, true);
                WriteLiteral("<span>Read more</span>");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 4541, "~/Blog/MyBlog?id=", 4541, 17, true);
#line 74 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
AddHtmlAttributeValue("", 4558, System.Web.HttpUtility.UrlEncode(item.BlogUrl), 4558, 47, false);

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
            BeginContext(4634, 102, false);
#line 74 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"
                                                                                                                                                                        Write(Html.Raw(Html.EncodedActionLink("Edit", "EditBlog", "Blog", new { Id = item.Id }, null, "fa fa-edit")));

#line default
#line hidden
            EndContext();
            BeginContext(4736, 216, true);
            WriteLiteral("\r\n                                            </footer>\r\n                                        </article>\r\n                                        <!-- blogpost end -->\r\n                                    </div>\r\n");
            EndContext();
#line 79 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\MyBlogs.cshtml"


                                    count++;
                                }
                            }

#line default
#line hidden
            BeginContext(5068, 226, true);
            WriteLiteral("                            <!-- timeline item start -->\r\n\r\n\r\n\r\n                        </div>\r\n                        <!-- timeline end -->\r\n\r\n                        <div class=\"text-center\">\r\n                            <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 5294, "\"", 5301, 0);
            EndWriteAttribute();
            BeginContext(5302, 311, true);
            WriteLiteral(@" class=""btn btn-default"">Load more</a>
                        </div>

                    </div>
                </div>

            </div>
            <!-- main end -->

        </div>
    </div>
    <script id=""dsq-count-scr"" src=""//codetonight.disqus.com/count.js"" async></script>
</section>

");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Code2Night.DAL.Common.Blog>> Html { get; private set; }
    }
}
#pragma warning restore 1591
