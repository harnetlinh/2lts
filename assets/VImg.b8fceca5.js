import{a6 as V,ae as j,p as r,A as y,aS as p,af as C,h as x,O as D,T as E,k as _,Z as N,aG as H,ay as M,H as O,aA as q,F as L,ax as U,I as G}from"./index.b30bc5d7.js";import{h as Z,l as J}from"./router.6aa893a8.js";function K(e){return{aspectStyles:y(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const Q=V({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Z()},setup(e,s){let{slots:l}=s;const{aspectStyles:t}=K(e),{dimensionStyles:c}=J(e);return j(()=>{var i;return r("div",{class:"v-responsive",style:c.value},[r("div",{class:"v-responsive__sizer",style:t.value},null),(i=l.additional)==null?void 0:i.call(l),l.default&&r("div",{class:["v-responsive__content",e.contentClass]},[l.default()])])}),{}}});function X(e,s){if(!p)return;const l=s.modifiers||{},t=s.value,{handler:c,options:i}=typeof t=="object"?t:{handler:t,options:{}},a=new IntersectionObserver(function(){var d;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const v=(d=e._observe)==null?void 0:d[s.instance.$.uid];if(!v)return;const f=g.some(S=>S.isIntersecting);c&&(!l.quiet||v.init)&&(!l.once||f||v.init)&&c(f,g,o),f&&l.once?B(e,s):v.init=!0},i);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:a},a.observe(e)}function B(e,s){var l;const t=(l=e._observe)==null?void 0:l[s.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const Y={mounted:X,unmounted:B},ee=Y,te=C({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,s)=>{let{slots:l}=s;const{transition:t,...c}=e,{component:i=E,...a}=typeof t=="object"?t:{};return x(i,D(typeof t=="string"?{name:t}:a,c),l)},ae=V({name:"VImg",directives:{intersect:ee},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...te()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:l,slots:t}=s;const c=_(""),i=_(),a=_(e.eager?"loading":"idle"),d=_(),g=_(),o=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=y(()=>o.value.aspect||d.value/g.value||0);N(()=>e.src,()=>{f(a.value!=="idle")}),H(()=>f());function f(n){if(!(e.eager&&n)&&!(p&&!n&&!e.eager)){if(a.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,b(u,null)}!o.value.src||M(()=>{var u,m;if(l("loadstart",((u=i.value)==null?void 0:u.currentSrc)||o.value.src),(m=i.value)!=null&&m.complete){if(i.value.naturalWidth||z(),a.value==="error")return;v.value||b(i.value,null),S()}else v.value||b(i.value),$()})}}function S(){var n;$(),a.value="loaded",l("load",((n=i.value)==null?void 0:n.currentSrc)||o.value.src)}function z(){var n;a.value="error",l("error",((n=i.value)==null?void 0:n.currentSrc)||o.value.src)}function $(){const n=i.value;n&&(c.value=n.currentSrc||n.src)}function b(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{const{naturalHeight:T,naturalWidth:w}=n;T||w?(d.value=w,g.value=T):!n.complete&&a.value==="loading"&&u!=null?setTimeout(m,u):(n.currentSrc.endsWith(".svg")||n.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};m()}const I=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),F=()=>{var n;if(!o.value.src||a.value==="idle")return null;const u=r("img",{class:["v-img__img",I.value],src:o.value.src,srcset:o.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:S,onError:z},null),m=(n=t.sources)==null?void 0:n.call(t);return r(h,{transition:e.transition,appear:!0},{default:()=>[O(m?r("picture",{class:"v-img__picture"},[m,u]):u,[[G,a.value==="loaded"]])]})},P=()=>r(h,{transition:e.transition},{default:()=>[o.value.lazySrc&&a.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",I.value],src:o.value.lazySrc,alt:""},null)]}),W=()=>t.placeholder?r(h,{transition:e.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,k=()=>t.error?r(h,{transition:e.transition,appear:!0},{default:()=>[a.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,A=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,R=_(!1);{const n=N(v,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{R.value=!0})}),n())})}return j(()=>O(r(Q,{class:["v-img",{"v-img--booting":!R.value}],style:{width:U(e.width==="auto"?d.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>r(L,null,[r(F,null,null),r(P,null,null),r(A,null,null),r(W,null,null),r(k,null,null)]),default:t.default}),[[q("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:c,image:i,state:a,naturalWidth:d,naturalHeight:g}}});export{ee as I,h as M,ae as V,Q as a,te as m};
