(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{304:function(t,e,l){var content=l(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(78).default)("6f7d5dba",content,!0,{sourceMap:!1})},306:function(t,e,l){"use strict";l(304)},307:function(t,e,l){var r=l(77)(!1);r.push([t.i,".front[data-v-7a74b382]{transform:rotateY(90deg);transition:all .2s ease-in;position:absolute}.flipped .front[data-v-7a74b382]{transform:rotateY(0deg);transition-delay:.2s}.back[data-v-7a74b382]{transition:all .2s ease-in;transition-delay:.2s}.flipped .back[data-v-7a74b382]{transform:rotateY(90deg);transition-delay:0s}",""]),t.exports=r},311:function(t,e,l){"use strict";l.r(e);var r={name:"card",props:["card","active"],methods:{clickHandler:function(){this.active||this.$emit("click",this.card)}}},n=(l(306),l(65)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card xs:h-24 xs:w-20 xs:justify-center xs:m-2 sm:h-26",class:{flipped:t.active},staticStyle:{height:"100%",background:"#2D3092","border-radius":"15px",border:"4px solid white","justify-content":"center","align-items":"center"},on:{click:t.clickHandler}},[l("div",{staticClass:" h-full w-full front flex items-center justify-center"},[l("div",{staticClass:"h-full w-full object-full xs:h-4/5 xs:w-4/5",staticStyle:{width:"100%",height:"100%",color:"white",padding:"10px"}},[l("div",{staticClass:"text-card-game"},[t._v(" "+t._s(t.card.text)+" ")])])]),t._v(" "),l("div",{staticClass:"h-full w-full back",staticStyle:{background:"#2D3092",width:"100%",height:"100%","border-radius":"15px",display:"flex","justify-content":"center","align-items":"center"}},[l("b-img",{staticStyle:{width:"50%",height:"50%"},attrs:{src:t.card.img_svg,rounded:"",alt:"Rounded image"}})],1)])}),[],!1,null,"7a74b382",null);e.default=component.exports}}]);