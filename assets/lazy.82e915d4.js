import{af as r,k as n,A as u,Z as f}from"./index.b30bc5d7.js";const c=r({eager:Boolean},"lazy");function m(e,o){const a=n(!1),s=u(()=>a.value||e.eager||o.value);f(o,()=>a.value=!0);function t(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:s,onAfterLeave:t}}export{c as m,m as u};
