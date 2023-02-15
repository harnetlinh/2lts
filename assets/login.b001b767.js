import{k as m,o as B,b as P,w as t,p as e,m as o,q as s,V as E,v as x,x as F,be as M,D as _,E as i,bd as j,j as q,r as J,a1 as O}from"./index.b30bc5d7.js";import{u as U}from"./useAppAbility.532957f4.js";import{_ as $}from"./AuthProvider.885fd50d.js";import{u as y,m as G,a as W}from"./useGenerateImageVariant.a53c9277.js";import{r as v,e as z}from"./validators.741d8b3f.js";import{a as H,b as K,c as Q,d as X}from"./auth-v2-login-illustration-light.a2530d13.js";import{b as w}from"./route-block.182765af.js";import{V as k}from"./VImg.b8fceca5.js";import{a as n,V as I}from"./VRow.652382e6.js";import{V as Y,c as V}from"./VCard.946238ba.js";import{V as Z}from"./VAlert.948ca81b.js";import{V as S}from"./VTextField.7965c273.js";import{V as ee}from"./VCheckbox.810d85c5.js";import{V as te}from"./VBtn.3982f2a4.js";import{V as C}from"./VDivider.d7da01ff.js";import{V as se}from"./VForm.064d5899.js";import"./index.0d4b9ec4.js";import"./router.6aa893a8.js";import"./VAvatar.ea994f28.js";import"./position.21e7bbe2.js";/* empty css                   */import"./VField.279eb002.js";import"./index.61797de3.js";import"./VInput.86c68591.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.38b26556.js";import"./VCheckboxBtn.ce719597.js";import"./VSelectionControl.c4e346c3.js";const ae={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},oe={class:"d-flex align-center justify-center w-100 h-100"},re={class:"text-h5 font-weight-semibold mb-1"},le=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),ne=o("p",{class:"text-caption mb-2"},[i(" Admin Email: "),o("strong",null,"admin@demo.com"),i(" / Pass: "),o("strong",null,"admin")],-1),ie=o("p",{class:"text-caption mb-0"},[i(" Client Email: "),o("strong",null,"client@demo.com"),i(" / Pass: "),o("strong",null,"client")],-1),me={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},ue=o("span",null,"New on our platform?",-1),de=o("span",{class:"mx-4"},"or",-1),ce={__name:"login",setup(pe){const L=y(X,Q,K,H,!0),D=y(W,G),u=m(!1),b=j(),N=q(),R=U(),f=m({email:void 0,password:void 0}),h=m(),d=m("admin@demo.com"),c=m("admin"),g=m(!1),T=()=>{O.post("/auth/login",{email:d.value,password:c.value}).then(l=>{const{accessToken:a,userData:p,userAbilities:r}=l.data;localStorage.setItem("userAbilities",JSON.stringify(r)),R.update(r),localStorage.setItem("userData",JSON.stringify(p)),localStorage.setItem("accessToken",JSON.stringify(a)),N.replace(b.query.to?String(b.query.to):"/")}).catch(l=>{const{errors:a}=l.response.data;f.value=a,console.error(l.response.data)})},A=()=>{var l;(l=h.value)==null||l.validate().then(({valid:a})=>{a&&T()})};return(l,a)=>{const p=J("RouterLink");return B(),P(I,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(n,{lg:"8",class:"d-none d-lg-flex"},{default:t(()=>[o("div",ae,[o("div",oe,[e(k,{"max-width":"505",src:s(L),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(k,{src:s(D),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),e(n,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:t(()=>[e(Y,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(V,null,{default:t(()=>[e(s(E),{nodes:s(x).app.logo,class:"mb-6"},null,8,["nodes"]),o("h5",re," Welcome to "+F(s(x).app.title)+"! \u{1F44B}\u{1F3FB} ",1),le]),_:1}),e(V,null,{default:t(()=>[e(Z,{color:"primary",variant:"tonal"},{default:t(()=>[ne,ie]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(s(se),{ref_key:"refVForm",ref:h,onSubmit:M(A,["prevent"])},{default:t(()=>[e(I,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(S,{modelValue:s(d),"onUpdate:modelValue":a[0]||(a[0]=r=>_(d)?d.value=r:null),label:"Email",type:"email",rules:[s(v),s(z)],"error-messages":s(f).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(S,{modelValue:s(c),"onUpdate:modelValue":a[1]||(a[1]=r=>_(c)?c.value=r:null),label:"Password",rules:[s(v)],type:s(u)?"text":"password","error-messages":s(f).password,"append-inner-icon":s(u)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[2]||(a[2]=r=>u.value=!s(u))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),o("div",me,[e(ee,{modelValue:s(g),"onUpdate:modelValue":a[3]||(a[3]=r=>_(g)?g.value=r:null),label:"Remember me"},null,8,["modelValue"]),e(p,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:t(()=>[i(" Forgot Password? ")]),_:1})]),e(te,{block:"",type:"submit"},{default:t(()=>[i(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[ue,e(p,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[i(" Create an account ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(C),de,e(C)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[e($)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof w=="function"&&w(ce);export{ce as default};
