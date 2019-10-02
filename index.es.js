function _asyncToGenerator(r){return function(){var e=r.apply(this,arguments);return new Promise(function(r,n){function t(a,u){try{var o=e[a](u),c=o.value}catch(r){return void n(r)}if(!o.done)return Promise.resolve(c).then(function(r){t("next",r)},function(r){t("throw",r)});r(c)}return t("next")})}}function _toConsumableArray(r){if(Array.isArray(r)){for(var e=0,n=Array(r.length);e<r.length;e++)n[e]=r[e];return n}return Array.from(r)}var _this=void 0,_slicedToArray=function(){function r(r,e){var n=[],t=!0,a=!1,u=void 0;try{for(var o,c=r[Symbol.iterator]();!(t=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);t=!0);}catch(r){a=!0,u=r}finally{try{!t&&c.return&&c.return()}finally{if(a)throw u}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),SUCCESS=Symbol.for("SUCCESS"),UNSPECIFIED_ERROR=Symbol.for("UNSPECIFIED_ERROR"),SomeError=function(r,e){return{value:function(){return e},type:function(){return r}}},Errors=function r(e){return{value:function(){return e},concat:function(n){return r([].concat(_toConsumableArray(e),[n]))}}},Success=function(r){return{value:function(){return r},type:function(){return SUCCESS}}},compose=function(){for(var r=arguments.length,e=Array(r),n=0;n<r;n++)e[n]=arguments[n];return function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function r(n){var t,a,u,o,c,i,s,f,v,l,p,y;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t=[Success(n),Errors([])],a=!0,u=!1,o=void 0,r.prev=4,c=e[Symbol.iterator]();case 6:if(a=(i=c.next()).done){r.next=14;break}return s=i.value,r.next=10,s(t);case 10:t=r.sent;case 11:a=!0,r.next=6;break;case 14:r.next=20;break;case 16:r.prev=16,r.t0=r.catch(4),u=!0,o=r.t0;case 20:r.prev=20,r.prev=21,!a&&c.return&&c.return();case 23:if(r.prev=23,!u){r.next=26;break}throw o;case 26:return r.finish(23);case 27:return r.finish(20);case 28:return f=t,v=_slicedToArray(f,2),l=v[0],p=v[1],y={value:l.value(),errors:p.value().map(function(r){return{message:r.value(),type:r.type()}})},r.abrupt("return",y);case 31:case"end":return r.stop()}},r,_this,[[4,16,20,28],[21,,23,27]])}));return function(e){return r.apply(this,arguments)}}()},pipeline=function(){for(var r=arguments.length,e=Array(r),n=0;n<r;n++)e[n]=arguments[n];return compose.apply(_this,e.reverse())},fromUnary=function(r){return function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(n){var t,a,u=_slicedToArray(n,2),o=u[0],c=u[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(o.value());case 3:if(t=e.sent,(a=t.type())!==SUCCESS){e.next=9;break}return e.abrupt("return",[t,c]);case 9:return e.abrupt("return",[o,c.concat(t)]);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",[o,c.concat(SomeError(UNSPECIFIED_ERROR,e.t0.message))]);case 15:case"end":return e.stop()}},e,_this,[[0,12]])}));return function(r){return e.apply(this,arguments)}}()};export{SomeError,Success,compose,fromUnary,pipeline};
