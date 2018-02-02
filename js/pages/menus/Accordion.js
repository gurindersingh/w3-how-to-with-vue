webpackJsonp([23],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Accordion.vue":function(e,o,s){"use strict";o.a={name:"accordion",props:{title:String,hasIcon:Boolean,isAnimated:Boolean},data:function(){return{isActive:!1}},computed:{classes:function(){return{"is-animated":this.isAnimated,"has-icon":this.hasIcon}}},methods:{toggle:function(){if(this.isActive=!this.isActive,this.isAnimated){var e=this.$el.querySelector(".panel");e.style.maxHeight=this.isActive?e.scrollHeight+"px":null}}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/Accordion.vue":function(e,o,s){"use strict";var n=s("./src/components/menus/Accordion.vue");o.a={name:"accordion-page",data:function(){return{examples:[["``` html",'<button class="accordion">Section 1</button>','<div class="panel">',"  <p>Lorem ipsum...</p>","</div>","",'<button class="accordion">Section 2</button>','<div class="panel">',"  <p>Lorem ipsum...</p>","</div>","",'<button class="accordion">Section 3</button>','<div class="panel">',"  <p>Lorem ipsum...</p>","</div>","```"],["``` css","/* Style the buttons that are used to open and close the accordion panel */","button.accordion {","  background-color: #eee;","  color: #444;","  cursor: pointer;","  padding: 18px;","  width: 100%;","  text-align: left;","  border: none;","  outline: none;","  transition: 0.4s;","}","","/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */","button.accordion.active, button.accordion:hover {","  background-color: #ccc;","}","","/* Style the accordion panel. Note: hidden by default */","div.panel {","  padding: 0 18px;","  background-color: white;","  display: none;","}","```"],["``` js",'var acc = document.getElementsByClassName("accordion");',"var i;","","for (i = 0; i < acc.length; i++) {","  acc[i].onclick = function(){",'    /* Toggle between adding and removing the "active" class,',"    to highlight the button that controls the panel */",'    this.classList.toggle("active");',"","    /* Toggle between hiding and showing the active panel */","    var panel = this.nextElementSibling;",'    if (panel.style.display === "block") {','      panel.style.display = "none";',"    } else {",'      panel.style.display = "block";',"    }","  }","}","```"],["``` js","<style>","div.panel {","  padding: 0 18px;","  background-color: white;","  max-height: 0;","  overflow: hidden;","  transition: max-height 0.2s ease-out;","}","</style>","","<script>",'var acc = document.getElementsByClassName("accordion");',"var i;","","for (i = 0; i < acc.length; i++) {","  acc[i].onclick = function() {",'    this.classList.toggle("active");',"    var panel = this.nextElementSibling;","    if (panel.style.maxHeight){","      panel.style.maxHeight = null;","    } else {",'      panel.style.maxHeight = panel.scrollHeight + "px";',"    }","  }","}","<\/script>","```"],["``` css","button.accordion:after {","  content: '\\02795'; /* Unicode character for \"plus\" sign (+) */","  font-size: 13px;","  color: #777;","  float: right;","  margin-left: 5px;","}","","button.accordion.active:after {",'  content: "\\2796"; /* Unicode character for "minus" sign (-) */',"}","```"]]}},components:{Accordion:n.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-19f16d8b","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Accordion.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".accordion-page{flex-direction:column}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-679532f6","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Accordion.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,'.accordion{width:100%}.accordion.is-active .panel{display:block}.accordion.has-icon button:after{content:"\\2795";font-size:13px;color:#777;float:right;margin-left:5px}.accordion.has-icon.is-active button:after{content:"\\2796"}.accordion.is-animated .panel{display:block;overflow:hidden;transition:max-height .2s linear;max-height:0}.accordion button{background-color:#eee;color:#444;cursor:pointer;padding:18px;width:100%;text-align:left;border:none;outline:none;margin:0}.accordion button:active,.accordion button:hover{background-color:#ccc}.accordion div.panel{padding:0 18px;background-color:#fff;display:none}',""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-19f16d8b","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/Accordion.vue':function(e,o,s){"use strict";var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("page",{attrs:{title:"Accordion",intro:"an accordion (collapsible content)"}},[s("sample",{staticClass:"accordion-page"},[s("accordion",{attrs:{title:"Section 1","has-icon":"","is-animated":""}},[s("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]),e._v(" "),s("accordion",{attrs:{title:"Section 2","has-icon":"","is-animated":""}},[s("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]),e._v(" "),s("accordion",{attrs:{title:"Section 3","has-icon":"","is-animated":""}},[s("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])],1),e._v(" "),s("template",{slot:"examples"},[s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Create An Accordion")]),e._v(" "),s("h5",{staticClass:"step"},[e._v("Step 1) Add HTML:")]),e._v(" "),s("step",{attrs:{no:"1",html:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),s("step",{attrs:{no:"2",css:""}},[s("p",[e._v("Style the accordion:")])]),e._v(" "),s("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),s("step",{attrs:{no:"3",js:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[2]}}),e._v(" "),s("hr"),e._v(" "),s("h3",{staticClass:"title"},[e._v("Animated Accordion (Slide Down)")]),e._v(" "),s("p",[e._v("To make an animated accordion, add "),s("code",[e._v("max-height: 0")]),e._v(", "),s("code",[e._v("overflow: hidden")]),e._v(" and a "),s("code",[e._v("transition")]),e._v(" for the max-height property, to the "),s("code",[e._v("panel")]),e._v(" class.")]),e._v(" "),s("p",[e._v("Then, use JavaScript to slide down the content by setting a calculated "),s("code",[e._v("max-height")]),e._v(", depending on the panel's height on different screen sizes:")]),e._v(" "),s("example-code",{attrs:{code:e.examples[3]}}),e._v(" "),s("h3",{staticClass:"title"},[e._v("Add Icons")]),e._v(" "),s("p",[e._v("Add a symbol to each button to indicate whether the collapsible content is open or closed:")]),e._v(" "),s("example-code",{attrs:{code:e.examples[4]}})],1)],2)},t=[],i={render:n,staticRenderFns:t};o.a=i},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-679532f6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/Accordion.vue':function(e,o,s){"use strict";var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"accordion",class:[e.classes,{"is-active":e.isActive}]},[s("button",{on:{click:function(o){e.toggle()}}},[e._v(e._s(e.title))]),e._v(" "),s("div",{staticClass:"panel"},[e._t("default")],2)])},t=[],i={render:n,staticRenderFns:t};o.a=i},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-19f16d8b","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Accordion.vue':function(e,o,s){var n=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-19f16d8b","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Accordion.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("b5fa1a96",n,!0,{})},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-679532f6","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Accordion.vue':function(e,o,s){var n=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-679532f6","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Accordion.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("4f946b3e",n,!0,{})},"./src/components/menus/Accordion.vue":function(e,o,s){"use strict";function n(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-679532f6","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Accordion.vue')}var t=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Accordion.vue"),i=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-679532f6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/Accordion.vue'),l=s("./node_modules/vue-loader/lib/component-normalizer.js"),a=n,d=l(t.a,i.a,!1,a,null,null);o.a=d.exports},"./src/pages/menus/Accordion.vue":function(e,o,s){"use strict";function n(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-19f16d8b","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Accordion.vue')}Object.defineProperty(o,"__esModule",{value:!0});var t=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/Accordion.vue"),i=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-19f16d8b","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/Accordion.vue'),l=s("./node_modules/vue-loader/lib/component-normalizer.js"),a=n,d=l(t.a,i.a,!1,a,null,null);o.default=d.exports}});
//# sourceMappingURL=Accordion.js.map?id=d4e76301da8fd29e53b1