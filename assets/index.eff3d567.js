var re=Object.defineProperty,ce=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var X=(o,l,r)=>l in o?re(o,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[l]=r,O=(o,l)=>{for(var r in l||(l={}))_e.call(l,r)&&X(o,r,l[r]);if(J)for(var r of J(l))ue.call(l,r)&&X(o,r,l[r]);return o},z=(o,l)=>ce(o,ie(l));import{c as de,u as L,r as n,o as u,a as g,w as t,b as e,d as D,e as a,f as c,g as I,v as S,h as Z,t as ee,i as C,j as b,p as Y,k as j,l as R,F as U,m as pe,n as te,q as fe,s as he,x as me,y as ge,z as oe,A as ve,B as be,C as ke,D as ye,E as $e}from"./vendor.ac8f1dbc.js";const Ae=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const _ of i.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&d(_)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};Ae();const P=de({state:{listUrls:["https://qrcare.net/lifecycle/100010010000000/private/24135380","https://qrcare.net/authentic/100010010000000/private/241353","https://qrcare.net/lifecycle/100010010000002/private/20549215","https://qrcare.net/authentic/100010010000002/private/205492","https://qrcare.net/lifecycle/100010010000001/private/24197092","https://qrcare.net/authentic/100010010000001/private/24197092","https://qrcare.net/lifecycle/100010010020000/private/33249616","https://qrcare.net/lifecycle/100010010020002/private/19647305","https://qrcare.net/lifecycle/100010010020001/private/87957579","https://qrcare.net/lifecycle/100010010020003/private/36250781"],user:{},org:{},isAuthen:!1},getters:{userInfo({state:o}){return o.user},orgInfo({state:o}){return o.org},listUrls({state:o}){return o.listUrls},isAuthen({state:o}){return o.isAuthen},isLogged({state:o}){return o.user&&o.user.id&&o.user.id>0?o.isAuthen=!0:o.isAuthen=!1,o.isAuthen},isBoss({state:o}){return o.user.roleCode=="BOSS"},isSale({state:o}){return o.user.roleCode=="SALE"},isWorker({state:o}){return o.user.roleCode=="WORKER"}},actions:{logout({state:o}){o.user={},o.isAuthen=!1},login({state:o},l){o.user=l,o.isAuthen=!0}}});var $=(o,l)=>{for(const[r,d]of l)o[r]=d;return o};const Ce={props:{f7route:Object,f7router:Object},setup(){return{isAuthen:L("isAuthen"),login:()=>{P.dispatch("login")},logout:()=>{P.dispatch("logout")}}},methods:{changeStatus(){this.isAuthen?this.logout():this.login()}},async created(){}},xe=a("QRCare VN"),qe=a("QRCare VN"),we=c("p",null,"\u0110\xE2y l\xE0 Trang ch\u01B0a \u0111\u0103ng nh\u1EADp c\u1EE7a \u1EE9ng d\u1EE5ng QRCare",-1),Ee=a("\u0110\u0103ng nh\u1EADp"),De=a("QRLogin"),Te=a("changeStatus"),Re=a("Danh s\xE1ch Th\u1EBB Thi\u1EBFt b\u1ECB"),Ue=a("Danh s\xE1ch Th\u1EBB T\xE0i s\u1EA3n "),Ie=a("Danh s\xE1ch Th\u1EBB s\u1EA3n ph\u1EA9m"),Qe=a("Danh s\xE1ch Th\u1EBB tr\xEAn Th\xF9ng s\u1EA3n ph\u1EA9m");function Se(o,l,r,d,s,i){const _=n("f7-link"),h=n("f7-nav-left"),m=n("f7-nav-title"),p=n("f7-nav-title-large"),f=n("f7-navbar"),k=n("f7-block"),A=n("f7-block-title"),y=n("f7-button"),w=n("f7-row"),x=n("f7-list-item"),q=n("f7-list"),E=n("f7-page");return u(),g(E,{name:"home"},{default:t(()=>[e(f,{sliding:!1},{default:t(()=>[d.isAuthen?(u(),g(h,{key:0},{default:t(()=>[e(_,{"icon-ios":"f7:menu","icon-aurora":"f7:menu","icon-md":"material:menu","panel-open":"left"})]),_:1})):D("",!0),e(m,{sliding:""},{default:t(()=>[xe]),_:1}),e(p,null,{default:t(()=>[qe]),_:1})]),_:1}),e(k,{strong:""},{default:t(()=>[we]),_:1}),e(A,null,{default:t(()=>[Ee]),_:1}),e(k,{strong:""},{default:t(()=>[e(w,null,{default:t(()=>[e(y,{fill:"",raised:"",href:"/login/"},{default:t(()=>[De]),_:1}),e(y,{fill:"",raised:"",onClick:i.changeStatus},{default:t(()=>[Te]),_:1},8,["onClick"])]),_:1})]),_:1}),e(A,null,{default:t(()=>[Re]),_:1}),e(q,null,{default:t(()=>[e(x,{link:"/d/100010010200184/p/62537836",title:"ACTIVE"}),e(x,{link:"/d/100010010200001/p/27975695",title:"GENERATED"})]),_:1}),e(A,null,{default:t(()=>[Ue]),_:1}),e(q,null,{default:t(()=>[e(x,{link:"/a/100010010200184/p/62537836",title:"ACTIVE"})]),_:1}),e(A,null,{default:t(()=>[Ie]),_:1}),e(q,null,{default:t(()=>[e(x,{link:"/p/100010010200184/p/62537836",title:"ACTIVE"}),e(x,{link:"/p/100010010200184/p/62537836",title:"ACTIVE"})]),_:1}),e(A,null,{default:t(()=>[Qe]),_:1}),e(q,null,{default:t(()=>[e(x,{link:"/pb/100010010200184/p/62537836",title:"ACTIVE"}),e(x,{link:"/pb/100010010200184/p/62537836",title:"ACTIVE"})]),_:1})]),_:1})}var Be=$(Ce,[["render",Se]]);const Le=I({name:"QrCaptureExample",components:{QrCapture:S.exports.QrCapture},setup(){const o=Z({data:null});function l(r){console.log("QrCapture",r),o.data=r}return z(O({},ee(o)),{onDecode:l})}}),Pe=c("div",{class:"mb"}," Qr Capture ",-1),Ve={class:"result"};function Ne(o,l,r,d,s,i){const _=n("qr-capture",!0);return u(),C("div",null,[Pe,e(_,{onDecode:o.onDecode,class:"mb"},null,8,["onDecode"]),c("div",Ve," Result: "+b(o.data),1)])}var Fe=$(Le,[["render",Ne]]);const Oe=I({name:"QrStreamExample",components:{QrStream:S.exports.QrStream},setup(){const o=Z({data:null});function l(r){console.log("QrStream",r),o.data=r}return z(O({},ee(o)),{onDecode:l})}}),ne=o=>(Y("data-v-58f255be"),o=o(),j(),o),ze=ne(()=>c("div",{class:"mb"}," Qr Stream ",-1)),Ye={class:"center stream"},je=ne(()=>c("div",{style:{color:"red"},class:"frame"},null,-1)),Me={class:"result"};function Ge(o,l,r,d,s,i){const _=n("qr-stream",!0);return u(),C("div",null,[ze,c("div",Ye,[e(_,{onDecode:o.onDecode,class:"mb"},{default:t(()=>[je]),_:1},8,["onDecode"])]),c("div",Me," Result: "+b(o.data),1)])}var Ke=$(Oe,[["render",Ge],["__scopeId","data-v-58f255be"]]);const He=I({name:"QrDropzoneExample",components:{QrDropzone:S.exports.QrDropzone},setup(){function o(l){this.data=l}return{onDecode:o}},data(){return{data:""}}}),We=o=>(Y("data-v-18427151"),o=o(),j(),o),Je=We(()=>c("div",{class:"mb"}," Qr Dropzone ",-1)),Xe=a(" Drop image here. "),Ze={class:"result"};function et(o,l,r,d,s,i){const _=n("qr-dropzone",!0);return u(),C("div",null,[Je,e(_,{class:"dropzone mb",onDecode:o.onDecode},{default:t(()=>[Xe]),_:1},8,["onDecode"]),c("div",Ze," Result: "+b(o.data),1)])}var tt=$(He,[["render",et],["__scopeId","data-v-18427151"]]);const ot=I({components:{QrCaptureExample:Fe,QrStreamExample:Ke,QrDropzoneExample:tt}}),nt={class:"reader"};function lt(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("qr-stream-example"),m=n("qr-capture-example"),p=n("qr-dropzone-example"),f=n("f7-page");return u(),g(f,{name:"about"},{default:t(()=>[e(_,{title:"About","back-link":"Back"}),c("div",nt,[e(h,{class:"pb"}),e(m,{class:"pb"}),e(p,{class:"pb"})])]),_:1})}var st=$(ot,[["render",lt],["__scopeId","data-v-eb5ca998"]]);const at={},rt=a("Form Example"),ct=c("option",null,"Male",-1),it=c("option",null,"Female",-1),_t=a("Buttons"),ut=a("Button"),dt=a("Fill"),pt=a("Raised"),ft=a("Raised Fill"),ht=a("Round"),mt=a("Round Fill"),gt=a("Outline"),vt=a("Outline Round"),bt=a("Small"),kt=a("Small Round"),yt=a("Small"),$t=a("Small Round"),At=a("Large"),Ct=a("Large Fill"),xt=a("Large Red"),qt=a("Large Green"),wt=a("Checkbox group"),Et=a("Radio buttons group");function Dt(o,l){const r=n("f7-navbar"),d=n("f7-block-title"),s=n("f7-list-input"),i=n("f7-toggle"),_=n("f7-list-item"),h=n("f7-range"),m=n("f7-list"),p=n("f7-button"),f=n("f7-row"),k=n("f7-block"),A=n("f7-page");return u(),g(A,{name:"form"},{default:t(()=>[e(r,{title:"Form","back-link":"Back"}),e(d,null,{default:t(()=>[rt]),_:1}),e(m,{"no-hairlines-md":""},{default:t(()=>[e(s,{label:"Name",type:"text",placeholder:"Your name"}),e(s,{label:"E-mail",type:"email",placeholder:"E-mail"}),e(s,{label:"URL",type:"url",placeholder:"URL"}),e(s,{label:"Password",type:"password",placeholder:"Password"}),e(s,{label:"Phone",type:"tel",placeholder:"Phone"}),e(s,{label:"Gender",type:"select"},{default:t(()=>[ct,it]),_:1}),e(s,{label:"Birth date",type:"date",placeholder:"Birth day",defaultValue:"2014-04-30"}),e(_,{title:"Toggle"},{after:t(()=>[e(i)]),_:1}),e(s,{label:"Range",input:!1},{input:t(()=>[e(h,{value:50,min:0,max:100,step:1})]),_:1}),e(s,{type:"textarea",label:"Textarea",placeholder:"Bio"}),e(s,{type:"textarea",label:"Resizable",placeholder:"Bio",resizable:""})]),_:1}),e(d,null,{default:t(()=>[_t]),_:1}),e(k,{strong:""},{default:t(()=>[e(f,{tag:"p"},{default:t(()=>[e(p,{class:"col"},{default:t(()=>[ut]),_:1}),e(p,{class:"col",fill:""},{default:t(()=>[dt]),_:1})]),_:1}),e(f,{tag:"p"},{default:t(()=>[e(p,{class:"col",raised:""},{default:t(()=>[pt]),_:1}),e(p,{class:"col",raised:"",fill:""},{default:t(()=>[ft]),_:1})]),_:1}),e(f,{tag:"p"},{default:t(()=>[e(p,{class:"col",round:""},{default:t(()=>[ht]),_:1}),e(p,{class:"col",round:"",fill:""},{default:t(()=>[mt]),_:1})]),_:1}),e(f,{tag:"p"},{default:t(()=>[e(p,{class:"col",outline:""},{default:t(()=>[gt]),_:1}),e(p,{class:"col",round:"",outline:""},{default:t(()=>[vt]),_:1})]),_:1}),e(f,{tag:"p"},{default:t(()=>[e(p,{class:"col",small:"",outline:""},{default:t(()=>[bt]),_:1}),e(p,{class:"col",small:"",round:"",outline:""},{default:t(()=>[kt]),_:1})]),_:1}),e(f,{tag:"p"},{default:t(()=>[e(p,{class:"col",small:"",fill:""},{default:t(()=>[yt]),_:1}),e(p,{class:"col",small:"",round:"",fill:""},{default:t(()=>[$t]),_:1})]),_:1}),e(f,{tag:"p"},{default:t(()=>[e(p,{class:"col",large:"",raised:""},{default:t(()=>[At]),_:1}),e(p,{class:"col",large:"",fill:"",raised:""},{default:t(()=>[Ct]),_:1})]),_:1}),e(f,{tag:"p"},{default:t(()=>[e(p,{class:"col",large:"",fill:"",raised:"",color:"red"},{default:t(()=>[xt]),_:1}),e(p,{class:"col",large:"",fill:"",raised:"",color:"green"},{default:t(()=>[qt]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[wt]),_:1}),e(m,null,{default:t(()=>[e(_,{checkbox:"",name:"my-checkbox",value:"Books",title:"Books"}),e(_,{checkbox:"",name:"my-checkbox",value:"Movies",title:"Movies"}),e(_,{checkbox:"",name:"my-checkbox",value:"Food",title:"Food"})]),_:1}),e(d,null,{default:t(()=>[Et]),_:1}),e(m,null,{default:t(()=>[e(_,{radio:"",name:"radio",value:"Books",title:"Books"}),e(_,{radio:"",name:"radio",value:"Movies",title:"Movies"}),e(_,{radio:"",name:"radio",value:"Food",title:"Food"})]),_:1})]),_:1})}var Tt=$(at,[["render",Dt]]);const Rt={props:{f7route:Object,f7router:Object}},Ut=c("b",null,"Url:",-1),It=c("b",null,"Path:",-1),Qt=c("b",null,"Hash:",-1),St=c("b",null,"Params:",-1),Bt=c("b",null,"Query:",-1),Lt=c("b",null,"Route:",-1),Pt=a("Go back via Router API");function Vt(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("f7-block"),m=n("f7-link"),p=n("f7-page");return u(),g(p,null,{default:t(()=>[e(_,{title:"Dynamic Route","back-link":"Back"}),e(h,{strong:""},{default:t(()=>[c("ul",null,[c("li",null,[Ut,a(" "+b(r.f7route.url),1)]),c("li",null,[It,a(" "+b(r.f7route.path),1)]),c("li",null,[Qt,a(" "+b(r.f7route.hash),1)]),c("li",null,[St,c("ul",null,[(u(!0),C(U,null,R(r.f7route.params,(f,k)=>(u(),C("li",{key:k},[c("b",null,b(k)+":",1),a(" "+b(f),1)]))),128))])]),c("li",null,[Bt,c("ul",null,[(u(!0),C(U,null,R(r.f7route.query,(f,k)=>(u(),C("li",{key:k},[c("b",null,b(k)+":",1),a(" "+b(f),1)]))),128))])]),c("li",null,[Lt,a(" "+b(r.f7route.route.path),1)])])]),_:1}),e(h,{strong:""},{default:t(()=>[e(m,{onClick:l[0]||(l[0]=f=>r.f7router.back())},{default:t(()=>[Pt]),_:1})]),_:1})]),_:1})}var Nt=$(Rt,[["render",Vt]]);const Ft={props:{user:Object}};function Ot(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("f7-block"),m=n("f7-list-item"),p=n("f7-list"),f=n("f7-page");return u(),g(f,null,{default:t(()=>[e(_,{title:`${r.user.firstName} ${r.user.lastName}`,"back-link":"Back"},null,8,["title"]),e(h,{strong:""},{default:t(()=>[a(b(r.user.about),1)]),_:1}),e(p,null,{default:t(()=>[(u(!0),C(U,null,R(r.user.links,(k,A)=>(u(),g(m,{key:A,link:k.url,title:k.title,external:"",target:"_blank"},null,8,["link","title"]))),128))]),_:1})]),_:1})}var zt=$(Ft,[["render",Ot]]);const Yt={},jt=c("p",null,"Sorry",-1),Mt=c("p",null,"Requested content not found.",-1);function Gt(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("f7-block"),m=n("f7-page");return u(),g(m,null,{default:t(()=>[e(_,{title:"Not found","back-link":"Back"}),e(h,{strong:""},{default:t(()=>[jt,Mt]),_:1})]),_:1})}var Kt=$(Yt,[["render",Gt]]);const Ht={props:{f7route:Object,f7router:Object},setup(){return{isAuthen:L("isAuthen")}},data(){return{enablePopup:{editDevice:!1,editUser:!1},listSupplier:[],qrid:{},history:[],org:{}}},computed:{isEdit(){return this.isAuthen},isActive(){return this.qrid.status=="QRID_STATUS.ACTIVE"},hasData(){return this.qrid.title&&this.qrid.ownerName}},methods:{login(){this.f7router.navigate("/login/")},getActivityName(o){return console.log("getActivityName",o.type,o.status),o.type==="ACTIVITY.QR_REQUEST"&&o.status==="CREATED"||o.type==="ACTIVITY.QRTASK"&&o.status==="CONFIRMED"||o.type==="ACTIVITY.QR_REQUEST"&&o.status==="CREATED"?"Y\xEAu c\u1EA7u \u0111\xE3 g\u1EEDi":"Y\xEAu c\u1EA7u "+o.id},getActivityColor(o){return console.log("getActivityName",o.type,o.status),o.type==="ACTIVITY.QR_REQUEST"?"yellow":o.type==="ACTIVITY.QRTASK"?"blue":o.type==="ACTIVITY.QRNOTE"?"green":"white"},async addImage_TEST(){this.qrid.imageUrls.push("https://media.vinaas.com/file/6GrjrF3iA")},async editDevice(){console.log("editDevice()",this.qrid),this.enablePopup.editDevice=!1},async editUser(){console.log("editUser()",this.qrid),this.enablePopup.editUser=!1},async activeUsing(){console.log("activeUsing()"),this.qrid.status="QRID_STATUS.ACTIVE"},async getDeviceData(){try{var o=this.f7route.params.id,l=this.f7route.params.privateCode;this.$axios.defaults.baseURL="https://backend.qrcare.net/api";var r=await this.$axios.get("/QRIDs/getLifecycle",{params:{qrid:o,privateCode:l}}),d=r.data;console.log(d),d&&d.id&&(this.qrid=d,this.org=this.qrid.supporter,this.history=this.qrid.history)}catch(s){console.log("error",s)}}},async created(){await Promise.all([this.getDeviceData()])}},Wt=a("Th\u1EBB ch\u01B0a \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t"),Jt=a(" Th\xF4ng tin thi\u1EBFt b\u1ECB "),Xt=a("Edit"),Zt=["src"],eo=c("p",null,"Ch\u01B0a c\xF3 th\xF4ng tin",-1),to=a(" Ng\u01B0\u1EDDi s\u1EED d\u1EE5ng"),oo=a("Edit"),no=c("p",null,"Ch\u01B0a c\xF3 th\xF4ng tin",-1),lo=a("K\xEDch ho\u1EA1t"),so=c("p",null,"l\xFAc n\xE0y kh\xF4ng th\u1EC3 thay \u0111\u1ED5i th\xF4ng tin",-1),ao=a("L\u1ECBch s\u1EED ho\u1EA1t \u0111\u1ED9ng"),ro=["src"],co=a("Th\u1EBB \u0111\u01B0\u1EE3c ph\xE1t h\xE0nh b\u1EDFi"),io={class:"bg-color-gray",style:{height:"70px"}},_o={class:"card-content-padding"},uo=c("p",null," \u0110\u1EC3 c\u1EADp nh\u1EADt ho\u1EB7c k\xEDch ho\u1EA1t Th\u1EBB, s\u1EED d\u1EE5ng t\xE0i kho\u1EA3n c\u1EE7a b\xEAn ph\xE1t h\xE0nh Th\u1EBB ",-1),po=a("Close"),fo=a("M\xF4 t\u1EA3"),ho=a("thay \u0111\u1ED5i s\u1ED1 icon tu\u1EF3 \xFD"),mo=a("Danh s\xE1ch h\xECnh \u1EA3nh"),go=["src"],vo=a("Add Image"),bo=a("C\u1EADp nh\u1EADt"),ko=a("Close"),yo=a("C\u1EADp nh\u1EADt");function $o(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("f7-card-header"),m=n("f7-card-footer"),p=n("f7-card"),f=n("f7-button"),k=n("f7-swiper-slide"),A=n("f7-swiper"),y=n("f7-card-content"),w=n("f7-block"),x=n("f7-col"),q=n("f7-row"),E=n("f7-block-title"),Q=n("f7-link"),V=n("f7-icon"),N=n("f7-fab"),B=n("f7-nav-right"),T=n("f7-list-input"),G=n("f7-list"),se=n("f7-block-header"),ae=n("f7-text-editor"),F=n("f7-page"),K=n("f7-view"),H=n("f7-popup");return u(),g(F,null,{default:t(()=>[e(_,{title:"V\xF2ng \u0111\u1EDDi thi\u1EBFt b\u1ECB"}),e(p,{"bg-color":i.isActive?"blue":"red"},{default:t(()=>[e(h,null,{default:t(()=>[a("ID: "+b(r.f7route.params.id),1)]),_:1}),i.isActive?D("",!0):(u(),g(m,{key:0},{default:t(()=>[Wt]),_:1}))]),_:1},8,["bg-color"]),e(p,null,{default:t(()=>[e(h,null,{default:t(()=>[Jt,!i.isActive&&i.isEdit?(u(),g(f,{key:0,"popup-open":"#edit-device"},{default:t(()=>[Xt]),_:1})):D("",!0)]),_:1}),s.qrid.title?(u(),g(y,{key:0},{default:t(()=>[c("p",null,b(s.qrid.title),1),c("p",null,b(s.qrid.description),1),e(A,{speed:500,slidesPerView:2,spaceBetween:10},{default:t(()=>[(u(!0),C(U,null,R(s.qrid.imageUrls,v=>(u(),g(k,{key:v},{default:t(()=>[c("img",{class:"small",src:v},null,8,Zt)]),_:2},1024))),128))]),_:1})]),_:1})):(u(),g(y,{key:1},{default:t(()=>[eo]),_:1}))]),_:1}),e(p,null,{default:t(()=>[e(h,null,{default:t(()=>[to,!i.isActive&&i.isEdit?(u(),g(f,{key:0,"popup-open":"#edit-user"},{default:t(()=>[oo]),_:1})):D("",!0)]),_:1}),s.qrid.ownerName?(u(),g(y,{key:0},{default:t(()=>[c("p",null,b(s.qrid.ownerName),1),c("p",null,b(s.qrid.ownerAddress),1)]),_:1})):(u(),g(y,{key:1},{default:t(()=>[no]),_:1}))]),_:1}),!i.isActive&&i.hasData?(u(),g(w,{key:0},{default:t(()=>[e(f,{fill:"",href:"/login/"},{default:t(()=>[lo]),_:1}),so]),_:1})):D("",!0),e(h,null,{default:t(()=>[ao]),_:1}),(u(!0),C(U,null,R(s.qrid.history,v=>(u(),g(p,{key:v.id},{default:t(()=>[e(h,{"bg-color":i.getActivityColor(v),olor:"black"},{default:t(()=>[a(b(v.type),1)]),_:2},1032,["bg-color"]),e(y,null,{default:t(()=>[c("p",null,b(v.title),1),e(q,{"no-gap":""},{default:t(()=>[(u(!0),C(U,null,R(v.imageUrls,W=>(u(),g(x,{width:"50",key:W},{default:t(()=>[c("img",{width:"100",src:W},null,8,ro)]),_:2},1024))),128))]),_:2},1024),c("p",null,b(v.modified),1)]),_:2},1024)]),_:2},1024))),128)),e(E,null,{default:t(()=>[co]),_:1}),e(p,{expandable:"",style:{height:"70px"}},{default:t(()=>[e(y,{padding:!1},{default:t(()=>[c("div",io,[e(y,{"text-color":"white",class:"display-block"},{default:t(()=>[a(b(s.org.name),1)]),_:1}),e(Q,{"card-close":"",color:"white",class:"card-opened-fade-in",style:{position:"absolute",right:"15px",top:"15px"},"icon-f7":"xmark_circle_fill"})]),c("div",_o,[c("p",null,"\u0110\u1ECBa ch\u1EC9: "+b(s.org.address),1)])]),_:1})]),_:1}),!i.isActive&&!i.isEdit?(u(),g(w,{key:1},{default:t(()=>[uo]),_:1})):D("",!0),!i.isActive&&!i.isEdit?(u(),g(N,{key:2,position:"center-bottom",text:"\u0110\u0103ng nh\u1EADp",color:"red",onClick:l[0]||(l[0]=v=>i.login())},{default:t(()=>[e(V,{ios:"f7:plus",aurora:"f7:plus",md:"material:add"})]),_:1})):D("",!0),e(H,{id:"edit-device",opened:s.enablePopup.editDevice,"onUpdate:opened":l[4]||(l[4]=v=>s.enablePopup.editDevice=v)},{default:t(()=>[e(K,null,{default:t(()=>[e(F,null,{default:t(()=>[e(_,{title:"C\u1EADp nh\u1EADt thi\u1EBFt b\u1ECB"},{default:t(()=>[e(B,null,{default:t(()=>[e(Q,{"popup-close":""},{default:t(()=>[po]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(G,null,{default:t(()=>[e(T,{label:"T\xEAn thi\u1EBFt b\u1ECB",type:"text",placeholder:"Enter text...","clear-button":"",value:s.qrid.title,"onUpdate:value":l[1]||(l[1]=v=>s.qrid.title=v)},null,8,["value"])]),_:1})]),_:1}),e(E,null,{default:t(()=>[fo]),_:1}),e(se,null,{default:t(()=>[ho]),_:1}),e(ae,{placeholder:"Enter text...",buttons:[["bold","italic","underline","strikeThrough"],["orderedList","unorderedList"]],value:s.qrid.description,"onUpdate:value":l[2]||(l[2]=v=>s.qrid.description=v),"onTexteditor:change":l[3]||(l[3]=v=>s.qrid.description=v)},null,8,["value"]),e(w,null,{default:t(()=>[e(E,null,{default:t(()=>[mo]),_:1}),e(q,{"no-gap":""},{default:t(()=>[(u(!0),C(U,null,R(s.qrid.imageUrls,v=>(u(),g(x,{width:"50",key:v},{default:t(()=>[c("img",{width:"100",src:v},null,8,go)]),_:2},1024))),128))]),_:1}),e(f,{onClick:i.addImage_TEST},{default:t(()=>[vo]),_:1},8,["onClick"])]),_:1}),e(f,{fill:"",onClick:i.editDevice},{default:t(()=>[bo]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["opened"]),e(H,{id:"edit-user",opened:s.enablePopup.editUser,"onUpdate:opened":l[7]||(l[7]=v=>s.enablePopup.editUser=v)},{default:t(()=>[e(K,null,{default:t(()=>[e(F,null,{default:t(()=>[e(_,{title:"Th\xF4ng tin ng\u01B0\u1EDDi s\u1EED d\u1EE5ng"},{default:t(()=>[e(B,null,{default:t(()=>[e(Q,{"popup-close":""},{default:t(()=>[ko]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(G,{"no-hairlines-md":""},{default:t(()=>[e(T,{label:"ownerName",type:"text",placeholder:"Your name",value:s.qrid.ownerName,"onUpdate:value":l[5]||(l[5]=v=>s.qrid.ownerName=v)},null,8,["value"]),e(T,{label:"ownerAddress",type:"textarea",placeholder:"\u0111\u1ECBa ch\u1EC9",value:s.qrid.ownerAddress,"onUpdate:value":l[6]||(l[6]=v=>s.qrid.ownerAddress=v)},null,8,["value"])]),_:1})]),_:1}),e(f,{fill:"",onClick:i.editUser},{default:t(()=>[yo]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["opened"])]),_:1})}var Ao=$(Ht,[["render",$o]]);const Co={props:{f7route:Object,f7router:Object}};function xo(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("f7-block"),m=n("f7-page");return u(),g(m,null,{default:t(()=>[e(_,{title:"V\xF2ng \u0111\u1EDDi thi\u1EBFt b\u1ECB","back-link":"Back"}),e(h,null,{default:t(()=>[c("h2",null,b(r.f7route.params.id),1)]),_:1})]),_:1})}var qo=$(Co,[["render",xo]]);const wo={},Eo={color:"green"};function Do(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("f7-block"),m=n("f7-page");return u(),g(m,null,{default:t(()=>[e(_,{title:"Th\xF4ng tin Ch\xEDnh h\xE3ng","back-link":"Back"}),e(h,null,{default:t(()=>[c("h2",Eo,b(o.f7route.params.id),1)]),_:1})]),_:1})}var To=$(wo,[["render",Do]]);const Ro={},Uo={color:"green"};function Io(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("f7-block"),m=n("f7-page");return u(),g(m,null,{default:t(()=>[e(_,{title:"V\xF2ng \u0111\u1EDDi thi\u1EBFt b\u1ECB","back-link":"Back"}),e(h,null,{default:t(()=>[c("h2",Uo,b(o.f7route.params.id),1)]),_:1})]),_:1})}var Qo=$(Ro,[["render",Io]]);const So=I({name:"QrLogin",emits:["detect"],components:{QrStream:S.exports.QrStream,QrCapture:S.exports.QrCapture},data(){return{qrUrl:""}},methods:{async onDecode(o){console.log("onDecode",o),this.qrUrl=o,this.$emit("detect",o)}}}),le=o=>(Y("data-v-2e317324"),o=o(),j(),o),Bo={class:"reader"},Lo=le(()=>c("p",null,"Qu\xE9t m\xE3 QRCode tr\xEAn Th\u1EBB",-1)),Po={class:"center stream"},Vo=le(()=>c("div",{style:{color:"red"},class:"frame"},null,-1)),No={class:"result"};function Fo(o,l,r,d,s,i){const _=n("qr-stream");return u(),C("div",Bo,[Lo,c("div",null,[c("div",Po,[e(_,{onDecode:o.onDecode,class:"mb"},{default:t(()=>[Vo]),_:1},8,["onDecode"])])]),c("div",No," Result: "+b(o.qrUrl),1)])}var Oo=$(So,[["render",Fo],["__scopeId","data-v-2e317324"]]);const zo=I({props:{f7route:Object,f7router:Object},components:{QrScanOne:Oo},setup(){return{user:L("userInfo"),username:"B888.1",password:"QRcareB888.1"}},data(){const o=pe();return o.desktop?console.log("It is desktop"):console.log("It is mobile"),{qrUrl:"",device:o}},methods:{detectURl(o){console.log(o),this.qrUrl=o,this.isValidUrl()&&this.clickLogin()},async isValidUrl(o){return!0},async clickLogin(){let o={id:171,accesstoken:"vdYBumDdoGOEFa3xh60BGbAUtw9mUgKRgEOAY9CzSlQ0QVFm2DEyleba9oO5V0s5"};{let l="https://backend.qrcare.net/api/ApplicationUsers/"+o.id+"?access_token="+o.accesstoken,r=await this.$axios.get(l);console.log(r.data),P.dispatch("login",r.data),this.f7router.back()}}}}),Yo={key:0},jo=a("Cung c\u1EA5p th\xF4ng tin nh\u01B0 b\xEAn d\u01B0\u1EDBi"),Mo=a(" Li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c c\u1EA5p t\xE0i kho\u1EA3n ");function Go(o,l,r,d,s,i){const _=n("qr-scan-one"),h=n("f7-block-title"),m=n("f7-list-input"),p=n("f7-list"),f=n("f7-list-button"),k=n("f7-block-footer"),A=n("f7-page");return u(),g(A,{name:"Login Desktop"},{default:t(()=>[o.device.desktop?D("",!0):(u(),C("div",Yo,[e(_,{onDetect:o.detectURl},null,8,["onDetect"])])),c("p",null,"Url: "+b(o.qrUrl),1),e(h,null,{default:t(()=>[jo]),_:1}),e(p,{form:""},{default:t(()=>[e(m,{type:"text",name:"username",placeholder:"t\xEAn b\u1EA1n ",value:o.username,"onUpdate:value":l[0]||(l[0]=y=>o.username=y)},null,8,["value"]),e(m,{type:"password",name:"password",placeholder:"m\u1EADt kh\u1EA9u",value:o.password,"onUpdate:value":l[1]||(l[1]=y=>o.password=y)},null,8,["value"])]),_:1}),e(p,null,{default:t(()=>[e(f,{title:"\u0110\u0103ng nh\u1EADp",onClick:o.clickLogin},null,8,["onClick"]),e(k,null,{default:t(()=>[Mo]),_:1})]),_:1})]),_:1})}var Ko=$(zo,[["render",Go]]),Ho=[{path:"/",component:Be},{path:"/d/:id/p/:privateCode",component:Ao},{path:"/p/:id/p/:privateCode",component:qo},{path:"/pb/:id/p/:privateCode",component:To},{path:"/a/:id/p/:privateCode",component:Qo},{path:"/about/",component:st},{path:"/login/",component:Ko},{path:"/form/",component:Tt},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:Nt},{path:"/request-and-load/user/:userId/",async:function({router:o,to:l,resolve:r}){var d=o.app;d.preloader.show(),l.params.userId,setTimeout(function(){var s={firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]};d.preloader.hide(),r({component:zt},{props:{user:s}})},1e3)}},{path:"(.*)",component:Kt}];const Wo={setup(){const o={name:"QRCare VN",theme:"auto",view:{browserHistory:!0,browserHistorySeparator:""},store:P,routes:Ho,serviceWorker:{path:"/service-worker.js"}},l=te(""),r=te(""),d=()=>{oe.dialog.alert("Username: "+l.value+"<br>Password: "+r.value,()=>{oe.loginScreen.close()})};return fe(()=>{he(()=>{const s=L("isAuthen");s.value?console.log("home",s.value):console.log("login",s.value)})}),{f7params:o,username:l,password:r,alertLoginData:d}}},Jo=a("Left panel content goes here"),Xo=a("Right panel content goes here"),Zo=a("Close"),en=c("p",null,"Popup content goes here.",-1),tn=a("Login"),on=a("quet"),nn=a(" Some text about login information."),ln=c("br",null,null,-1),sn=a('Click "Sign In" to close Login Screen ');function an(o,l,r,d,s,i){const _=n("f7-navbar"),h=n("f7-block"),m=n("f7-page"),p=n("f7-view"),f=n("f7-panel"),k=n("f7-link"),A=n("f7-nav-right"),y=n("f7-popup"),w=n("f7-login-screen-title"),x=n("f7-button"),q=n("f7-list-input"),E=n("f7-list"),Q=n("f7-list-button"),V=n("f7-block-footer"),N=n("f7-login-screen"),B=n("f7-app");return u(),g(B,me(ge(d.f7params)),{default:t(()=>[e(f,{left:"",cover:"","theme-dark":""},{default:t(()=>[e(p,null,{default:t(()=>[e(m,null,{default:t(()=>[e(_,{title:"Left Panel"}),e(h,null,{default:t(()=>[Jo]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{right:"",reveal:"","theme-dark":""},{default:t(()=>[e(p,null,{default:t(()=>[e(m,null,{default:t(()=>[e(_,{title:"Right Panel"}),e(h,null,{default:t(()=>[Xo]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{main:"",class:"safe-areas",url:"/"}),e(y,{id:"my-popup"},{default:t(()=>[e(p,null,{default:t(()=>[e(m,null,{default:t(()=>[e(_,{title:"Popup"},{default:t(()=>[e(A,null,{default:t(()=>[e(k,{"popup-close":""},{default:t(()=>[Zo]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[en]),_:1})]),_:1})]),_:1})]),_:1}),e(N,{id:"my-login-screen"},{default:t(()=>[e(p,null,{default:t(()=>[e(m,{"login-screen":""},{default:t(()=>[e(w,null,{default:t(()=>[tn]),_:1}),e(x,{href:"/login/"},{default:t(()=>[on]),_:1}),e(E,{form:""},{default:t(()=>[e(q,{type:"text",name:"username",placeholder:"Your username",value:d.username,"onUpdate:value":l[0]||(l[0]=T=>d.username=T)},null,8,["value"]),e(q,{type:"password",name:"password",placeholder:"Your password",value:d.password,"onUpdate:value":l[1]||(l[1]=T=>d.password=T)},null,8,["value"])]),_:1}),e(E,null,{default:t(()=>[e(Q,{title:"Sign In",onClick:d.alertLoginData},null,8,["onClick"]),e(V,null,{default:t(()=>[nn,ln,sn]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},16)}var rn=$(Wo,[["render",an]]);ve.use(be);const M=ke(rn);M.config.globalProperties.$axios=ye;$e(M);M.mount("#app");
