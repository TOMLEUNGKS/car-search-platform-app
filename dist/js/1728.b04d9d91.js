"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[1728],{7439:function(e,t,a){var n,r,l;a.d(t,{GW:function(){return r},dk:function(){return l},oK:function(){return n}}),function(e){e["Prompt"]="PROMPT",e["Camera"]="CAMERA",e["Photos"]="PHOTOS"}(n||(n={})),function(e){e["Rear"]="REAR",e["Front"]="FRONT"}(r||(r={})),function(e){e["Uri"]="uri",e["Base64"]="base64",e["DataUrl"]="dataUrl"}(l||(l={}))},6826:function(e,t,a){a.d(t,{V1:function(){return l},dk:function(){return r.dk}});var n=a(9895),r=a(7439);const l=(0,n.fo)("Camera",{web:()=>a.e(6806).then(a.bind(a,6806)).then((e=>new e.CameraWeb))})},4406:function(e,t,a){a.d(t,{fy:function(){return i}});var n,r,l=a(9895);(function(e){e["Documents"]="DOCUMENTS",e["Data"]="DATA",e["Library"]="LIBRARY",e["Cache"]="CACHE",e["External"]="EXTERNAL",e["ExternalStorage"]="EXTERNAL_STORAGE"})(n||(n={})),function(e){e["UTF8"]="utf8",e["ASCII"]="ascii",e["UTF16"]="utf16"}(r||(r={}));const i=(0,l.fo)("Filesystem",{web:()=>a.e(3176).then(a.bind(a,3176)).then((e=>new e.FilesystemWeb))})},8076:function(e,t,a){a.d(t,{$:function(){return i},Q:function(){return l}});var n=a(1989);let r;const l=async()=>{r=await n.G0.create({}),r.present()},i=async()=>{r&&r.dismiss()}},1728:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(7115),r=a(1989),l=a(6252),i=a(9963),u=a(2262),o=a(3577),c=a(7875),s=a(7724),f=a(8076),d=a(5241),p=a(6826),m=a(4406),v=a(381),w=a.n(v),b=a(2119);const y={class:"formContainer flex items-center justify-center"},h={class:"formWrapper flex flex-col items-center p-6 gap-4"},g=["onSubmit"],k=["src"],C=(0,l.Uk)("Save"),U={key:0,class:"text-red-500"};var R=(0,l.aZ)({setup(e){const{getUser:t,setUser:a}=(0,c.Z)(),n=(0,b.tv)(),v=(0,d.a)("mobile"),R=(0,u.iH)(t.value.displayName),x=(0,u.iH)(t.value.photoURL),E=(0,u.iH)(null),T=(0,u.iH)(""),_=e=>{const t=e[0],a=URL.createObjectURL(t);x.value=a,E.value=t},A=async()=>{const e=(e,t="application/octet-stream")=>fetch(`data:${t};base64,${e}`).then((e=>e.blob()));if(v){const t=await p.V1.getPhoto({quality:90,resultType:p.dk.Uri}),a=t.webPath,n=t.path,r=await m.fy.readFile({path:n}),l=await e(r.data),i=n.split("/")[n.split("/").length-1],u=new File([l],i,{lastModified:w()().unix(),type:t.format});a&&(x.value=a,E.value=u)}},L=async()=>{await(0,f.Q)();let e=x.value;E.value&&(e=await(0,s.Ti)(E.value)),await(0,s.Lj)(t.value.uid,R.value,e),await a(t.value.uid),await(0,f.$)(),n.replace("/tabs/account")};return(e,t)=>{const a=r.YG,n=r.Bs,c=r.pK;return(0,l.wg)(),(0,l.iD)("div",y,[(0,l._)("div",h,[(0,l._)("form",{class:"flex flex-col gap-3 items-center",onSubmit:(0,i.iM)(L,["prevent"])},[(0,l.Wm)(n,{class:"bg-gray-200 rounded-full mx-4 w-32 h-32 relative cursor-pointer flex"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:x.value||"assets/icon/account-user.svg",class:"p-0 rounded-full object-cover"},null,8,k),(0,l.Wm)(a,{onClick:A,color:"light",class:"absolute w-full h-full opacity-0 top-0"},{default:(0,l.w5)((()=>[(0,u.SU)(v)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("input",{key:0,type:"file",accept:"image/*",onChange:t[0]||(t[0]=e=>_(e.target.files))},null,32))])),_:1})])),_:1}),(0,l.Wm)(c,{class:"w-80 p-4 border-b border-b-primary",type:"text",modelValue:R.value,"onUpdate:modelValue":t[1]||(t[1]=e=>R.value=e),placeholder:"display name"},null,8,["modelValue"]),(0,l.Wm)(a,{class:"w-full",type:"submit"},{default:(0,l.w5)((()=>[C])),_:1})],40,g),T.value?((0,l.wg)(),(0,l.iD)("span",U,(0,o.zw)(T.value),1)):(0,l.kq)("",!0)])])}}});const x=R;var E=x;function T(e,t,a,r,i,u){const o=E,c=n.Z;return(0,l.wg)(),(0,l.j4)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(o)])),_:1})}var _=(0,l.aZ)({components:{BaseBackLayout:n.Z,EditContainer:E},setup(){}}),A=a(3744);const L=(0,A.Z)(_,[["render",T]]);var S=L}}]);
//# sourceMappingURL=1728.b04d9d91.js.map