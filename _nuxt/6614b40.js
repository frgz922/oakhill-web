(window.webpackJsonp=window.webpackJsonp||[]).push([[149,4],{432:function(t,e,n){"use strict";n.r(e);n(2);var o=n(437),l=n.n(o),r={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new l.a(t)}))}},d=n(15),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shape scene",class:t.addClassName},[n("span",{attrs:{"data-depth":t.dataDepth}},[n("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},680:function(t,e,n){"use strict";n.r(e);n(19),n(39),n(46);var o={props:["addClassName","bgImg"],components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,432))}},data:function(){return{swiperOption:{slidesPerView:1,speed:1e3,loop:!0},testimonials:[{name:"Uzzal Hossain",position:"Front-end Developer",text:"I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation."},{name:"Hossain Uzzal",position:"Vue JS Developer",text:"I'm a very strict person so I require everything to be organized and neat. MaxCoach guys just got me."}]}}},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonial-section",class:t.addClassName,style:t.bgImg},[n("div",{staticClass:"container animation-shape"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"testimonial-slider-three",attrs:{"data-aos":"fade-up"}},[n("swiper",{attrs:{options:t.swiperOption}},t._l(t.testimonials,(function(e){return n("div",{key:e.id,staticClass:"swiper-slide"},[n("div",{staticClass:"testimonial-four"},[n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(e.text))])]),t._v(" "),n("div",{staticClass:"author-info"},[n("div",{staticClass:"cite"},[n("h6",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"position"},[t._v("/ "+t._s(e.position))])])])])])})),0)],1)])]),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1",dataDepth:"4"}}),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-2",dataDepth:"4"}}),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-3",dataDepth:"4"}}),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-4",dataDepth:"4"}}),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-5",dataDepth:"4"}}),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-6",dataDepth:"4"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(432).default})}}]);