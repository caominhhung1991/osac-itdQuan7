(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{1043:function(e,n,t){"use strict";t.r(n);var i=t(3),a=t(16),o=t(14),r=t(30),d=t(0),u=t.n(d),l=t(1046),c=t(985),s=t(704),h=t(115),v=t(302),m=t(332),f=t(27).b.id,g=function(e){var n=e.shiftData,t=e.isHideStyle,g=e.onHideDuTru,I=e.isView,C=e.userConfig,D=Object(s.a)(),b=C.yearId,p=C.weekId,T=C.customerId,M=null===n||void 0===n?void 0:n.id,y=Object(s.b)((function(e){return e.thucDonDuTruSetting})),S=y.cauHinhDuTrus,N=y.recipeKinds,O=y.isLoading,P=Object(d.useState)(!0),A=Object(r.a)(P,2),E=A[0],_=A[1],j=function(e,n){if(I)return null;D(Object(v.g)(f,b,p,M,n,e))},w=u.a.useMemo((function(){return(new c.a).getTableColumns({isView:I,yearId:b,weekId:p,onDelete:j,visibleCost:E,shiftData:n,recipeKinds:N})}),[b,I,p,E,n,N]),k=u.a.useMemo((function(){return S&&f&&T?h.a.reduce((function(e,n){var t,i,a=n.id,r=null===S||void 0===S||null===(t=S[T])||void 0===t||null===(i=t[M])||void 0===i?void 0:i[a],d=Object(m.a)(a),u=((null===r||void 0===r?void 0:r.values)||[]).map((function(e){return{id:e,name:e,isMonPhu:d}}));return[].concat(Object(o.a)(e),Object(o.a)(u))}),[]):[]}),[f,T,S]);return u.a.useEffect((function(){var e=Object(a.a)({},M,k);D(Object(v.i)(e))}),[k]),u.a.createElement("div",{className:"duTruBepChuyenDiAntTable"},u.a.createElement("div",{className:"display-4 mt-1 kind-title"},u.a.createElement("div",{className:"hoverClass",onClick:function(){return g(null===n||void 0===n?void 0:n.id)}},null===n||void 0===n?void 0:n.name),u.a.createElement("button",{className:"ml-2 btn btn-sm btn-warning",onClick:function(){return _(!E)}},E?"\u1ea8n":"Hi\u1ec7n"," cost")),u.a.createElement("div",{className:"mt-2",style:Object(i.a)({position:"relative"},t)},u.a.createElement(l.a,{rowKey:"id",bordered:!0,scroll:{x:1300},columns:w,dataSource:k,loading:O,pagination:!1})))};g.defaultProps={userConfig:{}},n.default=g},943:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}));var i={ID:"id",MODAL_ID:"modalId",CUSTOMER_GROUP_ID:"customerGroupId",COSO_ID:"coSoId",NHANVIEN_ID:"nhanvienId",VIEW_STATUS:"pagestatus",ADD_NHANVIEN:"addNhanVien",BAO_CAO_KIND:"baoCaoKind",REPORT_ID:"reportId",OPEN_MODAL:"openModal",CANTIN_ID:"cantinId",CUSTOMER_ID:"customerId",VIEW_KIND_ID:"viewKindId",RECIPE_ID:"recipeId",IS_MON_PHU:"isMonPhu",INGRE_ID:"ingreID",VENDOR_ID:"nhaCungCapId",KIND_ID:"kindId",DAY:"day",DAY_ID:"dayId",SHIFT:"shift",SHIFT_ID:"shiftId",BOPHAN_ID:"boPhanId",WEEK_ID:"weekId",MONTH_ID:"monthId",YEAR_ID:"yearId",KETOAN_DRAWER_ID:"keToanDrawerId",KHUVUC_ID:"khuVucId",LOAITAISAN_ID:"loaiTaiSanId",TAISAN_ID:"taiSanId"},a={editNhanvien:{id:"editNhanvien",name:"C\u1eadp nh\u1eadt Nh\xe2n Vi\xean"},addNhanvien:{id:"addNhanvien",name:"Th\xeam Nh\xe2n Vi\xean"},viewNhanvien:{id:"viewNhanvien",name:"Xem Nh\xe2n Vi\xean"},themBaoCao:{id:"themBaoCao",name:"Th\xeam b\xe1o c\xe1o"},addRecipe:{id:"addRecipe",name:"Th\xeam m\xf3n",getTitle:function(){return"Th\xeam M\xf3n M\u1edbi"}},editRecipe:{id:"editRecipe",name:"C\u1eadp nh\u1eadt m\xf3n",getTitle:function(e){return"Update ".concat(String(e).toUpperCase())}},addIngre:{id:"addIngre",name:"Th\xeam Nguy\xean Li\u1ec7u",getTitle:function(e){return"Update ".concat(String(e).toUpperCase())}},editIngre:{id:"editIngre",name:"Update Nguy\xean Li\u1ec7u",getTitle:function(e){return"Update ".concat(String(e).toUpperCase())}},vendorModal:{id:"vendorModal",name:"Nh\xe0 Cung C\u1ea5p"},selectRecipe:{id:"selectRecipe",name:"Ch\u1ecdn",getTitle:function(e){return"Ch\u1ecdn ".concat(e)}},configCantin:{id:"configCantin",name:"Th\xf4ng tin c\u0103n tin"},addChiPhiPhatSinh:{id:"addChiPhiPhatSinh",name:"Chi Ph\xed Ph\xe1t Sinh"},openDutrus:{id:"openDutrus",name:"M\u1edf D\u1ef1 Tr\xf9"},addSoPhanAn:{id:"addSoPhanAn",name:"Th\xeam S\u1ed1 Ph\u1ea7n \u0102n"},addExtraSoPhanAn:{id:"addExtraSoPhanAn",name:"Th\xeam S\u1ed1 Ph\u1ea7n \u0102n"},addCommentByRecipe:{id:"addCommentByRecipe",name:"Th\xeam Ghi Ch\xfa Cho B\u1ebfp"},addCommentByShift:{id:"addCommentByShift",name:"Th\xeam Ghi Ch\xfa Cho T\u1eebng Ca"},openChiPhiCoDinhModal:{id:"openChiPhiCoDinhModal",name:"Chi Ph\xed C\u1ed1 \u0110\u1ecbnh"},addNgayCong:{id:"addNgayCong",name:"Th\xeam ng\xe0y c\xf4ng"},tongHopLuong:{id:"tongHopLuong",name:"T\u1ed5ng h\u1ee3p l\u01b0\u01a1ng"},confirmSave:{id:"confirmSave",name:"X\xe1c nh\u1eadn l\u01b0u"},addNhanVienTangCa:{id:"addNhanVienTangCa",name:"Th\xeam Nh\xe2n Vi\xean T\u0103ng Ca"},viewChiTietChamCong:{id:"viewChiTietChamCong",name:"Xem Chi Ti\u1ebft Ch\u1ea5m C\xf4ng"}}},957:function(e,n,t){"use strict";var i=t(3),a=t(49),o=t(50),r=t(83),d=t(82),u=(t(0),t(42)),l=t(84),c=(t(319),t(115)),s=function(e){Object(r.a)(t,e);var n=Object(d.a)(t);function t(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)(this,t),(e=n.call(this,{},{},{})).canTinId=i.canTinId,e.shiftArray=Object(u.isArray)(i.shiftArray)?i.shiftArray:[],e.shiftArrayDuTru=Object(u.isArray)(i.shiftArrayDuTru)?i.shiftArrayDuTru:[],e.caBangCaFields=Object(u.isArray)(i.caBangCaFields)?i.caBangCaFields:[],e.exportDuTru="function"===typeof i.exportDuTru?i.exportDuTru:u.noop,e.mealPrice=0,e.chiPhiCoDinh=[],e}return Object(o.a)(t,null,[{key:"getSoMonWithConditon",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.dayDuTruData,a=t.dayThucDonData,o=t.condition;if(o){var r,d=(null===e||void 0===e||null===(r=e[n])||void 0===r?void 0:r.values)||[],u=d.reduce((function(e,n){var t,r,d,u=null===a||void 0===a||null===(t=a["".concat(n)])||void 0===t?void 0:t.recipeId;if(!u)return e;var l=((null===i||void 0===i||null===(r=i[n])||void 0===r?void 0:r.soPhanAn)||0)+((null===i||void 0===i||null===(d=i[n])||void 0===d?void 0:d.soPhanThem)||0);return u.indexOf(o)>-1?e+l:e}),0);return u}}},{key:"getSoMon",value:function(e,n){var t,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.dayDuTruData,o=(null===e||void 0===e||null===(t=e[n])||void 0===t?void 0:t.values)||[],r=o.reduce((function(e,n){var t,i;return e+(((null===a||void 0===a||null===(t=a[n])||void 0===t?void 0:t.soPhanAn)||0)+((null===a||void 0===a||null===(i=a[n])||void 0===i?void 0:i.soPhanThem)||0))}),0);return r}},{key:"getSoMonMan",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c.b.monManConfig.id,a=t.getSoMon(e,i,n),o=n.soMonMan,r=void 0===o?2:o;return Math.round(a/r)}},{key:"getSoMonMan_CoCanh",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=c.b.monManConfig.id,o=t.getSoMonWithConditon(e,a,Object(i.a)(Object(i.a)({},n),{},{condition:"canh"}));return o}},{key:"getSoMonCT_CoCom",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=c.b.monCTConfig.id,o=t.getSoMonWithConditon(e,a,Object(i.a)(Object(i.a)({},n),{},{condition:"c\u01a1m"}));return o}},{key:"getSoMonNuocChay",value:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.dayDuTruData,a=t.dayThucDonData,o=t.recipeDatas,r=c.b.vegConfig.id,d=(null===e||void 0===e||null===(n=e[r])||void 0===n?void 0:n.values)||[],u=d.reduce((function(e,n){var t,r,d,u,l=null===a||void 0===a||null===(t=a["".concat(n)])||void 0===t?void 0:t.recipeId;if(!l)return e;var c="M\xf3n n\u01b0\u1edbc chay"===(null===o||void 0===o||null===(r=o[l])||void 0===r?void 0:r.categoryRecipe),s=(null===i||void 0===i||null===(d=i[n])||void 0===d?void 0:d.soPhanAn)||0,h=(null===i||void 0===i||null===(u=i[n])||void 0===u?void 0:u.soPhanThem)||0;return c?e+(s+h):e}),0);return u}},{key:"getSoMonChay",value:function(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=c.b.vegConfig.id,o=t.getSoMon(e,a,i),r=(null===e||void 0===e||null===(n=e[a])||void 0===n?void 0:n.values)||[],d=1===r.length?1:2;return Math.round(o/d)}},{key:"getSoMonCT",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c.b.monCTConfig.id,a=t.getSoMon(e,i,n);return Math.round(a)}},{key:"getSoMonNuoc",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c.b.monNuocConfig.id,a=t.getSoMon(e,i,n);return Math.round(a)}},{key:"getSoMonXao",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.getSoMonMan(e,n),a=t.getSoMonChay(e,n);return i+a}},{key:"getSoMonCanh",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.getSoMonMan(e,n),a=t.getSoMonChay(e,n),o=0,r=0,d=i+a-o+r;return d}},{key:"getSoMonTrangMieng",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.getSoTongPhan(e,n);return Math.round(i)}},{key:"getSoTongPhan",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.getSoMonMan(e,n),a=t.getSoMonChay(e,n),o=t.getSoMonNuoc(e,n),r=t.getSoMonCT(e,n);return i+a+o+r}}]),t}(l.a);n.a=s},985:function(e,n,t){"use strict";var i=t(14),a=t(49),o=t(50),r=t(83),d=t(82),u=t(0),l=t.n(u),c=t(957),s=t(10),h=t(943),v=t(692),m=t(697),f=t(698),g=t(436),I=t(320),C=t(300),D=v.a.TextArea,b={name:{id:"name",name:"Lo\u1ea1i m\xf3n",width:130,fixed:!0,render:function(e,n,t){var i,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(null===a||void 0===a?void 0:a.recipeKinds)||{};return l.a.createElement("strong",{className:"ml-2",style:{color:"blue"}},(null===o||void 0===o||null===(i=o[e])||void 0===i?void 0:i.name)||e)}},loaiMon:{id:"name",name:"Lo\u1ea1i m\xf3n",className:"text-small",width:130,render:function(e){return l.a.createElement("strong",null,e)}},tenMon:{id:"tenMon",name:"T\xean m\xf3n",className:"text-small",width:190,render:function(e,n,t,i){var a=i.shiftId,o=i.coSoId,r=i.customerId,d=i.dayId,u=i.history,c=i.customerGroupId,s=i.isView,v=e,m=n.id;return v?l.a.createElement("div",{style:{color:"#1012ff"},className:"hoverClass font-weight-bold",onClick:function(){if(s)return null;var e=[[h.b.MODAL_ID,h.a.editRecipe.id],[h.b.COSO_ID,o],[h.b.CUSTOMER_ID,r],[h.b.CUSTOMER_GROUP_ID,c],[h.b.RECIPE_ID,v]];Object(C.d)(u,e)}},v):l.a.createElement("div",{className:"hoverClass",onClick:function(){if(s)return null;var e=[[h.b.MODAL_ID,h.a.selectRecipe.id],[h.b.SHIFT_ID,a],[h.b.KIND_ID,m],[h.b.DAY_ID,d],[h.b.RECIPE_ID,v]];Object(C.d)(u,e)}},"--")}},giaMon:{id:"giaMon",name:"Gi\xe1 m\xf3n",className:"text-small",width:80,align:"center",render:function(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i.giaPhanAn,o=l.a.createElement("strong",{className:"text-danger float-right"},l.a.createElement("sub",null,Object(s.f)(e,a),"%")),r=l.a.createElement(m.a,null,l.a.createElement(f.a,{sm:24}," ",o));return e?r:""}},soPhanThem:{id:"soPhanThem",name:"SP th\xeam",className:"text-small",align:"center",width:80,render:function(e,n,t,i){var a=i.isInput,o=i.setIsInput,r=i.shiftId,d=i.onUpdate,u=i.isView,c="soPhanThem",s=n.id;return a.shiftId!==r||a.type!==c||u?l.a.createElement("div",{className:"hoverClass font-weight-bold",onClick:function(){return o({shiftId:r,type:c,recipeKindId:s})}},e||"--"):l.a.createElement(g.a,{tabIndex:t+1,autoFocus:(null===a||void 0===a?void 0:a.recipeKindId)===s,size:"small",step:5,defaultValue:e||"",onBlur:function(e){var n=Number(e.target.value);d(n,{type:c,recipeKindId:s})}})}},soPhanAn:{id:"soPhanAn",name:"SP \u0103n",align:"center",className:"text-small",width:70,render:function(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i.isInput,o=i.setIsInput,r=i.shiftId,d=i.onUpdate,u=i.isView,c="soPhanAn",s=n.id,h=n.loaiMonId,v=new I.a;return v.checkNotAddSoPhanAn(h)?e||"":a.shiftId!==r||a.type!==c||u?l.a.createElement("div",{className:"hoverClass font-weight-bold",onClick:function(){o({shiftId:r,type:c,recipeKindId:s})}},e||"--"):l.a.createElement(g.a,{tabIndex:t+1,autoFocus:(null===a||void 0===a?void 0:a.recipeKindId)===s,size:"small",min:0,step:10,defaultValue:e||"",onBlur:function(e){var n=Number(e.target.value);d(n,{type:c,recipeKindId:s})}})}},thanhTien:{id:"thanhTien",name:"Th\xe0nh ti\u1ec1n",align:"right",className:"text-small",width:90,render:function(e){return e?Object(s.b)(e):""}},ghiChu:{id:"ghiChu",name:"Ghi ch\xfa",width:230,className:"text-small",render:function(e,n,t,i){var a=i.isInput,o=i.setIsInput,r=i.shiftId,d=i.onUpdate,u=i.isView,c=n.id;return a.shiftId!==r||"ghiChu"!==a.type||u?l.a.createElement("div",{className:"hoverClass",onClick:function(){return o({shiftId:r,recipeKindId:c,type:"ghiChu"})}},e||"--"):l.a.createElement(D,{rows:2,tabIndex:t+1,autoFocus:c===a.recipeKindId,size:"small",defaultValue:e||"",style:{width:"100%"},onBlur:function(e){var n=e.target.value;d(n,{type:"ghiChu",recipeKindId:c})}})}}},p=t(65),T=t.n(p),M=(t(835),t(48)),y=t(42),S=t(301),N=t(704),O=Object(u.memo)((function(e){var n,t,i,a,o,r=e.history,d=e.cellId,u=e.isMonPhu,c=e.dayId,v=e.loaiMonId,m=e.onDelete,f=e.visibleCost,g=e.shiftData,I=e.isView,D=e.isAfter,b=Object(N.a)(),p=Object(N.b)((function(e){return e.nguyenLieu})).nguyenLieus,T=Object(N.b)((function(e){return e.recipe})).ingreRecipeData,M=Object(N.b)((function(e){return e.thucDonDuTruSetting})).nhomGiaMonAnData,y=Object(N.b)((function(e){return e.thucDonDuTru})).thucDonDuTruWeek,O=null===M||void 0===M?void 0:M.giaPhanAn,P=null===g||void 0===g?void 0:g.id,A=null===y||void 0===y||null===(n=y[P])||void 0===n||null===(t=n.thucDons)||void 0===t||null===(i=t[c])||void 0===i||null===(a=i.kindIds)||void 0===a||null===(o=a["".concat(v)])||void 0===o?void 0:o.recipeId,E=function(e){e.stopPropagation(),window.confirm("X\xe1c nh\u1eadn x\xf3a ".concat(A))&&m(v,c)},_=l.a.useCallback((function(){var e=(null===T||void 0===T?void 0:T[A])||[];if(0===e.length||!f)return null;var n={nguyenLieus:e},t=b(Object(S.d)(n));return l.a.createElement("span",{className:"cost-style"},"(".concat(Object(s.f)(t,O),"%)"))}),[A,T,O,p,f]);return l.a.createElement("div",{id:d,className:["recipe-style",A?"":"text-center"].join(" "),style:{overflowY:"auto",fontSize:"14px"},onClick:function(){if(D||I)return null;var e=[[h.b.MODAL_ID,h.a.selectRecipe.id],[h.b.SHIFT_ID,P],[h.b.KIND_ID,v],[h.b.DAY_ID,c],[h.b.IS_MON_PHU,u],[h.b.RECIPE_ID,A]];Object(C.d)(r,e)}},_()," ",A||(A?l.a.createElement("span",{className:"text-black-50"},"Thi\u1ebfu ".concat(A)):D?"":"--")," ",I||D?null:A&&l.a.createElement("div",{className:"delete-icon",onClick:E},l.a.createElement("i",{className:"fa fa-close"})))}));O.defaultProps={onDelete:y.noop,visibleCost:!0};var P=Object(M.o)(O),A="Admin",E=function(e){Object(r.a)(t,e);var n=Object(d.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=n.call(this,e)).tableColumns=[b.name],i.duTruItemColumns=[b.loaiMon,b.tenMon,b.giaMon,b.soPhanThem,b.soPhanAn,b.thanhTien,b.ghiChu],i}return Object(o.a)(t,[{key:"getTableColumns",value:function(e){var n=this,t=e.isView,a=e.yearId,o=e.weekId,r=e.onDelete,d=e.visibleCost,u=e.shiftData;if(!o||!a)return[];var c=this.tableColumns.map((function(t){return n.getGeneralFields(t,e)})),h=Array(7).fill(1).reduce((function(e,n,c){var h=n+c,v=Object(s.h)()===A,m=T()(a,"YYYY").week(o).day(n+c),f=m.format("dddd"),g=m.format("DD/MM"),I=T()().format("DD-MM-YYYY")===m.format("DD-MM-YYYY"),C=T()().subtract(1,"day").isAfter(m),D=I?{border:"1px solid lightblue"}:{};v&&(C=!1);var b={id:h,name:"".concat(f," (").concat(g,")"),width:160,align:"center",render:function(e,n,i){var a=n.id,o=n.isMonPhu,c="shift".concat("-",n.id,"-").concat(h);return l.a.createElement("div",{style:D},l.a.createElement(P,{shiftData:u,visibleCost:d,isView:t,isMonPhu:o,cellId:c,index:i,dayId:"".concat(f).toLowerCase(),isAfter:C,loaiMonId:a,onDelete:r}))}};return[].concat(Object(i.a)(e),[b])}),[]).map((function(t){return n.getGeneralFields(t,e)}));return c=[].concat(Object(i.a)(c),Object(i.a)(h))}},{key:"getDuTruItemColumns",value:function(e){var n=this;return this.duTruItemColumns.map((function(t){return n.getGeneralFields(t,e)}))}}]),t}(c.a);n.a=E}}]);