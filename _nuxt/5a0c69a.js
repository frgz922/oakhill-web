(window.webpackJsonp=window.webpackJsonp||[]).push([[198,64,72,104],{433:function(t,e,n){"use strict";n.r(e);var o=n(15),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",{staticClass:"position-static"},[n("n-link",{attrs:{to:"/training"}},[n("span",{staticClass:"menu-text"},[t._v("Training")])])],1),t._v(" "),n("li",{staticClass:"position-static"},[n("n-link",{attrs:{to:"/documents"}},[n("span",{staticClass:"menu-text"},[t._v("Docs")])])],1),t._v(" "),n("li",{staticClass:"position-static"},[n("n-link",{attrs:{to:"/blueprints"}},[n("span",{staticClass:"menu-text"},[t._v("Blueprints")])])],1)])])}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,n){"use strict";n.r(e);var o={props:["addClassName","addBackgroundColor"]},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section",class:t.addBackgroundColor},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-6 col-md-5 max-mb-50"},[n("div",{staticClass:"footer-widget",class:t.addClassName},[n("h4",{staticClass:"footer-widget-title"},[t._v("Address")]),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-md-4 col-sm-7 max-mb-50"},[n("div",{staticClass:"footer-widget",class:t.addClassName},[n("h4",{staticClass:"footer-widget-title"},[t._v("Explore")]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",{staticClass:"column-2"},[n("li",[n("n-link",{attrs:{to:""}},[t._v("Start here")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:""}},[t._v("Success story")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog/blog-grid"}},[t._v("Blog")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/course/courses-grid-one"}},[t._v("Courses")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about-us-one"}},[t._v("About us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact us")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50"},[n("div",{staticClass:"footer-widget",class:t.addClassName},[n("h4",{staticClass:"footer-widget-title"},[t._v("Information")]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",[n("li",[n("n-link",{attrs:{to:""}},[t._v("Membership")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:""}},[t._v("Purchase guide")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:""}},[t._v("Privacy policy")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:""}},[t._v("Terms of service")])],1)])])])])]),t._v(" "),n("div",{staticClass:"row max-mt-20"},[n("div",{staticClass:"col"},[n("p",{staticClass:"copyright"},[t._v("© "+t._s((new Date).getFullYear())+" "),n("b",[t._v("Maxcoach")]),t._v(" Made with "),n("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),t._m(1)])])])]),t._v(" "),n("client-only",[n("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[n("i",{staticClass:"arrow-top fal fa-long-arrow-up"}),t._v(" "),n("i",{staticClass:"arrow-bottom fal fa-long-arrow-up"})])],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-widget-content"},[n("div",{staticClass:"content"},[n("p",[t._v("Your address goes here")]),t._v(" "),n("p",[t._v("0123456789 (9am - 5pm EST, Monday - Friday)")]),t._v(" "),n("p",[n("a",{attrs:{href:"mailto:info@example.com"}},[t._v("info@example.com")])])]),t._v(" "),n("div",{staticClass:"footer-social-inline"},[n("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-instagram"})]),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://hasthemes.com/",target:"_blank"}},[n("b",[t._v("HasThemes")])])}],!1,null,null,null);e.default=component.exports},436:function(t,e,n){"use strict";n.r(e);n(19),n(39),n(46);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,433))}},data:function(){return{isSticky:!1,isHidden:!0}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-section header-shadow",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-3 col-auto"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/dark-logo.png",alt:"logo dark"}}),t._v(" "),n("img",{staticClass:"light-logo",attrs:{src:"/images/logo/light-logo.png",alt:"logo light"}})])],1)]),t._v(" "),n("div",{staticClass:"col d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"col-xl-3 col-auto"},[n("div",{staticClass:"header-right"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"header-login"},[n("n-link",{attrs:{to:"/course/profile"}},[n("i",{staticClass:"far fa-user-circle"})])],1),t._v(" "),n("div",{staticClass:"header-search"},[n("button",{staticClass:"header-search-toggle",on:{click:function(e){t.isHidden=!t.isHidden}}},[n("i",{staticClass:"far fa-search"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isHidden,expression:"!isHidden"}],staticClass:"header-search-form"},[t._m(0)])]),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("input",{attrs:{type:"text",placeholder:"Search..."}}),t._v(" "),n("button",[n("i",{staticClass:"fas fa-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(433).default})},441:function(t){t.exports=JSON.parse('{"healthCoaching":[{"imgSrc":"/images/event/570/event-1.jpg","title":"Consumer Food Safety Education Conference","date":"12","month":"jul","location":"Hamburg, Germany"},{"imgSrc":"/images/event/170/event1.jpg","title":"How meditation improve your mental health?","date":"Aug 15, 2020","month":"aug","location":"Dubai"},{"imgSrc":"/images/event/170/event2.jpg","title":"Dialogue for Action on Cancer Screening and Prevention","date":"May 18, 2020","month":"may","location":"Washington DC, US"},{"imgSrc":"/images/event/170/event3.jpg","title":"Workout routine and Longevity Meetup","date":"mar 24, 2020","month":"mar","location":"Birmingham, England"}],"events":[{"id":1,"imgSrc":"/images/event/370/event1.jpg","alt":"event image","date":"Nov 22, 2020","title":"Storytelling Workshop 2020","location":"Texas, US"},{"id":2,"imgSrc":"/images/event/370/event2.jpg","alt":"event image","date":"Oct 10, 2020","title":"Painting Art Contest 2020","location":"New York, US"},{"id":3,"imgSrc":"/images/event/370/event3.jpg","alt":"event image","date":"Dec 25, 2020","title":"International Art Fair 2020","location":"Hamburg, Germany"},{"id":4,"imgSrc":"/images/event/370/event4.jpg","alt":"event image","date":"Jan 20, 2020","title":"Consumer Food Safety Education","location":"Illinois, US"},{"id":5,"imgSrc":"/images/event/370/event5.jpg","alt":"event image","date":"Apr 28, 2020","title":"Street Performance: Call for Artist","location":"Chicago, US"},{"id":6,"imgSrc":"/images/event/370/event6.jpg","alt":"event image","date":"Mar 10, 2020","title":"How meditation improve your mental health?","location":"Washington DC, US"},{"id":7,"imgSrc":"/images/event/370/event7.jpg","alt":"event image","date":"Sep 25, 2020","title":"Dialogue for Action on Cancer Screening and Prevention","location":" Hamburg, Germany"},{"id":8,"imgSrc":"/images/event/370/event8.jpg","alt":"event image","date":"Dec 18, 2020","title":"Workout routine and Longevity Meetup","location":"New York, US"},{"id":9,"imgSrc":"/images/event/370/event9.jpg","alt":"event image","date":"Nov 22, 2020","title":"Learning Counsel Digital Transition Discussion Event – Chicago","location":" Texas, US"}]}')},738:function(t,e,n){"use strict";n.r(e);n(19),n(39),n(46);var o=n(441),l={components:{HeaderStyleTwo:function(){return Promise.resolve().then(n.bind(null,436))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,257))},EventItemGridStyle:function(){return n.e(3).then(n.bind(null,691))},FooterStyleOne:function(){return Promise.resolve().then(n.bind(null,434))}},data:function(){return{eventData:o,options:["Popularity","Latest","Price: low to high","Price: high to low"],placeholderItem:"Default"}},computed:{getSelectorPlaceholder:function(){return this.placeholderItem}},head:function(){return{title:"Login Register"}}},r=n(15),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("HeaderStyleTwo"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("div",{staticClass:"page-title-section section-padding-top-0"},[n("div",{staticClass:"page-breadcrumb"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"breadcrumb"},[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"current"},[t._v("Login Register")])])])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),n("FooterStyleOne")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Login Register")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-register-section section-padding-bottom"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-5 col-lg-6"},[n("div",{staticClass:"login-form-wrapper"},[n("h3",{staticClass:"title"},[t._v("Login")]),t._v(" "),n("form",{staticClass:"login-form"},[n("div",{staticClass:"single-input mb-30"},[n("label",{attrs:{for:"username"}},[t._v("Username or email")]),t._v(" "),n("input",{attrs:{type:"text",id:"username",name:"username",placeholder:"Username or email"}})]),t._v(" "),n("div",{staticClass:"single-input mb-30"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),n("input",{attrs:{type:"text",id:"password",name:"password",placeholder:"Password"}})]),t._v(" "),n("div",{staticClass:"single-input mb-30"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 remember-me-wrap"},[n("div",{staticClass:"checkbox-input"},[n("input",{attrs:{type:"checkbox",name:"login-form-remember",id:"login-form-remember"}}),t._v(" "),n("label",{attrs:{for:"login-form-remember"}},[t._v("Remember me")])])]),t._v(" "),n("div",{staticClass:"col-sm-6 lost-your-password-wrap"},[n("button",{staticClass:"lost-your-password"},[t._v("Lost your password?")])])])]),t._v(" "),n("div",{staticClass:"single-input"},[n("button",{staticClass:"btn btn-primary btn-hover-secondary btn-width-100"},[t._v("Log In")])])])])]),t._v(" "),n("div",{staticClass:"col-xl-6 offset-xl-1 col-lg-6"},[n("div",{staticClass:"login-form-wrapper mt-sm-50 mt-xs-50"},[n("h3",{staticClass:"title"},[t._v("Register")]),t._v(" "),n("form",{staticClass:"register-form"},[n("div",{staticClass:"single-input mb-30"},[n("label",{attrs:{for:"usernameOne"}},[t._v("Username")]),t._v(" "),n("input",{attrs:{type:"text",id:"usernameOne",name:"username",placeholder:"Username"}})]),t._v(" "),n("div",{staticClass:"single-input mb-30"},[n("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{attrs:{type:"text",id:"email",name:"username",placeholder:"Email"}})]),t._v(" "),n("div",{staticClass:"single-input mb-30"},[n("label",{attrs:{for:"passwordOne"}},[t._v("Password")]),t._v(" "),n("input",{attrs:{type:"text",id:"passwordOne",name:"password",placeholder:"Password"}}),t._v(" "),n("p",{staticClass:"description"},[t._v('The password must be at least twelve characters long, contain upper and lower case letters, contain numbers, contain symbols like ! " ? $ % ^ &')])]),t._v(" "),n("div",{staticClass:"single-input"},[n("button",{staticClass:"btn btn-primary btn-hover-secondary btn-width-100"},[t._v("Register")])])])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderStyleTwo:n(436).default,OffCanvasMobileMenu:n(257).default,FooterStyleOne:n(434).default})}}]);