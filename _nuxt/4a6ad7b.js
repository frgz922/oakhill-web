(window.webpackJsonp=window.webpackJsonp||[]).push([[202,1,2,69,105],{445:function(e,t,o){"use strict";o.r(t);var n={props:["addClassName","addBackgroundColor"]},l=o(15),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-section",class:e.addBackgroundColor},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-6 col-md-5 max-mb-50"},[o("div",{staticClass:"footer-widget",class:e.addClassName},[o("h4",{staticClass:"footer-widget-title"},[e._v("Address")]),e._v(" "),e._m(0)])]),e._v(" "),o("div",{staticClass:"col-xl-3 col-md-4 col-sm-7 max-mb-50"},[o("div",{staticClass:"footer-widget",class:e.addClassName},[o("h4",{staticClass:"footer-widget-title"},[e._v("Company")]),e._v(" "),o("div",{staticClass:"footer-widget-content"},[o("ul",{staticClass:"column-1"},[o("li",[o("n-link",{attrs:{to:""}},[e._v("Platform")])],1),e._v(" "),o("li",[o("n-link",{attrs:{to:""}},[e._v("About")])],1),e._v(" "),o("li",[o("n-link",{attrs:{to:"/blog/blog-grid"}},[e._v("News")])],1)])])])]),e._v(" "),o("div",{staticClass:"col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50"},[o("div",{staticClass:"footer-widget",class:e.addClassName},[o("h4",{staticClass:"footer-widget-title"},[e._v("Contact")]),e._v(" "),e._m(1)])])]),e._v(" "),o("div",{staticClass:"row max-mt-20"},[o("div",{staticClass:"col"},[o("p",{staticClass:"copyright"},[e._v("© "+e._s((new Date).getFullYear())+" "),o("b",[e._v("Cinchy Inc.")])])])])]),e._v(" "),o("client-only",[o("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[o("i",{staticClass:"arrow-top fal fa-long-arrow-up"}),e._v(" "),o("i",{staticClass:"arrow-bottom fal fa-long-arrow-up"})])],1)],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-widget-content"},[o("div",{},[o("p",[e._v("530 Adelaide St West")]),e._v(" "),o("p",[e._v("Toronto, Ontario")]),e._v(" "),o("p",[o("a",{attrs:{href:"mailto:info@cinchy.com"}},[e._v("info@cinchy.com")])])]),e._v(" "),o("div",{staticClass:"footer-social-inline"},[o("a",{attrs:{href:"https://twitter.com/itscinchy?lang=en",target:"_blank"}},[o("i",{staticClass:"fab fa-twitter"})]),e._v(" "),o("a",{attrs:{href:"https://www.linkedin.com/company/cinchy",target:"_blank"}},[o("i",{staticClass:"fab fa-linkedin"})])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-widget-content"},[o("ul",[o("li",[o("a",{attrs:{href:"mailto:partnerships@cinchy.com"}},[e._v("Partnerships")])]),e._v(" "),o("li",[o("a",{attrs:{href:"mailto:sales@cinchy.com"}},[e._v("Sales")])]),e._v(" "),o("li",[o("a",{attrs:{href:"mailto:support@cinchy.com"}},[e._v("Support")])])])])}],!1,null,null,null);t.default=component.exports},447:function(e,t,o){"use strict";o.r(t);var n=o(15),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",{staticClass:"site-main-menu"},[o("ul",[o("li",{staticClass:"position-static"},[o("n-link",{attrs:{to:"/support"}},[o("span",{staticClass:"menu-text"},[e._v("Support")])])],1),e._v(" "),o("li",{staticClass:"position-static"},[o("n-link",{attrs:{to:"/news"}},[o("span",{staticClass:"menu-text"},[e._v("Partner News")])])],1),e._v(" "),o("li",{staticClass:"position-static"},[o("n-link",{attrs:{to:"/join"}},[o("span",{staticClass:"menu-text"},[e._v("Join")])])],1)])])}),[],!1,null,null,null);t.default=component.exports},452:function(e,t,o){"use strict";o.r(t);o(19),o(39),o(46);var n={components:{NavigationCinchy1:function(){return Promise.resolve().then(o.bind(null,447))}},data:function(){return{isSticky:!1,isHidden:!0}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){var t=window.scrollY;e.isSticky=t>=200}))},methods:{mobiletoggleClass:function(e,t){var o=document.querySelector("#offcanvas-menu");"addClass"===e?o.classList.add(t):o.classList.remove(t)}}},l=o(15),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"header-section header-shadow",class:{"is-sticky":e.isSticky}},[o("div",{staticClass:"header-inner"},[o("div",{staticClass:"container position-relative"},[o("div",{staticClass:"row justify-content-between align-items-center"},[o("div",{staticClass:"col-xl-3 col-auto"},[o("div",{staticClass:"header-logo"},[o("n-link",{attrs:{to:"/"}},[o("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/cinchy_logo_dark.png",alt:"logo dark"}}),e._v(" "),o("img",{staticClass:"light-logo",attrs:{src:"/images/logo/cinchy_logo_light.png",alt:"logo light"}})])],1)]),e._v(" "),o("div",{staticClass:"col d-none d-xl-block position-static"},[o("NavigationCinchy1")],1),e._v(" "),o("div",{staticClass:"col-xl-3 col-auto"},[o("div",{staticClass:"header-right"},[o("div",{staticClass:"inner"},[e._m(0),e._v(" "),o("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[o("button",{staticClass:"toggle",on:{click:function(t){return e.mobiletoggleClass("addClass","show-mobile-menu")}}},[o("i",{staticClass:"icon-top"}),e._v(" "),o("i",{staticClass:"icon-middle"}),e._v(" "),o("i",{staticClass:"icon-bottom"})])])])])])])])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header-login"},[o("a",{attrs:{href:"https://cinchy.net/"}},[e._v("\n                                    Login  "),o("i",{staticClass:"far fa-user-circle"})])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NavigationCinchy1:o(447).default})},677:function(e,t,o){"use strict";o.r(t);var n={props:["event"]},l=o(15),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"media"},[o("div",{staticClass:"media-body"},[o("fieldset",{staticClass:"form-fieldset"},[o("legend",[e._v(" "+e._s(e.event.location))]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-3 pd-10"},[o("div",{staticClass:"thumbnail"},[o("n-link",{staticClass:"image",attrs:{to:"/event/event-details"}},[o("img",{attrs:{src:e.event.imgSrc,alt:e.event.title+" Thumbnail"}})])],1)]),e._v(" "),o("div",{staticClass:"col-9"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"d-block tx-20 tx-bold"},[o("n-link",{attrs:{to:"/event/event-details"}},[e._v(e._s(e.event.title))])],1)]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"d-block"},[o("span",{staticClass:"date"},[e._v(e._s(e.event.date))])])])])])])])])}),[],!1,null,null,null);t.default=component.exports},714:function(e){e.exports=JSON.parse('{"events":[{"id":1,"imgSrc":"/images/event/570/event-1.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"Storytelling Workshop 2020","location":"Product"},{"id":2,"imgSrc":"/images/event/570/event-1.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"Painting Art Contest 2020","location":"Sales"},{"id":3,"imgSrc":"/images/event/570/event-1.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"International Art Fair 2020","location":"Sales"},{"id":4,"imgSrc":"/images/event/570/event-1.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"Consumer Food Safety Education","location":"Product"},{"id":5,"imgSrc":"/images/event/370/event5.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"Street Performance: Call for Artist","location":"Client Success"},{"id":6,"imgSrc":"/images/event/370/event6.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"How meditation improve your mental health?","location":"Developers"},{"id":7,"imgSrc":"/images/event/370/event7.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"Dialogue for Action on Cancer Screening and Prevention","location":"Developers"},{"id":8,"imgSrc":"/images/event/370/event8.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"Workout routine and Longevity Meetup","location":"Product"},{"id":9,"imgSrc":"/images/event/370/event9.jpg","alt":"event image","date":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","title":"Learning Counsel Digital Transition Discussion Event – Chicago","location":" Marketing"}]}')},741:function(e,t,o){"use strict";o.r(t);o(19),o(39),o(46);var n=o(714),l={components:{HeaderStyleCinchy1:function(){return Promise.resolve().then(o.bind(null,452))},OffCanvasMobileMenu:function(){return Promise.resolve().then(o.bind(null,257))},NewsEvent1:function(){return Promise.resolve().then(o.bind(null,677))},FooterStyleCinchy1:function(){return Promise.resolve().then(o.bind(null,445))}},data:function(){return{eventData:n,options:["Partner News","Product Updates","Training","Spotlight"],placeholderItem:"Default"}},computed:{getSelectorPlaceholder:function(){return this.placeholderItem}},head:function(){return{title:"Partner News"}}},r=o(15),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main-container"},[o("HeaderStyleCinchy1"),e._v(" "),o("OffCanvasMobileMenu"),e._v(" "),o("div",{},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-between align-items-center pd-b-50 pd-t-20"},[e._m(0),e._v(" "),o("div",{staticClass:"col-sm-auto col-12 max-mb-10"},[o("v-select",{attrs:{options:e.options,placeholder:e.getSelectorPlaceholder}})],1)]),e._v(" "),o("div",{staticClass:"row pd-l-100 pd-r-100"},e._l(e.eventData.events,(function(e){return o("div",{key:e.id,staticClass:"col-12 max-mb-30",attrs:{"data-aos":"fade-up"}},[o("NewsEvent1",{attrs:{event:e}})],1)})),0),e._v(" "),o("div",{staticClass:"row max-mt-50 mg-b-50"},[o("div",{staticClass:"col"},[o("paginate",{attrs:{"page-count":1,"page-range":3,"margin-pages":2,"prev-text":"Prev","next-text":"Next","container-class":"pagination center","page-class":"page-item"}})],1)])])]),e._v(" "),o("FooterStyleCinchy1")],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col-sm-auto col-12 max-mb-10"},[o("p",{staticClass:"result-count tx-20"},[e._v("Recent Partner News")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderStyleCinchy1:o(452).default,OffCanvasMobileMenu:o(257).default,NewsEvent1:o(677).default,FooterStyleCinchy1:o(445).default})}}]);