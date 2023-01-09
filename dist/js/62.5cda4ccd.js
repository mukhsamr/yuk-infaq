"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[62],{3062:function(e,l,a){a.r(l),a.d(l,{default:function(){return k}});var t=a(3396),n=a(7139),o=a(9242),u=a(2291),i=a(4870),r=a(7771),s=a(7312),d=a(4075),p=a(6422),c=a(165),m=a(4842);const v=(0,t._)("h2",null,"Edit Footnote",-1);var f={__name:"FootnoteView",setup(e){const l=(0,i.qj)({deskripsi:"",lokasi:{judul:"",link:""},whatsapp:{judul:"",link:""},website:{judul:"",link:""},channel:{judul:""},instagram:{judul:"",link:""},instagram2:{judul:"",link:""},youtube:{judul:"",link:""}});let a=(0,i.iH)();const f=[e=>!!e||"Kolom harus diisi"],b=(0,i.iH)(),k=(0,i.iH)();async function g(){const e=await b.value.validate();if(e.valid){const e=await u.Z.update(a.value,l);window.scrollTo({top:0,left:0,behavior:"smooth"}),k.value=e.message}}return(0,t.wF)((async()=>{if(1!=localStorage.getItem("footnote")){const e=await u.Z.all();localStorage.setItem("footnote",JSON.stringify(e[0]))}const e=JSON.parse(localStorage.getItem("footnote"));a.value=e._id,l.deskripsi=e.deskripsi,l.lokasi=e.lokasi,l.website=e.website,l.channel=e.channel,l.whatsapp=e.whatsapp,l.instagram=e.instagram,l.instagram2=e.instagram2,l.youtube=e.youtube})),(e,a)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[v,(0,t.Wm)(d.J,{class:"mb-4 mt-2"}),k.value?((0,t.wg)(),(0,t.j4)(r.w,{key:0,type:"success",class:"my-3",closable:"","close-label":"Close Alert"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(k.value),1)])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(p.O,{ref_key:"inputs",ref:b,class:"px-6 py-4 border",onSubmit:(0,o.iM)(g,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(m.z,{modelValue:l.deskripsi,"onUpdate:modelValue":a[0]||(a[0]=e=>l.deskripsi=e),rules:f,label:"Deskripsi",variant:"underlined","prepend-icon":"mdi-note"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.lokasi.judul,"onUpdate:modelValue":a[1]||(a[1]=e=>l.lokasi.judul=e),rules:f,label:"Lokasi",variant:"underlined","prepend-icon":"mdi-map-marker-outline"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.lokasi.link,"onUpdate:modelValue":a[2]||(a[2]=e=>l.lokasi.link=e),rules:f,label:"Lokasi link",variant:"underlined","prepend-icon":"mdi-link"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.website.judul,"onUpdate:modelValue":a[3]||(a[3]=e=>l.website.judul=e),rules:f,label:"Website",variant:"underlined","prepend-icon":"mdi-web"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.website.link,"onUpdate:modelValue":a[4]||(a[4]=e=>l.website.link=e),rules:f,label:"Website link",variant:"underlined","prepend-icon":"mdi-link"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.channel.judul,"onUpdate:modelValue":a[5]||(a[5]=e=>l.channel.judul=e),rules:f,label:"Tv Channel",variant:"underlined","prepend-icon":"mdi-television-classic"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.whatsapp.judul,"onUpdate:modelValue":a[6]||(a[6]=e=>l.whatsapp.judul=e),rules:f,label:"Whatsapp",variant:"underlined","prepend-icon":"mdi-whatsapp"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.whatsapp.link,"onUpdate:modelValue":a[7]||(a[7]=e=>l.whatsapp.link=e),rules:f,label:"Whatsapp link",variant:"underlined","prepend-icon":"mdi-link"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.instagram.judul,"onUpdate:modelValue":a[8]||(a[8]=e=>l.instagram.judul=e),rules:f,label:"Instagram",variant:"underlined","prepend-icon":"mdi-instagram"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.instagram.link,"onUpdate:modelValue":a[9]||(a[9]=e=>l.instagram.link=e),rules:f,label:"Instagram link",variant:"underlined","prepend-icon":"mdi-link"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.instagram2.judul,"onUpdate:modelValue":a[10]||(a[10]=e=>l.instagram2.judul=e),rules:f,label:"Instagram",variant:"underlined","prepend-icon":"mdi-instagram"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.instagram2.link,"onUpdate:modelValue":a[11]||(a[11]=e=>l.instagram2.link=e),rules:f,label:"Instagram link",variant:"underlined","prepend-icon":"mdi-link"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.youtube.judul,"onUpdate:modelValue":a[12]||(a[12]=e=>l.youtube.judul=e),rules:f,label:"Youtube",variant:"underlined","prepend-icon":"mdi-youtube"},null,8,["modelValue"]),(0,t.Wm)(c.hw,{modelValue:l.youtube.link,"onUpdate:modelValue":a[13]||(a[13]=e=>l.youtube.link=e),rules:f,label:"Youtube link",variant:"underlined","prepend-icon":"mdi-link"},null,8,["modelValue"]),(0,t.Wm)(s.T,{type:"submit",color:"green",class:"my-4"},{default:(0,t.w5)((()=>[(0,t.Uk)("Edit")])),_:1})])),_:1},8,["onSubmit"])],64))}};const b=f;var k=b},7771:function(e,l,a){a.d(l,{w:function(){return C}});var t=a(3396),n=a(1114);const o=(0,n.J)("v-alert-title");var u=a(7312),i=a(836),r=a(3289),s=a(5221),d=a(9694),p=a(4544),c=a(2465),m=a(5180),v=a(489),f=a(4231),b=a(1138),k=a(7041),g=a(1629),y=a(8717),V=a(2370),w=a(4960),h=a(4870),x=a(320);const W=["success","info","warning","error"],C=(0,x.a)({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:w.lE,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>W.includes(e)},...(0,d.f)(),...(0,p.x)(),...(0,c.c)(),...(0,m.y)(),...(0,v.F)(),...(0,f.I)(),...(0,b.Q)(),...(0,k.x$)(),...(0,s.bk)({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const n=(0,y.z)(e,"modelValue"),b=(0,t.Fl)((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),w=(0,t.Fl)((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:x}=(0,k.ER)(e),{colorClasses:W,colorStyles:C,variantClasses:S}=(0,s.c1)(w),{densityClasses:F}=(0,d.t)(e),{dimensionStyles:_}=(0,p.$)(e),{elevationClasses:j}=(0,c.Y)(e),{locationStyles:U}=(0,m.T)(e),{positionClasses:I}=(0,v.K)(e),{roundedClasses:H}=(0,f.b)(e),{textColorClasses:Y,textColorStyles:z}=(0,V.rY)((0,h.Vh)(e,"borderColor")),{t:B}=(0,g.bU)(),P=(0,t.Fl)((()=>({"aria-label":B(e.closeLabel),onClick(e){n.value=!1}})));return()=>{var l,d;const p=!(!a.prepend&&!b.value),c=!(!a.title&&!e.title),m=!(!e.text&&!a.text),v=!(!a.close&&!e.closable);return n.value&&(0,t.Wm)(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},x.value,W.value,F.value,j.value,I.value,H.value,S.value],style:[C.value,_.value,U.value],role:"alert"},{default:()=>[(0,s.Ux)(!1,"v-alert"),e.border&&(0,t.Wm)("div",{key:"border",class:["v-alert__border",Y.value],style:z.value},null),p&&(0,t.Wm)(i.z,{key:"prepend",defaults:{VIcon:{density:e.density,icon:b.value,size:e.prominent?44:28}}},{default:()=>[(0,t.Wm)("div",{class:"v-alert__prepend"},[a.prepend?a.prepend():b.value&&(0,t.Wm)(r.t,null,null)])]}),(0,t.Wm)("div",{class:"v-alert__content"},[c&&(0,t.Wm)(o,{key:"title"},{default:()=>[a.title?a.title():e.title]}),m&&(a.text?a.text():e.text),null==(l=a.default)?void 0:l.call(a)]),a.append&&(0,t.Wm)("div",{key:"append",class:"v-alert__append"},[a.append()]),v&&(0,t.Wm)(i.z,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[(0,t.Wm)("div",{class:"v-alert__close"},[(null==(d=a.close)?void 0:d.call(a,{props:P.value}))??(0,t.Wm)(u.T,P.value,null)])]})]})}}})},4842:function(e,l,a){a.d(l,{z:function(){return b}});var t=a(3396),n=a(9242),o=(a(348),a(7173)),u=a(8302),i=a(2816),r=a(7052),s=a(3185),d=a(8969),p=a(8717),c=a(4870),m=a(320),v=a(131),f=a(9888);const b=(0,m.a)({name:"VTextarea",directives:{Intersect:r.Z},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...(0,u.co)(),...(0,o.hy)()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:a,emit:r,slots:m}=l;const b=(0,p.z)(e,"modelValue"),{isFocused:k,focus:g,blur:y}=(0,d.K)(e),V=(0,t.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(b.value):(b.value||"").toString().length)),w=(0,t.Fl)((()=>a.maxlength?a.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function h(l,a){var t,n;e.autofocus&&l&&(null==(t=a[0].target)||null==(n=t.focus)||n.call(t))}const x=(0,c.iH)(),W=(0,c.iH)(),C=(0,c.iH)(""),S=(0,c.iH)(),F=(0,t.Fl)((()=>k.value||e.persistentPlaceholder)),_=(0,t.Fl)((()=>e.messages.length?e.messages:F.value||e.persistentHint?e.hint:""));function j(){var e;S.value!==document.activeElement&&(null==(e=S.value)||e.focus());k.value||g()}function U(e){j(),r("click:control",e)}function I(l){l.stopPropagation(),j(),(0,t.Y3)((()=>{b.value="",(0,v.dr)(e["onClick:clear"],l)}))}function H(e){b.value=e.target.value}const Y=(0,c.iH)();function z(){e.autoGrow&&(0,t.Y3)((()=>{if(!Y.value||!W.value)return;const l=getComputedStyle(Y.value),a=getComputedStyle(W.value.$el),t=parseFloat(l.getPropertyValue("--v-field-padding-top"))+parseFloat(l.getPropertyValue("--v-input-padding-top"))+parseFloat(l.getPropertyValue("--v-field-padding-bottom")),n=Y.value.scrollHeight,o=parseFloat(l.lineHeight),u=Math.max(parseFloat(e.rows)*o+t,parseFloat(a.getPropertyValue("--v-input-control-height"))),i=parseFloat(e.maxRows)*o+t||1/0;C.value=(0,v.kb)((0,v.uZ)(n??0,u,i))}))}let B;return(0,t.bv)(z),(0,t.YP)(b,z),(0,t.YP)((()=>e.rows),z),(0,t.YP)((()=>e.maxRows),z),(0,t.YP)((()=>e.density),z),(0,t.YP)(Y,(e=>{var l;e?(B=new ResizeObserver(z),B.observe(Y.value)):null==(l=B)||l.disconnect()})),(0,t.Jd)((()=>{var e;null==(e=B)||e.disconnect()})),(0,f.L)((()=>{const l=!!(m.counter||e.counter||e.counterValue),r=!(!l&&!m.details),[s,d]=(0,v.An)(a),[{modelValue:p,...c}]=(0,u.PE)(e),[f]=(0,o.g8)(e);return(0,t.Wm)(u.q8,(0,t.dG)({ref:x,modelValue:b.value,"onUpdate:modelValue":e=>b.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},s,c,{focused:k.value,messages:_.value}),{...m,default:l=>{let{isDisabled:a,isDirty:u,isReadonly:i,isValid:r}=l;return(0,t.Wm)(o.hF,(0,t.dG)({ref:W,style:{"--v-textarea-control-height":C.value},"onClick:control":U,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},f,{active:F.value||u.value,dirty:u.value||e.dirty,focused:k.value,error:!1===r.value}),{...m,default:l=>{let{props:{class:o,...u}}=l;return(0,t.Wm)(t.HY,null,[e.prefix&&(0,t.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,t.wy)((0,t.Wm)("textarea",(0,t.dG)({ref:S,class:o,value:b.value,onInput:H,autofocus:e.autofocus,readonly:i.value,disabled:a.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:j,onBlur:y},u,d),null),[[(0,t.Q2)("intersect"),{handler:h},null,{once:!0}]]),e.autoGrow&&(0,t.wy)((0,t.Wm)("textarea",{class:[o,"v-textarea__sizer"],"onUpdate:modelValue":e=>b.value=e,ref:Y,readonly:!0,"aria-hidden":"true"},null),[[n.nr,b.value]]),e.suffix&&(0,t.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?a=>{var n;return(0,t.Wm)(t.HY,null,[null==(n=m.details)?void 0:n.call(m,a),l&&(0,t.Wm)(t.HY,null,[(0,t.Wm)("span",null,null),(0,t.Wm)(i._,{active:e.persistentCounter||k.value,value:V.value,max:w.value},m.counter)])])}:void 0})})),(0,s.F)({},x,W,S)}})}}]);
//# sourceMappingURL=62.5cda4ccd.js.map