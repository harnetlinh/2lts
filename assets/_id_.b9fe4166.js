import{k as n,o as D,b as P,w as a,q as l,p as e,y as A,E as i,m as s,D as r,bd as C}from"./index.b30bc5d7.js";import{_ as N,a as T}from"./InvoiceSendInvoiceDrawer.ebf933a9.js";import{_ as U}from"./InvoiceEditable.293cf6d9.js";import{u as B}from"./useInvoiceStore.ecde76ab.js";import{a as S,V as h}from"./VRow.652382e6.js";import{V as I,c as O}from"./VCard.946238ba.js";import{V as u}from"./VBtn.3982f2a4.js";import{V as $}from"./VSelect.e00dfc47.js";import{V as b}from"./VInput.86c68591.js";import{V as _}from"./VSwitch.e2f4a575.js";import"./AppDateTimePicker.31f5067c.js";import"./VField.279eb002.js";import"./index.61797de3.js";import"./position.21e7bbe2.js";import"./router.6aa893a8.js";import"./easing.36b781ab.js";import"./VSpacer.11539aee.js";import"./VAvatar.ea994f28.js";import"./VImg.b8fceca5.js";import"./VForm.064d5899.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.7965c273.js";/* empty css                   */import"./VCounter.38b26556.js";import"./VTextarea.979734eb.js";import"./VNavigationDrawer.5df6016a.js";import"./ssrBoot.c5fb5fbd.js";import"./VChip.8ea78332.js";import"./VTooltip.2f95d1bd.js";import"./scopeId.4c4c2207.js";import"./VOverlay.33c3b9db.js";import"./lazy.82e915d4.js";import"./VDivider.d7da01ff.js";import"./VList.1a543713.js";import"./dialog-transition.77d0dcc2.js";import"./VMenu.340a4d70.js";import"./VCheckboxBtn.ce719597.js";import"./VSelectionControl.c4e346c3.js";const j={class:"d-flex gap-2"},M={class:"w-50"},R={class:"w-50"},L={class:"d-flex align-center justify-space-between"},q={class:"d-flex align-center justify-space-between"},E={class:"d-flex align-center justify-space-between"},Ce={__name:"[id]",setup(W){const g=B(),w=C(),c=n();g.fetchInvoice(Number(w.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=n(!1),p=n(!1),f=n(!0),v=n(!1),V=n(!1),y=n("Bank Account"),x=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>(D(),P(h,null,{default:a(()=>{var k;return[(k=l(c))!=null&&k.invoice?(D(),P(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(U,{data:l(c)},null,8,["data"])]),_:1})):A("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(I,{class:"mb-8"},{default:a(()=>[e(O,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),s("div",j,[s("div",M,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(w).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),s("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e($,{modelValue:l(y),"onUpdate:modelValue":t[2]||(t[2]=o=>r(y)?y.value=o:null),items:x,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",L,[e(b,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),s("div",null,[e(_,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),s("div",q,[e(b,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),s("div",null,[e(_,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),s("div",E,[e(b,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),s("div",null,[e(_,{id:"payment-stub",modelValue:l(V),"onUpdate:modelValue":t[5]||(t[5]=o=>r(V)?V.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(N,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(T,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1}))}};export{Ce as default};