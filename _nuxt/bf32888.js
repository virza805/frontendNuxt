(window.webpackJsonp=window.webpackJsonp||[]).push([[63,2,3,14,15],{351:function(t,e,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("96b472bc",content,!0,{sourceMap:!1})},352:function(t,e,r){t.exports=r.p+"img/Thanks.d6a133d.jpg"},353:function(t,e,r){"use strict";r.r(e);var n={props:{},data:function(){return{Accordion:{count:0,active:null}}},provide:function(){return{Accordion:this.Accordion}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"accordion"},[t._t("default")],2)}),[],!1,null,"85ec5958",null);e.default=component.exports},354:function(t,e,r){"use strict";r.r(e);var n={props:["openByDefault"],inject:["Accordion"],data:function(){return{index:null}},computed:{visible:function(){return this.index==this.Accordion.active}},mounted:function(){this.openByDefault&&this.open()},methods:{open:function(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start:function(t){t.style.height=t.scrollHeight+"px"},end:function(t){t.style.height=""}},created:function(){this.index=this.Accordion.count++}},o=(r(355),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"accordion__item"},[r("div",{staticClass:"accordion__trigger",class:{accordion__trigger_active:t.visible},on:{click:t.open}},[t._t("accordion-trigger")],2),t._v(" "),r("transition",{attrs:{name:"accordion"},on:{enter:t.start,"after-enter":t.end,"before-leave":t.start,"after-leave":t.end}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"accordion__content"},[r("ul",[t._t("accordion-content")],2)])])],1)}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,r){"use strict";r(351)},356:function(t,e,r){var n=r(51)((function(i){return i[1]}));n.push([t.i,".accordion-enter-active,.accordion-leave-active{\n  will-change:height,opacity;\n  transition:height .3s ease,opacity .3s ease;\n  overflow:hidden\n}\n.accordion-enter,.accordion-leave-to{\n  height:0!important;\n  opacity:0\n}",""]),n.locals={},t.exports=n},358:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(39),r(353)),c=r(354),l={name:"Sidebar",components:{Accordion:o.default,AccordionItem:c.default},data:function(){return{cat_list:{}}},created:function(){this.getData()},methods:{getData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.load=!0,e.next=3,t.$axios.$get("/api/all/client-categories");case 3:r=e.sent,t.cat_list=r.data,t.load=!1;case 6:case"end":return e.stop()}}),e)})))()}}},d=r(8),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("accordion",[r("accordion-item",{attrs:{openByDefault:!0}},[r("template",{slot:"accordion-trigger"},[r("h3",{staticClass:"bs-light-green-bg p-5 rounded-t-xl cursor-pointer flex justify-between"},[t._v("\n        Categories\n\n        "),r("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])]),t._v(" "),r("template",{slot:"accordion-content"},[r("div",{staticClass:"border border-t-0 border-gray-100 p-6"},[r("ul",{staticClass:"leading-10"},[t._l(t.cat_list,(function(e){return r("li",{key:e.id},[r("nuxt-link",{staticClass:"hover:text-green-600",attrs:{to:"/category/?id="+e.id}},[t._v(t._s(e.name))])],1)})),t._v(" "),r("li",[r("accordion",[r("accordion-item",{attrs:{openByDefault:!0}},[r("template",{slot:"accordion-trigger"},[r("div",{staticClass:"flex justify-between cursor-pointer items-center hover:text-green-600"},[t._v("\n                    Fruits\n                    "),r("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])]),t._v(" "),r("template",{slot:"accordion-content"},[r("ul",{staticClass:"pl-4 text-sm leading-8 mb-4"},[r("li",[r("nuxt-link",{staticClass:"hover:text-green-600",attrs:{to:"/"}},[t._v("Sub Category 1")])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"hover:text-green-600",attrs:{to:"/"}},[t._v("Sub Category 2")])],1)])])],2)],1)],1)],2)])])],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AccordionItem:r(354).default,Accordion:r(353).default})},359:function(t,e,r){"use strict";r.r(e);r(11),r(23);var n={name:"SingleProductBox",props:["product"],data:function(){return{matched:!1,quantity:""}},methods:{productDetails:function(){this.$store.dispatch("products/triggerModal",this.product)},addToCart:function(t,e){this.$store.dispatch("cart/addToCart",{product:t,type:e})},productChecker:function(){var t=this,e=JSON.parse(localStorage.getItem("cart")),r=this.$store.getters["cart/getCart"],n=[];(n=r.length?r:e).length&&n.forEach((function(e){e.id===t.product.id&&(t.matched=!0,t.quantity=e.quantity)}))}},mounted:function(){var t=this;this.productChecker(),this.$store.watch((function(){return t.$store.getters["cart/getCart"]}),(function(e){t.productChecker()}),{deep:!0})}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"single-bs-product"},[n("div",{staticClass:"h-80  relative mb-6"},[n("div",{staticClass:"h-full bg-gray-50 flex justify-center items-center p-4"},[t.product.image?n("img",{attrs:{src:t.$axios.defaults.baseURL+"storage/uploads/"+t.product.image,alt:t.product.image,width:"220"}}):n("img",{attrs:{src:r(224),alt:""}})]),t._v(" "),n("div",{staticClass:"product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center"},[n("div",{staticClass:"bg-black absolute h-full w-full opacity-60"}),t._v(" "),n("button",{staticClass:" absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center",on:{click:function(e){return e.preventDefault(),t.productDetails.apply(null,arguments)}}},[t._v("Details "),n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"}})])]),t._v(" "),t.matched?t._e():n("div",{staticClass:"relative z-10"},[n("button",{staticClass:" text-white text-2xl",on:{click:function(e){return e.preventDefault(),t.addToCart(t.product,"plus")}}},[t._v("Add to Card")])]),t._v(" "),t.matched?n("div",{staticClass:" relative z-10"},[n("div",{staticClass:"flex justify-center items-center text-4xl text-white mb-8"},[n("button",{staticClass:"h-12 w-12 border border-white rounded-full",on:{click:function(e){return e.preventDefault(),t.addToCart(t.product,"minus")}}},[t._v("-")]),t._v(" "),n("span",{staticClass:"mx-6"},[t._v(t._s(t.quantity))]),t._v(" "),n("button",{staticClass:"h-12 w-12 border border-white rounded-full",on:{click:function(e){return e.preventDefault(),t.addToCart(t.product,"plus")}}},[t._v("+")])])]):t._e()])]),t._v(" "),n("h4",{staticClass:"text-xl mb-3"},[t._v(t._s(t.product.name))]),t._v(" "),n("p",[n("span",{staticClass:"font-medium bs-dark-orange-color"},[t._v("$"+t._s(t.product.sell_price))]),t._v(" "),n("del",{staticClass:"text-gray-400"},[t._v("$"+t._s(t.product.price))])])])}),[],!1,null,null,null);e.default=component.exports},475:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"flex items-center"},[n("img",{staticClass:"w-4 mr-3",attrs:{src:r(160),alt:""}}),t._v(" Add to favourites\n            ")])}],o=r(5),c=(r(39),r(358)),l={head:{title:"Show Category"},name:"category",components:{SingleProductBox:r(359).default,Sidebar:c.default},data:function(){return{product_details:{}}},created:function(){this.getCatProductData()},methods:{getCatProductData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query.id,t.load=!0,e.next=4,t.$axios.$get("/api/all/client-product-detail/"+r);case 4:n=e.sent,t.product_details=n,t.load=!1;case 7:case"end":return e.stop()}}),e)})))()},addProductToCart:function(t){this.$store.dispatch("products/addProductToCart",t),localStorage.setItem("products:cart",JSON.stringify(this.cart))}},mounted:function(){}},d=r(8),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-6"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"w-full absolute md:bg-transparent bg-green-100 md:relative md:w-1/4 pr-6"},[n("Sidebar")],1),t._v(" "),n("div",{staticClass:"w-full md:w-3/4"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"w-1/2 px-8"},[t.product_details.image?n("img",{staticClass:"mx-auto w-auto",attrs:{src:t.$axios.defaults.baseURL+"storage/uploads/"+t.product_details.image,alt:""}}):n("img",{staticClass:"mx-auto w-auto",attrs:{src:r(352),alt:"Workflow"}})]),t._v(" "),n("div",{staticClass:"w-1/2 px-8"},[n("p",{staticClass:"text-sm mb-3"},[n("span",{staticClass:"uppercase text-gray-400 pr-6"},[t._v("Status")]),t._v(" "),1===t.product_details.status?n("span",{staticClass:"bs-dark-green-color"},[t._v("In Stock")]):n("span",{staticClass:"bs-dark-orange-color"},[t._v("out of Stock")])]),t._v(" "),n("h3",{staticClass:"text-2xl"},[t._v(t._s(t.product_details.name))]),t._v(" "),n("p",{staticClass:"text-xs text-gray-400 mb-4 mt-2"},[n("b",[t._v(t._s(t.product_details.stock))]),t._v(" items available.")]),t._v(" "),n("p",{staticClass:"text-2xl font-bold"},[t._v("$ "+t._s(t.product_details.sell_price)+"  "),n("del",{staticClass:"font-normal text-gray-400"},[t._v("$ "+t._s(t.product_details.price)+" ")])]),t._v(" "),n("div",{staticClass:"flex my-6"},[n("button",{staticClass:"bs-button",on:{click:function(e){return t.addProductToCart(t.product_details)}}},[t._v("Add to cart")])]),t._v(" "),n("div",{staticClass:"flex border-b border-gray-200 justify-between text-sm pb-3 mb-8"},[t._m(0),t._v(" "),n("p",{staticClass:"flex items-center"},[n("svg",{staticClass:"h-4 w-4 mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}})]),t._v("\n              Share\n            ")])]),t._v(" "),n("div",{staticClass:"text-xs leading-loose"},[n("p",[n("span",{staticClass:"uppercase text-gray-400 w-20 inline-block"},[t._v("category:")]),t._v(" "),t.product_details.categories?n("span",t._l(JSON.parse(t.product_details.categories),(function(e){return n("span",{key:e.id},[n("nuxt-link",{staticClass:"bs-dark-green-color",attrs:{to:"/category/?id="+e.id}},[t._v(t._s(e.name))]),n("span",{staticClass:"comma"},[t._v(", ")])],1)})),0):t._e()]),t._v(" "),n("p",[n("span",{staticClass:"uppercase text-gray-400 w-20 inline-block"},[t._v("tags:")]),t._v(" "),t.product_details.tags?n("span",t._l(JSON.parse(t.product_details.tags),(function(e){return n("span",{key:e.id},[n("nuxt-link",{staticClass:"bs-dark-green-color",attrs:{to:"/tag/?id="+e.id}},[t._v(t._s(e.name))]),n("span",{staticClass:"comma"},[t._v(", ")])],1)})),0):t._e()])])]),t._v(" "),n("div",{staticClass:"flex-wrap my-5 "},[t._v("\n          "+t._s(t.product_details.description)+"\n        ")])])])])])}),n,!1,null,"06a7a302",null);e.default=component.exports;installComponents(component,{Sidebar:r(358).default})}}]);