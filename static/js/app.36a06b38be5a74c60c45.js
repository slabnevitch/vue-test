webpackJsonp([1],{"1B1E":function(t,s){},"7CcK":function(t,s){},AXBN:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tariff"},[e("div",{staticClass:"tariff-top"},[e("div",{staticClass:"tariff-title"},[t._v(t._s(t.tarif.title))]),t._v(" "),e("div",{staticClass:"tariff-price"},[e("span",[t._v("$")]),e("span",{staticClass:"tariff-price__val"},[t._v(t._s(t.tarif.price))]),e("span",[t._v("per month")])])]),t._v(" "),e("div",{staticClass:"tariff-body"},[e("ul",t._l(t.options,function(s){return e("li",[t._v(t._s(s))])}),0)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tariff-bottom"},[s("a",{attrs:{href:"#"}},[this._v("Order Now")])])}]};var a={data:function(){return{tariffs:[{price:"00",title:"Free Trail"},{price:50,title:"Basic"},{price:99,title:"Ultimates"}]}},components:{Tariff:e("VU/8")({props:["tarif"],data:function(){return{options:["30 Free Trail","5 Free Projects","PHP 5 Enabled","24/7 Suports"]}}},n,!1,function(t){e("z8+S")},"data-v-7265de37",null).exports}},r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrapper"},this._l(this.tariffs,function(t){return s("Tariff",{attrs:{tarif:t}})}),1)},staticRenderFns:[]},o=e("VU/8")(a,r,!1,null,null,null).exports,l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"post"},[s("h1",[this._v("№ "+this._s(this.post.id))]),this._v(" "),s("h2",[this._v(this._s(this.post.title))])])},staticRenderFns:[]};e("VU/8")({props:["post"]},l,!1,function(t){e("AXBN")},null,null).exports;var c=e("fZjL"),h=e.n(c),m={name:"slider",props:{items:{type:Number,default:3},margin:{type:Number,default:20},nav:{type:Boolean,default:!1},dots:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},prevNav:{type:String,default:""},nextNav:{type:String,default:""},speed:{type:Number,default:300},timing:{type:String,default:"ease"},offset:{type:Number,default:1},sibling:{type:Boolean,default:!1},responsive:{type:Object,default:{}}},data:function(){return{el:{track:null,slides:null},width:{document:0,container:0,slide:0,track:0},itemActive:0,numItemReal:0,numItemAll:0,breakpoints:[],numDot:0,numDotActive:0,transform:0,settings:{items:this.items,margin:this.margin,nav:this.nav,dots:this.dots,loop:this.loop,prevNav:this.prevNav,nextNav:this.nextNav,speed:this.speed,timing:this.timing,offset:this.offset,responsive:this.responsive},mouseDown:!1,swipeDistance:50,dragDistance:0}},mounted:function(){this.$nextTick(function(){this.el.list=this.$refs.list,this.el.track=this.$refs.track,this.el.slides=this.el.track.children,this.numItemReal=this.el.slides.length;for(var t=0;t<this.numItemReal;++t)this.el.slides[t].classList.add("v_slider__item");if(this.settings.loop){for(var s=this.el.track.getElementsByClassName("v_slider__item"),e=0;e<this.numItemReal;++e){var i=s[e].cloneNode(!0);i.classList.add("cloned"),this.el.track.insertBefore(i,this.el.slides[this.numItemReal-1+e].nextSibling)}for(var n=this.numItemReal;n>0;--n){var a=s[this.numItemReal-1].cloneNode(!0);a.classList.add("cloned"),this.el.track.insertBefore(a,this.el.slides[0])}}this.settings.loop?this.numItemAll=3*this.numItemReal:this.numItemAll=this.numItemReal,window.addEventListener("resize",this.getWidthDocument),"ontouchstart"in window?(this.el.track.addEventListener("touchstart",this.handleMouseDown),this.el.track.addEventListener("touchend",this.handleMouseUp),this.el.track.addEventListener("touchmove",this.handleMouseMove)):(this.el.track.addEventListener("mousedown",this.handleMouseDown),this.el.track.addEventListener("mouseup",this.handleMouseUp),this.el.track.addEventListener("mousemove",this.handleMouseMove)),this.getWidthDocument()})},beforeDestroy:function(){window.removeEventListener("resize",this.getWidthDocument),"ontouchstart"in window?(this.el.track.removeEventListener("touchstart",this.handleMouseDown),this.el.track.removeEventListener("touchend",this.handleMouseUp),this.el.track.removeEventListener("touchmove",this.handleMouseMove)):(this.el.track.removeEventListener("mousedown",this.handleMouseDown),this.el.track.removeEventListener("mouseup",this.handleMouseUp),this.el.track.removeEventListener("mousemove",this.handleMouseMove))},methods:{getWidthDocument:function(){this.width.document=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},getWidth:function(){this.width.container=this.el.list.clientWidth,1==this.settings.items?(this.width.slide=this.width.container,this.width.track=this.width.container*this.numItemAll):(this.width.slide=this.width.container/this.settings.items-(this.settings.items-1)*this.settings.margin/this.settings.items,this.width.track=(this.width.container+this.settings.margin)*this.numItemAll)},reload:function(){var t=this;this.responsive&&(this.breakpoints=h()(this.responsive)),this.breakpoints&&this.breakpoints.forEach(function(s){if(s<=t.width.document)for(var e in t.responsive[s])t.settings[e]=t.responsive[s][e]}),this.getWidth(),1==this.settings.items?this.settings.margin=0:this.settings.margin=this.margin;for(var s=0;s<this.numItemAll;++s)this.el.slides[s].style.width=this.width.slide+"px",this.el.slides[s].style.marginRight=this.settings.margin+"px";for(var e=0;e<this.numItemAll-1;++e)this.el.slides[e].classList.remove("active");this.settings.loop?this.transform=this.numItemReal*(this.width.slide+this.settings.margin):this.transform=0,this.addActiveClass(this.itemActive),this.numDot=Math.ceil(this.numItemReal/this.settings.items)},addActiveClass:function(t){this.settings.loop&&(t+=this.numItemReal);var s=t+Math.floor(this.settings.items/2);this.el.slides[s].classList.add("super");for(var e=0;e<this.settings.items;++e)this.el.slides[t].classList.add("active"),++t},setSlide:function(t){for(var s=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=0;i<this.numItemAll-1;++i)this.el.slides[i].classList.remove("active","super");this.settings.loop?this.transform=(t+this.numItemReal-1)*(this.width.slide+this.settings.margin):this.transform=t*(this.width.slide+this.settings.margin),this.transform+=this.width.slide+this.settings.margin,this.settings.speed=e?this.speed:0,this.settings.loop?(t<0?(this.itemActive=this.numItemReal-1,setTimeout(function(){s.setSlide(s.itemActive,!1)},this.speed)):t>=this.numItemReal?(this.itemActive=0,setTimeout(function(){s.setSlide(0,!1)},this.speed)):this.itemActive=t,this.addActiveClass(this.itemActive)):(t<0?this.itemActive=0:t>=this.numItemReal-this.settings.items?this.itemActive=this.numItemReal-this.settings.items:this.itemActive=t,this.transform=this.itemActive*(this.width.slide+this.settings.margin),this.addActiveClass(this.itemActive))},nextSlide:function(){this.setSlide(this.itemActive+this.settings.offset)},prevSlide:function(){this.setSlide(this.itemActive-this.settings.offset)},setDot:function(t){this.settings.loop?this.setSlide((t-1)*this.settings.items):t==this.numDot?0==this.numItemReal%this.settings.items?this.setSlide((t-1)*this.settings.items):this.setSlide(this.numItemReal-this.settings.items):this.setSlide((t-1)*this.settings.items)},handleMouseDown:function(t){t.touches||t.preventDefault(),this.mouseDown=!0,this.dragStartX="ontouchstart"in window?t.touches[0].clientX:t.clientX,this.dragStartY="ontouchstart"in window?t.touches[0].clientY:t.clientY},handleMouseMove:function(t){var s="ontouchstart"in window?t.touches[0].clientX:t.clientX,e="ontouchstart"in window?t.touches[0].clientY:t.clientY;Math.abs(s-this.dragStartX)>3*Math.abs(e-this.dragStartY)&&(this.dragDistance=s-this.dragStartX,this.disableScroll())},handleMouseUp:function(){this.mouseDown=!1,this.enableScroll()},disableScroll:function(){document.ontouchmove=function(t){t.preventDefault()}},enableScroll:function(){document.ontouchmove=function(t){return!0}}},computed:{documentWidth:function(){return this.width.document}},watch:{documentWidth:function(){this.reload()},dragDistance:function(){this.mouseDown&&(this.dragDistance>this.swipeDistance&&(this.prevSlide(),this.handleMouseUp()),this.dragDistance<-1*this.swipeDistance&&(this.nextSlide(),this.handleMouseUp()))}},updated:function(){this.$nextTick(function(){this.settings.loop?this.numDotActive=Math.ceil(this.itemActive/this.settings.items+.1):0==this.numItemReal%this.settings.items?this.numDotActive=Math.ceil(this.itemActive/this.settings.items+.1):this.itemActive>=this.numItemReal-this.settings.items?this.numDotActive=this.numDot:this.numDotActive=Math.ceil(this.itemActive/this.settings.items+.1);if(this.sibling){this.el.activeItem=this.$el.getElementsByClassName("v_slider__track")[0];for(var t=0;t<this.el.activeItem.children.length;++t)this.el.activeItem.children[t].removeEventListener("click",this.nextSlide),this.el.activeItem.children[t].removeEventListener("click",this.prevSlide);this.el.activeItem=this.el.activeItem.getElementsByClassName("super")[0],this.el.activeItem.nextElementSibling.addEventListener("click",this.nextSlide),this.el.activeItem.previousElementSibling.addEventListener("click",this.prevSlide)}})}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"v_slider"},[e("div",{ref:"list",staticClass:"v_slider__list"},[e("div",{ref:"track",staticClass:"v_slider__track",style:{width:t.width.track+"px",transform:"translate(-"+t.transform+"px)",transition:"transform "+t.settings.timing+" "+t.settings.speed+"ms"}},[t._t("default")],2)]),t._v(" "),t.dots?e("ul",{staticClass:"v_slider__dots"},t._l(t.numDot,function(s){return e("li",{class:{active:s==t.numDotActive},on:{click:function(e){return t.setDot(s)}}},[e("span")])}),0):t._e(),t._v(" "),t.nav?e("button",{staticClass:"v_slider__prev",domProps:{innerHTML:t._s(t.prevNav)},on:{click:t.prevSlide}}):t._e(),t._v(" "),t.nav?e("button",{staticClass:"v_slider__next",domProps:{innerHTML:t._s(t.nextNav)},on:{click:t.nextSlide}}):t._e()])},staticRenderFns:[]};var v={data:function(){return{options:{items:1,margin:20,nav:null,dots:!0,loop:!0,timing:"cubic-bezier(0, 0.72, 0.64, 1.06)",offset:1,prevNav:"Туда",nextNav:"Сюда",sibling:!0,responsive:{}}}},components:{"v-slider":e("VU/8")(m,d,!1,function(t){e("yMcQ")},null,null).exports}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10 slider-section__wrapper"},[e("v-slider",t._b({},"v-slider",t.options,!1),t._l(3,function(s){return e("div",{staticClass:"slider-item"},[e("div",{staticClass:"slider-item__img"},[e("img",{attrs:{src:"static/img/slider-img.jpg",alt:"alt"}})]),t._v(" "),e("div",{staticClass:"slider-item__text"},[e("div",{staticClass:"slider-item__name"},[t._v("Limara tusi")]),t._v(" "),e("div",{staticClass:"slider-item__role"},[t._v("CEO, RanDOM COMPANY")]),t._v(" "),e("p",{staticClass:"slider-item__review"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,")])])])}),0)],1)])])},staticRenderFns:[]};var _={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"comments"},[e("div",{staticClass:"comments-block"},[e("header",{staticClass:"comments-header"},[t._v("\n\t\t\tComments\n\t\t")]),t._v(" "),e("div",{staticClass:"comment"},[e("header",{staticClass:"comment-header"},[e("div",{staticClass:"comment-user"},[e("div",{staticClass:"comment-user__avatar"},[e("img",{attrs:{src:"static/img/userpic.jpg",alt:"alt"}})]),t._v(" "),e("div",{staticClass:"comment-user__info"},[e("div",[t._v("post by ")]),t._v(" "),e("div",{staticClass:"comment-user__name"},[e("span",[t._v("Smuckersreg Toppings")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("reply")])]),t._v(" "),e("div",{staticClass:"comment-user__date"},[t._v("6/10/2014")])])]),t._v(" "),e("div",{staticClass:"comment-int"},[e("div",{staticClass:"comment-int__share"},[e("span",[t._v("456")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"demo-icon icon-share"})])]),t._v(" "),e("div",{staticClass:"comment-int__like"},[e("span",[t._v("15")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"demo-icon icon-thumbs-up"})])])])]),t._v(" "),e("div",{staticClass:"comment-body"},[e("img",{attrs:{src:"static/img/post-image.jpg",alt:"alt"}}),t._v(" "),e("p",{staticClass:"comment-body__text"},[t._v("Thanks for the recipe")]),t._v(" "),e("div",{staticClass:"comment comment--answer"},[e("header",{staticClass:"comment-header"},[e("div",{staticClass:"comment-user"},[e("div",{staticClass:"comment-user__avatar"},[e("img",{attrs:{src:"static/img/userpic.jpg",alt:"alt"}})]),t._v(" "),e("div",{staticClass:"comment-user__info"},[e("div",[t._v("post by ")]),t._v(" "),e("div",{staticClass:"comment-user__name"},[e("span",[t._v("Smuckersreg Toppings")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("reply")])]),t._v(" "),e("div",{staticClass:"comment-user__date"},[t._v("6/10/2014")])])]),t._v(" "),e("div",{staticClass:"comment-int"},[e("div",{staticClass:"comment-int__share"},[e("span",[t._v("456")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"demo-icon icon-share"})])]),t._v(" "),e("div",{staticClass:"comment-int__like"},[e("span",[t._v("15")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"demo-icon icon-thumbs-up"})])])])]),t._v(" "),e("div",{staticClass:"comment-body"},[e("p",{staticClass:"comment-body__text"},[t._v("Thanks for the recipe lorem ipsum bla bla bla  Thanks for the recipe lore")])])]),t._v(" "),e("div",{staticClass:"comments-more"},[e("a",{attrs:{href:"#"}},[t._v("24 more comments")])])])]),t._v(" "),e("div",{staticClass:"comment"},[e("header",{staticClass:"comment-header"},[e("div",{staticClass:"comment-user"},[e("div",{staticClass:"comment-user__avatar"},[e("img",{attrs:{src:"static/img/userpic.jpg",alt:"alt"}})]),t._v(" "),e("div",{staticClass:"comment-user__info"},[e("div",[t._v("post by ")]),t._v(" "),e("div",{staticClass:"comment-user__name"},[e("span",[t._v("Smuckersreg Toppings")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("reply")])]),t._v(" "),e("div",{staticClass:"comment-user__date"},[t._v("6/10/2014")])])]),t._v(" "),e("div",{staticClass:"comment-int"},[e("div",{staticClass:"comment-int__share"},[e("span",[t._v("456")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"demo-icon icon-share"})])]),t._v(" "),e("div",{staticClass:"comment-int__like"},[e("span",[t._v("15")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"demo-icon icon-thumbs-up"})])])])]),t._v(" "),e("div",{staticClass:"comment-body"},[e("p",{staticClass:"comment-body__text"},[t._v("Thanks for the recipe")])])])])])}]};var p={data:function(){return{}},components:{Pricing:o,Slider:e("VU/8")(v,u,!1,function(t){e("di8s")},null,null).exports,Comments:e("VU/8")({},_,!1,function(t){e("1B1E")},null,null).exports}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"pricing"},[s("Pricing")],1),this._v(" "),s("section",{staticClass:"slider-section"},[s("Slider")],1),this._v(" "),s("Comments")],1)},staticRenderFns:[]};var g={name:"App",components:{Homepage:e("VU/8")(p,f,!1,function(t){e("NSLt")},null,null).exports}},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Homepage")],1)},staticRenderFns:[]};var w=e("VU/8")(g,C,!1,function(t){e("7CcK")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:w},template:"<App/>"})},NSLt:function(t,s){},di8s:function(t,s){},yMcQ:function(t,s){},"z8+S":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.36a06b38be5a74c60c45.js.map