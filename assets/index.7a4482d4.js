import{k as _,Z as x,q as s,o,b as n,w as e,p as t,m as k,x as m,D as b,c as p,a as d,F as f,y as C,bd as T,a1 as w,E as v,C as V}from"./index.b30bc5d7.js";import{b as y}from"./route-block.182765af.js";import{V as B,a as D}from"./VTabs.c53344eb.js";import{a as h,V as I}from"./VRow.652382e6.js";import{V as L,a as N}from"./VWindowItem.ee07e3c3.js";import{V as z,c as R}from"./VCard.946238ba.js";import{V as E}from"./VAvatar.ea994f28.js";import{V as F,a as H,b as U}from"./VList.1a543713.js";import{V as W}from"./VBtn.3982f2a4.js";import"./router.6aa893a8.js";import"./easing.36b781ab.js";import"./VSlideGroup.e245b0b7.js";import"./index.61797de3.js";import"./lazy.82e915d4.js";import"./VImg.b8fceca5.js";import"./ssrBoot.c5fb5fbd.js";import"./position.21e7bbe2.js";import"./VDivider.d7da01ff.js";const q={class:"text-base mb-3"},A=k("span",null,"Back to help center",-1),S={__name:"index",setup(Z){const g=T(),l=_(),r=_("");return x(r,()=>w.get("/pages/help-center/subcategory",{params:{category:g.params.category,subcategory:g.params.subcategory}}).then(u=>{l.value=u.data.data,r.value=u.data.activeTab}),{immediate:!0}),(u,i)=>s(l)?(o(),n(I,{key:0},{default:e(()=>[t(h,{cols:"12",md:"4"},{default:e(()=>[k("h6",q,m(s(l).title),1),t(B,{modelValue:s(r),"onUpdate:modelValue":i[0]||(i[0]=a=>b(r)?r.value=a:null),direction:"vertical",class:"v-tabs-pill"},{default:e(()=>[(o(!0),p(f,null,d(s(l).subCategories,a=>(o(),n(D,{key:a.slug,value:a.slug,to:{name:"pages-help-center-category-subcategory",params:{category:s(l).slug,subcategory:a.slug}}},{default:e(()=>[v(m(a.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(h,{cols:"12",md:"8"},{default:e(()=>[t(L,{modelValue:s(r),"onUpdate:modelValue":i[1]||(i[1]=a=>b(r)?r.value=a:null),class:"disable-tab-transition"},{default:e(()=>[(o(!0),p(f,null,d(s(l).subCategories,a=>(o(),n(N,{key:a.slug,value:a.slug},{default:e(()=>[t(z,{title:a.title},{prepend:e(()=>[t(E,{color:"primary",variant:"tonal",rounded:"",size:"42"},{default:e(()=>[t(V,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),default:e(()=>[t(R,null,{default:e(()=>[t(F,{class:"card-list mb-6"},{default:e(()=>[(o(!0),p(f,null,d(a.articles,c=>(o(),n(H,{key:c.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:s(l).slug,subcategory:a.slug,article:c.slug}}},{prepend:e(()=>[t(V,{icon:"tabler-chevron-right",size:"18",class:"me-2"})]),default:e(()=>[t(U,{class:"text-primary"},{default:e(()=>[v(m(c.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024),t(W,{variant:"tonal",to:{name:"pages-help-center"}},{default:e(()=>[t(V,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),A]),_:1})]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):C("",!0)}};typeof y=="function"&&y(S);export{S as default};
