webpackJsonp([1],{303:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(124),r=i(36),o=(i.n(r),i(125)),a=i(308),s=function(e,t){return{news:e.news}},l=function(e,t){return{fetchNewsData:function(){e(Object(o.a)())}}};t.default=Object(r.withRouter)(Object(n.b)(s,l)(a.a))},305:function(e,t,i){var n,r;!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(i.apply(null,n));else if("object"===r)for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=i:(n=[],void 0!==(r=function(){return i}.apply(t,n))&&(e.exports=r))}()},308:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=i(3),s=i.n(a),l=i(6),c=i.n(l),u=i(309),d=i(312),p=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),f=function(e){function t(e){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),p(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchNewsData)()}},{key:"render",value:function(){var e=this.props.news,t=e.data;if(!e.success&&!e.isReq&&""!==e.message)return s.a.createElement("div",null,"fail");if(e.success){for(var i=[],n=0;n<3;n++)i.push({src:t[n].src,alt:t[n].alt});var r=t.map(function(e,t){return t>2?s.a.createElement(u.a,{src:e.src,title:e.title,tags:e.tags,link:e.link,key:t}):null});return s.a.createElement("div",null,s.a.createElement(d.a,{items:i}),r)}return s.a.createElement("div",null,"loading")}}]),t}(s.a.Component);f.propTypes={fetchNewsData:c.a.func.isRequired,news:c.a.object.isRequired},t.a=f},309:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=i(3),s=i.n(a),l=i(6),c=i.n(l),u=i(310),d=i.n(u),p=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),f=function(e){function t(e){n(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.loadImg=function(){i.setState({isImgLoaded:!0})},i.state={isImgLoaded:!1},i}return o(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.src,i=e.title,n=e.tags,r=e.link;return s.a.createElement("div",{className:d.a.container},s.a.createElement("a",{href:r},s.a.createElement("div",{className:d.a.description},s.a.createElement("p",null,i),s.a.createElement("p",null,n)),s.a.createElement("div",{className:d.a.image},s.a.createElement("img",{src:t,alt:"hhh",onLoad:this.loadImg}),s.a.createElement("div",{className:this.state.isImgLoaded?d.a.imgHidden:d.a.imgShow}))))}}]),t}(s.a.Component);f.propTypes={src:c.a.string.isRequired,title:c.a.string.isRequired,tags:c.a.string.isRequired,link:c.a.string.isRequired},t.a=f},310:function(e,t,i){var n=i(311);"string"==typeof n&&(n=[[e.i,n,""]]);var r={};r.transform=void 0;i(65)(n,r);n.locals&&(e.exports=n.locals)},311:function(e,t,i){t=e.exports=i(64)(void 0),t.push([e.i,".NewsList__container-NPACm{height:15vh;border-bottom:1vh solid #f2f2f2}.NewsList__container-NPACm a{display:block;height:100%;width:100%;margin:0;text-decoration:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;color:#000}.NewsList__description-1A2S_{width:60%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.NewsList__description-1A2S_ p{margin:0;padding-left:3vw;padding-right:3vw}.NewsList__description-1A2S_ p:first-child{overflow:hidden;max-height:4.5rem;font-weight:700;line-height:1.5rem}.NewsList__image-2fjdS{width:40%;height:100%;position:relative}.NewsList__image-2fjdS img{width:100%;height:100%}.NewsList__imgHidden-2StxV{display:none;position:absolute}.NewsList__imgShow-2k83O{top:0;position:absolute;background-color:#f5f5f5;width:100%;height:100%;z-index:1}",""]),t.locals={container:"NewsList__container-NPACm",description:"NewsList__description-1A2S_",image:"NewsList__image-2fjdS",imgHidden:"NewsList__imgHidden-2StxV",imgShow:"NewsList__imgShow-2k83O"}},312:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=i(3),s=i.n(a),l=i(6),c=i.n(l),u=i(305),d=i.n(u),p=i(313),f=i.n(p),h=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),m=function(e){var t=e.count,i=e.item,n=100/t+"%";return s.a.createElement("li",{className:f.a.sliderItem,style:{width:n}},s.a.createElement("img",{src:i.src,alt:i.alt}))},w=function(e){for(var t=e.count,i=e.nowLocal,n=[],r="",o=0;o<t;o++)r=d()(f.a.sliderDot,o===i?f.a.sliderDotSelected:""),n.push(s.a.createElement("span",{key:"dot"+o,className:r}));return s.a.createElement("div",{className:f.a.sliderDotWarp},n)},b=function(e){function t(e){n(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.turn=function(e){var t=i.props.items,n=i.state.nowLocal+e;n<0&&(n+=t.length),n>=t.length&&(n-=t.length),i.setState({nowLocal:n})},i.goPlay=function(){var e=i.props,t=e.autoplay,n=e.delay;t&&(i.autoPlayFlag=setInterval(function(){i.turn(1)},1e3*n))},i.pausePlay=function(){clearInterval(i.autoPlayFlag)},i.state={nowLocal:0},i}return o(t,e),h(t,[{key:"componentDidMount",value:function(){this.goPlay()}},{key:"componentWillUnmount",value:function(){clearInterval(this.autoPlayFlag)}},{key:"render",value:function(){var e=this.props,t=e.items,i=e.dots,n=e.speed,r=t.length,o=t.map(function(e,t){return s.a.createElement(m,{item:e,count:r,key:"item"+t})}),a=s.a.createElement(w,{count:r,nowLocal:this.state.nowLocal});return s.a.createElement("div",{className:f.a.slider},s.a.createElement("ul",{style:{left:-100*this.state.nowLocal+"%",transitionDuration:n+"s",width:100*t.length+"%",margin:0,padding:0,height:"100%"}},o),i?a:null)}}]),t}(s.a.Component);m.propTypes={count:c.a.number.isRequired,item:c.a.object.isRequired},w.propTypes={count:c.a.number.isRequired,nowLocal:c.a.number.isRequired},b.propTypes={items:c.a.array.isRequired,dots:c.a.bool.isRequired,speed:c.a.number.isRequired,autoplay:c.a.bool.isRequired,delay:c.a.number.isRequired},b.defaultProps={speed:1,delay:5,autoplay:!0,dots:!0,items:[]},b.autoPlayFlag=null,t.a=b},313:function(e,t,i){var n=i(314);"string"==typeof n&&(n=[[e.i,n,""]]);var r={};r.transform=void 0;i(65)(n,r);n.locals&&(e.exports=n.locals)},314:function(e,t,i){t=e.exports=i(64)(void 0),t.push([e.i,".NewsSlider__sliderItem-3hHji{display:inline-block;height:100%}.NewsSlider__sliderItem-3hHji img{display:block;height:100%;width:100%}.NewsSlider__sliderDotWarp-dDVlE{z-index:99;text-align:center;width:100%;position:absolute;bottom:0}.NewsSlider__sliderDot-fRryT{display:inline-block;width:6px;height:6px;border:3px solid #ccc;margin:6px;cursor:pointer;border-radius:20px}.NewsSlider__sliderDotSelected-3I0J0{background:#ccc}.NewsSlider__slider-g05DT{width:100%;height:35vh;overflow:hidden;position:relative;border-bottom:1vh solid #f2f2f2}.NewsSlider__slider-g05DT>ul{position:relative;height:auto;overflow:hidden;left:0;-webkit-transition:left 1s;transition:left 1s}",""]),t.locals={sliderItem:"NewsSlider__sliderItem-3hHji",sliderDotWarp:"NewsSlider__sliderDotWarp-dDVlE",sliderDot:"NewsSlider__sliderDot-fRryT",sliderDotSelected:"NewsSlider__sliderDotSelected-3I0J0",slider:"NewsSlider__slider-g05DT"}}});