#pragma checksum "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Category\index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "bee7ed35d67ae2c00eb223fc6683a9e52818da13"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Category_index), @"mvc.1.0.view", @"/Views/Category/index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Category/index.cshtml", typeof(AspNetCore.Views_Category_index))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"bee7ed35d67ae2c00eb223fc6683a9e52818da13", @"/Views/Category/index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Category_index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Code2Night.DAL.Common.Category>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Category\index.cshtml"
  
    ViewData["Title"] = "InsertCategory";
    Layout = "~/Views/Shared/_LayoutAdmin.cshtml";

#line default
#line hidden
            BeginContext(147, 237, true);
            WriteLiteral("\r\n<script type=\"text/javascript\" src=\"/plugins/jquery.min.js\"></script>\r\n<section class=\"main-container\" style=\"        margin-top: 0px;\r\n        width: 100%\r\n\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div");
            EndContext();
            BeginWriteAttribute("class", " class=\"", 384, "\"", 392, 0);
            EndWriteAttribute();
            BeginContext(393, 611, true);
            WriteLiteral(@" style=""width:100%"">
                <h2 class=""title"">Insert Category</h2>
                <hr>
                <div class=""form-horizontal"">
                    <div class=""form-group has-feedback"" style=""display:flex"">
                        <div class=""col-md-8 col-sm-12"">
                            <label for=""inputName"" class=""col-sm-3 control-label"">Category Name <span class=""text-danger small"">*</span></label>
                            <div class=""col-sm-12 col-md-12"">
                                <input type=""text"" class=""form-control"" id=""CategoryName"" placeholder=""Category Name""");
            EndContext();
            BeginWriteAttribute("required", " required=\"", 1004, "\"", 1015, 0);
            EndWriteAttribute();
            BeginContext(1016, 955, true);
            WriteLiteral(@">

                            </div>
                        </div>
                        <div class=""col-md-4 col-sm-12"">
                            <div class=""col-md-12 col-sm-12""> <input type=""submit"" style=""margin-top:31px;"" name=""buttonsubmit"" id=""InsertCategory"" onclick=""InsertCategory()"" class=""btn btn-primary"" value=""Insert Category""></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- main end -->

        </div>
    </div>
</section>
<div class=""card-body p-0"">
    <table class=""table table-striped projects"">
        <thead>
            <tr>
                <th style=""width: 1%"">
                    #
                </th>
                <th style=""width: 15%"">
                    Category
                </th>
                <th style=""width: 20%"">

                </th>
            </tr>
        </thead>
        <tbody>
");
            EndContext();
#line 54 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Category\index.cshtml"
             foreach (var item in Model)
            {

#line default
#line hidden
            BeginContext(2028, 72, true);
            WriteLiteral("                <tr>\r\n                    <td>\r\n                        ");
            EndContext();
            BeginContext(2102, 21, false);
#line 58 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Category\index.cshtml"
                    Write(Model.IndexOf(item)+1);

#line default
#line hidden
            EndContext();
            BeginContext(2124, 79, true);
            WriteLiteral("\r\n                    </td>\r\n                    <td>\r\n                        ");
            EndContext();
            BeginContext(2204, 17, false);
#line 61 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Category\index.cshtml"
                   Write(item.categoryname);

#line default
#line hidden
            EndContext();
            BeginContext(2221, 146, true);
            WriteLiteral("\r\n                    </td>\r\n                    <td class=\"project-actions text-right\">\r\n                        <a class=\"btn btn-danger btn-sm\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 2367, "\"", 2437, 1);
#line 64 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Category\index.cshtml"
WriteAttributeValue("", 2374, Url.Action("Delete", "Category", new { id = item.categoryid }), 2374, 63, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(2438, 282, true);
            WriteLiteral(@" onclick=""return confirm('Are you sure you want to Delete this category?')"">
                            <i class=""fas fa-trash"">
                            </i>
                            Delete
                        </a>
                    </td>
                </tr>
");
            EndContext();
#line 71 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Category\index.cshtml"
            }

#line default
#line hidden
            BeginContext(2735, 958, true);
            WriteLiteral(@"        </tbody>
    </table>
</div>
<script>


    $(function () {
        $(""#InsertCategory"").click(function () {
            if ($(""#CategoryName"").val().trim() == """") {
                alert(""Please insert category name."");
                return false;
            }
            else {
                $.ajax({
                    type: ""POST"",
                    url: ""/Category/InsertCategory"",
                    data: { ""categoryname"": $(""#CategoryName"").val() },
                    success: function (response) {
                        window.location.reload();

                    },
                    failure: function (response) {
                        alert(response.responseText);
                    },
                    error: function (response) {
                        alert(response.responseText);
                    }
                });
            }
        });
    });





</script>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Code2Night.DAL.Common.Category>> Html { get; private set; }
    }
}
#pragma warning restore 1591
