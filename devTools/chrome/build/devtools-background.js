!function(e){var n={};function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=177)}({177:function(e,n){let o,t=!1,s=!1,u=!1,c=0;chrome.devtools.network.onNavigated.addListener(i);const r=setInterval(i,1e3);function i(){u||c++>10||(t=!1,s=!1,chrome.devtools.inspectedWindow.eval("!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue)",function(e){e&&!u&&(clearInterval(r),u=!0,chrome.devtools.panels.create("Vue","icons/128.png","devtools.html",e=>{e.onShown.addListener(l),e.onHidden.addListener(a)}))}))}function d(){o&&o(),o=null}function l(){chrome.runtime.sendMessage("vue-panel-shown"),s=!0,t&&d()}function a(){chrome.runtime.sendMessage("vue-panel-hidden"),s=!1}i(),chrome.runtime.onMessage.addListener(e=>{"vue-panel-load"===e?(d(),t=!0):e.vueToast?f(e.vueToast):e.vueContextMenu&&function({id:e}){if("vue-inspect-instance"===e){const e="window.__VUE_DEVTOOLS_CONTEXT_MENU_HAS_TARGET__";chrome.devtools.inspectedWindow.eval(e,function(e,n){n&&console.log(n),void 0!==e&&e?function(e,n=null){u&&t&&s?e():(o=e,n&&f(n))}(()=>{chrome.runtime.sendMessage("vue-get-context-menu-target")},"open-devtools"):(o=null,f("component-not-found"))})}}(e.vueContextMenu)});const p={"open-devtools":{message:"Open Vue devtools to see component details",type:"normal"},"component-not-found":{message:"No Vue component was found",type:"warn"}};function f(e){if(!Object.keys().includes(e))return;const{message:n,type:o}=p[e],t=`(function() {\n    __VUE_DEVTOOLS_TOAST__(\`${n}\`, '${o}');\n  })()`;chrome.devtools.inspectedWindow.eval(t,function(e,n){n&&console.log(n)})}}});