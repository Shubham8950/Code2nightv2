#pragma checksum "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f723bb2339f90c93a8e0a5617237c33bda50ccbf"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Users_Login), @"mvc.1.0.view", @"/Views/Users/Login.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Users/Login.cshtml", typeof(AspNetCore.Views_Users_Login))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f723bb2339f90c93a8e0a5617237c33bda50ccbf", @"/Views/Users/Login.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Users_Login : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("type", new global::Microsoft.AspNetCore.Html.HtmlString("text/javascript"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.SingleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", "/plugins/jquery.min.js", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.SingleQuotes);
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
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml"
  
    ViewBag.Title = "Login | Code2Night.com";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(101, 95, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f723bb2339f90c93a8e0a5617237c33bda50ccbf4509", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
#line 5 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion = true;

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(196, 378, true);
            WriteLiteral(@"
<link rel=""stylesheet"" href=""https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css""  />
<div class=""page-intro"">
    <div class=""container"">
        <div class=""row"">
            <div class=""col-md-12"">
                <ol class=""breadcrumb"">
                    <li>
                        <i class=""fa fa-home pr-10""></i>
                        <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 574, "\"", 609, 1);
#line 14 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml"
WriteAttributeValue("", 581, Url.Action("Index","Users"), 581, 28, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(610, 2201, true);
            WriteLiteral(@">Home</a>
                    </li>
                    <li class=""active"">Login</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<section class=""main-container"">

    <div class=""container"">
        <div class=""row"">

            <!-- main start -->
            <!-- ================ -->
            <div class=""main object-non-visible"" data-animation-effect=""fadeInDownSmall"" data-effect-delay=""300"">
                <div class=""form-block center-block"">
                    <h1 class=""title"">Login</h1>
                    <hr>
                    <div class=""form-horizontal"">
                        <div class=""form-group has-feedback"">
                            <label for=""inputUserName"" class=""col-sm-3 control-label"">User Name</label>
                            <div class=""col-sm-8"">
                                <input type=""text"" class=""form-control"" id=""UserName"" placeholder=""User Name"" required>
                                <i class=""fa fa-user");
            WriteLiteral(@" form-control-feedback""></i>
                                <h3 id=""UserStatus""></h3>
                            </div>
                        </div>
                        <div class=""form-group has-feedback"">
                            <label for=""inputPassword"" class=""col-sm-3 control-label"">Password</label>
                            <div class=""col-sm-8"">
                                <input type=""password"" class=""form-control"" id=""Password"" placeholder=""Password"" required>
                                <i class=""fa fa-lock form-control-feedback""></i>
                            </div>
                        </div>
                        <div class=""form-group"">
                            <div class=""col-sm-offset-3 col-sm-8"">
                                <div class=""checkbox"">
                                    <label>
                                        <input id=""Remember"" type=""checkbox""> Remember me.
                                    </label>
                 ");
            WriteLiteral("               </div>\r\n                                <button type=\"submit\" onclick=\"Login()\" class=\"btn btn-group btn-default btn-sm\">Log In</button>\r\n");
            EndContext();
            BeginContext(3666, 241, true);
            WriteLiteral("                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"text-center space-top\">\r\n                    Don\'t have an account yet?\r\n                    <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 3907, "\"", 3945, 1);
#line 72 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml"
WriteAttributeValue("", 3914, Url.Action("Register","Users"), 3914, 31, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3946, 136, true);
            WriteLiteral(">Sign up</a> now.\r\n                </p>\r\n            </div>\r\n            <!-- main end -->\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(4105, 2, true);
                WriteLiteral("\r\n");
                EndContext();
                BeginContext(4107, 95, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f723bb2339f90c93a8e0a5617237c33bda50ccbf10495", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
#line 83 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion = true;

#line default
#line hidden
                __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_1.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(4202, 524, true);
                WriteLiteral(@"
    <script src=""https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"" ></script>
    <script>
       
    var Login=function()
    {
        if ($(""#UserName"").val() == """") {
            toastr.error(""Please Enter UserName !"");
           
            
            return false;
        }
        if ($(""#Password"").val() == """") {
            toastr.error(""Please Enter Password !"");
           
           
            return false;
        }
        var promises = GetAjaxDataPromise('");
                EndContext();
                BeginContext(4727, 28, false);
#line 101 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml"
                                      Write(Url.Action("Login", "Users"));

#line default
#line hidden
                EndContext();
                BeginContext(4755, 508, true);
                WriteLiteral(@"', { UserName: $(""#UserName"").val(), Password: $(""#Password"").val(), Remember: $(""#Remember"").is(""checked"") });
        promises.done(function (response) {
            console.log(response);
            if (response[0] === ""0"") {
                console.log(response);
                toastr.error(response[1]);
              
              
            }
            else {
                var data = response;
                if (data[1] == ""Admin"")
                    window.location.href = '");
                EndContext();
                BeginContext(5264, 37, false);
#line 113 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml"
                                       Write(Url.Action("index", "DashboardGraph"));

#line default
#line hidden
                EndContext();
                BeginContext(5301, 70, true);
                WriteLiteral("\';\r\n                else\r\n                    window.location.href = \'");
                EndContext();
                BeginContext(5372, 28, false);
#line 115 "E:\Code2nightv2Git\Code2nightv2\code2night\Views\Users\Login.cshtml"
                                       Write(Url.Action("index", "Users"));

#line default
#line hidden
                EndContext();
                BeginContext(5400, 117, true);
                WriteLiteral("\';\r\n            }\r\n\r\n        });\r\n        promises.fail(function (data) { console.log(data)})\r\n    }\r\n    </script>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
