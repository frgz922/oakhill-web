(window.webpackJsonp=window.webpackJsonp||[]).push([[186,64,72,104,162],{433:function(t,e,o){"use strict";o.r(e);var l=o(15),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"site-main-menu"},[o("ul",[o("li",{staticClass:"position-static"},[o("n-link",{attrs:{to:"/training"}},[o("span",{staticClass:"menu-text"},[t._v("Training")])])],1),t._v(" "),o("li",{staticClass:"position-static"},[o("n-link",{attrs:{to:"/documents"}},[o("span",{staticClass:"menu-text"},[t._v("Docs")])])],1),t._v(" "),o("li",{staticClass:"position-static"},[o("n-link",{attrs:{to:"/blueprints"}},[o("span",{staticClass:"menu-text"},[t._v("Blueprints")])])],1)])])}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,o){"use strict";o.r(e);var l={props:["addClassName","addBackgroundColor"]},n=o(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-section",class:t.addBackgroundColor},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-6 col-md-5 max-mb-50"},[o("div",{staticClass:"footer-widget",class:t.addClassName},[o("h4",{staticClass:"footer-widget-title"},[t._v("Address")]),t._v(" "),t._m(0)])]),t._v(" "),o("div",{staticClass:"col-xl-3 col-md-4 col-sm-7 max-mb-50"},[o("div",{staticClass:"footer-widget",class:t.addClassName},[o("h4",{staticClass:"footer-widget-title"},[t._v("Explore")]),t._v(" "),o("div",{staticClass:"footer-widget-content"},[o("ul",{staticClass:"column-2"},[o("li",[o("n-link",{attrs:{to:""}},[t._v("Start here")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:""}},[t._v("Success story")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/blog/blog-grid"}},[t._v("Blog")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/course/courses-grid-one"}},[t._v("Courses")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/about-us-one"}},[t._v("About us")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact us")])],1)])])])]),t._v(" "),o("div",{staticClass:"col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50"},[o("div",{staticClass:"footer-widget",class:t.addClassName},[o("h4",{staticClass:"footer-widget-title"},[t._v("Information")]),t._v(" "),o("div",{staticClass:"footer-widget-content"},[o("ul",[o("li",[o("n-link",{attrs:{to:""}},[t._v("Membership")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:""}},[t._v("Purchase guide")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:""}},[t._v("Privacy policy")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:""}},[t._v("Terms of service")])],1)])])])])]),t._v(" "),o("div",{staticClass:"row max-mt-20"},[o("div",{staticClass:"col"},[o("p",{staticClass:"copyright"},[t._v("© "+t._s((new Date).getFullYear())+" "),o("b",[t._v("Maxcoach")]),t._v(" Made with "),o("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),t._m(1)])])])]),t._v(" "),o("client-only",[o("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[o("i",{staticClass:"arrow-top fal fa-long-arrow-up"}),t._v(" "),o("i",{staticClass:"arrow-bottom fal fa-long-arrow-up"})])],1)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-widget-content"},[o("div",{staticClass:"content"},[o("p",[t._v("Your address goes here")]),t._v(" "),o("p",[t._v("0123456789 (9am - 5pm EST, Monday - Friday)")]),t._v(" "),o("p",[o("a",{attrs:{href:"mailto:info@example.com"}},[t._v("info@example.com")])])]),t._v(" "),o("div",{staticClass:"footer-social-inline"},[o("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[o("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),o("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[o("i",{staticClass:"fab fa-twitter"})]),t._v(" "),o("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[o("i",{staticClass:"fab fa-instagram"})]),t._v(" "),o("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[o("i",{staticClass:"fab fa-linkedin"})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:"https://hasthemes.com/",target:"_blank"}},[o("b",[t._v("HasThemes")])])}],!1,null,null,null);e.default=component.exports},436:function(t,e,o){"use strict";o.r(e);o(19),o(39),o(46);var l={components:{Navigation:function(){return Promise.resolve().then(o.bind(null,433))}},data:function(){return{isSticky:!1,isHidden:!0}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var o=document.querySelector("#offcanvas-menu");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},n=o(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header-section header-shadow",class:{"is-sticky":t.isSticky}},[o("div",{staticClass:"header-inner"},[o("div",{staticClass:"container position-relative"},[o("div",{staticClass:"row justify-content-between align-items-center"},[o("div",{staticClass:"col-xl-3 col-auto"},[o("div",{staticClass:"header-logo"},[o("n-link",{attrs:{to:"/"}},[o("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/dark-logo.png",alt:"logo dark"}}),t._v(" "),o("img",{staticClass:"light-logo",attrs:{src:"/images/logo/light-logo.png",alt:"logo light"}})])],1)]),t._v(" "),o("div",{staticClass:"col d-none d-xl-block position-static"},[o("Navigation")],1),t._v(" "),o("div",{staticClass:"col-xl-3 col-auto"},[o("div",{staticClass:"header-right"},[o("div",{staticClass:"inner"},[o("div",{staticClass:"header-login"},[o("n-link",{attrs:{to:"/course/profile"}},[o("i",{staticClass:"far fa-user-circle"})])],1),t._v(" "),o("div",{staticClass:"header-search"},[o("button",{staticClass:"header-search-toggle",on:{click:function(e){t.isHidden=!t.isHidden}}},[o("i",{staticClass:"far fa-search"})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isHidden,expression:"!isHidden"}],staticClass:"header-search-form"},[t._m(0)])]),t._v(" "),o("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[o("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[o("i",{staticClass:"icon-top"}),t._v(" "),o("i",{staticClass:"icon-middle"}),t._v(" "),o("i",{staticClass:"icon-bottom"})])])])])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[o("input",{attrs:{type:"text",placeholder:"Search..."}}),t._v(" "),o("button",[o("i",{staticClass:"fas fa-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:o(433).default})},692:function(t,e,o){"use strict";o.r(e);var l={props:["post"]},n=o(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"zoom-event"},[o("div",{staticClass:"thumbnail"},[o("n-link",{staticClass:"image",attrs:{to:"/"}},[o("img",{attrs:{src:t.post.imgSrc,alt:t.post.title+" Thumbnail"}})])],1),t._v(" "),o("div",{staticClass:"info"},[o("h3",{staticClass:"title"},[o("n-link",{attrs:{to:"/"}},[t._v(t._s(t.post.title))])],1),t._v(" "),o("div",{staticClass:"zoom-id"},[o("span",{staticClass:"label"},[t._v("Meeting ID: ")]),t._v(" "),o("span",{staticClass:"value theme-color"},[t._v(t._s(t.post.meetingID))])]),t._v(" "),o("ul",{staticClass:"meta"},[o("li",[o("i",{staticClass:"far fa-calendar"}),t._v("\n                "+t._s(t.post.date)+" "),o("span",{staticClass:"time"},[t._v(t._s(t.post.time))])]),t._v(" "),o("li",[o("i",{staticClass:"far fa-clock"}),t._v("\n                "+t._s(t.post.duration)+"\n            ")])])])])}),[],!1,null,null,null);e.default=component.exports},718:function(t){t.exports=JSON.parse('[{"id":1,"imgSrc":"/images/zoom/370/zoom-1.jpg","title":"Marketing Committee Meeting","meetingID":"91169814481","date":"Jul 24, 2020","time":"2:30 PM","duration":"60m"},{"id":2,"imgSrc":"/images/zoom/370/zoom-2.jpg","title":"Executive Assistant Meeting","meetingID":"97202032068","date":"Mar 24, 2020","time":"2:30 PM","duration":"75m"},{"id":3,"imgSrc":"/images/zoom/370/zoom-3.jpg","title":"Website Renovation Meeting","meetingID":"94700077974","date":"Jun 24, 2020","time":"2:30 PM","duration":"35m"},{"id":4,"imgSrc":"/images/zoom/370/zoom-4.jpg","title":"Teacher Leader Team Meeting","meetingID":"95165752606","date":"Apr 24, 2020","time":"2:30 PM","duration":"45m"},{"id":5,"imgSrc":"/images/zoom/370/zoom-5.jpg","title":"Team member responsibilities","meetingID":"99383649933","date":"Sep 24, 2020","time":"2:30 PM","duration":"40m"},{"id":6,"imgSrc":"/images/zoom/370/zoom-6.jpg","title":"Strategic Planning Meeting","meetingID":"91169814481","date":"Dec 24, 2020","time":"2:30 PM","duration":"35m"}]')},770:function(t,e,o){"use strict";o.r(e);o(19),o(39),o(46);var l=o(718),n={components:{HeaderStyleTwo:function(){return Promise.resolve().then(o.bind(null,436))},OffCanvasMobileMenu:function(){return Promise.resolve().then(o.bind(null,257))},ZoomMeetingPost:function(){return Promise.resolve().then(o.bind(null,692))},FooterStyleOne:function(){return Promise.resolve().then(o.bind(null,434))}},data:function(){return{zoomData:l}},head:function(){return{title:"Zoom Meetings"}}},r=o(15),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-container"},[o("HeaderStyleTwo"),t._v(" "),o("OffCanvasMobileMenu"),t._v(" "),o("div",{staticClass:"page-title-section section-padding-top-0"},[o("div",{staticClass:"page-breadcrumb"},[o("div",{staticClass:"container"},[o("ul",{staticClass:"breadcrumb"},[o("li",[o("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",{staticClass:"current"},[t._v("Zoom Meetings")])])])]),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"section-padding-bottom"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30"},t._l(t.zoomData,(function(t,e){return o("div",{key:e,staticClass:"col max-mb-30",attrs:{"data-aos":"fade-up"}},[o("ZoomMeetingPost",{attrs:{post:t}})],1)})),0),t._v(" "),o("div",{staticClass:"row max-mt-50"},[o("div",{staticClass:"col text-center"},[o("n-link",{staticClass:"btn btn-outline-primary load-more-btn",attrs:{to:"/"}},[t._v("\n                        Load More \n                        "),o("i",{staticClass:"fal fa-redo ml-3"})])],1)])])]),t._v(" "),o("FooterStyleOne")],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-title"},[o("div",{staticClass:"container"},[o("h1",{staticClass:"title"},[t._v("Zoom Meetings")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderStyleTwo:o(436).default,OffCanvasMobileMenu:o(257).default,ZoomMeetingPost:o(692).default,FooterStyleOne:o(434).default})}}]);