let u={},c={};globalThis&&globalThis.addEventListener&&(globalThis.addEventListener("offline",function(){console.debug("offLine")}),globalThis.addEventListener("online",function(){console.debug("onLine")}));const r=(e,n,o,t)=>{if(typeof n!="string"&&typeof n!="number")return console.warn("argCheck请传入string当前为:"+n),"";const s=n.toString().split("."),i=s.length;if(!e)return o;if(i>1)for(let f=0;f<i-1;f++){if(typeof e[s[f]]!="object")if(t)console.warn("safeData setValue err：",e,"index:",f);else return o;e=e[s[f]]||{}}return t&&(e[s[i-1]]=o),typeof o>"u"?e[s[i-1]]:e[s[i-1]]||o},E=e=>r(u,e,""),d=(e,n)=>(e?c[e]=n:c=n,c),b=(e,n,o)=>{let t=r(c,e,{});return n&&(t=Object.assign(t,n)),o?JSON.parse(JSON.stringify(t)):t},L=(e=4,n={error:0})=>{e=e||E("VUE_APP_LOG_LEVEL")||4;const o=["log","info","warn","error"],t={};o.forEach(s=>{t[s]=console[s]});for(let s in n)console[s]&&(console[s]=(...i)=>{var l;const f=((l=r(Error(),"stack",[]))==null?void 0:l.split(`
`)[2])||"";t[s](...i,"line>>"+f),typeof n[s]=="function"&&n[s](...i,f)});switch(+e){case 1:console.warn=()=>{};case 2:console.info=()=>{};case 3:console.log=()=>{};case 4:console.debug=()=>{}}},p=function(){var e;return typeof((e=globalThis.document)==null?void 0:e.addEventListener)=="function"?function(n,o,t){n&&o&&t&&n.addEventListener(o,t,!1)}:function(n,o,t){n&&o&&t&&n.attachEvent("on"+o,t)}}(),y=function(){var e;return typeof((e=globalThis.document)==null?void 0:e.removeEventListener)=="function"?function(n,o,t){n&&o&&n.removeEventListener(o,t,!1)}:function(n,o,t){n&&o&&n.detachEvent("on"+o,t)}}();export{y as a,d as b,r as c,b as g,p as o,L as s};
