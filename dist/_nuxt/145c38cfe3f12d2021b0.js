(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{302:function(t,e,n){var content=n(366);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("d85078fe",content,!0,{sourceMap:!1})},365:function(t,e,n){"use strict";var o=n(302);n.n(o).a},366:function(t,e,n){(e=n(10)(!1)).push([t.i,".being[data-v-9d6ee074]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}",""]),t.exports=e},398:function(t,e,n){"use strict";n.r(e);var o=n(310),r=n.n(o),l={name:"yangdo",date:(new Date).toISOString().substr(0,10),data:function(){return{text:"text",registration:"yes",asset_type:"house",house_count:"one",modal:!1,menu:!1,menu2:!1,dialog:!1,hidden:!1,date_buy:"",price_buy:"",date_transfer:"",price_transfer:"",price_etc:""}},methods:{yangTest:function(){r.a.post("https://www.ddhouse.co.kr/api/v1/public/calculator/tax-transfer",{headers:{"Content-Type":"application/json;charset=UTF-8"}},{registration:this.registration,asset_type:this.asset_type,house_count:this.house_count,date_buy:this.date_buy,price_buy:this.price_buy,date_transfer:this.date_transfer,price_transfer:this.price_transfer,price_etc:this.price_etc}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},c=(n(365),n(50)),v=n(72),d=n.n(v),_=n(127),f=n(288),h=n(291),y=n(270),m=n(286),x=n(389),k=n(387),w=n(325),C=n(111),V=n(326),S=n(69),T=n(41),O=n(400),j=n(267),D=n(309),I=n(390),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"column",row:"row"}},[n("v-flex",{attrs:{wrap:"wrap"}},[n("v-dialog",{attrs:{width:"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{absolute:"absolute",dark:"dark",fab:"fab",right:"right",small:"small",color:"orange"}},o),[n("v-icon",{attrs:{small:"small"}},[t._v("mdi-help")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("일시적 1가구 2주택 조건")])]),t._v(" "),n("v-card-text",[t._v("기존 주택을 새 주택 구입일로부터 3년 이내 (일부 특정 경우에는 5년 이내)에 팔아야 일시적 1가구 2주택 조건을 만족합니다.\n                ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"caption",attrs:{color:"green darken-1",text:"text"},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("p",{staticClass:"font-weight-black"},[t._v("대상물의 등기 여부")]),t._v(" "),n("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap",width:"100%"},attrs:{mjws:"m",tile:"tile",color:"blue",group:"group"},model:{value:t.registration,callback:function(e){t.registration=e},expression:"registration"}},[n("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{value:"yes",height:"40px"}},[t._v("등기")]),t._v(" "),n("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{value:"no",height:"40px"}},[t._v("미등기")])],1)],1)],1),t._v(" "),"yes"===t.registration?n("div",[n("v-list-item",[n("v-list-item-content",[n("p",{staticClass:"font-weight-black"},[t._v("대상물 구분")]),t._v(" "),n("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap",width:"100%"},attrs:{tile:"tile",color:"blue",group:"group"},model:{value:t.asset_type,callback:function(e){t.asset_type=e},expression:"asset_type"}},[n("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{value:"house",height:"40px"}},[t._v("주택")]),t._v(" "),n("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{value:"land",height:"40px"}},[t._v("비사업용토지")]),t._v(" "),n("v-btn",{staticClass:"caption",staticStyle:{width:"90%"},attrs:{asset_type:"etc",value:"b3",height:"40px"}},[t._v("기타 부동산(사업용 토지, 분양권 등)")])],1)],1)],1),t._v(" "),"house"===t.asset_type?n("div",[n("v-list-item",[n("v-list-item-content",[n("p",{staticClass:"font-weight-black"},[t._v("일시적 1가구 2주택 조건")]),t._v(" "),n("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap",width:"100%"},attrs:{tile:"tile",color:"blue",group:"group"},model:{value:t.house_count,callback:function(e){t.house_count=e},expression:"house_count"}},[n("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{value:"one",height:"40px"}},[t._v("1주택자(일시적2주택자)")]),t._v(" "),n("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{value:"two",height:"40px"}},[t._v("2주택자이상")])],1)],1)],1)],1):t._e()],1):t._e(),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("p",{staticClass:"font-weight-black"},[t._v("금액")]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date_buy,transition:"scale-transition","offset-y":"offset-y","min-width":"290px"},on:{"update:returnValue":function(e){t.date_buy=e},"update:return-value":function(e){t.date_buy=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({staticClass:"caption",attrs:{label:"양도일선택",readonly:"readonly"},model:{value:t.date_buy,callback:function(e){t.date_buy=e},expression:"date_buy"}},o))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"no-title",scrollable:"scrollable"},model:{value:t.date_buy,callback:function(e){t.date_buy=e},expression:"date_buy"}},[n("v-btn",{staticClass:"caption",attrs:{text:"text",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{staticClass:"caption",attrs:{text:"text",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date_buy)}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{staticClass:"caption",attrs:{placeholder:"양도가액",suffix:"만원"},model:{value:t.price_buy,callback:function(e){t.price_buy=e},expression:"price_buy"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"return-value":t.date_transfer,transition:"scale-transition","offset-y":"offset-y","min-width":"290px"},on:{"update:returnValue":function(e){t.date_transfer=e},"update:return-value":function(e){t.date_transfer=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({staticClass:"caption date_transfer",attrs:{label:"취득일선택",readonly:"readonly"},model:{value:t.date_transfer,callback:function(e){t.date_transfer=e},expression:"date_transfer"}},o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"no-title",scrollable:"scrollable"},model:{value:t.date_transfer,callback:function(e){t.date_transfer=e},expression:"date_transfer"}},[n("v-btn",{staticClass:"caption",attrs:{text:"text",color:"primary"},on:{click:function(e){t.menu2=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{staticClass:"caption",attrs:{text:"text",color:"primary"},on:{click:function(e){return t.$refs.menu2.save(t.date_transfer)}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{staticClass:"caption",attrs:{placeholder:"취득가액",suffix:"만원"},model:{value:t.price_transfer,callback:function(e){t.price_transfer=e},expression:"price_transfer"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-subheader",{staticClass:"caption",attrs:{color:"green darken-4"}},[t._v("소요경비")])],1),t._v(" "),n("v-col",{attrs:{cols:"7"}},[n("v-text-field",{staticClass:"caption",attrs:{placeholder:"소요경비 입력",suffix:"만원"},model:{value:t.price_etc,callback:function(e){t.price_etc=e},expression:"price_etc"}})],1),t._v(" "),n("div",{staticClass:"being"},[n("v-btn",{attrs:{"max-width":"80%","min-width":"80%",color:"#2D9527",dark:"dark"},on:{click:t.yangTest}},[t._v("계산하기")])],1)],1)],1)],1)],1)}),[],!1,null,"9d6ee074",null);e.default=component.exports;d()(component,{VBtn:_.a,VBtnToggle:f.a,VCard:h.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:m.a,VDatePicker:x.a,VDialog:k.a,VFlex:w.a,VIcon:C.a,VLayout:V.a,VListItem:S.a,VListItemContent:T.a,VMenu:O.a,VSpacer:j.a,VSubheader:D.a,VTextField:I.a})}}]);