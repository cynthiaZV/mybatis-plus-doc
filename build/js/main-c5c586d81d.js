!function(){"use strict";function e(){var e=this.value,t=this.dataset.canonical;"zh-cn"===e&&(e=""),e&&(e+="/"),location.href="/"+e+t}document.getElementById("lang-select").addEventListener("change",e),document.getElementById("mobile-lang-select").addEventListener("change",e)}(),function(){"use strict";function e(){var e=n.scrollTop;e>c?i.classList.add("fixed"):i.classList.remove("fixed")}var t=document.getElementById("header"),n=document.getElementById("container"),i=document.getElementById("article-toc"),o=document.getElementById("article-toc-top"),c=t.clientHeight;i&&(n.addEventListener("scroll",function(){window.requestAnimationFrame(e)}),e(),o.addEventListener("click",function(e){e.preventDefault(),n.scrollTop=0}))}(),function(){"use strict";var e=document.getElementsByTagName("body")[0],t=document.getElementById("mobile-nav-toggle"),n=(document.getElementById("container"),document.getElementById("mobile-nav-dimmer")),i="mobile-nav-on";t&&(t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),e.classList.toggle(i)}),n.addEventListener("click",function(t){e.classList.contains(i)&&(t.preventDefault(),e.classList.remove(i))}))}(),function(e){"use strict";function t(e,t){return e.indexOf(t,e.length-t.length)!==-1}function n(){}function i(e,r){function l(e,t){return T.push(e),I.push(t),x!=u&&(x=u,setTimeout(function(){a()},0)),g}function a(){if(x!=u)return x=o,D(e),void(D=n);if(++b==T.length){if(!p)return b=T.length-1,void(x=o);b=0}T[b].apply(null,[].concat(a,I[b]))}function s(t,n,i){var o=n.length;return o?void function c(u){setTimeout(function(){B(e,L(e)+n[u]),u+=1,u<o?c(u):t()},i)}(0):t()}function d(n,i,o){var c=L(e),u=c.length;return null!=i&&("string"==typeof i?u=t(c,i+E)?i.length+E.length:0:i>-1&&(u=Math.min(i,u))),u?void function r(t){setTimeout(function(){var i=L(e);t?(B(e,i.substring(0,i.length-1)),r(t-1)):n()},o)}(u):n()}function f(t){B(e,""),t()}function m(t,n){n.call(t,e)}var g=this;if(!(g instanceof i))return new i(e,r);r=r||{};var p=r.loop,v=r.speed||r.typeSpeed||50,y=r.speed||r.deleteSpeed||50,h=r.delay||r.pauseDelay||2e3,E=r.postfix||"",L=r.getter||function(e){return e.innerHTML},B=r.setter||function(e,t){e.innerHTML=t},T=[],I=[],b=-1,x=o,D=n;g.type=function(e,t){return l(s,[e+E,t||v])},g["delete"]=function(e,t){return l(d,[e,t||y])},g.clear=function(){return l(f)},g.pause=function(e){return l(setTimeout,[e||h])},g.call=function(e){return l(m,[e])},g.triggerPause=function(e){return x=c,D=e||n,g},g.triggerResume=function(){if(x!=u){var e=x;x=u,e==o&&a()}return g},g.isRunning=function(){return x!=o}}var o=0,c=1,u=2;"object"==typeof module?module.exports=i:e.malarkey=i;var r=document.querySelector("#banner-start-command"),l={typeSpeed:80,deleteSpeed:80,pauseDelay:2e3,loop:!0,postfix:""},a=document.getElementsByTagName("html")[0].lang;"zh-cn"==a?i(r,l).type("2.0里程碑版本现已上线").pause()["delete"]().type("支持ActionRecord语法糖").pause()["delete"]():i(r,l).type("2.0 version is coming now").pause()["delete"]().type("support ActionRecord syntactic sugar").pause()["delete"]()}(this);