/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/**
 * Super simple wysiwyg editor v0.8.11
 * https://summernote.org
 *
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 *
 * Date: 2018-11-24T12:13Z
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.jQuery));
}(this, (function ($$1) { 'use strict';

  $$1 = $$1 && $$1.hasOwnProperty('default') ? $$1['default'] : $$1;

  var Renderer = /** @class */ (function () {
      function Renderer(markup, children, options, callback) {
          this.markup = markup;
          this.children = children;
          this.options = options;
          this.callback = callback;
      }
      Renderer.prototype.render = function ($parent) {
          var $node = $$1(this.markup);
          if (this.options && this.options.contents) {
              $node.html(this.options.contents);
          }
          if (this.options && this.options.className) {
              $node.addClass(this.options.className);
          }
          if (this.options && this.options.data) {
              $$1.each(this.options.data, function (k, v) {
                  $node.attr('data-' + k, v);
              });
          }
          if (this.options && this.options.click) {
              $node.on('click', this.options.click);
          }
          if (this.children) {
              var $container_1 = $node.find('.note-children-container');
              this.children.forEach(function (child) {
                  child.render($container_1.length ? $container_1 : $node);
              });
          }
          if (this.callback) {
              this.callback($node, this.options);
          }
          if (this.options && this.options.callback) {
              this.options.callback($node);
          }
          if ($parent) {
              $parent.append($node);
          }
          return $node;
      };
      return Renderer;
  }());
  var renderer = {
      create: function (markup, callback) {
          return function () {
              var options = typeof arguments[1] === 'object' ? arguments[1] : arguments[0];
              var children = $$1.isArray(arguments[0]) ? arguments[0] : [];
              if (options && options.children) {
                  children = options.children;
              }
              return new Renderer(markup, children, options, callback);
          };
      }
  };

  var editor = renderer.create('<div class="note-editor note-frame panel panel-default"/>');
  var toolbar = renderer.create('<div class="note-toolbar panel-heading" role="toolbar"></div></div>');
  var editingArea = renderer.create('<div class="note-editing-area"/>');
  var codable = renderer.create('<textarea class="note-codable" role="textbox" aria-multiline="true"/>');
  var editable = renderer.create('<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>');
  var statusbar = renderer.create([
      '<output class="note-status-output" aria-live="polite"/>',
      '<div class="note-statusbar" role="status">',
      '  <div class="note-resizebar" role="seperator" aria-orientation="horizontal" aria-label="Resize">',
      '    <div class="note-icon-bar"/>',
      '    <div class="note-icon-bar"/>',
      '    <div class="note-icon-bar"/>',
      '  </div>',
      '</div>'
  ].join(''));
  var airEditor = renderer.create('<div class="note-editor"/>');
  var airEditable = renderer.create([
      '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>',
      '<output class="note-status-output" aria-live="polite"/>'
  ].join(''));
  var buttonGroup = renderer.create('<div class="note-btn-group btn-group">');
  var dropdown = renderer.create('<ul class="dropdown-menu" role="list">', function ($node, options) {
      var markup = $$1.isArray(options.items) ? options.items.map(function (item) {
          var value = (typeof item === 'string') ? item : (item.value || '');
          var content = options.template ? options.template(item) : item;
          var option = (typeof item === 'object') ? item.option : undefined;
          var dataValue = 'data-value="' + value + '"';
          var dataOption = (option !== undefined) ? ' data-option="' + option + '"' : '';
          return '<li role="listitem" aria-label="' + item + '"><a href="#" ' + (dataValue + dataOption) + '>' + content + '</a></li>';
      }).join('') : options.items;
      $node.html(markup).attr({ 'aria-label': options.title });
  });
  var dropdownButtonContents = function (contents, options) {
      return contents + ' ' + icon(options.icons.caret, 'span');
  };
  var dropdownCheck = renderer.create('<ul class="dropdown-menu note-check" role="list">', function ($node, options) {
      var markup = $$1.isArray(options.items) ? options.items.map(function (item) {
          var value = (typeof item === 'string') ? item : (item.value || '');
          var content = options.template ? options.template(item) : item;
          return '<li role="listitem" aria-label="' + item + '"><a href="#" data-value="' + value + '">' + icon(options.checkClassName) + ' ' + content + '</a></li>';
      }).join('') : options.items;
      $node.html(markup).attr({ 'aria-label': options.title });
  });
  var palette = renderer.create('<div class="note-color-palette"/>', function ($node, options) {
      var contents = [];
      for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
          var eventName = options.eventName;
          var colors = options.colors[row];
          var colorsName = options.colorsName[row];
          var buttons = [];
          for (var col = 0, colSize = colors.length; col < colSize; col++) {
              var color = colors[col];
              var colorName = colorsName[col];
              buttons.push([
                  '<button type="button" class="note-color-btn"',
                  'style="background-color:', color, '" ',
                  'data-event="', eventName, '" ',
                  'data-value="', color, '" ',
                  'title="', colorName, '" ',
                  'aria-label="', colorName, '" ',
                  'data-toggle="button" tabindex="-1"></button>'
              ].join(''));
          }
          contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
      }
      $node.html(contents.join(''));
      if (options.tooltip) {
          $node.find('.note-color-btn').tooltip({
              container: options.container,
              trigger: 'hover',
              placement: 'bottom'
          });
      }
  });
  var dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function ($node, options) {
      if (options.fade) {
          $node.addClass('fade');
      }
      $node.attr({
          'aria-label': options.title
      });
      $node.html([
          '<div class="modal-dialog">',
          '  <div class="modal-content">',
          (options.title
              ? '    <div class="modal-header">' +
                  '      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>' +
                  '      <h4 class="modal-title">' + options.title + '</h4>' +
                  '    </div>' : ''),
          '    <div class="modal-body">' + options.body + '</div>',
          (options.footer
              ? '    <div class="modal-footer">' + options.footer + '</div>' : ''),
          '  </div>',
          '</div>'
      ].join(''));
  });
  var popover = renderer.create([
      '<div class="note-popover popover in">',
      '  <div class="arrow"/>',
      '  <div class="popover-content note-children-container"/>',
      '</div>'
  ].join(''), function ($node, options) {
      var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';
      $node.addClass(direction);
      if (options.hCode2nightrrow) {
          $node.find('.arrow').hide();
      }
  });
  var checkbox = renderer.create('<div class="checkbox"></div>', function ($node, options) {
      $node.html([
          '<label' + (options.id ? ' for="' + options.id + '"' : '') + '>',
          ' <input role="checkbox" type="checkbox"' + (options.id ? ' id="' + options.id + '"' : ''),
          (options.checked ? ' checked' : ''),
          ' aria-checked="' + (options.checked ? 'true' : 'false') + '"/>',
          (options.text ? options.text : ''),
          '</label>'
      ].join(''));
  });
  var icon = function (iconClassName, tagName) {
      tagName = tagName || 'i';
      return '<' + tagName + ' class="' + iconClassName + '"/>';
  };
  var ui = {
      editor: editor,
      toolbar: toolbar,
      editingArea: editingArea,
      codable: codable,
      editable: editable,
      statusbar: statusbar,
      airEditor: airEditor,
      airEditable: airEditable,
      buttonGroup: buttonGroup,
      dropdown: dropdown,
      dropdownButtonContents: dropdownButtonContents,
      dropdownCheck: dropdownCheck,
      palette: palette,
      dialog: dialog,
      popover: popover,
      checkbox: checkbox,
      icon: icon,
      options: {},
      button: function ($node, options) {
          return renderer.create('<button type="button" class="note-btn btn btn-default btn-sm" role="button" tabindex="-1">', function ($node, options) {
              if (options && options.tooltip) {
                  $node.attr({
                      title: options.tooltip,
                      'aria-label': options.tooltip
                  }).tooltip({
                      container: (options.container !== undefined) ? options.container : 'body',
                      trigger: 'hover',
                      placement: 'bottom'
                  });
              }
          })($node, options);
      },
      toggleBtn: function ($btn, isEnable) {
          $btn.toggleClass('disabled', !isEnable);
          $btn.attr('disabled', !isEnable);
      },
      toggleBtnActive: function ($btn, isActive) {
          $btn.toggleClass('active', isActive);
      },
      onDialogShown: function ($dialog, handler) {
          $dialog.one('shown.bs.modal', handler);
      },
      onDialogHidden: function ($dialog, handler) {
          $dialog.one('hidden.bs.modal', handler);
      },
      showDialog: function ($dialog) {
          $dialog.modal('show');
      },
      hideDialog: function ($dialog) {
          $dialog.modal('hide');
      },
      createLayout: function ($note, options) {
          var $editor = (options.airMode ? ui.airEditor([
              ui.editingArea([
                  ui.airEditable()
              ])
          ]) : ui.editor([
              ui.toolbar(),
              ui.editingArea([
                  ui.codable(),
                  ui.editable()
              ]),
              ui.statusbar()
          ])).render();
          $editor.insertAfter($note);
          return {
              note: $note,
              editor: $editor,
              toolbar: $editor.find('.note-toolbar'),
              editingArea: $editor.find('.note-editing-area'),
              editable: $editor.find('.note-editable'),
              codable: $editor.find('.note-codable'),
              statusbar: $editor.find('.note-statusbar')
          };
      },
      removeLayout: function ($note, layoutInfo) {
          $note.html(layoutInfo.editable.html());
          layoutInfo.editor.remove();
          $note.show();
      }
  };

  /**
   * @class core.func
   *
   * func utils (for high-order func's arg)
   *
   * @singleton
   * @alternateClassName func
   */
  function eq(itemA) {
      return function (itemB) {
          return itemA === itemB;
      };
  }
  function eq2(itemA, itemB) {
      return itemA === itemB;
  }
  function peq2(propName) {
      return function (itemA, itemB) {
          return itemA[propName] === itemB[propName];
      };
  }
  function ok() {
      return true;
  }
  function fail() {
      return false;
  }
  function not(f) {
      return function () {
          return !f.apply(f, arguments);
      };
  }
  function and(fA, fB) {
      return function (item) {
          return fA(item) && fB(item);
      };
  }
  function self(a) {
      return a;
  }
  function invoke(obj, method) {
      return function () {
          return obj[method].apply(obj, arguments);
      };
  }
  var idCounter = 0;
  /**
   * generate a globally-unique id
   *
   * @param {String} [prefix]
   */
  function uniqueId(prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
  }
  /**
   * returns bnd (bounds) from rect
   *
   * - IE Compatibility Issue: http://goo.gl/sRLOAo
   * - Scroll Issue: http://goo.gl/sNjUc
   *
   * @param {Rect} rect
   * @return {Object} bounds
   * @return {Number} bounds.top
   * @return {Number} bounds.left
   * @return {Number} bounds.width
   * @return {Number} bounds.height
   */
  function rect2bnd(rect) {
      var $document = $(document);
      return {
          top: rect.top + $document.scrollTop(),
          left: rect.left + $document.scrollLeft(),
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
      };
  }
  /**
   * returns a copy of the object where the keys have become the values and the values the keys.
   * @param {Object} obj
   * @return {Object}
   */
  function invertObject(obj) {
      var inverted = {};
      for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
              inverted[obj[key]] = key;
          }
      }
      return inverted;
  }
  /**
   * @param {String} namespace
   * @param {String} [prefix]
   * @return {String}
   */
  function namespaceToCamel(namespace, prefix) {
      prefix = prefix || '';
      return prefix + namespace.split('.').map(function (name) {
          return name.substring(0, 1).toUpperCase() + name.substring(1);
      }).join('');
  }
  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing.
   * @param {Function} func
   * @param {Number} wait
   * @param {Boolean} immediate
   * @return {Function}
   */
  function debounce(func, wait, immediate) {
      var timeout;
      return function () {
          var context = this;
          var args = arguments;
          var later = function () {
              timeout = null;
              if (!immediate) {
                  func.apply(context, args);
              }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) {
              func.apply(context, args);
          }
      };
  }
  var func = {
      eq: eq,
      eq2: eq2,
      peq2: peq2,
      ok: ok,
      fail: fail,
      self: self,
      not: not,
      and: and,
      invoke: invoke,
      uniqueId: uniqueId,
      rect2bnd: rect2bnd,
      invertObject: invertObject,
      namespaceToCamel: namespaceToCamel,
      debounce: debounce
  };

  /**
   * returns the first item of an array.
   *
   * @param {Array} array
   */
  function head(array) {
      return array[0];
  }
  /**
   * returns the last item of an array.
   *
   * @param {Array} array
   */
  function last(array) {
      return array[array.length - 1];
  }
  /**
   * returns everything but the last entry of the array.
   *
   * @param {Array} array
   */
  function initial(array) {
      return array.slice(0, array.length - 1);
  }
  /**
   * returns the rest of the items in an array.
   *
   * @param {Array} array
   */
  function tail(array) {
      return array.slice(1);
  }
  /**
   * returns item of array
   */
  function find(array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx++) {
          var item = array[idx];
          if (pred(item)) {
              return item;
          }
      }
  }
  /**
   * returns true if all of the values in the array pass the predicate truth test.
   */
  function all(array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx++) {
          if (!pred(array[idx])) {
              return false;
          }
      }
      return true;
  }
  /**
   * returns index of item
   */
  function indexOf(array, item) {
      return $$1.inArray(item, array);
  }
  /**
   * returns true if the value is present in the list.
   */
  function contains(array, item) {
      return indexOf(array, item) !== -1;
  }
  /**
   * get sum from a list
   *
   * @param {Array} array - array
   * @param {Function} fn - iterator
   */
  function sum(array, fn) {
      fn = fn || func.self;
      return array.reduce(function (memo, v) {
          return memo + fn(v);
      }, 0);
  }
  /**
   * returns a copy of the collection with array type.
   * @param {Collection} collection - collection eg) node.childNodes, ...
   */
  function from(collection) {
      var result = [];
      var length = collection.length;
      var idx = -1;
      while (++idx < length) {
          result[idx] = collection[idx];
      }
      return result;
  }
  /**
   * returns whether list is empty or not
   */
  function isEmpty(array) {
      return !array || !array.length;
  }
  /**
   * cluster elements by predicate function.
   *
   * @param {Array} array - array
   * @param {Function} fn - predicate function for cluster rule
   * @param {Array[]}
   */
  function clusterBy(array, fn) {
      if (!array.length) {
          return [];
      }
      var aTail = tail(array);
      return aTail.reduce(function (memo, v) {
          var aLast = last(memo);
          if (fn(last(aLast), v)) {
              aLast[aLast.length] = v;
          }
          else {
              memo[memo.length] = [v];
          }
          return memo;
      }, [[head(array)]]);
  }
  /**
   * returns a copy of the array with all false values removed
   *
   * @param {Array} array - array
   * @param {Function} fn - predicate function for cluster rule
   */
  function compact(array) {
      var aResult = [];
      for (var idx = 0, len = array.length; idx < len; idx++) {
          if (array[idx]) {
              aResult.push(array[idx]);
          }
      }
      return aResult;
  }
  /**
   * produces a duplicate-free version of the array
   *
   * @param {Array} array
   */
  function unique(array) {
      var results = [];
      for (var idx = 0, len = array.length; idx < len; idx++) {
          if (!contains(results, array[idx])) {
              results.push(array[idx]);
          }
      }
      return results;
  }
  /**
   * returns next item.
   * @param {Array} array
   */
  function next(array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) {
          return null;
      }
      return array[idx + 1];
  }
  /**
   * returns prev item.
   * @param {Array} array
   */
  function prev(array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) {
          return null;
      }
      return array[idx - 1];
  }
  /**
   * @class core.list
   *
   * list utils
   *
   * @singleton
   * @alternateClassName list
   */
  var lists = {
      head: head,
      last: last,
      initial: initial,
      tail: tail,
      prev: prev,
      next: next,
      find: find,
      contains: contains,
      all: all,
      sum: sum,
      from: from,
      isEmpty: isEmpty,
      clusterBy: clusterBy,
      compact: compact,
      unique: unique
  };

  var isSupportAmd = typeof define === 'function' && define.amd; // eslint-disable-line
  /**
   * returns whether font is installed or not.
   *
   * @param {String} fontName
   * @return {Boolean}
   */
  function isFontInstalled(fontName) {
      var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
      var $tester = $$1('<div>').css({
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          fontSize: '200px'
      }).text('mmmmmmmmmwwwwwww').appendTo(document.body);
      var originalWidth = $tester.css('fontFamily', testFontName).width();
      var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();
      $tester.remove();
      return originalWidth !== width;
  }
  var userAgent = navigator.userAgent;
  var isMSIE = /MSIE|Trident/i.test(userAgent);
  var browserVersion;
  if (isMSIE) {
      var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
      if (matches) {
          browserVersion = parseFloat(matches[1]);
      }
      matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);
      if (matches) {
          browserVersion = parseFloat(matches[1]);
      }
  }
  var isEdge = /Edge\/\d+/.test(userAgent);
  var hasCodeMirror = !!window.CodeMirror;
  if (!hasCodeMirror && isSupportAmd) {
      // Webpack
      if (typeof __webpack_require__ === 'function') { // eslint-disable-line
          try {
              // If CodeMirror can't be resolved, `require.resolve` will throw an
              // exception and `hasCodeMirror` won't be set to `true`.
              require.resolve('codemirror');
              hasCodeMirror = true;
          }
          catch (e) {
              // do nothing
          }
      }
      else if (typeof require !== 'undefined') {
          // Browserify
          if (typeof require.resolve !== 'undefined') {
              try {
                  // If CodeMirror can't be resolved, `require.resolve` will throw an
                  // exception and `hasCodeMirror` won't be set to `true`.
                  require.resolve('codemirror');
                  hasCodeMirror = true;
              }
              catch (e) {
                  // do nothing
              }
              // Almond/Require
          }
          else if (typeof require.specified !== 'undefined') {
              hasCodeMirror = require.specified('codemirror');
          }
      }
  }
  var isSupportTouch = (('ontouchstart' in window) ||
      (navigator.MaxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  // [workaround] IE doesn't have input events for contentEditable
  // - see: https://goo.gl/4bfIvA
  var inputEventName = (isMSIE || isEdge) ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
  /**
   * @class core.env
   *
   * Object which check platform and agent
   *
   * @singleton
   * @alternateClassName env
   */
  var env = {
      isMac: navigator.appVersion.indexOf('Mac') > -1,
      isMSIE: isMSIE,
      isEdge: isEdge,
      isFF: !isEdge && /firefox/i.test(userAgent),
      isPhantom: /PhantomJS/i.test(userAgent),
      isWebkit: !isEdge && /webkit/i.test(userAgent),
      isChrome: !isEdge && /chrome/i.test(userAgent),
      isSafari: !isEdge && /safari/i.test(userAgent),
      browserVersion: browserVersion,
      jqueryVersion: parseFloat($$1.fn.jquery),
      isSupportAmd: isSupportAmd,
      isSupportTouch: isSupportTouch,
      hasCodeMirror: hasCodeMirror,
      isFontInstalled: isFontInstalled,
      isW3CRangeSupport: !!document.createRange,
      inputEventName: inputEventName
  };

  var NBSP_CHAR = String.fromCharCode(160);
  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';
  /**
   * @method isEditable
   *
   * returns whether node is `note-editable` or not.
   *
   * @param {Node} node
   * @return {Boolean}
   */
  function isEditable(node) {
      return node && $$1(node).hasClass('note-editable');
  }
  /**
   * @method isControlSizing
   *
   * returns whether node is `note-control-sizing` or not.
   *
   * @param {Node} node
   * @return {Boolean}
   */
  function isControlSizing(node) {
      return node && $$1(node).hasClass('note-control-sizing');
  }
  /**
   * @method makePredByNodeName
   *
   * returns predicate which judge whether nodeName is same
   *
   * @param {String} nodeName
   * @return {Function}
   */
  function makePredByNodeName(nodeName) {
      nodeName = nodeName.toUpperCase();
      return function (node) {
          return node && node.nodeName.toUpperCase() === nodeName;
      };
  }
  /**
   * @method isText
   *
   *
   *
   * @param {Node} node
   * @return {Boolean} true if node's type is text(3)
   */
  function isText(node) {
      return node && node.nodeType === 3;
  }
  /**
   * @method isElement
   *
   *
   *
   * @param {Node} node
   * @return {Boolean} true if node's type is element(1)
   */
  function isElement(node) {
      return node && node.nodeType === 1;
  }
  /**
   * ex) br, col, embed, hr, img, input, ...
   * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
   */
  function isVoid(node) {
      return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^VIDEO|^EMBED/.test(node.nodeName.toUpperCase());
  }
  function isPara(node) {
      if (isEditable(node)) {
          return false;
      }
      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
  }
  function isHeading(node) {
      return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
  }
  var isPre = makePredByNodeName('PRE');
  var isLi = makePredByNodeName('LI');
  function isPurePara(node) {
      return isPara(node) && !isLi(node);
  }
  var isTable = makePredByNodeName('TABLE');
  var isData = makePredByNodeName('DATA');
  function isInline(node) {
      return !isBodyContainer(node) &&
          !isList(node) &&
          !isHr(node) &&
          !isPara(node) &&
          !isTable(node) &&
          !isBlockquote(node) &&
          !isData(node);
  }
  function isList(node) {
      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
  }
  var isHr = makePredByNodeName('HR');
  function isCell(node) {
      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
  }
  var isBlockquote = makePredByNodeName('BLOCKQUOTE');
  function isBodyContainer(node) {
      return isCell(node) || isBlockquote(node) || isEditable(node);
  }
  var isAnchor = makePredByNodeName('A');
  function isParaInline(node) {
      return isInline(node) && !!ancestor(node, isPara);
  }
  function isBodyInline(node) {
      return isInline(node) && !ancestor(node, isPara);
  }
  var isBody = makePredByNodeName('BODY');
  /**
   * returns whether nodeB is closest sibling of nodeA
   *
   * @param {Node} nodeA
   * @param {Node} nodeB
   * @return {Boolean}
   */
  function isClosestSibling(nodeA, nodeB) {
      return nodeA.nextSibling === nodeB ||
          nodeA.previousSibling === nodeB;
  }
  /**
   * returns array of closest siblings with node
   *
   * @param {Node} node
   * @param {function} [pred] - predicate function
   * @return {Node[]}
   */
  function withClosestSiblings(node, pred) {
      pred = pred || func.ok;
      var siblings = [];
      if (node.previousSibling && pred(node.previousSibling)) {
          siblings.push(node.previousSibling);
      }
      siblings.push(node);
      if (node.nextSibling && pred(node.nextSibling)) {
          siblings.push(node.nextSibling);
      }
      return siblings;
  }
  /**
   * blank HTML for cursor position
   * - [workaround] old IE only works with &nbsp;
   * - [workaround] IE11 and other browser works with bogus br
   */
  var blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';
  /**
   * @method nodeLength
   *
   * returns #text's text size or element's childNodes size
   *
   * @param {Node} node
   */
  function nodeLength(node) {
      if (isText(node)) {
          return node.nodeValue.length;
      }
      if (node) {
          return node.childNodes.length;
      }
      return 0;
  }
  /**
   * returns whether node is empty or not.
   *
   * @param {Node} node
   * @return {Boolean}
   */
  function isEmpty$1(node) {
      var len = nodeLength(node);
      if (len === 0) {
          return true;
      }
      else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
          // ex) <p><br></p>, <span><br></span>
          return true;
      }
      else if (lists.all(node.childNodes, isText) && node.innerHTML === '') {
          // ex) <p></p>, <span></span>
          return true;
      }
      return false;
  }
  /**
   * padding blankHTML if node is empty (for cursor position)
   */
  function paddingBlankHTML(node) {
      if (!isVoid(node) && !nodeLength(node)) {
          node.innerHTML = blankHTML;
      }
  }
  /**
   * find nearest ancestor predicate hit
   *
   * @param {Node} node
   * @param {Function} pred - predicate function
   */
  function ancestor(node, pred) {
      while (node) {
          if (pred(node)) {
              return node;
          }
          if (isEditable(node)) {
              break;
          }
          node = node.parentNode;
      }
      return null;
  }
  /**
   * find nearest ancestor only single child blood line and predicate hit
   *
   * @param {Node} node
   * @param {Function} pred - predicate function
   */
  function singleChildAncestor(node, pred) {
      node = node.parentNode;
      while (node) {
          if (nodeLength(node) !== 1) {
              break;
          }
          if (pred(node)) {
              return node;
          }
          if (isEditable(node)) {
              break;
          }
          node = node.parentNode;
      }
      return null;
  }
  /**
   * returns new array of ancestor nodes (until predicate hit).
   *
   * @param {Node} node
   * @param {Function} [optional] pred - predicate function
   */
  function listAncestor(node, pred) {
      pred = pred || func.fail;
      var ancestors = [];
      ancestor(node, function (el) {
          if (!isEditable(el)) {
              ancestors.push(el);
          }
          return pred(el);
      });
      return ancestors;
  }
  /**
   * find farthest ancestor predicate hit
   */
  function lastAncestor(node, pred) {
      var ancestors = listAncestor(node);
      return lists.last(ancestors.filter(pred));
  }
  /**
   * returns common ancestor node between two nodes.
   *
   * @param {Node} nodeA
   * @param {Node} nodeB
   */
  function commonAncestor(nodeA, nodeB) {
      var ancestors = listAncestor(nodeA);
      for (var n = nodeB; n; n = n.parentNode) {
          if ($$1.inArray(n, ancestors) > -1) {
              return n;
          }
      }
      return null; // difference document area
  }
  /**
   * listing all previous siblings (until predicate hit).
   *
   * @param {Node} node
   * @param {Function} [optional] pred - predicate function
   */
  function listPrev(node, pred) {
      pred = pred || func.fail;
      var nodes = [];
      while (node) {
          if (pred(node)) {
              break;
          }
          nodes.push(node);
          node = node.previousSibling;
      }
      return nodes;
  }
  /**
   * listing next siblings (until predicate hit).
   *
   * @param {Node} node
   * @param {Function} [pred] - predicate function
   */
  function listNext(node, pred) {
      pred = pred || func.fail;
      var nodes = [];
      while (node) {
          if (pred(node)) {
              break;
          }
          nodes.push(node);
          node = node.nextSibling;
      }
      return nodes;
  }
  /**
   * listing descendant nodes
   *
   * @param {Node} node
   * @param {Function} [pred] - predicate function
   */
  function listDescendant(node, pred) {
      var descendants = [];
      pred = pred || func.ok;
      // start DFS(depth first search) with node
      (function fnWalk(current) {
          if (node !== current && pred(current)) {
              descendants.push(current);
          }
          for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
              fnWalk(current.childNodes[idx]);
          }
      })(node);
      return descendants;
  }
  /**
   * wrap node with new tag.
   *
   * @param {Node} node
   * @param {Node} tagName of wrapper
   * @return {Node} - wrapper
   */
  function wrap(node, wrapperName) {
      var parent = node.parentNode;
      var wrapper = $$1('<' + wrapperName + '>')[0];
      parent.insertBefore(wrapper, node);
      wrapper.appendChild(node);
      return wrapper;
  }
  /**
   * insert node after preceding
   *
   * @param {Node} node
   * @param {Node} preceding - predicate function
   */
  function insertAfter(node, preceding) {
      var next = preceding.nextSibling;
      var parent = preceding.parentNode;
      if (next) {
          parent.insertBefore(node, next);
      }
      else {
          parent.appendChild(node);
      }
      return node;
  }
  /**
   * append elements.
   *
   * @param {Node} node
   * @param {Collection} aChild
   */
  function appendChildNodes(node, aChild) {
      $$1.each(aChild, function (idx, child) {
          node.appendChild(child);
      });
      return node;
  }
  /**
   * returns whether boundaryPoint is left edge or not.
   *
   * @param {BoundaryPoint} point
   * @return {Boolean}
   */
  function isLeftEdgePoint(point) {
      return point.offset === 0;
  }
  /**
   * returns whether boundaryPoint is right edge or not.
   *
   * @param {BoundaryPoint} point
   * @return {Boolean}
   */
  function isRightEdgePoint(point) {
      return point.offset === nodeLength(point.node);
  }
  /**
   * returns whether boundaryPoint is edge or not.
   *
   * @param {BoundaryPoint} point
   * @return {Boolean}
   */
  function isEdgePoint(point) {
      return isLeftEdgePoint(point) || isRightEdgePoint(point);
  }
  /**
   * returns whether node is left edge of ancestor or not.
   *
   * @param {Node} node
   * @param {Node} ancestor
   * @return {Boolean}
   */
  function isLeftEdgeOf(node, ancestor) {
      while (node && node !== ancestor) {
          if (position(node) !== 0) {
              return false;
          }
          node = node.parentNode;
      }
      return true;
  }
  /**
   * returns whether node is right edge of ancestor or not.
   *
   * @param {Node} node
   * @param {Node} ancestor
   * @return {Boolean}
   */
  function isRightEdgeOf(node, ancestor) {
      if (!ancestor) {
          return false;
      }
      while (node && node !== ancestor) {
          if (position(node) !== nodeLength(node.parentNode) - 1) {
              return false;
          }
          node = node.parentNode;
      }
      return true;
  }
  /**
   * returns whether point is left edge of ancestor or not.
   * @param {BoundaryPoint} point
   * @param {Node} ancestor
   * @return {Boolean}
   */
  function isLeftEdgePointOf(point, ancestor) {
      return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
  }
  /**
   * returns whether point is right edge of ancestor or not.
   * @param {BoundaryPoint} point
   * @param {Node} ancestor
   * @return {Boolean}
   */
  function isRightEdgePointOf(point, ancestor) {
      return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
  }
  /**
   * returns offset from parent.
   *
   * @param {Node} node
   */
  function position(node) {
      var offset = 0;
      while ((node = node.previousSibling)) {
          offset += 1;
      }
      return offset;
  }
  function hasChildren(node) {
      return !!(node && node.childNodes && node.childNodes.length);
  }
  /**
   * returns previous boundaryPoint
   *
   * @param {BoundaryPoint} point
   * @param {Boolean} isSkipInnerOffset
   * @return {BoundaryPoint}
   */
  function prevPoint(point, isSkipInnerOffset) {
      var node;
      var offset;
      if (point.offset === 0) {
          if (isEditable(point.node)) {
              return null;
          }
          node = point.node.parentNode;
          offset = position(point.node);
      }
      else if (hasChildren(point.node)) {
          node = point.node.childNodes[point.offset - 1];
          offset = nodeLength(node);
      }
      else {
          node = point.node;
          offset = isSkipInnerOffset ? 0 : point.offset - 1;
      }
      return {
          node: node,
          offset: offset
      };
  }
  /**
   * returns next boundaryPoint
   *
   * @param {BoundaryPoint} point
   * @param {Boolean} isSkipInnerOffset
   * @return {BoundaryPoint}
   */
  function nextPoint(point, isSkipInnerOffset) {
      var node, offset;
      if (nodeLength(point.node) === point.offset) {
          if (isEditable(point.node)) {
              return null;
          }
          node = point.node.parentNode;
          offset = position(point.node) + 1;
      }
      else if (hasChildren(point.node)) {
          node = point.node.childNodes[point.offset];
          offset = 0;
      }
      else {
          node = point.node;
          offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
      }
      return {
          node: node,
          offset: offset
      };
  }
  /**
   * returns whether pointA and pointB is same or not.
   *
   * @param {BoundaryPoint} pointA
   * @param {BoundaryPoint} pointB
   * @return {Boolean}
   */
  function isSamePoint(pointA, pointB) {
      return pointA.node === pointB.node && pointA.offset === pointB.offset;
  }
  /**
   * returns whether point is visible (can set cursor) or not.
   *
   * @param {BoundaryPoint} point
   * @return {Boolean}
   */
  function isVisiblePoint(point) {
      if (isText(point.node) || !hasChildren(point.node) || isEmpty$1(point.node)) {
          return true;
      }
      var leftNode = point.node.childNodes[point.offset - 1];
      var rightNode = point.node.childNodes[point.offset];
      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
          return true;
      }
      return false;
  }
  /**
   * @method prevPointUtil
   *
   * @param {BoundaryPoint} point
   * @param {Function} pred
   * @return {BoundaryPoint}
   */
  function prevPointUntil(point, pred) {
      while (point) {
          if (pred(point)) {
              return point;
          }
          point = prevPoint(point);
      }
      return null;
  }
  /**
   * @method nextPointUntil
   *
   * @param {BoundaryPoint} point
   * @param {Function} pred
   * @return {BoundaryPoint}
   */
  function nextPointUntil(point, pred) {
      while (point) {
          if (pred(point)) {
              return point;
          }
          point = nextPoint(point);
      }
      return null;
  }
  /**
   * returns whether point has character or not.
   *
   * @param {Point} point
   * @return {Boolean}
   */
  function isCharPoint(point) {
      if (!isText(point.node)) {
          return false;
      }
      var ch = point.node.nodeValue.charAt(point.offset - 1);
      return ch && (ch !== ' ' && ch !== NBSP_CHAR);
  }
  /**
   * @method walkPoint
   *
   * @param {BoundaryPoint} startPoint
   * @param {BoundaryPoint} endPoint
   * @param {Function} handler
   * @param {Boolean} isSkipInnerOffset
   */
  function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
      var point = startPoint;
      while (point) {
          handler(point);
          if (isSamePoint(point, endPoint)) {
              break;
          }
          var isSkipOffset = isSkipInnerOffset &&
              startPoint.node !== point.node &&
              endPoint.node !== point.node;
          point = nextPoint(point, isSkipOffset);
      }
  }
  /**
   * @method makeOffsetPath
   *
   * return offsetPath(array of offset) from ancestor
   *
   * @param {Node} ancestor - ancestor node
   * @param {Node} node
   */
  function makeOffsetPath(ancestor, node) {
      var ancestors = listAncestor(node, func.eq(ancestor));
      return ancestors.map(position).reverse();
  }
  /**
   * @method fromOffsetPath
   *
   * return element from offsetPath(array of offset)
   *
   * @param {Node} ancestor - ancestor node
   * @param {array} offsets - offsetPath
   */
  function fromOffsetPath(ancestor, offsets) {
      var current = ancestor;
      for (var i = 0, len = offsets.length; i < len; i++) {
          if (current.childNodes.length <= offsets[i]) {
              current = current.childNodes[current.childNodes.length - 1];
          }
          else {
              current = current.childNodes[offsets[i]];
          }
      }
      return current;
  }
  /**
   * @method splitNode
   *
   * split element or #text
   *
   * @param {BoundaryPoint} point
   * @param {Object} [options]
   * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
   * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
   * @param {Boolean} [options.isDiscardEmptySplits] - default: false
   * @return {Node} right node of boundaryPoint
   */
  function splitNode(point, options) {
      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
      var isDiscardEmptySplits = options && options.isDiscardEmptySplits;
      if (isDiscardEmptySplits) {
          isSkipPaddingBlankHTML = true;
      }
      // edge case
      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
          if (isLeftEdgePoint(point)) {
              return point.node;
          }
          else if (isRightEdgePoint(point)) {
              return point.node.nextSibling;
          }
      }
      // split #text
      if (isText(point.node)) {
          return point.node.splitText(point.offset);
      }
      else {
          var childNode = point.node.childNodes[point.offset];
          var clone = insertAfter(point.node.cloneNode(false), point.node);
          appendChildNodes(clone, listNext(childNode));
          if (!isSkipPaddingBlankHTML) {
              paddingBlankHTML(point.node);
              paddingBlankHTML(clone);
          }
          if (isDiscardEmptySplits) {
              if (isEmpty$1(point.node)) {
                  remove(point.node);
              }
              if (isEmpty$1(clone)) {
                  remove(clone);
                  return point.node.nextSibling;
              }
          }
          return clone;
      }
  }
  /**
   * @method splitTree
   *
   * split tree by point
   *
   * @param {Node} root - split root
   * @param {BoundaryPoint} point
   * @param {Object} [options]
   * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
   * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
   * @return {Node} right node of boundaryPoint
   */
  function splitTree(root, point, options) {
      // ex) [#text, <span>, <p>]
      var ancestors = listAncestor(point.node, func.eq(root));
      if (!ancestors.length) {
          return null;
      }
      else if (ancestors.length === 1) {
          return splitNode(point, options);
      }
      return ancestors.reduce(function (node, parent) {
          if (node === point.node) {
              node = splitNode(point, options);
          }
          return splitNode({
              node: parent,
              offset: node ? position(node) : nodeLength(parent)
          }, options);
      });
  }
  /**
   * split point
   *
   * @param {Point} point
   * @param {Boolean} isInline
   * @return {Object}
   */
  function splitPoint(point, isInline) {
      // find splitRoot, container
      //  - inline: splitRoot is a child of paragraph
      //  - block: splitRoot is a child of bodyContainer
      var pred = isInline ? isPara : isBodyContainer;
      var ancestors = listAncestor(point.node, pred);
      var topAncestor = lists.last(ancestors) || point.node;
      var splitRoot, container;
      if (pred(topAncestor)) {
          splitRoot = ancestors[ancestors.length - 2];
          container = topAncestor;
      }
      else {
          splitRoot = topAncestor;
          container = splitRoot.parentNode;
      }
      // if splitRoot is exists, split with splitTree
      var pivot = splitRoot && splitTree(splitRoot, point, {
          isSkipPaddingBlankHTML: isInline,
          isNotSplitEdgePoint: isInline
      });
      // if container is point.node, find pivot with point.offset
      if (!pivot && container === point.node) {
          pivot = point.node.childNodes[point.offset];
      }
      return {
          rightNode: pivot,
          container: container
      };
  }
  function create(nodeName) {
      return document.createElement(nodeName);
  }
  function createText(text) {
      return document.createTextNode(text);
  }
  /**
   * @method remove
   *
   * remove node, (isRemoveChild: remove child or not)
   *
   * @param {Node} node
   * @param {Boolean} isRemoveChild
   */
  function remove(node, isRemoveChild) {
      if (!node || !node.parentNode) {
          return;
      }
      if (node.removeNode) {
          return node.removeNode(isRemoveChild);
      }
      var parent = node.parentNode;
      if (!isRemoveChild) {
          var nodes = [];
          for (var i = 0, len = node.childNodes.length; i < len; i++) {
              nodes.push(node.childNodes[i]);
          }
          for (var i = 0, len = nodes.length; i < len; i++) {
              parent.insertBefore(nodes[i], node);
          }
      }
      parent.removeChild(node);
  }
  /**
   * @method removeWhile
   *
   * @param {Node} node
   * @param {Function} pred
   */
  function removeWhile(node, pred) {
      while (node) {
          if (isEditable(node) || !pred(node)) {
              break;
          }
          var parent = node.parentNode;
          remove(node);
          node = parent;
      }
  }
  /**
   * @method replace
   *
   * replace node with provided nodeName
   *
   * @param {Node} node
   * @param {String} nodeName
   * @return {Node} - new node
   */
  function replace(node, nodeName) {
      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
          return node;
      }
      var newNode = create(nodeName);
      if (node.style.cssText) {
          newNode.style.cssText = node.style.cssText;
      }
      appendChildNodes(newNode, lists.from(node.childNodes));
      insertAfter(newNode, node);
      remove(node);
      return newNode;
  }
  var isTextarea = makePredByNodeName('TEXTAREA');
  /**
   * @param {jQuery} $node
   * @param {Boolean} [stripLinebreaks] - default: false
   */
  function value($node, stripLinebreaks) {
      var val = isTextarea($node[0]) ? $node.val() : $node.html();
      if (stripLinebreaks) {
          return val.replace(/[\n\r]/g, '');
      }
      return val;
  }
  /**
   * @method html
   *
   * get the HTML contents of node
   *
   * @param {jQuery} $node
   * @param {Boolean} [isNewlineOnBlock]
   */
  function html($node, isNewlineOnBlock) {
      var markup = value($node);
      if (isNewlineOnBlock) {
          var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
          markup = markup.replace(regexTag, function (match, endSlash, name) {
              name = name.toUpperCase();
              var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
                  !!endSlash;
              var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
              return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
          });
          markup = $$1.trim(markup);
      }
      return markup;
  }
  function posFromPlaceholder(placeholder) {
      var $placeholder = $$1(placeholder);
      var pos = $placeholder.offset();
      var height = $placeholder.outerHeight(true); // include margin
      return {
          left: pos.left,
          top: pos.top + height
      };
  }
  function attachEvents($node, events) {
      Object.keys(events).forEach(function (key) {
          $node.on(key, events[key]);
      });
  }
  function detachEvents($node, events) {
      Object.keys(events).forEach(function (key) {
          $node.off(key, events[key]);
      });
  }
  /**
   * @method isCustomStyleTag
   *
   * assert if a node contains a "note-styletag" class,
   * which implies that's a custom-made style tag node
   *
   * @param {Node} an HTML DOM node
   */
  function isCustomStyleTag(node) {
      return node && !isText(node) && lists.contains(node.classList, 'note-styletag');
  }
  var dom = {
      /** @property {String} NBSP_CHAR */
      NBSP_CHAR: NBSP_CHAR,
      /** @property {String} ZERO_WIDTH_NBSP_CHAR */
      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
      /** @property {String} blank */
      blank: blankHTML,
      /** @property {String} emptyPara */
      emptyPara: "<p>" + blankHTML + "</p>",
      makePredByNodeName: makePredByNodeName,
      isEditable: isEditable,
      isControlSizing: isControlSizing,
      isText: isText,
      isElement: isElement,
      isVoid: isVoid,
      isPara: isPara,
      isPurePara: isPurePara,
      isHeading: isHeading,
      isInline: isInline,
      isBlock: func.not(isInline),
      isBodyInline: isBodyInline,
      isBody: isBody,
      isParaInline: isParaInline,
      isPre: isPre,
      isList: isList,
      isTable: isTable,
      isData: isData,
      isCell: isCell,
      isBlockquote: isBlockquote,
      isBodyContainer: isBodyContainer,
      isAnchor: isAnchor,
      isDiv: makePredByNodeName('DIV'),
      isLi: isLi,
      isBR: makePredByNodeName('BR'),
      isSpan: makePredByNodeName('SPAN'),
      isB: makePredByNodeName('B'),
      isU: makePredByNodeName('U'),
      isS: makePredByNodeName('S'),
      isI: makePredByNodeName('I'),
      isImg: makePredByNodeName('IMG'),
      isTextarea: isTextarea,
      isEmpty: isEmpty$1,
      isEmptyAnchor: func.and(isAnchor, isEmpty$1),
      isClosestSibling: isClosestSibling,
      withClosestSiblings: withClosestSiblings,
      nodeLength: nodeLength,
      isLeftEdgePoint: isLeftEdgePoint,
      isRightEdgePoint: isRightEdgePoint,
      isEdgePoint: isEdgePoint,
      isLeftEdgeOf: isLeftEdgeOf,
      isRightEdgeOf: isRightEdgeOf,
      isLeftEdgePointOf: isLeftEdgePointOf,
      isRightEdgePointOf: isRightEdgePointOf,
      prevPoint: prevPoint,
      nextPoint: nextPoint,
      isSamePoint: isSamePoint,
      isVisiblePoint: isVisiblePoint,
      prevPointUntil: prevPointUntil,
      nextPointUntil: nextPointUntil,
      isCharPoint: isCharPoint,
      walkPoint: walkPoint,
      ancestor: ancestor,
      singleChildAncestor: singleChildAncestor,
      listAncestor: listAncestor,
      lastAncestor: lastAncestor,
      listNext: listNext,
      listPrev: listPrev,
      listDescendant: listDescendant,
      commonAncestor: commonAncestor,
      wrap: wrap,
      insertAfter: insertAfter,
      appendChildNodes: appendChildNodes,
      position: position,
      hasChildren: hasChildren,
      makeOffsetPath: makeOffsetPath,
      fromOffsetPath: fromOffsetPath,
      splitTree: splitTree,
      splitPoint: splitPoint,
      create: create,
      createText: createText,
      remove: remove,
      removeWhile: removeWhile,
      replace: replace,
      html: html,
      value: value,
      posFromPlaceholder: posFromPlaceholder,
      attachEvents: attachEvents,
      detachEvents: detachEvents,
      isCustomStyleTag: isCustomStyleTag
  };

  /**
   * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
   *
   * @param {TextRange} textRange
   * @param {Boolean} isStart
   * @return {BoundaryPoint}
   *
   * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
   */
  function textRangeToPoint(textRange, isStart) {
      var container = textRange.parentElement();
      var offset;
      var tester = document.body.createTextRange();
      var prevContainer;
      var childNodes = lists.from(container.childNodes);
      for (offset = 0; offset < childNodes.length; offset++) {
          if (dom.isText(childNodes[offset])) {
              continue;
          }
          tester.moveToElementText(childNodes[offset]);
          if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
              break;
          }
          prevContainer = childNodes[offset];
      }
      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
          var textRangeStart = document.body.createTextRange();
          var curTextNode = null;
          textRangeStart.moveToElementText(prevContainer || container);
          textRangeStart.collapse(!prevContainer);
          curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
          var pointTester = textRange.duplicate();
          pointTester.setEndPoint('StartToStart', textRangeStart);
          var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
          while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
              textCount -= curTextNode.nodeValue.length;
              curTextNode = curTextNode.nextSibling;
          }
          // [workaround] enforce IE to re-reference curTextNode, hack
          var dummy = curTextNode.nodeValue; // eslint-disable-line
          if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
              textCount === curTextNode.nodeValue.length) {
              textCount -= curTextNode.nodeValue.length;
              curTextNode = curTextNode.nextSibling;
          }
          container = curTextNode;
          offset = textCount;
      }
      return {
          cont: container,
          offset: offset
      };
  }
  /**
   * return TextRange from boundary point (inspired by google closure-library)
   * @param {BoundaryPoint} point
   * @return {TextRange}
   */
  function pointToTextRange(point) {
      var textRangeInfo = function (container, offset) {
          var node, isCollapseToStart;
          if (dom.isText(container)) {
              var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
              var prevContainer = lists.last(prevTextNodes).previousSibling;
              node = prevContainer || container.parentNode;
              offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
              isCollapseToStart = !prevContainer;
          }
          else {
              node = container.childNodes[offset] || container;
              if (dom.isText(node)) {
                  return textRangeInfo(node, 0);
              }
              offset = 0;
              isCollapseToStart = false;
          }
          return {
              node: node,
              collapseToStart: isCollapseToStart,
              offset: offset
          };
      };
      var textRange = document.body.createTextRange();
      var info = textRangeInfo(point.node, point.offset);
      textRange.moveToElementText(info.node);
      textRange.collapse(info.collapseToStart);
      textRange.moveStart('character', info.offset);
      return textRange;
  }
  /**
     * Wrapped Range
     *
     * @constructor
     * @param {Node} sc - start container
     * @param {Number} so - start offset
     * @param {Node} ec - end container
     * @param {Number} eo - end offset
     */
  var WrappedRange = /** @class */ (function () {
      function WrappedRange(sc, so, ec, eo) {
          this.sc = sc;
          this.so = so;
          this.ec = ec;
          this.eo = eo;
          // isOnEditable: judge whether range is on editable or not
          this.isOnEditable = this.makeIsOn(dom.isEditable);
          // isOnList: judge whether range is on list node or not
          this.isOnList = this.makeIsOn(dom.isList);
          // isOnAnchor: judge whether range is on anchor node or not
          this.isOnAnchor = this.makeIsOn(dom.isAnchor);
          // isOnCell: judge whether range is on cell node or not
          this.isOnCell = this.makeIsOn(dom.isCell);
          // isOnData: judge whether range is on data node or not
          this.isOnData = this.makeIsOn(dom.isData);
      }
      // nativeRange: get nativeRange from sc, so, ec, eo
      WrappedRange.prototype.nativeRange = function () {
          if (env.isW3CRangeSupport) {
              var w3cRange = document.createRange();
              w3cRange.setStart(this.sc, this.so);
              w3cRange.setEnd(this.ec, this.eo);
              return w3cRange;
          }
          else {
              var textRange = pointToTextRange({
                  node: this.sc,
                  offset: this.so
              });
              textRange.setEndPoint('EndToEnd', pointToTextRange({
                  node: this.ec,
                  offset: this.eo
              }));
              return textRange;
          }
      };
      WrappedRange.prototype.getPoints = function () {
          return {
              sc: this.sc,
              so: this.so,
              ec: this.ec,
              eo: this.eo
          };
      };
      WrappedRange.prototype.getStartPoint = function () {
          return {
              node: this.sc,
              offset: this.so
          };
      };
      WrappedRange.prototype.getEndPoint = function () {
          return {
              node: this.ec,
              offset: this.eo
          };
      };
      /**
       * select update visible range
       */
      WrappedRange.prototype.select = function () {
          var nativeRng = this.nativeRange();
          if (env.isW3CRangeSupport) {
              var selection = document.getSelection();
              if (selection.rangeCount > 0) {
                  selection.removeAllRanges();
              }
              selection.addRange(nativeRng);
          }
          else {
              nativeRng.select();
          }
          return this;
      };
      /**
       * Moves the scrollbar to start container(sc) of current range
       *
       * @return {WrappedRange}
       */
      WrappedRange.prototype.scrollIntoView = function (container) {
          var height = $$1(container).height();
          if (container.scrollTop + height < this.sc.offsetTop) {
              container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
          }
          return this;
      };
      /**
       * @return {WrappedRange}
       */
      WrappedRange.prototype.normalize = function () {
          /**
           * @param {BoundaryPoint} point
           * @param {Boolean} isLeftToRight
           * @return {BoundaryPoint}
           */
          var getVisiblePoint = function (point, isLeftToRight) {
              if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||
                  (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||
                  (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||
                  (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {
                  return point;
              }
              // point on block's edge
              var block = dom.ancestor(point.node, dom.isBlock);
              if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||
                  ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {
                  // returns point already on visible point
                  if (dom.isVisiblePoint(point)) {
                      return point;
                  }
                  // reverse direction
                  isLeftToRight = !isLeftToRight;
              }
              var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint)
                  : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
              return nextPoint || point;
          };
          var endPoint = getVisiblePoint(this.getEndPoint(), false);
          var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
          return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      };
      /**
       * returns matched nodes on range
       *
       * @param {Function} [pred] - predicate function
       * @param {Object} [options]
       * @param {Boolean} [options.includeAncestor]
       * @param {Boolean} [options.fullyContains]
       * @return {Node[]}
       */
      WrappedRange.prototype.nodes = function (pred, options) {
          pred = pred || func.ok;
          var includeAncestor = options && options.includeAncestor;
          var fullyContains = options && options.fullyContains;
          // TODO compare points and sort
          var startPoint = this.getStartPoint();
          var endPoint = this.getEndPoint();
          var nodes = [];
          var leftEdgeNodes = [];
          dom.walkPoint(startPoint, endPoint, function (point) {
              if (dom.isEditable(point.node)) {
                  return;
              }
              var node;
              if (fullyContains) {
                  if (dom.isLeftEdgePoint(point)) {
                      leftEdgeNodes.push(point.node);
                  }
                  if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
                      node = point.node;
                  }
              }
              else if (includeAncestor) {
                  node = dom.ancestor(point.node, pred);
              }
              else {
                  node = point.node;
              }
              if (node && pred(node)) {
                  nodes.push(node);
              }
          }, true);
          return lists.unique(nodes);
      };
      /**
       * returns commonAncestor of range
       * @return {Element} - commonAncestor
       */
      WrappedRange.prototype.commonAncestor = function () {
          return dom.commonAncestor(this.sc, this.ec);
      };
      /**
       * returns expanded range by pred
       *
       * @param {Function} pred - predicate function
       * @return {WrappedRange}
       */
      WrappedRange.prototype.expand = function (pred) {
          var startAncestor = dom.ancestor(this.sc, pred);
          var endAncestor = dom.ancestor(this.ec, pred);
          if (!startAncestor && !endAncestor) {
              return new WrappedRange(this.sc, this.so, this.ec, this.eo);
          }
          var boundaryPoints = this.getPoints();
          if (startAncestor) {
              boundaryPoints.sc = startAncestor;
              boundaryPoints.so = 0;
          }
          if (endAncestor) {
              boundaryPoints.ec = endAncestor;
              boundaryPoints.eo = dom.nodeLength(endAncestor);
          }
          return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
      };
      /**
       * @param {Boolean} isCollapseToStart
       * @return {WrappedRange}
       */
      WrappedRange.prototype.collapse = function (isCollapseToStart) {
          if (isCollapseToStart) {
              return new WrappedRange(this.sc, this.so, this.sc, this.so);
          }
          else {
              return new WrappedRange(this.ec, this.eo, this.ec, this.eo);
          }
      };
      /**
       * splitText on range
       */
      WrappedRange.prototype.splitText = function () {
          var isSameContainer = this.sc === this.ec;
          var boundaryPoints = this.getPoints();
          if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
              this.ec.splitText(this.eo);
          }
          if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
              boundaryPoints.sc = this.sc.splitText(this.so);
              boundaryPoints.so = 0;
              if (isSameContainer) {
                  boundaryPoints.ec = boundaryPoints.sc;
                  boundaryPoints.eo = this.eo - this.so;
              }
          }
          return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
      };
      /**
       * delete contents on range
       * @return {WrappedRange}
       */
      WrappedRange.prototype.deleteContents = function () {
          if (this.isCollapsed()) {
              return this;
          }
          var rng = this.splitText();
          var nodes = rng.nodes(null, {
              fullyContains: true
          });
          // find new cursor point
          var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
              return !lists.contains(nodes, point.node);
          });
          var emptyParents = [];
          $$1.each(nodes, function (idx, node) {
              // find empty parents
              var parent = node.parentNode;
              if (point.node !== parent && dom.nodeLength(parent) === 1) {
                  emptyParents.push(parent);
              }
              dom.remove(node, false);
          });
          // remove empty parents
          $$1.each(emptyParents, function (idx, node) {
              dom.remove(node, false);
          });
          return new WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
      };
      /**
       * makeIsOn: return isOn(pred) function
       */
      WrappedRange.prototype.makeIsOn = function (pred) {
          return function () {
              var ancestor = dom.ancestor(this.sc, pred);
              return !!ancestor && (ancestor === dom.ancestor(this.ec, pred));
          };
      };
      /**
       * @param {Function} pred
       * @return {Boolean}
       */
      WrappedRange.prototype.isLeftEdgeOf = function (pred) {
          if (!dom.isLeftEdgePoint(this.getStartPoint())) {
              return false;
          }
          var node = dom.ancestor(this.sc, pred);
          return node && dom.isLeftEdgeOf(this.sc, node);
      };
      /**
       * returns whether range was collapsed or not
       */
      WrappedRange.prototype.isCollapsed = function () {
          return this.sc === this.ec && this.so === this.eo;
      };
      /**
       * wrap inline nodes which children of body with paragraph
       *
       * @return {WrappedRange}
       */
      WrappedRange.prototype.wrapBodyInlineWithPara = function () {
          if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
              this.sc.innerHTML = dom.emptyPara;
              return new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
          }
          /**
           * [workaround] firefox often create range on not visible point. so normalize here.
           *  - firefox: |<p>text</p>|
           *  - chrome: <p>|text|</p>
           */
          var rng = this.normalize();
          if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
              return rng;
          }
          // find inline top ancestor
          var topAncestor;
          if (dom.isInline(rng.sc)) {
              var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
              topAncestor = lists.last(ancestors);
              if (!dom.isInline(topAncestor)) {
                  topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
              }
          }
          else {
              topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
          }
          // siblings not in paragraph
          var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
          inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));
          // wrap with paragraph
          if (inlineSiblings.length) {
              var para = dom.wrap(lists.head(inlineSiblings), 'p');
              dom.appendChildNodes(para, lists.tail(inlineSiblings));
          }
          return this.normalize();
      };
      /**
       * insert node at current cursor
       *
       * @param {Node} node
       * @return {Node}
       */
      WrappedRange.prototype.insertNode = function (node) {
          var rng = this.wrapBodyInlineWithPara().deleteContents();
          var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));
          if (info.rightNode) {
              info.rightNode.parentNode.insertBefore(node, info.rightNode);
          }
          else {
              info.container.appendChild(node);
          }
          return node;
      };
      /**
       * insert html at current cursor
       */
      WrappedRange.prototype.pasteHTML = function (markup) {
          var contentsContainer = $$1('<div></div>').html(markup)[0];
          var childNodes = lists.from(contentsContainer.childNodes);
          var rng = this.wrapBodyInlineWithPara().deleteContents();
          if (rng.so > 0) {
              childNodes = childNodes.reverse();
          }
          childNodes = childNodes.map(function (childNode) {
              return rng.insertNode(childNode);
          });
          if (rng.so > 0) {
              childNodes = childNodes.reverse();
          }
          return childNodes;
      };
      /**
       * returns text in range
       *
       * @return {String}
       */
      WrappedRange.prototype.toString = function () {
          var nativeRng = this.nativeRange();
          return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
      };
      /**
       * returns range for word before cursor
       *
       * @param {Boolean} [findAfter] - find after cursor, default: false
       * @return {WrappedRange}
       */
      WrappedRange.prototype.getWordRange = function (findAfter) {
          var endPoint = this.getEndPoint();
          if (!dom.isCharPoint(endPoint)) {
              return this;
          }
          var startPoint = dom.prevPointUntil(endPoint, function (point) {
              return !dom.isCharPoint(point);
          });
          if (findAfter) {
              endPoint = dom.nextPointUntil(endPoint, function (point) {
                  return !dom.isCharPoint(point);
              });
          }
          return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      };
      /**
       * create offsetPath bookmark
       *
       * @param {Node} editable
       */
      WrappedRange.prototype.bookmark = function (editable) {
          return {
              s: {
                  path: dom.makeOffsetPath(editable, this.sc),
                  offset: this.so
              },
              e: {
                  path: dom.makeOffsetPath(editable, this.ec),
                  offset: this.eo
              }
          };
      };
      /**
       * create offsetPath bookmark base on paragraph
       *
       * @param {Node[]} paras
       */
      WrappedRange.prototype.paraBookmark = function (paras) {
          return {
              s: {
                  path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
                  offset: this.so
              },
              e: {
                  path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
                  offset: this.eo
              }
          };
      };
      /**
       * getClientRects
       * @return {Rect[]}
       */
      WrappedRange.prototype.getClientRects = function () {
          var nativeRng = this.nativeRange();
          return nativeRng.getClientRects();
      };
      return WrappedRange;
  }());
  /**
   * Data structure
   *  * BoundaryPoint: a point of dom tree
   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
   *
   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
   */
  var range = {
      /**
       * create Range Object From arguments or Browser Selection
       *
       * @param {Node} sc - start container
       * @param {Number} so - start offset
       * @param {Node} ec - end container
       * @param {Number} eo - end offset
       * @return {WrappedRange}
       */
      create: function (sc, so, ec, eo) {
          if (arguments.length === 4) {
              return new WrappedRange(sc, so, ec, eo);
          }
          else if (arguments.length === 2) { // collapsed
              ec = sc;
              eo = so;
              return new WrappedRange(sc, so, ec, eo);
          }
          else {
              var wrappedRange = this.createFromSelection();
              if (!wrappedRange && arguments.length === 1) {
                  wrappedRange = this.createFromNode(arguments[0]);
                  return wrappedRange.collapse(dom.emptyPara === arguments[0].innerHTML);
              }
              return wrappedRange;
          }
      },
      createFromSelection: function () {
          var sc, so, ec, eo;
          if (env.isW3CRangeSupport) {
              var selection = document.getSelection();
              if (!selection || selection.rangeCount === 0) {
                  return null;
              }
              else if (dom.isBody(selection.anchorNode)) {
                  // Firefox: returns entire body as range on initialization.
                  // We won't never need it.
                  return null;
              }
              var nativeRng = selection.getRangeAt(0);
              sc = nativeRng.startContainer;
              so = nativeRng.startOffset;
              ec = nativeRng.endContainer;
              eo = nativeRng.endOffset;
          }
          else { // IE8: TextRange
              var textRange = document.selection.createRange();
              var textRangeEnd = textRange.duplicate();
              textRangeEnd.collapse(false);
              var textRangeStart = textRange;
              textRangeStart.collapse(true);
              var startPoint = textRangeToPoint(textRangeStart, true);
              var endPoint = textRangeToPoint(textRangeEnd, false);
              // same visible point case: range was collapsed.
              if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
                  dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
                  endPoint.node.nextSibling === startPoint.node) {
                  startPoint = endPoint;
              }
              sc = startPoint.cont;
              so = startPoint.offset;
              ec = endPoint.cont;
              eo = endPoint.offset;
          }
          return new WrappedRange(sc, so, ec, eo);
      },
      /**
       * @method
       *
       * create WrappedRange from node
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNode: function (node) {
          var sc = node;
          var so = 0;
          var ec = node;
          var eo = dom.nodeLength(ec);
          // browsers can't target a picture or void node
          if (dom.isVoid(sc)) {
              so = dom.listPrev(sc).length - 1;
              sc = sc.parentNode;
          }
          if (dom.isBR(ec)) {
              eo = dom.listPrev(ec).length - 1;
              ec = ec.parentNode;
          }
          else if (dom.isVoid(ec)) {
              eo = dom.listPrev(ec).length;
              ec = ec.parentNode;
          }
          return this.create(sc, so, ec, eo);
      },
      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeBefore: function (node) {
          return this.createFromNode(node).collapse(true);
      },
      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeAfter: function (node) {
          return this.createFromNode(node).collapse();
      },
      /**
       * @method
       *
       * create WrappedRange from bookmark
       *
       * @param {Node} editable
       * @param {Object} bookmark
       * @return {WrappedRange}
       */
      createFromBookmark: function (editable, bookmark) {
          var sc = dom.fromOffsetPath(editable, bookmark.s.path);
          var so = bookmark.s.offset;
          var ec = dom.fromOffsetPath(editable, bookmark.e.path);
          var eo = bookmark.e.offset;
          return new WrappedRange(sc, so, ec, eo);
      },
      /**
       * @method
       *
       * create WrappedRange from paraBookmark
       *
       * @param {Object} bookmark
       * @param {Node[]} paras
       * @return {WrappedRange}
       */
      createFromParaBookmark: function (bookmark, paras) {
          var so = bookmark.s.offset;
          var eo = bookmark.e.offset;
          var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
          var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
          return new WrappedRange(sc, so, ec, eo);
      }
  };

  $$1.summernote = $$1.summernote || {
      lang: {}
  };
  $$1.extend($$1.summernote.lang, {
      'en-US': {
          font: {
              bold: 'Bold',
              italic: 'Italic',
              underline: 'Underline',
              clear: 'Remove Font Style',
              height: 'Line Height',
              name: 'Font Family',
              strikethrough: 'Strikethrough',
              subscript: 'Subscript',
              superscript: 'Superscript',
              size: 'Font Size'
          },
          image: {
              image: 'Picture',
              insert: 'Insert Image',
              resizeFull: 'Resize Full',
              resizeHalf: 'Resize Half',
              resizeQuarter: 'Resize Quarter',
              floatLeft: 'Float Left',
              floatRight: 'Float Right',
              floatNone: 'Float None',
              shapeRounded: 'Shape: Rounded',
              shapeCircle: 'Shape: Circle',
              shapeThumbnail: 'Shape: Thumbnail',
              shapeNone: 'Shape: None',
              dragImageHere: 'Drag image or text here',
              dropImage: 'Drop image or Text',
              selectFromFiles: 'Select from files',
              maximumFileSize: 'Maximum file size',
              maximumFileSizeError: 'Maximum file size exceeded.',
              url: 'Image URL',
              remove: 'Remove Image',
              original: 'Original'
          },
          video: {
              video: 'Video',
              videoLink: 'Video Link',
              insert: 'Insert Video',
              url: 'Video URL',
              providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
          },
          link: {
              link: 'Link',
              insert: 'Insert Link',
              unlink: 'Unlink',
              edit: 'Edit',
              textToDisplay: 'Text to display',
              url: 'To what URL should this link go?',
              openInNewWindow: 'Open in new window'
          },
          table: {
              table: 'Table',
              addRowAbove: 'Add row above',
              addRowBelow: 'Add row below',
              addColLeft: 'Add column left',
              addColRight: 'Add column right',
              delRow: 'Delete row',
              delCol: 'Delete column',
              delTable: 'Delete table'
          },
          hr: {
              insert: 'Insert Horizontal Rule'
          },
          style: {
              style: 'Style',
              p: 'Normal',
              blockquote: 'Quote',
              pre: 'Code',
              h1: 'Header 1',
              h2: 'Header 2',
              h3: 'Header 3',
              h4: 'Header 4',
              h5: 'Header 5',
              h6: 'Header 6'
          },
          lists: {
              unordered: 'Unordered list',
              ordered: 'Ordered list'
          },
          options: {
              help: 'Help',
              fullscreen: 'Full Screen',
              codeview: 'Code View'
          },
          paragraph: {
              paragraph: 'Paragraph',
              outdent: 'Outdent',
              indent: 'Indent',
              left: 'Align left',
              center: 'Align center',
              right: 'Align right',
              justify: 'Justify full'
          },
          color: {
              recent: 'Recent Color',
              more: 'More Color',
              background: 'Background Color',
              foreground: 'Foreground Color',
              transparent: 'Transparent',
              setTransparent: 'Set transparent',
              reset: 'Reset',
              resetToDefault: 'Reset to default',
              cpSelect: 'Select'
          },
          shortcut: {
              shortcuts: 'Keyboard shortcuts',
              close: 'Close',
              textFormatting: 'Text formatting',
              action: 'Action',
              paragraphFormatting: 'Paragraph formatting',
              documentStyle: 'Document Style',
              extraKeys: 'Extra keys'
          },
          help: {
              'insertParagraph': 'Insert Paragraph',
              'undo': 'Undoes the last command',
              'redo': 'Redoes the last command',
              'tab': 'Tab',
              'untab': 'Untab',
              'bold': 'Set a bold style',
              'italic': 'Set a italic style',
              'underline': 'Set a underline style',
              'strikethrough': 'Set a strikethrough style',
              'removeFormat': 'Clean a style',
              'justifyLeft': 'Set left align',
              'justifyCenter': 'Set center align',
              'justifyRight': 'Set right align',
              'justifyFull': 'Set full align',
              'insertUnorderedList': 'Toggle unordered list',
              'insertOrderedList': 'Toggle ordered list',
              'outdent': 'Outdent on current paragraph',
              'indent': 'Indent on current paragraph',
              'formatPara': 'Change current block\'s format as a paragraph(P tag)',
              'formatH1': 'Change current block\'s format as H1',
              'formatH2': 'Change current block\'s format as H2',
              'formatH3': 'Change current block\'s format as H3',
              'formatH4': 'Change current block\'s format as H4',
              'formatH5': 'Change current block\'s format as H5',
              'formatH6': 'Change current block\'s format as H6',
              'insertHorizontalRule': 'Insert horizontal rule',
              'linkDialog.show': 'Show Link Dialog'
          },
          history: {
              undo: 'Undo',
              redo: 'Redo'
          },
          specialChar: {
              specialChar: 'SPECIAL CHARACTERS',
              select: 'Select Special characters'
          }
      }
  });

  var KEY_MAP = {
      'BACKSPACE': 8,
      'TAB': 9,
      'ENTER': 13,
      'SPACE': 32,
      'DELETE': 46,
      // Arrow
      'LEFT': 37,
      'UP': 38,
      'RIGHT': 39,
      'DOWN': 40,
      // Number: 0-9
      'NUM0': 48,
      'NUM1': 49,
      'NUM2': 50,
      'NUM3': 51,
      'NUM4': 52,
      'NUM5': 53,
      'NUM6': 54,
      'NUM7': 55,
      'NUM8': 56,
      // Alphabet: a-z
      'B': 66,
      'E': 69,
      'I': 73,
      'J': 74,
      'K': 75,
      'L': 76,
      'R': 82,
      'S': 83,
      'U': 85,
      'V': 86,
      'Y': 89,
      'Z': 90,
      'SLASH': 191,
      'LEFTBRACKET': 219,
      'BACKSLASH': 220,
      'RIGHTBRACKET': 221
  };
  /**
   * @class core.key
   *
   * Object for keycodes.
   *
   * @singleton
   * @alternateClassName key
   */
  var key = {
      /**
       * @method isEdit
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isEdit: function (keyCode) {
          return lists.contains([
              KEY_MAP.BACKSPACE,
              KEY_MAP.TAB,
              KEY_MAP.ENTER,
              KEY_MAP.SPACE,
              KEY_MAP.DELETE
          ], keyCode);
      },
      /**
       * @method isMove
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isMove: function (keyCode) {
          return lists.contains([
              KEY_MAP.LEFT,
              KEY_MAP.UP,
              KEY_MAP.RIGHT,
              KEY_MAP.DOWN
          ], keyCode);
      },
      /**
       * @property {Object} nameFromCode
       * @property {String} nameFromCode.8 "BACKSPACE"
       */
      nameFromCode: func.invertObject(KEY_MAP),
      code: KEY_MAP
  };

  /**
   * @method readFileAsDataURL
   *
   * read contents of file as representing URL
   *
   * @param {File} file
   * @return {Promise} - then: dataUrl
   */
  function readFileAsDataURL(file) {
      return $$1.Deferred(function (deferred) {
          $$1.extend(new FileReader(), {
              onload: function (e) {
                  var dataURL = e.target.result;
                  deferred.resolve(dataURL);
              },
              onerror: function (err) {
                  deferred.reject(err);
              }
          }).readAsDataURL(file);
      }).promise();
  }
  /**
   * @method createImage
   *
   * create `<image>` from url string
   *
   * @param {String} url
   * @return {Promise} - then: $image
   */
  function createImage(url) {
      return $$1.Deferred(function (deferred) {
          var $img = $$1('<img>');
          $img.one('load', function () {
              $img.off('error abort');
              deferred.resolve($img);
          }).one('error abort', function () {
              $img.off('load').detach();
              deferred.reject($img);
          }).css({
              display: 'none'
          }).appendTo(document.body).attr('src', url);
      }).promise();
  }

  var History = /** @class */ (function () {
      function History($editable) {
          this.stack = [];
          this.stackOffset = -1;
          this.$editable = $editable;
          this.editable = $editable[0];
      }
      History.prototype.makeSnapshot = function () {
          var rng = range.create(this.editable);
          var emptyBookmark = { s: { path: [], offset: 0 }, e: { path: [], offset: 0 } };
          return {
              contents: this.$editable.html(),
              bookmark: (rng ? rng.bookmark(this.editable) : emptyBookmark)
          };
      };
      History.prototype.applySnapshot = function (snapshot) {
          if (snapshot.contents !== null) {
              this.$editable.html(snapshot.contents);
          }
          if (snapshot.bookmark !== null) {
              range.createFromBookmark(this.editable, snapshot.bookmark).select();
          }
      };
      /**
      * @method rewind
      * Rewinds the history stack back to the first snapshot taken.
      * Leaves the stack intact, so that "Redo" can still be used.
      */
      History.prototype.rewind = function () {
          // Create snap shot if not yet recorded
          if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
              this.recordUndo();
          }
          // Return to the first available snapshot.
          this.stackOffset = 0;
          // Apply that snapshot.
          this.applySnapshot(this.stack[this.stackOffset]);
      };
      /**
      *  @method commit
      *  Resets history stack, but keeps current editor's content.
      */
      History.prototype.commit = function () {
          // Clear the stack.
          this.stack = [];
          // Restore stackOffset to its original value.
          this.stackOffset = -1;
          // Record our first snapshot (of nothing).
          this.recordUndo();
      };
      /**
      * @method reset
      * Resets the history stack completely; reverting to an empty editor.
      */
      History.prototype.reset = function () {
          // Clear the stack.
          this.stack = [];
          // Restore stackOffset to its original value.
          this.stackOffset = -1;
          // Clear the editable area.
          this.$editable.html('');
          // Record our first snapshot (of nothing).
          this.recordUndo();
      };
      /**
       * undo
       */
      History.prototype.undo = function () {
          // Create snap shot if not yet recorded
          if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
              this.recordUndo();
          }
          if (this.stackOffset > 0) {
              this.stackOffset--;
              this.applySnapshot(this.stack[this.stackOffset]);
          }
      };
      /**
       * redo
       */
      History.prototype.redo = function () {
          if (this.stack.length - 1 > this.stackOffset) {
              this.stackOffset++;
              this.applySnapshot(this.stack[this.stackOffset]);
          }
      };
      /**
       * recorded undo
       */
      History.prototype.recordUndo = function () {
          this.stackOffset++;
          // Wash out stack after stackOffset
          if (this.stack.length > this.stackOffset) {
              this.stack = this.stack.slice(0, this.stackOffset);
          }
          // Create new snapshot and push it to the end
          this.stack.push(this.makeSnapshot());
      };
      return History;
  }());

  var Style = /** @class */ (function () {
      function Style() {
      }
      /**
       * @method jQueryCSS
       *
       * [workaround] for old jQuery
       * passing an array of style properties to .css()
       * will result in an object of property-value pairs.
       * (compability with version < 1.9)
       *
       * @private
       * @param  {jQuery} $obj
       * @param  {Array} propertyNames - An array of one or more CSS properties.
       * @return {Object}
       */
      Style.prototype.jQueryCSS = function ($obj, propertyNames) {
          if (env.jqueryVersion < 1.9) {
              var result_1 = {};
              $$1.each(propertyNames, function (idx, propertyName) {
                  result_1[propertyName] = $obj.css(propertyName);
              });
              return result_1;
          }
          return $obj.css(propertyNames);
      };
      /**
       * returns style object from node
       *
       * @param {jQuery} $node
       * @return {Object}
       */
      Style.prototype.fromNode = function ($node) {
          var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
          var styleInfo = this.jQueryCSS($node, properties) || {};
          styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);
          return styleInfo;
      };
      /**
       * paragraph level style
       *
       * @param {WrappedRange} rng
       * @param {Object} styleInfo
       */
      Style.prototype.stylePara = function (rng, styleInfo) {
          $$1.each(rng.nodes(dom.isPara, {
              includeAncestor: true
          }), function (idx, para) {
              $$1(para).css(styleInfo);
          });
      };
      /**
       * insert and returns styleNodes on range.
       *
       * @param {WrappedRange} rng
       * @param {Object} [options] - options for styleNodes
       * @param {String} [options.nodeName] - default: `SPAN`
       * @param {Boolean} [options.expandClosestSibling] - default: `false`
       * @param {Boolean} [options.onlyPartialContains] - default: `false`
       * @return {Node[]}
       */
      Style.prototype.styleNodes = function (rng, options) {
          rng = rng.splitText();
          var nodeName = (options && options.nodeName) || 'SPAN';
          var expandClosestSibling = !!(options && options.expandClosestSibling);
          var onlyPartialContains = !!(options && options.onlyPartialContains);
          if (rng.isCollapsed()) {
              return [rng.insertNode(dom.create(nodeName))];
          }
          var pred = dom.makePredByNodeName(nodeName);
          var nodes = rng.nodes(dom.isText, {
              fullyContains: true
          }).map(function (text) {
              return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
          });
          if (expandClosestSibling) {
              if (onlyPartialContains) {
                  var nodesInRange_1 = rng.nodes();
                  // compose with partial contains predication
                  pred = func.and(pred, function (node) {
                      return lists.contains(nodesInRange_1, node);
                  });
              }
              return nodes.map(function (node) {
                  var siblings = dom.withClosestSiblings(node, pred);
                  var head = lists.head(siblings);
                  var tails = lists.tail(siblings);
                  $$1.each(tails, function (idx, elem) {
                      dom.appendChildNodes(head, elem.childNodes);
                      dom.remove(elem);
                  });
                  return lists.head(siblings);
              });
          }
          else {
              return nodes;
          }
      };
      /**
       * get current style on cursor
       *
       * @param {WrappedRange} rng
       * @return {Object} - object contains style properties.
       */
      Style.prototype.current = function (rng) {
          var $cont = $$1(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
          var styleInfo = this.fromNode($cont);
          // document.queryCommandState for toggle state
          // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"
          try {
              styleInfo = $$1.extend(styleInfo, {
                  'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
                  'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
                  'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
                  'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
                  'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
                  'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
                  'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
              });
          }
          catch (e) { }
          // list-style-type to list-style(unordered, ordered)
          if (!rng.isOnList()) {
              styleInfo['list-style'] = 'none';
          }
          else {
              var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
              var isUnordered = $$1.inArray(styleInfo['list-style-type'], orderedTypes) > -1;
              styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
          }
          var para = dom.ancestor(rng.sc, dom.isPara);
          if (para && para.style['line-height']) {
              styleInfo['line-height'] = para.style.lineHeight;
          }
          else {
              var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
              styleInfo['line-height'] = lineHeight.toFixed(1);
          }
          styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
          styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
          styleInfo.range = rng;
          return styleInfo;
      };
      return Style;
  }());

  var Bullet = /** @class */ (function () {
      function Bullet() {
      }
      /**
       * toggle ordered list
       */
      Bullet.prototype.insertOrderedList = function (editable) {
          this.toggleList('OL', editable);
      };
      /**
       * toggle unordered list
       */
      Bullet.prototype.insertUnorderedList = function (editable) {
          this.toggleList('UL', editable);
      };
      /**
       * indent
       */
      Bullet.prototype.indent = function (editable) {
          var _this = this;
          var rng = range.create(editable).wrapBodyInlineWithPara();
          var paras = rng.nodes(dom.isPara, { includeAncestor: true });
          var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
          $$1.each(clustereds, function (idx, paras) {
              var head = lists.head(paras);
              if (dom.isLi(head)) {
                  var previousList_1 = _this.findList(head.previousSibling);
                  if (previousList_1) {
                      paras
                          .map(function (para) { return previousList_1.appendChild(para); });
                  }
                  else {
                      _this.wrapList(paras, head.parentNode.nodeName);
                      paras
                          .map(function (para) { return para.parentNode; })
                          .map(function (para) { return _this.appendToPrevious(para); });
                  }
              }
              else {
                  $$1.each(paras, function (idx, para) {
                      $$1(para).css('marginLeft', function (idx, val) {
                          return (parseInt(val, 10) || 0) + 25;
                      });
                  });
              }
          });
          rng.select();
      };
      /**
       * outdent
       */
      Bullet.prototype.outdent = function (editable) {
          var _this = this;
          var rng = range.create(editable).wrapBodyInlineWithPara();
          var paras = rng.nodes(dom.isPara, { includeAncestor: true });
          var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
          $$1.each(clustereds, function (idx, paras) {
              var head = lists.head(paras);
              if (dom.isLi(head)) {
                  _this.releaseList([paras]);
              }
              else {
                  $$1.each(paras, function (idx, para) {
                      $$1(para).css('marginLeft', function (idx, val) {
                          val = (parseInt(val, 10) || 0);
                          return val > 25 ? val - 25 : '';
                      });
                  });
              }
          });
          rng.select();
      };
      /**
       * toggle list
       *
       * @param {String} listName - OL or UL
       */
      Bullet.prototype.toggleList = function (listName, editable) {
          var _this = this;
          var rng = range.create(editable).wrapBodyInlineWithPara();
          var paras = rng.nodes(dom.isPara, { includeAncestor: true });
          var bookmark = rng.paraBookmark(paras);
          var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
          // paragraph to list
          if (lists.find(paras, dom.isPurePara)) {
              var wrappedParas_1 = [];
              $$1.each(clustereds, function (idx, paras) {
                  wrappedParas_1 = wrappedParas_1.concat(_this.wrapList(paras, listName));
              });
              paras = wrappedParas_1;
              // list to paragraph or change list style
          }
          else {
              var diffLists = rng.nodes(dom.isList, {
                  includeAncestor: true
              }).filter(function (listNode) {
                  return !$$1.nodeName(listNode, listName);
              });
              if (diffLists.length) {
                  $$1.each(diffLists, function (idx, listNode) {
                      dom.replace(listNode, listName);
                  });
              }
              else {
                  paras = this.releaseList(clustereds, true);
              }
          }
          range.createFromParaBookmark(bookmark, paras).select();
      };
      /**
       * @param {Node[]} paras
       * @param {String} listName
       * @return {Node[]}
       */
      Bullet.prototype.wrapList = function (paras, listName) {
          var head = lists.head(paras);
          var last = lists.last(paras);
          var prevList = dom.isList(head.previousSibling) && head.previousSibling;
          var nextList = dom.isList(last.nextSibling) && last.nextSibling;
          var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);
          // P to LI
          paras = paras.map(function (para) {
              return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
          });
          // append to list(<ul>, <ol>)
          dom.appendChildNodes(listNode, paras);
          if (nextList) {
              dom.appendChildNodes(listNode, lists.from(nextList.childNodes));
              dom.remove(nextList);
          }
          return paras;
      };
      /**
       * @method releaseList
       *
       * @param {Array[]} clustereds
       * @param {Boolean} isEscapseToBody
       * @return {Node[]}
       */
      Bullet.prototype.releaseList = function (clustereds, isEscapseToBody) {
          var _this = this;
          var releasedParas = [];
          $$1.each(clustereds, function (idx, paras) {
              var head = lists.head(paras);
              var last = lists.last(paras);
              var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) : head.parentNode;
              var parentItem = headList.parentNode;
              if (headList.parentNode.nodeName === 'LI') {
                  paras.map(function (para) {
                      var newList = _this.findNextSiblings(para);
                      if (parentItem.nextSibling) {
                          parentItem.parentNode.insertBefore(para, parentItem.nextSibling);
                      }
                      else {
                          parentItem.parentNode.appendChild(para);
                      }
                      if (newList.length) {
                          _this.wrapList(newList, headList.nodeName);
                          para.appendChild(newList[0].parentNode);
                      }
                  });
                  if (headList.children.length === 0) {
                      parentItem.removeChild(headList);
                  }
                  if (parentItem.childNodes.length === 0) {
                      parentItem.parentNode.removeChild(parentItem);
                  }
              }
              else {
                  var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
                      node: last.parentNode,
                      offset: dom.position(last) + 1
                  }, {
                      isSkipPaddingBlankHTML: true
                  }) : null;
                  var middleList = dom.splitTree(headList, {
                      node: head.parentNode,
                      offset: dom.position(head)
                  }, {
                      isSkipPaddingBlankHTML: true
                  });
                  paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi)
                      : lists.from(middleList.childNodes).filter(dom.isLi);
                  // LI to P
                  if (isEscapseToBody || !dom.isList(headList.parentNode)) {
                      paras = paras.map(function (para) {
                          return dom.replace(para, 'P');
                      });
                  }
                  $$1.each(lists.from(paras).reverse(), function (idx, para) {
                      dom.insertAfter(para, headList);
                  });
                  // remove empty lists
                  var rootLists = lists.compact([headList, middleList, lastList]);
                  $$1.each(rootLists, function (idx, rootList) {
                      var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
                      $$1.each(listNodes.reverse(), function (idx, listNode) {
                          if (!dom.nodeLength(listNode)) {
                              dom.remove(listNode, true);
                          }
                      });
                  });
              }
              releasedParas = releasedParas.concat(paras);
          });
          return releasedParas;
      };
      /**
       * @method appendToPrevious
       *
       * Appends list to previous list item, if
       * none exist it wraps the list in a new list item.
       *
       * @param {HTMLNode} ListItem
       * @return {HTMLNode}
       */
      Bullet.prototype.appendToPrevious = function (node) {
          return node.previousSibling
              ? dom.appendChildNodes(node.previousSibling, [node])
              : this.wrapList([node], 'LI');
      };
      /**
       * @method findList
       *
       * Finds an existing list in list item
       *
       * @param {HTMLNode} ListItem
       * @return {Array[]}
       */
      Bullet.prototype.findList = function (node) {
          return node
              ? lists.find(node.children, function (child) { return ['OL', 'UL'].indexOf(child.nodeName) > -1; })
              : null;
      };
      /**
       * @method findNextSiblings
       *
       * Finds all list item siblings that follow it
       *
       * @param {HTMLNode} ListItem
       * @return {HTMLNode}
       */
      Bullet.prototype.findNextSiblings = function (node) {
          var siblings = [];
          while (node.nextSibling) {
              siblings.push(node.nextSibling);
              node = node.nextSibling;
          }
          return siblings;
      };
      return Bullet;
  }());

  /**
   * @class editing.Typing
   *
   * Typing
   *
   */
  var Typing = /** @class */ (function () {
      function Typing(context) {
          // a Bullet instance to toggle lists off
          this.bullet = new Bullet();
          this.options = context.options;
      }
      /**
       * insert tab
       *
       * @param {WrappedRange} rng
       * @param {Number} tabsize
       */
      Typing.prototype.insertTab = function (rng, tabsize) {
          var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
          rng = rng.deleteContents();
          rng.insertNode(tab, true);
          rng = range.create(tab, tabsize);
          rng.select();
      };
      /**
       * insert paragraph
       *
       * @param {jQuery} $editable
       * @param {WrappedRange} rng Can be used in unit tests to "mock" the range
       *
       * blockquoteBreakingLevel
       *   0 - No break, the new paragraph remains inside the quote
       *   1 - Break the first blockquote in the ancestors list
       *   2 - Break all blockquotes, so that the new paragraph is not quoted (this is the default)
       */
      Typing.prototype.insertParagraph = function (editable, rng) {
          rng = rng || range.create(editable);
          // deleteContents on range.
          rng = rng.deleteContents();
          // Wrap range if it needs to be wrapped by paragraph
          rng = rng.wrapBodyInlineWithPara();
          // finding paragraph
          var splitRoot = dom.ancestor(rng.sc, dom.isPara);
          var nextPara;
          // on paragraph: split paragraph
          if (splitRoot) {
              // if it is an empty line with li
              if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
                  // toogle UL/OL and escape
                  this.bullet.toggleList(splitRoot.parentNode.nodeName);
                  return;
              }
              else {
                  var blockquote = null;
                  if (this.options.blockquoteBreakingLevel === 1) {
                      blockquote = dom.ancestor(splitRoot, dom.isBlockquote);
                  }
                  else if (this.options.blockquoteBreakingLevel === 2) {
                      blockquote = dom.lastAncestor(splitRoot, dom.isBlockquote);
                  }
                  if (blockquote) {
                      // We're inside a blockquote and options ask us to break it
                      nextPara = $$1(dom.emptyPara)[0];
                      // If the split is right before a <br>, remove it so that there's no "empty line"
                      // after the split in the new blockquote created
                      if (dom.isRightEdgePoint(rng.getStartPoint()) && dom.isBR(rng.sc.nextSibling)) {
                          $$1(rng.sc.nextSibling).remove();
                      }
                      var split = dom.splitTree(blockquote, rng.getStartPoint(), { isDiscardEmptySplits: true });
                      if (split) {
                          split.parentNode.insertBefore(nextPara, split);
                      }
                      else {
                          dom.insertAfter(nextPara, blockquote); // There's no split if we were at the end of the blockquote
                      }
                  }
                  else {
                      nextPara = dom.splitTree(splitRoot, rng.getStartPoint());
                      // not a blockquote, just insert the paragraph
                      var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
                      emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
                      $$1.each(emptyAnchors, function (idx, anchor) {
                          dom.remove(anchor);
                      });
                      // replace empty heading, pre or custom-made styleTag with P tag
                      if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
                          nextPara = dom.replace(nextPara, 'p');
                      }
                  }
              }
              // no paragraph: insert empty paragraph
          }
          else {
              var next = rng.sc.childNodes[rng.so];
              nextPara = $$1(dom.emptyPara)[0];
              if (next) {
                  rng.sc.insertBefore(nextPara, next);
              }
              else {
                  rng.sc.appendChild(nextPara);
              }
          }
          range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
      };
      return Typing;
  }());

  /**
   * @class Create a virtual table to create what actions to do in change.
   * @param {object} startPoint Cell selected to apply change.
   * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
   * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
   * @param {object} domTable Dom element of table to make changes.
   */
  var TableResultAction = function (startPoint, where, action, domTable) {
      var _startPoint = { 'colPos': 0, 'rowPos': 0 };
      var _virtualTable = [];
      var _actionCellList = [];
      /// ///////////////////////////////////////////
      // Private functions
      /// ///////////////////////////////////////////
      /**
       * Set the startPoint of action.
       */
      function setStartPoint() {
          if (!startPoint || !startPoint.tagName || (startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th')) {
              console.error('Impossible to identify start Cell point.', startPoint);
              return;
          }
          _startPoint.colPos = startPoint.cellIndex;
          if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
              console.error('Impossible to identify start Row point.', startPoint);
              return;
          }
          _startPoint.rowPos = startPoint.parentElement.rowIndex;
      }
      /**
       * Define virtual table position info object.
       *
       * @param {int} rowIndex Index position in line of virtual table.
       * @param {int} cellIndex Index position in column of virtual table.
       * @param {object} baseRow Row affected by this position.
       * @param {object} baseCell Cell affected by this position.
       * @param {bool} isSpan Inform if it is an span cell/row.
       */
      function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
          var objPosition = {
              'baseRow': baseRow,
              'baseCell': baseCell,
              'isRowSpan': isRowSpan,
              'isColSpan': isColSpan,
              'isVirtual': isVirtualCell
          };
          if (!_virtualTable[rowIndex]) {
              _virtualTable[rowIndex] = [];
          }
          _virtualTable[rowIndex][cellIndex] = objPosition;
      }
      /**
       * Create action cell object.
       *
       * @param {object} virtualTableCellObj Object of specific position on virtual table.
       * @param {enum} resultAction Action to be applied in that item.
       */
      function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
          return {
              'baseCell': virtualTableCellObj.baseCell,
              'action': resultAction,
              'virtualTable': {
                  'rowIndex': virtualRowPosition,
                  'cellIndex': virtualColPosition
              }
          };
      }
      /**
       * Recover free index of row to append Cell.
       *
       * @param {int} rowIndex Index of row to find free space.
       * @param {int} cellIndex Index of cell to find free space in table.
       */
      function recoverCellIndex(rowIndex, cellIndex) {
          if (!_virtualTable[rowIndex]) {
              return cellIndex;
          }
          if (!_virtualTable[rowIndex][cellIndex]) {
              return cellIndex;
          }
          var newCellIndex = cellIndex;
          while (_virtualTable[rowIndex][newCellIndex]) {
              newCellIndex++;
              if (!_virtualTable[rowIndex][newCellIndex]) {
                  return newCellIndex;
              }
          }
      }
      /**
       * Recover info about row and cell and add information to virtual table.
       *
       * @param {object} row Row to recover information.
       * @param {object} cell Cell to recover information.
       */
      function addCellInfoToVirtual(row, cell) {
          var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
          var cellHasColspan = (cell.colSpan > 1);
          var cellHasRowspan = (cell.rowSpan > 1);
          var isThisSelectedCell = (row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos);
          setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false);
          // Add span rows to virtual Table.
          var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;
          if (rowspanNumber > 1) {
              for (var rp = 1; rp < rowspanNumber; rp++) {
                  var rowspanIndex = row.rowIndex + rp;
                  adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
                  setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
              }
          }
          // Add span cols to virtual table.
          var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;
          if (colspanNumber > 1) {
              for (var cp = 1; cp < colspanNumber; cp++) {
                  var cellspanIndex = recoverCellIndex(row.rowIndex, (cellIndex + cp));
                  adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
                  setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
              }
          }
      }
      /**
       * Process validation and adjust of start point if needed
       *
       * @param {int} rowIndex
       * @param {int} cellIndex
       * @param {object} cell
       * @param {bool} isSelectedCell
       */
      function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
          if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
              _startPoint.colPos++;
          }
      }
      /**
       * Create virtual table of cells with all cells, including span cells.
       */
      function createVirtualTable() {
          var rows = domTable.rows;
          for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
              var cells = rows[rowIndex].cells;
              for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
                  addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
              }
          }
      }
      /**
       * Get action to be applied on the cell.
       *
       * @param {object} cell virtual table cell to apply action
       */
      function getDeleteResultActionToCell(cell) {
          switch (where) {
              case TableResultAction.where.Column:
                  if (cell.isColSpan) {
                      return TableResultAction.resultAction.SubtractSpanCount;
                  }
                  break;
              case TableResultAction.where.Row:
                  if (!cell.isVirtual && cell.isRowSpan) {
                      return TableResultAction.resultAction.AddCell;
                  }
                  else if (cell.isRowSpan) {
                      return TableResultAction.resultAction.SubtractSpanCount;
                  }
                  break;
          }
          return TableResultAction.resultAction.RemoveCell;
      }
      /**
       * Get action to be applied on the cell.
       *
       * @param {object} cell virtual table cell to apply action
       */
      function getAddResultActionToCell(cell) {
          switch (where) {
              case TableResultAction.where.Column:
                  if (cell.isColSpan) {
                      return TableResultAction.resultAction.SumSpanCount;
                  }
                  else if (cell.isRowSpan && cell.isVirtual) {
                      return TableResultAction.resultAction.Ignore;
                  }
                  break;
              case TableResultAction.where.Row:
                  if (cell.isRowSpan) {
                      return TableResultAction.resultAction.SumSpanCount;
                  }
                  else if (cell.isColSpan && cell.isVirtual) {
                      return TableResultAction.resultAction.Ignore;
                  }
                  break;
          }
          return TableResultAction.resultAction.AddCell;
      }
      function init() {
          setStartPoint();
          createVirtualTable();
      }
      /// ///////////////////////////////////////////
      // Public functions
      /// ///////////////////////////////////////////
      /**
       * Recover array os what to do in table.
       */
      this.getActionList = function () {
          var fixedRow = (where === TableResultAction.where.Row) ? _startPoint.rowPos : -1;
          var fixedCol = (where === TableResultAction.where.Column) ? _startPoint.colPos : -1;
          var actualPosition = 0;
          var canContinue = true;
          while (canContinue) {
              var rowPosition = (fixedRow >= 0) ? fixedRow : actualPosition;
              var colPosition = (fixedCol >= 0) ? fixedCol : actualPosition;
              var row = _virtualTable[rowPosition];
              if (!row) {
                  canContinue = false;
                  return _actionCellList;
              }
              var cell = row[colPosition];
              if (!cell) {
                  canContinue = false;
                  return _actionCellList;
              }
              // Define action to be applied in this cell
              var resultAction = TableResultAction.resultAction.Ignore;
              switch (action) {
                  case TableResultAction.requestAction.Add:
                      resultAction = getAddResultActionToCell(cell);
                      break;
                  case TableResultAction.requestAction.Delete:
                      resultAction = getDeleteResultActionToCell(cell);
                      break;
              }
              _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));
              actualPosition++;
          }
          return _actionCellList;
      };
      init();
  };
  /**
  *
  * Where action occours enum.
  */
  TableResultAction.where = { 'Row': 0, 'Column': 1 };
  /**
  *
  * Requested action to apply enum.
  */
  TableResultAction.requestAction = { 'Add': 0, 'Delete': 1 };
  /**
  *
  * Result action to be executed enum.
  */
  TableResultAction.resultAction = { 'Ignore': 0, 'SubtractSpanCount': 1, 'RemoveCell': 2, 'AddCell': 3, 'SumSpanCount': 4 };
  /**
   *
   * @class editing.Table
   *
   * Table
   *
   */
  var Table = /** @class */ (function () {
      function Table() {
      }
      /**
       * handle tab key
       *
       * @param {WrappedRange} rng
       * @param {Boolean} isShift
       */
      Table.prototype.tab = function (rng, isShift) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var table = dom.ancestor(cell, dom.isTable);
          var cells = dom.listDescendant(table, dom.isCell);
          var nextCell = lists[isShift ? 'prev' : 'next'](cells, cell);
          if (nextCell) {
              range.create(nextCell, 0).select();
          }
      };
      /**
       * Add a new row
       *
       * @param {WrappedRange} rng
       * @param {String} position (top/bottom)
       * @return {Node}
       */
      Table.prototype.addRow = function (rng, position) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var currentTr = $$1(cell).closest('tr');
          var trAttributes = this.recoverAttributes(currentTr);
          var html = $$1('<tr' + trAttributes + '></tr>');
          var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Add, $$1(currentTr).closest('table')[0]);
          var actions = vTable.getActionList();
          for (var idCell = 0; idCell < actions.length; idCell++) {
              var currentCell = actions[idCell];
              var tdAttributes = this.recoverAttributes(currentCell.baseCell);
              switch (currentCell.action) {
                  case TableResultAction.resultAction.AddCell:
                      html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
                      break;
                  case TableResultAction.resultAction.SumSpanCount:
                      if (position === 'top') {
                          var baseCellTr = currentCell.baseCell.parent;
                          var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;
                          if (isTopFromRowSpan) {
                              var newTd = $$1('<div></div>').append($$1('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                              html.append(newTd);
                              break;
                          }
                      }
                      var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
                      rowspanNumber++;
                      currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
                      break;
              }
          }
          if (position === 'top') {
              currentTr.before(html);
          }
          else {
              var cellHasRowspan = (cell.rowSpan > 1);
              if (cellHasRowspan) {
                  var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
                  $$1($$1(currentTr).parent().find('tr')[lastTrIndex]).after($$1(html));
                  return;
              }
              currentTr.after(html);
          }
      };
      /**
       * Add a new col
       *
       * @param {WrappedRange} rng
       * @param {String} position (left/right)
       * @return {Node}
       */
      Table.prototype.addCol = function (rng, position) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var row = $$1(cell).closest('tr');
          var rowsGroup = $$1(row).siblings();
          rowsGroup.push(row);
          var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Add, $$1(row).closest('table')[0]);
          var actions = vTable.getActionList();
          for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
              var currentCell = actions[actionIndex];
              var tdAttributes = this.recoverAttributes(currentCell.baseCell);
              switch (currentCell.action) {
                  case TableResultAction.resultAction.AddCell:
                      if (position === 'right') {
                          $$1(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
                      }
                      else {
                          $$1(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                      }
                      break;
                  case TableResultAction.resultAction.SumSpanCount:
                      if (position === 'right') {
                          var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
                          colspanNumber++;
                          currentCell.baseCell.setAttribute('colSpan', colspanNumber);
                      }
                      else {
                          $$1(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                      }
                      break;
              }
          }
      };
      /*
      * Copy attributes from element.
      *
      * @param {object} Element to recover attributes.
      * @return {string} Copied string elements.
      */
      Table.prototype.recoverAttributes = function (el) {
          var resultStr = '';
          if (!el) {
              return resultStr;
          }
          var attrList = el.attributes || [];
          for (var i = 0; i < attrList.length; i++) {
              if (attrList[i].name.toLowerCase() === 'id') {
                  continue;
              }
              if (attrList[i].specified) {
                  resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
              }
          }
          return resultStr;
      };
      /**
       * Delete current row
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
      Table.prototype.deleteRow = function (rng) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var row = $$1(cell).closest('tr');
          var cellPos = row.children('td, th').index($$1(cell));
          var rowPos = row[0].rowIndex;
          var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Delete, $$1(row).closest('table')[0]);
          var actions = vTable.getActionList();
          for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
              if (!actions[actionIndex]) {
                  continue;
              }
              var baseCell = actions[actionIndex].baseCell;
              var virtualPosition = actions[actionIndex].virtualTable;
              var hasRowspan = (baseCell.rowSpan && baseCell.rowSpan > 1);
              var rowspanNumber = (hasRowspan) ? parseInt(baseCell.rowSpan, 10) : 0;
              switch (actions[actionIndex].action) {
                  case TableResultAction.resultAction.Ignore:
                      continue;
                  case TableResultAction.resultAction.AddCell:
                      var nextRow = row.next('tr')[0];
                      if (!nextRow) {
                          continue;
                      }
                      var cloneRow = row[0].cells[cellPos];
                      if (hasRowspan) {
                          if (rowspanNumber > 2) {
                              rowspanNumber--;
                              nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                              nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                              nextRow.cells[cellPos].innerHTML = '';
                          }
                          else if (rowspanNumber === 2) {
                              nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                              nextRow.cells[cellPos].removeAttribute('rowSpan');
                              nextRow.cells[cellPos].innerHTML = '';
                          }
                      }
                      continue;
                  case TableResultAction.resultAction.SubtractSpanCount:
                      if (hasRowspan) {
                          if (rowspanNumber > 2) {
                              rowspanNumber--;
                              baseCell.setAttribute('rowSpan', rowspanNumber);
                              if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                  baseCell.innerHTML = '';
                              }
                          }
                          else if (rowspanNumber === 2) {
                              baseCell.removeAttribute('rowSpan');
                              if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                  baseCell.innerHTML = '';
                              }
                          }
                      }
                      continue;
                  case TableResultAction.resultAction.RemoveCell:
                      // Do not need remove cell because row will be deleted.
                      continue;
              }
          }
          row.remove();
      };
      /**
       * Delete current col
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
      Table.prototype.deleteCol = function (rng) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var row = $$1(cell).closest('tr');
          var cellPos = row.children('td, th').index($$1(cell));
          var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Delete, $$1(row).closest('table')[0]);
          var actions = vTable.getActionList();
          for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
              if (!actions[actionIndex]) {
                  continue;
              }
              switch (actions[actionIndex].action) {
                  case TableResultAction.resultAction.Ignore:
                      continue;
                  case TableResultAction.resultAction.SubtractSpanCount:
                      var baseCell = actions[actionIndex].baseCell;
                      var hasColspan = (baseCell.colSpan && baseCell.colSpan > 1);
                      if (hasColspan) {
                          var colspanNumber = (baseCell.colSpan) ? parseInt(baseCell.colSpan, 10) : 0;
                          if (colspanNumber > 2) {
                              colspanNumber--;
                              baseCell.setAttribute('colSpan', colspanNumber);
                              if (baseCell.cellIndex === cellPos) {
                                  baseCell.innerHTML = '';
                              }
                          }
                          else if (colspanNumber === 2) {
                              baseCell.removeAttribute('colSpan');
                              if (baseCell.cellIndex === cellPos) {
                                  baseCell.innerHTML = '';
                              }
                          }
                      }
                      continue;
                  case TableResultAction.resultAction.RemoveCell:
                      dom.remove(actions[actionIndex].baseCell, true);
                      continue;
              }
          }
      };
      /**
       * create empty table element
       *
       * @param {Number} rowCount
       * @param {Number} colCount
       * @return {Node}
       */
      Table.prototype.createTable = function (colCount, rowCount, options) {
          var tds = [];
          var tdHTML;
          for (var idxCol = 0; idxCol < colCount; idxCol++) {
              tds.push('<td>' + dom.blank + '</td>');
          }
          tdHTML = tds.join('');
          var trs = [];
          var trHTML;
          for (var idxRow = 0; idxRow < rowCount; idxRow++) {
              trs.push('<tr>' + tdHTML + '</tr>');
          }
          trHTML = trs.join('');
          var $table = $$1('<table>' + trHTML + '</table>');
          if (options && options.tableClassName) {
              $table.addClass(options.tableClassName);
          }
          return $table[0];
      };
      /**
       * Delete current table
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
      Table.prototype.deleteTable = function (rng) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          $$1(cell).closest('table').remove();
      };
      return Table;
  }());

  var KEY_BOGUS = 'bogus';
  /**
   * @class Editor
   */
  var Editor = /** @class */ (function () {
      function Editor(context) {
          var _this = this;
          this.context = context;
          this.$note = context.layoutInfo.note;
          this.$editor = context.layoutInfo.editor;
          this.$editable = context.layoutInfo.editable;
          this.options = context.options;
          this.lang = this.options.langInfo;
          this.editable = this.$editable[0];
          this.lastRange = null;
          this.style = new Style();
          this.table = new Table();
          this.typing = new Typing(context);
          this.bullet = new Bullet();
          this.history = new History(this.$editable);
          this.context.memo('help.undo', this.lang.help.undo);
          this.context.memo('help.redo', this.lang.help.redo);
          this.context.memo('help.tab', this.lang.help.tab);
          this.context.memo('help.untab', this.lang.help.untab);
          this.context.memo('help.insertParagraph', this.lang.help.insertParagraph);
          this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList);
          this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList);
          this.context.memo('help.indent', this.lang.help.indent);
          this.context.memo('help.outdent', this.lang.help.outdent);
          this.context.memo('help.formatPara', this.lang.help.formatPara);
          this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule);
          this.context.memo('help.fontName', this.lang.help.fontName);
          // native commands(with execCommand), generate function for execCommand
          var commands = [
              'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
              'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
              'formatBlock', 'removeFormat', 'backColor'
          ];
          for (var idx = 0, len = commands.length; idx < len; idx++) {
              this[commands[idx]] = (function (sCmd) {
                  return function (value) {
                      _this.beforeCommand();
                      document.execCommand(sCmd, false, value);
                      _this.afterCommand(true);
                  };
              })(commands[idx]);
              this.context.memo('help.' + commands[idx], this.lang.help[commands[idx]]);
          }
          this.fontName = this.wrapCommand(function (value) {
              return _this.fontStyling('font-family', "\'" + value + "\'");
          });
          this.fontSize = this.wrapCommand(function (value) {
              return _this.fontStyling('font-size', value + 'px');
          });
          for (var idx = 1; idx <= 6; idx++) {
              this['formatH' + idx] = (function (idx) {
                  return function () {
                      _this.formatBlock('H' + idx);
                  };
              })(idx);
              this.context.memo('help.formatH' + idx, this.lang.help['formatH' + idx]);
          }
          this.insertParagraph = this.wrapCommand(function () {
              _this.typing.insertParagraph(_this.editable);
          });
          this.insertOrderedList = this.wrapCommand(function () {
              _this.bullet.insertOrderedList(_this.editable);
          });
          this.insertUnorderedList = this.wrapCommand(function () {
              _this.bullet.insertUnorderedList(_this.editable);
          });
          this.indent = this.wrapCommand(function () {
              _this.bullet.indent(_this.editable);
          });
          this.outdent = this.wrapCommand(function () {
              _this.bullet.outdent(_this.editable);
          });
          /**
           * insertNode
           * insert node
           * @param {Node} node
           */
          this.insertNode = this.wrapCommand(function (node) {
              if (_this.isLimited($$1(node).text().length)) {
                  return;
              }
              var rng = _this.createRange();
              rng.insertNode(node);
              range.createFromNodeAfter(node).select();
          });
          /**
           * insert text
           * @param {String} text
           */
          this.insertText = this.wrapCommand(function (text) {
              if (_this.isLimited(text.length)) {
                  return;
              }
              var rng = _this.createRange();
              var textNode = rng.insertNode(dom.createText(text));
              range.create(textNode, dom.nodeLength(textNode)).select();
          });
          /**
           * paste HTML
           * @param {String} markup
           */
          this.pasteHTML = this.wrapCommand(function (markup) {
              if (_this.isLimited(markup.length)) {
                  return;
              }
              var contents = _this.createRange().pasteHTML(markup);
              range.createFromNodeAfter(lists.last(contents)).select();
          });
          /**
           * formatBlock
           *
           * @param {String} tagName
           */
          this.formatBlock = this.wrapCommand(function (tagName, $target) {
              var onApplyCustomStyle = _this.options.callbacks.onApplyCustomStyle;
              if (onApplyCustomStyle) {
                  onApplyCustomStyle.call(_this, $target, _this.context, _this.onFormatBlock);
              }
              else {
                  _this.onFormatBlock(tagName, $target);
              }
          });
          /**
           * insert horizontal rule
           */
          this.insertHorizontalRule = this.wrapCommand(function () {
              var hrNode = _this.createRange().insertNode(dom.create('HR'));
              if (hrNode.nextSibling) {
                  range.create(hrNode.nextSibling, 0).normalize().select();
              }
          });
          /**
           * lineHeight
           * @param {String} value
           */
          this.lineHeight = this.wrapCommand(function (value) {
              _this.style.stylePara(_this.createRange(), {
                  lineHeight: value
              });
          });
          /**
           * create link (command)
           *
           * @param {Object} linkInfo
           */
          this.createLink = this.wrapCommand(function (linkInfo) {
              var linkUrl = linkInfo.url;
              var linkText = linkInfo.text;
              var isNewWindow = linkInfo.isNewWindow;
              var rng = linkInfo.range || _this.createRange();
              var additionalTextLength = linkText.length - rng.toString().length;
              if (additionalTextLength > 0 && _this.isLimited(additionalTextLength)) {
                  return;
              }
              var isTextChanged = rng.toString() !== linkText;
              // handle spaced urls from input
              if (typeof linkUrl === 'string') {
                  linkUrl = linkUrl.trim();
              }
              if (_this.options.onCreateLink) {
                  linkUrl = _this.options.onCreateLink(linkUrl);
              }
              else {
                  // if url is not relative,
                  if (!/^\.?\/(.*)/.test(linkUrl)) {
                      // if url doesn't match an URL schema, set http:// as default
                      linkUrl = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(linkUrl)
                          ? linkUrl : 'http://' + linkUrl;
                  }
              }
              var anchors = [];
              if (isTextChanged) {
                  rng = rng.deleteContents();
                  var anchor = rng.insertNode($$1('<A>' + linkText + '</A>')[0]);
                  anchors.push(anchor);
              }
              else {
                  anchors = _this.style.styleNodes(rng, {
                      nodeName: 'A',
                      expandClosestSibling: true,
                      onlyPartialContains: true
                  });
              }
              $$1.each(anchors, function (idx, anchor) {
                  $$1(anchor).attr('href', linkUrl);
                  if (isNewWindow) {
                      $$1(anchor).attr('target', '_blank');
                  }
                  else {
                      $$1(anchor).removeAttr('target');
                  }
              });
              var startRange = range.createFromNodeBefore(lists.head(anchors));
              var startPoint = startRange.getStartPoint();
              var endRange = range.createFromNodeAfter(lists.last(anchors));
              var endPoint = endRange.getEndPoint();
              range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset).select();
          });
          /**
           * setting color
           *
           * @param {Object} sObjColor  color code
           * @param {String} sObjColor.foreColor foreground color
           * @param {String} sObjColor.backColor background color
           */
          this.color = this.wrapCommand(function (colorInfo) {
              var foreColor = colorInfo.foreColor;
              var backColor = colorInfo.backColor;
              if (foreColor) {
                  document.execCommand('foreColor', false, foreColor);
              }
              if (backColor) {
                  document.execCommand('backColor', false, backColor);
              }
          });
          /**
           * Set foreground color
           *
           * @param {String} colorCode foreground color code
           */
          this.foreColor = this.wrapCommand(function (colorInfo) {
              document.execCommand('styleWithCSS', false, true);
              document.execCommand('foreColor', false, colorInfo);
          });
          /**
           * insert Table
           *
           * @param {String} dimension of table (ex : "5x5")
           */
          this.insertTable = this.wrapCommand(function (dim) {
              var dimension = dim.split('x');
              var rng = _this.createRange().deleteContents();
              rng.insertNode(_this.table.createTable(dimension[0], dimension[1], _this.options));
          });
          /**
           * remove media object and Figure Elements if media object is img with Figure.
           */
          this.removeMedia = this.wrapCommand(function () {
              var $target = $$1(_this.restoreTarget()).parent();
              if ($target.parent('figure').length) {
                  $target.parent('figure').remove();
              }
              else {
                  $target = $$1(_this.restoreTarget()).detach();
              }
              _this.context.triggerEvent('media.delete', $target, _this.$editable);
          });
          /**
           * float me
           *
           * @param {String} value
           */
          this.floatMe = this.wrapCommand(function (value) {
              var $target = $$1(_this.restoreTarget());
              $target.toggleClass('note-float-left', value === 'left');
              $target.toggleClass('note-float-right', value === 'right');
              $target.css('float', value);
          });
          /**
           * resize overlay element
           * @param {String} value
           */
          this.resize = this.wrapCommand(function (value) {
              var $target = $$1(_this.restoreTarget());
              $target.css({
                  width: value * 100 + '%',
                  height: ''
              });
          });
      }
      Editor.prototype.initialize = function () {
          var _this = this;
          // bind custom events
          this.$editable.on('keydown', function (event) {
              if (event.keyCode === key.code.ENTER) {
                  _this.context.triggerEvent('enter', event);
              }
              _this.context.triggerEvent('keydown', event);
              if (!event.isDefaultPrevented()) {
                  if (_this.options.shortcuts) {
                      _this.handleKeyMap(event);
                  }
                  else {
                      _this.preventDefaultEditableShortCuts(event);
                  }
              }
              if (_this.isLimited(1, event)) {
                  return false;
              }
          }).on('keyup', function (event) {
              _this.context.triggerEvent('keyup', event);
          }).on('focus', function (event) {
              _this.context.triggerEvent('focus', event);
          }).on('blur', function (event) {
              _this.context.triggerEvent('blur', event);
          }).on('mousedown', function (event) {
              _this.context.triggerEvent('mousedown', event);
          }).on('mouseup', function (event) {
              _this.context.triggerEvent('mouseup', event);
          }).on('scroll', function (event) {
              _this.context.triggerEvent('scroll', event);
          }).on('paste', function (event) {
              _this.context.triggerEvent('paste', event);
          });
          // init content before set event
          this.$editable.html(dom.html(this.$note) || dom.emptyPara);
          this.$editable.on(env.inputEventName, func.debounce(function () {
              _this.context.triggerEvent('change', _this.$editable.html());
          }, 10));
          this.$editor.on('focusin', function (event) {
              _this.context.triggerEvent('focusin', event);
          }).on('focusout', function (event) {
              _this.context.triggerEvent('focusout', event);
          });
          if (!this.options.airMode) {
              if (this.options.width) {
                  this.$editor.outerWidth(this.options.width);
              }
              if (this.options.height) {
                  this.$editable.outerHeight(this.options.height);
              }
              if (this.options.maxHeight) {
                  this.$editable.css('max-height', this.options.maxHeight);
              }
              if (this.options.minHeight) {
                  this.$editable.css('min-height', this.options.minHeight);
              }
          }
          this.history.recordUndo();
      };
      Editor.prototype.destroy = function () {
          this.$editable.off();
      };
      Editor.prototype.handleKeyMap = function (event) {
          var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
          var keys = [];
          if (event.metaKey) {
              keys.push('CMD');
          }
          if (event.ctrlKey && !event.altKey) {
              keys.push('CTRL');
          }
          if (event.shiftKey) {
              keys.push('SHIFT');
          }
          var keyName = key.nameFromCode[event.keyCode];
          if (keyName) {
              keys.push(keyName);
          }
          var eventName = keyMap[keys.join('+')];
          if (eventName) {
              if (this.context.invoke(eventName) !== false) {
                  event.preventDefault();
              }
          }
          else if (key.isEdit(event.keyCode)) {
              this.afterCommand();
          }
      };
      Editor.prototype.preventDefaultEditableShortCuts = function (event) {
          // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
          if ((event.ctrlKey || event.metaKey) &&
              lists.contains([66, 73, 85], event.keyCode)) {
              event.preventDefault();
          }
      };
      Editor.prototype.isLimited = function (pad, event) {
          pad = pad || 0;
          if (typeof event !== 'undefined') {
              if (key.isMove(event.keyCode) ||
                  (event.ctrlKey || event.metaKey) ||
                  lists.contains([key.code.BACKSPACE, key.code.DELETE], event.keyCode)) {
                  return false;
              }
          }
          if (this.options.maxTextLength > 0) {
              if ((this.$editable.text().length + pad) >= this.options.maxTextLength) {
                  return true;
              }
          }
          return false;
      };
      /**
       * create range
       * @return {WrappedRange}
       */
      Editor.prototype.createRange = function () {
          this.focus();
          return range.create(this.editable);
      };
      /**
       * saveRange
       *
       * save current range
       *
       * @param {Boolean} [thenCollapse=false]
       */
      Editor.prototype.saveRange = function (thenCollapse) {
          this.lastRange = this.createRange();
          if (thenCollapse) {
              this.lastRange.collapse().select();
          }
      };
      /**
       * restoreRange
       *
       * restore lately range
       */
      Editor.prototype.restoreRange = function () {
          if (this.lastRange) {
              this.lastRange.select();
              this.focus();
          }
      };
      Editor.prototype.saveTarget = function (node) {
          this.$editable.data('target', node);
      };
      Editor.prototype.clearTarget = function () {
          this.$editable.removeData('target');
      };
      Editor.prototype.restoreTarget = function () {
          return this.$editable.data('target');
      };
      /**
       * currentStyle
       *
       * current style
       * @return {Object|Boolean} unfocus
       */
      Editor.prototype.currentStyle = function () {
          var rng = range.create();
          if (rng) {
              rng = rng.normalize();
          }
          return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
      };
      /**
       * style from node
       *
       * @param {jQuery} $node
       * @return {Object}
       */
      Editor.prototype.styleFromNode = function ($node) {
          return this.style.fromNode($node);
      };
      /**
       * undo
       */
      Editor.prototype.undo = function () {
          this.context.triggerEvent('before.command', this.$editable.html());
          this.history.undo();
          this.context.triggerEvent('change', this.$editable.html());
      };
      /*
      * commit
      */
      Editor.prototype.commit = function () {
          this.context.triggerEvent('before.command', this.$editable.html());
          this.history.commit();
          this.context.triggerEvent('change', this.$editable.html());
      };
      /**
       * redo
       */
      Editor.prototype.redo = function () {
          this.context.triggerEvent('before.command', this.$editable.html());
          this.history.redo();
          this.context.triggerEvent('change', this.$editable.html());
      };
      /**
       * before command
       */
      Editor.prototype.beforeCommand = function () {
          this.context.triggerEvent('before.command', this.$editable.html());
          // keep focus on editable before command execution
          this.focus();
      };
      /**
       * after command
       * @param {Boolean} isPreventTrigger
       */
      Editor.prototype.afterCommand = function (isPreventTrigger) {
          this.normalizeContent();
          this.history.recordUndo();
          if (!isPreventTrigger) {
              this.context.triggerEvent('change', this.$editable.html());
          }
      };
      /**
       * handle tab key
       */
      Editor.prototype.tab = function () {
          var rng = this.createRange();
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.table.tab(rng);
          }
          else {
              if (this.options.tabSize === 0) {
                  return false;
              }
              if (!this.isLimited(this.options.tabSize)) {
                  this.beforeCommand();
                  this.typing.insertTab(rng, this.options.tabSize);
                  this.afterCommand();
              }
          }
      };
      /**
       * handle shift+tab key
       */
      Editor.prototype.untab = function () {
          var rng = this.createRange();
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.table.tab(rng, true);
          }
          else {
              if (this.options.tabSize === 0) {
                  return false;
              }
          }
      };
      /**
       * run given function between beforeCommand and afterCommand
       */
      Editor.prototype.wrapCommand = function (fn) {
          return function () {
              this.beforeCommand();
              fn.apply(this, arguments);
              this.afterCommand();
          };
      };
      /**
       * insert image
       *
       * @param {String} src
       * @param {String|Function} param
       * @return {Promise}
       */
      Editor.prototype.insertImage = function (src, param) {
          var _this = this;
          return createImage(src, param).then(function ($image) {
              _this.beforeCommand();
              if (typeof param === 'function') {
                  param($image);
              }
              else {
                  if (typeof param === 'string') {
                      $image.attr('data-filename', param);
                  }
                  $image.css('width', Math.min(_this.$editable.width(), $image.width()));
              }
              $image.show();
              range.create(_this.editable).insertNode($image[0]);
              range.createFromNodeAfter($image[0]).select();
              _this.afterCommand();
          }).fail(function (e) {
              _this.context.triggerEvent('image.upload.error', e);
          });
      };
      /**
       * insertImages
       * @param {File[]} files
       */
      Editor.prototype.insertImagesAsDataURL = function (files) {
          var _this = this;
          $$1.each(files, function (idx, file) {
              var filename = file.name;
              if (_this.options.maximumImageFileSize && _this.options.maximumImageFileSize < file.size) {
                  _this.context.triggerEvent('image.upload.error', _this.lang.image.maximumFileSizeError);
              }
              else {
                  readFileAsDataURL(file).then(function (dataURL) {
                      return _this.insertImage(dataURL, filename);
                  }).fail(function () {
                      _this.context.triggerEvent('image.upload.error');
                  });
              }
          });
      };
      /**
       * return selected plain text
       * @return {String} text
       */
      Editor.prototype.getSelectedText = function () {
          var rng = this.createRange();
          // if range on anchor, expand range with anchor
          if (rng.isOnAnchor()) {
              rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
          }
          return rng.toString();
      };
      Editor.prototype.onFormatBlock = function (tagName, $target) {
          // [workaround] for MSIE, IE need `<`
          tagName = env.isMSIE ? '<' + tagName + '>' : tagName;
          document.execCommand('FormatBlock', false, tagName);
          // support custom class
          if ($target && $target.length) {
              var className = $target[0].className || '';
              if (className) {
                  var currentRange = this.createRange();
                  var $parent = $$1([currentRange.sc, currentRange.ec]).closest(tagName);
                  $parent.addClass(className);
              }
          }
      };
      Editor.prototype.formatPara = function () {
          this.formatBlock('P');
      };
      Editor.prototype.fontStyling = function (target, value) {
          var rng = this.createRange();
          if (rng) {
              var spans = this.style.styleNodes(rng);
              $$1(spans).css(target, value);
              // [workaround] added styled bogus span for style
              //  - also bogus character needed for cursor position
              if (rng.isCollapsed()) {
                  var firstSpan = lists.head(spans);
                  if (firstSpan && !dom.nodeLength(firstSpan)) {
                      firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
                      range.createFromNodeAfter(firstSpan.firstChild).select();
                      this.$editable.data(KEY_BOGUS, firstSpan);
                  }
              }
          }
      };
      /**
       * unlink
       *
       * @type command
       */
      Editor.prototype.unlink = function () {
          var rng = this.createRange();
          if (rng.isOnAnchor()) {
              var anchor = dom.ancestor(rng.sc, dom.isAnchor);
              rng = range.createFromNode(anchor);
              rng.select();
              this.beforeCommand();
              document.execCommand('unlink');
              this.afterCommand();
          }
      };
      /**
       * returns link info
       *
       * @return {Object}
       * @return {WrappedRange} return.range
       * @return {String} return.text
       * @return {Boolean} [return.isNewWindow=true]
       * @return {String} [return.url=""]
       */
      Editor.prototype.getLinkInfo = function () {
          var rng = this.createRange().expand(dom.isAnchor);
          // Get the first anchor on range(for edit).
          var $anchor = $$1(lists.head(rng.nodes(dom.isAnchor)));
          var linkInfo = {
              range: rng,
              text: rng.toString(),
              url: $anchor.length ? $anchor.attr('href') : ''
          };
          // When anchor exists,
          if ($anchor.length) {
              // Set isNewWindow by checking its target.
              linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
          }
          return linkInfo;
      };
      Editor.prototype.addRow = function (position) {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.addRow(rng, position);
              this.afterCommand();
          }
      };
      Editor.prototype.addCol = function (position) {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.addCol(rng, position);
              this.afterCommand();
          }
      };
      Editor.prototype.deleteRow = function () {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.deleteRow(rng);
              this.afterCommand();
          }
      };
      Editor.prototype.deleteCol = function () {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.deleteCol(rng);
              this.afterCommand();
          }
      };
      Editor.prototype.deleteTable = function () {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.deleteTable(rng);
              this.afterCommand();
          }
      };
      /**
       * @param {Position} pos
       * @param {jQuery} $target - target element
       * @param {Boolean} [bKeepRatio] - keep ratio
       */
      Editor.prototype.resizeTo = function (pos, $target, bKeepRatio) {
          var imageSize;
          if (bKeepRatio) {
              var newRatio = pos.y / pos.x;
              var ratio = $target.data('ratio');
              imageSize = {
                  width: ratio > newRatio ? pos.x : pos.y / ratio,
                  height: ratio > newRatio ? pos.x * ratio : pos.y
              };
          }
          else {
              imageSize = {
                  width: pos.x,
                  height: pos.y
              };
          }
          $target.css(imageSize);
      };
      /**
       * returns whether editable area has focus or not.
       */
      Editor.prototype.hasFocus = function () {
          return this.$editable.is(':focus');
      };
      /**
       * set focus
       */
      Editor.prototype.focus = function () {
          // [workaround] Screen will move when page is scolled in IE.
          //  - do focus when not focused
          if (!this.hasFocus()) {
              this.$editable.focus();
          }
      };
      /**
       * returns whether contents is empty or not.
       * @return {Boolean}
       */
      Editor.prototype.isEmpty = function () {
          return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
      };
      /**
       * Removes all contents and restores the editable instance to an _emptyPara_.
       */
      Editor.prototype.empty = function () {
          this.context.invoke('code', dom.emptyPara);
      };
      /**
       * normalize content
       */
      Editor.prototype.normalizeContent = function () {
          this.$editable[0].normalize();
      };
      return Editor;
  }());

  var Clipboard = /** @class */ (function () {
      function Clipboard(context) {
          this.context = context;
          this.$editable = context.layoutInfo.editable;
      }
      Clipboard.prototype.initialize = function () {
          this.$editable.on('paste', this.pasteByEvent.bind(this));
      };
      /**
       * paste by clipboard event
       *
       * @param {Event} event
       */
      Clipboard.prototype.pasteByEvent = function (event) {
          var clipboardData = event.originalEvent.clipboardData;
          if (clipboardData && clipboardData.items && clipboardData.items.length) {
              // paste img file
              var item = clipboardData.items.length > 1 ? clipboardData.items[1] : lists.head(clipboardData.items);
              if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                  this.context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
              }
              this.context.invoke('editor.afterCommand');
          }
      };
      return Clipboard;
  }());

  var Dropzone = /** @class */ (function () {
      function Dropzone(context) {
          this.context = context;
          this.$eventListener = $$1(document);
          this.$editor = context.layoutInfo.editor;
          this.$editable = context.layoutInfo.editable;
          this.options = context.options;
          this.lang = this.options.langInfo;
          this.documentEventHandlers = {};
          this.$dropzone = $$1([
              '<div class="note-dropzone">',
              '  <div class="note-dropzone-message"/>',
              '</div>'
          ].join('')).prependTo(this.$editor);
      }
      /**
       * attach Drag and Drop Events
       */
      Dropzone.prototype.initialize = function () {
          if (this.options.disableDragAndDrop) {
              // prevent default drop event
              this.documentEventHandlers.onDrop = function (e) {
                  e.preventDefault();
              };
              // do not consider outside of dropzone
              this.$eventListener = this.$dropzone;
              this.$eventListener.on('drop', this.documentEventHandlers.onDrop);
          }
          else {
              this.attachDragAndDropEvent();
          }
      };
      /**
       * attach Drag and Drop Events
       */
      Dropzone.prototype.attachDragAndDropEvent = function () {
          var _this = this;
          var collection = $$1();
          var $dropzoneMessage = this.$dropzone.find('.note-dropzone-message');
          this.documentEventHandlers.onDragenter = function (e) {
              var isCodeview = _this.context.invoke('codeview.isActivated');
              var hasEditorSize = _this.$editor.width() > 0 && _this.$editor.height() > 0;
              if (!isCodeview && !collection.length && hasEditorSize) {
                  _this.$editor.addClass('dragover');
                  _this.$dropzone.width(_this.$editor.width());
                  _this.$dropzone.height(_this.$editor.height());
                  $dropzoneMessage.text(_this.lang.image.dragImageHere);
              }
              collection = collection.add(e.target);
          };
          this.documentEventHandlers.onDragleave = function (e) {
              collection = collection.not(e.target);
              if (!collection.length) {
                  _this.$editor.removeClass('dragover');
              }
          };
          this.documentEventHandlers.onDrop = function () {
              collection = $$1();
              _this.$editor.removeClass('dragover');
          };
          // show dropzone on dragenter when dragging a object to document
          // -but only if the editor is visible, i.e. has a positive width and height
          this.$eventListener.on('dragenter', this.documentEventHandlers.onDragenter)
              .on('dragleave', this.documentEventHandlers.onDragleave)
              .on('drop', this.documentEventHandlers.onDrop);
          // change dropzone's message on hover.
          this.$dropzone.on('dragenter', function () {
              _this.$dropzone.addClass('hover');
              $dropzoneMessage.text(_this.lang.image.dropImage);
          }).on('dragleave', function () {
              _this.$dropzone.removeClass('hover');
              $dropzoneMessage.text(_this.lang.image.dragImageHere);
          });
          // attach dropImage
          this.$dropzone.on('drop', function (event) {
              var dataTransfer = event.originalEvent.dataTransfer;
              // stop the browser from opening the dropped content
              event.preventDefault();
              if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                  _this.$editable.focus();
                  _this.context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
              }
              else {
                  $$1.each(dataTransfer.types, function (idx, type) {
                      var content = dataTransfer.getData(type);
                      if (type.toLowerCase().indexOf('text') > -1) {
                          _this.context.invoke('editor.pasteHTML', content);
                      }
                      else {
                          $$1(content).each(function (idx, item) {
                              _this.context.invoke('editor.insertNode', item);
                          });
                      }
                  });
              }
          }).on('dragover', false); // prevent default dragover event
      };
      Dropzone.prototype.destroy = function () {
          var _this = this;
          Object.keys(this.documentEventHandlers).forEach(function (key) {
              _this.$eventListener.off(key.substr(2).toLowerCase(), _this.documentEventHandlers[key]);
          });
          this.documentEventHandlers = {};
      };
      return Dropzone;
  }());

  var CodeMirror;
  if (env.hasCodeMirror) {
      if (env.isSupportAmd) {
          require(['codemirror'], function (cm) {
              CodeMirror = cm;
          });
      }
      else {
          CodeMirror = window.CodeMirror;
      }
  }
  /**
   * @class Codeview
   */
  var CodeView = /** @class */ (function () {
      function CodeView(context) {
          this.context = context;
          this.$editor = context.layoutInfo.editor;
          this.$editable = context.layoutInfo.editable;
          this.$codable = context.layoutInfo.codable;
          this.options = context.options;
      }
      CodeView.prototype.sync = function () {
          var isCodeview = this.isActivated();
          if (isCodeview && env.hasCodeMirror) {
              this.$codable.data('cmEditor').save();
          }
      };
      /**
       * @return {Boolean}
       */
      CodeView.prototype.isActivated = function () {
          return this.$editor.hasClass('codeview');
      };
      /**
       * toggle codeview
       */
      CodeView.prototype.toggle = function () {
          if (this.isActivated()) {
              this.deactivate();
          }
          else {
              this.activate();
          }
          this.context.triggerEvent('codeview.toggled');
      };
      /**
       * activate code view
       */
      CodeView.prototype.activate = function () {
          var _this = this;
          this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
          this.$codable.height(this.$editable.height());
          this.context.invoke('toolbar.updateCodeview', true);
          this.$editor.addClass('codeview');
          this.$codable.focus();
          // activate CodeMirror as codable
          if (env.hasCodeMirror) {
              var cmEditor_1 = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror);
              // CodeMirror TernServer
              if (this.options.codemirror.tern) {
                  var server_1 = new CodeMirror.TernServer(this.options.codemirror.tern);
                  cmEditor_1.ternServer = server_1;
                  cmEditor_1.on('cursorActivity', function (cm) {
                      server_1.updateArgHints(cm);
                  });
              }
              cmEditor_1.on('blur', function (event) {
                  _this.context.triggerEvent('blur.codeview', cmEditor_1.getValue(), event);
              });
              // CodeMirror hasn't Padding.
              cmEditor_1.setSize(null, this.$editable.outerHeight());
              this.$codable.data('cmEditor', cmEditor_1);
          }
          else {
              this.$codable.on('blur', function (event) {
                  _this.context.triggerEvent('blur.codeview', _this.$codable.val(), event);
              });
          }
      };
      /**
       * deactivate code view
       */
      CodeView.prototype.deactivate = function () {
          // deactivate CodeMirror as codable
          if (env.hasCodeMirror) {
              var cmEditor = this.$codable.data('cmEditor');
              this.$codable.val(cmEditor.getValue());
              cmEditor.toTextArea();
          }
          var value = dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara;
          var isChange = this.$editable.html() !== value;
          this.$editable.html(value);
          this.$editable.height(this.options.height ? this.$codable.height() : 'auto');
          this.$editor.removeClass('codeview');
          if (isChange) {
              this.context.triggerEvent('change', this.$editable.html(), this.$editable);
          }
          this.$editable.focus();
          this.context.invoke('toolbar.updateCodeview', false);
      };
      CodeView.prototype.destroy = function () {
          if (this.isActivated()) {
              this.deactivate();
          }
      };
      return CodeView;
  }());

  var EDITABLE_PADDING = 24;
  var Statusbar = /** @class */ (function () {
      function Statusbar(context) {
          this.$document = $$1(document);
          this.$statusbar = context.layoutInfo.statusbar;
          this.$editable = context.layoutInfo.editable;
          this.options = context.options;
      }
      Statusbar.prototype.initialize = function () {
          var _this = this;
          if (this.options.airMode || this.options.disableResizeEditor) {
              this.destroy();
              return;
          }
          this.$statusbar.on('mousedown', function (event) {
              event.preventDefault();
              event.stopPropagation();
              var editableTop = _this.$editable.offset().top - _this.$document.scrollTop();
              var onMouseMove = function (event) {
                  var height = event.clientY - (editableTop + EDITABLE_PADDING);
                  height = (_this.options.minheight > 0) ? Math.max(height, _this.options.minheight) : height;
                  height = (_this.options.maxHeight > 0) ? Math.min(height, _this.options.maxHeight) : height;
                  _this.$editable.height(height);
              };
              _this.$document.on('mousemove', onMouseMove).one('mouseup', function () {
                  _this.$document.off('mousemove', onMouseMove);
              });
          });
      };
      Statusbar.prototype.destroy = function () {
          this.$statusbar.off();
          this.$statusbar.addClass('locked');
      };
      return Statusbar;
  }());

  var Fullscreen = /** @class */ (function () {
      function Fullscreen(context) {
          var _this = this;
          this.context = context;
          this.$editor = context.layoutInfo.editor;
          this.$toolbar = context.layoutInfo.toolbar;
          this.$editable = context.layoutInfo.editable;
          this.$codable = context.layoutInfo.codable;
          this.$window = $$1(window);
          this.$scrollbar = $$1('html, body');
          this.onResize = function () {
              _this.resizeTo({
                  h: _this.$window.height() - _this.$toolbar.outerHeight()
              });
          };
      }
      Fullscreen.prototype.resizeTo = function (size) {
          this.$editable.css('height', size.h);
          this.$codable.css('height', size.h);
          if (this.$codable.data('cmeditor')) {
              this.$codable.data('cmeditor').setsize(null, size.h);
          }
      };
      /**
       * toggle fullscreen
       */
      Fullscreen.prototype.toggle = function () {
          this.$editor.toggleClass('fullscreen');
          if (this.isFullscreen()) {
              this.$editable.data('orgHeight', this.$editable.css('height'));
              this.$editable.data('orgMaxHeight', this.$editable.css('maxHeight'));
              this.$editable.css('maxHeight', '');
              this.$window.on('resize', this.onResize).trigger('resize');
              this.$scrollbar.css('overflow', 'hidden');
          }
          else {
              this.$window.off('resize', this.onResize);
              this.resizeTo({ h: this.$editable.data('orgHeight') });
              this.$editable.css('maxHeight', this.$editable.css('orgMaxHeight'));
              this.$scrollbar.css('overflow', 'visible');
          }
          this.context.invoke('toolbar.updateFullscreen', this.isFullscreen());
      };
      Fullscreen.prototype.isFullscreen = function () {
          return this.$editor.hasClass('fullscreen');
      };
      return Fullscreen;
  }());

  var Handle = /** @class */ (function () {
      function Handle(context) {
          var _this = this;
          this.context = context;
          this.$document = $$1(document);
          this.$editingArea = context.layoutInfo.editingArea;
          this.options = context.options;
          this.lang = this.options.langInfo;
          this.events = {
              'summernote.mousedown': function (we, e) {
                  if (_this.update(e.target)) {
                      e.preventDefault();
                  }
              },
              'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function () {
                  _this.update();
              },
              'summernote.disable': function () {
                  _this.hide();
              },
              'summernote.codeview.toggled': function () {
                  _this.update();
              }
          };
      }
      Handle.prototype.initialize = function () {
          var _this = this;
          this.$handle = $$1([
              '<div class="note-handle">',
              '<div class="note-control-selection">',
              '<div class="note-control-selection-bg"></div>',
              '<div class="note-control-holder note-control-nw"></div>',
              '<div class="note-control-holder note-control-ne"></div>',
              '<div class="note-control-holder note-control-sw"></div>',
              '<div class="',
              (this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing'),
              ' note-control-se"></div>',
              (this.options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>'),
              '</div>',
              '</div>'
          ].join('')).prependTo(this.$editingArea);
          this.$handle.on('mousedown', function (event) {
              if (dom.isControlSizing(event.target)) {
                  event.preventDefault();
                  event.stopPropagation();
                  var $target_1 = _this.$handle.find('.note-control-selection').data('target');
                  var posStart_1 = $target_1.offset();
                  var scrollTop_1 = _this.$document.scrollTop();
                  var onMouseMove_1 = function (event) {
                      _this.context.invoke('editor.resizeTo', {
                          x: event.clientX - posStart_1.left,
                          y: event.clientY - (posStart_1.top - scrollTop_1)
                      }, $target_1, !event.shiftKey);
                      _this.update($target_1[0]);
                  };
                  _this.$document
                      .on('mousemove', onMouseMove_1)
                      .one('mouseup', function (e) {
                      e.preventDefault();
                      _this.$document.off('mousemove', onMouseMove_1);
                      _this.context.invoke('editor.afterCommand');
                  });
                  if (!$target_1.data('ratio')) { // original ratio.
                      $target_1.data('ratio', $target_1.height() / $target_1.width());
                  }
              }
          });
          // Listen for scrolling on the handle overlay.
          this.$handle.on('wheel', function (e) {
              e.preventDefault();
              _this.update();
          });
      };
      Handle.prototype.destroy = function () {
          this.$handle.remove();
      };
      Handle.prototype.update = function (target) {
          if (this.context.isDisabled()) {
              return false;
          }
          var isImage = dom.isImg(target);
          var $selection = this.$handle.find('.note-control-selection');
          this.context.invoke('imagePopover.update', target);
          if (isImage) {
              var $image = $$1(target);
              var position = $image.position();
              var pos = {
                  left: position.left + parseInt($image.css('marginLeft'), 10),
                  top: position.top + parseInt($image.css('marginTop'), 10)
              };
              // exclude margin
              var imageSize = {
                  w: $image.outerWidth(false),
                  h: $image.outerHeight(false)
              };
              $selection.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top,
                  width: imageSize.w,
                  height: imageSize.h
              }).data('target', $image); // save current image element.
              var origImageObj = new Image();
              origImageObj.src = $image.attr('src');
              var sizingText = imageSize.w + 'x' + imageSize.h + ' (' + this.lang.image.original + ': ' + origImageObj.width + 'x' + origImageObj.height + ')';
              $selection.find('.note-control-selection-info').text(sizingText);
              this.context.invoke('editor.saveTarget', target);
          }
          else {
              this.hide();
          }
          return isImage;
      };
      /**
       * hide
       *
       * @param {jQuery} $handle
       */
      Handle.prototype.hide = function () {
          this.context.invoke('editor.clearTarget');
          this.$handle.children().hide();
      };
      return Handle;
  }());

  var defaultScheme = 'http://';
  var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
  var AutoLink = /** @class */ (function () {
      function AutoLink(context) {
          var _this = this;
          this.context = context;
          this.events = {
              'summernote.keyup': function (we, e) {
                  if (!e.isDefaultPrevented()) {
                      _this.handleKeyup(e);
                  }
              },
              'summernote.keydown': function (we, e) {
                  _this.handleKeydown(e);
              }
          };
      }
      AutoLink.prototype.initialize = function () {
          this.lastWordRange = null;
      };
      AutoLink.prototype.destroy = function () {
          this.lastWordRange = null;
      };
      AutoLink.prototype.replace = function () {
          if (!this.lastWordRange) {
              return;
          }
          var keyword = this.lastWordRange.toString();
          var match = keyword.match(linkPattern);
          if (match && (match[1] || match[2])) {
              var link = match[1] ? keyword : defaultScheme + keyword;
              var node = $$1('<a />').html(keyword).attr('href', link)[0];
              if (this.context.options.linkTargetBlank) {
                  $$1(node).attr('target', '_blank');
              }
              this.lastWordRange.insertNode(node);
              this.lastWordRange = null;
              this.context.invoke('editor.focus');
          }
      };
      AutoLink.prototype.handleKeydown = function (e) {
          if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
              var wordRange = this.context.invoke('editor.createRange').getWordRange();
              this.lastWordRange = wordRange;
          }
      };
      AutoLink.prototype.handleKeyup = function (e) {
          if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
              this.replace();
          }
      };
      return AutoLink;
  }());

  /**
   * textarea auto sync.
   */
  var AutoSync = /** @class */ (function () {
      function AutoSync(context) {
          var _this = this;
          this.$note = context.layoutInfo.note;
          this.events = {
              'summernote.change': function () {
                  _this.$note.val(context.invoke('code'));
              }
          };
      }
      AutoSync.prototype.shouldInitialize = function () {
          return dom.isTextarea(this.$note[0]);
      };
      return AutoSync;
  }());

  var Placeholder = /** @class */ (function () {
      function Placeholder(context) {
          var _this = this;
          this.context = context;
          this.$editingArea = context.layoutInfo.editingArea;
          this.options = context.options;
          this.events = {
              'summernote.init summernote.change': function () {
                  _this.update();
              },
              'summernote.codeview.toggled': function () {
                  _this.update();
              }
          };
      }
      Placeholder.prototype.shouldInitialize = function () {
          return !!this.options.placeholder;
      };
      Placeholder.prototype.initialize = function () {
          var _this = this;
          this.$placeholder = $$1('<div class="note-placeholder">');
          this.$placeholder.on('click', function () {
              _this.context.invoke('focus');
          }).html(this.options.placeholder).prependTo(this.$editingArea);
          this.update();
      };
      Placeholder.prototype.destroy = function () {
          this.$placeholder.remove();
      };
      Placeholder.prototype.update = function () {
          var isShow = !this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
          this.$placeholder.toggle(isShow);
      };
      return Placeholder;
  }());

  var Buttons = /** @class */ (function () {
      function Buttons(context) {
          this.ui = $$1.summernote.ui;
          this.context = context;
          this.$toolbar = context.layoutInfo.toolbar;
          this.options = context.options;
          this.lang = this.options.langInfo;
          this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? 'mac' : 'pc']);
      }
      Buttons.prototype.representShortcut = function (editorMethod) {
          var shortcut = this.invertedKeyMap[editorMethod];
          if (!this.options.shortcuts || !shortcut) {
              return '';
          }
          if (env.isMac) {
              shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
          }
          shortcut = shortcut.replace('BACKSLASH', '\\')
              .replace('SLASH', '/')
              .replace('LEFTBRACKET', '[')
              .replace('RIGHTBRACKET', ']');
          return ' (' + shortcut + ')';
      };
      Buttons.prototype.button = function (o) {
          if (!this.options.tooltip && o.tooltip) {
              delete o.tooltip;
          }
          o.container = this.options.container;
          return this.ui.button(o);
      };
      Buttons.prototype.initialize = function () {
          this.addToolbarButtons();
          this.addImagePopoverButtons();
          this.addLinkPopoverButtons();
          this.addTablePopoverButtons();
          this.fontInstalledMap = {};
      };
      Buttons.prototype.destroy = function () {
          delete this.fontInstalledMap;
      };
      Buttons.prototype.isFontInstalled = function (name) {
          if (!this.fontInstalledMap.hasOwnProperty(name)) {
              this.fontInstalledMap[name] = env.isFontInstalled(name) ||
                  lists.contains(this.options.fontNamesIgnoreCheck, name);
          }
          return this.fontInstalledMap[name];
      };
      Buttons.prototype.isFontDeservedToAdd = function (name) {
          var genericFamilies = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];
          name = name.toLowerCase();
          return ((name !== '') && this.isFontInstalled(name) && ($$1.inArray(name, genericFamilies) === -1));
      };
      Buttons.prototype.colorPalette = function (className, tooltip, backColor, foreColor) {
          var _this = this;
          return this.ui.buttonGroup({
              className: 'note-color ' + className,
              children: [
                  this.button({
                      className: 'note-current-color-button',
                      contents: this.ui.icon(this.options.icons.font + ' note-recent-color'),
                      tooltip: tooltip,
                      click: function (e) {
                          var $button = $$1(e.currentTarget);
                          if (backColor && foreColor) {
                              _this.context.invoke('editor.color', {
                                  backColor: $button.attr('data-backColor'),
                                  foreColor: $button.attr('data-foreColor')
                              });
                          }
                          else if (backColor) {
                              _this.context.invoke('editor.color', {
                                  backColor: $button.attr('data-backColor')
                              });
                          }
                          else if (foreColor) {
                              _this.context.invoke('editor.color', {
                                  foreColor: $button.attr('data-foreColor')
                              });
                          }
                      },
                      callback: function ($button) {
                          var $recentColor = $button.find('.note-recent-color');
                          if (backColor) {
                              $recentColor.css('background-color', '#FFFF00');
                              $button.attr('data-backColor', '#FFFF00');
                          }
                          if (!foreColor) {
                              $recentColor.css('color', 'transparent');
                          }
                      }
                  }),
                  this.button({
                      className: 'dropdown-toggle',
                      contents: this.ui.dropdownButtonContents('', this.options),
                      tooltip: this.lang.color.more,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  this.ui.dropdown({
                      items: (backColor ? [
                          '<div class="note-palette">',
                          '  <div class="note-palette-title">' + this.lang.color.background + '</div>',
                          '  <div>',
                          '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">',
                          this.lang.color.transparent,
                          '    </button>',
                          '  </div>',
                          '  <div class="note-holder" data-event="backColor"/>',
                          '  <div>',
                          '    <button type="button" class="note-color-select btn" data-event="openPalette" data-value="backColorPicker">',
                          this.lang.color.cpSelect,
                          '    </button>',
                          '    <input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="#FFFF00" data-event="backColorPalette">',
                          '  </div>',
                          '  <div class="note-holder-custom" id="backColorPalette" data-event="backColor"/>',
                          '</div>'
                      ].join('') : '') +
                          (foreColor ? [
                              '<div class="note-palette">',
                              '  <div class="note-palette-title">' + this.lang.color.foreground + '</div>',
                              '  <div>',
                              '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">',
                              this.lang.color.resetToDefault,
                              '    </button>',
                              '  </div>',
                              '  <div class="note-holder" data-event="foreColor"/>',
                              '  <div>',
                              '    <button type="button" class="note-color-select btn" data-event="openPalette" data-value="foreColorPicker">',
                              this.lang.color.cpSelect,
                              '    </button>',
                              '    <input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="#000000" data-event="foreColorPalette">',
                              '  <div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"/>',
                              '</div>'
                          ].join('') : ''),
                      callback: function ($dropdown) {
                          $dropdown.find('.note-holder').each(function (idx, item) {
                              var $holder = $$1(item);
                              $holder.append(_this.ui.palette({
                                  colors: _this.options.colors,
                                  colorsName: _this.options.colorsName,
                                  eventName: $holder.data('event'),
                                  container: _this.options.container,
                                  tooltip: _this.options.tooltip
                              }).render());
                          });
                          /* TODO: do we have to record recent custom colors within cookies? */
                          var customColors = [
                              ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
                          ];
                          $dropdown.find('.note-holder-custom').each(function (idx, item) {
                              var $holder = $$1(item);
                              $holder.append(_this.ui.palette({
                                  colors: customColors,
                                  colorsName: customColors,
                                  eventName: $holder.data('event'),
                                  container: _this.options.container,
                                  tooltip: _this.options.tooltip
                              }).render());
                          });
                          $dropdown.find('input[type=color]').each(function (idx, item) {
                              $$1(item).change(function () {
                                  var $chip = $dropdown.find('#' + $$1(this).data('event')).find('.note-color-btn').first();
                                  var color = this.value.toUpperCase();
                                  $chip.css('background-color', color)
                                      .attr('aria-label', color)
                                      .attr('data-value', color)
                                      .attr('data-original-title', color);
                                  $chip.click();
                              });
                          });
                      },
                      click: function (event) {
                          event.stopPropagation();
                          var $parent = $$1('.' + className);
                          var $button = $$1(event.target);
                          var eventName = $button.data('event');
                          var value = $button.attr('data-value');
                          if (eventName === 'openPalette') {
                              var $picker = $parent.find('#' + value);
                              var $palette = $$1($parent.find('#' + $picker.data('event')).find('.note-color-row')[0]);
                              // Shift palette chips
                              var $chip = $palette.find('.note-color-btn').last().detach();
                              // Set chip attributes
                              var color = $picker.val();
                              $chip.css('background-color', color)
                                  .attr('aria-label', color)
                                  .attr('data-value', color)
                                  .attr('data-original-title', color);
                              $palette.prepend($chip);
                              $picker.click();
                          }
                          else if (lists.contains(['backColor', 'foreColor'], eventName)) {
                              var key = eventName === 'backColor' ? 'background-color' : 'color';
                              var $color = $button.closest('.note-color').find('.note-recent-color');
                              var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                              $color.css(key, value);
                              $currentButton.attr('data-' + eventName, value);
                              _this.context.invoke('editor.' + eventName, value);
                          }
                      }
                  })
              ]
          }).render();
      };
      Buttons.prototype.addToolbarButtons = function () {
          var _this = this;
          this.context.memo('button.style', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.magic), _this.options),
                      tooltip: _this.lang.style.style,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdown({
                      className: 'dropdown-style',
                      items: _this.options.styleTags,
                      title: _this.lang.style.style,
                      template: function (item) {
                          if (typeof item === 'string') {
                              item = { tag: item, title: (_this.lang.style.hasOwnProperty(item) ? _this.lang.style[item] : item) };
                          }
                          var tag = item.tag;
                          var title = item.title;
                          var style = item.style ? ' style="' + item.style + '" ' : '';
                          var className = item.className ? ' class="' + item.className + '"' : '';
                          return '<' + tag + style + className + '>' + title + '</' + tag + '>';
                      },
                      click: _this.context.createInvokeHandler('editor.formatBlock')
                  })
              ]).render();
          });
          var _loop_1 = function (styleIdx, styleLen) {
              var item = this_1.options.styleTags[styleIdx];
              this_1.context.memo('button.style.' + item, function () {
                  return _this.button({
                      className: 'note-btn-style-' + item,
                      contents: '<div data-value="' + item + '">' + item.toUpperCase() + '</div>',
                      tooltip: _this.lang.style[item],
                      click: _this.context.createInvokeHandler('editor.formatBlock')
                  }).render();
              });
          };
          var this_1 = this;
          for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
              _loop_1(styleIdx, styleLen);
          }
          this.context.memo('button.bold', function () {
              return _this.button({
                  className: 'note-btn-bold',
                  contents: _this.ui.icon(_this.options.icons.bold),
                  tooltip: _this.lang.font.bold + _this.representShortcut('bold'),
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.bold')
              }).render();
          });
          this.context.memo('button.italic', function () {
              return _this.button({
                  className: 'note-btn-italic',
                  contents: _this.ui.icon(_this.options.icons.italic),
                  tooltip: _this.lang.font.italic + _this.representShortcut('italic'),
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.italic')
              }).render();
          });
          this.context.memo('button.underline', function () {
              return _this.button({
                  className: 'note-btn-underline',
                  contents: _this.ui.icon(_this.options.icons.underline),
                  tooltip: _this.lang.font.underline + _this.representShortcut('underline'),
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.underline')
              }).render();
          });
          this.context.memo('button.clear', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.eraser),
                  tooltip: _this.lang.font.clear + _this.representShortcut('removeFormat'),
                  click: _this.context.createInvokeHandler('editor.removeFormat')
              }).render();
          });
          this.context.memo('button.strikethrough', function () {
              return _this.button({
                  className: 'note-btn-strikethrough',
                  contents: _this.ui.icon(_this.options.icons.strikethrough),
                  tooltip: _this.lang.font.strikethrough + _this.representShortcut('strikethrough'),
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
              }).render();
          });
          this.context.memo('button.superscript', function () {
              return _this.button({
                  className: 'note-btn-superscript',
                  contents: _this.ui.icon(_this.options.icons.superscript),
                  tooltip: _this.lang.font.superscript,
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.superscript')
              }).render();
          });
          this.context.memo('button.subscript', function () {
              return _this.button({
                  className: 'note-btn-subscript',
                  contents: _this.ui.icon(_this.options.icons.subscript),
                  tooltip: _this.lang.font.subscript,
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.subscript')
              }).render();
          });
          this.context.memo('button.fontname', function () {
              var styleInfo = _this.context.invoke('editor.currentStyle');
              // Add 'default' fonts into the fontnames array if not exist
              $$1.each(styleInfo['font-family'].split(','), function (idx, fontname) {
                  fontname = fontname.trim().replace(/['"]+/g, '');
                  if (_this.isFontDeservedToAdd(fontname)) {
                      if ($$1.inArray(fontname, _this.options.fontNames) === -1) {
                          _this.options.fontNames.push(fontname);
                      }
                  }
              });
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents('<span class="note-current-fontname"/>', _this.options),
                      tooltip: _this.lang.font.name,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdownCheck({
                      className: 'dropdown-fontname',
                      checkClassName: _this.options.icons.menuCheck,
                      items: _this.options.fontNames.filter(_this.isFontInstalled.bind(_this)),
                      title: _this.lang.font.name,
                      template: function (item) {
                          return '<span style="font-family: \'' + item + '\'">' + item + '</span>';
                      },
                      click: _this.context.createInvokeHandlerAndUpdateState('editor.fontName')
                  })
              ]).render();
          });
          this.context.memo('button.fontsize', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', _this.options),
                      tooltip: _this.lang.font.size,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdownCheck({
                      className: 'dropdown-fontsize',
                      checkClassName: _this.options.icons.menuCheck,
                      items: _this.options.fontSizes,
                      title: _this.lang.font.size,
                      click: _this.context.createInvokeHandlerAndUpdateState('editor.fontSize')
                  })
              ]).render();
          });
          this.context.memo('button.color', function () {
              return _this.colorPalette('note-color-all', _this.lang.color.recent, true, true);
          });
          this.context.memo('button.forecolor', function () {
              return _this.colorPalette('note-color-fore', _this.lang.color.foreground, false, true);
          });
          this.context.memo('button.backcolor', function () {
              return _this.colorPalette('note-color-back', _this.lang.color.background, true, false);
          });
          this.context.memo('button.ul', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.unorderedlist),
                  tooltip: _this.lang.lists.unordered + _this.representShortcut('insertUnorderedList'),
                  click: _this.context.createInvokeHandler('editor.insertUnorderedList')
              }).render();
          });
          this.context.memo('button.ol', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.orderedlist),
                  tooltip: _this.lang.lists.ordered + _this.representShortcut('insertOrderedList'),
                  click: _this.context.createInvokeHandler('editor.insertOrderedList')
              }).render();
          });
          var justifyLeft = this.button({
              contents: this.ui.icon(this.options.icons.alignLeft),
              tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
              click: this.context.createInvokeHandler('editor.justifyLeft')
          });
          var justifyCenter = this.button({
              contents: this.ui.icon(this.options.icons.alignCenter),
              tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
              click: this.context.createInvokeHandler('editor.justifyCenter')
          });
          var justifyRight = this.button({
              contents: this.ui.icon(this.options.icons.alignRight),
              tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
              click: this.context.createInvokeHandler('editor.justifyRight')
          });
          var justifyFull = this.button({
              contents: this.ui.icon(this.options.icons.alignJustify),
              tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
              click: this.context.createInvokeHandler('editor.justifyFull')
          });
          var outdent = this.button({
              contents: this.ui.icon(this.options.icons.outdent),
              tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
              click: this.context.createInvokeHandler('editor.outdent')
          });
          var indent = this.button({
              contents: this.ui.icon(this.options.icons.indent),
              tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
              click: this.context.createInvokeHandler('editor.indent')
          });
          this.context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
          this.context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
          this.context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
          this.context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
          this.context.memo('button.outdent', func.invoke(outdent, 'render'));
          this.context.memo('button.indent', func.invoke(indent, 'render'));
          this.context.memo('button.paragraph', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.alignLeft), _this.options),
                      tooltip: _this.lang.paragraph.paragraph,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdown([
                      _this.ui.buttonGroup({
                          className: 'note-align',
                          children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
                      }),
                      _this.ui.buttonGroup({
                          className: 'note-list',
                          children: [outdent, indent]
                      })
                  ])
              ]).render();
          });
          this.context.memo('button.height', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.textHeight), _this.options),
                      tooltip: _this.lang.font.height,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdownCheck({
                      items: _this.options.lineHeights,
                      checkClassName: _this.options.icons.menuCheck,
                      className: 'dropdown-line-height',
                      title: _this.lang.font.height,
                      click: _this.context.createInvokeHandler('editor.lineHeight')
                  })
              ]).render();
          });
          this.context.memo('button.table', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.table), _this.options),
                      tooltip: _this.lang.table.table,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdown({
                      title: _this.lang.table.table,
                      className: 'note-table',
                      items: [
                          '<div class="note-dimension-picker">',
                          '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
                          '  <div class="note-dimension-picker-highlighted"/>',
                          '  <div class="note-dimension-picker-unhighlighted"/>',
                          '</div>',
                          '<div class="note-dimension-display">1 x 1</div>'
                      ].join('')
                  })
              ], {
                  callback: function ($node) {
                      var $catcher = $node.find('.note-dimension-picker-mousecatcher');
                      $catcher.css({
                          width: _this.options.insertTableMaxSize.col + 'em',
                          height: _this.options.insertTableMaxSize.row + 'em'
                      }).mousedown(_this.context.createInvokeHandler('editor.insertTable'))
                          .on('mousemove', _this.tableMoveHandler.bind(_this));
                  }
              }).render();
          });
          this.context.memo('button.link', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.link),
                  tooltip: _this.lang.link.link + _this.representShortcut('linkDialog.show'),
                  click: _this.context.createInvokeHandler('linkDialog.show')
              }).render();
          });
          this.context.memo('button.picture', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.picture),
                  tooltip: _this.lang.image.image,
                  click: _this.context.createInvokeHandler('imageDialog.show')
              }).render();
          });
          this.context.memo('button.video', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.video),
                  tooltip: _this.lang.video.video,
                  click: _this.context.createInvokeHandler('videoDialog.show')
              }).render();
          });
          this.context.memo('button.hr', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.minus),
                  tooltip: _this.lang.hr.insert + _this.representShortcut('insertHorizontalRule'),
                  click: _this.context.createInvokeHandler('editor.insertHorizontalRule')
              }).render();
          });
          this.context.memo('button.fullscreen', function () {
              return _this.button({
                  className: 'btn-fullscreen',
                  contents: _this.ui.icon(_this.options.icons.arrowsAlt),
                  tooltip: _this.lang.options.fullscreen,
                  click: _this.context.createInvokeHandler('fullscreen.toggle')
              }).render();
          });
          this.context.memo('button.codeview', function () {
              return _this.button({
                  className: 'btn-codeview',
                  contents: _this.ui.icon(_this.options.icons.code),
                  tooltip: _this.lang.options.codeview,
                  click: _this.context.createInvokeHandler('codeview.toggle')
              }).render();
          });
          this.context.memo('button.redo', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.redo),
                  tooltip: _this.lang.history.redo + _this.representShortcut('redo'),
                  click: _this.context.createInvokeHandler('editor.redo')
              }).render();
          });
          this.context.memo('button.undo', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.undo),
                  tooltip: _this.lang.history.undo + _this.representShortcut('undo'),
                  click: _this.context.createInvokeHandler('editor.undo')
              }).render();
          });
          this.context.memo('button.help', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.question),
                  tooltip: _this.lang.options.help,
                  click: _this.context.createInvokeHandler('helpDialog.show')
              }).render();
          });
      };
      /**
       * image : [
       *   ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
       *   ['float', ['floatLeft', 'floatRight', 'floatNone' ]],
       *   ['remove', ['removeMedia']]
       * ],
       */
      Buttons.prototype.addImagePopoverButtons = function () {
          var _this = this;
          // Image Size Buttons
          this.context.memo('button.imageSize100', function () {
              return _this.button({
                  contents: '<span class="note-fontsize-10">100%</span>',
                  tooltip: _this.lang.image.resizeFull,
                  click: _this.context.createInvokeHandler('editor.resize', '1')
              }).render();
          });
          this.context.memo('button.imageSize50', function () {
              return _this.button({
                  contents: '<span class="note-fontsize-10">50%</span>',
                  tooltip: _this.lang.image.resizeHalf,
                  click: _this.context.createInvokeHandler('editor.resize', '0.5')
              }).render();
          });
          this.context.memo('button.imageSize25', function () {
              return _this.button({
                  contents: '<span class="note-fontsize-10">25%</span>',
                  tooltip: _this.lang.image.resizeQuarter,
                  click: _this.context.createInvokeHandler('editor.resize', '0.25')
              }).render();
          });
          // Float Buttons
          this.context.memo('button.floatLeft', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.alignLeft),
                  tooltip: _this.lang.image.floatLeft,
                  click: _this.context.createInvokeHandler('editor.floatMe', 'left')
              }).render();
          });
          this.context.memo('button.floatRight', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.alignRight),
                  tooltip: _this.lang.image.floatRight,
                  click: _this.context.createInvokeHandler('editor.floatMe', 'right')
              }).render();
          });
          this.context.memo('button.floatNone', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.alignJustify),
                  tooltip: _this.lang.image.floatNone,
                  click: _this.context.createInvokeHandler('editor.floatMe', 'none')
              }).render();
          });
          // Remove Buttons
          this.context.memo('button.removeMedia', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.trash),
                  tooltip: _this.lang.image.remove,
                  click: _this.context.createInvokeHandler('editor.removeMedia')
              }).render();
          });
      };
      Buttons.prototype.addLinkPopoverButtons = function () {
          var _this = this;
          this.context.memo('button.linkDialogShow', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.link),
                  tooltip: _this.lang.link.edit,
                  click: _this.context.createInvokeHandler('linkDialog.show')
              }).render();
          });
          this.context.memo('button.unlink', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.unlink),
                  tooltip: _this.lang.link.unlink,
                  click: _this.context.createInvokeHandler('editor.unlink')
              }).render();
          });
      };
      /**
       * table : [
       *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
       *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
       * ],
       */
      Buttons.prototype.addTablePopoverButtons = function () {
          var _this = this;
          this.context.memo('button.addRowUp', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.rowAbove),
                  tooltip: _this.lang.table.addRowAbove,
                  click: _this.context.createInvokeHandler('editor.addRow', 'top')
              }).render();
          });
          this.context.memo('button.addRowDown', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.rowBelow),
                  tooltip: _this.lang.table.addRowBelow,
                  click: _this.context.createInvokeHandler('editor.addRow', 'bottom')
              }).render();
          });
          this.context.memo('button.addColLeft', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.colBefore),
                  tooltip: _this.lang.table.addColLeft,
                  click: _this.context.createInvokeHandler('editor.addCol', 'left')
              }).render();
          });
          this.context.memo('button.addColRight', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.colAfter),
                  tooltip: _this.lang.table.addColRight,
                  click: _this.context.createInvokeHandler('editor.addCol', 'right')
              }).render();
          });
          this.context.memo('button.deleteRow', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.rowRemove),
                  tooltip: _this.lang.table.delRow,
                  click: _this.context.createInvokeHandler('editor.deleteRow')
              }).render();
          });
          this.context.memo('button.deleteCol', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.colRemove),
                  tooltip: _this.lang.table.delCol,
                  click: _this.context.createInvokeHandler('editor.deleteCol')
              }).render();
          });
          this.context.memo('button.deleteTable', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.trash),
                  tooltip: _this.lang.table.delTable,
                  click: _this.context.createInvokeHandler('editor.deleteTable')
              }).render();
          });
      };
      Buttons.prototype.build = function ($container, groups) {
          for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
              var group = groups[groupIdx];
              var groupName = $$1.isArray(group) ? group[0] : group;
              var buttons = $$1.isArray(group) ? ((group.length === 1) ? [group[0]] : group[1]) : [group];
              var $group = this.ui.buttonGroup({
                  className: 'note-' + groupName
              }).render();
              for (var idx = 0, len = buttons.length; idx < len; idx++) {
                  var btn = this.context.memo('button.' + buttons[idx]);
                  if (btn) {
                      $group.append(typeof btn === 'function' ? btn(this.context) : btn);
                  }
              }
              $group.appendTo($container);
          }
      };
      /**
       * @param {jQuery} [$container]
       */
      Buttons.prototype.updateCurrentStyle = function ($container) {
          var _this = this;
          var $cont = $container || this.$toolbar;
          var styleInfo = this.context.invoke('editor.currentStyle');
          this.updateBtnStates($cont, {
              '.note-btn-bold': function () {
                  return styleInfo['font-bold'] === 'bold';
              },
              '.note-btn-italic': function () {
                  return styleInfo['font-italic'] === 'italic';
              },
              '.note-btn-underline': function () {
                  return styleInfo['font-underline'] === 'underline';
              },
              '.note-btn-subscript': function () {
                  return styleInfo['font-subscript'] === 'subscript';
              },
              '.note-btn-superscript': function () {
                  return styleInfo['font-superscript'] === 'superscript';
              },
              '.note-btn-strikethrough': function () {
                  return styleInfo['font-strikethrough'] === 'strikethrough';
              }
          });
          if (styleInfo['font-family']) {
              var fontNames = styleInfo['font-family'].split(',').map(function (name) {
                  return name.replace(/[\'\"]/g, '')
                      .replace(/\s+$/, '')
                      .replace(/^\s+/, '');
              });
              var fontName_1 = lists.find(fontNames, this.isFontInstalled.bind(this));
              $cont.find('.dropdown-fontname a').each(function (idx, item) {
                  var $item = $$1(item);
                  // always compare string to avoid creating another func.
                  var isChecked = ($item.data('value') + '') === (fontName_1 + '');
                  $item.toggleClass('checked', isChecked);
              });
              $cont.find('.note-current-fontname').text(fontName_1).css('font-family', fontName_1);
          }
          if (styleInfo['font-size']) {
              var fontSize_1 = styleInfo['font-size'];
              $cont.find('.dropdown-fontsize a').each(function (idx, item) {
                  var $item = $$1(item);
                  // always compare with string to avoid creating another func.
                  var isChecked = ($item.data('value') + '') === (fontSize_1 + '');
                  $item.toggleClass('checked', isChecked);
              });
              $cont.find('.note-current-fontsize').text(fontSize_1);
          }
          if (styleInfo['line-height']) {
              var lineHeight_1 = styleInfo['line-height'];
              $cont.find('.dropdown-line-height li a').each(function (idx, item) {
                  // always compare with string to avoid creating another func.
                  var isChecked = ($$1(item).data('value') + '') === (lineHeight_1 + '');
                  _this.className = isChecked ? 'checked' : '';
              });
          }
      };
      Buttons.prototype.updateBtnStates = function ($container, infos) {
          var _this = this;
          $$1.each(infos, function (selector, pred) {
              _this.ui.toggleBtnActive($container.find(selector), pred());
          });
      };
      Buttons.prototype.tableMoveHandler = function (event) {
          var PX_PER_EM = 18;
          var $picker = $$1(event.target.parentNode); // target is mousecatcher
          var $dimensionDisplay = $picker.next();
          var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
          var $highlighted = $picker.find('.note-dimension-picker-highlighted');
          var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
          var posOffset;
          // HTML5 with jQuery - e.offsetX is undefined in Firefox
          if (event.offsetX === undefined) {
              var posCatcher = $$1(event.target).offset();
              posOffset = {
                  x: event.pageX - posCatcher.left,
                  y: event.pageY - posCatcher.top
              };
          }
          else {
              posOffset = {
                  x: event.offsetX,
                  y: event.offsetY
              };
          }
          var dim = {
              c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
              r: Math.ceil(posOffset.y / PX_PER_EM) || 1
          };
          $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
          $catcher.data('value', dim.c + 'x' + dim.r);
          if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
              $unhighlighted.css({ width: dim.c + 1 + 'em' });
          }
          if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
              $unhighlighted.css({ height: dim.r + 1 + 'em' });
          }
          $dimensionDisplay.html(dim.c + ' x ' + dim.r);
      };
      return Buttons;
  }());

  var Toolbar = /** @class */ (function () {
      function Toolbar(context) {
          this.context = context;
          this.$window = $$1(window);
          this.$document = $$1(document);
          this.ui = $$1.summernote.ui;
          this.$note = context.layoutInfo.note;
          this.$editor = context.layoutInfo.editor;
          this.$toolbar = context.layoutInfo.toolbar;
          this.options = context.options;
          this.followScroll = this.followScroll.bind(this);
      }
      Toolbar.prototype.shouldInitialize = function () {
          return !this.options.airMode;
      };
      Toolbar.prototype.initialize = function () {
          var _this = this;
          this.options.toolbar = this.options.toolbar || [];
          if (!this.options.toolbar.length) {
              this.$toolbar.hide();
          }
          else {
              this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar);
          }
          if (this.options.toolbarContainer) {
              this.$toolbar.appendTo(this.options.toolbarContainer);
          }
          this.changeContainer(false);
          this.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
              _this.context.invoke('buttons.updateCurrentStyle');
          });
          this.context.invoke('buttons.updateCurrentStyle');
          if (this.options.followingToolbar) {
              this.$window.on('scroll resize', this.followScroll);
          }
      };
      Toolbar.prototype.destroy = function () {
          this.$toolbar.children().remove();
          if (this.options.followingToolbar) {
              this.$window.off('scroll resize', this.followScroll);
          }
      };
      Toolbar.prototype.followScroll = function () {
          if (this.$editor.hasClass('fullscreen')) {
              return false;
          }
          var $toolbarWrapper = this.$toolbar.parent('.note-toolbar-wrapper');
          var editorHeight = this.$editor.outerHeight();
          var editorWidth = this.$editor.width();
          var toolbarHeight = this.$toolbar.height();
          $toolbarWrapper.css({
              height: toolbarHeight
          });
          // check if the web app is currently using another static bar
          var otherBarHeight = 0;
          if (this.options.otherStaticBar) {
              otherBarHeight = $$1(this.options.otherStaticBar).outerHeight();
          }
          var currentOffset = this.$document.scrollTop();
          var editorOffsetTop = this.$editor.offset().top;
          var editorOffsetBottom = editorOffsetTop + editorHeight;
          var activateOffset = editorOffsetTop - otherBarHeight;
          var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight;
          if ((currentOffset > activateOffset) && (currentOffset < deactivateOffsetBottom)) {
              this.$toolbar.css({
                  position: 'fixed',
                  top: otherBarHeight,
                  width: editorWidth
              });
          }
          else {
              this.$toolbar.css({
                  position: 'relative',
                  top: 0,
                  width: '100%'
              });
          }
      };
      Toolbar.prototype.changeContainer = function (isFullscreen) {
          if (isFullscreen) {
              this.$toolbar.prependTo(this.$editor);
          }
          else {
              if (this.options.toolbarContainer) {
                  this.$toolbar.appendTo(this.options.toolbarContainer);
              }
          }
      };
      Toolbar.prototype.updateFullscreen = function (isFullscreen) {
          this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), isFullscreen);
          this.changeContainer(isFullscreen);
      };
      Toolbar.prototype.updateCodeview = function (isCodeview) {
          this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), isCodeview);
          if (isCodeview) {
              this.deactivate();
          }
          else {
              this.activate();
          }
      };
      Toolbar.prototype.activate = function (isIncludeCodeview) {
          var $btn = this.$toolbar.find('button');
          if (!isIncludeCodeview) {
              $btn = $btn.not('.btn-codeview');
          }
          this.ui.toggleBtn($btn, true);
      };
      Toolbar.prototype.deactivate = function (isIncludeCodeview) {
          var $btn = this.$toolbar.find('button');
          if (!isIncludeCodeview) {
              $btn = $btn.not('.btn-codeview');
          }
          this.ui.toggleBtn($btn, false);
      };
      return Toolbar;
  }());

  var LinkDialog = /** @class */ (function () {
      function LinkDialog(context) {
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$body = $$1(document.body);
          this.$editor = context.layoutInfo.editor;
          this.options = context.options;
          this.lang = this.options.langInfo;
          context.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
      }
      LinkDialog.prototype.initialize = function () {
          var $container = this.options.dialogsInBody ? this.$body : this.$editor;
          var body = [
              '<div class="form-group note-form-group">',
              "<label class=\"note-form-label\">" + this.lang.link.textToDisplay + "</label>",
              '<input class="note-link-text form-control note-form-control note-input" type="text" />',
              '</div>',
              '<div class="form-group note-form-group">',
              "<label class=\"note-form-label\">" + this.lang.link.url + "</label>",
              '<input class="note-link-url form-control note-form-control note-input" type="text" value="http://" />',
              '</div>',
              !this.options.disableLinkTarget
                  ? $$1('<div/>').append(this.ui.checkbox({
                      className: 'sn-checkbox-open-in-new-window',
                      text: this.lang.link.openInNewWindow,
                      checked: true
                  }).render()).html()
                  : ''
          ].join('');
          var buttonClass = 'btn btn-primary note-btn note-btn-primary note-link-btn';
          var footer = "<input type=\"button\" href=\"#\" class=\"" + buttonClass + "\" value=\"" + this.lang.link.insert + "\" disabled>";
          this.$dialog = this.ui.dialog({
              className: 'link-dialog',
              title: this.lang.link.insert,
              fade: this.options.dialogsFade,
              body: body,
              footer: footer
          }).render().appendTo($container);
      };
      LinkDialog.prototype.destroy = function () {
          this.ui.hideDialog(this.$dialog);
          this.$dialog.remove();
      };
      LinkDialog.prototype.bindEnterKey = function ($input, $btn) {
          $input.on('keypress', function (event) {
              if (event.keyCode === key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
              }
          });
      };
      /**
       * toggle update button
       */
      LinkDialog.prototype.toggleLinkBtn = function ($linkBtn, $linkText, $linkUrl) {
          this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
      };
      /**
       * Show link dialog and set event handlers on dialog controls.
       *
       * @param {Object} linkInfo
       * @return {Promise}
       */
      LinkDialog.prototype.showLinkDialog = function (linkInfo) {
          var _this = this;
          return $$1.Deferred(function (deferred) {
              var $linkText = _this.$dialog.find('.note-link-text');
              var $linkUrl = _this.$dialog.find('.note-link-url');
              var $linkBtn = _this.$dialog.find('.note-link-btn');
              var $openInNewWindow = _this.$dialog
                  .find('.sn-checkbox-open-in-new-window input[type=checkbox]');
              _this.ui.onDialogShown(_this.$dialog, function () {
                  _this.context.triggerEvent('dialog.shown');
                  // if no url was given, copy text to url
                  if (!linkInfo.url) {
                      linkInfo.url = linkInfo.text;
                  }
                  $linkText.val(linkInfo.text);
                  var handleLinkTextUpdate = function () {
                      _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                      // if linktext was modified by keyup,
                      // stop cloning text from linkUrl
                      linkInfo.text = $linkText.val();
                  };
                  $linkText.on('input', handleLinkTextUpdate).on('paste', function () {
                      setTimeout(handleLinkTextUpdate, 0);
                  });
                  var handleLinkUrlUpdate = function () {
                      _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                      // display same link on `Text to display` input
                      // when create a new link
                      if (!linkInfo.text) {
                          $linkText.val($linkUrl.val());
                      }
                  };
                  $linkUrl.on('input', handleLinkUrlUpdate).on('paste', function () {
                      setTimeout(handleLinkUrlUpdate, 0);
                  }).val(linkInfo.url);
                  if (!env.isSupportTouch) {
                      $linkUrl.trigger('focus');
                  }
                  _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                  _this.bindEnterKey($linkUrl, $linkBtn);
                  _this.bindEnterKey($linkText, $linkBtn);
                  var isNewWindowChecked = linkInfo.isNewWindow !== undefined
                      ? linkInfo.isNewWindow : _this.context.options.linkTargetBlank;
                  $openInNewWindow.prop('checked', isNewWindowChecked);
                  $linkBtn.one('click', function (event) {
                      event.preventDefault();
                      deferred.resolve({
                          range: linkInfo.range,
                          url: $linkUrl.val(),
                          text: $linkText.val(),
                          isNewWindow: $openInNewWindow.is(':checked')
                      });
                      _this.ui.hideDialog(_this.$dialog);
                  });
              });
              _this.ui.onDialogHidden(_this.$dialog, function () {
                  // detach events
                  $linkText.off('input paste keypress');
                  $linkUrl.off('input paste keypress');
                  $linkBtn.off('click');
                  if (deferred.state() === 'pending') {
                      deferred.reject();
                  }
              });
              _this.ui.showDialog(_this.$dialog);
          }).promise();
      };
      /**
       * @param {Object} layoutInfo
       */
      LinkDialog.prototype.show = function () {
          var _this = this;
          var linkInfo = this.context.invoke('editor.getLinkInfo');
          this.context.invoke('editor.saveRange');
          this.showLinkDialog(linkInfo).then(function (linkInfo) {
              _this.context.invoke('editor.restoreRange');
              _this.context.invoke('editor.createLink', linkInfo);
          }).fail(function () {
              _this.context.invoke('editor.restoreRange');
          });
      };
      return LinkDialog;
  }());

  var LinkPopover = /** @class */ (function () {
      function LinkPopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.options = context.options;
          this.events = {
              'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
                  _this.update();
              },
              'summernote.disable summernote.dialog.shown': function () {
                  _this.hide();
              }
          };
      }
      LinkPopover.prototype.shouldInitialize = function () {
          return !lists.isEmpty(this.options.popover.link);
      };
      LinkPopover.prototype.initialize = function () {
          this.$popover = this.ui.popover({
              className: 'note-link-popover',
              callback: function ($node) {
                  var $content = $node.find('.popover-content,.note-popover-content');
                  $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
              }
          }).render().appendTo(this.options.container);
          var $content = this.$popover.find('.popover-content,.note-popover-content');
          this.context.invoke('buttons.build', $content, this.options.popover.link);
      };
      LinkPopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      LinkPopover.prototype.update = function () {
          // Prevent focusing on editable when invoke('code') is executed
          if (!this.context.invoke('editor.hasFocus')) {
              this.hide();
              return;
          }
          var rng = this.context.invoke('editor.createRange');
          if (rng.isCollapsed() && rng.isOnAnchor()) {
              var anchor = dom.ancestor(rng.sc, dom.isAnchor);
              var href = $$1(anchor).attr('href');
              this.$popover.find('a').attr('href', href).html(href);
              var pos = dom.posFromPlaceholder(anchor);
              this.$popover.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top
              });
          }
          else {
              this.hide();
          }
      };
      LinkPopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return LinkPopover;
  }());

  var ImageDialog = /** @class */ (function () {
      function ImageDialog(context) {
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$body = $$1(document.body);
          this.$editor = context.layoutInfo.editor;
          this.options = context.options;
          this.lang = this.options.langInfo;
      }
      ImageDialog.prototype.initialize = function () {
          var $container = this.options.dialogsInBody ? this.$body : this.$editor;
          var imageLimitation = '';
          if (this.options.maximumImageFileSize) {
              var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
              var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
                  ' ' + ' KMGTP'[unit] + 'B';
              imageLimitation = "<small>" + (this.lang.image.maximumFileSize + ' : ' + readableSize) + "</small>";
          }
          var body = [
              '<div class="form-group note-form-group note-group-select-from-files">',
              '<label class="note-form-label">' + this.lang.image.selectFromFiles + '</label>',
              '<input class="note-image-input note-form-control note-input" ',
              ' type="file" name="files" accept="image/*" multiple="multiple" />',
              imageLimitation,
              '</div>',
              '<div class="form-group note-group-image-url" style="overflow:auto;">',
              '<label class="note-form-label">' + this.lang.image.url + '</label>',
              '<input class="note-image-url form-control note-form-control note-input ',
              ' col-md-12" type="text" />',
              '</div>'
          ].join('');
          var buttonClass = 'btn btn-primary note-btn note-btn-primary note-image-btn';
          var footer = "<input type=\"button\" href=\"#\" class=\"" + buttonClass + "\" value=\"" + this.lang.image.insert + "\" disabled>";
          this.$dialog = this.ui.dialog({
              title: this.lang.image.insert,
              fade: this.options.dialogsFade,
              body: body,
              footer: footer
          }).render().appendTo($container);
      };
      ImageDialog.prototype.destroy = function () {
          this.ui.hideDialog(this.$dialog);
          this.$dialog.remove();
      };
      ImageDialog.prototype.bindEnterKey = function ($input, $btn) {
          $input.on('keypress', function (event) {
              if (event.keyCode === key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
              }
          });
      };
      ImageDialog.prototype.show = function () {
          var _this = this;
          this.context.invoke('editor.saveRange');
          this.showImageDialog().then(function (data) {
              // [workaround] hide dialog before restore range for IE range focus
              _this.ui.hideDialog(_this.$dialog);
              _this.context.invoke('editor.restoreRange');
              if (typeof data === 'string') { // image url
                  // If onImageLinkInsert set,
                  if (_this.options.callbacks.onImageLinkInsert) {
                      _this.context.triggerEvent('image.link.insert', data);
                  }
                  else {
                      _this.context.invoke('editor.insertImage', data);
                  }
              }
              else { // array of files
                  // If onImageUpload set,
                  if (_this.options.callbacks.onImageUpload) {
                      _this.context.triggerEvent('image.upload', data);
                  }
                  else {
                      // else insert Image as dataURL
                      _this.context.invoke('editor.insertImagesAsDataURL', data);
                  }
              }
          }).fail(function () {
              _this.context.invoke('editor.restoreRange');
          });
      };
      /**
       * show image dialog
       *
       * @param {jQuery} $dialog
       * @return {Promise}
       */
      ImageDialog.prototype.showImageDialog = function () {
          var _this = this;
          return $$1.Deferred(function (deferred) {
              var $imageInput = _this.$dialog.find('.note-image-input');
              var $imageUrl = _this.$dialog.find('.note-image-url');
              var $imageBtn = _this.$dialog.find('.note-image-btn');
              _this.ui.onDialogShown(_this.$dialog, function () {
                  _this.context.triggerEvent('dialog.shown');
                  // Cloning imageInput to clear element.
                  $imageInput.replaceWith($imageInput.clone().on('change', function (event) {
                      deferred.resolve(event.target.files || event.target.value);
                  }).val(''));
                  $imageBtn.click(function (event) {
                      event.preventDefault();
                      deferred.resolve($imageUrl.val());
                  });
                  $imageUrl.on('keyup paste', function () {
                      var url = $imageUrl.val();
                      _this.ui.toggleBtn($imageBtn, url);
                  }).val('');
                  if (!env.isSupportTouch) {
                      $imageUrl.trigger('focus');
                  }
                  _this.bindEnterKey($imageUrl, $imageBtn);
              });
              _this.ui.onDialogHidden(_this.$dialog, function () {
                  $imageInput.off('change');
                  $imageUrl.off('keyup paste keypress');
                  $imageBtn.off('click');
                  if (deferred.state() === 'pending') {
                      deferred.reject();
                  }
              });
              _this.ui.showDialog(_this.$dialog);
          });
      };
      return ImageDialog;
  }());

  /**
   * Image popover module
   *  mouse events that show/hide popover will be handled by Handle.js.
   *  Handle.js will receive the events and invoke 'imagePopover.update'.
   */
  var ImagePopover = /** @class */ (function () {
      function ImagePopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.editable = context.layoutInfo.editable[0];
          this.options = context.options;
          this.events = {
              'summernote.disable': function () {
                  _this.hide();
              }
          };
      }
      ImagePopover.prototype.shouldInitialize = function () {
          return !lists.isEmpty(this.options.popover.image);
      };
      ImagePopover.prototype.initialize = function () {
          this.$popover = this.ui.popover({
              className: 'note-image-popover'
          }).render().appendTo(this.options.container);
          var $content = this.$popover.find('.popover-content,.note-popover-content');
          this.context.invoke('buttons.build', $content, this.options.popover.image);
      };
      ImagePopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      ImagePopover.prototype.update = function (target) {
          if (dom.isImg(target)) {
              var pos = dom.posFromPlaceholder(target);
              var posEditor = dom.posFromPlaceholder(this.editable);
              this.$popover.css({
                  display: 'block',
                  left: this.options.popatmouse ? event.pageX - 20 : pos.left,
                  top: this.options.popatmouse ? event.pageY : Math.min(pos.top, posEditor.top)
              });
          }
          else {
              this.hide();
          }
      };
      ImagePopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return ImagePopover;
  }());

  var TablePopover = /** @class */ (function () {
      function TablePopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.options = context.options;
          this.events = {
              'summernote.mousedown': function (we, e) {
                  _this.update(e.target);
              },
              'summernote.keyup summernote.scroll summernote.change': function () {
                  _this.update();
              },
              'summernote.disable': function () {
                  _this.hide();
              }
          };
      }
      TablePopover.prototype.shouldInitialize = function () {
          return !lists.isEmpty(this.options.popover.table);
      };
      TablePopover.prototype.initialize = function () {
          this.$popover = this.ui.popover({
              className: 'note-table-popover'
          }).render().appendTo(this.options.container);
          var $content = this.$popover.find('.popover-content,.note-popover-content');
          this.context.invoke('buttons.build', $content, this.options.popover.table);
          // [workaround] Disable Firefox's default table editor
          if (env.isFF) {
              document.execCommand('enableInlineTableEditing', false, false);
          }
      };
      TablePopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      TablePopover.prototype.update = function (target) {
          if (this.context.isDisabled()) {
              return false;
          }
          var isCell = dom.isCell(target);
          if (isCell) {
              var pos = dom.posFromPlaceholder(target);
              this.$popover.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top
              });
          }
          else {
              this.hide();
          }
          return isCell;
      };
      TablePopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return TablePopover;
  }());

  var VideoDialog = /** @class */ (function () {
      function VideoDialog(context) {
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$body = $$1(document.body);
          this.$editor = context.layoutInfo.editor;
          this.options = context.options;
          this.lang = this.options.langInfo;
      }
      VideoDialog.prototype.initialize = function () {
          var $container = this.options.dialogsInBody ? this.$body : this.$editor;
          var body = [
              '<div class="form-group note-form-group row-fluid">',
              "<label class=\"note-form-label\">" + this.lang.video.url + " <small class=\"text-muted\">" + this.lang.video.providers + "</small></label>",
              '<input class="note-video-url form-control note-form-control note-input" type="text" />',
              '</div>'
          ].join('');
          var buttonClass = 'btn btn-primary note-btn note-btn-primary note-video-btn';
          var footer = "<input type=\"button\" href=\"#\" class=\"" + buttonClass + "\" value=\"" + this.lang.video.insert + "\" disabled>";
          this.$dialog = this.ui.dialog({
              title: this.lang.video.insert,
              fade: this.options.dialogsFade,
              body: body,
              footer: footer
          }).render().appendTo($container);
      };
      VideoDialog.prototype.destroy = function () {
          this.ui.hideDialog(this.$dialog);
          this.$dialog.remove();
      };
      VideoDialog.prototype.bindEnterKey = function ($input, $btn) {
          $input.on('keypress', function (event) {
              if (event.keyCode === key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
              }
          });
      };
      VideoDialog.prototype.createVideoNode = function (url) {
          // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
          var ytRegExp = /\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/;
          var ytRegExpForStart = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/;
          var ytMatch = url.match(ytRegExp);
          var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
          var igMatch = url.match(igRegExp);
          var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
          var vMatch = url.match(vRegExp);
          var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
          var vimMatch = url.match(vimRegExp);
          var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
          var dmMatch = url.match(dmRegExp);
          var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
          var youkuMatch = url.match(youkuRegExp);
          var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
          var qqMatch = url.match(qqRegExp);
          var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
          var qqMatch2 = url.match(qqRegExp2);
          var mp4RegExp = /^.+.(mp4|m4v)$/;
          var mp4Match = url.match(mp4RegExp);
          var oggRegExp = /^.+.(ogg|ogv)$/;
          var oggMatch = url.match(oggRegExp);
          var webmRegExp = /^.+.(webm)$/;
          var webmMatch = url.match(webmRegExp);
          var $video;
          if (ytMatch && ytMatch[1].length === 11) {
              var youtubeId = ytMatch[1];
              var start = 0;
              if (typeof ytMatch[2] !== 'undefined') {
                  var ytMatchForStart = ytMatch[2].match(ytRegExpForStart);
                  if (ytMatchForStart) {
                      for (var n = [3600, 60, 1], i = 0, r = n.length; i < r; i++) {
                          start += (typeof ytMatchForStart[i + 1] !== 'undefined' ? n[i] * parseInt(ytMatchForStart[i + 1], 10) : 0);
                      }
                  }
              }
              $video = $$1('<iframe>')
                  .attr('frameborder', 0)
                  .attr('src', '//www.youtube.com/embed/' + youtubeId + (start > 0 ? '?start=' + start : ''))
                  .attr('width', '640').attr('height', '360');
          }
          else if (igMatch && igMatch[0].length) {
              $video = $$1('<iframe>')
                  .attr('frameborder', 0)
                  .attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/')
                  .attr('width', '612').attr('height', '710')
                  .attr('scrolling', 'no')
                  .attr('allowtransparency', 'true');
          }
          else if (vMatch && vMatch[0].length) {
              $video = $$1('<iframe>')
                  .attr('frameborder', 0)
                  .attr('src', vMatch[0] + '/embed/simple')
                  .attr('width', '600').attr('height', '600')
                  .attr('class', 'vine-embed');
          }
          else if (vimMatch && vimMatch[3].length) {
              $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                  .attr('frameborder', 0)
                  .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
                  .attr('width', '640').attr('height', '360');
          }
          else if (dmMatch && dmMatch[2].length) {
              $video = $$1('<iframe>')
                  .attr('frameborder', 0)
                  .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
                  .attr('width', '640').attr('height', '360');
          }
          else if (youkuMatch && youkuMatch[1].length) {
              $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                  .attr('frameborder', 0)
                  .attr('height', '498')
                  .attr('width', '510')
                  .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
          }
          else if ((qqMatch && qqMatch[1].length) || (qqMatch2 && qqMatch2[2].length)) {
              var vid = ((qqMatch && qqMatch[1].length) ? qqMatch[1] : qqMatch2[2]);
              $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                  .attr('frameborder', 0)
                  .attr('height', '310')
                  .attr('width', '500')
                  .attr('src', 'http://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
          }
          else if (mp4Match || oggMatch || webmMatch) {
              $video = $$1('<video controls>')
                  .attr('src', url)
                  .attr('width', '640').attr('height', '360');
          }
          else {
              // this is not a known video link. Now what, Cat? Now what?
              return false;
          }
          $video.addClass('note-video-clip');
          return $video[0];
      };
      VideoDialog.prototype.show = function () {
          var _this = this;
          var text = this.context.invoke('editor.getSelectedText');
          this.context.invoke('editor.saveRange');
          this.showVideoDialog(text).then(function (url) {
              // [workaround] hide dialog before restore range for IE range focus
              _this.ui.hideDialog(_this.$dialog);
              _this.context.invoke('editor.restoreRange');
              // build node
              var $node = _this.createVideoNode(url);
              if ($node) {
                  // insert video node
                  _this.context.invoke('editor.insertNode', $node);
              }
          }).fail(function () {
              _this.context.invoke('editor.restoreRange');
          });
      };
      /**
       * show image dialog
       *
       * @param {jQuery} $dialog
       * @return {Promise}
       */
      VideoDialog.prototype.showVideoDialog = function (text) {
          var _this = this;
          return $$1.Deferred(function (deferred) {
              var $videoUrl = _this.$dialog.find('.note-video-url');
              var $videoBtn = _this.$dialog.find('.note-video-btn');
              _this.ui.onDialogShown(_this.$dialog, function () {
                  _this.context.triggerEvent('dialog.shown');
                  $videoUrl.val(text).on('input', function () {
                      _this.ui.toggleBtn($videoBtn, $videoUrl.val());
                  });
                  if (!env.isSupportTouch) {
                      $videoUrl.trigger('focus');
                  }
                  $videoBtn.click(function (event) {
                      event.preventDefault();
                      deferred.resolve($videoUrl.val());
                  });
                  _this.bindEnterKey($videoUrl, $videoBtn);
              });
              _this.ui.onDialogHidden(_this.$dialog, function () {
                  $videoUrl.off('input');
                  $videoBtn.off('click');
                  if (deferred.state() === 'pending') {
                      deferred.reject();
                  }
              });
              _this.ui.showDialog(_this.$dialog);
          });
      };
      return VideoDialog;
  }());

  var HelpDialog = /** @class */ (function () {
      function HelpDialog(context) {
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$body = $$1(document.body);
          this.$editor = context.layoutInfo.editor;
          this.options = context.options;
          this.lang = this.options.langInfo;
      }
      HelpDialog.prototype.initialize = function () {
          var $container = this.options.dialogsInBody ? this.$body : this.$editor;
          var body = [
              '<p class="text-center">',
              '<a href="http://summernote.org/" target="_blank">Summernote 0.8.11</a> · ',
              '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
              '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
              '</p>'
          ].join('');
          this.$dialog = this.ui.dialog({
              title: this.lang.options.help,
              fade: this.options.dialogsFade,
              body: this.createShortcutList(),
              footer: body,
              callback: function ($node) {
                  $node.find('.modal-body,.note-modal-body').css({
                      'max-height': 300,
                      'overflow': 'scroll'
                  });
              }
          }).render().appendTo($container);
      };
      HelpDialog.prototype.destroy = function () {
          this.ui.hideDialog(this.$dialog);
          this.$dialog.remove();
      };
      HelpDialog.prototype.createShortcutList = function () {
          var _this = this;
          var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
          return Object.keys(keyMap).map(function (key) {
              var command = keyMap[key];
              var $row = $$1('<div><div class="help-list-item"/></div>');
              $row.append($$1('<label><kbd>' + key + '</kdb></label>').css({
                  'width': 180,
                  'margin-right': 10
              })).append($$1('<span/>').html(_this.context.memo('help.' + command) || command));
              return $row.html();
          }).join('');
      };
      /**
       * show help dialog
       *
       * @return {Promise}
       */
      HelpDialog.prototype.showHelpDialog = function () {
          var _this = this;
          return $$1.Deferred(function (deferred) {
              _this.ui.onDialogShown(_this.$dialog, function () {
                  _this.context.triggerEvent('dialog.shown');
                  deferred.resolve();
              });
              _this.ui.showDialog(_this.$dialog);
          }).promise();
      };
      HelpDialog.prototype.show = function () {
          var _this = this;
          this.context.invoke('editor.saveRange');
          this.showHelpDialog().then(function () {
              _this.context.invoke('editor.restoreRange');
          });
      };
      return HelpDialog;
  }());

  var AIR_MODE_POPOVER_X_OFFSET = 20;
  var AirPopover = /** @class */ (function () {
      function AirPopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.options = context.options;
          this.events = {
              'summernote.keyup summernote.mouseup summernote.scroll': function () {
                  _this.update();
              },
              'summernote.disable summernote.change summernote.dialog.shown': function () {
                  _this.hide();
              },
              'summernote.focusout': function (we, e) {
                  // [workaround] Firefox doesn't support relatedTarget on focusout
                  //  - Ignore hide action on focus out in FF.
                  if (env.isFF) {
                      return;
                  }
                  if (!e.relatedTarget || !dom.ancestor(e.relatedTarget, func.eq(_this.$popover[0]))) {
                      _this.hide();
                  }
              }
          };
      }
      AirPopover.prototype.shouldInitialize = function () {
          return this.options.airMode && !lists.isEmpty(this.options.popover.air);
      };
      AirPopover.prototype.initialize = function () {
          this.$popover = this.ui.popover({
              className: 'note-air-popover'
          }).render().appendTo(this.options.container);
          var $content = this.$popover.find('.popover-content');
          this.context.invoke('buttons.build', $content, this.options.popover.air);
      };
      AirPopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      AirPopover.prototype.update = function () {
          var styleInfo = this.context.invoke('editor.currentStyle');
          if (styleInfo.range && !styleInfo.range.isCollapsed()) {
              var rect = lists.last(styleInfo.range.getClientRects());
              if (rect) {
                  var bnd = func.rect2bnd(rect);
                  this.$popover.css({
                      display: 'block',
                      left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
                      top: bnd.top + bnd.height
                  });
                  this.context.invoke('buttons.updateCurrentStyle', this.$popover);
              }
          }
          else {
              this.hide();
          }
      };
      AirPopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return AirPopover;
  }());

  var POPOVER_DIST = 5;
  var HintPopover = /** @class */ (function () {
      function HintPopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$editable = context.layoutInfo.editable;
          this.options = context.options;
          this.hint = this.options.hint || [];
          this.direction = this.options.hintDirection || 'bottom';
          this.hints = $$1.isArray(this.hint) ? this.hint : [this.hint];
          this.events = {
              'summernote.keyup': function (we, e) {
                  if (!e.isDefaultPrevented()) {
                      _this.handleKeyup(e);
                  }
              },
              'summernote.keydown': function (we, e) {
                  _this.handleKeydown(e);
              },
              'summernote.disable summernote.dialog.shown': function () {
                  _this.hide();
              }
          };
      }
      HintPopover.prototype.shouldInitialize = function () {
          return this.hints.length > 0;
      };
      HintPopover.prototype.initialize = function () {
          var _this = this;
          this.lastWordRange = null;
          this.$popover = this.ui.popover({
              className: 'note-hint-popover',
              hCode2nightrrow: true,
              direction: ''
          }).render().appendTo(this.options.container);
          this.$popover.hide();
          this.$content = this.$popover.find('.popover-content,.note-popover-content');
          this.$content.on('click', '.note-hint-item', function (e) {
              _this.$content.find('.active').removeClass('active');
              $$1(e.currentTarget).addClass('active');
              _this.replace();
          });
      };
      HintPopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      HintPopover.prototype.selectItem = function ($item) {
          this.$content.find('.active').removeClass('active');
          $item.addClass('active');
          this.$content[0].scrollTop = $item[0].offsetTop - (this.$content.innerHeight() / 2);
      };
      HintPopover.prototype.moveDown = function () {
          var $current = this.$content.find('.note-hint-item.active');
          var $next = $current.next();
          if ($next.length) {
              this.selectItem($next);
          }
          else {
              var $nextGroup = $current.parent().next();
              if (!$nextGroup.length) {
                  $nextGroup = this.$content.find('.note-hint-group').first();
              }
              this.selectItem($nextGroup.find('.note-hint-item').first());
          }
      };
      HintPopover.prototype.moveUp = function () {
          var $current = this.$content.find('.note-hint-item.active');
          var $prev = $current.prev();
          if ($prev.length) {
              this.selectItem($prev);
          }
          else {
              var $prevGroup = $current.parent().prev();
              if (!$prevGroup.length) {
                  $prevGroup = this.$content.find('.note-hint-group').last();
              }
              this.selectItem($prevGroup.find('.note-hint-item').last());
          }
      };
      HintPopover.prototype.replace = function () {
          var $item = this.$content.find('.note-hint-item.active');
          if ($item.length) {
              var node = this.nodeFromItem($item);
              // XXX: consider to move codes to editor for recording redo/undo.
              this.lastWordRange.insertNode(node);
              range.createFromNode(node).collapse().select();
              this.lastWordRange = null;
              this.hide();
              this.context.triggerEvent('change', this.$editable.html(), this.$editable[0]);
              this.context.invoke('editor.focus');
          }
      };
      HintPopover.prototype.nodeFromItem = function ($item) {
          var hint = this.hints[$item.data('index')];
          var item = $item.data('item');
          var node = hint.content ? hint.content(item) : item;
          if (typeof node === 'string') {
              node = dom.createText(node);
          }
          return node;
      };
      HintPopover.prototype.createItemTemplates = function (hintIdx, items) {
          var hint = this.hints[hintIdx];
          return items.map(function (item, idx) {
              var $item = $$1('<div class="note-hint-item"/>');
              $item.append(hint.template ? hint.template(item) : item + '');
              $item.data({
                  'index': hintIdx,
                  'item': item
              });
              return $item;
          });
      };
      HintPopover.prototype.handleKeydown = function (e) {
          if (!this.$popover.is(':visible')) {
              return;
          }
          if (e.keyCode === key.code.ENTER) {
              e.preventDefault();
              this.replace();
          }
          else if (e.keyCode === key.code.UP) {
              e.preventDefault();
              this.moveUp();
          }
          else if (e.keyCode === key.code.DOWN) {
              e.preventDefault();
              this.moveDown();
          }
      };
      HintPopover.prototype.searchKeyword = function (index, keyword, callback) {
          var hint = this.hints[index];
          if (hint && hint.match.test(keyword) && hint.search) {
              var matches = hint.match.exec(keyword);
              hint.search(matches[1], callback);
          }
          else {
              callback();
          }
      };
      HintPopover.prototype.createGroup = function (idx, keyword) {
          var _this = this;
          var $group = $$1('<div class="note-hint-group note-hint-group-' + idx + '"/>');
          this.searchKeyword(idx, keyword, function (items) {
              items = items || [];
              if (items.length) {
                  $group.html(_this.createItemTemplates(idx, items));
                  _this.show();
              }
          });
          return $group;
      };
      HintPopover.prototype.handleKeyup = function (e) {
          var _this = this;
          if (!lists.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
              var wordRange = this.context.invoke('editor.createRange').getWordRange();
              var keyword_1 = wordRange.toString();
              if (this.hints.length && keyword_1) {
                  this.$content.empty();
                  var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
                  if (bnd) {
                      this.$popover.hide();
                      this.lastWordRange = wordRange;
                      this.hints.forEach(function (hint, idx) {
                          if (hint.match.test(keyword_1)) {
                              _this.createGroup(idx, keyword_1).appendTo(_this.$content);
                          }
                      });
                      // select first .note-hint-item
                      this.$content.find('.note-hint-item:first').addClass('active');
                      // set position for popover after group is created
                      if (this.direction === 'top') {
                          this.$popover.css({
                              left: bnd.left,
                              top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
                          });
                      }
                      else {
                          this.$popover.css({
                              left: bnd.left,
                              top: bnd.top + bnd.height + POPOVER_DIST
                          });
                      }
                  }
              }
              else {
                  this.hide();
              }
          }
      };
      HintPopover.prototype.show = function () {
          this.$popover.show();
      };
      HintPopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return HintPopover;
  }());

  var Context = /** @class */ (function () {
      /**
       * @param {jQuery} $note
       * @param {Object} options
       */
      function Context($note, options) {
          this.ui = $$1.summernote.ui;
          this.$note = $note;
          this.memos = {};
          this.modules = {};
          this.layoutInfo = {};
          this.options = options;
          this.initialize();
      }
      /**
       * create layout and initialize modules and other resources
       */
      Context.prototype.initialize = function () {
          this.layoutInfo = this.ui.createLayout(this.$note, this.options);
          this._initialize();
          this.$note.hide();
          return this;
      };
      /**
       * destroy modules and other resources and remove layout
       */
      Context.prototype.destroy = function () {
          this._destroy();
          this.$note.removeData('summernote');
          this.ui.removeLayout(this.$note, this.layoutInfo);
      };
      /**
       * destory modules and other resources and initialize it again
       */
      Context.prototype.reset = function () {
          var disabled = this.isDisabled();
          this.code(dom.emptyPara);
          this._destroy();
          this._initialize();
          if (disabled) {
              this.disable();
          }
      };
      Context.prototype._initialize = function () {
          var _this = this;
          // add optional buttons
          var buttons = $$1.extend({}, this.options.buttons);
          Object.keys(buttons).forEach(function (key) {
              _this.memo('button.' + key, buttons[key]);
          });
          var modules = $$1.extend({}, this.options.modules, $$1.summernote.plugins || {});
          // add and initialize modules
          Object.keys(modules).forEach(function (key) {
              _this.module(key, modules[key], true);
          });
          Object.keys(this.modules).forEach(function (key) {
              _this.initializeModule(key);
          });
      };
      Context.prototype._destroy = function () {
          var _this = this;
          // destroy modules with reversed order
          Object.keys(this.modules).reverse().forEach(function (key) {
              _this.removeModule(key);
          });
          Object.keys(this.memos).forEach(function (key) {
              _this.removeMemo(key);
          });
          // trigger custom onDestroy callback
          this.triggerEvent('destroy', this);
      };
      Context.prototype.code = function (html) {
          var isActivated = this.invoke('codeview.isActivated');
          if (html === undefined) {
              this.invoke('codeview.sync');
              return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
          }
          else {
              if (isActivated) {
                  this.layoutInfo.codable.val(html);
              }
              else {
                  this.layoutInfo.editable.html(html);
              }
              this.$note.val(html);
              this.triggerEvent('change', html);
          }
      };
      Context.prototype.isDisabled = function () {
          return this.layoutInfo.editable.attr('contenteditable') === 'false';
      };
      Context.prototype.enable = function () {
          this.layoutInfo.editable.attr('contenteditable', true);
          this.invoke('toolbar.activate', true);
          this.triggerEvent('disable', false);
      };
      Context.prototype.disable = function () {
          // close codeview if codeview is opend
          if (this.invoke('codeview.isActivated')) {
              this.invoke('codeview.deactivate');
          }
          this.layoutInfo.editable.attr('contenteditable', false);
          this.invoke('toolbar.deactivate', true);
          this.triggerEvent('disable', true);
      };
      Context.prototype.triggerEvent = function () {
          var namespace = lists.head(arguments);
          var args = lists.tail(lists.from(arguments));
          var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];
          if (callback) {
              callback.apply(this.$note[0], args);
          }
          this.$note.trigger('summernote.' + namespace, args);
      };
      Context.prototype.initializeModule = function (key) {
          var module = this.modules[key];
          module.shouldInitialize = module.shouldInitialize || func.ok;
          if (!module.shouldInitialize()) {
              return;
          }
          // initialize module
          if (module.initialize) {
              module.initialize();
          }
          // attach events
          if (module.events) {
              dom.attachEvents(this.$note, module.events);
          }
      };
      Context.prototype.module = function (key, ModuleClass, withoutIntialize) {
          if (arguments.length === 1) {
              return this.modules[key];
          }
          this.modules[key] = new ModuleClass(this);
          if (!withoutIntialize) {
              this.initializeModule(key);
          }
      };
      Context.prototype.removeModule = function (key) {
          var module = this.modules[key];
          if (module.shouldInitialize()) {
              if (module.events) {
                  dom.detachEvents(this.$note, module.events);
              }
              if (module.destroy) {
                  module.destroy();
              }
          }
          delete this.modules[key];
      };
      Context.prototype.memo = function (key, obj) {
          if (arguments.length === 1) {
              return this.memos[key];
          }
          this.memos[key] = obj;
      };
      Context.prototype.removeMemo = function (key) {
          if (this.memos[key] && this.memos[key].destroy) {
              this.memos[key].destroy();
          }
          delete this.memos[key];
      };
      /**
       * Some buttons need to change their visual style immediately once they get pressed
       */
      Context.prototype.createInvokeHandlerAndUpdateState = function (namespace, value) {
          var _this = this;
          return function (event) {
              _this.createInvokeHandler(namespace, value)(event);
              _this.invoke('buttons.updateCurrentStyle');
          };
      };
      Context.prototype.createInvokeHandler = function (namespace, value) {
          var _this = this;
          return function (event) {
              event.preventDefault();
              var $target = $$1(event.target);
              _this.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
          };
      };
      Context.prototype.invoke = function () {
          var namespace = lists.head(arguments);
          var args = lists.tail(lists.from(arguments));
          var splits = namespace.split('.');
          var hasSeparator = splits.length > 1;
          var moduleName = hasSeparator && lists.head(splits);
          var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
          var module = this.modules[moduleName || 'editor'];
          if (!moduleName && this[methodName]) {
              return this[methodName].apply(this, args);
          }
          else if (module && module[methodName] && module.shouldInitialize()) {
              return module[methodName].apply(module, args);
          }
      };
      return Context;
  }());

  $$1.fn.extend({
      /**
       * Summernote API
       *
       * @param {Object|String}
       * @return {this}
       */
      summernote: function () {
          var type = $$1.type(lists.head(arguments));
          var isExternalAPICalled = type === 'string';
          var hasInitOptions = type === 'object';
          var options = $$1.extend({}, $$1.summernote.options, hasInitOptions ? lists.head(arguments) : {});
          // Update options
          options.langInfo = $$1.extend(true, {}, $$1.summernote.lang['en-US'], $$1.summernote.lang[options.lang]);
          options.icons = $$1.extend(true, {}, $$1.summernote.options.icons, options.icons);
          options.tooltip = options.tooltip === 'auto' ? !env.isSupportTouch : options.tooltip;
          this.each(function (idx, note) {
              var $note = $$1(note);
              if (!$note.data('summernote')) {
                  var context = new Context($note, options);
                  $note.data('summernote', context);
                  $note.data('summernote').triggerEvent('init', context.layoutInfo);
              }
          });
          var $note = this.first();
          if ($note.length) {
              var context = $note.data('summernote');
              if (isExternalAPICalled) {
                  return context.invoke.apply(context, lists.from(arguments));
              }
              else if (options.focus) {
                  context.invoke('editor.focus');
              }
          }
          return this;
      }
  });

  $$1.summernote = $$1.extend($$1.summernote, {
      version: '0.8.11',
      ui: ui,
      dom: dom,
      range: range,
      plugins: {},
      options: {
          modules: {
              'editor': Editor,
              'clipboard': Clipboard,
              'dropzone': Dropzone,
              'codeview': CodeView,
              'statusbar': Statusbar,
              'fullscreen': Fullscreen,
              'handle': Handle,
              // FIXME: HintPopover must be front of autolink
              //  - Script error about range when Enter key is pressed on hint popover
              'hintPopover': HintPopover,
              'autoLink': AutoLink,
              'autoSync': AutoSync,
              'placeholder': Placeholder,
              'buttons': Buttons,
              'toolbar': Toolbar,
              'linkDialog': LinkDialog,
              'linkPopover': LinkPopover,
              'imageDialog': ImageDialog,
              'imagePopover': ImagePopover,
              'tablePopover': TablePopover,
              'videoDialog': VideoDialog,
              'helpDialog': HelpDialog,
              'airPopover': AirPopover
          },
          buttons: {},
          lang: 'en-US',
          followingToolbar: true,
          otherStaticBar: '',
          // toolbar
          toolbar: [
              ['style', ['style']],
              ['font', ['bold', 'underline', 'clear']],
              ['fontname', ['fontname']],
              ['color', ['color']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['table', ['table']],
              ['insert', ['link', 'picture', 'video']],
              ['view', ['fullscreen', 'codeview', 'help']]
          ],
          // popover
          popatmouse: true,
          popover: {
              image: [
                  ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
                  ['float', ['floatLeft', 'floatRight', 'floatNone']],
                  ['remove', ['removeMedia']]
              ],
              link: [
                  ['link', ['linkDialogShow', 'unlink']]
              ],
              table: [
                  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
              ],
              air: [
                  ['color', ['color']],
                  ['font', ['bold', 'underline', 'clear']],
                  ['para', ['ul', 'paragraph']],
                  ['table', ['table']],
                  ['insert', ['link', 'picture']]
              ]
          },
          // air mode: inline editor
          airMode: false,
          width: null,
          height: null,
          linkTargetBlank: true,
          focus: false,
          tabSize: 4,
          styleWithSpan: true,
          shortcuts: true,
          textareaAutoSync: true,
          hintDirection: 'bottom',
          tooltip: 'auto',
          container: 'body',
          maxTextLength: 0,
          blockquoteBreakingLevel: 2,
          styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          fontNames: [
              'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
              'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
              'Tahoma', 'Times New Roman', 'Verdana'
          ],
          fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
          // pallete colors(n x n)
          colors: [
              ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
              ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
              ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
              ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
              ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
              ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
              ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
              ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
          ],
          // http://chir.ag/projects/name-that-color/
          colorsName: [
              ['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'],
              ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
              ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'],
              ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'],
              ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'],
              ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'],
              ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'],
              ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou']
          ],
          lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
          tableClassName: 'table table-bordered',
          insertTableMaxSize: {
              col: 10,
              row: 10
          },
          dialogsInBody: false,
          dialogsFade: false,
          maximumImageFileSize: null,
          callbacks: {
              onInit: null,
              onFocus: null,
              onBlur: null,
              onBlurCodeview: null,
              onEnter: null,
              onKeyup: null,
              onKeydown: null,
              onImageUpload: null,
              onImageUploadError: null,
              onImageLinkInsert: null
          },
          codemirror: {
              mode: 'text/html',
              htmlMode: true,
              lineNumbers: true
          },
          keyMap: {
              pc: {
                  'ENTER': 'insertParagraph',
                  'CTRL+Z': 'undo',
                  'CTRL+Y': 'redo',
                  'TAB': 'tab',
                  'SHIFT+TAB': 'untab',
                  'CTRL+B': 'bold',
                  'CTRL+I': 'italic',
                  'CTRL+U': 'underline',
                  'CTRL+SHIFT+S': 'strikethrough',
                  'CTRL+BACKSLASH': 'removeFormat',
                  'CTRL+SHIFT+L': 'justifyLeft',
                  'CTRL+SHIFT+E': 'justifyCenter',
                  'CTRL+SHIFT+R': 'justifyRight',
                  'CTRL+SHIFT+J': 'justifyFull',
                  'CTRL+SHIFT+NUM7': 'insertUnorderedList',
                  'CTRL+SHIFT+NUM8': 'insertOrderedList',
                  'CTRL+LEFTBRACKET': 'outdent',
                  'CTRL+RIGHTBRACKET': 'indent',
                  'CTRL+NUM0': 'formatPara',
                  'CTRL+NUM1': 'formatH1',
                  'CTRL+NUM2': 'formatH2',
                  'CTRL+NUM3': 'formatH3',
                  'CTRL+NUM4': 'formatH4',
                  'CTRL+NUM5': 'formatH5',
                  'CTRL+NUM6': 'formatH6',
                  'CTRL+ENTER': 'insertHorizontalRule',
                  'CTRL+K': 'linkDialog.show'
              },
              mac: {
                  'ENTER': 'insertParagraph',
                  'CMD+Z': 'undo',
                  'CMD+SHIFT+Z': 'redo',
                  'TAB': 'tab',
                  'SHIFT+TAB': 'untab',
                  'CMD+B': 'bold',
                  'CMD+I': 'italic',
                  'CMD+U': 'underline',
                  'CMD+SHIFT+S': 'strikethrough',
                  'CMD+BACKSLASH': 'removeFormat',
                  'CMD+SHIFT+L': 'justifyLeft',
                  'CMD+SHIFT+E': 'justifyCenter',
                  'CMD+SHIFT+R': 'justifyRight',
                  'CMD+SHIFT+J': 'justifyFull',
                  'CMD+SHIFT+NUM7': 'insertUnorderedList',
                  'CMD+SHIFT+NUM8': 'insertOrderedList',
                  'CMD+LEFTBRACKET': 'outdent',
                  'CMD+RIGHTBRACKET': 'indent',
                  'CMD+NUM0': 'formatPara',
                  'CMD+NUM1': 'formatH1',
                  'CMD+NUM2': 'formatH2',
                  'CMD+NUM3': 'formatH3',
                  'CMD+NUM4': 'formatH4',
                  'CMD+NUM5': 'formatH5',
                  'CMD+NUM6': 'formatH6',
                  'CMD+ENTER': 'insertHorizontalRule',
                  'CMD+K': 'linkDialog.show'
              }
          },
          icons: {
              'align': 'note-icon-align',
              'alignCenter': 'note-icon-align-center',
              'alignJustify': 'note-icon-align-justify',
              'alignLeft': 'note-icon-align-left',
              'alignRight': 'note-icon-align-right',
              'rowBelow': 'note-icon-row-below',
              'colBefore': 'note-icon-col-before',
              'colAfter': 'note-icon-col-after',
              'rowAbove': 'note-icon-row-above',
              'rowRemove': 'note-icon-row-remove',
              'colRemove': 'note-icon-col-remove',
              'indent': 'note-icon-align-indent',
              'outdent': 'note-icon-align-outdent',
              'arrowsAlt': 'note-icon-arrows-alt',
              'bold': 'note-icon-bold',
              'caret': 'note-icon-caret',
              'circle': 'note-icon-circle',
              'close': 'note-icon-close',
              'code': 'note-icon-code',
              'eraser': 'note-icon-eraser',
              'font': 'note-icon-font',
              'frame': 'note-icon-frame',
              'italic': 'note-icon-italic',
              'link': 'note-icon-link',
              'unlink': 'note-icon-chain-broken',
              'magic': 'note-icon-magic',
              'menuCheck': 'note-icon-menu-check',
              'minus': 'note-icon-minus',
              'orderedlist': 'note-icon-orderedlist',
              'pencil': 'note-icon-pencil',
              'picture': 'note-icon-picture',
              'question': 'note-icon-question',
              'redo': 'note-icon-redo',
              'square': 'note-icon-square',
              'strikethrough': 'note-icon-strikethrough',
              'subscript': 'note-icon-subscript',
              'superscript': 'note-icon-superscript',
              'table': 'note-icon-table',
              'textHeight': 'note-icon-text-height',
              'trash': 'note-icon-trash',
              'underline': 'note-icon-underline',
              'undo': 'note-icon-undo',
              'unorderedlist': 'note-icon-unorderedlist',
              'video': 'note-icon-video'
          }
      }
  });

})));
//# sourceMappingURL=summernote.js.map

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sweetalert2=e()}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function i(t,e,n){return(i=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&l(i,n.prototype),i}).apply(null,arguments)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function m(e){return Object.keys(e).map(function(t){return e[t]})}function h(t){return Array.prototype.slice.call(t)}function g(t,e){var n;n='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===z.indexOf(n)&&(z.push(n),_(n))}function v(t){return t&&"function"==typeof t.toPromise}function b(t){return v(t)?t.toPromise():Promise.resolve(t)}function y(t){return t&&Promise.resolve(t)===t}function w(t){return t instanceof Element||"object"===r(e=t)&&e.jquery;var e}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function C(t){var e=Q();return e?e.querySelector(t):null}function e(t){return C(".".concat(t))}function n(){var t=$();return h(t.querySelectorAll(".".concat(Y.icon)))}function k(){var t=n().filter(function(t){return vt(t)});return t.length?t[0]:null}function x(){return e(Y.title)}function P(){return e(Y.content)}function A(){return e(Y.image)}function B(){return e(Y["progress-steps"])}function S(){return e(Y["validation-message"])}function E(){return C(".".concat(Y.actions," .").concat(Y.confirm))}function O(){return C(".".concat(Y.actions," .").concat(Y.cancel))}function T(){return e(Y.actions)}function L(){return e(Y.header)}function j(){return e(Y.footer)}function q(){return e(Y["timer-progress-bar"])}function I(){return e(Y.close)}function V(){var t=h($().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=h($().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return vt(t)})}function M(){return!J()&&!document.body.classList.contains(Y["no-backdrop"])}function R(){return $().hasAttribute("data-loading")}function H(e,t){var n;e.textContent="",t&&(n=(new DOMParser).parseFromString(t,"text/html"),h(n.querySelector("head").childNodes).forEach(function(t){e.appendChild(t)}),h(n.querySelector("body").childNodes).forEach(function(t){e.appendChild(t)}))}function D(t,e){if(e){for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return;return 1}}function N(t,e,n){var o,i;if(i=e,h((o=t).classList).forEach(function(t){-1===m(Y).indexOf(t)&&-1===m(Z).indexOf(t)&&-1===m(i.showClass).indexOf(t)&&o.classList.remove(t)}),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return _("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));mt(t,e.customClass[n])}}var U="SweetAlert2:",_=function(t){console.warn("".concat(U," ").concat(t))},F=function(t){console.error("".concat(U," ").concat(t))},z=[],W=function(t){return"function"==typeof t?t():t},K=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Y=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Z=t(["success","warning","info","question","error"]),Q=function(){return document.body.querySelector(".".concat(Y.container))},$=function(){return e(Y.popup)},J=function(){return document.body.classList.contains(Y["toast-shown"])},X={previousBodyPadding:null};function G(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return gt(t,Y[e]);case"checkbox":return t.querySelector(".".concat(Y.checkbox," input"));case"radio":return t.querySelector(".".concat(Y.radio," input:checked"))||t.querySelector(".".concat(Y.radio," input:first-child"));case"range":return t.querySelector(".".concat(Y.range," input"));default:return gt(t,Y.input)}}function tt(t){var e;t.focus(),"file"!==t.type&&(e=t.value,t.value="",t.value=e)}function et(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function nt(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function ot(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function it(t){t.style.opacity="",t.style.display="none"}function rt(t,e,n){e?ot(t,n):it(t)}function at(t){return!!(t.scrollHeight>t.clientHeight)}function ct(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function st(t,e){var n=1<arguments.length&&void 0!==e&&e,o=q();vt(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(function(){o.style.transition="width ".concat(t/1e3,"s linear"),o.style.width="0%"},10))}function ut(){return"undefined"==typeof window||"undefined"==typeof document}function lt(t){sn.isVisible()&&ft!==t.target.value&&sn.resetValidationMessage(),ft=t.target.value}function dt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?wt(t,e):t&&H(e,t)}function pt(t,e){var n=T(),o=E(),i=O();e.showConfirmButton||e.showCancelButton||it(n),N(n,e,"actions"),xt(o,"confirm",e),xt(i,"cancel",e),e.buttonsStyling?function(t,e,n){mt([t,e],Y.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor);n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);{var o;R()||(o=window.getComputedStyle(t).getPropertyValue("background-color"),t.style.borderLeftColor=o,t.style.borderRightColor=o)}}(o,i,e):(ht([o,i],Y.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor=""),e.reverseButtons&&o.parentNode.insertBefore(i,o)}var ft,mt=function(t,e){et(t,e,!0)},ht=function(t,e){et(t,e,!1)},gt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(D(t.childNodes[n],e))return t.childNodes[n]},vt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},bt='\n <div aria-labelledby="'.concat(Y.title,'" aria-describedby="').concat(Y.content,'" class="').concat(Y.popup,'" tabindex="-1">\n   <div class="').concat(Y.header,'">\n     <ul class="').concat(Y["progress-steps"],'"></ul>\n     <div class="').concat(Y.icon," ").concat(Z.error,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.question,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.warning,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.info,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.success,'"></div>\n     <img class="').concat(Y.image,'" />\n     <h2 class="').concat(Y.title,'" id="').concat(Y.title,'"></h2>\n     <button type="button" class="').concat(Y.close,'"></button>\n   </div>\n   <div class="').concat(Y.content,'">\n     <div id="').concat(Y.content,'" class="').concat(Y["html-container"],'"></div>\n     <input class="').concat(Y.input,'" />\n     <input type="file" class="').concat(Y.file,'" />\n     <div class="').concat(Y.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(Y.select,'"></select>\n     <div class="').concat(Y.radio,'"></div>\n     <label for="').concat(Y.checkbox,'" class="').concat(Y.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(Y.label,'"></span>\n     </label>\n     <textarea class="').concat(Y.textarea,'"></textarea>\n     <div class="').concat(Y["validation-message"],'" id="').concat(Y["validation-message"],'"></div>\n   </div>\n   <div class="').concat(Y.actions,'">\n     <button type="button" class="').concat(Y.confirm,'">OK</button>\n     <button type="button" class="').concat(Y.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(Y.footer,'"></div>\n   <div class="').concat(Y["timer-progress-bar-container"],'">\n     <div class="').concat(Y["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),yt=function(t){var e,n,o,i,r,a,c,s,u,l,d,p,f,m,h,g=!!(e=Q())&&(e.parentNode.removeChild(e),ht([document.documentElement,document.body],[Y["no-backdrop"],Y["toast-shown"],Y["has-column"]]),!0);ut()?F("SweetAlert2 requires document to initialize"):((n=document.createElement("div")).className=Y.container,g&&mt(n,Y["no-transition"]),H(n,bt),(o="string"==typeof(i=t.target)?document.querySelector(i):i).appendChild(n),r=t,(a=$()).setAttribute("role",r.toast?"alert":"dialog"),a.setAttribute("aria-live",r.toast?"polite":"assertive"),r.toast||a.setAttribute("aria-modal","true"),c=o,"rtl"===window.getComputedStyle(c).direction&&mt(Q(),Y.rtl),s=P(),u=gt(s,Y.input),l=gt(s,Y.file),d=s.querySelector(".".concat(Y.range," input")),p=s.querySelector(".".concat(Y.range," output")),f=gt(s,Y.select),m=s.querySelector(".".concat(Y.checkbox," input")),h=gt(s,Y.textarea),u.oninput=lt,l.onchange=lt,f.onchange=lt,m.onchange=lt,h.oninput=lt,d.oninput=function(t){lt(t),p.value=d.value},d.onchange=function(t){lt(t),d.nextSibling.value=d.value})},wt=function(t,e){t.jquery?Ct(e,t):H(e,t.toString())},Ct=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},kt=function(){if(ut())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}();function xt(t,e,n){var o;rt(t,n["show".concat((o=e).charAt(0).toUpperCase()+o.slice(1),"Button")],"inline-block"),H(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=Y[e],N(t,n,"".concat(e,"Button")),mt(t,n["".concat(e,"ButtonClass")])}function Pt(t,e){var n,o,i,r,a,c,s,u,l=Q();l&&(n=l,"string"==typeof(o=e.backdrop)?n.style.background=o:o||mt([document.documentElement,document.body],Y["no-backdrop"]),!e.backdrop&&e.allowOutsideClick&&_('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),i=l,(r=e.position)in Y?mt(i,Y[r]):(_('The "position" parameter is not valid, defaulting to "center"'),mt(i,Y.center)),a=l,!(c=e.grow)||"string"!=typeof c||(s="grow-".concat(c))in Y&&mt(a,Y[s]),N(l,e,"container"),(u=document.body.getAttribute("data-swal2-queue-step"))&&(l.setAttribute("data-queue-step",u),document.body.removeAttribute("data-swal2-queue-step")))}function At(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var Bt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},St=["input","file","range","select","radio","checkbox","textarea"],Et=function(t){if(!jt[t.input])return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=Lt(t.input),n=jt[t.input](e,t);ot(n),setTimeout(function(){tt(n)})},Ot=function(t,e){var n=G(P(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},Tt=function(t){var e=Lt(t.input);t.customClass&&mt(e,t.customClass.input)},Lt=function(t){var e=Y[t]?Y[t]:Y.input;return gt(P(),e)},jt={};jt.text=jt.email=jt.password=jt.number=jt.tel=jt.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:y(e.inputValue)||_('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),At(t,e),t.type=e.input,t},jt.file=function(t,e){return At(t,e),t},jt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,t},jt.select=function(t,e){var n;return t.textContent="",e.inputPlaceholder&&(n=document.createElement("option"),H(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)),t},jt.radio=function(t){return t.textContent="",t},jt.checkbox=function(t,e){var n=G(P(),"checkbox");n.value=1,n.id=Y.checkbox,n.checked=Boolean(e.inputValue);var o=t.querySelector("span");return H(o,e.inputPlaceholder),t},jt.textarea=function(e,t){var n,o;return e.value=t.inputValue,At(e,t),"MutationObserver"in window&&(n=parseInt(window.getComputedStyle($()).width),o=parseInt(window.getComputedStyle($()).paddingLeft)+parseInt(window.getComputedStyle($()).paddingRight),new MutationObserver(function(){var t=e.offsetWidth+o;$().style.width=n<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})),e};function qt(t,e){var n,o,i,r,a,c=P().querySelector("#".concat(Y.content));e.html?(dt(e.html,c),ot(c,"block")):e.text?(c.textContent=e.text,ot(c,"block")):it(c),n=t,o=e,i=P(),r=Bt.innerParams.get(n),a=!r||o.input!==r.input,St.forEach(function(t){var e=Y[t],n=gt(i,e);Ot(t,o.inputAttributes),n.className=e,a&&it(n)}),o.input&&(a&&Et(o),Tt(o)),N(P(),e,"content")}function It(){return Q()&&Q().getAttribute("data-queue-step")}function Vt(t,s){var u=B();if(!s.progressSteps||0===s.progressSteps.length)return it(u),0;ot(u),u.textContent="";var l=parseInt(void 0===s.currentProgressStep?It():s.currentProgressStep);l>=s.progressSteps.length&&_("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.progressSteps.forEach(function(t,e){var n,o,i,r,a,c=(n=t,o=document.createElement("li"),mt(o,Y["progress-step"]),H(o,n),o);u.appendChild(c),e===l&&mt(c,Y["active-progress-step"]),e!==s.progressSteps.length-1&&(r=s,a=document.createElement("li"),mt(a,Y["progress-step-line"]),r.progressStepsDistance&&(a.style.width=r.progressStepsDistance),i=a,u.appendChild(i))})}function Mt(t,e){var n,o,i,r,a,c,s,u,l=L();N(l,e,"header"),Vt(0,e),n=t,o=e,(r=Bt.innerParams.get(n))&&o.icon===r.icon&&k()?N(k(),o,"icon"):(Dt(),o.icon&&(-1!==Object.keys(Z).indexOf(o.icon)?(i=C(".".concat(Y.icon,".").concat(Z[o.icon])),ot(i),Ut(i,o),Nt(),N(i,o,"icon"),mt(i,o.showClass.icon)):F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon,'"')))),function(t){var e=A();if(!t.imageUrl)return it(e);ot(e,""),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt),nt(e,"width",t.imageWidth),nt(e,"height",t.imageHeight),e.className=Y.image,N(e,t,"image")}(e),a=e,c=x(),rt(c,a.title||a.titleText),a.title&&dt(a.title,c),a.titleText&&(c.innerText=a.titleText),N(c,a,"title"),s=e,u=I(),H(u,s.closeButtonHtml),N(u,s,"closeButton"),rt(u,s.showCloseButton),u.setAttribute("aria-label",s.closeButtonAriaLabel)}function Rt(t,e){var n,o,i,r;n=e,o=$(),nt(o,"width",n.width),nt(o,"padding",n.padding),n.background&&(o.style.background=n.background),zt(o,n),Pt(0,e),Mt(t,e),qt(t,e),pt(0,e),i=e,r=j(),rt(r,i.footer),i.footer&&dt(i.footer,r),N(r,i,"footer"),"function"==typeof e.onRender&&e.onRender($())}function Ht(){return E()&&E().click()}var Dt=function(){for(var t=n(),e=0;e<t.length;e++)it(t[e])},Nt=function(){for(var t=$(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Ut=function(t,e){t.textContent="",e.iconHtml?H(t,_t(e.iconHtml)):"success"===e.icon?H(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?H(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):H(t,_t({question:"?",warning:"!",info:"i"}[e.icon]))},_t=function(t){return'<div class="'.concat(Y["icon-content"],'">').concat(t,"</div>")},Ft=[],zt=function(t,e){t.className="".concat(Y.popup," ").concat(vt(t)?e.showClass.popup:""),e.toast?(mt([document.documentElement,document.body],Y["toast-shown"]),mt(t,Y.toast)):mt(t,Y.modal),N(t,e,"popup"),"string"==typeof e.customClass&&mt(t,e.customClass),e.icon&&mt(t,Y["icon-".concat(e.icon)])};function Wt(){var t=$();t||sn.fire(),t=$();var e=T(),n=E();ot(e),ot(n,"inline-block"),mt([t,e],Y.loading),n.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Kt(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Xt.restoreFocusTimeout=setTimeout(function(){Xt.previousActiveElement&&Xt.previousActiveElement.focus?(Xt.previousActiveElement.focus(),Xt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function Yt(){if(Xt.timeout)return function(){var t=q(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),o=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(o,"%")}(),Xt.timeout.stop()}function Zt(){if(Xt.timeout){var t=Xt.timeout.start();return st(t),t}}function Qt(t){return Object.prototype.hasOwnProperty.call(Gt,t)}function $t(t){return ee[t]}function Jt(t){for(var e in t)Qt(i=e)||_('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==ne.indexOf(o)&&_('The parameter "'.concat(o,'" is incompatible with toasts'))),$t(n=e)&&g(n,$t(n));var n,o,i}var Xt={},Gt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconHtml:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:void 0,target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,onRender:void 0,onClose:void 0,onAfterClose:void 0,onDestroy:void 0,scrollbarPadding:!0},te=["title","titleText","text","html","footer","icon","hideClass","customClass","allowOutsideClick","allowEscapeKey","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","buttonsStyling","reverseButtons","showCloseButton","closeButtonHtml","closeButtonAriaLabel","imageUrl","imageWidth","imageHeight","imageAlt","progressSteps","currentProgressStep","onClose","onAfterClose","onDestroy"],ee={animation:'showClass" and "hideClass'},ne=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],oe=Object.freeze({isValidParameter:Qt,isUpdatableParameter:function(t){return-1!==te.indexOf(t)},isDeprecatedParameter:$t,argsToParams:function(o){var i={};return"object"!==r(o[0])||w(o[0])?["title","html","icon"].forEach(function(t,e){var n=o[e];"string"==typeof n||w(n)?i[t]=n:void 0!==n&&F("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(n)))}):s(i,o[0]),i},isVisible:function(){return vt($())},clickConfirm:Ht,clickCancel:function(){return O()&&O().click()},getContainer:Q,getPopup:$,getTitle:x,getContent:P,getHtmlContainer:function(){return e(Y["html-container"])},getImage:A,getIcon:k,getIcons:n,getCloseButton:I,getActions:T,getConfirmButton:E,getCancelButton:O,getHeader:L,getFooter:j,getTimerProgressBar:q,getFocusableElements:V,getValidationMessage:S,isLoading:R,fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(this,e)},mixin:function(r){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var n,o,e=(n=i,o=d(),function(){var t,e=u(n);return p(this,o?(t=u(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))});function i(){return a(this,i),e.apply(this,arguments)}return c(i,[{key:"_main",value:function(t){return f(u(i.prototype),"_main",this).call(this,s({},r,t))}}]),i}(this)},queue:function(t){var r=this;Ft=t;function a(t,e){Ft=[],t(e)}var c=[];return new Promise(function(i){!function e(n,o){n<Ft.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Ft[n]).then(function(t){void 0!==t.value?(c.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:c})}(0)})},getQueueStep:It,insertQueueStep:function(t,e){return e&&e<Ft.length?Ft.splice(e,0,t):Ft.push(t)},deleteQueueStep:function(t){void 0!==Ft[t]&&Ft.splice(t,1)},showLoading:Wt,enableLoading:Wt,getTimerLeft:function(){return Xt.timeout&&Xt.timeout.getTimerLeft()},stopTimer:Yt,resumeTimer:Zt,toggleTimer:function(){var t=Xt.timeout;return t&&(t.running?Yt:Zt)()},increaseTimer:function(t){if(Xt.timeout){var e=Xt.timeout.increase(t);return st(e,!0),e}},isTimerRunning:function(){return Xt.timeout&&Xt.timeout.isRunning()}});function ie(){var t,e=Bt.innerParams.get(this);e&&(t=Bt.domCache.get(this),e.showConfirmButton||(it(t.confirmButton),e.showCancelButton||it(t.actions)),ht([t.popup,t.actions],Y.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1)}function re(){null===X.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(X.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(X.previousBodyPadding+function(){var t=document.createElement("div");t.className=Y["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function ae(){return!!window.MSInputMethodContext&&!!document.documentMode}function ce(){var t=Q(),e=$();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var se=function(){navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||$().scrollHeight>window.innerHeight-44&&(Q().style.paddingBottom="".concat(44,"px"))},ue=function(){var e,t=Q();t.ontouchstart=function(t){e=le(t.target)},t.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},le=function(t){var e=Q();return t===e||!(at(e)||"INPUT"===t.tagName||at(P())&&P().contains(t))},de={swalPromiseResolve:new WeakMap};function pe(t,e,n,o){var i;n?he(t,o):(Kt().then(function(){return he(t,o)}),Xt.keydownTarget.removeEventListener("keydown",Xt.keydownHandler,{capture:Xt.keydownListenerCapture}),Xt.keydownHandlerAdded=!1),e.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&e.parentNode.removeChild(e),M()&&(null!==X.previousBodyPadding&&(document.body.style.paddingRight="".concat(X.previousBodyPadding,"px"),X.previousBodyPadding=null),D(document.body,Y.iosfix)&&(i=parseInt(document.body.style.top,10),ht(document.body,Y.iosfix),document.body.style.top="",document.body.scrollTop=-1*i),"undefined"!=typeof window&&ae()&&window.removeEventListener("resize",ce),h(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),ht([document.documentElement,document.body],[Y.shown,Y["height-auto"],Y["no-backdrop"],Y["toast-shown"],Y["toast-column"]])}function fe(t){var e,n,o,i=$();i&&(e=Bt.innerParams.get(this))&&!D(i,e.hideClass.popup)&&(n=de.swalPromiseResolve.get(this),ht(i,e.showClass.popup),mt(i,e.hideClass.popup),o=Q(),ht(o,e.showClass.backdrop),mt(o,e.hideClass.backdrop),function(t,e,n){var o=Q(),i=kt&&ct(e),r=n.onClose,a=n.onAfterClose;if(r!==null&&typeof r==="function"){r(e)}if(i){me(t,e,o,a)}else{pe(t,o,J(),a)}}(this,i,e),void 0!==t?(t.isDismissed=void 0!==t.dismiss,t.isConfirmed=void 0===t.dismiss):t={isDismissed:!0,isConfirmed:!1},n(t||{}))}var me=function(t,e,n,o){Xt.swalCloseEventFinishedCallback=pe.bind(null,t,n,J(),o),e.addEventListener(kt,function(t){t.target===e&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback)})},he=function(t,e){setTimeout(function(){"function"==typeof e&&e(),t._destroy()})};function ge(t,e,n){var o=Bt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function ve(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var be=function(){function n(t,e){a(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return c(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),ye={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function we(t){var e,n;(e=t).inputValidator||Object.keys(ye).forEach(function(t){e.input===t&&(e.inputValidator=ye[t])}),t.showLoaderOnConfirm&&!t.preConfirm&&_("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=W(t.animation),(n=t).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(_('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),yt(t)}function Ce(t){var e=Q(),n=$();"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n);var o=window.getComputedStyle(document.body).overflowY;je(e,n,t),Te(e,n),M()&&(Le(e,t.scrollbarPadding,o),h(document.body.children).forEach(function(t){t===Q()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,Q())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))})),J()||Xt.previousActiveElement||(Xt.previousActiveElement=document.activeElement),"function"==typeof t.onOpen&&setTimeout(function(){return t.onOpen(n)}),ht(e,Y["no-transition"])}function ke(t){var e,n=$();t.target===n&&(e=Q(),n.removeEventListener(kt,ke),e.style.overflowY="auto")}function xe(t,e){"select"===e.input||"radio"===e.input?Me(t,e):-1!==["text","email","number","tel","textarea"].indexOf(e.input)&&(v(e.inputValue)||y(e.inputValue))&&Re(t,e)}function Pe(t,e){t.disableButtons(),e.input?Ne(t,e):Ue(t,e,!0)}function Ae(t,e){t.disableButtons(),e(K.cancel)}function Be(t,e){t.closePopup({value:e})}function Se(e,t,n,o){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=function(t){return ze(e,t,o)},t.keydownTarget=n.keydownListenerCapture?window:$(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}function Ee(t,e,n){var o=V(),i=0;if(i<o.length)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();$().focus()}function Oe(t,e,n){Bt.innerParams.get(t).toast?Qe(t,e,n):(Je(e),Xe(e),Ge(t,e,n))}var Te=function(t,e){kt&&ct(e)?(t.style.overflowY="hidden",e.addEventListener(kt,ke)):t.style.overflowY="auto"},Le=function(t,e,n){var o;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!D(document.body,Y.iosfix)&&(o=document.body.scrollTop,document.body.style.top="".concat(-1*o,"px"),mt(document.body,Y.iosfix),ue(),se()),"undefined"!=typeof window&&ae()&&(ce(),window.addEventListener("resize",ce)),e&&"hidden"!==n&&re(),setTimeout(function(){t.scrollTop=0})},je=function(t,e,n){mt(t,n.showClass.backdrop),ot(e),mt(e,n.showClass.popup),mt([document.documentElement,document.body],Y.shown),n.heightAuto&&n.backdrop&&!n.toast&&mt([document.documentElement,document.body],Y["height-auto"])},qe=function(t){return t.checked?1:0},Ie=function(t){return t.checked?t.value:null},Ve=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Me=function(e,n){function o(t){return He[n.input](i,De(t),n)}var i=P();v(n.inputOptions)||y(n.inputOptions)?(Wt(),b(n.inputOptions).then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},Re=function(e,n){var o=e.getInput();it(o),b(n.inputValue).then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),ot(o),o.focus(),e.hideLoading()}).catch(function(t){F("Error in inputValue promise: ".concat(t)),o.value="",ot(o),o.focus(),e.hideLoading()})},He={select:function(t,e,i){function r(t,e,n){var o=document.createElement("option");o.value=n,H(o,e),i.inputValue.toString()===n.toString()&&(o.selected=!0),t.appendChild(o)}var a=gt(t,Y.select);e.forEach(function(t){var e,n=t[0],o=t[1];Array.isArray(o)?((e=document.createElement("optgroup")).label=n,e.disabled=!1,a.appendChild(e),o.forEach(function(t){return r(e,t[1],t[0])})):r(a,o,n)}),a.focus()},radio:function(t,e,a){var c=gt(t,Y.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=Y.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");H(r,n),r.className=Y.label,i.appendChild(o),i.appendChild(r),c.appendChild(i)});var n=c.querySelectorAll("input");n.length&&n[0].focus()}},De=function o(n){var i=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach(function(t,e){var n=t;"object"===r(n)&&(n=o(n)),i.push([e,n])}):Object.keys(n).forEach(function(t){var e=n[t];"object"===r(e)&&(e=o(e)),i.push([t,e])}),i},Ne=function(e,n){var o=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return qe(n);case"radio":return Ie(n);case"file":return Ve(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(e,n);n.inputValidator?(e.disableInput(),Promise.resolve().then(function(){return b(n.inputValidator(o,n.validationMessage))}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):Ue(e,n,o)})):e.getInput().checkValidity()?Ue(e,n,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Ue=function(e,t,n){t.showLoaderOnConfirm&&Wt(),t.preConfirm?(e.resetValidationMessage(),Promise.resolve().then(function(){return b(t.preConfirm(n,t.validationMessage))}).then(function(t){vt(S())||!1===t?e.hideLoading():Be(e,void 0===t?n:t)})):Be(e,n)},_e=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"],Fe=["Escape","Esc"],ze=function(t,e,n){var o=Bt.innerParams.get(t);o.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?We(t,e,o):"Tab"===e.key?Ke(e,o):-1!==_e.indexOf(e.key)?Ye():-1!==Fe.indexOf(e.key)&&Ze(e,o,n)},We=function(t,e,n){if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(n.input))return;Ht(),e.preventDefault()}},Ke=function(t){for(var e=t.target,n=V(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?Ee(0,o,-1):Ee(0,o,1),t.stopPropagation(),t.preventDefault()},Ye=function(){var t=E(),e=O();document.activeElement===t&&vt(e)?e.focus():document.activeElement===e&&vt(t)&&t.focus()},Ze=function(t,e,n){W(e.allowEscapeKey)&&(t.preventDefault(),n(K.esc))},Qe=function(e,t,n){t.popup.onclick=function(){var t=Bt.innerParams.get(e);t.showConfirmButton||t.showCancelButton||t.showCloseButton||t.input||n(K.close)}},$e=!1,Je=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&($e=!0)}}},Xe=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||($e=!0)}}},Ge=function(n,o,i){o.container.onclick=function(t){var e=Bt.innerParams.get(n);$e?$e=!1:t.target===o.container&&W(e.allowOutsideClick)&&i(K.backdrop)}};var tn=function(t,e,n){var o=q();it(o),e.timer&&(t.timeout=new be(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ot(o),setTimeout(function(){t.timeout.running&&st(e.timer)})))},en=function(t,e){if(!e.toast)return W(e.allowEnterKey)?e.focusCancel&&vt(t.cancelButton)?t.cancelButton.focus():e.focusConfirm&&vt(t.confirmButton)?t.confirmButton.focus():void Ee(0,-1,1):nn()},nn=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};var on,rn=function(t){for(var e in t)t[e]=new WeakMap},an=Object.freeze({hideLoading:ie,disableLoading:ie,getInput:function(t){var e=Bt.innerParams.get(t||this),n=Bt.domCache.get(t||this);return n?G(n.content,e.input):null},close:fe,closePopup:fe,closeModal:fe,closeToast:fe,enableButtons:function(){ge(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){ge(this,["confirmButton","cancelButton"],!0)},enableInput:function(){return ve(this.getInput(),!1)},disableInput:function(){return ve(this.getInput(),!0)},showValidationMessage:function(t){var e=Bt.domCache.get(this);H(e.validationMessage,t);var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),ot(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",Y["validation-message"]),tt(o),mt(o,Y.inputerror))},resetValidationMessage:function(){var t=Bt.domCache.get(this);t.validationMessage&&it(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ht(e,Y.inputerror))},getProgressSteps:function(){return Bt.domCache.get(this).progressSteps},_main:function(t){Jt(t),Xt.currentInstance&&Xt.currentInstance._destroy(),Xt.currentInstance=this;var e=function(t){var e=s({},Gt.showClass,t.showClass),n=s({},Gt.hideClass,t.hideClass),o=s({},Gt,t);if(o.showClass=e,o.hideClass=n,t.animation===false){o.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"};o.hideClass={}}return o}(t);we(e),Object.freeze(e),Xt.timeout&&(Xt.timeout.stop(),delete Xt.timeout),clearTimeout(Xt.restoreFocusTimeout);var n=function(t){var e={popup:$(),container:Q(),content:P(),actions:T(),confirmButton:E(),cancelButton:O(),closeButton:I(),validationMessage:S(),progressSteps:B()};return Bt.domCache.set(t,e),e}(this);return Rt(this,e),Bt.innerParams.set(this,e),function(n,o,i){return new Promise(function(t){var e=function t(e){n.closePopup({dismiss:e})};de.swalPromiseResolve.set(n,t);o.confirmButton.onclick=function(){return Pe(n,i)};o.cancelButton.onclick=function(){return Ae(n,e)};o.closeButton.onclick=function(){return e(K.close)};Oe(n,o,e);Se(n,Xt,i,e);if(i.toast&&(i.input||i.footer||i.showCloseButton)){mt(document.body,Y["toast-column"])}else{ht(document.body,Y["toast-column"])}xe(n,i);Ce(i);tn(Xt,i,e);en(o,i);setTimeout(function(){o.container.scrollTop=0})})}(this,n,e)},update:function(e){var t=$(),n=Bt.innerParams.get(this);if(!t||D(t,n.hideClass.popup))return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){sn.isUpdatableParameter(t)?o[t]=e[t]:_('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var i=s({},n,o);Rt(this,i),Bt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:s({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var t=Bt.domCache.get(this),e=Bt.innerParams.get(this);e&&(t.popup&&Xt.swalCloseEventFinishedCallback&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback),Xt.deferDisposalTimer&&(clearTimeout(Xt.deferDisposalTimer),delete Xt.deferDisposalTimer),"function"==typeof e.onDestroy&&e.onDestroy(),delete this.params,delete Xt.keydownHandler,delete Xt.keydownTarget,rn(Bt),rn(de))}}),cn=function(){function r(){if(a(this,r),"undefined"!=typeof window){"undefined"==typeof Promise&&F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),on=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);Bt.promise.set(this,i)}}return c(r,[{key:"then",value:function(t){return Bt.promise.get(this).then(t)}},{key:"finally",value:function(t){return Bt.promise.get(this).finally(t)}}]),r}();s(cn.prototype,an),s(cn,oe),Object.keys(an).forEach(function(t){cn[t]=function(){if(on)return on[t].apply(on,arguments)}}),cn.DismissReason=K,cn.version="9.17.0";var sn=cn;return sn.default=sn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
/*!
 * bootstrap-tokenfield 0.12.1
 * https://github.com/sliptree/bootstrap-tokenfield
 * Copyright 2013-2014 Sliptree and other contributors; Licensed MIT
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=global.window&&global.window.$?a(global.window.$):function(b){if(!b.$&&!b.fn)throw new Error("Tokenfield requires a window object with jQuery or a jQuery instance");return a(b.$||b)}:a(jQuery,window)}(function(a,b){"use strict";var c=function(c,d){var e=this;this.$element=a(c),this.textDirection=this.$element.css("direction"),this.options=a.extend(!0,{},a.fn.tokenfield.defaults,{tokens:this.$element.val()},this.$element.data(),d),this._delimiters="string"==typeof this.options.delimiter?[this.options.delimiter]:this.options.delimiter,this._triggerKeys=a.map(this._delimiters,function(a){return a.charCodeAt(0)}),this._firstDelimiter=this._delimiters[0];var f=a.inArray(" ",this._delimiters),g=a.inArray("-",this._delimiters);f>=0&&(this._delimiters[f]="\\s"),g>=0&&(delete this._delimiters[g],this._delimiters.unshift("-"));var h=["\\","$","[","{","^",".","|","?","*","+","(",")"];a.each(this._delimiters,function(b,c){var d=a.inArray(c,h);d>=0&&(e._delimiters[b]="\\"+c)});var i,j=b&&"function"==typeof b.getMatchedCSSRules?b.getMatchedCSSRules(c):null,k=c.style.width,l=this.$element.width();j&&a.each(j,function(a,b){b.style.width&&(i=b.style.width)});var m="rtl"===a("body").css("direction")?"right":"left",n={position:this.$element.css("position")};n[m]=this.$element.css(m),this.$element.data("original-styles",n).data("original-tabindex",this.$element.prop("tabindex")).css("position","absolute").css(m,"-10000px").prop("tabindex",-1),this.$wrapper=a('<div class="tokenfield form-control" />'),this.$element.hasClass("input-lg")&&this.$wrapper.addClass("input-lg"),this.$element.hasClass("input-sm")&&this.$wrapper.addClass("input-sm"),"rtl"===this.textDirection&&this.$wrapper.addClass("rtl");var o=this.$element.prop("id")||(new Date).getTime()+""+Math.floor(100*(1+Math.random()));this.$input=a('<input type="'+this.options.inputType+'" class="token-input" autocomplete="off" />').appendTo(this.$wrapper).prop("placeholder",this.$element.prop("placeholder")).prop("id",o+"-tokenfield").prop("tabindex",this.$element.data("original-tabindex"));var p=a('label[for="'+this.$element.prop("id")+'"]');if(p.length&&p.prop("for",this.$input.prop("id")),this.$copyHelper=a('<input type="text" />').css("position","absolute").css(m,"-10000px").prop("tabindex",-1).prependTo(this.$wrapper),k?this.$wrapper.css("width",k):i?this.$wrapper.css("width",i):this.$element.parents(".form-inline").length&&this.$wrapper.width(l),(this.$element.prop("disabled")||this.$element.parents("fieldset[disabled]").length)&&this.disable(),this.$element.prop("readonly")&&this.readonly(),this.$mirror=a('<span style="position:absolute; top:-999px; left:0; white-space:pre;"/>'),this.$input.css("min-width",this.options.minWidth+"px"),a.each(["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],function(a,b){e.$mirror[0].style[b]=e.$input.css(b)}),this.$mirror.appendTo("body"),this.$wrapper.insertBefore(this.$element),this.$element.prependTo(this.$wrapper),this.update(),this.setTokens(this.options.tokens,!1,!this.$element.val()&&this.options.tokens),this.listen(),!a.isEmptyObject(this.options.autocomplete)){var q="rtl"===this.textDirection?"right":"left",r=a.extend({minLength:this.options.showAutocompleteOnFocus?0:null,position:{my:q+" top",at:q+" bottom",of:this.$wrapper}},this.options.autocomplete);this.$input.autocomplete(r)}if(!a.isEmptyObject(this.options.typeahead)){var s=this.options.typeahead,t={minLength:this.options.showAutocompleteOnFocus?0:null},u=a.isArray(s)?s:[s,s];u[0]=a.extend({},t,u[0]),this.$input.typeahead.apply(this.$input,u),this.typeahead=!0}};c.prototype={constructor:c,createToken:function(b,c){var d=this;if(b="string"==typeof b?{value:b,label:b}:a.extend({},b),"undefined"==typeof c&&(c=!0),b.value=a.trim(b.value.toString()),b.label=b.label&&b.label.length?a.trim(b.label):b.value,!(!b.value.length||!b.label.length||b.label.length<=this.options.minLength||this.options.limit&&this.getTokens().length>=this.options.limit)){var e=a.Event("tokenfield:createtoken",{attrs:b});if(this.$element.trigger(e),e.attrs&&!e.isDefaultPrevented()){var f=a('<div class="token" />').append('<span class="token-label" />').append('<a href="#" class="close" tabindex="-1">&times;</a>').data("attrs",b);this.$input.hasClass("tt-input")?this.$input.parent().before(f):this.$input.before(f),this.$input.css("width",this.options.minWidth+"px");var g=f.find(".token-label"),h=f.find(".close");return this.maxTokenWidth||(this.maxTokenWidth=this.$wrapper.width()-h.outerWidth()-parseInt(h.css("margin-left"),10)-parseInt(h.css("margin-right"),10)-parseInt(f.css("border-left-width"),10)-parseInt(f.css("border-right-width"),10)-parseInt(f.css("padding-left"),10)-parseInt(f.css("padding-right"),10),parseInt(g.css("border-left-width"),10)-parseInt(g.css("border-right-width"),10)-parseInt(g.css("padding-left"),10)-parseInt(g.css("padding-right"),10),parseInt(g.css("margin-left"),10)-parseInt(g.css("margin-right"),10)),g.text(b.label).css("max-width",this.maxTokenWidth),f.on("mousedown",function(){return d._disabled||d._readonly?!1:(d.preventDeactivation=!0,void 0)}).on("click",function(a){return d._disabled||d._readonly?!1:(d.preventDeactivation=!1,a.ctrlKey||a.metaKey?(a.preventDefault(),d.toggle(f)):(d.activate(f,a.shiftKey,a.shiftKey),void 0))}).on("dblclick",function(){return d._disabled||d._readonly||!d.options.allowEditing?!1:(d.edit(f),void 0)}),h.on("click",a.proxy(this.remove,this)),this.$element.trigger(a.Event("tokenfield:createdtoken",{attrs:b,relatedTarget:f.get(0)})),c&&this.$element.val(this.getTokensList()).trigger(a.Event("change",{initiator:"tokenfield"})),this.update(),this.$element.get(0)}}},setTokens:function(b,c,d){if(b){c||this.$wrapper.find(".token").remove(),"undefined"==typeof d&&(d=!0),"string"==typeof b&&(b=this._delimiters.length?b.split(new RegExp("["+this._delimiters.join("")+"]")):[b]);var e=this;return a.each(b,function(a,b){e.createToken(b,d)}),this.$element.get(0)}},getTokenData:function(b){var c=b.map(function(){var b=a(this);return b.data("attrs")}).get();return 1==c.length&&(c=c[0]),c},getTokens:function(b){var c=this,d=[],e=b?".active":"";return this.$wrapper.find(".token"+e).each(function(){d.push(c.getTokenData(a(this)))}),d},getTokensList:function(b,c,d){b=b||this._firstDelimiter,c="undefined"!=typeof c&&null!==c?c:this.options.beautify;var e=b+(c&&" "!==b?" ":"");return a.map(this.getTokens(d),function(a){return a.value}).join(e)},getInput:function(){return this.$input.val()},listen:function(){var c=this;this.$element.on("change",a.proxy(this.change,this)),this.$wrapper.on("mousedown",a.proxy(this.focusInput,this)),this.$input.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("paste",a.proxy(this.paste,this)).on("keydown",a.proxy(this.keydown,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.$copyHelper.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keydown",a.proxy(this.keydown,this)).on("keyup",a.proxy(this.keyup,this)),this.$input.on("keypress",a.proxy(this.update,this)).on("keyup",a.proxy(this.update,this)),this.$input.on("autocompletecreate",function(){var b=a(this).data("ui-autocomplete").menu.element,d=c.$wrapper.outerWidth()-parseInt(b.css("border-left-width"),10)-parseInt(b.css("border-right-width"),10);b.css("min-width",d+"px")}).on("autocompleteselect",function(a,b){return c.createToken(b.item)&&(c.$input.val(""),c.$input.data("edit")&&c.unedit(!0)),!1}).on("typeahead:selected typeahead:autocompleted",function(a,b){c.createToken(b)&&(c.$input.typeahead("val",""),c.$input.data("edit")&&c.unedit(!0))}),a(b).on("resize",a.proxy(this.update,this))},keydown:function(b){function c(a){if(e.$input.is(document.activeElement)){if(e.$input.val().length>0)return;a+="All";var c=e.$input.hasClass("tt-input")?e.$input.parent()[a](".token:first"):e.$input[a](".token:first");if(!c.length)return;e.preventInputFocus=!0,e.preventDeactivation=!0,e.activate(c),b.preventDefault()}else e[a](b.shiftKey),b.preventDefault()}function d(c){if(b.shiftKey){if(e.$input.is(document.activeElement)){if(e.$input.val().length>0)return;var d=e.$input.hasClass("tt-input")?e.$input.parent()[c+"All"](".token:first"):e.$input[c+"All"](".token:first");if(!d.length)return;e.activate(d)}var f="prev"===c?"next":"prev",g="prev"===c?"first":"last";e.$firstActiveToken[f+"All"](".token").each(function(){e.deactivate(a(this))}),e.activate(e.$wrapper.find(".token:"+g),!0,!0),b.preventDefault()}}if(this.focused){var e=this;switch(b.keyCode){case 8:if(!this.$input.is(document.activeElement))break;this.lastInputValue=this.$input.val();break;case 37:c("rtl"===this.textDirection?"next":"prev");break;case 38:d("prev");break;case 39:c("rtl"===this.textDirection?"prev":"next");break;case 40:d("next");break;case 65:if(this.$input.val().length>0||!b.ctrlKey&&!b.metaKey)break;this.activateAll(),b.preventDefault();break;case 9:case 13:if(this.$input.data("ui-autocomplete")&&this.$input.data("ui-autocomplete").menu.element.find("li:has(a.ui-state-focus), li.ui-state-focus").length)break;if(this.$input.hasClass("tt-input")&&this.$wrapper.find(".tt-cursor").length)break;if(this.$input.hasClass("tt-input")&&this.$wrapper.find(".tt-hint").val()&&this.$wrapper.find(".tt-hint").val().length)break;if(this.$input.is(document.activeElement)&&this.$input.val().length||this.$input.data("edit"))return this.createTokensFromInput(b,this.$input.data("edit"));if(13===b.keyCode){if(!this.$copyHelper.is(document.activeElement)||1!==this.$wrapper.find(".token.active").length)break;if(!e.options.allowEditing)break;this.edit(this.$wrapper.find(".token.active"))}}this.lastKeyDown=b.keyCode}},keypress:function(b){return-1!==a.inArray(b.which,this._triggerKeys)&&this.$input.is(document.activeElement)?(this.$input.val()&&this.createTokensFromInput(b),!1):void 0},keyup:function(a){if(this.preventInputFocus=!1,this.focused){switch(a.keyCode){case 8:if(this.$input.is(document.activeElement)){if(this.$input.val().length||this.lastInputValue.length&&8===this.lastKeyDown)break;this.preventDeactivation=!0;var b=this.$input.hasClass("tt-input")?this.$input.parent().prevAll(".token:first"):this.$input.prevAll(".token:first");if(!b.length)break;this.activate(b)}else this.remove(a);break;case 46:this.remove(a,"next")}this.lastKeyUp=a.keyCode}},focus:function(){this.focused=!0,this.$wrapper.addClass("focus"),this.$input.is(document.activeElement)&&(this.$wrapper.find(".active").removeClass("active"),this.$firstActiveToken=null,this.options.showAutocompleteOnFocus&&this.search())},blur:function(a){this.focused=!1,this.$wrapper.removeClass("focus"),this.preventDeactivation||this.$element.is(document.activeElement)||(this.$wrapper.find(".active").removeClass("active"),this.$firstActiveToken=null),!this.preventCreateTokens&&(this.$input.data("edit")&&!this.$input.is(document.activeElement)||this.options.createTokensOnBlur)&&this.createTokensFromInput(a),this.preventDeactivation=!1,this.preventCreateTokens=!1},paste:function(a){var b=this;b.options.allowPasting&&setTimeout(function(){b.createTokensFromInput(a)},1)},change:function(a){"tokenfield"!==a.initiator&&this.setTokens(this.$element.val())},createTokensFromInput:function(a,b){if(!(this.$input.val().length<this.options.minLength)){var c=this.getTokensList();return this.setTokens(this.$input.val(),!0),c==this.getTokensList()&&this.$input.val().length?!1:(this.$input.hasClass("tt-input")?this.$input.typeahead("val",""):this.$input.val(""),this.$input.data("edit")&&this.unedit(b),!1)}},next:function(a){if(a){var b=this.$wrapper.find(".active:first"),c=b&&this.$firstActiveToken?b.index()<this.$firstActiveToken.index():!1;if(c)return this.deactivate(b)}var d=this.$wrapper.find(".active:last"),e=d.nextAll(".token:first");return e.length?(this.activate(e,a),void 0):(this.$input.focus(),void 0)},prev:function(a){if(a){var b=this.$wrapper.find(".active:last"),c=b&&this.$firstActiveToken?b.index()>this.$firstActiveToken.index():!1;if(c)return this.deactivate(b)}var d=this.$wrapper.find(".active:first"),e=d.prevAll(".token:first");return e.length||(e=this.$wrapper.find(".token:first")),e.length||a?(this.activate(e,a),void 0):(this.$input.focus(),void 0)},activate:function(b,c,d,e){if(b){if("undefined"==typeof e)var e=!0;if(d)var c=!0;if(this.$copyHelper.focus(),c||(this.$wrapper.find(".active").removeClass("active"),e?this.$firstActiveToken=b:delete this.$firstActiveToken),d&&this.$firstActiveToken){var f=this.$firstActiveToken.index()-2,g=b.index()-2,h=this;this.$wrapper.find(".token").slice(Math.min(f,g)+1,Math.max(f,g)).each(function(){h.activate(a(this),!0)})}b.addClass("active"),this.$copyHelper.val(this.getTokensList(null,null,!0)).select()}},activateAll:function(){var b=this;this.$wrapper.find(".token").each(function(c){b.activate(a(this),0!==c,!1,!1)})},deactivate:function(a){a&&(a.removeClass("active"),this.$copyHelper.val(this.getTokensList(null,null,!0)).select())},toggle:function(a){a&&(a.toggleClass("active"),this.$copyHelper.val(this.getTokensList(null,null,!0)).select())},edit:function(b){if(b){var c=b.data("attrs"),d={attrs:c,relatedTarget:b.get(0)},e=a.Event("tokenfield:edittoken",d);if(this.$element.trigger(e),!e.isDefaultPrevented()){b.find(".token-label").text(c.value);var f=b.outerWidth(),g=this.$input.hasClass("tt-input")?this.$input.parent():this.$input;b.replaceWith(g),this.preventCreateTokens=!0,this.$input.val(c.value).select().data("edit",!0).width(f),this.update(),this.$element.trigger(a.Event("tokenfield:editedtoken",d))}}},unedit:function(a){var b=this.$input.hasClass("tt-input")?this.$input.parent():this.$input;if(b.appendTo(this.$wrapper),this.$input.data("edit",!1),this.$mirror.text(""),this.update(),a){var c=this;setTimeout(function(){c.$input.focus()},1)}},remove:function(b,c){if(!(this.$input.is(document.activeElement)||this._disabled||this._readonly)){var d="click"===b.type?a(b.target).closest(".token"):this.$wrapper.find(".token.active");if("click"!==b.type){if(!c)var c="prev";if(this[c](),"prev"===c)var e=0===d.first().prevAll(".token:first").length}var f={attrs:this.getTokenData(d),relatedTarget:d.get(0)},g=a.Event("tokenfield:removetoken",f);if(this.$element.trigger(g),!g.isDefaultPrevented()){var h=a.Event("tokenfield:removedtoken",f),i=a.Event("change",{initiator:"tokenfield"});d.remove(),this.$element.val(this.getTokensList()).trigger(h).trigger(i),(!this.$wrapper.find(".token").length||"click"===b.type||e)&&this.$input.focus(),this.$input.css("width",this.options.minWidth+"px"),this.update(),b.preventDefault(),b.stopPropagation()}}},update:function(){var a=this.$input.val(),b=parseInt(this.$input.css("padding-left"),10),c=parseInt(this.$input.css("padding-right"),10),d=b+c;if(this.$input.data("edit")){if(a||(a=this.$input.prop("placeholder")),a===this.$mirror.text())return;this.$mirror.text(a);var e=this.$mirror.width()+10;if(e>this.$wrapper.width())return this.$input.width(this.$wrapper.width());this.$input.width(e)}else{var f="rtl"===this.textDirection?this.$input.offset().left+this.$input.outerWidth()-this.$wrapper.offset().left-parseInt(this.$wrapper.css("padding-left"),10)-d-1:this.$wrapper.offset().left+this.$wrapper.width()+parseInt(this.$wrapper.css("padding-left"),10)-this.$input.offset().left-d;isNaN(f)?this.$input.width("100%"):this.$input.width(f)}},focusInput:function(b){if(!(a(b.target).closest(".token").length||a(b.target).closest(".token-input").length||a(b.target).closest(".tt-dropdown-menu").length)){var c=this;setTimeout(function(){c.$input.focus()},0)}},search:function(){this.$input.data("ui-autocomplete")&&this.$input.autocomplete("search")},disable:function(){this.setProperty("disabled",!0)},enable:function(){this.setProperty("disabled",!1)},readonly:function(){this.setProperty("readonly",!0)},writeable:function(){this.setProperty("readonly",!1)},setProperty:function(a,b){this["_"+a]=b,this.$input.prop(a,b),this.$element.prop(a,b),this.$wrapper[b?"addClass":"removeClass"](a)},destroy:function(){this.$element.val(this.getTokensList()),this.$element.css(this.$element.data("original-styles")),this.$element.prop("tabindex",this.$element.data("original-tabindex"));var b=a('label[for="'+this.$input.prop("id")+'"]');b.length&&b.prop("for",this.$element.prop("id")),this.$element.insertBefore(this.$wrapper),this.$element.removeData("original-styles").removeData("original-tabindex").removeData("bs.tokenfield"),this.$wrapper.remove(),this.$mirror.remove();var c=this.$element;return c}};var d=a.fn.tokenfield;return a.fn.tokenfield=function(b,d){var e,f=[];Array.prototype.push.apply(f,arguments);var g=this.each(function(){var g=a(this),h=g.data("bs.tokenfield"),i="object"==typeof b&&b;"string"==typeof b&&h&&h[b]?(f.shift(),e=h[b].apply(h,f)):h||"string"==typeof b||d||(g.data("bs.tokenfield",h=new c(this,i)),g.trigger("tokenfield:initialize"))});return"undefined"!=typeof e?e:g},a.fn.tokenfield.defaults={minWidth:60,minLength:0,allowEditing:!0,allowPasting:!0,limit:0,autocomplete:{},typeahead:{},showAutocompleteOnFocus:!1,createTokensOnBlur:!1,delimiter:",",beautify:!0,inputType:"text"},a.fn.tokenfield.Constructor=c,a.fn.tokenfield.noConflict=function(){return a.fn.tokenfield=d,this},c});