"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[8906],{244:function(a,t,e){e.d(t,{Z:function(){return u}});var n=e(9091),i=e(9450),_=e(1221),c=e(7609);const d=(0,i.o)(),r=(0,_.V)(),{getCarSellFilterValue:o}=(0,c.Z)();function l(a){switch(a){case"price range":return["Below $40,000","$40,000 - $80,000","$80,000 - $130,000","$130,000 - $200,000","$200,000 - $400,000","$400,000 - $800,000","Above $800,000"];case"brand":return p();case"model":return m();case"built year":return s()}}function p(){return n.filter((a=>"003"===a.parent_cat_id)).map((a=>({name:a.name,car_id:a.cat_id})))}async function m(){const a=o("brand"),t=n.find((t=>t.name===a));let e=d.getModelOptions(t?.cat_id);return 0==e.length&&(e=await d.fetchModel(t?.cat_id,a)),e}async function s(){const a=o("model"),t=d.getModelCatID(a);let e=r.getModelDetailsOptions(t);return 0==e.length&&(e=await r.fetchModelDetails(t,a)),e}function u(){return{getCarSellFilterOptionsByCate:l}}},9450:function(a,t,e){e.d(t,{o:function(){return _}});var n=e(9876),i=e(5586);const _=(0,n.Q_)("brandStore",{state:()=>({modelList:[]}),getters:{getModelOptions:a=>t=>{const e=a.modelList.filter((a=>a.parent_cat_id==t));return e},getModelCatID:a=>t=>{const e=a.modelList.find((a=>a.name==t));return e?.cat_id}},actions:{async fetchModel(a,t){try{const e=await(0,i.Z)()("/api/options/car-brand/"+t),{success:n,data:_,message:c}=e;let d=0;if(console.log(_),n){const t=_.map((t=>({name:t,cat_id:`${a}${d++}`,parent_cat_id:a})));return this.modelList.push(...t),t}}catch(e){console.log(e)}}}})},1221:function(a,t,e){e.d(t,{V:function(){return _}});var n=e(9876),i=e(5586);const _=(0,n.Q_)("modelStore",{state:()=>({modelDetailsList:[]}),getters:{getModelDetailsOptions:a=>t=>{const e=a.modelDetailsList.filter((a=>a.parent_cat_id==t));return e},getModelDetails:a=>t=>{const e=a.modelDetailsList.find((a=>a.name==t));return e}},actions:{async fetchModelDetails(a,t){try{const e=await(0,i.Z)()("/api/options/car-model/"+t),{success:n,data:_,message:c}=e;let d=0;if(console.log(_),n){const t=_.map((t=>({...t,cat_id:`${a}${d++}`,parent_cat_id:a})));return this.modelDetailsList.push(...t),t}}catch(e){console.log(e)}}}})},3468:function(a,t,e){e.d(t,{Z:function(){return m}});var n=e(1989),i=e(6252),_=e(3577);const c={slot:"start",class:"mr-3 text-xl"},d={class:"pr-2 mt-0.5"};function r(a,t,e,r,o,l){const p=(0,i.up)("font-awesome-icon"),m=n.Q$,s=n.Ie;return a.disabled?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(s,{key:0,button:"",detail:!1,lines:"none",class:"border-gray-200 mx-4 border-x-2 border-t-2"},{default:(0,i.w5)((()=>[(0,i._)("div",c,[a.selected?((0,i.wg)(),(0,i.j4)(p,{key:0,class:"text-primary",icon:["fas","circle-check"]})):((0,i.wg)(),(0,i.j4)(p,{key:1,icon:["far","circle"]}))]),(0,i._)("div",d,["Colour"==a.category||"Exterior Colour"==a.category||"Interior Colour"==a.category?((0,i.wg)(),(0,i.j4)(p,{key:0,icon:["fa-solid","fa-circle"],class:"fa-border",style:(0,_.j5)([{"--fa-border-color":"#e9e9e9","--fa-border-radius":"100%","--fa-border-padding":"0px","--fa-border-width":"1px"},{color:a.title}])},null,8,["style"])):(0,i.kq)("",!0)]),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("h2",null,(0,_.zw)(a.$t(a.title)),1)])),_:1}),(0,i.WI)(a.$slots,"default")])),_:3}))}var o=(0,i.aZ)({name:"ListSelectItem",props:{title:{type:String,default:"",required:!0},selected:{type:Boolean,default:!1,required:!0},category:{type:String,default:"",required:!1},disabled:{type:Boolean,default:!1}}}),l=e(3744);const p=(0,l.Z)(o,[["render",r]]);var m=p},4277:function(a,t,e){e.d(t,{Z:function(){return o}});var n=e(6252);function i(a,t,e,i,_,c){return(0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.range,(t=>(0,n.WI)(a.$slots,"default",{key:t,current:t+1,selected:a.isSelected(t+1),setValueIdx:a.setValueIdx,getValue:a.getValue}))),128)}var _=e(7609),c=(0,n.aZ)({name:"SellCarFilterSelectManager",props:["options","attr"],setup(a){const{setCarSellFilterValue:t,resetCarSellFilterValue:e,getCarSellFilterValue:i}=(0,_.Z)(),c=(0,n.Fl)((()=>i(a.attr))),d=(0,n.Fl)((()=>a.options.indexOf(c.value)+1)),r=(0,n.Fl)((()=>[...Array(a.options.length).keys()])),o=a=>d.value==a,l=n=>{n!==d.value?(t(a.attr,a.options[n-1]),"brand"==a.attr&&(e("model"),e("built year")),"model"==a.attr&&e("built year")):(e(a.attr),"brand"==a.attr&&(e("model"),e("built year")),"model"==a.attr&&e("built year"))};return{valueIdx:d,range:r,isSelected:o,setValueIdx:l,getValue:c}}}),d=e(3744);const r=(0,d.Z)(c,[["render",i]]);var o=r},9091:function(a){a.exports=JSON.parse('[{"cat_id":"030","parent_cat_id":"003","name":"Audi","checkedStr":"Choose model","attr":"model"},{"cat_id":"031","parent_cat_id":"003","checkedStr":"Choose model","name":"BMW"},{"cat_id":"032","parent_cat_id":"003","checkedStr":"Choose model","name":"Ford"},{"cat_id":"033","parent_cat_id":"003","checkedStr":"Choose model","name":"Holden"},{"cat_id":"034","parent_cat_id":"003","checkedStr":"Choose model","name":"Hyundai"},{"cat_id":"035","parent_cat_id":"003","checkedStr":"Choose model","name":"Kia"},{"cat_id":"036","parent_cat_id":"003","checkedStr":"Choose model","name":"Mazda"},{"cat_id":"037","parent_cat_id":"003","checkedStr":"Choose model","name":"Mercedes-Benz"},{"cat_id":"038","parent_cat_id":"003","checkedStr":"Choose model","name":"Mitsubishi"},{"cat_id":"039","parent_cat_id":"003","name":"Nissan"},{"cat_id":"040","parent_cat_id":"003","name":"Subaru"},{"cat_id":"041","parent_cat_id":"003","name":"Toyota"},{"cat_id":"042","parent_cat_id":"003","name":"Abarth"},{"cat_id":"043","parent_cat_id":"003","name":"AC"},{"cat_id":"044","parent_cat_id":"003","name":"Alfa Romeo"},{"cat_id":"045","parent_cat_id":"003","name":"Alpina"},{"cat_id":"046","parent_cat_id":"003","name":"Alpina"},{"cat_id":"047","parent_cat_id":"003","name":"Alpine-Renault"},{"cat_id":"048","parent_cat_id":"003","name":"Alvis"},{"cat_id":"0301","parent_cat_id":"030","name":"A1"},{"cat_id":"0302","parent_cat_id":"030","name":"A2"},{"cat_id":"0303","parent_cat_id":"030","name":"A3"},{"cat_id":"0304","parent_cat_id":"030","name":"A4"},{"cat_id":"0305","parent_cat_id":"030","name":"A5"},{"cat_id":"0306","parent_cat_id":"030","name":"A6"},{"cat_id":"0307","parent_cat_id":"030","name":"A7"},{"cat_id":"0308","parent_cat_id":"030","name":"A8"},{"cat_id":"0309","parent_cat_id":"030","name":"Cabriolet"},{"cat_id":"03010","parent_cat_id":"030","name":"e-tron"},{"cat_id":"03011","parent_cat_id":"030","name":"Fox"},{"cat_id":"030101","parent_cat_id":"0301","name":"2021 MY2021"},{"cat_id":"030102","parent_cat_id":"0301","name":"2021 Jul MY22"},{"cat_id":"030103","parent_cat_id":"0301","name":"2020 MY20"},{"cat_id":"030104","parent_cat_id":"0301","name":"2020 Jul MY21"},{"cat_id":"030105","parent_cat_id":"0301","name":"2018 MY18"},{"cat_id":"030106","parent_cat_id":"0301","name":"2017 May MY18"},{"cat_id":"030107","parent_cat_id":"0301","name":"2017 MY17"},{"cat_id":"030108","parent_cat_id":"0301","name":"2016 May MY17"},{"cat_id":"030109","parent_cat_id":"0301","name":"2016 MY16"},{"cat_id":"030110","parent_cat_id":"0301","name":"2015 May MY16"},{"cat_id":"030111","parent_cat_id":"0301","name":"2015 MY14"},{"cat_id":"030112","parent_cat_id":"0301","name":"2015 Feb MY15"},{"cat_id":"030113","parent_cat_id":"0301","name":"2014 MY14"},{"cat_id":"00401","parent_cat_id":"004","name":"SUV"},{"cat_id":"00402","parent_cat_id":"004","name":"Sedan"},{"cat_id":"00403","parent_cat_id":"004","name":"Wagon"},{"cat_id":"00404","parent_cat_id":"004","name":"Hatch"},{"cat_id":"00405","parent_cat_id":"004","name":"Coupe"},{"cat_id":"00406","parent_cat_id":"004","name":"Convertible"},{"cat_id":"00407","parent_cat_id":"004","name":"MPV"},{"cat_id":"00408","parent_cat_id":"004","name":"Van"},{"cat_id":"00409","parent_cat_id":"004","name":"Pickup truck"},{"cat_id":"00410","parent_cat_id":"004","name":"Taxi"},{"cat_id":"00412","parent_cat_id":"004","name":"Estate"},{"cat_id":"00413","parent_cat_id":"004","name":"Hatchback"},{"cat_id":"00411","parent_cat_id":"004-","name":"Others"},{"cat_id":"0081","parent_cat_id":"008","name":"New"},{"cat_id":"0082","parent_cat_id":"008","name":"Used"},{"cat_id":"0083","parent_cat_id":"008","name":"Demo"},{"cat_id":"0084","parent_cat_id":"008","name":"Authorised distributor"},{"cat_id":"0091","parent_cat_id":"009","name":"Hong Kong Island","attr":"area"},{"cat_id":"0092","parent_cat_id":"009","name":"Kowloon","attr":"area"},{"cat_id":"0093","parent_cat_id":"009","name":"New Territories","attr":"area"},{"cat_id":"0094","parent_cat_id":"009","name":"Island District","attr":"area"},{"cat_id":"009101","parent_cat_id":"0091","name":"Western District"},{"cat_id":"009102","parent_cat_id":"0091","name":"Sai Ying Pun"},{"cat_id":"009103","parent_cat_id":"0091","name":"Kennedy Town"},{"cat_id":"009104","parent_cat_id":"0091","name":"Sheung Wan"},{"cat_id":"009105","parent_cat_id":"0091","name":"Central"},{"cat_id":"009106","parent_cat_id":"0091","name":"Admiralty"},{"cat_id":"009107","parent_cat_id":"0091","name":"Wan Chai"},{"cat_id":"009108","parent_cat_id":"0091","name":"Causeway Bay"},{"cat_id":"009109","parent_cat_id":"0091","name":"Tin Hau"},{"cat_id":"009110","parent_cat_id":"0091","name":"Fortress Hill"},{"cat_id":"009111","parent_cat_id":"0091","name":"North Point"},{"cat_id":"009112","parent_cat_id":"0091","name":"Quarry Bay"},{"cat_id":"009113","parent_cat_id":"0091","name":"Tai Koo"},{"cat_id":"009114","parent_cat_id":"0091","name":"Sai Wan Ho"},{"cat_id":"009115","parent_cat_id":"0091","name":"Chai Wan"},{"cat_id":"009301","parent_cat_id":"0093","name":"Sha Tin"},{"cat_id":"0121","parent_cat_id":"012","name":"Private"},{"cat_id":"0122","parent_cat_id":"012","name":"Dealer"},{"cat_id":"0123","parent_cat_id":"012","name":"Authorized distributor"},{"cat_id":"0131","parent_cat_id":"013","name":"Test drive available"},{"cat_id":"0132","parent_cat_id":"013","name":"Walk in available"},{"cat_id":"0133","parent_cat_id":"013","name":"Appointment available"},{"cat_id":"0134","parent_cat_id":"013","name":"Video tour available"},{"cat_id":"0135","parent_cat_id":"013","name":"Finance available"},{"cat_id":"0136","parent_cat_id":"013","name":"Price negotiable"},{"cat_id":"0137","parent_cat_id":"013","name":"Certified dealer"},{"cat_id":"01401","parent_cat_id":"014","name":"Black"},{"cat_id":"01402","parent_cat_id":"014","name":"White"},{"cat_id":"01403","parent_cat_id":"014","name":"Grey"},{"cat_id":"01404","parent_cat_id":"014","name":"Silver"},{"cat_id":"01405","parent_cat_id":"014","name":"Gold"},{"cat_id":"01406","parent_cat_id":"014","name":"Red"},{"cat_id":"01407","parent_cat_id":"014","name":"Orange"},{"cat_id":"01408","parent_cat_id":"014","name":"Yellow"},{"cat_id":"01409","parent_cat_id":"014","name":"Green"},{"cat_id":"01410","parent_cat_id":"014","name":"Blue"},{"cat_id":"01411","parent_cat_id":"014","name":"Purple"},{"cat_id":"01412","parent_cat_id":"014","name":"Pink"},{"cat_id":"01413","parent_cat_id":"014","name":"Brown"},{"cat_id":"0171","parent_cat_id":"017","name":"Petrol"},{"cat_id":"0172","parent_cat_id":"017","name":"Diesel"},{"cat_id":"0173","parent_cat_id":"017","name":"Hybrid"},{"cat_id":"0174","parent_cat_id":"017","name":"Electric"},{"cat_id":"0175","parent_cat_id":"017","name":"Gas"},{"cat_id":"0176","parent_cat_id":"017-","name":"Other"},{"cat_id":"01901","parent_cat_id":"019","name":"1"},{"cat_id":"01902","parent_cat_id":"019","name":"2"},{"cat_id":"01903","parent_cat_id":"019","name":"3"},{"cat_id":"01904","parent_cat_id":"019","name":"4"},{"cat_id":"01905","parent_cat_id":"019","name":"5"},{"cat_id":"01906","parent_cat_id":"019","name":"6"},{"cat_id":"01907","parent_cat_id":"019","name":"8"},{"cat_id":"01908","parent_cat_id":"019","name":"10"},{"cat_id":"01909","parent_cat_id":"019","name":"12"},{"cat_id":"01910","parent_cat_id":"019-","name":"Other"},{"cat_id":"0201","parent_cat_id":"020","name":"Naturally aspirated"},{"cat_id":"0202","parent_cat_id":"020","name":"Turbo"},{"cat_id":"0203","parent_cat_id":"020","name":"Supercharged"},{"cat_id":"0204","parent_cat_id":"020-","name":"Other"},{"cat_id":"0211","parent_cat_id":"021","name":"Front wheel drive"},{"cat_id":"0212","parent_cat_id":"021","name":"Rear wheel drive"},{"cat_id":"0213","parent_cat_id":"021","name":"All wheel drive"},{"cat_id":"0214","parent_cat_id":"021-","name":"Other"},{"cat_id":"0221","parent_cat_id":"022","name":"Automatic transmission"},{"cat_id":"0222","parent_cat_id":"022","name":"Manual transmission"},{"cat_id":"0241","parent_cat_id":"024","name":"1"},{"cat_id":"0242","parent_cat_id":"024","name":"2"},{"cat_id":"0243","parent_cat_id":"024","name":"3"},{"cat_id":"0244","parent_cat_id":"024-","name":"Other"},{"cat_id":"0101","parent_cat_id":"010","name":"1"},{"cat_id":"0101","parent_cat_id":"010","name":"2"},{"cat_id":"0101","parent_cat_id":"010","name":"3"},{"cat_id":"0101","parent_cat_id":"010","name":"4"},{"cat_id":"0101","parent_cat_id":"010","name":"5"},{"cat_id":"0101","parent_cat_id":"010","name":"none"},{"cat_id":"0261","parent_cat_id":"026","name":"1"},{"cat_id":"0261","parent_cat_id":"026","name":"2"},{"cat_id":"0261","parent_cat_id":"026","name":"3"},{"cat_id":"0261","parent_cat_id":"026","name":"4"}]')}}]);
//# sourceMappingURL=8906.24994fb5.js.map