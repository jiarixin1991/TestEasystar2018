webpackJsonp([1],{Hw5x:function(t,e){},"l/80":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"StructSetup",data:function(){return{tableHeight:window.innerHeight-70,loading:!1,tableData:[],classId:"",classType:""}},mounted:function(){this.$nextTick(function(){this.fetchData()})},watch:{$route:"fetchData"},methods:{windowResize:function(){this.tableHeight=window.innerHeight-70},fieldTypeChange:function(t){console.log(t.FIELDNAME,t.FIELDTYPE)},getFieldType:function(t){switch(t){case"C":case"V":return"字符型";case"I":return"数值型";case"D":return"日期型";default:return t}},fetchData:function(){var t=this;this.loading=!0,this.classId=this.$route.params.classId,this.classType=this.$route.params.classType,console.log(this.classId),this.axios.get(this.api+this.easyStarAPI.GetDocFrame,{params:{classId:this.classId,classType:this.classType}}).then(function(e){t.loading=!1,console.log(e.data.cols),t.tableData=e.data.cols}).catch(function(){t.loading=!1})},handleClick:function(t){console.log(t)}}},n={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticStyle:{margin:"5px"}},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%",height:"100%"},attrs:{data:t.tableData,stripe:"",border:"","highlight-current-row":"",size:"mini",height:t.tableHeight,"header-cell-style":{color:"#000",background:"#FAFAFA","text-align":"center"}}},[l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"FIELDNAME",label:"字段名",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"DISSTR",label:"中文名称",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-select",{attrs:{size:"mini"},on:{change:function(l){return t.fieldTypeChange(e.row)}},model:{value:e.row.FIELDTYPE,callback:function(l){t.$set(e.row,"FIELDTYPE",l)},expression:"scope.row.FIELDTYPE"}},[l("el-option",{attrs:{value:"C",label:"字符型"}},[t._v("字符型")]),t._v(" "),l("el-option",{attrs:{value:"I",label:"数值型"}},[t._v("数值型")]),t._v(" "),l("el-option",{attrs:{value:"D",label:"日期型"}},[t._v("日期型")])],1)]}}])}),t._v(" "),l("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"长度",prop:"FIELDSIZE"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{value:t.row.FIELDSIZE,size:"mini",placeholder:"字段长度"}})]}}])}),t._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.handleClick(e.row)}}},[t._v("查看")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1)},staticRenderFns:[]};var o=l("C7Lr")(a,n,!1,function(t){l("Hw5x")},null,null);e.default=o.exports}});
//# sourceMappingURL=1.3f0b5f78f7a319614430.js.map