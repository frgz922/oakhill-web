(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{678:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(47),{data:function(){return{formData:{firstName:"",lastName:"",email:"",dealerRepId:"",dealer:""},showAlert:!1,dealers:[]}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fetchCinchyQuery("getDealerCode",e.formData,"Subscription API");case 2:e.dealers=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:{isFormValid:function(){return this.formData.firstName&&this.formData.lastName&&this.formData.email&&this.formData.dealerRepId}},methods:{submitForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fetchCinchyQuery("setNewAdvisorRegistration",e.formData,"Website",!0);case 2:t.sent?e.$router.push("/registration/thank-you"):e.showAlert=!e.showAlert;case 4:case"end":return t.stop()}}),t)})))()}}}),l=r(15),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-sm-50 mt-xs-50"},[r("h3",{staticClass:"title"},[e._v("\n    Advisor Registration\n  ")]),e._v(" "),r("b-alert",{attrs:{variant:"danger",show:e.showAlert}},[e._v("Something went wrong during registration, please try again.")]),e._v(" "),r("form",{staticClass:"register-form",on:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"single-input mb-30"},[r("label",{attrs:{for:"firstname"}},[e._v("First Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.firstName,expression:"formData.firstName"}],attrs:{type:"text",id:"firstname",name:"firstname",placeholder:"First Name",required:""},domProps:{value:e.formData.firstName},on:{input:function(t){t.target.composing||e.$set(e.formData,"firstName",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"single-input mb-30"},[r("label",{attrs:{for:"lastname"}},[e._v("Last Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.lastName,expression:"formData.lastName"}],attrs:{type:"text",id:"lastname",name:"lastname",placeholder:"Last Name",required:""},domProps:{value:e.formData.lastName},on:{input:function(t){t.target.composing||e.$set(e.formData,"lastName",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"single-input mb-30"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],attrs:{type:"text",id:"email",name:"email",placeholder:"Email",required:""},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"single-input mb-30"},[r("label",{attrs:{for:"dealer"}},[e._v("Dealer")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.dealer,expression:"formData.dealer"}],staticClass:"custom-select",attrs:{name:"dealer"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.formData,"dealer",t.target.multiple?r:r[0])}}},e._l(e.dealers,(function(t,n){return r("option",{key:n,domProps:{value:t.dealerName}},[e._v(e._s(t.dealerName))])})),0)]),e._v(" "),r("div",{staticClass:"single-input mb-30"},[r("label",{attrs:{for:"company"}},[e._v("Dealer ID")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.dealerRepId,expression:"formData.dealerRepId"}],attrs:{type:"text",id:"dealerId",name:"dealerId",placeholder:"Enter Dealer Code",required:""},domProps:{value:e.formData.dealerRepId},on:{input:function(t){t.target.composing||e.$set(e.formData,"dealerRepId",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"single-input"},[r("button",{staticClass:"btn btn-dark btn-width-100",attrs:{disabled:!e.isFormValid},on:{click:e.submitForm}},[e._v("\n        Submit Registration\n      ")])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);