"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[6270,7735,2878],{7735:function(n,i,t){t.r(i),t.d(i,{I:function(){return l},a:function(){return d},b:function(){return c},c:function(){return g},d:function(){return b},f:function(){return h},g:function(){return u},i:function(){return f},p:function(){return m},r:function(){return v},s:function(){return p}});var e=t(655),r=t(2481),o=t(2878),s="ION-CONTENT",l="ion-content",c=".ion-content-scroll-host",a="".concat(l,", ").concat(c),f=function(n){return n&&n.tagName===s},u=function(n){return(0,e.mG)(void 0,void 0,void 0,(function(){return(0,e.Jh)(this,(function(i){switch(i.label){case 0:return f(n)?[4,new Promise((function(i){return(0,r.c)(n,i)}))]:[3,2];case 1:return i.sent(),[2,n.getScrollElement()];case 2:return[2,n]}}))}))},d=function(n){var i=n.querySelector(c);return i||n.querySelector(a)},h=function(n){return n.closest(a)},p=function(n,i){if(f(n)){var t=n;return t.scrollToTop(i)}return Promise.resolve(n.scrollTo({top:0,left:0,behavior:i>0?"smooth":"auto"}))},g=function(n,i,t,e){if(f(n)){var r=n;return r.scrollByPoint(i,t,e)}return Promise.resolve(n.scrollBy({top:t,left:i,behavior:e>0?"smooth":"auto"}))},m=function(n){return(0,o.a)(n,l)},b=function(n){if(f(n)){var i=n,t=i.scrollY;return i.scrollY=!1,t}return n.style.setProperty("overflow","hidden"),!0},v=function(n,i){f(n)?n.scrollY=i:n.style.removeProperty("overflow")}},2878:function(n,i,t){t.r(i),t.d(i,{a:function(){return s},b:function(){return o},p:function(){return r}});var e=t(655),r=function(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];return console.warn.apply(console,(0,e.ev)(["[Ionic Warning]: ".concat(n)],i,!1))},o=function(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];return console.error.apply(console,(0,e.ev)(["[Ionic Error]: ".concat(n)],i,!1))},s=function(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];return console.error("<".concat(n.tagName.toLowerCase(),"> must be used inside ").concat(i.join(" or "),"."))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */},6270:function(n,i,t){t.r(i),t.d(i,{ion_infinite_scroll:function(){return a},ion_infinite_scroll_content:function(){return d}});var e=t(655),r=t(773),o=t(6553),s=t(7735),l=t(2846),c="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}",a=function(){function n(n){var i=this;(0,r.r)(this,n),this.ionInfinite=(0,r.e)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var n=i.scrollEl;if(!n||!i.canStart())return 1;var t=i.el.offsetHeight;if(0===t)return 2;var e=n.scrollTop,r=n.scrollHeight,o=n.offsetHeight,s=0!==i.thrPc?o*i.thrPc:i.thrPx,l="bottom"===i.position?r-t-e-s-o:e-t-s;if(l<0){if(!i.didFire)return i.isLoading=!0,i.didFire=!0,i.ionInfinite.emit(),3}else i.didFire=!1;return 4}}return n.prototype.thresholdChanged=function(){var n=this.threshold;n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)},n.prototype.disabledChanged=function(){var n=this.disabled;n&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)},n.prototype.connectedCallback=function(){return(0,e.mG)(this,void 0,void 0,(function(){var n,i,t=this;return(0,e.Jh)(this,(function(e){switch(e.label){case 0:return n=(0,s.f)(this.el),n?(i=this,[4,(0,s.g)(n)]):((0,s.p)(this.el),[2]);case 1:return i.scrollEl=e.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&(0,r.c)((function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)})),[2]}}))}))},n.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},n.prototype.complete=function(){return(0,e.mG)(this,void 0,void 0,(function(){var n,i,t=this;return(0,e.Jh)(this,(function(e){return n=this.scrollEl,this.isLoading&&n?(this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,i=n.scrollHeight-n.scrollTop,requestAnimationFrame((function(){(0,r.f)((function(){var e=n.scrollHeight,o=e-i;requestAnimationFrame((function(){(0,r.c)((function(){n.scrollTop=o,t.isBusy=!1}))}))}))}))),[2]):[2]}))}))},n.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading},n.prototype.enableScrollEvents=function(n){this.scrollEl&&(n?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},n.prototype.render=function(){var n,i=(0,o.b)(this),t=this.disabled;return(0,r.h)(r.H,{class:(n={},n[i]=!0,n["infinite-scroll-loading"]=this.isLoading,n["infinite-scroll-enabled"]=!t,n)})},Object.defineProperty(n.prototype,"el",{get:function(){return(0,r.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(n,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),n}();a.style=c;var f="ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",u="ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",d=function(){function n(n){(0,r.r)(this,n)}return n.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var n=(0,o.b)(this);this.loadingSpinner=o.c.get("infiniteLoadingSpinner",o.c.get("spinner","ios"===n?"lines":"crescent"))}},n.prototype.render=function(){var n,i=(0,o.b)(this);return(0,r.h)(r.H,{class:(n={},n[i]=!0,n["infinite-scroll-content-".concat(i)]=!0,n)},(0,r.h)("div",{class:"infinite-loading"},this.loadingSpinner&&(0,r.h)("div",{class:"infinite-loading-spinner"},(0,r.h)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&(0,r.h)("div",{class:"infinite-loading-text",innerHTML:(0,l.s)(this.loadingText)})))},n}();d.style={ios:f,md:u}}}]);
//# sourceMappingURL=6270.0d54beb6.js.map