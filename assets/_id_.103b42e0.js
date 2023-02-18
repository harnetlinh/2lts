import{k as n,o as D,b as P,w as a,q as l,p as e,y as A,E as i,m as s,D as r,bd as C}from"./index.15c06d27.js";import{_ as N,a as T}from"./InvoiceSendInvoiceDrawer.310ad987.js";import{_ as U}from"./InvoiceEditable.29207fdb.js";import{u as B}from"./useInvoiceStore.9004695a.js";import{a as S,V as h}from"./VRow.696e610d.js";import{V as I,c as O}from"./VCard.f1cbe956.js";import{V as u}from"./VBtn.da696174.js";import{V as $}from"./VSelect.810ec95c.js";import{V as b}from"./VInput.8ca201ee.js";import{V as _}from"./VSwitch.576fb36a.js";import"./AppDateTimePicker.c96c4085.js";import"./VField.e5ff20f5.js";import"./index.7e0a2b34.js";import"./position.b4415ddb.js";import"./router.67775103.js";import"./easing.36b781ab.js";import"./VSpacer.225b36ea.js";import"./VAvatar.09f255f9.js";import"./VImg.218e2d11.js";import"./VForm.6ce0ebde.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.326b0adf.js";/* empty css                   */import"./VCounter.ea6e4990.js";import"./VTextarea.b6c81497.js";import"./VNavigationDrawer.d0503f90.js";import"./ssrBoot.67265e21.js";import"./VChip.741587f9.js";import"./VTooltip.f65f58c9.js";import"./scopeId.e59b4c03.js";import"./VOverlay.fd19b002.js";import"./lazy.b86750d7.js";import"./VDivider.28c32002.js";import"./VList.e971bd98.js";import"./dialog-transition.0e8d95ec.js";import"./VMenu.60a1d637.js";import"./VCheckboxBtn.e243a8ac.js";import"./VSelectionControl.332c190f.js";const j={class:"d-flex gap-2"},M={class:"w-50"},R={class:"w-50"},L={class:"d-flex align-center justify-space-between"},q={class:"d-flex align-center justify-space-between"},E={class:"d-flex align-center justify-space-between"},Ce={__name:"[id]",setup(W){const g=B(),w=C(),c=n();g.fetchInvoice(Number(w.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=n(!1),p=n(!1),f=n(!0),v=n(!1),V=n(!1),y=n("Bank Account"),x=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>(D(),P(h,null,{default:a(()=>{var k;return[(k=l(c))!=null&&k.invoice?(D(),P(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(U,{data:l(c)},null,8,["data"])]),_:1})):A("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(I,{class:"mb-8"},{default:a(()=>[e(O,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),s("div",j,[s("div",M,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(w).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),s("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e($,{modelValue:l(y),"onUpdate:modelValue":t[2]||(t[2]=o=>r(y)?y.value=o:null),items:x,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",L,[e(b,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),s("div",null,[e(_,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),s("div",q,[e(b,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),s("div",null,[e(_,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),s("div",E,[e(b,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),s("div",null,[e(_,{id:"payment-stub",modelValue:l(V),"onUpdate:modelValue":t[5]||(t[5]=o=>r(V)?V.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(N,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(T,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1}))}};export{Ce as default};