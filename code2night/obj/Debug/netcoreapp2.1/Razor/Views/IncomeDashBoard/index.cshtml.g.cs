#pragma checksum "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "66ecdc7d3972635ea08dfc0ffc1f7fcc88e2807a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_IncomeDashBoard_index), @"mvc.1.0.view", @"/Views/IncomeDashBoard/index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/IncomeDashBoard/index.cshtml", typeof(AspNetCore.Views_IncomeDashBoard_index))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"66ecdc7d3972635ea08dfc0ffc1f7fcc88e2807a", @"/Views/IncomeDashBoard/index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_IncomeDashBoard_index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Code2Night.DAL.Common.Income>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "Freelancer", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "Upwork", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "TranferWise", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml"
  
    ViewData["Title"] = "InsertCategory";
    Layout = "~/Views/Shared/_LayoutAdmin.cshtml";

#line default
#line hidden
            BeginContext(145, 1813, true);
            WriteLiteral(@"
<script type=""text/javascript"" src=""/plugins/jquery.min.js""></script>
<section class=""main-container"" style=""        margin-top: 0px;
        width: 100%
"">

    <div class=""container"" style=""padding: 10px 20px; border: 1px solid silver;"">
        <div class=""row"">
            <div class="""" style=""width:100%"">
                <h2 class=""title"">Income</h2>
                <hr>
                <div class=""form-horizontal"">
                    <div class=""form-group has-feedback"" >
                        <div class=""col-md-12 col-sm-12"">
                            <label for=""inputName"" class=""col-sm-3 control-label"">Amount <span class=""text-danger small"">*</span></label>
                            <div class=""col-sm-12 col-md-12"">
                                <input type=""text"" class=""form-control"" id=""Amount"" style=""max-width:350px"" placeholder=""Amount"" required="""">

                            </div>
                        </div>
                        <div class=""col-md-12 col-sm");
            WriteLiteral(@"-12"">
                            <label for=""inputName"" class=""col-sm-3 control-label"">Date <span class=""text-danger small"">*</span></label>
                            <div class=""col-sm-12 col-md-12"">
                                <input type=""date"" class=""form-control"" id=""date"" style=""max-width:350px""  placeholder=""Payment Date"" required="""">

                            </div>
                        </div>
                        <div class=""col-md-12 col-sm-12"">
                            <label for=""inputName"" class=""col-sm-3 control-label"">Mode <span class=""text-danger small"">*</span></label>
                            <div class=""col-sm-12 col-md-12"">
                              <select id=""mode"" style=""max-width:350px"" class=""form-control"" name=""Mode"">");
            EndContext();
            BeginContext(1958, 30, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "66ecdc7d3972635ea08dfc0ffc1f7fcc88e2807a6708", async() => {
                BeginContext(1966, 13, true);
                WriteLiteral("Please Select");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1988, 46, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "66ecdc7d3972635ea08dfc0ffc1f7fcc88e2807a7787", async() => {
                BeginContext(2015, 10, true);
                WriteLiteral("Freelancer");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2034, 38, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "66ecdc7d3972635ea08dfc0ffc1f7fcc88e2807a9064", async() => {
                BeginContext(2057, 6, true);
                WriteLiteral("Upwork");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2072, 48, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "66ecdc7d3972635ea08dfc0ffc1f7fcc88e2807a10336", async() => {
                BeginContext(2100, 11, true);
                WriteLiteral("TranferWise");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2120, 1140, true);
            WriteLiteral(@"</select>
                            </div>
                        </div>
                        <div class=""col-md-4 col-sm-12"">
                            <div class=""col-md-12 col-sm-12""> <input type=""submit"" style=""margin-top:31px;"" name=""buttonsubmit"" id=""InsertIncome"" onclick=""InsertIncome()"" class=""btn btn-primary"" value=""Save""></div>
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
                    Amount
                </th>
                <th style=""width: 15%"">
                    Payment Date
                </th>
                <th style=""width: 15%"">
                    Payment Mode
                </th>
    ");
            WriteLiteral("            <th style=\"width: 20%\">\r\n\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n");
            EndContext();
#line 73 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml"
             foreach (var item in Model)
            {

#line default
#line hidden
            BeginContext(3317, 60, true);
            WriteLiteral("            <tr>\r\n                <td>\r\n                    ");
            EndContext();
            BeginContext(3378, 13, false);
#line 77 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml"
               Write(item.IncomeId);

#line default
#line hidden
            EndContext();
            BeginContext(3391, 67, true);
            WriteLiteral("\r\n                </td>\r\n                <td>\r\n                    ");
            EndContext();
            BeginContext(3459, 11, false);
#line 80 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml"
               Write(item.Amount);

#line default
#line hidden
            EndContext();
            BeginContext(3470, 67, true);
            WriteLiteral("\r\n                </td>\r\n                <td>\r\n                    ");
            EndContext();
            BeginContext(3538, 40, false);
#line 83 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml"
               Write(item.PaymentDate.ToString("dd-MMM-yyyy"));

#line default
#line hidden
            EndContext();
            BeginContext(3578, 67, true);
            WriteLiteral("\r\n                </td>\r\n                <td>\r\n                    ");
            EndContext();
            BeginContext(3646, 16, false);
#line 86 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml"
               Write(item.PaymentMode);

#line default
#line hidden
            EndContext();
            BeginContext(3662, 134, true);
            WriteLiteral("\r\n                </td>\r\n                <td class=\"project-actions text-right\">\r\n                    <a class=\"btn btn-danger btn-sm\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 3796, "\"", 3871, 1);
#line 89 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml"
WriteAttributeValue("", 3803, Url.Action("Delete", "IncomeDashBoard", new { id = item.IncomeId }), 3803, 68, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3872, 258, true);
            WriteLiteral(@" onclick=""return confirm('Are you sure you want to Delete this category?')"">
                        <i class=""fas fa-trash"">
                        </i>
                        Delete
                    </a>
                </td>
            </tr>
");
            EndContext();
#line 96 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\IncomeDashBoard\index.cshtml"
            }

#line default
#line hidden
            BeginContext(4145, 1212, true);
            WriteLiteral(@"        </tbody>
    </table>
</div>
<script>

    function GetAjaxDataPromise(url, postData) {

        var promise = $.post(url, postData, function (promise, status) {
        });
        return promise;
    };
    $(function () {
        $(""#InsertIncome"").click(function () {
            if ($(""#Amount"").val().trim() == """") {
                alert(""Please Enter Amount."");
                return false;
            }
            else if ($(""#date"").val().trim() == """") {
                alert(""Please Select Payment Date."");
                return false;
            }
            else if ($(""#mode"").val().trim() == """") {
                alert(""Please Select Payment Mode."");
                return false;
            }
            else {
                var promise=GetAjaxDataPromise(""/IncomeDashBoard/InsertIncome"", { Amount: $(""#Amount"").val().trim(), PaymentDate: $(""#date"").val().trim(), PaymentMode: $(""#mode"").val().trim() });

                promise.done(function (response) {
  ");
            WriteLiteral("                  alert(\"Saved Successfully\");\r\n                    window.location.reload();\r\n                })\r\n               \r\n            }\r\n        });\r\n    });\r\n\r\n\r\n\r\n\r\n\r\n</script>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Code2Night.DAL.Common.Income>> Html { get; private set; }
    }
}
#pragma warning restore 1591
