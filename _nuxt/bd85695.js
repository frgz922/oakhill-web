(window.webpackJsonp=window.webpackJsonp||[]).push([[173,44,45,46,47,64,72,104,117],{433:function(t,e,r){"use strict";r.r(e);var l=r(15),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"site-main-menu"},[r("ul",[r("li",{staticClass:"position-static"},[r("n-link",{attrs:{to:"/training"}},[r("span",{staticClass:"menu-text"},[t._v("Training")])])],1),t._v(" "),r("li",{staticClass:"position-static"},[r("n-link",{attrs:{to:"/documents"}},[r("span",{staticClass:"menu-text"},[t._v("Docs")])])],1),t._v(" "),r("li",{staticClass:"position-static"},[r("n-link",{attrs:{to:"/blueprints"}},[r("span",{staticClass:"menu-text"},[t._v("Blueprints")])])],1)])])}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,r){"use strict";r.r(e);var l={props:["addClassName","addBackgroundColor"]},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-section",class:t.addBackgroundColor},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-6 col-md-5 max-mb-50"},[r("div",{staticClass:"footer-widget",class:t.addClassName},[r("h4",{staticClass:"footer-widget-title"},[t._v("Address")]),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-md-4 col-sm-7 max-mb-50"},[r("div",{staticClass:"footer-widget",class:t.addClassName},[r("h4",{staticClass:"footer-widget-title"},[t._v("Explore")]),t._v(" "),r("div",{staticClass:"footer-widget-content"},[r("ul",{staticClass:"column-2"},[r("li",[r("n-link",{attrs:{to:""}},[t._v("Start here")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:""}},[t._v("Success story")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/blog/blog-grid"}},[t._v("Blog")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/course/courses-grid-one"}},[t._v("Courses")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about-us-one"}},[t._v("About us")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact us")])],1)])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50"},[r("div",{staticClass:"footer-widget",class:t.addClassName},[r("h4",{staticClass:"footer-widget-title"},[t._v("Information")]),t._v(" "),r("div",{staticClass:"footer-widget-content"},[r("ul",[r("li",[r("n-link",{attrs:{to:""}},[t._v("Membership")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:""}},[t._v("Purchase guide")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:""}},[t._v("Privacy policy")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:""}},[t._v("Terms of service")])],1)])])])])]),t._v(" "),r("div",{staticClass:"row max-mt-20"},[r("div",{staticClass:"col"},[r("p",{staticClass:"copyright"},[t._v("© "+t._s((new Date).getFullYear())+" "),r("b",[t._v("Maxcoach")]),t._v(" Made with "),r("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),t._m(1)])])])]),t._v(" "),r("client-only",[r("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[r("i",{staticClass:"arrow-top fal fa-long-arrow-up"}),t._v(" "),r("i",{staticClass:"arrow-bottom fal fa-long-arrow-up"})])],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-widget-content"},[r("div",{staticClass:"content"},[r("p",[t._v("Your address goes here")]),t._v(" "),r("p",[t._v("0123456789 (9am - 5pm EST, Monday - Friday)")]),t._v(" "),r("p",[r("a",{attrs:{href:"mailto:info@example.com"}},[t._v("info@example.com")])])]),t._v(" "),r("div",{staticClass:"footer-social-inline"},[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-instagram"})]),t._v(" "),r("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-linkedin"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:"https://hasthemes.com/",target:"_blank"}},[r("b",[t._v("HasThemes")])])}],!1,null,null,null);e.default=component.exports},436:function(t,e,r){"use strict";r.r(e);r(19),r(39),r(46);var l={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,433))}},data:function(){return{isSticky:!1,isHidden:!0}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var r=document.querySelector("#offcanvas-menu");"addClass"===t?r.classList.add(e):r.classList.remove(e)}}},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header-section header-shadow",class:{"is-sticky":t.isSticky}},[r("div",{staticClass:"header-inner"},[r("div",{staticClass:"container position-relative"},[r("div",{staticClass:"row justify-content-between align-items-center"},[r("div",{staticClass:"col-xl-3 col-auto"},[r("div",{staticClass:"header-logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/dark-logo.png",alt:"logo dark"}}),t._v(" "),r("img",{staticClass:"light-logo",attrs:{src:"/images/logo/light-logo.png",alt:"logo light"}})])],1)]),t._v(" "),r("div",{staticClass:"col d-none d-xl-block position-static"},[r("Navigation")],1),t._v(" "),r("div",{staticClass:"col-xl-3 col-auto"},[r("div",{staticClass:"header-right"},[r("div",{staticClass:"inner"},[r("div",{staticClass:"header-login"},[r("n-link",{attrs:{to:"/course/profile"}},[r("i",{staticClass:"far fa-user-circle"})])],1),t._v(" "),r("div",{staticClass:"header-search"},[r("button",{staticClass:"header-search-toggle",on:{click:function(e){t.isHidden=!t.isHidden}}},[r("i",{staticClass:"far fa-search"})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isHidden,expression:"!isHidden"}],staticClass:"header-search-form"},[t._m(0)])]),t._v(" "),r("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[r("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[r("i",{staticClass:"icon-top"}),t._v(" "),r("i",{staticClass:"icon-middle"}),t._v(" "),r("i",{staticClass:"icon-bottom"})])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("input",{attrs:{type:"text",placeholder:"Search..."}}),t._v(" "),r("button",[r("i",{staticClass:"fas fa-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(433).default})},438:function(t){t.exports=JSON.parse('{"coursePostItem":[{"id":1,"image":"/images/courses/370/course-1.jpg","date":"Jan 15, 2020","price":"$40","title":"Learning to Write as a Professional Author","lessons":"20 Lessons","students":"51 Students","avatar":"/images/courses/course-avatar.jpeg","instructorName":"Blanche Fields"},{"id":2,"image":"/images/courses/370/course-2.jpg","date":"Jun 18, 2020","price":"Free","title":"Customer-centric Info-Tech Strategies","lessons":"40 Lessons","students":"80 Students","avatar":"/images/courses/course-avatar2.jpeg","instructorName":"Blanche Fields"},{"id":3,"image":"/images/courses/370/course-3.jpg","date":"Mar 19, 2020","price":"$19","title":"Open Programming Courses for Everyone: Python","lessons":"16 Lessons","students":"57 Students","avatar":"/images/courses/course-avatar.jpeg","instructorName":"Blanche Fields"},{"id":4,"image":"/images/courses/370/course-4.jpg","date":"Aug 13, 2020","price":"$26","title":"Academic Listening and Note-taking","lessons":"20 Lessons","students":"51 Students","avatar":"/images/courses/course-avatar2.jpeg","instructorName":"Blanche Fields"},{"id":5,"image":"/images/courses/370/course-5.jpg","date":"Dec 20, 2020","price":"$40","title":"Master jQuery in a Short Period of Time","lessons":"20 Lessons","students":"51 Students","avatar":"/images/courses/course-avatar.jpeg","instructorName":"Blanche Fields"},{"id":6,"image":"/images/courses/370/course-6.jpg","date":"Nov 22, 2020","price":"Free","title":"Introduction to Javascript for Beginners","lessons":"40 Lessons","students":"80 Students","avatar":"/images/courses/course-avatar2.jpeg","instructorName":"Blanche Fields"},{"id":7,"image":"/images/courses/370/course-7.jpg","date":"Sep 25, 2020","price":"$19","title":"Problem-solving Skills for Better Success","lessons":"16 Lessons","students":"57 Students","avatar":"/images/courses/course-avatar.jpeg","instructorName":"Blanche Fields"},{"id":8,"image":"/images/courses/370/course-8.jpg","date":"Jul 15, 2020","price":"$35","title":"Speed Reading Techniques in University","lessons":"36 Lessons","students":"45 Students","avatar":"/images/courses/course-avatar2.jpeg","instructorName":"Blanche Fields"},{"id":9,"image":"/images/courses/370/course-9.jpg","date":"Feb 18, 2020","price":"$95","title":"Database & SQL for Computer Science","lessons":"25 Lessons","students":"42 Students","avatar":"/images/courses/course-avatar.jpeg","instructorName":"Blanche Fields"},{"id":10,"image":"/images/courses/370/course-10.jpg","date":"Apr 28, 2020","price":"$49","title":"Intermediate English Speaking Practice","lessons":"65 Lessons","students":"70 Students","avatar":"/images/courses/course-avatar2.jpeg","instructorName":"Blanche Fields"},{"id":11,"image":"/images/courses/370/course-11.jpg","date":"Jun 10, 2020","price":"$29","title":"Complete Fitness Trainer: Beginner to Advanced","lessons":"16 Lessons","students":"57 Students","avatar":"/images/courses/course-avatar.jpeg","instructorName":"Blanche Fields"},{"id":12,"image":"/images/courses/370/course-12.jpg","date":"Mar 18, 2020","price":"$36","title":"Lazy Dancer Ballet Burn – 30 days programme","lessons":"15 Lessons","students":"23 Students","avatar":"/images/courses/course-avatar2.jpeg","instructorName":"Blanche Fields"}],"sidebar":{"price":{"icon":"far fa-money-bill-wave","label":"Price","value":"Free"},"instructor":{"icon":"far fa-chalkboard-teacher","label":"Instructor","value":"Maggie Strickland"},"duration":{"icon":"far fa-clock","label":"Duration","value":"15 weeks"},"lectures":{"icon":"far fa-clock","label":"Lectures","value":"24"},"enrolled":{"icon":"far fa-user-alt","label":"Enrolled","value":"629 students"},"Language":{"icon":"far fa-language","label":"Language","value":"English"},"Deadline":{"icon":"far fa-calendar","label":"Deadline","value":"05 Jan 2019"},"socialLink":[{"icon":"fab fa-twitter","url":"www.twitter.com"},{"icon":"fab fa-facebook-f","url":"www.facebook.com"},{"icon":"fab fa-instagram","url":"www.instagram.com"},{"icon":"fab fa-pinterest","url":"www.pinterest.com"},{"icon":"fab fa-youtube","url":"www.youtube.com"}]},"instructor":{"name":"Maggie Strickland","position":"Advanced Educator","text":"Maggie is a brilliant educator, whose life was spent for computer science and love of nature. Being a female, she encountered a lot of obstacles and was forbidden to work in this field by her family. With a true spirit and talented gift, she was able to succeed and set an example for others.","imgSrc":"/images/profile/profile.jpeg","socialLink":[{"icon":"fab fa-twitter","url":"www.twitter.com"},{"icon":"fab fa-facebook-f","url":"www.facebook.com"},{"icon":"fab fa-instagram","url":"www.instagram.com"},{"icon":"fab fa-pinterest","url":"www.pinterest.com"},{"icon":"fab fa-youtube","url":"www.youtube.com"}]}}')},440:function(t,e,r){"use strict";r.r(e);var l={props:["course"]},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"course box-shadow"},[r("div",{staticClass:"thumbnail"},[r("n-link",{staticClass:"image",attrs:{to:"/"}},[r("img",{attrs:{src:t.course.image,alt:t.course.title+"Thumbnail"}})])],1),t._v(" "),r("div",{staticClass:"info"},[r("span",{staticClass:"price"},[t._v(t._s(t.course.price))]),t._v(" "),r("h3",{staticClass:"title"},[r("n-link",{attrs:{to:"/"}},[t._v(t._s(t.course.title))])],1),t._v(" "),r("ul",{staticClass:"meta"},[r("li",[r("i",{staticClass:"far fa-file-alt"}),t._v("\n                "+t._s(t.course.lessons)+"\n            ")]),t._v(" "),r("li",[r("i",{staticClass:"far fa-user-alt"}),t._v("\n                "+t._s(t.course.students)+"\n            ")])])])])}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,r){"use strict";r.r(e);var l={},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"course-instructor"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"profile-info"},[r("h5",[r("n-link",{attrs:{to:""}},[t._v("Maggie Strickland")])],1),t._v(" "),r("div",{staticClass:"author-career"},[t._v("/Advanced Educator")]),t._v(" "),r("p",{staticClass:"author-bio"},[t._v("Maggie is a brilliant educator, whose life was spent for computer science and love of nature. Being a female, she encountered a lot of obstacles and was forbidden to work in this field by her family. With a true spirit and talented gift, she was able to succeed and set an example for others.")]),t._v(" "),t._m(1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"profile-image"},[e("img",{attrs:{src:"/images/profile/profile.jpeg",alt:"profile"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"author-social-networks"},[r("li",{staticClass:"item"},[r("a",{staticClass:"social-link",attrs:{href:"https://twitter.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-twitter social-link-icon"})])]),t._v(" "),r("li",{staticClass:"item"},[r("a",{staticClass:"social-link",attrs:{href:"https://www.facebook.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-facebook-f social-link-icon"})])]),t._v(" "),r("li",{staticClass:"item"},[r("a",{staticClass:"social-link",attrs:{href:"https://www.instagram.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-instagram social-link-icon"})])]),t._v(" "),r("li",{staticClass:"item"},[r("a",{staticClass:"social-link",attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-pinterest social-link-icon"})])]),t._v(" "),r("li",{staticClass:"item"},[r("a",{staticClass:"social-link",attrs:{href:"https://www.youtube.com/",target:"_blank"}},[r("i",{staticClass:"fab fa-youtube social-link-icon"})])])])}],!1,null,null,null);e.default=component.exports},488:function(t,e,r){"use strict";r.r(e);var l=r(15),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar-widget-wrapper pr-0"},[r("div",{staticClass:"sidebar-widget"},[r("div",{staticClass:"sidebar-widget-content"},[r("div",{staticClass:"sidebar-entry-course-info"},[r("div",{staticClass:"course-price"},[r("span",{staticClass:"meta-label"},[r("i",{staticClass:"meta-icon far fa-money-bill-wave"}),t._v("\n                        Price\t\n                    ")]),t._v(" "),r("span",{staticClass:"meta-value"},[r("span",{staticClass:"price"},[t._v("Free")])])]),t._v(" "),r("div",{staticClass:"course-meta"},[r("div",{staticClass:"course-instructor"},[r("span",{staticClass:"meta-label"},[r("i",{staticClass:"far fa-chalkboard-teacher"}),t._v("\n                            Instructor\t\t\t\t\n                        ")]),t._v(" "),r("span",{staticClass:"meta-value"},[t._v("Maggie Strickland")])]),t._v(" "),r("div",{staticClass:"course-duration"},[r("span",{staticClass:"meta-label"},[r("i",{staticClass:"far fa-clock"}),t._v("\n                            Duration\t\t\t\t\n                        ")]),t._v(" "),r("span",{staticClass:"meta-value"},[t._v("15 weeks")])]),t._v(" "),r("div",{staticClass:"course-lectures"},[r("span",{staticClass:"meta-label"},[r("i",{staticClass:"far fa-file-alt"}),t._v("\n                            Lectures\t\t\t\t\n                        ")]),t._v(" "),r("span",{staticClass:"meta-value"},[t._v("24")])]),t._v(" "),r("div",{staticClass:"course-students"},[r("span",{staticClass:"meta-label"},[r("i",{staticClass:"far fa-user-alt"}),t._v("\n                            Enrolled\t\n                        ")]),t._v(" "),r("span",{staticClass:"meta-value"},[t._v("629 students")])]),t._v(" "),r("div",{staticClass:"course-language"},[r("span",{staticClass:"meta-label"},[r("i",{staticClass:"far fa-language"}),t._v("\n                            Language\t\t\t\t\n                        ")]),t._v(" "),r("span",{staticClass:"meta-value"},[t._v("English")])]),t._v(" "),r("div",{staticClass:"course-time"},[r("span",{staticClass:"meta-label"},[r("i",{staticClass:"far fa-calendar"}),t._v("\n                            Deadline\t\t\t\t\n                        ")]),t._v(" "),r("span",{staticClass:"meta-value"},[t._v("05 Jan  2019")])])]),t._v(" "),r("div",{staticClass:"lp-course-buttons"},[r("button",{staticClass:"btn btn-primary btn-hover-secondary btn-width-100"},[t._v("Enroll")])]),t._v(" "),r("div",{staticClass:"entry-course-share"},[r("div",{staticClass:"share-media"},[r("div",{staticClass:"share-label"},[t._v("Share this course")]),t._v(" "),r("span",{staticClass:"share-icon far fa-share-alt"}),t._v(" "),r("div",{staticClass:"share-list"},[r("a",{staticClass:"hint--bounce hint--top hint--theme-two",attrs:{"aria-label":"Facebook",target:"_blank",href:"JavaScript:Void(0);"}},[r("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),r("a",{staticClass:"hint--bounce hint--top hint--theme-two",attrs:{"aria-label":"Twitter",target:"_blank",href:"JavaScript:Void(0);"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{staticClass:"hint--bounce hint--top hint--theme-two",attrs:{"aria-label":"Linkedin",target:"_blank",href:"JavaScript:Void(0);"}},[r("i",{staticClass:"fab fa-linkedin"})]),t._v(" "),r("a",{staticClass:"hint--bounce hint--top hint--theme-two",attrs:{"aria-label":"Tumblr",target:"_blank",href:"JavaScript:Void(0);"}},[r("i",{staticClass:"fab fa-tumblr-square"})])])])])])])])])}],!1,null,null,null);e.default=component.exports},688:function(t,e,r){"use strict";r.r(e);r(19),r(39),r(46);var l={components:{CourseDetailsSidebar:function(){return Promise.resolve().then(r.bind(null,488))},CourseInstructor:function(){return Promise.resolve().then(r.bind(null,484))}}},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row max-mb-n50"},[r("div",{staticClass:"col-lg-8 col-12 order-lg-1 max-mb-50"},[r("div",{staticClass:"course-details-wrapper"},[r("b-tabs",{attrs:{pills:"",card:""}},[r("b-tab",{attrs:{title:"Overview",active:""}},[r("div",{staticClass:"course-overview"},[r("h3",{staticClass:"title"},[t._v("Course Description")]),t._v(" "),r("p",[t._v("Now more than ever, corporations are investing heavily in IT. The quality of these investments affects the daily work of millions.")]),t._v(" "),r("p",[t._v("Yet it’s not uncommon to see industry surveys where the failure rates for IT projects is over 50%. It’s possible to do better and it’s possible to do so consistently. Use the Business Model Canvas to focus your company strategy and facilitate buy-in from stakeholders.")]),t._v(" "),r("div",{staticClass:"overview-course-video"},[r("iframe",{attrs:{title:"Drive Digital Transformation With Platform Strategies | Info-Tech Analyst Perspective",src:"https://www.youtube.com/embed/m-X1ExlQ9uE?feature=oembed"}})]),t._v(" "),r("p",[t._v("In this two-week course, we’ll step through major challenges within corporate IT and how to address them with the disciplined use of design thinking, Lean Startup, and agile as a team framework.")]),t._v(" "),r("p",[t._v("Translate your work on the Canvas to specific charters in IT. Rapidly prototype strategically-aligned processes for implementation within your IT infrastructure. How do you define a customer-centric strategy you can actually execute? To do strategic IT, you’ve got to have a strategy! Ideally, you need one that’s easy to understand and use as a clear basis for action.")]),t._v(" "),r("p",[t._v("That’s what you’ll learn in this course.")]),t._v(" "),r("h3",{staticClass:"title"},[t._v("A Short Description")]),t._v(" "),r("p",[t._v("A customer-centric way of doing business is a way that provides a positive customer experience before and after the sale in order to drive repeat business, enhance customer loyalty and improve business growth.")]),t._v(" "),r("p",[t._v("But, a customer-centric company is more than a company that offers good service. Both Amazon and Zappos are prime examples of brands that are customer-centric and have spent years creating a culture around the customer and their needs. Their commitment to delivering customer value is genuine – In fact, Zappos is happy to fire employees if they do not fit within their customer-centric culture!")]),t._v(" "),r("p",[t._v("But, how important is being customer-centric? The good news is that’s becoming very important! Econsultancy recently asked what the most important characteristic is in order to establish a truly “digital-native” culture. The answer to that question and leading the responses with 58% was to be customer-centric. ")]),t._v(" "),r("p",[t._v("Enroll in this course to find out.")])])]),t._v(" "),r("b-tab",{attrs:{title:"Instructor"}},[r("CourseInstructor")],1),t._v(" "),r("b-tab",{attrs:{title:"Reviews"}},[r("div",{staticClass:"course-reviews"},[r("div",{staticClass:"course-rating"},[r("h3",{staticClass:"title"},[t._v("Reviews")]),t._v(" "),r("div",{staticClass:"course-rating-content"},[r("div",{staticClass:"average-rating"},[r("p",{staticClass:"rating-title secondary-color"},[t._v("Average Rating")]),t._v(" "),r("div",{staticClass:"rating-box"},[r("div",{staticClass:"average-value primary-color"},[t._v("\n                                                    4.50\n                                                ")]),t._v(" "),r("div",{staticClass:"review-star"},[r("div",{staticClass:"tm-star-rating"},[r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star-half-alt"})])]),t._v(" "),r("div",{staticClass:"review-amount"},[t._v("\n                                                    (2 ratings)\n                                                ")])])]),t._v(" "),r("div",{staticClass:"detailed-rating"},[r("p",{staticClass:"rating-title secondary-color"},[t._v("Detailed Rating")]),t._v(" "),r("div",{staticClass:"rating-box"},[r("div",{staticClass:"rating-rated-item"},[r("div",{staticClass:"rating-point"},[r("div",{staticClass:"tm-star-rating"},[r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"})])]),t._v(" "),r("div",{staticClass:"rating-progress"},[r("div",{staticClass:"single-progress-bar"},[r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-bar",staticStyle:{width:"90%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])])]),t._v(" "),r("div",{staticClass:"rating-count"},[t._v("1")])]),t._v(" "),r("div",{staticClass:"rating-rated-item"},[r("div",{staticClass:"rating-point"},[r("div",{staticClass:"tm-star-rating"},[r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"})])]),t._v(" "),r("div",{staticClass:"rating-progress"},[r("div",{staticClass:"single-progress-bar"},[r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-bar",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}})])])]),t._v(" "),r("div",{staticClass:"rating-count"},[t._v("1")])]),t._v(" "),r("div",{staticClass:"rating-rated-item"},[r("div",{staticClass:"rating-point"},[r("div",{staticClass:"tm-star-rating"},[r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"})])]),t._v(" "),r("div",{staticClass:"rating-progress"},[r("div",{staticClass:"single-progress-bar"},[r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-bar",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})])])]),t._v(" "),r("div",{staticClass:"rating-count"},[t._v("0")])]),t._v(" "),r("div",{staticClass:"rating-rated-item"},[r("div",{staticClass:"rating-point"},[r("div",{staticClass:"tm-star-rating"},[r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"})])]),t._v(" "),r("div",{staticClass:"rating-progress"},[r("div",{staticClass:"single-progress-bar"},[r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-bar",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})])])]),t._v(" "),r("div",{staticClass:"rating-count"},[t._v("0")])]),t._v(" "),r("div",{staticClass:"rating-rated-item"},[r("div",{staticClass:"rating-point"},[r("div",{staticClass:"tm-star-rating"},[r("span",{staticClass:"fas fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"}),t._v(" "),r("span",{staticClass:"far fa-star"})])]),t._v(" "),r("div",{staticClass:"rating-progress"},[r("div",{staticClass:"single-progress-bar"},[r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-bar",staticStyle:{width:"0%"},attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})])])]),t._v(" "),r("div",{staticClass:"rating-count"},[t._v("0")])])])])])]),t._v(" "),r("div",{staticClass:"course-reviews-area"},[r("ul",{staticClass:"course-reviews-list"},[r("li",{staticClass:"review"},[r("div",{staticClass:"review-container"},[r("div",{staticClass:"review-author"},[r("img",{attrs:{src:"/images/review-author/author1.jpeg",alt:"author"}})]),t._v(" "),r("div",{staticClass:"review-content"},[r("h4",{staticClass:"title"},[t._v("ednawatson")]),t._v(" "),r("div",{staticClass:"review-stars-rated",attrs:{title:"5 out of 5 stars"}},[r("div",{staticClass:"review-stars empty"})]),t._v(" "),r("h5",{staticClass:"review-title"},[t._v("Cover all my needs ")]),t._v(" "),r("div",{staticClass:"review-text"},[t._v("\n                                                        The course identify things we want to change and then figure out the things that need to be done to create the desired outcome. The course helped me in clearly define problems and generate a wider variety of quality solutions. Support more structures analysis of options leading to better decisions.\n                                                    ")])])])])])])])])],1)],1)]),t._v(" "),r("div",{staticClass:"col-lg-4 col-12 order-lg-2 max-mb-50"},[r("CourseDetailsSidebar")],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CourseInstructor:r(484).default,CourseDetailsSidebar:r(488).default})},689:function(t,e,r){"use strict";r.r(e);r(19),r(39),r(46);var l=r(438),n={components:{CourseItem:function(){return Promise.resolve().then(r.bind(null,440))}},data:function(){return{courseData:l,swiperOptions:{watchSlidesVisibility:!0,loop:!0,spaceBetween:30,slidesPerView:3,autoHeight:!0,speed:1e3,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{992:{slidesPerView:3},768:{slidesPerView:2},320:{slidesPerView:1}}}}}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"related-courses-section section-padding"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"courses-slider",attrs:{"data-aos":"fade-up"}},[r("swiper",{attrs:{options:t.swiperOptions}},t._l(t.courseData.coursePostItem.slice(0,5),(function(t){return r("div",{key:t.id,staticClass:"swiper-slide mb-30"},[r("CourseItem",{attrs:{course:t}})],1)})),0),t._v(" "),r("div",{staticClass:"swiper-pagination text-center"})],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-title text-center mb-35",attrs:{"data-aos":"fade-up"}},[r("h3",{staticClass:"title"},[t._v("Related Courses​")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CourseItem:r(440).default})},759:function(t,e,r){"use strict";r.r(e);r(19),r(39),r(46);var l={components:{HeaderStyleTwo:function(){return Promise.resolve().then(r.bind(null,436))},OffCanvasMobileMenu:function(){return Promise.resolve().then(r.bind(null,257))},CourseDetailsTab:function(){return Promise.resolve().then(r.bind(null,688))},RelatedCourse:function(){return Promise.resolve().then(r.bind(null,689))},FooterStyleOne:function(){return Promise.resolve().then(r.bind(null,434))}},head:function(){return{title:"Course Details"}}},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-container"},[r("HeaderStyleTwo"),t._v(" "),r("OffCanvasMobileMenu"),t._v(" "),r("div",{staticClass:"page-title-section section-padding-top-0"},[r("div",{staticClass:"page-breadcrumb"},[r("div",{staticClass:"container"},[r("ul",{staticClass:"breadcrumb"},[r("li",[r("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"current"},[t._v("Course Details")])])])]),t._v(" "),t._m(0)]),t._v(" "),r("CourseDetailsTab"),t._v(" "),r("RelatedCourse"),t._v(" "),r("FooterStyleOne")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-title"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v("Course Details")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderStyleTwo:r(436).default,OffCanvasMobileMenu:r(257).default,CourseDetailsTab:r(688).default,RelatedCourse:r(689).default,FooterStyleOne:r(434).default})}}]);