webpackJsonp([24],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/StickyNavbar.vue":function(e,s,a){"use strict";s.a={name:"sticky-navbar-page",data:function(){return{intro:'a "sticky" navbar with CSS and JavaScript',examples:[["``` html",'<div class="navnav">','  <a href="#home" class="active">Home</a>','  <a href="#news">News</a>','  <a href="#contact">Contact</a>',"</div>","```"],["``` css","/* Style the navbar */","#navbar {","  overflow: hidden;","  background-color: #333;","}","","/* Navbar links */","#navbar a {","  float: left;","  display: block;","  color: #f2f2f2;","  text-align: center;","  padding: 14px;","  text-decoration: none;","}","","/* Page content */",".content {","  padding: 16px;","}","","/* The sticky class is added to the navbar with JS when it reaches its scroll position */",".sticky {","  position: fixed;","  top: 0;","  width: 100%","}","","/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */",".sticky + .content {","  padding-top: 60px;","}","```"],["``` js","// Get the navbar",'var navbar = document.getElementById("navbar");',"","// Get the offset position of the navbar","var sticky = navbar.offsetTop;","",'// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position',"function myFunction() {","  if (window.pageYOffset >= sticky) {",'    navbar.classList.add("sticky")',"  } else {",'    navbar.classList.remove("sticky");',"  }","}","```"]]}}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7e163631","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/StickyNavbar.vue':function(e,s,a){s=e.exports=a("./node_modules/css-loader/lib/css-base.js")(void 0),s.push([e.i,".sticky-navbar-page iframe{width:100%;height:400px;border:1px solid #ccc}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7e163631","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/StickyNavbar.vue':function(e,s,a){"use strict";var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("page",{attrs:{title:"Sticky/Affix Navbar",intro:e.intro}},[a("sample",{staticClass:"sticky-navbar-page"},[a("iframe",{attrs:{src:"pages/menus/sticky-navbar.html",frameborder:"0"}})]),e._v(" "),a("template",{slot:"examples"},[a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("How To Create a Sticky Navbar")]),e._v(" "),a("step",{attrs:{no:"1",html:""}}),e._v(" "),a("p",[e._v("Create a navigation bar:")]),e._v(" "),a("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),a("hr"),e._v(" "),a("step",{attrs:{no:"2",css:""}}),e._v(" "),a("p",[e._v("Style the navigation bar:")]),e._v(" "),a("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),a("step",{attrs:{no:"3",js:""}}),e._v(" "),a("example-code",{attrs:{code:e.examples[2]}})],1)],2)},o=[],l={render:t,staticRenderFns:o};s.a=l},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7e163631","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/StickyNavbar.vue':function(e,s,a){var t=a('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7e163631","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/StickyNavbar.vue');"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);a("./node_modules/vue-style-loader/lib/addStylesClient.js")("7eb7f792",t,!0)},"./src/pages/menus/StickyNavbar.vue":function(e,s,a){"use strict";function t(e){a('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7e163631","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/StickyNavbar.vue')}Object.defineProperty(s,"__esModule",{value:!0});var o=a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/StickyNavbar.vue"),l=a('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7e163631","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/StickyNavbar.vue'),d=a("./node_modules/vue-loader/lib/component-normalizer.js"),n=t,i=d(o.a,l.a,!1,n,null,null);s.default=i.exports}});
//# sourceMappingURL=StickyNavbar.js.map?id=7608afbb9b346ccb2e37