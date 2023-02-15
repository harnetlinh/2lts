import{k as N,o as p,b as L,w as t,p as e,m as s,C as d,q as o,D as B,E as T,r as xe,c as $,F as k,a as M,O as te,x as g,bc as be,a1 as K,bd as oe,H as F,I as U,be as I,s as W,P as ne,y as ae,A as Q,Z as le,G as ge}from"./index.b30bc5d7.js";import{a as $e,V as j,c as O}from"./VCard.946238ba.js";import{V as P}from"./VSpacer.11539aee.js";import{V as X}from"./VTextField.7965c273.js";import{V as D}from"./VDivider.d7da01ff.js";import{V as ye}from"./VTextarea.979734eb.js";import{V as f}from"./VBtn.3982f2a4.js";import{V as q}from"./VBadge.85f163e3.js";import{f as Ce,b as ke}from"./formatters.1ccc6423.js";import{V as Ve}from"./VChip.8ea78332.js";import{V as H}from"./VMenu.340a4d70.js";import{V as G,a as Z,b as J}from"./VList.1a543713.js";import{V as re}from"./VAvatar.ea994f28.js";import{V as Y}from"./VImg.b8fceca5.js";import{V as de}from"./VNavigationDrawer.5df6016a.js";import{u as ze,V as we,a as Ee}from"./useResponsiveSidebar.a6a257b3.js";import{b as se}from"./route-block.182765af.js";import{V as ie}from"./VCheckbox.810d85c5.js";import"./router.6aa893a8.js";import"./position.21e7bbe2.js";/* empty css                   */import"./VField.279eb002.js";import"./index.61797de3.js";import"./VInput.86c68591.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.38b26556.js";import"./index.0d4b9ec4.js";import"./scopeId.4c4c2207.js";import"./VOverlay.33c3b9db.js";import"./lazy.82e915d4.js";import"./dialog-transition.77d0dcc2.js";import"./ssrBoot.c5fb5fbd.js";import"./VCheckboxBtn.ce719597.js";import"./VSelectionControl.c4e346c3.js";const Se={class:"d-flex align-center"},Me=s("span",{class:"font-weight-semibold"},"Compose Mail",-1),Le={class:"pe-5"},De=s("div",{class:"text-sm text-disabled"}," To: ",-1),Te=s("span",{class:"cursor-pointer"},"Cc | Bcc",-1),Ae=s("div",{class:"text-sm text-disabled"}," Subject: ",-1),Ie={class:"d-flex align-center px-5 py-4"},Ne={__name:"ComposeDialog",emits:["close"],setup(v,{emit:h}){const n=N(""),r=N(""),C=N(""),V=()=>{n.value=r.value=C.value=""};return(w,i)=>(p(),L(j,{class:"email-compose-dialog",elevation:"24"},{default:t(()=>[e($e,{class:"py-3 px-5"},{default:t(()=>[s("div",Se,[Me,e(P),e(d,{size:"20",icon:"tabler-minus",class:"me-4",onClick:i[0]||(i[0]=x=>w.$emit("close"))}),e(d,{size:"20",icon:"tabler-x",onClick:i[1]||(i[1]=x=>{w.$emit("close"),V()})})])]),_:1}),s("div",Le,[e(X,{modelValue:o(n),"onUpdate:modelValue":i[2]||(i[2]=x=>B(n)?n.value=x:null),density:"compact"},{"prepend-inner":t(()=>[De]),append:t(()=>[Te]),_:1},8,["modelValue"])]),e(D),e(X,{modelValue:o(r),"onUpdate:modelValue":i[3]||(i[3]=x=>B(r)?r.value=x:null),density:"compact"},{"prepend-inner":t(()=>[Ae]),_:1},8,["modelValue"]),e(D),e(ye,{modelValue:o(C),"onUpdate:modelValue":i[4]||(i[4]=x=>B(C)?C.value=x:null),placeholder:"Message"},null,8,["modelValue"]),e(D),s("div",Ie,[e(f,null,{default:t(()=>[T("Send")]),_:1}),e(d,{icon:"tabler-link",class:"ms-4 cursor-pointer"}),e(P),e(d,{icon:"tabler-dots-vertical",size:"20",class:"cursor-pointer"}),e(d,{icon:"tabler-trash",size:"20",class:"ms-4 cursor-pointer",onClick:i[5]||(i[5]=x=>{w.$emit("close"),V()})})])]),_:1}))}};const Re={class:"pa-5"},Fe={class:"email-filters-labels"},Ue=["href","onClick"],Pe=s("li",{class:"text-xs d-block text-uppercase text-disabled mt-6"}," LABELS ",-1),Be=["href","onClick"],Oe={__name:"EmailLeftSidebarContent",emits:["toggleComposeDialogVisibility"],setup(v,{emit:h}){const n=[{title:"Inbox",prependIcon:"tabler-mail",to:{name:"apps-email"}},{title:"Sent",prependIcon:"tabler-send",to:{name:"apps-email-filter",params:{filter:"sent"}}},{title:"Draft",prependIcon:"tabler-pencil",to:{name:"apps-email-filter",params:{filter:"draft"}}},{title:"Starred",prependIcon:"tabler-star",to:{name:"apps-email-filter",params:{filter:"starred"}}},{title:"Spam",prependIcon:"tabler-help",to:{name:"apps-email-filter",params:{filter:"spam"}}},{title:"Trash",prependIcon:"tabler-trash",to:{name:"apps-email-filter",params:{filter:"trashed"}}}],r=[{title:"Personal",color:"success",to:{name:"apps-email-label",params:{label:"personal"}}},{title:"Company",color:"primary",to:{name:"apps-email-label",params:{label:"company"}}},{title:"Important",color:"warning",to:{name:"apps-email-label",params:{label:"important"}}},{title:"Private",color:"error",to:{name:"apps-email-label",params:{label:"private"}}}];return(C,V)=>{const w=xe("RouterLink");return p(),$(k,null,[s("div",Re,[e(f,{block:"",onClick:V[0]||(V[0]=i=>C.$emit("toggleComposeDialogVisibility"))},{default:t(()=>[T(" Compose ")]),_:1})]),s("ul",Fe,[(p(),$(k,null,M(n,i=>e(w,{key:i.title,class:"d-flex items-center cursor-pointer",to:i.to,custom:""},{default:t(({isActive:x,href:b,navigate:E})=>[s("li",te(C.$attrs,{href:b,class:[x&&"email-filter-active text-primary","cursor-pointer"],onClick:E}),[e(d,{icon:i.prependIcon,class:"me-3",size:"20"},null,8,["icon"]),s("span",null,g(i.title),1)],16,Ue)]),_:2},1032,["to"])),64)),Pe,(p(),$(k,null,M(r,i=>e(w,{key:i.title,class:"d-flex items-center",to:i.to,custom:""},{default:t(({isActive:x,href:b,navigate:E})=>[s("li",te(C.$attrs,{href:b,class:[x&&"email-label-active text-primary","cursor-pointer"],onClick:E}),[e(q,{inline:"",dot:"",color:i.color,class:"me-4"},null,8,["color"]),s("span",null,g(i.title),1)],16,Be)]),_:2},1032,["to"])),64))])],64)}}},ee=be("email",{state:()=>({emails:[],emailsMeta:{draft:0,inbox:0,spam:0}}),actions:{async fetchEmails(v){const h=await K.get("/apps/email/emails",{params:v}),{emails:n,emailsMeta:r}=h.data;this.emails=n,this.emailsMeta=r},async updateEmails(v,h){return K.post("/apps/email/update-emails/",{ids:v,data:h})},async updateEmailLabels(v,h){return K.post("/apps/email/update-emails-label",{ids:v,label:h})}}}),me=()=>{const v=oe(),h=ee();return{labels:[{title:"personal",color:"success"},{title:"company",color:"primary"},{title:"important",color:"warning"},{title:"private",color:"error"}],resolveLabelColor:i=>i==="personal"?"success":i==="company"?"primary":i==="important"?"warning":i==="private"?"error":"secondary",shallShowMoveToActionFor:i=>i==="trash"?v.params.filter!=="trashed":i==="inbox"?!(v.params.filter===void 0||v.params.filter==="sent"||v.params.filter==="draft"):i==="spam"?!(v.params.filter==="spam"||v.params.filter==="sent"||v.params.filter==="draft"):!1,emailMoveToFolderActions:[{action:"inbox",icon:"tabler-mail"},{action:"spam",icon:"tabler-alert-octagon"},{action:"trash",icon:"tabler-trash"}],moveSelectedEmailTo:(i,x)=>{const b={};i==="inbox"?(v.params.filter==="trashed"&&(b.isDeleted=!1),b.folder="inbox"):i==="spam"?(v.params.filter==="trashed"&&(b.isDeleted=!1),b.folder="spam"):i==="trash"&&(b.isDeleted=!0),h.updateEmails(x,b)}}};const je={class:"email-view-header d-flex align-center px-5 py-3"},qe={class:"d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2"},He={class:"text-body-1 font-weight-medium text-high-emphasis text-truncate"},Ge={class:"d-flex flex-wrap gap-1"},Ze={class:"d-flex align-center"},Je={class:"email-view-action-bar d-flex align-center text-medium-emphasis px-5"},Ke={class:"d-flex align-start"},Qe={class:"d-flex flex-wrap flex-grow-1 overflow-hidden"},We={class:"text-truncate"},Xe={class:"d-block text-high-emphasis font-weight-medium text-truncate"},Ye={class:"text-sm text-disabled"},et={class:"d-flex align-center"},tt={class:"me-2"},at=["innerHTML"],lt=s("span",null,"Attachments",-1),st=s("div",{class:"text-base"},[T(" Click here to "),s("span",{class:"text-primary cursor-pointer"}," Reply "),T(" or "),s("span",{class:"text-primary cursor-pointer"}," Forward ")],-1),it={__name:"EmailView",props:{email:{type:null,required:!0},emailMeta:{type:Object,required:!0}},emits:["refresh","navigated","close","trash","unread","star","unstar"],setup(v,{emit:h}){const n=v,r=ee(),{labels:C,resolveLabelColor:V,emailMoveToFolderActions:w,shallShowMoveToActionFor:i,moveSelectedEmailTo:x}=me(),b=u=>{x(u,[n.email.id]),h("refresh"),h("close")},E=u=>{r.updateEmailLabels([n.email.id],u),h("refresh")};return(u,y)=>(p(),L(de,{temporary:"","model-value":!!n.email,location:"right",scrim:!1,floating:"",class:"email-view"},{default:t(()=>[n.email?(p(),$(k,{key:0},[s("div",je,[e(f,{icon:"",variant:"text",color:"default",size:"small",class:"me-4 flip-in-rtl",onClick:y[0]||(y[0]=m=>u.$emit("close"))},{default:t(()=>[e(d,{size:"28",icon:"tabler-chevron-left"})]),_:1}),s("div",qe,[s("h2",He,g(n.email.subject),1),s("div",Ge,[(p(!0),$(k,null,M(n.email.labels,m=>(p(),L(Ve,{key:m,color:o(V)(m),density:"comfortable",class:"px-2 text-capitalize me-2 flex-shrink-0"},{default:t(()=>[T(g(m),1)]),_:2},1032,["color"]))),128))])]),s("div",Ze,[e(f,{icon:"",variant:"text",color:"default",size:"small",disabled:!n.emailMeta.hasPreviousEmail,class:"text-medium-emphasis flip-in-rtl",onClick:y[1]||(y[1]=m=>u.$emit("navigated","previous"))},{default:t(()=>[e(d,{size:"22",icon:"tabler-chevron-left"})]),_:1},8,["disabled"]),e(f,{icon:"",variant:"text",color:"default",size:"small",class:"text-medium-emphasis flip-in-rtl",disabled:!n.emailMeta.hasNextEmail,onClick:y[2]||(y[2]=m=>u.$emit("navigated","next"))},{default:t(()=>[e(d,{size:"22",icon:"tabler-chevron-right"})]),_:1},8,["disabled"])])]),e(D),s("div",Je,[F(e(f,{icon:"",variant:"text",color:"default",size:"small",onClick:y[3]||(y[3]=m=>{u.$emit("trash"),u.$emit("close")})},{default:t(()=>[e(d,{size:"22",icon:"tabler-trash"})]),_:1},512),[[U,!n.email.isDeleted]]),e(f,{icon:"",variant:"text",color:"default",size:"small",onClick:y[4]||(y[4]=I(m=>{u.$emit("unread"),u.$emit("close")},["stop"]))},{default:t(()=>[e(d,{size:"22",icon:"tabler-mail"})]),_:1}),e(f,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(d,{size:"22",icon:"tabler-folder"}),e(H,{activator:"parent"},{default:t(()=>[e(G,{density:"compact"},{default:t(()=>[(p(!0),$(k,null,M(o(w),m=>(p(),L(Z,{key:m.title,class:W([o(i)(m.action)?"d-flex":"d-none","items-center"]),href:"#",onClick:A=>b(m.action)},{prepend:t(()=>[e(d,{icon:m.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(J,{class:"text-capitalize"},{default:t(()=>[T(g(m.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(f,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(d,{size:"22",icon:"tabler-tag"}),e(H,{activator:"parent"},{default:t(()=>[e(G,{density:"compact"},{default:t(()=>[(p(!0),$(k,null,M(o(C),m=>(p(),L(Z,{key:m.title,href:"#",onClick:I(A=>E(m.title),["stop"])},{prepend:t(()=>[e(q,{inline:"",color:o(V)(m.title),dot:""},null,8,["color"])]),default:t(()=>[e(J,{class:"ms-2 text-capitalize"},{default:t(()=>[T(g(m.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(P),e(f,{icon:"",variant:"text",size:"small",color:n.email.isStarred?"warning":"default",onClick:y[5]||(y[5]=m=>{var A;(A=n.email)!=null&&A.isStarred?u.$emit("unstar"):u.$emit("star"),u.$emit("refresh")})},{default:t(()=>[e(d,{size:"22",icon:"tabler-star"})]),_:1},8,["color"]),e(f,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(d,{size:"22",icon:"tabler-dots-vertical"})]),_:1})]),e(D),e(o(ne),{tag:"div",class:"mail-content-container flex-grow-1",options:{wheelPropagation:!1}},{default:t(()=>[e(j,{class:"ma-5"},{default:t(()=>[e(O,{class:"mail-header"},{default:t(()=>[s("div",Ke,[e(re,{class:"me-3"},{default:t(()=>[e(Y,{src:n.email.from.avatar,alt:n.email.from.name},null,8,["src","alt"])]),_:1}),s("div",Qe,[s("div",We,[s("span",Xe,g(n.email.from.name),1),s("span",Ye,g(n.email.from.email),1)]),e(P),s("div",et,[s("span",tt,g(o(Ce)(n.email.time)),1),F(e(f,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(d,{size:"22",icon:"tabler-link"})]),_:1},512),[[U,n.email.attachments.length]])])]),e(f,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(d,{size:"22",icon:"tabler-dots-vertical"})]),_:1})])]),_:1}),e(D),e(O,null,{default:t(()=>[s("div",{class:"text-base",innerHTML:n.email.message},null,8,at)]),_:1}),n.email.attachments.length?(p(),$(k,{key:0},[e(D),e(O,{class:"d-flex flex-column gap-y-4"},{default:t(()=>[lt,(p(!0),$(k,null,M(n.email.attachments,m=>(p(),$("div",{key:m.fileName,class:"d-flex align-center"},[e(Y,{src:m.thumbnail,alt:m.fileName,"aspect-ratio":"1","max-height":"24","max-width":"24",class:"me-2"},null,8,["src","alt"]),s("span",null,g(m.fileName),1)]))),128))]),_:1})],64)):ae("",!0)]),_:1}),e(j,{class:"mx-5 mb-5"},{default:t(()=>[e(O,{class:"font-weight-medium text-high-emphasis"},{default:t(()=>[st]),_:1})]),_:1})]),_:1})],64)):ae("",!0)]),_:1},8,["model-value"]))}};const ot={class:"d-flex align-center"},nt={class:"py-2 px-5 d-flex items-center"},rt=["onClick"],dt={class:"mx-2 text-body-1 font-weight-medium text-high-emphasis"},mt={class:"truncate"},ct={class:"email-meta"},ut={class:"text-disabled ms-2"},pt={class:"email-actions d-none"},ft={class:"py-4 px-5 text-center"},vt=s("span",{class:"text-high-emphasis"},"No items found.",-1),_t=[vt],ht={__name:"index",setup(v){const{isLeftSidebarOpen:h}=ze(),n=oe(),r=ee(),{labels:C,resolveLabelColor:V,emailMoveToFolderActions:w,shallShowMoveToActionFor:i,moveSelectedEmailTo:x}=me(),b=N(!1),E=N(""),u=N([]),y=c=>{const l=u.value.indexOf(c);l===-1?u.value.push(c):u.value.splice(l,1)},m=Q(()=>r.emails.length&&r.emails.length===u.value.length),A=Q(()=>Boolean(u.value.length)&&r.emails.length!==u.value.length),ce=()=>{u.value=m.value?[]:r.emails.map(c=>c.id)},_=N(null),ue=Q(()=>{const c={hasNextEmail:!1,hasPreviousEmail:!1};if(_.value){const l=r.emails.findIndex(a=>a.id===_.value.id);c.hasNextEmail=!!r.emails[l+1],c.hasPreviousEmail=!!r.emails[l-1]}return c}),R=async()=>{u.value=[],await r.fetchEmails({q:E.value,filter:n.params.filter,label:n.params.label})},S=async(c,l=u.value)=>{!l.length||(c==="trash"?r.updateEmails(l,{isDeleted:!0}):c==="spam"?r.updateEmails(l,{folder:"spam"}):c==="unread"?r.updateEmails(l,{isRead:!1}):c==="read"?r.updateEmails(l,{isRead:!0}):c==="star"?r.updateEmails(l,{isStarred:!0}):c==="unstar"&&r.updateEmails(l,{isStarred:!1}),await R())};le([E,()=>n.params.filter,()=>n.params.label],R,{immediate:!0}),le([()=>n.params.filter,()=>n.params.label],()=>{_.value=null});const pe=c=>{x(c,u.value),R()},fe=c=>{r.updateEmailLabels(u.value,c),R()},ve=c=>{if(!_.value)return;const l=r.emails.findIndex(z=>z.id===_.value.id),a=c==="previous"?l-1:l+1;_.value=r.emails[a]},_e=c=>{_.value=c,S("read",[c.id])},he=async()=>{await R(),_.value&&(_.value=r.emails.find(c=>c.id===_.value.id))};return(c,l)=>(p(),L(Ee,{class:"email-app-layout"},{default:t(()=>[e(de,{modelValue:o(h),"onUpdate:modelValue":l[1]||(l[1]=a=>B(h)?h.value=a:null),absolute:"",touchless:"",location:"start",temporary:c.$vuetify.display.mdAndDown},{default:t(()=>[e(Oe,{onToggleComposeDialogVisibility:l[0]||(l[0]=a=>b.value=!o(b))})]),_:1},8,["modelValue","temporary"]),e(it,{email:o(_),"email-meta":o(ue),onRefresh:he,onNavigated:ve,onClose:l[2]||(l[2]=a=>_.value=null),onRemove:l[3]||(l[3]=a=>S("trash",o(_)?[o(_).id]:[])),onUnread:l[4]||(l[4]=a=>S("unread",o(_)?[o(_).id]:[])),onStar:l[5]||(l[5]=a=>S("star",o(_)?[o(_).id]:[])),onUnstar:l[6]||(l[6]=a=>S("unstar",o(_)?[o(_).id]:[]))},null,8,["email","email-meta"]),e(we,null,{default:t(()=>[e(j,{flat:"",class:"h-100 d-flex flex-column"},{default:t(()=>[s("div",ot,[e(f,{variant:"text",color:"default",icon:"",size:"small",class:"d-lg-none ms-3",onClick:l[7]||(l[7]=a=>h.value=!0)},{default:t(()=>[e(d,{size:"24",icon:"tabler-menu-2"})]),_:1}),e(X,{modelValue:o(E),"onUpdate:modelValue":l[8]||(l[8]=a=>B(E)?E.value=a:null),density:"default",class:"email-search px-1 flex-grow-1","prepend-inner-icon":"tabler-search",placeholder:"Search email"},null,8,["modelValue"])]),e(D),s("div",nt,[e(ie,{"model-value":o(m),indeterminate:o(A),"onUpdate:modelValue":ce},null,8,["model-value","indeterminate"]),s("div",{class:"w-100 d-flex items-center action-bar-actions",style:ge({visibility:o(A)||o(m)?void 0:"hidden"})},[F(e(f,{variant:"text",color:"default",icon:"",size:"small",onClick:l[9]||(l[9]=a=>S("trash"))},{default:t(()=>[e(d,{size:"22",icon:"tabler-trash"})]),_:1},512),[[U,c.$route.params.filter!=="trashed"]]),e(f,{variant:"text",color:"default",icon:"",size:"small",onClick:l[10]||(l[10]=a=>S("unread"))},{default:t(()=>[e(d,{size:"22",icon:"tabler-mail"})]),_:1}),e(f,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(d,{size:"22",icon:"tabler-folder"}),e(H,{activator:"parent"},{default:t(()=>[e(G,{density:"compact"},{default:t(()=>[(p(!0),$(k,null,M(o(w),a=>(p(),L(Z,{key:a.title,class:W([o(i)(a.action)?"d-flex":"d-none","items-center"]),href:"#",onClick:z=>pe(a.action)},{prepend:t(()=>[e(d,{icon:a.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(J,{class:"text-capitalize"},{default:t(()=>[T(g(a.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(f,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(d,{size:"22",icon:"tabler-tag"}),e(H,{activator:"parent"},{default:t(()=>[e(G,{density:"compact"},{default:t(()=>[(p(!0),$(k,null,M(o(C),a=>(p(),L(Z,{key:a.title,href:"#",onClick:z=>fe(a.title)},{prepend:t(()=>[e(q,{inline:"",color:o(V)(a.title),dot:""},null,8,["color"])]),default:t(()=>[e(J,{class:"ms-2 text-capitalize"},{default:t(()=>[T(g(a.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})],4),e(P),e(f,{variant:"text",color:"default",icon:"",size:"small",onClick:R},{default:t(()=>[e(d,{size:"22",icon:"tabler-reload"})]),_:1}),e(f,{variant:"text",color:"default",icon:"",size:"small"},{default:t(()=>[e(d,{size:"22",icon:"tabler-dots-vertical"})]),_:1})]),e(D),e(o(ne),{tag:"ul",options:{wheelPropagation:!1},class:"email-list"},{default:t(()=>[(p(!0),$(k,null,M(o(r).emails,a=>F((p(),$("li",{key:a.id,class:W(["email-item d-flex align-center py-2 px-5 cursor-pointer",[{"email-read":a.isRead}]]),onClick:z=>_e(a)},[e(ie,{"model-value":o(u).includes(a.id),class:"flex-shrink-0","onUpdate:modelValue":z=>y(a.id),onClick:l[11]||(l[11]=I(()=>{},["stop"]))},null,8,["model-value","onUpdate:modelValue"]),e(f,{variant:"text",icon:"",size:"small",color:a.isStarred?"warning":"default",onClick:I(z=>S(a.isStarred?"unstar":"star",[a.id]),["stop"])},{default:t(()=>[e(d,{size:"22",icon:"tabler-star"})]),_:2},1032,["color","onClick"]),e(re,{class:"mx-2",size:"32"},{default:t(()=>[e(Y,{src:a.from.avatar,alt:a.from.name},null,8,["src","alt"])]),_:2},1024),s("h6",dt,g(a.from.name),1),s("span",mt,g(a.subject),1),e(P),s("div",ct,[(p(!0),$(k,null,M(a.labels,z=>(p(),L(q,{key:z,inline:"",color:o(V)(z),dot:""},null,8,["color"]))),128)),s("small",ut,g(o(ke)(a.time)),1)]),s("div",pt,[e(f,{variant:"text",color:"default",icon:"",size:"small",onClick:I(z=>S("trash",[a.id]),["stop"])},{default:t(()=>[e(d,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(f,{variant:"text",color:"default",icon:"",size:"small",onClick:I(z=>S(a.isRead?"unread":"read",[a.id]),["stop"])},{default:t(()=>[e(d,{size:"22",icon:a.isRead?"tabler-mail":"tabler-mail-opened"},null,8,["icon"])]),_:2},1032,["onClick"]),e(f,{variant:"text",color:"default",icon:"",size:"small",onClick:I(z=>S("spam",[a.id]),["stop"])},{default:t(()=>[e(d,{size:"22",icon:"tabler-alert-octagon"})]),_:2},1032,["onClick"])])],10,rt)),[[U,o(r).emails.length]])),128)),F(s("li",ft,_t,512),[[U,!o(r).emails.length]])]),_:1})]),_:1}),F(e(Ne,{onClose:l[12]||(l[12]=a=>b.value=!1)},null,512),[[U,o(b)]])]),_:1})]),_:1}))}};typeof se=="function"&&se(ht);export{ht as default};
