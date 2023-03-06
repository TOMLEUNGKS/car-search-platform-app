"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[1790],{41:function(e,n,t){t.d(n,{Z:function(){return i}});var a=JSON.parse('[{"name_en":"Hong Kong Island","name_tc":"香港島","name_sc":"香港岛","value":"HKI","children":[{"name_en":"Western District","name_tc":"西區","name_sc":"西区","value":"WD"},{"name_en":"Sai Ying Pun","name_tc":"西營盤","name_sc":"西营盘","value":"SYP"},{"name_en":"Kennedy Town","name_tc":"堅尼地城","name_sc":"坚尼地城","value":"KNT"},{"name_en":"Sheung Wan","name_tc":"上環","name_sc":"上环","value":"SW"},{"name_en":"Central","name_tc":"中環","name_sc":"中环","value":"CE"},{"name_en":"Admiralty","name_tc":"金鐘","name_sc":"金钟","value":"AD"},{"name_en":"Wan Chai","name_tc":"灣仔","name_sc":"湾仔","value":"WC"},{"name_en":"Causeway Bay","name_tc":"銅鑼灣","name_sc":"铜锣湾","value":"CWB"},{"name_en":"Tin Hau","name_tc":"天后","name_sc":"天后","value":"TH"},{"name_en":"Fortress Hill","name_tc":"炮台山","name_sc":"炮台山","value":"FH"},{"name_en":"North Point","name_tc":"北角","name_sc":"北角","value":"NP"},{"name_en":"Quarry Bay","name_tc":"鰂魚涌","name_sc":"鲗鱼涌","value":"QB"},{"name_en":"Tai Koo","name_tc":"太古","name_sc":"太古","value":"TK"},{"name_en":"Sai Wan Ho","name_tc":"西灣河","name_sc":"西湾河","value":"SWH"},{"name_en":"Chai Wan","name_tc":"柴灣","name_sc":"柴湾","value":"CW"}]},{"name_en":"Kowloon","name_tc":"九龍","name_sc":"九龙","value":"KL","children":[{"name_en":"Tsim Sha Tsui","name_tc":"尖沙咀","name_sc":"尖沙咀","value":"TST"},{"name_en":"Yau Ma Tei","name_tc":"油麻地","name_sc":"油麻地","value":"YMT"},{"name_en":"Mong Kok","name_tc":"旺角","name_sc":"旺角","value":"MK"},{"name_en":"Mei Foo","name_tc":"美孚","name_sc":"美孚","value":"MF"},{"name_en":"Lai Chi Kok","name_tc":"荔枝角","name_sc":"荔枝角","value":"LCK"},{"name_en":"Cheung Sha Wan","name_tc":"長沙灣","name_sc":"长沙湾","value":"CSW"},{"name_en":"Sham Shui Po","name_tc":"深水埗","name_sc":"深水埗","value":"SSP"},{"name_en":"Hung Hom","name_tc":"紅磡","name_sc":"红磡","value":"HH"},{"name_en":"To Kwa Wan","name_tc":"土瓜灣","name_sc":"土瓜湾","value":"TKW"},{"name_en":"Kowloon City","name_tc":"九龍城","name_sc":"九龙城","value":"KC"},{"name_en":"Kowloon Tong","name_tc":"九龍塘","name_sc":"九龙塘","value":"KLT"},{"name_en":"San Po Kong","name_tc":"新蒲崗","name_sc":"新蒲岗","value":"SPK"},{"name_en":"Wong Tai Sin","name_tc":"黃大仙","name_sc":"黄大仙","value":"WTS"},{"name_en":"Kowloon Bay","name_tc":"九龍灣","name_sc":"九龙湾","value":"KB"},{"name_en":"Kwun Tong","name_tc":"觀塘","name_sc":"观塘","value":"KT"}]},{"name_en":"New Territories","name_tc":"新界","name_sc":"新界","value":"NT","children":[{"name_en":"Kwai Chung","name_tc":"葵涌","name_sc":"葵涌","value":"KC"},{"name_en":"Tsing Yi","name_tc":"青衣","name_sc":"青衣","value":"TY"},{"name_en":"Tsuen Wan","name_tc":"荃灣","name_sc":"荃湾","value":"TW"},{"name_en":"Tuen Mun","name_tc":"屯門","name_sc":"屯门","value":"TM"},{"name_en":"Yuen Long","name_tc":"元朗","name_sc":"元朗","value":"YL"},{"name_en":"Fanling","name_tc":"粉嶺","name_sc":"粉岭","value":"FL"},{"name_en":"Sheung Shui","name_tc":"上水","name_sc":"上水","value":"SS"},{"name_en":"Tai Po","name_tc":"大埔","name_sc":"大埔","value":"TP"},{"name_en":"Sha Tin","name_tc":"沙田","name_sc":"沙田","value":"ST"},{"name_en":"Sai Kung","name_tc":"西貢","name_sc":"西贡","value":"SK"},{"name_en":"Tseung Kwan O","name_tc":"將軍澳","name_sc":"将军澳","value":"TKO"},{"name_en":"Tung Chung","name_tc":"東涌","name_sc":"东涌","value":"TC"}]},{"name_en":"Island District","name_tc":"離島","name_sc":"离岛","value":"I","children":[{"name_en":"Lamma Island","name_tc":"南丫島","name_sc":"南丫岛","value":"LI"},{"name_en":"Cheung Chau","name_tc":"長洲","name_sc":"长洲","value":"CC"}]}]'),l=JSON.parse('["Islands","Kwai Tsing","North","Sai Kung","Sha Tin","Tai Po","Tsuen Wan","Tuen Mun","Yuen Long","Kowloon City","Kwun Tong","Sham Shui Po","Wong Tai Sin","Yau Tsim Mong","Central and Western","Eastern","Southern","Wan Chai"]');function r(){return a}function o(){const e=a.map((e=>e.children.map((e=>({title:e.name_en,value:e.value})))));return e.flat()}function u(){const e=l.sort();return e}function i(){return{getLocations:r,getFlatLocationOptions:o,getDistrictsOptions:u}}},7456:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(2262);const l=(0,a.qj)({lastname:null,firstname:null,email:null,phoneNumber:null,secPhoneNUmber:null});function r(e,n){l[e]=n}function o(e){l[e]=null}function u(){for(const e in l)o(e)}function i(e){return l[e]}function c(e){return null==l[e]}function s(e){for(const n in e)if(c(n))return!0;return!1}const m=(0,a.qj)({invalidity:!0});function _(e){return m.invalidity=e,m.invalidity}function d(){return m.invalidity}function f(e,n){return l[e]==n}function v(){return{_carSellContact:l,setCarSellContactValue:r,getCarSellContactValue:i,resetCarSellContactValue:o,resetCarSellContactsValue:u,isNullCarSellContactByCate:c,isNullCarSellContacts:s,findValueFromCate:f,contactDataAreValid:m,contactDataInvalidity:_,returnContactInvalidity:d}}},1098:function(e,n,t){t.d(n,{Z:function(){return T}});var a=t(2262),l=t(5052),r=t(5586),o=t(7456);const{_carSellContact:u}=(0,o.Z)(),{getAuthUser:i}=(0,l.Z)(),c=(0,a.qj)({imgs:[],car_id:null,dealerID:null,"Listing Price":null,"Factory options":null,"Aftermarket options":null,Location:null,mileage:null,isRegister:!0,"Expired Date":null,"VIN number":null,"Exterior Colour":null,"Manufactor Listed Colour":null,"Interior Colour":null,"Seller type":null,services:[],Comments:null,front_rim:null,rear_rim:null,front_tyre:null,rear_tyre:null,tyre_model:null,built_year:null,transmission:null});function s(e,n){c[e]=n}function m(e){c[e]=null}function _(){for(const e in c)m(e)}function d(e){return console.log(e),c[e]}function f(e){return null==c[e]}function v(e){for(const n in e)if(f(n))return!0;return!1}const g=(0,a.qj)({invalidity:!0});function p(e){return g.invalidity=e,g.invalidity}function C(){return g.invalidity}function S(e,n){return c[e]==n}function y(){const e=new FormData;e.append("dealerID",i.value.uid),console.log(c);for(const n in c)Array.isArray(c[n])?c[n].length>0&&c[n].forEach((t=>{e.append(n,t)})):c[n]&&e.append(n,c[n]);for(const n in u)u[n]&&e.append(n,u[n]);return e}async function h(){const e=e=>[...e].reduce(((e,[n,t])=>e+("string"===typeof t?t.length:t.size)),0),n=y();console.log("formdata size %i Bytes",e(n));const t=await(0,r.Z)(!1)("/api/car-posts",{method:"POST",body:n});console.log(t);const{success:a,data:l,message:o}=t;return a?(console.log(l),c.post_id=l.post_id):console.log(o),{success:a,message:o}}async function w(e){const n=await(0,r.Z)()("/confirm-payment/"+e,{method:"POST"}),{success:t}=n;return t}function T(){return{setCarSellPostValue:s,getCarSellPostValue:d,resetCarSellPostValue:m,resetCarSellPostsValue:_,isNullCarSellPostByCate:f,isNullCarSellPosts:v,findValueFromCate:S,createPost:h,confirmPayment:w,formDataInvalidity:p,returnFormInvalidity:C}}},110:function(e,n,t){t.d(n,{Z:function(){return c}});t(6699);var a=t(9732),l=t(41);const{getFlatLocationOptions:r,getDistrictsOptions:o}=(0,l.Z)();function u(e){if(e.includes("Colour"))return i();switch(e){case"Seller type":return["Private","Dealer","Authorized distributor"];case"services":return["Test drive available","Walk in available","Appointment available","Video tour available","Finance available","Price negotiable","Certified dealer"];case"mileage":return(0,a.Go)(500,1e4,500);case"Listing Price":return(0,a.Go)(500,1e4,500);case"built_year":return(0,a.Go)(1900,(new Date).getFullYear(),1,!0);case"transmission":return["Automatic","Manual"];case"location":return o()}}function i(){return["Black","White","Grey","Silver","Gold","Red","Orange","Yellow","Green","Blue","Purple","Pink","Brown"]}function c(){return{getCarSellPostOptionsByCate:u}}},9732:function(e,n,t){function a(e){const n=e.split(" ");return n.map((e=>e[0].toUpperCase())).join("")}function l(e,n){const t=e*Math.pow(10,n+1),a=Math.floor(t/10);return t>=10*a+5?(a+1)/Math.pow(10,n):a/Math.pow(10,n)}function r(e){const n=e.split(" ");for(let a=0;a<n.length;a++)n[a]=n[a].charAt(0).toUpperCase()+n[a].slice(1);const t=n.join(" ");return t}t.d(n,{AL:function(){return r},Go:function(){return u},L6:function(){return o},OV:function(){return a},qN:function(){return l}});const o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0});function u(e,n,t,a=!1,l=!0,r=!0){const o=[];if(l&&o.push({value:null,label:"Select range"}),a)for(let u=n;u>=e;u-=t)o.push({value:u,label:u.toString()});else for(let u=e;u<=n;u+=t)o.push({value:u,label:u.toString()});return r&&o.push({value:"custom",label:"Custom input"}),[o]}},3468:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(1989),l=t(6252),r=t(3577);const o={slot:"start",class:"mr-3 text-xl"},u={class:"pr-2 mt-0.5"};function i(e,n,t,i,c,s){const m=(0,l.up)("font-awesome-icon"),_=a.Q$,d=a.Ie;return e.disabled?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(d,{key:0,button:"",detail:!1,lines:"none",class:"border-gray-200 mx-4 border-x-2 border-t-2"},{default:(0,l.w5)((()=>[(0,l._)("div",o,[e.selected?((0,l.wg)(),(0,l.j4)(m,{key:0,class:"text-primary",icon:["fas","circle-check"]})):((0,l.wg)(),(0,l.j4)(m,{key:1,icon:["far","circle"]}))]),(0,l._)("div",u,["Colour"==e.category||"Exterior Colour"==e.category||"Interior Colour"==e.category?((0,l.wg)(),(0,l.j4)(m,{key:0,icon:["fa-solid","fa-circle"],class:"fa-border",style:(0,r.j5)([{"--fa-border-color":"#e9e9e9","--fa-border-radius":"100%","--fa-border-padding":"0px","--fa-border-width":"1px"},{color:e.title}])},null,8,["style"])):(0,l.kq)("",!0)]),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("h2",null,(0,r.zw)(e.$t(e.title)),1)])),_:1}),(0,l.WI)(e.$slots,"default")])),_:3}))}var c=(0,l.aZ)({name:"ListSelectItem",props:{title:{type:String,default:"",required:!0},selected:{type:Boolean,default:!1,required:!0},category:{type:String,default:"",required:!1},disabled:{type:Boolean,default:!1}}}),s=t(3744);const m=(0,s.Z)(c,[["render",i]]);var _=m},842:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(1989),l=t(6252),r=t(3577);const o={class:"fixed bottom-0 bg-gray-100 bg-opacity-80 w-full flex items-center h-20"};function u(e,n,t,u,i,c){const s=a.YG;return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(s,{class:"w-full font-semibold text-center rounded-xl px-4 h-4/5",onClick:n[0]||(n[0]=n=>e.$router.go(-1))},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.$t("Done")),1)])),_:1})])}var i=(0,l.aZ)({name:"SellDoneBtn",components:{},setup(){return{}}}),c=t(3744);const s=(0,c.Z)(i,[["render",u],["__scopeId","data-v-01a98aec"]]);var m=s},7996:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(6252),l=t(3577);function r(e,n,t,r,o,u){return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.range,(n=>(0,a.WI)(e.$slots,"default",{key:n,current:n+1,selected:e.isSelected(n+1),setValueIdx:e.setValueIdx,getValue:e.getValue,optionList:e.optionList},(()=>[(0,a.Uk)((0,l.zw)(n),1)])))),128)}var o=t(2262),u=t(1098),i=(0,a.aZ)({name:"SellCarPostSelctManager",props:["options","attr"],setup(e){let{options:n}=(0,o.BK)(e),t=(0,o.iH)(n.value);n.value[0]instanceof Object&&(t.value=n.value.map((e=>e.title)),console.log(t.value));const{setCarSellPostValue:l,resetCarSellPostValue:r,getCarSellPostValue:i}=(0,u.Z)(),c=(0,a.Fl)((()=>i(e.attr))),s=(0,o.iH)(t.value.indexOf(c.value)+1),m=(0,a.Fl)((()=>[...Array(t.value.length).keys()])),_=e=>s.value==e,d=n=>{n!==s.value?(l(e.attr,t.value[n-1]),s.value=n):(r(e.attr),s.value=0)};return{valueIdx:s,range:m,isSelected:_,setValueIdx:d,getValue:c,optionList:t}}}),c=t(3744);const s=(0,c.Z)(i,[["render",r]]);var m=s},1790:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(7115),l=t(1989),r=t(7996),o=t(3468),u=t(6252),i=t(3577);function c(e,n,t,c,s,m){const _=l.wd,d=l.yh,f=o.Z,v=r.Z,g=l.q_,p=(0,u.up)("SellCarDoneBtn"),C=a.Z;return(0,u.wg)(),(0,u.j4)(C,null,{default:(0,u.w5)((()=>[(0,u.Wm)(g,{class:"mb-20"},{default:(0,u.w5)((()=>[(0,u.Wm)(d,null,{default:(0,u.w5)((()=>[(0,u.Wm)(_,{size:"large",class:"pl-2 font-bold"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,i.zw)(e.$t(e.tilteCapitalize(e.routeAttr))),1)])),_:1})])),_:1}),(0,u._)("div",null,[(0,u.Wm)(v,{options:e.options,attr:e.routeAttr},{default:(0,u.w5)((({current:n,selected:t,setValueIdx:a,optionList:l})=>[(0,u.Wm)(f,{title:l[n-1],selected:t,category:e.routeAttr.toString(),class:"first:rounded-t-xl last:rounded-b-xl last:border-b-2",onClick:e=>a(n)},null,8,["title","selected","category","onClick"])])),_:1},8,["options","attr"])])])),_:1}),(0,u.Wm)(p)])),_:1})}var s=t(842),m=t(2119),_=t(110),d=t(9732),f=(0,u.aZ)({components:{BaseBackLayout:a.Z,ListSelectItem:o.Z,SellCarDoneBtn:s.Z,SellCarPostSelectManager:r.Z},setup(){const e=(0,m.yj)(),{getCarSellPostOptionsByCate:n}=(0,_.Z)(),t=e.params.attr,a=n(t);return{options:a,routeAttr:t,tilteCapitalize:d.AL}}}),v=t(3744);const g=(0,v.Z)(f,[["render",c]]);var p=g}}]);
//# sourceMappingURL=1790.7a79f135.js.map