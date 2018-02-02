!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-formulate",[],e):"object"==typeof exports?exports["vue-formulate"]=e():t["vue-formulate"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e,r){"use strict";function n(){p=!1}function o(t){if(!t)return void(l!==h&&(l=h,n()));if(t!==l){if(t.length!==h.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,r){return e!==r.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. These characters were not unique: "+e.join(", "));l=t,n()}}function i(t){return o(t),l}function a(t){d.seed(t),f!==t&&(n(),f=t)}function u(){l||o(h);for(var t,e=l.split(""),r=[],n=d.nextValue();e.length>0;)n=d.nextValue(),t=Math.floor(n*e.length),r.push(e.splice(t,1)[0]);return r.join("")}function s(){return p||(p=u())}function c(t){return s()[t]}var l,f,p,d=r(27),h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";t.exports={characters:i,seed:a,lookup:c,shuffled:s}},function(t,e,r){t.exports=r(11)},function(t,e,r){"use strict";function n(t,e){var r=t.length;if(r!==e.length)return!1;for(var n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function o(t,e){var r=(0,s.default)(t);for(var n in r)r[n]=e(n,r[n]);return r}function i(t,e){var r={};for(var n in t)e(n,t[n])&&(r[n]=t[n]);return r}function a(t,e,r){for(var n in t)r=e(r,n,t[n]);return r}Object.defineProperty(e,"__esModule",{value:!0}),e.inputTypes=void 0,e.equals=n,e.map=o,e.filter=i,e.reduce=a;var u=r(4),s=function(t){return t&&t.__esModule?t:{default:t}}(u);e.inputTypes={text:["text","email","number","color","date","datetime-local","hidden","month","password","range","search","tel","time","url","week"],button:["submit","button"],select:["select"],box:["radio","checkbox"]}},function(t,e,r){"use strict";function n(t){return!0===o(t)&&"[object Object]"===Object.prototype.toString.call(t)}/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var o=r(14);t.exports=function(t){var e,r;return!1!==n(t)&&"function"==typeof(e=t.constructor)&&(r=e.prototype,!1!==n(r)&&!1!==r.hasOwnProperty("isPrototypeOf"))}},function(t,e,r){"use strict";function n(t,e){switch(s(t)){case"object":return o(t,e);case"array":return i(t,e);default:return u(t)}}function o(t,e){if(a(t)||!0===e&&"object"===s(t)){var r={};return c(t,function(t,r){this[r]=n(t,e)},r),r}return"function"==typeof e?e(t):t}function i(t,e){for(var r=[],o=0;o<t.length;o++)r[o]=n(t[o],e);return r}var a=r(3),u=r(15),s=r(20),c=r(21);t.exports=n},function(t,e,r){"use strict";/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
t.exports=function(t,e,r){for(var n in t)if(!1===e.call(r,t[n],n,t))break}},function(t,e){t.exports=function(t,e,r,n,o,i){var a,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,u=t.default);var c="function"==typeof u?u.options:u;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=n),l){var f=c.functional,p=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(t,e){return l.call(e),p(t,e)}):c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:a,exports:u,options:c}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),s=r(4),c=n(s);e.default={props:{name:{type:String,required:!0},module:{type:[String,Boolean],default:function(){return this.$formulate.options.vuexModule}},initial:{type:Object,default:function(){return{}}},behavior:{type:String,default:"blur"},showErrors:{type:[Boolean,Object],default:function(){return{}}}},data:function(){return{parentIdentifier:"vue-formulate-wrapper-element",forceErrors:null}},computed:{m:function(){return this.module?this.module+"/":""},hasErrors:function(){return this.$store.getters[this.m+"hasErrors"][this.name]||!1},values:function(){return(0,c.default)(this.$store.getters[this.m+"formValues"][this.name]||{})},errors:function(){return this.$store.getters[this.m+"formErrors"][this.name]||{}},validationErrors:function(){return this.$store.getters[this.m+"formValidationErrors"][this.name]||{}},fields:function(){return this.$store.getters[this.m+"formMeta"][this.name]||[]},shouldShowErrors:function(){return!1===this.forceErrors||!0===this.forceErrors?this.forceErrors:!1===this.showErrors||!0===this.showErrors?this.showErrors:"live"===this.behavior}},created:function(){this.hydrate(this.initial)},mounted:function(){this.hydrate(this.initial)},methods:{registerField:function(t,e){this.$store.commit(this.m+"setFieldMeta",{form:this.name,field:t,data:e}),this.updateFormValidation()},hydrate:function(t){for(var e in this.fields)"submit"!==e.type&&this.$store.commit(this.m+"setFieldValue",{field:e.name,value:t[e.name],form:this.name});this.updateFormValidation()},update:function(t){this.$store.commit(this.m+"setFieldValue",Object.assign(t,{form:this.name})),this.updateFormValidation()},updateFieldErrors:function(t){this.$store.commit(this.m+"setFieldErrors",Object.assign(t,{form:this.name}))},updateFieldValidationErrors:function(t){this.$store.commit(this.m+"setFieldValidationErrors",Object.assign(t,{form:this.name}))},validateField:function(){function t(t){return e.apply(this,arguments)}var e=o(a.default.mark(function t(e){var r,n=e.field,o=e.validation,i=e.label;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$formulate.validationErrors({field:n,value:this.values[n],label:i},o,this.values);case 2:return r=t.sent,(0,u.equals)(r||[],this.validationErrors[n]||[])||this.updateFieldValidationErrors({field:n,errors:r||[]}),t.abrupt("return",r);case 5:case"end":return t.stop()}},t,this)}));return t}(),updateFormValidation:function(){var t=this;this.fields.map(function(){var e=o(a.default.mark(function e(r){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.validateField({field:r.name,validation:r.validation,label:r.validationLabel||r.label||r.name}));case 1:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}())},submit:function(){this.hasErrors?this.forceErrors=!0:this.$emit("submit",Object.assign({},this.values))}}}},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0});var o=r(2),i=r(25),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{type:{type:[String,Boolean],default:"text"},name:{type:String,required:!0},initial:{type:[String,Boolean],default:!1},validation:{type:[String,Boolean],default:!1},errors:{type:Array,default:function(){return[]}},label:{type:[String,Boolean],default:!1},id:{type:[String],default:function(){return a.default.generate()}},min:{type:[String,Number,Boolean],default:function(){return!1}},max:{type:[String,Number,Boolean],default:function(){return!1}},placeholder:{type:[String,Number,Boolean],default:function(){return!1}},options:{type:[Object,Array],default:function(){return[]}},multiple:{type:Boolean,default:!1},showErrors:{type:[Object,Boolean],default:function(){return{}}}},data:function(){return{errorBlurState:!1}},computed:{hasCustomInput:function(){return this.$slots.default&&this.$slots.default.length},isTextInput:function(){return!this.hasCustomInput&&o.inputTypes.text.includes(this.type)},isButtonInput:function(){return!this.hasCustomInput&&o.inputTypes.button.includes(this.type)},isSelectInput:function(){return!this.hasCustomInput&&o.inputTypes.select.includes(this.type)},isBoxInput:function(){return!this.hasCustomInput&&o.inputTypes.box.includes(this.type)},isUnsupportedInput:function(){return!(this.hasCustomInput||this.isTextInput||this.isButtonInput||this.isSelectInput||this.isBoxInput)},form:function(){for(var t=this.$parent;t&&t.$data&&"vue-formulate-wrapper-element"!==t.$data.parentIdentifier;)t=t.$parent;if(!t.$data||"vue-formulate-wrapper-element"!==t.$data.parentIdentifier)throw new Error("FormulateElement has no FormulateWrapper element");return t},values:function(){return this.form.values},value:function(){var t=this.values[this.name];if(void 0===t)switch(this.type){case"color":return"#000000";case"checkbox":if(this.optionList.length>1)return[]}return t},module:function(){return this.form.$props.module},formName:function(){return this.form.$props.name},classes:function(){return{"formulate-element":!0,"formulate-element--has-value":!!this.value,"formulate-element--has-errors":this.localAndValidationErrors.length&&this.shouldShowErrors}},validationErrors:function(){return this.form.validationErrors[this.name]||[]},storeErrors:function(){return this.form.errors[this.name]||[]},localAndValidationErrors:function(){return this.errors.concat(this.validationErrors)},shouldShowErrors:function(){var t=this.form.shouldShowErrors;return"blur"===this.form.behavior&&(t=t||this.errorBlurState),!1!==this.showErrors&&!0!==this.showErrors||(t=this.showErrors),t},attributes:function(){var t=this;return["min","max","placeholder","id","multiple"].filter(function(e){return!1!==t[e]}).reduce(function(e,r){return e[r]=t[r],e},{})},optionList:function(){return Array.isArray(this.options)?Array.isArray(this.options)&&!this.options.length?[{value:this.name,label:this.label||this.name,id:a.default.generate()}]:this.options:(0,o.reduce)(this.options,function(t,e,r){return t.concat({value:e,label:r,id:a.default.generate()})},[])},val:{set:function(t){this.form.update({field:this.name,value:t}),this.isTextInput&&(this.$refs.input.value=t)},get:function(){return this.value}}},watch:{localAndValidationErrors:function(){(0,o.equals)(this.localAndValidationErrors,this.storeErrors)||this.form.updateFieldErrors({field:this.name,errors:this.localAndValidationErrors})}},created:function(){this.form.registerField(this.name,(0,o.filter)(this.$props,function(t,e){return["name","type","id","label","validation","validationLabel"].includes(t)})),!1!==this.initial&&this.form.hydrate(n({},this.name,this.initial))}}},function(t,e,r){"use strict";function n(t,e){for(var r,n=0,i="";!r;)i+=t(e>>4*n&15|o()),r=e<Math.pow(16,n+1),n++;return i}var o=r(28);t.exports=n},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.mapModels=void 0;var u=r(1),s=n(u),c=function(){function t(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(13);Object.keys(f).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return f[t]}})});var p=r(22),d=n(p),h=r(24),m=n(h),v=r(34),y=n(v),b=r(35),g=n(b),x=function(){function t(){a(this,t),this.defaultOptions={registerComponents:!0,tags:{Formulate:"formulate",FormulateElement:"formulate-element"},errors:{},rules:{},vuexModule:!1},this.errors=g.default,this.rules=y.default}return l(t,[{key:"install",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.prototype.$formulate=this,e=Object.assign(this.defaultOptions,e),e.registerComponents&&(t.component(e.tags.Formulate,d.default),t.component(e.tags.FormulateElement,m.default)),e.errors&&(this.errors=Object.assign(this.errors,e.errors)),e.rules&&(this.rules=Object.assign(this.rules,e.rules)),this.options=e}},{key:"parseRules",value:function(t){return t.split("|").map(function(t){return t.trim()}).map(function(t){return t.match(/([a-zA-Z0-9]+)\((.*)?\)/)||[null,t,""]}).map(function(t){var e=c(t,3),r=(e[0],e[1]),n=e[2];return Object.assign({},{rule:r},n?{args:n.split(",").map(function(t){return t.trim()})}:{args:[]})})}},{key:"errorFactory",value:function(t){return this.errors[t]?this.errors[t]:this.errors.default}},{key:"validationErrors",value:function(){function t(t,r,n){return e.apply(this,arguments)}var e=i(s.default.mark(function t(e,r,n){var i=e.field,a=e.value,u=e.label,c=this;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!!r&&Promise.all(this.parseRules(r).map(function(t){var e,r=t.rule,s=t.args;if("function"!=typeof c.rules[r])throw new Error("Validation rule is invalid: "+r);return(e=c.rules)[r].apply(e,[{field:i,value:a,label:u,error:c.errorFactory(r),values:n}].concat(o(s)))})).then(function(t){return t.reduce(function(t,e){return e?Array.isArray(t)?t.concat(e):[e]:t},!1)}));case 1:case"end":return t.stop()}},t,this)}));return t}()}]),t}(),w=new x;e.default=w,e.mapModels=function(t){var e={};for(var r in t)!function(r){var n=t[r].split("/"),o=c(n,2),i=o[0],a=o[1];e[r]={set:function(t){var e=w.options.vuexModule?w.options.vuexModule+"/":"";this.$store.commit(e+"setFieldValue",{form:i,field:a,value:t})},get:function(){var t=w.options.vuexModule?w.options.vuexModule+"/":"";return this.$store.getters[t+"formValues"][i]?this.$store.getters[t+"formValues"][i][a]:""}}}(r);return e}},function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(12),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),u=new d(n||[]);return a._invoke=c(t,r,u),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(r,o,i,a){var u=n(t[r],t,o);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==typeof c&&b.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){s.value=t,i(s)},a)}a(u.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function c(t,e,r){var o=O;return function(i,a){if(o===S)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return m()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var s=l(u,r);if(s){if(s===I)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===O)throw o=k,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=S;var c=n(t,e,r);if("normal"===c.type){if(o=r.done?k:A,c.arg===I)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=k,r.method="throw",r.arg=c.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,l(t,e),"throw"===e.method))return I;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return I}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,I;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,I):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,I)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function h(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(b.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=v,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:v,done:!0}}var v,y=Object.prototype,b=y.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},x=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",_=g.toStringTag||"@@toStringTag",E="object"==typeof t,j=e.regeneratorRuntime;if(j)return void(E&&(t.exports=j));j=e.regeneratorRuntime=E?t.exports:{},j.wrap=r;var O="suspendedStart",A="suspendedYield",S="executing",k="completed",I={},F={};F[x]=function(){return this};var P=Object.getPrototypeOf,M=P&&P(P(h([])));M&&M!==y&&b.call(M,x)&&(F=M);var L=a.prototype=o.prototype=Object.create(F);i.prototype=L.constructor=a,a.constructor=i,a[_]=i.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(L),t},j.awrap=function(t){return{__await:t}},u(s.prototype),s.prototype[w]=function(){return this},j.AsyncIterator=s,j.async=function(t,e,n,o){var i=new s(r(t,e,n,o));return j.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(L),L[_]="Generator",L[x]=function(){return this},L.toString=function(){return"[object Generator]"},j.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},j.values=h,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&b.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=b.call(o,"catchLoc"),u=b.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,I):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),I},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),I}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:h(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=v),I}}}(function(){return this}()||Function("return this")())},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0}),e.formulateModule=e.formulateMutations=e.formulateActions=e.formulateGetters=e.formulateState=void 0;var o=r(2),i=e.formulateState=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){return Object.assign({values:{},errors:{},validationErrors:{},meta:{}},t)}},a=e.formulateGetters=function(){var t=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return Object.assign({formValues:function(t){return t.values},formErrors:function(t){return t.errors},formValidationErrors:function(t){return t.validationErrors},formMeta:function(t){return(0,o.reduce)(t.meta,function(t,e,r){return t[e]=(0,o.reduce)(r,function(t,e,r){return t.concat(r)},[]),t},{})},hasErrors:function(t){return(0,o.map)(t.errors,function(t,e){return(0,o.reduce)(e,function(t,e,r){return t||!!r.length},!1)})}},t)},u=e.formulateActions=function(){var t=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return Object.assign({},t)},s=e.formulateMutations=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({setFieldValue:function(t,e){var r=e.form,o=e.field,i=e.value;t.values=Object.assign({},t.values,n({},r,Object.assign({},t.values[r]||{},n({},o,i))))},setFieldErrors:function(t,e){var r=e.form,o=e.field,i=e.errors;t.errors=Object.assign({},t.errors,n({},r,Object.assign({},t.errors[r]||{},n({},o,i))))},setFieldValidationErrors:function(t,e){var r=e.form,o=e.field,i=e.errors;t.validationErrors=Object.assign({},t.validationErrors,n({},r,Object.assign({},t.validationErrors[r]||{},n({},o,i))))},setFieldMeta:function(t,e){var r=e.form,o=e.field,i=e.data;t.meta=Object.assign({},t.meta,n({},r,Object.assign({},t.meta[r]||{},n({},o,i))))}},t)};e.formulateModule=function(t){return{state:i(),getters:a(t),actions:u(t),mutations:s(),namespaced:!0}}},function(t,e,r){"use strict";/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
t.exports=function(t){return null!=t&&"object"==typeof t&&!1===Array.isArray(t)}},function(t,e,r){"use strict";function n(t){var e=a(t);return n.hasOwnProperty(e)?n[e](t):t}/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var o=r(16),i=r(17),a=r(19);n.array=function(t){return t.slice()},n.date=function(t){return new Date(+t)},n.object=function(t){return o(t)?i({},t):t},n.map=function(t){return new Map(t)},n.regexp=function(t){var e="";return e+=t.multiline?"m":"",e+=t.global?"g":"",e+=t.ignoreCase?"i":"",new RegExp(t.source,e)},n.set=function(t){return new Set(t)},t.exports=n},function(t,e,r){"use strict";/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var n=r(3);t.exports=function(t){return n(t)||"function"==typeof t||Array.isArray(t)}},function(t,e,r){"use strict";function n(t,e){o(e)&&i(e,function(e,r){t[r]=e})}var o=r(18),i=r(5);t.exports=function(t,e){if(!o(t))throw new TypeError("expected the first argument to be an object");for(var r=arguments.length,i=0;++i<r;)n(t,arguments[i]);return t}},function(t,e,r){"use strict";/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var n=r(3);t.exports=function(t){return n(t)||"function"==typeof t||Array.isArray(t)}},function(t,e){function r(t){return t.constructor?t.constructor.name:null}function n(t){return Array.isArray?Array.isArray(t):t instanceof Array}function o(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}function i(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}function a(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}function u(t,e){return"GeneratorFunction"===r(t)}function s(t){return"function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}function c(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}function l(t){return!(!t.constructor||"function"!=typeof t.constructor.isBuffer)&&t.constructor.isBuffer(t)}var f=Object.prototype.toString;t.exports=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var e=typeof t;if("boolean"===e)return"boolean";if("string"===e)return"string";if("number"===e)return"number";if("symbol"===e)return"symbol";if("function"===e)return u(t)?"generatorfunction":"function";if(n(t))return"array";if(l(t))return"buffer";if(c(t))return"arguments";if(i(t))return"date";if(o(t))return"error";if(a(t))return"regexp";switch(r(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(s(t))return"generator";switch(e=f.call(t)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return e.slice(8,-1).toLowerCase().replace(/\s/g,"")}},function(t,e){function r(t){return t.constructor?t.constructor.name:null}function n(t){return Array.isArray?Array.isArray(t):t instanceof Array}function o(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}function i(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}function a(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}function u(t,e){return"GeneratorFunction"===r(t)}function s(t){return"function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}function c(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}function l(t){return!(!t.constructor||"function"!=typeof t.constructor.isBuffer)&&t.constructor.isBuffer(t)}var f=Object.prototype.toString;t.exports=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var e=typeof t;if("boolean"===e)return"boolean";if("string"===e)return"string";if("number"===e)return"number";if("symbol"===e)return"symbol";if("function"===e)return u(t)?"generatorfunction":"function";if(n(t))return"array";if(l(t))return"buffer";if(c(t))return"arguments";if(i(t))return"date";if(o(t))return"error";if(a(t))return"regexp";switch(r(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(s(t))return"generator";switch(e=f.call(t)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return e.slice(8,-1).toLowerCase().replace(/\s/g,"")}},function(t,e,r){"use strict";/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var n=r(5),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){n(t,function(n,i){if(o.call(t,i))return e.call(r,t[i],i,t)})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(7),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);var a=r(23),u=r(6),s=u(o.a,a.a,!1,null,null,null);e.default=s.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{staticClass:"formulate-element",on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[t._t("default")],2)},o=[],i={render:n,staticRenderFns:o};e.a=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(8),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);var a=r(33),u=r(6),s=u(o.a,a.a,!1,null,null,null);e.default=s.exports},function(t,e,r){"use strict";t.exports=r(26)},function(t,e,r){"use strict";function n(e){return u.seed(e),t.exports}function o(e){return f=e,t.exports}function i(t){return void 0!==t&&u.characters(t),u.shuffled()}function a(){return c(f)}var u=r(0),s=(r(9),r(29)),c=r(30),l=r(31),f=r(32)||0;t.exports=a,t.exports.generate=a,t.exports.seed=n,t.exports.worker=o,t.exports.characters=i,t.exports.decode=s,t.exports.isValid=l},function(t,e,r){"use strict";function n(){return(i=(9301*i+49297)%233280)/233280}function o(t){i=t}var i=1;t.exports={nextValue:n,seed:o}},function(t,e,r){"use strict";function n(){if(!o||!o.getRandomValues)return 48&Math.floor(256*Math.random());var t=new Uint8Array(1);return o.getRandomValues(t),48&t[0]}var o="object"==typeof window&&(window.crypto||window.msCrypto);t.exports=n},function(t,e,r){"use strict";function n(t){var e=o.shuffled();return{version:15&e.indexOf(t.substr(0,1)),worker:15&e.indexOf(t.substr(1,1))}}var o=r(0);t.exports=n},function(t,e,r){"use strict";function n(t){var e="",r=Math.floor(.001*(Date.now()-s));return r===i?o++:(o=0,i=r),e+=a(u.lookup,c),e+=a(u.lookup,t),o>0&&(e+=a(u.lookup,o)),e+=a(u.lookup,r)}var o,i,a=r(9),u=r(0),s=1459707606518,c=6;t.exports=n},function(t,e,r){"use strict";function n(t){if(!t||"string"!=typeof t||t.length<6)return!1;for(var e=o.characters(),r=t.length,n=0;n<r;n++)if(-1===e.indexOf(t[n]))return!1;return!0}var o=r(0);t.exports=n},function(t,e,r){"use strict";t.exports=0},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.classes},[r("div",{staticClass:"formulate-element-input-wrapper"},[t.label&&(!t.isBoxInput||t.optionList.length>1)?r("label",{attrs:{for:t.id},domProps:{textContent:t._s(t.label)}}):t._e(),t._v(" "),"checkbox"===t.type&&t.isTextInput?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],ref:"input",attrs:{name:t.name,type:"checkbox"},domProps:{checked:Array.isArray(t.val)?t._i(t.val,null)>-1:t.val},on:{blur:function(e){t.errorBlurState=!0},change:function(e){var r=t.val,n=e.target,o=!!n.checked;if(Array.isArray(r)){var i=t._i(r,null);n.checked?i<0&&(t.val=r.concat([null])):i>-1&&(t.val=r.slice(0,i).concat(r.slice(i+1)))}else t.val=o}}},"input",t.attributes,!1)):"radio"===t.type&&t.isTextInput?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],ref:"input",attrs:{name:t.name,type:"radio"},domProps:{checked:t._q(t.val,null)},on:{blur:function(e){t.errorBlurState=!0},change:function(e){t.val=null}}},"input",t.attributes,!1)):t.isTextInput?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],ref:"input",attrs:{name:t.name,type:t.type},domProps:{value:t.val},on:{blur:function(e){t.errorBlurState=!0},input:function(e){e.target.composing||(t.val=e.target.value)}}},"input",t.attributes,!1)):t._e(),t._v(" "),t.isButtonInput?r("button",{attrs:{type:t.type,disabled:"submit"===t.type&&t.form.hasErrors&&"live"===t.form.behavior},domProps:{textContent:t._s(t.label||t.name)}}):t._e(),t._v(" "),t.isSelectInput?r("select",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],attrs:{name:t.name},on:{blur:function(e){t.errorBlurState=!0},change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.val=e.target.multiple?r:r[0]}}},"select",t.attributes,!1),t._l(t.optionList,function(e){return r("option",{key:e.id,domProps:{value:e.value,textContent:t._s(e.label)}})})):t._e(),t._v(" "),t.isBoxInput?r("div",{staticClass:"formulate-element-box-input-group"},[t._l(t.optionList,function(e){return["radio"===t.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],key:e.id+"-input",attrs:{type:"radio",name:t.name,id:e.id},domProps:{value:e.value,checked:t._q(t.val,e.value)},on:{blur:function(e){t.errorBlurState=!0},change:function(r){t.val=e.value}}},"input",t.attributes,!1)):t._e(),t._v(" "),"checkbox"===t.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],key:e.id+"-input",attrs:{type:"checkbox",name:t.name,id:e.id},domProps:{value:e.value,checked:Array.isArray(t.val)?t._i(t.val,e.value)>-1:t.val},on:{blur:function(e){t.errorBlurState=!0},change:function(r){var n=t.val,o=r.target,i=!!o.checked;if(Array.isArray(n)){var a=e.value,u=t._i(n,a);o.checked?u<0&&(t.val=n.concat([a])):u>-1&&(t.val=n.slice(0,u).concat(n.slice(u+1)))}else t.val=i}}},"input",t.attributes,!1)):t._e(),t._v(" "),r("label",{key:e.id+"-label",attrs:{for:e.id},domProps:{textContent:t._s(e.label)}})]})],2):t._e(),t._v(" "),t.hasCustomInput?t._t("default"):t._e(),t._v(" "),t.isUnsupportedInput?r("div",{staticStyle:{"background-color":"red",color:"white"},domProps:{textContent:t._s("Unsupported field type: “"+t.type+"”.")}}):t._e()],2),t._v(" "),t.shouldShowErrors&&t.localAndValidationErrors.length?r("ul",{staticClass:"formulate-errors"},t._l(t.localAndValidationErrors,function(e){return r("li",{key:e,domProps:{textContent:t._s(e)}})})):t._e()])},o=[],i={render:n,staticRenderFns:o};e.a=i},function(t,e,r){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(1),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={required:function(){function t(t){return e.apply(this,arguments)}var e=n(i.default.mark(function t(e){var r=e.value,n=e.error,o=arguments;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!(r&&(!Array.isArray(r)||r.length))&&n.apply(void 0,o));case 1:case"end":return t.stop()}},t,this)}));return t}(),email:function(){function t(t){return e.apply(this,arguments)}var e=n(i.default.mark(function t(e){var r,n=e.value,o=e.error,a=arguments;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=/^(?:[a-z0-9!#$%&amp;'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,t.abrupt("return",!(!n||r.test(n.toLowerCase()))&&o.apply(void 0,a));case 2:case"end":return t.stop()}},t,this)}));return t}(),confirmed:function(){function t(t,r){return e.apply(this,arguments)}var e=n(i.default.mark(function t(e,r){var n=e.field,o=e.value,a=e.error,u=e.values,s=arguments;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=r||n+"_confirmation",t.abrupt("return",!(!o||o===u[r])&&a.apply(void 0,s));case 2:case"end":return t.stop()}},t,this)}));return t}()}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={required:function(t){var e=t.label;return t.value,e+" is required"},email:function(t){var e=t.label;return t.value,e+" is invalid."},confirmed:function(t){var e=t.label;return t.value,e+" does not match the confirmation field."},default:function(t){return t.label,t.value,"This field is invalid."}}}])});