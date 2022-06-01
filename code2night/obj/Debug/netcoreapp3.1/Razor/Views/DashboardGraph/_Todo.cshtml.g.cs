#pragma checksum "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6c737256cf1d7960db4584bbdec4fd73b58e7d16"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_DashboardGraph__Todo), @"mvc.1.0.view", @"/Views/DashboardGraph/_Todo.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/DashboardGraph/_Todo.cshtml", typeof(AspNetCore.Views_DashboardGraph__Todo))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"6c737256cf1d7960db4584bbdec4fd73b58e7d16", @"/Views/DashboardGraph/_Todo.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_DashboardGraph__Todo : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Code2Night.DAL.Common.HomeViewModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
 foreach (var todolists in Model.GettodoItems)
{

#line default
#line hidden
            BeginContext(95, 279, true);
            WriteLiteral(@"    <li>
        <!-- drag handle -->
        <span class=""handle"">
            <i class=""fas fa-ellipsis-v""></i>
            <i class=""fas fa-ellipsis-v""></i>
        </span>
        <!-- checkbox -->
        <div class=""icheck-primary d-inline ml-2"">
            <input");
            EndContext();
            BeginWriteAttribute("class", " class=\"", 374, "\"", 420, 1);
#line 12 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
WriteAttributeValue("", 382, Model.GettodoItems.IndexOf(todolists), 382, 38, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(421, 17, true);
            WriteLiteral(" type=\"checkbox\" ");
            EndContext();
            BeginContext(440, 38, false);
#line 12 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
                                                                              Write(todolists.IsCompleted ? "checked" : "");

#line default
#line hidden
            EndContext();
            BeginContext(479, 1, true);
            WriteLiteral(" ");
            EndContext();
            BeginContext(482, 38, false);
#line 12 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
                                                                                                                        Write(todolists.IsCompleted ? "checked" : "");

#line default
#line hidden
            EndContext();
            BeginContext(521, 8, true);
            WriteLiteral(" value=\"");
            EndContext();
            BeginContext(530, 21, false);
#line 12 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
                                                                                                                                                                        Write(todolists.IsCompleted);

#line default
#line hidden
            EndContext();
            BeginContext(551, 12, true);
            WriteLiteral("\" name=\"todo");
            EndContext();
            BeginContext(565, 37, false);
#line 12 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
                                                                                                                                                                                                           Write(Model.GettodoItems.IndexOf(todolists));

#line default
#line hidden
            EndContext();
            BeginContext(603, 16, true);
            WriteLiteral("\" id=\"todoCheck_");
            EndContext();
            BeginContext(620, 37, false);
#line 12 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
                                                                                                                                                                                                                                                                  Write(Model.GettodoItems.IndexOf(todolists));

#line default
#line hidden
            EndContext();
            BeginContext(657, 22, true);
            WriteLiteral("\">\r\n            <label");
            EndContext();
            BeginWriteAttribute("for", " for=\"", 679, "\"", 733, 2);
            WriteAttributeValue("", 685, "todoCheck_", 685, 10, true);
#line 13 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
WriteAttributeValue("", 695, Model.GettodoItems.IndexOf(todolists), 695, 38, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(734, 55, true);
            WriteLiteral("></label>\r\n        </div>\r\n        <!-- todo text -->\r\n");
            EndContext();
            BeginContext(861, 27, true);
            WriteLiteral("        <span class=\"text\">");
            EndContext();
            BeginContext(889, 18, false);
#line 17 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
                      Write(todolists.TaskName);

#line default
#line hidden
            EndContext();
            BeginContext(907, 56, true);
            WriteLiteral("</span>\r\n        <!-- Emphasis label -->\r\n        <small");
            EndContext();
            BeginWriteAttribute("class", " class=\"", 963, "\"", 987, 1);
#line 19 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
WriteAttributeValue("", 971, todolists.Color, 971, 16, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(988, 30, true);
            WriteLiteral("><i class=\"far fa-clock\"></i> ");
            EndContext();
            BeginContext(1019, 18, false);
#line 19 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
                                                                Write(todolists.ToDoTime);

#line default
#line hidden
            EndContext();
            BeginContext(1037, 127, true);
            WriteLiteral("</small>\r\n        <!-- General tools such as edit or delete-->\r\n        <div class=\"tools\">\r\n            <i class=\"fas fa-save\"");
            EndContext();
            BeginWriteAttribute("onclick", " onclick=\"", 1164, "\"", 1258, 7);
            WriteAttributeValue("", 1174, "SaveUpdateItem(\'todoCheck_", 1174, 26, true);
#line 22 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
WriteAttributeValue("", 1200, Model.GettodoItems.IndexOf(todolists), 1200, 38, false);

#line default
#line hidden
            WriteAttributeValue("", 1238, "\',", 1238, 2, true);
            WriteAttributeValue(" ", 1240, "\'", 1241, 2, true);
#line 22 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"
WriteAttributeValue("", 1242, todolists.Id, 1242, 13, false);

#line default
#line hidden
            WriteAttributeValue("", 1255, "\'", 1255, 1, true);
            WriteAttributeValue(" ", 1256, ")", 1257, 2, true);
            EndWriteAttribute();
            BeginContext(1259, 34, true);
            WriteLiteral("></i>\r\n        </div>\r\n    </li>\r\n");
            EndContext();
#line 25 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\DashboardGraph\_Todo.cshtml"

}

#line default
#line hidden
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Code2Night.DAL.Common.HomeViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
