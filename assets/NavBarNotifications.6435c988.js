import{a as V}from"./formatters.1ccc6423.js";import{V as u}from"./VBtn.128ee40e.js";import{V as f}from"./VBadge.eea4bcb7.js";import{o,b as n,w as e,p as t,C as b,E as _,x as r,y as g,c as s,F as v,a as h,q as N,m as x,O as k,Q as w,U as A,W as B}from"./index.764fa641.js";import{V as C}from"./VMenu.5a4c7499.js";import{V as I,a as l}from"./VList.087e0332.js";import{V as L}from"./VChip.45b08186.js";import{V as y}from"./VDivider.86ef8122.js";import{V as P}from"./VListItemAction.31f9b506.js";import{V as T}from"./VAvatar.749e1281.js";import"./index.0d4b9ec4.js";import"./router.f23e0574.js";import"./position.e8a567bf.js";import"./VImg.24c100fd.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.ef2fd3bb.js";import"./VOverlay.e62ab71a.js";import"./lazy.3f8feea3.js";import"./easing.36b781ab.js";import"./dialog-transition.1d23be67.js";import"./index.5b2ed471.js";const q={key:0},z={class:"whitespace-no-wrap text-medium-emphasis"},F={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:null,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["click:readAllNotifications"],setup(m,{emit:c}){const i=m;return(p,d)=>(o(),n(f,k({"model-value":!!i.badgeProps},i.badgeProps),{default:e(()=>[t(u,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[t(f,{"model-value":!!i.notifications.length,color:"error",content:"4"},{default:e(()=>[t(b,{icon:"tabler-bell",size:"24"})]),_:1},8,["model-value"]),t(C,{activator:"parent",width:"380px",location:i.location,offset:"14px"},{default:e(()=>[t(I,{class:"py-0"},{default:e(()=>[t(l,{title:"Notifications",class:"notification-section",height:"48px"},{append:e(()=>[i.notifications.length?(o(),n(L,{key:0,color:"primary",size:"small"},{default:e(()=>[_(r(i.notifications.length)+" New ",1)]),_:1})):g("",!0)]),_:1}),t(y),(o(!0),s(v,null,h(i.notifications,a=>(o(),s(v,{key:a.title},[t(l,{title:a.title,subtitle:a.subtitle,link:"",lines:"one","min-height":"66px"},{prepend:e(()=>[t(P,{start:""},{default:e(()=>[t(T,{color:a.color||"primary",image:a.img||void 0,icon:a.icon||void 0,size:"40",variant:"tonal"},{default:e(()=>[a.text?(o(),s("span",q,r(N(V)(a.text)),1)):g("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:e(()=>[x("small",z,r(a.time),1)]),_:2},1032,["title","subtitle"]),t(y)],64))),128)),t(l,{class:"notification-section"},{default:e(()=>[t(u,{block:"",onClick:d[0]||(d[0]=a=>p.$emit("click:readAllNotifications"))},{default:e(()=>[_(" READ ALL NOTIFICATIONS ")]),_:1})]),_:1})]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"]))}},O="/assets/paypal.01b645d1.svg",oe={__name:"NavBarNotifications",setup(m){const c=[{img:w,title:"Congratulation Flora! \u{1F389}",subtitle:"Won the monthly best seller badge",time:"Today"},{text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday"},{img:A,title:"New message received \u{1F44B}\u{1F3FB}",subtitle:"You have 10 unread messages",time:"11 Aug"},{img:O,title:"Paypal",subtitle:"Received Payment",time:"25 May",color:"error"},{img:B,title:"Received Order \u{1F4E6}",subtitle:"New order received from john",time:"19 Mar"}];return(i,p)=>(o(),n(F,{notifications:c}))}};export{oe as default};