(window.webpackJsonp=window.webpackJsonp||[]).push([[39,9,10,20],{334:function(t,e,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("7ab2bd74",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r.r(e);var o={inheritAttrs:!1,props:{label:{type:String,require:!0},helperText:{type:String,require:!1},hasError:{type:Boolean,require:!1},value:{type:String,require:!1},type:{type:String,default:"text"}}},n=r(8),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{staticClass:"text-sm",attrs:{for:"email"}},[t._v(t._s(t.label))]),t._v(" "),r("input",t._b({staticClass:"appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm",class:{"border-red-300":t.hasError,"border-gray-300":!t.hasError},attrs:{id:"email",type:t.type},domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),r("p",{staticClass:"text-red-500 text-sm",class:{"text-red-500":t.hasError,"text-gray-500":!t.hasError}},[t._v(t._s(t.helperText))])])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,r){"use strict";r(334)},338:function(t,e,r){var o=r(51)((function(i){return i[1]}));o.push([t.i,"button[data-v-57737680]{\n  border-radius:0.25rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(63, 162, 72, var(--tw-bg-opacity));\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  padding-top:0.25rem;\n  padding-bottom:0px;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-duration:300ms\n}\nbutton[data-v-57737680]:hover{\n  --tw-bg-opacity:0.75\n}\nbutton[disabled][data-v-57737680]{\n  background-color:grey;\n  cursor:not-allowed\n}",""]),o.locals={},t.exports=o},339:function(t,e,r){"use strict";r.r(e);var o={inheritAttrs:!1,props:{loading:{type:Boolean,default:!1}}},n=(r(337),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",t._b({staticClass:"flex capitalize",on:{click:function(e){return t.$emit("click",e)}}},"button",t.$attrs,!1),[t.loading?r("svg",{staticClass:"animate-spin mr-2 h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"57737680",null);e.default=component.exports},345:function(t,e,r){"use strict";r.r(e);var o={},n=r(8),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[1==t.$auth.user.role?r("b",{staticClass:"text-green-600 "},[t._v("superAdmin")]):t._e(),t._v(" "),2==t.$auth.user.role?r("b",{staticClass:"text-green-400 "},[t._v("Admin")]):t._e(),t._v(" "),3==t.$auth.user.role?r("b",{staticClass:"text-yellow-500 "},[t._v("Manager")]):t._e(),t._v(" "),4==t.$auth.user.role?r("b",{staticClass:"text-yellow-600 "},[t._v("Other")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,r){t.exports=r.p+"img/Thanks.d6a133d.jpg"},416:function(t,e,r){t.exports=r.p+"img/work_bg.d45f55b.jpg"},499:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-400 mx-auto w-11/12  border shadow-sm rounded-2xl mb-8 "},[e("img",{staticClass:"w-full rounded-2xl",attrs:{src:r(416),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"mt-6 text-center text-3xl font-extrabold text-yellow-800"},[t._v("Update your account info.")])])}],n=r(5),l=(r(25),r(39),r(153)),c={middleware:["auth","email-verified"],layout:"backend",head:{title:"Setting"},components:{Input:r(335).default},mixins:[l.default],data:function(){return{form:{name:"",email:"",password:"",role:""},errors:{},loading:!1}},methods:{handleSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,r=t.$auth.user.id,e.next=5,t.$axios.$put("/api/user/update-profile/"+r,t.form);case 5:e.sent,console.log(r),t.loading=!1,t.$store.commit("toaster/fire",{text:"Successfully update your account."}),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),t.$store.commit("toaster/fire",{text:e.t0.response.data.message,type:"error"}),t.errors=(null===(o=e.t0.response.data)||void 0===o?void 0:o.errors)||{},t.loading=!1;case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))()},getUser:function(){var t=this.$store.state.auth.user;this.form.name=t.name,this.form.email=t.email,this.form.role=t.role,this.form.password=t.password}},mounted:function(){this.getUser()}},d=r(8),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"bg-gray-100 mx-auto w-3/5 border shadow-sm  mb-10 py-12 px-5 -mt-20 z-20 "},[o("div",{staticClass:"flex flex-row justify-evenly items-center flex-wrap"},[o("div",{staticClass:"w-full lg:w-2/5 lg:order-1 order-2"},[o("p",[o("b",[t._v("Name : ")]),t._v(t._s(t.$auth.user.name))]),t._v(" "),o("p",[o("b",[t._v("User Role : ")]),t._v(" "),o("UserRole")],1),t._v(" "),o("p",[o("b",[t._v("User Id : ")]),t._v(t._s(t.$auth.user.id))])]),t._v(" "),o("div",{staticClass:"w-full lg:w-1/5 lg:order-2 order-1 justify-center items-center"},[o("img",{staticClass:"w-28 rounded-2xl mx-auto",attrs:{src:r(352),alt:""}}),t._v(" "),o("p",{staticClass:"text-center"},[o("b",[t._v("Login : ")]),t._v(t._s(t.$auth.loggedIn))])]),t._v(" "),o("div",{staticClass:"w-full lg:w-2/5 order-3"},[o("p",[o("b",[t._v("Email : ")]),t._v(t._s(t.$auth.user.email))]),t._v(" "),o("p",[o("b",[t._v("Email Verified : ")]),null==t.$auth.user.email_verified_at?o("b",{staticClass:"text-red-600 "},[t._v(" False")]):t._e(),t._v(" "),null!==t.$auth.user.email_verified_at?o("b",{staticClass:"text-green-600 "},[t._v(" Verified")]):t._e()]),t._v(" "),o("p",[o("b",[t._v("Created at : ")]),t._v(t._s(t.$auth.user.created_at))])])])]),t._v(" "),o("div",{staticClass:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-20 "},[o("div",{staticClass:"max-w-md w-full space-y-8"},[t._m(1),t._v(" "),o("form",{staticClass:"mt-8 space-y-6",attrs:{action:"#",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[o("input",{attrs:{type:"hidden",name:"remember",value:"true"}}),t._v(" "),o("FormInput",{attrs:{label:"Name",helperText:t.errorMsg("name"),hasError:t.hasError("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),o("form-input",{attrs:{type:"email",label:"Email Address",helperText:t.errorMsg("email"),hasError:t.hasError("email")},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),o("form-input",{attrs:{type:"password",label:"Password",helperText:t.errorMsg("password"),hasError:t.hasError("password")},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),o("div",[o("form-button",{attrs:{loading:t.loading}},[t._v("Update")])],1)],1)])])])}),o,!1,null,"0135909e",null);e.default=component.exports;installComponents(component,{UserRole:r(345).default,FormInput:r(335).default,FormInput:r(335).default,FormButton:r(339).default})}}]);