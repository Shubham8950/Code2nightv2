#pragma checksum "F:\Code2NightCore\Code2Night\Code2Night\Views\Calendar\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4cb22fef5b0a828460f2d284ed2d5d6769090ae5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Calendar_Index), @"mvc.1.0.view", @"/Views/Calendar/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Calendar/Index.cshtml", typeof(AspNetCore.Views_Calendar_Index))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4cb22fef5b0a828460f2d284ed2d5d6769090ae5", @"/Views/Calendar/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85d4a46e63756f73e413e4d4164f7aecef7ed145", @"/Views/_ViewImports.cshtml")]
    public class Views_Calendar_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "F:\Code2NightCore\Code2Night\Code2Night\Views\Calendar\Index.cshtml"
  
    ViewBag.Title = "Index";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(86, 20, true);
            WriteLiteral("\r\n<h2>Index</h2>\r\n\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591