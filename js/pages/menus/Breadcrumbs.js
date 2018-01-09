webpackJsonp([25],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Breadcrumb.vue":function(e,s,l){"use strict";s.a={name:"breadcrumb",functional:!0,props:{links:{type:Array,required:!0}},render:function(e,s){var l=s.props.links.length-1,o=s.props.links.map(function(s,o){var d="string"==typeof s?{to:s,title:s}:s,r=d.to,a=d.title;return o===l?e("li",a):e("li",{},[e("a",{attrs:{href:r}},a)])});return e("ul",{class:"breadcrumb"},o)}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/Breadcrumbs.vue":function(e,s,l){"use strict";var o=l("./src/components/menus/Breadcrumb.vue");s.a={name:"breadcrumb-page",data:function(){return{links:[{to:"javascript:void(0)",title:"Home"},{to:"javascript:void(0)",title:"Pictures"},{to:"javascript:void(0)",title:"Summer 15"},"Italy"],examples:[["``` html",'<ul class="breadcrumb">','  <li><a href="#">Home</a></li>','  <li><a href="#">Pictures</a></li>','  <li><a href="#">Summer 15</a></li>',"  <li>Italy</li>","</ul>","```"],["``` css","/* Style the list */","ul.breadcrumb {","  padding: 10px 16px;","  list-style: none;","  background-color: #eee;","}","","/* Display list items side by side */","ul.breadcrumb li {","  display: inline;","  font-size: 18px;","}","","/* Add a slash symbol (/) before/behind each list item */","ul.breadcrumb li+li:before {","  padding: 8px;","  color: black;",'  content: "/\\00a0";',"}","","/* Add a color to all links inside the list */","ul.breadcrumb li a {","  color: #0275d8;","  text-decoration: none;","}","","/* Add a color on mouse-over */","ul.breadcrumb li a:hover {","  color: #01447e;","  text-decoration: underline;","}","```"]]}},components:{Breadcrumb:o.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6c62d987","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Breadcrumbs.vue':function(e,s,l){s=e.exports=l("./node_modules/css-loader/lib/css-base.js")(void 0),s.push([e.i,".breadcrumb-page .sample .breadcrumb{width:100%}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c2353454","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Breadcrumb.vue':function(e,s,l){s=e.exports=l("./node_modules/css-loader/lib/css-base.js")(void 0),s.push([e.i,'.breadcrumb{padding:10px 16px;list-style:none;background-color:#eee}.breadcrumb li{display:inline;font-size:18px}.breadcrumb li+li:before{padding:8px;color:#000;content:"/\\A0"}.breadcrumb li a{color:#0275d8;text-decoration:none}.breadcrumb li a:hover{color:#01447e;text-decoration:underline}',""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6c62d987","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/Breadcrumbs.vue':function(e,s,l){"use strict";var o=function(){var e=this,s=e.$createElement,l=e._self._c||s;return l("page",{staticClass:"breadcrumb-page",attrs:{title:"CSS Breadcrumbs",intro:"a breadcrumb navigation with CSS"}},[l("template",{slot:"header"},[l("h2",{staticClass:"title"},[e._v("How To Create a Breadcrumb Navigation")]),e._v(" "),l("p",[e._v("A breadcrumb navigation provide links back to each previous page the user navigated through, and shows the user's current location in a website.")])]),e._v(" "),l("sample",[l("breadcrumb",{attrs:{links:e.links}})],1),e._v(" "),l("template",{slot:"examples"},[l("hr"),e._v(" "),l("step",{attrs:{no:"1",html:""}}),e._v(" "),l("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),l("step",{attrs:{no:"2",css:""}}),e._v(" "),l("example-code",{attrs:{code:e.examples[1]}})],1)],2)},d=[],r={render:o,staticRenderFns:d};s.a=r},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6c62d987","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Breadcrumbs.vue':function(e,s,l){var o=l('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6c62d987","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Breadcrumbs.vue');"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);l("./node_modules/vue-style-loader/lib/addStylesClient.js")("2bb546c6",o,!0)},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c2353454","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Breadcrumb.vue':function(e,s,l){var o=l('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c2353454","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Breadcrumb.vue');"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);l("./node_modules/vue-style-loader/lib/addStylesClient.js")("59459c90",o,!0)},"./src/components/menus/Breadcrumb.vue":function(e,s,l){"use strict";function o(e){l('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c2353454","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Breadcrumb.vue')}var d=l("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Breadcrumb.vue"),r=l("./node_modules/vue-loader/lib/component-normalizer.js"),a=o,n=r(d.a,null,!1,a,null,null);s.a=n.exports},"./src/pages/menus/Breadcrumbs.vue":function(e,s,l){"use strict";function o(e){l('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6c62d987","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Breadcrumbs.vue')}Object.defineProperty(s,"__esModule",{value:!0});var d=l("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/Breadcrumbs.vue"),r=l('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6c62d987","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/Breadcrumbs.vue'),a=l("./node_modules/vue-loader/lib/component-normalizer.js"),n=o,i=a(d.a,r.a,!1,n,null,null);s.default=i.exports}});
//# sourceMappingURL=Breadcrumbs.js.map?id=aa0cc6735fa2fd045b6f