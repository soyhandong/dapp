(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{274:function(t,e,o){var content=o(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("01907af4",content,!0,{sourceMap:!1})},275:function(t,e,o){(e=o(10)(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#424242;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:-webkit-inline-box;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-btn-toggle>.v-btn.v-btn:not(:first-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=e},288:function(t,e,o){"use strict";o(12),o(9),o(6),o(4),o(8);var n=o(2),r=(o(274),o(75)),l=r.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r.a.options.computed.classes.call(this)}},methods:{genData:r.a.options.methods.genData}}),c=o(16),v=o(7);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(l,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return h({},l.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,h({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},290:function(t,e,o){var content=o(322);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("d321247e",content,!0,{sourceMap:!1})},321:function(t,e,o){"use strict";var n=o(290);o.n(n).a},322:function(t,e,o){(e=o(10)(!1)).push([t.i,".being[data-v-0f6020b2]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}",""]),t.exports=e},391:function(t,e,o){"use strict";o.r(e);var n={name:"chwideug",data:function(){return{text1:"a1",text2:"b1",text3:"c1",text4:"d1",dialog:!1,asset_type:null,kind:null,area:null,price:null,farm_type:null}}},r=(o(321),o(50)),l=o(72),c=o.n(l),v=o(127),d=o(288),h=o(291),f=o(270),x=o(286),m=o(387),_=o(325),w=o(111),y=o(326),k=o(69),C=o(41),O=o(267),S=o(309),V=o(390),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{column:"column",row:"row"}},[o("v-flex",{attrs:{wrap:"wrap"}},[o("v-dialog",{attrs:{width:"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{absolute:"absolute",color:"orange",dark:"dark",fab:"fab",right:"right",small:"small"}},n),[o("v-icon",{attrs:{small:"small"}},[t._v("mdi-help")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("취득가액 산정방법")])]),t._v(" "),o("v-card-text",[t._v("・ 매매, 분양, 경매 등 개인간의 유상거래일 때는 신고가액 (실제 거래가격을 의미하며, 신고를 하지 않거나 신고 금액이\n                    시가표준액에 미달 또는 신고 가액 표시가 없는 경우 시가표준액으로 계산함)\n                    "),o("br"),t._v(" "),o("br"),t._v("・ 상속, 증여 등 무상거래일 때는 시가표준액\n                            "),o("br"),t._v(" "),o("br"),t._v("・ 국가, 법인 등에 의해 취득가격이 증명되는 거래일 때는 취득가격\n                                    "),o("br"),t._v(" "),o("br"),t._v("※ 시가 표준액이란, 주택은 '개별 주택 공시가격', 주택 이외 건물은 '지자체장이 결정한 가액', 토지는 '개별공시지가'를 의미합니다\n                                        ")]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"caption",attrs:{color:"blue darken-1",text:"text"},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("p",{staticClass:"font-weight-black"},[t._v("대상물 구분")]),t._v(" "),o("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap",width:"100%"},attrs:{tile:"tile",color:"blue",group:"group"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}},[o("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{asset_type:"house",value:"a1",height:"40px"}},[t._v("주택")]),t._v(" "),o("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{asset_type:"land",value:"a2",height:"40px"}},[t._v("농지")]),t._v(" "),o("v-btn",{staticClass:"caption",staticStyle:{width:"90%"},attrs:{asset_type:"farm",value:"a3",height:"40px"}},[t._v("토지,건물,오피스텔")])],1)],1)],1),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("p",{staticClass:"font-weight-black"},[t._v("취득 구분")]),t._v(" "),o("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap",width:"100%"},attrs:{tile:"tile",color:"blue",group:"group"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}},[o("v-btn",{staticClass:"caption",staticStyle:{width:"22.5%"},attrs:{kind:"meme",value:"b1",height:"40px"}},[t._v("매매")]),t._v(" "),o("v-btn",{staticClass:"caption",staticStyle:{width:"22.5%"},attrs:{kind:"gift",value:"b2",height:"40px"}},[t._v("증여")]),t._v(" "),o("v-btn",{staticClass:"caption",staticStyle:{width:"22.5%"},attrs:{kind:"inherit",value:"b3",height:"40px"}},[t._v("상속")]),t._v(" "),"a1"==t.text1||"a3"==t.text1?o("v-btn",{staticClass:"caption",staticStyle:{width:"22.5%"},attrs:{kind:"build",value:"b4",height:"40px"}},[t._v("신축")]):t._e()],1)],1)],1),t._v(" "),"a1"==t.text1&&"b1"==t.text2?o("div",[o("v-list-item",[o("v-list-item-content",[o("p",{staticClass:"font-weight-black"},[t._v("면적")]),t._v(" "),o("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap",width:"100%"},attrs:{tile:"tile",color:"blue",group:"group"},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}},[o("v-btn",{staticClass:"caption",staticStyle:{width:"90%"},attrs:{area:"small",value:"c1",height:"40px"}},[t._v("85m^2 이하(읍, 면지역은 100m^2)")]),t._v(" "),o("v-btn",{staticClass:"caption",staticStyle:{width:"90%"},attrs:{area:"large",value:"c2",height:"40px"}},[t._v("85m^2 초과(읍, 면지역은 100m^2)")])],1)],1)],1)],1):t._e(),t._v(" "),"a2"==t.text1&&"b1"==t.text2?o("div",[o("v-list-item",[o("v-list-item-content",[o("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap",width:"100%"},attrs:{tile:"tile",color:"blue",group:"group"},model:{value:t.text4,callback:function(e){t.text4=e},expression:"text4"}},[o("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{farm_type:"new",value:"d1",height:"40px"}},[t._v("신규")]),t._v(" "),o("v-btn",{staticClass:"caption",staticStyle:{width:"45%"},attrs:{farm_type:"farming",value:"d2",height:"40px"}},[t._v("2년 이상 자경")])],1)],1)],1)],1):t._e(),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("p",{staticClass:"font-weight-black"},[t._v("취득가액")]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-subheader",{staticClass:"caption",attrs:{color:"blue darken-4"}},[t._v("취득가액")])],1),t._v(" "),o("v-col",{attrs:{cols:"7"}},[o("v-text-field",{staticClass:"caption",attrs:{price:"price",placeholder:"취득가액 입력",suffix:"만원"}})],1),t._v(" "),o("div",{staticClass:"being"},[o("v-btn",{attrs:{"max-width":"80%","min-width":"80%",color:"#2D9527",dark:"dark"}},[t._v("계산하기")])],1)],1)],1)],1)],1)}),[],!1,null,"0f6020b2",null);e.default=component.exports;c()(component,{VBtn:v.a,VBtnToggle:d.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:x.a,VDialog:m.a,VFlex:_.a,VIcon:w.a,VLayout:y.a,VListItem:k.a,VListItemContent:C.a,VSpacer:O.a,VSubheader:S.a,VTextField:V.a})}}]);