"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[6560,4795,2341],{4795:function(e,t,o){o.r(t),o.d(t,{C:function(){return a},a:function(){return i},d:function(){return s}});var r=o(655),n=o(2481),i=function(e,t,o,i,s,a){return(0,r.mG)(void 0,void 0,void 0,(function(){var c,p;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(t,o,s,i)];if(!a&&"string"!==typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return p="string"===typeof o?null===(c=t.ownerDocument)||void 0===c?void 0:c.createElement(o):o,i&&i.forEach((function(e){return p.classList.add(e)})),s&&Object.assign(p,s),t.appendChild(p),[4,new Promise((function(e){return(0,n.c)(p,e)}))];case 1:return r.sent(),[2,p]}}))}))},s=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()},a=function(){var e,t,o=function(o,i,s,a){return void 0===s&&(s={}),void 0===a&&(a=[]),(0,r.mG)(void 0,void 0,void 0,(function(){var c,p,d,l,u;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return e=o,i?(d="string"===typeof i?null===(c=e.ownerDocument)||void 0===c?void 0:c.createElement(i):i,a.forEach((function(e){return d.classList.add(e)})),Object.assign(d,s),e.appendChild(d),[4,new Promise((function(e){return(0,n.c)(d,e)}))]):[3,2];case 1:return r.sent(),[3,3];case 2:e.children.length>0&&(l=null===(p=e.ownerDocument)||void 0===p?void 0:p.createElement("div"),a.forEach((function(e){return l.classList.add(e)})),l.append.apply(l,e.children),e.appendChild(l)),r.label=3;case 3:return u=document.querySelector("ion-app")||document.body,t=document.createComment("ionic teleport"),e.parentNode.insertBefore(t,e),u.appendChild(e),[2,e]}}))}))},i=function(){return e&&t&&(t.parentNode.insertBefore(e,t),t.remove()),Promise.resolve()};return{attachViewToDom:o,removeViewFromDom:i}}},6560:function(e,t,o){o.r(t),o.d(t,{ion_popover:function(){return V}});var r=o(655),n=o(773),i=o(6553),s=o(4795),a=o(2481),c=o(2658),p=o(2341),d=o(3446),l=o(9353),u=function(e){if(!e)return{arrowWidth:0,arrowHeight:0};var t=e.getBoundingClientRect(),o=t.width,r=t.height;return{arrowWidth:o,arrowHeight:r}},v=function(e,t,o){var r=t.getBoundingClientRect(),n=r.height,i=r.width;if("cover"===e&&o){var s=o.getBoundingClientRect();i=s.width}return{contentWidth:i,contentHeight:n}},h=function(e,t,o,r){var n=[],i=(0,a.g)(r),s=i.querySelector(".popover-content");switch(t){case"hover":n=[{eventName:"mouseenter",callback:function(t){var r=document.elementFromPoint(t.clientX,t.clientY);r!==e&&o.dismiss(void 0,void 0,!1)}}];break;case"context-menu":case"click":default:n=[{eventName:"click",callback:function(t){var r=t.target,n=r.closest("[data-ion-popover-trigger]");n!==e?o.dismiss(void 0,void 0,!1):t.stopPropagation()}}];break}return n.forEach((function(e){var t=e.eventName,o=e.callback;return s.addEventListener(t,o)})),function(){n.forEach((function(e){var t=e.eventName,o=e.callback;return s.removeEventListener(t,o)}))}},f=function(e,t,o){var n=[];switch(t){case"hover":var i;n=[{eventName:"mouseenter",callback:function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return e.stopPropagation(),i&&clearTimeout(i),i=setTimeout((function(){(0,a.r)((function(){o.presentFromTrigger(e),i=void 0}))}),100),[2]}))}))}},{eventName:"mouseleave",callback:function(e){i&&clearTimeout(i);var t=e.relatedTarget;t&&t.closest("ion-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}];break;case"context-menu":n=[{eventName:"contextmenu",callback:function(e){e.preventDefault(),o.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}];break;case"click":default:n=[{eventName:"click",callback:function(e){return o.presentFromTrigger(e)}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}];break}return n.forEach((function(t){var o=t.eventName,r=t.callback;return e.addEventListener(o,r)})),e.setAttribute("data-ion-popover-trigger","true"),function(){n.forEach((function(t){var o=t.eventName,r=t.callback;return e.removeEventListener(o,r)})),e.removeAttribute("data-ion-popover-trigger")}},g=function(e,t){return t&&"ION-ITEM"===t.tagName?e.findIndex((function(e){return e===t})):-1},m=function(e,t){var o=g(e,t);return e[o+1]},b=function(e,t){var o=g(e,t);return e[o-1]},w=function(e){var t=(0,a.g)(e),o=t.querySelector("button");o&&(0,a.r)((function(){return o.focus()}))},y=function(e){return e.hasAttribute("data-ion-popover-trigger")},x=function(e){var t=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){var o,n,i,s,a,c,p,d,l,u,v;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if(n=document.activeElement,i=[],s=null===(o=t.target)||void 0===o?void 0:o.tagName,"ION-POPOVER"!==s&&"ION-ITEM"!==s)return[2];try{i=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(e){}switch(a=t.key,a){case"ArrowLeft":return[3,1];case"ArrowDown":return[3,3];case"ArrowUp":return[3,4];case"Home":return[3,5];case"End":return[3,6];case"ArrowRight":return[3,7];case" ":return[3,7];case"Enter":return[3,7]}return[3,8];case 1:return[4,e.getParentPopover()];case 2:return c=r.sent(),c&&e.dismiss(void 0,void 0,!1),[3,8];case 3:return t.preventDefault(),p=m(i,n),void 0!==p&&w(p),[3,8];case 4:return t.preventDefault(),d=b(i,n),void 0!==d&&w(d),[3,8];case 5:return t.preventDefault(),l=i[0],void 0!==l&&w(l),[3,8];case 6:return t.preventDefault(),u=i[i.length-1],void 0!==u&&w(u),[3,8];case 7:return n&&y(n)&&(v=new CustomEvent("ionPopoverActivateTrigger"),n.dispatchEvent(v)),[3,8];case 8:return[2]}}))}))};return e.addEventListener("keydown",t),function(){return e.removeEventListener("keydown",t)}},k=function(e,t,o,r,n,i,s,a,c,p,d){var l,u={top:0,left:0,width:0,height:0};switch(i){case"event":if(!d)return c;var v=d;u={top:v.clientY,left:v.clientX,width:1,height:1};break;case"trigger":default:var h=d,f=p||(null===(l=null===h||void 0===h?void 0:h.detail)||void 0===l?void 0:l.ionShadowTarget)||(null===h||void 0===h?void 0:h.target);if(!f)return c;var g=f.getBoundingClientRect();u={top:g.top,left:g.left,width:g.width,height:g.height};break}var m=I(s,u,t,o,r,n,e),b=S(a,s,u,t,o),w=m.top+b.top,y=m.left+b.left,x=E(s,r,n,w,y,t,o,e),k=x.arrowTop,D=x.arrowLeft,T=P(s,a,e),A=T.originX,C=T.originY;return{top:w,left:y,referenceCoordinates:u,arrowTop:k,arrowLeft:D,originX:A,originY:C}},P=function(e,t,o){switch(e){case"top":return{originX:D(t),originY:"bottom"};case"bottom":return{originX:D(t),originY:"top"};case"left":return{originX:"right",originY:T(t)};case"right":return{originX:"left",originY:T(t)};case"start":return{originX:o?"left":"right",originY:T(t)};case"end":return{originX:o?"right":"left",originY:T(t)}}},D=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}},T=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}},E=function(e,t,o,r,n,i,s,a){var c={arrowTop:r+s/2-t/2,arrowLeft:n+i-t/2},p={arrowTop:r+s/2-t/2,arrowLeft:n-1.5*t};switch(e){case"top":return{arrowTop:r+s,arrowLeft:n+i/2-t/2};case"bottom":return{arrowTop:r-o,arrowLeft:n+i/2-t/2};case"left":return c;case"right":return p;case"start":return a?p:c;case"end":return a?c:p;default:return{arrowTop:0,arrowLeft:0}}},I=function(e,t,o,r,n,i,s){var a={top:t.top,left:t.left-o-n},c={top:t.top,left:t.left+t.width+n};switch(e){case"top":return{top:t.top-r-i,left:t.left};case"right":return c;case"bottom":return{top:t.top+t.height+i,left:t.left};case"left":return a;case"start":return s?c:a;case"end":return s?a:c}},S=function(e,t,o,r,n){switch(e){case"center":return C(t,o,r,n);case"end":return A(t,o,r,n);case"start":default:return{top:0,left:0}}},A=function(e,t,o,r){switch(e){case"start":case"end":case"left":case"right":return{top:-(r-t.height),left:0};case"top":case"bottom":default:return{top:0,left:-(o-t.width)}}},C=function(e,t,o,r){switch(e){case"start":case"end":case"left":case"right":return{top:-(r/2-t.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(o/2-t.width/2)}}},L=function(e,t,o,r,n,i,s,a,c,p,d,l,u,v,h){void 0===u&&(u=0),void 0===v&&(v=0),void 0===h&&(h=0);var f,g=u,m=v,b=o,w=t,y=p,x=d,k=!1,P=!1,D=l?l.top+l.height:i/2-a/2,T=l?l.height:0,E=!1;return b<r+c?(b=r,k=!0,y="left"):s+r+b+c>n&&(P=!0,b=n-s-r,y="right"),D+T+a>i&&("top"===e||"bottom"===e)&&(D-a>0?(w=Math.max(12,D-a-T-(h-1)),g=w+a,x="bottom",E=!0):f=r),{top:w,left:b,bottom:f,originX:y,originY:x,checkSafeAreaLeft:k,checkSafeAreaRight:P,arrowTop:g,arrowLeft:m,addPopoverBottomClass:E}},O=function(e,t,o,r){return void 0===t&&(t=!1),!(!o&&!r)&&("top"===e||"bottom"===e||!t)},W=5,N=function(e,t){var o,r=t.event,n=t.size,i=t.trigger,s=t.reference,c=t.side,p=t.align,d=e.ownerDocument,h="rtl"===d.dir,f=d.defaultView.innerWidth,g=d.defaultView.innerHeight,m=(0,a.g)(e),b=m.querySelector(".popover-content"),w=m.querySelector(".popover-arrow"),y=i||(null===(o=null===r||void 0===r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null===r||void 0===r?void 0:r.target),x=v(n,b,y),P=x.contentWidth,D=x.contentHeight,T=u(w),E=T.arrowWidth,I=T.arrowHeight,S={top:g/2-D/2,left:f/2-P/2,originX:h?"right":"left",originY:"top"},A=k(h,P,D,E,I,s,c,p,S,i,r),C="cover"===n?0:W,N="cover"===n?0:25,q=L(c,A.top,A.left,C,f,g,P,D,N,A.originX,A.originY,A.referenceCoordinates,A.arrowTop,A.arrowLeft,I),X=q.originX,Y=q.originY,z=q.top,B=q.left,j=q.bottom,V=q.checkSafeAreaLeft,H=q.checkSafeAreaRight,F=q.arrowTop,G=q.arrowLeft,J=q.addPopoverBottomClass,R=(0,l.c)(),K=(0,l.c)(),M=(0,l.c)();return K.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),M.addElement(m.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),R.easing("ease").duration(100).beforeAddWrite((function(){"cover"===n&&e.style.setProperty("--width","".concat(P,"px")),J&&e.classList.add("popover-bottom"),void 0!==j&&b.style.setProperty("bottom","".concat(j,"px"));var t=" + var(--ion-safe-area-left, 0)",o=" - var(--ion-safe-area-right, 0)",s="".concat(B,"px");if(V&&(s="".concat(B,"px").concat(t)),H&&(s="".concat(B,"px").concat(o)),b.style.setProperty("top","calc(".concat(z,"px + var(--offset-y, 0))")),b.style.setProperty("left","calc(".concat(s," + var(--offset-x, 0))")),b.style.setProperty("transform-origin","".concat(Y," ").concat(X)),null!==w){var a=A.top!==z||A.left!==B,p=O(c,a,r,i);p?(w.style.setProperty("top","calc(".concat(F,"px + var(--offset-y, 0))")),w.style.setProperty("left","calc(".concat(G,"px + var(--offset-x, 0))"))):w.style.setProperty("display","none")}})).addAnimation([K,M])},q=function(e){var t=(0,a.g)(e),o=t.querySelector(".popover-content"),r=t.querySelector(".popover-arrow"),n=(0,l.c)(),i=(0,l.c)(),s=(0,l.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))})).duration(300).addAnimation([i,s])},X=12,Y=function(e,t){var o,r=t.event,n=t.size,i=t.trigger,s=t.reference,c=t.side,p=t.align,d=e.ownerDocument,u="rtl"===d.dir,h=d.defaultView.innerWidth,f=d.defaultView.innerHeight,g=(0,a.g)(e),m=g.querySelector(".popover-content"),b=i||(null===(o=null===r||void 0===r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null===r||void 0===r?void 0:r.target),w=v(n,m,b),y=w.contentWidth,x=w.contentHeight,P={top:f/2-x/2,left:h/2-y/2,originX:u?"right":"left",originY:"top"},D=k(u,y,x,0,0,s,c,p,P,i,r),T="cover"===n?0:X,E=L(c,D.top,D.left,T,h,f,y,x,0,D.originX,D.originY,D.referenceCoordinates),I=E.originX,S=E.originY,A=E.top,C=E.left,O=E.bottom,W=(0,l.c)(),N=(0,l.c)(),q=(0,l.c)(),Y=(0,l.c)(),z=(0,l.c)();return N.addElement(g.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),q.addElement(g.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),Y.addElement(m).beforeStyles({top:"calc(".concat(A,"px + var(--offset-y, 0px))"),left:"calc(".concat(C,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(S," ").concat(I)}).beforeAddWrite((function(){void 0!==O&&m.style.setProperty("bottom","".concat(O,"px"))})).fromTo("transform","scale(0.8)","scale(1)"),z.addElement(g.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite((function(){"cover"===n&&e.style.setProperty("--width","".concat(y,"px")),"bottom"===S&&e.classList.add("popover-bottom")})).addAnimation([N,q,Y,z])},z=function(e){var t=(0,a.g)(e),o=t.querySelector(".popover-content"),r=(0,l.c)(),n=(0,l.c)(),i=(0,l.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin")})).duration(150).addAnimation([n,i])},B=':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',j=":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}",V=function(){function e(e){var t=this;(0,n.r)(this,e),this.didPresent=(0,n.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,n.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,n.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,n.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,n.e)(this,"didPresent",7),this.willPresentShorthand=(0,n.e)(this,"willPresent",7),this.willDismissShorthand=(0,n.e)(this,"willDismiss",7),this.didDismissShorthand=(0,n.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=F++,this.coreDelegate=(0,s.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1,this.onBackdropTap=function(){t.dismiss(void 0,c.B)},this.onLifecycle=function(e){var o=t.usersElement,r=H[e.type];if(o&&r){var n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(n)}},this.configureTriggerInteraction=function(){var e=t,o=e.trigger,r=e.triggerAction,n=e.el,i=e.destroyTriggerInteraction;i&&i();var s=t.triggerEl=void 0!==o?document.getElementById(o):null;s&&(t.destroyTriggerInteraction=f(s,r,n))},this.configureKeyboardInteraction=function(){var e=t,o=e.destroyKeyboardInteraction,r=e.el;o&&o(),t.destroyKeyboardInteraction=x(r)},this.configureDismissInteraction=function(){var e=t,o=e.destroyDismissInteraction,r=e.parentPopover,n=e.triggerAction,i=e.triggerEl,s=e.el;r&&i&&(o&&o(),t.destroyDismissInteraction=h(i,n,s,r))}}return e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()},e.prototype.onIsOpenChange=function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()},e.prototype.connectedCallback=function(){(0,c.e)(this.el)},e.prototype.componentWillLoad=function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex),this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")")),void 0===this.alignment&&(this.alignment="ios"===(0,i.b)(this)?"center":"start")},e.prototype.componentDidLoad=function(){var e=this,t=this,o=t.parentPopover,r=t.isOpen;!0===r&&(0,a.r)((function(){return e.present()})),o&&(0,a.a)(o,"ionPopoverWillDismiss",(function(){e.dismiss(void 0,void 0,!1)})),this.configureTriggerInteraction()},e.prototype.presentFromTrigger=function(e,t){return void 0===t&&(t=!1),(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(o){switch(o.label){case 0:return this.focusDescendantOnPresent=t,[4,this.present(e)];case 1:return o.sent(),this.focusDescendantOnPresent=!1,[2]}}))}))},e.prototype.getDelegate=function(e){if(void 0===e&&(e=!1),this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.el.parentNode,o=this.inline=null!==t&&!this.hasController,r=this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate;return{inline:o,delegate:r}},e.prototype.present=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t,o,n,i,a;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.presented?[2]:void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:r.sent(),r.label=2;case 2:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),o=this.getDelegate(!0),n=o.inline,i=o.delegate,a=this,[4,(0,s.a)(i,this.el,this.component,["popover-viewport"],t,n)];case 3:return a.usersElement=r.sent(),[4,(0,d.e)(this.usersElement)];case 4:return r.sent(),this.keyboardEvents||this.configureKeyboardInteraction(),this.configureDismissInteraction(),this.currentTransition=(0,c.d)(this,"popoverEnter",N,Y,{event:e||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),[4,this.currentTransition];case 5:return r.sent(),this.currentTransition=void 0,this.focusDescendantOnPresent&&(0,c.j)(this.el,this.el),[2]}}))}))},e.prototype.dismiss=function(e,t,o){return void 0===o&&(o=!0),(0,r.mG)(this,void 0,void 0,(function(){var n,i,a,p,d;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:r.sent(),r.label=2;case 2:return n=this,i=n.destroyKeyboardInteraction,a=n.destroyDismissInteraction,o&&this.parentPopover&&this.parentPopover.dismiss(e,t,o),this.currentTransition=(0,c.f)(this,e,t,"popoverLeave",q,z,this.event),[4,this.currentTransition];case 3:return p=r.sent(),p?(i&&(i(),this.destroyKeyboardInteraction=void 0),a&&(a(),this.destroyDismissInteraction=void 0),d=this.getDelegate().delegate,[4,(0,s.d)(d,this.usersElement)]):[3,5];case 4:r.sent(),r.label=5;case 5:return this.currentTransition=void 0,[2,p]}}))}))},e.prototype.getParentPopover=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return[2,this.parentPopover]}))}))},e.prototype.onDidDismiss=function(){return(0,c.g)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return(0,c.g)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=this,o=(0,i.b)(this),r=this,s=r.onLifecycle,a=r.popoverId,c=r.parentPopover,d=r.dismissOnSelect,l=r.side,u=r.arrow,v=r.htmlAttributes,h=(0,i.a)("desktop"),f=u&&!c;return(0,n.h)(n.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},v,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:a,class:Object.assign(Object.assign({},(0,p.g)(this.cssClass)),(e={},e[o]=!0,e["popover-translucent"]=this.translucent,e["overlay-hidden"]=!0,e["popover-desktop"]=h,e["popover-side-".concat(l)]=!0,e["popover-nested"]=!!c,e)),onIonPopoverDidPresent:s,onIonPopoverWillPresent:s,onIonPopoverWillDismiss:s,onIonPopoverDidDismiss:s,onIonBackdropTap:this.onBackdropTap}),!c&&(0,n.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,n.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:d?function(){return t.dismiss()}:void 0},f&&(0,n.h)("div",{class:"popover-arrow",part:"arrow"}),(0,n.h)("div",{class:"popover-content",part:"content"},(0,n.h)("slot",null))))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,n.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}},enumerable:!1,configurable:!0}),e}(),H={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},F=0;V.style={ios:B,md:j}},2341:function(e,t,o){o.r(t),o.d(t,{c:function(){return i},g:function(){return a},h:function(){return n},o:function(){return p}});var r=o(655),n=function(e,t){return null!==t.closest(e)},i=function(e,t){var o;return"string"===typeof e&&e.length>0?Object.assign((o={"ion-color":!0},o["ion-color-".concat(e)]=!0,o),t):t},s=function(e){if(void 0!==e){var t=Array.isArray(e)?e:e.split(" ");return t.filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e}))}return[]},a=function(e){var t={};return s(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,p=function(e,t,o,n){return(0,r.mG)(void 0,void 0,void 0,(function(){var i;return(0,r.Jh)(this,(function(r){return null!=e&&"#"!==e[0]&&!c.test(e)&&(i=document.querySelector("ion-router"),i)?(null!=t&&t.preventDefault(),[2,i.push(e,o,n)]):[2,!1]}))}))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */}}]);
//# sourceMappingURL=6560.b0683fd8.js.map