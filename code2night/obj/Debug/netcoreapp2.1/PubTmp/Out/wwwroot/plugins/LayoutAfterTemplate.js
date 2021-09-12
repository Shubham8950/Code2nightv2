/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0;
})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sweetalert2=e()}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function i(t,e,n){return(i=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&l(i,n.prototype),i}).apply(null,arguments)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function m(e){return Object.keys(e).map(function(t){return e[t]})}function h(t){return Array.prototype.slice.call(t)}function g(t,e){var n;n='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===z.indexOf(n)&&(z.push(n),_(n))}function v(t){return t&&"function"==typeof t.toPromise}function b(t){return v(t)?t.toPromise():Promise.resolve(t)}function y(t){return t&&Promise.resolve(t)===t}function w(t){return t instanceof Element||"object"===r(e=t)&&e.jquery;var e}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function C(t){var e=Q();return e?e.querySelector(t):null}function e(t){return C(".".concat(t))}function n(){var t=$();return h(t.querySelectorAll(".".concat(Y.icon)))}function k(){var t=n().filter(function(t){return vt(t)});return t.length?t[0]:null}function x(){return e(Y.title)}function P(){return e(Y.content)}function A(){return e(Y.image)}function B(){return e(Y["progress-steps"])}function S(){return e(Y["validation-message"])}function E(){return C(".".concat(Y.actions," .").concat(Y.confirm))}function O(){return C(".".concat(Y.actions," .").concat(Y.cancel))}function T(){return e(Y.actions)}function L(){return e(Y.header)}function j(){return e(Y.footer)}function q(){return e(Y["timer-progress-bar"])}function I(){return e(Y.close)}function V(){var t=h($().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=h($().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return vt(t)})}function M(){return!J()&&!document.body.classList.contains(Y["no-backdrop"])}function R(){return $().hasAttribute("data-loading")}function H(e,t){var n;e.textContent="",t&&(n=(new DOMParser).parseFromString(t,"text/html"),h(n.querySelector("head").childNodes).forEach(function(t){e.appendChild(t)}),h(n.querySelector("body").childNodes).forEach(function(t){e.appendChild(t)}))}function D(t,e){if(e){for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return;return 1}}function N(t,e,n){var o,i;if(i=e,h((o=t).classList).forEach(function(t){-1===m(Y).indexOf(t)&&-1===m(Z).indexOf(t)&&-1===m(i.showClass).indexOf(t)&&o.classList.remove(t)}),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return _("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));mt(t,e.customClass[n])}}var U="SweetAlert2:",_=function(t){console.warn("".concat(U," ").concat(t))},F=function(t){console.error("".concat(U," ").concat(t))},z=[],W=function(t){return"function"==typeof t?t():t},K=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Y=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Z=t(["success","warning","info","question","error"]),Q=function(){return document.body.querySelector(".".concat(Y.container))},$=function(){return e(Y.popup)},J=function(){return document.body.classList.contains(Y["toast-shown"])},X={previousBodyPadding:null};function G(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return gt(t,Y[e]);case"checkbox":return t.querySelector(".".concat(Y.checkbox," input"));case"radio":return t.querySelector(".".concat(Y.radio," input:checked"))||t.querySelector(".".concat(Y.radio," input:first-child"));case"range":return t.querySelector(".".concat(Y.range," input"));default:return gt(t,Y.input)}}function tt(t){var e;t.focus(),"file"!==t.type&&(e=t.value,t.value="",t.value=e)}function et(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function nt(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function ot(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function it(t){t.style.opacity="",t.style.display="none"}function rt(t,e,n){e?ot(t,n):it(t)}function at(t){return!!(t.scrollHeight>t.clientHeight)}function ct(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function st(t,e){var n=1<arguments.length&&void 0!==e&&e,o=q();vt(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(function(){o.style.transition="width ".concat(t/1e3,"s linear"),o.style.width="0%"},10))}function ut(){return"undefined"==typeof window||"undefined"==typeof document}function lt(t){sn.isVisible()&&ft!==t.target.value&&sn.resetValidationMessage(),ft=t.target.value}function dt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?wt(t,e):t&&H(e,t)}function pt(t,e){var n=T(),o=E(),i=O();e.showConfirmButton||e.showCancelButton||it(n),N(n,e,"actions"),xt(o,"confirm",e),xt(i,"cancel",e),e.buttonsStyling?function(t,e,n){mt([t,e],Y.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor);n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);{var o;R()||(o=window.getComputedStyle(t).getPropertyValue("background-color"),t.style.borderLeftColor=o,t.style.borderRightColor=o)}}(o,i,e):(ht([o,i],Y.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor=""),e.reverseButtons&&o.parentNode.insertBefore(i,o)}var ft,mt=function(t,e){et(t,e,!0)},ht=function(t,e){et(t,e,!1)},gt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(D(t.childNodes[n],e))return t.childNodes[n]},vt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},bt='\n <div aria-labelledby="'.concat(Y.title,'" aria-describedby="').concat(Y.content,'" class="').concat(Y.popup,'" tabindex="-1">\n   <div class="').concat(Y.header,'">\n     <ul class="').concat(Y["progress-steps"],'"></ul>\n     <div class="').concat(Y.icon," ").concat(Z.error,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.question,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.warning,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.info,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.success,'"></div>\n     <img class="').concat(Y.image,'" />\n     <h2 class="').concat(Y.title,'" id="').concat(Y.title,'"></h2>\n     <button type="button" class="').concat(Y.close,'"></button>\n   </div>\n   <div class="').concat(Y.content,'">\n     <div id="').concat(Y.content,'" class="').concat(Y["html-container"],'"></div>\n     <input class="').concat(Y.input,'" />\n     <input type="file" class="').concat(Y.file,'" />\n     <div class="').concat(Y.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(Y.select,'"></select>\n     <div class="').concat(Y.radio,'"></div>\n     <label for="').concat(Y.checkbox,'" class="').concat(Y.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(Y.label,'"></span>\n     </label>\n     <textarea class="').concat(Y.textarea,'"></textarea>\n     <div class="').concat(Y["validation-message"],'" id="').concat(Y["validation-message"],'"></div>\n   </div>\n   <div class="').concat(Y.actions,'">\n     <button type="button" class="').concat(Y.confirm,'">OK</button>\n     <button type="button" class="').concat(Y.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(Y.footer,'"></div>\n   <div class="').concat(Y["timer-progress-bar-container"],'">\n     <div class="').concat(Y["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),yt=function(t){var e,n,o,i,r,a,c,s,u,l,d,p,f,m,h,g=!!(e=Q())&&(e.parentNode.removeChild(e),ht([document.documentElement,document.body],[Y["no-backdrop"],Y["toast-shown"],Y["has-column"]]),!0);ut()?F("SweetAlert2 requires document to initialize"):((n=document.createElement("div")).className=Y.container,g&&mt(n,Y["no-transition"]),H(n,bt),(o="string"==typeof(i=t.target)?document.querySelector(i):i).appendChild(n),r=t,(a=$()).setAttribute("role",r.toast?"alert":"dialog"),a.setAttribute("aria-live",r.toast?"polite":"assertive"),r.toast||a.setAttribute("aria-modal","true"),c=o,"rtl"===window.getComputedStyle(c).direction&&mt(Q(),Y.rtl),s=P(),u=gt(s,Y.input),l=gt(s,Y.file),d=s.querySelector(".".concat(Y.range," input")),p=s.querySelector(".".concat(Y.range," output")),f=gt(s,Y.select),m=s.querySelector(".".concat(Y.checkbox," input")),h=gt(s,Y.textarea),u.oninput=lt,l.onchange=lt,f.onchange=lt,m.onchange=lt,h.oninput=lt,d.oninput=function(t){lt(t),p.value=d.value},d.onchange=function(t){lt(t),d.nextSibling.value=d.value})},wt=function(t,e){t.jquery?Ct(e,t):H(e,t.toString())},Ct=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},kt=function(){if(ut())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}();function xt(t,e,n){var o;rt(t,n["show".concat((o=e).charAt(0).toUpperCase()+o.slice(1),"Button")],"inline-block"),H(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=Y[e],N(t,n,"".concat(e,"Button")),mt(t,n["".concat(e,"ButtonClass")])}function Pt(t,e){var n,o,i,r,a,c,s,u,l=Q();l&&(n=l,"string"==typeof(o=e.backdrop)?n.style.background=o:o||mt([document.documentElement,document.body],Y["no-backdrop"]),!e.backdrop&&e.allowOutsideClick&&_('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),i=l,(r=e.position)in Y?mt(i,Y[r]):(_('The "position" parameter is not valid, defaulting to "center"'),mt(i,Y.center)),a=l,!(c=e.grow)||"string"!=typeof c||(s="grow-".concat(c))in Y&&mt(a,Y[s]),N(l,e,"container"),(u=document.body.getAttribute("data-swal2-queue-step"))&&(l.setAttribute("data-queue-step",u),document.body.removeAttribute("data-swal2-queue-step")))}function At(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var Bt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},St=["input","file","range","select","radio","checkbox","textarea"],Et=function(t){if(!jt[t.input])return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=Lt(t.input),n=jt[t.input](e,t);ot(n),setTimeout(function(){tt(n)})},Ot=function(t,e){var n=G(P(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},Tt=function(t){var e=Lt(t.input);t.customClass&&mt(e,t.customClass.input)},Lt=function(t){var e=Y[t]?Y[t]:Y.input;return gt(P(),e)},jt={};jt.text=jt.email=jt.password=jt.number=jt.tel=jt.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:y(e.inputValue)||_('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),At(t,e),t.type=e.input,t},jt.file=function(t,e){return At(t,e),t},jt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,t},jt.select=function(t,e){var n;return t.textContent="",e.inputPlaceholder&&(n=document.createElement("option"),H(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)),t},jt.radio=function(t){return t.textContent="",t},jt.checkbox=function(t,e){var n=G(P(),"checkbox");n.value=1,n.id=Y.checkbox,n.checked=Boolean(e.inputValue);var o=t.querySelector("span");return H(o,e.inputPlaceholder),t},jt.textarea=function(e,t){var n,o;return e.value=t.inputValue,At(e,t),"MutationObserver"in window&&(n=parseInt(window.getComputedStyle($()).width),o=parseInt(window.getComputedStyle($()).paddingLeft)+parseInt(window.getComputedStyle($()).paddingRight),new MutationObserver(function(){var t=e.offsetWidth+o;$().style.width=n<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})),e};function qt(t,e){var n,o,i,r,a,c=P().querySelector("#".concat(Y.content));e.html?(dt(e.html,c),ot(c,"block")):e.text?(c.textContent=e.text,ot(c,"block")):it(c),n=t,o=e,i=P(),r=Bt.innerParams.get(n),a=!r||o.input!==r.input,St.forEach(function(t){var e=Y[t],n=gt(i,e);Ot(t,o.inputAttributes),n.className=e,a&&it(n)}),o.input&&(a&&Et(o),Tt(o)),N(P(),e,"content")}function It(){return Q()&&Q().getAttribute("data-queue-step")}function Vt(t,s){var u=B();if(!s.progressSteps||0===s.progressSteps.length)return it(u),0;ot(u),u.textContent="";var l=parseInt(void 0===s.currentProgressStep?It():s.currentProgressStep);l>=s.progressSteps.length&&_("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.progressSteps.forEach(function(t,e){var n,o,i,r,a,c=(n=t,o=document.createElement("li"),mt(o,Y["progress-step"]),H(o,n),o);u.appendChild(c),e===l&&mt(c,Y["active-progress-step"]),e!==s.progressSteps.length-1&&(r=s,a=document.createElement("li"),mt(a,Y["progress-step-line"]),r.progressStepsDistance&&(a.style.width=r.progressStepsDistance),i=a,u.appendChild(i))})}function Mt(t,e){var n,o,i,r,a,c,s,u,l=L();N(l,e,"header"),Vt(0,e),n=t,o=e,(r=Bt.innerParams.get(n))&&o.icon===r.icon&&k()?N(k(),o,"icon"):(Dt(),o.icon&&(-1!==Object.keys(Z).indexOf(o.icon)?(i=C(".".concat(Y.icon,".").concat(Z[o.icon])),ot(i),Ut(i,o),Nt(),N(i,o,"icon"),mt(i,o.showClass.icon)):F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon,'"')))),function(t){var e=A();if(!t.imageUrl)return it(e);ot(e,""),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt),nt(e,"width",t.imageWidth),nt(e,"height",t.imageHeight),e.className=Y.image,N(e,t,"image")}(e),a=e,c=x(),rt(c,a.title||a.titleText),a.title&&dt(a.title,c),a.titleText&&(c.innerText=a.titleText),N(c,a,"title"),s=e,u=I(),H(u,s.closeButtonHtml),N(u,s,"closeButton"),rt(u,s.showCloseButton),u.setAttribute("aria-label",s.closeButtonAriaLabel)}function Rt(t,e){var n,o,i,r;n=e,o=$(),nt(o,"width",n.width),nt(o,"padding",n.padding),n.background&&(o.style.background=n.background),zt(o,n),Pt(0,e),Mt(t,e),qt(t,e),pt(0,e),i=e,r=j(),rt(r,i.footer),i.footer&&dt(i.footer,r),N(r,i,"footer"),"function"==typeof e.onRender&&e.onRender($())}function Ht(){return E()&&E().click()}var Dt=function(){for(var t=n(),e=0;e<t.length;e++)it(t[e])},Nt=function(){for(var t=$(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Ut=function(t,e){t.textContent="",e.iconHtml?H(t,_t(e.iconHtml)):"success"===e.icon?H(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?H(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):H(t,_t({question:"?",warning:"!",info:"i"}[e.icon]))},_t=function(t){return'<div class="'.concat(Y["icon-content"],'">').concat(t,"</div>")},Ft=[],zt=function(t,e){t.className="".concat(Y.popup," ").concat(vt(t)?e.showClass.popup:""),e.toast?(mt([document.documentElement,document.body],Y["toast-shown"]),mt(t,Y.toast)):mt(t,Y.modal),N(t,e,"popup"),"string"==typeof e.customClass&&mt(t,e.customClass),e.icon&&mt(t,Y["icon-".concat(e.icon)])};function Wt(){var t=$();t||sn.fire(),t=$();var e=T(),n=E();ot(e),ot(n,"inline-block"),mt([t,e],Y.loading),n.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Kt(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Xt.restoreFocusTimeout=setTimeout(function(){Xt.previousActiveElement&&Xt.previousActiveElement.focus?(Xt.previousActiveElement.focus(),Xt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function Yt(){if(Xt.timeout)return function(){var t=q(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),o=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(o,"%")}(),Xt.timeout.stop()}function Zt(){if(Xt.timeout){var t=Xt.timeout.start();return st(t),t}}function Qt(t){return Object.prototype.hasOwnProperty.call(Gt,t)}function $t(t){return ee[t]}function Jt(t){for(var e in t)Qt(i=e)||_('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==ne.indexOf(o)&&_('The parameter "'.concat(o,'" is incompatible with toasts'))),$t(n=e)&&g(n,$t(n));var n,o,i}var Xt={},Gt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconHtml:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:void 0,target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,onRender:void 0,onClose:void 0,onAfterClose:void 0,onDestroy:void 0,scrollbarPadding:!0},te=["title","titleText","text","html","footer","icon","hideClass","customClass","allowOutsideClick","allowEscapeKey","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","buttonsStyling","reverseButtons","showCloseButton","closeButtonHtml","closeButtonAriaLabel","imageUrl","imageWidth","imageHeight","imageAlt","progressSteps","currentProgressStep","onClose","onAfterClose","onDestroy"],ee={animation:'showClass" and "hideClass'},ne=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],oe=Object.freeze({isValidParameter:Qt,isUpdatableParameter:function(t){return-1!==te.indexOf(t)},isDeprecatedParameter:$t,argsToParams:function(o){var i={};return"object"!==r(o[0])||w(o[0])?["title","html","icon"].forEach(function(t,e){var n=o[e];"string"==typeof n||w(n)?i[t]=n:void 0!==n&&F("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(n)))}):s(i,o[0]),i},isVisible:function(){return vt($())},clickConfirm:Ht,clickCancel:function(){return O()&&O().click()},getContainer:Q,getPopup:$,getTitle:x,getContent:P,getHtmlContainer:function(){return e(Y["html-container"])},getImage:A,getIcon:k,getIcons:n,getCloseButton:I,getActions:T,getConfirmButton:E,getCancelButton:O,getHeader:L,getFooter:j,getTimerProgressBar:q,getFocusableElements:V,getValidationMessage:S,isLoading:R,fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(this,e)},mixin:function(r){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var n,o,e=(n=i,o=d(),function(){var t,e=u(n);return p(this,o?(t=u(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))});function i(){return a(this,i),e.apply(this,arguments)}return c(i,[{key:"_main",value:function(t){return f(u(i.prototype),"_main",this).call(this,s({},r,t))}}]),i}(this)},queue:function(t){var r=this;Ft=t;function a(t,e){Ft=[],t(e)}var c=[];return new Promise(function(i){!function e(n,o){n<Ft.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Ft[n]).then(function(t){void 0!==t.value?(c.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:c})}(0)})},getQueueStep:It,insertQueueStep:function(t,e){return e&&e<Ft.length?Ft.splice(e,0,t):Ft.push(t)},deleteQueueStep:function(t){void 0!==Ft[t]&&Ft.splice(t,1)},showLoading:Wt,enableLoading:Wt,getTimerLeft:function(){return Xt.timeout&&Xt.timeout.getTimerLeft()},stopTimer:Yt,resumeTimer:Zt,toggleTimer:function(){var t=Xt.timeout;return t&&(t.running?Yt:Zt)()},increaseTimer:function(t){if(Xt.timeout){var e=Xt.timeout.increase(t);return st(e,!0),e}},isTimerRunning:function(){return Xt.timeout&&Xt.timeout.isRunning()}});function ie(){var t,e=Bt.innerParams.get(this);e&&(t=Bt.domCache.get(this),e.showConfirmButton||(it(t.confirmButton),e.showCancelButton||it(t.actions)),ht([t.popup,t.actions],Y.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1)}function re(){null===X.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(X.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(X.previousBodyPadding+function(){var t=document.createElement("div");t.className=Y["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function ae(){return!!window.MSInputMethodContext&&!!document.documentMode}function ce(){var t=Q(),e=$();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var se=function(){navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||$().scrollHeight>window.innerHeight-44&&(Q().style.paddingBottom="".concat(44,"px"))},ue=function(){var e,t=Q();t.ontouchstart=function(t){e=le(t.target)},t.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},le=function(t){var e=Q();return t===e||!(at(e)||"INPUT"===t.tagName||at(P())&&P().contains(t))},de={swalPromiseResolve:new WeakMap};function pe(t,e,n,o){var i;n?he(t,o):(Kt().then(function(){return he(t,o)}),Xt.keydownTarget.removeEventListener("keydown",Xt.keydownHandler,{capture:Xt.keydownListenerCapture}),Xt.keydownHandlerAdded=!1),e.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&e.parentNode.removeChild(e),M()&&(null!==X.previousBodyPadding&&(document.body.style.paddingRight="".concat(X.previousBodyPadding,"px"),X.previousBodyPadding=null),D(document.body,Y.iosfix)&&(i=parseInt(document.body.style.top,10),ht(document.body,Y.iosfix),document.body.style.top="",document.body.scrollTop=-1*i),"undefined"!=typeof window&&ae()&&window.removeEventListener("resize",ce),h(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),ht([document.documentElement,document.body],[Y.shown,Y["height-auto"],Y["no-backdrop"],Y["toast-shown"],Y["toast-column"]])}function fe(t){var e,n,o,i=$();i&&(e=Bt.innerParams.get(this))&&!D(i,e.hideClass.popup)&&(n=de.swalPromiseResolve.get(this),ht(i,e.showClass.popup),mt(i,e.hideClass.popup),o=Q(),ht(o,e.showClass.backdrop),mt(o,e.hideClass.backdrop),function(t,e,n){var o=Q(),i=kt&&ct(e),r=n.onClose,a=n.onAfterClose;if(r!==null&&typeof r==="function"){r(e)}if(i){me(t,e,o,a)}else{pe(t,o,J(),a)}}(this,i,e),void 0!==t?(t.isDismissed=void 0!==t.dismiss,t.isConfirmed=void 0===t.dismiss):t={isDismissed:!0,isConfirmed:!1},n(t||{}))}var me=function(t,e,n,o){Xt.swalCloseEventFinishedCallback=pe.bind(null,t,n,J(),o),e.addEventListener(kt,function(t){t.target===e&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback)})},he=function(t,e){setTimeout(function(){"function"==typeof e&&e(),t._destroy()})};function ge(t,e,n){var o=Bt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function ve(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var be=function(){function n(t,e){a(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return c(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),ye={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function we(t){var e,n;(e=t).inputValidator||Object.keys(ye).forEach(function(t){e.input===t&&(e.inputValidator=ye[t])}),t.showLoaderOnConfirm&&!t.preConfirm&&_("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=W(t.animation),(n=t).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(_('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),yt(t)}function Ce(t){var e=Q(),n=$();"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n);var o=window.getComputedStyle(document.body).overflowY;je(e,n,t),Te(e,n),M()&&(Le(e,t.scrollbarPadding,o),h(document.body.children).forEach(function(t){t===Q()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,Q())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))})),J()||Xt.previousActiveElement||(Xt.previousActiveElement=document.activeElement),"function"==typeof t.onOpen&&setTimeout(function(){return t.onOpen(n)}),ht(e,Y["no-transition"])}function ke(t){var e,n=$();t.target===n&&(e=Q(),n.removeEventListener(kt,ke),e.style.overflowY="auto")}function xe(t,e){"select"===e.input||"radio"===e.input?Me(t,e):-1!==["text","email","number","tel","textarea"].indexOf(e.input)&&(v(e.inputValue)||y(e.inputValue))&&Re(t,e)}function Pe(t,e){t.disableButtons(),e.input?Ne(t,e):Ue(t,e,!0)}function Ae(t,e){t.disableButtons(),e(K.cancel)}function Be(t,e){t.closePopup({value:e})}function Se(e,t,n,o){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=function(t){return ze(e,t,o)},t.keydownTarget=n.keydownListenerCapture?window:$(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}function Ee(t,e,n){var o=V(),i=0;if(i<o.length)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();$().focus()}function Oe(t,e,n){Bt.innerParams.get(t).toast?Qe(t,e,n):(Je(e),Xe(e),Ge(t,e,n))}var Te=function(t,e){kt&&ct(e)?(t.style.overflowY="hidden",e.addEventListener(kt,ke)):t.style.overflowY="auto"},Le=function(t,e,n){var o;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!D(document.body,Y.iosfix)&&(o=document.body.scrollTop,document.body.style.top="".concat(-1*o,"px"),mt(document.body,Y.iosfix),ue(),se()),"undefined"!=typeof window&&ae()&&(ce(),window.addEventListener("resize",ce)),e&&"hidden"!==n&&re(),setTimeout(function(){t.scrollTop=0})},je=function(t,e,n){mt(t,n.showClass.backdrop),ot(e),mt(e,n.showClass.popup),mt([document.documentElement,document.body],Y.shown),n.heightAuto&&n.backdrop&&!n.toast&&mt([document.documentElement,document.body],Y["height-auto"])},qe=function(t){return t.checked?1:0},Ie=function(t){return t.checked?t.value:null},Ve=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Me=function(e,n){function o(t){return He[n.input](i,De(t),n)}var i=P();v(n.inputOptions)||y(n.inputOptions)?(Wt(),b(n.inputOptions).then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},Re=function(e,n){var o=e.getInput();it(o),b(n.inputValue).then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),ot(o),o.focus(),e.hideLoading()}).catch(function(t){F("Error in inputValue promise: ".concat(t)),o.value="",ot(o),o.focus(),e.hideLoading()})},He={select:function(t,e,i){function r(t,e,n){var o=document.createElement("option");o.value=n,H(o,e),i.inputValue.toString()===n.toString()&&(o.selected=!0),t.appendChild(o)}var a=gt(t,Y.select);e.forEach(function(t){var e,n=t[0],o=t[1];Array.isArray(o)?((e=document.createElement("optgroup")).label=n,e.disabled=!1,a.appendChild(e),o.forEach(function(t){return r(e,t[1],t[0])})):r(a,o,n)}),a.focus()},radio:function(t,e,a){var c=gt(t,Y.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=Y.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");H(r,n),r.className=Y.label,i.appendChild(o),i.appendChild(r),c.appendChild(i)});var n=c.querySelectorAll("input");n.length&&n[0].focus()}},De=function o(n){var i=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach(function(t,e){var n=t;"object"===r(n)&&(n=o(n)),i.push([e,n])}):Object.keys(n).forEach(function(t){var e=n[t];"object"===r(e)&&(e=o(e)),i.push([t,e])}),i},Ne=function(e,n){var o=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return qe(n);case"radio":return Ie(n);case"file":return Ve(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(e,n);n.inputValidator?(e.disableInput(),Promise.resolve().then(function(){return b(n.inputValidator(o,n.validationMessage))}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):Ue(e,n,o)})):e.getInput().checkValidity()?Ue(e,n,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Ue=function(e,t,n){t.showLoaderOnConfirm&&Wt(),t.preConfirm?(e.resetValidationMessage(),Promise.resolve().then(function(){return b(t.preConfirm(n,t.validationMessage))}).then(function(t){vt(S())||!1===t?e.hideLoading():Be(e,void 0===t?n:t)})):Be(e,n)},_e=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"],Fe=["Escape","Esc"],ze=function(t,e,n){var o=Bt.innerParams.get(t);o.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?We(t,e,o):"Tab"===e.key?Ke(e,o):-1!==_e.indexOf(e.key)?Ye():-1!==Fe.indexOf(e.key)&&Ze(e,o,n)},We=function(t,e,n){if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(n.input))return;Ht(),e.preventDefault()}},Ke=function(t){for(var e=t.target,n=V(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?Ee(0,o,-1):Ee(0,o,1),t.stopPropagation(),t.preventDefault()},Ye=function(){var t=E(),e=O();document.activeElement===t&&vt(e)?e.focus():document.activeElement===e&&vt(t)&&t.focus()},Ze=function(t,e,n){W(e.allowEscapeKey)&&(t.preventDefault(),n(K.esc))},Qe=function(e,t,n){t.popup.onclick=function(){var t=Bt.innerParams.get(e);t.showConfirmButton||t.showCancelButton||t.showCloseButton||t.input||n(K.close)}},$e=!1,Je=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&($e=!0)}}},Xe=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||($e=!0)}}},Ge=function(n,o,i){o.container.onclick=function(t){var e=Bt.innerParams.get(n);$e?$e=!1:t.target===o.container&&W(e.allowOutsideClick)&&i(K.backdrop)}};var tn=function(t,e,n){var o=q();it(o),e.timer&&(t.timeout=new be(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ot(o),setTimeout(function(){t.timeout.running&&st(e.timer)})))},en=function(t,e){if(!e.toast)return W(e.allowEnterKey)?e.focusCancel&&vt(t.cancelButton)?t.cancelButton.focus():e.focusConfirm&&vt(t.confirmButton)?t.confirmButton.focus():void Ee(0,-1,1):nn()},nn=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};var on,rn=function(t){for(var e in t)t[e]=new WeakMap},an=Object.freeze({hideLoading:ie,disableLoading:ie,getInput:function(t){var e=Bt.innerParams.get(t||this),n=Bt.domCache.get(t||this);return n?G(n.content,e.input):null},close:fe,closePopup:fe,closeModal:fe,closeToast:fe,enableButtons:function(){ge(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){ge(this,["confirmButton","cancelButton"],!0)},enableInput:function(){return ve(this.getInput(),!1)},disableInput:function(){return ve(this.getInput(),!0)},showValidationMessage:function(t){var e=Bt.domCache.get(this);H(e.validationMessage,t);var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),ot(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",Y["validation-message"]),tt(o),mt(o,Y.inputerror))},resetValidationMessage:function(){var t=Bt.domCache.get(this);t.validationMessage&&it(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ht(e,Y.inputerror))},getProgressSteps:function(){return Bt.domCache.get(this).progressSteps},_main:function(t){Jt(t),Xt.currentInstance&&Xt.currentInstance._destroy(),Xt.currentInstance=this;var e=function(t){var e=s({},Gt.showClass,t.showClass),n=s({},Gt.hideClass,t.hideClass),o=s({},Gt,t);if(o.showClass=e,o.hideClass=n,t.animation===false){o.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"};o.hideClass={}}return o}(t);we(e),Object.freeze(e),Xt.timeout&&(Xt.timeout.stop(),delete Xt.timeout),clearTimeout(Xt.restoreFocusTimeout);var n=function(t){var e={popup:$(),container:Q(),content:P(),actions:T(),confirmButton:E(),cancelButton:O(),closeButton:I(),validationMessage:S(),progressSteps:B()};return Bt.domCache.set(t,e),e}(this);return Rt(this,e),Bt.innerParams.set(this,e),function(n,o,i){return new Promise(function(t){var e=function t(e){n.closePopup({dismiss:e})};de.swalPromiseResolve.set(n,t);o.confirmButton.onclick=function(){return Pe(n,i)};o.cancelButton.onclick=function(){return Ae(n,e)};o.closeButton.onclick=function(){return e(K.close)};Oe(n,o,e);Se(n,Xt,i,e);if(i.toast&&(i.input||i.footer||i.showCloseButton)){mt(document.body,Y["toast-column"])}else{ht(document.body,Y["toast-column"])}xe(n,i);Ce(i);tn(Xt,i,e);en(o,i);setTimeout(function(){o.container.scrollTop=0})})}(this,n,e)},update:function(e){var t=$(),n=Bt.innerParams.get(this);if(!t||D(t,n.hideClass.popup))return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){sn.isUpdatableParameter(t)?o[t]=e[t]:_('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var i=s({},n,o);Rt(this,i),Bt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:s({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var t=Bt.domCache.get(this),e=Bt.innerParams.get(this);e&&(t.popup&&Xt.swalCloseEventFinishedCallback&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback),Xt.deferDisposalTimer&&(clearTimeout(Xt.deferDisposalTimer),delete Xt.deferDisposalTimer),"function"==typeof e.onDestroy&&e.onDestroy(),delete this.params,delete Xt.keydownHandler,delete Xt.keydownTarget,rn(Bt),rn(de))}}),cn=function(){function r(){if(a(this,r),"undefined"!=typeof window){"undefined"==typeof Promise&&F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),on=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);Bt.promise.set(this,i)}}return c(r,[{key:"then",value:function(t){return Bt.promise.get(this).then(t)}},{key:"finally",value:function(t){return Bt.promise.get(this).finally(t)}}]),r}();s(cn.prototype,an),s(cn,oe),Object.keys(an).forEach(function(t){cn[t]=function(){if(on)return on[t].apply(on,arguments)}}),cn.DismissReason=K,cn.version="9.17.0";var sn=cn;return sn.default=sn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
function revslider_showDoubleJqueryError(n){var t="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";t+="<br> This includes make eliminates the revolution slider libraries, and make it not work.";t+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body<\/b><\/strong> option to true.";t+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";t="<span style='font-size:16px;color:#BC0C06;'>"+t+"<\/span>";jQuery(n).show().html(t)}var console,oldgs,punchgs,_gsScope;if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(n){"use strict";var t=n.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||t[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");}(jQuery);+function(n){"use strict";function t(){var i=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var t in n)if(void 0!==i.style[t])return{end:n[t]};return!1}n.fn.emulateTransitionEnd=function(t){var i=!1,u=this,r;n(this).one("bsTransitionEnd",function(){i=!0});return r=function(){i||n(u).trigger(n.support.transition.end)},setTimeout(r,t),this};n(function(){n.support.transition=t();n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery);+function(n){"use strict";function u(i){return this.each(function(){var r=n(this),u=r.data("bs.alert");u||r.data("bs.alert",u=new t(this));"string"==typeof i&&u[i].call(r)})}var i='[data-dismiss="alert"]',t=function(t){n(t).on("click",i,this.close)},r;t.VERSION="3.3.7";t.TRANSITION_DURATION=150;t.prototype.close=function(i){function e(){r.detach().trigger("closed.bs.alert").remove()}var f=n(this),u=f.attr("data-target"),r;u||(u=f.attr("href"),u=u&&u.replace(/.*(?=#[^\s]*$)/,""));r=n("#"===u?[]:u);i&&i.preventDefault();r.length||(r=f.closest(".alert"));r.trigger(i=n.Event("close.bs.alert"));i.isDefaultPrevented()||(r.removeClass("in"),n.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",e).emulateTransitionEnd(t.TRANSITION_DURATION):e())};r=n.fn.alert;n.fn.alert=u;n.fn.alert.Constructor=t;n.fn.alert.noConflict=function(){return n.fn.alert=r,this};n(document).on("click.bs.alert.data-api",i,t.prototype.close)}(jQuery);+function(n){"use strict";function i(i){return this.each(function(){var u=n(this),r=u.data("bs.button"),f="object"==typeof i&&i;r||u.data("bs.button",r=new t(this,f));"toggle"==i?r.toggle():i&&r.setState(i)})}var t=function(i,r){this.$element=n(i);this.options=n.extend({},t.DEFAULTS,r);this.isLoading=!1},r;t.VERSION="3.3.7";t.DEFAULTS={loadingText:"loading..."};t.prototype.setState=function(t){var i="disabled",r=this.$element,f=r.is("input")?"val":"html",u=r.data();t+="Text";null==u.resetText&&r.data("resetText",r[f]());setTimeout(n.proxy(function(){r[f](null==u[t]?this.options[t]:u[t]);"loadingText"==t?(this.isLoading=!0,r.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,r.removeClass(i).removeAttr(i).prop(i,!1))},this),0)};t.prototype.toggle=function(){var t=!0,i=this.$element.closest('[data-toggle="buttons"]'),n;i.length?(n=this.$element.find("input"),"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),i.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")):(this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active"))};r=n.fn.button;n.fn.button=i;n.fn.button.Constructor=t;n.fn.button.noConflict=function(){return n.fn.button=r,this};n(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var r=n(t.target).closest(".btn");i.call(r,"toggle");n(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),r.is("input,button")?r.trigger("focus"):r.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){n(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery);+function(n){"use strict";function i(i){return this.each(function(){var u=n(this),r=u.data("bs.carousel"),f=n.extend({},t.DEFAULTS,u.data(),"object"==typeof i&&i),e="string"==typeof i?i:f.slide;r||u.data("bs.carousel",r=new t(this,f));"number"==typeof i?r.to(i):e?r[e]():f.interval&&r.pause().cycle()})}var t=function(t,i){this.$element=n(t);this.$indicators=this.$element.find(".carousel-indicators");this.options=i;this.paused=null;this.sliding=null;this.interval=null;this.$active=null;this.$items=null;this.options.keyboard&&this.$element.on("keydown.bs.carousel",n.proxy(this.keydown,this));"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",n.proxy(this.pause,this)).on("mouseleave.bs.carousel",n.proxy(this.cycle,this))},u,r;t.VERSION="3.3.7";t.TRANSITION_DURATION=600;t.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0};t.prototype.keydown=function(n){if(!/input|textarea/i.test(n.target.tagName)){switch(n.which){case 37:this.prev();break;case 39:this.next();break;default:return}n.preventDefault()}};t.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(n.proxy(this.next,this),this.options.interval)),this};t.prototype.getItemIndex=function(n){return this.$items=n.parent().children(".item"),this.$items.index(n||this.$active)};t.prototype.getItemForDirection=function(n,t){var i=this.getItemIndex(t),f="prev"==n&&0===i||"next"==n&&i==this.$items.length-1,r,u;return f&&!this.options.wrap?t:(r="prev"==n?-1:1,u=(i+r)%this.$items.length,this.$items.eq(u))};t.prototype.to=function(n){var i=this,t=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(n>this.$items.length-1||n<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){i.to(n)}):t==n?this.pause().cycle():this.slide(n>t?"next":"prev",this.$items.eq(n))};t.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&n.support.transition&&(this.$element.trigger(n.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this};t.prototype.next=function(){if(!this.sliding)return this.slide("next")};t.prototype.prev=function(){if(!this.sliding)return this.slide("prev")};t.prototype.slide=function(i,r){var e=this.$element.find(".item.active"),u=r||this.getItemForDirection(i,e),l=this.interval,f="next"==i?"left":"right",a=this,o,s,h,c;return u.hasClass("active")?this.sliding=!1:(o=u[0],s=n.Event("slide.bs.carousel",{relatedTarget:o,direction:f}),(this.$element.trigger(s),!s.isDefaultPrevented())?((this.sliding=!0,l&&this.pause(),this.$indicators.length)&&(this.$indicators.find(".active").removeClass("active"),h=n(this.$indicators.children()[this.getItemIndex(u)]),h&&h.addClass("active")),c=n.Event("slid.bs.carousel",{relatedTarget:o,direction:f}),n.support.transition&&this.$element.hasClass("slide")?(u.addClass(i),u[0].offsetWidth,e.addClass(f),u.addClass(f),e.one("bsTransitionEnd",function(){u.removeClass([i,f].join(" ")).addClass("active");e.removeClass(["active",f].join(" "));a.sliding=!1;setTimeout(function(){a.$element.trigger(c)},0)}).emulateTransitionEnd(t.TRANSITION_DURATION)):(e.removeClass("active"),u.addClass("active"),this.sliding=!1,this.$element.trigger(c)),l&&this.cycle(),this):void 0)};u=n.fn.carousel;n.fn.carousel=i;n.fn.carousel.Constructor=t;n.fn.carousel.noConflict=function(){return n.fn.carousel=u,this};r=function(t){var o,r=n(this),u=n(r.attr("data-target")||(o=r.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,"")),e,f;u.hasClass("carousel")&&(e=n.extend({},u.data(),r.data()),f=r.attr("data-slide-to"),f&&(e.interval=!1),i.call(u,e),f&&u.data("bs.carousel").to(f),t.preventDefault())};n(document).on("click.bs.carousel.data-api","[data-slide]",r).on("click.bs.carousel.data-api","[data-slide-to]",r);n(window).on("load",function(){n('[data-ride="carousel"]').each(function(){var t=n(this);i.call(t,t.data())})})}(jQuery);+function(n){"use strict";function r(t){var i,r=t.attr("data-target")||(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return n(r)}function i(i){return this.each(function(){var u=n(this),r=u.data("bs.collapse"),f=n.extend({},t.DEFAULTS,u.data(),"object"==typeof i&&i);!r&&f.toggle&&/show|hide/.test(i)&&(f.toggle=!1);r||u.data("bs.collapse",r=new t(this,f));"string"==typeof i&&r[i]()})}var t=function(i,r){this.$element=n(i);this.options=n.extend({},t.DEFAULTS,r);this.$trigger=n('[data-toggle="collapse"][href="#'+i.id+'"],[data-toggle="collapse"][data-target="#'+i.id+'"]');this.transitioning=null;this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger);this.options.toggle&&this.toggle()},u;t.VERSION="3.3.7";t.TRANSITION_DURATION=350;t.DEFAULTS={toggle:!0};t.prototype.dimension=function(){var n=this.$element.hasClass("width");return n?"width":"height"};t.prototype.show=function(){var f,r,e,u,o,s;if(!this.transitioning&&!this.$element.hasClass("in")&&(r=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing"),!(r&&r.length&&(f=r.data("bs.collapse"),f&&f.transitioning))&&(e=n.Event("show.bs.collapse"),this.$element.trigger(e),!e.isDefaultPrevented()))){if(r&&r.length&&(i.call(r,"hide"),f||r.data("bs.collapse",null)),u=this.dimension(),this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1,o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[u]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")},!n.support.transition)return o.call(this);s=n.camelCase(["scroll",u].join("-"));this.$element.one("bsTransitionEnd",n.proxy(o,this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])}};t.prototype.hide=function(){var r,i,u;if(!this.transitioning&&this.$element.hasClass("in")&&(r=n.Event("hide.bs.collapse"),this.$element.trigger(r),!r.isDefaultPrevented()))return i=this.dimension(),this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1,u=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")},n.support.transition?void this.$element[i](0).one("bsTransitionEnd",n.proxy(u,this)).emulateTransitionEnd(t.TRANSITION_DURATION):u.call(this)};t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};t.prototype.getParent=function(){return n(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(n.proxy(function(t,i){var u=n(i);this.addAriaAndCollapsedClass(r(u),u)},this)).end()};t.prototype.addAriaAndCollapsedClass=function(n,t){var i=n.hasClass("in");n.attr("aria-expanded",i);t.toggleClass("collapsed",!i).attr("aria-expanded",i)};u=n.fn.collapse;n.fn.collapse=i;n.fn.collapse.Constructor=t;n.fn.collapse.noConflict=function(){return n.fn.collapse=u,this};n(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var u=n(this);u.attr("data-target")||t.preventDefault();var f=r(u),e=f.data("bs.collapse"),o=e?"toggle":u.data();i.call(f,o)})}(jQuery);+function(n){"use strict";function r(t){var i=t.attr("data-target"),r;return i||(i=t.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),r=i&&n(i),r&&r.length?r:t.parent()}function u(t){t&&3===t.which||(n(o).remove(),n(i).each(function(){var u=n(this),i=r(u),f={relatedTarget:this};i.hasClass("open")&&(t&&"click"==t.type&&/input|textarea/i.test(t.target.tagName)&&n.contains(i[0],t.target)||(i.trigger(t=n.Event("hide.bs.dropdown",f)),t.isDefaultPrevented()||(u.attr("aria-expanded","false"),i.removeClass("open").trigger(n.Event("hidden.bs.dropdown",f)))))}))}function e(i){return this.each(function(){var r=n(this),u=r.data("bs.dropdown");u||r.data("bs.dropdown",u=new t(this));"string"==typeof i&&u[i].call(r)})}var o=".dropdown-backdrop",i='[data-toggle="dropdown"]',t=function(t){n(t).on("click.bs.dropdown",this.toggle)},f;t.VERSION="3.3.7";t.prototype.toggle=function(t){var f=n(this),i,o,e;if(!f.is(".disabled, :disabled")){if(i=r(f),o=i.hasClass("open"),u(),!o){if("ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click",u),e={relatedTarget:this},i.trigger(t=n.Event("show.bs.dropdown",e)),t.isDefaultPrevented())return;f.trigger("focus").attr("aria-expanded","true");i.toggleClass("open").trigger(n.Event("shown.bs.dropdown",e))}return!1}};t.prototype.keydown=function(t){var e,o,s,h,f,u;if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)&&(e=n(this),t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled"))){if(o=r(e),s=o.hasClass("open"),!s&&27!=t.which||s&&27==t.which)return 27==t.which&&o.find(i).trigger("focus"),e.trigger("click");h=" li:not(.disabled):visible a";f=o.find(".dropdown-menu"+h);f.length&&(u=f.index(t.target),38==t.which&&u>0&&u--,40==t.which&&u<f.length-1&&u++,~u||(u=0),f.eq(u).trigger("focus"))}};f=n.fn.dropdown;n.fn.dropdown=e;n.fn.dropdown.Constructor=t;n.fn.dropdown.noConflict=function(){return n.fn.dropdown=f,this};n(document).on("click.bs.dropdown.data-api",u).on("click.bs.dropdown.data-api",".dropdown form",function(n){n.stopPropagation()}).on("click.bs.dropdown.data-api",i,t.prototype.toggle).on("keydown.bs.dropdown.data-api",i,t.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",t.prototype.keydown)}(jQuery);+function(n){"use strict";function i(i,r){return this.each(function(){var f=n(this),u=f.data("bs.modal"),e=n.extend({},t.DEFAULTS,f.data(),"object"==typeof i&&i);u||f.data("bs.modal",u=new t(this,e));"string"==typeof i?u[i](r):e.show&&u.show(r)})}var t=function(t,i){this.options=i;this.$body=n(document.body);this.$element=n(t);this.$dialog=this.$element.find(".modal-dialog");this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=!1;this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,n.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))},r;t.VERSION="3.3.7";t.TRANSITION_DURATION=300;t.BACKDROP_TRANSITION_DURATION=150;t.DEFAULTS={backdrop:!0,keyboard:!0,show:!0};t.prototype.toggle=function(n){return this.isShown?this.hide():this.show(n)};t.prototype.show=function(i){var r=this,u=n.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(u);this.isShown||u.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',n.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){r.$element.one("mouseup.dismiss.bs.modal",function(t){n(t.target).is(r.$element)&&(r.ignoreBackdropClick=!0)})}),this.backdrop(function(){var f=n.support.transition&&r.$element.hasClass("fade"),u;r.$element.parent().length||r.$element.appendTo(r.$body);r.$element.show().scrollTop(0);r.adjustDialog();f&&r.$element[0].offsetWidth;r.$element.addClass("in");r.enforceFocus();u=n.Event("shown.bs.modal",{relatedTarget:i});f?r.$dialog.one("bsTransitionEnd",function(){r.$element.trigger("focus").trigger(u)}).emulateTransitionEnd(t.TRANSITION_DURATION):r.$element.trigger("focus").trigger(u)}))};t.prototype.hide=function(i){i&&i.preventDefault();i=n.Event("hide.bs.modal");this.$element.trigger(i);this.isShown&&!i.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),n(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),n.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",n.proxy(this.hideModal,this)).emulateTransitionEnd(t.TRANSITION_DURATION):this.hideModal())};t.prototype.enforceFocus=function(){n(document).off("focusin.bs.modal").on("focusin.bs.modal",n.proxy(function(n){document===n.target||this.$element[0]===n.target||this.$element.has(n.target).length||this.$element.trigger("focus")},this))};t.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",n.proxy(function(n){27==n.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")};t.prototype.resize=function(){this.isShown?n(window).on("resize.bs.modal",n.proxy(this.handleUpdate,this)):n(window).off("resize.bs.modal")};t.prototype.hideModal=function(){var n=this;this.$element.hide();this.backdrop(function(){n.$body.removeClass("modal-open");n.resetAdjustments();n.resetScrollbar();n.$element.trigger("hidden.bs.modal")})};t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};t.prototype.backdrop=function(i){var e=this,f=this.$element.hasClass("fade")?"fade":"",r,u;if(this.isShown&&this.options.backdrop){if(r=n.support.transition&&f,this.$backdrop=n(document.createElement("div")).addClass("modal-backdrop "+f).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",n.proxy(function(n){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(n.target===n.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!i)return;r?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION):i()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),u=function(){e.removeBackdrop();i&&i()},n.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION):u()):i&&i()};t.prototype.handleUpdate=function(){this.adjustDialog()};t.prototype.adjustDialog=function(){var n=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&n?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!n?this.scrollbarWidth:""})};t.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};t.prototype.checkScrollbar=function(){var n=window.innerWidth,t;n||(t=document.documentElement.getBoundingClientRect(),n=t.right-Math.abs(t.left));this.bodyIsOverflowing=document.body.clientWidth<n;this.scrollbarWidth=this.measureScrollbar()};t.prototype.setScrollbar=function(){var n=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";this.bodyIsOverflowing&&this.$body.css("padding-right",n+this.scrollbarWidth)};t.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)};t.prototype.measureScrollbar=function(){var n=document.createElement("div"),t;return n.className="modal-scrollbar-measure",this.$body.append(n),t=n.offsetWidth-n.clientWidth,this.$body[0].removeChild(n),t};r=n.fn.modal;n.fn.modal=i;n.fn.modal.Constructor=t;n.fn.modal.noConflict=function(){return n.fn.modal=r,this};n(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var r=n(this),f=r.attr("href"),u=n(r.attr("data-target")||f&&f.replace(/.*(?=#[^\s]+$)/,"")),e=u.data("bs.modal")?"toggle":n.extend({remote:!/#/.test(f)&&f},u.data(),r.data());r.is("a")&&t.preventDefault();u.one("show.bs.modal",function(n){n.isDefaultPrevented()||u.one("hidden.bs.modal",function(){r.is(":visible")&&r.trigger("focus")})});i.call(u,e,this)})}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("bs.tooltip"),f="object"==typeof i&&i;!r&&/destroy|hide/.test(i)||(r||u.data("bs.tooltip",r=new t(this,f)),"string"==typeof i&&r[i]())})}var t=function(n,t){this.type=null;this.options=null;this.enabled=null;this.timeout=null;this.hoverState=null;this.$element=null;this.inState=null;this.init("tooltip",n,t)},i;t.VERSION="3.3.7";t.TRANSITION_DURATION=150;t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}};t.prototype.init=function(t,i,r){var f,e,u,o,s;if(this.enabled=!0,this.type=t,this.$element=n(i),this.options=this.getOptions(r),this.$viewport=this.options.viewport&&n(n.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(f=this.options.trigger.split(" "),e=f.length;e--;)if(u=f[e],"click"==u)this.$element.on("click."+this.type,this.options.selector,n.proxy(this.toggle,this));else"manual"!=u&&(o="hover"==u?"mouseenter":"focusin",s="hover"==u?"mouseleave":"focusout",this.$element.on(o+"."+this.type,this.options.selector,n.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,n.proxy(this.leave,this)));this.options.selector?this._options=n.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.getOptions=function(t){return t=n.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t};t.prototype.getDelegateOptions=function(){var t={},i=this.getDefaults();return this._options&&n.each(this._options,function(n,r){i[n]!=r&&(t[n]=r)}),t};t.prototype.enter=function(t){var i=t instanceof this.constructor?t:n(t.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("bs."+this.type,i)),t instanceof n.Event&&(i.inState["focusin"==t.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())};t.prototype.isInStateTrue=function(){for(var n in this.inState)if(this.inState[n])return!0;return!1};t.prototype.leave=function(t){var i=t instanceof this.constructor?t:n(t.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("bs."+this.type,i)),t instanceof n.Event&&(i.inState["focusout"==t.type?"focus":"hover"]=!1),!i.isInStateTrue())return clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()};t.prototype.show=function(){var c=n.Event("show.bs."+this.type),l,p,e,w,h;if(this.hasContent()&&this.enabled){if(this.$element.trigger(c),l=n.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]),c.isDefaultPrevented()||!l)return;var u=this,r=this.tip(),a=this.getUID(this.type);this.setContent();r.attr("id",a);this.$element.attr("aria-describedby",a);this.options.animation&&r.addClass("fade");var i="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,v=/\s?auto?\s?/i,y=v.test(i);y&&(i=i.replace(v,"")||"top");r.detach().css({top:0,left:0,display:"block"}).addClass(i).data("bs."+this.type,this);this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);this.$element.trigger("inserted.bs."+this.type);var f=this.getPosition(),o=r[0].offsetWidth,s=r[0].offsetHeight;y&&(p=i,e=this.getPosition(this.$viewport),i="bottom"==i&&f.bottom+s>e.bottom?"top":"top"==i&&f.top-s<e.top?"bottom":"right"==i&&f.right+o>e.width?"left":"left"==i&&f.left-o<e.left?"right":i,r.removeClass(p).addClass(i));w=this.getCalculatedOffset(i,f,o,s);this.applyPlacement(w,i);h=function(){var n=u.hoverState;u.$element.trigger("shown.bs."+u.type);u.hoverState=null;"out"==n&&u.leave(u)};n.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",h).emulateTransitionEnd(t.TRANSITION_DURATION):h()}};t.prototype.applyPlacement=function(t,i){var r=this.tip(),l=r[0].offsetWidth,e=r[0].offsetHeight,o=parseInt(r.css("margin-top"),10),s=parseInt(r.css("margin-left"),10),h,f,u;isNaN(o)&&(o=0);isNaN(s)&&(s=0);t.top+=o;t.left+=s;n.offset.setOffset(r[0],n.extend({using:function(n){r.css({top:Math.round(n.top),left:Math.round(n.left)})}},t),0);r.addClass("in");h=r[0].offsetWidth;f=r[0].offsetHeight;"top"==i&&f!=e&&(t.top=t.top+e-f);u=this.getViewportAdjustedDelta(i,t,h,f);u.left?t.left+=u.left:t.top+=u.top;var c=/top|bottom/.test(i),a=c?2*u.left-l+h:2*u.top-e+f,v=c?"offsetWidth":"offsetHeight";r.offset(t);this.replaceArrow(a,r[0][v],c)};t.prototype.replaceArrow=function(n,t,i){this.arrow().css(i?"left":"top",50*(1-n/t)+"%").css(i?"top":"left","")};t.prototype.setContent=function(){var n=this.tip(),t=this.getTitle();n.find(".tooltip-inner")[this.options.html?"html":"text"](t);n.removeClass("fade in top bottom left right")};t.prototype.hide=function(i){function f(){"in"!=r.hoverState&&u.detach();r.$element&&r.$element.removeAttr("aria-describedby").trigger("hidden.bs."+r.type);i&&i()}var r=this,u=n(this.$tip),e=n.Event("hide.bs."+this.type);if(this.$element.trigger(e),!e.isDefaultPrevented())return u.removeClass("in"),n.support.transition&&u.hasClass("fade")?u.one("bsTransitionEnd",f).emulateTransitionEnd(t.TRANSITION_DURATION):f(),this.hoverState=null,this};t.prototype.fixTitle=function(){var n=this.$element;(n.attr("title")||"string"!=typeof n.attr("data-original-title"))&&n.attr("data-original-title",n.attr("title")||"").attr("title","")};t.prototype.hasContent=function(){return this.getTitle()};t.prototype.getPosition=function(t){t=t||this.$element;var r=t[0],u="BODY"==r.tagName,i=r.getBoundingClientRect();null==i.width&&(i=n.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var f=window.SVGElement&&r instanceof window.SVGElement,e=u?{top:0,left:0}:f?null:t.offset(),o={scroll:u?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},s=u?{width:n(window).width(),height:n(window).height()}:null;return n.extend({},i,o,s,e)};t.prototype.getCalculatedOffset=function(n,t,i,r){return"bottom"==n?{top:t.top+t.height,left:t.left+t.width/2-i/2}:"top"==n?{top:t.top-r,left:t.left+t.width/2-i/2}:"left"==n?{top:t.top+t.height/2-r/2,left:t.left-i}:{top:t.top+t.height/2-r/2,left:t.left+t.width}};t.prototype.getViewportAdjustedDelta=function(n,t,i,r){var f={top:0,left:0},e,u,o,s,h,c;return this.$viewport?(e=this.options.viewport&&this.options.viewport.padding||0,u=this.getPosition(this.$viewport),/right|left/.test(n)?(o=t.top-e-u.scroll,s=t.top+e-u.scroll+r,o<u.top?f.top=u.top-o:s>u.top+u.height&&(f.top=u.top+u.height-s)):(h=t.left-e,c=t.left+e+i,h<u.left?f.left=u.left-h:c>u.right&&(f.left=u.left+u.width-c)),f):f};t.prototype.getTitle=function(){var t=this.$element,n=this.options;return t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)};t.prototype.getUID=function(n){do n+=~~(1e6*Math.random());while(document.getElementById(n));return n};t.prototype.tip=function(){if(!this.$tip&&(this.$tip=n(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};t.prototype.enable=function(){this.enabled=!0};t.prototype.disable=function(){this.enabled=!1};t.prototype.toggleEnabled=function(){this.enabled=!this.enabled};t.prototype.toggle=function(t){var i=this;t&&(i=n(t.currentTarget).data("bs."+this.type),i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("bs."+this.type,i)));t?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)};t.prototype.destroy=function(){var n=this;clearTimeout(this.timeout);this.hide(function(){n.$element.off("."+n.type).removeData("bs."+n.type);n.$tip&&n.$tip.detach();n.$tip=null;n.$arrow=null;n.$viewport=null;n.$element=null})};i=n.fn.tooltip;n.fn.tooltip=r;n.fn.tooltip.Constructor=t;n.fn.tooltip.noConflict=function(){return n.fn.tooltip=i,this}}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("bs.popover"),f="object"==typeof i&&i;!r&&/destroy|hide/.test(i)||(r||u.data("bs.popover",r=new t(this,f)),"string"==typeof i&&r[i]())})}var t=function(n,t){this.init("popover",n,t)},i;if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");t.VERSION="3.3.7";t.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'});t.prototype=n.extend({},n.fn.tooltip.Constructor.prototype);t.prototype.constructor=t;t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.setContent=function(){var n=this.tip(),i=this.getTitle(),t=this.getContent();n.find(".popover-title")[this.options.html?"html":"text"](i);n.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof t?"html":"append":"text"](t);n.removeClass("fade top bottom left right in");n.find(".popover-title").html()||n.find(".popover-title").hide()};t.prototype.hasContent=function(){return this.getTitle()||this.getContent()};t.prototype.getContent=function(){var t=this.$element,n=this.options;return t.attr("data-content")||("function"==typeof n.content?n.content.call(t[0]):n.content)};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};i=n.fn.popover;n.fn.popover=r;n.fn.popover.Constructor=t;n.fn.popover.noConflict=function(){return n.fn.popover=i,this}}(jQuery);+function(n){"use strict";function t(i,r){this.$body=n(document.body);this.$scrollElement=n(n(i).is(document.body)?window:i);this.options=n.extend({},t.DEFAULTS,r);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",n.proxy(this.process,this));this.refresh();this.process()}function i(i){return this.each(function(){var u=n(this),r=u.data("bs.scrollspy"),f="object"==typeof i&&i;r||u.data("bs.scrollspy",r=new t(this,f));"string"==typeof i&&r[i]()})}t.VERSION="3.3.7";t.DEFAULTS={offset:10};t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};t.prototype.refresh=function(){var t=this,i="offset",r=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();n.isWindow(this.$scrollElement[0])||(i="position",r=this.$scrollElement.scrollTop());this.$body.find(this.selector).map(function(){var f=n(this),u=f.data("target")||f.attr("href"),t=/^#./.test(u)&&n(u);return t&&t.length&&t.is(":visible")&&[[t[i]().top+r,u]]||null}).sort(function(n,t){return n[0]-t[0]}).each(function(){t.offsets.push(this[0]);t.targets.push(this[1])})};t.prototype.process=function(){var n,i=this.$scrollElement.scrollTop()+this.options.offset,f=this.getScrollHeight(),e=this.options.offset+f-this.$scrollElement.height(),t=this.offsets,r=this.targets,u=this.activeTarget;if(this.scrollHeight!=f&&this.refresh(),i>=e)return u!=(n=r[r.length-1])&&this.activate(n);if(u&&i<t[0])return this.activeTarget=null,this.clear();for(n=t.length;n--;)u!=r[n]&&i>=t[n]&&(void 0===t[n+1]||i<t[n+1])&&this.activate(r[n])};t.prototype.activate=function(t){this.activeTarget=t;this.clear();var r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=n(r).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active"));i.trigger("activate.bs.scrollspy")};t.prototype.clear=function(){n(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var r=n.fn.scrollspy;n.fn.scrollspy=i;n.fn.scrollspy.Constructor=t;n.fn.scrollspy.noConflict=function(){return n.fn.scrollspy=r,this};n(window).on("load.bs.scrollspy.data-api",function(){n('[data-spy="scroll"]').each(function(){var t=n(this);i.call(t,t.data())})})}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("bs.tab");r||u.data("bs.tab",r=new t(this));"string"==typeof i&&r[i]()})}var t=function(t){this.element=n(t)},u,i;t.VERSION="3.3.7";t.TRANSITION_DURATION=150;t.prototype.show=function(){var t=this.element,f=t.closest("ul:not(.dropdown-menu)"),i=t.data("target"),u;if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var r=f.find(".active:last a"),e=n.Event("hide.bs.tab",{relatedTarget:t[0]}),o=n.Event("show.bs.tab",{relatedTarget:r[0]});(r.trigger(e),t.trigger(o),o.isDefaultPrevented()||e.isDefaultPrevented())||(u=n(i),this.activate(t.closest("li"),f),this.activate(u,u.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:t[0]});t.trigger({type:"shown.bs.tab",relatedTarget:r[0]})}))}};t.prototype.activate=function(i,r,u){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1);i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0);o?(i[0].offsetWidth,i.addClass("in")):i.removeClass("fade");i.parent(".dropdown-menu").length&&i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0);u&&u()}var f=r.find("> .active"),o=u&&n.support.transition&&(f.length&&f.hasClass("fade")||!!r.find("> .fade").length);f.length&&o?f.one("bsTransitionEnd",e).emulateTransitionEnd(t.TRANSITION_DURATION):e();f.removeClass("in")};u=n.fn.tab;n.fn.tab=r;n.fn.tab.Constructor=t;n.fn.tab.noConflict=function(){return n.fn.tab=u,this};i=function(t){t.preventDefault();r.call(n(this),"show")};n(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery);+function(n){"use strict";function i(i){return this.each(function(){var u=n(this),r=u.data("bs.affix"),f="object"==typeof i&&i;r||u.data("bs.affix",r=new t(this,f));"string"==typeof i&&r[i]()})}var t=function(i,r){this.options=n.extend({},t.DEFAULTS,r);this.$target=n(this.options.target).on("scroll.bs.affix.data-api",n.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",n.proxy(this.checkPositionWithEventLoop,this));this.$element=n(i);this.affixed=null;this.unpin=null;this.pinnedOffset=null;this.checkPosition()},r;t.VERSION="3.3.7";t.RESET="affix affix-top affix-bottom";t.DEFAULTS={offset:0,target:window};t.prototype.getState=function(n,t,i,r){var u=this.$target.scrollTop(),f=this.$element.offset(),e=this.$target.height();if(null!=i&&"top"==this.affixed)return u<i&&"top";if("bottom"==this.affixed)return null!=i?!(u+this.unpin<=f.top)&&"bottom":!(u+e<=n-r)&&"bottom";var o=null==this.affixed,s=o?u:f.top,h=o?e:t;return null!=i&&u<=i?"top":null!=r&&s+h>=n-r&&"bottom"};t.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(t.RESET).addClass("affix");var n=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-n};t.prototype.checkPositionWithEventLoop=function(){setTimeout(n.proxy(this.checkPosition,this),1)};t.prototype.checkPosition=function(){var i,e,o;if(this.$element.is(":visible")){var s=this.$element.height(),r=this.options.offset,f=r.top,u=r.bottom,h=Math.max(n(document).height(),n(document.body).height());if("object"!=typeof r&&(u=f=r),"function"==typeof f&&(f=r.top(this.$element)),"function"==typeof u&&(u=r.bottom(this.$element)),i=this.getState(h,s,f,u),this.affixed!=i){if(null!=this.unpin&&this.$element.css("top",""),e="affix"+(i?"-"+i:""),o=n.Event(e+".bs.affix"),this.$element.trigger(o),o.isDefaultPrevented())return;this.affixed=i;this.unpin="bottom"==i?this.getPinnedOffset():null;this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix","affixed")+".bs.affix")}"bottom"==i&&this.$element.offset({top:h-s-u})}};r=n.fn.affix;n.fn.affix=i;n.fn.affix.Constructor=t;n.fn.affix.noConflict=function(){return n.fn.affix=r,this};n(window).on("load",function(){n('[data-spy="affix"]').each(function(){var r=n(this),t=r.data();t.offset=t.offset||{};null!=t.offsetBottom&&(t.offset.bottom=t.offsetBottom);null!=t.offsetTop&&(t.offset.top=t.offsetTop);i.call(r,t)})})}(jQuery);window.Modernizr=function(n,t,i){function b(n){nt.cssText=n}function f(n,t){return typeof n===t}function ut(n,t){return!!~(""+n).indexOf(t)}function k(n,t){var u,r;for(u in n)if(r=n[u],!ut(r,"-")&&nt[r]!==i)return t=="pfx"?r:!0;return!1}function ft(n,t,r){var e,u;for(e in n)if(u=t[n[e]],u!==i)return r===!1?n[e]:f(u,"function")?u.bind(r||t):u;return!1}function d(n,t,i){var r=n.charAt(0).toUpperCase()+n.slice(1),u=(n+" "+it.join(r+" ")+r).split(" ");return f(t,"string")||f(t,"undefined")?k(u,t):(u=(n+" "+rt.join(r+" ")+r).split(" "),ft(u,t,i))}var r={},c=!0,u=t.documentElement,e="modernizr",g=t.createElement(e),nt=g.style,et,ht={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),tt="Webkit Moz O ms",it=tt.split(" "),rt=tt.toLowerCase().split(" "),o={},a=[],v=a.slice,s,y=function(n,i,r,f){var l,a,c,v,o=t.createElement("div"),h=t.body,s=h||t.createElement("body");if(parseInt(r,10))while(r--)c=t.createElement("div"),c.id=f?f[r]:e+(r+1),o.appendChild(c);return l=["&#173;",'<style id="s',e,'">',n,"<\/style>"].join(""),o.id=e,(h?o:s).innerHTML+=l,s.appendChild(o),h||(s.style.background="",s.style.overflow="hidden",v=u.style.overflow,u.style.overflow="hidden",u.appendChild(s)),a=i(o,n),h?o.parentNode.removeChild(o):(s.parentNode.removeChild(s),u.style.overflow=v),!!a},ot=function(t){var i=n.matchMedia||n.msMatchMedia,r;return i?i(t)&&i(t).matches||!1:(y("@media "+t+" { #"+e+" { position: absolute; } }",function(t){r=(n.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position=="absolute"}),r)},p={}.hasOwnProperty,w,h;w=!f(p,"undefined")&&!f(p.call,"undefined")?function(n,t){return p.call(n,t)}:function(n,t){return t in n&&f(n.constructor.prototype[t],"undefined")};Function.prototype.bind||(Function.prototype.bind=function(n){var t=this,i,r;if(typeof t!="function")throw new TypeError;return i=v.call(arguments,1),r=function(){var f,e,u;return this instanceof r?(f=function(){},f.prototype=t.prototype,e=new f,u=t.apply(e,i.concat(v.call(arguments))),Object(u)===u?u:e):t.apply(n,i.concat(v.call(arguments)))},r});o.touch=function(){var i;return"ontouchstart"in n||n.DocumentTouch&&t instanceof DocumentTouch?i=!0:y(["@media (",l.join("touch-enabled),("),e,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(n){i=n.offsetTop===9}),i};o.csstransitions=function(){return d("transition")};for(h in o)w(o,h)&&(s=h.toLowerCase(),r[s]=o[h](),a.push((r[s]?"":"no-")+s));return r.addTest=function(n,t){if(typeof n=="object")for(var f in n)w(n,f)&&r.addTest(f,n[f]);else{if(n=n.toLowerCase(),r[n]!==i)return r;t=typeof t=="function"?t():t;typeof c!="undefined"&&c&&(u.className+=" "+(t?"":"no-")+n);r[n]=t}return r},b(""),g=et=null,function(n,t){function v(n,t){var i=n.createElement("p"),r=n.getElementsByTagName("head")[0]||n.documentElement;return i.innerHTML="x<style>"+t+"<\/style>",r.insertBefore(i.lastChild,r.firstChild)}function s(){var n=r.elements;return typeof n=="string"?n.split(" "):n}function u(n){var t=a[n[l]];return t||(t={},o++,n[l]=o,a[o]=t),t}function h(n,r,f){if(r||(r=t),i)return r.createElement(n);f||(f=u(r));var e;return e=f.cache[n]?f.cache[n].cloneNode():b.test(n)?(f.cache[n]=f.createElem(n)).cloneNode():f.createElem(n),e.canHaveChildren&&!w.test(n)&&!e.tagUrn?f.frag.appendChild(e):e}function y(n,r){if(n||(n=t),i)return n.createDocumentFragment();r=r||u(n);for(var e=r.frag.cloneNode(),f=0,o=s(),h=o.length;f<h;f++)e.createElement(o[f]);return e}function p(n,t){t.cache||(t.cache={},t.createElem=n.createElement,t.createFrag=n.createDocumentFragment,t.frag=t.createFrag());n.createElement=function(i){return r.shivMethods?h(i,n,t):t.createElem(i)};n.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+s().join().replace(/[\w\-]+/g,function(n){return t.createElem(n),t.frag.createElement(n),'c("'+n+'")'})+");return n}")(r,t.frag)}function c(n){n||(n=t);var f=u(n);return r.shivCSS&&!e&&!f.hasCSS&&(f.hasCSS=!!v(n,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),i||p(n,f),n}var f=n.html5||{},w=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,e,l="_html5shiv",o=0,a={},i,r;(function(){try{var n=t.createElement("a");n.innerHTML="<xyz><\/xyz>";e="hidden"in n;i=n.childNodes.length==1||function(){t.createElement("a");var n=t.createDocumentFragment();return typeof n.cloneNode=="undefined"||typeof n.createDocumentFragment=="undefined"||typeof n.createElement=="undefined"}()}catch(r){e=!0;i=!0}})();r={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:f.shivCSS!==!1,supportsUnknownElements:i,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:h,createDocumentFragment:y};n.html5=r;c(t)}(this,t),r._version="2.8.3",r._prefixes=l,r._domPrefixes=rt,r._cssomPrefixes=it,r.mq=ot,r.testProp=function(n){return k([n])},r.testAllProps=d,r.testStyles=y,u.className=u.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(c?" js "+a.join(" "):""),r}(this,this.document),function(n,t,i){function h(n){return"[object Function]"==y.call(n)}function c(n){return"string"==typeof n}function l(){}function w(n){return!n||"loaded"==n||"complete"==n||"uninitialized"==n}function f(){var n=a.shift();v=1;n?n.t?s(function(){("c"==n.t?u.injectCss:u.injectJs)(n.s,0,n.a,n.x,n.e,1)},0):(n(),f()):v=0}function ut(n,i,o,h,c,l,y){function k(t){if(!nt&&w(p.readyState)&&(tt.r=nt=1,!v&&f(),p.onload=p.onreadystatechange=null,t)){"img"!=n&&s(function(){g.removeChild(p)},50);for(var u in r[i])r[i].hasOwnProperty(u)&&r[i][u].onload()}}var y=y||u.errorTimeout,p=t.createElement(n),nt=0,b=0,tt={t:o,s:i,e:c,a:l,x:y};1===r[i]&&(b=1,r[i]=[]);"object"==n?p.data=i:(p.src=i,p.type=n);p.width=p.height="0";p.onerror=p.onload=p.onreadystatechange=function(){k.call(this,b)};a.splice(h,0,tt);"img"!=n&&(b||2===r[i]?(g.insertBefore(p,d?null:e),s(k,y)):r[i].push(p))}function ft(n,t,i,r,u){return v=0,t=t||"j",c(n)?ut("c"==t?et:nt,n,t,this.i++,i,r,u):(a.splice(this.i++,0,n),1==a.length&&f()),this}function b(){var n=u;return n.loader={load:ft,i:0},n}var o=t.documentElement,s=n.setTimeout,e=t.getElementsByTagName("script")[0],y={}.toString,a=[],v=0,k="MozAppearance"in o.style,d=k&&!!t.createRange().compareNode,g=d?o:e.parentNode,o=n.opera&&"[object Opera]"==y.call(n.opera),o=!!t.attachEvent&&!o,nt=k?"object":o?"script":"img",et=o?"script":nt,tt=Array.isArray||function(n){return"[object Array]"==y.call(n)},p=[],r={},it={timeout:function(n,t){return t.length&&(n.timeout=t[0]),n}},rt,u;u=function(n){function a(n){for(var n=n.split("!"),f=p.length,i=n.pop(),e=n.length,i={url:i,origUrl:i,prefixes:n},u,r,t=0;t<e;t++)r=n[t].split("="),(u=it[r.shift()])&&(i=u(i,r));for(t=0;t<f;t++)i=p[t](i);return i}function f(n,t,u,f,e){var o=a(n),s=o.autoCallback;o.url.split(".").pop().split("?").shift();o.bypass||(t&&(t=h(t)?t:t[n]||t[f]||t[n.split("/").pop().split("?")[0]]),o.instead?o.instead(n,t,u,f,e):(r[o.url]?o.noexec=!0:r[o.url]=1,u.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":i,o.noexec,o.attrs,o.timeout),(h(t)||h(s))&&u.load(function(){b();t&&t(o.origUrl,e,f);s&&s(o.origUrl,e,f);r[o.url]=2})))}function s(n,t){function a(n,o){if(n){if(c(n))o||(i=function(){var n=[].slice.call(arguments);s.apply(this,n);u()}),f(n,i,t,0,e);else if(Object(n)===n)for(r in v=function(){var t=0;for(var i in n)n.hasOwnProperty(i)&&t++;return t}(),n)n.hasOwnProperty(r)&&(!o&&!--v&&(h(i)?i=function(){var n=[].slice.call(arguments);s.apply(this,n);u()}:i[r]=function(n){return function(){var t=[].slice.call(arguments);n&&n.apply(this,t);u()}}(s[r])),f(n[r],i,t,r,e))}else o||u()}var e=!!n.test,o=n.load||n.both,i=n.callback||l,s=i,u=n.complete||l,v,r;a(e?n.yep:n.nope,!!o);o&&a(o)}var e,t,o=this.yepnope.loader;if(c(n))f(n,0,o,0);else if(tt(n))for(e=0;e<n.length;e++)t=n[e],c(t)?f(t,0,o,0):tt(t)?u(t):Object(t)===t&&s(t,o);else Object(n)===n&&s(n,o)};u.addPrefix=function(n,t){it[n]=t};u.addFilter=function(n){p.push(n)};u.errorTimeout=1e4;null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",rt=function(){t.removeEventListener("DOMContentLoaded",rt,0);t.readyState="complete"},0));n.yepnope=b();n.yepnope.executeStack=f;n.yepnope.injectJs=function(n,i,r,o,h,c){var a=t.createElement("script"),v,y,o=o||u.errorTimeout;a.src=n;for(y in r)a.setAttribute(y,r[y]);i=c?f:i||l;a.onreadystatechange=a.onload=function(){!v&&w(a.readyState)&&(v=1,i(),a.onload=a.onreadystatechange=null)};s(function(){v||(v=1,i(1))},o);h?a.onload():e.parentNode.insertBefore(a,e)};n.yepnope.injectCss=function(n,i,r,u,o,h){var u=t.createElement("link"),c,i=h?f:i||l;u.href=n;u.rel="stylesheet";u.type="text/css";for(c in r)u.setAttribute(c,r[c]);o||(e.parentNode.insertBefore(u,e),s(i,0))}}(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
 * jQuery Browser Plugin 0.0.7
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 19-05-2015
 */
(function(n){typeof define=="function"&&define.amd?define(["jquery"],function(t){n(t)}):typeof module=="object"&&typeof module.exports=="object"?module.exports=n(require("jquery")):n(window.jQuery)})(function(n){"use strict";function t(n){var u,f,e,o,s,h,c,l;n===undefined&&(n=window.navigator.userAgent);n=n.toLowerCase();var r=/(edge)\/([\w.]+)/.exec(n)||/(opr)[\/]([\w.]+)/.exec(n)||/(chrome)[ \/]([\w.]+)/.exec(n)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(n)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(n)||/(webkit)[ \/]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[],a=/(ipad)/.exec(n)||/(ipod)/.exec(n)||/(iphone)/.exec(n)||/(kindle)/.exec(n)||/(silk)/.exec(n)||/(android)/.exec(n)||/(windows phone)/.exec(n)||/(win)/.exec(n)||/(mac)/.exec(n)||/(linux)/.exec(n)||/(cros)/.exec(n)||/(playbook)/.exec(n)||/(bb)/.exec(n)||/(blackberry)/.exec(n)||[],t={},i={browser:r[5]||r[3]||r[1]||"",version:r[2]||r[4]||"0",versionNumber:r[4]||r[2]||"0",platform:a[0]||""};return i.browser&&(t[i.browser]=!0,t.version=i.version,t.versionNumber=parseInt(i.versionNumber,10)),i.platform&&(t[i.platform]=!0),(t.android||t.bb||t.blackberry||t.ipad||t.iphone||t.ipod||t.kindle||t.playbook||t.silk||t["windows phone"])&&(t.mobile=!0),(t.cros||t.mac||t.linux||t.win)&&(t.desktop=!0),(t.chrome||t.opr||t.safari)&&(t.webkit=!0),(t.rv||t.edge)&&(u="msie",i.browser=u,t[u]=!0),t.safari&&t.blackberry&&(f="blackberry",i.browser=f,t[f]=!0),t.safari&&t.playbook&&(e="playbook",i.browser=e,t[e]=!0),t.bb&&(o="blackberry",i.browser=o,t[o]=!0),t.opr&&(s="opera",i.browser=s,t[s]=!0),t.safari&&t.android&&(h="android",i.browser=h,t[h]=!0),t.safari&&t.kindle&&(c="kindle",i.browser=c,t[c]=!0),t.safari&&t.silk&&(l="silk",i.browser=l,t[l]=!0),t.name=i.browser,t.platform=i.platform,t}return window.jQBrowser=t(window.navigator.userAgent),window.jQBrowser.uaMatch=t,n&&(n.browser=window.jQBrowser),window.jQBrowser}),function(n){var t=n(window),i=t.height();t.resize(function(){i=t.height()});n.fn.parallax=function(r,u,f){function o(){var f=t.scrollTop();e.each(function(){var t=n(this),o=t.offset().top,c=s(t);o+c<f||o>f+i||e.css("backgroundPosition",r+" "+Math.round((h-f)*u)+"px")})}var e=n(this),s,h;e.each(function(){h=e.offset().top});s=f?function(n){return n.outerHeight(!0)}:function(n){return n.height()};(arguments.length<1||r===null)&&(r="50%");(arguments.length<2||u===null)&&(u=.1);(arguments.length<3||f===null)&&(f=!0);t.bind("scroll",o).resize(o);o()}}(jQuery),function(n){function t(n,t){return n.toFixed(t.decimals)}n.fn.countTo=function(t){return t=t||{},n(this).each(function(){function l(){r+=c;s++;h(r);typeof i.onUpdate=="function"&&i.onUpdate.call(e,r);s>=o&&(f.removeData("countTo"),clearInterval(u.interval),r=i.to,typeof i.onComplete=="function"&&i.onComplete.call(e,r))}function h(n){var t=i.formatter.call(e,n,i);f.text(t)}var i=n.extend({},n.fn.countTo.defaults,{from:n(this).data("from"),to:n(this).data("to"),speed:n(this).data("speed"),refreshInterval:n(this).data("refresh-interval"),decimals:n(this).data("decimals")},t),o=Math.ceil(i.speed/i.refreshInterval),c=(i.to-i.from)/o,e=this,f=n(this),s=0,r=i.from,u=f.data("countTo")||{};f.data("countTo",u);u.interval&&clearInterval(u.interval);u.interval=setInterval(l,i.refreshInterval);h(r)})};n.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:t,onUpdate:null,onComplete:null}}(jQuery),function(n){n.fn.appear=function(t,i){var r=n.extend({data:undefined,one:!0,accX:0,accY:0},i);return this.each(function(){var i=n(this);if(i.appeared=!1,!t){i.trigger("appear",r.data);return}var u=n(window),f=function(){if(!i.is(":visible")){i.appeared=!1;return}var n=u.scrollLeft(),t=u.scrollTop(),f=i.offset(),e=f.left,o=f.top,s=r.accX,h=r.accY,c=i.height(),l=u.height(),a=i.width(),v=u.width();o+c+h>=t&&o<=t+l+h&&e+a+s>=n&&e<=n+v+s?i.appeared||i.trigger("appear",r.data):i.appeared=!1},e=function(){if(i.appeared=!0,r.one){u.unbind("scroll",f);var e=n.inArray(f,n.fn.appear.checks);e>=0&&n.fn.appear.checks.splice(e,1)}t.apply(this,arguments)};if(r.one)i.one("appear",r.data,e);else i.bind("appear",r.data,e);u.scroll(f);n.fn.appear.checks.push(f);f()})};n.extend(n.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=n.fn.appear.checks.length;if(t>0)while(t--)n.fn.appear.checks[t]()},run:function(){n.fn.appear.timeout&&clearTimeout(n.fn.appear.timeout);n.fn.appear.timeout=setTimeout(n.fn.appear.checkAll,20)}});n.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,i){var r=n.fn[i];r&&(n.fn[i]=function(){var t=r.apply(this,arguments);return n.fn.appear.run(),t})})}(jQuery),function(n){n.extend({webkitSmoothScroll:function(){function et(){var t=!1;t&&ht("keydown",tt);n.keyboardSupport&&!t&&s("keydown",tt)}function g(){var u,s,f;if(document.body){var t=document.body,i=document.documentElement,r=window.innerHeight,h=t.scrollHeight;e=document.compatMode.indexOf("CSS")>=0?i:t;o=t;et();d=!0;top!=self?k=!0:h>r&&(t.offsetHeight<=r||i.offsetHeight<=r)&&(u=!1,s=function(){u||i.scrollHeight==document.height||(u=!0,setTimeout(function(){i.style.height=document.height+"px";u=!1},500))},i.style.height="auto",setTimeout(s,10),e.offsetHeight<=r&&(f=document.createElement("div"),f.style.clear="both",t.appendChild(f)));n.fixedBackground||ft||(t.style.backgroundAttachment="scroll",i.style.backgroundAttachment="scroll")}}function nt(t,r,u,f){var l,o,e,a,s;(f||(f=1e3),ct(r,u),n.accelerationMax!=1&&(l=+new Date,o=l-c,o<n.accelerationDelta&&(e=(1+30/o)/2,e>1&&(e=Math.min(e,n.accelerationMax),r*=e,u*=e)),c=+new Date),i.push({x:r,y:u,lastX:r<0?.99:-.99,lastY:u<0?.99:-.99,start:+new Date}),h)||(a=t===document.body,s=function(){for(var y,p,d=+new Date,c=0,l=0,o=0;o<i.length;o++){var e=i[o],b=d-e.start,k=b>=n.animationTime,v=k?1:b/n.animationTime;n.pulseAlgorithm&&(v=vt(v));y=e.x*v-e.lastX>>0;p=e.y*v-e.lastY>>0;c+=y;l+=p;e.lastX+=y;e.lastY+=p;k&&(i.splice(o,1),o--)}a?window.scrollBy(c,l):(c&&(t.scrollLeft+=c),l&&(t.scrollTop+=l));r||u||(i=[]);i.length?w(s,t,f/n.frameRate+1):h=!1},w(s,t,0),h=!0)}function ot(t){var u,f,r,i;if((d||g(),u=t.target,f=it(u),!f||t.defaultPrevented||y(o,"embed")||y(u,"embed")&&/\.pdf/i.test(u.src))||(r=t.wheelDeltaX||0,i=t.wheelDeltaY||0,r||i||(i=t.wheelDelta||0),!n.touchpadSupport&&at(i)))return!0;Math.abs(r)>1.2&&(r*=n.stepSize/120);Math.abs(i)>1.2&&(i*=n.stepSize/120);nt(f,-r,-i)}function tt(i){var e=i.target,l=i.ctrlKey||i.altKey||i.metaKey||i.shiftKey&&i.keyCode!==t.spacebar,h;if(/input|textarea|select|embed/i.test(e.nodeName)||e.isContentEditable||i.defaultPrevented||l||y(e,"button")&&i.keyCode===t.spacebar)return!0;var c,s=0,r=0,u=it(o),f=u.clientHeight;u==document.body&&(f=window.innerHeight);switch(i.keyCode){case t.up:r=-n.arrowScroll;break;case t.down:r=n.arrowScroll;break;case t.spacebar:c=i.shiftKey?1:-1;r=-c*f*.9;break;case t.pageup:r=-f*.9;break;case t.pagedown:r=f*.9;break;case t.home:r=-u.scrollTop;break;case t.end:h=u.scrollHeight-u.scrollTop-f;r=h>0?h+10:0;break;case t.left:s=-n.arrowScroll;break;case t.right:s=n.arrowScroll;break;default:return!0}nt(u,s,r);i.preventDefault()}function st(n){o=n.target}function v(n,t){for(var i=n.length;i--;)l[a(n[i])]=t;return t}function it(n){var t=[],r=e.scrollHeight,i;do{if(i=l[a(n)],i)return v(t,i);if(t.push(n),r===n.scrollHeight){if(!k||e.clientHeight+10<r)return v(t,document.body)}else if(n.clientHeight+10<n.scrollHeight&&(overflow=getComputedStyle(n,"").getPropertyValue("overflow-y"),overflow==="scroll"||overflow==="auto"))return v(t,n)}while(n=n.parentNode)}function s(n,t,i){window.addEventListener(n,t,i||!1)}function ht(n,t,i){window.removeEventListener(n,t,i||!1)}function y(n,t){return(n.nodeName||"").toLowerCase()===t.toLowerCase()}function ct(n,t){n=n>0?1:-1;t=t>0?1:-1;(f.x!==n||f.y!==t)&&(f.x=n,f.y=t,i=[],c=0)}function at(n){if(n){n=Math.abs(n);r.push(n);r.shift();clearTimeout(lt);var t=p(r[0],120)&&p(r[1],120)&&p(r[2],120);return!t}}function p(n,t){return Math.floor(n/t)==n/t}function rt(t){var i,r,u;return t=t*n.pulseScale,t<1?i=t-(1-Math.exp(-t)):(r=Math.exp(-1),t-=1,u=1-Math.exp(-t),i=r+u*(1-r)),i*n.pulseNormalize}function vt(t){return t>=1?1:t<=0?0:(n.pulseNormalize==1&&(n.pulseNormalize/=rt(1)),rt(t))}var b={frameRate:120,animationTime:600,stepSize:135,pulseAlgorithm:!0,pulseScale:7,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},n=b,ft=!1,k=!1,f={x:0,y:0},d=!1,e=document.documentElement,o,r=[120,120,120],t={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},n=b,i=[],h=!1,c=+new Date,l={},a,lt,w,ut,u;setInterval(function(){l={}},1e4);a=function(){var n=0;return function(t){return t.uniqueID||(t.uniqueID=n++)}}();w=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(n,t,i){window.setTimeout(n,i||1e3/60)}}();ut=/chrome/i.test(window.navigator.userAgent);u=null;"onwheel"in document.createElement("div")?u="wheel":"onmousewheel"in document.createElement("div")&&(u="mousewheel");u&&ut&&(s(u,ot),s("mousedown",st),s("load",g))}})}(jQuery);
/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
if(!function(n,t){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){t(n,i)}):"object"==typeof module&&module.exports?module.exports=t(n,require("jquery")):n.jQueryBridget=t(n,n.jQuery)}(window,function(n,t){"use strict";function i(i,u,o){function s(n,t,r){var u,e="$()."+i+'("'+t+'")';return n.each(function(n,s){var h=o.data(s,i),c,l;if(!h)return void f(i+" not initialized. Cannot call methods, i.e. "+e);if(c=h[t],!c||"_"==t.charAt(0))return void f(e+" is not a valid method");l=c.apply(h,r);u=void 0===u?l:u}),void 0!==u?u:n}function h(n,t){n.each(function(n,r){var f=o.data(r,i);f?(f.option(t),f._init()):(f=new u(r,t),o.data(r,i,f))})}o=o||t||n.jQuery;o&&(u.prototype.option||(u.prototype.option=function(n){o.isPlainObject(n)&&(this.options=o.extend(!0,this.options,n))}),o.fn[i]=function(n){if("string"==typeof n){var t=e.call(arguments,1);return s(this,n,t)}return h(this,n),this},r(o))}function r(n){!n||n&&n.bridget||(n.bridget=i)}var e=Array.prototype.slice,u=n.console,f="undefined"==typeof u?function(){}:function(n){u.error(n)};return r(t||n.jQuery),i}),function(n,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():n.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function t(){}var n=t.prototype;return n.on=function(n,t){if(n&&t){var i=this._events=this._events||{},r=i[n]=i[n]||[];return-1==r.indexOf(t)&&r.push(t),this}},n.once=function(n,t){if(n&&t){this.on(n,t);var i=this._onceEvents=this._onceEvents||{},r=i[n]=i[n]||{};return r[t]=!0,this}},n.off=function(n,t){var i=this._events&&this._events[n],r;if(i&&i.length)return r=i.indexOf(t),-1!=r&&i.splice(r,1),this},n.emitEvent=function(n,t){var r=this._events&&this._events[n],u,i,f,e;if(r&&r.length){for(u=0,i=r[u],t=t||[],f=this._onceEvents&&this._onceEvents[n];i;)e=f&&f[i],e&&(this.off(n,i),delete f[i]),i.apply(this,t),u+=e?0:1,i=r[u];return this}},t}),function(n,t){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return t()}):"object"==typeof module&&module.exports?module.exports=t():n.getSize=t()}(window,function(){"use strict";function n(n){var t=parseFloat(n),i=-1==n.indexOf("%")&&!isNaN(t);return i&&t}function o(){}function s(){for(var r,i={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},n=0;f>n;n++)r=t[n],i[r]=0;return i}function i(n){var t=getComputedStyle(n);return t||c("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),t}function h(){var t,f,o;e||(e=!0,t=document.createElement("div"),t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box",f=document.body||document.documentElement,f.appendChild(t),o=i(t),r.isBoxSizeOuter=u=200==n(o.width),f.removeChild(t))}function r(r){var o,e,a,c,l;if(h(),"string"==typeof r&&(r=document.querySelector(r)),r&&"object"==typeof r&&r.nodeType){if(o=i(r),"none"==o.display)return s();for(e={},e.width=r.offsetWidth,e.height=r.offsetHeight,a=e.isBorderBox="border-box"==o.boxSizing,c=0;f>c;c++){var v=t[c],nt=o[v],y=parseFloat(nt);e[v]=isNaN(y)?0:y}var p=e.paddingLeft+e.paddingRight,w=e.paddingTop+e.paddingBottom,tt=e.marginLeft+e.marginRight,it=e.marginTop+e.marginBottom,b=e.borderLeftWidth+e.borderRightWidth,k=e.borderTopWidth+e.borderBottomWidth,d=a&&u,g=n(o.width);return g!==!1&&(e.width=g+(d?0:p+b)),l=n(o.height),l!==!1&&(e.height=l+(d?0:w+k)),e.innerWidth=e.width-(p+b),e.innerHeight=e.height-(w+k),e.outerWidth=e.width+tt,e.outerHeight=e.height+it,e}}var u,c="undefined"==typeof console?o:function(n){console.error(n)},t=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],f=t.length,e=!1;return r}),function(n,t){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",t):"object"==typeof module&&module.exports?module.exports=t():n.matchesSelector=t()}(window,function(){"use strict";var n=function(){var t=Element.prototype,i,n,u,r;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(i=["webkit","moz","ms","o"],n=0;n<i.length;n++)if(u=i[n],r=u+"MatchesSelector",t[r])return r}();return function(t,i){return t[n](i)}}),function(n,t){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return t(n,i)}):"object"==typeof module&&module.exports?module.exports=t(n,require("desandro-matches-selector")):n.fizzyUIUtils=t(n,n.matchesSelector)}(window,function(n,t){var i={},r;return i.extend=function(n,t){for(var i in t)n[i]=t[i];return n},i.modulo=function(n,t){return(n%t+t)%t},i.makeArray=function(n){var t=[],i;if(Array.isArray(n))t=n;else if(n&&"number"==typeof n.length)for(i=0;i<n.length;i++)t.push(n[i]);else t.push(n);return t},i.removeFrom=function(n,t){var i=n.indexOf(t);-1!=i&&n.splice(i,1)},i.getParent=function(n,i){for(;n!=document.body;)if(n=n.parentNode,t(n,i))return n},i.getQueryElement=function(n){return"string"==typeof n?document.querySelector(n):n},i.handleEvent=function(n){var t="on"+n.type;this[t]&&this[t](n)},i.filterFindElements=function(n,r){n=i.makeArray(n);var u=[];return n.forEach(function(n){if(n instanceof HTMLElement){if(!r)return void u.push(n);t(n,r)&&u.push(n);for(var f=n.querySelectorAll(r),i=0;i<f.length;i++)u.push(f[i])}}),u},i.debounceMethod=function(n,t,i){var u=n.prototype[t],r=t+"Timeout";n.prototype[t]=function(){var t=this[r],f,n;t&&clearTimeout(t);f=arguments;n=this;this[r]=setTimeout(function(){u.apply(n,f);delete n[r]},i||100)}},i.docReady=function(n){var t=document.readyState;"complete"==t||"interactive"==t?n():document.addEventListener("DOMContentLoaded",n)},i.toDashed=function(n){return n.replace(/(.)([A-Z])/g,function(n,t,i){return t+"-"+i}).toLowerCase()},r=n.console,i.htmlInit=function(t,u){i.docReady(function(){var e=i.toDashed(u),f="data-"+e,s=document.querySelectorAll("["+f+"]"),h=document.querySelectorAll(".js-"+e),c=i.makeArray(s).concat(i.makeArray(h)),l=f+"-options",o=n.jQuery;c.forEach(function(n){var i,e=n.getAttribute(f)||n.getAttribute(l),s;try{i=e&&JSON.parse(e)}catch(h){return void(r&&r.error("Error parsing "+f+" on "+n.className+": "+h))}s=new t(n,i);o&&o.data(n,u,s)})})},i}),function(n,t){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("ev-emitter"),require("get-size")):(n.Outlayer={},n.Outlayer.Item=t(n.EvEmitter,n.getSize))}(window,function(n,t){"use strict";function l(n){for(var t in n)return!1;return t=null,!0}function u(n,t){n&&(this.element=n,this.layout=t,this.position={x:0,y:0},this._create())}function a(n){return n.replace(/([A-Z])/g,function(n){return"-"+n.toLowerCase()})}var f=document.documentElement.style,r="string"==typeof f.transition?"transition":"WebkitTransition",e="string"==typeof f.transform?"transform":"WebkitTransform",o={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],v={transform:e,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},i=u.prototype=Object.create(n.prototype),s,h,c;return i.constructor=u,i._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}};this.css({position:"absolute"})},i.handleEvent=function(n){var t="on"+n.type;this[t]&&this[t](n)},i.getSize=function(){this.size=t(this.element)},i.css=function(n){var r=this.element.style,t,i;for(t in n)i=v[t]||t,r[i]=n[t]},i.getPosition=function(){var f=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),r=f[e?"left":"right"],u=f[o?"top":"bottom"],n=this.layout.size,t=-1!=r.indexOf("%")?parseFloat(r)/100*n.width:parseInt(r,10),i=-1!=u.indexOf("%")?parseFloat(u)/100*n.height:parseInt(u,10);t=isNaN(t)?0:t;i=isNaN(i)?0:i;t-=e?n.paddingLeft:n.paddingRight;i-=o?n.paddingTop:n.paddingBottom;this.position.x=t;this.position.y=i},i.layoutPosition=function(){var r=this.layout.size,n={},t=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),u=t?"paddingLeft":"paddingRight",f=t?"left":"right",e=t?"right":"left",o=this.position.x+r[u];n[f]=this.getXValue(o);n[e]="";var s=i?"paddingTop":"paddingBottom",h=i?"top":"bottom",c=i?"bottom":"top",l=this.position.y+r[s];n[h]=this.getYValue(l);n[c]="";this.css(n);this.emitEvent("layout",[this])},i.getXValue=function(n){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?n/this.layout.size.width*100+"%":n+"px"},i.getYValue=function(n){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?n/this.layout.size.height*100+"%":n+"px"},i._transitionTo=function(n,t){this.getPosition();var r=this.position.x,u=this.position.y,f=parseInt(n,10),e=parseInt(t,10),o=f===this.position.x&&e===this.position.y;if(this.setPosition(n,t),o&&!this.isTransitioning)return void this.layoutPosition();var s=n-r,h=t-u,i={};i.transform=this.getTranslate(s,h);this.transition({to:i,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},i.getTranslate=function(n,t){var i=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop");return n=i?n:-n,t=r?t:-t,"translate3d("+n+"px, "+t+"px, 0)"},i.goTo=function(n,t){this.setPosition(n,t);this.layoutPosition()},i.moveTo=i._transitionTo,i.setPosition=function(n,t){this.position.x=parseInt(n,10);this.position.y=parseInt(t,10)},i._nonTransition=function(n){this.css(n.to);n.isCleaning&&this._removeStyles(n.to);for(var t in n.onTransitionEnd)n.onTransitionEnd[t].call(this)},i.transition=function(n){var i,t,r;if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(n);i=this._transn;for(t in n.onTransitionEnd)i.onEnd[t]=n.onTransitionEnd[t];for(t in n.to)i.ingProperties[t]=!0,n.isCleaning&&(i.clean[t]=!0);n.from&&(this.css(n.from),r=this.element.offsetHeight,r=null);this.enableTransition(n.to);this.css(n.to);this.isTransitioning=!0},s="opacity,"+a(e),i.enableTransition=function(){if(!this.isTransitioning){var n=this.layout.options.transitionDuration;n="number"==typeof n?n+"ms":n;this.css({transitionProperty:s,transitionDuration:n,transitionDelay:this.staggerDelay||0});this.element.addEventListener(o,this,!1)}},i.onwebkitTransitionEnd=function(n){this.ontransitionend(n)},i.onotransitionend=function(n){this.ontransitionend(n)},h={"-webkit-transform":"transform"},i.ontransitionend=function(n){var t,i,r;n.target===this.element&&(t=this._transn,i=h[n.propertyName]||n.propertyName,(delete t.ingProperties[i],l(t.ingProperties)&&this.disableTransition(),i in t.clean&&(this.element.style[n.propertyName]="",delete t.clean[i]),i in t.onEnd)&&(r=t.onEnd[i],r.call(this),delete t.onEnd[i]),this.emitEvent("transitionEnd",[this]))},i.disableTransition=function(){this.removeTransitionStyles();this.element.removeEventListener(o,this,!1);this.isTransitioning=!1},i._removeStyles=function(n){var t={};for(var i in n)t[i]="";this.css(t)},c={transitionProperty:"",transitionDuration:"",transitionDelay:""},i.removeTransitionStyles=function(){this.css(c)},i.stagger=function(n){n=isNaN(n)?0:n;this.staggerDelay=n+"ms"},i.removeElem=function(){this.element.parentNode.removeChild(this.element);this.css({display:""});this.emitEvent("remove",[this])},i.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},i.reveal=function(){delete this.isHidden;this.css({display:""});var n=this.layout.options,t={},i=this.getHideRevealTransitionEndProperty("visibleStyle");t[i]=this.onRevealTransitionEnd;this.transition({from:n.hiddenStyle,to:n.visibleStyle,isCleaning:!0,onTransitionEnd:t})},i.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},i.getHideRevealTransitionEndProperty=function(n){var t=this.layout.options[n],i;if(t.opacity)return"opacity";for(i in t)return i},i.hide=function(){this.isHidden=!0;this.css({display:""});var n=this.layout.options,t={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");t[i]=this.onHideTransitionEnd;this.transition({from:n.visibleStyle,to:n.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},i.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},i.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},u}),function(n,t){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,r,u,f){return t(n,i,r,u,f)}):"object"==typeof module&&module.exports?module.exports=t(n,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):n.Outlayer=t(n,n.EvEmitter,n.getSize,n.fizzyUIUtils,n.Outlayer.Item)}(window,function(n,t,i,r,u){"use strict";function e(n,t){var i=r.getQueryElement(n),u,f;if(!i)return void(c&&c.error("Bad element for "+this.constructor.namespace+": "+(i||n)));this.element=i;o&&(this.$element=o(this.element));this.options=r.extend({},this.constructor.defaults);this.option(t);u=++y;this.element.outlayerGUID=u;s[u]=this;this._create();f=this._getOption("initLayout");f&&this.layout()}function h(n){function t(){n.apply(this,arguments)}return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t}function v(n){var r;if("number"==typeof n)return n;var t=n.match(/(^\d*\.?\d*)(\w*)/),i=t&&t[1],u=t&&t[2];return i.length?(i=parseFloat(i),r=a[u]||1,i*r):0}var c=n.console,o=n.jQuery,l=function(){},y=0,s={},f,a;return e.namespace="outlayer",e.Item=u,e.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},f=e.prototype,r.extend(f,t.prototype),f.option=function(n){r.extend(this.options,n)},f._getOption=function(n){var t=this.constructor.compatOptions[n];return t&&void 0!==this.options[t]?this.options[t]:this.options[n]},e.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems();this.stamps=[];this.stamp(this.options.stamp);r.extend(this.element.style,this.options.containerStyle);var n=this._getOption("resize");n&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(n){for(var u,f,i=this._filterFindItemElements(n),e=this.constructor.Item,r=[],t=0;t<i.length;t++)u=i[t],f=new e(u,this),r.push(f);return r},f._filterFindItemElements=function(n){return r.filterFindElements(n,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(n){return n.element})},f.layout=function(){this._resetLayout();this._manageStamps();var n=this._getOption("layoutInstant"),t=void 0!==n?n:!this._isLayoutInited;this.layoutItems(this.items,t);this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(n,t){var u,r=this.options[n];r?("string"==typeof r?u=this.element.querySelector(r):r instanceof HTMLElement&&(u=r),this[n]=u?i(u)[t]:r):this[n]=0},f.layoutItems=function(n,t){n=this._getItemsForLayout(n);this._layoutItems(n,t);this._postLayout()},f._getItemsForLayout=function(n){return n.filter(function(n){return!n.isIgnored})},f._layoutItems=function(n,t){if(this._emitCompleteOnItems("layout",n),n&&n.length){var i=[];n.forEach(function(n){var r=this._getItemLayoutPosition(n);r.item=n;r.isInstant=t||n.isLayoutInstant;i.push(r)},this);this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(n){this.updateStagger();n.forEach(function(n,t){this._positionItem(n.item,n.x,n.y,n.isInstant,t)},this)},f.updateStagger=function(){var n=this.options.stagger;return null===n||void 0===n?void(this.stagger=0):(this.stagger=v(n),this.stagger)},f._positionItem=function(n,t,i,r,u){r?n.goTo(t,i):(n.stagger(u*this.stagger),n.moveTo(t,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer"),n;t&&(n=this._getContainerSize(),n&&(this._setContainerMeasure(n.width,!0),this._setContainerMeasure(n.height,!1)))},f._getContainerSize=l,f._setContainerMeasure=function(n,t){if(void 0!==n){var i=this.size;i.isBorderBox&&(n+=t?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth);n=Math.max(n,0);this.element.style[t?"width":"height"]=n+"px"}},f._emitCompleteOnItems=function(n,t){function r(){e.dispatchEvent(n+"Complete",null,[t])}function f(){i++;i==u&&r()}var e=this,u=t.length,i;if(!t||!u)return void r();i=0;t.forEach(function(t){t.once(n,f)})},f.dispatchEvent=function(n,t,i){var u=t?[t].concat(i):i,r;(this.emitEvent(n,u),o)&&((this.$element=this.$element||o(this.element),t)?(r=o.Event(t),r.type=n,this.$element.trigger(r,i)):this.$element.trigger(n,i))},f.ignore=function(n){var t=this.getItem(n);t&&(t.isIgnored=!0)},f.unignore=function(n){var t=this.getItem(n);t&&delete t.isIgnored},f.stamp=function(n){n=this._find(n);n&&(this.stamps=this.stamps.concat(n),n.forEach(this.ignore,this))},f.unstamp=function(n){n=this._find(n);n&&n.forEach(function(n){r.removeFrom(this.stamps,n);this.unignore(n)},this)},f._find=function(n){if(n)return("string"==typeof n&&(n=this.element.querySelectorAll(n)),n=r.makeArray(n))},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),n=this.size;this._boundingRect={left:t.left+n.paddingLeft+n.borderLeftWidth,top:t.top+n.paddingTop+n.borderTopWidth,right:t.right-(n.paddingRight+n.borderRightWidth),bottom:t.bottom-(n.paddingBottom+n.borderBottomWidth)}},f._manageStamp=l,f._getElementOffset=function(n){var t=n.getBoundingClientRect(),r=this._boundingRect,u=i(n);return{left:t.left-r.left-u.marginLeft,top:t.top-r.top-u.marginTop,right:r.right-t.right-u.marginRight,bottom:r.bottom-t.bottom-u.marginBottom}},f.handleEvent=r.handleEvent,f.bindResize=function(){n.addEventListener("resize",this);this.isResizeBound=!0},f.unbindResize=function(){n.removeEventListener("resize",this);this.isResizeBound=!1},f.onresize=function(){this.resize()},r.debounceMethod(e,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var n=i(this.element),t=this.size&&n;return t&&n.innerWidth!==this.size.innerWidth},f.addItems=function(n){var t=this._itemize(n);return t.length&&(this.items=this.items.concat(t)),t},f.appended=function(n){var t=this.addItems(n);t.length&&(this.layoutItems(t,!0),this.reveal(t))},f.prepended=function(n){var t=this._itemize(n),i;t.length&&(i=this.items.slice(0),this.items=t.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(t,!0),this.reveal(t),this.layoutItems(i))},f.reveal=function(n){if(this._emitCompleteOnItems("reveal",n),n&&n.length){var t=this.updateStagger();n.forEach(function(n,i){n.stagger(i*t);n.reveal()})}},f.hide=function(n){if(this._emitCompleteOnItems("hide",n),n&&n.length){var t=this.updateStagger();n.forEach(function(n,i){n.stagger(i*t);n.hide()})}},f.revealItemElements=function(n){var t=this.getItems(n);this.reveal(t)},f.hideItemElements=function(n){var t=this.getItems(n);this.hide(t)},f.getItem=function(n){for(var i,t=0;t<this.items.length;t++)if(i=this.items[t],i.element==n)return i},f.getItems=function(n){n=r.makeArray(n);var t=[];return n.forEach(function(n){var i=this.getItem(n);i&&t.push(i)},this),t},f.remove=function(n){var t=this.getItems(n);this._emitCompleteOnItems("remove",t);t&&t.length&&t.forEach(function(n){n.remove();r.removeFrom(this.items,n)},this)},f.destroy=function(){var n=this.element.style,t;n.height="";n.position="";n.width="";this.items.forEach(function(n){n.destroy()});this.unbindResize();t=this.element.outlayerGUID;delete s[t];delete this.element.outlayerGUID;o&&o.removeData(this.element,this.constructor.namespace)},e.data=function(n){n=r.getQueryElement(n);var t=n&&n.outlayerGUID;return t&&s[t]},e.create=function(n,t){var i=h(e);return i.defaults=r.extend({},e.defaults),r.extend(i.defaults,t),i.compatOptions=r.extend({},e.compatOptions),i.namespace=n,i.data=e.data,i.Item=h(u),r.htmlInit(i,n),o&&o.bridget&&o.bridget(n,i),i},a={ms:1,s:1e3},e.Item=u,e}),function(n,t){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],t):"object"==typeof module&&module.exports?module.exports=t(require("outlayer")):(n.Isotope=n.Isotope||{},n.Isotope.Item=t(n.Outlayer))}(window,function(n){"use strict";function i(){n.Item.apply(this,arguments)}var t=i.prototype=Object.create(n.Item.prototype),u=t._create,r;return t._create=function(){this.id=this.layout.itemGUID++;u.call(this);this.sortData={}},t.updateSortData=function(){var t,i,n,r;if(!this.isIgnored){this.sortData.id=this.id;this.sortData["original-order"]=this.id;this.sortData.random=Math.random();t=this.layout.options.getSortData;i=this.layout._sorters;for(n in t)r=i[n],this.sortData[n]=r(this.element,this)}},r=t.destroy,t.destroy=function(){r.apply(this,arguments);this.css({display:""})},i}),function(n,t){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],t):"object"==typeof module&&module.exports?module.exports=t(require("get-size"),require("outlayer")):(n.Isotope=n.Isotope||{},n.Isotope.LayoutMode=t(n.getSize,n.Outlayer))}(window,function(n,t){"use strict";function r(n){this.isotope=n;n&&(this.options=n.options[this.namespace],this.element=n.element,this.items=n.filteredItems,this.size=n.size)}var i=r.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(n){i[n]=function(){return t.prototype[n].apply(this.isotope,arguments)}}),i.needsVerticalResizeLayout=function(){var t=n(this.isotope.element),i=this.isotope.size&&t;return i&&t.innerHeight!=this.isotope.size.innerHeight},i._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.getRowHeight=function(){this.getSegmentSize("row","Height")},i.getSegmentSize=function(n,t){var i=n+t,u="outer"+t,r;(this._getMeasurement(i,u),this[i])||(r=this.getFirstItemSize(),this[i]=r&&r[u]||this.isotope.size["inner"+t])},i.getFirstItemSize=function(){var t=this.isotope.filteredItems[0];return t&&t.element&&n(t.element)},i.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.getSize=function(){this.isotope.getSize();this.size=this.isotope.size},r.modes={},r.create=function(n,t){function u(){r.apply(this,arguments)}return u.prototype=Object.create(i),u.prototype.constructor=u,t&&(u.options=t),u.prototype.namespace=n,r.modes[n]=u,u},r}),function(n,t){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("outlayer"),require("get-size")):n.Masonry=t(n.Outlayer,n.getSize)}(window,function(n,t){var i=n.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize();this._getMeasurement("columnWidth","outerWidth");this._getMeasurement("gutter","outerWidth");this.measureColumns();this.colYs=[];for(var n=0;n<this.cols;n++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){var n,i;(this.getContainerWidth(),this.columnWidth)||(n=this.items[0],i=n&&n.element,this.columnWidth=i&&t(i).outerWidth||this.containerWidth);var r=this.columnWidth+=this.gutter,f=this.containerWidth+this.gutter,u=f/r,e=r-f%r,o=e&&1>e?"round":"floor";u=Math[o](u);this.cols=Math.max(u,1)},i.prototype.getContainerWidth=function(){var i=this._getOption("fitWidth"),r=i?this.element.parentNode:this.element,n=t(r);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(n){n.getSize();var f=n.size.outerWidth%this.columnWidth,o=f&&1>f?"round":"ceil",t=Math[o](n.size.outerWidth/this.columnWidth);t=Math.min(t,this.cols);for(var i=this._getColGroup(t),r=Math.min.apply(Math,i),e=i.indexOf(r),s={x:this.columnWidth*e,y:r},h=r+n.size.outerHeight,c=this.cols+1-i.length,u=0;c>u;u++)this.colYs[e+u]=h;return s},i.prototype._getColGroup=function(n){var r;if(2>n)return this.colYs;for(var i=[],u=this.cols+1-n,t=0;u>t;t++)r=this.colYs.slice(t,t+n),i[t]=Math.max.apply(Math,r);return i},i.prototype._manageStamp=function(n){var e=t(n),r=this._getElementOffset(n),h=this._getOption("originLeft"),o=h?r.left:r.right,s=o+e.outerWidth,f=Math.floor(o/this.columnWidth),i;f=Math.max(0,f);i=Math.floor(s/this.columnWidth);i-=s%this.columnWidth?0:1;i=Math.min(this.cols-1,i);for(var c=this._getOption("originTop"),l=(c?r.top:r.bottom)+e.outerHeight,u=f;i>=u;u++)this.colYs[u]=Math.max(l,this.colYs[u])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var n={height:this.maxY};return this._getOption("fitWidth")&&(n.width=this._getContainerFitWidth()),n},i.prototype._getContainerFitWidth=function(){for(var n=0,t=this.cols;--t&&0===this.colYs[t];)n++;return(this.cols-n)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var n=this.containerWidth;return this.getContainerWidth(),n!=this.containerWidth},i}),function(n,t){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],t):"object"==typeof module&&module.exports?module.exports=t(require("../layout-mode"),require("masonry-layout")):t(n.Isotope.LayoutMode,n.Masonry)}(window,function(n,t){"use strict";var u=n.create("masonry"),i=u.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0},r,f,e;for(r in t.prototype)o[r]||(i[r]=t.prototype[r]);return f=i.measureColumns,i.measureColumns=function(){this.items=this.isotope.filteredItems;f.call(this)},e=i._getOption,i._getOption=function(n){return"fitWidth"==n?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:e.apply(this.isotope,arguments)},u}),function(n,t){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],t):"object"==typeof exports?module.exports=t(require("../layout-mode")):t(n.Isotope.LayoutMode)}(window,function(n){"use strict";var i=n.create("fitRows"),t=i.prototype;return t._resetLayout=function(){this.x=0;this.y=0;this.maxY=0;this._getMeasurement("gutter","outerWidth")},t._getItemLayoutPosition=function(n){var t,i,r;return n.getSize(),t=n.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter,0!==this.x&&t+this.x>i&&(this.x=0,this.y=this.maxY),r={x:this.x,y:this.y},this.maxY=Math.max(this.maxY,this.y+n.size.outerHeight),this.x+=t,r},t._getContainerSize=function(){return{height:this.maxY}},i}),function(n,t){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],t):"object"==typeof module&&module.exports?module.exports=t(require("../layout-mode")):t(n.Isotope.LayoutMode)}(window,function(n){"use strict";var i=n.create("vertical",{horizontalAlignment:0}),t=i.prototype;return t._resetLayout=function(){this.y=0},t._getItemLayoutPosition=function(n){n.getSize();var t=(this.isotope.size.innerWidth-n.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=n.size.outerHeight,{x:t,y:i}},t._getContainerSize=function(){return{height:this.y}},i}),function(n,t){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,r,u,f,e,o){return t(n,i,r,u,f,e,o)}):"object"==typeof module&&module.exports?module.exports=t(n,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):n.Isotope=t(n,n.Outlayer,n.getSize,n.matchesSelector,n.fizzyUIUtils,n.Isotope.Item,n.Isotope.LayoutMode)}(window,function(n,t,i,r,u,f,e){function a(n,t){return function(i,r){for(var s,h,u=0;u<n.length;u++){var f=n[u],e=i.sortData[f],o=r.sortData[f];if(e>o||o>e)return s=void 0!==t[f]?t[f]:t,h=s?1:-1,(e>o?1:-1)*h}return 0}}var h=n.jQuery,v=String.prototype.trim?function(n){return n.trim()}:function(n){return n.replace(/^\s+|\s+$/g,"")},s=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0}),o,c,l;return s.Item=f,s.LayoutMode=e,o=s.prototype,o._create=function(){this.itemGUID=0;this._sorters={};this._getSorters();t.prototype._create.call(this);this.modes={};this.filteredItems=this.items;this.sortHistory=["original-order"];for(var n in e.modes)this._initLayoutMode(n)},o.reloadItems=function(){this.itemGUID=0;t.prototype.reloadItems.call(this)},o._itemize=function(){for(var r,n=t.prototype._itemize.apply(this,arguments),i=0;i<n.length;i++)r=n[i],r.id=this.itemGUID++;return this._updateItemsSortData(n),n},o._initLayoutMode=function(n){var t=e.modes[n],i=this.options[n]||{};this.options[n]=t.options?u.extend(t.options,i):i;this.modes[n]=new t(this)},o.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},o._layout=function(){var n=this._getIsInstant();this._resetLayout();this._manageStamps();this.layoutItems(this.filteredItems,n);this._isLayoutInited=!0},o.arrange=function(n){this.option(n);this._getIsInstant();var t=this._filter(this.items);this.filteredItems=t.matches;this._bindArrangeComplete();this._isInstant?this._noTransition(this._hideReveal,[t]):this._hideReveal(t);this._sort();this._layout()},o._init=o.arrange,o._hideReveal=function(n){this.reveal(n.needReveal);this.hide(n.needHide)},o._getIsInstant=function(){var n=this._getOption("layoutInstant"),t=void 0!==n?n:!this._isLayoutInited;return this._isInstant=t,t},o._bindArrangeComplete=function(){function n(){t&&i&&r&&u.dispatchEvent("arrangeComplete",null,[u.filteredItems])}var t,i,r,u=this;this.once("layoutComplete",function(){t=!0;n()});this.once("hideComplete",function(){i=!0;n()});this.once("revealComplete",function(){r=!0;n()})},o._filter=function(n){var r=this.options.filter,t,i;r=r||"*";for(var f=[],e=[],o=[],s=this._getFilterTest(r),u=0;u<n.length;u++)t=n[u],t.isIgnored||(i=s(t),i&&f.push(t),i&&t.isHidden?e.push(t):i||t.isHidden||o.push(t));return{matches:f,needReveal:e,needHide:o}},o._getFilterTest=function(n){return h&&this.options.isJQueryFiltering?function(t){return h(t.element).is(n)}:"function"==typeof n?function(t){return n(t.element)}:function(t){return r(t.element,n)}},o.updateSortData=function(n){var t;n?(n=u.makeArray(n),t=this.getItems(n)):t=this.items;this._getSorters();this._updateItemsSortData(t)},o._getSorters=function(){var t=this.options.getSortData,n,i;for(n in t)i=t[n],this._sorters[n]=c(i)},o._updateItemsSortData=function(n){for(var r,i=n&&n.length,t=0;i&&i>t;t++)r=n[t],r.updateSortData()},c=function(){function n(n){if("string"!=typeof n)return n;var i=v(n).split(" "),r=i[0],u=r.match(/^\[(.+)\]$/),o=u&&u[1],f=t(o,r),e=s.sortDataParsers[i[1]];return e?function(n){return n&&e(f(n))}:function(n){return n&&f(n)}}function t(n,t){return n?function(t){return t.getAttribute(n)}:function(n){var i=n.querySelector(t);return i&&i.textContent}}return n}(),s.sortDataParsers={parseInt:function(n){return parseInt(n,10)},parseFloat:function(n){return parseFloat(n)}},o._sort=function(){var n=this.options.sortBy,t,i;n&&(t=[].concat.apply(n,this.sortHistory),i=a(t,this.options.sortAscending),this.filteredItems.sort(i),n!=this.sortHistory[0]&&this.sortHistory.unshift(n))},o._mode=function(){var n=this.options.layoutMode,t=this.modes[n];if(!t)throw new Error("No layout mode: "+n);return t.options=this.options[n],t},o._resetLayout=function(){t.prototype._resetLayout.call(this);this._mode()._resetLayout()},o._getItemLayoutPosition=function(n){return this._mode()._getItemLayoutPosition(n)},o._manageStamp=function(n){this._mode()._manageStamp(n)},o._getContainerSize=function(){return this._mode()._getContainerSize()},o.needsResizeLayout=function(){return this._mode().needsResizeLayout()},o.appended=function(n){var t=this.addItems(n),i;t.length&&(i=this._filterRevealAdded(t),this.filteredItems=this.filteredItems.concat(i))},o.prepended=function(n){var t=this._itemize(n),i;t.length&&(this._resetLayout(),this._manageStamps(),i=this._filterRevealAdded(t),this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=t.concat(this.items))},o._filterRevealAdded=function(n){var t=this._filter(n);return this.hide(t.needHide),this.reveal(t.matches),this.layoutItems(t.matches,!0),t.matches},o.insert=function(n){var i=this.addItems(n),t,u,r,f;if(i.length){for(r=i.length,t=0;r>t;t++)u=i[t],this.element.appendChild(u.element);for(f=this._filter(i).matches,t=0;r>t;t++)i[t].isLayoutInstant=!0;for(this.arrange(),t=0;r>t;t++)delete i[t].isLayoutInstant;this.reveal(f)}},l=o.remove,o.remove=function(n){var t,r,i,f;for(n=u.makeArray(n),t=this.getItems(n),l.call(this,n),r=t&&t.length,i=0;r&&r>i;i++)f=t[i],u.removeFrom(this.filteredItems,f)},o.shuffle=function(){for(var t,n=0;n<this.items.length;n++)t=this.items[n],t.sortData.random=Math.random();this.options.sortBy="random";this._sort();this._layout()},o._noTransition=function(n,t){var r=this.options.transitionDuration,i;return this.options.transitionDuration=0,i=n.apply(this,t),this.options.transitionDuration=r,i},o.getFilteredItemElements=function(){return this.filteredItems.map(function(n){return n.element})},s}),function(n,t){function at(){var n=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(n=!0):n=!1,n}function vt(i,f){var e,l,d,rt,a,y,o,g,h,ft,s;if((f.navigationStyle=="preview1"||f.navigationStyle=="preview3"||f.navigationStyle=="preview4")&&(f.soloArrowLeftHalign="left",f.soloArrowLeftValign="center",f.soloArrowLeftHOffset=0,f.soloArrowLeftVOffset=0,f.soloArrowRightHalign="right",f.soloArrowRightValign="center",f.soloArrowRightHOffset=0,f.soloArrowRightVOffset=0,f.navigationArrows="solo"),f.simplifyAll=="on"&&(u(8)||at())&&(i.find(".tp-caption").each(function(){var t=n(this);t.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout");t.data("splitin","");t.data("speed",400)}),i.find(">ul>li").each(function(){var t=n(this),i;t.data("transition","fade");t.data("masterspeed",500);t.data("slotamount",1);i=t.find(">img").first();i.data("kenburns","off")})),f.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),f.fullWidth!="on"&&f.fullScreen!="on"&&(f.autoHeight="off"),f.fullScreen=="on"&&(f.autoHeight="on"),f.fullWidth!="on"&&f.fullScreen!="on"&&(forceFulWidth="off"),f.fullWidth=="on"&&f.autoHeight=="off"&&i.css({maxHeight:f.startheight+"px"}),r()&&f.hideThumbsOnMobile=="on"&&f.navigationType=="thumb"&&(f.navigationType="none"),r()&&f.hideBulletsOnMobile=="on"&&f.navigationType=="bullet"&&(f.navigationType="none"),r()&&f.hideBulletsOnMobile=="on"&&f.navigationType=="both"&&(f.navigationType="none"),r()&&f.hCode2nightrrowsOnMobile=="on"&&(f.navigationArrows="none"),f.forceFullWidth=="on"&&i.closest(".forcefullwidth_wrapper_tp_banner").length==0){var h=i.parent().offset().left,p=i.parent().css("marginBottom"),w=i.parent().css("marginTop");p==t&&(p=0);w==t&&(w=0);i.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+w+";margin-bottom:"+p+'" class="forcefullwidth_wrapper_tp_banner"><\/div>');i.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+i.height()+'px"><\/div>');i.css({backgroundColor:i.parent().css("backgroundColor"),backgroundImage:i.parent().css("backgroundImage")});i.parent().css({left:0-h+"px",position:"absolute",width:n(window).width()});f.width=n(window).width()}try{f.hideThumbsUnderResolution>n(window).width()&&f.hideThumbsUnderResolution!=0?i.parent().find(".tp-bullets.tp-thumbs").css({display:"none"}):i.parent().find(".tp-bullets.tp-thumbs").css({display:"block"})}catch(et){}if(!i.hasClass("revslider-initialised")){i.addClass("revslider-initialised");i.attr("id")==t&&i.attr("id","revslider-"+Math.round(Math.random()*1e3+5));f.firefox13=!1;f.ie=!n.support.opacity;f.ie9=document.documentMode==9;f.origcd=f.delay;var c=n.fn.jquery.split("."),nt=parseFloat(c[0]),ut=parseFloat(c[1]),ot=parseFloat(c[2]||"0");nt==1&&ut<7&&i.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+c+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin<\/div>");nt>1&&(f.ie=!1);n.support.transition||(n.fn.transition=n.fn.animate);i.find(".caption").each(function(){n(this).addClass("tp-caption")});r()&&i.find(".tp-caption").each(function(){var t=n(this);(t.data("autoplayonlyfirsttime")==!0||t.data("autoplayonlyfirsttime")=="true")&&t.data("autoplayonlyfirsttime","false");(t.data("autoplay")==!0||t.data("autoplay")=="true")&&t.data("autoplay",!1)});var tt=0,it=0,k="http";if(location.protocol==="https:"&&(k="https"),i.find(".tp-caption").each(function(){var u,f,e,i,r;try{(n(this).data("ytid")!=t||n(this).find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&tt==0&&(tt=1,u=document.createElement("script"),f="https",u.src=f+"://www.youtube.com/iframe_api",i=document.getElementsByTagName("script")[0],r=!0,n("head").find("*").each(function(){n(this).attr("src")==f+"://www.youtube.com/iframe_api"&&(r=!1)}),r&&i.parentNode.insertBefore(u,i))}catch(o){}try{(n(this).data("vimeoid")!=t||n(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&it==0&&(it=1,e=document.createElement("script"),e.src=k+"://a.vimeocdn.com/js/froogaloop2.min.js",i=document.getElementsByTagName("script")[0],r=!0,n("head").find("*").each(function(){n(this).attr("src")==k+"://a.vimeocdn.com/js/froogaloop2.min.js"&&(r=!1)}),r&&i.parentNode.insertBefore(e,i))}catch(o){}try{n(this).data("videomp4")!=t||n(this).data("videowebm")!=t}catch(o){}}),i.find(".tp-caption video").each(function(){n(this).removeClass("video-js").removeClass("vjs-default-skin");n(this).attr("preload","");n(this).css({display:"none"})}),f.shuffle=="on"){for(e={},l=i.find(">ul:first-child >li:first-child"),e.fstransition=l.data("fstransition"),e.fsmasterspeed=l.data("fsmasterspeed"),e.fsslotamount=l.data("fsslotamount"),d=0;d<i.find(">ul:first-child >li").length;d++)rt=Math.round(Math.random()*i.find(">ul:first-child >li").length),i.find(">ul:first-child >li:eq("+rt+")").prependTo(i.find(">ul:first-child"));a=i.find(">ul:first-child >li:first-child");a.data("fstransition",e.fstransition);a.data("fsmasterspeed",e.fsmasterspeed);a.data("fsslotamount",e.fsslotamount)}f.slots=4;f.act=-1;f.next=0;f.startWithSlide!=t&&(f.next=f.startWithSlide);y=pt("#")[0];y.length<9&&y.split("slide").length>1&&(o=parseInt(y.split("slide")[1],0),o<1&&(o=1),o>i.find(">ul:first >li").length&&(o=i.find(">ul:first >li").length),f.next=o-1);f.firststart=1;f.navigationHOffset==t&&(f.navOffsetHorizontal=0);f.navigationVOffset==t&&(f.navOffsetVertical=0);i.append('<div class="tp-loader '+f.spinner+'"><div class="dot1"><\/div><div class="dot2"><\/div><div class="bounce1"><\/div><div class="bounce2"><\/div><div class="bounce3"><\/div><\/div>');i.find(".tp-bannertimer").length==0&&i.append('<div class="tp-bannertimer" style="visibility:hidden"><\/div>');g=i.find(".tp-bannertimer");g.length>0&&g.css({width:"0%"});i.addClass("tp-simpleresponsive");f.container=i;f.slCode2nightmount=i.find(">ul:first >li").length;i.height()==0&&i.height(f.startheight);(f.startwidth==t||f.startwidth==0)&&(f.startwidth=i.width());(f.startheight==t||f.startheight==0)&&(f.startheight=i.height());f.width=i.width();f.height=i.height();f.bw=f.startwidth/i.width();f.bh=f.startheight/i.height();f.width!=f.startwidth&&(f.height=Math.round(f.startheight*(f.width/f.startwidth)),i.height(f.height));f.shadow!=0&&(i.parent().append('<div class="tp-bannershadow tp-shadow'+f.shadow+'"><\/div>'),h=0,f.forceFullWidth=="on"&&(h=0-f.container.parent().offset().left),i.parent().find(".tp-bannershadow").css({width:f.width,left:h}));i.find("ul").css({display:"none"});ft=i;i.find("ul").css({display:"block"});ti(i,f);f.parallax!="off"&&yi(i,f);f.slCode2nightmount>1&&wt(i,f);f.slCode2nightmount>1&&f.navigationType=="thumb"&&pi(i,f);f.slCode2nightmount>1&&bt(i,f);f.keyboardNavigation=="on"&&kt(i,f);dt(i,f);f.hideThumbs>0&&gt(i,f);b(i,f);f.slCode2nightmount>1&&ai(i,f);setTimeout(function(){i.trigger("revolution.slide.onloaded")},500);n("body").data("rs-fullScreenMode",!1);n(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange",function(){n("body").data("rs-fullScreenMode",!n("body").data("rs-fullScreenMode"));n("body").data("rs-fullScreenMode")&&setTimeout(function(){n(window).trigger("resize")},200)});n(window).resize(function(){if(n("body").find(i)!=0&&f.forceFullWidth=="on"){var t=f.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;f.container.parent().css({left:0-t+"px",width:n(window).width()})}(i.outerWidth(!0)!=f.width||i.is(":hidden"))&&v(i,f)});try{f.hideThumbsUnderResoluition!=0&&f.navigationType=="thumb"&&(f.hideThumbsUnderResoluition>n(window).width()?n(".tp-bullets").css({display:"none"}):n(".tp-bullets").css({display:"block"}))}catch(et){}i.find(".tp-scrollbelowslider").on("click",function(){var t=0;try{t=n("body").find(f.fullScreenOffsetContainer).height()}catch(r){}try{t=t-parseInt(n(this).data("scrolloffset"),0)}catch(r){}n("body,html").animate({scrollTop:i.offset().top+i.find(">ul >li").height()-t+"px"},{duration:400})});s=i.parent();n(window).width()<f.hideSliderAtLimit&&(i.trigger("stoptimer"),s.css("display")!="none"&&s.data("olddisplay",s.css("display")),s.css({display:"none"}));yt(i,f)}}n.fn.extend({revolution:function(i){return defaults={delay:9e3,startheight:500,startwidth:960,fullScreenAlignForce:"off",autoHeight:"off",hideTimerBar:"off",hideThumbs:200,hideNavDelayOnMobile:1500,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"bullet",navigationArrows:"solo",navigationInGrid:"off",hideThumbsOnMobile:"off",hideBulletsOnMobile:"off",hCode2nightrrowsOnMobile:"off",hideThumbsUnderResoluition:0,navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,keyboardNavigation:"on",touchenabled:"on",onHoverStop:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hCode2nightllCaptionAtLimit:0,hideSliderAtLimit:0,shadow:0,fullWidth:"off",fullScreen:"off",minFullScreenHeight:0,fullScreenOffsetContainer:"",fullScreenOffset:"0",dottedOverlay:"none",forceFullWidth:"off",spinner:"spinner0",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,isJoomla:!1,parallax:"off",parallaxLevels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],parallaxBgFreeze:"off",parallaxOpacity:"on",parallaxDisableOnMobile:"off",panZoomDisableOnMobile:"off",simplifyAll:"on",minHeight:0,nextSlideOnWindowFocus:"off"},i=n.extend({},defaults,i),this.each(function(){if(window.tplogs==!0)try{console.groupCollapsed("Slider Revolution 4.6.0 Initialisation on "+n(this).attr("id"));console.groupCollapsed("Used Options:");console.info(i);console.groupEnd();console.groupCollapsed("Tween Engine:")}catch(r){}if(punchgs.TweenLite==t){if(window.tplogs==!0)try{console.error("GreenSock Engine Does not Exist!")}catch(r){}return!1}if(punchgs.force3D=!0,window.tplogs==!0)try{console.info("GreenSock Engine Version in Slider Revolution:"+punchgs.TweenLite.version)}catch(r){}if(i.simplifyAll=="on"||(punchgs.TweenLite.lagSmoothing(1e3,16),punchgs.force3D="true"),window.tplogs==!0)try{console.groupEnd();console.groupEnd()}catch(r){}vt(n(this),i)})},revscroll:function(t){return this.each(function(){var i=n(this);n("body,html").animate({scrollTop:i.offset().top+i.find(">ul >li").height()-t+"px"},{duration:400})})},revredraw:function(){return this.each(function(){var t=n(this),i=t.parent().find(".tp-bannertimer"),r=i.data("opt");v(t,r)})},revpause:function(){return this.each(function(){var t=n(this),i,r;t.data("conthover",1);t.data("conthover-changed",1);t.trigger("revolution.slide.onpause");i=t.parent().find(".tp-bannertimer");r=i.data("opt");r.bannertimeronpause=!0;t.trigger("stoptimer")})},revresume:function(){return this.each(function(){var t=n(this),i,r;t.data("conthover",0);t.data("conthover-changed",1);t.trigger("revolution.slide.onresume");i=t.parent().find(".tp-bannertimer");r=i.data("opt");r.bannertimeronpause=!1;t.trigger("starttimer")})},revnext:function(){return this.each(function(){var t=n(this);t.parent().find(".tp-rightarrow").click()})},revprev:function(){return this.each(function(){var t=n(this);t.parent().find(".tp-leftarrow").click()})},revmaxslide:function(){return n(this).find(">ul:first-child >li").length},revcurrentslide:function(){var t=n(this),i=t.parent().find(".tp-bannertimer"),r=i.data("opt");return r.act},revlastslide:function(){var t=n(this),i=t.parent().find(".tp-bannertimer"),r=i.data("opt");return r.lastslide},revshowslide:function(t){return this.each(function(){var i=n(this);i.data("showus",t);i.parent().find(".tp-rightarrow").click()})}});var wi=function(){var n,t,i={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(n in i)if(n in document){t=i[n];break}return function(i){return i&&document.addEventListener(t,i),!document[n]}}(),yt=function(i,r){var u=document.documentMode===t,f=window.chrome;if(u&&!f)n(window).on("focusin",function(){setTimeout(function(){r.nextSlideOnWindowFocus=="on"&&i.revnext();i.revredraw()},300)}).on("focusout",function(){});else window.addEventListener?(window.addEventListener("focus",function(){setTimeout(function(){r.nextSlideOnWindowFocus=="on"&&i.revnext();i.revredraw()},300)},!1),window.addEventListener("blur",function(){},!1)):(window.attachEvent("focus",function(){setTimeout(function(){r.nextSlideOnWindowFocus=="on"&&i.revnext();i.revredraw()},300)}),window.attachEvent("blur",function(){}))},pt=function(n){for(var u=[],i,r=window.location.href.slice(window.location.href.indexOf(n)+1).split("_"),t=0;t<r.length;t++)r[t]=r[t].replace("%3D","="),i=r[t].split("="),u.push(i[0]),u[i[0]]=i[1];return u},v=function(i,u){var f,h,l,c,a,s;try{u.hideThumbsUnderResoluition!=0&&u.navigationType=="thumb"&&(u.hideThumbsUnderResoluition>n(window).width()?n(".tp-bullets").css({display:"none"}):n(".tp-bullets").css({display:"block"}))}catch(y){}i.find(".defaultimg").each(function(){e(n(this),u)});f=i.parent();n(window).width()<u.hideSliderAtLimit?(i.trigger("stoptimer"),f.css("display")!="none"&&f.data("olddisplay",f.css("display")),f.css({display:"none"})):i.is(":hidden")&&(f.data("olddisplay")!=t&&f.data("olddisplay")!="undefined"&&f.data("olddisplay")!="none"?f.css({display:f.data("olddisplay")}):f.css({display:"block"}),i.trigger("restarttimer"),setTimeout(function(){v(i,u)},150));h=0;u.forceFullWidth=="on"&&(h=0-u.container.parent().offset().left);try{i.parent().find(".tp-bannershadow").css({width:u.width,left:h})}catch(y){}l=i.find(">ul >li:eq("+u.act+") .slotholder");c=i.find(">ul >li:eq("+u.next+") .slotholder");p(i,u,i);punchgs.TweenLite.set(c.find(".defaultimg"),{opacity:0});l.find(".defaultimg").css({opacity:1});c.find(".defaultimg").each(function(){var f=n(this);u.panZoomDisableOnMobile=="on"&&r()||f.data("kenburn")!=t&&(f.data("kenburn").restart(),nt(i,u,!0))});a=i.find(">ul >li:eq("+u.next+")");s=i.parent().find(".tparrows");s.hasClass("preview2")&&s.css({width:parseInt(s.css("minWidth"),0)});et(a,u,!0);o(i,u)},u=function(t,i){var r=n('<div style="display:none;"/>').appendTo(n("body")),u;return r.html("<!--[if "+(i||"")+" IE "+(t||"")+"]><a>&nbsp;<\/a><![endif]-->"),u=r.find("a").length,r.remove(),u},f=function(n,t){n.next==t.find(">ul >li").length-1&&(n.looptogo=n.looptogo-1,n.looptogo<=0&&(n.stopLoop="on"));b(t,n)},wt=function(t,i){var u="hidebullets",r;i.hideThumbs==0&&(u="");(i.navigationType=="bullet"||i.navigationType=="both")&&t.parent().append('<div class="tp-bullets '+u+" simplebullets "+i.navigationStyle+'"><\/div>');r=t.parent().find(".tp-bullets");t.find(">ul:first >li").each(function(n){var u=t.find(">ul:first >li:eq("+n+") img:first").attr("src"),i;r.append('<div class="bullet"><\/div>');i=r.find(".bullet:first")});r.find(".bullet").each(function(r){var u=n(this);r==i.slCode2nightmount-1&&u.addClass("last");r==0&&u.addClass("first");u.click(function(){var n=!1;i.navigationArrows=="withbullet"||i.navigationArrows=="nexttobullets"?u.index()-1==i.act&&(n=!0):u.index()==i.act&&(n=!0);i.transition!=0||n||(i.next=i.navigationArrows=="withbullet"||i.navigationArrows=="nexttobullets"?u.index()-1:u.index(),f(i,t))})});r.append('<div class="tpclear"><\/div>');o(t,i)},bt=function(n,i){function u(t){n.parent().append('<div style="'+e+'" class="tp-'+t+"arrow "+s+" tparrows "+r+'"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"><\/div><div class="tp-arr-imgholder2"><\/div><div class="tp-arr-titleholder"><\/div><div class="tp-arr-subtitleholder"><\/div><\/div><\/div><\/div>')}var h=n.find(".tp-bullets"),e="",s="hCode2nightrrows",r;i.hideThumbs==0&&(s="");r=i.navigationStyle;i.navigationArrows=="none"&&(e="visibility:hidden;display:none");i.soloArrowStyle="default "+i.navigationStyle;i.navigationArrows!="none"&&i.navigationArrows!="nexttobullets"&&(r=i.soloArrowStyle);u("left");u("right");n.parent().find(".tp-rightarrow").click(function(){i.transition==0&&(i.next=n.data("showus")!=t&&n.data("showus")!=-1?n.data("showus")-1:i.next+1,n.data("showus",-1),i.next>=i.slCode2nightmount&&(i.next=0),i.next<0&&(i.next=0),i.act!=i.next&&f(i,n))});n.parent().find(".tp-leftarrow").click(function(){i.transition==0&&(i.next=i.next-1,i.leftarrowpressed=1,i.next<0&&(i.next=i.slCode2nightmount-1),f(i,n))});o(n,i)},kt=function(i,r){n(document).keydown(function(n){r.transition==0&&n.keyCode==39&&(r.next=i.data("showus")!=t&&i.data("showus")!=-1?i.data("showus")-1:r.next+1,i.data("showus",-1),r.next>=r.slCode2nightmount&&(r.next=0),r.next<0&&(r.next=0),r.act!=r.next&&f(r,i));r.transition==0&&n.keyCode==37&&(r.next=r.next-1,r.leftarrowpressed=1,r.next<0&&(r.next=r.slCode2nightmount-1),f(r,i))});o(i,r)},dt=function(t,i){var r="vertical";i.touchenabled=="on"&&(i.drag_block_vertical==!0&&(r="none"),t.swipe({allowPageScroll:r,fingers:i.swipe_min_touches,treshold:i.swipe_treshold,swipe:function(u,e){switch(e){case"left":i.transition==0&&(i.next=i.next+1,i.next==i.slCode2nightmount&&(i.next=0),f(i,t));break;case"right":i.transition==0&&(i.next=i.next-1,i.leftarrowpressed=1,i.next<0&&(i.next=i.slCode2nightmount-1),f(i,t));break;case"up":r=="none"&&n("html, body").animate({scrollTop:t.offset().top+t.height()+"px"});break;case"down":r=="none"&&n("html, body").animate({scrollTop:t.offset().top-n(window).height()+"px"})}}}))},gt=function(n,t){var i=n.parent().find(".tp-bullets"),u=n.parent().find(".tparrows");if(i==null&&(n.append('<div class=".tp-bullets"><\/div>'),i=n.parent().find(".tp-bullets")),u==null&&(n.append('<div class=".tparrows"><\/div>'),u=n.parent().find(".tparrows")),n.data("hideThumbs",t.hideThumbs),i.addClass("hidebullets"),u.addClass("hCode2nightrrows"),r())try{n.hammer().on("touch",function(){n.addClass("hovered");t.onHoverStop=="on"&&n.trigger("stoptimer");clearTimeout(n.data("hideThumbs"));i.removeClass("hidebullets");u.removeClass("hCode2nightrrows")});n.hammer().on("release",function(){n.removeClass("hovered");n.trigger("starttimer");n.hasClass("hovered")||i.hasClass("hovered")||n.data("hideThumbs",setTimeout(function(){i.addClass("hidebullets");u.addClass("hCode2nightrrows");n.trigger("starttimer")},t.hideNavDelayOnMobile))})}catch(f){}else{i.hover(function(){t.overnav=!0;t.onHoverStop=="on"&&n.trigger("stoptimer");i.addClass("hovered");clearTimeout(n.data("hideThumbs"));i.removeClass("hidebullets");u.removeClass("hCode2nightrrows")},function(){t.overnav=!1;n.trigger("starttimer");i.removeClass("hovered");n.hasClass("hovered")||i.hasClass("hovered")||n.data("hideThumbs",setTimeout(function(){i.addClass("hidebullets");u.addClass("hCode2nightrrows")},t.hideThumbs))});u.hover(function(){t.overnav=!0;t.onHoverStop=="on"&&n.trigger("stoptimer");i.addClass("hovered");clearTimeout(n.data("hideThumbs"));i.removeClass("hidebullets");u.removeClass("hCode2nightrrows")},function(){t.overnav=!1;n.trigger("starttimer");i.removeClass("hovered")});n.on("mouseenter",function(){n.addClass("hovered");t.onHoverStop=="on"&&n.trigger("stoptimer");clearTimeout(n.data("hideThumbs"));i.removeClass("hidebullets");u.removeClass("hCode2nightrrows")});n.on("mouseleave",function(){n.removeClass("hovered");n.trigger("starttimer");n.hasClass("hovered")||i.hasClass("hovered")||n.data("hideThumbs",setTimeout(function(){i.addClass("hidebullets");u.addClass("hCode2nightrrows")},t.hideThumbs))})}},o=function(t,i){var h=t.parent(),f=h.find(".tp-bullets"),s,r,u,e,o,c;i.navigationType=="thumb"&&(f.find(".thumb").each(function(){var t=n(this);t.css({width:i.thumbWidth*i.bw+"px",height:i.thumbHeight*i.bh+"px"})}),s=f.find(".tp-mask"),s.width(i.thumbWidth*i.thumbAmount*i.bw),s.height(i.thumbHeight*i.bh),s.parent().width(i.thumbWidth*i.thumbAmount*i.bw),s.parent().height(i.thumbHeight*i.bh));r=h.find(".tp-leftarrow");u=h.find(".tp-rightarrow");i.navigationType=="thumb"&&i.navigationArrows=="nexttobullets"&&(i.navigationArrows="solo");i.navigationArrows=="nexttobullets"&&(r.prependTo(f).css({float:"left"}),u.insertBefore(f.find(".tpclear")).css({float:"left"}));e=0;i.forceFullWidth=="on"&&(e=0-i.container.parent().offset().left);o=0;c=0;i.navigationInGrid=="on"&&(o=t.width()>i.startwidth?(t.width()-i.startwidth)/2:0,c=t.height()>i.startheight?(t.height()-i.startheight)/2:0);i.navigationArrows!="none"&&i.navigationArrows!="nexttobullets"&&(r.css({position:"absolute"}),u.css({position:"absolute"}),i.soloArrowLeftValign=="center"&&r.css({top:"50%",marginTop:i.soloArrowLeftVOffset-Math.round(r.innerHeight()/2)+"px"}),i.soloArrowLeftValign=="bottom"&&r.css({top:"auto",bottom:0+i.soloArrowLeftVOffset+"px"}),i.soloArrowLeftValign=="top"&&r.css({bottom:"auto",top:0+i.soloArrowLeftVOffset+"px"}),i.soloArrowLeftHalign=="center"&&r.css({left:"50%",marginLeft:e+i.soloArrowLeftHOffset-Math.round(r.innerWidth()/2)+"px"}),i.soloArrowLeftHalign=="left"&&r.css({left:o+i.soloArrowLeftHOffset+e+"px"}),i.soloArrowLeftHalign=="right"&&r.css({right:o+i.soloArrowLeftHOffset-e+"px"}),i.soloArrowRightValign=="center"&&u.css({top:"50%",marginTop:i.soloArrowRightVOffset-Math.round(u.innerHeight()/2)+"px"}),i.soloArrowRightValign=="bottom"&&u.css({top:"auto",bottom:0+i.soloArrowRightVOffset+"px"}),i.soloArrowRightValign=="top"&&u.css({bottom:"auto",top:0+i.soloArrowRightVOffset+"px"}),i.soloArrowRightHalign=="center"&&u.css({left:"50%",marginLeft:e+i.soloArrowRightHOffset-Math.round(u.innerWidth()/2)+"px"}),i.soloArrowRightHalign=="left"&&u.css({left:o+i.soloArrowRightHOffset+e+"px"}),i.soloArrowRightHalign=="right"&&u.css({right:o+i.soloArrowRightHOffset-e+"px"}),r.position()!=null&&r.css({top:Math.round(parseInt(r.position().top,0))+"px"}),u.position()!=null&&u.css({top:Math.round(parseInt(u.position().top,0))+"px"}));i.navigationArrows=="none"&&(r.css({visibility:"hidden"}),u.css({visibility:"hidden"}));i.navigationVAlign=="center"&&f.css({top:"50%",marginTop:i.navigationVOffset-Math.round(f.innerHeight()/2)+"px"});i.navigationVAlign=="bottom"&&f.css({bottom:0+i.navigationVOffset+"px"});i.navigationVAlign=="top"&&f.css({top:0+i.navigationVOffset+"px"});i.navigationHAlign=="center"&&f.css({left:"50%",marginLeft:e+i.navigationHOffset-Math.round(f.innerWidth()/2)+"px"});i.navigationHAlign=="left"&&f.css({left:0+i.navigationHOffset+e+"px"});i.navigationHAlign=="right"&&f.css({right:0+i.navigationHOffset-e+"px"})},ni=function(i){var s=i.container,f,w;i.beforli=i.next-1;i.comingli=i.next+1;i.beforli<0&&(i.beforli=i.slCode2nightmount-1);i.comingli>=i.slCode2nightmount&&(i.comingli=0);var h=s.find(">ul:first-child >li:eq("+i.comingli+")"),c=s.find(">ul:first-child >li:eq("+i.beforli+")"),l=c.find(".defaultimg").attr("src"),a=h.find(".defaultimg").attr("src");i.arr==t&&(i.arr=s.parent().find(".tparrows"),i.rar=s.parent().find(".tp-rightarrow"),i.lar=s.parent().find(".tp-leftarrow"),i.raimg=i.rar.find(".tp-arr-imgholder"),i.laimg=i.lar.find(".tp-arr-imgholder"),i.raimg_b=i.rar.find(".tp-arr-imgholder2"),i.laimg_b=i.lar.find(".tp-arr-imgholder2"),i.ratit=i.rar.find(".tp-arr-titleholder"),i.latit=i.lar.find(".tp-arr-titleholder"));var f=i.arr,e=i.rar,v=i.lar,u=i.raimg,o=i.laimg,y=i.raimg_b,p=i.laimg_b,b=i.ratit,k=i.latit;h.data("title")!=t&&b.html(h.data("title"));c.data("title")!=t&&k.html(c.data("title"));e.hasClass("itishovered")&&e.width(b.outerWidth(!0)+parseInt(e.css("minWidth"),0));v.hasClass("itishovered")&&v.width(k.outerWidth(!0)+parseInt(v.css("minWidth"),0));f.hasClass("preview2")&&!f.hasClass("hashoveralready")&&(f.addClass("hashoveralready"),r()?(f=n(this),w=f.find(".tp-arr-titleholder"),w.addClass("alwayshidden"),punchgs.TweenLite.set(w,{autoAlpha:0})):f.hover(function(){var t=n(this),i=t.find(".tp-arr-titleholder");n(window).width()>767&&t.width(i.outerWidth(!0)+parseInt(t.css("minWidth"),0));t.addClass("itishovered")},function(){var t=n(this),i=t.find(".tp-arr-titleholder");t.css({width:parseInt(t.css("minWidth"),0)});t.removeClass("itishovered")}));c.data("thumb")!=t&&(l=c.data("thumb"));h.data("thumb")!=t&&(a=h.data("thumb"));f.hasClass("preview4")?(y.css({backgroundImage:"url("+a+")"}),p.css({backgroundImage:"url("+l+")"}),punchgs.TweenLite.fromTo(y,.8,{force3D:punchgs.force3d,x:0},{x:-u.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){u.css({backgroundImage:"url("+a+")"});punchgs.TweenLite.set(y,{x:0})}}),punchgs.TweenLite.fromTo(p,.8,{force3D:punchgs.force3d,x:0},{x:u.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){o.css({backgroundImage:"url("+l+")"});punchgs.TweenLite.set(p,{x:0})}}),punchgs.TweenLite.fromTo(u,.8,{x:0},{force3D:punchgs.force3d,x:-u.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(u,{x:0})}}),punchgs.TweenLite.fromTo(o,.8,{x:0},{force3D:punchgs.force3d,x:u.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(o,{x:0})}})):(punchgs.TweenLite.to(u,.5,{autoAlpha:0,onComplete:function(){u.css({backgroundImage:"url("+a+")"});o.css({backgroundImage:"url("+l+")"})}}),punchgs.TweenLite.to(o,.5,{autoAlpha:0,onComplete:function(){punchgs.TweenLite.to(u,.5,{autoAlpha:1,delay:.2});punchgs.TweenLite.to(o,.5,{autoAlpha:1,delay:.2})}}));e.hasClass("preview4")&&!e.hasClass("hashoveralready")&&(e.addClass("hashoveralready"),e.hover(function(){var t=n(this).find(".tp-arr-iwrapper"),i=n(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(t,.4,{x:t.width()},{x:0,delay:.3,ease:punchgs.Power3.easeOut,overwrite:"all"});punchgs.TweenLite.to(i,.2,{autoAlpha:1,overwrite:"all"})},function(){var t=n(this).find(".tp-arr-iwrapper"),i=n(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(t,.4,{x:t.width(),ease:punchgs.Power3.easeOut,delay:.2,overwrite:"all"});punchgs.TweenLite.to(i,.2,{delay:.6,autoAlpha:0,overwrite:"all"})}),v.hover(function(){var t=n(this).find(".tp-arr-iwrapper"),i=n(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(t,.4,{x:0-t.width()},{x:0,delay:.3,ease:punchgs.Power3.easeOut,overwrite:"all"});punchgs.TweenLite.to(i,.2,{autoAlpha:1,overwrite:"all"})},function(){var t=n(this).find(".tp-arr-iwrapper"),i=n(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(t,.4,{x:0-t.width(),ease:punchgs.Power3.easeOut,delay:.2,overwrite:"all"});punchgs.TweenLite.to(i,.2,{delay:.6,autoAlpha:0,overwrite:"all"})}))},e=function(i,r){var e,u,f;if(r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height:r.container.height()}),r.container.closest(".rev_slider_wrapper").css({height:r.container.height()}),r.width=parseInt(r.container.width(),0),r.height=parseInt(r.container.height(),0),r.bw=r.width/r.startwidth,r.bh=r.height/r.startheight,r.bh>r.bw&&(r.bh=r.bw),r.bh<r.bw&&(r.bw=r.bh),r.bw<r.bh&&(r.bh=r.bw),r.bh>1&&(r.bw=1,r.bh=1),r.bw>1&&(r.bw=1,r.bh=1),r.height=Math.round(r.startheight*(r.width/r.startwidth)),r.height>r.startheight&&r.autoHeight!="on"&&(r.height=r.startheight),r.fullScreen=="on"){if(r.height=r.bw*r.startheight,e=r.container.parent().width(),u=n(window).height(),r.fullScreenOffsetContainer!=t){try{f=r.fullScreenOffsetContainer.split(",");n.each(f,function(t,i){u=u-n(i).outerHeight(!0);u<r.minFullScreenHeight&&(u=r.minFullScreenHeight)})}catch(o){}try{r.fullScreenOffset.split("%").length>1&&r.fullScreenOffset!=t&&r.fullScreenOffset.length>0?u=u-n(window).height()*parseInt(r.fullScreenOffset,0)/100:r.fullScreenOffset!=t&&r.fullScreenOffset.length>0&&(u=u-parseInt(r.fullScreenOffset,0));u<r.minFullScreenHeight&&(u=r.minFullScreenHeight)}catch(o){}}r.container.parent().height(u);r.container.closest(".rev_slider_wrapper").height(u);r.container.css({height:"100%"});r.height=u;r.minHeight!=t&&r.height<r.minHeight&&(r.height=r.minHeight)}else r.minHeight!=t&&r.height<r.minHeight&&(r.height=r.minHeight),r.container.height(r.height);r.slotw=Math.ceil(r.width/r.slots);r.sloth=r.fullScreen=="on"?Math.ceil(n(window).height()/r.slots):Math.ceil(r.height/r.slots);r.autoHeight=="on"&&(r.sloth=Math.ceil(i.height()/r.slots))},ti=function(i,r){i.find(".tp-caption").each(function(){n(this).addClass(n(this).data("transition"));n(this).addClass("start")});i.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:i.parent().css("maxHeight")});r.autoHeight=="on"&&(i.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),i.css({maxHeight:"none"}),i.parent().css({maxHeight:"none"}));i.find(">ul:first >li").each(function(){var i=n(this),r;if(i.css({width:"100%",height:"100%",overflow:"hidden"}),i.data("link")!=t){var f=i.data("link"),e="_self",u=60;i.data("slideindex")=="back"&&(u=0);r=i.data("linktoslide");i.data("target")!=t&&(e=i.data("target"));f=="slide"?i.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:'+u+';" data-x="center" data-y="center" data-linktoslide="'+r+'" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"><\/span><\/a><\/div>'):(r="no",i.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:'+u+';" data-x="center" data-y="center" data-linktoslide="'+r+'" data-start="0"><a style="width:100%;height:100%;display:block" target="'+e+'" href="'+f+'"><span style="width:100%;height:100%;display:block"><\/span><\/a><\/div>'))}});i.parent().css({overflow:"visible"});i.find(">ul:first >li >img").each(function(i){var f=n(this),l;f.addClass("defaultimg");f.data("lazyload")!=t&&f.data("lazydone")!=1||e(f,r);f.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="'+f.data("duration")+'"data-zoomstart="'+f.data("zoomstart")+'"data-zoomend="'+f.data("zoomend")+'"data-rotationstart="'+f.data("rotationstart")+'"data-rotationend="'+f.data("rotationend")+'"data-ease="'+f.data("ease")+'"data-duration="'+f.data("duration")+'"data-bgpositionend="'+f.data("bgpositionend")+'"data-bgposition="'+f.data("bgposition")+'"data-duration="'+f.data("duration")+'"data-kenburns="'+f.data("kenburns")+'"data-easeme="'+f.data("ease")+'"data-bgfit="'+f.data("bgfit")+'"data-bgfitend="'+f.data("bgfitend")+'"data-owidth="'+f.data("owidth")+'"data-oheight="'+f.data("oheight")+'"><\/div>');r.dottedOverlay!="none"&&r.dottedOverlay!=t&&f.closest(".slotholder").append('<div class="tp-dottedoverlay '+r.dottedOverlay+'"><\/div>');var o=f.attr("src"),a=f.data("lazyload"),s=f.data("bgfit"),h=f.data("bgrepeat"),c=f.data("bgposition");s==t&&(s="cover");h==t&&(h="no-repeat");c==t&&(c="center center");l=f.closest(".slotholder");f.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+f.data("lazyload")+'" data-bgfit="'+s+'"data-bgposition="'+c+'" data-bgrepeat="'+h+'" data-lazydone="'+f.data("lazydone")+'" src="'+o+'" data-src="'+o+'" style="background-color:'+f.css("backgroundColor")+";background-repeat:"+h+";background-image:url("+o+");background-size:"+s+";background-position:"+c+';width:100%;height:100%;"><\/div>');u(8)&&(l.find(".tp-bgimg").css({backgroundImage:"none","background-image":"none"}),l.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="'+o+'" style="width:100%">'));f.css({opacity:0});f.data("li-id",i)})},it=function(n,i,f,o){var h=n,c=h.find(".defaultimg"),w=h.data("zoomstart"),v=h.data("rotationstart"),it,g,l;c.data("currotate")!=t&&(v=c.data("currotate"));c.data("curscale")!=t&&(w=c.data("curscale"));e(c,i);var b=c.data("src"),rt=c.css("background-color"),k=i.width,p=i.height,d=c.data("fxof");i.autoHeight=="on"&&(p=i.container.height());d==t&&(d=0);fullyoff=0;var g=0,a=c.data("bgfit"),nt=c.data("bgrepeat"),tt=c.data("bgposition");if(a==t&&(a="cover"),nt==t&&(nt="no-repeat"),tt==t&&(tt="center center"),u(8)&&(h.data("kenburns","off"),it=b,b=""),i.panZoomDisableOnMobile=="on"&&r()&&h.data("kenburns","off"),h.data("kenburns")=="on"&&(a=w,a.toString().length<4&&(a=s(a,h,i))),o=="horizontal")for(f||(g=0-i.slotw),l=0;l<i.slots;l++)h.append('<div class="slot" style="position:absolute;top:'+(0+fullyoff)+"px;left:"+(d+l*i.slotw)+"px;overflow:hidden;width:"+(i.slotw+.6)+"px;height:"+p+'px"><div class="slotslide" style="position:absolute;top:0px;left:'+g+"px;width:"+(i.slotw+.6)+"px;height:"+p+'px;overflow:hidden;"><div style="background-color:'+rt+";position:absolute;top:0px;left:"+(0-l*i.slotw)+"px;width:"+k+"px;height:"+p+"px;background-image:url("+b+");background-repeat:"+nt+";background-size:"+a+";background-position:"+tt+';"><\/div><\/div><\/div>'),w!=t&&v!=t&&punchgs.TweenLite.set(h.find(".slot").last(),{rotationZ:v}),u(8)&&(h.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+it+'" style="width:100%;height:auto">'),y(h,i));else for(f||(g=0-i.sloth),l=0;l<i.slots+2;l++)h.append('<div class="slot" style="position:absolute;top:'+(fullyoff+l*i.sloth)+"px;left:"+d+"px;overflow:hidden;width:"+k+"px;height:"+i.sloth+'px"><div class="slotslide" style="position:absolute;top:'+g+"px;left:0px;width:"+k+"px;height:"+i.sloth+'px;overflow:hidden;"><div style="background-color:'+rt+";position:absolute;top:"+(0-l*i.sloth)+"px;left:0px;width:"+k+"px;height:"+p+"px;background-image:url("+b+");background-repeat:"+nt+";background-size:"+a+";background-position:"+tt+';"><\/div><\/div><\/div>'),w!=t&&v!=t&&punchgs.TweenLite.set(h.find(".slot").last(),{rotationZ:v}),u(8)&&(h.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+it+'" style="width:100%;height:auto;">'),y(h,i))},rt=function(n,i,r){var h=n,f=h.find(".defaultimg"),p=h.data("zoomstart"),w=h.data("rotationstart"),v,rt,o,it,g,nt;f.data("currotate")!=t&&(w=f.data("currotate"));f.data("curscale")!=t&&(p=f.data("curscale")*100);e(f,i);var b=f.data("src"),ut=f.css("backgroundColor"),ft=i.width,tt=i.height;i.autoHeight=="on"&&(tt=i.container.height());v=f.data("fxof");v==t&&(v=0);fullyoff=0;it=0;u(8)&&(rt=b,b="");o=0;o=i.sloth>i.slotw?i.sloth:i.slotw;r||(it=0-o);i.slotw=o;i.sloth=o;var a=0,l=0,c=f.data("bgfit"),k=f.data("bgrepeat"),d=f.data("bgposition");for(c==t&&(c="cover"),k==t&&(k="no-repeat"),d==t&&(d="center center"),h.data("kenburns")=="on"&&(c=p,c.toString().length<4&&(c=s(c,h,i))),g=0;g<i.slots;g++){for(l=0,nt=0;nt<i.slots;nt++)h.append('<div class="slot" style="position:absolute;top:'+(fullyoff+l)+"px;left:"+(v+a)+"px;width:"+o+"px;height:"+o+'px;overflow:hidden;"><div class="slotslide" data-x="'+a+'" data-y="'+l+'" style="position:absolute;top:0px;left:0px;width:'+o+"px;height:"+o+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-l)+"px;left:"+(0-a)+"px;width:"+ft+"px;height:"+tt+"px;background-color:"+ut+";background-image:url("+b+");background-repeat:"+k+";background-size:"+c+";background-position:"+d+';"><\/div><\/div><\/div>'),l=l+o,u(8)&&(h.find(".slot ").last().find(".slotslide").append('<img src="'+rt+'">'),y(h,i)),p!=t&&w!=t&&punchgs.TweenLite.set(h.find(".slot").last(),{rotationZ:w});a=a+o}},y=function(n,t){if(u(8)){var i=n.find(".ieeightfallbackimage"),r=i.width(),f=i.height();t.startwidth/t.startheight<n.data("owidth")/n.data("oheight")?i.css({width:"auto",height:"100%"}):i.css({width:"100%",height:"auto"});setTimeout(function(){var r=i.width(),u=i.height();n.data("bgposition")=="center center"&&i.css({position:"absolute",top:t.height/2-u/2+"px",left:t.width/2-r/2+"px"});(n.data("bgposition")=="center top"||n.data("bgposition")=="top center")&&i.css({position:"absolute",top:"0px",left:t.width/2-r/2+"px"});(n.data("bgposition")=="center bottom"||n.data("bgposition")=="bottom center")&&i.css({position:"absolute",bottom:"0px",left:t.width/2-r/2+"px"});(n.data("bgposition")=="right top"||n.data("bgposition")=="top right")&&i.css({position:"absolute",top:"0px",right:"0px"});(n.data("bgposition")=="right bottom"||n.data("bgposition")=="bottom right")&&i.css({position:"absolute",bottom:"0px",right:"0px"});(n.data("bgposition")=="right center"||n.data("bgposition")=="center right")&&i.css({position:"absolute",top:t.height/2-u/2+"px",right:"0px"});(n.data("bgposition")=="left bottom"||n.data("bgposition")=="bottom left")&&i.css({position:"absolute",bottom:"0px",left:"0px"});(n.data("bgposition")=="left center"||n.data("bgposition")=="center left")&&i.css({position:"absolute",top:t.height/2-u/2+"px",left:"0px"})},20)}},p=function(t,i,r){r.find(".slot").each(function(){n(this).remove()});i.transition=0},ut=function(i,r){i.find("img, .defaultimg").each(function(){var i=n(this),u;i.data("lazyload")!=i.attr("src")&&r<3&&i.data("lazyload")!=t&&i.data("lazyload")!="undefined"?i.data("lazyload")!=t&&i.data("lazyload")!="undefined"&&(i.attr("src",i.data("lazyload")),u=new Image,u.onload=function(){i.data("lazydone",1);i.hasClass("defaultimg")&&c(i,u)},u.error=function(){i.data("lazydone",1)},u.src=i.attr("src"),u.complete&&(i.hasClass("defaultimg")&&c(i,u),i.data("lazydone",1))):(i.data("lazyload")===t||i.data("lazyload")==="undefined")&&i.data("lazydone")!=1&&(u=new Image,u.onload=function(){i.hasClass("defaultimg")&&c(i,u);i.data("lazydone",1)},u.error=function(){i.data("lazydone",1)},u.src=i.attr("src")!=t&&i.attr("src")!="undefined"?i.attr("src"):i.data("src"),u.complete&&(i.hasClass("defaultimg")&&c(i,u),i.data("lazydone",1)))})},c=function(n,t){var i=n.closest("li"),r=t.width,u=t.height;i.data("owidth",r);i.data("oheight",u);i.find(".slotholder").data("owidth",r);i.find(".slotholder").data("oheight",u);i.data("loadeddone",1)},w=function(i,r,u){ut(i,0);var f=setInterval(function(){u.bannertimeronpause=!0;u.container.trigger("stoptimer");u.cd=0;var e=0;i.find("img, .defaultimg").each(function(){n(this).data("lazydone")!=1&&e++});e>0?ut(i,e):(clearInterval(f),r!=t&&r())},100)},b=function(n,i){var e,f,r;try{e=n.find(">ul:first-child >li:eq("+i.act+")")}catch(o){e=n.find(">ul:first-child >li:eq(1)")}i.lastslide=i.act;f=n.find(">ul:first-child >li:eq("+i.next+")");r=f.find(".defaultimg");i.bannertimeronpause=!0;n.trigger("stoptimer");i.cd=0;r.data("lazyload")!=t&&r.data("lazyload")!="undefined"&&r.data("lazydone")!=1?(u(8)?r.attr("src",f.find(".defaultimg").data("lazyload")):r.css({backgroundImage:'url("'+f.find(".defaultimg").data("lazyload")+'")'}),r.data("src",f.find(".defaultimg").data("lazyload")),r.data("lazydone",1),r.data("orgw",0),f.data("loadeddone",1),n.find(".tp-loader").css({display:"block"}),w(n.find(".tp-static-layers"),function(){w(f,function(){var t=f.find(".slotholder"),u;t.data("kenburns")=="on"?u=setInterval(function(){var f=t.data("owidth");f>=0&&(clearInterval(u),l(i,r,n))},10):l(i,r,n)},i)},i)):f.data("loadeddone")===t?(f.data("loadeddone",1),w(f,function(){l(i,r,n)},i)):l(i,r,n)},l=function(n,t,i){n.bannertimeronpause=!1;n.cd=0;i.trigger("nulltimer");i.find(".tp-loader").css({display:"none"});e(t,n);o(i,n);e(t,n);ii(i,n)},ii=function(n,i){var r,u,e,o,f;n.trigger("revolution.slide.onbeforeswap");i.transition=1;i.videoplaying=!1;try{r=n.find(">ul:first-child >li:eq("+i.act+")")}catch(s){r=n.find(">ul:first-child >li:eq(1)")}i.lastslide=i.act;u=n.find(">ul:first-child >li:eq("+i.next+")");setTimeout(function(){ni(i)},200);e=r.find(".slotholder");o=u.find(".slotholder");(o.data("kenburns")=="on"||e.data("kenburns")=="on")&&(vi(n,i),n.find(".kenburnimg").remove());u.data("delay")!=t?(i.cd=0,i.delay=u.data("delay")):i.delay=i.origcd;i.firststart==1&&punchgs.TweenLite.set(r,{autoAlpha:0});punchgs.TweenLite.set(r,{zIndex:18});punchgs.TweenLite.set(u,{autoAlpha:0,zIndex:20});f=0;r.index()!=u.index()&&i.firststart!=1&&(f=hi(r,i));r.data("saveperformance")!="on"&&(f=0);setTimeout(function(){n.trigger("restarttimer");ri(n,i,u,r,e,o)},f)},ri=function(i,r,f,e,o,s){function si(){n.each(vt,function(n,t){(t[0]==c||t[8]==c)&&(l=t[1],d=t[2],hi=dt);dt=dt+1})}var c,d,ci,ct,ut,v,a,li,lt,ai,vi,ii,yt,pt,bi,bt,g,w,y,pi,wi,kt,p,tt,b,oi,ni;f.data("differentissplayed")=="prepared"&&(f.data("differentissplayed","done"),f.data("transition",f.data("savedtransition")),f.data("slotamount",f.data("savedslotamount")),f.data("masterspeed",f.data("savedmasterspeed")));f.data("fstransition")!=t&&f.data("differentissplayed")!="done"&&(f.data("savedtransition",f.data("transition")),f.data("savedslotamount",f.data("slotamount")),f.data("savedmasterspeed",f.data("masterspeed")),f.data("transition",f.data("fstransition")),f.data("slotamount",f.data("fsslotamount")),f.data("masterspeed",f.data("fsmasterspeed")),f.data("differentissplayed","prepared"));i.find(".active-revslide").removeClass(".active-revslide");f.addClass("active-revslide");f.data("transition")==t&&f.data("transition","random");var l=0,ti=f.data("transition").split(","),ht=f.data("nexttransid")==t?-1:f.data("nexttransid");ht=f.data("randomtransition")=="on"?Math.round(Math.random()*ti.length):ht+1;ht==ti.length&&(ht=0);f.data("nexttransid",ht);c=ti[ht];r.ie&&(c=="boxfade"&&(c="boxslide"),c=="slotfade-vertical"&&(c="slotzoom-vertical"),c=="slotfade-horizontal"&&(c="slotzoom-horizontal"));u(8)&&(c=11);d=0;r.parallax=="scroll"&&r.parallaxFirstGo==t&&(r.parallaxFirstGo=!0,h(i,r),setTimeout(function(){h(i,r)},210),setTimeout(function(){h(i,r)},420));(c=="boxslide"||c=="boxfade"||c=="papercut"||c==0||c==1||c==16)&&(c=9);c=="slidehorizontal"&&(c="slideleft",r.leftarrowpressed==1&&(c="slideright"));c=="slidevertical"&&(c="slideup",r.leftarrowpressed==1&&(c="slidedown"));c=="parallaxhorizontal"&&(c="parallaxtoleft",r.leftarrowpressed==1&&(c="parallaxtoright"));c=="parallaxvertical"&&(c="parallaxtotop",r.leftarrowpressed==1&&(c="parallaxtobottom"));var vt=[["boxslide",0,1,10,0,"box",!1,null,0],["boxfade",1,0,10,0,"box",!1,null,1],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4],["curtain-2",5,3,0,0,"horizontal",!0,!0,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8],["slotfade-horizontal",9,0,0,500,"horizontal",!0,null,9],["slotfade-vertical",10,0,0,500,"vertical",!0,null,10],["fade",11,0,1,300,"horizontal",!0,null,11],["slideleft",12,0,1,0,"horizontal",!0,!0,12],["slideup",13,0,1,0,"horizontal",!0,!0,13],["slidedown",14,0,1,0,"horizontal",!0,!0,14],["slideright",15,0,1,0,"horizontal",!0,!0,15],["papercut",16,0,0,600,"",null,null,16],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18],["cubic",19,0,20,600,"horizontal",!1,!0,19],["cube",19,0,20,600,"horizontal",!1,!0,20],["flyin",20,0,4,600,"vertical",!1,!0,21],["turnoff",21,0,1,1600,"horizontal",!1,!0,22],["incube",22,0,20,200,"horizontal",!1,!0,23],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27],["fadefromright",12,1,1,0,"horizontal",!0,!0,28],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32],["fadetorightfadetoleft",15,2,1,0,"horizontal",!0,!0,33],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35],["parallaxtoright",12,3,1,0,"horizontal",!0,!0,36],["parallaxtoleft",15,3,1,0,"horizontal",!0,!0,37],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43],["zoomout",13,5,1,0,"horizontal",!0,!0,44],["zoomin",13,6,1,0,"horizontal",!0,!0,45],["notransition",26,0,1,0,"horizontal",!0,null,46]],ft=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],ot=[16,17,18,19,20,21,22,23,24,25,26,27],l=0,d=1,hi=0,dt=0,k=[];if(s.data("kenburns")=="on"&&((c=="boxslide"||c==0||c=="boxfade"||c==1||c=="papercut"||c==16)&&(c=11),nt(i,r,!0,!0)),c=="random"&&(c=Math.round(Math.random()*vt.length-1),c>vt.length-1&&(c=vt.length-1)),c=="random-static"&&(c=Math.round(Math.random()*ft.length-1),c>ft.length-1&&(c=ft.length-1),c=ft[c]),c=="random-premium"&&(c=Math.round(Math.random()*ot.length-1),c>ot.length-1&&(c=ot.length-1),c=ot[c]),ci=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],r.isJoomla==!0&&window.MooTools!=t&&ci.indexOf(c)!=-1&&(ct=Math.round(Math.random()*(ot.length-2))+1,ct>ot.length-1&&(ct=ot.length-1),ct==0&&(ct=1),c=ot[ct]),si(),u(8)&&l>15&&l<28&&(c=Math.round(Math.random()*ft.length-1),c>ft.length-1&&(c=ft.length-1),c=ft[c],dt=0,si()),ut=-1,(r.leftarrowpressed==1||r.act>r.next)&&(ut=1),r.leftarrowpressed=0,l>26&&(l=26),l<0&&(l=0),v=300,f.data("masterspeed")!=t&&f.data("masterspeed")>99&&f.data("masterspeed")<4001&&(v=f.data("masterspeed")),k=vt[hi],i.parent().find(".bullet").each(function(){var t=n(this);t.removeClass("selected");r.navigationArrows=="withbullet"||r.navigationArrows=="nexttobullets"?t.index()-1==r.next&&t.addClass("selected"):t.index()==r.next&&t.addClass("selected")}),a=new punchgs.TimelineLite({onComplete:function(){ui(i,r,s,o,f,e,a)}}),a.add(punchgs.TweenLite.set(s.find(".defaultimg"),{opacity:0})),a.pause(),f.data("slotamount")==t||f.data("slotamount")<1?(r.slots=Math.round(Math.random()*12+4),c=="boxslide"?r.slots=Math.round(Math.random()*6+3):c=="flyin"&&(r.slots=Math.round(Math.random()*4+1))):r.slots=f.data("slotamount"),r.rotate=f.data("rotate")==t?0:f.data("rotate")==999?Math.round(Math.random()*360):f.data("rotate"),(!n.support.transition||r.ie||r.ie9)&&(r.rotate=0),r.firststart==1&&(r.firststart=0),v=v+k[4],(l==4||l==5||l==6)&&r.slots<3&&(r.slots=3),k[3]!=0&&(r.slots=Math.min(r.slots,k[3])),l==9&&(r.slots=r.width/20),l==10&&(r.slots=r.height/20),k[5]=="box"?(k[7]!=null&&rt(o,r,k[7]),k[6]!=null&&rt(s,r,k[6])):(k[5]=="vertical"||k[5]=="horizontal")&&(k[7]!=null&&it(o,r,k[7],k[5]),k[6]!=null&&it(s,r,k[6],k[5])),l==0&&(li=Math.ceil(r.height/r.sloth),lt=0,s.find(".slotslide").each(function(t){var i=n(this);lt=lt+1;lt==li&&(lt=0);a.add(punchgs.TweenLite.from(i,v/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),(t*15+lt*30)/1500)})),l==1&&(vi=0,s.find(".slotslide").each(function(t){var i=n(this);rand=Math.random()*v+300;rand2=Math.random()*500+200;rand+rand2>ai&&(ai=rand2+rand2,vi=t);a.add(punchgs.TweenLite.from(i,rand/1e3,{autoAlpha:0,force3D:"auto",rotation:r.rotate,ease:punchgs.Power2.easeInOut}),rand2/1e3)})),l==2&&(y=new punchgs.TimelineLite,o.find(".slotslide").each(function(){var t=n(this);y.add(punchgs.TweenLite.to(t,v/1e3,{left:r.slotw,force3D:"auto",rotation:0-r.rotate}),0);a.add(y,0)}),s.find(".slotslide").each(function(){var t=n(this);y.add(punchgs.TweenLite.from(t,v/1e3,{left:0-r.slotw,force3D:"auto",rotation:r.rotate}),0);a.add(y,0)})),l==3&&(y=new punchgs.TimelineLite,o.find(".slotslide").each(function(){var t=n(this);y.add(punchgs.TweenLite.to(t,v/1e3,{top:r.sloth,rotation:r.rotate,force3D:"auto",transformPerspective:600}),0);a.add(y,0)}),s.find(".slotslide").each(function(){var t=n(this);y.add(punchgs.TweenLite.from(t,v/1e3,{top:0-r.sloth,rotation:r.rotate,ease:punchgs.Power2.easeOut,force3D:"auto",transformPerspective:600}),0);a.add(y,0)})),l==4||l==5){setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);var st=v/1e3,fr=st,y=new punchgs.TimelineLite;o.find(".slotslide").each(function(t){var u=n(this),i=t*st/r.slots;l==5&&(i=(r.slots-t-1)*st/r.slots/1.5);y.add(punchgs.TweenLite.to(u,st*3,{transformPerspective:600,force3D:"auto",top:0+r.height,opacity:.5,rotation:r.rotate,ease:punchgs.Power2.easeInOut,delay:i}),0);a.add(y,0)});s.find(".slotslide").each(function(t){var u=n(this),i=t*st/r.slots;l==5&&(i=(r.slots-t-1)*st/r.slots/1.5);y.add(punchgs.TweenLite.from(u,st*3,{top:0-r.height,opacity:.5,rotation:r.rotate,force3D:"auto",ease:punchgs.Power2.easeInOut,delay:i}),0);a.add(y,0)})}if(l==6&&(r.slots<2&&(r.slots=2),r.slots%2&&(r.slots=r.slots+1),y=new punchgs.TimelineLite,setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100),o.find(".slotslide").each(function(t){var u=n(this),i;i=t+1<r.slots/2?(t+2)*90:(2+r.slots-t)*90;y.add(punchgs.TweenLite.to(u,(v+i)/1e3,{top:0+r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:punchgs.Power2.easeInOut}),0);a.add(y,0)}),s.find(".slotslide").each(function(t){var u=n(this),i;i=t+1<r.slots/2?(t+2)*90:(2+r.slots-t)*90;y.add(punchgs.TweenLite.from(u,(v+i)/1e3,{top:0-r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:punchgs.Power2.easeInOut}),0);a.add(y,0)})),l==7&&(v=v*2,y=new punchgs.TimelineLite,setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100),o.find(".slotslide").each(function(){var t=n(this).find("div");y.add(punchgs.TweenLite.to(t,v/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:r.slotw*2+"px",height:r.height*2+"px",opacity:0,rotation:r.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),0);a.add(y,0)}),s.find(".slotslide").each(function(t){var i=n(this).find("div");y.add(punchgs.TweenLite.fromTo(i,v/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*r.slotw+"px",ease:punchgs.Power2.easeOut,force3D:"auto",top:"0px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1}),0);a.add(y,0)})),l==8&&(v=v*3,y=new punchgs.TimelineLite,o.find(".slotslide").each(function(){var t=n(this).find("div");y.add(punchgs.TweenLite.to(t,v/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:r.width*2+"px",height:r.sloth*2+"px",force3D:"auto",opacity:0,rotation:r.rotate}),0);a.add(y,0)}),s.find(".slotslide").each(function(t){var i=n(this).find("div");y.add(punchgs.TweenLite.fromTo(i,v/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-t*r.sloth+"px",width:s.find(".defaultimg").data("neww")+"px",height:s.find(".defaultimg").data("newh")+"px",opacity:1,rotation:0}),0);a.add(y,0)})),(l==9||l==10)&&(ii=0,s.find(".slotslide").each(function(t){var i=n(this);ii++;a.add(punchgs.TweenLite.fromTo(i,v/1e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:punchgs.Power2.easeInOut,delay:t/200}),0)})),(l==11||l==26)&&(ii=0,l==26&&(v=0),s.find(".slotslide").each(function(){var t=n(this);a.add(punchgs.TweenLite.from(t,v/1e3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power2.easeInOut}),0)})),l==12||l==13||l==14||l==15){v=1e3;setTimeout(function(){punchgs.TweenLite.set(o.find(".defaultimg"),{autoAlpha:0})},100);var g=r.width,w=r.height,ri=s.find(".slotslide");(r.fullWidth=="on"||r.fullScreen=="on")&&(g=ri.width(),w=ri.height());yt=0;pt=0;l==12?yt=g:l==15?yt=0-g:l==13?pt=w:l==14&&(pt=0-w);var tt=1,at=1,fi=1,wt=punchgs.Power2.easeInOut,yi=punchgs.Power2.easeInOut,ei=v/1e3,gt=ei;d==1&&(tt=0);d==2&&(tt=0);d==3&&(wt=punchgs.Power2.easeInOut,yi=punchgs.Power1.easeInOut,ei=v/1200);(d==4||d==5)&&(at=.6);d==6&&(at=1.4);(d==5||d==6)&&(fi=1.4,tt=0,g=0,w=0,yt=0,pt=0);d==6&&(fi=.6);bi=0;a.add(punchgs.TweenLite.from(ri,ei,{left:yt,top:pt,scale:fi,opacity:tt,rotation:r.rotate,ease:yi,force3D:"auto"}),0);bt=o.find(".slotslide");(d==4||d==5)&&(g=0,w=0);d!=1&&(l==12?a.add(punchgs.TweenLite.to(bt,gt,{left:0-g+"px",force3D:"auto",scale:at,opacity:tt,rotation:r.rotate,ease:wt}),0):l==15?a.add(punchgs.TweenLite.to(bt,gt,{left:g+"px",force3D:"auto",scale:at,opacity:tt,rotation:r.rotate,ease:wt}),0):l==13?a.add(punchgs.TweenLite.to(bt,gt,{top:0-w+"px",force3D:"auto",scale:at,opacity:tt,rotation:r.rotate,ease:wt}),0):l==14&&a.add(punchgs.TweenLite.to(bt,gt,{top:w+"px",force3D:"auto",scale:at,opacity:tt,rotation:r.rotate,ease:wt}),0))}if(l==16){y=new punchgs.TimelineLite;a.add(punchgs.TweenLite.set(e,{position:"absolute","z-index":20}),0);a.add(punchgs.TweenLite.set(f,{position:"absolute","z-index":15}),0);e.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"><\/div>');e.find(".tp-half-one").clone(!0).appendTo(e).addClass("tp-half-two");e.find(".tp-half-two").removeClass("tp-half-one");g=r.width;w=r.height;r.autoHeight=="on"&&(w=i.height());e.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+g+"px;height:"+w+'px;"><\/div>');e.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+g+"px;height:"+w+'px;"><\/div>');e.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"});e.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"><\/div>');a.add(punchgs.TweenLite.set(e.find(".tp-half-two"),{width:g,height:w,overflow:"hidden",zIndex:15,position:"absolute",top:w/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0);a.add(punchgs.TweenLite.set(e.find(".tp-half-one"),{width:g,height:w/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var er=e.find(".defaultimg"),ki=Math.round(Math.random()*20-10),di=Math.round(Math.random()*20-10),gi=Math.round(Math.random()*20-10),nr=Math.random()*.4-.2,tr=Math.random()*.4-.2,ir=Math.random()*1+1,rr=Math.random()*1+1,ur=Math.random()*.3+.3;a.add(punchgs.TweenLite.set(e.find(".tp-half-one"),{overflow:"hidden"}),0);a.add(punchgs.TweenLite.fromTo(e.find(".tp-half-one"),v/800,{width:g,height:w/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:ir,rotation:ki,y:0-w-w/4,autoAlpha:0,ease:punchgs.Power2.easeInOut}),0);a.add(punchgs.TweenLite.fromTo(e.find(".tp-half-two"),v/800,{width:g,height:w,overflow:"hidden",position:"absolute",top:w/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:rr,rotation:di,y:w+w/4,ease:punchgs.Power2.easeInOut,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(e,{position:"absolute","z-index":15});punchgs.TweenLite.set(f,{position:"absolute","z-index":20});e.find(".tp-half-one").length>0&&(e.find(".tp-half-one .defaultimg").unwrap(),e.find(".tp-half-one .slotholder").unwrap());e.find(".tp-half-two").remove()}}),0);y.add(punchgs.TweenLite.set(s.find(".defaultimg"),{autoAlpha:1}),0);e.html()!=null&&a.add(punchgs.TweenLite.fromTo(f,(v-200)/1e3,{scale:ur,x:r.width/4*nr,y:w/4*tr,rotation:gi,force3D:"auto",transformOrigin:"center center",ease:punchgs.Power2.easeOut},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0);a.add(y,0)}if(l==17&&s.find(".slotslide").each(function(t){var i=n(this);a.add(punchgs.TweenLite.fromTo(i,v/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:t*.06}),0)}),l==18&&s.find(".slotslide").each(function(t){var i=n(this);a.add(punchgs.TweenLite.fromTo(i,v/500,{autoAlpha:0,rotationY:310,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:t*.06}),0)}),l==19||l==22){y=new punchgs.TimelineLite;a.add(punchgs.TweenLite.set(e,{zIndex:20}),0);a.add(punchgs.TweenLite.set(f,{zIndex:20}),0);setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);var pi=f.css("z-index"),wi=e.css("z-index"),p=90,tt=1;ut==1&&(p=-90);l==19?(b="center center -"+r.height/2,tt=0):b="center center "+r.height/2;punchgs.TweenLite.set(i,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600});s.find(".slotslide").each(function(t){var i=n(this);y.add(punchgs.TweenLite.fromTo(i,v/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:r.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:b,rotationX:p},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:t/20,ease:punchgs.Power2.easeInOut}),0);y.add(punchgs.TweenLite.to(i,.1,{autoAlpha:1,delay:t/20}),0);a.add(y)});o.find(".slotslide").each(function(t){var u=n(this),i=-90;ut==1&&(i=90);y.add(punchgs.TweenLite.fromTo(u,v/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:b,rotationX:0},{autoAlpha:1,rotationY:r.rotate,top:0,z:10,scale:1,rotationX:i,delay:t/20,force3D:"auto",ease:punchgs.Power2.easeInOut}),0);a.add(y)})}if(l==20){if(setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100),pi=f.css("z-index"),wi=e.css("z-index"),ut==1)var kt=-r.width,p=70,b="left center -"+r.height/2;else var kt=r.width,p=-70,b="right center -"+r.height/2;s.find(".slotslide").each(function(t){var i=n(this);a.add(punchgs.TweenLite.fromTo(i,v/1500,{left:kt,rotationX:40,z:-600,opacity:tt,top:0,force3D:"auto",transformPerspective:600,transformOrigin:b,rotationY:p},{left:0,delay:t/20,ease:punchgs.Power2.easeInOut}),0);a.add(punchgs.TweenLite.fromTo(i,v/1e3,{rotationX:40,z:-600,opacity:tt,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:b,rotationY:p},{rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:t/20,ease:punchgs.Power2.easeInOut}),0);a.add(punchgs.TweenLite.to(i,.1,{opacity:1,force3D:"auto",delay:t/20+v/2e3}),0)});o.find(".slotslide").each(function(t){var i=n(this);if(ut!=1)var u=-r.width,f=70,e="left center -"+r.height/2;else var u=r.width,f=-70,e="right center -"+r.height/2;a.add(punchgs.TweenLite.fromTo(i,v/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:e,rotationY:0},{opacity:1,rotationX:40,top:0,z:-600,left:u,force3D:"auto",scale:.8,rotationY:f,delay:t/20,ease:punchgs.Power2.easeInOut}),0);a.add(punchgs.TweenLite.to(i,.1,{force3D:"auto",opacity:0,delay:t/20+(v/1e3-v/1e4)}),0)})}if((l==21||l==25)&&(setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100),pi=f.css("z-index"),wi=e.css("z-index"),ut==1?(kt=-r.width,p=90,l==25?(b="center top 0",rot2=-p,p=r.rotate):(b="left center 0",rot2=r.rotate)):(kt=r.width,p=-90,l==25?(b="center bottom 0",rot2=-p,p=r.rotate):(b="right center 0",rot2=r.rotate)),s.find(".slotslide").each(function(){var t=n(this);a.add(punchgs.TweenLite.fromTo(t,v/1e3,{left:0,transformStyle:"flat",rotationX:rot2,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:b,rotationY:p},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),0)}),ut!=1?(kt=-r.width,p=90,l==25?(b="center top 0",rot2=-p,p=r.rotate):(b="left center 0",rot2=r.rotate)):(kt=r.width,p=-90,l==25?(b="center bottom 0",rot2=-p,p=r.rotate):(b="right center 0",rot2=r.rotate)),o.find(".slotslide").each(function(){var t=n(this);a.add(punchgs.TweenLite.fromTo(t,v/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:b,rotationY:0},{left:0,rotationX:rot2,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:p,ease:punchgs.Power1.easeInOut}),0)})),l==23||l==24){setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);var pi=f.css("z-index"),wi=e.css("z-index"),p=-90;ut==1&&(p=90);tt=1;l==23?(b="center center -"+r.width/2,tt=0):b="center center "+r.width/2;oi=0;punchgs.TweenLite.set(i,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500});s.find(".slotslide").each(function(t){var i=n(this);a.add(punchgs.TweenLite.fromTo(i,v/1e3,{left:oi,rotationX:r.rotate,force3D:"auto",opacity:tt,top:0,scale:1,transformPerspective:600,transformOrigin:b,rotationY:p},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:t/10,ease:punchgs.Power2.easeInOut}),0)});p=90;ut==1&&(p=-90);o.find(".slotslide").each(function(t){var i=n(this);a.add(punchgs.TweenLite.fromTo(i,v/1e3,{left:0,autoAlpha:1,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:b,rotationY:0},{left:oi,autoAlpha:1,rotationX:r.rotate,top:0,scale:1,rotationY:p,delay:t/10,ease:punchgs.Power2.easeInOut}),0)})}a.pause();et(f,r,null,a);punchgs.TweenLite.to(f,.001,{autoAlpha:1});ni={};ni.slideIndex=r.next+1;ni.slide=f;i.trigger("revolution.slide.onchange",ni);setTimeout(function(){i.trigger("revolution.slide.onafterswap")},v);i.trigger("revolution.slide.onvideostop")},ui=function(n,t,i,r,u,f,e){punchgs.TweenLite.to(i.find(".defaultimg"),.001,{autoAlpha:1,onComplete:function(){p(n,t,u)}});u.index()!=f.index()&&punchgs.TweenLite.to(f,.2,{autoAlpha:0,onComplete:function(){p(n,t,f)}});t.act=t.next;t.navigationType=="thumb"&&lt(n);i.data("kenburns")=="on"&&nt(n,t);n.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible");u.addClass("current-sr-slide-visible");(t.parallax=="scroll"||t.parallax=="scroll+mouse"||t.parallax=="mouse+scroll")&&h(n,t);e.clear()},fi=function(t){var e=t.target.getVideoEmbedCode(),f=n("#"+e.split('id="')[1].split('"')[0]),i=f.closest(".tp-simpleresponsive"),o=f.parent().data("player"),u,r;t.data==YT.PlayerState.PLAYING?(u=i.find(".tp-bannertimer"),r=u.data("opt"),f.closest(".tp-caption").data("volume")=="mute"&&o.mute(),r.videoplaying=!0,i.trigger("stoptimer"),i.trigger("revolution.slide.onvideoplay")):(u=i.find(".tp-bannertimer"),r=u.data("opt"),t.data!=-1&&t.data!=3&&(r.videoplaying=!1,i.trigger("starttimer"),i.trigger("revolution.slide.onvideostop")),t.data==0&&r.nextslCode2nighttend==!0?r.container.revnext():(r.videoplaying=!1,i.trigger("starttimer"),i.trigger("revolution.slide.onvideostop")))},bi=function(n,t,i){n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent(t,i,!1)},ei=function(t,i){var u=$f(t),f=n("#"+t),r=f.closest(".tp-simpleresponsive"),e=f.closest(".tp-caption");setTimeout(function(){u.addEvent("ready",function(){i&&u.api("play");u.addEvent("play",function(){var n=r.find(".tp-bannertimer"),t=n.data("opt");t.videoplaying=!0;r.trigger("stoptimer");e.data("volume")=="mute"&&u.api("setVolume","0")});u.addEvent("finish",function(){var t=r.find(".tp-bannertimer"),n=t.data("opt");n.videoplaying=!1;r.trigger("starttimer");r.trigger("revolution.slide.onvideoplay");n.nextslCode2nighttend==!0&&n.container.revnext()});u.addEvent("pause",function(){var n=r.find(".tp-bannertimer"),t=n.data("opt");t.videoplaying=!1;r.trigger("starttimer");r.trigger("revolution.slide.onvideostop")});e.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(n(this),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});u.api("play")})})},150)},ft=function(n,i){var u=i.width(),f=i.height(),r=n.data("mediaAspect"),e,o;r==t&&(r=1);e=u/f;n.css({position:"absolute"});o=n.find("video");e<r?punchgs.TweenLite.to(n,.0001,{width:f*r,force3D:"auto",top:0,left:0-(f*r-u)/2,height:f}):punchgs.TweenLite.to(n,.0001,{width:u,force3D:"auto",top:0-(u/r-f)/2,left:0,height:u/r})},a=function(){var n={};return n.x=0,n.y=0,n.rotationX=0,n.rotationY=0,n.rotationZ=0,n.scale=1,n.scaleX=1,n.scaleY=1,n.skewX=0,n.skewY=0,n.opacity=0,n.transformOrigin="center, center",n.transformPerspective=400,n.rotation=0,n},k=function(t,i){var r=i.split(";");return n.each(r,function(n,i){i=i.split(":");var r=i[0],u=i[1];r=="rotationX"&&(t.rotationX=parseInt(u,0));r=="rotationY"&&(t.rotationY=parseInt(u,0));r=="rotationZ"&&(t.rotationZ=parseInt(u,0));r=="rotationZ"&&(t.rotation=parseInt(u,0));r=="scaleX"&&(t.scaleX=parseFloat(u));r=="scaleY"&&(t.scaleY=parseFloat(u));r=="opacity"&&(t.opacity=parseFloat(u));r=="skewX"&&(t.skewX=parseInt(u,0));r=="skewY"&&(t.skewY=parseInt(u,0));r=="x"&&(t.x=parseInt(u,0));r=="y"&&(t.y=parseInt(u,0));r=="z"&&(t.z=parseInt(u,0));r=="transformOrigin"&&(t.transformOrigin=u.toString());r=="transformPerspective"&&(t.transformPerspective=parseInt(u,0))}),t},oi=function(t){var r=t.split("animation:"),i={},u;return i.animation=k(a(),r[1]),u=r[0].split(";"),n.each(u,function(n,t){t=t.split(":");var r=t[0],u=t[1];r=="typ"&&(i.typ=u);r=="speed"&&(i.speed=parseInt(u,0)/1e3);r=="start"&&(i.start=parseInt(u,0)/1e3);r=="elementdelay"&&(i.elementdelay=parseFloat(u));r=="ease"&&(i.ease=u)}),i},et=function(i,u,f,e){var c;i.data("ctl")==t&&i.data("ctl",new punchgs.TimelineLite);var l=i.data("ctl"),s=0,o=0,h=i.find(".tp-caption"),v=u.container.find(".tp-static-layers").find(".tp-caption");l.pause();n.each(v,function(n,t){h.push(t)});h.each(function(i){var ht=f,b=-1,e=n(this),it,nt,y,sr,kt,yt,pt,wt,ct,et,li,l,ai,vi,yi,tt,bt,di,gt,ni,rr,ur,p,w,c,v,ti,gi,i,nr,ii,ar,lt,er,or;if(e.hasClass("tp-static-layer")&&(it=e.data("startslide"),nt=e.data("endslide"),(it==-1||it=="-1")&&e.data("startslide",0),(nt==-1||nt=="-1")&&e.data("endslide",u.slCode2nightmount),it==0&&nt==u.slCode2nightmount-1&&e.data("endslide",u.slCode2nightmount+1),it=e.data("startslide"),nt=e.data("endslide"),e.hasClass("tp-is-shown")?b=nt==u.next||it>u.next||nt<u.next?2:0:it<=u.next&&nt>=u.next||it==u.next||nt==u.next?(e.addClass("tp-is-shown"),b=1):b=0),s=u.width/2-u.startwidth*u.bw/2,y=u.bw,sr=u.bh,u.fullScreen=="on"&&(o=u.height/2-u.startheight*u.bh/2),(u.autoHeight=="on"||u.minHeight!=t&&u.minHeight>0)&&(o=u.container.height()/2-u.startheight*u.bh/2),o<0&&(o=0),kt=0,u.width<u.hideCaptionAtLimit&&e.data("captionhidden")=="on"?(e.addClass("tp-hidden-caption"),kt=1):u.width<u.hCode2nightllCaptionAtLimit||u.width<u.hCode2nightllCaptionAtLilmit?(e.addClass("tp-hidden-caption"),kt=1):e.removeClass("tp-hidden-caption"),kt==0){if(e.data("linktoslide")==t||e.hasClass("hasclicklistener")||(e.addClass("hasclicklistener"),e.css({cursor:"pointer"}),e.data("linktoslide")!="no"&&e.click(function(){var i=n(this),t=i.data("linktoslide");t!="next"&&t!="prev"?(u.container.data("showus",t),u.container.parent().find(".tp-rightarrow").click()):t=="next"?u.container.parent().find(".tp-rightarrow").click():t=="prev"&&u.container.parent().find(".tp-leftarrow").click()})),s<0&&(s=0),e.hasClass("tp-videolayer")||e.find("iframe").length>0||e.find("video").length>0){var rt="iframe"+Math.round(Math.random()*1e5+1),at=e.data("videowidth"),vt=e.data("videoheight"),ut=e.data("videoattributes"),ri=e.data("ytid"),ui=e.data("vimeoid"),hr=e.data("videpreload"),tr=e.data("videomp4"),ir=e.data("videowebm"),dt=e.data("videocontrols"),hi="http",cr=e.data("videoloop")=="loop"?"loop":e.data("videoloop")=="loopandnoslidestop"?"loop":"";e.data("thumbimage")!=t&&e.data("videoposter")==t&&e.data("videoposter",e.data("thumbimage"));ri!=t&&String(ri).length>1&&e.find("iframe").length==0&&(hi="https",dt=="none"&&(ut=ut.replace("controls=1","controls=0"),ut.toLowerCase().indexOf("controls")==-1&&(ut=ut+"&controls=0")),e.append('<iframe style="visible:hidden" src="'+hi+"://www.youtube.com/embed/"+ri+"?"+ut+'" width="'+at+'" height="'+vt+'" style="width:'+at+"px;height:"+vt+'px"><\/iframe>'));ui!=t&&String(ui).length>1&&e.find("iframe").length==0&&e.append('<iframe style="visible:hidden" src="'+hi+"://player.vimeo.com/video/"+ui+"?"+ut+'" width="'+at+'" height="'+vt+'" style="width:'+at+"px;height:"+vt+'px"><\/iframe>');(tr!=t||ir!=t)&&e.find("video").length==0&&(dt!="controls"&&(dt=""),e.append('<video style="visible:hidden" class="" '+cr+" "+dt+' preload="'+hr+'" width="'+at+'" height="'+vt+'"poster="'+e.data("videoposter")+'"><source src="'+tr+'" type="video/mp4"" /><source src="'+ir+'" type="video/webm"" /><\/video>'));yt=!1;(e.data("autoplayonlyfirsttime")==!0||e.data("autoplayonlyfirsttime")=="true"||e.data("autoplay")==!0)&&(e.data("autoplay",!0),yt=!0);e.find("iframe").each(function(){var i=n(this),c,l,o,a;if(punchgs.TweenLite.to(i,.1,{autoAlpha:1,zIndex:0,transformStyle:"preserve-3d",z:0,rotationX:0,force3D:"auto"}),r()&&(c=i.attr("src"),i.attr("src",""),i.attr("src",c)),u.nextslCode2nighttend=e.data("nextslCode2nighttend"),e.data("videoposter")!=t&&e.data("videoposter").length>2&&e.data("autoplay")!=!0&&!ht&&(e.find(".tp-thumb-image").length==0?e.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+e.data("videoposter")+'); background-size:cover"><\/div>'):punchgs.TweenLite.set(e.find(".tp-thumb-image"),{autoAlpha:1})),i.attr("src").toLowerCase().indexOf("youtube")>=0)if(i.hasClass("HasListener"))o=e.data("player"),e.data("forcerewind")!="on"||r()||o.seekTo(0),(!r()&&e.data("autoplay")==!0||yt)&&e.data("timerplay",setTimeout(function(){o.playVideo()},e.data("start")));else try{i.attr("id",rt);l=setInterval(function(){YT!=t&&typeof YT.Player!=t&&typeof YT.Player!="undefined"&&(o=new YT.Player(rt,{events:{onStateChange:fi,onReady:function(i){var e=i.target.getVideoEmbedCode(),s=n("#"+e.split('id="')[1].split('"')[0]),u=s.closest(".tp-caption"),f=u.data("videorate"),h=u.data("videostart");f!=t&&i.target.setPlaybackRate(parseFloat(f));(u.data("autoplay")==!0||yt)&&i.target.playVideo();u.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(n(this),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});r()||o.playVideo()})}}}));i.addClass("HasListener");e.data("player",o);clearInterval(l)},100)}catch(b){}else if(i.attr("src").toLowerCase().indexOf("vimeo")>=0)if(i.hasClass("HasListener")){if(!r()&&(e.data("autoplay")==!0||e.data("forcerewind")=="on")){var i=e.find("iframe"),w=i.attr("id"),v=$f(w);e.data("forcerewind")=="on"&&v.api("seekTo",0);e.data("timerplay",setTimeout(function(){e.data("autoplay")==!0&&v.api("play")},e.data("start")))}}else{i.addClass("HasListener");i.attr("id",rt);for(var f=i.attr("src"),s={},y=f,p=/([^&=]+)=([^&]*)/g,h;h=p.exec(y);)s[decodeURIComponent(h[1])]=decodeURIComponent(h[2]);f=s.player_id!=t?f.replace(s.player_id,rt):f+"&player_id="+rt;try{f=f.replace("api=0","api=1")}catch(b){}f=f+"&api=1";i.attr("src",f);o=e.find("iframe")[0];a=setInterval(function(){$f!=t&&typeof $f(rt).api!=t&&typeof $f(rt).api!="undefined"&&($f(o).addEvent("ready",function(){ei(rt,yt)}),clearInterval(a))},100)}});r()&&e.data("disablevideoonmobile")==1&&e.find("video").remove();r()&&n(window).width()<569&&e.find("video").remove();e.find("video").length>0&&e.find("video").each(function(){var r=this,f=n(this),i;f.parent().hasClass("html5vid")||f.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"><\/div>');i=f.parent();r.addEventListener?r.addEventListener("loadedmetadata",function(){i.data("metaloaded",1)}):r.attachEvent("loadedmetadata",function(){i.data("metaloaded",1)});clearInterval(i.data("interval"));i.data("interval",setInterval(function(){var n,o;if(i.data("metaloaded")==1||r.duration!=NaN){if(clearInterval(i.data("interval")),i.hasClass("HasListener")||(i.addClass("HasListener"),e.data("dottedoverlay")!="none"&&e.data("dottedoverlay")!=t&&e.find(".tp-dottedoverlay").length!=1&&i.append('<div class="tp-dottedoverlay '+e.data("dottedoverlay")+'"><\/div>'),f.attr("control")==t&&(i.find(".tp-video-play-button").length==0&&i.append('<div class="tp-video-play-button"><i class="revicon-right-dir"><\/i><div class="tp-revstop"><\/div><\/div>'),i.find("video, .tp-poster, .tp-video-play-button").click(function(){i.hasClass("videoisplaying")?r.pause():r.play()})),(e.data("forcecover")==1||e.hasClass("fullscreenvideo"))&&(e.data("forcecover")==1&&(ft(i,u.container),i.addClass("fullcoveredvideo"),e.addClass("fullcoveredvideo")),i.css({width:"100%",height:"100%"})),r.addEventListener?r.addEventListener("play",function(){e.data("volume")=="mute"&&(r.muted=!0);i.addClass("videoisplaying");e.data("videoloop")=="loopandnoslidestop"?(u.videoplaying=!1,u.container.trigger("starttimer"),u.container.trigger("revolution.slide.onvideostop")):(u.videoplaying=!0,u.container.trigger("stoptimer"),u.container.trigger("revolution.slide.onvideoplay"))}):r.attachEvent("play",function(){e.data("volume")=="mute"&&(r.muted=!0);i.addClass("videoisplaying");e.data("videoloop")=="loopandnoslidestop"?(u.videoplaying=!1,u.container.trigger("starttimer"),u.container.trigger("revolution.slide.onvideostop")):(u.videoplaying=!0,u.container.trigger("stoptimer"),u.container.trigger("revolution.slide.onvideoplay"))}),r.addEventListener?r.addEventListener("pause",function(){i.removeClass("videoisplaying");u.videoplaying=!1;u.container.trigger("starttimer");u.container.trigger("revolution.slide.onvideostop")}):r.attachEvent("pause",function(){i.removeClass("videoisplaying");u.videoplaying=!1;u.container.trigger("starttimer");u.container.trigger("revolution.slide.onvideostop")}),r.addEventListener?r.addEventListener("ended",function(){i.removeClass("videoisplaying");u.videoplaying=!1;u.container.trigger("starttimer");u.container.trigger("revolution.slide.onvideostop");u.nextslCode2nighttend==!0&&u.container.revnext()}):r.attachEvent("ended",function(){i.removeClass("videoisplaying");u.videoplaying=!1;u.container.trigger("starttimer");u.container.trigger("revolution.slide.onvideostop");u.nextslCode2nighttend==!0&&u.container.revnext()})),n=!1,(e.data("autoplayonlyfirsttime")==!0||e.data("autoplayonlyfirsttime")=="true")&&(n=!0),o=16/9,e.data("aspectratio")=="4:3"&&(o=4/3),i.data("mediaAspect",o),i.closest(".tp-caption").data("forcecover")==1&&(ft(i,u.container),i.addClass("fullcoveredvideo")),f.css({display:"block"}),u.nextslCode2nighttend=e.data("nextslCode2nighttend"),(e.data("autoplay")==!0||n==!0)&&(e.data("videoloop")=="loopandnoslidestop"?(u.videoplaying=!1,u.container.trigger("starttimer"),u.container.trigger("revolution.slide.onvideostop")):(u.videoplaying=!0,u.container.trigger("stoptimer"),u.container.trigger("revolution.slide.onvideoplay")),e.data("forcerewind")!="on"||i.hasClass("videoisplaying")||r.currentTime>0&&(r.currentTime=0),e.data("volume")=="mute"&&(r.muted=!0),i.data("timerplay",setTimeout(function(){e.data("forcerewind")!="on"||i.hasClass("videoisplaying")||r.currentTime>0&&(r.currentTime=0);e.data("volume")=="mute"&&(r.muted=!0);r.play()},10+e.data("start")))),i.data("ww")==t&&i.data("ww",f.attr("width")),i.data("hh")==t&&i.data("hh",f.attr("height")),!e.hasClass("fullscreenvideo")&&e.data("forcecover")==1)try{i.width(i.data("ww")*u.bw);i.height(i.data("hh")*u.bh)}catch(s){}clearInterval(i.data("interval"))}}),100)});e.data("autoplay")==!0&&(setTimeout(function(){e.data("videoloop")!="loopandnoslidestop"&&(u.videoplaying=!0,u.container.trigger("stoptimer"))},200),e.data("videoloop")!="loopandnoslidestop"&&(u.videoplaying=!0,u.container.trigger("stoptimer")),(e.data("autoplayonlyfirsttime")==!0||e.data("autoplayonlyfirsttime")=="true")&&(e.data("autoplay",!1),e.data("autoplayonlyfirsttime",!1)))}if(pt=0,wt=0,e.find("img").length>0)l=e.find("img"),l.width()==0&&l.css({width:"auto"}),l.height()==0&&l.css({height:"auto"}),l.data("ww")==t&&l.width()>0&&l.data("ww",l.width()),l.data("hh")==t&&l.height()>0&&l.data("hh",l.height()),ct=l.data("ww"),et=l.data("hh"),ct==t&&(ct=0),et==t&&(et=0),l.width(ct*u.bw),l.height(et*u.bh),pt=l.width(),wt=l.height();else if(e.find("iframe").length>0||e.find("video").length>0){li=!1;l=e.find("iframe");l.length==0&&(l=e.find("video"),li=!0);l.css({display:"block"});e.data("ww")==t&&e.data("ww",l.width());e.data("hh")==t&&e.data("hh",l.height());var ct=e.data("ww"),et=e.data("hh"),h=e;h.data("fsize")==t&&h.data("fsize",parseInt(h.css("font-size"),0)||0);h.data("pt")==t&&h.data("pt",parseInt(h.css("paddingTop"),0)||0);h.data("pb")==t&&h.data("pb",parseInt(h.css("paddingBottom"),0)||0);h.data("pl")==t&&h.data("pl",parseInt(h.css("paddingLeft"),0)||0);h.data("pr")==t&&h.data("pr",parseInt(h.css("paddingRight"),0)||0);h.data("mt")==t&&h.data("mt",parseInt(h.css("marginTop"),0)||0);h.data("mb")==t&&h.data("mb",parseInt(h.css("marginBottom"),0)||0);h.data("ml")==t&&h.data("ml",parseInt(h.css("marginLeft"),0)||0);h.data("mr")==t&&h.data("mr",parseInt(h.css("marginRight"),0)||0);h.data("bt")==t&&h.data("bt",parseInt(h.css("borderTop"),0)||0);h.data("bb")==t&&h.data("bb",parseInt(h.css("borderBottom"),0)||0);h.data("bl")==t&&h.data("bl",parseInt(h.css("borderLeft"),0)||0);h.data("br")==t&&h.data("br",parseInt(h.css("borderRight"),0)||0);h.data("lh")==t&&h.data("lh",parseInt(h.css("lineHeight"),0)||0);ai=u.width;vi=u.height;ai>u.startwidth&&(ai=u.startwidth);vi>u.startheight&&(vi=u.startheight);e.hasClass("fullscreenvideo")?(s=0,o=0,e.data("x",0),e.data("y",0),yi=u.height,u.autoHeight=="on"&&(yi=u.container.height()),e.css({width:u.width,height:yi})):e.css({"font-size":h.data("fsize")*u.bw+"px","padding-top":h.data("pt")*u.bh+"px","padding-bottom":h.data("pb")*u.bh+"px","padding-left":h.data("pl")*u.bw+"px","padding-right":h.data("pr")*u.bw+"px","margin-top":h.data("mt")*u.bh+"px","margin-bottom":h.data("mb")*u.bh+"px","margin-left":h.data("ml")*u.bw+"px","margin-right":h.data("mr")*u.bw+"px","border-top":h.data("bt")*u.bh+"px","border-bottom":h.data("bb")*u.bh+"px","border-left":h.data("bl")*u.bw+"px","border-right":h.data("br")*u.bw+"px","line-height":h.data("lh")*u.bh+"px",height:et*u.bh+"px"});li==!1?(l.width(ct*u.bw),l.height(et*u.bh)):e.data("forcecover")==1||e.hasClass("fullscreenvideo")||(l.width(ct*u.bw),l.height(et*u.bh));pt=l.width();wt=l.height()}else e.find(".tp-resizeme, .tp-resizeme *").each(function(){d(n(this),u)}),e.hasClass("tp-resizeme")&&e.find("*").each(function(){d(n(this),u)}),d(e,u),wt=e.outerHeight(!0),pt=e.outerWidth(!0),tt=e.outerHeight(),bt=e.css("backgroundColor"),e.find(".frontcorner").css({borderWidth:tt+"px",left:0-tt+"px",borderRight:"0px solid transparent",borderTopColor:bt}),e.find(".frontcornertop").css({borderWidth:tt+"px",left:0-tt+"px",borderRight:"0px solid transparent",borderBottomColor:bt}),e.find(".backcorner").css({borderWidth:tt+"px",right:0-tt+"px",borderLeft:"0px solid transparent",borderBottomColor:bt}),e.find(".backcornertop").css({borderWidth:tt+"px",right:0-tt+"px",borderLeft:"0px solid transparent",borderTopColor:bt});u.fullScreenAlignForce=="on"&&(s=0,o=0);e.data("voffset")==t&&e.data("voffset",0);e.data("hoffset")==t&&e.data("hoffset",0);var pi=e.data("voffset")*y,wi=e.data("hoffset")*y,bi=u.startwidth*y,ki=u.startheight*y;if(u.fullScreenAlignForce=="on"&&(bi=u.container.width(),ki=u.container.height()),(e.data("x")=="center"||e.data("xcenter")=="center")&&(e.data("xcenter","center"),e.data("x",bi/2-e.outerWidth(!0)/2+wi)),(e.data("x")=="left"||e.data("xleft")=="left")&&(e.data("xleft","left"),e.data("x",0/y+wi)),(e.data("x")=="right"||e.data("xright")=="right")&&(e.data("xright","right"),e.data("x",(bi-e.outerWidth(!0)+wi)/y)),(e.data("y")=="center"||e.data("ycenter")=="center")&&(e.data("ycenter","center"),e.data("y",ki/2-e.outerHeight(!0)/2+pi)),(e.data("y")=="top"||e.data("ytop")=="top")&&(e.data("ytop","top"),e.data("y",0/u.bh+pi)),(e.data("y")=="bottom"||e.data("ybottom")=="bottom")&&(e.data("ybottom","bottom"),e.data("y",(ki-e.outerHeight(!0)+pi)/y)),e.data("start")==t&&e.data("start",1e3),di=e.data("easing"),di==t&&(di="punchgs.Power1.easeOut"),gt=e.data("start")/1e3,ni=e.data("speed")/1e3,rr=e.data("x")=="center"||e.data("xcenter")=="center"?e.data("x")+s:y*e.data("x")+s,ur=e.data("y")=="center"||e.data("ycenter")=="center"?e.data("y")+o:u.bh*e.data("y")+o,punchgs.TweenLite.set(e,{top:ur,left:rr,overwrite:"auto"}),b==0&&(ht=!0),e.data("timeline")==t||ht||(b!=2&&e.data("timeline").gotoAndPlay(0),ht=!0),!ht){e.data("timeline")!=t;function fr(){}function lr(){}if(p=new punchgs.TimelineLite({smoothChildTiming:!0,onStart:lr}),p.pause(),u.fullScreenAlignForce=="on",w=e,e.data("mySplitText")!=t&&e.data("mySplitText").revert(),(e.data("splitin")=="chars"||e.data("splitin")=="words"||e.data("splitin")=="lines"||e.data("splitout")=="chars"||e.data("splitout")=="words"||e.data("splitout")=="lines")&&(e.find("a").length>0?e.data("mySplitText",new punchgs.SplitText(e.find("a"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})):e.find(".tp-layer-inner-rotation").length>0?e.data("mySplitText",new punchgs.SplitText(e.find(".tp-layer-inner-rotation"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})):e.data("mySplitText",new punchgs.SplitText(e,{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})),e.addClass("splitted")),e.data("splitin")=="chars"&&(w=e.data("mySplitText").chars),e.data("splitin")=="words"&&(w=e.data("mySplitText").words),e.data("splitin")=="lines"&&(w=e.data("mySplitText").lines),c=a(),v=a(),e.data("repeat")!=t&&(repeatV=e.data("repeat")),e.data("yoyo")!=t&&(yoyoV=e.data("yoyo")),e.data("repeatdelay")!=t&&(repeatdelayV=e.data("repeatdelay")),e.hasClass("customin")?c=k(c,e.data("customin")):e.hasClass("randomrotate")?(c.scale=Math.random()*3+1,c.rotation=Math.round(Math.random()*200-100),c.x=Math.round(Math.random()*200-100),c.y=Math.round(Math.random()*200-100)):e.hasClass("lfr")||e.hasClass("skewfromright")?c.x=15+u.width:e.hasClass("lfl")||e.hasClass("skewfromleft")?c.x=-15-pt:e.hasClass("sfl")||e.hasClass("skewfromleftshort")?c.x=-50:e.hasClass("sfr")||e.hasClass("skewfromrightshort")?c.x=50:e.hasClass("lft")?c.y=-25-wt:e.hasClass("lfb")?c.y=25+u.height:e.hasClass("sft")?c.y=-50:e.hasClass("sfb")&&(c.y=50),e.hasClass("skewfromright")||e.hasClass("skewfromrightshort")?c.skewX=-85:(e.hasClass("skewfromleft")||e.hasClass("skewfromleftshort"))&&(c.skewX=85),(e.hasClass("fade")||e.hasClass("sft")||e.hasClass("sfl")||e.hasClass("sfb")||e.hasClass("skewfromleftshort")||e.hasClass("sfr")||e.hasClass("skewfromrightshort"))&&(c.opacity=0),si().toLowerCase()=="safari",ti=e.data("elementdelay")==t?0:e.data("elementdelay"),v.ease=c.ease=e.data("easing")==t?punchgs.Power1.easeInOut:e.data("easing"),c.data={},c.data.oldx=c.x,c.data.oldy=c.y,v.data={},v.data.oldx=v.x,v.data.oldy=v.y,c.x=c.x*y,c.y=c.y*y,gi=new punchgs.TimelineLite,b!=2)if(e.hasClass("customin"))w!=e&&p.add(punchgs.TweenLite.set(e,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",opacity:1,delay:0,overwrite:"all"})),c.visibility="hidden",v.visibility="visible",v.overwrite="all",v.opacity=1,v.onComplete=fr(),v.delay=gt,v.force3D="auto",p.add(gi.staggerFromTo(w,ni,c,v,ti),"frame0");else if(c.visibility="visible",c.transformPerspective=600,w!=e&&p.add(punchgs.TweenLite.set(e,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",opacity:1,delay:0,overwrite:"all"})),v.visibility="visible",v.delay=gt,v.onComplete=fr(),v.opacity=1,v.force3D="auto",e.hasClass("randomrotate")&&w!=e)for(i=0;i<w.length;i++)nr={},ii={},n.extend(nr,c),n.extend(ii,v),c.scale=Math.random()*3+1,c.rotation=Math.round(Math.random()*200-100),c.x=Math.round(Math.random()*200-100),c.y=Math.round(Math.random()*200-100),i!=0&&(ii.delay=gt+i*ti),p.append(punchgs.TweenLite.fromTo(w[i],ni,nr,ii),"frame0");else p.add(gi.staggerFromTo(w,ni,c,v,ti),"frame0");e.data("timeline",p);ar=[];e.data("frames")!=t&&(lt=e.data("frames"),lt=lt.replace(/\s+/g,""),lt=lt.replace("{",""),er=lt.split("}"),n.each(er,function(n,t){if(t.length>0){var i=oi(t);ci(e,u,i,"frame"+(n+10),y)}}));p=e.data("timeline");e.data("end")!=t&&(b==-1||b==2)?g(e,u,e.data("end")/1e3,c,"frame99",y):b==-1||b==2?g(e,u,999999,c,"frame99",y):g(e,u,200,c,"frame99",y);p=e.data("timeline");e.data("timeline",p);ot(e,y);p.resume()}}ht&&(st(e),ot(e,y),e.data("timeline")!=t&&(or=e.data("timeline").getTweensOf(),n.each(or,function(n,i){if(i.vars.data!=t){var r=i.vars.data.oldx*y,u=i.vars.data.oldy*y;if(i.progress()!=1&&i.progress()!=0)try{i.vars.x=r;i.vary.y=u}catch(f){}else i.progress()==1&&punchgs.TweenLite.set(i.target,{x:r,y:u})}})))});c=n("body").find("#"+u.container.attr("id")).find(".tp-bannertimer");c.data("opt",u);e!=t&&setTimeout(function(){e.resume()},30)},si=function(){var r=navigator.appName,t=navigator.userAgent,i,n=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return n&&(i=t.match(/version\/([\.\d]+)/i))!=null&&(n[2]=i[1]),n=n?[n[1],n[2]]:[r,navigator.appVersion,"-?"],n[0]},ki=function(){var r=navigator.appName,t=navigator.userAgent,i,n=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return n&&(i=t.match(/version\/([\.\d]+)/i))!=null&&(n[2]=i[1]),n=n?[n[1],n[2]]:[r,navigator.appVersion,"-?"],n[1]},d=function(n,i){n.data("fsize")==t&&n.data("fsize",parseInt(n.css("font-size"),0)||0);n.data("pt")==t&&n.data("pt",parseInt(n.css("paddingTop"),0)||0);n.data("pb")==t&&n.data("pb",parseInt(n.css("paddingBottom"),0)||0);n.data("pl")==t&&n.data("pl",parseInt(n.css("paddingLeft"),0)||0);n.data("pr")==t&&n.data("pr",parseInt(n.css("paddingRight"),0)||0);n.data("mt")==t&&n.data("mt",parseInt(n.css("marginTop"),0)||0);n.data("mb")==t&&n.data("mb",parseInt(n.css("marginBottom"),0)||0);n.data("ml")==t&&n.data("ml",parseInt(n.css("marginLeft"),0)||0);n.data("mr")==t&&n.data("mr",parseInt(n.css("marginRight"),0)||0);n.data("bt")==t&&n.data("bt",parseInt(n.css("borderTopWidth"),0)||0);n.data("bb")==t&&n.data("bb",parseInt(n.css("borderBottomWidth"),0)||0);n.data("bl")==t&&n.data("bl",parseInt(n.css("borderLeftWidth"),0)||0);n.data("br")==t&&n.data("br",parseInt(n.css("borderRightWidth"),0)||0);n.data("ls")==t&&n.data("ls",parseInt(n.css("letterSpacing"),0)||0);n.data("lh")==t&&n.data("lh",parseInt(n.css("lineHeight"),0)||"auto");n.data("minwidth")==t&&n.data("minwidth",parseInt(n.css("minWidth"),0)||0);n.data("minheight")==t&&n.data("minheight",parseInt(n.css("minHeight"),0)||0);n.data("maxwidth")==t&&n.data("maxwidth",parseInt(n.css("maxWidth"),0)||"none");n.data("maxheight")==t&&n.data("maxheight",parseInt(n.css("maxHeight"),0)||"none");n.data("wii")==t&&n.data("wii",parseInt(n.css("width"),0)||0);n.data("hii")==t&&n.data("hii",parseInt(n.css("height"),0)||0);n.data("wan")==t&&n.data("wan",n.css("-webkit-transition"));n.data("moan")==t&&n.data("moan",n.css("-moz-animation-transition"));n.data("man")==t&&n.data("man",n.css("-ms-animation-transition"));n.data("ani")==t&&n.data("ani",n.css("transition"));n.hasClass("tp-splitted")||(n.css("-webkit-transition","none"),n.css("-moz-transition","none"),n.css("-ms-transition","none"),n.css("transition","none"),punchgs.TweenLite.set(n,{fontSize:Math.round(n.data("fsize")*i.bw)+"px",letterSpacing:Math.floor(n.data("ls")*i.bw)+"px",paddingTop:Math.round(n.data("pt")*i.bh)+"px",paddingBottom:Math.round(n.data("pb")*i.bh)+"px",paddingLeft:Math.round(n.data("pl")*i.bw)+"px",paddingRight:Math.round(n.data("pr")*i.bw)+"px",marginTop:n.data("mt")*i.bh+"px",marginBottom:n.data("mb")*i.bh+"px",marginLeft:n.data("ml")*i.bw+"px",marginRight:n.data("mr")*i.bw+"px",borderTopWidth:Math.round(n.data("bt")*i.bh)+"px",borderBottomWidth:Math.round(n.data("bb")*i.bh)+"px",borderLeftWidth:Math.round(n.data("bl")*i.bw)+"px",borderRightWidth:Math.round(n.data("br")*i.bw)+"px",lineHeight:Math.round(n.data("lh")*i.bh)+"px",minWidth:n.data("minwidth")*i.bw+"px",minHeight:n.data("minheight")*i.bh+"px",overwrite:"auto"}),setTimeout(function(){n.css("-webkit-transition",n.data("wan"));n.css("-moz-transition",n.data("moan"));n.css("-ms-transition",n.data("man"));n.css("transition",n.data("ani"))},30),n.data("maxheight")!="none"&&n.css({maxHeight:n.data("maxheight")*i.bh+"px"}),n.data("maxwidth")!="none"&&n.css({maxWidth:n.data("maxwidth")*i.bw+"px"}))},ot=function(i,r){i.find(".rs-pendulum").each(function(){var i=n(this),u,f;i.data("timeline")==t&&(i.data("timeline",new punchgs.TimelineLite),u=i.data("startdeg")==t?-20:i.data("startdeg"),f=i.data("enddeg")==t?20:i.data("enddeg"),speed=i.data("speed")==t?2:i.data("speed"),origin=i.data("origin")==t?"50% 50%":i.data("origin"),easing=i.data("ease")==t?punchgs.Power2.easeInOut:i.data("ease"),u=u*r,f=f*r,i.data("timeline").append(new punchgs.TweenLite.fromTo(i,speed,{force3D:"auto",rotation:u,transformOrigin:origin},{rotation:f,ease:easing})),i.data("timeline").append(new punchgs.TweenLite.fromTo(i,speed,{force3D:"auto",rotation:f,transformOrigin:origin},{rotation:u,ease:easing,onComplete:function(){i.data("timeline").restart()}})))});i.find(".rs-slideloop").each(function(){var i=n(this),u,f;i.data("timeline")==t&&(i.data("timeline",new punchgs.TimelineLite),u=i.data("xs")==t?0:i.data("xs"),f=i.data("ys")==t?0:i.data("ys"),xe=i.data("xe")==t?0:i.data("xe"),ye=i.data("ye")==t?0:i.data("ye"),speed=i.data("speed")==t?2:i.data("speed"),easing=i.data("ease")==t?punchgs.Power2.easeInOut:i.data("ease"),u=u*r,f=f*r,xe=xe*r,ye=ye*r,i.data("timeline").append(new punchgs.TweenLite.fromTo(i,speed,{force3D:"auto",x:u,y:f},{x:xe,y:ye,ease:easing})),i.data("timeline").append(new punchgs.TweenLite.fromTo(i,speed,{force3D:"auto",x:xe,y:ye},{x:u,y:f,onComplete:function(){i.data("timeline").restart()}})))});i.find(".rs-pulse").each(function(){var i=n(this),r,u;i.data("timeline")==t&&(i.data("timeline",new punchgs.TimelineLite),r=i.data("zoomstart")==t?0:i.data("zoomstart"),u=i.data("zoomend")==t?0:i.data("zoomend"),speed=i.data("speed")==t?2:i.data("speed"),easing=i.data("ease")==t?punchgs.Power2.easeInOut:i.data("ease"),i.data("timeline").append(new punchgs.TweenLite.fromTo(i,speed,{force3D:"auto",scale:r},{scale:u,ease:easing})),i.data("timeline").append(new punchgs.TweenLite.fromTo(i,speed,{force3D:"auto",scale:u},{scale:r,onComplete:function(){i.data("timeline").restart()}})))});i.find(".rs-wave").each(function(){var i=n(this),u;if(i.data("timeline")==t){i.data("timeline",new punchgs.TimelineLite);var f=i.data("angle")==t?10:i.data("angle"),e=i.data("radius")==t?10:i.data("radius"),o=i.data("speed")==t?-20:i.data("speed"),s=i.data("origin")==t?-20:i.data("origin");f=f*r;e=e*r;u={a:0,ang:f,element:i,unit:e};i.data("timeline").append(new punchgs.TweenLite.fromTo(u,o,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var n=u.a*(Math.PI/180);punchgs.TweenLite.to(u.element,.1,{force3D:"auto",x:Math.cos(n)*u.unit,y:u.unit*(1-Math.sin(n))})},onComplete:function(){i.data("timeline").restart()}}))}})},st=function(i){i.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var i=n(this);i.data("timeline")!=t&&(i.data("timeline").pause(),i.data("timeline",null))})},hi=function(i,u){var f=0,e=i.find(".tp-caption"),o=u.container.find(".tp-static-layers").find(".tp-caption");return n.each(o,function(n,t){e.push(t)}),e.each(function(){var o=-1,i=n(this),h,c,s;if(i.hasClass("tp-static-layer")&&((i.data("startslide")==-1||i.data("startslide")=="-1")&&i.data("startslide",0),(i.data("endslide")==-1||i.data("endslide")=="-1")&&i.data("endslide",u.slCode2nightmount),i.hasClass("tp-is-shown")?i.data("startslide")>u.next||i.data("endslide")<u.next?(o=2,i.removeClass("tp-is-shown")):o=0:o=2),o!=0){if(st(i),i.find("iframe").length>0){punchgs.TweenLite.to(i.find("iframe"),.2,{autoAlpha:0});r()&&i.find("iframe").remove();try{var l=i.find("iframe"),a=l.attr("id"),v=$f(a);v.api("pause");clearTimeout(i.data("timerplay"))}catch(w){}try{h=i.data("player");h.stopVideo();clearTimeout(i.data("timerplay"))}catch(w){}}if(i.find("video").length>0)try{i.find("video").each(function(){var t=n(this).parent(),r=t.attr("id"),i;clearTimeout(t.data("timerplay"));i=this;i.pause()})}catch(w){}try{var e=i.data("timeline"),y=e.getLabelTime("frame99"),p=e.time();y>p&&(c=e.getTweensOf(i),n.each(c,function(n,t){n!=0&&t.pause()}),i.css("opacity")!=0?(s=i.data("endspeed")==t?i.data("speed"):i.data("endspeed"),s>f&&(f=s),e.play("frame99")):e.progress(1,!1))}catch(w){}}}),f},ci=function(n,i,r,u,f){var o=n.data("timeline"),s=new punchgs.TimelineLite,e=n;r.typ=="chars"?e=n.data("mySplitText").chars:r.typ=="words"?e=n.data("mySplitText").words:r.typ=="lines"&&(e=n.data("mySplitText").lines);r.animation.ease=r.ease;r.animation.rotationZ!=t&&(r.animation.rotation=r.animation.rotationZ);r.animation.data={};r.animation.data.oldx=r.animation.x;r.animation.data.oldy=r.animation.y;r.animation.x=r.animation.x*f;r.animation.y=r.animation.y*f;o.add(s.staggerTo(e,r.speed,r.animation,r.elementdelay),r.start);o.addLabel(u,r.start);n.data("timeline",o)},g=function(n,i,r,u,f,e){var h=n.data("timeline"),v=new punchgs.TimelineLite,o=a(),c=n.data("endspeed")==t?n.data("speed"):n.data("endspeed"),s,l;o.ease=n.data("endeasing")==t?punchgs.Power1.easeInOut:n.data("endeasing");c=c/1e3;n.hasClass("ltr")||n.hasClass("ltl")||n.hasClass("str")||n.hasClass("stl")||n.hasClass("ltt")||n.hasClass("ltb")||n.hasClass("stt")||n.hasClass("stb")||n.hasClass("skewtoright")||n.hasClass("skewtorightshort")||n.hasClass("skewtoleft")||n.hasClass("skewtoleftshort")||n.hasClass("fadeout")||n.hasClass("randomrotateout")?(n.hasClass("skewtoright")||n.hasClass("skewtorightshort")?o.skewX=35:(n.hasClass("skewtoleft")||n.hasClass("skewtoleftshort"))&&(o.skewX=-35),n.hasClass("ltr")||n.hasClass("skewtoright")?o.x=i.width+60:n.hasClass("ltl")||n.hasClass("skewtoleft")?o.x=0-(i.width+60):n.hasClass("ltt")?o.y=0-(i.height+60):n.hasClass("ltb")?o.y=i.height+60:n.hasClass("str")||n.hasClass("skewtorightshort")?(o.x=50,o.opacity=0):n.hasClass("stl")||n.hasClass("skewtoleftshort")?(o.x=-50,o.opacity=0):n.hasClass("stt")?(o.y=-50,o.opacity=0):n.hasClass("stb")?(o.y=50,o.opacity=0):n.hasClass("randomrotateout")?(o.x=Math.random()*i.width,o.y=Math.random()*i.height,o.scale=Math.random()*2+.3,o.rotation=Math.random()*360-180,o.opacity=0):n.hasClass("fadeout")&&(o.opacity=0),n.hasClass("skewtorightshort")?o.x=270:n.hasClass("skewtoleftshort")&&(o.x=-270),o.data={},o.data.oldx=o.x,o.data.oldy=o.y,o.x=o.x*e,o.y=o.y*e,o.overwrite="auto",s=n,s=n,n.data("splitout")=="chars"?s=n.data("mySplitText").chars:n.data("splitout")=="words"?s=n.data("mySplitText").words:n.data("splitout")=="lines"&&(s=n.data("mySplitText").lines),l=n.data("endelementdelay")==t?0:n.data("endelementdelay"),h.add(v.staggerTo(s,c,o,l),r)):n.hasClass("customout")?(o=k(o,n.data("customout")),s=n,n.data("splitout")=="chars"?s=n.data("mySplitText").chars:n.data("splitout")=="words"?s=n.data("mySplitText").words:n.data("splitout")=="lines"&&(s=n.data("mySplitText").lines),l=n.data("endelementdelay")==t?0:n.data("endelementdelay"),o.onStart=function(){punchgs.TweenLite.set(n,{transformPerspective:o.transformPerspective,transformOrigin:o.transformOrigin,overwrite:"auto"})},o.data={},o.data.oldx=o.x,o.data.oldy=o.y,o.x=o.x*e,o.y=o.y*e,h.add(v.staggerTo(s,c,o,l),r)):(u.delay=0,h.add(punchgs.TweenLite.to(n,c,u),r));h.addLabel(f,r);n.data("timeline",h)},li=function(t,i){t.children().each(function(){try{n(this).die("click")}catch(t){}try{n(this).die("mouseenter")}catch(t){}try{n(this).die("mouseleave")}catch(t){}try{n(this).unbind("hover")}catch(t){}});try{t.die("click","mouseenter","mouseleave")}catch(r){}clearInterval(i.cdint);t=null},ai=function(i,u){var f,e;if(u.cd=0,u.loop=0,u.looptogo=u.stopAfterLoops!=t&&u.stopAfterLoops>-1?u.stopAfterLoops:9999999,u.lastslidetoshow=u.stopAtSlide!=t&&u.stopAtSlide>-1?u.stopAtSlide:999,u.stopLoop="off",u.looptogo==0&&(u.stopLoop="on"),u.slCode2nightmount>1&&!(u.stopAfterLoops==0&&u.stopAtSlide==1)){f=i.find(".tp-bannertimer");i.on("stoptimer",function(){var t=n(this).find(".tp-bannertimer");t.data("tween").pause();u.hideTimerBar=="on"&&t.css({visibility:"hidden"})});i.on("starttimer",function(){u.conthover!=1&&u.videoplaying!=!0&&u.width>u.hideSliderAtLimit&&u.bannertimeronpause!=!0&&u.overnav!=!0&&(u.stopLoop=="on"&&u.next==u.lastslidetoshow-1||u.noloopanymore==1?u.noloopanymore=1:(f.css({visibility:"visible"}),f.data("tween").resume()));u.hideTimerBar=="on"&&f.css({visibility:"hidden"})});i.on("restarttimer",function(){var t=n(this).find(".tp-bannertimer");u.stopLoop=="on"&&u.next==u.lastslidetoshow-1||u.noloopanymore==1?u.noloopanymore=1:(t.css({visibility:"visible"}),t.data("tween").kill(),t.data("tween",punchgs.TweenLite.fromTo(t,u.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:e,delay:1})));u.hideTimerBar=="on"&&t.css({visibility:"hidden"})});i.on("nulltimer",function(){f.data("tween").pause(0);u.hideTimerBar=="on"&&f.css({visibility:"hidden"})});e=function(){n("body").find(i).length==0&&(li(i,u),clearInterval(u.cdint));i.trigger("revolution.slide.slCode2nighttend");i.data("conthover-changed")==1&&(u.conthover=i.data("conthover"),i.data("conthover-changed",0));u.act=u.next;u.next=u.next+1;u.next>i.find(">ul >li").length-1&&(u.next=0,u.looptogo=u.looptogo-1,u.looptogo<=0&&(u.stopLoop="on"));u.stopLoop=="on"&&u.next==u.lastslidetoshow-1?(i.find(".tp-bannertimer").css({visibility:"hidden"}),i.trigger("revolution.slide.onstop"),u.noloopanymore=1):f.data("tween").restart();b(i,u)};f.data("tween",punchgs.TweenLite.fromTo(f,u.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:e,delay:1}));f.data("opt",u);i.hover(function(){if(u.onHoverStop=="on"&&!r()){i.trigger("stoptimer");i.trigger("revolution.slide.onpause");var f=i.find(">ul >li:eq("+u.next+") .slotholder");f.find(".defaultimg").each(function(){var i=n(this);i.data("kenburn")!=t&&i.data("kenburn").pause()})}},function(){if(i.data("conthover")!=1){i.trigger("revolution.slide.onresume");i.trigger("starttimer");var r=i.find(">ul >li:eq("+u.next+") .slotholder");r.find(".defaultimg").each(function(){var i=n(this);i.data("kenburn")!=t&&i.data("kenburn").play()})}})}},r=function(){var n=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],t=!1;for(i in n)navigator.userAgent.split(n[i]).length>1&&(t=!0);return t},s=function(n,t,i){var u=t.data("owidth"),f=t.data("oheight");if(u/f>i.width/i.height){var e=i.container.width()/u,o=f*e,r=o/i.container.height()*n;return n=n*(100/r),r=100,n=n,n+"% "+r+"% 1"}var e=i.container.width()/u,o=f*e,r=o/i.container.height()*n;return n+"% "+r+"%"},nt=function(i,r,f,e){var b,d,g,h,a;try{b=i.find(">ul:first-child >li:eq("+r.act+")")}catch(ft){b=i.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var nt=i.find(">ul:first-child >li:eq("+r.next+")"),o=nt.find(".slotholder"),tt=o.data("bgposition"),it=o.data("bgpositionend"),v=o.data("zoomstart")/100,y=o.data("zoomend")/100,k=o.data("rotationstart"),w=o.data("rotationend"),c=o.data("bgfit"),l=o.data("bgfitend"),rt=o.data("easeme"),ut=o.data("duration")/1e3,p=100;c==t&&(c=100);l==t&&(l=100);d=c;g=l;c=s(c,o,r);l=s(l,o,r);p=s(100,o,r);v==t&&(v=1);y==t&&(y=1);k==t&&(k=0);w==t&&(w=0);v<1&&(v=1);y<1&&(y=1);h={};h.w=parseInt(p.split(" ")[0],0);h.h=parseInt(p.split(" ")[1],0);a=!1;p.split(" ")[2]=="1"&&(a=!0);o.find(".defaultimg").each(function(){var f=n(this);o.find(".kenburnimg").length==0?o.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="'+f.attr("src")+'" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:'+h.w+"%;height:"+h.h+'%;"><\/div>'):o.find(".kenburnimg img").css({width:h.w+"%",height:h.h+"%"});var t=o.find(".kenburnimg img"),i=ht(r,tt,c,t,a),s=ht(r,it,l,t,a);if(a&&(i.w=d/100,s.w=g/100),e){punchgs.TweenLite.set(t,{autoAlpha:0,transformPerspective:1200,transformOrigin:"0% 0%",top:0,left:0,scale:i.w,x:i.x,y:i.y});var v=i.w,y=v*t.width()-r.width,p=v*t.height()-r.height,b=Math.abs(i.x/y*100),k=Math.abs(i.y/p*100);p==0&&(k=0);y==0&&(b=0);f.data("bgposition",b+"% "+k+"%");u(8)||f.data("currotate",ct(t));u(8)||f.data("curscale",h.w*v+"%  "+(h.h*v+"%"));o.find(".kenburnimg").remove()}else f.data("kenburn",punchgs.TweenLite.fromTo(t,ut,{autoAlpha:1,force3D:punchgs.force3d,transformOrigin:"0% 0%",top:0,left:0,scale:i.w,x:i.x,y:i.y},{autoAlpha:1,rotationZ:w,ease:rt,x:s.x,y:s.y,scale:s.w,onUpdate:function(){var n=t[0]._gsTransform.scaleX,i=n*t.width()-r.width,e=n*t.height()-r.height,o=Math.abs(t[0]._gsTransform.x/i*100),s=Math.abs(t[0]._gsTransform.y/e*100);e==0&&(s=0);i==0&&(o=0);f.data("bgposition",o+"% "+s+"%");u(8)||f.data("currotate",ct(t));u(8)||f.data("curscale",h.w*n+"%  "+(h.h*n+"%"))}}))})},ht=function(n,t,i,r,u){var f={};f.w=u?parseInt(i.split(" ")[1],0)/100:parseInt(i.split(" ")[0],0)/100;switch(t){case"left top":case"top left":f.x=0;f.y=0;break;case"center top":case"top center":f.x=((0-r.width())*f.w+parseInt(n.width,0))/2;f.y=0;break;case"top right":case"right top":f.x=(0-r.width())*f.w+parseInt(n.width,0);f.y=0;break;case"center left":case"left center":f.x=0;f.y=((0-r.height())*f.w+parseInt(n.height,0))/2;break;case"center center":f.x=((0-r.width())*f.w+parseInt(n.width,0))/2;f.y=((0-r.height())*f.w+parseInt(n.height,0))/2;break;case"center right":case"right center":f.x=(0-r.width())*f.w+parseInt(n.width,0);f.y=((0-r.height())*f.w+parseInt(n.height,0))/2;break;case"bottom left":case"left bottom":f.x=0;f.y=(0-r.height())*f.w+parseInt(n.height,0);break;case"bottom center":case"center bottom":f.x=((0-r.width())*f.w+parseInt(n.width,0))/2;f.y=(0-r.height())*f.w+parseInt(n.height,0);break;case"bottom right":case"right bottom":f.x=(0-r.width())*f.w+parseInt(n.width,0);f.y=(0-r.height())*f.w+parseInt(n.height,0)}return f},ct=function(n){var i=n.css("-webkit-transform")||n.css("-moz-transform")||n.css("-ms-transform")||n.css("-o-transform")||n.css("transform"),t;if(i!=="none")var r=i.split("(")[1].split(")")[0].split(","),u=r[0],f=r[1],t=Math.round(Math.atan2(f,u)*(180/Math.PI));else t=0;return t<0?t+=360:t},vi=function(i,r){var u;try{u=i.find(">ul:first-child >li:eq("+r.act+")")}catch(e){u=i.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var f=i.find(">ul:first-child >li:eq("+r.next+")"),o=u.find(".slotholder"),s=f.find(".slotholder");i.find(".defaultimg").each(function(){var i=n(this);punchgs.TweenLite.killTweensOf(i,!1);punchgs.TweenLite.set(i,{scale:1,rotationZ:0});punchgs.TweenLite.killTweensOf(i.data("kenburn img"),!1);i.data("kenburn")!=t&&i.data("kenburn").pause();i.data("currotate")!=t&&i.data("bgposition")!=t&&i.data("curscale")!=t&&punchgs.TweenLite.set(i,{rotation:i.data("currotate"),backgroundPosition:i.data("bgposition"),backgroundSize:i.data("curscale")});i!=t&&i.data("kenburn img")!=t&&i.data("kenburn img").length>0&&punchgs.TweenLite.set(i.data("kenburn img"),{autoAlpha:0})})},yi=function(t,i){if(r()&&i.parallaxDisableOnMobile=="on")return!1;if(t.find(">ul:first-child >li").each(function(){for(var r=n(this),t=1;t<=10;t++)r.find(".rs-parallaxlevel-"+t).each(function(){var r=n(this);r.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:'+r.css("zIndex")+'" class="tp-parallax-container" data-parallaxlevel="'+i.parallaxLevels[t-1]+'"><\/div>')})}),i.parallax=="mouse"||i.parallax=="scroll+mouse"||i.parallax=="mouse+scroll"){t.mouseenter(function(n){var i=t.find(".current-sr-slide-visible"),r=t.offset().top,u=t.offset().left,f=n.pageX-u,e=n.pageY-r;i.data("enterx",f);i.data("entery",e)});t.on("mousemove.hoverdir, mouseleave.hoverdir",function(r){var u=t.find(".current-sr-slide-visible");switch(r.type){case"mousemove":var f=t.offset().top,e=t.offset().left,o=u.data("enterx"),s=u.data("entery"),h=o-(r.pageX-e),c=s-(r.pageY-f);u.find(".tp-parallax-container").each(function(){var t=n(this),r=parseInt(t.data("parallaxlevel"),0)/100,u=h*r,f=c*r;i.parallax=="scroll+mouse"||i.parallax=="mouse+scroll"?punchgs.TweenLite.to(t,.4,{force3D:"auto",x:u,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(t,.4,{force3D:"auto",x:u,y:f,ease:punchgs.Power3.easeOut,overwrite:"all"})});break;case"mouseleave":u.find(".tp-parallax-container").each(function(){var t=n(this);i.parallax=="scroll+mouse"||i.parallax=="mouse+scroll"?punchgs.TweenLite.to(t,1.5,{force3D:"auto",x:0,ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(t,1.5,{force3D:"auto",x:0,y:0,ease:punchgs.Power3.easeOut})})}});r()&&(window.ondeviceorientation=function(i){var r=Math.round(i.beta||0),u=Math.round(i.gamma||0),s=t.find(".current-sr-slide-visible"),f,e,o;n(window).width()>n(window).height()&&(f=u,u=r,r=f);e=360/t.width()*u;o=180/t.height()*r;s.find(".tp-parallax-container").each(function(){var t=n(this),i=parseInt(t.data("parallaxlevel"),0)/100,r=e*i,u=o*i;punchgs.TweenLite.to(t,.2,{force3D:"auto",x:r,y:u,ease:punchgs.Power3.easeOut})})})}if(i.parallax=="scroll"||i.parallax=="scroll+mouse"||i.parallax=="mouse+scroll")n(window).on("scroll",function(){h(t,i)})},h=function(t,i){var a,s,h;if(r()&&i.parallaxDisableOnMobile=="on")return!1;var e=t.offset().top,c=n(window).scrollTop(),o=e+t.height()/2,l=e+t.height()/2-c,f=n(window).height()/2,u=f-l;o<f&&(u=u-(f-o));a=t.find(".current-sr-slide-visible");t.find(".tp-parallax-container").each(function(){var t=n(this),r=parseInt(t.data("parallaxlevel"),0)/100,i=u*r;t.data("parallaxoffset",i);punchgs.TweenLite.to(t,.2,{force3D:"auto",y:i,ease:punchgs.Power3.easeOut})});i.parallaxBgFreeze!="on"&&(s=i.parallaxLevels[0]/100,h=u*s,punchgs.TweenLite.to(t,.2,{force3D:"auto",y:h,ease:punchgs.Power3.easeOut}))},pi=function(i,r){var s=i.parent(),u,e,o,h,c;(r.navigationType=="thumb"||r.navsecond=="both")&&s.append('<div class="tp-bullets tp-thumbs '+r.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"><\/div><\/div><\/div>');u=s.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");e=u.parent();e.width(r.thumbWidth*r.thumbAmount);e.height(r.thumbHeight);e.parent().width(r.thumbWidth*r.thumbAmount);e.parent().height(r.thumbHeight);i.find(">ul:first >li").each(function(n){var f=i.find(">ul:first >li:eq("+n+")"),o=f.find(".defaultimg").css("backgroundColor"),e,s;e=f.data("thumb")!=t?f.data("thumb"):f.find("img:first").attr("src");u.append('<div class="bullet thumb" style="background-color:'+o+";position:relative;width:"+r.thumbWidth+"px;height:"+r.thumbHeight+"px;background-image:url("+e+') !important;background-size:cover;background-position:center center;"><\/div>');s=u.find(".bullet:first")});o=10;u.find(".bullet").each(function(t){var u=n(this);t==r.slCode2nightmount-1&&u.addClass("last");t==0&&u.addClass("first");u.width(r.thumbWidth);u.height(r.thumbHeight);o<u.outerWidth(!0)&&(o=u.outerWidth(!0));u.click(function(){r.transition==0&&u.index()!=r.act&&(r.next=u.index(),f(r,i))})});h=o*i.find(">ul:first >li").length;c=u.parent().width();r.thumbWidth=o;c<h&&(n(document).mousemove(function(t){n("body").data("mousex",t.pageX)}),u.parent().mouseenter(function(){var r=n(this),t;r.addClass("over");var o=r.offset(),f=n("body").data("mousex")-o.left,u=r.width(),s=r.find(".bullet:first").outerWidth(!0),e=s*i.find(">ul:first >li").length,h=e-u+15,c=h/u;f=f-30;t=0-f*c;t>0&&(t=0);t<0-e+u&&(t=0-e+u);tt(r,t,200)}),u.parent().mousemove(function(){var f=n(this),o=f.offset(),t=n("body").data("mousex")-o.left,r=f.width(),s=f.find(".bullet:first").outerWidth(!0),e=s*i.find(">ul:first >li").length-1,h=e-r+15,c=h/r,u;t=t-3;t<6&&(t=0);t+3>r-6&&(t=r);u=0-t*c;u>0&&(u=0);u<0-e+r&&(u=0-e+r);tt(f,u,0)}),u.parent().mouseleave(function(){var t=n(this);t.removeClass("over");lt(i)}))},lt=function(n){var e=n.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),t=e.parent(),h=t.offset(),f=t.find(".bullet:first").outerWidth(!0),o=t.find(".bullet.selected").index()*f,r=t.width(),f=t.find(".bullet:first").outerWidth(!0),u=f*n.find(">ul:first >li").length,s=u-r,c=s/r,i=0-o;i>0&&(i=0);i<0-u+r&&(i=0-u+r);t.hasClass("over")||tt(t,i,200)},tt=function(n,t){punchgs.TweenLite.to(n.find(".tp-thumbcontainer"),.2,{force3D:"auto",left:t,ease:punchgs.Power3.easeOut,overwrite:"auto"})}}(jQuery)(function(n){typeof define=="function"&&define.amd&&define.amd.jQuery?define(["jquery"],n):n(jQuery)}(function(n){function ft(t){return t&&t.allowPageScroll===undefined&&(t.swipe!==undefined||t.swipeStatus!==undefined)&&(t.allowPageScroll=p),t.click!==undefined&&t.tap===undefined&&(t.tap=t.click),t||(t={}),t=n.extend({},n.fn.swipe.defaults,t),this.each(function(){var r=n(this),i=r.data(h);i||(i=new et(this,t),r.data(h,i))})}function et(ft,et){function di(t){if(!vu()&&!(n(t.target).closest(et.excludedElements,ot).length>0)){var u=t.originalEvent?t.originalEvent:t,f,e=r?u.touches[0]:u;return(ht=rt,r?ct=u.touches.length:t.preventDefault(),at=0,vt=null,bt=null,lt=0,kt=0,dt=0,yt=1,wt=0,st=pu(),si=bu(),br(),!r||ct===et.fingers||et.fingers===l||ui()?(er(0,e),wi=ni(),ct==2&&(er(1,u.touches[1]),kt=dt=or(st[0].start,st[1].start)),(et.swipeStatus||et.pinchStatus)&&(f=pt(u,ht))):f=!1,f===!1)?(ht=i,pt(u,ht),f):(et.hold&&(ki=setTimeout(n.proxy(function(){ot.trigger("hold",[u.target]);et.hold&&(f=et.hold.call(ot,u,u.target))},this),et.longTapThreshold)),ai(!0),null)}}function gi(n){var u=n.originalEvent?n.originalEvent:n,o,h,f,e,c;ht===t||ht===i||kr()||(h=r?u.touches[0]:u,f=dr(h),hi=ni(),r&&(ct=u.touches.length),et.hold&&clearTimeout(ki),ht=s,ct==2&&(kt==0?(er(1,u.touches[1]),kt=dt=or(st[0].start,st[1].start)):(dr(u.touches[1]),dt=or(st[0].end,st[1].end),bt=du(st[0].end,st[1].end)),yt=ku(kt,dt),wt=Math.abs(kt-dt)),ct===et.fingers||et.fingers===l||!r||ui()?(vt=tf(f.start,f.end),iu(n,vt),at=gu(f.start,f.end),lt=nu(),wu(vt,at),(et.swipeStatus||et.pinchStatus)&&(o=pt(u,ht)),(!et.triggerOnTouchEnd||et.triggerOnTouchLeave)&&(e=!0,et.triggerOnTouchLeave&&(c=rf(this),e=uf(f.end,c)),!et.triggerOnTouchEnd&&e?ht=ir(s):et.triggerOnTouchLeave&&!e&&(ht=ir(t)),(ht==i||ht==t)&&pt(u,ht))):(ht=i,pt(u,ht)),o===!1&&(ht=i,pt(u,ht)))}function nr(n){var u=n.originalEvent;return r&&u.touches.length>0?(au(),!0):(kr()&&(ct=bi),hi=ni(),lt=nu(),ur()||!rr()?(ht=i,pt(u,ht)):et.triggerOnTouchEnd||et.triggerOnTouchEnd==!1&&ht===s?(n.preventDefault(),ht=t,pt(u,ht)):!et.triggerOnTouchEnd&&pr()?(ht=t,ri(u,ht,w)):ht===s&&(ht=i,pt(u,ht)),ai(!1),null)}function ii(){ct=0;hi=0;wi=0;kt=0;dt=0;yt=1;br();ai(!1)}function tr(n){var i=n.originalEvent;et.triggerOnTouchLeave&&(ht=ir(t),pt(i,ht))}function sr(){ot.unbind(ei,di);ot.unbind(oi,ii);ot.unbind(yi,gi);ot.unbind(pi,nr);ti&&ot.unbind(ti,tr);ai(!1)}function ir(n){var r=n,f=hr(),u=rr(),e=ur();return!f||e?r=i:u&&n==s&&(!et.triggerOnTouchEnd||et.triggerOnTouchLeave)?r=t:!u&&n==t&&et.triggerOnTouchLeave&&(r=i),r}function pt(n,u){var f=undefined;return uu()||ar()?f=ri(n,u,g):(ru()||ui())&&f!==!1&&(f=ri(n,u,nt)),cu()&&f!==!1?f=ri(n,u,tt):lu()&&f!==!1?f=ri(n,u,it):hu()&&f!==!1&&(f=ri(n,u,w)),u===i&&ii(n),u===t&&(r?n.touches.length==0&&ii(n):ii(n)),f}function ri(r,s,h){var c=undefined;if(h==g){if(ot.trigger("swipeStatus",[s,vt||null,at||0,lt||0,ct,st]),et.swipeStatus&&(c=et.swipeStatus.call(ot,r,s,vt||null,at||0,lt||0,ct,st),c===!1))return!1;if(s==t&&lr()){if(ot.trigger("swipe",[vt,at,lt,ct,st]),et.swipe&&(c=et.swipe.call(ot,r,vt,at,lt,ct,st),c===!1))return!1;switch(vt){case u:ot.trigger("swipeLeft",[vt,at,lt,ct,st]);et.swipeLeft&&(c=et.swipeLeft.call(ot,r,vt,at,lt,ct,st));break;case f:ot.trigger("swipeRight",[vt,at,lt,ct,st]);et.swipeRight&&(c=et.swipeRight.call(ot,r,vt,at,lt,ct,st));break;case e:ot.trigger("swipeUp",[vt,at,lt,ct,st]);et.swipeUp&&(c=et.swipeUp.call(ot,r,vt,at,lt,ct,st));break;case o:ot.trigger("swipeDown",[vt,at,lt,ct,st]);et.swipeDown&&(c=et.swipeDown.call(ot,r,vt,at,lt,ct,st))}}}if(h==nt){if(ot.trigger("pinchStatus",[s,bt||null,wt||0,lt||0,ct,yt,st]),et.pinchStatus&&(c=et.pinchStatus.call(ot,r,s,bt||null,wt||0,lt||0,ct,yt,st),c===!1))return!1;if(s==t&&cr())switch(bt){case v:ot.trigger("pinchIn",[bt||null,wt||0,lt||0,ct,yt,st]);et.pinchIn&&(c=et.pinchIn.call(ot,r,bt||null,wt||0,lt||0,ct,yt,st));break;case y:ot.trigger("pinchOut",[bt||null,wt||0,lt||0,ct,yt,st]);et.pinchOut&&(c=et.pinchOut.call(ot,r,bt||null,wt||0,lt||0,ct,yt,st))}}return h==w?(s===i||s===t)&&(clearTimeout(li),clearTimeout(ki),fr()&&!eu()?(gt=ni(),li=setTimeout(n.proxy(function(){gt=null;ot.trigger("tap",[r.target]);et.tap&&(c=et.tap.call(ot,r,r.target))},this),et.doubleTapThreshold)):(gt=null,ot.trigger("tap",[r.target]),et.tap&&(c=et.tap.call(ot,r,r.target)))):h==tt?(s===i||s===t)&&(clearTimeout(li),gt=null,ot.trigger("doubletap",[r.target]),et.doubleTap&&(c=et.doubleTap.call(ot,r,r.target))):h==it&&(s===i||s===t)&&(clearTimeout(li),gt=null,ot.trigger("longtap",[r.target]),et.longTap&&(c=et.longTap.call(ot,r,r.target))),c}function rr(){var n=!0;return et.threshold!==null&&(n=at>=et.threshold),n}function ur(){var n=!1;return et.cancelThreshold!==null&&vt!==null&&(n=gr(vt)-at>=et.cancelThreshold),n}function tu(){return et.pinchThreshold!==null?wt>=et.pinchThreshold:!0}function hr(){return et.maxTimeThreshold?lt>=et.maxTimeThreshold?!1:!0:!0}function iu(n,t){if(et.allowPageScroll===p||ui())n.preventDefault();else{var i=et.allowPageScroll===d;switch(t){case u:(et.swipeLeft&&i||!i&&et.allowPageScroll!=b)&&n.preventDefault();break;case f:(et.swipeRight&&i||!i&&et.allowPageScroll!=b)&&n.preventDefault();break;case e:(et.swipeUp&&i||!i&&et.allowPageScroll!=k)&&n.preventDefault();break;case o:(et.swipeDown&&i||!i&&et.allowPageScroll!=k)&&n.preventDefault()}}}function cr(){var n=vr(),t=yr(),i=tu();return n&&t&&i}function ui(){return!!(et.pinchStatus||et.pinchIn||et.pinchOut)}function ru(){return!!(cr()&&ui())}function lr(){var n=hr(),t=rr(),i=vr(),r=yr(),u=ur();return!u&&r&&i&&t&&n}function ar(){return!!(et.swipe||et.swipeStatus||et.swipeLeft||et.swipeRight||et.swipeUp||et.swipeDown)}function uu(){return!!(lr()&&ar())}function vr(){return ct===et.fingers||et.fingers===l||!r}function yr(){return st[0].end.x!==0}function pr(){return!!et.tap}function fr(){return!!et.doubleTap}function fu(){return!!et.longTap}function wr(){if(gt==null)return!1;var n=ni();return fr()&&n-gt<=et.doubleTapThreshold}function eu(){return wr()}function ou(){return(ct===1||!r)&&(isNaN(at)||at<et.threshold)}function su(){return lt>et.longTapThreshold&&at<ut}function hu(){return!!(ou()&&pr())}function cu(){return!!(wr()&&fr())}function lu(){return!!(su()&&fu())}function au(){ci=ni();bi=event.touches.length+1}function br(){ci=0;bi=0}function kr(){var n=!1,t;return ci&&(t=ni()-ci,t<=et.fingerReleaseThreshold&&(n=!0)),n}function vu(){return!!(ot.data(h+"_intouch")===!0)}function ai(n){n===!0?(ot.bind(yi,gi),ot.bind(pi,nr),ti&&ot.bind(ti,tr)):(ot.unbind(yi,gi,!1),ot.unbind(pi,nr,!1),ti&&ot.unbind(ti,tr,!1));ot.data(h+"_intouch",n===!0)}function er(n,t){var i=t.identifier!==undefined?t.identifier:0;return st[n].identifier=i,st[n].start.x=st[n].end.x=t.pageX||t.clientX,st[n].start.y=st[n].end.y=t.pageY||t.clientY,st[n]}function dr(n){var i=n.identifier!==undefined?n.identifier:0,t=yu(i);return t.end.x=n.pageX||n.clientX,t.end.y=n.pageY||n.clientY,t}function yu(n){for(var t=0;t<st.length;t++)if(st[t].identifier==n)return st[t]}function pu(){for(var n=[],t=0;t<=5;t++)n.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0});return n}function wu(n,t){t=Math.max(t,gr(n));si[n].distance=t}function gr(n){return si[n]?si[n].distance:undefined}function bu(){var n={};return n[u]=vi(u),n[f]=vi(f),n[e]=vi(e),n[o]=vi(o),n}function vi(n){return{direction:n,distance:0}}function nu(){return hi-wi}function or(n,t){var i=Math.abs(n.x-t.x),r=Math.abs(n.y-t.y);return Math.round(Math.sqrt(i*i+r*r))}function ku(n,t){var i=t/n*1;return i.toFixed(2)}function du(){return yt<1?y:v}function gu(n,t){return Math.round(Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2)))}function nf(n,t){var r=n.x-t.x,u=t.y-n.y,f=Math.atan2(u,r),i=Math.round(f*180/Math.PI);return i<0&&(i=360-Math.abs(i)),i}function tf(n,t){var i=nf(n,t);return i<=45&&i>=0?u:i<=360&&i>=315?u:i>=135&&i<=225?f:i>45&&i<135?o:e}function ni(){var n=new Date;return n.getTime()}function rf(t){t=n(t);var i=t.offset();return{left:i.left,right:i.left+t.outerWidth(),top:i.top,bottom:i.top+t.outerHeight()}}function uf(n,t){return n.x>t.left&&n.x<t.right&&n.y>t.top&&n.y<t.bottom}var fi=r||c||!et.fallbackToMouseEvents,ei=fi?c?a?"MSPointerDown":"pointerdown":"touchstart":"mousedown",yi=fi?c?a?"MSPointerMove":"pointermove":"touchmove":"mousemove",pi=fi?c?a?"MSPointerUp":"pointerup":"touchend":"mouseup",ti=fi?null:"mouseleave",oi=c?a?"MSPointerCancel":"pointercancel":"touchcancel",at=0,vt=null,lt=0,kt=0,dt=0,yt=1,wt=0,bt=0,si=null,ot=n(ft),ht="start",ct=0,st=null,wi=0,hi=0,ci=0,bi=0,gt=0,li=null,ki=null;try{ot.bind(ei,di);ot.bind(oi,ii)}catch(ff){n.error("events not supported "+ei+","+oi+" on jQuery.swipe")}this.enable=function(){return ot.bind(ei,di),ot.bind(oi,ii),ot};this.disable=function(){return sr(),ot};this.destroy=function(){return sr(),ot.data(h,null),ot};this.option=function(t,i){if(et[t]!==undefined){if(i===undefined)return et[t];et[t]=i}else n.error("Option "+t+" does not exist on jQuery.swipe.options");return null}}var u="left",f="right",e="up",o="down",v="in",y="out",p="none",d="auto",g="swipe",nt="pinch",w="tap",tt="doubletap",it="longtap",b="horizontal",k="vertical",l="all",ut=10,rt="start",s="move",t="end",i="cancel",r="ontouchstart"in window,a=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,c=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,h="TouchSwipe";n.fn.swipe=function(t){var r=n(this),i=r.data(h);if(i&&typeof t=="string"){if(i[t])return i[t].apply(this,Array.prototype.slice.call(arguments,1));n.error("Method "+t+" does not exist on jQuery.swipe")}else if(!i&&(typeof t=="object"||!t))return ft.apply(this,arguments);return r};n.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};n.fn.swipe.phases={PHASE_START:rt,PHASE_MOVE:s,PHASE_END:t,PHASE_CANCEL:i};n.fn.swipe.directions={LEFT:u,RIGHT:f,UP:e,DOWN:o,IN:v,OUT:y};n.fn.swipe.pageScroll={NONE:p,HORIZONTAL:b,VERTICAL:k,AUTO:d};n.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:l}})),typeof console=="undefined"&&(console={},console.log=console.error=console.info=console.debug=console.warn=console.trace=console.dir=console.dirxml=console.group=console.groupEnd=console.time=console.timeEnd=console.assert=console.profile=console.groupCollapsed=function(){}),window.tplogs==!0)try{console.groupCollapsed("ThemePunch GreenSocks Logs")}catch(e){}if(oldgs=window.GreenSockGlobals,oldgs_queue=window._gsQueue,punchgs=window.GreenSockGlobals={},window.tplogs==!0)try{console.info("Build GreenSock SandBox for ThemePunch Plugins");console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")}catch(e){}
/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-22
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(n,t){"use strict";var ot=n.GreenSockGlobals=n.GreenSockGlobals||n,lt,s,vt,ut,c;if(!ot.TweenLite){var f,e,i,u,h,dt=function(n){for(var r=n.split("."),i=ot,t=0;r.length>t;t++)i[r[t]]=i=i[r[t]]||{};return i},v=dt("com.greensock"),o=1e-10,gt=function(n){for(var i=[],r=n.length,t=0;t!==r;i.push(n[t++]));return i},ni=function(){},d=function(){var n=Object.prototype.toString,t=n.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&n.call(i)===t)}}(),g={},ti=function(i,r,u,f){this.sc=g[i]?g[i].sc:[];g[i]=this;this.gsClass=null;this.func=u;var e=[];this.check=function(o){for(var c,l,a,h,s=r.length,v=s;--s>-1;)(c=g[r[s]]||new ti(r[s],[])).gsClass?(e[s]=c.gsClass,v--):o&&c.sc.push(this);if(0===v&&u)for(l=("com.greensock."+i).split("."),a=l.pop(),h=dt(l.join("."))[a]=this.gsClass=u.apply(u,e),f&&(ot[a]=h,"function"==typeof define&&define.amd?define((n.GreenSockAMDPath?n.GreenSockAMDPath+"/":"")+i.split(".").pop(),[],function(){return h}):i===t&&"undefined"!=typeof module&&module.exports&&(module.exports=h)),s=0;this.sc.length>s;s++)this.sc[s].check()};this.check(!0)},st=n._gsDefine=function(n,t,i,r){return new ti(n,t,i,r)},l=v._class=function(n,t,i){return t=t||function(){},st(n,[],function(){return t},i),t};st.globals=ot;var ii=[0,0,1,1],ht=[],a=l("easing.Ease",function(n,t,i,r){this._func=n;this._type=i||0;this._power=r||0;this._params=t?ii.concat(t):ii},!0),nt=a.map={},ct=a.register=function(n,t,i,r){for(var o,u,e,f,s=t.split(","),h=s.length,c=(i||"easeIn,easeOut,easeInOut").split(",");--h>-1;)for(u=s[h],o=r?l("easing."+u,null,!0):v.easing[u]||{},e=c.length;--e>-1;)f=c[e],nt[u+"."+f]=nt[f+u]=o[f]=n.getRatio?n:n[f]||new n};for(i=a.prototype,i._calcEnd=!1,i.getRatio=function(n){if(this._func)return this._params[0]=n,this._func.apply(null,this._params);var i=this._type,r=this._power,t=1===i?1-n:2===i?n:.5>n?2*n:2*(1-n);return 1===r?t*=t:2===r?t*=t*t:3===r?t*=t*t*t:4===r&&(t*=t*t*t*t),1===i?1-t:2===i?t:.5>n?t/2:1-t/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],e=f.length;--e>-1;)i=f[e]+",Power"+e,ct(new a(null,null,1,e),i,"easeOut",!0),ct(new a(null,null,2,e),i,"easeIn"+(0===e?",easeNone":"")),ct(new a(null,null,3,e),i,"easeInOut");nt.linear=v.easing.Linear.easeIn;nt.swing=v.easing.Quad.easeInOut;lt=l("events.EventDispatcher",function(n){this._listeners={};this._eventTarget=n||this});i=lt.prototype;i.addEventListener=function(n,t,i,r,f){f=f||0;var s,o,e=this._listeners[n],c=0;for(null==e&&(this._listeners[n]=e=[]),o=e.length;--o>-1;)s=e[o],s.c===t&&s.s===i?e.splice(o,1):0===c&&f>s.pr&&(c=o+1);e.splice(c,0,{c:t,s:i,up:r,pr:f});this!==u||h||u.wake()};i.removeEventListener=function(n,t){var i,r=this._listeners[n];if(r)for(i=r.length;--i>-1;)if(r[i].c===t)return r.splice(i,1),void 0};i.dispatchEvent=function(n){var r,i,t,u=this._listeners[n];if(u)for(r=u.length,i=this._eventTarget;--r>-1;)t=u[r],t.up?t.c.call(t.s||i,{type:n,target:i}):t.c.call(t.s||i)};var tt=n.requestAnimationFrame,at=n.cancelAnimationFrame,it=Date.now||function(){return(new Date).getTime()},rt=it();for(f=["ms","moz","webkit","o"],e=f.length;--e>-1&&!tt;)tt=n[f[e]+"RequestAnimationFrame"],at=n[f[e]+"CancelAnimationFrame"]||n[f[e]+"CancelRequestAnimationFrame"];l("Ticker",function(n,t){var f,a,r,s,c,i=this,y=it(),e=t!==!1&&tt,l=500,p=33,v=function(n){var t,e,u=it()-rt;u>l&&(y+=u-p);rt+=u;i.time=(rt-y)/1e3;t=i.time-c;(!f||t>0||n===!0)&&(i.frame++,c+=t+(t>=s?.004:s-t),e=!0);n!==!0&&(r=a(v));e&&i.dispatchEvent("tick")};lt.call(i);i.time=i.frame=0;i.tick=function(){v(!0)};i.lagSmoothing=function(n,t){l=n||1/o;p=Math.min(t,l,0)};i.sleep=function(){null!=r&&(e&&at?at(r):clearTimeout(r),a=ni,r=null,i===u&&(h=!1))};i.wake=function(){null!==r?i.sleep():i.frame>10&&(rt=it()-l+5);a=0===f?ni:e&&tt?tt:function(n){return setTimeout(n,0|1e3*(c-i.time)+1)};i===u&&(h=!0);v(2)};i.fps=function(n){return arguments.length?(f=n,s=1/(f||60),c=this.time+s,i.wake(),void 0):f};i.useRAF=function(n){return arguments.length?(i.sleep(),e=n,i.fps(f),void 0):e};i.fps(n);setTimeout(function(){e&&(!r||5>i.frame)&&i.useRAF(!1)},1500)});i=v.Ticker.prototype=new v.events.EventDispatcher;i.constructor=v.Ticker;s=l("core.Animation",function(n,t){if(this.vars=t=t||{},this._duration=this._totalDuration=n||0,this._delay=Number(t.delay)||0,this._timeScale=1,this._active=t.immediateRender===!0,this.data=t.data,this._reversed=t.reversed===!0,p){h||u.wake();var i=this.vars.useFrames?k:p;i.add(this,i._time);this.vars.paused&&this.paused(!0)}});u=s.ticker=new v.Ticker;i=s.prototype;i._dirty=i._gc=i._initted=i._paused=!1;i._totalTime=i._time=0;i._rawPrevTime=-1;i._next=i._last=i._onUpdate=i._timeline=i.timeline=null;i._paused=!1;vt=function(){h&&it()-rt>2e3&&u.wake();setTimeout(vt,2e3)};vt();i.play=function(n,t){return null!=n&&this.seek(n,t),this.reversed(!1).paused(!1)};i.pause=function(n,t){return null!=n&&this.seek(n,t),this.paused(!0)};i.resume=function(n,t){return null!=n&&this.seek(n,t),this.paused(!1)};i.seek=function(n,t){return this.totalTime(Number(n),t!==!1)};i.restart=function(n,t){return this.reversed(!1).paused(!1).totalTime(n?-this._delay:0,t!==!1,!0)};i.reverse=function(n,t){return null!=n&&this.seek(n||this.totalDuration(),t),this.reversed(!0).paused(!1)};i.render=function(){};i.invalidate=function(){return this};i.isActive=function(){var t,n=this._timeline,i=this._startTime;return!n||!this._gc&&!this._paused&&n.isActive()&&(t=n.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t};i._enabled=function(n,t){return h||u.wake(),this._gc=!n,this._active=this.isActive(),t!==!0&&(n&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!n&&this.timeline&&this._timeline._remove(this,!0)),!1};i._kill=function(){return this._enabled(!1,!1)};i.kill=function(n,t){return this._kill(n,t),this};i._uncache=function(n){for(var t=n?this:this.timeline;t;)t._dirty=!0,t=t.timeline;return this};i._swapSelfInParams=function(n){for(var t=n.length,i=n.concat();--t>-1;)"{self}"===n[t]&&(i[t]=this);return i};i.eventCallback=function(n,t,i,r){if("on"===(n||"").substr(0,2)){var u=this.vars;if(1===arguments.length)return u[n];null==t?delete u[n]:(u[n]=t,u[n+"Params"]=d(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,u[n+"Scope"]=r);"onUpdate"===n&&(this._onUpdate=t)}return this};i.delay=function(n){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+n-this._delay),this._delay=n,this):this._delay};i.duration=function(n){return arguments.length?(this._duration=this._totalDuration=n,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==n&&this.totalTime(this._totalTime*(n/this._duration),!0),this):(this._dirty=!1,this._duration)};i.totalDuration=function(n){return this._dirty=!1,arguments.length?this.duration(n):this._totalDuration};i.time=function(n,t){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(n>this._duration?this._duration:n,t)):this._time};i.totalTime=function(n,t,i){if(h||u.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>n&&!i&&(n+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var f=this._totalDuration,r=this._timeline;if(n>f&&!i&&(n=f),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?f-n:n)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1);(this._totalTime!==n||0===this._duration)&&(this.render(n,t,!1),y.length&&ft())}return this};i.progress=i.totalProgress=function(n,t){return arguments.length?this.totalTime(this.duration()*n,t):this._time/this.duration()};i.startTime=function(n){return arguments.length?(n!==this._startTime&&(this._startTime=n,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,n-this._delay)),this):this._startTime};i.timeScale=function(n){if(!arguments.length)return this._timeScale;if(n=n||o,this._timeline&&this._timeline.smoothChildTiming){var t=this._pauseTime,i=t||0===t?t:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/n}return this._timeScale=n,this._uncache(!1)};i.reversed=function(n){return arguments.length?(n!=this._reversed&&(this._reversed=n,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed};i.paused=function(n){if(!arguments.length)return this._paused;if(n!=this._paused&&this._timeline){h||n||u.wake();var t=this._timeline,i=t.rawTime(),r=i-this._pauseTime;!n&&t.smoothChildTiming&&(this._startTime+=r,this._uncache(!1));this._pauseTime=n?i:null;this._paused=n;this._active=this.isActive();!n&&0!==r&&this._initted&&this.duration()&&this.render(t.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!n&&this._enabled(!0,!1),this};ut=l("core.SimpleTimeline",function(n){s.call(this,0,n);this.autoRemoveChildren=this.smoothChildTiming=!0});i=ut.prototype=new s;i.constructor=ut;i.kill()._gc=!1;i._first=i._last=null;i._sortChildren=!1;i.add=i.insert=function(n,t){var i,r;if(n._startTime=Number(t||0)+n._delay,n._paused&&this!==n._timeline&&(n._pauseTime=n._startTime+(this.rawTime()-n._startTime)/n._timeScale),n.timeline&&n.timeline._remove(n,!0),n.timeline=n._timeline=this,n._gc&&n._enabled(!0,!0),i=this._last,this._sortChildren)for(r=n._startTime;i&&i._startTime>r;)i=i._prev;return i?(n._next=i._next,i._next=n):(n._next=this._first,this._first=n),n._next?n._next._prev=n:this._last=n,n._prev=i,this._timeline&&this._uncache(!0),this};i._remove=function(n,t){return n.timeline===this&&(t||n._enabled(!1,!0),n._prev?n._prev._next=n._next:this._first===n&&(this._first=n._next),n._next?n._next._prev=n._prev:this._last===n&&(this._last=n._prev),n._next=n._prev=n.timeline=null,this._timeline&&this._uncache(!0)),this};i.render=function(n,t,i){var u,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=n;r;)u=r._next,(r._active||n>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(n-r._startTime)*r._timeScale,t,i):r.render((n-r._startTime)*r._timeScale,t,i)),r=u};i.rawTime=function(){return h||u.wake(),this._totalTime};var r=l("TweenLite",function(t,i,u){if(s.call(this,i,u),this.render=r.prototype.render,null==t)throw"Cannot tween a null target.";this.target=t="string"!=typeof t?t:r.selector(t)||t;var e,f,h,l=t.jquery||t.length&&t!==n&&t[0]&&(t[0]===n||t[0].nodeType&&t[0].style&&!t.nodeType),c=this.vars.overwrite;if(this._overwrite=c=null==c?ri[r.defaultOverwrite]:"number"==typeof c?c>>0:ri[c],(l||t instanceof Array||t.push&&d(t))&&"number"!=typeof t[0])for(this._targets=h=gt(t),this._propLookup=[],this._siblings=[],e=0;h.length>e;e++)f=h[e],f?"string"!=typeof f?f.length&&f!==n&&f[0]&&(f[0]===n||f[0].nodeType&&f[0].style&&!f.nodeType)?(h.splice(e--,1),this._targets=h=h.concat(gt(f))):(this._siblings[e]=et(f,this,!1),1===c&&this._siblings[e].length>1&&kt(f,this,null,1,this._siblings[e])):(f=h[e--]=r.selector(f),"string"==typeof f&&h.splice(e+1,1)):h.splice(e--,1);else this._propLookup={},this._siblings=et(t,this,!1),1===c&&this._siblings.length>1&&kt(t,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-o,this.render(-this._delay))},!0),yt=function(t){return t.length&&t!==n&&t[0]&&(t[0]===n||t[0].nodeType&&t[0].style&&!t.nodeType)},fi=function(n,t){var i,r={};for(i in n)bt[i]||i in t&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!w[i]||w[i]&&w[i]._autoCSS)||(r[i]=n[i],delete n[i]);n.css=r};i=r.prototype=new s;i.constructor=r;i.kill()._gc=!1;i.ratio=0;i._firstPT=i._targets=i._overwrittenProps=i._startAt=null;i._notifyPluginsOfEnabled=i._lazy=!1;r.version="1.13.1";r.defaultEase=i._ease=new a(null,null,1,1);r.defaultOverwrite="auto";r.ticker=u;r.autoSleep=!0;r.lagSmoothing=function(n,t){u.lagSmoothing(n,t)};r.selector=n.$||n.jQuery||function(t){var i=n.$||n.jQuery;return i?(r.selector=i,i(t)):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)};var y=[],pt={},wt=r._internals={isArray:d,isSelector:yt,lazyTweens:y},w=r._plugins={},b=wt.tweenLookup={},ei=0,bt=wt.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1},ri={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},k=s._rootFramesTimeline=new ut,p=s._rootTimeline=new ut,ft=wt.lazyRender=function(){var n=y.length;for(pt={};--n>-1;)f=y[n],f&&f._lazy!==!1&&(f.render(f._lazy,!1,!0),f._lazy=!1);y.length=0};p._startTime=u.time;k._startTime=u.frame;p._active=k._active=!0;setTimeout(ft,1);s._updateRoot=r.render=function(){var i,t,n;if(y.length&&ft(),p.render((u.time-p._startTime)*p._timeScale,!1,!1),k.render((u.frame-k._startTime)*k._timeScale,!1,!1),y.length&&ft(),!(u.frame%120)){for(n in b){for(t=b[n].tweens,i=t.length;--i>-1;)t[i]._gc&&t.splice(i,1);0===t.length&&delete b[n]}if(n=p._first,(!n||n._paused)&&r.autoSleep&&!k._first&&1===u._listeners.tick.length){for(;n&&n._paused;)n=n._next;n||u.sleep()}}};u.addEventListener("tick",s._updateRoot);var et=function(n,t,i){var r,f,u=n._gsTweenID;if(b[u||(n._gsTweenID=u="t"+ei++)]||(b[u]={target:n,tweens:[]}),t&&(r=b[u].tweens,r[f=r.length]=t,i))for(;--f>-1;)r[f]===t&&r.splice(f,1);return b[u].tweens},kt=function(n,t,i,r,u){var e,s,f,y;if(1===r||r>=4){for(y=u.length,e=0;y>e;e++)if((f=u[e])!==t)f._gc||f._enabled(!1,!1)&&(s=!0);else if(5===r)break;return s}var h,c=t._startTime+o,l=[],a=0,v=0===t._duration;for(e=u.length;--e>-1;)(f=u[e])===t||f._gc||f._paused||(f._timeline!==t._timeline?(h=h||ui(t,0,v),0===ui(f,h,v)&&(l[a++]=f)):c>=f._startTime&&f._startTime+f.totalDuration()/f._timeScale>c&&((v||!f._initted)&&2e-10>=c-f._startTime||(l[a++]=f)));for(e=a;--e>-1;)f=l[e],2===r&&f._kill(i,n)&&(s=!0),(2!==r||!f._firstPT&&f._initted)&&f._enabled(!1,!1)&&(s=!0);return s},ui=function(n,t,i){for(var u=n._timeline,f=u._timeScale,r=n._startTime;u._timeline;){if(r+=u._startTime,f*=u._timeScale,u._paused)return-100;u=u._timeline}return r/=f,r>t?r-t:i&&r===t||!n._initted&&2*o>r-t?o:(r+=n.totalDuration()/n._timeScale/f)>t+o?0:r-t-o};if(i._init=function(){var e,h,n,u,f,t=this.vars,s=this._overwrittenProps,c=this._duration,o=!!t.immediateRender,i=t.ease;if(t.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill());f={};for(u in t.startAt)f[u]=t.startAt[u];if(f.overwrite=!1,f.immediateRender=!0,f.lazy=o&&t.lazy!==!1,f.startAt=f.delay=null,this._startAt=r.to(this.target,0,f),o)if(this._time>0)this._startAt=null;else if(0!==c)return}else if(t.runBackwards&&0!==c)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{n={};for(u in t)bt[u]&&"autoCSS"!==u||(n[u]=t[u]);if(n.overwrite=0,n.data="isFromStart",n.lazy=o&&t.lazy!==!1,n.immediateRender=o,this._startAt=r.to(this.target,0,n),o){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1)}if(this._ease=i=i?i instanceof a?i:"function"==typeof i?new a(i,t.easeParams):nt[i]||r.defaultEase:r.defaultEase,t.easeParams instanceof Array&&i.config&&(this._ease=i.config.apply(i,t.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(e=this._targets.length;--e>-1;)this._initProps(this._targets[e],this._propLookup[e]={},this._siblings[e],s?s[e]:null)&&(h=!0);else h=this._initProps(this.target,this._propLookup,this._siblings,s);if(h&&r._onPluginEvent("_onInitAllProps",this),s&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),t.runBackwards)for(n=this._firstPT;n;)n.s+=n.c,n.c=-n.c,n=n._next;this._onUpdate=t.onUpdate;this._initted=!0},i._initProps=function(t,i,r,u){var f,h,c,s,o,e;if(null==t)return!1;pt[t._gsTweenID]&&ft();this.vars.css||t.style&&t!==n&&t.nodeType&&w.css&&this.vars.autoCSS!==!1&&fi(this.vars,t);for(f in this.vars){if(e=this.vars[f],bt[f])e&&(e instanceof Array||e.push&&d(e))&&-1!==e.join("").indexOf("{self}")&&(this.vars[f]=e=this._swapSelfInParams(e,this));else if(w[f]&&(s=new w[f])._onInitTween(t,this.vars[f],this)){for(this._firstPT=o={_next:this._firstPT,t:s,p:"setRatio",s:0,c:1,f:!0,n:f,pg:!0,pr:s._priority},h=s._overwriteProps.length;--h>-1;)i[s._overwriteProps[h]]=this._firstPT;(s._priority||s._onInitAllProps)&&(c=!0);(s._onDisable||s._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[f]=o={_next:this._firstPT,t:t,p:f,f:"function"==typeof t[f],n:f,pg:!1,pr:0},o.s=o.f?t[f.indexOf("set")||"function"!=typeof t["get"+f.substr(3)]?f:"get"+f.substr(3)]():parseFloat(t[f]),o.c="string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*Number(e.substr(2)):Number(e)-o.s||0;o&&o._next&&(o._next._prev=o)}return u&&this._kill(u,t)?this._initProps(t,i,r,u):this._overwrite>1&&this._firstPT&&r.length>1&&kt(t,this,i,this._overwrite,r)?(this._kill(i,t),this._initProps(t,i,r,u)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(pt[t._gsTweenID]=!0),c)},i.render=function(n,t,i){var h,e,u,v,c=this._time,f=this._duration,s=this._rawPrevTime;if(n>=f)this._totalTime=this._time=f,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(h=!0,e="onComplete"),0===f&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(n=0),(0===n||0>s||s===o)&&s!==n&&(i=!0,s>o&&(e="onReverseComplete")),this._rawPrevTime=v=!t||n||s===n?n:o);else if(1e-7>n)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==c||0===f&&s>0&&s!==o)&&(e="onReverseComplete",h=this._reversed),0>n?(this._active=!1,0===f&&(this._initted||!this.vars.lazy||i)&&(s>=0&&(i=!0),this._rawPrevTime=v=!t||n||s===n?n:o)):this._initted||(i=!0);else if(this._totalTime=this._time=n,this._easeType){var r=n/f,l=this._easeType,a=this._easePower;(1===l||3===l&&r>=.5)&&(r=1-r);3===l&&(r*=2);1===a?r*=r:2===a?r*=r*r:3===a?r*=r*r*r:4===a&&(r*=r*r*r*r);this.ratio=1===l?1-r:2===l?r:.5>n/f?r/2:1-r/2}else this.ratio=this._ease.getRatio(n/f);if(this._time!==c||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=c,this._rawPrevTime=s,y.push(this),this._lazy=n,void 0;this._time&&!h?this.ratio=this._ease.getRatio(this._time/f):h&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==c&&n>=0&&(this._active=!0),0===c&&(this._startAt&&(n>=0?this._startAt.render(n,t,i):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===f)&&(t||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||ht))),u=this._firstPT;u;)u.f?u.t[u.p](u.c*this.ratio+u.s):u.t[u.p]=u.c*this.ratio+u.s,u=u._next;this._onUpdate&&(0>n&&this._startAt&&this._startTime&&this._startAt.render(n,t,i),t||(this._time!==c||h)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||ht));e&&(!this._gc||i)&&(0>n&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(n,t,i),h&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[e]&&this.vars[e].apply(this.vars[e+"Scope"]||this,this.vars[e+"Params"]||ht),0===f&&this._rawPrevTime===o&&v!==o&&(this._rawPrevTime=0))}},i._kill=function(n,t){if("all"===n&&(n=null),null==n&&(null==t||t===this.target))return this._lazy=!1,this._enabled(!1,!1);t="string"!=typeof t?t||this._targets||this.target:r.selector(t)||t;var u,e,o,i,f,s,h,c;if((d(t)||yt(t))&&"number"!=typeof t[0])for(u=t.length;--u>-1;)this._kill(n,t[u])&&(s=!0);else{if(this._targets){for(u=this._targets.length;--u>-1;)if(t===this._targets[u]){f=this._propLookup[u]||{};this._overwrittenProps=this._overwrittenProps||[];e=this._overwrittenProps[u]=n?this._overwrittenProps[u]||{}:"all";break}}else{if(t!==this.target)return!1;f=this._propLookup;e=this._overwrittenProps=n?this._overwrittenProps||{}:"all"}if(f){h=n||f;c=n!==e&&"all"!==e&&n!==f&&("object"!=typeof n||!n._tempKill);for(o in h)(i=f[o])&&(i.pg&&i.t._kill(h)&&(s=!0),i.pg&&0!==i.t._overwriteProps.length||(i._prev?i._prev._next=i._next:i===this._firstPT&&(this._firstPT=i._next),i._next&&(i._next._prev=i._prev),i._next=i._prev=null),delete f[o]),c&&(e[o]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return s},i.invalidate=function(){return this._notifyPluginsOfEnabled&&r._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=this._lazy=!1,this._propLookup=this._targets?{}:[],this},i._enabled=function(n,t){if(h||u.wake(),n&&this._gc){var i,f=this._targets;if(f)for(i=f.length;--i>-1;)this._siblings[i]=et(f[i],this,!0);else this._siblings=et(this.target,this,!0)}return s.prototype._enabled.call(this,n,t),this._notifyPluginsOfEnabled&&this._firstPT?r._onPluginEvent(n?"_onEnable":"_onDisable",this):!1},r.to=function(n,t,i){return new r(n,t,i)},r.from=function(n,t,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(n,t,i)},r.fromTo=function(n,t,i,u){return u.startAt=i,u.immediateRender=0!=u.immediateRender&&0!=i.immediateRender,new r(n,t,u)},r.delayedCall=function(n,t,i,u,f){return new r(t,0,{delay:n,onComplete:t,onCompleteParams:i,onCompleteScope:u,onReverseComplete:t,onReverseCompleteParams:i,onReverseCompleteScope:u,immediateRender:!1,useFrames:f,overwrite:0})},r.set=function(n,t){return new r(n,0,t)},r.getTweensOf=function(n,t){if(null==n)return[];n="string"!=typeof n?n:r.selector(n)||n;var i,u,f,e;if((d(n)||yt(n))&&"number"!=typeof n[0]){for(i=n.length,u=[];--i>-1;)u=u.concat(r.getTweensOf(n[i],t));for(i=u.length;--i>-1;)for(e=u[i],f=i;--f>-1;)e===u[f]&&u.splice(i,1)}else for(u=et(n).concat(),i=u.length;--i>-1;)(u[i]._gc||t&&!u[i].isActive())&&u.splice(i,1);return u},r.killTweensOf=r.killDelayedCallsTo=function(n,t,i){"object"==typeof t&&(i=t,t=!1);for(var u=r.getTweensOf(n,t),f=u.length;--f>-1;)u[f]._kill(i,n)},c=l("plugins.TweenPlugin",function(n,t){this._overwriteProps=(n||"").split(",");this._propName=this._overwriteProps[0];this._priority=t||0;this._super=c.prototype},!0),i=c.prototype,c.version="1.10.1",c.API=2,i._firstPT=null,i._addTween=function(n,t,i,r,u,f){var o,e;if(null!=r&&(o="number"==typeof r||"="!==r.charAt(1)?Number(r)-i:parseInt(r.charAt(0)+"1",10)*Number(r.substr(2))))return(this._firstPT=e={_next:this._firstPT,t:n,p:t,s:i,c:o,f:"function"==typeof n[t],n:u||t,r:f},e._next&&(e._next._prev=e),e)},i.setRatio=function(n){for(var i,t=this._firstPT,r=1e-6;t;)i=t.c*n+t.s,t.r?i=Math.round(i):r>i&&i>-r&&(i=0),t.f?t.t[t.p](i):t.t[t.p]=i,t=t._next},i._kill=function(n){var i,r=this._overwriteProps,t=this._firstPT;if(null!=n[this._propName])this._overwriteProps=[];else for(i=r.length;--i>-1;)null!=n[r[i]]&&r.splice(i,1);for(;t;)null!=n[t.n]&&(t._next&&(t._next._prev=t._prev),t._prev?(t._prev._next=t._next,t._prev=null):this._firstPT===t&&(this._firstPT=t._next)),t=t._next;return!1},i._roundProps=function(n,t){for(var i=this._firstPT;i;)(n[this._propName]||null!=i.n&&n[i.n.split(this._propName+"_").join("")])&&(i.r=t),i=i._next},r._onPluginEvent=function(n,t){var f,r,u,e,o,i=t._firstPT;if("_onInitAllProps"===n){for(;i;){for(o=i._next,r=u;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:e)?i._prev._next=i:u=i;(i._next=r)?r._prev=i:e=i;i=o}i=t._firstPT=u}for(;i;)i.pg&&"function"==typeof i.t[n]&&i.t[n]()&&(f=!0),i=i._next;return f},c.activate=function(n){for(var t=n.length;--t>-1;)n[t].API===c.API&&(w[(new n[t])._propName]=n[t]);return!0},st.plugin=function(n){if(!(n&&n.propName&&n.init&&n.API))throw"illegal plugin definition.";var i,r=n.propName,e=n.priority||0,o=n.overwriteProps,u={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},t=l("plugins."+r.charAt(0).toUpperCase()+r.substr(1)+"Plugin",function(){c.call(this,r,e);this._overwriteProps=o||[]},n.global===!0),f=t.prototype=new c(r);f.constructor=t;t.API=n.API;for(i in u)"function"==typeof n[i]&&(f[u[i]]=n[i]);return t.version=n.version,c.activate([t]),t},f=n._gsQueue){for(e=0;f.length>e;e++)f[e]();for(i in g)g[i].func||n.console.log("GSAP encountered missing dependency: com.greensock."+i)}h=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-22
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(n,t,i){var u=function(n){t.call(this,n);this._labels={};this.autoRemoveChildren=this.vars.autoRemoveChildren===!0;this.smoothChildTiming=this.vars.smoothChildTiming===!0;this._sortChildren=!0;this._onUpdate=this.vars.onUpdate;var r,u,i=this.vars;for(u in i)r=i[u],f(r)&&-1!==r.join("").indexOf("{self}")&&(i[u]=this._swapSelfInParams(r));f(i.tweens)&&this.add(i.tweens,0,i.align,i.stagger)},e=1e-10,o=i._internals,v=o.isSelector,f=o.isArray,c=o.lazyTweens,l=o.lazyRender,s=[],h=_gsScope._gsDefine.globals,a=function(n){var t,i={};for(t in n)i[t]=n[t];return i},y=function(n,t,i,r){n._timeline.pause(n._startTime);t&&t.apply(r||n._timeline,i||s)},p=function(n){for(var i=[],r=n.length,t=0;t!==r;i.push(n[t++]));return i},r=u.prototype=new t;return u.version="1.13.1",r.constructor=u,r.kill()._gc=!1,r.to=function(n,t,r,u){var f=r.repeat&&h.TweenMax||i;return t?this.add(new f(n,t,r),u):this.set(n,r,u)},r.from=function(n,t,r,u){return this.add((r.repeat&&h.TweenMax||i).from(n,t,r),u)},r.fromTo=function(n,t,r,u,f){var e=u.repeat&&h.TweenMax||i;return t?this.add(e.fromTo(n,t,r,u),f):this.set(n,u,f)},r.staggerTo=function(n,t,r,f,e,o,s,h){var c,l=new u({onComplete:o,onCompleteParams:s,onCompleteScope:h,smoothChildTiming:this.smoothChildTiming});for("string"==typeof n&&(n=i.selector(n)||n),v(n)&&(n=p(n)),f=f||0,c=0;n.length>c;c++)r.startAt&&(r.startAt=a(r.startAt)),l.to(n[c],t,a(r),c*f);return this.add(l,e)},r.staggerFrom=function(n,t,i,r,u,f,e,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(n,t,i,r,u,f,e,o)},r.staggerFromTo=function(n,t,i,r,u,f,e,o,s){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,this.staggerTo(n,t,r,u,f,e,o,s)},r.call=function(n,t,r,u){return this.add(i.delayedCall(0,n,t,r),u)},r.set=function(n,t,r){return r=this._parseTimeOrLabel(r,0,!0),null==t.immediateRender&&(t.immediateRender=r===this._time&&!this._paused),this.add(new i(n,0,t),r)},u.exportRoot=function(n,t){n=n||{};null==n.smoothChildTiming&&(n.smoothChildTiming=!0);var r,o,f=new u(n),e=f._timeline;for(null==t&&(t=!0),e._remove(f,!0),f._startTime=0,f._rawPrevTime=f._time=f._totalTime=e._time,r=e._first;r;)o=r._next,t&&r instanceof i&&r.target===r.vars.onComplete||f.add(r,r._startTime-r._delay),r=o;return e.add(f,0),f},r.add=function(r,e,o,s){var l,v,a,h,c,y;if("number"!=typeof e&&(e=this._parseTimeOrLabel(e,0,!0,r)),!(r instanceof n)){if(r instanceof Array||r&&r.push&&f(r)){for(o=o||"normal",s=s||0,l=e,v=r.length,a=0;v>a;a++)f(h=r[a])&&(h=new u({tweens:h})),this.add(h,l),"string"!=typeof h&&"function"!=typeof h&&("sequence"===o?l=h._startTime+h.totalDuration()/h._timeScale:"start"===o&&(h._startTime-=h.delay())),l+=s;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,e);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(t.prototype.add.call(this,r,e),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,y=c.rawTime()>r._startTime;c._timeline;)y&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},r.remove=function(t){if(t instanceof n)return this._remove(t,!1);if(t instanceof Array||t&&t.push&&f(t)){for(var i=t.length;--i>-1;)this.remove(t[i]);return this}return"string"==typeof t?this.removeLabel(t):this.kill(null,t)},r._remove=function(n,i){t.prototype._remove.call(this,n,i);var r=this._last;return r?this._time>r._startTime+r._totalDuration/r._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},r.append=function(n,t){return this.add(n,this._parseTimeOrLabel(null,t,!0,n))},r.insert=r.insertMultiple=function(n,t,i,r){return this.add(n,t||0,i,r)},r.appendMultiple=function(n,t,i,r){return this.add(n,this._parseTimeOrLabel(null,t,!0,n),i,r)},r.addLabel=function(n,t){return this._labels[n]=this._parseTimeOrLabel(t),this},r.addPause=function(n,t,i,r){return this.call(y,["{self}",t,i,r],this,n)},r.removeLabel=function(n){return delete this._labels[n],this},r.getLabelTime=function(n){return null!=this._labels[n]?this._labels[n]:-1},r._parseTimeOrLabel=function(t,i,r,u){var e;if(u instanceof n&&u.timeline===this)this.remove(u);else if(u&&(u instanceof Array||u.push&&f(u)))for(e=u.length;--e>-1;)u[e]instanceof n&&u[e].timeline===this&&this.remove(u[e]);if("string"==typeof i)return this._parseTimeOrLabel(i,r&&"number"==typeof t&&null==this._labels[i]?t-this.duration():0,r);if(i=i||0,"string"==typeof t&&(isNaN(t)||null!=this._labels[t])){if(e=t.indexOf("="),-1===e)return null==this._labels[t]?r?this._labels[t]=this.duration()+i:i:this._labels[t]+i;i=parseInt(t.charAt(e-1)+"1",10)*Number(t.substr(e+1));t=e>1?this._parseTimeOrLabel(t.substr(0,e-1),0,r):this.duration()}else null==t&&(t=this.duration());return Number(t)+i},r.seek=function(n,t){return this.totalTime("number"==typeof n?n:this._parseTimeOrLabel(n),t!==!1)},r.stop=function(){return this.paused(!0)},r.gotoAndPlay=function(n,t){return this.play(n,t)},r.gotoAndStop=function(n,t){return this.pause(n,t)},r.render=function(n,t,i){this._gc&&this._enabled(!0,!1);var r,v,o,u,h,a=this._dirty?this.totalDuration():this._totalDuration,f=this._time,p=this._startTime,w=this._timeScale,y=this._paused;if(n>=a?(this._totalTime=this._time=a,this._reversed||this._hasPausedChild()||(v=!0,u="onComplete",0===this._duration&&(0===n||0>this._rawPrevTime||this._rawPrevTime===e)&&this._rawPrevTime!==n&&this._first&&(h=!0,this._rawPrevTime>e&&(u="onReverseComplete"))),this._rawPrevTime=this._duration||!t||n||this._rawPrevTime===n?n:e,n=a+.0001):1e-7>n?(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>n&&this._rawPrevTime>=0))&&(u="onReverseComplete",v=this._reversed),0>n?(this._active=!1,this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=n):(this._rawPrevTime=this._duration||!t||n||this._rawPrevTime===n?n:e,n=0,this._initted||(h=!0))):this._totalTime=this._time=this._rawPrevTime=n,this._time!==f&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&n>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(t||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||s)),this._time>=f)for(r=this._first;r&&(o=r._next,!this._paused||y);)(r._active||r._startTime<=this._time&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(n-r._startTime)*r._timeScale,t,i):r.render((n-r._startTime)*r._timeScale,t,i)),r=o;else for(r=this._last;r&&(o=r._prev,!this._paused||y);)(r._active||f>=r._startTime&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(n-r._startTime)*r._timeScale,t,i):r.render((n-r._startTime)*r._timeScale,t,i)),r=o;this._onUpdate&&(t||(c.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||s)));u&&(this._gc||(p===this._startTime||w!==this._timeScale)&&(0===this._time||a>=this.totalDuration())&&(v&&(c.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[u]&&this.vars[u].apply(this.vars[u+"Scope"]||this,this.vars[u+"Params"]||s)))}},r._hasPausedChild=function(){for(var n=this._first;n;){if(n._paused||n instanceof u&&n._hasPausedChild())return!0;n=n._next}return!1},r.getChildren=function(n,t,r,u){u=u||-9999999999;for(var e=[],f=this._first,o=0;f;)u>f._startTime||(f instanceof i?t!==!1&&(e[o++]=f):(r!==!1&&(e[o++]=f),n!==!1&&(e=e.concat(f.getChildren(!0,t,r)),o=e.length))),f=f._next;return e},r.getTweensOf=function(n,t){var r,u,f=this._gc,e=[],o=0;for(f&&this._enabled(!0,!0),r=i.getTweensOf(n),u=r.length;--u>-1;)(r[u].timeline===this||t&&this._contains(r[u]))&&(e[o++]=r[u]);return f&&this._enabled(!1,!0),e},r._contains=function(n){for(var t=n.timeline;t;){if(t===this)return!0;t=t.timeline}return!1},r.shiftChildren=function(n,t,i){i=i||0;for(var u,r=this._first,f=this._labels;r;)r._startTime>=i&&(r._startTime+=n),r=r._next;if(t)for(u in f)f[u]>=i&&(f[u]+=n);return this._uncache(!0)},r._kill=function(n,t){if(!n&&!t)return this._enabled(!1,!1);for(var i=t?this.getTweensOf(t):this.getChildren(!0,!0,!1),r=i.length,u=!1;--r>-1;)i[r]._kill(n,t)&&(u=!0);return u},r.clear=function(n){var t=this.getChildren(!1,!0,!0),i=t.length;for(this._time=this._totalTime=0;--i>-1;)t[i]._enabled(!1,!1);return n!==!1&&(this._labels={}),this._uncache(!0)},r.invalidate=function(){for(var n=this._first;n;)n.invalidate(),n=n._next;return this},r._enabled=function(n,i){if(n===this._gc)for(var r=this._first;r;)r._enabled(n,!0),r=r._next;return t.prototype._enabled.call(this,n,i)},r.duration=function(n){return arguments.length?(0!==this.duration()&&0!==n&&this.timeScale(this._duration/n),this):(this._dirty&&this.totalDuration(),this._duration)},r.totalDuration=function(n){if(!arguments.length){if(this._dirty){for(var f,r,i=0,t=this._last,u=999999999999;t;)f=t._prev,t._dirty&&t.totalDuration(),t._startTime>u&&this._sortChildren&&!t._paused?this.add(t,t._startTime-t._delay):u=t._startTime,0>t._startTime&&!t._paused&&(i-=t._startTime,this._timeline.smoothChildTiming&&(this._startTime+=t._startTime/this._timeScale),this.shiftChildren(-t._startTime,!1,-9999999999),u=0),r=t._startTime+t._totalDuration/t._timeScale,r>i&&(i=r),t=f;this._duration=this._totalDuration=i;this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==n&&this.timeScale(this._totalDuration/n),this},r.usesFrames=function(){for(var t=this._timeline;t._timeline;)t=t._timeline;return t===n._rootFramesTimeline},r.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},u},!0)});_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(n){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[n]};"function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=t())}("TimelineLite");
/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(n){var f,u,h,v=_gsScope.GreenSockGlobals||_gsScope,p=v.com.greensock,s=2*Math.PI,y=Math.PI/2,r=p._class,t=function(t,i){var u=r("easing."+t,function(){},!0),f=u.prototype=new n;return f.constructor=u,f.getRatio=i,u},c=n.register||function(){},e=function(n,t,i,u){var f=r("easing."+n,{easeOut:new t,easeIn:new i,easeInOut:new u},!0);return c(f,n),f},l=function(n,t,i){this.t=n;this.v=t;i&&(this.next=i,i.prev=this,this.c=i.v-t,this.gap=i.t-n)},a=function(t,i){var u=r("easing."+t,function(n){this._p1=n||0===n?n:1.70158;this._p2=1.525*this._p1},!0),f=u.prototype=new n;return f.constructor=u,f.getRatio=i,f.config=function(n){return new u(n)},u},w=e("Back",a("BackOut",function(n){return(n-=1)*n*((this._p1+1)*n+this._p1)+1}),a("BackIn",function(n){return n*n*((this._p1+1)*n-this._p1)}),a("BackInOut",function(n){return 1>(n*=2)?.5*n*n*((this._p2+1)*n-this._p2):.5*((n-=2)*n*((this._p2+1)*n+this._p2)+2)})),o=r("easing.SlowMo",function(n,t,i){t=t||0===t?t:.7;null==n?n=.7:n>1&&(n=1);this._p=1!==n?t:0;this._p1=(1-n)/2;this._p2=n;this._p3=this._p1+this._p2;this._calcEnd=i===!0},!0),i=o.prototype=new n;return i.constructor=o,i.getRatio=function(n){var t=n+(.5-n)*this._p;return this._p1>n?this._calcEnd?1-(n=1-n/this._p1)*n:t-(n=1-n/this._p1)*n*n*n*t:n>this._p3?this._calcEnd?1-(n=(n-this._p3)/this._p1)*n:t+(n-t)*(n=(n-this._p3)/this._p1)*n*n*n:this._calcEnd?1:t},o.ease=new o(.7,.7),i.config=o.config=function(n,t,i){return new o(n,t,i)},f=r("easing.SteppedEase",function(n){n=n||1;this._p1=1/n;this._p2=n+1},!0),i=f.prototype=new n,i.constructor=f,i.getRatio=function(n){return 0>n?n=0:n>=1&&(n=.999999999),(this._p2*n>>0)*this._p1},i.config=f.config=function(n){return new f(n)},u=r("easing.RoughEase",function(t){t=t||{};for(var i,r,u,f,h,e,c=t.taper||"none",a=[],w=0,v=0|(t.points||20),o=v,y=t.randomize!==!1,b=t.clamp===!0,p=t.template instanceof n?t.template:null,s="number"==typeof t.strength?.4*t.strength:.4;--o>-1;)i=y?Math.random():1/v*o,r=p?p.getRatio(i):i,"none"===c?u=s:"out"===c?(f=1-i,u=f*f*s):"in"===c?u=i*i*s:.5>i?(f=2*i,u=.5*f*f*s):(f=2*(1-i),u=.5*f*f*s),y?r+=Math.random()*u-.5*u:o%2?r+=.5*u:r-=.5*u,b&&(r>1?r=1:0>r&&(r=0)),a[w++]={x:i,y:r};for(a.sort(function(n,t){return n.x-t.x}),e=new l(1,1,null),o=v;--o>-1;)h=a[o],e=new l(h.x,h.y,e);this._prev=new l(0,0,0!==e.t?e:e.next)},!0),i=u.prototype=new n,i.constructor=u,i.getRatio=function(n){var t=this._prev;if(n>t.t){for(;t.next&&n>=t.t;)t=t.next;t=t.prev}else for(;t.prev&&t.t>=n;)t=t.prev;return this._prev=t,t.v+(n-t.t)/t.gap*t.c},i.config=function(n){return new u(n)},u.ease=new u,e("Bounce",t("BounceOut",function(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}),t("BounceIn",function(n){return 1/2.75>(n=1-n)?1-7.5625*n*n:2/2.75>n?1-(7.5625*(n-=1.5/2.75)*n+.75):2.5/2.75>n?1-(7.5625*(n-=2.25/2.75)*n+.9375):1-(7.5625*(n-=2.625/2.75)*n+.984375)}),t("BounceInOut",function(n){var t=.5>n;return n=t?1-2*n:2*n-1,n=1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375,t?.5*(1-n):.5*n+.5})),e("Circ",t("CircOut",function(n){return Math.sqrt(1-(n-=1)*n)}),t("CircIn",function(n){return-(Math.sqrt(1-n*n)-1)}),t("CircInOut",function(n){return 1>(n*=2)?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)})),h=function(t,i,u){var f=r("easing."+t,function(n,t){this._p1=n||1;this._p2=t||u;this._p3=this._p2/s*(Math.asin(1/this._p1)||0)},!0),e=f.prototype=new n;return e.constructor=f,e.getRatio=i,e.config=function(n,t){return new f(n,t)},f},e("Elastic",h("ElasticOut",function(n){return this._p1*Math.pow(2,-10*n)*Math.sin((n-this._p3)*s/this._p2)+1},.3),h("ElasticIn",function(n){return-(this._p1*Math.pow(2,10*(n-=1))*Math.sin((n-this._p3)*s/this._p2))},.3),h("ElasticInOut",function(n){return 1>(n*=2)?-.5*this._p1*Math.pow(2,10*(n-=1))*Math.sin((n-this._p3)*s/this._p2):.5*this._p1*Math.pow(2,-10*(n-=1))*Math.sin((n-this._p3)*s/this._p2)+1},.45)),e("Expo",t("ExpoOut",function(n){return 1-Math.pow(2,-10*n)}),t("ExpoIn",function(n){return Math.pow(2,10*(n-1))-.001}),t("ExpoInOut",function(n){return 1>(n*=2)?.5*Math.pow(2,10*(n-1)):.5*(2-Math.pow(2,-10*(n-1)))})),e("Sine",t("SineOut",function(n){return Math.sin(n*y)}),t("SineIn",function(n){return-Math.cos(n*y)+1}),t("SineInOut",function(n){return-.5*(Math.cos(Math.PI*n)-1)})),r("easing.EaseLookup",{find:function(t){return n.map[t]}},!0),c(v.SlowMo,"SlowMo","ease,"),c(u,"RoughEase","ease,"),c(f,"SteppedEase","ease,"),w},!0)});_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
/*!
 * VERSION: 1.13.0
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(n,t){var rt,lt,f,bt,e=function(){n.call(this,"css");this._overwriteProps.length=0;this.setRatio=e.prototype.setRatio},l={},i=e.prototype=new n("css"),hr,wt,cr,lr,ar,ct;i.constructor=e;e.version="1.13.0";e.API=2;e.defaultTransformPerspective=0;e.defaultSkewType="compensated";i="px";e.suffixMap={top:i,right:i,bottom:i,left:i,width:i,height:i,fontSize:i,padding:i,margin:i,perspective:i,lineHeight:""};var kt,ai,dt,vi,yi,ut,at=/(?:\d|\-\d|\.\d|\-\.\d)+/g,pi=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,gt=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,vt=/[^\d\-\.]/g,ni=/(?:\d|\-|\+|=|#|\.)*/g,ti=/opacity *= *([^)]*)/i,vr=/opacity:([^;]*)/i,yr=/alpha\(opacity *=.+?\)/i,wi=/^(rgb|hsl)/,bi=/([A-Z])/g,ki=/-([a-z])/gi,pr=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,di=function(n,t){return t.toUpperCase()},wr=/(?:Left|Right|Width)/i,br=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,kr=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,a=/,(?=[^\)]*(?:\(|$))/gi,v=Math.PI/180,g=180/Math.PI,yt={},k=document,w=k.createElement("div"),ii=k.createElement("img"),y=e._internals={_specialProps:l},d=navigator.userAgent,nt=function(){var n,t=d.indexOf("Android"),i=k.createElement("div");return dt=-1!==d.indexOf("Safari")&&-1===d.indexOf("Chrome")&&(-1===t||Number(d.substr(t+8,1))>3),yi=dt&&6>Number(d.substr(d.indexOf("Version/")+8,1)),vi=-1!==d.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(d)&&(ut=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a<\/a>",n=i.getElementsByTagName("a")[0],n?/^0.55/.test(n.style.opacity):!1}(),gi=function(n){return ti.test("string"==typeof n?n:(n.currentStyle?n.currentStyle.filter:n.style.filter)||"")?parseFloat(RegExp.$1)/100:1},nr=function(n){window.console&&console.log(n)},tr="",ri="",ft=function(n,t){t=t||w;var r,i,u=t.style;if(void 0!==u[n])return n;for(n=n.charAt(0).toUpperCase()+n.substr(1),r=["O","Moz","ms","Ms","Webkit"],i=5;--i>-1&&void 0===u[r[i]+n];);return i>=0?(ri=3===i?"ms":r[i],tr="-"+ri.toLowerCase()+"-",ri+n):null},et=k.defaultView?k.defaultView.getComputedStyle:function(){},r=e.getStyle=function(n,t,i,r,u){var f;return nt||"opacity"!==t?(!r&&n.style[t]?f=n.style[t]:(i=i||et(n))?f=i[t]||i.getPropertyValue(t)||i.getPropertyValue(t.replace(bi,"-$1").toLowerCase()):n.currentStyle&&(f=n.currentStyle[t]),null==u||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:u):gi(n)},p=y.convertToPixels=function(n,i,u,f,o){if("px"===f||!f)return u;if("auto"===f||!u)return 0;var s,h,a,l=wr.test(i),c=n,v=w.style,y=0>u;if(y&&(u=-u),"%"===f&&-1!==i.indexOf("border"))s=u/100*(l?n.clientWidth:n.clientHeight);else{if(v.cssText="border:0 solid red;position:"+r(n,"position")+";line-height:0;","%"!==f&&c.appendChild)v[l?"borderLeftWidth":"borderTopWidth"]=u+f;else{if(c=n.parentNode||k.body,h=c._gsCache,a=t.ticker.frame,h&&l&&h.time===a)return h.width*u/100;v[l?"width":"height"]=u+f}c.appendChild(w);s=parseFloat(w[l?"offsetWidth":"offsetHeight"]);c.removeChild(w);l&&"%"===f&&e.cacheWidths!==!1&&(h=c._gsCache=c._gsCache||{},h.time=a,h.width=100*(s/u));0!==s||o||(s=p(n,i,u,f,!0))}return y?-s:s},ir=y.calculateOffset=function(n,t,i){if("absolute"!==r(n,"position",i))return 0;var u="left"===t?"Left":"Top",f=r(n,"margin"+u,i);return n["offset"+u]-(p(n,t,parseFloat(f),f.replace(ni,""))||0)},ot=function(n,t){var r,u,i={};if(t=t||et(n,null))if(r=t.length)for(;--r>-1;)i[t[r].replace(ki,di)]=t.getPropertyValue(t[r]);else for(r in t)i[r]=t[r];else if(t=n.currentStyle||n.style)for(r in t)"string"==typeof r&&void 0===i[r]&&(i[r.replace(ki,di)]=t[r]);return nt||(i.opacity=gi(n)),u=ht(n,t,!1),i.rotation=u.rotation,i.skewX=u.skewX,i.scaleX=u.scaleX,i.scaleY=u.scaleY,i.x=u.x,i.y=u.y,b&&(i.z=u.z,i.rotationX=u.rotationX,i.rotationY=u.rotationY,i.scaleZ=u.scaleZ),i.filters&&delete i.filters,i},ui=function(n,t,i,r,u){var e,f,o,s={},h=n.style;for(f in i)"cssText"!==f&&"length"!==f&&isNaN(f)&&(t[f]!==(e=i[f])||u&&u[f])&&-1===f.indexOf("Origin")&&("number"==typeof e||"string"==typeof e)&&(s[f]="auto"!==e||"left"!==f&&"top"!==f?""!==e&&"auto"!==e&&"none"!==e||"string"!=typeof t[f]||""===t[f].replace(vt,"")?e:0:ir(n,f),void 0!==h[f]&&(o=new hi(h,f,h[f],o)));if(r)for(f in r)"className"!==f&&(s[f]=r[f]);return{difs:s,firstMPT:o}},dr={width:["Left","Right"],height:["Top","Bottom"]},gr=["marginLeft","marginRight","marginTop","marginBottom"],nu=function(n,t,i){var u=parseFloat("width"===t?n.offsetWidth:n.offsetHeight),f=dr[t],e=f.length;for(i=i||et(n,null);--e>-1;)u-=parseFloat(r(n,"padding"+f[e],i,!0))||0,u-=parseFloat(r(n,"border"+f[e]+"Width",i,!0))||0;return u},fi=function(n,t){(null==n||""===n||"auto"===n||"auto auto"===n)&&(n="0 0");var u=n.split(" "),i=-1!==n.indexOf("left")?"0%":-1!==n.indexOf("right")?"100%":u[0],r=-1!==n.indexOf("top")?"0%":-1!==n.indexOf("bottom")?"100%":u[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===i||isNaN(parseFloat(i))&&-1===(i+"").indexOf("="))&&(i="50%"),t&&(t.oxp=-1!==i.indexOf("%"),t.oyp=-1!==r.indexOf("%"),t.oxr="="===i.charAt(1),t.oyr="="===r.charAt(1),t.ox=parseFloat(i.replace(vt,"")),t.oy=parseFloat(r.replace(vt,""))),i+" "+r+(u.length>2?" "+u[2]:"")},rr=function(n,t){return"string"==typeof n&&"="===n.charAt(1)?parseInt(n.charAt(0)+"1",10)*parseFloat(n.substr(2)):parseFloat(n)-parseFloat(t)},h=function(n,t){return null==n?t:"string"==typeof n&&"="===n.charAt(1)?parseInt(n.charAt(0)+"1",10)*Number(n.substr(2))+t:parseFloat(n)},st=function(n,t,i,r){var f,o,u,e,s=1e-6;return null==n?e=t:"number"==typeof n?e=n:(f=360,o=n.split("_"),u=Number(o[0].replace(vt,""))*(-1===n.indexOf("rad")?1:g)-("="===n.charAt(1)?0:t),o.length&&(r&&(r[i]=t+u),-1!==n.indexOf("short")&&(u%=f,u!==u%(f/2)&&(u=0>u?u+f:u-f)),-1!==n.indexOf("_cw")&&0>u?u=(u+9999999999*f)%f-(0|u/f)*f:-1!==n.indexOf("ccw")&&u>0&&(u=(u-9999999999*f)%f-(0|u/f)*f)),e=t+u),s>e&&e>-s&&(e=0),e},tt={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ei=function(n,t,i){return n=0>n?n+1:n>1?n-1:n,0|255*(1>6*n?t+6*(i-t)*n:.5>n?i:2>3*n?t+6*(i-t)*(2/3-n):t)+.5},oi=function(n){var i,t,e,u,f,r;return n&&""!==n?"number"==typeof n?[n>>16,255&n>>8,255&n]:(","===n.charAt(n.length-1)&&(n=n.substr(0,n.length-1)),tt[n]?tt[n]:"#"===n.charAt(0)?(4===n.length&&(i=n.charAt(1),t=n.charAt(2),e=n.charAt(3),n="#"+i+i+t+t+e+e),n=parseInt(n.substr(1),16),[n>>16,255&n>>8,255&n]):"hsl"===n.substr(0,3)?(n=n.match(at),u=Number(n[0])%360/360,f=Number(n[1])/100,r=Number(n[2])/100,t=.5>=r?r*(f+1):r+f-r*f,i=2*r-t,n.length>3&&(n[3]=Number(n[3])),n[0]=ei(u+1/3,i,t),n[1]=ei(u,i,t),n[2]=ei(u-1/3,i,t),n):(n=n.match(at)||tt.transparent,n[0]=Number(n[0]),n[1]=Number(n[1]),n[2]=Number(n[2]),n.length>3&&(n[3]=Number(n[3])),n)):tt.black},it="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(i in tt)it+="|"+i+"\\b";it=RegExp(it+")","gi");var ur=function(n,t,i,r){if(null==n)return function(n){return n};var e,s=t?(n.match(it)||[""])[0]:"",f=n.split(s).join("").match(gt)||[],h=n.substr(0,n.indexOf(f[0])),c=")"===n.charAt(n.length-1)?")":"",o=-1!==n.indexOf(" ")?" ":",",u=f.length,l=u>0?f[0].replace(at,""):"";return u?e=t?function(n){var p,v,t,y;if("number"==typeof n)n+=l;else if(r&&a.test(n)){for(y=n.replace(a,"|").split("|"),t=0;y.length>t;t++)y[t]=e(y[t]);return y.join(",")}if(p=(n.match(it)||[s])[0],v=n.split(p).join("").match(gt)||[],t=v.length,u>t--)for(;u>++t;)v[t]=i?v[0|(t-1)/2]:f[t];return h+v.join(o)+o+p+c+(-1!==n.indexOf("inset")?" inset":"")}:function(n){var s,v,t;if("number"==typeof n)n+=l;else if(r&&a.test(n)){for(v=n.replace(a,"|").split("|"),t=0;v.length>t;t++)v[t]=e(v[t]);return v.join(",")}if(s=n.match(gt)||[],t=s.length,u>t--)for(;u>++t;)s[t]=i?s[0|(t-1)/2]:f[t];return h+s.join(o)+c}:function(n){return n}},si=function(n){return n=n.split(","),function(t,i,r,u,f,e,o){var s,h=(i+"").split(" ");for(o={},s=0;4>s;s++)o[n[s]]=h[s]=h[s]||h[(s-1)/2>>0];return u.parse(t,o,f,e)}},hi=(y._setPluginRatio=function(n){this.plugin.setRatio(n);for(var r,t,u,e,f=this.data,o=f.proxy,i=f.firstMPT,s=1e-6;i;)r=o[i.v],i.r?r=Math.round(r):s>r&&r>-s&&(r=0),i.t[i.p]=r,i=i._next;if(f.autoRotate&&(f.autoRotate.rotation=o.rotation),1===n)for(i=f.firstMPT;i;){if(t=i.t,t.type){if(1===t.type){for(e=t.xs0+t.s+t.xs1,u=1;t.l>u;u++)e+=t["xn"+u]+t["xs"+(u+1)];t.e=e}}else t.e=t.s+t.xs0;i=i._next}},function(n,t,i,r,u){this.t=n;this.p=t;this.v=i;this.r=u;r&&(r._prev=this,this._next=r)}),o=(y._parseToProxy=function(n,t,i,r,u,f){var c,e,o,s,v,h=r,l={},a={},y=i._transform,p=yt;for(i._transform=null,yt=t,r=v=i.parse(n,t,r,u),yt=p,f&&(i._transform=y,h&&(h._prev=null,h._prev&&(h._prev._next=null)));r&&r!==h;){if(1>=r.type&&(e=r.p,a[e]=r.s+r.c,l[e]=r.s,f||(s=new hi(r,"s",e,s,r.r),r.c=0),1===r.type))for(c=r.l;--c>0;)o="xn"+c,e=r.p+"_"+o,a[e]=r.data[o],l[e]=r[o],f||(s=new hi(r,o,e,s,r.rxp[o]));r=r._next}return{proxy:l,end:a,firstMPT:s,pt:v}},y.CSSPropTween=function(n,t,i,r,u,f,e,s,h,c,l){this.t=n;this.p=t;this.s=i;this.c=r;this.n=e||t;n instanceof o||bt.push(this.n);this.r=s;this.type=f||0;h&&(this.pr=h,rt=!0);this.b=void 0===c?i:c;this.e=void 0===l?i+r:l;u&&(this._next=u,u._prev=this)}),pt=e.parseComplex=function(n,t,i,r,u,f,e,s,h,c){i=i||f||"";e=new o(n,t,0,0,e,c?2:1,null,!1,s,i,r);r+="";var y,w,b,l,v,ut,ft,it,k,et,d,g,p=i.split(", ").join(",").split(" "),rt=r.split(", ").join(",").split(" "),ot=p.length,st=kt!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(p=p.join(" ").replace(a,", ").split(" "),rt=rt.join(" ").replace(a,", ").split(" "),ot=p.length),ot!==rt.length&&(p=(f||"").split(" "),ot=p.length),e.plugin=h,e.setRatio=c,y=0;ot>y;y++)if(l=p[y],v=rt[y],it=parseFloat(l),it||0===it)e.appendXtra("",it,rr(v,it),v.replace(pi,""),st&&-1!==v.indexOf("px"),!0);else if(u&&("#"===l.charAt(0)||tt[l]||wi.test(l)))g=","===v.charAt(v.length-1)?"),":")",l=oi(l),v=oi(v),k=l.length+v.length>6,k&&!nt&&0===v[3]?(e["xs"+e.l]+=e.l?" transparent":"transparent",e.e=e.e.split(rt[y]).join("transparent")):(nt||(k=!1),e.appendXtra(k?"rgba(":"rgb(",l[0],v[0]-l[0],",",!0,!0).appendXtra("",l[1],v[1]-l[1],",",!0).appendXtra("",l[2],v[2]-l[2],k?",":g,!0),k&&(l=4>l.length?1:l[3],e.appendXtra("",l,(4>v.length?1:v[3])-l,g,!1)));else if(ut=l.match(at)){if(ft=v.match(pi),!ft||ft.length!==ut.length)return e;for(b=0,w=0;ut.length>w;w++)d=ut[w],et=l.indexOf(d,b),e.appendXtra(l.substr(b,et-b),Number(d),rr(ft[w],d),"",st&&"px"===l.substr(et+d.length,2),0===w),b=et+d.length;e["xs"+e.l]+=l.substr(b)}else e["xs"+e.l]+=e.l?" "+l:l;if(-1!==r.indexOf("=")&&e.data){for(g=e.xs0+e.data.s,y=1;e.l>y;y++)g+=e["xs"+y]+e.data["xn"+y];e.e=g+e["xs"+y]}return e.l||(e.type=-1,e.xs0=e.e),e.xfirst||e},s=9;for(i=o.prototype,i.l=i.pr=0;--s>0;)i["xn"+s]=0,i["xs"+s]="";i.xs0="";i._next=i._prev=i.xfirst=i.data=i.plugin=i.setRatio=i.rxp=null;i.appendXtra=function(n,t,i,r,u,f){var e=this,s=e.l;return e["xs"+s]+=f&&s?" "+n:n||"",i||0===s||e.plugin?(e.l++,e.type=e.setRatio?2:1,e["xs"+e.l]=r||"",s>0?(e.data["xn"+s]=t+i,e.rxp["xn"+s]=u,e["xn"+s]=t,e.plugin||(e.xfirst=new o(e,"xn"+s,t,i,e.xfirst||e,0,e.n,u,e.pr),e.xfirst.xs0=0),e):(e.data={s:t+i},e.rxp={},e.s=t,e.c=i,e.r=u,e)):(e["xs"+s]+=t+(r||""),e)};var fr=function(n,t){t=t||{};this.p=t.prefix?ft(n)||n:n;l[n]=l[this.p]=this;this.format=t.formatter||ur(t.defaultValue,t.color,t.collapsible,t.multi);t.parser&&(this.parse=t.parser);this.clrs=t.color;this.multi=t.multi;this.keyword=t.keyword;this.dflt=t.defaultValue;this.pr=t.priority||0},u=y._registerComplexSpecialProp=function(n,t,i){"object"!=typeof t&&(t={parser:i});var r,e,u=n.split(","),f=t.defaultValue;for(i=i||[f],r=0;u.length>r;r++)t.prefix=0===r&&t.prefix,t.defaultValue=i[r]||f,e=new fr(u[r],t)},tu=function(n){if(!l[n]){var t=n.charAt(0).toUpperCase()+n.substr(1)+"Plugin";u(n,{parser:function(n,i,r,u,f,e,o){var s=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[t];return s?(s._cssRegister(),l[r].parse(n,i,r,u,f,e,o)):(nr("Error: "+t+" js file not loaded."),f)}})}};i=fr.prototype;i.parseComplex=function(n,t,i,r,u,f){var o,s,e,l,v,c,h=this.keyword;if(this.multi&&(a.test(i)||a.test(t)?(s=t.replace(a,"|").split("|"),e=i.replace(a,"|").split("|")):h&&(s=[t],e=[i])),e){for(l=e.length>s.length?e.length:s.length,o=0;l>o;o++)t=s[o]=s[o]||this.dflt,i=e[o]=e[o]||this.dflt,h&&(v=t.indexOf(h),c=i.indexOf(h),v!==c&&(i=-1===c?e:s,i[o]+=" "+h));t=s.join(", ");i=e.join(", ")}return pt(n,this.p,t,i,this.clrs,this.dflt,r,this.pr,u,f)};i.parse=function(n,t,i,u,e,o){return this.parseComplex(n.style,this.format(r(n,this.p,f,!1,this.dflt)),this.format(t),e,o)};e.registerSpecialProp=function(n,t,i){u(n,{parser:function(n,r,u,f,e,s){var h=new o(n,u,0,0,e,2,u,!1,i);return h.plugin=s,h.setRatio=t(n,r,f._tween,u),h},priority:i})};var er="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),c=ft("transform"),iu=tr+"transform",ci=ft("transformOrigin"),b=null!==ft("perspective"),or=y.Transform=function(){this.skewY=0},ht=y.getTransform=function(n,t,i,u){if(n._gsTransform&&i&&!u)return n._gsTransform;var a,o,nt,lt,ui,vt,yt,ut,tt,fi,ei,pt,wt,f=i?n._gsTransform||new or:new or,yi=0>f.scaleX,et=2e-5,y=1e5,at=179.99,ot=at*v,pi=b?parseFloat(r(n,ci,t,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0;if(c?a=r(n,iu,t,!0):n.currentStyle&&(a=n.currentStyle.filter.match(br),a=a&&4===a.length?[a[0].substr(4),Number(a[2].substr(4)),Number(a[1].substr(4)),a[3].substr(4),f.x||0,f.y||0].join(","):""),a&&"none"!==a&&"matrix(1, 0, 0, 1, 0, 0)"!==a){for(o=(a||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],nt=o.length;--nt>-1;)lt=Number(o[nt]),o[nt]=(ui=lt-(lt|=0))?(0|ui*y+(0>ui?-.5:.5))/y+lt:lt;if(16===o.length){var st=o[8],w=o[9],p=o[10],hi=o[12],li=o[13],ht=o[14];if(f.zOrigin&&(ht=-f.zOrigin,hi=st*ht-o[12],li=w*ht-o[13],ht=p*ht+f.zOrigin-o[14]),!i||u||null==f.rotationX){var bt,ct,kt,s,h,oi,si,ft=o[0],k=o[1],dt=o[2],wi=o[3],gt=o[4],d=o[5],it=o[6],bi=o[7],rt=o[11],l=Math.atan2(it,p),ai=-ot>l||l>ot;f.rotationX=l*g;l&&(s=Math.cos(-l),h=Math.sin(-l),bt=gt*s+st*h,ct=d*s+w*h,kt=it*s+p*h,st=gt*-h+st*s,w=d*-h+w*s,p=it*-h+p*s,rt=bi*-h+rt*s,gt=bt,d=ct,it=kt);l=Math.atan2(st,ft);f.rotationY=l*g;l&&(oi=-ot>l||l>ot,s=Math.cos(-l),h=Math.sin(-l),bt=ft*s-st*h,ct=k*s-w*h,kt=dt*s-p*h,w=k*h+w*s,p=dt*h+p*s,rt=wi*h+rt*s,ft=bt,k=ct,dt=kt);l=Math.atan2(k,d);f.rotation=l*g;l&&(si=-ot>l||l>ot,s=Math.cos(-l),h=Math.sin(-l),ft=ft*s+gt*h,ct=k*s+d*h,d=k*-h+d*s,it=dt*-h+it*s,k=ct);si&&ai?f.rotation=f.rotationX=0:si&&oi?f.rotation=f.rotationY=0:oi&&ai&&(f.rotationY=f.rotationX=0);f.scaleX=(0|Math.sqrt(ft*ft+k*k)*y+.5)/y;f.scaleY=(0|Math.sqrt(d*d+w*w)*y+.5)/y;f.scaleZ=(0|Math.sqrt(it*it+p*p)*y+.5)/y;f.skewX=0;f.perspective=rt?1/(0>rt?-rt:rt):0;f.x=hi;f.y=li;f.z=ht}}else if(!(b&&!u&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===r(n,"display",t))){var vi=o.length>=6,ni=vi?o[0]:1,ti=o[1]||0,ii=o[2]||0,ri=vi?o[3]:1;f.x=o[4]||0;f.y=o[5]||0;vt=Math.sqrt(ni*ni+ti*ti);yt=Math.sqrt(ri*ri+ii*ii);ut=ni||ti?Math.atan2(ti,ni)*g:f.rotation||0;tt=ii||ri?Math.atan2(ii,ri)*g+ut:f.skewX||0;fi=vt-Math.abs(f.scaleX||0);ei=yt-Math.abs(f.scaleY||0);Math.abs(tt)>90&&270>Math.abs(tt)&&(yi?(vt*=-1,tt+=0>=ut?180:-180,ut+=0>=ut?180:-180):(yt*=-1,tt+=0>=tt?180:-180));pt=(ut-f.rotation)%180;wt=(tt-f.skewX)%180;(void 0===f.skewX||fi>et||-et>fi||ei>et||-et>ei||pt>-at&&at>pt&&!1|pt*y||wt>-at&&at>wt&&!1|wt*y)&&(f.scaleX=vt,f.scaleY=yt,f.rotation=ut,f.skewX=tt);b&&(f.rotationX=f.rotationY=f.z=0,f.perspective=parseFloat(e.defaultTransformPerspective)||0,f.scaleZ=1)}f.zOrigin=pi;for(nt in f)et>f[nt]&&f[nt]>-et&&(f[nt]=0)}else f={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,perspective:0,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return i&&(n._gsTransform=f),f.xPercent=f.yPercent=0,f},ru=function(n){var o,w,t=this.data,nt=-t.rotation*v,ft=nt+t.skewX*v,e=1e5,h=(0|Math.cos(nt)*t.scaleX*e)/e,u=(0|Math.sin(nt)*t.scaleX*e)/e,f=(0|Math.sin(ft)*-t.scaleY*e)/e,c=(0|Math.cos(ft)*t.scaleY*e)/e,d=this.t.style,g=this.t.currentStyle,k,y,et,ot;if(g){w=u;u=-f;f=-w;o=g.filter;d.filter="";var i,r,l=this.t.offsetWidth,a=this.t.offsetHeight,tt="absolute"!==g.position,b="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+u+", M21="+f+", M22="+c,it=t.x+l*t.xPercent/100,rt=t.y+a*t.yPercent/100;if(null!=t.ox&&(i=(t.oxp?.01*l*t.ox:t.ox)-l/2,r=(t.oyp?.01*a*t.oy:t.oy)-a/2,it+=i-(i*h+r*u),rt+=r-(i*f+r*c)),tt?(i=l/2,r=a/2,b+=", Dx="+(i-(i*h+r*u)+it)+", Dy="+(r-(i*f+r*c)+rt)+")"):b+=", sizingMethod='auto expand')",d.filter=-1!==o.indexOf("DXImageTransform.Microsoft.Matrix(")?o.replace(kr,b):b+" "+o,(0===n||1===n)&&1===h&&0===u&&0===f&&1===c&&(tt&&-1===b.indexOf("Dx=0, Dy=0")||ti.test(o)&&100!==parseFloat(RegExp.$1)||-1===o.indexOf("gradient("&&o.indexOf("Alpha"))&&d.removeAttribute("filter")),!tt)for(ot=8>ut?1:-1,i=t.ieOffsetX||0,r=t.ieOffsetY||0,t.ieOffsetX=Math.round((l-((0>h?-h:h)*l+(0>u?-u:u)*a))/2+it),t.ieOffsetY=Math.round((a-((0>c?-c:c)*a+(0>f?-f:f)*l))/2+rt),s=0;4>s;s++)y=gr[s],k=g[y],w=-1!==k.indexOf("px")?parseFloat(k):p(this.t,y,parseFloat(k),k.replace(ni,""))||0,et=w!==t[y]?2>s?-t.ieOffsetX:-t.ieOffsetY:2>s?i-t.ieOffsetX:r-t.ieOffsetY,d[y]=(t[y]=Math.round(w-et*(0===s||2===s?1:ot)))+"px"}},li=y.set3DTransformRatio=function(n){var tt,g,y,p,it,nt,w,b,et,rt,l,o,ot,ut,k,st,i,r,u,f,ct,lt,at,t=this.data,vt=this.t.style,e=t.rotation*v,s=t.scaleX,h=t.scaleY,a=t.scaleZ,yt=t.x,pt=t.y,ht=t.z,d=t.perspective,ft;if(!(1!==n&&0!==n||"auto"!==t.force3D||t.rotationY||t.rotationX||1!==a||d||ht))return sr.call(this,n),void 0;if(vi&&(ft=.0001,ft>s&&s>-ft&&(s=a=2e-5),ft>h&&h>-ft&&(h=a=2e-5),!d||t.z||t.rotationX||t.rotationY||(d=0)),e||t.skewX)r=Math.cos(e),u=Math.sin(e),tt=r,it=u,t.skewX&&(e-=t.skewX*v,r=Math.cos(e),u=Math.sin(e),"simple"===t.skewType&&(f=Math.tan(t.skewX*v),f=Math.sqrt(1+f*f),r*=f,u*=f)),g=-u,nt=r;else{if(!(t.rotationY||t.rotationX||1!==a||d))return vt[c]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) translate3d(":"translate3d(")+yt+"px,"+pt+"px,"+ht+"px)"+(1!==s||1!==h?" scale("+s+","+h+")":""),void 0;tt=nt=1;g=it=0}l=1;y=p=w=b=et=rt=o=ot=ut=0;k=d?-1/d:0;st=t.zOrigin;i=1e5;e=t.rotationY*v;e&&(r=Math.cos(e),u=Math.sin(e),et=l*-u,ot=k*-u,y=tt*u,w=it*u,l*=r,k*=r,tt*=r,it*=r);e=t.rotationX*v;e&&(r=Math.cos(e),u=Math.sin(e),f=g*r+y*u,ct=nt*r+w*u,lt=rt*r+l*u,at=ut*r+k*u,y=g*-u+y*r,w=nt*-u+w*r,l=rt*-u+l*r,k=ut*-u+k*r,g=f,nt=ct,rt=lt,ut=at);1!==a&&(y*=a,w*=a,l*=a,k*=a);1!==h&&(g*=h,nt*=h,rt*=h,ut*=h);1!==s&&(tt*=s,it*=s,et*=s,ot*=s);st&&(o-=st,p=y*o,b=w*o,o=l*o+st);p=(f=(p+=yt)-(p|=0))?(0|f*i+(0>f?-.5:.5))/i+p:p;b=(f=(b+=pt)-(b|=0))?(0|f*i+(0>f?-.5:.5))/i+b:b;o=(f=(o+=ht)-(o|=0))?(0|f*i+(0>f?-.5:.5))/i+o:o;vt[c]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix3d(":"matrix3d(")+[(0|tt*i)/i,(0|it*i)/i,(0|et*i)/i,(0|ot*i)/i,(0|g*i)/i,(0|nt*i)/i,(0|rt*i)/i,(0|ut*i)/i,(0|y*i)/i,(0|w*i)/i,(0|l*i)/i,(0|k*i)/i,p,b,o,d?1+-o/d:1].join(",")+")"},sr=y.set2DTransformRatio=function(n){var r,u,i,f,e,t=this.data,l=this.t,o=l.style,s=t.x,h=t.y;return t.rotationX||t.rotationY||t.z||t.force3D===!0||"auto"===t.force3D&&1!==n&&0!==n?(this.setRatio=li,li.call(this,n),void 0):(t.rotation||t.skewX?(r=t.rotation*v,u=r-t.skewX*v,i=1e5,f=t.scaleX*i,e=t.scaleY*i,o[c]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix(":"matrix(")+(0|Math.cos(r)*f)/i+","+(0|Math.sin(r)*f)/i+","+(0|Math.sin(u)*-e)/i+","+(0|Math.cos(u)*e)/i+","+s+","+h+")"):o[c]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix(":"matrix(")+t.scaleX+",0,0,"+t.scaleY+","+s+","+h+")",void 0)};for(u("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(n,t,i,u,s,l,a){if(u._transform)return s;var p,ut,g,d,it,rt,nt,y=u._transform=ht(n,f,!0,a.parseTransform),ft=n.style,et=1e-6,ot=er.length,v=a,tt={};if("string"==typeof v.transform&&c)g=w.style,g[c]=v.transform,g.display="block",g.position="absolute",k.body.appendChild(w),p=ht(w,null,!1),k.body.removeChild(w);else if("object"==typeof v){if(p={scaleX:h(null!=v.scaleX?v.scaleX:v.scale,y.scaleX),scaleY:h(null!=v.scaleY?v.scaleY:v.scale,y.scaleY),scaleZ:h(v.scaleZ,y.scaleZ),x:h(v.x,y.x),y:h(v.y,y.y),z:h(v.z,y.z),xPercent:h(v.xPercent,y.xPercent),yPercent:h(v.yPercent,y.yPercent),perspective:h(v.transformPerspective,y.perspective)},nt=v.directionalRotation,null!=nt)if("object"==typeof nt)for(g in nt)v[g]=nt[g];else v.rotation=nt;"string"==typeof v.x&&-1!==v.x.indexOf("%")&&(p.x=0,p.xPercent=h(v.x,y.xPercent));"string"==typeof v.y&&-1!==v.y.indexOf("%")&&(p.y=0,p.yPercent=h(v.y,y.yPercent));p.rotation=st("rotation"in v?v.rotation:"shortRotation"in v?v.shortRotation+"_short":"rotationZ"in v?v.rotationZ:y.rotation,y.rotation,"rotation",tt);b&&(p.rotationX=st("rotationX"in v?v.rotationX:"shortRotationX"in v?v.shortRotationX+"_short":y.rotationX||0,y.rotationX,"rotationX",tt),p.rotationY=st("rotationY"in v?v.rotationY:"shortRotationY"in v?v.shortRotationY+"_short":y.rotationY||0,y.rotationY,"rotationY",tt));p.skewX=null==v.skewX?y.skewX:st(v.skewX,y.skewX);p.skewY=null==v.skewY?y.skewY:st(v.skewY,y.skewY);(ut=p.skewY-y.skewY)&&(p.skewX+=ut,p.rotation+=ut)}for(b&&null!=v.force3D&&(y.force3D=v.force3D,rt=!0),y.skewType=v.skewType||y.skewType||e.defaultSkewType,it=y.force3D||y.z||y.rotationX||y.rotationY||p.z||p.rotationX||p.rotationY||p.perspective,it||null==v.scale||(p.scaleZ=1);--ot>-1;)i=er[ot],d=p[i]-y[i],(d>et||-et>d||null!=yt[i])&&(rt=!0,s=new o(y,i,y[i],d,s),i in tt&&(s.e=tt[i]),s.xs0=0,s.plugin=l,u._overwriteProps.push(s.n));return d=v.transformOrigin,(d||b&&it&&y.zOrigin)&&(c?(rt=!0,i=ci,d=(d||r(n,i,f,!1,"50% 50%"))+"",s=new o(ft,i,0,0,s,-1,"transformOrigin"),s.b=ft[i],s.plugin=l,b?(g=y.zOrigin,d=d.split(" "),y.zOrigin=(d.length>2&&(0===g||"0px"!==d[2])?parseFloat(d[2]):g)||0,s.xs0=s.e=d[0]+" "+(d[1]||"50%")+" 0px",s=new o(y,"zOrigin",0,0,s,-1,s.n),s.b=g,s.xs0=s.e=y.zOrigin):s.xs0=s.e=d):fi(d+"",y)),rt&&(u._transformType=it||3===this._transformType?3:2),s},prefix:!0}),u("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),u("borderRadius",{defaultValue:"0px",parser:function(n,t,i,u,e){t=this.format(t);var tt,l,d,h,o,s,w,a,it,rt,c,v,g,b,k,nt,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],ut=n.style;for(it=parseFloat(n.offsetWidth),rt=parseFloat(n.offsetHeight),tt=t.split(" "),l=0;y.length>l;l++)this.p.indexOf("border")&&(y[l]=ft(y[l])),o=h=r(n,y[l],f,!1,"0px"),-1!==o.indexOf(" ")&&(h=o.split(" "),o=h[0],h=h[1]),s=d=tt[l],w=parseFloat(o),v=o.substr((w+"").length),g="="===s.charAt(1),g?(a=parseInt(s.charAt(0)+"1",10),s=s.substr(2),a*=parseFloat(s),c=s.substr((a+"").length-(0>a?1:0))||""):(a=parseFloat(s),c=s.substr((a+"").length)),""===c&&(c=lt[i]||v),c!==v&&(b=p(n,"borderLeft",w,v),k=p(n,"borderTop",w,v),"%"===c?(o=100*(b/it)+"%",h=100*(k/rt)+"%"):"em"===c?(nt=p(n,"borderLeft",1,"em"),o=b/nt+"em",h=k/nt+"em"):(o=b+"px",h=k+"px"),g&&(s=parseFloat(o)+a+c,d=parseFloat(h)+a+c)),e=pt(ut,y[l],o+" "+h,s+" "+d,!1,"0px",e);return e},prefix:!0,formatter:ur("0px 0px 0px 0px",!1,!0)}),u("backgroundPosition",{defaultValue:"0 0",parser:function(n,t,i,u,e,o){var c,b,h,v,y,l,p="background-position",a=f||et(n,null),s=this.format((a?ut?a.getPropertyValue(p+"-x")+" "+a.getPropertyValue(p+"-y"):a.getPropertyValue(p):n.currentStyle.backgroundPositionX+" "+n.currentStyle.backgroundPositionY)||"0 0"),w=this.format(t);if(-1!==s.indexOf("%")!=(-1!==w.indexOf("%"))&&(l=r(n,"backgroundImage").replace(pr,""),l&&"none"!==l)){for(c=s.split(" "),b=w.split(" "),ii.setAttribute("src",l),h=2;--h>-1;)s=c[h],v=-1!==s.indexOf("%"),v!==(-1!==b[h].indexOf("%"))&&(y=0===h?n.offsetWidth-ii.width:n.offsetHeight-ii.height,c[h]=v?parseFloat(s)/100*y+"px":100*(parseFloat(s)/y)+"%");s=c.join(" ")}return this.parseComplex(n.style,s,w,e,o)},formatter:fi}),u("backgroundSize",{defaultValue:"0 0",formatter:fi}),u("perspective",{defaultValue:"0px",prefix:!0}),u("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),u("transformStyle",{prefix:!0}),u("backfaceVisibility",{prefix:!0}),u("userSelect",{prefix:!0}),u("margin",{parser:si("marginTop,marginRight,marginBottom,marginLeft")}),u("padding",{parser:si("paddingTop,paddingRight,paddingBottom,paddingLeft")}),u("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(n,t,i,u,e,o){var c,s,h;return 9>ut?(s=n.currentStyle,h=8>ut?" ":",",c="rect("+s.clipTop+h+s.clipRight+h+s.clipBottom+h+s.clipLeft+")",t=this.format(t).split(",").join(h)):(c=this.format(r(n,this.p,f,!1,this.dflt)),t=this.format(t)),this.parseComplex(n.style,c,t,e,o)}}),u("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),u("autoRound,strictUnits",{parser:function(n,t,i,r,u){return u}}),u("border",{defaultValue:"0px solid #000",parser:function(n,t,i,u,e,o){return this.parseComplex(n.style,this.format(r(n,"borderTopWidth",f,!1,"0px")+" "+r(n,"borderTopStyle",f,!1,"solid")+" "+r(n,"borderTopColor",f,!1,"#000")),this.format(t),e,o)},color:!0,formatter:function(n){var t=n.split(" ");return t[0]+" "+(t[1]||"solid")+" "+(n.match(it)||["#000"])[0]}}),u("borderWidth",{parser:si("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),u("float,cssFloat,styleFloat",{parser:function(n,t,i,r,u){var f=n.style,e="cssFloat"in f?"cssFloat":"styleFloat";return new o(f,e,0,0,u,-1,i,!1,0,f[e],t)}}),hr=function(n){var f,i=this.t,t=i.filter||r(this.data,"filter"),u=0|this.s+this.c*n;100===u&&(-1===t.indexOf("atrix(")&&-1===t.indexOf("radient(")&&-1===t.indexOf("oader(")?(i.removeAttribute("filter"),f=!r(this.data,"filter")):(i.filter=t.replace(yr,""),f=!0));f||(this.xn1&&(i.filter=t=t||"alpha(opacity="+u+")"),-1===t.indexOf("pacity")?0===u&&this.xn1||(i.filter=t+" alpha(opacity="+u+")"):i.filter=t.replace(ti,"opacity="+u))},u("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(n,t,i,u,e,s){var h=parseFloat(r(n,"opacity",f,!1,"1")),c=n.style,l="autoAlpha"===i;return"string"==typeof t&&"="===t.charAt(1)&&(t=("-"===t.charAt(0)?-1:1)*parseFloat(t.substr(2))+h),l&&1===h&&"hidden"===r(n,"visibility",f)&&0!==t&&(h=0),nt?e=new o(c,"opacity",h,t-h,e):(e=new o(c,"opacity",100*h,100*(t-h),e),e.xn1=l?1:0,c.zoom=1,e.type=2,e.b="alpha(opacity="+e.s+")",e.e="alpha(opacity="+(e.s+e.c)+")",e.data=n,e.plugin=s,e.setRatio=hr),l&&(e=new o(c,"visibility",0,0,e,-1,null,!1,0,0!==h?"inherit":"hidden",0===t?"hidden":"inherit"),e.xs0="inherit",u._overwriteProps.push(e.n),u._overwriteProps.push(i)),e}}),wt=function(n,t){t&&(n.removeProperty?("ms"===t.substr(0,2)&&(t="M"+t.substr(1)),n.removeProperty(t.replace(bi,"-$1").toLowerCase())):n.removeAttribute(t))},cr=function(n){if(this.t._gsClassPT=this,1===n||0===n){this.t.setAttribute("class",0===n?this.b:this.e);for(var t=this.data,i=this.t.style;t;)t.v?i[t.p]=t.v:wt(i,t.p),t=t._next;1===n&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)},u("className",{parser:function(n,t,i,r,u,e,s){var c,y,l,a,h,v=n.getAttribute("class")||"",p=n.style.cssText;if(u=r._classNamePT=new o(n,i,0,0,u,2),u.setRatio=cr,u.pr=-11,rt=!0,u.b=v,y=ot(n,f),l=n._gsClassPT){for(a={},h=l.data;h;)a[h.p]=1,h=h._next;l.setRatio(1)}return n._gsClassPT=u,u.e="="!==t.charAt(1)?t:v.replace(RegExp("\\s*\\b"+t.substr(2)+"\\b"),"")+("+"===t.charAt(0)?" "+t.substr(2):""),r._tween._duration&&(n.setAttribute("class",u.e),c=ui(n,y,ot(n),s,a),n.setAttribute("class",v),u.data=c.firstMPT,n.style.cssText=p,u=u.xfirst=r.parse(n,c.difs,u,e)),u}}),lr=function(n){if((1===n||0===n)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var i,t,r,u,f=this.t.style,e=l.transform.parse;if("all"===this.e)f.cssText="",u=!0;else for(i=this.e.split(","),r=i.length;--r>-1;)t=i[r],l[t]&&(l[t].parse===e?u=!0:t="transformOrigin"===t?ci:l[t].p),wt(f,t);u&&(wt(f,c),this.t._gsTransform&&delete this.t._gsTransform)}},u("clearProps",{parser:function(n,t,i,r,u){return u=new o(n,i,0,0,u,2),u.setRatio=lr,u.e=t,u.pr=-10,u.data=r._tween,rt=!0,u}}),i="bezier,throwProps,physicsProps,physics2D".split(","),s=i.length;s--;)tu(i[s]);return i=e.prototype,i._firstPT=null,i._onInitTween=function(n,t,i){if(!n.nodeType)return!1;this._target=n;this._tween=i;this._vars=t;kt=t.autoRound;rt=!1;lt=t.suffixMap||e.suffixMap;f=et(n,"");bt=this._overwriteProps;var l,s,u,a,w,k,y,v,p,h=n.style;if(ai&&""===h.zIndex&&(l=r(n,"zIndex",f),("auto"===l||""===l)&&this._addLazySet(h,"zIndex",0)),"string"==typeof t&&(a=h.cssText,l=ot(n,f),h.cssText=a+";"+t,l=ui(n,l,ot(n)).difs,!nt&&vr.test(t)&&(l.opacity=parseFloat(RegExp.$1)),t=l,h.cssText=a),this._firstPT=s=this.parse(n,t,null),this._transformType){for(p=3===this._transformType,c?dt&&(ai=!0,""===h.zIndex&&(y=r(n,"zIndex",f),("auto"===y||""===y)&&this._addLazySet(h,"zIndex",0)),yi&&this._addLazySet(h,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(p?"visible":"hidden"))):h.zoom=1,u=s;u&&u._next;)u=u._next;v=new o(n,"transform",0,0,null,2);this._linkCSSP(v,null,u);v.setRatio=p&&b?li:c?sr:ru;v.data=this._transform||ht(n,f,!0);bt.pop()}if(rt){for(;s;){for(k=s._next,u=a;u&&u.pr>s.pr;)u=u._next;(s._prev=u?u._prev:w)?s._prev._next=s:a=s;(s._next=u)?u._prev=s:w=s;s=k}this._firstPT=a}return!0},i.parse=function(n,t,i,u){var e,d,h,c,v,s,y,a,w,b,k=n.style;for(e in t)s=t[e],d=l[e],d?i=d.parse(n,s,e,this,i,u,t):(v=r(n,e,f)+"",w="string"==typeof s,"color"===e||"fill"===e||"stroke"===e||-1!==e.indexOf("Color")||w&&wi.test(s)?(w||(s=oi(s),s=(s.length>3?"rgba(":"rgb(")+s.join(",")+")"),i=pt(k,e,v,s,!0,"transparent",i,0,u)):!w||-1===s.indexOf(" ")&&-1===s.indexOf(",")?(h=parseFloat(v),y=h||0===h?v.substr((h+"").length):"",(""===v||"auto"===v)&&("width"===e||"height"===e?(h=nu(n,e,f),y="px"):"left"===e||"top"===e?(h=ir(n,e,f),y="px"):(h="opacity"!==e?0:1,y="")),b=w&&"="===s.charAt(1),b?(c=parseInt(s.charAt(0)+"1",10),s=s.substr(2),c*=parseFloat(s),a=s.replace(ni,"")):(c=parseFloat(s),a=w?s.substr((c+"").length)||"":""),""===a&&(a=e in lt?lt[e]:y),s=c||0===c?(b?c+h:c)+a:t[e],y!==a&&""!==a&&(c||0===c)&&h&&(h=p(n,e,h,y),"%"===a?(h/=p(n,e,100,"%")/100,t.strictUnits!==!0&&(v=h+"%")):"em"===a?h/=p(n,e,1,"em"):"px"!==a&&(c=p(n,e,c,a),a="px"),b&&(c||0===c)&&(s=c+h+a)),b&&(c+=h),!h&&0!==h||!c&&0!==c?void 0!==k[e]&&(s||"NaN"!=s+""&&null!=s)?(i=new o(k,e,c||h||0,0,i,-1,e,!1,0,v,s),i.xs0="none"!==s||"display"!==e&&-1===e.indexOf("Style")?s:v):nr("invalid "+e+" tween value: "+t[e]):(i=new o(k,e,h,c-h,i,0,e,kt!==!1&&("px"===a||"zIndex"===e),0,v,s),i.xs0=a)):i=pt(k,e,v,s,!0,null,i,0,u)),u&&i&&!i.plugin&&(i.plugin=u);return i},i.setRatio=function(n){var i,u,r,t=this._firstPT,f=1e-6;if(1!==n||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(n||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;t;){if(i=t.c*n+t.s,t.r?i=Math.round(i):f>i&&i>-f&&(i=0),t.type)if(1===t.type)if(r=t.l,2===r)t.t[t.p]=t.xs0+i+t.xs1+t.xn1+t.xs2;else if(3===r)t.t[t.p]=t.xs0+i+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3;else if(4===r)t.t[t.p]=t.xs0+i+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3+t.xn3+t.xs4;else if(5===r)t.t[t.p]=t.xs0+i+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3+t.xn3+t.xs4+t.xn4+t.xs5;else{for(u=t.xs0+i+t.xs1,r=1;t.l>r;r++)u+=t["xn"+r]+t["xs"+(r+1)];t.t[t.p]=u}else-1===t.type?t.t[t.p]=t.xs0:t.setRatio&&t.setRatio(n);else t.t[t.p]=i+t.xs0;t=t._next}else for(;t;)2!==t.type?t.t[t.p]=t.b:t.setRatio(n),t=t._next;else for(;t;)2!==t.type?t.t[t.p]=t.e:t.setRatio(n),t=t._next},i._enableTransforms=function(n){this._transformType=n||3===this._transformType?3:2;this._transform=this._transform||ht(this._target,f,!0)},ar=function(){this.t[this.p]=this.e;this.data._linkCSSP(this,this._next,null,!0)},i._addLazySet=function(n,t,i){var r=this._firstPT=new o(n,t,0,0,this._firstPT,2);r.e=i;r.setRatio=ar;r.data=this},i._linkCSSP=function(n,t,i,r){return n&&(t&&(t._prev=n),n._next&&(n._next._prev=n._prev),n._prev?n._prev._next=n._next:this._firstPT===n&&(this._firstPT=n._next,r=!0),i?i._next=n:r||null!==this._firstPT||(this._firstPT=n),n._next=t,n._prev=i),n},i._kill=function(t){var i,f,r,u=t;if(t.autoAlpha||t.alpha){u={};for(f in t)u[f]=t[f];u.opacity=1;u.autoAlpha&&(u.visibility=1)}return t.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),n.prototype._kill.call(this,u)},ct=function(n,t,i){var e,u,r,f;if(n.slice)for(u=n.length;--u>-1;)ct(n[u],t,i);else for(e=n.childNodes,u=e.length;--u>-1;)r=e[u],f=r.type,r.style&&(t.push(ot(r)),i&&i.push(r)),1!==f&&9!==f&&11!==f||!r.childNodes.length||ct(r,t,i)},e.cascadeTo=function(n,i,r){var u,f,o,e=t.to(n,i,r),h=[e],c=[],l=[],s=[],a=t._internals.reservedProps;for(n=e._targets||e.target,ct(n,c,s),e.render(i,!0),ct(n,l),e.render(0,!0),e._enabled(!0),u=s.length;--u>-1;)if(f=ui(s[u],c[u],l[u]),f.firstMPT){f=f.difs;for(o in r)a[o]&&(f[o]=r[o]);h.push(t.to(s[u],i,f))}return h},n.activate([e]),e},!0)});_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(n){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[n]};"function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=t())}("CSSPlugin");
/*!
 * VERSION: beta 0.2.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,function(n){"use strict";var f=n.GreenSockGlobals||n,a=function(n){for(var r=n.split("."),i=f,t=0;r.length>t;t++)i[r[t]]=i=i[r[t]]||{};return i},v=a("com.greensock.utils"),u=function(n){var t=n.nodeType,i="";if(1===t||9===t||11===t){if("string"==typeof n.textContent)return n.textContent;for(n=n.firstChild;n;n=n.nextSibling)i+=u(n)}else if(3===t||4===t)return n.nodeValue;return i},t=document,e=t.defaultView?t.defaultView.getComputedStyle:function(){},y=/([A-Z])/g,i=function(n,t,i,r){var u;return(i=i||e(n,null))?(n=i.getPropertyValue(t.replace(y,"-$1").toLowerCase()),u=n||i.length?n:i[t]):n.currentStyle&&(i=n.currentStyle,u=i[t]),r?u:parseInt(u,10)||0},o=function(n){return n.length&&n[0]&&(n[0].nodeType&&n[0].style&&!n.nodeType||n[0].length&&n[0][0])?!0:!1},p=function(n){for(var t,i,u=[],f=n.length,r=0;f>r;r++)if(t=n[r],o(t))for(i=t.length,i=0;t.length>i;i++)u.push(t[i]);else u.push(t);return u},s=")eefec303079ad17405c",h=/(?:<br>|<br\/>|<br \/>)/gi,w=t.all&&!t.addEventListener,b="<div style='position:relative;display:inline-block;"+(w?"*display:inline;*zoom:1;'":"'"),c=function(n){n=n||"";var t=-1!==n.indexOf("++"),i=1;return t&&(n=n.split("++").join("")),function(){return b+(n?" class='"+n+(t?i++:"")+"'>":">")}},r=v.SplitText=f.SplitText=function(n,t){if("string"==typeof n&&(n=r.selector(n)),!n)throw"cannot split a null element.";this.elements=o(n)?p(n):[n];this.chars=[];this.words=[];this.lines=[];this._originals=[];this.vars=t||{};this.split(t)},k=function(n,r,f,o,l){h.test(n.innerHTML)&&(n.innerHTML=n.innerHTML.replace(h,s));var rt,b,ut,v,g,ot,ft,a,k,y,nt,pt,wt,st=u(n),at=r.type||r.split||"chars,words,lines",tt=-1!==at.indexOf("lines")?[]:null,it=-1!==at.indexOf("words"),et=-1!==at.indexOf("chars"),p="absolute"===r.position||r.absolute===!0,gt=p?"&#173; ":" ",bt=-999,d=e(n),kt=i(n,"paddingLeft",d),ni=i(n,"borderBottomWidth",d)+i(n,"borderTopWidth",d),ti=i(n,"borderLeftWidth",d)+i(n,"borderRightWidth",d),ii=i(n,"paddingTop",d)+i(n,"paddingBottom",d),ri=i(n,"paddingLeft",d)+i(n,"paddingRight",d),ui=i(n,"textAlign",d,!0),ht=n.clientHeight,ct=n.clientWidth,w=st.length,vt="<\/div>",yt=c(r.wordsClass),fi=c(r.charsClass),dt=-1!==(r.linesClass||"").indexOf("++"),lt=r.linesClass;for(dt&&(lt=lt.split("++").join("")),ut=yt(),v=0;w>v;v++)ot=st.charAt(v),")"===ot&&st.substr(v,20)===s?(ut+=vt+"<BR/>",v!==w-1&&(ut+=" "+yt()),v+=19):" "===ot&&" "!==st.charAt(v-1)&&v!==w-1?(ut+=vt,v!==w-1&&(ut+=gt+yt())):ut+=et&&" "!==ot?fi()+ot+"<\/div>":ot;for(n.innerHTML=ut+vt,g=n.getElementsByTagName("*"),w=g.length,ft=[],v=0;w>v;v++)ft[v]=g[v];if(tt||p)for(v=0;w>v;v++)a=ft[v],b=a.parentNode===n,(b||p||et&&!it)&&(k=a.offsetTop,tt&&b&&k!==bt&&"BR"!==a.nodeName&&(rt=[],tt.push(rt),bt=k),p&&(a._x=a.offsetLeft,a._y=k,a._w=a.offsetWidth,a._h=a.offsetHeight),tt&&(it!==b&&et||(rt.push(a),a._x-=kt),b&&v&&(ft[v-1]._wordEnd=!0)));for(v=0;w>v;v++)a=ft[v],b=a.parentNode===n,"BR"!==a.nodeName?(p&&(nt=a.style,it||b||(a._x+=a.parentNode._x,a._y+=a.parentNode._y),nt.left=a._x+"px",nt.top=a._y+"px",nt.position="absolute",nt.display="block",nt.width=a._w+1+"px",nt.height=a._h+"px"),it?b?o.push(a):et&&f.push(a):b?(n.removeChild(a),ft.splice(v--,1),w--):!b&&et&&(k=!tt&&!p&&a.nextSibling,n.appendChild(a),k||n.appendChild(t.createTextNode(" ")),f.push(a))):tt||p?(n.removeChild(a),ft.splice(v--,1),w--):it||n.appendChild(a);if(tt){for(p&&(y=t.createElement("div"),n.appendChild(y),pt=y.offsetWidth+"px",k=y.offsetParent===n?0:n.offsetLeft,n.removeChild(y)),nt=n.style.cssText,n.style.cssText="display:none;";n.firstChild;)n.removeChild(n.firstChild);for(wt=!p||!it&&!et,v=0;tt.length>v;v++){for(rt=tt[v],y=t.createElement("div"),y.style.cssText="display:block;text-align:"+ui+";position:"+(p?"absolute;":"relative;"),lt&&(y.className=lt+(dt?v+1:"")),l.push(y),w=rt.length,g=0;w>g;g++)"BR"!==rt[g].nodeName&&(a=rt[g],y.appendChild(a),wt&&(a._wordEnd||it)&&y.appendChild(t.createTextNode(" ")),p&&(0===g&&(y.style.top=a._y+"px",y.style.left=kt+k+"px"),a.style.top="0px",k&&(a.style.left=a._x-k+"px")));it||et||(y.innerHTML=u(y).split(String.fromCharCode(160)).join(" "));p&&(y.style.width=pt,y.style.height=a._h+"px");n.appendChild(y)}n.style.cssText=nt}p&&(ht>n.clientHeight&&(n.style.height=ht-ii+"px",ht>n.clientHeight&&(n.style.height=ht+ni+"px")),ct>n.clientWidth&&(n.style.width=ct-ri+"px",ct>n.clientWidth&&(n.style.width=ct+ti+"px")))},l=r.prototype;l.split=function(n){this.isSplit&&this.revert();this.vars=n||this.vars;this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t=0;this.elements.length>t;t++)this._originals[t]=this.elements[t].innerHTML,k(this.elements[t],this.vars,this.chars,this.words,this.lines);return this.isSplit=!0,this};l.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var n=this._originals.length;--n>-1;)this.elements[n].innerHTML=this._originals[n];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this};r.selector=n.$||n.jQuery||function(i){return n.$?(r.selector=n.$,n.$(i)):t?t.getElementById("#"===i.charAt(0)?i.substr(1):i):i};r.version="0.2.4"}(_gsScope),function(n){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[n]};"function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(module.exports=t())}("SplitText");try{window.GreenSockGobals=null;window._gsQueue=null;delete window.GreenSockGlobals;delete window._gsQueue}catch(e){}try{window.GreenSockGlobals=oldgs;window._gsQueue=oldgs_queue}catch(e){}if(window.tplogs==!0)try{console.groupEnd()}catch(e){}(function(n){n.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};n.expr[":"].uncached=function(t){var i=document.createElement("img");return i.src=t.src,n(t).is('img[src!=""]')&&!i.complete};n.fn.waitForImages=function(t,i,r){if(n.isPlainObject(arguments[0])&&(i=t.each,r=t.waitForAll,t=t.finished),t=t||n.noop,i=i||n.noop,r=!!r,!n.isFunction(t)||!n.isFunction(i))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var f=n(this),u=[],s,h,e,o;r?(s=n.waitForImages.hasImageProperties||[],h=/url\((['"]?)(.*?)\1\)/g,f.find("*").each(function(){var t=n(this);t.is("img:uncached")&&u.push({src:t.attr("src"),element:t[0]});n.each(s,function(n,i){var r=t.css(i),f;if(!r)return!0;while(f=h.exec(r))u.push({src:f[2],element:t[0]})})})):f.find("img:uncached").each(function(){u.push({src:this.src,element:this})});e=u.length;o=0;e==0&&t.call(f[0]);n.each(u,function(r,u){var s=new Image;n(s).bind("load error",function(n){return o++,i.call(u.element,o,e,n.type=="load"),o==e?(t.call(f[0]),!1):void 0});s.src=u.src})})}})(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):n("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(n){var t,it,f,p,o,pt,s="Close",wt="BeforeClose",ti="AfterClose",ii="BeforeAppend",rt="MarkupParse",ut="Open",bt="Change",ft="mfp",u="."+ft,w="mfp-ready",kt="mfp-removing",et="mfp-prevent-close",b=function(){},ot=!!window.jQuery,h=n(window),r=function(n,i){t.ev.on(ft+n+u,i)},l=function(t,i,r,u){var f=document.createElement("div");return f.className="mfp-"+t,r&&(f.innerHTML=r),u?i&&i.appendChild(f):(f=n(f),i&&f.appendTo(i)),f},i=function(i,r){t.ev.triggerHandler(ft+i,r);t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,n.isArray(r)?r:[r]))},st=function(i){return i===pt&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=n(t.st.closeMarkup.replace("%title%",t.st.tClose)),pt=i),t.currTemplate.closeBtn},ht=function(){n.magnificPopup.instance||(t=new b,t.init(),n.magnificPopup.instance=t)},ri=function(){var n=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==n.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in n)return!0;return!1},a,k,d,g,ct,e,gt,at,ni,nt,yt,tt;b.prototype={constructor:b,init:function(){var i=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener;t.isAndroid=/android/gi.test(i);t.isIOS=/iphone|ipad|ipod/gi.test(i);t.supportsTransition=ri();t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);f=n(document);t.popupsCache={}},open:function(e){var s,c,p,b,a,k,v,d,y;if(e.isObj===!1){for(t.items=e.items.toArray(),t.index=0,p=e.items,s=0;s<p.length;s++)if(c=p[s],c.parsed&&(c=c.el[0]),c===e.el[0]){t.index=s;break}}else t.items=n.isArray(e.items)?e.items:[e.items],t.index=e.index||0;if(t.isOpen)return void t.updateItemHTML();for(t.types=[],o="",t.ev=e.mainEl&&e.mainEl.length?e.mainEl.eq(0):f,e.key?(t.popupsCache[e.key]||(t.popupsCache[e.key]={}),t.currTemplate=t.popupsCache[e.key]):t.currTemplate={},t.st=n.extend(!0,{},n.magnificPopup.defaults,e),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=l("bg").on("click"+u,function(){t.close()}),t.wrap=l("wrap").attr("tabindex",-1).on("click"+u,function(n){t._checkIfClose(n.target)&&t.close()}),t.container=l("container",t.wrap)),t.contentContainer=l("content"),t.st.preloader&&(t.preloader=l("preloader",t.container,t.st.tLoading)),b=n.magnificPopup.modules,s=0;s<b.length;s++)a=b[s],a=a.charAt(0).toUpperCase()+a.slice(1),t["init"+a].call(t);return i("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(r(rt,function(n,t,i,r){i.close_replaceWith=st(r.type)}),o+=" mfp-close-btn-in"):t.wrap.append(st())),t.st.alignTop&&(o+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:h.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:f.height(),position:"absolute"}),t.st.enableEscapeKey&&f.on("keyup"+u,function(n){27===n.keyCode&&t.close()}),h.on("resize"+u,function(){t.updateSize()}),t.st.closeOnContentClick||(o+=" mfp-auto-cursor"),o&&t.wrap.addClass(o),k=t.wH=h.height(),v={},t.fixedContentPos&&t._hasScrollBar(k)&&(d=t._getScrollbarSize(),d&&(v.marginRight=d)),t.fixedContentPos&&(t.isIE7?n("body, html").css("overflow","hidden"):v.overflow="hidden"),y=t.st.mainClass,t.isIE7&&(y+=" mfp-ie7"),y&&t._addClassToMFP(y),t.updateItemHTML(),i("BuildControls"),n("html").css(v),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||n(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(w),t._setFocus()):t.bgOverlay.addClass(w);f.on("focusin"+u,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(k),i(ut),e},close:function(){t.isOpen&&(i(wt),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(kt),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){var r,e;i(s);r=kt+" "+w+" ";(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(r+=t.st.mainClass+" "),t._removeClassFromMFP(r),t.fixedContentPos)&&(e={marginRight:""},t.isIE7?n("body, html").css("overflow",""):e.overflow="",n("html").css(e));f.off("keyup"+u+" focusin"+u);t.ev.off(u);t.wrap.attr("class","mfp-wrap").removeAttr("style");t.bgOverlay.attr("class","mfp-bg");t.container.attr("class","mfp-container");!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach();t.st.autoFocusLast&&t._lastFocusedEl&&n(t._lastFocusedEl).focus();t.currItem=null;t.content=null;t.currTemplate=null;t.prevHeight=0;i(ti)},updateSize:function(n){if(t.isIOS){var u=document.documentElement.clientWidth/window.innerWidth,r=window.innerHeight*u;t.wrap.css("height",r);t.wH=r}else t.wH=n||h.height();t.fixedContentPos||t.wrap.css("height",t.wH);i("Resize")},updateItemHTML:function(){var u=t.items[t.index],r,f,e;t.contentContainer.detach();t.content&&t.content.detach();u.parsed||(u=t.parseEl(t.index));r=u.type;(i("BeforeChange",[t.currItem?t.currItem.type:"",r]),t.currItem=u,t.currTemplate[r])||(f=t.st[r]?t.st[r].markup:!1,i("FirstMarkupParse",f),t.currTemplate[r]=f?n(f):!0);p&&p!==u.type&&t.container.removeClass("mfp-"+p+"-holder");e=t["get"+r.charAt(0).toUpperCase()+r.slice(1)](u,t.currTemplate[r]);t.appendContent(e,r);u.preloaded=!0;i(bt,u);p=u.type;t.container.prepend(t.contentContainer);i("AfterChange")},appendContent:function(n,r){t.content=n;n?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[r]===!0?t.content.find(".mfp-close").length||t.content.append(st()):t.content=n:t.content="";i(ii);t.container.addClass("mfp-"+r+"-holder");t.contentContainer.append(t.content)},parseEl:function(r){var o,u=t.items[r],e,f;if(u.tagName?u={el:n(u)}:(o=u.type,u={data:u,src:u.src}),u.el){for(e=t.types,f=0;f<e.length;f++)if(u.el.hasClass("mfp-"+e[f])){o=e[f];break}u.src=u.el.attr("data-mfp-src");u.src||(u.src=u.el.attr("href"))}return u.type=o||t.st.type||"inline",u.index=r,u.parsed=!0,t.items[r]=u,i("ElementParse",u),t.items[r]},addGroup:function(n,i){var u=function(r){r.mfpEl=this;t._openClick(r,n,i)},r;i||(i={});r="click.magnificPopup";i.mainEl=n;i.items?(i.isObj=!0,n.off(r).on(r,u)):(i.isObj=!1,i.delegate?n.off(r).on(r,i.delegate,u):(i.items=n,n.off(r).on(r,u)))},_openClick:function(i,r,u){var e=void 0!==u.midClick?u.midClick:n.magnificPopup.defaults.midClick,f;if(e||!(2===i.which||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){if(f=void 0!==u.disableOn?u.disableOn:n.magnificPopup.defaults.disableOn,f)if(n.isFunction(f)){if(!f.call(t))return!0}else if(h.width()<f)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation());u.el=n(i.mfpEl);u.delegate&&(u.items=r.find(u.delegate));t.open(u)}},updateStatus:function(n,r){if(t.preloader){it!==n&&t.container.removeClass("mfp-s-"+it);r||"loading"!==n||(r=t.st.tLoading);var u={status:n,text:r};i("UpdateStatus",u);n=u.status;r=u.text;t.preloader.html(r);t.preloader.find("a").on("click",function(n){n.stopImmediatePropagation()});t.container.addClass("mfp-s-"+n);it=n}},_checkIfClose:function(i){if(!n(i).hasClass(et)){var r=t.st.closeOnContentClick,u=t.st.closeOnBgClick;if(r&&u||!t.content||n(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||n.contains(t.content[0],i)){if(r)return!0}else if(u&&n.contains(document,i))return!0;return!1}},_addClassToMFP:function(n){t.bgOverlay.addClass(n);t.wrap.addClass(n)},_removeClassFromMFP:function(n){this.bgOverlay.removeClass(n);t.wrap.removeClass(n)},_hasScrollBar:function(n){return(t.isIE7?f.height():document.body.scrollHeight)>(n||h.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(i){if(i.target!==t.wrap[0]&&!n.contains(t.wrap[0],i.target))return(t._setFocus(),!1)},_parseMarkup:function(t,r,f){var e;f.data&&(r=n.extend(f.data,r));i(rt,[t,r,f]);n.each(r,function(i,r){var f,o;if(void 0===r||r===!1)return!0;(e=i.split("_"),e.length>1)?(f=t.find(u+"-"+e[0]),f.length>0&&(o=e[1],"replaceWith"===o?f[0]!==r[0]&&f.replaceWith(r):"img"===o?f.is("img")?f.attr("src",r):f.replaceWith(n("<img>").attr("src",r).attr("class",f.attr("class"))):f.attr(e[1],r))):t.find(u+"-"+i).html(r)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var n=document.createElement("div");n.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";document.body.appendChild(n);t.scrollbarSize=n.offsetWidth-n.clientWidth;document.body.removeChild(n)}return t.scrollbarSize}};n.magnificPopup={instance:null,proto:b.prototype,modules:[],open:function(t,i){return ht(),t=t?n.extend(!0,{},t):{},t.isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return n.magnificPopup.instance&&n.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(n.magnificPopup.defaults[t]=i.options);n.extend(this.proto,i.proto);this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;<\/button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}};n.fn.magnificPopup=function(i){var r,u,f,e;return ht(),r=n(this),"string"==typeof i?"open"===i?(f=ot?r.data("magnificPopup"):r[0].magnificPopup,e=parseInt(arguments[1],10)||0,f.items?u=f.items[e]:(u=r,f.delegate&&(u=u.find(f.delegate)),u=u.eq(e)),t._openClick({mfpEl:u},r,f)):t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1)):(i=n.extend(!0,{},i),ot?r.data("magnificPopup",i):r[0].magnificPopup=i,t.addGroup(r,i)),r};g="inline";ct=function(){d&&(k.after(d.addClass(a)).detach(),d=null)};n.magnificPopup.registerModule(g,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(g);r(s+"."+g,function(){ct()})},getInline:function(i,r){var f,u,e;return(ct(),i.src)?(f=t.st.inline,u=n(i.src),u.length?(e=u[0].parentNode,e&&e.tagName&&(k||(a=f.hiddenClass,k=l(a),a="mfp-"+a),d=u.after(k).detach().removeClass(a)),t.updateStatus("ready")):(t.updateStatus("error",f.tNotFound),u=n("<div>")),i.inlineElement=u,u):(t.updateStatus("ready"),t._parseMarkup(r,{},i),r)}}});var v,y="ajax",lt=function(){v&&n(document.body).removeClass(v)},dt=function(){lt();t.req&&t.req.abort()};n.magnificPopup.registerModule(y,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content<\/a> could not be loaded.'},proto:{initAjax:function(){t.types.push(y);v=t.st.ajax.cursor;r(s+"."+y,dt);r("BeforeChange."+y,dt)},getAjax:function(r){v&&n(document.body).addClass(v);t.updateStatus("loading");var u=n.extend({url:r.src,success:function(u,f,e){var o={data:u,xhr:e};i("ParseAjax",o);t.appendContent(n(o.data),y);r.finished=!0;lt();t._setFocus();setTimeout(function(){t.wrap.addClass(w)},16);t.updateStatus("ready");i("AjaxContentAdded")},error:function(){lt();r.finished=r.loadError=!0;t.updateStatus("error",t.st.ajax.tError.replace("%url%",r.src))}},t.st.ajax.settings);return t.req=n.ajax(u),""}}});gt=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var r=t.st.image.titleSrc;if(r){if(n.isFunction(r))return r.call(t,i);if(i.el)return i.el.attr(r)||""}return""};n.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"><\/div><figure><div class="mfp-img"><\/div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"><\/div><div class="mfp-counter"><\/div><\/div><\/figcaption><\/figure><\/div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image<\/a> could not be loaded.'},proto:{initImage:function(){var i=t.st.image,f=".image";t.types.push("image");r(ut+f,function(){"image"===t.currItem.type&&i.cursor&&n(document.body).addClass(i.cursor)});r(s+f,function(){i.cursor&&n(document.body).removeClass(i.cursor);h.off("resize"+u)});r("Resize"+f,t.resizeImage);t.isLowIE&&r("AfterChange",t.resizeImage)},resizeImage:function(){var n=t.currItem,i;n&&n.img&&t.st.image.verticalFit&&(i=0,t.isLowIE&&(i=parseInt(n.img.css("padding-top"),10)+parseInt(n.img.css("padding-bottom"),10)),n.img.css("max-height",t.wH-i))},_onImageHasSize:function(n){n.img&&(n.hasSize=!0,e&&clearInterval(e),n.isCheckingImgSize=!1,i("ImageHasSize",n),n.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),n.imgHidden=!1))},findImageSize:function(n){var i=0,u=n.img[0],r=function(f){e&&clearInterval(e);e=setInterval(function(){return u.naturalWidth>0?void t._onImageHasSize(n):(i>200&&clearInterval(e),i++,void(3===i?r(10):40===i?r(50):100===i&&r(500)))},f)};r(1)},getImage:function(r,u){var o=0,s=function(){r&&(r.img[0].complete?(r.img.off(".mfploader"),r===t.currItem&&(t._onImageHasSize(r),t.updateStatus("ready")),r.hasSize=!0,r.loaded=!0,i("ImageLoadComplete")):(o++,200>o?setTimeout(s,100):h()))},h=function(){r&&(r.img.off(".mfploader"),r===t.currItem&&(t._onImageHasSize(r),t.updateStatus("error",c.tError.replace("%url%",r.src))),r.hasSize=!0,r.loaded=!0,r.loadError=!0)},c=t.st.image,l=u.find(".mfp-img"),f;return l.length&&(f=document.createElement("img"),f.className="mfp-img",r.el&&r.el.find("img").length&&(f.alt=r.el.find("img").attr("alt")),r.img=n(f).on("load.mfploader",s).on("error.mfploader",h),f.src=r.src,l.is("img")&&(r.img=r.img.clone()),f=r.img[0],f.naturalWidth>0?r.hasSize=!0:f.width||(r.hasSize=!1)),t._parseMarkup(u,{title:gt(r),img_replaceWith:r.img},r),t.resizeImage(),r.hasSize?(e&&clearInterval(e),r.loadError?(u.addClass("mfp-loading"),t.updateStatus("error",c.tError.replace("%url%",r.src))):(u.removeClass("mfp-loading"),t.updateStatus("ready")),u):(t.updateStatus("loading"),r.loading=!0,r.hasSize||(r.imgHidden=!0,u.addClass("mfp-loading"),t.findImageSize(r)),u)}}});ni=function(){return void 0===at&&(at=void 0!==document.createElement("p").style.MozTransform),at};n.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(n){return n.is("img")?n:n.find("img")}},proto:{initZoom:function(){var u,f=t.st.zoom,o=".zoom";if(f.enabled&&t.supportsTransition){var e,n,c=f.duration,l=function(n){var r=n.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),u="all "+f.duration/1e3+"s "+f.easing,t={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},i="transition";return t["-webkit-"+i]=t["-moz-"+i]=t["-o-"+i]=t[i]=u,r.css(t),r},h=function(){t.content.css("visibility","visible")};r("BuildControls"+o,function(){if(t._allowZoom()){if(clearTimeout(e),t.content.css("visibility","hidden"),u=t._getItemToZoom(),!u)return void h();n=l(u);n.css(t._getOffset());t.wrap.append(n);e=setTimeout(function(){n.css(t._getOffset(!0));e=setTimeout(function(){h();setTimeout(function(){n.remove();u=n=null;i("ZoomAnimationEnded")},16)},c)},16)}});r(wt+o,function(){if(t._allowZoom()){if(clearTimeout(e),t.st.removalDelay=c,!u){if(u=t._getItemToZoom(),!u)return;n=l(u)}n.css(t._getOffset(!0));t.wrap.append(n);t.content.css("visibility","hidden");setTimeout(function(){n.css(t._getOffset())},16)}});r(s+o,function(){t._allowZoom()&&(h(),n&&n.remove(),u=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(i){var r,u;r=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var f=r.offset(),e=parseInt(r.css("padding-top"),10),o=parseInt(r.css("padding-bottom"),10);return f.top-=n(window).scrollTop()-e,u={width:r.width(),height:(ot?r.innerHeight():r[0].offsetHeight)-o-e},ni()?u["-moz-transform"]=u.transform="translate("+f.left+"px,"+f.top+"px)":(u.left=f.left,u.top=f.top),u}}});var c="iframe",ui="//about:blank",vt=function(n){if(t.currTemplate[c]){var i=t.currTemplate[c].find("iframe");i.length&&(n||(i[0].src=ui),t.isIE8&&i.css("display",n?"block":"none"))}};n.magnificPopup.registerModule(c,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"><\/div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen><\/iframe><\/div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(c);r("BeforeChange",function(n,t,i){t!==i&&(t===c?vt():i===c&&vt(!0))});r(s+"."+c,function(){vt()})},getIframe:function(i,r){var u=i.src,f=t.st.iframe,e;return n.each(f.patterns,function(){if(u.indexOf(this.index)>-1)return(this.id&&(u="string"==typeof this.id?u.substr(u.lastIndexOf(this.id)+this.id.length,u.length):this.id.call(this,u)),u=this.src.replace("%id%",u),!1)}),e={},f.srcAction&&(e[f.srcAction]=u),t._parseMarkup(r,e,i),t.updateStatus("ready"),r}}});nt=function(n){var i=t.items.length;return n>i-1?n-i:0>n?i+n:n};yt=function(n,t,i){return n.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};n.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><\/button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var u=t.st.gallery,i=".mfp-gallery";return t.direction=!0,u&&u.enabled?(o+=" mfp-gallery",r(ut+i,function(){u.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){if(t.items.length>1)return(t.next(),!1)});f.on("keydown"+i,function(n){37===n.keyCode?t.prev():39===n.keyCode&&t.next()})}),r("UpdateStatus"+i,function(n,i){i.text&&(i.text=yt(i.text,t.currItem.index,t.items.length))}),r(rt+i,function(n,i,r,f){var e=t.items.length;r.counter=e>1?yt(u.tCounter,f.index,e):""}),r("BuildControls"+i,function(){if(t.items.length>1&&u.arrows&&!t.arrowLeft){var i=u.arrowMarkup,r=t.arrowLeft=n(i.replace(/%title%/gi,u.tPrev).replace(/%dir%/gi,"left")).addClass(et),f=t.arrowRight=n(i.replace(/%title%/gi,u.tNext).replace(/%dir%/gi,"right")).addClass(et);r.click(function(){t.prev()});f.click(function(){t.next()});t.container.append(r.add(f))}}),r(bt+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout);t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages();t._preloadTimeout=null},16)}),void r(s+i,function(){f.off(i);t.wrap.off("click"+i);t.arrowRight=t.arrowLeft=null})):!1},next:function(){t.direction=!0;t.index=nt(t.index+1);t.updateItemHTML()},prev:function(){t.direction=!1;t.index=nt(t.index-1);t.updateItemHTML()},goTo:function(n){t.direction=n>=t.index;t.index=n;t.updateItemHTML()},preloadNearbyImages:function(){for(var i=t.st.gallery.preload,r=Math.min(i[0],t.items.length),u=Math.min(i[1],t.items.length),n=1;n<=(t.direction?u:r);n++)t._preloadItem(t.index+n);for(n=1;n<=(t.direction?r:u);n++)t._preloadItem(t.index-n)},_preloadItem:function(r){if(r=nt(r),!t.items[r].preloaded){var u=t.items[r];u.parsed||(u=t.parseEl(r));i("LazyLoad",u);"image"===u.type&&(u.img=n('<img class="mfp-img" />').on("load.mfploader",function(){u.hasSize=!0}).on("error.mfploader",function(){u.hasSize=!0;u.loadError=!0;i("LazyLoadError",u)}).attr("src",u.src));u.preloaded=!0}}}});tt="retina";n.magnificPopup.registerModule(tt,{options:{replaceSrc:function(n){return n.src.replace(/\.\w+$/,function(n){return"@2x"+n})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var i=t.st.retina,n=i.ratio;n=isNaN(n)?n():n;n>1&&(r("ImageHasSize."+tt,function(t,i){i.img.css({"max-width":i.img[0].naturalWidth/n,width:"100%"})}),r("ElementParse."+tt,function(t,r){r.src=i.replaceSrc(r,n)}))}}}});ht()});eval(function(n,t,i,r,u,f){if(u=function(n){return(n<t?"":u(parseInt(n/t)))+((n=n%t)>35?String.fromCharCode(n+29):n.toString(36))},!"".replace(/^/,String)){while(i--)f[u(i)]=r[i]||u(i);r=[function(n){return f[n]}];u=function(){return"\\w+"};i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}(";(6($,g,h,i){l j='1Y',23={3i:'1Y',L:{O:C,E:C,z:C,I:C,p:C,K:C,N:C,B:C},2a:0,18:'',12:'',3:h.3h.1a,x:h.12,1p:'1Y.3d',y:{},1q:0,1w:w,3c:w,3b:w,2o:C,1X:6(){},38:6(){},1P:6(){},26:6(){},8:{O:{3:'',15:C,1j:'37',13:'35-4Y',2p:''},E:{3:'',15:C,R:'1L',11:'4V',H:'',1A:'C',2c:'C',2d:'',1B:'',13:'4R'},z:{3:'',15:C,y:'33',2m:'',16:'',1I:'',13:'35'},I:{3:'',15:C,Q:'4K'},p:{3:'',15:C,1j:'37'},K:{3:'',15:C,11:'1'},N:{3:'',15:C,22:''},B:{3:'',1s:'',1C:'',11:'33'}}},1n={O:\"\",E:\"1D://4J.E.o/4x?q=4u%2X,%4j,%4i,%4h,%4f,%4e,46,%45,%44%42%41%40%2X=%27{3}%27&1y=?\",z:\"S://3W.3P.z.o/1/3D/y.2G?3={3}&1y=?\",I:\"S://3l.I.o/2.0/5a.59?54={3}&Q=1c&1y=?\",p:'S://52.p.o/4Q/2G/4B/m?3={3}&1y=?',K:\"\",N:\"S://1o.N.o/4z/y/L?4r=4o&3={3}&1y=?\",B:\"\"},2A={O:6(b){l c=b.4.8.O;$(b.r).X('.8').Z('<n G=\"U 4d\"><n G=\"g-25\" m-1j=\"'+c.1j+'\" m-1a=\"'+(c.3!==''?c.3:b.4.3)+'\" m-2p=\"'+c.2p+'\"><\/n><\/n>');g.3Z={13:b.4.8.O.13};l d=0;9(A 2x==='F'&&d==0){d=1;(6(){l a=h.1g('P');a.Q='x/1c';a.1r=w;a.17='//3w.2w.o/Y/25.Y';l s=h.1d('P')[0];s.1e.1f(a,s)})()}J{2x.25.3X()}},E:6(c){l e=c.4.8.E;$(c.r).X('.8').Z('<n G=\"U E\"><n 2T=\"1V-47\"><\/n><n G=\"1V-1L\" m-1a=\"'+(e.3!==''?e.3:c.4.3)+'\" m-1A=\"'+e.1A+'\" m-11=\"'+e.11+'\" m-H=\"'+e.H+'\" m-3u-2c=\"'+e.2c+'\" m-R=\"'+e.R+'\" m-2d=\"'+e.2d+'\" m-1B=\"'+e.1B+'\" m-16=\"'+e.16+'\"><\/n><\/n>');l f=0;9(A 1i==='F'&&f==0){f=1;(6(d,s,a){l b,2s=d.1d(s)[0];9(d.3x(a)){1v}b=d.1g(s);b.2T=a;b.17='//4c.E.4n/'+e.13+'/4t.Y#4C=1';2s.1e.1f(b,2s)}(h,'P','E-5g'))}J{1i.3n.3p()}},z:6(b){l c=b.4.8.z;$(b.r).X('.8').Z('<n G=\"U z\"><a 1a=\"1D://z.o/L\" G=\"z-L-U\" m-3=\"'+(c.3!==''?c.3:b.4.3)+'\" m-y=\"'+c.y+'\" m-x=\"'+b.4.x+'\" m-16=\"'+c.16+'\" m-2m=\"'+c.2m+'\" m-1I=\"'+c.1I+'\" m-13=\"'+c.13+'\">3q<\/a><\/n>');l d=0;9(A 2j==='F'&&d==0){d=1;(6(){l a=h.1g('P');a.Q='x/1c';a.1r=w;a.17='//1M.z.o/1N.Y';l s=h.1d('P')[0];s.1e.1f(a,s)})()}J{$.3C({3:'//1M.z.o/1N.Y',3E:'P',3F:w})}},I:6(a){l b=a.4.8.I;$(a.r).X('.8').Z('<n G=\"U I\"><a G=\"3H '+b.Q+'\" 3L=\"3U 3V\" 1a=\"S://I.o/2y?3='+V((b.3!==''?b.3:a.4.3))+'\"><\/a><\/n>');l c=0;9(A 43==='F'&&c==0){c=1;(6(){l s=h.1g('2z'),24=h.1d('2z')[0];s.Q='x/1c';s.1r=w;s.17='//1N.I.o/8.Y';24.1e.1f(s,24)})()}},p:6(a){9(a.4.8.p.1j=='4g'){l b='H:2r;',2e='D:2B;H:2r;1B-1j:4y;1t-D:2B;',2l='D:2C;1t-D:2C;2k-50:1H;'}J{l b='H:53;',2e='2g:58;2f:0 1H;D:1u;H:5c;1t-D:1u;',2l='2g:5d;D:1u;1t-D:1u;'}l c=a.1w(a.4.y.p);9(A c===\"F\"){c=0}$(a.r).X('.8').Z('<n G=\"U p\"><n 1T=\"'+b+'1B:5i 5j,5k,5l-5n;5t:3k;1S:#3m;2D:3o-2E;2g:2F;D:1u;1t-D:3r;2k:0;2f:0;x-3s:0;3t-2b:3v;\">'+'<n 1T=\"'+2e+'2H-1S:#2I;2k-3y:3z;3A:3B;x-2b:2J;1O:2K 2L #3G;1O-2M:1H;\">'+c+'<\/n>'+'<n 1T=\"'+2l+'2D:2E;2f:0;x-2b:2J;x-3I:2F;H:2r;2H-1S:#3J;1O:2K 2L #3K;1O-2M:1H;1S:#2I;\">'+'<2N 17=\"S://1o.p.o/3M/2N/p.3N.3O\" D=\"10\" H=\"10\" 3Q=\"3R\" /> 3S<\/n><\/n><\/n>');$(a.r).X('.p').3T('1P',6(){a.2O('p')})},K:6(b){l c=b.4.8.K;$(b.r).X('.8').Z('<n G=\"U K\"><2P:28 11=\"'+c.11+'\" 3h=\"'+(c.3!==''?c.3:b.4.3)+'\"><\/2P:28><\/n>');l d=0;9(A 1E==='F'&&d==0){d=1;(6(){l a=h.1g('P');a.Q='x/1c';a.1r=w;a.17='//1M.K.o/1/1N.Y';l s=h.1d('P')[0];s.1e.1f(a,s)})();s=g.3Y(6(){9(A 1E!=='F'){1E.2Q();21(s)}},20)}J{1E.2Q()}},N:6(b){l c=b.4.8.N;$(b.r).X('.8').Z('<n G=\"U N\"><P Q=\"1Z/L\" m-3=\"'+(c.3!==''?c.3:b.4.3)+'\" m-22=\"'+c.22+'\"><\/P><\/n>');l d=0;9(A g.2R==='F'&&d==0){d=1;(6(){l a=h.1g('P');a.Q='x/1c';a.1r=w;a.17='//1M.N.o/1Z.Y';l s=h.1d('P')[0];s.1e.1f(a,s)})()}J{g.2R.1W()}},B:6(b){l c=b.4.8.B;$(b.r).X('.8').Z('<n G=\"U B\"><a 1a=\"S://B.o/1K/2u/U/?3='+(c.3!==''?c.3:b.4.3)+'&1s='+c.1s+'&1C='+c.1C+'\" G=\"1K-3j-U\" y-11=\"'+c.11+'\">48 49<\/a><\/n>');(6(){l a=h.1g('P');a.Q='x/1c';a.1r=w;a.17='//4a.B.o/Y/4b.Y';l s=h.1d('P')[0];s.1e.1f(a,s)})()}},2S={O:6(){},E:6(){1V=g.2v(6(){9(A 1i!=='F'){1i.2t.2q('2U.2u',6(a){1m.1l(['1k','E','1L',a])});1i.2t.2q('2U.4k',6(a){1m.1l(['1k','E','4l',a])});1i.2t.2q('4m.1A',6(a){1m.1l(['1k','E','1A',a])});21(1V)}},2V)},z:6(){2W=g.2v(6(){9(A 2j!=='F'){2j.4p.4q('1J',6(a){9(a){1m.1l(['1k','z','1J'])}});21(2W)}},2V)},I:6(){},p:6(){},K:6(){},N:6(){6 4s(){1m.1l(['1k','N','L'])}},B:6(){}},2Y={O:6(a){g.19(\"1D://4v.2w.o/L?4w=\"+a.8.O.13+\"&3=\"+V((a.8.O.3!==''?a.8.O.3:a.3)),\"\",\"1b=0, 1G=0, H=2Z, D=20\")},E:6(a){g.19(\"S://1o.E.o/30/30.3d?u=\"+V((a.8.E.3!==''?a.8.E.3:a.3))+\"&t=\"+a.x+\"\",\"\",\"1b=0, 1G=0, H=2Z, D=20\")},z:6(a){g.19(\"1D://z.o/4A/1J?x=\"+V(a.x)+\"&3=\"+V((a.8.z.3!==''?a.8.z.3:a.3))+(a.8.z.16!==''?'&16='+a.8.z.16:''),\"\",\"1b=0, 1G=0, H=31, D=32\")},I:6(a){g.19(\"S://I.o/4D/4E/2y?3=\"+V((a.8.I.3!==''?a.8.I.3:a.3))+\"&12=\"+a.x+\"&1I=w&1T=w\",\"\",\"1b=0, 1G=0, H=31, D=32\")},p:6(a){g.19('S://1o.p.o/4F?v=5&4G&4H=4I&3='+V((a.8.p.3!==''?a.8.p.3:a.3))+'&12='+a.x,'p','1b=1F,H=1h,D=1h')},K:6(a){g.19('S://1o.K.o/28/?3='+V((a.8.p.3!==''?a.8.p.3:a.3)),'K','1b=1F,H=1h,D=1h')},N:6(a){g.19('1D://1o.N.o/4L/L?3='+V((a.8.p.3!==''?a.8.p.3:a.3))+'&4M=&4N=w','N','1b=1F,H=1h,D=1h')},B:6(a){g.19('S://B.o/1K/2u/U/?3='+V((a.8.B.3!==''?a.8.B.3:a.3))+'&1s='+V(a.8.B.1s)+'&1C='+a.8.B.1C,'B','1b=1F,H=4O,D=4P')}};6 T(a,b){7.r=a;7.4=$.4S(w,{},23,b);7.4.L=b.L;7.4T=23;7.4U=j;7.1W()};T.W.1W=6(){l c=7;9(7.4.1p!==''){1n.O=7.4.1p+'?3={3}&Q=O';1n.K=7.4.1p+'?3={3}&Q=K';1n.B=7.4.1p+'?3={3}&Q=B'}$(7.r).4W(7.4.3i);9(A $(7.r).m('12')!=='F'){7.4.12=$(7.r).4X('m-12')}9(A $(7.r).m('3')!=='F'){7.4.3=$(7.r).m('3')}9(A $(7.r).m('x')!=='F'){7.4.x=$(7.r).m('x')}$.1z(7.4.L,6(a,b){9(b===w){c.4.2a++}});9(c.4.3b===w){$.1z(7.4.L,6(a,b){9(b===w){4Z{c.34(a)}51(e){}}})}J 9(c.4.18!==''){7.4.26(7,7.4)}J{7.2n()}$(7.r).1X(6(){9($(7).X('.8').36===0&&c.4.3c===w){c.2n()}c.4.1X(c,c.4)},6(){c.4.38(c,c.4)});$(7.r).1P(6(){c.4.1P(c,c.4);1v C})};T.W.2n=6(){l c=7;$(7.r).Z('<n G=\"8\"><\/n>');$.1z(c.4.L,6(a,b){9(b==w){2A[a](c);9(c.4.2o===w){2S[a]()}}})};T.W.34=6(c){l d=7,y=0,3=1n[c].1x('{3}',V(7.4.3));9(7.4.8[c].15===w&&7.4.8[c].3!==''){3=1n[c].1x('{3}',7.4.8[c].3)}9(3!=''&&d.4.1p!==''){$.55(3,6(a){9(A a.y!==\"F\"){l b=a.y+'';b=b.1x('\\56\\57','');y+=1Q(b,10)}J 9(a.m&&a.m.36>0&&A a.m[0].39!==\"F\"){y+=1Q(a.m[0].39,10)}J 9(A a.3a!==\"F\"){y+=1Q(a.3a,10)}J 9(A a[0]!==\"F\"){y+=1Q(a[0].5b,10)}J 9(A a[0]!==\"F\"){}d.4.y[c]=y;d.4.1q+=y;d.2i();d.1R()}).5e(6(){d.4.y[c]=0;d.1R()})}J{d.2i();d.4.y[c]=0;d.1R()}};T.W.1R=6(){l a=0;5f(e 1Z 7.4.y){a++}9(a===7.4.2a){7.4.26(7,7.4)}};T.W.2i=6(){l a=7.4.1q,18=7.4.18;9(7.4.1w===w){a=7.1w(a)}9(18!==''){18=18.1x('{1q}',a);$(7.r).1U(18)}J{$(7.r).1U('<n G=\"5h\"><a G=\"y\" 1a=\"#\">'+a+'<\/a>'+(7.4.12!==''?'<a G=\"L\" 1a=\"#\">'+7.4.12+'<\/a>':'')+'<\/n>')}};T.W.1w=6(a){9(a>=3e){a=(a/3e).3f(2)+\"M\"}J 9(a>=3g){a=(a/3g).3f(1)+\"k\"}1v a};T.W.2O=6(a){2Y[a](7.4);9(7.4.2o===w){l b={O:{14:'5m',R:'+1'},E:{14:'E',R:'1L'},z:{14:'z',R:'1J'},I:{14:'I',R:'29'},p:{14:'p',R:'29'},K:{14:'K',R:'29'},N:{14:'N',R:'L'},B:{14:'B',R:'1K'}};1m.1l(['1k',b[a].14,b[a].R])}};T.W.5o=6(){l a=$(7.r).1U();$(7.r).1U(a.1x(7.4.1q,7.4.1q+1))};T.W.5p=6(a,b){9(a!==''){7.4.3=a}9(b!==''){7.4.x=b}};$.5q[j]=6(b){l c=5r;9(b===i||A b==='5s'){1v 7.1z(6(){9(!$.m(7,'2h'+j)){$.m(7,'2h'+j,5u T(7,b))}})}J 9(A b==='5v'&&b[0]!=='5w'&&b!=='1W'){1v 7.1z(6(){l a=$.m(7,'2h'+j);9(a 5x T&&A a[b]==='6'){a[b].5y(a,5z.W.5A.5B(c,1))}})}}})(5C,5D,5E);",62,351,"|||url|options||function|this|buttons|if||||||||||||var|data|div|com|delicious||element|||||true|text|count|twitter|typeof|pinterest|false|height|facebook|undefined|class|width|digg|else|stumbleupon|share||linkedin|googlePlus|script|type|action|http|Plugin|button|encodeURIComponent|prototype|find|js|append||layout|title|lang|site|urlCount|via|src|template|open|href|toolbar|javascript|getElementsByTagName|parentNode|insertBefore|createElement|550|FB|size|_trackSocial|push|_gaq|urlJson|www|urlCurl|total|async|media|line|20px|return|shorterTotal|replace|callback|each|send|font|description|https|STMBLPN|no|status|3px|related|tweet|pin|like|platform|widgets|border|click|parseInt|rendererPerso|color|style|html|fb|init|hover|sharrre|in|500|clearInterval|counter|defaults|s1|plusone|render||badge|add|shareTotal|align|faces|colorscheme|cssCount|padding|float|plugin_|renderer|twttr|margin|cssShare|hashtags|loadButtons|enableTracking|annotation|subscribe|50px|fjs|Event|create|setInterval|google|gapi|submit|SCRIPT|loadButton|35px|18px|display|block|none|json|background|fff|center|1px|solid|radius|img|openPopup|su|processWidgets|IN|tracking|id|edge|1000|tw|20url|popup|900|sharer|650|360|horizontal|getSocialJson|en|length|medium|hide|total_count|shares|enableCounter|enableHover|php|1e6|toFixed|1e3|location|className|it|pointer|services|666666|XFBML|inline|parse|Tweet|normal|indent|vertical|show|baseline|apis|getElementById|bottom|5px|overflow|hidden|ajax|urls|dataType|cache|ccc|DiggThisButton|decoration|7EACEE|40679C|rel|static|small|gif|api|alt|Delicious|Add|on|nofollow|external|cdn|go|setTimeout|___gcfg|20WHERE|20link_stat|20FROM|__DBW|20click_count|20comments_fbid|commentsbox_count|root|Pin|It|assets|pinit|connect|googleplus|20total_count|20comment_count|tall|20like_count|20share_count|20normalized_url|remove|unlike|message|net|jsonp|events|bind|format|LinkedInShare|all|SELECT|plus|hl|fql|15px|countserv|intent|urlinfo|xfbml|tools|diggthis|save|noui|jump|close|graph|DiggCompact|cws|token|isFramed|700|300|v2|en_US|extend|_defaults|_name|button_count|addClass|attr|US|try|top|catch|feeds|93px|links|getJSON|u00c2|u00a0|right|getInfo|story|total_posts|26px|left|error|for|jssdk|box|12px|Arial|Helvetica|sans|Google|serif|simulateClick|update|fn|arguments|object|cursor|new|string|_|instanceof|apply|Array|slice|call|jQuery|window|document".split("|"),0,{}));
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

/* Theme Name:Code2night - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 1.5
 * Created:October 2014
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Initializations of plugins
 */

(function($){
	$(document).ready(function(){

		$(window).load(function() {
			$("body").removeClass("no-trans");
		});
		// Enable Smooth Scroll only on Chrome and only on Win and Linux Systems
		var platform = navigator.platform.toLowerCase();
		if ((platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) && !Modernizr.touch) {
			if ($.browser.webkit) {
				$.webkitSmoothScroll();
				console.log("hello webkit");
			}
		};
		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		var delay=0, setTimeoutConst;
		if ((Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) || $("html.ie8").length>0) {
			$('.main-navigation .navbar-nav>li.dropdown, .main-navigation li.dropdown>ul>li.dropdown').hover(
			function(){
				var $this = $(this);
				setTimeoutConst = setTimeout(function(){
					$this.addClass('open').slideDown();
					$this.find('.dropdown-toggle').addClass('disabled');
				}, delay);

			},	function(){
				clearTimeout(setTimeoutConst );
				$(this).removeClass('open');
				$(this).find('.dropdown-toggle').removeClass('disabled');
			});
		};

		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
			$('.main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			$(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			$(this).parent().toggleClass('open');
			});
		};

		//Main slider
		//-----------------------------------------------

		//Revolution Slider 4
		if ($(".slider-banner-container").length>0) {

			$(".tp-bannertimer").show();

			$('.slider-banner-container .slider-banner').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,

				navigationArrows:"solo",

				navigationStyle: "round",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hCode2nightrrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hCode2nightllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.slider-banner-container .slider-banner-2').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,

				navigationArrows:"solo",

				navigationStyle: "preview4",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hCode2nightrrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hCode2nightllCaptionAtLilmit:0,
				startWithSlide:0
			});

			$('.slider-banner-container .slider-banner-3').show().revolution({
				delay:10000,
				startwidth:1140,
				startheight:520,
				dottedOverlay: "twoxtwo",

				parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[3,2,1],

				navigationArrows:"solo",

				navigationStyle: "preview5",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				fullWidth:"on",

				spinner:"spinner0",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				onHoverStop: "off",

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hCode2nightrrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hCode2nightllCaptionAtLilmit:0,
				startWithSlide:0
			});

			if ($(".transparent.header").length>0 || $(".offcanvas-container").length>0) {
				$('.slider-banner-container .slider-banner-fullscreen').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",

					navigationArrows:"solo",

					navigationStyle: "preview4",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hCode2nightrrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hCode2nightllCaptionAtLilmit:0,
					startWithSlide:0
				});
			} else {
				$('.slider-banner-container .slider-banner-fullscreen').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "82px",

					navigationArrows:"solo",

					navigationStyle: "preview4",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hCode2nightrrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hCode2nightllCaptionAtLilmit:0,
					startWithSlide:0
				});
			};

			if ($(".transparent.header").length>0 || $(".offcanvas-container").length>0) {
				$('.slider-banner-container .slider-banner-fullscreen-alt-nav').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",

					navigationArrows:"solo",

					navigationStyle: "preview2",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hCode2nightrrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hCode2nightllCaptionAtLilmit:0,
					startWithSlide:0
				});
			} else {
				$('.slider-banner-container .slider-banner-fullscreen-alt-nav').show().revolution({
					delay:10000,
					startwidth:1140,
					startheight:520,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "82px",

					navigationArrows:"solo",

					navigationStyle: "preview2",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					spinner:"spinner4",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					onHoverStop: "off",

					shuffle:"off",
					hideTimerBar:"on",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hCode2nightrrowsOnMobile:"off",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hCode2nightllCaptionAtLilmit:0,
					startWithSlide:0
				});
			};

		};

		//Revolution Slider 5
		if ($(".slider-revolution-5-container").length>0) {

			$(".tp-bannertimer").show();

			$('.slider-revolution-5-container .slider-banner-fullwidth').revolution({
				sliderType:"standard",
				sliderLayout:"fullwidth",
				delay:9000,
				gridwidth:1140,
				gridheight:520,
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-boxedwidth').revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:8000,
				gridwidth:1140,
				gridheight:520,
				shadow: 1,
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			if ($(".transparent.header").length>0 || $(".offcanvas-container").length>0) {
				$('.slider-revolution-5-container .slider-banner-fullscreen').revolution({
					sliderType:"standard",
					sliderLayout:"fullscreen",
					delay:9000,
					autoHeight:"on",
					fullScreenOffsetContainer: "",
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hebe",
							enable:true,
							tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
							left : {
								h_align:"left",
								v_align:"center",
								h_offset:0,
								v_offset:0,
							},
							right : {
								h_align:"right",
								v_align:"center",
								h_offset:0,
								v_offset:0
							}
						},
						bullets:{
							style:"",
							enable:true,
							hide_onleave:true,
							direction:"horizontal",
							space: 3,
							h_align:"center",
							v_align:"bottom",
							h_offset:0,
							v_offset:20
						}
					},
					gridwidth:1140,
					gridheight:750
				});
			} else {
				$('.slider-revolution-5-container .slider-banner-fullscreen').revolution({
					sliderType:"standard",
					sliderLayout:"fullscreen",
					delay:9000,
					autoHeight:"on",
					fullScreenOffsetContainer: "header.header, .header-top",
					navigation: {
						onHoverStop: "off",
						arrows: {
							style: "hebe",
							enable:true,
							tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
							left : {
								h_align:"left",
								v_align:"center",
								h_offset:0,
								v_offset:0,
							},
							right : {
								h_align:"right",
								v_align:"center",
								h_offset:0,
								v_offset:0
							}
						},
						bullets:{
							style:"",
							enable:true,
							hide_onleave:true,
							direction:"horizontal",
							space: 3,
							h_align:"center",
							v_align:"bottom",
							h_offset:0,
							v_offset:20
						}
					},
					gridwidth:1140,
					gridheight:750
				});
			}
			$('.slider-revolution-5-container .slider-banner-fullscreen-hero:not(.dotted)').revolution({
				sliderType:"hero",
				sliderLayout:"fullscreen",
				gridwidth:1140,
				gridheight:650,
				delay: 9000
			});
		}

		//Owl carousel
		//-----------------------------------------------
		if ($('.owl-carousel').length>0) {
			$(".owl-carousel.carousel").owlCarousel({
				items: 4,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			$(".owl-carousel.carousel-autoplay").owlCarousel({
				items: 4,
				autoPlay: 5000,
				pagination: false,
				navigation: true,
				navigationText: false
			});
			$(".owl-carousel.clients").owlCarousel({
				items: 4,
				autoPlay: true,
				pagination: false,
				itemsDesktopSmall: [992,5],
				itemsTablet: [768,4],
				itemsMobile: [479,3]
			});
			$(".owl-carousel.content-slider").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: false,
				navigationText: false,
				pagination: false
			});
			$(".owl-carousel.content-slider-with-controls").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				navigationText: false,
				pagination: true
			});
			$(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
				singleItem: true,
				autoPlay: 5000,
				navigation: true,
				navigationText: false,
				pagination: true
			});
			$(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({
				singleItem: true,
				autoPlay: false,
				navigation: true,
				navigationText: false,
				pagination: true
			});
		};

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var item = $(this),
				animationEffect = item.attr("data-animation-effect");

				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					item.appear(function() {
						if(item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
						setTimeout(function() {
							item.addClass('animated object-visible ' + animationEffect);

						}, item.attr("data-effect-delay"));
					}, {accX: 0, accY: -130});
				} else {
					item.addClass('object-visible');
				}
			});
		};

		// Text Rotators
		//-----------------------------------------------
		if ($(".text-rotator").length>0) {
			$(".text-rotator").each(function() {
				var tr_animationEffect = $(this).attr("data-rotator-animation-effect");
				$(this).Morphext({
					animation: ""+tr_animationEffect+"", // Overrides default "bounceIn"
					separator: ",", // Overrides default ","
					speed: 5000 // Overrides default 2000
				});
			});
		};

		// Stats Count To
		//-----------------------------------------------
		if ($(".stats [data-to]").length>0) {
			$(".stats [data-to]").each(function() {
				var stat_item = $(this),
				offset = stat_item.offset().top;
				if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
					stat_item.addClass('counting');
					stat_item.countTo();
				};
				$(window).scroll(function() {
					if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
						stat_item.addClass('counting');
						stat_item.countTo();
					}
				});
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0 || $('.masonry-grid').length>0 || $('.masonry-grid-fitrows').length>0) {
			$(window).load(function() {
				$('.masonry-grid').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'masonry'
				});
				$('.masonry-grid-fitrows').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'fitRows'
				});
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//hc-tabs
		//-----------------------------------------------
		if ($('.hc-tabs').length>0) {
			$(window).load(function() {
				var currentTab = $(".hc-tabs .nav.nav-tabs li.active a").attr("href"),
				tabsImageAnimation = $(".hc-tabs-top").find("[data-tab='" + currentTab + "']").attr("data-tab-animation-effect");
				$(".hc-tabs-top").find("[data-tab='" + currentTab + "']").addClass("current-img show " + tabsImageAnimation + " animated");

				$('.hc-tabs .nav.nav-tabs li a').on('click', function(event) {
					var currentTab = $(this).attr("href"),
					tabsImageAnimation = $(".hc-tabs-top").find("[data-tab='" + currentTab + "']").attr("data-tab-animation-effect");
					$(".current-img").removeClass("current-img show " + tabsImageAnimation + " animated");
					$(".hc-tabs-top").find("[data-tab='" + currentTab + "']").addClass("current-img show " + tabsImageAnimation + " animated");
				});
			});

		}

		// Animated Progress Bars
		//-----------------------------------------------
		if ($("[data-animate-width]").length>0) {
			$("[data-animate-width]").each(function() {
				$(this).appear(function() {
					$(this).animate({
						width: $(this).attr("data-animate-width")
					}, 800 );
				}, {accX: 0, accY: -100});
			});
		};

		// Animated Progress Bars
		//-----------------------------------------------
		if ($(".knob").length>0) {
		//	$(".knob").knob();
		}

		// Charts
		//-----------------------------------------------
		if ($(".graph").length>0) {
			// Creates random numbers you don't need this for real graphs
			var randomScalingFactor = function(){ return Math.round(Math.random()*500)};

			// Line charts
			if ($(".graph.line").length>0) {
				// Data for line charts
				var lineChartData = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
					{
						label: "First dataset",
						backgroundColor : "rgba(188,188,188,0.2)",
						borderColor : "rgba(188,188,188,1)",
						pointBackgroundColor : "rgba(188,188,188,1)",
						pointBorderColor : "#fff",
						pointHoverBackgroundColor : "#fff",
						pointHoverBorderColor : "rgba(188,188,188,1)",
						data : [250,300,250,200,250,300,250]
					},
					{
						label: "Second dataset",
						backgroundColor : "rgba(126,187,205,0.2)",
						borderColor : "rgba(126,187,205,1)",
						pointBackgroundColor : "rgba(126,187,205,1)",
						pointBorderColor : "#fff",
						pointHoverBackgroundColor : "#fff",
						pointHoverBorderColor : "rgba(126,187,205,1)",
						data : [300,250,200,250,300,250,200]
					},
					{
						label: "Third dataset",
						backgroundColor : "rgba(98,187,205,0.2)",
						borderColor : "rgba(98,187,205,1)",
						pointBackgroundColor : "rgba(98,187,205,1)",
						pointBorderColor : "#fff",
						pointHoverBackgroundColor : "#fff",
						pointHoverBorderColor : "rgba(98,187,205,1)",
						data : [0,100,200,300,400,500,400]
					}
					]
				}

				// Line Charts Initialization
				$(window).load(function() {
					var ctx = document.getElementById("lines-graph").getContext("2d");
					window.newLine = new Chart(ctx, {
						type: 'line',
						data: lineChartData,
						responsive: true,
						bezierCurve : false
					});
				});
			}

			// Bar charts
			if ($(".graph.bar").length>0) {
				// Data for bar charts
				var barChartData = {
					labels : ["January","February","March","April","May","June","July"],
					datasets : [
						{
							backgroundColor : "rgba(188,188,188,0.5)",
							borderColor : "rgba(188,188,188,0.8)",
							hoverBackgroundColor: "rgba(188,188,188,0.75)",
							hoverBorderColor: "rgba(188,188,188,1)",
							data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						},
						{
							backgroundColor : "rgba(168,187,205,0.5)",
							borderColor : "rgba(168,187,205,0.8)",
							hoverBackgroundColor : "rgba(168,187,205,0.75)",
							hoverBorderColor : "rgba(168,187,205,1)",
							data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						}
					]
				}

				// Bar Charts Initialization
				$(window).load(function() {
					var ctx = document.getElementById("bars-graph").getContext("2d");
					window.myBar = new Chart(ctx, {
						type: 'bar',
						data: barChartData,
						responsive : true
					});
				});
			}

			// Pie Chart
			if ($(".graph.pie").length>0) {
				// Data for pie chart
				var pieData = {
					labels: [
					"Red",
					"Green",
					"Yellow"
					],
					datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						],
						hoverBackgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						]
					}]
				};

				// Pie Chart Initialization
				$(window).load(function() {
					var ctx = document.getElementById("pie-graph").getContext("2d");
					window.myPie = new Chart(ctx, {
						type: 'pie',
						data: pieData,
						responsive : true
					});
				});
			}

			// Doughnut Chart
			if ($(".graph.doughnut").length>0) {
				// Data for doughnut chart
				var doughnutData = {
					labels: [
					"Red",
					"Green",
					"Yellow"
					],
					datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						],
						hoverBackgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						]
					}]
				};

				// Doughnut Chart Initialization
				$(window).load(function() {
					var ctx = document.getElementById("doughnut-graph").getContext("2d");
					window.myDoughnut = new Chart(ctx, {
						type: 'doughnut',
						data: doughnutData,
						responsive : true
					});
				});
			}
		};

		// Magnific popup
		//-----------------------------------------------
		if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
			$(".popup-img").magnificPopup({
				type:"image",
				gallery: {
					enabled: true,
				}
			});
			$(".popup-img-single").magnificPopup({
				type:"image",
				gallery: {
					enabled: false,
				}
			});
			$('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				preloader: false,
				fixedContentPos: false
			});
		};

		// Fixed header
		//-----------------------------------------------
		var	headerTopHeight = $(".header-top").outerHeight(),
		headerHeight = $("header.header.fixed").outerHeight();
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) {
				if(($(this).scrollTop() > headerTopHeight+headerHeight) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
					$(".header.fixed").addClass('animated object-visible fadeInDown');
					if (!($(".header.transparent").length>0)) {
						if ($(".banner:not(.header-top)").length>0) {
							$(".banner").css("marginTop", (headerHeight)+"px");
						} else if ($(".page-intro").length>0) {
							$(".page-intro").css("marginTop", (headerHeight)+"px");
						} else if ($(".page-top").length>0) {
							$(".page-top").css("marginTop", (headerHeight)+"px");
						} else {
							$("section.main-container").css("marginTop", (headerHeight)+"px");
						}
					}
				} else {
					$("body").removeClass("fixed-header-on");
					$("section.main-container").css("marginTop", (0)+"px");
					$(".banner").css("marginTop", (0)+"px");
					$(".page-intro").css("marginTop", (0)+"px");
					$(".page-top").css("marginTop", (0)+"px");
					$(".header.fixed").removeClass('animated object-visible fadeInDown');
				}
			};
		});

		// Sharrre plugin
		//-----------------------------------------------
		if ($('#share').length>0) {
			var list = ['facebook', 'twitter'];
			$('#share').sharrre({
				share: {
					facebook: true,
					twitter: true
				},
				buttons: {
					facebook: {
						popup: {
							width: 1200,
							height: 900
						}
					},
					twitter: {}
				},
				enableCounter: false,
				enableHover: false,
				template: '<ul class="social-links clearfix"><li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li><li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li></ul>',
				render: function (api, options) {
					for (i in list) {
						service = list[i];
						$(api.element).on('click', '.' + service, function () {
						api.openPopup(this.className);
						});
					}
				}
			});
		};

		// Contact forms validation
		//-----------------------------------------------
		if($("#contact-form").length>0) {
			$("#contact-form").validate({
				submitHandler: function(form) {
					$('.submit-button').button("loading");
					$.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": $("#contact-form #name").val(),
							"email": $("#contact-form #email").val(),
							"subject": $("#contact-form #subject").val(),
							"message": $("#contact-form #message").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								$("#MessageSent").removeClass("hidden");
								$("#MessageNotSent").addClass("hidden");
								$(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								$("#contact-form .form-control").each(function() {
									$(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								$("#MessageNotSent").removeClass("hidden");
								$("#MessageSent").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					subject: {
						required: "Please enter a subject"
					},
					message: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide");
				}
			});
		};

		if($("#contact-form-with-recaptcha").length>0) {
			$("#contact-form-with-recaptcha").validate({
				submitHandler: function(form) {
					$('.submit-button').button("loading");
					$.ajax({
						type: "POST",
						url: "php/email-sender-recaptcha.php",
						data: {
							"name": $("#contact-form-with-recaptcha #name").val(),
							"email": $("#contact-form-with-recaptcha #email").val(),
							"subject": $("#contact-form-with-recaptcha #subject").val(),
							"message": $("#contact-form-with-recaptcha #message").val(),
							"g-recaptcha-response": $("#g-recaptcha-response").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								$("#MessageSent").removeClass("hidden");
								$("#MessageNotSent").addClass("hidden");
								$(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								$("#contact-form-with-recaptcha .form-control").each(function() {
									$(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								$("#MessageNotSent").removeClass("hidden");
								$("#MessageSent").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					subject: {
						required: "Please enter a subject"
					},
					message: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide");
				}
			});
		};

		if($("#footer-form").length>0) {
			$("#footer-form").validate({
				submitHandler: function(form) {
					$('.submit-button').button("loading");
					$.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": $("#footer-form #name2").val(),
							"email": $("#footer-form #email2").val(),
							"subject": "Message from contact form",
							"message": $("#footer-form #message2").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								$("#MessageSent2").removeClass("hidden");
								$("#MessageNotSent2").addClass("hidden");
								$(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								$("#footer-form .form-control").each(function() {
									$(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								$("#MessageNotSent2").removeClass("hidden");
								$("#MessageSent2").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name2: {
						required: true,
						minlength: 2
					},
					email2: {
						required: true,
						email: true
					},
					message2: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name2: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email2: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message2: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide");
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide");
				}
			});
		};

		if($("#sidebar-form").length>0) {

			$("#sidebar-form").validate({
				submitHandler: function(form) {
					$('.submit-button').button("loading");
					$.ajax({
						type: "POST",
						url: "php/email-sender.php",
						data: {
							"name": $("#sidebar-form #name3").val(),
							"email": $("#sidebar-form #email3").val(),
							"subject": "Message from FAQ page",
							"category": $("#sidebar-form #category").val(),
							"message": $("#sidebar-form #message3").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.sent == "yes") {
								$("#MessageSent3").removeClass("hidden");
								$("#MessageNotSent3").addClass("hidden");
								$(".submit-button").removeClass("btn-default").addClass("btn-success").prop('value', 'Message Sent');
								$("#sidebar-form .form-control").each(function() {
									$(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
								});
							} else {
								$("#MessageNotSent3").removeClass("hidden");
								$("#MessageSent3").addClass("hidden");
							}
						}
					});
				},
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertAfter( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name3: {
						required: true,
						minlength: 2
					},
					email3: {
						required: true,
						email: true
					},
					message3: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name3: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
					email3: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					message3: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
				}
			});

		};

		// Affix plugin
		//-----------------------------------------------
		if ($("#affix").length>0) {
			$(window).load(function() {

				var affixBottom = $(".footer").outerHeight(true) + $(".subfooter").outerHeight(true) + $(".blogpost footer").outerHeight(true),
				affixTop = $("#affix").offset().top;

				if ($(".comments").length>0) {
					affixBottom = affixBottom + $(".comments").outerHeight(true);
				}

				if ($(".comments-form").length>0) {
					affixBottom = affixBottom + $(".comments-form").outerHeight(true);
				}

				if ($(".footer-top").length>0) {
					affixBottom = affixBottom + $(".footer-top").outerHeight(true);
				}

				if ($(".header.fixed").length>0) {
					$("#affix").affix({
				        offset: {
				          top: affixTop-150,
				          bottom: affixBottom+100
				        }
				    });
				} else {
					$("#affix").affix({
				        offset: {
				          top: affixTop-35,
				          bottom: affixBottom+100
				        }
				    });
				}

			});
		}
		if ($(".affix-menu").length>0) {
			setTimeout(function () {
				var $sideBar = $('.sidebar')

				$sideBar.affix({
					offset: {
						top: function () {
							var offsetTop      = $sideBar.offset().top
							return (this.top = offsetTop - 65)
						},
						bottom: function () {
							var affixBottom = $(".footer").outerHeight(true) + $(".subfooter").outerHeight(true)
							if ($(".footer-top").length>0) {
								affixBottom = affixBottom + $(".footer-top").outerHeight(true)
							}
							return (this.bottom = affixBottom+50)
						}
					}
				})
			}, 100)
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			if($(".header.fixed").length>0) {
				$('.smooth-scroll a, a.smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top-65
							}, 1000);
							return false;
						}
					}
				});
			} else {
				$('.smooth-scroll a, a.smooth-scroll').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top
							}, 1000);
							return false;
						}
					}
				});
			}
		}

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			if($(".fixed.header").length>0) {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 85
				});
			} else {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 20
				});
			}
		}

		//Video Background
		//-----------------------------------------------
		if($(".video-background").length>0) {
			if (Modernizr.touch) {
				$(".video-background").vide({
					mp4: "videos/background-video.mp4",
					webm: "videos/background-video.webm",
					poster: "videos/video-fallback.jpg"
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 60%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			} else {
				$(".video-background").vide({
					mp4: "videos/background-video.mp4",
					webm: "videos/background-video.webm",
					poster: "videos/video-poster.jpg"
				}, {
					volume: 1,
					playbackRate: 1,
					muted: true,
					loop: true,
					autoplay: true,
					position: "50% 60%", // Similar to the CSS `background-position` property.
					posterType: "jpg", // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
					resizing: true
				});
			};

		};

		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").fadeIn();
			} else {
				$(".scrollToTop").fadeOut();
			}
		});

		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

		// Pricing tables popovers
		//-----------------------------------------------
		if ($(".pricing-tables").length>0) {
			$(".plan .pt-popover").popover({
				trigger: 'hover'
			});
		};

		// Parallax section
		//-----------------------------------------------
		if (($(".parallax").length>0)  && !Modernizr.touch ){
			$(".parallax").parallax("50%", 0.2, false);
		};

		if (($(".parallax-2").length>0)  && !Modernizr.touch ){
			$(".parallax-2").parallax("50%", 0.2, false);
		};
		if (($(".parallax-text").length>0)  && !Modernizr.touch ){
			$(window).scroll(function() {
				//Get the scoll position of the page
				scrollPos = $(this).scrollTop();

				//Scroll and fade out the banner text
				$('.parallax-text').css({
					'opacity' : 1-(scrollPos/400)
				});
			});
		};

		// Remove Button
		//-----------------------------------------------
		$(".btn-remove").click(function() {
			$(this).closest(".remove-data").remove();
		});

		// Shipping Checkbox
		//-----------------------------------------------
		if ($("#shipping-info-check").is(':checked')) {
			$("#shipping-information").hide();
		}
		$("#shipping-info-check").change(function(){
			if ($(this).is(':checked')) {
				$("#shipping-information").slideToggle();
			} else {
				$("#shipping-information").slideToggle();
			}
		});

		//This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes (Header Top).
		//-----------------------------------------------
		$('.header-top .dropdown-menu input').click(function(e) {
			e.stopPropagation();
		});

		// Offcanvas side navbar
		//-----------------------------------------------

		if ($("#offcanvas").length>0) {
			$('#offcanvas').offcanvas({
				disableScrolling: false,
				toggle: false
			});
		};

		if ($("#offcanvas").length>0) {
			$('#offcanvas [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault();
			// Avoid having the menu to close when clicking
			event.stopPropagation();
			// close all the siblings
			$(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			$(this).parent().toggleClass('open');
			});
		};

	}); // End document ready

})(this.jQuery);

if (jQuery(".btn-print").length>0) {
	function print_window() {
		var mywindow = window;
		mywindow.document.close();
		mywindow.focus();
		mywindow.print();
		mywindow.close();
	}
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40620479-6', 'auto');
ga('send', 'pageview');