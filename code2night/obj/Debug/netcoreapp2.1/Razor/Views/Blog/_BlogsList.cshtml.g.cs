#pragma checksum "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6fc2a36e8c8e957e1004032b44302ddf58f3a2a1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Blog__BlogsList), @"mvc.1.0.view", @"/Views/Blog/_BlogsList.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Blog/_BlogsList.cshtml", typeof(AspNetCore.Views_Blog__BlogsList))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"6fc2a36e8c8e957e1004032b44302ddf58f3a2a1", @"/Views/Blog/_BlogsList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Blog__BlogsList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Code2Night.DAL.Common.MyBlogs>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", "/plugins/isotope/isotope.pkgd.min.js", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("itemprop", new global::Microsoft.AspNetCore.Html.HtmlString("author"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("itemprop", new global::Microsoft.AspNetCore.Html.HtmlString("keywords"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("pull-right link"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("itemprop", new global::Microsoft.AspNetCore.Html.HtmlString("url"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(38, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
 foreach (var item in Model.BlogsList)
{

#line default
#line hidden
            BeginContext(83, 53, true);
            WriteLiteral("    <script type=\"application/ld+json\">\r\n    {\r\n    \"");
            EndContext();
            BeginContext(137, 39, true);
            WriteLiteral("@context\" : \"http://schema.org\",\r\n    \"");
            EndContext();
            BeginContext(177, 35, true);
            WriteLiteral("@type\" : \"Article\",\r\n    \"name\" : \"");
            EndContext();
            BeginContext(213, 10, false);
#line 9 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
         Write(item.Title);

#line default
#line hidden
            EndContext();
            BeginContext(223, 22, true);
            WriteLiteral("\",\r\n    \"headline\" : \"");
            EndContext();
            BeginContext(246, 10, false);
#line 10 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
             Write(item.Title);

#line default
#line hidden
            EndContext();
            BeginContext(256, 56, true);
            WriteLiteral("\",\r\n    \"url\" : \"https://www.code2night.com/Blog/MyBlog/");
            EndContext();
            BeginContext(314, 46, false);
#line 11 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                                                Write(System.Web.HttpUtility.UrlEncode(item.BlogUrl));

#line default
#line hidden
            EndContext();
            BeginContext(361, 27, true);
            WriteLiteral("\",\r\n    \"author\" : {\r\n    \"");
            EndContext();
            BeginContext(389, 34, true);
            WriteLiteral("@type\" : \"Person\",\r\n    \"name\" : \"");
            EndContext();
            BeginContext(424, 15, false);
#line 14 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
         Write(item.AuthorName);

#line default
#line hidden
            EndContext();
            BeginContext(439, 34, true);
            WriteLiteral("\"\r\n    },\r\n    \"datePublished\" : \"");
            EndContext();
            BeginContext(474, 32, false);
#line 16 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                  Write(item.Date.ToString("yyyy-MM-dd"));

#line default
#line hidden
            EndContext();
            BeginContext(506, 28, true);
            WriteLiteral("\",\r\n    \"articleSection\" : \"");
            EndContext();
            BeginContext(535, 21, false);
#line 17 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                   Write(item.BlogIntroduction);

#line default
#line hidden
            EndContext();
            BeginContext(556, 25, true);
            WriteLiteral("\",\r\n    \"articleBody\" : \"");
            EndContext();
            BeginContext(582, 13, false);
#line 18 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                Write(item.BlogBody);

#line default
#line hidden
            EndContext();
            BeginContext(595, 30, true);
            WriteLiteral("\",\r\n    \"publisher\" : {\r\n    \"");
            EndContext();
            BeginContext(626, 82, true);
            WriteLiteral("@type\" : \"Organization\",\r\n    \"name\" : \"Code2night\"\r\n    }\r\n    }\r\n    </script>\r\n");
            EndContext();
#line 25 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
}

#line default
#line hidden
            BeginContext(711, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(713, 86, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6fc2a36e8c8e957e1004032b44302ddf58f3a2a19350", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
#line 27 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion = true;

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(799, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 28 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
 foreach (var blog in Model.BlogsList.Where(x => x.IsApproved))
{

#line default
#line hidden
            BeginContext(869, 188, true);
            WriteLiteral("    <div class=\"masonry-grid-item col-sm-6 col-md-4\" id=\"mydiv\">\r\n        <!-- blogpost start -->\r\n        <article class=\"clearfix blogpost\" itemscope itemtype=\"http://schema.org/Blog\">\r\n");
            EndContext();
            BeginContext(1301, 248, true);
            WriteLiteral("            <div class=\"blogpost-body\" style=\'max-height: 410px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 351px;\'>\r\n                <div class=\"post-info\" itemprop=\"datePublished\">\r\n                    <span class=\"day\">");
            EndContext();
            BeginContext(1550, 24, false);
#line 44 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                                 Write(blog.Date.ToString("dd"));

#line default
#line hidden
            EndContext();
            BeginContext(1574, 49, true);
            WriteLiteral("</span>\r\n                    <span class=\"month\">");
            EndContext();
            BeginContext(1624, 30, false);
#line 45 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                                   Write(blog.Date.ToString("MMM yyyy"));

#line default
#line hidden
            EndContext();
            BeginContext(1654, 173, true);
            WriteLiteral("</span>\r\n                </div>\r\n                <div class=\"blogpost-content\">\r\n                    <header>\r\n                        <h2 itemprop=\"headline\" class=\"title\">");
            EndContext();
            BeginContext(1827, 87, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6fc2a36e8c8e957e1004032b44302ddf58f3a2a112849", async() => {
                BeginContext(1900, 10, false);
#line 49 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                                                                                                                                 Write(blog.Title);

#line default
#line hidden
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 1836, "~/Blog/MyBlog/", 1836, 14, true);
#line 49 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
AddHtmlAttributeValue("", 1850, System.Web.HttpUtility.UrlEncode(blog.BlogUrl), 1850, 47, false);

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
            BeginContext(1914, 119, true);
            WriteLiteral("</h2>\r\n                        <div class=\"submitted\">\r\n                            <i class=\"fa fa-user pr-5\"></i> by ");
            EndContext();
            BeginContext(2033, 94, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6fc2a36e8c8e957e1004032b44302ddf58f3a2a114938", async() => {
                BeginContext(2108, 15, false);
#line 51 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                                                                                                                                    Write(blog.AuthorName);

#line default
#line hidden
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 4, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 2060, "~/Blog/Author/", 2060, 14, true);
#line 51 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
AddHtmlAttributeValue("", 2074, blog.AuthorId, 2074, 14, false);

#line default
#line hidden
            AddHtmlAttributeValue("", 2088, "-", 2088, 1, true);
#line 51 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
AddHtmlAttributeValue("", 2089, blog.AuthorName, 2089, 16, false);

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
            BeginContext(2127, 82, true);
            WriteLiteral("<a style=\"\r\n    color: black;\r\n    margin-left: 16px;\r\n\"><i class=\"fa fa-eye\"></i>");
            EndContext();
            BeginContext(2210, 14, false);
#line 54 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                      Write(blog.TotalView);

#line default
#line hidden
            EndContext();
            BeginContext(2224, 51, true);
            WriteLiteral("</a>\r\n</div>\r\n</header>\r\n<p itemprop=\"articleBody\">");
            EndContext();
            BeginContext(2276, 21, false);
#line 57 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                     Write(blog.BlogIntroduction);

#line default
#line hidden
            EndContext();
            BeginContext(2297, 144, true);
            WriteLiteral("</p>\r\n</div>\r\n</div>\r\n<footer class=\"clearfix\">\r\n    <ul class=\"links pull-left\">\r\n\r\n        <li>\r\n            <i class=\"fa fa-tags pr-5\"></i>\r\n");
            EndContext();
#line 65 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
             if (blog.Tags != null)
            {
                var list = blog.Tags.Split(',').ToList().Take(2).ToList();
                foreach (var str in list)
                {
                    if (!string.IsNullOrWhiteSpace(str))
                    {

#line default
#line hidden
            BeginContext(2712, 20, true);
            WriteLiteral("                    ");
            EndContext();
            BeginContext(2732, 162, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6fc2a36e8c8e957e1004032b44302ddf58f3a2a118704", async() => {
                BeginContext(2814, 21, false);
#line 72 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                                                                                                Write(str.Replace("-", " "));

#line default
#line hidden
                EndContext();
                BeginContext(2835, 1, true);
                WriteLiteral(" ");
                EndContext();
                BeginContext(2838, 51, false);
#line 72 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                                                                                                                        Write(list.IndexOf(str).Equals(list.Count - 1) ? "" : ",");

#line default
#line hidden
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 2761, "~/blog/tags/", 2761, 12, true);
#line 72 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
AddHtmlAttributeValue("", 2773, System.Web.HttpUtility.UrlEncode(str), 2773, 38, false);

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
            BeginContext(2894, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 73 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                    }
                }
            }

#line default
#line hidden
            BeginContext(2953, 30, true);
            WriteLiteral("        </li>\r\n    </ul>\r\n    ");
            EndContext();
            BeginContext(2983, 139, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6fc2a36e8c8e957e1004032b44302ddf58f3a2a121514", async() => {
                BeginContext(3096, 22, true);
                WriteLiteral("<span>Read more</span>");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "href", 2, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 3031, "~/blog/MyBlog/", 3031, 14, true);
#line 78 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
AddHtmlAttributeValue("", 3045, System.Web.HttpUtility.UrlEncode(blog.BlogUrl), 3045, 49, false);

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
            BeginContext(3122, 56, true);
            WriteLiteral("\r\n</footer>\r\n</article>\r\n<!-- blogpost end -->\r\n</div>\r\n");
            EndContext();
#line 83 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
}

#line default
#line hidden
            DefineSection("Scripts", async() => {
                BeginContext(3204, 120, true);
                WriteLiteral("\r\n    <script type=\'text/javascript\'>\r\n        $(document).ready(function () {\r\n             $(\'#hdnTotalRecords\').val(\'");
                EndContext();
                BeginContext(3326, 69, false);
#line 88 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\_BlogsList.cshtml"
                                    Write(Model.BlogsList.Any()?Model.BlogsList.FirstOrDefault().TotalRecords:0);

#line default
#line hidden
                EndContext();
                BeginContext(3396, 43, true);
                WriteLiteral("\');\r\n        });\r\n    </script>\r\n\r\n        ");
                EndContext();
            }
            );
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
