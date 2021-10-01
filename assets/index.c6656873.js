import{r as o,o as h,c as $,w as t,a as e,b as n,d as l,j as E,e as b,t as v,f as C,g as O,v as V,h as x,F,i as Q,k as N,l as I,m as j,n as U,p as W,q as S,s as T,u as G,x as z,y as Y}from"./vendor.edfa43e4.js";const K=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const f of a)if(f.type==="childList")for(const _ of f.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function r(a){const f={};return a.integrity&&(f.integrity=a.integrity),a.referrerpolicy&&(f.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?f.credentials="include":a.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(a){if(a.ep)return;a.ep=!0;const f=r(a);fetch(a.href,f)}};K();var y=(s,i)=>{for(const[r,c]of i)s[r]=c;return s};const J={},X=n("QRCare VN"),Z=n("QRCare VN"),ee=n("Left Link"),te=n("Right Link"),oe=l("p",null,"Here is your blank Framework7 app. Let's see what we have here.",-1),ne=n("Navigation"),ae=n("Modals"),le=n("Popup"),se=n("Login Screen"),ie=n("Panels"),re=n("Left Panel"),ue=n("Right Panel");function ce(s,i){const r=o("f7-link"),c=o("f7-nav-left"),a=o("f7-nav-title"),f=o("f7-nav-right"),_=o("f7-nav-title-large"),g=o("f7-navbar"),p=o("f7-toolbar"),u=o("f7-block"),d=o("f7-block-title"),m=o("f7-list-item"),k=o("f7-list"),w=o("f7-button"),q=o("f7-col"),R=o("f7-row"),L=o("f7-page");return h(),$(L,{name:"home"},{default:t(()=>[e(g,{large:"",sliding:!1},{default:t(()=>[e(c,null,{default:t(()=>[e(r,{"icon-ios":"f7:menu","icon-aurora":"f7:menu","icon-md":"material:menu","panel-open":"left"})]),_:1}),e(a,{sliding:""},{default:t(()=>[X]),_:1}),e(f,null,{default:t(()=>[e(r,{"icon-ios":"f7:menu","icon-aurora":"f7:menu","icon-md":"material:menu","panel-open":"right"})]),_:1}),e(_,null,{default:t(()=>[Z]),_:1})]),_:1}),e(p,{bottom:""},{default:t(()=>[e(r,null,{default:t(()=>[ee]),_:1}),e(r,null,{default:t(()=>[te]),_:1})]),_:1}),e(u,{strong:""},{default:t(()=>[oe]),_:1}),e(d,null,{default:t(()=>[ne]),_:1}),e(k,null,{default:t(()=>[e(m,{link:"/about/",title:"About"}),e(m,{link:"/form/",title:"Form"})]),_:1}),e(d,null,{default:t(()=>[ae]),_:1}),e(u,{strong:""},{default:t(()=>[e(R,null,{default:t(()=>[e(q,{width:"50"},{default:t(()=>[e(w,{fill:"",raised:"","popup-open":"#my-popup"},{default:t(()=>[le]),_:1})]),_:1}),e(q,{width:"50"},{default:t(()=>[e(w,{fill:"",raised:"","login-screen-open":"#my-login-screen"},{default:t(()=>[se]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[ie]),_:1}),e(u,{strong:""},{default:t(()=>[e(R,null,{default:t(()=>[e(q,{width:"50"},{default:t(()=>[e(w,{fill:"",raised:"","panel-open":"left"},{default:t(()=>[re]),_:1})]),_:1}),e(q,{width:"50"},{default:t(()=>[e(w,{fill:"",raised:"","panel-open":"right"},{default:t(()=>[ue]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(m,{title:"Dynamic (Component) Route",link:"/dynamic-route/blog/45/post/125/?foo=bar#about"}),e(m,{title:"Default Route (404)",link:"/load-something-that-doesnt-exist/"}),e(m,{title:"Request Data & Load",link:"/request-and-load/user/123456/"})]),_:1})]),_:1})}var _e=y(J,[["render",ce]]);const de={data:()=>({video:document.createElement("video"),loadingMessage:"\u{1F3A5} Unable to access video",showCanvas:!1,canvas2d:void 0,outputData:void 0,canvasWidth:320,canvasHeight:480}),methods:{openScan(){navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(s=>{this.video.srcObject=s,this.video.setAttribute("playsinline",!0),this.video.play(),requestAnimationFrame(this.tick)})},tick(){if(this.loadingMessage="\u231B Loading video...",this.video.readyState===this.video.HAVE_ENOUGH_DATA){this.showCanvas=!0,this.canvasHeight=this.video.videoHeight,this.canvasWidth=this.video.videoWidth,!this.canvas2d&&(this.canvas2d=this.$refs.canvasElement.getContext("2d")),this.canvas2d.drawImage(this.video,0,0,this.canvasWidth,this.canvasHeight);var s=this.canvas2d.getImageData(0,0,this.canvasWidth,this.canvasHeight),i=E(s.data,s.width,s.height,{inversionAttempts:"dontInvert"});console.log(i),i&&(this.video.srcObject=null),i&&(this.showCanvas=!1)}requestAnimationFrame(this.tick)}}},fe={class:"v-body"},pe=l("p",null,"Pure JavaScript QR code decoding library.",-1),me={key:0,id:"loadingMessage"},he=["width","height"],ge={key:1,id:"output"},ve={key:0},be={key:1},ke=l("b",null,"Data:",-1),$e={id:"outputData"};function ye(s,i,r,c,a,f){return h(),b("div",fe,[pe,s.showCanvas?C("",!0):(h(),b("div",me,v(s.loadingMessage),1)),O(l("canvas",{width:s.canvasWidth,height:s.canvasHeight,id:"canvas",ref:"canvasElement"},null,8,he),[[V,s.showCanvas]]),s.showCanvas?(h(),b("div",ge,[s.outputData?(h(),b("div",be,[ke,l("span",$e,v(s.outputData),1)])):(h(),b("div",ve,"No QR code detected."))])):C("",!0),l("button",{onClick:i[0]||(i[0]=(..._)=>f.openScan&&f.openScan(..._))},"Qu\xE9t QRCare")])}var we=y(de,[["render",ye]]);const qe={name:"App",data(){return{name:"Scan me"}},components:{QrCode:we},methods:{}},Re=n("About My App"),Le=l("p",null,"Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem illum consequuntur, a, quisquam.",-1),Pe=l("p",null,"Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis, ut tenetur alias.",-1),xe={id:"app"},Fe=l("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae laudantium dignissimos est nobis delectus nemo ea alias voluptatum architecto, amet similique, saepe iste consectetur in repellat ut minus quibusdam!",-1),Ce=l("p",null,"Molestias et distinctio porro nesciunt ratione similique, magni doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos consequatur!",-1),Ne=l("p",null,"Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!",-1);function Se(s,i,r,c,a,f){const _=o("f7-navbar"),g=o("f7-block-title"),p=o("f7-block"),u=o("QrCode"),d=o("f7-page");return h(),$(d,{name:"about"},{default:t(()=>[e(_,{title:"About","back-link":"Back"}),e(g,null,{default:t(()=>[Re]),_:1}),e(p,{strong:""},{default:t(()=>[Le,Pe]),_:1}),l("div",xe,[e(u)]),e(p,null,{default:t(()=>[Fe,Ce,Ne]),_:1})]),_:1})}var Ae=y(qe,[["render",Se]]);const Be={},Me=n("Form Example"),De=l("option",null,"Male",-1),He=l("option",null,"Female",-1),Ee=n("Buttons"),Oe=n("Button"),Ve=n("Fill"),Qe=n("Raised"),Ie=n("Raised Fill"),je=n("Round"),Ue=n("Round Fill"),We=n("Outline"),Te=n("Outline Round"),Ge=n("Small"),ze=n("Small Round"),Ye=n("Small"),Ke=n("Small Round"),Je=n("Large"),Xe=n("Large Fill"),Ze=n("Large Red"),et=n("Large Green"),tt=n("Checkbox group"),ot=n("Radio buttons group");function nt(s,i){const r=o("f7-navbar"),c=o("f7-block-title"),a=o("f7-list-input"),f=o("f7-toggle"),_=o("f7-list-item"),g=o("f7-range"),p=o("f7-list"),u=o("f7-button"),d=o("f7-row"),m=o("f7-block"),k=o("f7-page");return h(),$(k,{name:"form"},{default:t(()=>[e(r,{title:"Form","back-link":"Back"}),e(c,null,{default:t(()=>[Me]),_:1}),e(p,{"no-hairlines-md":""},{default:t(()=>[e(a,{label:"Name",type:"text",placeholder:"Your name"}),e(a,{label:"E-mail",type:"email",placeholder:"E-mail"}),e(a,{label:"URL",type:"url",placeholder:"URL"}),e(a,{label:"Password",type:"password",placeholder:"Password"}),e(a,{label:"Phone",type:"tel",placeholder:"Phone"}),e(a,{label:"Gender",type:"select"},{default:t(()=>[De,He]),_:1}),e(a,{label:"Birth date",type:"date",placeholder:"Birth day",defaultValue:"2014-04-30"}),e(_,{title:"Toggle"},{after:t(()=>[e(f)]),_:1}),e(a,{label:"Range",input:!1},{input:t(()=>[e(g,{value:50,min:0,max:100,step:1})]),_:1}),e(a,{type:"textarea",label:"Textarea",placeholder:"Bio"}),e(a,{type:"textarea",label:"Resizable",placeholder:"Bio",resizable:""})]),_:1}),e(c,null,{default:t(()=>[Ee]),_:1}),e(m,{strong:""},{default:t(()=>[e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col"},{default:t(()=>[Oe]),_:1}),e(u,{class:"col",fill:""},{default:t(()=>[Ve]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",raised:""},{default:t(()=>[Qe]),_:1}),e(u,{class:"col",raised:"",fill:""},{default:t(()=>[Ie]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",round:""},{default:t(()=>[je]),_:1}),e(u,{class:"col",round:"",fill:""},{default:t(()=>[Ue]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",outline:""},{default:t(()=>[We]),_:1}),e(u,{class:"col",round:"",outline:""},{default:t(()=>[Te]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",small:"",outline:""},{default:t(()=>[Ge]),_:1}),e(u,{class:"col",small:"",round:"",outline:""},{default:t(()=>[ze]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",small:"",fill:""},{default:t(()=>[Ye]),_:1}),e(u,{class:"col",small:"",round:"",fill:""},{default:t(()=>[Ke]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",large:"",raised:""},{default:t(()=>[Je]),_:1}),e(u,{class:"col",large:"",fill:"",raised:""},{default:t(()=>[Xe]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",large:"",fill:"",raised:"",color:"red"},{default:t(()=>[Ze]),_:1}),e(u,{class:"col",large:"",fill:"",raised:"",color:"green"},{default:t(()=>[et]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[tt]),_:1}),e(p,null,{default:t(()=>[e(_,{checkbox:"",name:"my-checkbox",value:"Books",title:"Books"}),e(_,{checkbox:"",name:"my-checkbox",value:"Movies",title:"Movies"}),e(_,{checkbox:"",name:"my-checkbox",value:"Food",title:"Food"})]),_:1}),e(c,null,{default:t(()=>[ot]),_:1}),e(p,null,{default:t(()=>[e(_,{radio:"",name:"radio",value:"Books",title:"Books"}),e(_,{radio:"",name:"radio",value:"Movies",title:"Movies"}),e(_,{radio:"",name:"radio",value:"Food",title:"Food"})]),_:1})]),_:1})}var at=y(Be,[["render",nt]]);const lt={props:{f7route:Object,f7router:Object}},st=l("b",null,"Url:",-1),it=l("b",null,"Path:",-1),rt=l("b",null,"Hash:",-1),ut=l("b",null,"Params:",-1),ct=l("b",null,"Query:",-1),_t=l("b",null,"Route:",-1),dt=n("Go back via Router API");function ft(s,i,r,c,a,f){const _=o("f7-navbar"),g=o("f7-block"),p=o("f7-link"),u=o("f7-page");return h(),$(u,null,{default:t(()=>[e(_,{title:"Dynamic Route","back-link":"Back"}),e(g,{strong:""},{default:t(()=>[l("ul",null,[l("li",null,[st,n(" "+v(r.f7route.url),1)]),l("li",null,[it,n(" "+v(r.f7route.path),1)]),l("li",null,[rt,n(" "+v(r.f7route.hash),1)]),l("li",null,[ut,l("ul",null,[(h(!0),b(F,null,x(r.f7route.params,(d,m)=>(h(),b("li",{key:m},[l("b",null,v(m)+":",1),n(" "+v(d),1)]))),128))])]),l("li",null,[ct,l("ul",null,[(h(!0),b(F,null,x(r.f7route.query,(d,m)=>(h(),b("li",{key:m},[l("b",null,v(m)+":",1),n(" "+v(d),1)]))),128))])]),l("li",null,[_t,n(" "+v(r.f7route.route.path),1)])])]),_:1}),e(g,{strong:""},{default:t(()=>[e(p,{onClick:i[0]||(i[0]=d=>r.f7router.back())},{default:t(()=>[dt]),_:1})]),_:1})]),_:1})}var pt=y(lt,[["render",ft]]);const mt={props:{user:Object}};function ht(s,i,r,c,a,f){const _=o("f7-navbar"),g=o("f7-block"),p=o("f7-list-item"),u=o("f7-list"),d=o("f7-page");return h(),$(d,null,{default:t(()=>[e(_,{title:`${r.user.firstName} ${r.user.lastName}`,"back-link":"Back"},null,8,["title"]),e(g,{strong:""},{default:t(()=>[n(v(r.user.about),1)]),_:1}),e(u,null,{default:t(()=>[(h(!0),b(F,null,x(r.user.links,(m,k)=>(h(),$(p,{key:k,link:m.url,title:m.title,external:"",target:"_blank"},null,8,["link","title"]))),128))]),_:1})]),_:1})}var gt=y(mt,[["render",ht]]);const vt={},bt=l("p",null,"Sorry",-1),kt=l("p",null,"Requested content not found.",-1);function $t(s,i,r,c,a,f){const _=o("f7-navbar"),g=o("f7-block"),p=o("f7-page");return h(),$(p,null,{default:t(()=>[e(_,{title:"Not found","back-link":"Back"}),e(g,{strong:""},{default:t(()=>[bt,kt]),_:1})]),_:1})}var yt=y(vt,[["render",$t]]),wt=[{path:"/",component:_e},{path:"/about/",component:Ae},{path:"/form/",component:at},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:pt},{path:"/request-and-load/user/:userId/",async:function({router:s,to:i,resolve:r}){var c=s.app;c.preloader.show(),i.params.userId,setTimeout(function(){var a={firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]};c.preloader.hide(),r({component:gt},{props:{user:a}})},1e3)}},{path:"(.*)",component:yt}];const qt=Q({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:s}){return s.products}},actions:{addProduct({state:s},i){s.products=[...s.products,i]}}}),Rt={setup(){const s={name:"QRCare VN",theme:"auto",view:{browserHistory:!0,browserHistorySeparator:""},store:qt,routes:wt,serviceWorker:{path:"/service-worker.js"}},i=N(""),r=N(""),c=()=>{S.dialog.alert("Username: "+i.value+"<br>Password: "+r.value,()=>{S.loginScreen.close()})};return I(()=>{j(()=>{})}),{f7params:s,username:i,password:r,alertLoginData:c}}},Lt=n("Left panel content goes here"),Pt=n("Right panel content goes here"),xt=n("Close"),Ft=l("p",null,"Popup content goes here.",-1),Ct=n("Login"),Nt=n(" Some text about login information."),St=l("br",null,null,-1),At=n('Click "Sign In" to close Login Screen ');function Bt(s,i,r,c,a,f){const _=o("f7-navbar"),g=o("f7-block"),p=o("f7-page"),u=o("f7-view"),d=o("f7-panel"),m=o("f7-link"),k=o("f7-nav-right"),w=o("f7-popup"),q=o("f7-login-screen-title"),R=o("f7-list-input"),L=o("f7-list"),B=o("f7-list-button"),M=o("f7-block-footer"),D=o("f7-login-screen"),H=o("f7-app");return h(),$(H,U(W(c.f7params)),{default:t(()=>[e(d,{left:"",cover:"","theme-dark":""},{default:t(()=>[e(u,null,{default:t(()=>[e(p,null,{default:t(()=>[e(_,{title:"Left Panel"}),e(g,null,{default:t(()=>[Lt]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{right:"",reveal:"","theme-dark":""},{default:t(()=>[e(u,null,{default:t(()=>[e(p,null,{default:t(()=>[e(_,{title:"Right Panel"}),e(g,null,{default:t(()=>[Pt]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{main:"",class:"safe-areas",url:"/"}),e(w,{id:"my-popup"},{default:t(()=>[e(u,null,{default:t(()=>[e(p,null,{default:t(()=>[e(_,{title:"Popup"},{default:t(()=>[e(k,null,{default:t(()=>[e(m,{"popup-close":""},{default:t(()=>[xt]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[Ft]),_:1})]),_:1})]),_:1})]),_:1}),e(D,{id:"my-login-screen"},{default:t(()=>[e(u,null,{default:t(()=>[e(p,{"login-screen":""},{default:t(()=>[e(q,null,{default:t(()=>[Ct]),_:1}),e(L,{form:""},{default:t(()=>[e(R,{type:"text",name:"username",placeholder:"Your username",value:c.username,"onUpdate:value":i[0]||(i[0]=P=>c.username=P)},null,8,["value"]),e(R,{type:"password",name:"password",placeholder:"Your password",value:c.password,"onUpdate:value":i[1]||(i[1]=P=>c.password=P)},null,8,["value"])]),_:1}),e(L,null,{default:t(()=>[e(B,{title:"Sign In",onClick:c.alertLoginData},null,8,["onClick"]),e(M,null,{default:t(()=>[Nt,St,At]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},16)}var Mt=y(Rt,[["render",Bt]]);T.use(G);const A=z(Mt);Y(A);A.mount("#app");
