webpackJsonp([1],[,,function(e,t,n){"use strict";var s=n(3),r=n(67),a=n(62),c=n.n(a),o=n(60),l=n.n(o);s.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Hello",component:c.a},{path:"/board/:cells",name:"Board",component:l.a}]})},,,,,,function(e,t,n){"use strict";function s(e){var t=0,n=0,s=null;for(t=e.length-1;t>0;t-=1)n=Math.floor(Math.random()*(t+1)),s=e[t],e[t]=e[n],e[n]=s}var r,a=n(26),c=n.n(a),o=n(3),l=n(16),i=n(9);o.a.use(l.b);for(var u=[],d=["gray","red","pink","grape","violet","indigo","blue","cyan","teal","green","lime","yellow","orange"],f=0;f<d.length;f+=1)for(var p=0;p<10;p+=1)u.push("--oc-"+d[f]+"-"+p);var v=function(e,t){(0,e.commit)(i.a,t)},m=function(e,t){(0,e.commit)(i.c,t)},_={updateUserType:v,updateSelectedCells:m},h={userType:null,cells:[],selectedCells:[],colors:[]},C={colors:function(){return h.colors},userType:function(){return h.userType},cells:function(){return h.cells},selectedCells:function(){return h.selectedCells}},g=(r={},c()(r,i.c,function(e,t){var n=t.cells;e.selectedCells=n}),c()(r,i.a,function(e,t){var n=t.userType;e.userType=n}),c()(r,i.b,function(e,t){var n=t.numCells;e.cells=new Array(n),s(u);var r=u.slice(0,n/2);r=r.concat(r.slice()),s(r),e.colors=r}),r);t.a=new l.b.Store({state:h,actions:_,getters:C,mutations:g})},function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a});var s="UPDATE_NUM_CELLS",r="USER_TYPE",a="SELECTED_CELLS"},,,,,,,,function(e,t,n){n(58);var s=n(1)(n(20),n(65),null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),r=n(17),a=n.n(r),c=n(2);s.a.config.productionTip=!1,new s.a({el:"#app",router:c.a,template:"<App/>",components:{App:a.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"ROOKIE",function(){return s}),n.d(t,"REGULAR",function(){return r}),n.d(t,"PRO",function(){return a}),n.d(t,"GOD",function(){return c});var s=10,r=20,a=50,c=200},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(55),r=(n.n(s),n(56));n.n(r);t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(27),r=n.n(s),a=n(16),c=n(2),o=n(8),l=n(9),i=n(61),u=n.n(i);t.default={name:"board",router:c.a,store:o.a,components:{Cell:u.a},data:function(){return{colors:null}},created:function(){var e=parseInt(this.$route.params.cells,10);o.a.commit(l.a,{userType:e}),o.a.commit(l.b,{numCells:e}),this.colors=o.a.getters.colors},methods:{goHome:function(){c.a.push("/")},getColor:function(e){return this.colors[e]},select:function(e){var t=this.selectedCells.concat([e.idx]);o.a.commit(l.c,{cells:t})}},computed:r()({},n.i(a.a)(["cells","selectedCells"]),{cellSize:function(){switch(this.cells.length){case 20:return"w-10";case 50:return"w4";case 200:return"w3";default:return"w-20"}}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"cell",props:["color","idx","size","select"],computed:{getColor:function(){return"background-color: var("+this.color+");"}},methods:{clickHandler:function(){this.select(this)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),r=n(8),a=n(19);t.default={name:"hello",router:s.a,store:r.a,methods:{goBoard:function(e){s.a.push("/board/"+e)}},data:function(){return{UserTypes:a}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){var s=n(1)(n(21),n(64),null,null);e.exports=s.exports},function(e,t,n){n(57);var s=n(1)(n(22),n(63),"data-v-361a0ddc",null);e.exports=s.exports},function(e,t,n){n(59);var s=n(1)(n(23),n(66),"data-v-75f11bc8",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{staticClass:"fl ma0 pa0 ba",class:e.size,style:e.getColor,on:{click:function(t){t.stopPropagation(),e.clickHandler()}}},[e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aspect-ratio aspect-ratio--1x1"},[n("h1",{staticClass:"ma0 aspect-ratio--object"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 pa3"},[n("div",{staticClass:"w-100 dt near-black bg-black-10 h2"},[n("div",{staticClass:"w-20 v-mid dtc ph3"},[e._v("P1")]),e._v(" "),n("div",{staticClass:"w-60 v-mid dtc ph3 tc pointer",on:{click:function(t){e.goHome()}}},[e._v("Pairs")]),e._v(" "),n("div",{staticClass:"w-20 v-mid dtc ph3 tr"},[e._v("P2")])]),e._v(" "),n("div",{staticClass:"w-100 db"},[n("div",{staticClass:"tc"},[n("h1",{staticClass:"f2 mv1 near-black normal ttu"},[e._v("Find 2 cells with the same color "+e._s(e.selectedCells))]),e._v(" "),n("ul",{staticClass:"list w-100 ma0 pa0 cf"},e._l(e.cells,function(t,s){return n("Cell",{key:s,class:{selected:-1!==e.selectedCells.indexOf(s)},attrs:{select:e.select,idx:s,color:e.getColor(s),size:e.cellSize}})}))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sans-serif near-white",attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tc w-100"},[n("div",{staticClass:"vh-100 w-100 dt"},[n("div",{staticClass:"v-mid dtc tc"},[n("h1",{staticClass:"f-headline ma0 near-black"},[e._v("Pairs")]),e._v(" "),n("p",{staticClass:"f4 black-40 ma0 mb4 near-black"},[e._v("Memory game")]),e._v(" "),n("a",{staticClass:"f3 red mt4 ph3 pointer",on:{click:function(t){t.stopPropagation(),e.goBoard(e.UserTypes.ROOKIE)}}},[e._v("rookie")]),e._v(" "),n("a",{staticClass:"f3 red mt4 ph3 pointer",on:{click:function(t){t.stopPropagation(),e.goBoard(e.UserTypes.REGULAR)}}},[e._v("normal")]),e._v(" "),n("a",{staticClass:"f3 red mt4 ph3 pointer",on:{click:function(t){t.stopPropagation(),e.goBoard(e.UserTypes.PRO)}}},[e._v("pro")]),e._v(" "),n("a",{staticClass:"f3 red mt4 ph3 pointer",on:{click:function(t){t.stopPropagation(),e.goBoard(e.UserTypes.GOD)}}},[e._v("god")])])])])},staticRenderFns:[]}}],[18]);
//# sourceMappingURL=app.f8b1f50d9dceedc0031c.js.map