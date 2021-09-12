#pragma checksum "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d922ede82f406c238950f3c9dc5363091fe07712"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Users_UserLists), @"mvc.1.0.view", @"/Views/Users/UserLists.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Users/UserLists.cshtml", typeof(AspNetCore.Views_Users_UserLists))]
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
#line 1 "E:\Code2night v2\code2night\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
#line 2 "E:\Code2night v2\code2night\Views\_ViewImports.cshtml"
using Newtonsoft.Json;

#line default
#line hidden
#line 5 "E:\Code2night v2\code2night\Views\_ViewImports.cshtml"
using Code2Night;

#line default
#line hidden
#line 6 "E:\Code2night v2\code2night\Views\_ViewImports.cshtml"
using Code2Night.Models;

#line default
#line hidden
#line 7 "E:\Code2night v2\code2night\Views\_ViewImports.cshtml"
using Code2Night.DAL.Common;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d922ede82f406c238950f3c9dc5363091fe07712", @"/Views/Users/UserLists.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Users_UserLists : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Code2Night.DAL.Common.Users>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
  
    ViewBag.Title = "Index";
    Layout = "~/Views/Shared/_LayoutAdmin.cshtml"; 

#line default
#line hidden
            BeginContext(139, 2019, true);
            WriteLiteral(@"

    <!-- Content Header (Page header) -->
    <section class=""content-header"">
        <div class=""container-fluid"">
            <div class=""row mb-2"">
                <div class=""col-sm-6"">
                    <h1>Users</h1>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class=""content"" style=""width:100%;"">

        <!-- Default box -->
        <div class=""card"">
            <div class=""card-header"">
                <h3 class=""card-title"">Users</h3>
                <div class=""card-tools"">
                    <button type=""button"" class=""btn btn-tool"" data-card-widget=""collapse"" title=""Collapse"">
                        <i class=""fas fa-minus""></i>
                    </button>
                    <button type=""button"" class=""btn btn-tool"" data-card-widget=""remove"" title=""Remove"">
                        <i class=""fas fa-times""></i>
                    </button>
                </div>
    ");
            WriteLiteral(@"        </div>
            <div class=""card-body p-0"">
                <table class=""table table-striped projects"">
                    <thead>
                        <tr>
                            <th style=""width: 1%"">
                                #
                            </th>
                            <th style=""width: 20%"">
                                 Name
                            </th>
                            <th style=""width: 20%"">
                               Image
                            </th>
                            <th>
                                 Email
                            </th>
                            <th style=""width: 8%"" class=""text-center"">
                                Contact Number
                            </th>
                            <th style=""width: 20%"">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
");
            EndContext();
#line 59 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
                         foreach (var item in Model)
                        {

#line default
#line hidden
            BeginContext(2239, 108, true);
            WriteLiteral("                            <tr>\r\n                                <td>\r\n                                    ");
            EndContext();
            BeginContext(2348, 11, false);
#line 63 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
                               Write(item.UserID);

#line default
#line hidden
            EndContext();
            BeginContext(2359, 159, true);
            WriteLiteral("\r\n                                </td>\r\n                                <td>\r\n                                    <a>\r\n                                       ");
            EndContext();
            BeginContext(2519, 9, false);
#line 67 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
                                  Write(item.Name);

#line default
#line hidden
            EndContext();
            BeginContext(2528, 170, true);
            WriteLiteral("\r\n                                    </a>\r\n                                    <br>\r\n                                    <small>\r\n                                       ");
            EndContext();
            BeginContext(2699, 16, false);
#line 71 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
                                  Write(item.CreatedDate);

#line default
#line hidden
            EndContext();
            BeginContext(2715, 604, true);
            WriteLiteral(@"
                                    </small>
                                </td>
                                <td>
                                    <ul class=""list-inline"">
                                        <li class=""list-inline-item"">
                                            <img alt=""Avatar"" class=""table-avatar"" src=""../../dist/img/avatar.png"">
                                        </li>
                                    </ul>
                                </td>
                                <td class=""project_progress"">
                                     ");
            EndContext();
            BeginContext(3320, 10, false);
#line 82 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
                                Write(item.Email);

#line default
#line hidden
            EndContext();
            BeginContext(3330, 138, true);
            WriteLiteral("\r\n                                </td>\r\n                                <td class=\"project-state\">\r\n                                     ");
            EndContext();
            BeginContext(3469, 14, false);
#line 85 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
                                Write(item.ContactNo);

#line default
#line hidden
            EndContext();
            BeginContext(3483, 183, true);
            WriteLiteral(" \r\n                                </td>\r\n                                <td class=\"project-actions text-right\">\r\n                                    <a class=\"btn btn-danger btn-sm\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 3666, "\"", 3729, 1);
#line 88 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
WriteAttributeValue("", 3673, Url.Action("Delete", "Users", new { Id = item.UserID }), 3673, 56, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3730, 350, true);
            WriteLiteral(@" onclick=""return confirm('Are you sure you want to Delete this user?')"">
                                        <i class=""fas fa-trash"">
                                        </i>
                                        Delete
                                    </a>
                                </td>
                            </tr>
");
            EndContext();
#line 95 "E:\Code2night v2\code2night\Views\Users\UserLists.cshtml"
                        }

#line default
#line hidden
            BeginContext(4107, 193, true);
            WriteLiteral("                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!-- /.card-body -->\r\n        </div>\r\n        <!-- /.card -->\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Code2Night.DAL.Common.Users>> Html { get; private set; }
    }
}
#pragma warning restore 1591
