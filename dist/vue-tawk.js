!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-tawk",[],e):"object"==typeof exports?exports["vue-tawk"]=e():t["vue-tawk"]=e()}(window,(function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(n,i,function(e){return t[e]}.bind(null,i));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,o){"use strict";o.r(e);var n={},i=function(){return!!window.Tawk_API};n.install=function(t,e){t.prototype.$Tawk={},t.prototype.$Tawk.$startChat=function(){var t=(new Date,document.createElement("script")),o=document.getElementsByTagName("script")[0];t.async=!0,t.src=e.tawkSrc,t.charset="UTF-8",t.setAttribute("crossorigin","*"),t.setAttribute("SameSite","none"),o.parentNode.insertBefore(t,o),window.Tawk_API={}},t.prototype.$Tawk.$updateChatUser=function(t){i()&&t&&window.Tawk_API.setAttributes({name:t.name,email:t.email,hash:t.hash},(function(t){t&&console.log(t)}))},t.prototype.$Tawk.$endChat=function(){window.Tawk_API.endChat()},t.prototype.$Tawk.$isInit=function(){return i()},t.prototype.$Tawk.$toggle=function(){i()&&window.Tawk_API.toggle()},t.prototype.$Tawk.$maximize=function(){i()&&window.Tawk_API.maximize()},t.prototype.$Tawk.$minimize=function(){i()&&window.Tawk_API.minimize()},t.prototype.$Tawk.$toggleVisibility=function(){i()&&window.Tawk_API.toggleVisibility()},t.prototype.$Tawk.$popup=function(){i()&&window.Tawk_API.popup()},t.prototype.$Tawk.$hideWidget=function(){i()&&window.Tawk_API.hideWidget()},t.prototype.$Tawk.$showWidget=function(){i()&&window.Tawk_API.showWidget()}},e.default=n}])}));
//# sourceMappingURL=vue-tawk.js.map