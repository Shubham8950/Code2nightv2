#pragma checksum "F:\code2night18012021\Views\Tutorials\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c92a08d3183a100d970c4fab0621a6283bd28f8c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Tutorials_Index), @"mvc.1.0.view", @"/Views/Tutorials/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Tutorials/Index.cshtml", typeof(AspNetCore.Views_Tutorials_Index))]
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
#line 1 "F:\code2night18012021\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
#line 2 "F:\code2night18012021\Views\_ViewImports.cshtml"
using Newtonsoft.Json;

#line default
#line hidden
#line 5 "F:\code2night18012021\Views\_ViewImports.cshtml"
using Code2Night;

#line default
#line hidden
#line 6 "F:\code2night18012021\Views\_ViewImports.cshtml"
using Code2Night.Models;

#line default
#line hidden
#line 7 "F:\code2night18012021\Views\_ViewImports.cshtml"
using Code2Night.DAL.Common;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c92a08d3183a100d970c4fab0621a6283bd28f8c", @"/Views/Tutorials/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Tutorials_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Code2Night.DAL.Common.Tutorial>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("front no-trans"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(52, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "F:\code2night18012021\Views\Tutorials\Index.cshtml"
  
    ViewBag.Title = "Index";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(138, 198, true);
            WriteLiteral("<link href=\"/plugins/magnific-popup/magnific-popup.css\" rel=\"stylesheet\">\r\n<link href=\"/css/animations.css\" rel=\"stylesheet\">\r\n<link href=\"/plugins/owl-carousel/owl.carousel.css\" rel=\"stylesheet\">\r\n");
            EndContext();
            BeginContext(336, 1798, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c92a08d3183a100d970c4fab0621a6283bd28f8c4355", async() => {
                BeginContext(365, 459, true);
                WriteLiteral(@"
    <div class=""scrollToTop""><i class=""icon-up-open-big""></i></div>
    <div class=""page-wrapper"">
        <div class=""section clearfix"">
                <div class=""container"">
                 <div class=""row"">
                    <div>
                        <h2>Learn</h2>
                        <div class=""separator-2""></div>
                        <div class=""space-bottom""></div>
                        <div class=""row grid-space-20"">
");
                EndContext();
#line 21 "F:\code2night18012021\Views\Tutorials\Index.cshtml"
                             foreach (var item in Model)
                            {

#line default
#line hidden
                BeginContext(913, 415, true);
                WriteLiteral(@"                                <div class=""col-md-4"">
                                    <div class=""image-box mb-20 object-non-visible"" data-animation-effect=""fadeInLeft"" data-effect-delay=""300"">
                                        <div class=""overlay-container"">
                                            <img src=""Content/images/portfolio-1.jpg"" alt="""">
                                            <a");
                EndContext();
                BeginWriteAttribute("href", " href=\"", 1328, "\"", 1397, 1);
#line 27 "F:\code2night18012021\Views\Tutorials\Index.cshtml"
WriteAttributeValue("", 1335, Url.Action("Article", "Tutorials",new { id = item.topicurl }), 1335, 62, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1398, 155, true);
                WriteLiteral(" class=\"overlay small\">\r\n                                                <i class=\"fa fa-link\"></i>\r\n                                                <span>");
                EndContext();
                BeginContext(1554, 10, false);
#line 29 "F:\code2night18012021\Views\Tutorials\Index.cshtml"
                                                 Write(item.title);

#line default
#line hidden
                EndContext();
                BeginContext(1564, 172, true);
                WriteLiteral("</span>\r\n                                            </a>\r\n                                        </div>\r\n                                        <a style=\"font-size:16px\"");
                EndContext();
                BeginWriteAttribute("href", " href=\"", 1736, "\"", 1805, 1);
#line 32 "F:\code2night18012021\Views\Tutorials\Index.cshtml"
WriteAttributeValue("", 1743, Url.Action("Article", "Tutorials",new { id = item.topicurl }), 1743, 62, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1806, 45, true);
                WriteLiteral(" class=\"btn btn-light-gray btn-lg btn-block\">");
                EndContext();
                BeginContext(1852, 10, false);
#line 32 "F:\code2night18012021\Views\Tutorials\Index.cshtml"
                                                                                                                                                                               Write(item.title);

#line default
#line hidden
                EndContext();
                BeginContext(1862, 90, true);
                WriteLiteral("</a>\r\n                                    </div>\r\n                                </div>\r\n");
                EndContext();
#line 35 "F:\code2night18012021\Views\Tutorials\Index.cshtml"

                            }

#line default
#line hidden
                BeginContext(1985, 142, true);
                WriteLiteral("                        </div>\r\n                    </div>\r\n                    </div>  \r\n                </div>\r\n        </div>\r\n    </div>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2134, 10, true);
            WriteLiteral("\r\n\r\n\r\n\r\n\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Code2Night.DAL.Common.Tutorial>> Html { get; private set; }
    }
}
#pragma warning restore 1591