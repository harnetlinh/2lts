import{k as p,o as b,c as h,m as a,p as e,q as o,w as t,V as v,v as f,E as m,x as y,be as x,C as g,r as C}from"./index.b30bc5d7.js";import{a as P,b as k}from"./auth-v1-top-shape.37562e7c.js";import{b as c}from"./route-block.182765af.js";import{V as u}from"./VImg.b8fceca5.js";import{a as B,b as N,c as V,V as I}from"./VCard.946238ba.js";import{V as R}from"./VForm.064d5899.js";import{V as S,a as d}from"./VRow.652382e6.js";import{V as _}from"./VTextField.7965c273.js";import{V as T}from"./VBtn.3982f2a4.js";import"./router.6aa893a8.js";import"./VAvatar.ea994f28.js";import"./position.21e7bbe2.js";import"./VInput.86c68591.js";import"./index.61797de3.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.279eb002.js";import"./easing.36b781ab.js";import"./VCounter.38b26556.js";const j={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"position-relative my-sm-16"},F={class:"d-flex"},L=a("h5",{class:"text-h5 font-weight-semibold mb-1"}," Reset Password \u{1F512} ",-1),U=a("p",{class:"mb-0"},[m(" for "),a("span",{class:"font-weight-bold"},"john.doe@email.com")],-1),$=a("span",null,"Back to login",-1),q={__name:"reset-password-v1",setup(D){const l=p({newPassword:"",confirmPassword:""}),r=p(!1),i=p(!1);return(M,s)=>{const w=C("RouterLink");return b(),h("div",j,[a("div",E,[e(u,{src:o(P),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),e(u,{src:o(k),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),e(I,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(B,{class:"justify-center"},{prepend:t(()=>[a("div",F,[e(o(v),{nodes:o(f).app.logo},null,8,["nodes"])])]),default:t(()=>[e(N,{class:"font-weight-bold text-h5 py-1"},{default:t(()=>[m(y(o(f).app.title),1)]),_:1})]),_:1}),e(V,{class:"pt-2"},{default:t(()=>[L,U]),_:1}),e(V,null,{default:t(()=>[e(R,{onSubmit:s[4]||(s[4]=x(()=>{},["prevent"]))},{default:t(()=>[e(S,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(_,{modelValue:o(l).newPassword,"onUpdate:modelValue":s[0]||(s[0]=n=>o(l).newPassword=n),label:"New Password",type:o(r)?"text":"password","append-inner-icon":o(r)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[1]||(s[1]=n=>r.value=!o(r))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(_,{modelValue:o(l).confirmPassword,"onUpdate:modelValue":s[2]||(s[2]=n=>o(l).confirmPassword=n),label:"Confirm Password",type:o(i)?"text":"password","append-inner-icon":o(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=n=>i.value=!o(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(T,{block:"",type:"submit"},{default:t(()=>[m(" Set New Password ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(w,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:t(()=>[e(g,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};typeof c=="function"&&c(q);export{q as default};
