(window.webpackJsonp=window.webpackJsonp||[]).push([[76,104],{433:function(t,l,n){"use strict";n.r(l);var e=n(15),component=Object(e.a)({},(function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",{staticClass:"position-static"},[n("n-link",{attrs:{to:"/training"}},[n("span",{staticClass:"menu-text"},[t._v("Training")])])],1),t._v(" "),n("li",{staticClass:"position-static"},[n("n-link",{attrs:{to:"/documents"}},[n("span",{staticClass:"menu-text"},[t._v("Docs")])])],1),t._v(" "),n("li",{staticClass:"position-static"},[n("n-link",{attrs:{to:"/blueprints"}},[n("span",{staticClass:"menu-text"},[t._v("Blueprints")])])],1)])])}),[],!1,null,null,null);l.default=component.exports},646:function(t,l,n){"use strict";n.r(l);n(19),n(39),n(46);var e={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,433))}},data:function(){return{isSticky:!1,isHidden:!0}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var l=window.scrollY;t.isSticky=l>=200}))},methods:{mobiletoggleClass:function(t,l){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(l):n.classList.remove(l)},toggleClass:function(t,l){var n=document.querySelector("#fullscreen-search");"addClass"===t?n.classList.add(l):n.classList.remove(l)}}},o=n(15),component=Object(o.a)(e,(function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("header",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-3 col-auto"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/dark-logo.png",alt:"logo dark"}}),t._v(" "),n("img",{staticClass:"light-logo",attrs:{src:"/images/logo/light-logo.png",alt:"logo light"}})])],1)]),t._v(" "),n("div",{staticClass:"col d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"col-xl-3 col-auto"},[n("div",{staticClass:"header-right"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"header-login"},[n("n-link",{attrs:{to:"/course/profile"}},[n("i",{staticClass:"far fa-user-circle"})])],1),t._v(" "),n("button",{staticClass:"header-fs-search-toggle",on:{click:function(l){return t.toggleClass("addClass","open")}}},[n("i",{staticClass:"far fa-search"})]),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(l){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])])])])])])])])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{Navigation:n(433).default})}}]);