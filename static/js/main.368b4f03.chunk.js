(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},106:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(51),i=a.n(c),o=(a(71),a(52)),l=a(12),s=(a(73),a(76),a(53)),m=a.n(s),u=a(55),p=a.n(u),h=a(24),d=Object(n.createContext)(),g=function(e){var t=e.reducer,a=e.intialState,c=e.children;return r.a.createElement(d.Provider,{value:Object(n.useReducer)(t,a)},c)},f=function(){return Object(n.useContext)(d)},_=a(50),E=(a(78),a(79),a(110),a(111),_.a.initializeApp({apiKey:"AIzaSyBgHYjNXkDy9hR4BVD2ELKwpLPkzTS6Ipk",authDomain:"amozon-clone-9c3c1.firebaseapp.com",projectId:"amozon-clone-9c3c1",storageBucket:"amozon-clone-9c3c1.appspot.com",messagingSenderId:"420429059519",appId:"1:420429059519:web:65d40372b8706bcce1fd0a",measurementId:"G-BMCWVGZNL1"}).firestore(),_.a.auth());var v=function(){var e=f(),t=Object(l.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],r.a.createElement("div",{className:"header"},r.a.createElement(h.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"logo"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{className:"header__searchInput",type:"text"}),r.a.createElement(m.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(h.b,{to:!c&&"/login"},r.a.createElement("div",{className:"header__option",onClick:function(){E&&E.signOut()}},r.a.createElement("span",{className:"header__optionLineOne"}," ",c?"signed In":"Hello"),r.a.createElement("div",{className:"login__user"},c?c.email:"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},c?"sign Out":"sign In"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders")),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),r.a.createElement(h.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(p.a,null),r.a.createElement("span",{className:"header__optionBasketTwo \r header__optionBasketCount"},n.length)))))},y=(a(85),a(42)),b=a.n(y);a(87);var N=function(e){var t=e.title,a=e.price,n=e.rating,c=e.image,i=e.height,o=e.id,s=f(),m=Object(l.a)(s,2),u=m[0].basket,p=m[1];return r.a.createElement("div",{id:o,className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",{id:o},t),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",{id:o},a)),r.a.createElement("div",{className:"product__rating"},Array(n).fill().map(function(e,t){return r.a.createElement("p",null,r.a.createElement(b.a,{className:"rating__icon"}))}))),r.a.createElement("img",{height:i,src:c,alt:"headphone_image-network_problem"}),r.a.createElement("button",{onClick:function(){console.log("add in the basket",u),p({type:"ADD_TO_BASKET",item:{id:o,title:t,price:a,image:c}})}},"Add to Store"))};var w=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("div",{className:"home__row"},r.a.createElement(N,{id:"1231446587",title:"BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games",price:25.99,image:"\thttps://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg",rating:5}),r.a.createElement(N,{id:"1231446454",title:"High-Back Gaming Chair PC Office Chair Computer Racing Chair PU Desk Task Chair Ergonomic Executive Swivel Rolling Chair with Lumbar Support for Back Pain Women, Men (White)",image:"\thttps://m.media-amazon.com/images/I/71IsfvhxQeL._AC_UL480_FMwebp_QL65_.jpg",price:88.99,rating:3})),r.a.createElement("div",{className:"home__row homeRow__Airphone"},r.a.createElement(N,{id:"123144568",price:88.99,rating:5,height:"230px",title:"Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone",image:"https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL480_FMwebp_QL65_.jpg"}),r.a.createElement(N,{id:"12314465784",height:"230px",price:30.99,rating:4,title:"ComfyBrace Posture Corrector-Back Brace for Men and Women- Fully Adjustable Straightener for Mid, Upper Spine Support- Neck, Shoulder, Clavicle and Back Pain Relief-Breathable",image:"\thttps://m.media-amazon.com/images/I/6199D3CTi-L._AC_UL480_FMwebp_QL65_.jpg"}),r.a.createElement(N,{id:"1231444547",price:60.9,rating:5,height:"250px",image:"https://m.media-amazon.com/images/I/61iTIlfCryL._AC_UY550_.jpg",title:"WOOSEA Women Sleeveless V Neck Split Evening Cocktail Long Dress"})),r.a.createElement("div",{className:"home__row home__rowBackground"},r.a.createElement(N,{id:"123144645712",price:200,rating:5,image:"\thttps://images-na.ssl-images-amazon.com/images/I/81lDOtJRTkL._AC_UL160_SR160,160_.jpg"}),r.a.createElement(N,{id:"1231446545",rating:5,price:40,image:"\thttps://images-na.ssl-images-amazon.com/images/I/81Ze3ZDcOgL._AC_UL160_SR160,160_.jpg"}),r.a.createElement(N,{id:"12314464701",price:50.89,rating:5,image:"\thttps://images-na.ssl-images-amazon.com/images/I/21l795GXZkL._AC_UL160_SR160,160_.jpg"}),r.a.createElement(N,{id:"1231446457",price:25.65,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/712eYgGt3qL._AC_UL160_SR160,160_.jpg"}),r.a.createElement(N,{id:"123142314",price:88.99,image:"\thttps://m.media-amazon.com/images/I/81L6p8+MYaL._AC_UL480_FMwebp_QL65_.jpg"}),r.a.createElement(N,{id:"1787454",rating:5,price:20.99,image:"\thttps://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg"}))))},O=a(0);a(89);var k=function(){var e=Object(O.m)(),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"login"},r.a.createElement(h.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"Amozon"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h2",null,"Sign-up"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{type:"text",autoComplete:"off",value:c,onChange:function(e){return i(e.target.value)}}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",autoComplete:"off",value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"login__sinup",onClick:function(t){t.preventDefault(),E.signInWithEmailAndPassword(c,m).then(function(t){t&&(alert("congratulaton you have seccessull login"),e("/"))}).catch(function(e){alert(e.message)})}},"Sign in"),r.a.createElement("p",null,"By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice."),r.a.createElement("div",{className:"new_to_amazon"},r.a.createElement("p",{className:"f__dash"},"_________"),r.a.createElement("p",null," New to Amazon?"),r.a.createElement("p",{className:"s__dash"},"_________")),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),E.createUserWithEmailAndPassword(c,m).then(function(t){t&&e("/")}).catch(function(e){alert(e.message)})},className:"login__Registeration"},"Create your Amazon account"))))},j=(a(91),a(43)),L=a.n(j),S=a(15),C=a(33),x=function(e){return e.reduce(function(e,t){return t.price+e},0)},I=function(e,t){switch(console.log("action",t),t.type){case"ADD_TO_BASKET":return Object(C.a)({},e,{basket:[].concat(Object(S.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex(function(e){return e.id===t.id}),n=Object(S.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cant remove (id: ".concat(t.id,") as its not in basket[]!")),Object(C.a)({},e,{basket:n});case"SET_USER":return Object(C.a)({},e,{user:t.user});default:return e}};a(96);var P=function(){var e=Object(O.m)(),t=f(),a=Object(l.a)(t,2),n=a[0].basket;return a[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(L.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",n.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:x(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{onClick:function(){return e("/payment")}},"Proceed to Checkout"))};a(98);var A=function(e){var t=e.id,a=e.image,n=e.title,c=e.price,i=e.rating,o=f(),s=Object(l.a)(o,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:a}),r.a.createElement("div",{className:"checkoutProduct__content"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},"$",c),r.a.createElement("p",{className:"checkoutProduct__rating"},Array(i).fill().map(function(e,t){return r.a.createElement("p",null,r.a.createElement(b.a,{className:"rating__icon"}))})),r.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:t})}},"remove from store")))};var z=function(){var e=f(),t=Object(l.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],console.log("checkout",n),console.log(c,"......"),r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"\thttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGPNmhtHGnmrGY7FKGyzalhvzAIa2ljztpg&usqp=CAU",alt:""}),r.a.createElement("div",{className:"user__login"},r.a.createElement("p",null,c?c.email:"No User")),r.a.createElement("h2",{className:"checkout__title"},"Your Items"),n.map(function(e){return r.a.createElement(A,{id:e.id,image:e.image,price:e.price,title:e.title,rating:e.rating})})),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(P,null)))},T=(a(100),a(57)),G=a.n(T),B=a(56),F=a.n(B),R=[{id:0,Image:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"},{id:1,Image:"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"},{id:2,Image:"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"},{id:3,Image:"https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"},{id:4,Image:"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"}];var U=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"homeHeader"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(R[a].Image,")")}},r.a.createElement("div",{className:"left",onClick:function(){c(a>0?a-1:R.length-1)}},r.a.createElement(F.a,{style:{fontSize:30,color:"#111",backgroundColor:"white",borderRadius:"3px"}})),r.a.createElement("div",{className:"center"}," "),r.a.createElement("div",{className:"right",onClick:function(){a+1<R.length?c(a+1):c(0)}},r.a.createElement(G.a,{style:{fontSize:30,color:"#111",backgroundColor:"white",borderRadius:"3px"}}))))},D=a(3),M=a(30),W=a(123).a.create({baseURL:"....."});a(106);function H(){H=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var c=t&&t.prototype instanceof p?t:p,i=Object.create(c.prototype),o=new k(r||[]);return n(i,"_invoke",{value:b(e,a,o)}),i}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var u={};function p(){}function h(){}function d(){}var g={};l(g,c,function(){return this});var f=Object.getPrototypeOf,_=f&&f(f(j([])));_&&_!==t&&a.call(_,c)&&(g=_);var E=d.prototype=p.prototype=Object.create(g);function v(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function y(e,t){var r;n(this,"_invoke",{value:function(n,c){function i(){return new t(function(r,i){!function n(r,c,i,o){var l=m(e[r],e,c);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,i,o)},function(e){n("throw",e,i,o)}):t.resolve(u).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,o)})}o(l.arg)}(n,c,r,i)})}return r=r?r.then(i,i):i()}})}function b(e,t,a){var n="suspendedStart";return function(r,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw c;return L()}for(a.method=r,a.arg=c;;){var i=a.delegate;if(i){var o=N(i,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=m(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function N(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var c=r.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=d,n(E,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,o,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},v(y.prototype),l(y.prototype,i,function(){return this}),e.AsyncIterator=y,e.async=function(t,a,n,r,c){void 0===c&&(c=Promise);var i=new y(s(t,a,n,r),c);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},v(E),l(E,o,"Generator"),l(E,c,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var o=a.call(c,"catchLoc"),l=a.call(c,"finallyLoc");if(o&&l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(o){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=e,i.arg=t,c?(this.method="next",this.next=c.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var Y=function(){var e=Object(O.m)(),t=f(),a=Object(l.a)(t,2),c=a[0],i=c.basket,o=c.user,s=(a[1],Object(M.useStripe)()),m=Object(M.useElements)(),u=Object(n.useState)(null),p=Object(l.a)(u,2),d=p[0],g=p[1],_=Object(n.useState)(!0),E=Object(l.a)(_,2),v=E[0],y=E[1],b=Object(n.useState)(""),N=Object(l.a)(b,2),w=N[0],k=N[1],j=Object(n.useState)(!1),S=Object(l.a)(j,2),C=S[0],I=S[1],P=Object(n.useState)(!0),z=Object(l.a)(P,2),T=z[0];z[1],Object(n.useEffect)(function(){var e=function(){var t=Object(D.a)(H().mark(function t(){var a;return H().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W({method:"post",url:"/payment/create?total=".concat(90*x(i))});case 2:a=t.sent,e(a.data.clientSecret);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();e()},[i]);var G=function(){var t=Object(D.a)(H().mark(function t(a){return H().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),k(!0),t.next=4,s.confirmCardPayment(T,{payment_method:{card:m.getElement(M.CardElement)}}).then(function(t){t.paymentIntent,I(!0),g(null),k(!1),e("/orders")});case 4:t.sent;case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(h.b,{to:"/Checkout"},i.length),")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Dilvery address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("h2",null,o?o.email:"Please Sign In First"),r.a.createElement("p",null,"184201"),r.a.createElement("p",null,"kathua, jammu & kashmir"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h2",null,"Review Items and Delvery")),r.a.createElement("div",{className:"payment__items"},i.map(function(e){return r.a.createElement(A,{id:e.id,image:e.image,price:e.price,title:e.title,rating:e.rating})}))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:G},r.a.createElement(M.CardElement,{onChange:function(e){y(e.empty),g(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(L.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("h4",null,"Total Order")," (",i.length," items):"," ",r.a.createElement("strong",null,e)))},decimalScale:2,value:x(i),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{disabled:w||v||C},r.a.createElement("span",null,w?r.a.createElement("p",null,"processing"):"Buy Now"))),d&&r.a.createElement("div",null,d))))))},Q=a(58),X=Object(Q.a)("pk_test_51MmHHQSCyQoTTiMhiboBUQOmQXIElWGB5qFTWhtJMnNLtlQtVwBmdceGSqkXwExWCBOzJgOTLN0tuDr5xtUqchZB00YrRhMlZP");var q=function(){var e=f(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var a=t[1];return Object(n.useEffect)(function(){E.onAuthStateChanged(function(e){console.log("the user is >>>>",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})})},[]),r.a.createElement("div",{className:"app"},r.a.createElement(h.a,null,r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/login",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))})),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(U,null),r.a.createElement(w,null))}),r.a.createElement(O.a,{path:"/checkout",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(z,null))})),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/payment",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.Elements,{stripe:X},r.a.createElement(Y,null)))}))))},K=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,122)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,{intialState:{basket:[],user:null},reducer:I},r.a.createElement(q,null)))),K()},63:function(e,t,a){e.exports=a(109)},71:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){}},[[63,3,2]]]);
//# sourceMappingURL=main.368b4f03.chunk.js.map