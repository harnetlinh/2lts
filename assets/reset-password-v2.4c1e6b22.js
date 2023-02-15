import{k as m,o as v,b as k,w as s,p as e,m as r,q as t,V as x,v as y,be as P,E as _,C,r as I}from"./index.b30bc5d7.js";import{u as p,m as R,a as N}from"./useGenerateImageVariant.a53c9277.js";import{b as u}from"./route-block.182765af.js";import{V as f}from"./VImg.b8fceca5.js";import{a as o,V as c}from"./VRow.652382e6.js";import{V as B,c as w}from"./VCard.946238ba.js";import{V as T}from"./VForm.064d5899.js";import{V}from"./VTextField.7965c273.js";import{V as j}from"./VBtn.3982f2a4.js";import"./router.6aa893a8.js";import"./VAvatar.ea994f28.js";import"./position.21e7bbe2.js";import"./VInput.86c68591.js";import"./index.61797de3.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.279eb002.js";import"./easing.36b781ab.js";import"./VCounter.38b26556.js";const L="/assets/auth-v2-reset-password-illustration-dark.d3746a9f.png",M="/assets/auth-v2-reset-password-illustration-light.435863a4.png";const D={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},F={class:"d-flex align-center justify-center w-100 h-100"},S=r("h5",{class:"text-h5 font-weight-semibold mb-1"}," Reset Password \u{1F512} ",-1),U=r("p",{class:"mb-0"},[_(" for "),r("span",{class:"font-weight-bold"},"john.doe@email.com")],-1),$=r("span",null,"Back to login",-1),q={__name:"reset-password-v2",setup(E){const n=m({newPassword:"",confirmPassword:""}),h=p(M,L),b=p(N,R),i=m(!1),d=m(!1);return(G,a)=>{const g=I("RouterLink");return v(),k(c,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[e(o,{md:"8",class:"d-none d-md-flex"},{default:s(()=>[r("div",D,[r("div",F,[e(f,{"max-width":"400",src:t(h),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(f,{class:"auth-footer-mask",src:t(b)},null,8,["src"])])]),_:1}),e(o,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:s(()=>[e(B,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[e(w,null,{default:s(()=>[e(t(x),{nodes:t(y).app.logo,class:"mb-6"},null,8,["nodes"]),S,U]),_:1}),e(w,null,{default:s(()=>[e(T,{onSubmit:a[4]||(a[4]=P(()=>{},["prevent"]))},{default:s(()=>[e(c,null,{default:s(()=>[e(o,{cols:"12"},{default:s(()=>[e(V,{modelValue:t(n).newPassword,"onUpdate:modelValue":a[0]||(a[0]=l=>t(n).newPassword=l),label:"New Password",type:t(i)?"text":"password","append-inner-icon":t(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[1]||(a[1]=l=>i.value=!t(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12"},{default:s(()=>[e(V,{modelValue:t(n).confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=l=>t(n).confirmPassword=l),label:"Confirm Password",type:t(d)?"text":"password","append-inner-icon":t(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[3]||(a[3]=l=>d.value=!t(d))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12"},{default:s(()=>[e(j,{block:"",type:"submit"},{default:s(()=>[_(" Set New Password ")]),_:1})]),_:1}),e(o,{cols:"12"},{default:s(()=>[e(g,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v2"}},{default:s(()=>[e(C,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof u=="function"&&u(q);export{q as default};
