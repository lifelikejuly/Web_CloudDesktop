(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{296:function(e,t,n){var o=n(453);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(44).default)("f3004b4e",o,!1,{sourceMap:!1})},452:function(e,t,n){"use strict";n(296)},453:function(e,t,n){(e.exports=n(43)(!1)).push([e.i,"[v-cloak]{display:none;color:red}",""])},493:function(e,t,n){"use strict";n.r(t);n(54);var o={data:function(){return{user:{lastName:"hahaha-lastName",firstName:"hahah-firstName",test:"hahha-test"},message:"message"}}},r=(n(452),n(19)),a=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",[e._t("header")],2),e._v(" "),t("div",[e._t("default"),e._v(" "),t("div",[e._t("content",(function(){return[t("p",[e._v(e._s(e.user.lastName))])]}),{user:e.user}),e._v(" "),t("span",{pre:!0},[e._v("{{ this will not be compiled }}")]),e._v(" "),t("div",{},[e._v(e._s(e.message))]),e._v(" "),t("button",{on:{click:function(t){return e.$emit("enlarge-text")}}},[e._v(" click1")]),e._v(" "),t("button",{on:{click:function(t){return e.$emit("enlarge-text2",.2)}}},[e._v(" click2")])],2)],2),e._v(" "),t("div",[e._t("footer")],2)])}),[],!1,null,null,null).exports,c=n(18),s={layout:"app_layout",components:{demo:a},data:function(){return{checked:!1,message:"333",postFontSize:1}},methods:{beforeRead:function(e){return"image/jpeg"===e.type||(Object(c.a)("请上传 jpg 格式图片"),!1)},afterRead:function(e){console.log(e)},tip:function(){console.log("enlarge-text")},next:function(){}}},i=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("div",{style:{fontSize:e.postFontSize+"em"}},[t("demo",{on:{"enlarge-text":function(t){e.postFontSize+=.1},"enlarge-text2":function(t){e.postFontSize+=t}},scopedSlots:e._u([{key:"header",fn:function(){return[t("h1",[e._v("Here might be a page title")])]},proxy:!0},{key:"content",fn:function(n){return[t("p",[e._v("Content."+e._s(n.user.test))])]}},{key:"footer",fn:function(){return[t("p",[e._v("Here's some contact info")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("A paragraph for the main content.")]),e._v(" "),t("p",[e._v("And another one.")])]),e._v(" "),t("van-uploader",{attrs:{"before-read":e.beforeRead,"after-read":e.afterRead}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.message,expression:"message",modifiers:{trim:!0}}],attrs:{placeholder:"edit me"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),t("p",[e._v("Message is: "+e._s(e.message))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var n=e.checked,o=t.target,r=!!o.checked;if(Array.isArray(n)){var a=e._i(n,null);o.checked?a<0&&(e.checked=n.concat([null])):a>-1&&(e.checked=n.slice(0,a).concat(n.slice(a+1)))}else e.checked=r}}}),e._v(" "),t("label",{attrs:{for:"checkbox"}},[e._v(e._s(e.checked))]),e._v(" "),t("div",[e._v("HAHAHAHAHAH")]),e._v(" "),"true"==this.$route.query.title?t("div",[e._v("SHOW ME")]):e._e(),e._v(" "),t("nuxt-link",{attrs:{to:"/demo/test"}},[e._v("Next")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);