import{L as S,d as x,t as A,k as l,$ as C,a0 as I,o as p,c as d,m as c,p as i,w as P,q as t,y as V,O as k,D as m,F as B,a1 as D,C as N,j as q,a2 as L,a3 as R,a4 as T}from"./index.2f546787.js";import{V as w}from"./VBtn.157d9e33.js";import"./router.bb72d0d0.js";import"./position.7270b83d.js";const b=n=>(R("data-v-d2275827"),n=n(),T(),n),E={key:0,class:"d-none d-md-flex align-center text-disabled"},O=b(()=>c("span",{class:"me-3"},"Search",-1)),U=b(()=>c("span",{class:"meta-key"},"\u2318K",-1)),z=[O,U],$=x({inheritAttrs:!1}),j=Object.assign($,{__name:"NavSearchBar",setup(n){const{appContentLayoutNav:g}=A(),e=l(!1),h=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],_=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),f=q();C(()=>{D.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const v=r=>{f.push(r.url),e.value=!1,s.value=""},y=I(()=>L(()=>import("./AppBarSearch.c1a26508.js"),["assets/AppBarSearch.c1a26508.js","assets/index.2f546787.js","assets/index.3157ff87.css","assets/VCard.1571b874.js","assets/VAvatar.77447f1c.js","assets/router.bb72d0d0.js","assets/router.1e6db107.css","assets/VImg.65561112.js","assets/VImg.3a095760.css","assets/VAvatar.1c9d231f.css","assets/position.7270b83d.js","assets/position.5aa28860.css","assets/VCard.ec4d23b9.css","assets/VTextField.74b674b3.js","assets/VField.f3c9dc47.js","assets/index.4a781e54.js","assets/VInput.6dd78110.js","assets/VInput.194111c3.css","assets/easing.36b781ab.js","assets/VField.cb4cc03f.css","assets/forwardRefs.c003b6b8.js","assets/VCounter.52067be9.js","assets/VCounter.66d880d8.css","assets/VTextField.ad436dbf.css","assets/VBtn.157d9e33.js","assets/VBtn.1958adaf.css","assets/VDivider.65e3cae6.js","assets/VDivider.5d6d66e0.css","assets/VList.c74f4ad9.js","assets/VList.f3553822.css","assets/VRow.dfc032a5.js","assets/VRow.0b79ff68.css","assets/VDialog.1039e72c.js","assets/scopeId.48a38ab2.js","assets/VOverlay.e0059400.js","assets/lazy.5030bc48.js","assets/VOverlay.72fa3373.css","assets/dialog-transition.36bf16a5.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.fae80d89.css"]));return(r,a)=>(p(),d(B,null,[c("div",k({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:a[0]||(a[0]=o=>e.value=!t(e))}),[i(w,{icon:"",variant:"text",color:"default",size:"small"},{default:P(()=>[i(N,{icon:"tabler-search",size:"24"})]),_:1}),t(g)==="vertical"?(p(),d("span",E,z)):V("",!0)],16),i(t(y),{isDialogVisible:t(e),"onUpdate:isDialogVisible":a[1]||(a[1]=o=>m(e)?e.value=o:null),"search-query":t(s),"onUpdate:search-query":a[2]||(a[2]=o=>m(s)?s.value=o:null),"search-results":t(u),suggestions:h,"no-data-suggestion":_,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64))}}),Q=S(j,[["__scopeId","data-v-d2275827"]]);export{Q as default};