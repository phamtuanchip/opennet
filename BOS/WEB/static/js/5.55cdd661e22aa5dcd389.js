webpackJsonp([5],{1089:function(e,t,a){var o=a(1090);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(887)("2903375a",o,!0)},1090:function(e,t,a){t=e.exports=a(886)(!0),t.push([e.i,".document-list #Filter{height:100%}.document-list #Filter .modal-dialog{position:fixed;right:0;margin:0;height:100%}.document-list #Filter .modal-dialog .modal-content{height:100%}.document-list .title-box{background-color:#f0f3f5;border:1px solid #c2cfd6}.document-list .createDocument .el-dialog__header{text-align:left;background-color:#5090c1}.document-list .createDocument .el-dialog__header .el-dialog__title{color:#fff}.document-list .createDocument .el-dialog__footer{text-align:right}.document-list .createDocument .el-dialog__headerbtn .el-dialog__close{color:#fff}.document-list .el-aside{color:#333}.document-list .border-box{border:1px solid #5090c1}.document-list .my-row .col-md-9{padding:0!important}.document-list .my-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:#f0f3f5;padding:0 10px 3px;cursor:pointer}","",{version:3,sources:["/Users/yuukininomae/Sites/crm_2/src/components/Documents.vue"],names:[],mappings:"AACA,uBACE,WAAa,CACd,AACD,qCACI,eAAgB,AAChB,QAAW,AACX,SAAY,AACZ,WAAa,CAChB,AACD,oDACM,WAAa,CAClB,AACD,0BACE,yBAA0B,AAC1B,wBAA0B,CAC3B,AACD,kDACE,gBAAiB,AACjB,wBAA0B,CAC3B,AACD,oEACI,UAAY,CACf,AACD,kDACE,gBAAkB,CACnB,AACD,uEACE,UAAY,CACb,AACD,yBACE,UAAY,CACb,AACD,2BACE,wBAA0B,CAC3B,AACD,iCACE,mBAAwB,CACzB,AACD,0BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AAE1B,mBAAyB,AACzB,cAAgB,CACjB",file:"Documents.vue",sourcesContent:["\n.document-list #Filter {\n  height: 100%;\n}\n.document-list #Filter .modal-dialog {\n    position: fixed;\n    right: 0px;\n    margin: 0px;\n    height: 100%;\n}\n.document-list #Filter .modal-dialog .modal-content {\n      height: 100%;\n}\n.document-list .title-box {\n  background-color: #f0f3f5;\n  border: 1px solid #c2cfd6;\n}\n.document-list .createDocument .el-dialog__header {\n  text-align: left;\n  background-color: #5090c1;\n}\n.document-list .createDocument .el-dialog__header .el-dialog__title {\n    color: #fff;\n}\n.document-list .createDocument .el-dialog__footer {\n  text-align: right;\n}\n.document-list .createDocument .el-dialog__headerbtn .el-dialog__close {\n  color: #fff;\n}\n.document-list .el-aside {\n  color: #333;\n}\n.document-list .border-box {\n  border: 1px solid #5090c1;\n}\n.document-list .my-row .col-md-9 {\n  padding: 0px !important;\n}\n.document-list .my-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #f0f3f5;\n  /*border: 1px solid #c2cfd6;*/\n  padding: 0 10px 3px 10px;\n  cursor: pointer;\n}\n"],sourceRoot:""}])},1091:function(e,t,a){"use strict";(function(e){var o=a(5),i=a.n(o),n=a(25),s=a.n(n),r=a(1092),l=a(1097),c=a(1102),u=a(16);t.a={name:"categories",components:{CreateDocumentForm:r.a,DocumentTree:l.a,PermissionSelector:u.a},data:function(){var e;return e={completedSignal:0,isCollapse:!1,currentUser:this.$rootScope.loggedOnUser,arrPermission:{},paginationDef:{pageSize:20,pageSizes:[10],currentPage:1},searchDef:{inputProps:{placeholder:"Tìm kiếm tài liệu"},colProps:{span:12}},listButtons:[],showButton:!1,ListField:[],titles:[],dialogVisible:!1,activeName:"1",projects:[],years:[],documentCategories:[],groups:[],dates:[],filterTree:[],treeData:[{label:"Phòng ban",children:[],type:"group",icon:"icon-people",unread:0,total:0},{label:"Danh mục",children:[],type:"group",icon:"icon-notebook",unread:0,total:0},{label:"Dự án",children:[],type:"project",icon:"icon-drawer",unread:0,total:0},{label:"Ngày phát hành",children:[],type:"dates",icon:"icon-clock"}],SettingForm:[],options:[],form:{Keyword:"",Created:[],PublishedDate:[]},documentList:[],tableData:[],categories:[]},s()(e,"projects",[]),s()(e,"versionProjects",[]),s()(e,"Types",[]),e},methods:{addNewDocument:function(e){this.$hub.$emit("set-modal-data","Thêm mới tài liệu","80%",!0,"left",r.a,!0,"createDocument")},editDocument:function(e){var t={item:e,categoryLst:this.documentCategories,departmentLst:this.groups,projectLst:this.projects};this.$hub.$emit("set-modal-data","Chỉnh sửa tài liệu","80%",!0,"left",r.a,!0,"",t)},shareDocument:function(e){this.$hub.$emit("set-modal-data","Chia sẻ tài liệu","80%",!0,"left",u.a,!0,"",e.Id)},handleClick:function(e,t){4==this.activeName&&(this.treeData=[])},handleNodeClick:function(){},clearInput:function(){this.form.Keyword="",this.form.Created=[],this.form.PublishedDate=[]},searchSetting:function(){var t=this,a={RequestClass:"xBase",RequestAction:"Request",TotalRequests:2,R1_RequestTemplate:"SettingNew.SearchSetting",R1_Code:"Form.cap-nhat-tai-lieu.0b27c",R2_RequestTemplate:"SettingNew.SearchSetting",R2_Code:"List.danh-sach-tai-lieu.064hg;"};this.$Utils.post(a).then(function(a){var o=[];o["icon-delete"]="fa fa-trash",o["icon-plus-circle"]="fa fa-plus-circle",o["icon-pencil-box"]="fa fa-pencil",o["icon-eye"]="fa fa-eye",o["icon-briefcase-download"]="fa fa-download",o["icon-share ic"]="fa fa-share";var n=t.$Utils.getDataWithRoot(a.R2,"Data.DynamicDS.Setting")[0];t.$Utils.isEmpty(n,"Description")&&t.$Lodash.isString(n.Description)&&(n.Description=JSON.parse(n.Description)),e.each(n.Description,function(e,t){n[e]=t}),t.SettingForm=n;var s=t.SettingForm.Description.Buttons;t.completedSignal+=1,e.each(s,function(a,n){n.Icon=o[n.Icon],n.UserPermissions&&n.UserPermissions.length>0&&n.UserPermissions.forEach(function(e){i()(t.currentUser.Roles).indexOf(e)>-1&&(n.DisplayPermit=!0)});var s=t.$Utils.stringToObject(n.ExtraSetting);e.each(s,function(e,t){n[e]=t})}),s=s.filter(function(e){return"Insert"!==e.ButtonDisplayType}),t.listButtons=t.$Lodash.cloneDeep(s);var r=JSON.parse(n.OF1);t.ListFields=t.$Lodash.cloneDeep(r);var l=[];e.each(r,function(e,t){"Name"!==t.Name&&"Tool"!==t.Name&&l.push({prop:t.Name,label:t.Caption})}),t.titles=t.$Lodash.cloneDeep(l)})},onButtonClick:function(e,t){this.excuteButtonClick(this.listButtons[e],t)},checkPermit:function(t,a){var o=this,n=!1,s=!1;return t.PermitToShow&&this.arrPermission&&this.$Utils.isEmpty(this.arrPermission[a.Id],t.PermitToShow)?-1!=this.arrPermission[a.Id][t.PermitToShow].indexOf(this.currentUser.UserId)?n=!0:e.each(this.arrPermission[a.Id][t.PermitToShow],function(e,t){if(i()(o.currentUser.Roles).indexOf(t)>-1)return n=!0,!1}):t.PermitToShow||(n=!0),(t.UserPermissions&&t.DisplayPermit||!t.UserPermissions||0==t.UserPermissions.length)&&(s=!0),n&&s&&this.showButton},excuteButtonClick:function(e,t){var a=e.ButtonType?e.ButtonType:e.ElementType;switch(!e.ButtonType&&"Link"==e.ElementType&&e.Redirect&&(a="Redirect"),a){case"Click":switch(e.Action){case"Update":this.excuteUpdate(t,e);break;case"Delete":this.excuteDelete(t,e);break;case"ReturnData":break;case"Download":this.excuteDownload(e,t);break;case"Audio":this.excuteAudio(e,t);break;case"Call":break;case"Permission":this.shareDocument(t)}}},excuteDownload:function(e,t){var a=this,o=this,i=[],n=0,s={RequestClass:"xBase",RequestAction:"SearchBinary",Parent:t.Id,ConditionFields:"Parent",StaticFields:"Name;Created;Modified;FileName;FileExtension;FileSize;CreatedBy;Description;Parent;FileSize",DynamicFields:"CreatedByName;SignatureVerified"};o.$Utils.postCheckResult(s).then(function(e){i=o.$Utils.getDataWithRoot(e,"Data.DynamicDS.Binary"),n=e.TotalCount,a.$hub.$emit("set-modal-data","Chia sẻ tài liệu","80%",!0,"left",c.a,!0,"",i)})},excuteDelete:function(e,t){var a=this;a.$confirm("Hành động này không thể hoàn tác. Bạn thực sự muốn xóa bản ghi này?","Cảnh Báo",{confirmButtonText:"Xóa",cancelButtonText:"Bỏ qua",type:"warning"}).then(function(){a.$Utils.isEmpty(e,"length")||(e=[e]),a.sendDeleteRequest(e,t)})},sendDeleteRequest:function(t,a){var o=this,i={RequestClass:"xBase",RequestAction:"Request",TotalRequests:t.length,RequestTemplate:"xDocument_Document.Delete"};e.each(t,function(e,t){i["R"+(e+1)+"_Id"]=t.Id,i["R"+(e+1)+"_DeleteReferenceData"]=t.Id}),o.$Utils.postCheckResult(i).then(function(a){e.each(t,function(e,t){t.Name?t.Name:t.Id;a["R"+(e+1)].success?(o.$Utils.showMessage("success","Xóa Thành công"),o.tableData=o.tableData.filter(function(e){return e.Id!=t.Id})):o.$Utils.showMessage("error","Có lỗi xảy ra")})})},searchList:function(){this.$hub.$emit("update-document-list",this.filterTree),this.$refs.Filter.hide()},getBagNumber:function(t,a,o,i,n){for(var s=this,r={RequestClass:"xBase",RequestAction:"Request",TotalRequests:t.length+a.length+o.length+i.length},l=1;l<=t.length;l++)r["R"+l+"_RequestTemplate"]="xDocument_Document.Count",r["R"+l+"_AssignedUser"]=s.$getItemLocalStorage(s.$localStorageConstant.SessionId),r["R"+l+"_RequestDataGroup"]="DataGroup.tai-lieu-dung-chung.0cb59",r["R"+l+"_Code"]="Document",r["R"+l+"_SettingCategory"]=t[l-1].Id,r["R"+l+"_AssignedUser"]=s.$getItemLocalStorage(s.$localStorageConstant.SessionId),n&&e.each(s.form,function(e,t){"Keyword"==e?r["R"+l+"_"+e]=t:2==t.length&&(r["R"+l+"_"+e+"StartValue"]=s.$Utils.formatDateTime(t[0]),r["R"+l+"_"+e+"EndValue"]=s.$Utils.formatDateTime(t[1]))});for(var c=t.length,l=1;l<=a.length;l++)r["R"+(l+c)+"_RequestTemplate"]="xDocument_Document.Count",r["R"+(l+c)+"_RequestDataGroup"]="DataGroup.tai-lieu-dung-chung.0cb59",r["R"+(l+c)+"_Code"]="Document",r["R"+(l+c)+"_VersionProject"]=a[l-1].Id,r["R"+(l+c)+"_AssignedUser"]=s.$getItemLocalStorage(s.$localStorageConstant.SessionId),n&&e.each(s.form,function(e,t){"Keyword"==e?r["R"+(l+c)+"_"+e]=t:2==t.length&&(r["R"+(l+c)+"_"+e+"StartValue"]=s.$Utils.formatDateTime(t[0]),r["R"+(l+c)+"_"+e+"EndValue"]=s.$Utils.formatDateTime(t[1]))});c+=a.length;for(var l=1;l<=o.length;l++)r["R"+(l+c)+"_RequestTemplate"]="xDocument_Document.Count",r["R"+(l+c)+"_RequestDataGroup"]="DataGroup.tai-lieu-dung-chung.0cb59",r["R"+(l+c)+"_Code"]="Document",r["R"+(l+c)+"_Project"]=o[l-1].GroupId,r["R"+(l+c)+"_AssignedUser"]=s.$getItemLocalStorage(s.$localStorageConstant.SessionId),n&&e.each(s.form,function(e,t){"Keyword"==e?r["R"+(l+c)+"_"+e]=t:2==t.length&&(r["R"+(l+c)+"_"+e+"StartValue"]=s.$Utils.formatDateTime(t[0]),r["R"+(l+c)+"_"+e+"EndValue"]=s.$Utils.formatDateTime(t[1]))});c+=o.length;for(var l=1;l<=i.length;l++){r["R"+(l+c)+"_RequestTemplate"]="xDocument_Document.Count",r["R"+(l+c)+"_RequestDataGroup"]="DataGroup.tai-lieu-dung-chung.0cb59",r["R"+(l+c)+"_Code"]="Document",r["R"+(l+c)+"_AssignedUser"]=s.$getItemLocalStorage(s.$localStorageConstant.SessionId);var u=this.$Utils.stringToObject(this.$Utils.decodeHtmlEntities(i[l-1].Value));e.each(u,function(e,t){r["R"+(l+c)+"_PublishedDate"+e]=t}),n&&e.each(s.form,function(e,t){"Keyword"==e?r["R"+(l+c)+"_"+e]=t:2==t.length&&(r["R"+(l+c)+"_"+e+"StartValue"]=s.$Utils.formatDateTime(t[0]),r["R"+(l+c)+"_"+e+"EndValue"]=s.$Utils.formatDateTime(t[1]))})}this.$Utils.postCheckResult(r).then(function(e){var n=1,r=(t.filter(function(t){t.total=e["R"+n].Data,n++}),0);a.filter(function(t){t.total=e["R"+n].Data,r+=parseInt(t.total),n++}),o.filter(function(t){t.total=e["R"+n].Data,n++});s.documentCategories=t,s.projects=a,s.groups=o,s.dates=i})},reloadDataLst:function(){var t=this;this.tableData=e.map(t.documentList,function(e,a){var o={Name:e.Name,FileTypeName:"fa fa-file-"+("xls"==e.FileTypeName||"xlsx"==e.FileTypeName?"excel":e.FileTypeName)+"-o",Created:t.$Utils.formatDateTime(e.Created,"DD/MM/YYYY"),CreatedBy:e.CreatedByName,Category:e.CategoryName,Project:e.ProjectName,VersionProject:e.VersionProjectName,Id:e.Id,btnLst:{}};return t.listButtons.forEach(function(a){o.btnLst[a.Code]=t.checkPermit(a,{Id:e.Id})}),o})}},watch:{dates:function(e){var t=this.$Utils.createCustomTreeFromList(e,"Id","ParentId","children",{Name:"label",Value:"value"},{type:"dates",icon:"icon-folder"});this.treeData[3].children=t},groups:function(t){var a=this,o=this.$Utils.createCustomTreeFromList(t,"Id","ParentId","children",{GroupName:"label",GroupId:"value"},{type:"group",icon:"icon-folder"});this.treeData[0].total=0,e.each(o,function(e,t){a.treeData[0].total+=parseInt(t.total)}),this.treeData[0].children=o},documentCategories:function(t){var a=this,o=this.$Utils.createCustomTreeFromList(t,"Id","ParentId","children",{Name:"label",Id:"value"},{type:"category",icon:"icon-folder"});this.treeData[1].total=0,e.each(o,function(e,t){a.treeData[1].total+=parseInt(t.total)}),this.treeData[1].children=o},projects:function(t){var a=this,o=this.$Utils.createCustomTreeFromList(t,"Id","ParentId","children",{Name:"label",Id:"value"},{type:"project",icon:"icon-folder"});this.treeData[2].total=0,e.each(o,function(e,t){a.treeData[2].total+=parseInt(t.total)}),this.treeData[2].children=o},completedSignal:function(e){e>=2&&this.reloadDataLst()}},created:function(){},mounted:function(){var t=this,a=this;a.searchSetting(),this.$hub.$on("update-document-list",function(o){var i=!0;if(t.filterTree==o&&(i=!1),t.filterTree=a.$Lodash.cloneDeep(o),0==o.length&&i)t.documentList=[],t.tableData=[];else{var n="";n="project"===o.type?"_VersionProject":"group"===o.type?"_Project":"category"===o.type?"_SettingCategory":"_PublishedDate";for(var s={RequestClass:"xBase",RequestAction:"Request",TotalRequests:o.length},r=1;r<=o.length;r++){var n="";if(n="project"===o[r-1].type?"_VersionProject":"group"===o[r-1].type?"_Project":"category"===o[r-1].type?"_SettingCategory":"_PublishedDate",i&&e.each(a.form,function(e,t){"Keyword"==e?s["R"+r+"_"+e]=t:2==t.length&&(s["R"+r+"_"+e+"StartValue"]=a.$Utils.formatDateTime(t[0]),s["R"+r+"_"+e+"EndValue"]=a.$Utils.formatDateTime(t[1]))}),s["R"+r+"_RequestTemplate"]="xDocument_Document.Search",s["R"+r+"_RequestDataGroup"]="DataGroup.tai-lieu-dung-chung.0cb59",s["R"+r+"_RequestFields"]="Id;Tool;Name;Created;CreatedByName;CreatedBy;CategoryName;SettingCategory;Category;ProjectName;Project;VersionProjectName;VersionProject;CategoryName;Id;CreatedByName;ModifiedByName;Code;FileTypeName;ProjectName;TypeName;VersionProjectName;PublishedDate",s["R"+r+"_Code"]="Document",s["R"+r+"_AssignedUser"]=a.$getItemLocalStorage(a.$localStorageConstant.SessionId),"_PublishedDate"==n){var l=t.$Utils.stringToObject(t.$Utils.decodeHtmlEntities(o[r-1].value));e.each(l,function(e,t){s["R"+r+n+e]=t})}else s["R"+r+n]=o[r-1].value;i||e.each(a.form,function(e,t){"Keyword"==e?s["R"+r+"_"+e]=t:2==t.length&&(s["R"+r+"_"+e+"StartValue"]=a.$Utils.formatDateTime(t[0]),s["R"+r+"_"+e+"EndValue"]=a.$Utils.formatDateTime(t[1]))})}0!=o.length||i||(s.TotalRequests=1,e.each(a.form,function(e,t){"Keyword"==e?s["R1_"+e]=t:2==t.length&&(s["R1_"+e+"StartValue"]=a.$Utils.formatDateTime(t[0]),s["R1_"+e+"EndValue"]=a.$Utils.formatDateTime(t[1]))})),t.$Utils.postCheckResult(s).then(function(n){t.documentList=[],t.showButton=!1;for(var s=1;s<=o.length;s++)if(void 0!=n["R"+s].Data.DocumentDS.Document){var r=t.$Utils.getDataWithRoot(n["R"+s],"Data.DocumentDS.Document");t.documentList=t.$Lodash.unionBy(r,t.documentList,"Id")}i||t.getBagNumber(a.documentCategories,a.projects,a.groups,a.dates,!0);var l={RequestClass:"xBase",RequestAction:"Request",TotalRequests:t.documentList.length,RequestTemplate:"Permission"};e.each(t.documentList,function(e,a){t.arrPermission[a.Id]={},l["R"+(e+1)+"_Parent"]=a.Id}),t.$Utils.post(l).then(function(a){e.each(a,function(a,o){o=t.$Utils.getDataWithRoot(o,"Data.DataDS.Linked"),t.$Utils.isEmpty(o)&&o.length>0&&e.each(o,function(e,a){t.$Utils.isEmpty(t.arrPermission[o[0].Parent][a.Code])||(t.arrPermission[o[0].Parent][a.Code]=[]),t.arrPermission[o[0].Parent][a.Code].push(a.Child)})}),t.showButton=!0,t.completedSignal+=1})})}});var o={RequestClass:"xBase",RequestAction:"Request",TotalRequests:4,R1_RequestTemplate:"SettingNew.SearchSetting",R1_ParentCode:"xSetting.Project.Parameter.Category",R1_GroupType:1,R2_RequestTemplate:"xDocument_Document.Search",R2_RequestDataGroup:"DataGroup.quan-ly-du-an.053gf",R2_RequestFields:"Id;Tool;TypeName;Name;ManagerName;StatusName;StateName;PermitName;Progress;DepartmentName;PlanManHour;ActualManHour;FinishDate;PriorityName;ProductName;StartDate;Version;Code;CreatedBy;Department;Id;Manager;ModifiedBy;Priority;PriorityDescription;PriorityId;State;Status;Type;Permit;Describe;Active;ActiveName;ProjectCode;Department;DepartmentName;Manager;ManagerName;Worker;WorkerName",R2_Code:"Project",R2_ParentCode:"xSetting.Project.Parameter.Organization.Category",R3_RequestTemplate:"OrgnizationList",R3_GroupType:1,R4_RequestTemplate:"Setting.SearchBase",R4_ParentCode:"xSetting.Project.Parameter.PublicDate",R4_RequestOrderFields:"Name"};this.$Utils.post(o).then(function(e){var o=a.$Utils.getDataWithRoot(e.R1,"Data.DynamicDS.Setting"),i=a.$Utils.getDataWithRoot(e.R2,"Data.DocumentDS.Document"),n=a.$Utils.getDataWithRoot(e.R3,"Data.UserDS.Group"),s=a.$Utils.getDataWithRoot(e.R4,"Data.DynamicDS.Setting");t.getBagNumber(o,i,n,s)})}}}).call(t,a(2))},1092:function(e,t,a){"use strict";function o(e){a(1093)}var i=a(1095),n=a(1096),s=a(0),r=o,l=s(i.a,n.a,!1,r,null,null);t.a=l.exports},1093:function(e,t,a){var o=a(1094);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(887)("1d1e8871",o,!0)},1094:function(e,t,a){t=e.exports=a(886)(!0),t.push([e.i,".documentForm .el-form-item__content{margin-left:0!important}","",{version:3,sources:["/Users/yuukininomae/Sites/crm_2/src/components/static/CreateDocumentForm.vue"],names:[],mappings:"AACA,qCACE,uBAA0B,CAC3B",file:"CreateDocumentForm.vue",sourcesContent:["\n.documentForm .el-form-item__content {\n  margin-left: 0 !important;\n}\n"],sourceRoot:""}])},1095:function(e,t,a){"use strict";(function(e){var o=a(5),i=a.n(o),n=a(102);t.a={name:"CreateDocument",props:{value:""},components:{UploadFile:n.a},data:function(){return{userInfor:JSON.parse(this.$Utils.getUserInfo()),SettingForm:null,model:{Id:null,Category:null,Project:{},VersionProject:null,Type:null,Created:null,PublishedDate:null,FileType:null,Name:null,Description:null},config:this.$froOptions,categories:[],projects:[],versionProjects:[],Types:[],FileTypes:[]}},methods:{changeProject:function(){},onSubmit:function(){var t=this,a={RequestClass:"xBase",RequestAction:"Request",TotalRequests:1,R1_Project:this.model.Project?this.model.Project.GroupId:null,R1_ProjectName:this.model.Project?this.model.Project.GroupName:null,R1_ProjectCode:this.model.Project?this.model.Project.Code:null,R1_RequestFields:"Id;Category;CategoryName;Project;ProjectName;VersionProject;VersionProjectName;Created;PublishedDate;FileType;FileTypeName;Name;Description;Code;Type;CreatedBy;CreatedByName;Modified;ModifiedBy;ModifiedByName;TypeName;FormSetting;Changed;",R1_Category:this.model.Category?this.model.Category.Id:null,R1_CategoryName:this.model.Category?this.model.Category.Name:null,R1_VersionProject:this.model.VersionProject?this.model.VersionProject.GroupId:null,R1_VersionProjectName:this.model.VersionProject?this.model.VersionProject.GroupName:null,R1_Created:t.$Utils.formatDateTime(this.model.Created),R1_PublishedDate:t.$Utils.formatDateTime(this.model.PublishedDate),R1_FileType:this.model.FileType?this.model.FileType.Id:null,R1_FileTypeName:this.model.FileType?this.model.FileType.Name:null,R1_Name:this.model.Name,R1_Description:this.model.Description,R1_RequestDataGroup:"DataGroup.tai-lieu-dung-chung.0cb59",R1_RequestTemplate:"xDocument_Document.Insert",R1_CreatedByName:this.userInfor.Username,R1_ModifiedByName:this.userInfor.Username,R1_Version:1,R1_Code:"Document",R1_FormSetting:i()(t.SettingForm)};e.each(a,function(e,o){t.$Utils.isEmpty(o)||delete a[e]}),t.$Utils.post(a).then(function(e){})},bindTree:function(t,a,o){if(this.$Utils.isEmpty(t)){var i=this.$Lodash.cloneDeep(t);e.each(i,function(e,t){var n=t.Level;for(i[e].text="";n>a;)i[e].text+="|-- ",n--;i[e].text+=t[o]})}return i}},created:function(){var e=this,t=this,a=JSON.parse(this.$Utils.getUserInfo()),o=null;t.$Utils.isEmpty(a,"Project")&&t.$Utils.isEmpty(a.Project,"GroupId")&&(o=a.Project.GroupId);var i={RequestClass:"xBase",RequestAction:"Request",TotalRequests:5,R1_RequestTemplate:"Setting.SearchBase",R1_ParentCode:"xSetting.Project.Parameter.Category",R1_RequestOrderFields:"LeftIndex ASC",R2_RequestTemplate:"OrgnizationList",R2_GroupType:1,R2_AssignedUser:this.$getItemLocalStorage(this.$localStorageConstant.SessionId),R3_RequestTemplate:"xDocument_Document.Search",R3_RequestDataGroup:"DataGroup.quan-ly-du-an.053gf",R3_RequestFields:"Id;Name;ProjectCode;Code;CreatedBy;State;Status;Type",R3_Code:"Project",R4_RequestTemplate:"Setting.SearchBase",R4_ParentCode:"xSetting.Project.Parameter.DocumentView.DocumentType",R5_RequestTemplate:"Setting.SearchBase",R5_ParentCode:"xSetting.Project.Parameter.Organization.Category",R5_Value:o};t.$Utils.isEmpty(o)&&(i.R1_Project=o),this.$Utils.post(i).then(function(a){var i=t.$Utils.getDataWithRoot(a.R1,"Data.DynamicDS.Setting");i=e.bindTree(i,5,"Name"),e.categories=i;var n=t.$Utils.getDataWithRoot(a.R2,"Data.UserDS.Group");if(n=e.bindTree(n,1,"GroupName"),e.projects=n,t.$Utils.isEmpty(e.projects)){var s=e.projects.find(function(e){return e.GroupId==o});e.model.Project=s}e.versionProjects=t.$Utils.getDataWithRoot(a.R3,"Data.DocumentDS.Document"),e.FileTypes=t.$Utils.getDataWithRoot(a.R4,"Data.DynamicDS.Setting");var r=t.$Utils.getDataWithRoot(a.R5,"Data.DynamicDS.Setting");e.Types=e.bindTree(r)})},mounted:function(){var t=this;setTimeout(function(){e("a:contains('Unlicensed copy of the Froala Editor')").remove()},900);var a={RequestClass:"xBase",RequestAction:"Request",TotalRequests:1,R1_RequestTemplate:"SettingNew.SearchSetting",R1_Code:"Form.cap-nhat-tai-lieu.0b27c"};this.$Utils.post(a).then(function(a){var o=t.$Utils.getDataWithRoot(a.R1,"Data.DynamicDS.Setting")[0];t.$Utils.isEmpty(o,"Description")&&t.$Lodash.isString(o.Description)&&(o.Description=JSON.parse(o.Description)),e.each(o.Description,function(e,t){o[t]=e}),t.SettingForm=o})}}}).call(t,a(2))},1096:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticClass:"documentForm",attrs:{model:e.model,"label-width":"120px"}},[a("el-form-item",[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"Danh mục"},model:{value:e.model.Category,callback:function(t){e.$set(e.model,"Category",t)},expression:"model.Category"}},e._l(e.categories,function(e){return a("el-option",{key:e.Id,attrs:{label:e.text,value:e}})}))],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"Phòng ban"},on:{change:e.changeProject},model:{value:e.model.Project,callback:function(t){e.$set(e.model,"Project",t)},expression:"model.Project"}},e._l(e.projects,function(e){return a("el-option",{key:e.GroupId,attrs:{label:e.text,value:e.GroupId,"value-key":e}})}))],1)],1),e._v(" "),a("el-form-item",[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"Dự án"},model:{value:e.model.VersionProject,callback:function(t){e.$set(e.model,"VersionProject",t)},expression:"model.VersionProject"}},e._l(e.versionProjects,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e}})}))],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"Nghiệp vụ"},model:{value:e.model.Type,callback:function(t){e.$set(e.model,"Type",t)},expression:"model.Type"}},e._l(e.Types,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e}})}))],1)],1),e._v(" "),a("el-form-item",[a("el-col",{attrs:{span:12}},[a("el-date-picker",{staticStyle:{width:"90%"},attrs:{type:"date",placeholder:"Ngày tạo",format:"dd-MM-yyyy"},model:{value:e.model.Created,callback:function(t){e.$set(e.model,"Created",t)},expression:"model.Created"}})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-date-picker",{staticStyle:{width:"90%"},attrs:{type:"date",placeholder:"Ngày phát hành",format:"dd-MM-yyyy"},model:{value:e.model.PublishedDate,callback:function(t){e.$set(e.model,"PublishedDate",t)},expression:"model.PublishedDate"}})],1)],1),e._v(" "),a("el-form-item",[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"Phân loại"},model:{value:e.model.FileType,callback:function(t){e.$set(e.model,"FileType",t)},expression:"model.FileType"}},e._l(e.FileTypes,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e}})}))],1)],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"Tên tài liệu"},model:{value:e.model.Name,callback:function(t){e.$set(e.model,"Name",t)},expression:"model.Name"}})],1),e._v(" "),a("el-form-item",[a("froala",{attrs:{tag:"textarea",config:e.config},model:{value:e.model.Description,callback:function(t){e.$set(e.model,"Description",t)},expression:"model.Description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Tài liệu đính kèm"}},[a("UploadFile")],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),e._v(" "),a("el-button",[e._v("Cancel")])],1)],1)},i=[],n={render:o,staticRenderFns:i};t.a=n},1097:function(e,t,a){"use strict";function o(e){a(1098)}var i=a(1100),n=a(1101),s=a(0),r=o,l=s(i.a,n.a,!1,r,null,null);t.a=l.exports},1098:function(e,t,a){var o=a(1099);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(887)("13ae49f4",o,!0)},1099:function(e,t,a){t=e.exports=a(886)(!0),t.push([e.i,".document-tree .el-tree-node__expand-icon{font-size:24px}.document-tree .el-checkbox{margin-bottom:0}","",{version:3,sources:["/Users/yuukininomae/Sites/crm_2/src/components/static/DocumentTree.vue"],names:[],mappings:"AACA,0CACE,cAAgB,CACjB,AACD,4BACE,eAAmB,CACpB",file:"DocumentTree.vue",sourcesContent:["\n.document-tree .el-tree-node__expand-icon {\n  font-size: 24px;\n}\n.document-tree .el-checkbox {\n  margin-bottom: 0px;\n}\n"],sourceRoot:""}])},1100:function(e,t,a){"use strict";var o=a(5),i=a.n(o);t.a={props:["datasource"],data:function(){return{source:this.datasource,defaultProps:{children:"children",label:"label",type:"type"},filterText:""}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{handleNodeClick:function(e){var t=this.$refs.tree.getCheckedKeys();-1===t.indexOf(e.value)?(t.push(e.value),this.$refs.tree.setCheckedKeys(t)):(t.splice(t.indexOf(e.value),1),this.$refs.tree.setCheckedKeys(t))},handleCheckChange:function(e,t,a){var o=this.$refs.tree.getCheckedNodes();this.$hub.$emit("update-document-list",o)},filterNode:function(e,t){return!e||-1!==t.label.toLowerCase().indexOf(e.toLowerCase())},append:function(e){var t={id:id++,label:"testtest",children:[]};e.children||this.$set(e,"children",[]),e.children.push(t)},remove:function(e,t){var a=e.parent,o=a.data.children||a.data,i=o.findIndex(function(e){return e.id===t.id});o.splice(i,1)},expandAll:function(){this.$refs.tree.$data.store.defaultExpandAll=!0,this.source=JSON.parse(i()(this.source))},collapseAll:function(){this.$refs.tree.$data.store.defaultExpandAll=!1,this.source=JSON.parse(i()(this.source))},renderContent:function(e,t){var a=t.node;t.data,t.store;return e("span",{style:"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"},[e("span",null,[e("span",null,[e("i",{class:a.data.icon},[]),a.label])]),e("span",null,[this.$Utils.isEmpty(a.data.total)?"("+a.data.total+")":""])])}}}},1101:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"document-tree"},[a("el-input",{attrs:{placeholder:"Tìm kiếm"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),a("div",{staticClass:"px-2 bg-white"},[a("button",{staticClass:"btn btn-link",on:{click:e.expandAll}},[e._v("Mở rộng")]),e._v(" "),a("button",{staticClass:"btn btn-link",on:{click:e.collapseAll}},[e._v("Thu gọn")])]),e._v(" "),a("el-tree",{ref:"tree",attrs:{data:e.source,props:e.defaultProps,"show-checkbox":"","node-key":"value","default-expand-all":!(e.$isMobileDevice&&!e.$isMobile.iPad()),"check-strictly":"","expand-on-click-node":!0,"filter-node-method":e.filterNode,"render-content":e.renderContent},on:{"node-click":e.handleNodeClick,"check-change":e.handleCheckChange}})],1)},i=[],n={render:o,staticRenderFns:i};t.a=n},1102:function(e,t,a){"use strict";function o(e){a(1103)}var i=a(1105),n=a(1106),s=a(0),r=o,l=s(i.a,n.a,!1,r,null,null);t.a=l.exports},1103:function(e,t,a){var o=a(1104);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(887)("fbf87e28",o,!0)},1104:function(e,t,a){t=e.exports=a(886)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Download.vue",sourceRoot:""}])},1105:function(e,t,a){"use strict";t.a={props:["data"],data:function(){return{datasource:this.data,base:this.$appUri.BaseURL,currentUser:JSON.parse(localStorage.getItem("LoggedOnUser")).UserId}},methods:{},created:function(){}}},1106:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"download"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:this.datasource,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"STT",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FileName",label:"Tên file"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{attrs:{href:e.base+"Download.ashx?Id="+t.row.Id,target:"_blank"}},[e._v(e._s(t.row.FileName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"CreatedByName",label:"Người Tạo"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FileExtension",label:"Loại"}}),e._v(" "),a("el-table-column",{attrs:{label:"Dung lượng"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(parseFloat(t.row.FileSize/1024e3).toFixed(2))+" MB\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Hành động"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{attrs:{href:e.base+"Download.ashx?Id="+t.row.Id,target:"_blank"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"}})],1)]}}])})],1)],1)},i=[],n={render:o,staticRenderFns:i};t.a=n},1107:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animated fadeIn document-list"},[e.$isMobileDevice&&!e.$isMobile.iPad()?e._e():a("div",{staticClass:"page-header mb-2"},[a("div",{staticClass:"title-box py-1 px-3"},[a("div",{staticClass:"row"},[e._m(0,!1,!1),e._v(" "),a("div",{staticClass:"col text-right pr-0"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Thêm tài liệu",placement:"top"}},[a("router-link",{staticClass:"el-button el-button--mini",attrs:{to:"dynamic/knowhow-add-new-document"}},[a("i",{staticClass:"el-icon-plus"})])],1),e._v(" "),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.Filter",modifiers:{Filter:!0}}],staticClass:"btn btn-link "},[a("i",{staticClass:"fa fa-filter fa-lg"})])],1)])])]),e._v(" "),a("div",{class:(e.$isMobileDevice?"":"row")+" my-row"},[a("div",{staticClass:"col-md-3 p-0 border-box"},[a("div",{staticClass:"my-header d-md-none d-lg-none d-xl-none"},[a("el-row",{staticStyle:{width:"100%"}},[a("el-col",{attrs:{span:12}},[a("span",[a("i",{staticClass:"fa fa-folder-o fa-lg pr-1"}),e._v("Tài liệu")])]),e._v(" "),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("router-link",{attrs:{to:"dynamic/knowhow-add-new-document"}},[a("i",{staticClass:"fa fa-plus fa-lg pr-1"})]),e._v(" "),a("i",{directives:[{name:"b-modal",rawName:"v-b-modal.Filter",modifiers:{Filter:!0}}],staticClass:"fa fa-filter fa-lg pr-1"}),e._v(" "),a("span",{staticClass:"pr-1",on:{click:function(t){e.isCollapse=!e.isCollapse}}},[e.isCollapse?e._e():a("i",{staticClass:"fa fa-toggle-down fa-lg"}),e._v(" "),e.isCollapse?a("i",{staticClass:"fa fa-toggle-right fa-lg"}):e._e()])],1)],1)],1),e._v(" "),a("DocumentTree",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}],attrs:{datasource:e.treeData}})],1),e._v(" "),a("div",{staticClass:"col-md-9"},[a("el-container",{staticClass:"border-box bg-white"},[a("el-main",{staticClass:"p-0"},[a("data-tables",{attrs:{data:e.tableData,"search-def":e.searchDef,"pagination-def":e.paginationDef}},[a("el-table-column",{attrs:{label:"Công cụ",sortable:"custom",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"row pl-1"},e._l(e.listButtons,function(o,i){return t.row.btnLst[o.Code]?a("div",{key:i},["Redirect"==o.ButtonType||"Popup"==o.ButtonType?a("router-link",{staticClass:"btn btn-link p-0 pr-1",attrs:{to:e.$Utils.expressionToString(t.row,o.Redirect),id:"exButton"+i+t.row.Id}},[a("i",{class:o.Icon,attrs:{"aria-hidden":"true"}}),e._v(" "),a("b-tooltip",{attrs:{target:"exButton"+i+t.row.Id,placement:"bottom"}},[e._v("\n                        "+e._s(o.Description?o.Description:o.Caption)+"\n                      ")])],1):e._e(),e._v(" "),"Redirect"!=o.ButtonType&&"Popup"!=o.ButtonType?a("b-button",{staticClass:"p-0 pr-1",attrs:{id:"exButton"+i+t.row.Id,variant:"link","aria-label":""},on:{click:function(a){e.onButtonClick(i,t.row)}}},[a("i",{class:o.Icon,attrs:{"aria-hidden":"true"}}),e._v(" "),a("b-tooltip",{attrs:{target:"exButton"+i+t.row.Id,placement:"bottom"}},[e._v("\n                        "+e._s(o.Description?o.Description:o.Caption)+"\n                      ")])],1):e._e()],1):e._e()}))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Tiêu đề",sortable:"custom",prop:"Name"}}),e._v(" "),e._l(e.titles,function(e){return a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,sortable:"custom",width:"90"}})})],2)],1)],1)],1)]),e._v(" "),a("b-modal",{ref:"Filter",attrs:{id:"Filter",title:"Bộ lọc","header-bg-variant":"primary","hide-footer":""}},[[a("el-form",{attrs:{"label-position":"top"}},[a("el-form-item",{staticClass:"text-center"},[a("el-button",{on:{click:e.searchList}},[e._v("Tìm kiếm")]),e._v(" "),a("el-button",{on:{click:function(t){e.clearInput()}}},[e._v("Xóa trắng")])],1),e._v(" "),a("el-form-item",{attrs:{label:"Từ khóa"}},[a("el-input",{attrs:{placeholder:"Nhập từ khóa"},model:{value:e.form.Keyword,callback:function(t){e.$set(e.form,"Keyword",t)},expression:"form.Keyword"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"Ngày tạo"}},[a("el-date-picker",{staticStyle:{"max-width":"100%"},attrs:{type:"daterange","popper-class":e.$isMobileDevice?"MobileDateRange":"",placeholder:"Ngày tạo"},model:{value:e.form.Created,callback:function(t){e.$set(e.form,"Created",t)},expression:"form.Created"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"Ngày phát hành"}},[a("el-date-picker",{staticStyle:{"max-width":"100%"},attrs:{"popper-class":e.$isMobileDevice?"MobileDateRange":"",type:"daterange",placeholder:"Ngày phát hành"},model:{value:e.form.PublishedDate,callback:function(t){e.$set(e.form,"PublishedDate",t)},expression:"form.PublishedDate"}})],1)],1)]],2)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h5",{staticClass:"col m-auto"},[a("i",{staticClass:"fa fa-folder-o"}),a("span",[e._v("  Tài liệu")])])}],n={render:o,staticRenderFns:i};t.a=n},909:function(e,t,a){"use strict";function o(e){a(1089)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1091),n=a(1107),s=a(0),r=o,l=s(i.a,n.a,!1,r,null,null);t.default=l.exports}});
//# sourceMappingURL=5.55cdd661e22aa5dcd389.js.map