"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[1838],{9732:function(t,e,n){function r(t){const e=t.split(" ");return e.map((t=>t[0].toUpperCase())).join("")}function l(t,e){const n=t*Math.pow(10,e+1),r=Math.floor(n/10);return n>=10*r+5?(r+1)/Math.pow(10,e):r/Math.pow(10,e)}function o(t){const e=t.split(" ");for(let r=0;r<e.length;r++)e[r]=e[r].charAt(0).toUpperCase()+e[r].slice(1);const n=e.join(" ");return n}n.d(e,{AL:function(){return o},Go:function(){return u},L6:function(){return a},OV:function(){return r},qN:function(){return l}});const a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0});function u(t,e,n,r=!1,l=!0,o=!0){const a=[];if(l&&a.push({value:null,label:"Select range"}),r)for(let u=e;u>=t;u-=n)a.push({value:u,label:u.toString()});else for(let u=t;u<=e;u+=n)a.push({value:u,label:u.toString()});return o&&a.push({value:"custom",label:"Custom input"}),[a]}},842:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(1989),l=n(6252),o=n(3577);const a={class:"fixed bottom-0 bg-gray-100 bg-opacity-80 w-full flex items-center h-20"};function u(t,e,n,u,i,s){const c=r.YG;return(0,l.wg)(),(0,l.iD)("div",a,[(0,l.Wm)(c,{class:"w-full font-semibold text-center rounded-xl px-4 h-4/5",onClick:e[0]||(e[0]=e=>t.$router.go(-1))},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.$t("Done")),1)])),_:1})])}var i=(0,l.aZ)({name:"SellDoneBtn",components:{},setup(){return{}}}),s=n(3744);const c=(0,s.Z)(i,[["render",u],["__scopeId","data-v-01a98aec"]]);var f=c},1838:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var r=n(7115),l=n(1989),o=n(6252);function a(t,e,n,r,l,a){return(0,o.WI)(t.$slots,"default",{titles:t.titles})}var u=n(244),i=(0,o.aZ)({props:["routeAttr"],async setup(t){const{getCarSellFilterOptionsByCate:e}=(0,u.Z)(),n=await e(t.routeAttr),r=n?.map((t=>t.name));return{options:n,titles:r}}}),s=n(3744);const c=(0,s.Z)(i,[["render",a]]);var f=c,p=n(4277),d=n(3468),m=n(3577);function w(t,e,n,a,u,i){const s=l.wd,c=l.yh,w=d.Z,g=p.Z,b=f,h=l.wh,_=l.q_,v=(0,o.up)("SellCarDoneBtn"),C=r.Z;return(0,o.wg)(),(0,o.j4)(C,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"mb-20"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"large",class:"pl-2 font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(t.$t(t.tilteCapitalize(t.routeAttr))),1)])),_:1})])),_:1}),(0,o._)("div",null,[((0,o.wg)(),(0,o.j4)(o.n4,null,{fallback:(0,o.w5)((()=>[(0,o.Wm)(h)])),default:(0,o.w5)((()=>[(0,o.Wm)(b,{routeAttr:t.routeAttr},{default:(0,o.w5)((({titles:e})=>[(0,o.Wm)(g,{options:e,attr:t.routeAttr},{default:(0,o.w5)((({current:t,selected:n,setValueIdx:r})=>[(0,o.Wm)(w,{title:e[t-1],selected:n,onClick:e=>r(t),class:"first:rounded-t-xl last:rounded-b-xl last:border-b-2"},null,8,["title","selected","onClick"])])),_:2},1032,["options","attr"])])),_:1},8,["routeAttr"])])),_:1}))])])),_:1}),(0,o.Wm)(v)])),_:1})}var g=n(842),b=n(2119),h=n(9732),_=(0,o.aZ)({components:{BaseBackLayout:r.Z,ListSelectItem:d.Z,SellCarDoneBtn:g.Z,SellCarFilterSelectManager:p.Z,DetailsSelectOptionManager:f},setup(){const t=(0,b.yj)(),e=t.params.attr;return{routeAttr:e,tilteCapitalize:h.AL}}});const v=(0,s.Z)(_,[["render",w]]);var C=v}}]);
//# sourceMappingURL=1838.2a622739.js.map