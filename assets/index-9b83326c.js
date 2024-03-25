import{o as Ke,a as Ve,s as Xe}from"./base-35811967.js";import{A as ke,B as ie,C as We,u as $,y as g,D as le,q as Oe,E as Ie,G as P,H as Pe,I as q,J as k,L as N,e as d,M as Ge,N as L,O as Ze,T as _e,j as W,v as $e,P as qe,Q as Je,F as G,s as Qe,R as et,S as tt,r as nt,o as H,c as te,w as K,a as ot,b as at,d as it,g as ue,t as lt}from"./vue-libs-d2aebc66.js";const Ae=function(e,t,n=!1){var r,f;const o=+(((r=e.dataset)==null?void 0:r.delay)||500),i=+(((f=e.dataset)==null?void 0:f.count)||2),a="ontouchstart"in window||navigator.maxTouchPoints>0?"touchstart":"click";let s=i,l;const u=c=>{l&&clearTimeout(l),l=setTimeout(()=>{s=i},o),s--,s||(s=i,typeof t.value=="function"&&t.value(c))};n?Ve(e,a,u):Ke(e,a,u)},de=function(e,t){Ae(e,t)},fe=function(e,t){Ae(e,t,!0)},ve={mounted:de,beforeUnmount:fe,bind:de,unbind:fe};function st(){}const O=Object.assign,Te=typeof window<"u",J=e=>e!==null&&typeof e=="object",x=e=>e!=null,oe=e=>typeof e=="function",rt=e=>J(e)&&oe(e.then)&&oe(e.catch),ze=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),ct=()=>Te?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function me(e,t){const n=t.split(".");let o=e;return n.forEach(i=>{var a;o=J(o)&&(a=o[i])!=null?a:""}),o}function ut(e,t,n){return t.reduce((o,i)=>((!n||e[i]!==void 0)&&(o[i]=e[i]),o),{})}const Z=null,b=[Number,String],_={type:Boolean,default:!0},dt=e=>({type:Number,default:e}),h=e=>({type:String,default:e});var se=typeof window<"u";function De(e){let t;le(()=>{e(),Oe(()=>{t=!0})}),Ie(()=>{t&&e()})}function Fe(e,t,n={}){if(!se)return;const{target:o=window,passive:i=!1,capture:a=!1}=n;let s=!1,l;const u=c=>{if(s)return;const v=P(c);v&&!l&&(v.addEventListener(e,t,{capture:a,passive:i}),l=!0)},r=c=>{if(s)return;const v=P(c);v&&l&&(v.removeEventListener(e,t,a),l=!1)};ke(()=>r(o)),ie(()=>r(o)),De(()=>u(o));let f;return We(o)&&(f=$(o,(c,v)=>{r(v),u(c)})),()=>{f==null||f(),r(o),s=!0}}var V,ne;function ft(){if(!V&&(V=g(0),ne=g(0),se)){const e=()=>{V.value=window.innerWidth,ne.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:V,height:ne}}var vt=/scroll|auto|overlay/i,mt=se?window:void 0;function gt(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function yt(e,t=mt){let n=e;for(;n&&n!==t&&gt(n);){const{overflowY:o}=window.getComputedStyle(n);if(vt.test(o))return n;n=n.parentNode}return t}ct();const ht=e=>e.stopPropagation();function re(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&ht(e)}ft();function B(e){if(x(e))return ze(e)?`${e}px`:String(e)}function bt(e){if(x(e)){if(Array.isArray(e))return{width:B(e[0]),height:B(e[1])};const t=B(e);return{width:t,height:t}}}function Et(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const wt=/-(\w)/g,Le=e=>e.replace(wt,(t,n)=>n.toUpperCase()),{hasOwnProperty:Ct}=Object.prototype;function Bt(e,t,n){const o=t[n];x(o)&&(!Ct.call(e,n)||!J(o)?e[n]=o:e[n]=Ne(Object(e[n]),o))}function Ne(e,t){return Object.keys(t).forEach(n=>{Bt(e,t,n)}),e}var St={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const ge=g("zh-CN"),ye=Pe({"zh-CN":St}),pt={messages(){return ye[ge.value]},use(e,t){ge.value=e,this.add({[e]:t})},add(e={}){Ne(ye,e)}};var xt=pt;function kt(e){const t=Le(e)+".";return(n,...o)=>{const i=xt.messages(),a=me(i,t+n)||me(i,n);return oe(a)?a(...o):a}}function ae(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+ae(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?ae(e,o):""),""):""}function Ot(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${ae(t,n)}`)}function S(e){const t=`van-${e}`;return[t,Ot(t),kt(t)]}const It="van-hairline",Pt=`${It}--surround`,_t="van-haptics-feedback",he=5;function $t(e,{args:t=[],done:n,canceled:o,error:i}){if(e){const a=e.apply(null,t);rt(a)?a.then(s=>{s?n():o&&o()}).catch(i||st):a?n():o&&o()}else n()}function I(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(Le(`-${n}`),e))},e}const At=Symbol();function Re(e){const t=q();t&&O(t.proxy,e)}const Tt={to:[String,Object],url:String,replace:Boolean};function zt({to:e,url:t,replace:n,$router:o}){e&&o?o[n?"replace":"push"](e):t&&(n?location.replace(t):location.href=t)}function Dt(){const e=q().proxy;return()=>zt(e)}const[Ft,be]=S("badge"),Lt={dot:Boolean,max:b,tag:h("div"),color:String,offset:Array,content:b,showZero:_,position:h("top-right")};var Nt=k({name:Ft,props:Lt,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:l,showZero:u}=e;return x(l)&&l!==""&&(u||l!==0&&l!=="0")},o=()=>{const{dot:l,max:u,content:r}=e;if(!l&&n())return t.content?t.content():x(u)&&ze(r)&&+r>+u?`${u}+`:r},i=l=>l.startsWith("-")?l.replace("-",""):`-${l}`,a=N(()=>{const l={background:e.color};if(e.offset){const[u,r]=e.offset,{position:f}=e,[c,v]=f.split("-");t.default?(typeof r=="number"?l[c]=B(c==="top"?r:-r):l[c]=c==="top"?B(r):i(r),typeof u=="number"?l[v]=B(v==="left"?u:-u):l[v]=v==="left"?B(u):i(u)):(l.marginTop=B(r),l.marginLeft=B(u))}return l}),s=()=>{if(n()||e.dot)return d("div",{class:be([e.position,{dot:e.dot,fixed:!!t.default}]),style:a.value},[o()])};return()=>{if(t.default){const{tag:l}=e;return d(l,{class:be("wrapper")},{default:()=>[t.default(),s()]})}return s()}}});const Rt=I(Nt);let Mt=2e3;const jt=()=>++Mt,[Yt,Dn]=S("config-provider"),Ut=Symbol(Yt),[Ht,Ee]=S("icon"),Kt=e=>e==null?void 0:e.includes("/"),Vt={dot:Boolean,tag:h("i"),name:String,size:b,badge:b,color:String,badgeProps:Object,classPrefix:String};var Xt=k({name:Ht,props:Vt,setup(e,{slots:t}){const n=Ge(Ut,null),o=N(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||Ee());return()=>{const{tag:i,dot:a,name:s,size:l,badge:u,color:r}=e,f=Kt(s);return d(Rt,L({dot:a,tag:i,class:[o.value,f?"":`${o.value}-${s}`],style:{color:r,fontSize:B(l)},content:u},e.badgeProps),{default:()=>{var c;return[(c=t.default)==null?void 0:c.call(t),f&&d("img",{class:Ee("image"),src:s},null)]}})}}});const ce=I(Xt),[Wt,F]=S("loading"),Gt=Array(12).fill(null).map((e,t)=>d("i",{class:F("line",String(t+1))},null)),Zt=d("svg",{class:F("circular"),viewBox:"25 25 50 50"},[d("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),qt={size:b,type:h("circular"),color:String,vertical:Boolean,textSize:b,textColor:String};var Jt=k({name:Wt,props:qt,setup(e,{slots:t}){const n=N(()=>O({color:e.color},bt(e.size))),o=()=>{const a=e.type==="spinner"?Gt:Zt;return d("span",{class:F("spinner",e.type),style:n.value},[t.icon?t.icon():a])},i=()=>{var a;if(t.default)return d("span",{class:F("text"),style:{fontSize:B(e.textSize),color:(a=e.textColor)!=null?a:e.color}},[t.default()])};return()=>{const{type:a,vertical:s}=e;return d("div",{class:F([a,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[o(),i()])}}});const Me=I(Jt),[Qt,A]=S("button"),en=O({},Tt,{tag:h("button"),text:String,icon:String,type:h("default"),size:h("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:h("button"),loadingSize:b,loadingText:String,loadingType:String,iconPosition:h("left")});var tn=k({name:Qt,props:en,emits:["click"],setup(e,{emit:t,slots:n}){const o=Dt(),i=()=>n.loading?n.loading():d(Me,{size:e.loadingSize,type:e.loadingType,class:A("loading")},null),a=()=>{if(e.loading)return i();if(n.icon)return d("div",{class:A("icon")},[n.icon()]);if(e.icon)return d(ce,{name:e.icon,class:A("icon"),classPrefix:e.iconPrefix},null)},s=()=>{let r;if(e.loading?r=e.loadingText:r=n.default?n.default():e.text,r)return d("span",{class:A("text")},[r])},l=()=>{const{color:r,plain:f}=e;if(r){const c={color:f?r:"white"};return f||(c.background=r),r.includes("gradient")?c.border=0:c.borderColor=r,c}},u=r=>{e.loading?re(r):e.disabled||(t("click",r),o())};return()=>{const{tag:r,type:f,size:c,block:v,round:y,plain:E,square:w,loading:C,disabled:R,hairline:M,nativeType:Q,iconPosition:j}=e,Y=[A([f,c,{plain:E,block:v,round:y,square:w,loading:C,disabled:R,hairline:M}]),{[Pt]:M}];return d(r,{type:Q,class:Y,style:l(),disabled:R,onClick:u},{default:()=>[d("div",{class:A("content")},[j==="left"&&a(),s(),j==="right"&&a()])]})}}});const we=I(tn),nn={show:Boolean,zIndex:b,overlay:_,duration:b,teleport:[String,Object],lockScroll:_,lazyRender:_,beforeClose:Function,overlayStyle:Object,overlayClass:Z,transitionAppear:Boolean,closeOnClickOverlay:_};function on(e,t){return e>t?"horizontal":t>e?"vertical":""}function an(){const e=g(0),t=g(0),n=g(0),o=g(0),i=g(0),a=g(0),s=g(""),l=g(!0),u=()=>s.value==="vertical",r=()=>s.value==="horizontal",f=()=>{n.value=0,o.value=0,i.value=0,a.value=0,s.value="",l.value=!0};return{move:y=>{const E=y.touches[0];n.value=(E.clientX<0?0:E.clientX)-e.value,o.value=E.clientY-t.value,i.value=Math.abs(n.value),a.value=Math.abs(o.value);const w=10;(!s.value||i.value<w&&a.value<w)&&(s.value=on(i.value,a.value)),l.value&&(i.value>he||a.value>he)&&(l.value=!1)},start:y=>{f(),e.value=y.touches[0].clientX,t.value=y.touches[0].clientY},reset:f,startX:e,startY:t,deltaX:n,deltaY:o,offsetX:i,offsetY:a,direction:s,isVertical:u,isHorizontal:r,isTap:l}}let z=0;const Ce="van-overflow-hidden";function ln(e,t){const n=an(),o="01",i="10",a=f=>{n.move(f);const c=n.deltaY.value>0?i:o,v=yt(f.target,e.value),{scrollHeight:y,offsetHeight:E,scrollTop:w}=v;let C="11";w===0?C=E>=y?"00":"01":w+E>=y&&(C="10"),C!=="11"&&n.isVertical()&&!(parseInt(C,2)&parseInt(c,2))&&re(f,!0)},s=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",a,{passive:!1}),z||document.body.classList.add(Ce),z++},l=()=>{z&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",a),z--,z||document.body.classList.remove(Ce))},u=()=>t()&&s(),r=()=>t()&&l();De(u),ie(r),Ze(r),$(t,f=>{f?s():l()})}function je(e){const t=g(!1);return $(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const Be=()=>{var e;const{scopeId:t}=((e=q())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[sn,rn]=S("overlay"),cn={show:Boolean,zIndex:b,duration:b,className:Z,lockScroll:_,lazyRender:_,customStyle:Object};var un=k({name:sn,props:cn,setup(e,{slots:t}){const n=g(),o=je(()=>e.show||!e.lazyRender),i=s=>{e.lockScroll&&re(s,!0)},a=o(()=>{var s;const l=O(Et(e.zIndex),e.customStyle);return x(e.duration)&&(l.animationDuration=`${e.duration}s`),W(d("div",{ref:n,style:l,class:[rn(),e.className]},[(s=t.default)==null?void 0:s.call(t)]),[[$e,e.show]])});return Fe("touchmove",i,{target:n}),()=>d(_e,{name:"van-fade",appear:!0},{default:a})}});const dn=I(un),fn=O({},nn,{round:Boolean,position:h("center"),closeIcon:h("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:h("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[vn,Se]=S("popup");var mn=k({name:vn,inheritAttrs:!1,props:fn,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:o}){let i,a;const s=g(),l=g(),u=je(()=>e.show||!e.lazyRender),r=N(()=>{const m={zIndex:s.value};if(x(e.duration)){const p=e.position==="center"?"animationDuration":"transitionDuration";m[p]=`${e.duration}s`}return m}),f=()=>{i||(i=!0,s.value=e.zIndex!==void 0?+e.zIndex:jt(),t("open"))},c=()=>{i&&$t(e.beforeClose,{done(){i=!1,t("close"),t("update:show",!1)}})},v=m=>{t("clickOverlay",m),e.closeOnClickOverlay&&c()},y=()=>{if(e.overlay)return d(dn,L({show:e.show,class:e.overlayClass,zIndex:s.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},Be(),{onClick:v}),{default:o["overlay-content"]})},E=m=>{t("clickCloseIcon",m),c()},w=()=>{if(e.closeable)return d(ce,{role:"button",tabindex:0,name:e.closeIcon,class:[Se("close-icon",e.closeIconPosition),_t],classPrefix:e.iconPrefix,onClick:E},null)};let C;const R=()=>{C&&clearTimeout(C),C=setTimeout(()=>{t("opened")})},M=()=>t("closed"),Q=m=>t("keydown",m),j=u(()=>{var m;const{round:p,position:U,safeAreaInsetTop:ee,safeAreaInsetBottom:He}=e;return W(d("div",L({ref:l,style:r.value,role:"dialog",tabindex:0,class:[Se({round:p,[U]:U}),{"van-safe-area-top":ee,"van-safe-area-bottom":He}],onKeydown:Q},n,Be()),[(m=o.default)==null?void 0:m.call(o),w()]),[[$e,e.show]])}),Y=()=>{const{position:m,transition:p,transitionAppear:U}=e,ee=m==="center"?"van-fade":`van-popup-slide-${m}`;return d(_e,{name:p||ee,appear:U,onAfterEnter:R,onAfterLeave:M},{default:j})};return $(()=>e.show,m=>{m&&!i&&(f(),n.tabindex===0&&Oe(()=>{var p;(p=l.value)==null||p.focus()})),!m&&i&&(i=!1,t("close"))}),Re({popupRef:l}),ln(l,()=>e.show&&e.lockScroll),Fe("popstate",()=>{e.closeOnPopstate&&(c(),a=!1)}),le(()=>{e.show&&f()}),Ie(()=>{a&&(t("update:show",!0),a=!1)}),ie(()=>{e.show&&e.teleport&&(c(),a=!0)}),qe(At,()=>e.show),()=>e.teleport?d(Je,{to:e.teleport},{default:()=>[y(),Y()]}):d(G,null,[y(),Y()])}});const gn=I(mn);let D=0;function yn(e){e?(D||document.body.classList.add("van-toast--unclickable"),D++):D&&(D--,D||document.body.classList.remove("van-toast--unclickable"))}const[hn,T]=S("toast"),bn=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],En={icon:String,show:Boolean,type:h("text"),overlay:Boolean,message:b,iconSize:b,duration:dt(2e3),position:h("middle"),teleport:[String,Object],wordBreak:String,className:Z,iconPrefix:String,transition:h("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:Z,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:b};var Ye=k({name:hn,props:En,emits:["update:show"],setup(e,{emit:t,slots:n}){let o,i=!1;const a=()=>{const c=e.show&&e.forbidClick;i!==c&&(i=c,yn(i))},s=c=>t("update:show",c),l=()=>{e.closeOnClick&&s(!1)},u=()=>clearTimeout(o),r=()=>{const{icon:c,type:v,iconSize:y,iconPrefix:E,loadingType:w}=e;if(c||v==="success"||v==="fail")return d(ce,{name:c||v,size:y,class:T("icon"),classPrefix:E},null);if(v==="loading")return d(Me,{class:T("loading"),size:y,type:w},null)},f=()=>{const{type:c,message:v}=e;if(n.message)return d("div",{class:T("text")},[n.message()]);if(x(v)&&v!=="")return c==="html"?d("div",{key:0,class:T("text"),innerHTML:String(v)},null):d("div",{class:T("text")},[v])};return $(()=>[e.show,e.forbidClick],a),$(()=>[e.show,e.type,e.message,e.duration],()=>{u(),e.show&&e.duration>0&&(o=setTimeout(()=>{s(!1)},e.duration))}),le(a),ke(a),()=>d(gn,L({class:[T([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:l,onClosed:u,"onUpdate:show":s},ut(e,bn)),{default:()=>[r(),f()]})}});function wn(){const e=Pe({show:!1}),t=i=>{e.show=i},n=i=>{O(e,i,{transitionAppear:!0}),t(!0)},o=()=>t(!1);return Re({open:n,close:o,toggle:t}),{open:n,close:o,state:e,toggle:t}}function Cn(e){const t=Qe(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const Bn={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let X=[],Sn=!1,pe=O({},Bn);const pn=new Map;function xn(e){return J(e)?e:{message:e}}function kn(){const{instance:e,unmount:t}=Cn({setup(){const n=g(""),{open:o,state:i,close:a,toggle:s}=wn(),l=()=>{},u=()=>d(Ye,L(i,{onClosed:l,"onUpdate:show":s}),null);return $(n,r=>{i.message=r}),q().render=u,{open:o,close:a,message:n}}});return e}function On(){if(!X.length||Sn){const e=kn();X.push(e)}return X[X.length-1]}function In(e={}){if(!Te)return{};const t=On(),n=xn(e);return t.open(O({},pe,pn.get(n.type||pe.type),n)),t}I(Ye);const[xe,Pn]=S("space"),_n={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function Ue(e=[]){const t=[];return e.forEach(n=>{Array.isArray(n)?t.push(...n):n.type===G?t.push(...Ue(n.children)):t.push(n)}),t.filter(n=>{var o;return!(n&&(n.type===et||n.type===G&&((o=n.children)==null?void 0:o.length)===0||n.type===tt&&n.children.trim()===""))})}var $n=k({name:xe,props:_n,setup(e,{slots:t}){const n=N(()=>{var a;return(a=e.align)!=null?a:e.direction==="horizontal"?"center":""}),o=a=>typeof a=="number"?a+"px":a,i=a=>{const s={},l=`${o(Array.isArray(e.size)?e.size[0]:e.size)}`,u=`${o(Array.isArray(e.size)?e.size[1]:e.size)}`;return a?e.wrap?{marginBottom:u}:{}:(e.direction==="horizontal"&&(s.marginRight=l),(e.direction==="vertical"||e.wrap)&&(s.marginBottom=u),s)};return()=>{var a;const s=Ue((a=t.default)==null?void 0:a.call(t));return d("div",{class:[Pn({[e.direction]:e.direction,[`align-${n.value}`]:n.value,wrap:e.wrap,fill:e.fill})]},[s.map((l,u)=>d("div",{key:`item-${u}`,class:`${xe}-item`,style:i(u===s.length-1)},[l]))])}}});const An=I($n);const Fn={__name:"index",setup(e){Xe(localStorage.getItem("logLevel"));const t=n=>{In(n)};return(n,o)=>{const i=nt("demo-block");return H(),te(i,{title:"mutilClick"},{default:K(()=>[d(P(An),{wrap:"",size:10},{default:K(()=>[(H(),ot(G,null,at([1,2,3,4,5],(a,s)=>it("div",{class:"",key:s},[W((H(),te(P(we),{"data-count":a},{default:K(()=>[ue(lt(a)+"连击 ",1)]),_:2},1032,["data-count"])),[[P(ve),()=>t(a+"连击")]])])),64))]),_:1}),W((H(),te(P(we),null,{default:K(()=>[ue(" default:2连击 ")]),_:1})),[[P(ve),()=>t("2连击")]])]),_:1})}}};export{Fn as default};