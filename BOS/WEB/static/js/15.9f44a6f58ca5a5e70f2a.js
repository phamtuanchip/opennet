webpackJsonp([15],{888:function(e,t,a){"use strict";function s(e){a(933)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(935),n=a(936),o=a(0),i=s,l=o(r.a,n.a,!1,i,"data-v-30a08ee4",null);t.default=l.exports},915:function(e,t,a){!function(t,a){e.exports=a()}(0,function(){return function(e){function t(s){if(a[s])return a[s].exports;var r=a[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,s){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=t.dragscroll={init:function(e,t){var a=void 0,s=void 0,r=function(){var r=void 0,n=void 0,o=void 0;e.addEventListener("mousedown",e.md=function(a){var s="nochilddrag"===t.arg,i="firstchilddrag"===t.arg,l=document.elementFromPoint(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)===e,_=document.elementFromPoint(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)===e.firstChild,c=function(e){o=1,r=e.clientX,n=e.clientY,e.preventDefault()};s?l&&c(a):i?(l||_)&&c(a):c(a)},0),window.addEventListener("mouseup",e.mu=function(){o=0},0),window.addEventListener("mousemove",e.mm=function(i){o&&(t.modifiers.x?(e.scrollLeft-=a=-r+(r=i.clientX),e===document.body&&(e.scrollLeft-=a)):t.modifiers.y?(e.scrollTop-=s=-n+(n=i.clientY),e===document.body&&(e.scrollTop-=s)):(e.scrollLeft-=a=-r+(r=i.clientX),e.scrollTop-=s=-n+(n=i.clientY),e===document.body&&(e.scrollLeft-=a,e.scrollTop-=s)))},0)};void 0===t.value||!0===t.value?"complete"===document.readyState?r():window.addEventListener("load",r,0):(t.value&&console.error("The passed value should be either 'undefined', 'true' or 'false'."),e.removeEventListener("mousedown",e.md,0),window.removeEventListener("mouseup",e.mu,0),window.removeEventListener("mousemove",e.mm,0))},bind:function(e,t,a){t.def.init(e,t)},update:function(e,t,a,s){t.value!==t.oldValue&&t.def.init(e,t)},unbind:function(e,t,a){e.removeEventListener("mousedown",e.md,0),window.removeEventListener("mouseup",e.mu,0),window.removeEventListener("mousemove",e.mm,0)}},r={install:function(e,t){e.directive("dragscroll",s)}};"undefined"!=typeof window&&window.Vue&&(window.VueDragscroll=r,window.Vue.use(r)),t.default=r}])})},933:function(e,t,a){var s=a(934);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(887)("06ed4221",s,!0)},934:function(e,t,a){t=e.exports=a(886)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"WeekTarget.vue",sourceRoot:""}])},935:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_vue__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_1_vue_dragscroll__=__webpack_require__(915),__WEBPACK_IMPORTED_MODULE_1_vue_dragscroll___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_dragscroll__);__WEBPACK_IMPORTED_MODULE_0_vue__.default.use(__WEBPACK_IMPORTED_MODULE_1_vue_dragscroll___default.a),__WEBPACK_IMPORTED_MODULE_0_vue__.default.use(__webpack_require__(39)),__webpack_exports__.a={name:"WeekTarget",component:{},props:["datasrc"],data:function(){return{}},methods:{convertSpendTime:function convertSpendTime(data){var exp="";return exp=Math.abs(data)>=24?parseFloat(eval(data)/24).toFixed(0)+" ngày":0!=data?data+" giờ":data},getWeekthisYear:function(){this.arrWeek=[];var e=moment().week();__WEBPACK_IMPORTED_MODULE_0_vue__.default.moment().isoWeekday()>=5&&(e+=1);for(var t=e;t>0;t--){var a=__WEBPACK_IMPORTED_MODULE_0_vue__.default.moment(this.thisYear.toString(),"YYYY").add(t,"weeks").startOf("isoweek").format("DD/MM/YYYY"),s=__WEBPACK_IMPORTED_MODULE_0_vue__.default.moment(this.thisYear.toString(),"YYYY").add(t,"weeks").endOf("isoweek").format("DD/MM/YYYY"),r={name:"Tuần "+t+" ("+a+" - "+s+")",value:t};this.arrWeek.push(r)}this.model.WeekNumber=__WEBPACK_IMPORTED_MODULE_0_vue__.default.moment().isoWeek(),this.bindObjWeek()},bindObjWeek:function(){this.isWeek="true",this.firstDayOfWeek(this.thisYear,this.model.WeekNumber,!0)},firstDayOfWeek:function(e,t,a){this.model.PlanStartDateStartValue=new Date(e,0,1);var s=this.model.PlanStartDateStartValue.getTimezoneOffset();this.model.PlanStartDateStartValue.setDate(this.model.PlanStartDateStartValue.getDate()+4-(this.model.PlanStartDateStartValue.getDay()||7)),this.model.PlanStartDateStartValue.setTime(this.model.PlanStartDateStartValue.getTime()+6048e5*(t+(e==this.model.PlanStartDateStartValue.getFullYear()?-1:0))),this.model.PlanStartDateStartValue.setTime(this.model.PlanStartDateStartValue.getTime()+60*(this.model.PlanStartDateStartValue.getTimezoneOffset()-s)*1e3),this.model.PlanStartDateStartValue.setDate(this.model.PlanStartDateStartValue.getDate()-3);var r=angular.copy(this.model.PlanStartDateStartValue);r.setDate(this.model.PlanStartDateStartValue.getDate()-this.model.PlanStartDateStartValue.getDay()+(0==this.model.PlanStartDateStartValue.getDay()?-6:1)+6),r.setHours(23,59,59),this.model.PlanStartDateEndValue=r,a||this.getObject()}},created:function(){}}},936:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"el-table__body-wrapper grab-bing"},[a("table",[a("thead",[a("tr",[a("th",{staticClass:"default-column",attrs:{rowspan:"2"}},[e._v("Stt")]),e._v(" "),a("th",{staticClass:"mt",attrs:{rowspan:"2"}},[e._v("Mục tiêu / Công việc")]),e._v(" "),a("th",{staticClass:"default-column",attrs:{rowspan:"2"}},[e._v("KPIs kế hoạch")]),e._v(" "),a("th",{staticClass:"default-column",attrs:{rowspan:"2"}},[e._v("KPIs đạt được")]),e._v(" "),a("th",{staticClass:"default-column",attrs:{rowspan:"2"}},[e._v("Hoàn thành")]),e._v(" "),a("th",{staticClass:"c",attrs:{rowspan:"2"}}),e._v(" "),e.datasrc.ListCols["Kế hoạch"]?a("th",{attrs:{colspan:e.datasrc.ListCols["Kế hoạch"].length}},[e._v("Kế hoạch")]):e._e(),e._v(" "),a("th",{staticClass:"c",attrs:{rowspan:"2"}}),e._v(" "),e.datasrc.ListCols["Thực hiện"]?a("th",{attrs:{colspan:e.datasrc.ListCols["Thực hiện"].length}},[e._v("Thực hiện")]):e._e()]),e._v(" "),a("tr",[e._l(e.datasrc.ListCols["Kế hoạch"],function(t){return e.datasrc.ListCols["Kế hoạch"]?a("th",{staticClass:"default-column",class:"cl-"+t.Name},[e._v(e._s(t.Caption))]):e._e()}),e._v(" "),e._l(e.datasrc.ListCols["Thực hiện"],function(t){return e.datasrc.ListCols["Thực hiện"]?a("th",{staticClass:"default-column",class:"cl-"+t.Name},[e._v(e._s(t.Caption))]):e._e()})],2)]),e._v(" "),a("tbody",e._l(e.datasrc.cells,function(t){return e.datasrc.cells?a("tr",{class:void 0!=t.CellType?t.CellType:" Level"+t.Index},[a("td",{staticClass:"default-column"},[a("span",{class:t.Index.length>1?"":"caption"},[e._v(e._s(t.Index))])]),e._v(" "),a("td",[a("span",{staticClass:"icon Level"}),e._v(" "),"h"==t.CellType?a("span",[e._v("\n                              "+e._s(t.Name)+"\n                          ")]):e._e(),e._v(" "),"h"!=t.CellType?a("router-link",{attrs:{to:"/dynamic/view/Index="+t.Index}},[e._v(e._s(t.Name))]):e._e()],1),e._v(" "),a("td",{staticClass:"default-column"},[e._v(e._s(t.TargetPlan)+e._s(t.Unit))]),e._v(" "),a("td",{staticClass:"default-column"},[e._v(e._s(t.TargetDone)+e._s(t.Unit))]),e._v(" "),a("td",{staticClass:"default-column"},["h"==t.CellType?a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:t.TargetProgress?parseInt(t.TargetProgress):0,status:t.TargetProgress?parseInt(t.TargetProgress)>=100?"success":0==parseInt(t.TargetProgress)?"exception":"":"exception"}}):e._e()],1),e._v(" "),a("td",{staticClass:"c default-column",staticStyle:{"border-right":"1px solid #ddd !important"}}),e._v(" "),e._l(e.datasrc.ListCols["Kế hoạch"],function(s){return e.datasrc.ListCols["Kế hoạch"]?a("td",{class:"default-column tg-"+s.Name},[s.Redirect?a("router-link",{attrs:{to:"/dynamic/view/Index="+t.Index}},[e._v(e._s(t[s.DynamicText?s.DynamicText:s.Expression?s.Expression:s.Name]))]):e._e(),e._v(" "),s.Format&&"DateTime"==s.FieldColumnType?a("span",[e._v(e._s(t[s.DynamicText?s.DynamicText:s.Expression?s.Expression:s.Name]?e.$Utils.formatDateTime(t[s.DynamicText?s.DynamicText:s.Expression?s.Expression:s.Name],"h"==t.CellType?"DD/MM/YYYY":"DD/MM/YYYY HH:mm"):""))]):e._e(),e._v(" "),"DateTime"==s.FieldColumnType||s.Redirect?e._e():a("span",[e._v(e._s(t[s.DynamicText?s.DynamicText:s.Expression?s.Expression:s.Name]))])],1):e._e()}),e._v(" "),a("td",{staticClass:"c default-column",staticStyle:{"border-right":"1px solid #ddd !important"}}),e._v(" "),e._l(e.datasrc.ListCols["Thực hiện"],function(s){return e.datasrc.ListCols["Thực hiện"]?a("td",{class:"default-column tg-"+s.Name},[s.Redirect?a("router-link",{attrs:{to:"/dynamic/view/Index="+t.Index}},[e._v(e._s(t[s.DynamicText?s.DynamicText:s.Expression?s.Expression:s.Name]))]):e._e(),e._v(" "),"SpentTime"==s.Expression?a("a",[e._v(e._s(e.convertSpendTime(t.SpentTime))+"\n                             "),"h"!=t.CellType?a("i",{staticClass:"fa  fa-clock-o fa-lg mt-4",style:{color:t.SpentTime<0?"red":"blue"}}):e._e()]):e._e(),e._v(" "),"Progress"==s.Name&&"h"!=t.CellType?a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:t.Progress?parseInt(t.Progress):0,status:void 0!=t.Progress?parseInt(t.Progress)>=100?"success":0==parseInt(t.Progress)?"exception":"":"exception"}}):e._e(),e._v(" "),"Progress"==s.Name&&"h"==t.CellType?a("span",[e._v(e._s(t.Progress)+"%")]):e._e(),e._v(" "),s.Format&&"DateTime"==s.FieldColumnType?a("span",[e._v(e._s(e.$Utils.formatDateTime(t[s.DynamicText?s.DynamicText:s.Expression?s.Expression:s.Name],"DD/MM/YYYY HH:mm")))]):e._e(),e._v(" "),"DateTime"==s.FieldColumnType||s.Redirect||"SpentTime"==s.Expression||"Progress"==s.Name?e._e():a("div",{style:"h"!=t.CellType&&void 0!=t.Status&&"StatusName"===s.Name?"background-color: "+e.$rootScope.arrStatusColor[t.Status.toUpperCase()]:""},[e._v(e._s(t[s.DynamicText?s.DynamicText:s.Expression?s.Expression:s.Name]))])],1):e._e()})],2):e._e()}))])])},r=[],n={render:s,staticRenderFns:r};t.a=n}});
//# sourceMappingURL=15.9f44a6f58ca5a5e70f2a.js.map