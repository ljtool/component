import{y as A,A as F}from"./vue-libs-9169e31b.js";function P(){}const N=Object.assign,b=typeof window<"u",f=n=>n!==null&&typeof n=="object",d=n=>n!=null,c=n=>typeof n=="function",I=n=>f(n)&&c(n.then)&&c(n.catch),v=n=>typeof n=="number"||/^\d+(\.\d+)?$/.test(n),U=()=>b?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function l(n,u){const e=u.split(".");let t=n;return e.forEach(s=>{var o;t=f(t)&&(o=t[s])!=null?o:""}),t}function z(n,u,e){return u.reduce((t,s)=>((!e||n[s]!==void 0)&&(t[s]=n[s]),t),{})}function r(n){if(d(n))return v(n)?`${n}px`:String(n)}function K(n){if(d(n)){if(Array.isArray(n))return{width:r(n[0]),height:r(n[1])};const u=r(n);return{width:u,height:u}}}function R(n){const u={};return n!==void 0&&(u.zIndex=+n),u}const g=/-(\w)/g,h=n=>n.replace(g,(u,e)=>e.toUpperCase()),{hasOwnProperty:D}=Object.prototype;function $(n,u,e){const t=u[e];d(t)&&(!D.call(n,e)||!f(t)?n[e]=t:n[e]=y(Object(n[e]),t))}function y(n,u){return Object.keys(u).forEach(e=>{$(n,u,e)}),n}var L={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(n,u)=>`${n}年${u}月`,rangePrompt:n=>`最多选择 ${n} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:n=>`${n}折`,condition:n=>`满${n}元可用`},vanCouponCell:{title:"优惠券",count:n=>`${n}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const p=A("zh-CN"),B=F({"zh-CN":L}),w={messages(){return B[p.value]},use(n,u){p.value=n,this.add({[n]:u})},add(n={}){y(B,n)}};var C=w;function _(n){const u=h(n)+".";return(e,...t)=>{const s=C.messages(),o=l(s,u+e)||l(s,e);return c(o)?o(...t):o}}function a(n,u){return u?typeof u=="string"?` ${n}--${u}`:Array.isArray(u)?u.reduce((e,t)=>e+a(n,t),""):Object.keys(u).reduce((e,t)=>e+(u[t]?a(n,t):""),""):""}function x(n){return(u,e)=>(u&&typeof u!="string"&&(e=u,u=""),u=u?`${n}__${u}`:n,`${u}${a(u,e)}`)}function S(n){const u=`van-${n}`;return[u,x(u),_(u)]}function G(n){return n.install=u=>{const{name:e}=n;e&&(u.component(e,n),u.component(h(`-${e}`),n))},n}let O={};globalThis&&globalThis.addEventListener&&(globalThis.addEventListener("offline",function(){console.debug("offLine")}),globalThis.addEventListener("online",function(){console.debug("onLine")}));const m=(n,u,e,t)=>{if(typeof u!="string"&&typeof u!="number")return console.warn("argCheck请传入string当前为:"+u),"";const s=u.toString().split("."),o=s.length;if(!n)return e;if(o>1)for(let i=0;i<o-1;i++){if(typeof n[s[i]]!="object")if(t)console.warn("safeData setValue err：",n,"index:",i);else return e;n=n[s[i]]||{}}return t&&(n[s[o-1]]=e),typeof e>"u"?n[s[o-1]]:n[s[o-1]]||e},j=n=>m(O,n,""),M=(n=4,u={error:0})=>{n=n||j("VUE_APP_LOG_LEVEL")||4;const e=["log","info","warn","error"],t={};e.forEach(s=>{t[s]=console[s]});for(let s in u)console[s]&&(console[s]=(...o)=>{var E;const i=((E=m(Error(),"stack",[]))==null?void 0:E.split(`
`)[2])||"";t[s](...o,"line>>"+i),typeof u[s]=="function"&&u[s](...o,i)});switch(+n){case 1:console.warn=()=>{};case 2:console.info=()=>{};case 3:console.log=()=>{};case 4:console.debug=()=>{}}},Z=function(){var n;return typeof((n=globalThis.document)==null?void 0:n.addEventListener)=="function"?function(u,e,t){u&&e&&t&&u.addEventListener(e,t,!1)}:function(u,e,t){u&&e&&t&&u.attachEvent("on"+e,t)}}(),q=function(){var n;return typeof((n=globalThis.document)==null?void 0:n.removeEventListener)=="function"?function(u,e,t){u&&e&&u.removeEventListener(e,t,!1)}:function(u,e,t){u&&e&&u.detachEvent("on"+e,t)}}();export{d as a,b,S as c,f as d,N as e,q as f,R as g,m as h,I as i,U as j,r as k,v as l,K as m,P as n,Z as o,z as p,M as s,G as w};