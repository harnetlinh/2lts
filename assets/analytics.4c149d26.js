import{z,A as O,br as p,o as f,b as A,w as e,p as t,m as l,C as y,c as x,F as k,a as T,E as g,x as b,q as V,L as H,k as C,an as M,a3 as P,a4 as Y,aG as J}from"./index.764fa641.js";import{V as B}from"./vue3-apexcharts.common.d996eb5d.js";import{a as q,b as G,d as X,c as F,V as L}from"./VCard.6ffaaf4c.js";import{V as N}from"./VBtn.128ee40e.js";import{V as R}from"./VMenu.5a4c7499.js";import{V as w,a as S,b as I,c as j}from"./VList.087e0332.js";import{V as $,a as m}from"./VRow.3e76e822.js";import{V as K}from"./VChip.45b08186.js";import{V as D}from"./VAvatar.749e1281.js";import{V as Q}from"./position.e8a567bf.js";import"./vue.runtime.esm-bundler.7f6aba93.js";import"./router.f23e0574.js";import"./VImg.24c100fd.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.ef2fd3bb.js";import"./VOverlay.e62ab71a.js";import"./lazy.3f8feea3.js";import"./easing.36b781ab.js";import"./dialog-transition.1d23be67.js";import"./index.5b2ed471.js";import"./VDivider.86ef8122.js";const U={class:"mt-n4 me-n2"},Z={class:"d-flex align-center gap-2 mb-2 pb-1 flex-wrap"},tt=l("h4",{class:"text-4xl font-weight-semibold"}," 1200 ",-1),et=l("p",{class:"text-sm"}," H\u1ED3 s\u01A1 \u0111\xE3 \u0111\u01B0\u1EE3c x\u1EED l\xFD trong 7 ng\xE0y qua ",-1),at={class:"border rounded mt-3 pa-4"},st={class:"d-flex align-center"},rt={class:"text-base font-weight-medium"},ot={class:"text-h6 my-3"},lt={__name:"AnalyticsEarningReportsWeeklyOverview",setup(c){const _=z(),i=[{data:[40,65,50,45,90,55,70]}],u=O(()=>{const o=_.current.value.colors,h=_.current.value.variables;return{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"60%",columnWidth:"38%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-30,bottom:0,left:-10,right:-10}},colors:[`rgba(${p(o.primary)})`,`rgba(${p(o.primary)})`,`rgba(${p(o.primary)})`,`rgba(${p(o.primary)})`,o.primary,`rgba(${p(o.primary)},${h["pressed-opacity"]})`,`rgba(${p(o.primary)},${h["pressed-opacity"]})`],dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:["Th2","Th3","Th4","Th5","Th6","Th7","CN"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:`rgba(${p(o["on-surface"])},${h["disabled-opacity"]})`,fontSize:"14px",fontFamily:"Public Sans"}}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1},responsive:[{breakpoint:1025,options:{chart:{height:199}}}]}}),d=[{color:"primary",icon:"tabler-currency-dollar",title:"S\u1ED1 h\u1ED3 s\u01A1 trung b\xECnh 1 nh\xE2n vi\xEAn ti\u1EBFp nh\u1EADn th\u1EDDi \u0111i\u1EC3m",amount:"3",progress:"40"},{color:"info",icon:"tabler-chart-pie-2",title:"S\u1ED1 ng\u01B0\u1EDDi ch\u1EDD trung b\xECnh m\u1ED7i gi\u1EDD ",amount:"5",progress:"25"},{color:"error",icon:"tabler-brand-paypal",title:"Th\u1EDDi gian ch\u1EDD trung b\xECnh",amount:"12,5 ph\xFAt",progress:"65"},{color:"info",icon:"tabler-brand-paypal",title:"Th\u1EDDi gian x\u1EED l\xFD trung b\xECnh",amount:"5,3 ph\xFAt",progress:"65"}];return(o,h)=>(f(),A(L,null,{default:e(()=>[t(q,{class:"pb-sm-0"},{append:e(()=>[l("div",U,[t(N,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(y,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(w,null,{default:e(()=>[(f(),x(k,null,T(["View More","Delete"],(n,s)=>t(S,{key:s,value:s},{default:e(()=>[t(I,null,{default:e(()=>[g(b(n),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(G,null,{default:e(()=>[g("B\xE1o c\xE1o tu\u1EA7n")]),_:1}),t(X)]),_:1}),t(F,null,{default:e(()=>[t($,null,{default:e(()=>[t(m,{cols:"12",sm:"5",class:"d-flex flex-column align-self-end"},{default:e(()=>[l("div",Z,[tt,t(K,{label:"",color:"success"},{default:e(()=>[g(" +14.2% ")]),_:1})]),et]),_:1}),t(m,{cols:"12",sm:"7",class:"pt-0"},{default:e(()=>[t(V(B),{options:V(u),series:i,height:"190"},null,8,["options"])]),_:1})]),_:1}),l("div",at,[t($,null,{default:e(()=>[(f(),x(k,null,T(d,n=>t(m,{key:n.title,cols:"12",sm:"3"},{default:e(()=>[l("div",st,[t(D,{rounded:"",size:"30",color:n.color,variant:"tonal",class:"me-2"},{default:e(()=>[t(y,{icon:n.icon},null,8,["icon"])]),_:2},1032,["color"]),l("h6",rt,b(n.title),1)]),l("h6",ot,b(n.amount),1),t(Q,{"model-value":n.progress,color:n.color,height:"8",rounded:"","rounded-bar":""},null,8,["model-value","color"])]),_:2},1024)),64))]),_:1})])]),_:1})]),_:1}))}};const nt=c=>(P("data-v-de4e6b71"),c=c(),Y(),c),it={class:"mt-n4 me-n2"},ct=nt(()=>l("div",{class:"mb-4"},[l("h4",{class:"text-4xl font-weight-semibold mb-2"}," 80 "),l("p",{class:"text-sm"}," T\u1ED5ng s\u1ED1 ng\u01B0\u1EDDi ch\u1EDD x\u1EED l\xFD ")],-1)),ut={__name:"AnalyticsSupportTracker",setup(c){const _=z(),i=[85],u=C(""),d=O(()=>{const s=_.current.value.colors,a=_.current.value.variables;return{labels:["Hi\u1EC7u su\u1EA5t"],chart:{type:"radialBar"},plotOptions:{radialBar:{offsetY:10,startAngle:-140,endAngle:130,hollow:{size:"65%"},track:{background:s.surface,strokeWidth:"100%"},dataLabels:{name:{offsetY:-20,color:`rgba(${p(s["on-background"])},${a["disabled-opacity"]})`,fontSize:"14px",fontWeight:"400",fontFamily:"Public Sans"},value:{offsetY:10,color:`rgba(${p(s["on-background"])},${a["high-emphasis-opacity"]})`,fontSize:"38px",fontWeight:"600",fontFamily:"Public Sans"}}}},colors:["green"],fill:{type:"gradient",gradient:{}},stroke:{dashArray:10},grid:{padding:{top:-20,bottom:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:960,options:{chart:{height:280}}}]}}),o=[{avatarColor:"primary",avatarIcon:"tabler-ticket",title:"\u0110ang x\u1EBFp h\xE0ng",subtitle:"60"},{avatarColor:"info",avatarIcon:"tabler-user",title:"Nh\xE2n vi\xEAn",subtitle:"10"},{avatarColor:"warning",avatarIcon:"tabler-clock",title:"Ch\u1EDD trung b\xECnh",subtitle:"12 ph\xFAt"}],h=(s,a)=>Math.floor(Math.random()*(a-s+1)+s),n=()=>{setInterval(()=>{let s=h(40,80);i.shift(),i.push(s),s>60?d.color=["red"]:d.color=["green"],u.value.updateSeries(i,!1,!0)},1500)};return M(()=>{n()}),(s,a)=>(f(),A(L,{title:"V\u0103n ph\xF2ng Thanh Xu\xE2n"},{append:e(()=>[l("div",it,[t(N,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(y,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(w,null,{default:e(()=>[(f(),x(k,null,T(["View More","Delete"],(r,v)=>t(S,{key:v,value:v},{default:e(()=>[t(I,null,{default:e(()=>[g(b(r),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(F,null,{default:e(()=>[t($,null,{default:e(()=>[t(m,{cols:"12",md:"5",sm:"6",class:"mt-auto"},{default:e(()=>[ct,t(w,{class:"card-list"},{default:e(()=>[(f(),x(k,null,T(o,r=>t(S,{key:r.title},{prepend:e(()=>[t(D,{rounded:"",size:"34",color:r.avatarColor,variant:"tonal"},{default:e(()=>[t(y,{icon:r.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),default:e(()=>[t(I,{class:"font-weight-medium"},{default:e(()=>[g(b(r.title),1)]),_:2},1024),t(j,{class:"opacity-100 text-disabled"},{default:e(()=>[g(b(r.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),t(m,{cols:"12",md:"7",sm:"6"},{default:e(()=>[t(V(B),{ref_key:"chartRef",ref:u,"update-args":[!0,!1],options:V(d),series:i,height:"360"},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1}))}},dt=H(ut,[["__scopeId","data-v-de4e6b71"]]);const pt=c=>(P("data-v-642cc86e"),c=c(),Y(),c),ht={class:"mt-n4 me-n2"},ft=pt(()=>l("div",{class:"mb-4"},[l("h4",{class:"text-4xl font-weight-semibold mb-2"}," 80 "),l("p",{class:"text-sm"}," T\u1ED5ng s\u1ED1 ng\u01B0\u1EDDi ch\u1EDD x\u1EED l\xFD ")],-1)),mt={__name:"AnalyticsSupportTracker2",setup(c){const _=z(),i=[85],u=C(""),d=O(()=>{const s=_.current.value.colors,a=_.current.value.variables;return{labels:["Hi\u1EC7u su\u1EA5t"],chart:{type:"radialBar"},plotOptions:{radialBar:{offsetY:10,startAngle:-140,endAngle:130,hollow:{size:"65%"},track:{background:s.surface,strokeWidth:"100%"},dataLabels:{name:{offsetY:-20,color:`rgba(${p(s["on-background"])},${a["disabled-opacity"]})`,fontSize:"14px",fontWeight:"400",fontFamily:"Public Sans"},value:{offsetY:10,color:`rgba(${p(s["on-background"])},${a["high-emphasis-opacity"]})`,fontSize:"38px",fontWeight:"600",fontFamily:"Public Sans"}}}},colors:["green"],fill:{type:"gradient",gradient:{}},stroke:{dashArray:10},grid:{padding:{top:-20,bottom:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:960,options:{chart:{height:280}}}]}}),o=[{avatarColor:"primary",avatarIcon:"tabler-ticket",title:"\u0110ang x\u1EBFp h\xE0ng",subtitle:"60"},{avatarColor:"info",avatarIcon:"tabler-user",title:"Nh\xE2n vi\xEAn",subtitle:"10"},{avatarColor:"warning",avatarIcon:"tabler-clock",title:"Ch\u1EDD trung b\xECnh",subtitle:"12 ph\xFAt"}],h=(s,a)=>Math.floor(Math.random()*(a-s+1)+s),n=()=>{setInterval(()=>{let s=h(40,80);i.shift(),i.push(s),s>60?d.color=["red"]:d.color=["green"],u.value.updateSeries(i,!1,!0)},1500)};return M(()=>{n()}),(s,a)=>(f(),A(L,{title:"V\u0103n ph\xF2ng C\u1EA7u Gi\u1EA5y"},{append:e(()=>[l("div",ht,[t(N,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(y,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(w,null,{default:e(()=>[(f(),x(k,null,T(["View More","Delete"],(r,v)=>t(S,{key:v,value:v},{default:e(()=>[t(I,null,{default:e(()=>[g(b(r),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(F,null,{default:e(()=>[t($,null,{default:e(()=>[t(m,{cols:"12",md:"5",sm:"6",class:"mt-auto"},{default:e(()=>[ft,t(w,{class:"card-list"},{default:e(()=>[(f(),x(k,null,T(o,r=>t(S,{key:r.title},{prepend:e(()=>[t(D,{rounded:"",size:"34",color:r.avatarColor,variant:"tonal"},{default:e(()=>[t(y,{icon:r.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),default:e(()=>[t(I,{class:"font-weight-medium"},{default:e(()=>[g(b(r.title),1)]),_:2},1024),t(j,{class:"opacity-100 text-disabled"},{default:e(()=>[g(b(r.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),t(m,{cols:"12",md:"7",sm:"6"},{default:e(()=>[t(V(B),{ref_key:"chartRef",ref:u,"update-args":[!0,!1],options:V(d),series:i,height:"360"},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1}))}},_t=H(mt,[["__scopeId","data-v-642cc86e"]]);const Rt={__name:"analytics",setup(c){const i=z().current.value.colors,u={title:"Customers per line",color:"success",icon:"tabler-credit-card",stats:"97.5k",height:120,series:[{data:[20,25,23,21,30,28,26]}],chartOptions:{chart:{height:110,type:"area",parentHeightOffset:0,toolbar:{show:!1},sparkline:{enabled:!0}},tooltip:{enabled:!1},markers:{colors:"transparent",strokeColors:"transparent"},grid:{show:!1},colors:[i.success],fill:{type:"gradient",gradient:{shadeIntensity:.8,opacityFrom:.6,opacityTo:.1}},dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{show:!0,lines:{show:!1},labels:{show:!1},stroke:{width:0},axisBorder:{show:!1}},yaxis:{stroke:{width:0},show:!1}}},d=C(""),o=C([]);function h(a){let r="";const v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",E=v.length;let W=0;for(;W<a;)r+=v.charAt(Math.floor(Math.random()*E)),W+=1;return r}const n=(a,r)=>Math.floor(Math.random()*(r-a+1)+a),s=()=>{setInterval(()=>{o.value.forEach(a=>{let r=n(4,20);a.series[0].data.shift(),a.series[0].data.push(r),d.value=h(10)})},2e3)};return J(()=>{let a=Object.assign({},u);a=JSON.parse(JSON.stringify(a)),o.value.push({...a}),a=JSON.parse(JSON.stringify(a)),o.value.push({...a}),a=Object.assign({},u),o.value.push({...a}),a=Object.assign({},u),o.value.push({...a})}),M(()=>{s()}),(a,r)=>(f(),A($,{class:"match-height"},{default:e(()=>[t(m,{cols:"12",md:"6"},{default:e(()=>[t(dt)]),_:1}),t(m,{cols:"12",md:"6"},{default:e(()=>[t(_t)]),_:1}),t(m,{cols:"12",md:"12"},{default:e(()=>[t(lt)]),_:1})]),_:1}))}};export{Rt as default};