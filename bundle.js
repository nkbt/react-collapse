/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./example/App/text.json":
/*!*******************************!*\
  !*** ./example/App/text.json ***!
  \*******************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("[\"You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.\",\"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.\",\"Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.\",\"You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic.\"]");

/***/ }),

/***/ "./example/App/Accessible.js":
/*!***********************************!*\
  !*** ./example/App/Accessible.js ***!
  \***********************************/
/*! namespace exports */
/*! export Accessible [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accessible": () => /* binding */ Accessible
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Accessible() {
  var height = 100;
  var accessibilityIds = {
    checkbox: 'accessible-marker-example1',
    button: 'accessible-marker-example2'
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCheckboxCollapseOpen = _useState2[0],
      setIsCheckboxCollapseOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isButtonCollapseOpen = _useState4[0],
      setIsButtonCollapseOpen = _useState4[1];

  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref) {
    var checked = _ref.target.checked;
    return setIsCheckboxCollapseOpen(checked);
  }, [setIsCheckboxCollapseOpen]);
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setIsButtonCollapseOpen(!isButtonCollapseOpen);
  }, [isButtonCollapseOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accessible"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "With a checkbox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "label"
  }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "input",
    type: "checkbox",
    "aria-controls": accessibilityIds.checkbox,
    checked: isCheckboxCollapseOpen,
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
    isOpened: isCheckboxCollapseOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: height
    },
    id: accessibilityIds.checkbox,
    className: "blob"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "With a button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "config"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-controls": accessibilityIds.button,
    "aria-expanded": isButtonCollapseOpen,
    onClick: onClick,
    type: "button"
  }, "Reveal content")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
    isOpened: isButtonCollapseOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: height
    },
    id: accessibilityIds.button,
    className: "blob"
  }))))));
}

/***/ }),

/***/ "./example/App/AutoUnmount.js":
/*!************************************!*\
  !*** ./example/App/AutoUnmount.js ***!
  \************************************/
/*! namespace exports */
/*! export AutoUnmount [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoUnmount": () => /* binding */ AutoUnmount
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Test = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Test, _React$PureComponent);

  var _super = _createSuper(Test);

  function Test() {
    _classCallCheck(this, Test);

    return _super.apply(this, arguments);
  }

  _createClass(Test, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onMount = this.props.onMount;
      onMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onUnmount = this.props.onUnmount;
      onUnmount();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Test");
    }
  }]);

  return Test;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

_defineProperty(Test, "propTypes", {
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onUnmount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

var AutoUnmount = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(AutoUnmount, _React$PureComponent2);

  var _super2 = _createSuper(AutoUnmount);

  function AutoUnmount(props) {
    var _this;

    _classCallCheck(this, AutoUnmount);

    _this = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.ref = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "onMount", function () {
      if (_this.ref) {
        _this.messages.unshift("".concat(_this.counter, ". Mounted"));

        _this.messages = _this.messages.slice(0, 5);
        _this.ref.innerHTML = _this.messages.join('<br />');
        _this.counter = _this.counter + 1;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onUnmount", function () {
      if (_this.ref) {
        _this.messages.unshift("".concat(_this.counter, ". Unmounted"));

        _this.messages = _this.messages.slice(0, 5);
        _this.ref.innerHTML = _this.messages.join('<br />');
        _this.counter = _this.counter + 1;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var checked = _ref.target.checked;

      _this.setState({
        isOpened: checked
      });
    });

    var isOpened = _this.props.isOpened;
    _this.state = {
      isOpened: isOpened
    };
    _this.counter = 0;
    _this.messages = [];
    return _this;
  }

  _createClass(AutoUnmount, [{
    key: "render",
    value: function render() {
      var isOpened = this.state.isOpened;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOpened,
        onChange: this.onChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.UnmountClosed, {
        isOpened: isOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Test, {
        onMount: this.onMount,
        onUnmount: this.onUnmount
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "log",
        ref: this.onRef
      }));
    }
  }]);

  return AutoUnmount;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

_defineProperty(AutoUnmount, "propTypes", {
  isOpened: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
});

/***/ }),

/***/ "./example/App/ForceInitialAnimation.js":
/*!**********************************************!*\
  !*** ./example/App/ForceInitialAnimation.js ***!
  \**********************************************/
/*! namespace exports */
/*! export ForceInitialAnimation [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceInitialAnimation": () => /* binding */ ForceInitialAnimation
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ForceInitialAnimation = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ForceInitialAnimation, _React$PureComponent);

  var _super = _createSuper(ForceInitialAnimation);

  function ForceInitialAnimation(props) {
    var _this;

    _classCallCheck(this, ForceInitialAnimation);

    _this = _super.call(this, props);
    _this.state = {
      isOpened: true
    };
    return _this;
  }

  _createClass(ForceInitialAnimation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpened = this.state.isOpened;
      var height = 100;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOpened,
        onChange: function onChange(_ref) {
          var checked = _ref.target.checked;
          return _this2.setState({
            isOpened: checked
          });
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
        isOpened: isOpened,
        initialStyle: {
          height: 0,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          height: height
        },
        className: "blob"
      })));
    }
  }]);

  return ForceInitialAnimation;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

/***/ }),

/***/ "./example/App/Hooks.js":
/*!******************************!*\
  !*** ./example/App/Hooks.js ***!
  \******************************/
/*! namespace exports */
/*! export Hooks [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hooks": () => /* binding */ Hooks
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text.json */ "./example/App/text.json");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var getText = function getText(num) {
  return _text_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, num).map(function (p) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: p
    }, p);
  });
};

var Hooks = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Hooks, _React$PureComponent);

  var _super = _createSuper(Hooks);

  function Hooks(props) {
    var _this;

    _classCallCheck(this, Hooks);

    _this = _super.call(this, props);
    _this.state = {
      isOpened: false,
      isResting: false,
      paragraphs: 0
    };
    return _this;
  }

  _createClass(Hooks, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isResting = _this$state.isResting,
          isOpened = _this$state.isOpened,
          paragraphs = _this$state.paragraphs,
          params = _this$state.params;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOpened,
        onChange: function onChange(_ref) {
          var checked = _ref.target.checked;
          return _this2.setState({
            isOpened: checked
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Paragraphs:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "range",
        value: paragraphs,
        step: 1,
        min: 0,
        max: 4,
        onChange: function onChange(_ref2) {
          var value = _ref2.target.value;
          return _this2.setState({
            paragraphs: parseInt(value, 10)
          });
        }
      }), paragraphs)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "label"
      }, "Resting:", ' ', isResting ? 'true' : 'false'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "label"
      }, "onRest/onWork arguments:", ' ', params)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
        isOpened: isOpened,
        onWork: function onWork(p) {
          return _this2.setState({
            isResting: false,
            params: JSON.stringify(p)
          });
        },
        onRest: function onRest(p) {
          return _this2.setState({
            isResting: true,
            params: JSON.stringify(p)
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text"
      }, paragraphs ? getText(paragraphs) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No text"))));
    }
  }]);

  return Hooks;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

/***/ }),

/***/ "./example/App/InitiallyOpened.js":
/*!****************************************!*\
  !*** ./example/App/InitiallyOpened.js ***!
  \****************************************/
/*! namespace exports */
/*! export InitiallyOpened [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitiallyOpened": () => /* binding */ InitiallyOpened
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var InitiallyOpened = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(InitiallyOpened, _React$PureComponent);

  var _super = _createSuper(InitiallyOpened);

  function InitiallyOpened(props) {
    var _this;

    _classCallCheck(this, InitiallyOpened);

    _this = _super.call(this, props);
    _this.state = {
      isOpened: true
    };
    return _this;
  }

  _createClass(InitiallyOpened, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpened = this.state.isOpened;
      var height = 100;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOpened,
        onChange: function onChange(_ref) {
          var checked = _ref.target.checked;
          return _this2.setState({
            isOpened: checked
          });
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
        isOpened: isOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          height: height
        },
        className: "blob"
      })));
    }
  }]);

  return InitiallyOpened;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

/***/ }),

/***/ "./example/App/Issue163.js":
/*!*********************************!*\
  !*** ./example/App/Issue163.js ***!
  \*********************************/
/*! namespace exports */
/*! export Issue163 [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Issue163": () => /* binding */ Issue163
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Issue163 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Issue163, _React$PureComponent);

  var _super = _createSuper(Issue163);

  function Issue163(props) {
    var _this;

    _classCallCheck(this, Issue163);

    _this = _super.call(this, props);
    _this.state = {
      isOpened: true,
      isOverflowOpened: true
    };
    return _this;
  }

  _createClass(Issue163, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isOpened = _this$state.isOpened,
          isOverflowOpened = _this$state.isOverflowOpened;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOpened,
        onChange: function onChange(_ref) {
          var checked = _ref.target.checked;
          return _this2.setState({
            isOpened: checked
          });
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
        isOpened: isOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          height: 100,
          paddingTop: 50,
          paddingLeft: 50
        },
        className: "blob"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config",
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Overflow opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOverflowOpened,
        onChange: function onChange(_ref2) {
          var checked = _ref2.target.checked;
          return _this2.setState({
            isOverflowOpened: checked
          });
        }
      })), isOverflowOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          width: 200,
          height: 200,
          background: 'black',
          position: 'absolute'
        }
      })))));
    }
  }]);

  return Issue163;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

/***/ }),

/***/ "./example/App/Issue59.js":
/*!********************************!*\
  !*** ./example/App/Issue59.js ***!
  \********************************/
/*! namespace exports */
/*! export Issue59 [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Issue59": () => /* binding */ Issue59
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/no-static-element-interactions */


var styles = {
  ba: {
    display: 'block',
    background: 'none',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer'
  },
  mb3: {
    marginBottom: '1rem'
  },
  pa3: {
    padding: '1rem'
  },
  h3: {
    height: '4rem',
    width: '4rem',
    backgroundColor: '#000'
  },
  w3: {
    width: '4rem'
  },
  bgBlack: {
    backgroundColor: '#000'
  }
};
var Issue59 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Issue59, _React$PureComponent);

  var _super = _createSuper(Issue59);

  function Issue59(props) {
    var _this;

    _classCallCheck(this, Issue59);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onClick1", function () {
      _this.setState({
        opened: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClick2", function () {
      _this.setState({
        opened: 2
      }, function () {
        return setTimeout(function () {
          return _this.setState({
            whatever: 'bb'
          });
        }, 50);
      });
    });

    _this.state = {
      opened: 1,
      whatever: 'b'
    };
    return _this;
  }

  _createClass(Issue59, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          opened = _this$state.opened,
          whatever = _this$state.whatever;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: styles.mb3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        style: styles.ba,
        onClick: this.onClick1
      }, "Header 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
        isOpened: opened === 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: _objectSpread(_objectSpread({}, styles.ba), styles.pa3)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: _objectSpread(_objectSpread(_objectSpread({}, styles.h3), styles.w3), styles.bgBlack)
      }, "a")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: styles.mb3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        style: styles.ba,
        onClick: this.onClick2
      }, "Header 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
        isOpened: opened === 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: _objectSpread(_objectSpread({}, styles.ba), styles.pa3)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: _objectSpread(_objectSpread(_objectSpread({}, styles.h3), styles.w3), styles.bgBlack)
      }, whatever)))));
    }
  }]);

  return Issue59;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

/***/ }),

/***/ "./example/App/Issue66.js":
/*!********************************!*\
  !*** ./example/App/Issue66.js ***!
  \********************************/
/*! namespace exports */
/*! export Issue66 [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Issue66": () => /* binding */ Issue66
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Test = /*#__PURE__*/function (_React$Component) {
  _inherits(Test, _React$Component);

  var _super = _createSuper(Test);

  function Test() {
    _classCallCheck(this, Test);

    return _super.apply(this, arguments);
  }

  _createClass(Test, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onMount = this.props.onMount;
      onMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onUnmount = this.props.onUnmount;
      onUnmount();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Test");
    }
  }]);

  return Test;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

_defineProperty(Test, "propTypes", {
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onUnmount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

var Issue66 = /*#__PURE__*/function (_React$Component2) {
  _inherits(Issue66, _React$Component2);

  var _super2 = _createSuper(Issue66);

  function Issue66(props) {
    var _this;

    _classCallCheck(this, Issue66);

    _this = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "counter", 0);

    _defineProperty(_assertThisInitialized(_this), "messages", []);

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.ref = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "onMount", function () {
      if (_this.ref) {
        _this.messages.unshift("".concat(_this.counter, ". Mounted"));

        _this.messages = _this.messages.slice(0, 5);
        _this.ref.innerHTML = _this.messages.join('<br />');
        _this.counter = _this.counter + 1;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onUnmount", function () {
      if (_this.ref) {
        _this.messages.unshift("".concat(_this.counter, ". Unmounted"));

        _this.messages = _this.messages.slice(0, 5);
        _this.ref.innerHTML = _this.messages.join('<br />');
        _this.counter = _this.counter + 1;
      }
    });

    _this.state = {
      shouldRender: false
    };
    return _this;
  }

  _createClass(Issue66, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var shouldRender = this.state.shouldRender;
      var isOpened = this.props.isOpened;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Should render:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        checked: shouldRender,
        onChange: function onChange(_ref) {
          var checked = _ref.target.checked;
          return _this2.setState({
            shouldRender: checked
          });
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "log",
        ref: this.onRef
      }), shouldRender ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
        isOpened: isOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Test, {
        onMount: this.onMount,
        onUnmount: this.onUnmount
      })) : null);
    }
  }]);

  return Issue66;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

_defineProperty(Issue66, "propTypes", {
  isOpened: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
});

/***/ }),

/***/ "./example/App/Nested.js":
/*!*******************************!*\
  !*** ./example/App/Nested.js ***!
  \*******************************/
/*! namespace exports */
/*! export Nested [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nested": () => /* binding */ Nested
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VariableHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VariableHeight */ "./example/App/VariableHeight.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Nested = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Nested, _React$PureComponent);

  var _super = _createSuper(Nested);

  function Nested(props) {
    var _this;

    _classCallCheck(this, Nested);

    _this = _super.call(this, props);
    _this.state = {
      isOpened: false
    };
    return _this;
  }

  _createClass(Nested, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpened = this.state.isOpened;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOpened,
        onChange: function onChange(_ref) {
          var checked = _ref.target.checked;
          return _this2.setState({
            isOpened: checked
          });
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
        isOpened: isOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VariableHeight__WEBPACK_IMPORTED_MODULE_2__.VariableHeight, {
        className: "subCollapse"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VariableHeight__WEBPACK_IMPORTED_MODULE_2__.VariableHeight, {
        className: "subCollapse"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VariableHeight__WEBPACK_IMPORTED_MODULE_2__.VariableHeight, {
        className: "subCollapse"
      })));
    }
  }]);

  return Nested;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

/***/ }),

/***/ "./example/App/VariableHeight.js":
/*!***************************************!*\
  !*** ./example/App/VariableHeight.js ***!
  \***************************************/
/*! namespace exports */
/*! export VariableHeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariableHeight": () => /* binding */ VariableHeight
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var VariableHeight = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(VariableHeight, _React$PureComponent);

  var _super = _createSuper(VariableHeight);

  function VariableHeight(props) {
    var _this;

    _classCallCheck(this, VariableHeight);

    _this = _super.call(this, props);
    _this.state = {
      isOpened: false,
      height: 100
    };
    return _this;
  }

  _createClass(VariableHeight, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isOpened = _this$state.isOpened,
          height = _this$state.height;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", this.props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOpened,
        onChange: function onChange(_ref) {
          var checked = _ref.target.checked;
          return _this2.setState({
            isOpened: checked
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Content height:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "range",
        value: height,
        step: 50,
        min: 0,
        max: 500,
        onChange: function onChange(_ref2) {
          var value = _ref2.target.value;
          return _this2.setState({
            height: parseInt(value, 10)
          });
        }
      }), height)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
        isOpened: isOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          height: height
        },
        className: "blob"
      })));
    }
  }]);

  return VariableHeight;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

/***/ }),

/***/ "./example/App/VariableText.js":
/*!*************************************!*\
  !*** ./example/App/VariableText.js ***!
  \*************************************/
/*! namespace exports */
/*! export VariableText [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariableText": () => /* binding */ VariableText
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src */ "./src/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text.json */ "./example/App/text.json");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var getText = function getText(num) {
  return _text_json__WEBPACK_IMPORTED_MODULE_3__.slice(0, num).map(function (p) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: p
    }, p);
  });
};

var VariableText = /*#__PURE__*/function (_React$Component) {
  _inherits(VariableText, _React$Component);

  var _super = _createSuper(VariableText);

  function VariableText(props) {
    var _this;

    _classCallCheck(this, VariableText);

    _this = _super.call(this, props);
    var isOpened = _this.props.isOpened;
    _this.state = {
      isOpened: isOpened,
      paragraphs: 0
    };
    return _this;
  }

  _createClass(VariableText, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isOpened = _this$state.isOpened,
          paragraphs = _this$state.paragraphs;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "config"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opened:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "checkbox",
        checked: isOpened,
        onChange: function onChange(_ref) {
          var checked = _ref.target.checked;
          return _this2.setState({
            isOpened: checked
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Paragraphs:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "range",
        value: paragraphs,
        step: 1,
        min: 0,
        max: 4,
        onChange: function onChange(_ref2) {
          var value = _ref2.target.value;
          return _this2.setState({
            paragraphs: parseInt(value, 10)
          });
        }
      }), paragraphs)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
        isOpened: isOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text"
      }, paragraphs ? getText(paragraphs) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No text"))));
    }
  }]);

  return VariableText;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

_defineProperty(VariableText, "propTypes", {
  isOpened: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
});

_defineProperty(VariableText, "defaultProps", {
  isOpened: false
});

/***/ }),

/***/ "./example/App/index.js":
/*!******************************!*\
  !*** ./example/App/index.js ***!
  \******************************/
/*! namespace exports */
/*! export App [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => /* binding */ App
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VariableText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VariableText */ "./example/App/VariableText.js");
/* harmony import */ var _VariableHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VariableHeight */ "./example/App/VariableHeight.js");
/* harmony import */ var _InitiallyOpened__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InitiallyOpened */ "./example/App/InitiallyOpened.js");
/* harmony import */ var _Nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nested */ "./example/App/Nested.js");
/* harmony import */ var _Hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hooks */ "./example/App/Hooks.js");
/* harmony import */ var _Accessible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Accessible */ "./example/App/Accessible.js");
/* harmony import */ var _AutoUnmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AutoUnmount */ "./example/App/AutoUnmount.js");
/* harmony import */ var _ForceInitialAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ForceInitialAnimation */ "./example/App/ForceInitialAnimation.js");
/* harmony import */ var _Issue59__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Issue59 */ "./example/App/Issue59.js");
/* harmony import */ var _Issue66__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Issue66 */ "./example/App/Issue66.js");
/* harmony import */ var _Issue163__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Issue163 */ "./example/App/Issue163.js");












var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "react-collapse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Variable text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VariableText__WEBPACK_IMPORTED_MODULE_1__.VariableText, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Variable text (initially opened)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VariableText__WEBPACK_IMPORTED_MODULE_1__.VariableText, {
    isOpened: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Variable height content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VariableHeight__WEBPACK_IMPORTED_MODULE_2__.VariableHeight, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Initially opened"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InitiallyOpened__WEBPACK_IMPORTED_MODULE_3__.InitiallyOpened, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Force initial animation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ForceInitialAnimation__WEBPACK_IMPORTED_MODULE_8__.ForceInitialAnimation, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Nested Collapse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nested__WEBPACK_IMPORTED_MODULE_4__.Nested, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Hooks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hooks__WEBPACK_IMPORTED_MODULE_5__.Hooks, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Accessible examples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Accessible__WEBPACK_IMPORTED_MODULE_6__.Accessible, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Auto-unmount when closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "closed by default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AutoUnmount__WEBPACK_IMPORTED_MODULE_7__.AutoUnmount, {
    isOpened: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "opened by default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AutoUnmount__WEBPACK_IMPORTED_MODULE_7__.AutoUnmount, {
    isOpened: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Edge cases from issues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/nkbt/react-collapse/issues/59"
  }, "Issue 59"), "\xA0Accordion component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Issue59__WEBPACK_IMPORTED_MODULE_9__.Issue59, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/nkbt/react-collapse/issues/66"
  }, "Issue 66"), "\xA0Unnecessary unmounts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Opened by default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Issue66__WEBPACK_IMPORTED_MODULE_10__.Issue66, {
    id: "Issue66-opened",
    isOpened: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Closed by default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Issue66__WEBPACK_IMPORTED_MODULE_10__.Issue66, {
    id: "Issue66-closed",
    isOpened: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section",
    style: {
      minHeight: 400
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/nkbt/react-collapse/issues/163"
  }, "Issue 163"), "\xA0Overflow in collapse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Issue163__WEBPACK_IMPORTED_MODULE_11__.Issue163, null)));
};

/***/ }),

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./example/App/index.js");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.css */ "./example/reset.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.css */ "./example/app.css");





var appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);
react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__.App, null), appRoot);

/***/ }),

/***/ "./src/Collapse.js":
/*!*************************!*\
  !*** ./src/Collapse.js ***!
  \*************************/
/*! namespace exports */
/*! export Collapse [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collapse": () => /* binding */ Collapse
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Collapse = /*#__PURE__*/function (_React$Component) {
  _inherits(Collapse, _React$Component);

  var _super = _createSuper(Collapse);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "timeout", undefined);

    _defineProperty(_assertThisInitialized(_this), "container", undefined);

    _defineProperty(_assertThisInitialized(_this), "content", undefined);

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      clearTimeout(_this.timeout);

      if (!_this.container || !_this.content) {
        return;
      }

      var _this$props = _this.props,
          isOpened = _this$props.isOpened,
          checkTimeout = _this$props.checkTimeout;
      var containerHeight = Math.floor(_this.container.clientHeight);
      var contentHeight = Math.floor(_this.content.clientHeight);
      var isFullyOpened = isOpened && Math.abs(contentHeight - containerHeight) <= 1;
      var isFullyClosed = !isOpened && Math.abs(containerHeight) <= 1;

      if (isFullyOpened || isFullyClosed) {
        _this.onRest({
          isFullyOpened: isFullyOpened,
          isFullyClosed: isFullyClosed,
          isOpened: isOpened,
          containerHeight: containerHeight,
          contentHeight: contentHeight
        });
      } else {
        _this.onWork({
          isFullyOpened: isFullyOpened,
          isFullyClosed: isFullyClosed,
          isOpened: isOpened,
          containerHeight: containerHeight,
          contentHeight: contentHeight
        });

        _this.timeout = setTimeout(function () {
          return _this.onResize();
        }, checkTimeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onRest", function (_ref) {
      var isFullyOpened = _ref.isFullyOpened,
          isFullyClosed = _ref.isFullyClosed,
          isOpened = _ref.isOpened,
          containerHeight = _ref.containerHeight,
          contentHeight = _ref.contentHeight;

      if (!_this.container || !_this.content) {
        return;
      }

      var hasOpened = isOpened && _this.container.style.height === "".concat(contentHeight, "px");
      var hasClosed = !isOpened && _this.container.style.height === '0px';

      if (hasOpened || hasClosed) {
        _this.container.style.overflow = isOpened ? 'initial' : 'hidden';
        _this.container.style.height = isOpened ? 'auto' : '0px';
        var onRest = _this.props.onRest;

        if (onRest) {
          onRest({
            isFullyOpened: isFullyOpened,
            isFullyClosed: isFullyClosed,
            isOpened: isOpened,
            containerHeight: containerHeight,
            contentHeight: contentHeight
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onWork", function (_ref2) {
      var isFullyOpened = _ref2.isFullyOpened,
          isFullyClosed = _ref2.isFullyClosed,
          isOpened = _ref2.isOpened,
          containerHeight = _ref2.containerHeight,
          contentHeight = _ref2.contentHeight;

      if (!_this.container || !_this.content) {
        return;
      }

      var isOpenining = isOpened && _this.container.style.height === "".concat(contentHeight, "px");
      var isClosing = !isOpened && _this.container.style.height === '0px';

      if (isOpenining || isClosing) {
        // No need to do any work
        return;
      }

      _this.container.style.overflow = 'hidden';
      _this.container.style.height = isOpened ? "".concat(contentHeight, "px") : '0px';
      var onWork = _this.props.onWork;

      if (onWork) {
        onWork({
          isFullyOpened: isFullyOpened,
          isFullyClosed: isFullyClosed,
          isOpened: isOpened,
          containerHeight: containerHeight,
          contentHeight: contentHeight
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onRefContainer", function (container) {
      _this.container = container;
    });

    _defineProperty(_assertThisInitialized(_this), "onRefContent", function (content) {
      _this.content = content;
    });

    if (props.initialStyle) {
      _this.initialStyle = props.initialStyle;
    } else {
      _this.initialStyle = props.isOpened ? {
        height: 'auto',
        overflow: 'initial'
      } : {
        height: '0px',
        overflow: 'hidden'
      };
    }

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onResize();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          isOpened = _this$props2.isOpened,
          children = _this$props2.children;
      return children !== nextProps.children || isOpened !== nextProps.isOpened || Object.keys(theme).some(function (c) {
        return theme[c] !== nextProps.theme[c];
      });
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      if (!this.container || !this.content) {
        return null;
      }

      if (this.container.style.height === 'auto') {
        var contentHeight = this.content.clientHeight;
        this.container.style.height = "".concat(contentHeight, "px");
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          children = _this$props3.children,
          isOpened = _this$props3.isOpened;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this.onRefContainer,
        className: theme.collapse,
        style: this.initialStyle,
        "aria-hidden": !isOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this.onRefContent,
        className: theme.content
      }, children));
    }
  }]);

  return Collapse;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

_defineProperty(Collapse, "propTypes", {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    collapse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  isOpened: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  initialStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    height: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
    overflow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  onRest: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onWork: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  checkTimeout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
});

_defineProperty(Collapse, "defaultProps", {
  theme: {
    collapse: 'ReactCollapse--collapse',
    content: 'ReactCollapse--content'
  },
  initialStyle: undefined,
  onRest: undefined,
  onWork: undefined,
  checkTimeout: 50
});

/***/ }),

/***/ "./src/UnmountClosed.js":
/*!******************************!*\
  !*** ./src/UnmountClosed.js ***!
  \******************************/
/*! namespace exports */
/*! export UnmountClosed [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnmountClosed": () => /* binding */ UnmountClosed
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collapse */ "./src/Collapse.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var UnmountClosed = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(UnmountClosed, _React$PureComponent);

  var _super = _createSuper(UnmountClosed);

  function UnmountClosed(props) {
    var _this;

    _classCallCheck(this, UnmountClosed);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onWork", function (_ref) {
      var isOpened = _ref.isOpened,
          rest = _objectWithoutProperties(_ref, ["isOpened"]);

      _this.setState({
        isResting: false,
        isOpened: isOpened
      });

      var onWork = _this.props.onWork;

      if (onWork) {
        onWork(_objectSpread({
          isOpened: isOpened
        }, rest));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onRest", function (_ref2) {
      var isOpened = _ref2.isOpened,
          rest = _objectWithoutProperties(_ref2, ["isOpened"]);

      _this.setState({
        isResting: true,
        isOpened: isOpened,
        isInitialRender: false
      });

      var onRest = _this.props.onRest;

      if (onRest) {
        onRest(_objectSpread({
          isOpened: isOpened
        }, rest));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialStyle", function () {
      var _this$state = _this.state,
          isOpened = _this$state.isOpened,
          isInitialRender = _this$state.isInitialRender;

      if (isInitialRender) {
        return isOpened ? {
          height: 'auto',
          overflow: 'initial'
        } : {
          height: '0px',
          overflow: 'hidden'
        };
      }

      return {
        height: '0px',
        overflow: 'hidden'
      };
    });

    _this.state = {
      isResting: true,
      isOpened: props.isOpened,
      isInitialRender: true
    };
    return _this;
  }

  _createClass(UnmountClosed, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isOpened = this.props.isOpened;

      if (prevProps.isOpened !== isOpened) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isResting: false,
          isOpened: isOpened,
          isInitialRender: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          isResting = _this$state2.isResting,
          isOpened = _this$state2.isOpened;
      return isResting && !isOpened ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Collapse__WEBPACK_IMPORTED_MODULE_2__.Collapse, _extends({}, this.props, {
        initialStyle: this.getInitialStyle(),
        onWork: this.onWork,
        onRest: this.onRest
      }));
    }
  }]);

  return UnmountClosed;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

_defineProperty(UnmountClosed, "propTypes", {
  isOpened: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  onWork: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onRest: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
});

_defineProperty(UnmountClosed, "defaultProps", {
  onWork: undefined,
  onRest: undefined
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./Collapse */ "./src/Collapse.js"),
    Collapse = _require.Collapse;

var _require2 = __webpack_require__(/*! ./UnmountClosed */ "./src/UnmountClosed.js"),
    UnmountClosed = _require2.UnmountClosed; // Default export


module.exports = UnmountClosed; // Extra "named exports"

UnmountClosed.Collapse = Collapse;
UnmountClosed.UnmountClosed = UnmountClosed;

/***/ }),

/***/ "./example/app.css":
/*!*************************!*\
  !*** ./example/app.css ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./example/reset.css":
/*!***************************!*\
  !*** ./example/reset.css ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 65:0-14 */
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 102:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 38:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 14:2-16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 12:0-14 */
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! default exports */
/*! export AsyncMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ConcurrentMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ContextConsumer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ContextProvider [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Element [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ForwardRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Fragment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Lazy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Memo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Portal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Profiler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export StrictMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Suspense [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isAsyncMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isConcurrentMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isContextConsumer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isContextProvider [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isForwardRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFragment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isLazy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isMemo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isPortal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isProfiler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isStrictMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSuspense [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValidElementType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export typeOf [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! dynamic exports */
/*! export AsyncMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .AsyncMode */
/*! export ConcurrentMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .ConcurrentMode */
/*! export ContextConsumer [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .ContextConsumer */
/*! export ContextProvider [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .ContextProvider */
/*! export Element [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Element */
/*! export ForwardRef [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .ForwardRef */
/*! export Fragment [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Fragment */
/*! export Lazy [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Lazy */
/*! export Memo [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Memo */
/*! export Portal [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Portal */
/*! export Profiler [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Profiler */
/*! export StrictMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .StrictMode */
/*! export Suspense [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Suspense */
/*! export isAsyncMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isAsyncMode */
/*! export isConcurrentMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isConcurrentMode */
/*! export isContextConsumer [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isContextConsumer */
/*! export isContextProvider [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isContextProvider */
/*! export isElement [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isElement */
/*! export isForwardRef [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isForwardRef */
/*! export isFragment [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isFragment */
/*! export isLazy [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isLazy */
/*! export isMemo [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isMemo */
/*! export isPortal [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isPortal */
/*! export isProfiler [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isProfiler */
/*! export isStrictMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isStrictMode */
/*! export isSuspense [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isSuspense */
/*! export isValidElementType [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isValidElementType */
/*! export typeOf [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .typeOf */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./example/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;