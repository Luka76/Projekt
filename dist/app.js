// import $ from 'jquery';
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _slider = /*#__PURE__*/new WeakMap();

var _rightButton = /*#__PURE__*/new WeakMap();

var _leftButton = /*#__PURE__*/new WeakMap();

var _isTransitionInProgress = /*#__PURE__*/new WeakSet();

var _lastImage = /*#__PURE__*/new WeakSet();

var _firstImage = /*#__PURE__*/new WeakSet();

var _insertElement = /*#__PURE__*/new WeakSet();

var _removeElement = /*#__PURE__*/new WeakSet();

var Slider = /*#__PURE__*/function () {
  function Slider(slider, leftButton, rightButton) {
    _classCallCheck(this, Slider);

    _classPrivateMethodInitSpec(this, _removeElement);

    _classPrivateMethodInitSpec(this, _insertElement);

    _classPrivateMethodInitSpec(this, _firstImage);

    _classPrivateMethodInitSpec(this, _lastImage);

    _classPrivateMethodInitSpec(this, _isTransitionInProgress);

    _classPrivateFieldInitSpec(this, _slider, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _rightButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _leftButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _slider, slider);

    _classPrivateFieldSet(this, _rightButton, rightButton);

    _classPrivateFieldSet(this, _leftButton, leftButton);

    _classPrivateFieldGet(this, _rightButton).on('click', this.next.bind(this));

    _classPrivateFieldGet(this, _leftButton).on('click', this.previous.bind(this)); // this.#rightButton.addEventListener('click', this.next.bind(this));
    // this.#leftButton.addEventListener('click', this.previous.bind(this));

  }

  _createClass(Slider, [{
    key: "previous",
    value: function previous() {
      if (_classPrivateMethodGet(this, _isTransitionInProgress, _isTransitionInProgress2).call(this)) {
        return;
      }

      var first = _classPrivateMethodGet(this, _firstImage, _firstImage2).call(this);

      var duplicated = first.cloneNode(true);

      _classPrivateMethodGet(this, _insertElement, _insertElement2).call(this, duplicated, 'end');

      _classPrivateMethodGet(this, _removeElement, _removeElement2).call(this, first);
    }
  }, {
    key: "next",
    value: function next() {
      if (_classPrivateMethodGet(this, _isTransitionInProgress, _isTransitionInProgress2).call(this)) {
        return;
      }

      var last = _classPrivateMethodGet(this, _lastImage, _lastImage2).call(this);

      var duplicated = last.cloneNode(true);
      console.log('next last', last);

      _classPrivateMethodGet(this, _removeElement, _removeElement2).call(this, last);

      _classPrivateMethodGet(this, _insertElement, _insertElement2).call(this, duplicated);
    }
  }]);

  return Slider;
}();

function _isTransitionInProgress2() {
  return $(_classPrivateFieldGet(this, _slider)).find('.fade-in,.fade-out').length > 0;
}

function _lastImage2() {
  return _classPrivateFieldGet(this, _slider).lastElementChild;
}

function _firstImage2() {
  return _classPrivateFieldGet(this, _slider).firstElementChild;
}

function _insertElement2(el) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';
  el.classList.add('fade-in');

  if (position === 'start') {
    _classPrivateFieldGet(this, _slider).prepend(el);
  } else {
    _classPrivateFieldGet(this, _slider).append(el);
  }

  $(el).on('animationend', function (e) {
    e.target.classList.remove('fade-in');
  });
}

function _removeElement2(el) {
  $(el).on('animationend', function (e) {
    el.remove();
  });
  el.classList.add('fade-out');
}

$(document).ready(function () {
  var slider1 = new Slider($('.slider')[0], $('#left-button'), $('#right-button') // document.querySelectorAll('.slider')[0],
  // document.getElementById('left-button'),
  // document.getElementById('right-button')
  );
  var slider2 = new Slider($('.slider')[1], $('#left-button'), $('#right-button') // document.querySelectorAll('.slider')[1],
  // document.getElementById('left-button'),
  // document.getElementById('right-button')
  );
  console.log("ready!");
});