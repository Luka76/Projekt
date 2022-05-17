"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Slider=void 0;function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _classPrivateMethodInitSpec(a,b){_checkPrivateRedeclaration(a,b),b.add(a)}function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateMethodGet(a,b,c){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return c}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}var _slider=/*#__PURE__*/new WeakMap,_rightButton=/*#__PURE__*/new WeakMap,_leftButton=/*#__PURE__*/new WeakMap,_isTransitionInProgress=/*#__PURE__*/new WeakSet,_lastImage=/*#__PURE__*/new WeakSet,_firstImage=/*#__PURE__*/new WeakSet,_insertElement=/*#__PURE__*/new WeakSet,_removeElement=/*#__PURE__*/new WeakSet,Slider=/*#__PURE__*/function(){function a(b,c,d){_classCallCheck(this,a),_classPrivateMethodInitSpec(this,_removeElement),_classPrivateMethodInitSpec(this,_insertElement),_classPrivateMethodInitSpec(this,_firstImage),_classPrivateMethodInitSpec(this,_lastImage),_classPrivateMethodInitSpec(this,_isTransitionInProgress),_classPrivateFieldInitSpec(this,_slider,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_rightButton,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_leftButton,{writable:!0,value:void 0}),_classPrivateFieldSet(this,_slider,b),_classPrivateFieldSet(this,_rightButton,d),_classPrivateFieldSet(this,_leftButton,c),_classPrivateFieldGet(this,_rightButton).on("click",this.next.bind(this)),_classPrivateFieldGet(this,_leftButton).on("click",this.previous.bind(this))}return _createClass(a,[{key:"previous",value:function previous(){if(!_classPrivateMethodGet(this,_isTransitionInProgress,_isTransitionInProgress2).call(this)){var a=_classPrivateMethodGet(this,_firstImage,_firstImage2).call(this),b=a.cloneNode(!0);_classPrivateMethodGet(this,_insertElement,_insertElement2).call(this,b,"end"),_classPrivateMethodGet(this,_removeElement,_removeElement2).call(this,a)}}},{key:"next",value:function next(){if(!_classPrivateMethodGet(this,_isTransitionInProgress,_isTransitionInProgress2).call(this)){var a=_classPrivateMethodGet(this,_lastImage,_lastImage2).call(this),b=a.cloneNode(!0);_classPrivateMethodGet(this,_removeElement,_removeElement2).call(this,a),_classPrivateMethodGet(this,_insertElement,_insertElement2).call(this,b)}}}]),a}();exports.Slider=Slider;function _isTransitionInProgress2(){return 0<_classPrivateFieldGet(this,_slider).find(".fade-in,.fade-out").length}function _lastImage2(){return _classPrivateFieldGet(this,_slider).lastElementChild}function _firstImage2(){return _classPrivateFieldGet(this,_slider).firstElementChild}function _insertElement2(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"start";$(a).addClass("fade-in"),"start"===b?_classPrivateFieldGet(this,_slider).prepend(a):_classPrivateFieldGet(this,_slider).append(a),$(a).on("animationend",function(){$(a).removeClass("fade-in")})}function _removeElement2(a){$(a).on("animationend",function(){a.remove()}),$(a).addClass("fade-out")}