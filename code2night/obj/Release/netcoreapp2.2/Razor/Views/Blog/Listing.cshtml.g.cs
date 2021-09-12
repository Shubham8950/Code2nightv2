#pragma checksum "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "026948e7738f5ea55691742cc589484e74b61592"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Blog_Listing), @"mvc.1.0.view", @"/Views/Blog/Listing.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Blog/Listing.cshtml", typeof(AspNetCore.Views_Blog_Listing))]
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
#line 1 "F:\Code2NightCore\Code2Night\Code2Night\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
#line 2 "F:\Code2NightCore\Code2Night\Code2Night\Views\_ViewImports.cshtml"
using Newtonsoft.Json;

#line default
#line hidden
#line 5 "F:\Code2NightCore\Code2Night\Code2Night\Views\_ViewImports.cshtml"
using Code2Night;

#line default
#line hidden
#line 6 "F:\Code2NightCore\Code2Night\Code2Night\Views\_ViewImports.cshtml"
using Code2Night.Models;

#line default
#line hidden
#line 7 "F:\Code2NightCore\Code2Night\Code2Night\Views\_ViewImports.cshtml"
using Code2Night.DAL.Common;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"026948e7738f5ea55691742cc589484e74b61592", @"/Views/Blog/Listing.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Blog_Listing : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Code2Night.DAL.Common.Blog>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
  
    ViewBag.Title = "Index";
    Layout = "~/Views/Shared/_LayoutAdmin.cshtml";


#line default
#line hidden
            BeginContext(139, 1994, true);
            WriteLiteral(@"

<!-- Content Header (Page header) -->
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
            <table class=""table table-striped p");
            WriteLiteral(@"rojects"">
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
#line 65 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
                     foreach (var item in Model)
                    {

#line default
#line hidden
            BeginContext(2206, 96, true);
            WriteLiteral("                        <tr>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(2303, 7, false);
#line 69 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
                           Write(item.Id);

#line default
#line hidden
            EndContext();
            BeginContext(2310, 103, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(2414, 10, false);
#line 72 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
                           Write(item.Title);

#line default
#line hidden
            EndContext();
            BeginContext(2424, 141, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td>\r\n                                \r\n                                    ");
            EndContext();
            BeginContext(2566, 9, false);
#line 76 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
                               Write(item.Date);

#line default
#line hidden
            EndContext();
            BeginContext(2575, 172, true);
            WriteLiteral("\r\n                                \r\n                               \r\n\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(2748, 12, false);
#line 82 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
                           Write(item.BlogUrl);

#line default
#line hidden
            EndContext();
            BeginContext(2760, 104, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td >\r\n                                ");
            EndContext();
            BeginContext(2865, 14, false);
#line 85 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
                           Write(item.BlogMonth);

#line default
#line hidden
            EndContext();
            BeginContext(2879, 105, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td  >\r\n                                ");
            EndContext();
            BeginContext(2985, 9, false);
#line 88 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
                           Write(item.Tags);

#line default
#line hidden
            EndContext();
            BeginContext(2994, 201, true);
            WriteLiteral("\r\n                            </td>\r\n                           \r\n\r\n                            <td class=\"project-actions text-right\">\r\n                                <a class=\"btn btn-danger btn-sm\"");
            EndContext();
            BeginWriteAttribute("href", " href=\'", 3195, "\'", 3257, 1);
#line 93 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
WriteAttributeValue("", 3202, Url.Action("Delete", "Blog", new { Blogid = item.Id }), 3202, 55, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3258, 255, true);
            WriteLiteral(">\r\n                                    <i class=\"fas fa-trash\">\r\n                                    </i>\r\n                                    Delete\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n");
            EndContext();
#line 100 "F:\Code2NightCore\Code2Night\Code2Night\Views\Blog\Listing.cshtml"
                    }

#line default
#line hidden
            BeginContext(3536, 161, true);
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