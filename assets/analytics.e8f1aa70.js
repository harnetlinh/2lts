import{z as M,A as F,br as p,o as b,b as z,w as t,p as e,m as n,C as V,c as w,F as T,a as S,E as h,x as _,q as i,L as J,k as I,an as B,a3 as Y,a4 as H,aG as q,O as x}from"./index.b30bc5d7.js";import{V as R}from"./vue3-apexcharts.common.aa6efa20.js";import{a as G,b as K,d as Q,c as D,V as E}from"./VCard.946238ba.js";import{V as N}from"./VBtn.3982f2a4.js";import{V as P}from"./VMenu.340a4d70.js";import{V as C,a as O,b as L,c as U}from"./VList.1a543713.js";import{V as $,a as c}from"./VRow.652382e6.js";import{V as X}from"./VChip.8ea78332.js";import{V as W}from"./VAvatar.ea994f28.js";import{V as Z}from"./position.21e7bbe2.js";import{_ as k}from"./CardStatisticsVertical.63b13f4d.js";import"./vue.runtime.esm-bundler.4073c65d.js";import"./router.6aa893a8.js";import"./VImg.b8fceca5.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.4c4c2207.js";import"./VOverlay.33c3b9db.js";import"./lazy.82e915d4.js";import"./easing.36b781ab.js";import"./dialog-transition.77d0dcc2.js";import"./index.61797de3.js";import"./VDivider.d7da01ff.js";const ee={class:"mt-n4 me-n2"},te={class:"d-flex align-center gap-2 mb-2 pb-1 flex-wrap"},ae=n("h4",{class:"text-4xl font-weight-semibold"}," $468 ",-1),se=n("p",{class:"text-sm"}," You informed of this week compared to last week ",-1),re={class:"border rounded mt-3 pa-4"},oe={class:"d-flex align-center"},le={class:"text-base font-weight-medium"},ie={class:"text-h6 my-3"},ne={__name:"AnalyticsEarningReportsWeeklyOverview",setup(g){const v=M(),u=[{data:[40,65,50,45,90,55,70]}],f=F(()=>{const s=v.current.value.colors,m=v.current.value.variables;return{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"60%",columnWidth:"38%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-30,bottom:0,left:-10,right:-10}},colors:[`rgba(${p(s.primary)})`,`rgba(${p(s.primary)})`,`rgba(${p(s.primary)})`,`rgba(${p(s.primary)})`,s.primary,`rgba(${p(s.primary)},${m["pressed-opacity"]})`,`rgba(${p(s.primary)},${m["pressed-opacity"]})`],dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:`rgba(${p(s["on-surface"])},${m["disabled-opacity"]})`,fontSize:"14px",fontFamily:"Public Sans"}}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1},responsive:[{breakpoint:1025,options:{chart:{height:199}}}]}}),d=[{color:"primary",icon:"tabler-currency-dollar",title:"Earnings",amount:"$545.69",progress:"55"},{color:"info",icon:"tabler-chart-pie-2",title:"Profit",amount:"$256.34",progress:"25"},{color:"error",icon:"tabler-brand-paypal",title:"Expense",amount:"$74.19",progress:"65"}];return(s,m)=>(b(),z(E,null,{default:t(()=>[e(G,{class:"pb-sm-0"},{append:t(()=>[n("div",ee,[e(N,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:t(()=>[e(V,{size:"22",icon:"tabler-dots-vertical"}),e(P,{activator:"parent"},{default:t(()=>[e(C,null,{default:t(()=>[(b(),w(T,null,S(["View More","Delete"],(l,r)=>e(O,{key:r,value:r},{default:t(()=>[e(L,null,{default:t(()=>[h(_(l),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(K,null,{default:t(()=>[h("Earning Reports")]),_:1}),e(Q,null,{default:t(()=>[h("Weekly Earnings Overview")]),_:1})]),_:1}),e(D,null,{default:t(()=>[e($,null,{default:t(()=>[e(c,{cols:"12",sm:"5",class:"d-flex flex-column align-self-end"},{default:t(()=>[n("div",te,[ae,e(X,{label:"",color:"success"},{default:t(()=>[h(" +4.2% ")]),_:1})]),se]),_:1}),e(c,{cols:"12",sm:"7",class:"pt-0"},{default:t(()=>[e(i(R),{options:i(f),series:u,height:"190"},null,8,["options"])]),_:1})]),_:1}),n("div",re,[e($,null,{default:t(()=>[(b(),w(T,null,S(d,l=>e(c,{key:l.title,cols:"12",sm:"4"},{default:t(()=>[n("div",oe,[e(W,{rounded:"",size:"30",color:l.color,variant:"tonal",class:"me-2"},{default:t(()=>[e(V,{icon:l.icon},null,8,["icon"])]),_:2},1032,["color"]),n("h6",le,_(l.title),1)]),n("h6",ie,_(l.amount),1),e(Z,{"model-value":l.progress,color:l.color,height:"8",rounded:"","rounded-bar":""},null,8,["model-value","color"])]),_:2},1024)),64))]),_:1})])]),_:1})]),_:1}))}};const ce=g=>(Y("data-v-8ff74202"),g=g(),H(),g),ue={class:"mt-n4 me-n2"},de=ce(()=>n("div",{class:"mb-4"},[n("h4",{class:"text-4xl font-weight-semibold mb-2"}," 164 "),n("p",{class:"text-sm"}," Total Tickets ")],-1)),pe={__name:"AnalyticsSupportTracker",setup(g){const v=M(),u=[85],f=I(""),d=F(()=>{const r=v.current.value.colors,a=v.current.value.variables;return{labels:["Performance"],chart:{type:"radialBar"},plotOptions:{radialBar:{offsetY:10,startAngle:-140,endAngle:130,hollow:{size:"65%"},track:{background:r.surface,strokeWidth:"100%"},dataLabels:{name:{offsetY:-20,color:`rgba(${p(r["on-background"])},${a["disabled-opacity"]})`,fontSize:"14px",fontWeight:"400",fontFamily:"Public Sans"},value:{offsetY:10,color:`rgba(${p(r["on-background"])},${a["high-emphasis-opacity"]})`,fontSize:"38px",fontWeight:"600",fontFamily:"Public Sans"}}}},colors:[r.primary],fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.5,gradientToColors:[r.primary],inverseColors:!0,opacityFrom:1,opacityTo:.6,stops:[30,70,100]}},stroke:{dashArray:10},grid:{padding:{top:-20,bottom:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:960,options:{chart:{height:280}}}]}}),s=[{avatarColor:"primary",avatarIcon:"tabler-ticket",title:"New Tickets",subtitle:"142"},{avatarColor:"info",avatarIcon:"tabler-circle-check",title:"Open Tickets",subtitle:"28"},{avatarColor:"warning",avatarIcon:"tabler-clock",title:"Response Time",subtitle:"1 Day"}],m=(r,a)=>Math.floor(Math.random()*(a-r+1)+r),l=()=>{setInterval(()=>{let r=m(60,95);u.shift(),u.push(r),f.value.updateSeries(u,!1,!0)},1500)};return B(()=>{l()}),(r,a)=>(b(),z(E,{title:"Support Tracker",subtitle:"Last 7 Days"},{append:t(()=>[n("div",ue,[e(N,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:t(()=>[e(V,{size:"22",icon:"tabler-dots-vertical"}),e(P,{activator:"parent"},{default:t(()=>[e(C,null,{default:t(()=>[(b(),w(T,null,S(["View More","Delete"],(o,y)=>e(O,{key:y,value:y},{default:t(()=>[e(L,null,{default:t(()=>[h(_(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(D,null,{default:t(()=>[e($,null,{default:t(()=>[e(c,{cols:"12",md:"5",sm:"6",class:"mt-auto"},{default:t(()=>[de,e(C,{class:"card-list"},{default:t(()=>[(b(),w(T,null,S(s,o=>e(O,{key:o.title},{prepend:t(()=>[e(W,{rounded:"",size:"34",color:o.avatarColor,variant:"tonal"},{default:t(()=>[e(V,{icon:o.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),default:t(()=>[e(L,{class:"font-weight-medium"},{default:t(()=>[h(_(o.title),1)]),_:2},1024),e(U,{class:"opacity-100 text-disabled"},{default:t(()=>[h(_(o.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),e(c,{cols:"12",md:"7",sm:"6"},{default:t(()=>[h(_(u)+" "),e(i(R),{ref_key:"chartRef",ref:f,"update-args":[!0,!1],options:i(d),series:u,height:"360"},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1}))}},fe=J(pe,[["__scopeId","data-v-8ff74202"]]);const Be={__name:"analytics",setup(g){const u=M().current.value.colors,f={title:"Customers per line",color:"success",icon:"tabler-credit-card",stats:"97.5k",height:120,series:[{data:[20,25,23,21,30,28,26]}],chartOptions:{chart:{height:110,type:"area",parentHeightOffset:0,toolbar:{show:!1},sparkline:{enabled:!0}},tooltip:{enabled:!1},markers:{colors:"transparent",strokeColors:"transparent"},grid:{show:!1},colors:[u.success],fill:{type:"gradient",gradient:{shadeIntensity:.8,opacityFrom:.6,opacityTo:.1}},dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{show:!0,lines:{show:!1},labels:{show:!1},stroke:{width:0},axisBorder:{show:!1}},yaxis:{stroke:{width:0},show:!1}}},d=I(""),s=I([]);function m(a){let o="";const y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",j=y.length;let A=0;for(;A<a;)o+=y.charAt(Math.floor(Math.random()*j)),A+=1;return o}const l=(a,o)=>Math.floor(Math.random()*(o-a+1)+a),r=()=>{setInterval(()=>{s.value.forEach(a=>{let o=l(4,20);a.series[0].data.shift(),a.series[0].data.push(o),d.value=m(10)})},2e3)};return q(()=>{let a=Object.assign({},f);a=JSON.parse(JSON.stringify(a)),s.value.push({...a}),a=JSON.parse(JSON.stringify(a)),s.value.push({...a}),a=Object.assign({},f),s.value.push({...a}),a=Object.assign({},f),s.value.push({...a})}),B(()=>{r()}),(a,o)=>(b(),z($,{class:"match-height"},{default:t(()=>[e(c,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(k,x({ref:i(d)},i(s)[0]),null,16)]),_:1}),e(c,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(k,x({ref:i(d)},i(s)[1]),null,16)]),_:1}),e(c,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(k,x({ref:i(d)},i(s)[2]),null,16)]),_:1}),e(c,{cols:"12",md:"3",sm:"6"},{default:t(()=>[e(k,x({ref:i(d)},i(s)[3]),null,16)]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(ne)]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(fe)]),_:1})]),_:1}))}};export{Be as default};
