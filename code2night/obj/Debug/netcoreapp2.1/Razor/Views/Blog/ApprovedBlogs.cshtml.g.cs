#pragma checksum "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e14256515a03fda057173f2afa8fc0c4df3c0deb"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Blog_ApprovedBlogs), @"mvc.1.0.view", @"/Views/Blog/ApprovedBlogs.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Blog/ApprovedBlogs.cshtml", typeof(AspNetCore.Views_Blog_ApprovedBlogs))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e14256515a03fda057173f2afa8fc0c4df3c0deb", @"/Views/Blog/ApprovedBlogs.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Blog_ApprovedBlogs : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Code2Night.DAL.Common.Blog>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
  
    ViewBag.Title = "Index";
    Layout = "~/Views/Shared/_LayoutAdmin.cshtml";


#line default
#line hidden
            BeginContext(139, 1990, true);
            WriteLiteral(@"<!-- Content Header (Page header) -->
<section class=""content-header"">
    <div class=""container-fluid"">
        <div class=""row mb-2"">
            <div class=""col-sm-6"">
                <h1>Blogs</h1>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class=""content"" style=""width:100%;"">

    <!-- Default box -->
    <div class=""card"">
        <div class=""card-header"">
            <h3 class=""card-title"">Blogs</h3>
            <div class=""card-tools"">
                <button type=""button"" class=""btn btn-tool"" data-card-widget=""collapse"" title=""Collapse"">
                    <i class=""fas fa-minus""></i>
                </button>
                <button type=""button"" class=""btn btn-tool"" data-card-widget=""remove"" title=""Remove"">
                    <i class=""fas fa-times""></i>
                </button>
            </div>
        </div>
        <div class=""card-body p-0"">
            <table class=""table table-striped proje");
            WriteLiteral(@"cts"">
                <thead>
                    <tr>
                        <th style=""width: 1%"">
                            #
                        </th>
                        <th style=""width: 15%"">
                            Title
                        </th>
                        <th style=""width: 15%"">
                            Blog Date
                        </th>
                        <th style=""width: 15%"">
                            Blog URL
                        </th>
                        <th style=""width: 15%"">
                            Blog Month
                        </th>
                        <th style=""width: 15%"">
                            Tags
                        </th>
                       
                        <th style=""width: 20%"">
                           
                        </th>
                    </tr>
                </thead>
                <tbody>
");
            EndContext();
#line 63 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
                     foreach (var item in Model)
                    {

#line default
#line hidden
            BeginContext(2202, 96, true);
            WriteLiteral("                        <tr>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(2299, 7, false);
#line 67 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
                           Write(item.Id);

#line default
#line hidden
            EndContext();
            BeginContext(2306, 103, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(2410, 10, false);
#line 70 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
                           Write(item.Title);

#line default
#line hidden
            EndContext();
            BeginContext(2420, 141, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td>\r\n                                \r\n                                    ");
            EndContext();
            BeginContext(2562, 9, false);
#line 74 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
                               Write(item.Date);

#line default
#line hidden
            EndContext();
            BeginContext(2571, 172, true);
            WriteLiteral("\r\n                                \r\n                               \r\n\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(2744, 12, false);
#line 80 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
                           Write(item.BlogUrl);

#line default
#line hidden
            EndContext();
            BeginContext(2756, 104, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td >\r\n                                ");
            EndContext();
            BeginContext(2861, 14, false);
#line 83 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
                           Write(item.BlogMonth);

#line default
#line hidden
            EndContext();
            BeginContext(2875, 105, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td  >\r\n                                ");
            EndContext();
            BeginContext(2981, 9, false);
#line 86 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
                           Write(item.Tags);

#line default
#line hidden
            EndContext();
            BeginContext(2990, 201, true);
            WriteLiteral("\r\n                            </td>\r\n                           \r\n\r\n                            <td class=\"project-actions text-right\">\r\n                                <a class=\"btn btn-danger btn-sm\"");
            EndContext();
            BeginWriteAttribute("href", " href=\'", 3191, "\'", 3253, 1);
#line 91 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
WriteAttributeValue("", 3198, Url.Action("Delete", "Blog", new { Blogid = item.Id }), 3198, 55, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3254, 325, true);
            WriteLiteral(@" onclick=""return confirm('Are you sure you want to Delete this blog?')"">
                                    <i class=""fas fa-trash"">
                                    </i>
                                    Delete
                                </a>
                                <a class=""btn btn-success btn-sm""");
            EndContext();
            BeginWriteAttribute("href", " href=\'", 3579, "\'", 3655, 1);
#line 96 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
WriteAttributeValue("", 3586, Url.Action("BlogIsApprovedUpdate", "Blog", new { Blogid = item.Id }), 3586, 69, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3656, 329, true);
            WriteLiteral(@" onclick=""return confirm('Are you sure you want to approved this blog?')"">
                                    <i class=""fas fa-check"">
                                    </i>
                                    Approved
                                </a>
                                <a class=""btn btn-success btn-sm""");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 3985, "\"", 4064, 1);
#line 101 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
WriteAttributeValue("", 3992, Url.Action("ViewBlogToApproved", "Blog", new { Blogid = item.BlogUrl }), 3992, 72, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(4065, 330, true);
            WriteLiteral(@" onclick=""return confirm('Are you sure you want to Delete this blog?')"">
                                    <i class=""fas fa-street-view"">
                                    </i>
                                    View
                                </a>
                            </td>
                        </tr>
");
            EndContext();
#line 108 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Blog\ApprovedBlogs.cshtml"
                    }

#line default
#line hidden
            BeginContext(4418, 161, true);
            WriteLiteral("                </tbody>\r\n            </table>\r\n        </div>\r\n        <!-- /.card-body -->\r\n    </div>\r\n    <!-- /.card -->\r\n\r\n</section>\r\n<!-- /.content -->\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Code2Night.DAL.Common.Blog>> Html { get; private set; }
    }
}
#pragma warning restore 1591
