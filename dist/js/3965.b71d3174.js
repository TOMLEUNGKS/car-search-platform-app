"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[3965,4795],{4795:function(t,e,n){n.r(e),n.d(e,{C:function(){return a},a:function(){return r},d:function(){return s}});var i=n(655),o=n(2481),r=function(t,e,n,r,s,a){return(0,i.mG)(void 0,void 0,void 0,(function(){var c,u;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:if(t)return[2,t.attachViewToDom(e,n,s,r)];if(!a&&"string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"===typeof n?null===(c=e.ownerDocument)||void 0===c?void 0:c.createElement(n):n,r&&r.forEach((function(t){return u.classList.add(t)})),s&&Object.assign(u,s),e.appendChild(u),[4,new Promise((function(t){return(0,o.c)(u,t)}))];case 1:return i.sent(),[2,u]}}))}))},s=function(t,e){if(e){if(t){var n=e.parentElement;return t.removeViewFromDom(n,e)}e.remove()}return Promise.resolve()},a=function(){var t,e,n=function(n,r,s,a){return void 0===s&&(s={}),void 0===a&&(a=[]),(0,i.mG)(void 0,void 0,void 0,(function(){var c,u,l,h,d;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return t=n,r?(l="string"===typeof r?null===(c=t.ownerDocument)||void 0===c?void 0:c.createElement(r):r,a.forEach((function(t){return l.classList.add(t)})),Object.assign(l,s),t.appendChild(l),[4,new Promise((function(t){return(0,o.c)(l,t)}))]):[3,2];case 1:return i.sent(),[3,3];case 2:t.children.length>0&&(h=null===(u=t.ownerDocument)||void 0===u?void 0:u.createElement("div"),a.forEach((function(t){return h.classList.add(t)})),h.append.apply(h,t.children),t.appendChild(h)),i.label=3;case 3:return d=document.querySelector("ion-app")||document.body,e=document.createComment("ionic teleport"),t.parentNode.insertBefore(e,t),d.appendChild(t),[2,t]}}))}))},r=function(){return t&&e&&(e.parentNode.insertBefore(t,e),e.remove()),Promise.resolve()};return{attachViewToDom:n,removeViewFromDom:r}}},3965:function(t,e,n){n.r(e),n.d(e,{ion_tab:function(){return a},ion_tabs:function(){return u}});var i=n(655),o=n(773),r=n(4795),s=":host(.tab-hidden){display:none !important}",a=function(){function t(t){(0,o.r)(this,t),this.loaded=!1,this.active=!1}return t.prototype.componentWillLoad=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return this.active?[4,this.setActive()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},t.prototype.setActive=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}}))}))},t.prototype.changeActive=function(t){t&&this.prepareLazyLoaded()},t.prototype.prepareLazyLoaded=function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,r.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)},t.prototype.render=function(){var t=this,e=t.tab,n=t.active,i=t.component;return(0,o.h)(o.H,{role:"tabpanel","aria-hidden":n?null:"true","aria-labelledby":"tab-button-".concat(e),class:{"ion-page":void 0===i,"tab-hidden":!n}},(0,o.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{active:["changeActive"]}},enumerable:!1,configurable:!0}),t}();a.style=s;var c=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}",u=function(){function t(t){var e=this;(0,o.r)(this,t),this.ionNavWillLoad=(0,o.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,o.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,o.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(t){var n=t.detail,i=n.href,o=n.tab;if(e.useRouter&&void 0!==i){var r=document.querySelector("ion-router");r&&r.push(i)}else e.select(o)}}return t.prototype.componentWillLoad=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(e){switch(e.label){case 0:return this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter?[3,2]:(t=this.tabs,t.length>0?[4,this.select(t[0])]:[3,2]);case 1:e.sent(),e.label=2;case 2:return this.ionNavWillLoad.emit(),[2]}}))}))},t.prototype.componentWillRender=function(){var t=this.el.querySelector("ion-tab-bar");if(t){var e=this.selectedTab?this.selectedTab.tab:void 0;t.selectedTab=e}},t.prototype.select=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(n){switch(n.label){case 0:return e=l(this.tabs,t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 1:return n.sent(),[4,this.notifyRouter()];case 2:return n.sent(),this.tabSwitch(),[2,!0]}}))}))},t.prototype.getTab=function(t){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(e){return[2,l(this.tabs,t)]}))}))},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.setRouteId=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e,n=this;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return e=l(this.tabs,t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 1:return i.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}}]}}))}))},t.prototype.getRouteId=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t,e;return(0,i.Jh)(this,(function(n){return e=null===(t=this.selectedTab)||void 0===t?void 0:t.tab,[2,void 0!==e?{id:e,element:this.selectedTab}:void 0]}))}))},t.prototype.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))},t.prototype.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return void 0!==t&&t!==e&&!this.transitioning},Object.defineProperty(t.prototype,"tabs",{get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))},enumerable:!1,configurable:!0}),t.prototype.render=function(){return(0,o.h)(o.H,{onIonTabButtonClick:this.onTabClicked},(0,o.h)("slot",{name:"top"}),(0,o.h)("div",{class:"tabs-inner"},(0,o.h)("slot",null)),(0,o.h)("slot",{name:"bottom"}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),t}(),l=function(t,e){var n="string"===typeof e?t.find((function(t){return t.tab===e})):e;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n};u.style=c}}]);
//# sourceMappingURL=3965.b71d3174.js.map