"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[4811],{7456:function(t,e,l){l.d(e,{Z:function(){return _}});var n=l(2262);const a=(0,n.qj)({lastname:null,firstname:null,email:null,phoneNumber:null,secPhoneNUmber:null});function s(t,e){a[t]=e}function c(t){a[t]=null}function o(){for(const t in a)c(t)}function r(t){return a[t]}function u(t){return null==a[t]}function i(t){for(const e in t)if(u(e))return!0;return!1}const d=(0,n.qj)({invalidity:!0});function p(t){return d.invalidity=t,d.invalidity}function f(){return d.invalidity}function m(t,e){return a[t]==e}function _(){return{_carSellContact:a,setCarSellContactValue:s,getCarSellContactValue:r,resetCarSellContactValue:c,resetCarSellContactsValue:o,isNullCarSellContactByCate:u,isNullCarSellContacts:i,findValueFromCate:m,contactDataAreValid:d,contactDataInvalidity:p,returnContactInvalidity:f}}},1098:function(t,e,l){l.d(e,{Z:function(){return C}});var n=l(2262),a=l(5052),s=l(5586),c=l(7456);const{_carSellContact:o}=(0,c.Z)(),{getAuthUser:r}=(0,a.Z)(),u=(0,n.qj)({imgs:[],car_id:null,dealerID:null,"Listing Price":null,"Factory options":null,"Aftermarket options":null,Location:null,mileage:null,isRegister:!0,"Expired Date":null,"VIN number":null,"Exterior Colour":null,"Manufactor Listed Colour":null,"Interior Colour":null,"Seller type":null,services:[],Comments:null,front_rim:null,rear_rim:null,front_tyre:null,rear_tyre:null,tyre_model:null,built_year:null,transmission:null});function i(t,e){u[t]=e}function d(t){u[t]=null}function p(){for(const t in u)d(t)}function f(t){return console.log(t),u[t]}function m(t){return null==u[t]}function _(t){for(const e in t)if(m(e))return!0;return!1}const v=(0,n.qj)({invalidity:!0});function g(t){return v.invalidity=t,v.invalidity}function y(){return v.invalidity}function x(t,e){return u[t]==e}function b(){const t=new FormData;t.append("dealerID",r.value.uid),console.log(u);for(const e in u)Array.isArray(u[e])?u[e].length>0&&u[e].forEach((l=>{t.append(e,l)})):u[e]&&t.append(e,u[e]);for(const e in o)o[e]&&t.append(e,o[e]);return t}async function w(){const t=t=>[...t].reduce(((t,[e,l])=>t+("string"===typeof l?l.length:l.size)),0),e=b();console.log("formdata size %i Bytes",t(e));const l=await(0,s.Z)(!1)("/api/car-posts",{method:"POST",body:e});console.log(l);const{success:n,data:a,message:c}=l;return n?(console.log(a),u.post_id=a.post_id):console.log(c),{success:n,message:c}}async function h(t){const e=await(0,s.Z)()("/confirm-payment/"+t,{method:"POST"}),{success:l}=e;return l}function C(){return{setCarSellPostValue:i,getCarSellPostValue:f,resetCarSellPostValue:d,resetCarSellPostsValue:p,isNullCarSellPostByCate:m,isNullCarSellPosts:_,findValueFromCate:x,createPost:w,confirmPayment:h,formDataInvalidity:g,returnFormInvalidity:y}}},5951:function(t,e,l){l.d(e,{O:function(){return o}});var n=l(9876),a=l(5586),s=l(1098);const{getCarSellPostValue:c}=(0,s.Z)(),o=(0,n.Q_)("adPackageStore",{state:()=>({selectPackage:null,price:null,amount:null}),actions:{async fetchProducts(){const t=await(0,a.Z)()("/products"),{success:e,data:l}=t;if(e)return l},async confirmPayment(t){const e=await(0,a.Z)()("/confirm-payment/"+t,{method:"POST"}),{success:l}=e;return l},async proceedPaymemnt(){const t=c("post_id"),e=await(0,a.Z)()("/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lineItems:[{price:this.price,quantity:1}],success_url:"http://archiiii.github.io/tabs/sell-car/payment-success",cancel_url:"http://archiiii.github.io/tabs/sell-car/ad-select",amount:this.amount,post_id:t})}),{url:l,session_id:n}=e;console.log(l),window.location.replace(l)}}})},9791:function(t,e,l){l.d(e,{Z:function(){return d}});var n=l(1989),a=l(6252),s=l(3577);const c={class:"w-full flex items-center h-20"};function o(t,e,l,o,r,u){const i=n.YG;return(0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(i,{class:"w-full font-semibold text-center rounded-xl px-4 h-4/5",disabled:t.disabled,onClick:e[0]||(e[0]=e=>t.$emit("proceed"))},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.$t(t.title)),1)])),_:1},8,["disabled"])])}var r=(0,a.aZ)({name:"BaseBtn",props:{title:{type:String,required:!0},disabled:{type:Boolean}},setup(t){return{}}}),u=l(3744);const i=(0,u.Z)(r,[["render",o],["__scopeId","data-v-2c9e70f2"]]);var d=i},4811:function(t,e,l){l.r(e),l.d(e,{default:function(){return pt}});var n=l(7115),a=l(1989),s=l(6252),c=l(3577);const o={class:"w-full flex items-center h-20"};function r(t,e,l,n,r,u){const i=a.YG;return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(i,{class:"w-full font-semibold text-center rounded-xl px-4 h-4/5",disabled:t.disabled,onClick:e[0]||(e[0]=e=>t.$emit("proceed"))},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(t.title),1)])),_:1},8,["disabled"])])}var u=(0,s.aZ)({name:"SaveBtn",props:{title:{type:String,required:!0},disabled:{type:Boolean}},setup(t){return{}}}),i=l(3744);const d=(0,i.Z)(u,[["render",r],["__scopeId","data-v-4e648360"]]);var p=d,f=l(9791),m=l(2262),_=l(5951),v=(0,s.aZ)({async setup(t){let e,l;const{fetchProducts:n}=(0,_.O)(),a=([e,l]=(0,s.mv)((()=>n())),e=await e,l(),e);return a.sort(((t,e)=>e.unit_amount-t.unit_amount)),(t,e)=>(0,s.WI)(t.$slots,"default",{products:(0,m.SU)(a)})}});const g=v;var y,x=g;(function(t){t[t["premium"]=0]="premium",t[t["advanced"]=1]="advanced",t[t["standard"]=2]="standard"})(y||(y={}));var b=l(9876);const w=t=>((0,s.dD)("data-v-6c0d464c"),t=t(),(0,s.Cn)(),t),h={class:"grid grid-cols-12 w-full h-full"},C={class:"flex flex-col col-span-10 items-start normal-case pt-2 -ml-1 text-left ad-content-text"},k={class:"py-1 text-lg font-semibold"},S={class:"font-bold text-base"},P=w((()=>(0,s._)("ul",{class:"flex flex-col justify-center flex-1 list-disc px-4 mt-2 text-left pb-4"},[(0,s._)("li",{class:"mb-2"},[(0,s._)("span",null,[(0,s.Uk)("Appear in search "),(0,s._)("b",null,"results")])]),(0,s._)("li",null,[(0,s._)("span",null,[(0,s.Uk)("Weekly email with "),(0,s._)("b",null,"stats, hints & tips")])])],-1))),Z={class:"flex flex-col col-span-2 justify-end p-1 mb-1 -mx-3"},U={class:"text-2xl font-bold text-right"},D=w((()=>(0,s._)("span",{class:"text-right"},"HKD",-1))),j=w((()=>(0,s._)("div",{class:"triangle-up absolute"},null,-1)));var I=(0,s.aZ)({props:["product"],setup(t){const e=(0,_.O)(),{selectPackage:l,price:n,amount:o}=(0,b.Jk)(e);return(e,r)=>{const u=a.YG;return(0,s.wg)(),(0,s.j4)(u,{id:"standard",class:(0,c.C_)([{active:(0,m.SU)(l)==(0,m.SU)(y).standard},"h-44 sm:h-fit w-full"]),onClick:r[0]||(r[0]=e=>{l.value=(0,m.SU)(y).standard,n.value=t.product.default_price,o.value=t.product.unit_amount})},{default:(0,s.w5)((()=>[t.product?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",h,[(0,s._)("div",C,[(0,s._)("span",k,(0,c.zw)(t.product.name),1),(0,s._)("span",S,(0,c.zw)(t.product.description),1),P]),(0,s._)("div",Z,[(0,s._)("span",U,"$"+(0,c.zw)(t.product.unit_amount),1),D])]),j],64)):(0,s.kq)("",!0)])),_:1},8,["class"])}}});const W=(0,i.Z)(I,[["__scopeId","data-v-6c0d464c"]]);var B=W;const V=t=>((0,s.dD)("data-v-9ed01cf8"),t=t(),(0,s.Cn)(),t),z={class:"grid grid-cols-12 w-full h-full"},O={class:"flex flex-col col-span-10 items-start normal-case pt-2 -ml-1 text-left ad-content-text"},A={class:"py-1 text-lg font-semibold"},q={class:"font-bold text-base"},N=V((()=>(0,s._)("ul",{class:"flex flex-col justify-center flex-1 list-disc px-4 mt-2 text-left pb-4"},[(0,s._)("li",{class:"mb-2"},[(0,s._)("span",null,[(0,s.Uk)("Appear "),(0,s._)("b",null,"higher"),(0,s.Uk)(" in search results")])]),(0,s._)("li",null,[(0,s._)("span",null,[(0,s.Uk)("Advertise your car with "),(0,s._)("b",null,"video")])])],-1))),Y={class:"flex flex-col col-span-2 justify-end p-1 mb-1 -mx-3"},$={class:"text-2xl font-bold text-right"},T=V((()=>(0,s._)("span",{class:"text-right"},"HKD",-1))),E=V((()=>(0,s._)("div",{class:"triangle-up absolute"},null,-1)));var F=(0,s.aZ)({props:["product"],setup(t){const e=(0,_.O)(),{selectPackage:l,price:n,amount:o}=(0,b.Jk)(e);return(e,r)=>{const u=a.YG;return(0,s.wg)(),(0,s.j4)(u,{id:"advanced",class:(0,c.C_)([{active:(0,m.SU)(l)==(0,m.SU)(y).advanced},"h-44 sm:h-fit w-full"]),onClick:r[0]||(r[0]=e=>{l.value=(0,m.SU)(y).advanced,n.value=t.product.default_price,o.value=t.product.unit_amount})},{default:(0,s.w5)((()=>[t.product?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",z,[(0,s._)("div",O,[(0,s._)("span",A,(0,c.zw)(t.product.name),1),(0,s._)("span",q,(0,c.zw)(t.product.description),1),N]),(0,s._)("div",Y,[(0,s._)("span",$,"$"+(0,c.zw)(t.product.unit_amount),1),T])]),E],64)):(0,s.kq)("",!0)])),_:1},8,["class"])}}});const H=(0,i.Z)(F,[["__scopeId","data-v-9ed01cf8"]]);var G=H;const J=t=>((0,s.dD)("data-v-cc19f9bc"),t=t(),(0,s.Cn)(),t),K={class:"grid grid-cols-12 w-full h-full"},L={class:"flex flex-col col-span-10 items-start normal-case pt-2 -ml-1 text-left ad-content-text"},R={class:"py-1 text-lg font-semibold"},M={class:"font-bold text-base"},Q=J((()=>(0,s._)("ul",{class:"flex flex-col justify-center flex-1 list-disc px-4 mt-2 text-left pb-4"},[(0,s._)("li",{class:"mb-2"},[(0,s._)("span",null,[(0,s.Uk)("Appear "),(0,s._)("b",null,"highest"),(0,s.Uk)(" in search results")])]),(0,s._)("li",null,[(0,s._)("span",null,[(0,s.Uk)("Be on top of your category for "),(0,s._)("b",null,"30"),(0,s.Uk)(" days")])])],-1))),X={class:"flex flex-col col-span-2 justify-end p-1 mb-1 -mx-3"},tt={class:"text-2xl font-bold text-right"},et=J((()=>(0,s._)("span",{class:"text-right"},"HKD",-1))),lt=J((()=>(0,s._)("div",{class:"triangle-up absolute"},null,-1)));var nt=(0,s.aZ)({props:["product"],setup(t){const e=(0,_.O)(),{selectPackage:l,price:n,amount:o}=(0,b.Jk)(e);return(e,r)=>{const u=a.CK,i=a.YG;return(0,s.wg)(),(0,s.j4)(i,{id:"premium",class:(0,c.C_)([{active:(0,m.SU)(l)==(0,m.SU)(y).premium},"h-44 sm:h-fit w-full"]),onClick:r[0]||(r[0]=e=>{l.value=(0,m.SU)(y).premium,n.value=t.product.default_price,o.value=t.product.unit_amount})},{default:(0,s.w5)((()=>[t.product?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",K,[(0,s._)("div",L,[(0,s._)("span",R,(0,c.zw)(t.product.name),1),(0,s._)("span",M,(0,c.zw)(t.product.description),1),Q]),(0,s._)("div",X,[(0,s._)("span",tt,"$"+(0,c.zw)(t.product.unit_amount),1),et])]),lt],64)):((0,s.wg)(),(0,s.j4)(u,{key:1,animated:!0,class:"w-full h-full"}))])),_:1},8,["class"])}}});const at=(0,i.Z)(nt,[["__scopeId","data-v-cc19f9bc"]]);var st=at;const ct=(0,s.Uk)(" Select ad package "),ot=(0,s.Uk)(" Please select an ad package for promoting your car. "),rt={class:"mt-2 mx-6 text-sm font-semibold grid gap-4"};function ut(t,e,l,c,o,r){const u=a.wd,i=a.yh,d=a.Q$,m=st,_=G,v=B,g=x,y=a.wh,b=a.q_,w=f.Z,h=p,C=n.Z;return(0,s.wg)(),(0,s.j4)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{class:"pl-2 font-bold mt-4"},{default:(0,s.w5)((()=>[ct])),_:1})])),_:1}),(0,s.Wm)(d,{class:"text-sm text-gray-400 ml-6"},{default:(0,s.w5)((()=>[ot])),_:1}),(0,s._)("div",rt,[((0,s.wg)(),(0,s.j4)(s.n4,null,{fallback:(0,s.w5)((()=>[(0,s.Wm)(y)])),default:(0,s.w5)((()=>[(0,s.Wm)(g,null,{default:(0,s.w5)((({products:t})=>[(0,s.Wm)(m,{product:t[0]},null,8,["product"]),(0,s.Wm)(_,{product:t[1]},null,8,["product"]),(0,s.Wm)(v,{product:t[2]},null,8,["product"])])),_:1})])),_:1}))])])),_:1}),(0,s.Wm)(w,{title:"PROCEED TO PAYMENT",onProceed:t.proceedPaymemnt,disabled:t.disabled},null,8,["onProceed","disabled"]),(0,s.Wm)(h,{title:"SAVE DRAFT",onProceed:e[0]||(e[0]=e=>t.$router.push("payment"))})])),_:1})}var it=(0,s.aZ)({components:{BaseBackLayout:n.Z,BaseBtn:f.Z,SaveBtn:p},setup(){const t=(0,_.O)(),{proceedPaymemnt:e}=t,{selectPackage:l}=(0,b.Jk)(t);let n=(0,s.Fl)((()=>null==l.value));return{disabled:n,proceedPaymemnt:e}}});const dt=(0,i.Z)(it,[["render",ut],["__scopeId","data-v-480aec08"]]);var pt=dt}}]);
//# sourceMappingURL=4811.945261c0.js.map