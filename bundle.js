/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(3),
    Collapse = _require.Collapse;

var _require2 = __webpack_require__(10),
    UnmountClosed = _require2.UnmountClosed;

UnmountClosed.Collapse = Collapse;
UnmountClosed.UnmountClosed = UnmountClosed;

module.exports = UnmountClosed;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableHeight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var VariableHeight = function (_React$PureComponent) {
  _inherits(VariableHeight, _React$PureComponent);

  function VariableHeight(props) {
    _classCallCheck(this, VariableHeight);

    var _this = _possibleConstructorReturn(this, (VariableHeight.__proto__ || Object.getPrototypeOf(VariableHeight)).call(this, props));

    _this.state = { isOpened: false, height: 100 };
    return _this;
  }

  _createClass(VariableHeight, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isOpened = _state.isOpened,
          height = _state.height;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        this.props,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref) {
                var checked = _ref.target.checked;
                return _this2.setState({ isOpened: checked });
              } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Content height:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: height,
              step: 50,
              min: 0,
              max: 500,
              onChange: function onChange(_ref2) {
                var value = _ref2.target.value;
                return _this2.setState({ height: parseInt(value, 10) });
              } }),
            height
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          { isOpened: isOpened },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: height }, className: 'blob' })
        )
      );
    }
  }]);

  return VariableHeight;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-did-update-set-state,react/no-did-mount-set-state */




var SPRING_PRECISION = 1;

var WAITING = 'WAITING';
var RESIZING = 'RESIZING';
var RESTING = 'RESTING';
var IDLING = 'IDLING';

var noop = function noop() {
  return null;
};
var css = {
  collapse: 'ReactCollapse--collapse',
  content: 'ReactCollapse--content'
};

var Collapse = function (_React$PureComponent) {
  _inherits(Collapse, _React$PureComponent);

  function Collapse(props) {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      currentState: IDLING,
      from: 0,
      to: 0
    };
    return _this;
  }

  _createClass(Collapse, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          isOpened = _props.isOpened,
          forceInitialAnimation = _props.forceInitialAnimation,
          onRest = _props.onRest;

      if (isOpened) {
        var to = this.getTo();
        if (forceInitialAnimation) {
          var from = this.wrapper.clientHeight;
          this.setState({ currentState: RESIZING, from: from, to: to });
        } else {
          this.setState({ currentState: IDLING, from: to, to: to });
        }
      }
      onRest();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasNestedCollapse) {
        // For nested collapses we do not need to change to waiting state
        // and should keep `height:auto`
        // Because children will be animated and height will not jump anyway
        // See https://github.com/nkbt/react-collapse/issues/76 for more details
        if (nextProps.isOpened !== this.props.isOpened) {
          // Still go to WAITING state if own isOpened was changed
          this.setState({ currentState: WAITING });
        }
      } else if (this.state.currentState === IDLING && (nextProps.isOpened || this.props.isOpened)) {
        this.setState({ currentState: WAITING });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_, prevState) {
      var _props2 = this.props,
          isOpened = _props2.isOpened,
          onRest = _props2.onRest,
          onMeasure = _props2.onMeasure;


      if (this.state.currentState === IDLING) {
        onRest();
        return;
      }

      if (prevState.to !== this.state.to) {
        onMeasure({ height: this.state.to, width: this.content.clientWidth });
      }

      var from = this.wrapper.clientHeight;
      var to = isOpened ? this.getTo() : 0;

      if (from !== to) {
        this.setState({ currentState: RESIZING, from: from, to: to });
        return;
      }

      if (this.state.currentState === RESTING || this.state.currentState === WAITING) {
        this.setState({ currentState: IDLING, from: from, to: to });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.raf);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_motion__["Motion"],
        _extends({}, this.getMotionProps(), { onRest: this.onRest }),
        this.renderContent
      );
    }
  }]);

  return Collapse;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);
Collapse.defaultProps = {
  springConfig: {},
  forceInitialAnimation: false,
  hasNestedCollapse: false,
  fixedHeight: -1,
  style: {},
  theme: css,
  onRender: noop,
  onRest: noop,
  onMeasure: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onContentRef = function (content) {
    _this2.content = content;
  };

  this.onWrapperRef = function (wrapper) {
    _this2.wrapper = wrapper;
  };

  this.onRest = function () {
    _this2.raf = requestAnimationFrame(_this2.setResting);
  };

  this.setResting = function () {
    _this2.setState({ currentState: RESTING });
  };

  this.getTo = function () {
    var fixedHeight = _this2.props.fixedHeight;

    return fixedHeight > -1 ? fixedHeight : _this2.content.clientHeight;
  };

  this.getWrapperStyle = function (height) {
    if (_this2.state.currentState === IDLING && _this2.state.to) {
      var fixedHeight = _this2.props.fixedHeight;

      if (fixedHeight > -1) {
        return { overflow: 'hidden', height: fixedHeight };
      }
      return { height: 'auto' };
    }

    if (_this2.state.currentState === WAITING && !_this2.state.to) {
      return { overflow: 'hidden', height: 0 };
    }

    return { overflow: 'hidden', height: Math.max(0, height) };
  };

  this.getMotionProps = function () {
    var springConfig = _this2.props.springConfig;


    return _this2.state.currentState === IDLING ? {
      // When completely stable, instantly jump to the position
      defaultStyle: { height: _this2.state.to },
      style: { height: _this2.state.to }
    } : {
      // Otherwise, animate
      defaultStyle: { height: _this2.state.from },
      style: { height: Object(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(_this2.state.to, _extends({ precision: SPRING_PRECISION }, springConfig)) }
    };
  };

  this.renderContent = function (_ref) {
    var height = _ref.height;

    // eslint-disable-line
    var _props3 = _this2.props,
        _isOpened = _props3.isOpened,
        _springConfig = _props3.springConfig,
        _forceInitialAnimation = _props3.forceInitialAnimation,
        _hasNestedCollapse = _props3.hasNestedCollapse,
        _fixedHeight = _props3.fixedHeight,
        theme = _props3.theme,
        style = _props3.style,
        onRender = _props3.onRender,
        _onRest = _props3.onRest,
        _onMeasure = _props3.onMeasure,
        children = _props3.children,
        props = _objectWithoutProperties(_props3, ['isOpened', 'springConfig', 'forceInitialAnimation', 'hasNestedCollapse', 'fixedHeight', 'theme', 'style', 'onRender', 'onRest', 'onMeasure', 'children']);

    var _state = _this2.state,
        from = _state.from,
        to = _state.to;

    // DANGEROUS, use with caution, never do setState with it

    onRender({ current: height, from: from, to: to });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      _extends({
        ref: _this2.onWrapperRef,
        className: theme.collapse,
        style: _extends({}, _this2.getWrapperStyle(Math.max(0, height)), style)
      }, props),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { ref: _this2.onContentRef, className: theme.content },
        children
      )
    );
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactMotion;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ["You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.","Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.","Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.","You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic."]

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_css__);
/* global document */







var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* App */], null), appRoot);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VariableText__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VariableHeight__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FixedHeight__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__InitiallyOpened__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SpringConfig__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Nested__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Hooks__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AutoUnmount__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Issue40__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Issue59__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Issue66__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Issue163__ = __webpack_require__(20);















var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'app' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'react-collapse'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '1. Variable text'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__VariableText__["a" /* VariableText */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '2. Variable text (initially opened)'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__VariableText__["a" /* VariableText */], { isOpened: true })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '3. Variable height content'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__VariableHeight__["a" /* VariableHeight */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '4. Fixed height content'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FixedHeight__["a" /* FixedHeight */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '4. Initially opened'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__InitiallyOpened__["a" /* InitiallyOpened */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '5. Custom spring configuration'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__SpringConfig__["a" /* SpringConfig */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '6. Nested Collapse'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Nested__["a" /* Nested */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '7. Hooks'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Hooks__["a" /* Hooks */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        '8. Auto-unmount when closed'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'closed by default'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__AutoUnmount__["a" /* AutoUnmount */], { isOpened: false }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'section' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'opened by default'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__AutoUnmount__["a" /* AutoUnmount */], { isOpened: true })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Edge cases from issues'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { target: '_blank', rel: 'noopener noreferrer', href: 'https://github.com/nkbt/react-collapse/issues/40' },
          '40'
        ),
        '. Re-render nested components'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Issue40__["a" /* Issue40 */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { target: '_blank', rel: 'noopener noreferrer', href: 'https://github.com/nkbt/react-collapse/issues/59' },
          '59'
        ),
        '. Instantly collapses if re-rendered during collapse'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Issue59__["a" /* Issue59 */], null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { target: '_blank', rel: 'noopener noreferrer', href: 'https://github.com/nkbt/react-collapse/issues/66' },
          '66'
        ),
        '. Unnecessary unmount with keepCollapsedContent'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Opened by default'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Issue66__["a" /* Issue66 */], { isOpened: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Closed by default'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Issue66__["a" /* Issue66 */], { isOpened: false })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'section' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { target: '_blank', rel: 'noopener noreferrer', href: 'https://github.com/nkbt/react-collapse/issues/163' },
          '163'
        ),
        '. Overflow in collapse'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Issue163__["a" /* Issue163 */], null)
    )
  );
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__text_json__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var getText = function getText(num) {
  return __WEBPACK_IMPORTED_MODULE_2__text_json___default.a.slice(0, num).map(function (p, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { key: i },
      p
    );
  });
};

var VariableText = function (_React$Component) {
  _inherits(VariableText, _React$Component);

  function VariableText(props) {
    _classCallCheck(this, VariableText);

    var _this = _possibleConstructorReturn(this, (VariableText.__proto__ || Object.getPrototypeOf(VariableText)).call(this, props));

    _this.state = { isOpened: _this.props.isOpened, paragraphs: 0 };
    return _this;
  }

  _createClass(VariableText, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isOpened = _state.isOpened,
          paragraphs = _state.paragraphs;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref) {
                var checked = _ref.target.checked;
                return _this2.setState({ isOpened: checked });
              } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Paragraphs:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: paragraphs,
              step: 1,
              min: 0,
              max: 4,
              onChange: function onChange(_ref2) {
                var value = _ref2.target.value;
                return _this2.setState({ paragraphs: parseInt(value, 10) });
              } }),
            paragraphs
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          { isOpened: isOpened },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'text' },
            paragraphs ? getText(paragraphs) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'No text'
            )
          )
        )
      );
    }
  }]);

  return VariableText;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
VariableText.defaultProps = {
  isOpened: false
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnmountClosed", function() { return UnmountClosed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collapse__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var UnmountClosed = function (_React$PureComponent) {
  _inherits(UnmountClosed, _React$PureComponent);

  function UnmountClosed(props) {
    _classCallCheck(this, UnmountClosed);

    var _this = _possibleConstructorReturn(this, (UnmountClosed.__proto__ || Object.getPrototypeOf(UnmountClosed)).call(this, props));

    _this.componentWillReceiveProps = function (_ref) {
      var isOpened = _ref.isOpened;

      if (!_this.props.isOpened && isOpened) {
        _this.setState({
          forceInitialAnimation: true,
          shouldUnmount: false
        });
      }
    };

    _this.onRest = function () {
      var _this$props = _this.props,
          isOpened = _this$props.isOpened,
          onRest = _this$props.onRest;


      if (!isOpened) {
        _this.setState({ shouldUnmount: true });
      }
      if (onRest) {
        onRest.apply(undefined, arguments);
      }
    };

    _this.state = {
      shouldUnmount: !_this.props.isOpened,
      forceInitialAnimation: !_this.props.isOpened
    };
    return _this;
  }

  _createClass(UnmountClosed, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpened = _props.isOpened,
          _onRest = _props.onRest,
          props = _objectWithoutProperties(_props, ['isOpened', 'onRest']);

      var _state = this.state,
          forceInitialAnimation = _state.forceInitialAnimation,
          shouldUnmount = _state.shouldUnmount;


      return shouldUnmount ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Collapse__["Collapse"], _extends({
        forceInitialAnimation: forceInitialAnimation,
        isOpened: isOpened,
        onRest: this.onRest
      }, props));
    }
  }]);

  return UnmountClosed;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);
UnmountClosed.defaultProps = {
  onRest: undefined
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedHeight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FixedHeight = function (_React$PureComponent) {
  _inherits(FixedHeight, _React$PureComponent);

  function FixedHeight(props) {
    _classCallCheck(this, FixedHeight);

    var _this = _possibleConstructorReturn(this, (FixedHeight.__proto__ || Object.getPrototypeOf(FixedHeight)).call(this, props));

    _this.state = { isOpened: false, height: 100, fixedHeight: 200 };
    return _this;
  }

  _createClass(FixedHeight, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isOpened = _state.isOpened,
          height = _state.height,
          fixedHeight = _state.fixedHeight;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        this.props,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref) {
                var checked = _ref.target.checked;
                return _this2.setState({ isOpened: checked });
              } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Content height:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: height,
              step: 50,
              min: 0,
              max: 500,
              onChange: function onChange(_ref2) {
                var value = _ref2.target.value;
                return _this2.setState({ height: parseInt(value, 10) });
              } }),
            height
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Collapse height:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: fixedHeight,
              step: 50,
              min: 0,
              max: 500,
              onChange: function onChange(_ref3) {
                var value = _ref3.target.value;
                return _this2.setState({ fixedHeight: parseInt(value, 10) });
              } }),
            fixedHeight
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          { isOpened: isOpened, fixedHeight: fixedHeight },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: height }, className: 'blob' })
        )
      );
    }
  }]);

  return FixedHeight;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitiallyOpened; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var InitiallyOpened = function (_React$PureComponent) {
  _inherits(InitiallyOpened, _React$PureComponent);

  function InitiallyOpened(props) {
    _classCallCheck(this, InitiallyOpened);

    var _this = _possibleConstructorReturn(this, (InitiallyOpened.__proto__ || Object.getPrototypeOf(InitiallyOpened)).call(this, props));

    _this.state = { isOpened: true };
    return _this;
  }

  _createClass(InitiallyOpened, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpened = this.state.isOpened;

      var height = 100;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref) {
                var checked = _ref.target.checked;
                return _this2.setState({ isOpened: checked });
              } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          { isOpened: isOpened },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: height }, className: 'blob' })
        )
      );
    }
  }]);

  return InitiallyOpened;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpringConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SpringConfig = function (_React$PureComponent) {
  _inherits(SpringConfig, _React$PureComponent);

  function SpringConfig(props) {
    _classCallCheck(this, SpringConfig);

    var _this = _possibleConstructorReturn(this, (SpringConfig.__proto__ || Object.getPrototypeOf(SpringConfig)).call(this, props));

    _initialiseProps.call(_this);

    var preset = 'stiff';
    var _presets$preset = __WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"][preset],
        stiffness = _presets$preset.stiffness,
        damping = _presets$preset.damping;


    _this.state = { isOpened: false, height: 100, preset: 'stiff', stiffness: stiffness, damping: damping };
    return _this;
  }

  _createClass(SpringConfig, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isOpened = _state.isOpened,
          height = _state.height,
          preset = _state.preset,
          stiffness = _state.stiffness,
          damping = _state.damping;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref) {
                var checked = _ref.target.checked;
                return _this2.setState({ isOpened: checked });
              } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Content height:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: height,
              step: 50,
              min: 0,
              max: 500,
              onChange: function onChange(_ref2) {
                var value = _ref2.target.value;
                return _this2.setState({ height: parseInt(value, 10) });
              } }),
            height
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Preset:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'select',
              {
                className: 'input',
                value: preset,
                step: 10,
                min: 0,
                max: 300,
                onChange: this.onChangePreset },
              Object.keys(__WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"]).map(function (p) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'option',
                  { key: p, value: p },
                  p
                );
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Stiffness:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: stiffness,
              step: 10,
              min: 0,
              max: 300,
              onChange: function onChange(_ref3) {
                var value = _ref3.target.value;
                return _this2.setState({ stiffness: parseInt(value, 10) });
              } }),
            stiffness
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Damping:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: damping,
              step: 5,
              min: 0,
              max: 40,
              onChange: function onChange(_ref4) {
                var value = _ref4.target.value;
                return _this2.setState({ damping: parseInt(value, 10) });
              } }),
            damping
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__src__["Collapse"],
          {

            isOpened: isOpened,
            springConfig: { stiffness: stiffness, damping: damping } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: height }, className: 'blob' })
        )
      );
    }
  }]);

  return SpringConfig;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChangePreset = function (_ref5) {
    var preset = _ref5.target.value;
    var _presets$preset2 = __WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"][preset],
        stiffness = _presets$preset2.stiffness,
        damping = _presets$preset2.damping;


    _this3.setState({ preset: preset, stiffness: stiffness, damping: damping });
  };
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nested; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VariableHeight__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Nested = function (_React$PureComponent) {
  _inherits(Nested, _React$PureComponent);

  function Nested(props) {
    _classCallCheck(this, Nested);

    var _this = _possibleConstructorReturn(this, (Nested.__proto__ || Object.getPrototypeOf(Nested)).call(this, props));

    _this.state = { isOpened: false };
    return _this;
  }

  _createClass(Nested, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpened = this.state.isOpened;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref) {
                var checked = _ref.target.checked;
                return _this2.setState({ isOpened: checked });
              } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          { isOpened: isOpened, hasNestedCollapse: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__VariableHeight__["a" /* VariableHeight */], { className: 'subCollapse' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__VariableHeight__["a" /* VariableHeight */], { className: 'subCollapse' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__VariableHeight__["a" /* VariableHeight */], { className: 'subCollapse' })
        )
      );
    }
  }]);

  return Nested;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hooks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__text_json__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var getText = function getText(num) {
  return __WEBPACK_IMPORTED_MODULE_2__text_json___default.a.slice(0, num).map(function (p, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { key: i },
      p
    );
  });
};

var Hooks = function (_React$PureComponent) {
  _inherits(Hooks, _React$PureComponent);

  function Hooks(props) {
    _classCallCheck(this, Hooks);

    var _this = _possibleConstructorReturn(this, (Hooks.__proto__ || Object.getPrototypeOf(Hooks)).call(this, props));

    _this.onRender = function (_ref) {
      var current = _ref.current,
          from = _ref.from,
          to = _ref.to;

      if (_this.ref) {
        _this.ref.innerHTML = '\n        from: ' + from.toFixed(2) + ',\n        to: ' + to.toFixed(2) + ',\n        current: ' + current.toFixed(2) + '\n      ';
      }
    };

    _this.onMeasure = function (_ref2) {
      var height = _ref2.height,
          width = _ref2.width;

      _this.setState({ height: height, width: width });
    };

    _this.onRest = function () {
      _this.setState({ isResting: true });
    };

    _this.onRef = function (ref) {
      _this.ref = ref;
    };

    _this.state = {
      isOpened: false,
      isResting: false,
      renderHeight: -1,
      keepContent: false,
      height: -1,
      width: -1,
      paragraphs: 0
    };
    return _this;
  }

  _createClass(Hooks, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isOpened = _state.isOpened,
          height = _state.height,
          width = _state.width,
          paragraphs = _state.paragraphs;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref3) {
                var checked = _ref3.target.checked;
                return _this2.setState({
                  isOpened: checked,
                  isResting: false
                });
              } })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Paragraphs:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'range',
              value: paragraphs,
              step: 1,
              min: 0,
              max: 4,
              onChange: function onChange(_ref4) {
                var value = _ref4.target.value;
                return _this2.setState({
                  paragraphs: parseInt(value, 10),
                  isResting: false
                });
              } }),
            paragraphs
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'height: ',
            height,
            'px'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'width: ',
            width,
            'px'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'resting: ',
            this.state.isResting ? 'true' : 'false'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'label', ref: this.onRef })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          {
            isOpened: isOpened,
            onRender: this.onRender,
            onMeasure: this.onMeasure,
            onRest: this.onRest },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'text' },
            paragraphs ? getText(paragraphs) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'No text'
            )
          )
        )
      );
    }
  }]);

  return Hooks;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoUnmount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Test = function (_React$PureComponent) {
  _inherits(Test, _React$PureComponent);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
  }

  _createClass(Test, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onMount();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onUnmount();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'Test'
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

var AutoUnmount = function (_React$PureComponent2) {
  _inherits(AutoUnmount, _React$PureComponent2);

  function AutoUnmount(props) {
    _classCallCheck(this, AutoUnmount);

    var _this2 = _possibleConstructorReturn(this, (AutoUnmount.__proto__ || Object.getPrototypeOf(AutoUnmount)).call(this, props));

    _this2.onRef = function (ref) {
      _this2.ref = ref;
    };

    _this2.onMount = function () {
      if (_this2.ref) {
        _this2.messages.unshift(_this2.counter + '. Mounted');
        _this2.messages = _this2.messages.slice(0, 5);
        _this2.ref.innerHTML = _this2.messages.join('<br />');
        _this2.counter = _this2.counter + 1;
      }
    };

    _this2.onUnmount = function () {
      if (_this2.ref) {
        _this2.messages.unshift(_this2.counter + '. Unmounted');
        _this2.messages = _this2.messages.slice(0, 5);
        _this2.ref.innerHTML = _this2.messages.join('<br />');
        _this2.counter = _this2.counter + 1;
      }
    };

    _this2.onChange = function (_ref) {
      var checked = _ref.target.checked;

      _this2.setState({ isOpened: checked });
    };

    _this2.state = { isOpened: _this2.props.isOpened, shouldRender: false };
    return _this2;
  }

  _createClass(AutoUnmount, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.counter = 0;
      this.messages = [];
    }
  }, {
    key: 'render',
    value: function render() {
      var isOpened = this.state.isOpened;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'input', type: 'checkbox', checked: isOpened, onChange: this.onChange })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["UnmountClosed"],
          { isOpened: isOpened },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, { onMount: this.onMount, onUnmount: this.onUnmount })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'log', ref: this.onRef })
      );
    }
  }]);

  return AutoUnmount;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue40; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VariableHeight__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Issue40 = function (_React$PureComponent) {
  _inherits(Issue40, _React$PureComponent);

  function Issue40(props) {
    _classCallCheck(this, Issue40);

    var _this = _possibleConstructorReturn(this, (Issue40.__proto__ || Object.getPrototypeOf(Issue40)).call(this, props));

    _this.state = { isOpened: false };
    return _this;
  }

  _createClass(Issue40, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpened = this.state.isOpened;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref) {
                var checked = _ref.target.checked;
                return _this2.setState({ isOpened: checked });
              } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          { isOpened: isOpened, hasNestedCollapse: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__VariableHeight__["a" /* VariableHeight */], { className: 'subCollapse' })
        )
      );
    }
  }]);

  return Issue40;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue59; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/no-static-element-interactions */



var styles = {
  ba: {
    borderWidth: '1px',
    borderStyle: 'solid',
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

var Issue59 = function (_React$PureComponent) {
  _inherits(Issue59, _React$PureComponent);

  function Issue59(props) {
    _classCallCheck(this, Issue59);

    var _this = _possibleConstructorReturn(this, (Issue59.__proto__ || Object.getPrototypeOf(Issue59)).call(this, props));

    _this.onClick1 = function () {
      _this.setState({ opened: 1 });
    };

    _this.onClick2 = function () {
      _this.setState({ opened: 2 }, function () {
        return setTimeout(function () {
          return _this.setState({ whatever: 1 });
        }, 50);
      });
    };

    _this.state = { opened: 1 };
    return _this;
  }

  _createClass(Issue59, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: styles.mb3 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: styles.ba, onClick: this.onClick1 },
            'Header 1'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
            { isOpened: this.state.opened === 1 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: _extends({}, styles.ba, styles.pa3) },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: _extends({}, styles.h3, styles.w3, styles.bgBlack) },
                'a'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: styles.mb3 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: styles.ba, onClick: this.onClick2 },
            'Header 2'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
            { isOpened: this.state.opened === 2 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: _extends({}, styles.ba, styles.pa3) },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: _extends({}, styles.h3, styles.w3, styles.bgBlack) },
                'b'
              )
            )
          )
        )
      );
    }
  }]);

  return Issue59;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue66; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
  }

  _createClass(Test, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onMount();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onUnmount();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'Test'
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Issue66 = function (_React$Component2) {
  _inherits(Issue66, _React$Component2);

  function Issue66(props) {
    _classCallCheck(this, Issue66);

    var _this2 = _possibleConstructorReturn(this, (Issue66.__proto__ || Object.getPrototypeOf(Issue66)).call(this, props));

    _this2.onRef = function (ref) {
      _this2.ref = ref;
    };

    _this2.onMount = function () {
      if (_this2.ref) {
        _this2.messages.unshift(_this2.counter + '. Mounted');
        _this2.messages = _this2.messages.slice(0, 5);
        _this2.ref.innerHTML = _this2.messages.join('<br />');
        _this2.counter = _this2.counter + 1;
      }
    };

    _this2.onUnmount = function () {
      if (_this2.ref) {
        _this2.messages.unshift(_this2.counter + '. Unmounted');
        _this2.messages = _this2.messages.slice(0, 5);
        _this2.ref.innerHTML = _this2.messages.join('<br />');
        _this2.counter = _this2.counter + 1;
      }
    };

    _this2.onChange = function (_ref) {
      var checked = _ref.target.checked;

      _this2.setState({ shouldRender: checked });
    };

    _this2.state = { shouldRender: false };
    return _this2;
  }

  _createClass(Issue66, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.counter = 0;
      this.messages = [];
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Should render:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              type: 'checkbox',
              checked: this.state.shouldRender,
              onChange: this.onChange })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'log', ref: this.onRef }),
        this.state.shouldRender ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          { isOpened: this.props.isOpened },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, { onMount: this.onMount, onUnmount: this.onUnmount })
        ) : null
      );
    }
  }]);

  return Issue66;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue163; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Issue163 = function (_React$PureComponent) {
  _inherits(Issue163, _React$PureComponent);

  function Issue163(props) {
    _classCallCheck(this, Issue163);

    var _this = _possibleConstructorReturn(this, (Issue163.__proto__ || Object.getPrototypeOf(Issue163)).call(this, props));

    _this.onClick = function () {
      return _this.setState({ opened: !_this.state.opened });
    };

    _this.state = {
      isOpened: true,
      isOverflowOpened: true
    };
    return _this;
  }

  _createClass(Issue163, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isOpened = _state.isOpened,
          isOverflowOpened = _state.isOverflowOpened;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'config' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'label' },
            'Opened:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'input',
              type: 'checkbox',
              checked: isOpened,
              onChange: function onChange(_ref) {
                var checked = _ref.target.checked;
                return _this2.setState({ isOpened: checked });
              } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["Collapse"],
          { isOpened: isOpened },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { height: 100, paddingTop: 50, paddingLeft: 50 }, className: 'blob' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'config', style: { position: 'relative' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                { className: 'label' },
                'Overflow opened:',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                  className: 'input',
                  type: 'checkbox',
                  checked: isOverflowOpened,
                  onChange: function onChange(_ref2) {
                    var checked = _ref2.target.checked;
                    return _this2.setState({ isOverflowOpened: checked });
                  } })
              ),
              isOverflowOpened && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: 200, height: 200, background: 'black', position: 'absolute' } })
            )
          )
        )
      );
    }
  }]);

  return Issue163;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);