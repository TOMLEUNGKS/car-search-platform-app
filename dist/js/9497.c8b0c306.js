"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[9497],{8934:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return k}});var o=n(655),r=n(7735),i=n(2481),a=new WeakMap,u=function(e,t,n,o){void 0===o&&(o=0),a.has(e)!==n&&(n?s(e,t,o):l(e,t))},c=function(e){return e===e.getRootNode().activeElement},s=function(e,t,n){var o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),a.set(e,r);var i=e.ownerDocument,u="rtl"===i.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(u,"px,").concat(n,"px,0) scale(0)")},l=function(e,t){var n=a.get(e);n&&(a.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},d=function(e,t,n){if(!n||!t)return function(){};var o=function(n){c(t)&&u(e,t,n)},r=function(){return u(e,t,!1)},a=function(){return o(!0)},s=function(){return o(!1)};return(0,i.a)(n,"ionScrollStart",a),(0,i.a)(n,"ionScrollEnd",s),t.addEventListener("blur",r),function(){(0,i.b)(n,"ionScrollStart",a),(0,i.b)(n,"ionScrollEnd",s),t.addEventListener("ionBlur",r)}},f="input, textarea, [no-blur], [contenteditable]",v=function(){var e=!0,t=!1,n=document,o=function(){t=!0},r=function(){e=!0},a=function(o){if(t)t=!1;else{var r=n.activeElement;if(r&&!r.matches(f)){var i=o.target;i!==r&&(i.matches(f)||i.closest(f)||(e=!1,setTimeout((function(){e||r.blur()}),50)))}}};return(0,i.a)(n,"ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",a,!1),function(){(0,i.b)(n,"ionScrollStart",o,!0),n.removeEventListener("focusin",r,!0),n.removeEventListener("touchend",a,!1)}},m=.3,h=function(e,t,n){var o=e.closest("ion-item,[ion-item]")||e;return p(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},p=function(e,t,n,o){var r=e.top,i=e.bottom,a=t.top,u=Math.min(t.bottom,o-n),c=a+15,s=.75*u,l=s-i,d=c-r,f=Math.round(l<0?-l:d>0?-d:0),v=Math.min(f,r-a),h=Math.abs(v),p=h/m,w=Math.min(400,Math.max(150,p));return{scrollAmount:v,scrollDuration:w,scrollPadding:n,inputSafeY:4-(r-c)}},w=function(e,t,n,o,r){var a,u=function(e){a=(0,i.p)(e)},s=function(u){if(a){var s=(0,i.p)(u);g(6,a,s)||c(t)||E(e,t,n,o,r)}};return e.addEventListener("touchstart",u,{capture:!0,passive:!0}),e.addEventListener("touchend",s,!0),function(){e.removeEventListener("touchstart",u,!0),e.removeEventListener("touchend",s,!0)}},E=function(e,t,n,a,c){return(0,o.mG)(void 0,void 0,void 0,(function(){var s,l,d,f,v,m;return(0,o.Jh)(this,(function(p){switch(p.label){case 0:return n||a?(s=h(e,n||a,c),n&&Math.abs(s.scrollAmount)<4?(t.focus(),[2]):(u(e,t,!0,s.inputSafeY),t.focus(),(0,i.r)((function(){return e.click()})),"undefined"===typeof window?[3,3]:(d=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0!==l&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",d),n?[4,(0,r.c)(n,0,s.scrollAmount,s.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return u(e,t,!1,s.inputSafeY),t.focus(),[2]}}))}))},f=function(){window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",d)},n?[4,(0,r.g)(n)]:[3,2]))):[2];case 1:if(v=p.sent(),m=v.scrollHeight-v.clientHeight,s.scrollAmount>m-v.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",d),l=setTimeout(d,1e3),[2];p.label=2;case 2:d(),p.label=3;case 3:return[2]}}))}))},g=function(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y,i=o*o+r*r;return i>e*e}return!1},b="$ionPaddingTimer",y=function(e){var t=document,n=function(t){S(t.target,e)},o=function(e){S(e.target,0)};return t.addEventListener("focusin",n),t.addEventListener("focusout",o),function(){t.removeEventListener("focusin",n),t.removeEventListener("focusout",o)}},S=function(e,t){var n,o;if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&"ION-SEARCHBAR"!==(null===(o=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.tagName)){var i=(0,r.f)(e);if(null!==i){var a=i[b];a&&clearTimeout(a),t>0?i.style.setProperty("--keyboard-offset","".concat(t,"px")):i[b]=setTimeout((function(){i.style.setProperty("--keyboard-offset","0px")}),120)}}},L=!0,D=!0,k=function(e){var t=document,n=e.getNumber("keyboardHeight",290),a=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),l=Array.from(t.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,m=new WeakMap,h=function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,c,s,l,v,h;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,new Promise((function(t){return(0,i.c)(e,t)}))];case 1:return o.sent(),t=e.shadowRoot||e,c=t.querySelector("input")||t.querySelector("textarea"),s=(0,r.f)(e),l=s?null:e.closest("ion-footer"),c?(s&&u&&!f.has(e)&&(h=d(e,c,s),f.set(e,h)),v="date"===c.type||"datetime-local"===c.type,v||!s&&!l||!a||m.has(e)||(h=w(e,c,s,l,n),m.set(e,h)),[2]):[2]}}))}))},p=function(e){if(u){var t=f.get(e);t&&t(),f.delete(e)}if(a){t=m.get(e);t&&t(),m.delete(e)}};c&&L&&v(),s&&D&&y(n);for(var E=0,g=l;E<g.length;E++){var b=g[E];h(b)}t.addEventListener("ionInputDidLoad",(function(e){h(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){p(e.detail)}))}}}]);
//# sourceMappingURL=9497.c8b0c306.js.map