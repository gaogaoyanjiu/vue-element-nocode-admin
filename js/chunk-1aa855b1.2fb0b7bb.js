(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aa855b1"],{3691:function(e,t,r){},"55fc":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("456d"),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ed08");__webpack_exports__["a"]={data:function(){return{formJson:void 0}},methods:{flattening:function(e,t){var r=this;Object(_utils__WEBPACK_IMPORTED_MODULE_2__["c"])(e)||this.$message.error("对象格式不正确"),Object(_utils__WEBPACK_IMPORTED_MODULE_2__["b"])(e)&&this.$message.error("不支持数组嵌套数组");var o=[];return Object.keys(e).map(function(n){if(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["c"])(e[n]))if(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["b"])(e[n]))e[n].map(function(e,c){var a=t?"".concat(t).concat(n,"[").concat(c,"]."):"".concat(n,"[").concat(c,"]."),i=r.flattening(e,a);o=o.concat(i)});else{var c=t?"".concat(t).concat(n,"."):"".concat(n,"."),a=r.flattening(e[n],c);o=o.concat(a)}else{var i=t?"".concat(t).concat(n):n;o.push({type:"EInputTrim",title:"JSON生成",props:{label:"".concat(e[n]||n),value:i,required:""}})}}),o},gen:function gen(){try{var formData=eval("(".concat(this.formJson,")")),formItems=this.flattening(formData);this.$store.commit("SET_FORMITEMS",formItems)}catch(error){this.$message.error("请填入正确的Object")}}}}},5873:function(e,t,r){},"5aea":function(e,t,r){},"6b7f":function(e,t,r){"use strict";var o=r("3691"),n=r.n(o);n.a},"817a":function(e,t,r){"use strict";var o=r("5aea"),n=r.n(o);n.a},b66e:function(e,t,r){"use strict";var o=r("5873"),n=r.n(o);n.a},f584:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-aside",{attrs:{width:"300px"}},[r("FormItemDrag"),r("JsonForm")],1),r("el-main",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:14}},[r("FormItemDrop")],1),r("el-col",{attrs:{span:10}},[r("el-card",{staticClass:"box-card"},[r("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"表单项属性",name:"item"}},[r("FormItemDropAttr")],1),r("el-tab-pane",{attrs:{label:"表单属性",name:"form"}},[r("FormAttr",{staticStyle:{"margin-bottom":"10px"}})],1)],1)],1)],1)],1)],1),r("FormCode",{attrs:{form:e.formAttribute,formItems:e.formItems}})],1)},n=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),a=r("2f62"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",[r("el-form",{attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"表单对象"}},[r("el-input",{attrs:{placeholder:"表单对象"},model:{value:e.form.formObj,callback:function(t){e.$set(e.form,"formObj","string"===typeof t?t.trim():t)},expression:"form.formObj"}})],1),r("el-form-item",{attrs:{label:"更新方法"}},[r("el-input",{attrs:{placeholder:"更新方法"},model:{value:e.form.method,callback:function(t){e.$set(e.form,"method","string"===typeof t?t.trim():t)},expression:"form.method"}})],1),r("el-form-item",{attrs:{label:"表单Ref"}},[r("el-input",{attrs:{placeholder:"表单的Ref值"},model:{value:e.form.ref,callback:function(t){e.$set(e.form,"ref","string"===typeof t?t.trim():t)},expression:"form.ref"}})],1),r("el-form-item",{attrs:{label:"是否验证"}},[r("el-checkbox",{model:{value:e.form.validated,callback:function(t){e.$set(e.form,"validated",t)},expression:"form.validated"}})],1),r("el-form-item",{attrs:{label:"双重确认"}},[r("el-checkbox",{model:{value:e.form.confirmed,callback:function(t){e.$set(e.form,"confirmed",t)},expression:"form.confirmed"}})],1)],1)],1)])},l=[];function s(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){Object(c["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var u={data:function(){return{form:{formObj:"defaultFormObj",ref:"defaultRef",validated:!0,confirmed:!1,method:"defaultMethod"}}},watch:{form:{handler:function(e){this.$store.commit("SET_FORM_ATTRIBUTE",m({},e,{ref:e.validated&&e.ref}))},deep:!0,immediate:!0}}},p=u,f=(r("817a"),r("2877")),b=Object(f["a"])(p,i,l,!1,null,null,null),d=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("el-form",{attrs:{model:e.formItemAttribute,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"表单元素"}},[r("el-select",{attrs:{placeholder:"请选择表单元素类型"},on:{change:e.setFormItemAttribute},model:{value:e.formItemElement.type,callback:function(t){e.$set(e.formItemElement,"type",t)},expression:"formItemElement.type"}},e._l(e.input_type_opts,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),r("el-form-item",{attrs:{label:"label"}},[r("el-input",{attrs:{placeholder:"请输入label"},on:{change:e.setFormItemAttribute},model:{value:e.formItemAttribute.label,callback:function(t){e.$set(e.formItemAttribute,"label","string"===typeof t?t.trim():t)},expression:"formItemAttribute.label"}})],1),r("el-form-item",{attrs:{label:"value"}},[r("el-input",{attrs:{placeholder:"请输入value"},on:{change:e.setFormItemAttribute},model:{value:e.formItemAttribute.value,callback:function(t){e.$set(e.formItemAttribute,"value","string"===typeof t?t.trim():t)},expression:"formItemAttribute.value"}})],1),r("el-form-item",{attrs:{label:"数据验证"}},[r("el-checkbox",{attrs:{label:"true"},on:{change:e.setFormItemAttribute},model:{value:e.formItemAttribute.required,callback:function(t){e.$set(e.formItemAttribute,"required",t)},expression:"formItemAttribute.required"}},[e._v("是否必填")]),r("el-select",{staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"数据类型",size:"small"},on:{change:e.setFormItemAttribute},model:{value:e.formItemAttribute.type,callback:function(t){e.$set(e.formItemAttribute,"type",t)},expression:"formItemAttribute.type"}},e._l(e.value_type_opts,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1)},h=[],O=[{value:"EInputTrim",label:"输入框 Trim Input"},{value:"EInputNum",label:"输入框 Num Input"},{value:"ECheckbox",label:"复选框 Checkbox"},{value:"ERadio",label:"单选框 Radio"},{value:"ESelect",label:"选择器 Select"},{value:"ESwitch",label:"开关 Switch"}],y=[{value:"url",label:"链接"},{value:"date",label:"时间"},{value:"array",label:"数组"}];function v(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){Object(c["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var I={data:function(){return{input_type_opts:O,value_type_opts:y,idx:0,opt:"",formItemAttribute:{},formItemElement:{}}},computed:g({},Object(a["b"])(["formItemToHandle"])),watch:{formItemToHandle:function(e){e.added?(this.opt="add",this.idx=e.added.newIndex,this.formItemElement=e.added.element,this.formItemAttribute=g({},e.added.element.props)):(this.opt="others",this.idx=0,this.formItemAttribute={}),"click"===e.type&&(this.opt="click",this.idx=e.idx,this.formItemElement=e.element,this.formItemAttribute=g({},e.element.props))}},methods:{setFormItemAttribute:function(){"add"!==this.opt&&"click"!==this.opt||this.$store.commit("SET_FORMITEM_OF_ITEMS",{idx:this.idx,formItem:g({},this.formItemElement,{props:g({},this.formItemAttribute)})})}}},E=I,j=Object(f["a"])(E,_,h,!1,null,null,null),w=j.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[r("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.forms,function(t,o){return r("el-collapse-item",{key:o,attrs:{title:t.title,name:t.type}},[r("draggable",{staticClass:"dragArea list-group",attrs:{list:t.specs,group:{name:"formItemsToDrop",pull:"clone",put:!1},clone:e.cloneFormItem}},e._l(t.specs,function(e,t){return r("div",{key:t,staticClass:"list-group-item"},[r("el-button",{staticStyle:{margin:"10px",padding:"10px"},attrs:{size:"small",plain:""}},[r(e.type,{tag:"component",attrs:{size:"mini"}})],1)],1)}),0)],1)}),1)],1)},k=[],D=r("310e"),P=r.n(D);function S(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach(function(t){Object(c["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var C={label:"",value:"",required:"",type:""},A={components:{draggable:P.a},data:function(){return{forms:[{type:"EInput",title:"Input输入框",specs:[{type:"EInputTrim",title:"Input Trim输入框",props:T({},C)},{type:"EInputNum",title:"Input Number输入框",props:T({},C)}]},{type:"ERadio",title:"Radio 单选框",specs:[{type:"ERadio",title:"基础用法",props:T({},C)}]},{type:"ECheckbox",title:"Checkbox 多选框",specs:[{type:"ECheckbox",title:"Checkbox 单选框组",props:T({},C)}]},{type:"ESelect",title:"Select 选择器",specs:[{type:"ESelect",title:"Select 单选框组",props:T({},C)}]},{type:"ESwitch",title:"Switch开关",specs:[{type:"ESwitch",title:"Switch 单选框组",props:T({},C)}]}],activeName:["EInput"]}},methods:{cloneFormItem:function(e){return T({},e)}}},F=A,$=Object(f["a"])(F,x,k,!1,null,null,null),M=$.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("el-button",{staticStyle:{float:"right",padding:"3px 10px"},attrs:{type:"text"},on:{click:e.skipToEditor}},[e._v("在线编辑")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return e.handleClipboard(e.srcFormCode,t)}}},[e._v("复制代码")])],1),r("div",{staticStyle:{width:"100%"}},[r("el-form",{attrs:{model:e.form,"label-width":"140px"}},[r("draggable",{staticClass:"dragArea list-group",class:{bigDragArea:0===e.formItemsToDrop.length},attrs:{options:{group:"formItemsToDrop"},list:e.formItemsToDrop},on:{change:e.genFormItem}},e._l(e.formItemsToDrop,function(t,o){return r("div",{key:o,staticClass:"list-group-item"},[r("div",{class:{selected:o===e.clickedIndex},on:{click:function(r){return e.genFormItemByClick(o,t)}}},[r("el-form-item",{attrs:{label:t&&t.props.label||"表单label"}},[t?r(t.type,{tag:"component",staticStyle:{width:"90%"}}):e._e()],1),o===e.clickedIndex?r("el-button",{staticStyle:{position:"absolute",top:"0",right:"0"},attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return e.deleteFormItemByClick(o)}}}):e._e()],1)])}),0)],1)],1)])},N=[],B=r("ed08");function L(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(r,!0).forEach(function(t){Object(c["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var J={components:{draggable:P.a},data:function(){return{form:{},formItemsToDrop:[]}},watch:{formItems:function(e){this.formItemsToDrop=JSON.parse(JSON.stringify(e))}},computed:q({},Object(a["b"])(["clickedIndex","formItems","srcFormCode"])),methods:{genFormItem:function(e){this.$store.commit("SET_FORMITEMS",this.formItemsToDrop),e.added&&(this.$store.commit("SET_CLICKED_INDEX",e.added.newIndex),this.$store.commit("SET_FORMITEM_HANDLE",e))},genFormItemByClick:function(e,t){this.$store.commit("SET_CLICKED_INDEX",e),this.$store.commit("SET_FORMITEM_HANDLE",{type:"click",idx:e,element:t})},deleteFormItemByClick:function(e){this.$store.commit("DELETE_FORM_ITEM",e)},handleClipboard:function(e,t){var r=this;Object(B["a"])(e,t).then(function(){r.$message.success("已经复制到剪贴板")}).catch(function(){r.$message.error("未能复制到剪贴板")})},skipToEditor:function(){this.$router.push("code-editor?code=form")}}},K=J,U=(r("b66e"),Object(f["a"])(K,R,N,!1,null,"b74d3f10",null)),W=U.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v(e._s(e.$t("form.JSON")))]),r("el-button",{staticStyle:{float:"right"},attrs:{size:"mini",type:"primary"},on:{click:e.gen}},[e._v("生成表单")])],1),r("el-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"请输入内容, eg:{value:label}，记得给label加上引号"},model:{value:e.formJson,callback:function(t){e.formJson=t},expression:"formJson"}})],1)},H=[],V=r("55fc"),X=V["a"],G=Object(f["a"])(X,z,H,!1,null,null,null),Q=G.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"code-container"})},Z=[],ee=function(e,t){return e?"prop='".concat(t,"'"):" "},te=function(e){return function(t,r,o,n){return'\n  <el-form-item label="'.concat(o,'" ').concat(ee(r,n),">\n    ").concat(e(t,n,o),"\n  </el-form-item>\n      ")}},re=function(e,t,r){return'<el-input v-model.trim="'.concat(e,".").concat(t,"\" placeholder='请输入").concat(r,"'></el-input>")},oe=function(e,t,r){return'<el-input v-model.number="'.concat(e,".").concat(t,"\" type='number' placeholder='请输入").concat(r,"'></el-input>")},ne=function(e,t,r){return'\n    <el-select v-model="'.concat(e,".").concat(t,'" placeholder="请选择').concat(r,'">\n      <el-option label="区域二" value="beijing"></el-option>\n    </el-select>')},ce=function(e,t){return'\n  <el-checkbox-group v-model="'.concat(e,".").concat(t,'">\n      <el-checkbox label="第一个复选框" name="type"></el-checkbox>\n      <el-checkbox label="第二个复选框" name="type"></el-checkbox>\n  </el-checkbox-group>')},ae=function(e,t){return'\n    <el-radio-group v-model="'.concat(e,".").concat(t,'">\n      <el-radio label="第一个选项"></el-radio>\n      <el-radio label="第二个选项"></el-radio>\n    </el-radio-group>')},ie=function(e,t){return'<el-switch v-model="'.concat(e,".").concat(t,'"></el-switch>')},le=function(e){var t={EInputTrim:te(re),EInputNum:te(oe),ESelect:te(ne),ECheckbox:te(ce),ERadio:te(ae),ESwitch:te(ie)};return t[e]},se=function(e,t,r,o){return t&&e?"\n    ".concat(o,"(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            this.$confirm('此操作将永久删除此项, 是否继续?', '提示',\n              {\n                confirmButtonText: '确定',\n                cancelButtonText: '取消',\n                type: 'warning'\n                }).then(await () => {\n                    await ").concat(o,"(this.").concat(r,")\n                    this.$message.success('创建成功')\n                }).catch(() => {\n                  this.$message({\n                    type: 'info',\n                    message: '已取消删除'\n                  });\n              });\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n      });\n    }").trim():t?"\n    ".concat(o,"(formName) {\n        this.$confirm('此操作将永久删除此项, 是否继续?', '提示',\n        {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning'\n          }).then(await () => {\n              await ").concat(o,"(this.").concat(r,")\n              this.$message.success('创建成功')\n          }).catch(() => {\n            this.$message({\n              type: 'info',\n              message: '已取消删除'\n            });\n        });\n      }\n    ").trim():e?"\n    ".concat(o,"(formName) {\n        this.$refs[formName].validate(async (valid) => {\n          if (valid) {\n            await ").concat(o,"(this.").concat(r,")\n            this.$message.success('创建成功')\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n    }").trim():"\n    async ".concat(o,"(){\n        await ").concat(o,"(this.").concat(r,")\n        this.$message.success('创建成功')\n    }").trim()},me=function(e){return e?":rules='rules'":""},ue=function(e,t){return e?"ref='".concat(t,"'"):" "},pe=function(e,t,r){return r.map(function(r){var o=le(r.type);return o(e,t,r.props.label,r.props.value)}).join("\n")},fe=function(e,t,r){return e?" \n    <el-form-item>\n      <el-button size='mini' type='primary' @click=\"".concat(r,"('").concat(t,"')\">创建</el-button>\n    </el-form-item>").trim():"<el-form-item>\n<el-button size='mini' type='primary' @click='".concat(r,"'>创建</el-button>\n</el-form-item>")},be=function(e,t){var r=t.map(function(e){return"".concat(e.props.value,":''")}).join(",\n          ");return"\n      ".concat(e,":{\n          ").concat(r,"\n      }").trim()},de=function(e,t){if(e){var r=t.filter(function(e){return e.props.required||e.props.type}).map(function(e){var t="ESelect"===e.type?"change":"blur",r="",o="";return e.props.required&&(r="{ required: true, message: '".concat(e.props.label,"必填', trigger: '").concat(t,"' }")),e.props.type&&(o="{ type: '".concat(e.props.type,"', message: '").concat(e.props.label,"格式为").concat(e.props.type,"', trigger: '").concat(t,"' }")),"\n        ".concat(e.props.value,": [\n          ").concat(r,"\n          ").concat(o,"\n        ]").trim()}).join(",\n          ");return"\n      rules:{\n          ".concat(r,"\n      }").trim()}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.formObj,r=e.validated,o=e.ref,n=e.method,c=e.confirmed,a=e.formItems;return'\n<template>\n<el-form :model="'.concat(t,'" ').concat(ue(r,o),"  ").concat(me(r),' label-width="80px">\n  ').concat(pe(t,r,a),"\n  ").concat(fe(r,o,n),"\n</el-form>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        ").concat(be(t,a),",\n        ").concat(de(r,a),"\n      }\n    },\n    methods: {\n      ").concat(se(r,c,t,n),"\n    }\n  }\n<\/script>\n")};function he(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(r,!0).forEach(function(t){Object(c["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ye={data:function(){return{srcCode:"",fromItemsCode:"",refCode:"",formObj:"",dataFormData:{},dataFormRules:{},submitMethods:"",validated:!1}},computed:Oe({},Object(a["b"])(["formAttribute","formItems"])),watch:{form:{handler:function(e){this.genVueFile(e,this.formItems)},deep:!0},formItems:{handler:function(e){this.genVueFile(this.formAttribute,e)},deep:!0}},created:function(){this.genVueFile(this.formAttribute,this.formItems)},methods:{genVueFile:function(e,t){var r={ref:e.ref,formObj:e.formObj,method:e.method,validated:e.validated,confirmed:e.confirmed,formItems:t};this.srcCode=_e(r),this.$store.commit("SET_SRC_FORM_CODE",this.srcCode),window.localStorage.removeItem("vue-element-form-gen-code"),window.localStorage.setItem("vue-element-form-gen-code",this.srcCode)},skipToEdit:function(){window.open("./code-editor","_blank")},openDrawer:function(e){var t=!0;while(!e.matches(".controls")){if(e.matches(".control-0")||e.matches(".control-2")){t=!1;break}e=e.parentNode}return t}}},ve=ye,ge=(r("6b7f"),Object(f["a"])(ve,Y,Z,!1,null,"0ae1fbb2",null)),Ie=ge.exports;function Ee(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(r,!0).forEach(function(t){Object(c["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var we={components:{FormAttr:d,FormCode:Ie,JsonForm:Q,FormItemDrag:M,FormItemDrop:W,FormItemDropAttr:w},data:function(){return{activeName:"item"}},computed:je({},Object(a["b"])(["formAttribute","formItems","formItem","FormItemDropAttribute"]))},xe=we,ke=Object(f["a"])(xe,o,n,!1,null,null,null);t["default"]=ke.exports}}]);
//# sourceMappingURL=chunk-1aa855b1.2fb0b7bb.js.map