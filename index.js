"use strict";function _asyncToGenerator(r){return function(){var e=r.apply(this,arguments);return new Promise(function(r,t){function n(o,u){try{var a=e[o](u),c=a.value}catch(r){return void t(r)}if(!a.done)return Promise.resolve(c).then(function(r){n("next",r)},function(r){n("throw",r)});r(c)}return n("next")})}}function _toConsumableArray(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}Object.defineProperty(exports,"__esModule",{value:!0});var _this=void 0,_slicedToArray=function(){function r(r,e){var t=[],n=!0,o=!1,u=void 0;try{for(var a,c=r[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);n=!0);}catch(r){o=!0,u=r}finally{try{!n&&c.return&&c.return()}finally{if(o)throw u}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),SUCCESS=Symbol.for("SUCCESS"),UNSPECIFIED_ERROR=Symbol.for("UNSPECIFIED_ERROR"),SomeError=function(r,e){return{value:function(){return e},type:function(){return r}}},Errors=function r(e){return{value:function(){return e},concat:function(t){return r([].concat(_toConsumableArray(e),[t]))}}},Success=function(r){return{value:function(){return r},type:function(){return SUCCESS}}},compose=function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function r(t){var n,o,u,a,c,i,s,f,p,v,y,l;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:n=[Success(t),Errors([])],o=!0,u=!1,a=void 0,r.prev=4,c=e[Symbol.iterator]();case 6:if(o=(i=c.next()).done){r.next=14;break}return s=i.value,r.next=10,s(n);case 10:n=r.sent;case 11:o=!0,r.next=6;break;case 14:r.next=20;break;case 16:r.prev=16,r.t0=r.catch(4),u=!0,a=r.t0;case 20:r.prev=20,r.prev=21,!o&&c.return&&c.return();case 23:if(r.prev=23,!u){r.next=26;break}throw a;case 26:return r.finish(23);case 27:return r.finish(20);case 28:return f=n,p=_slicedToArray(f,2),v=p[0],y=p[1],l={value:v.value(),errors:y.value().map(function(r){return{message:r.value(),type:r.type()}})},r.abrupt("return",l);case 31:case"end":return r.stop()}},r,_this,[[4,16,20,28],[21,,23,27]])}));return function(e){return r.apply(this,arguments)}}()},fromUnary=function(r){return function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,o,u=_slicedToArray(t,2),a=u[0],c=u[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(a.value());case 3:if(n=e.sent,(o=n.type())!==SUCCESS){e.next=9;break}return e.abrupt("return",[n,c]);case 9:return e.abrupt("return",[a,c.concat(n)]);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",[a,c.concat(SomeError(UNSPECIFIED_ERROR,e.t0.message))]);case 15:case"end":return e.stop()}},e,_this,[[0,12]])}));return function(r){return e.apply(this,arguments)}}()};exports.compose=compose,exports.fromUnary=fromUnary,exports.Success=Success,exports.SomeError=SomeError;
