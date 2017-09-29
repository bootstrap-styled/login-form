import _react from 'react';
import _propTypes from 'prop-types';
import _styledComponents, { keyframes } from 'styled-components';
import _classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from 'message-common';
import _reactDom from 'react-dom';
import { LoadingIndicator } from 'loaders';
import { FadeInRight, theme } from 'bootstrap-styled-motion';
import reactRedux from 'react-redux';
import redux from 'redux';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var chainFunction = function chain(){
  var len = arguments.length;
  var args = [];
  for (var i = 0; i < len; i++)
    args[i] = arguments[i];
  args = args.filter(function(fn){ return fn != null });
  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]
  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
};

'use strict';
var __DEV__ = "development" !== 'production';
var warning = function() {};
if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }
    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }
    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch(x) {}
    }
  };
}
var warning_1 = warning;

var ChildMapping = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }
    return prev[key];
  }
  var nextKeysPending = {};
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
});
unwrapExports(ChildMapping);

var TransitionGroup_1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _chainFunction2 = _interopRequireDefault(chainFunction);
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _warning2 = _interopRequireDefault(warning_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};
var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);
  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;
      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };
    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }
      delete _this.currentlyTransitioningKeys[key];
      var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);
      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        _this.performLeave(key, component);
      }
    };
    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;
      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };
    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }
      delete _this.currentlyTransitioningKeys[key];
      var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);
      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        _this.performLeave(key, component);
      }
    };
    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;
      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        _this._handleDoneLeaving(key, component);
      }
    };
    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }
      delete _this.currentlyTransitioningKeys[key];
      var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);
      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };
    _this.childRefs = Object.create(null);
    _this.state = {
      children: (0, ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }
  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };
  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };
  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;
    this.setState({
      children: (0, ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });
    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }
    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }
  };
  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;
    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });
    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };
  TransitionGroup.prototype.render = function render() {
    var _this3 = this;
    var childrenToRender = [];
    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };
        (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute');
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };
    for (var key in this.state.children) {
      _loop(key);
    }
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;
    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };
  return TransitionGroup;
}(_react2.default.Component);
TransitionGroup.displayName = 'TransitionGroup';
TransitionGroup.propTypes = propTypes;
TransitionGroup.defaultProps = defaultProps;
exports.default = TransitionGroup;
module.exports = exports['default'];
});
unwrapExports(TransitionGroup_1);

var hasClass_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];
});
unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;
var _hasClass2 = _interopRequireDefault(hasClass_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];
});
unwrapExports(addClass_1);

'use strict';
var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

var inDOM = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];
});
unwrapExports(inDOM);

var requestAnimationFrame = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _inDOM2 = _interopRequireDefault(inDOM);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;
var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};
if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');
    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}
compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];
});
unwrapExports(requestAnimationFrame);

var properties = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;
var _inDOM2 = _interopRequireDefault(inDOM);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;
if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();
  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}
exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';
  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];
    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }
  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}
});
unwrapExports(properties);

var PropTypes = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    if (props[enabledPropName]) {
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }
    return null;
  };
}
var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);
});
unwrapExports(PropTypes);

var CSSTransitionGroupChild_1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _addClass2 = _interopRequireDefault(addClass_1);
var _removeClass2 = _interopRequireDefault(removeClass);
var _requestAnimationFrame2 = _interopRequireDefault(requestAnimationFrame);
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var events = [];
if (properties.transitionEnd) events.push(properties.transitionEnd);
if (properties.animationEnd) events.push(properties.animationEnd);
function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }
  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}
var propTypes = {
  children: _propTypes2.default.node,
  name: PropTypes.nameShape.isRequired,
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};
var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);
  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;
    _classCallCheck(this, CSSTransitionGroupChild);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };
  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });
    this.classNameAndNodeQueue.length = 0;
  };
  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);
    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }
    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;
    (0, _addClass2.default)(node, className);
    this.queueClassAndNode(activeClassName, node);
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }
      clearTimeout(timer);
      if (removeListeners) removeListeners();
      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);
      if (removeListeners) removeListeners();
      if (finishCallback) {
        finishCallback();
      }
    };
    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };
  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;
    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });
    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };
  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        obj.node.scrollTop;
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };
  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };
  return CSSTransitionGroupChild;
}(_react2.default.Component);
CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';
CSSTransitionGroupChild.propTypes = propTypes;
exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];
});
unwrapExports(CSSTransitionGroupChild_1);

var CSSTransitionGroup_1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _TransitionGroup2 = _interopRequireDefault(TransitionGroup_1);
var _CSSTransitionGroupChild2 = _interopRequireDefault(CSSTransitionGroupChild_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propTypes = {
  transitionName: PropTypes.nameShape.isRequired,
  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, PropTypes.transitionTimeout)('Leave')
};
var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};
var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);
  function CSSTransitionGroup() {
    var _temp, _this, _ret;
    _classCallCheck(this, CSSTransitionGroup);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };
  return CSSTransitionGroup;
}(_react2.default.Component);
CSSTransitionGroup.displayName = 'CSSTransitionGroup';
CSSTransitionGroup.propTypes = propTypes;
CSSTransitionGroup.defaultProps = defaultProps;
exports.default = CSSTransitionGroup;
module.exports = exports['default'];
});
unwrapExports(CSSTransitionGroup_1);

var LARGE_ARRAY_SIZE = 200;
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var INFINITY = 1 / 0;
var MAX_SAFE_INTEGER = 9007199254740991;
var argsTag = '[object Arguments]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var symbolTag = '[object Symbol]';
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function('return this')();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);
  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
function baseIsNaN(value) {
  return value !== value;
}
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
function cacheHas(cache, key) {
  return cache.has(key);
}
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
var Symbol$1 = root.Symbol;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var nativeMax = Math.max;
var Map = getNative(root, 'Map');
var nativeCreate = getNative(Object, 'create');
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;
  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arrayLikeKeys(value, inherited) {
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];
  var length = result.length,
      skipIndexes = !!length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;
    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};
  while (++index < length) {
    var key = props[index],
        value = object[key];
    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
  return value === proto;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}
function isArguments(value) {
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
var isArray = Array.isArray;
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function isFunction(value) {
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var omit = baseRest(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(baseFlatten(props, 1), toKey);
  return basePick(object, baseDifference(getAllKeysIn(object), props));
});
function stubArray() {
  return [];
}
var lodash_omit = omit;

function mapToCssModules(className, cssModule) {
  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}



var mapToCssModules_es = Object.freeze({
	default: mapToCssModules
});

'use strict';
var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

'use strict';
var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}
	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {
'use strict';
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
	var results = [];
	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];
		if (isArrayish(arg)) {
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}
	return results;
};
swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
var reverseNames = {};
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}
var cs = module.exports = {
	to: {}
};
cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}
	if (!val) {
		return null;
	}
	return {model: model, value: val};
};
cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}
	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;
	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;
	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];
		for (i = 0; i < 3; i++) {
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}
		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}
		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}
		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}
		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}
		rgb = colorName[match[1]];
		if (!rgb) {
			return null;
		}
		rgb[3] = 1;
		return rgb;
	} else {
		return null;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);
	return rgb;
};
cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}
	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);
	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, s, l, a];
	}
	return null;
};
cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}
	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);
	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}
	return null;
};
cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);
	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};
cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};
cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);
	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};
cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);
	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}
	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};
cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});

var conversions = createCommonjsModule(function (module) {
var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}
var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}
		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}
		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}
		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}
convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	l = (min + max) / 2;
	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}
	return [h, s * 100, l * 100];
};
convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;
	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	v = ((max / 255) * 1000) / 10;
	return [h, s, v];
};
convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));
	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	return [h, w * 100, b * 100];
};
convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;
	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;
	return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}
convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}
	var currentClosestDistance = Infinity;
	var currentClosestKeyword;
	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];
			var distance = comparativeDistance(rgb, value);
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}
	return currentClosestKeyword;
};
convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};
convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	return [x * 100, y * 100, z * 100];
};
convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;
	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}
	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}
	t1 = 2 * l - t2;
	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}
		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}
		rgb[i] = val * 255;
	}
	return rgb;
};
convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;
	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);
	return [h, sv * 100, v * 100];
};
convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;
	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;
	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};
convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;
	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;
	return [h, sl * 100, l * 100];
};
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}
	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;
	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}
	n = wh + f * (v - wh);
	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}
	return [r * 255, g * 255, b * 255];
};
convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;
	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);
	return [r * 255, g * 255, b * 255];
};
convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;
	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;
	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;
	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;
	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);
	return [r * 255, g * 255, b * 255];
};
convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;
	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;
	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
	x *= 95.047;
	y *= 100;
	z *= 108.883;
	return [x, y, z];
};
convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;
	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;
	if (h < 0) {
		h += 360;
	}
	c = Math.sqrt(a * a + b * b);
	return [l, c, h];
};
convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;
	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);
	return [l, a, b];
};
convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
	value = Math.round(value / 50);
	if (value === 0) {
		return 30;
	}
	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));
	if (value === 2) {
		ansi += 60;
	}
	return ansi;
};
convert.hsv.ansi16 = function (args) {
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}
		if (r > 248) {
			return 231;
		}
		return Math.round(((r - 8) / 247) * 24) + 232;
	}
	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);
	return ansi;
};
convert.ansi16.rgb = function (args) {
	var color = args % 10;
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}
		color = color / 10.5 * 255;
		return [color, color, color];
	}
	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;
	return [r, g, b];
};
convert.ansi256.rgb = function (args) {
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}
	args -= 16;
	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;
	return [r, g, b];
};
convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}
	var colorString = match[0];
	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}
	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;
	return [r, g, b];
};
convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;
	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}
	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}
	hue /= 6;
	hue %= 1;
	return [hue * 360, chroma * 100, grayscale * 100];
};
convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;
	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}
	return [hsl[0], c * 100, f * 100];
};
convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var c = s * v;
	var f = 0;
	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}
	return [hsv[0], c * 100, f * 100];
};
convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}
	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	mg = (1.0 - c) * g;
	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};
convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	var f = 0;
	if (v > 0.0) {
		f = c / v;
	}
	return [hcg[0], f * 100, v * 100];
};
convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;
	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}
	return [hcg[0], s * 100, l * 100];
};
convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;
	if (c < 1) {
		g = (v - c) / (1 - c);
	}
	return [hwb[0], c * 100, g * 100];
};
convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};
convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};
convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};
convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};
convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};
convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};
convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});

var models$1 = Object.keys(conversions);
function buildGraph() {
	var graph = {};
	for (var len = models$1.length, i = 0; i < len; i++) {
		graph[models$1[i]] = {
			distance: -1,
			parent: null
		};
	}
	return graph;
}
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel];
	graph[fromModel].distance = 0;
	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);
		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];
			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}
	return graph;
}
function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}
function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];
	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}
	fn.conversion = path;
	return fn;
}
var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};
	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];
		if (node.parent === null) {
			continue;
		}
		conversion[toModel] = wrapConversion(toModel, graph);
	}
	return conversion;
};

var convert = {};
var models = Object.keys(conversions);
function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		return fn(args);
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		var result = fn(args);
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}
		return result;
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
models.forEach(function (fromModel) {
	convert[fromModel] = {};
	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});
	var routes = route(fromModel);
	var routeModels = Object.keys(routes);
	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];
		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});
var colorConvert = convert;

'use strict';
var _slice = [].slice;
var skippedModels = [
	'keyword',
	'gray',
	'hex'
];
var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});
var limiters = {};
function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}
	if (model && model in skippedModels) {
		model = null;
	}
	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}
	var i;
	var channels;
	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}
		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;
		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}
		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}
		this.model = hashedModelKeys[hashedKeys];
		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}
		this.color = zeroArray(color);
	}
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}
	this.valpha = Math.max(0, Math.min(1, this.valpha));
	if (Object.freeze) {
		Object.freeze(this);
	}
}
Color.prototype = {
	toString: function () {
		return this.string();
	},
	toJSON: function () {
		return this[this.model]();
	},
	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},
	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},
	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},
	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;
		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}
		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}
		return result;
	},
	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;
		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}
		return rgb;
	},
	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;
		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}
		return rgb;
	},
	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},
	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}
		return this.valpha;
	},
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),
	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }),
	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),
	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),
	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),
	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),
	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),
	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),
	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),
	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}
		return colorConvert[this.model].keyword(this.color);
	},
	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}
		return colorString.to.hex(this.rgb().round().color);
	},
	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},
	luminosity: function () {
		var rgb = this.rgb().color;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},
	contrast: function (color2) {
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},
	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}
		return (contrastRatio >= 4.5) ? 'AA' : '';
	},
	dark: function () {
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},
	light: function () {
		return !this.dark();
	},
	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},
	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},
	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},
	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},
	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},
	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},
	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},
	grayscale: function () {
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},
	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},
	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},
	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},
	mix: function (mixinColor, weight) {
		var color1 = this.rgb();
		var color2 = mixinColor.rgb();
		var p = weight === undefined ? 0.5 : weight;
		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();
		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;
		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}
	var channels = colorConvert[model].channels;
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}
		if (arguments.length) {
			return new Color(arguments, model);
		}
		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});
function roundTo(num, places) {
	return Number(num.toFixed(places));
}
function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}
function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];
	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});
	model = model[0];
	return function (val) {
		var result;
		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}
			result = this[model]();
			result.color[channel] = val;
			return result;
		}
		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}
		return result;
	};
}
function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}
function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}
function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}
	return arr;
}
var color = Color;

var alert = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertVariant = alertVariant;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function alertVariant(background, border, bodyColor) {
  return '\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    color: ' + bodyColor + ';\n  \n    hr {\n      border-top-color: ' + (0, _color2.default)(border).darken(0.5).toString() + ';\n    }\n    .alert-link {\n      color: ' + (0, _color2.default)(bodyColor).darken(0.1).toString() + ';\n    }\n  ';
}
exports.default = {
  alertVariant: alertVariant
};
});
unwrapExports(alert);

var borderRadius_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderRadius = borderRadius;
exports.borderTopRadius = borderTopRadius;
exports.borderRightRadius = borderRightRadius;
exports.borderBottomRadius = borderBottomRadius;
exports.borderLeftRadius = borderLeftRadius;
var defaultProps = exports.defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function borderRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderTopRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-top-right-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderRightRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-top-right-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderBottomRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-bottom-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderLeftRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-left-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
exports.default = {
  defaultProps: defaultProps,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius
};
});
unwrapExports(borderRadius_1);
var borderRadius_2 = borderRadius_1.borderRadius;

var unitUtils = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var UnitUtils = function UnitUtils() {
  var _this = this;
  _classCallCheck(this, UnitUtils);
  this.UNIT = {
    EM: 'em',
    REM: 'rem',
    PX: 'px',
    PERCENT: '%'
  };
  this.math = {
    addition: function addition(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) + this.rmUnit(b) + unit;
    }.bind(this),
    subtract: function subtract(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) - this.rmUnit(b) + unit;
    }.bind(this),
    multiply: function multiply(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) * this.rmUnit(b) + unit;
    }.bind(this),
    divide: function divide(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) / this.rmUnit(b) + unit;
    }.bind(this)
  };
  this.detectUnit = function (value) {
    var ext = void 0;
    var valueStr = value.toString();
    if (valueStr.match(_this.UNIT.PX)) {
      ext = _this.UNIT.PX;
    } else if (valueStr.match(_this.UNIT.REM)) {
      ext = _this.UNIT.REM;
    } else if (valueStr.match(_this.UNIT.EM)) {
      ext = _this.UNIT.EM;
    } else if (valueStr.match(_this.UNIT.PERCENT)) {
      ext = _this.UNIT.PERCENT;
    } else if (!isNaN(value)) {
      return null;
    } else {
      throw new Error('detectUnit can\'t find unit for ' + value);
    }
    return ext;
  };
  this.rmUnit = function (value, unit) {
    var valueStr = value.toString();
    var ext = unit || _this.detectUnit(valueStr);
    var number = valueStr.replace(ext, '');
    return parseFloat(number);
  };
  this.toPercent = function (value) {
    var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    return '' + Math.floor(value / total * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal) + _this.UNIT.PERCENT;
  };
};
exports.default = new UnitUtils();
module.exports = exports['default'];
});
unwrapExports(unitUtils);

var process = { argv: [], env: {} };

var variables = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertAscending = assertAscending;
exports.assertStartAtZero = assertStartAtZero;
exports.comparable = comparable;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function assertAscending(map, mapName) {
  var prevKey = void 0;
  var prevNum = void 0;
  var asserted = true;
  Object.keys(map).forEach(function (key) {
    var num = map[key];
    if (prevNum == null) {
    } else if (!comparable(_unitUtils2.default.rmUnit(prevNum), _unitUtils2.default.rmUnit(num))) {
      if (process.env.NODE !== 'test') {
        console.warn('Potentially invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' whose unit makes it incomparable to ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
      }
      asserted = false;
    } else if (_unitUtils2.default.rmUnit(prevNum) >= _unitUtils2.default.rmUnit(num)) {
      if (process.env.NODE !== 'test') {
        console.warn('Invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' which isn\'t greater than ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
      }
      asserted = false;
    }
    prevKey = key;
    prevNum = num;
  });
  return asserted;
}
function assertStartAtZero(map) {
  var values = Object.keys(map).map(function (key) {
    return map[key];
  });
  var firstValue = _unitUtils2.default.rmUnit(values[0]);
  var asserted = true;
  if (firstValue !== 0) {
    if (process.env.NODE !== 'test') {
      console.warn('First breakpoint in $grid-breakpoints must start at 0, but starts at ' + firstValue + '.');
    }
    asserted = false;
  }
  return asserted;
}
function comparable(a, b) {
  return !isNaN(a + b);
}
exports.default = {
  assertAscending: assertAscending,
  assertStartAtZero: assertStartAtZero,
  comparable: comparable
};
});
unwrapExports(variables);

var utils = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowFalseValue = allowFalseValue;
function allowFalseValue(userValue, defaultValue) {
  return userValue === false ? userValue : userValue || defaultValue;
}
});
unwrapExports(utils);

var makeOriginal_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeOriginal;
var _color2 = _interopRequireDefault(color);
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var detectUnit = _unitUtils2.default.detectUnit,
    rmUnit = _unitUtils2.default.rmUnit,
    UNIT = _unitUtils2.default.UNIT;
function makeOriginal() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$red'] = u['$red'] || '#d9534f';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$yellow'] = u['$yellow'] || '#ffd500';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$pink'] = u['$pink'] || '#ff5b77';
  v['$purple'] = u['$purple'] || '#613d7c';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$brand-inverse'] = u['$brand-inverse'] || v['$gray-dark'];
  v['$enable-rounded'] = (0, utils.allowFalseValue)(u['$enable-rounded'], true);
  v['$enable-shadows'] = (0, utils.allowFalseValue)(u['$enable-shadows'], false);
  v['$enable-gradients'] = (0, utils.allowFalseValue)(u['$enable-gradients'], false);
  v['$enable-transitions'] = (0, utils.allowFalseValue)(u['$enable-transitions'], true);
  v['$enable-hover-media-query'] = (0, utils.allowFalseValue)(u['$enable-hover-media-query'], false);
  v['$enable-grid-classes'] = (0, utils.allowFalseValue)(u['$enable-grid-classes'], true);
  v['$enable-print-styles'] = (0, utils.allowFalseValue)(u['$enable-print-styles'], true);
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;
  v['$spacer-x'] = u['$spacer-x'] || v['$spacer'];
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  var detectedUnit = detectUnit(v['$spacer']);
  v['$spacers'] = u['$spacers'] || {
    0: {
      x: 0,
      y: 0
    },
    1: {
      x: rmUnit(v['$spacer-x']) * 0.25 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 0.25 + detectedUnit
    },
    2: {
      x: rmUnit(v['$spacer-x']) * 0.5 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 0.5 + detectedUnit
    },
    3: {
      x: v['$spacer-x'],
      y: v['$spacer-y']
    },
    4: {
      x: rmUnit(v['$spacer-x']) * 1.5 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 1.5 + detectedUnit
    },
    5: {
      x: rmUnit(v['$spacer-x']) * 3 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 3 + detectedUnit
    }
  };
  v['$border-width'] = u['$border-width'] || '1px';
  v['$sizes'] = u['$sizes'] || {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%'
  };
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$link-color'] = u['$link-color'] || v['$brand-primary'];
  v['$link-decoration'] = u['$link-decoration'] || 'none';
  v['$link-hover-color'] = u['$link-hover-color'] || (0, _color2.default)(v['$link-color']).darken(0.35).toString();
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'underline';
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  (0, variables.assertAscending)(v['$grid-breakpoints'], '$grid-breakpoints');
  (0, variables.assertStartAtZero)(v['$grid-breakpoints']);
  v['$container-max-widths'] = u['$container-max-widths'] || {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  };
  (0, variables.assertAscending)(v['$container-max-widths'], '$container-max-widths');
  v['$grid-columns'] = u['$grid-columns'] || '12';
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  v['$font-family-sans-serif'] = u['$font-family-sans-serif'] || '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  v['$font-family-base'] = u['$font-family-base'] || v['$font-family-sans-serif'];
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-size-xs'] = u['$font-size-xs'] || '.75rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';
  v['$font-weight-base'] = u['$font-weight-base'] || v['$font-weight-normal'];
  v['$line-height-base'] = u['$line-height-base'] || '1.5';
  v['$font-size-h1'] = '2.5rem';
  v['$font-size-h2'] = '2rem';
  v['$font-size-h3'] = '1.75rem';
  v['$font-size-h4'] = '1.5rem';
  v['$font-size-h5'] = '1.25rem';
  v['$font-size-h6'] = '1rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = '6rem';
  v['$display2-size'] = '5.5rem';
  v['$display3-size'] = '4.5rem';
  v['$display4-size'] = '3.5rem';
  v['$display1-weight'] = '300';
  v['$display2-weight'] = '300';
  v['$display3-weight'] = '300';
  v['$display4-weight'] = '300';
  v['$display-line-height'] = u['$display-line-height'] || v['$headings-line-height'];
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  v['$small-font-size'] = u['$small-font-size'] || '80%';
  v['$text-muted'] = u['$text-muted'] || v['$gray-light'];
  v['$blockquote-small-color'] = u['$blockquote-small-color'] || v['$gray-light'];
  v['$blockquote-font-size'] = u['$blockquote-font-size'] || rmUnit(v['$font-size-base'], UNIT.REM) * 1.25 + UNIT.REM;
  v['$blockquote-border-color'] = u['$blockquote-border-color'] || v['$gray-lighter'];
  v['$blockquote-border-width'] = u['$blockquote-border-width'] || '.25rem';
  v['$hr-border-color'] = u['$hr-border-color'] || (0, _color2.default)(v['$black']).alpha(0.1).toString();
  v['$hr-border-width'] = u['$hr-border-width'] || v['$border-width'];
  v['$mark-padding'] = u['$mark-padding'] || '.2em';
  v['$dt-font-weight'] = u['$dt-font-weight'] || v['$font-weight-bold'];
  v['$kbd-box-shadow'] = u['$kbd-box-shadow'] || 'inset 0 -.1rem 0 ' + (0, _color2.default)(v['$black']).alpha(0.25).toString();
  v['$nested-kbd-font-weight'] = u['$nested-kbd-font-weight'] || v['$font-weight-bold'];
  v['$list-inline-padding'] = u['$list-inline-padding'] || '5px';
  v['$line-height-lg'] = u['$line-height-lg'] || '1.3';
  v['$line-height-sm'] = u['$line-height-sm'] || '1.5';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$caret-width'] = u['$caret-width'] || '.3em';
  v['$transition-base'] = u['$transition-base'] || 'all .2s ease-in-out';
  v['$transition-fade'] = u['$transition-fade'] || 'opacity .15s linear';
  v['$transition-collapse'] = u['$transition-collapse'] || 'height .35s ease';
  v['$table-cell-padding'] = u['$table-cell-padding'] || '.75rem';
  v['$table-sm-cell-padding'] = u['$table-sm-cell-padding'] || '.3rem';
  v['$table-bg'] = u['$table-bg'] || 'transparent';
  v['$table-inverse-bg'] = u['$table-inverse-bg'] || v['$gray-dark'];
  v['$table-inverse-bg-accent'] = u['$table-inverse-bg-accent'] || (0, _color2.default)(v['$white']).alpha(0.05).toString();
  v['$table-inverse-bg-hover'] = u['$table-inverse-bg-hover'] || (0, _color2.default)(v['$white']).alpha(0.075).toString();
  v['$table-inverse-color'] = u['$table-inverse-color'] || v['$body-bg'];
  v['$table-inverse-border'] = u['$table-inverse-border'] || (0, _color2.default)(v['$gray-dark']).lighten(0.075).toString();
  v['$table-bg-accent'] = u['$table-bg-accent'] || (0, _color2.default)(v['$black']).alpha(0.05).toString();
  v['$table-bg-hover'] = u['$table-bg-hover'] || (0, _color2.default)(v['$black']).alpha(0.075).toString();
  v['$table-bg-active'] = u['$table-bg-active'] || v['$table-bg-hover'];
  v['$table-head-bg'] = u['$table-head-bg'] || v['$gray-lighter'];
  v['$table-head-color'] = u['$table-head-color'] || v['$gray'];
  v['$table-border-width'] = u['$table-border-width'] || v['$border-width'];
  v['$table-border-color'] = u['$table-border-color'] || v['$gray-lighter'];
  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-padding-y'] = u['$btn-padding-y'] || '.5rem';
  v['$btn-line-height'] = u['$btn-line-height'] || '1.25';
  v['$btn-font-weight'] = u['$btn-font-weight'] || v['$font-weight-normal'];
  v['$btn-box-shadow'] = u['$btn-box-shadow'] || 'inset 0 1px 0 ' + (0, _color2.default)(v['$white']).alpha(0.15).toString() + ', 0 1px 1px ' + (0, _color2.default)(v['$black']).alpha(0.075).toString();
  v['$btn-focus-box-shadow'] = u['$btn-focus-box-shadow'] || '0 0 0 2px ' + (0, _color2.default)(v['$brand-primary']).alpha(0.25).toString();
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || 'inset 0 3px 5px ' + (0, _color2.default)(v['$black']).alpha(0.125).toString();
  v['$btn-primary-color'] = u['$btn-primary-color'] || v['$white'];
  v['$btn-primary-bg'] = u['$btn-primary-bg'] || v['$brand-primary'];
  v['$btn-primary-border'] = u['$btn-primary-border'] || v['$btn-primary-bg'];
  v['$btn-secondary-color'] = u['$btn-secondary-color'] || v['$gray-dark'];
  v['$btn-secondary-bg'] = u['$btn-secondary-bg'] || v['$white'];
  v['$btn-secondary-border'] = u['$btn-secondary-border'] || '#ccc';
  v['$btn-info-color'] = u['$btn-info-color'] || v['$white'];
  v['$btn-info-bg'] = u['$btn-info-bg'] || v['$brand-info'];
  v['$btn-info-border'] = u['$btn-info-border'] || v['$btn-info-bg'];
  v['$btn-success-color'] = u['$btn-success-color'] || v['$white'];
  v['$btn-success-bg'] = u['$btn-success-bg'] || v['$brand-success'];
  v['$btn-success-border'] = u['$btn-success-border'] || v['$btn-success-bg'];
  v['$btn-warning-color'] = u['$btn-warning-color'] || v['$white'];
  v['$btn-warning-bg'] = u['$btn-warning-bg'] || v['$brand-warning'];
  v['$btn-warning-border'] = u['$btn-warning-border'] || v['$btn-warning-bg'];
  v['$btn-danger-color'] = u['$btn-danger-color'] || v['$white'];
  v['$btn-danger-bg'] = u['$btn-danger-bg'] || v['$brand-danger'];
  v['$btn-danger-border'] = u['$btn-danger-border'] || v['$btn-danger-bg'];
  v['$btn-link-disabled-color'] = u['$btn-link-disabled-color'] || v['$gray-light'];
  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';
  v['$btn-block-spacing-y'] = u['$btn-block-spacing-y'] || '.5rem';
  v['$btn-border-radius'] = u['$btn-border-radius'] || v['$border-radius'];
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];
  v['$btn-transition'] = u['$btn-transition'] || 'all .2s ease-in-out';
  v['$input-padding-x'] = u['$input-padding-x'] || '.75rem';
  v['$input-padding-y'] = u['$input-padding-y'] || '.5rem';
  v['$input-line-height'] = u['$input-line-height'] || '1.25';
  v['$input-bg'] = u['$input-bg'] || v['$white'];
  v['$input-bg-disabled'] = u['$input-bg-disabled'] || v['$gray-lighter'];
  v['$input-color'] = u['$input-color'] || v['$gray'];
  v['$input-border-color'] = u['$input-border-color'] || (0, _color2.default)(v['$black']).alpha(0.15).toString();
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];
  v['$input-box-shadow'] = u['$input-box-shadow'] || 'inset 0 1px 1px ' + (0, _color2.default)(v['$black']).alpha(0.075).toString();
  v['$input-border-radius'] = u['$input-border-radius'] || v['$border-radius'];
  v['$input-border-radius-lg'] = u['$input-border-radius-lg'] || v['$border-radius-lg'];
  v['$input-border-radius-sm'] = u['$input-border-radius-sm'] || v['$border-radius-sm'];
  v['$input-bg-focus'] = u['$input-bg-focus'] || v['$input-bg'];
  v['$input-border-focus'] = u['$input-border-focus'] || (0, _color2.default)(v['$brand-primary']).lighten(0.25).toString();
  v['$input-box-shadow-focus'] = u['$input-box-shadow-focus'] || v['$input-box-shadow'] + ', 0 0 8px rgba(' + v['$input-border-focus'] + ',.6)';
  v['$input-color-focus'] = u['$input-color-focus'] || v['$input-color'];
  v['$input-color-placeholder'] = u['$input-color-placeholder'] || v['$gray-light'];
  v['$input-padding-x-sm'] = u['$input-padding-x-sm'] || '.5rem';
  v['$input-padding-y-sm'] = u['$input-padding-y-sm'] || '.25rem';
  v['$input-padding-x-lg'] = u['$input-padding-x-lg'] || '1.5rem';
  v['$input-padding-y-lg'] = u['$input-padding-y-lg'] || '.75rem';
  v['$input-height'] = u['$input-height'] || rmUnit(v['$font-size-base'], UNIT.REM) * v['$line-height-base'] + rmUnit(v['$input-padding-y'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-height-sm'] = u['$input-height-sm'] || rmUnit(v['$font-size-sm'], UNIT.REM) * v['$line-height-sm'] + rmUnit(v['$input-padding-y-sm'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-height-lg'] = u['$input-height-lg'] || rmUnit(v['$font-size-lg'], UNIT.REM) * v['$line-height-lg'] + rmUnit(v['$input-padding-y-lg'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-transition'] = u['$input-transition'] || 'border-color ease-in-out .15s, box-shadow ease-in-out .15s';
  v['$form-text-margin-top'] = u['$form-text-margin-top'] || '.25rem';
  v['$form-feedback-margin-top'] = u['$form-feedback-margin-top'] || v['$form-text-margin-top'];
  v['$form-check-margin-bottom'] = u['$form-check-margin-bottom'] || '.5rem';
  v['$form-check-input-gutter'] = u['$form-check-input-gutter'] || '1.25rem';
  v['$form-check-input-margin-y'] = u['$form-check-input-margin-y'] || '.25rem';
  v['$form-check-input-margin-x'] = u['$form-check-input-margin-x'] || '.25rem';
  v['$form-check-inline-margin-x'] = u['$form-check-inline-margin-x'] || '.75rem';
  v['$form-group-margin-bottom'] = u['$form-group-margin-bottom'] || v['$spacer-y'];
  v['$input-group-addon-bg'] = u['$input-group-addon-bg'] || v['$gray-lighter'];
  v['$input-group-addon-border-color'] = u['$input-group-addon-border-color'] || v['$input-border-color'];
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$custom-control-gutter'] = u['$custom-control-gutter'] || '1.5rem';
  v['$custom-control-spacer-x'] = u['$custom-control-spacer-x'] || '1rem';
  v['$custom-control-spacer-y'] = u['$custom-control-spacer-y'] || '.25rem';
  v['$custom-control-indicator-size'] = u['$custom-control-indicator-size'] || '1rem';
  v['$custom-control-indicator-bg'] = u['$custom-control-indicator-bg'] || '#ddd';
  v['$custom-control-indicator-bg-size'] = u['$custom-control-indicator-bg-size'] || '50% 50%';
  v['$custom-control-indicator-box-shadow'] = u['$custom-control-indicator-box-shadow'] || 'inset 0 .25rem .25rem ' + (0, _color2.default)(v['$black']).alpha(0.1).toString();
  v['$custom-control-disabled-cursor'] = u['$custom-control-disabled-cursor'] || v['$cursor-disabled'];
  v['$custom-control-disabled-indicator-bg'] = u['$custom-control-disabled-indicator-bg'] || v['$gray-lighter'];
  v['$custom-control-disabled-description-color'] = u['$custom-control-disabled-description-color'] || v['$gray-light'];
  v['$custom-control-checked-indicator-color'] = u['$custom-control-checked-indicator-color'] || v['$white'];
  v['$custom-control-checked-indicator-bg'] = u['$custom-control-checked-indicator-bg'] || v['$brand-primary'];
  v['$custom-control-checked-indicator-box-shadow'] = u['$custom-control-checked-indicator-box-shadow'] || 'none';
  v['$custom-control-focus-indicator-box-shadow'] = u['$custom-control-focus-indicator-box-shadow'] || '0 0 0 1px ' + v['$body-bg'] + ', 0 0 0 3px ' + v['$brand-primary'];
  v['$custom-control-active-indicator-color'] = u['$custom-control-active-indicator-color'] || v['$white'];
  v['$custom-control-active-indicator-bg'] = u['$custom-control-active-indicator-bg'] || (0, _color2.default)(v['$brand-primary']).lighten(0.35).toString();
  v['$custom-control-active-indicator-box-shadow'] = u['$custom-control-active-indicator-box-shadow'] || 'none';
  v['$custom-checkbox-radius'] = u['$custom-checkbox-radius'] || v['$border-radius'];
  v['$custom-checkbox-checked-icon'] = u['$custom-checkbox-checked-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$custom-control-checked-indicator-color'] + '" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E\')';
  v['$custom-checkbox-indeterminate-bg'] = u['$custom-checkbox-indeterminate-bg'] || v['$brand-primary'];
  v['$custom-checkbox-indeterminate-indicator-color'] = u['$custom-checkbox-indeterminate-indicator-color'] || v['$custom-control-checked-indicator-color'];
  v['$custom-checkbox-indeterminate-icon'] = u['$custom-checkbox-indeterminate-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="' + v['$custom-checkbox-indeterminate-indicator-color'] + '" d="M0 2h4"/%3E%3C/svg%3E\')';
  v['$custom-checkbox-indeterminate-box-shadow'] = u['$custom-checkbox-indeterminate-box-shadow'] || 'none';
  v['$custom-radio-radius'] = u['$custom-radio-radius'] || '50%';
  v['$custom-radio-checked-icon'] = u['$custom-radio-checked-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="' + v['$custom-control-checked-indicator-color'] + '"/%3E%3C/svg%3E\')';
  v['$custom-select-padding-x'] = u['$custom-select-padding-x'] || '.75rem ';
  v['$custom-select-padding-y'] = u['$custom-select-padding-y'] || '.375rem';
  v['$custom-select-indicator-padding'] = u['$custom-select-indicator-padding'] || '1rem';
  v['$custom-select-line-height'] = u['$custom-select-line-height'] || v['$input-line-height'];
  v['$custom-select-color'] = u['$custom-select-color'] || v['$input-color'];
  v['$custom-select-disabled-color'] = u['$custom-select-disabled-color'] || v['$gray-light'];
  v['$custom-select-bg'] = u['$custom-select-bg'] || v['$white'];
  v['$custom-select-disabled-bg'] = u['$custom-select-disabled-bg'] || v['$gray-lighter'];
  v['$custom-select-bg-size'] = u['$custom-select-bg-size'] || '8px 10px';
  v['$custom-select-indicator-color'] = u['$custom-select-indicator-color'] || '#333';
  v['$custom-select-indicator'] = u['$custom-select-indicator'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="' + v['$custom-select-indicator-color'] + '" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E\')';
  v['$custom-select-border-width'] = u['$custom-select-border-width'] || v['$input-btn-border-width'];
  v['$custom-select-border-color'] = u['$custom-select-border-color'] || v['$input-border-color'];
  v['$custom-select-border-radius'] = u['$custom-select-border-radius'] || v['$border-radius'];
  v['$custom-select-focus-border-color'] = u['$custom-select-focus-border-color'] || (0, _color2.default)(v['$brand-primary']).lighten(0.25).toString();
  v['$custom-select-focus-box-shadow'] = u['$custom-select-focus-box-shadow'] || 'inset 0 1px 2px ' + (0, _color2.default)(v['$black']).alpha(0.75).toString() + ', 0 0 5px rgba(' + v['$custom-select-focus-border-color'] + ', .5)';
  v['$custom-select-sm-font-size'] = u['$custom-select-sm-font-size'] || '75%';
  v['$custom-file-height'] = u['$custom-file-height'] || '2.5rem';
  v['$custom-file-width'] = u['$custom-file-width'] || '14rem';
  v['$custom-file-focus-box-shadow'] = u['$custom-file-focus-box-shadow'] || '0 0 0 .075rem ' + v['$white'] + ', 0 0 0 .2rem ' + v['$brand-primary'];
  v['$custom-file-padding-x'] = u['$custom-file-padding-x'] || '.5rem';
  v['$custom-file-padding-y'] = u['$custom-file-padding-y'] || '1rem';
  v['$custom-file-line-height'] = u['$custom-file-line-height'] || '1.5';
  v['$custom-file-color'] = u['$custom-file-color'] || v['$gray'];
  v['$custom-file-bg'] = u['$custom-file-bg'] || v['$white'];
  v['$custom-file-border-width'] = u['$custom-file-border-width'] || v['$border-width'];
  v['$custom-file-border-color'] = u['$custom-file-border-color'] || v['$input-border-color'];
  v['$custom-file-border-radius'] = u['$custom-file-border-radius'] || v['$border-radius'];
  v['$custom-file-box-shadow'] = u['$custom-file-box-shadow'] || 'inset 0 .2rem .4rem ' + (0, _color2.default)(v['$black']).alpha(0.05).toString();
  v['$custom-file-button-color'] = u['$custom-file-button-color'] || v['$custom-file-color'];
  v['$custom-file-button-bg'] = u['$custom-file-button-bg'] || v['$gray-lighter'];
  v['$custom-file-text'] = u['$custom-file-text'] || {
    placeholder: {
      en: 'Choose file...'
    },
    'button-label': {
      en: 'Browse'
    }
  };
  v['$form-icon-success-color'] = u['$form-icon-success-color'] || v['$brand-success'];
  v['$form-icon-success'] = u['$form-icon-success'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$form-icon-success-color'] + '" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E\')';
  v['$form-icon-warning-color'] = u['$form-icon-warning-color'] || v['$brand-warning'];
  v['$form-icon-warning'] = u['$form-icon-warning'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$form-icon-warning-color'] + '" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E\')';
  v['$form-icon-danger-color'] = u['$form-icon-danger-color'] || v['$brand-danger'];
  v['$form-icon-danger'] = u['$form-icon-danger'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="' + v['$form-icon-danger-color'] + '" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E\')';
  v['$dropdown-min-width'] = u['$dropdown-min-width'] || '10rem';
  v['$dropdown-padding-y'] = u['$dropdown-padding-y'] || '.5rem';
  v['$dropdown-margin-top'] = u['$dropdown-margin-top'] || '.125rem';
  v['$dropdown-bg'] = u['$dropdown-bg'] || v['$white'];
  v['$dropdown-border-color'] = u['$dropdown-border-color'] || (0, _color2.default)(v['$black']).alpha(0.15).toString();
  v['$dropdown-border-width'] = u['$dropdown-border-width'] || v['$border-width'];
  v['$dropdown-divider-bg'] = u['$dropdown-divider-bg'] || v['$gray-lighter'];
  v['$dropdown-box-shadow'] = u['$dropdown-box-shadow'] || '0 .5rem 1rem rgba(' + v['$black'] + ',.175)';
  v['$dropdown-link-color'] = u['$dropdown-link-color'] || v['$gray-dark'];
  v['$dropdown-link-hover-color'] = u['$dropdown-link-hover-color'] || (0, _color2.default)(v['$gray-dark']).darken(0.05).toString();
  v['$dropdown-link-hover-bg'] = u['$dropdown-link-hover-bg'] || v['$gray-lightest'];
  v['$dropdown-link-active-color'] = u['$dropdown-link-active-color'] || v['$component-active-color'];
  v['$dropdown-link-active-bg'] = u['$dropdown-link-active-bg'] || v['$component-active-bg'];
  v['$dropdown-link-disabled-color'] = u['$dropdown-link-disabled-color'] || v['$gray-light'];
  v['$dropdown-item-padding-x'] = u['$dropdown-item-padding-x'] || '1.5rem';
  v['$dropdown-header-color'] = u['$dropdown-header-color'] || v['$gray-light'];
  v['$zindex-dropdown-backdrop'] = u['$zindex-dropdown-backdrop'] || '990';
  v['$zindex-dropdown'] = u['$zindex-dropdown'] || '1000';
  v['$zindex-fixed'] = u['$zindex-fixed'] || '1030';
  v['$zindex-sticky'] = u['$zindex-sticky'] || '1030';
  v['$zindex-modal-backdrop'] = u['$zindex-modal-backdrop'] || '1040';
  v['$zindex-modal'] = u['$zindex-modal'] || '1050';
  v['$zindex-popover'] = u['$zindex-popover'] || '1060';
  v['$zindex-tooltip'] = u['$zindex-tooltip'] || '1070';
  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];
  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || v['$font-size-lg'];
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || v['$btn-border-radius'];
  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || (0, _color2.default)(v['$white']).alpha(0.5).toString();
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || (0, _color2.default)(v['$white']).alpha(0.75).toString();
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || (0, _color2.default)(v['$white']).alpha(1).toString();
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || (0, _color2.default)(v['$white']).alpha(0.25).toString();
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-inverse-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || (0, _color2.default)(v['$white']).alpha(0.1).toString();
  v['$navbar-light-color'] = u['$navbar-light-color'] || (0, _color2.default)(v['$black']).alpha(0.5).toString();
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || (0, _color2.default)(v['$black']).alpha(0.7).toString();
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || (0, _color2.default)(v['$black']).alpha(0.9).toString();
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || (0, _color2.default)(v['$black']).alpha(0.3).toString();
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-light-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || (0, _color2.default)(v['$black']).alpha(0.1).toString();
  v['$nav-link-padding'] = u['$nav-link-padding'] || '.5em 1em';
  v['$nav-disabled-link-color'] = u['$nav-disabled-link-color'] || v['$gray-light'];
  v['$nav-tabs-border-color'] = u['$nav-tabs-border-color'] || '#ddd';
  v['$nav-tabs-border-width'] = u['$nav-tabs-border-width'] || v['$border-width'];
  v['$nav-tabs-border-radius'] = u['$nav-tabs-border-radius'] || v['$border-radius'];
  v['$nav-tabs-link-hover-border-color'] = u['$nav-tabs-link-hover-border-color'] || v['$gray-lighter'];
  v['$nav-tabs-active-link-hover-color'] = u['$nav-tabs-active-link-hover-color'] || v['$gray'];
  v['$nav-tabs-active-link-hover-bg'] = u['$nav-tabs-active-link-hover-bg'] || v['$body-bg'];
  v['$nav-tabs-active-link-hover-border-color'] = u['$nav-tabs-active-link-hover-border-color'] || '#ddd';
  v['$nav-pills-border-radius'] = u['$nav-pills-border-radius'] || v['$border-radius'];
  v['$nav-pills-active-link-color'] = u['$nav-pills-active-link-color'] || v['$component-active-color'];
  v['$nav-pills-active-link-bg'] = u['$nav-pills-active-link-bg'] || v['$component-active-bg'];
  v['$pagination-padding-x'] = u['$pagination-padding-x'] || '.75rem';
  v['$pagination-padding-y'] = u['$pagination-padding-y'] || '.5rem';
  v['$pagination-padding-x-sm'] = u['$pagination-padding-x-sm'] || '.5rem';
  v['$pagination-padding-y-sm'] = u['$pagination-padding-y-sm'] || '.25rem';
  v['$pagination-padding-x-lg'] = u['$pagination-padding-x-lg'] || '1.5rem';
  v['$pagination-padding-y-lg'] = u['$pagination-padding-y-lg'] || '.75rem';
  v['$pagination-line-height'] = u['$pagination-line-height'] || '1.25';
  v['$pagination-color'] = u['$pagination-color'] || v['$link-color'];
  v['$pagination-bg'] = u['$pagination-bg'] || v['$white'];
  v['$pagination-border-width'] = u['$pagination-border-width'] || v['$border-width'];
  v['$pagination-border-color'] = u['$pagination-border-color'] || '#ddd';
  v['$pagination-hover-color'] = u['$pagination-hover-color'] || v['$link-hover-color'];
  v['$pagination-hover-bg'] = u['$pagination-hover-bg'] || v['$gray-lighter'];
  v['$pagination-hover-border'] = u['$pagination-hover-border'] || '#ddd';
  v['$pagination-active-color'] = u['$pagination-active-color'] || v['$white'];
  v['$pagination-active-bg'] = u['$pagination-active-bg'] || v['$brand-primary'];
  v['$pagination-active-border'] = u['$pagination-active-border'] || v['$brand-primary'];
  v['$pagination-disabled-color'] = u['$pagination-disabled-color'] || v['$gray-light'];
  v['$pagination-disabled-bg'] = u['$pagination-disabled-bg'] || v['$white'];
  v['$pagination-disabled-border'] = u['$pagination-disabled-border'] || '#ddd';
  v['$jumbotron-padding'] = u['$jumbotron-padding'] || '2rem';
  v['$jumbotron-bg'] = u['$jumbotron-bg'] || v['$gray-lighter'];
  v['$state-success-text'] = u['$state-success-text'] || '#3c763d';
  v['$state-success-bg'] = u['$state-success-bg'] || '#dff0d8';
  v['$state-success-border'] = u['$state-success-border'] || (0, _color2.default)(v['$state-success-bg']).darken(0.05).toString();
  v['$state-info-text'] = u['$state-info-text'] || '#31708f';
  v['$state-info-bg'] = u['$state-info-bg'] || '#d9edf7';
  v['$state-info-border'] = u['$state-info-border'] || (0, _color2.default)(v['$state-info-bg']).darken(0.07).toString();
  v['$state-warning-text'] = u['$state-warning-text'] || '#8a6d3b';
  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';
  v['$mark-bg'] = u['$mark-bg'] || v['$state-warning-bg'];
  v['$state-warning-border'] = u['$state-warning-border'] || (0, _color2.default)(v['$state-warning-bg']).darken(0.05).toString();
  v['$state-danger-text'] = u['$state-danger-text'] || '#a94442';
  v['$state-danger-bg'] = u['$state-danger-bg'] || '#f2dede';
  v['$state-danger-border'] = u['$state-danger-border'] || (0, _color2.default)(v['$state-danger-bg']).darken(0.05).toString();
  v['$card-spacer-x'] = u['$card-spacer-x'] || '1.25rem';
  v['$card-spacer-y'] = u['$card-spacer-y'] || '.75rem';
  v['$card-border-width'] = u['$card-border-width'] || '1px';
  v['$card-border-radius'] = u['$card-border-radius'] || v['$border-radius'];
  v['$card-border-color'] = u['$card-border-color'] || (0, _color2.default)(v['$black']).alpha(0.125).toString();
  v['$card-border-radius-inner'] = u['$card-border-radius-inner'] || 'calc(' + v['$card-border-radius'] + ' - ' + v['$card-border-width'] + ')';
  v['$card-cap-bg'] = u['$card-cap-bg'] || v['$gray-lightest'];
  v['$card-bg'] = u['$card-bg'] || v['$white'];
  v['$card-link-hover-color'] = u['$card-link-hover-color'] || v['$white'];
  v['$card-img-overlay-padding'] = u['$card-img-overlay-padding'] || '1.25rem';
  detectedUnit = detectUnit(v['$grid-gutter-width-base']);
  v['$card-deck-margin'] = u['$card-deck-margin'] || rmUnit(v['$grid-gutter-width-base'], detectedUnit) / 2 + detectedUnit;
  v['$card-columns-count'] = u['$card-columns-count'] || '3';
  v['$card-columns-gap'] = u['$card-columns-gap'] || '1.25rem';
  v['$card-columns-margin'] = u['$card-columns-margin'] || v['$card-spacer-y'];
  v['$tooltip-max-width'] = u['$tooltip-max-width'] || '200px';
  v['$tooltip-color'] = u['$tooltip-color'] || v['$white'];
  v['$tooltip-bg'] = u['$tooltip-bg'] || v['$black'];
  v['$tooltip-opacity'] = u['$tooltip-opacity'] || '.9';
  v['$tooltip-padding-y'] = u['$tooltip-padding-y'] || '3px';
  v['$tooltip-padding-x'] = u['$tooltip-padding-x'] || '8px';
  v['$tooltip-margin'] = u['$tooltip-margin'] || '3px';
  v['$tooltip-arrow-width'] = u['$tooltip-arrow-width'] || '5px';
  v['$tooltip-arrow-color'] = u['$tooltip-arrow-color'] || v['$tooltip-bg'];
  v['$popover-inner-padding'] = u['$popover-inner-padding'] || '1px';
  v['$popover-bg'] = u['$popover-bg'] || v['$white'];
  v['$popover-max-width'] = u['$popover-max-width'] || '276px';
  v['$popover-border-width'] = u['$popover-border-width'] || v['$border-width'];
  v['$popover-border-color'] = u['$popover-border-color'] || (0, _color2.default)(v['$black']).alpha(0.2).toString();
  v['$popover-box-shadow'] = u['$popover-box-shadow'] || '0 5px 10px ' + (0, _color2.default)(v['$black']).alpha(0.2).toString();
  v['$popover-title-bg'] = u['$popover-title-bg'] || (0, _color2.default)(v['$popover-bg']).darken(0.03).toString();
  v['$popover-title-padding-x'] = u['$popover-title-padding-x'] || '14px';
  v['$popover-title-padding-y'] = u['$popover-title-padding-y'] || '8px';
  v['$popover-content-padding-x'] = u['$popover-content-padding-x'] || '14px';
  v['$popover-content-padding-y'] = u['$popover-content-padding-y'] || '9px';
  v['$popover-arrow-width'] = u['$popover-arrow-width'] || '10px';
  v['$popover-arrow-color'] = u['$popover-arrow-color'] || v['$popover-bg'];
  v['$popover-arrow-outer-width'] = u['$popover-arrow-outer-width'] || rmUnit(v['$popover-arrow-width'], UNIT.PX) + 1 + UNIT.PX;
  v['$popover-arrow-outer-color'] = u['$popover-arrow-outer-color'] || (0, _color2.default)(v['$popover-border-color']).fade(0.5).toString();
  v['$badge-default-bg'] = u['$badge-default-bg'] || v['$gray-light'];
  v['$badge-primary-bg'] = u['$badge-primary-bg'] || v['$brand-primary'];
  v['$badge-success-bg'] = u['$badge-success-bg'] || v['$brand-success'];
  v['$badge-info-bg'] = u['$badge-info-bg'] || v['$brand-info'];
  v['$badge-warning-bg'] = u['$badge-warning-bg'] || v['$brand-warning'];
  v['$badge-danger-bg'] = u['$badge-danger-bg'] || v['$brand-danger'];
  v['$badge-color'] = u['$badge-color'] || v['$white'];
  v['$badge-link-hover-color'] = u['$badge-link-hover-color'] || v['$white'];
  v['$badge-font-size'] = u['$badge-font-size'] || '75%';
  v['$badge-font-weight'] = u['$badge-font-weight'] || v['$font-weight-bold'];
  v['$badge-padding-x'] = u['$badge-padding-x'] || '.4em';
  v['$badge-padding-y'] = u['$badge-padding-y'] || '.25em';
  v['$badge-pill-padding-x'] = u['$badge-pill-padding-x'] || '.6em';
  v['$badge-pill-border-radius'] = u['$badge-pill-border-radius'] || '10rem';
  v['$modal-inner-padding'] = u['$modal-inner-padding'] || '15px';
  v['$modal-dialog-margin'] = u['$modal-dialog-margin'] || '10px';
  v['$modal-dialog-sm-up-margin-y'] = u['$modal-dialog-sm-up-margin-y'] || '30px';
  v['$modal-title-line-height'] = u['$modal-title-line-height'] || v['$line-height-base'];
  v['$modal-content-bg'] = u['$modal-content-bg'] || v['$white'];
  v['$modal-content-border-color'] = u['$modal-content-border-color'] || (0, _color2.default)(v['$black']).alpha(0.2).toString();
  v['$modal-content-border-width'] = u['$modal-content-border-width'] || v['$border-width'];
  v['$modal-content-xs-box-shadow'] = u['$modal-content-xs-box-shadow'] || '0 3px 9px ' + (0, _color2.default)(v['$black']).alpha(0.5).toString();
  v['$modal-content-sm-up-box-shadow'] = u['$modal-content-sm-up-box-shadow'] || '0 5px 15px ' + (0, _color2.default)(v['$black']).alpha(0.5).toString();
  v['$modal-backdrop-bg'] = u['$modal-backdrop-bg'] || v['$black'];
  v['$modal-backdrop-opacity'] = u['$modal-backdrop-opacity'] || '.5';
  v['$modal-header-border-color'] = u['$modal-header-border-color'] || v['$gray-lighter'];
  v['$modal-footer-border-color'] = u['$modal-footer-border-color'] || v['$modal-header-border-color'];
  v['$modal-header-border-width'] = u['$modal-header-border-width'] || v['$modal-content-border-width'];
  v['$modal-footer-border-width'] = u['$modal-footer-border-width'] || v['$modal-header-border-width'];
  v['$modal-header-padding'] = u['$modal-header-padding'] || '15px';
  v['$modal-lg'] = u['$modal-lg'] || '800px';
  v['$modal-md'] = u['$modal-md'] || '500px';
  v['$modal-sm'] = u['$modal-sm'] || '300px';
  v['$modal-transition'] = u['$modal-transition'] || 'transform .3s ease-out';
  v['$alert-padding-x'] = u['$alert-padding-x'] || '1.25rem';
  v['$alert-padding-y'] = u['$alert-padding-y'] || '.75rem';
  v['$alert-margin-bottom'] = u['$alert-margin-bottom'] || v['$spacer-y'];
  v['$alert-border-radius'] = u['$alert-border-radius'] || v['$border-radius'];
  v['$alert-link-font-weight'] = u['$alert-link-font-weight'] || v['$font-weight-bold'];
  v['$alert-border-width'] = u['$alert-border-width'] || v['$border-width'];
  v['$alert-success-bg'] = u['$alert-success-bg'] || v['$state-success-bg'];
  v['$alert-success-text'] = u['$alert-success-text'] || v['$state-success-text'];
  v['$alert-success-border'] = u['$alert-success-border'] || v['$state-success-border'];
  v['$alert-info-bg'] = u['$alert-info-bg'] || v['$state-info-bg'];
  v['$alert-info-text'] = u['$alert-info-text'] || v['$state-info-text'];
  v['$alert-info-border'] = u['$alert-info-border'] || v['$state-info-border'];
  v['$alert-warning-bg'] = u['$alert-warning-bg'] || v['$state-warning-bg'];
  v['$alert-warning-text'] = u['$alert-warning-text'] || v['$state-warning-text'];
  v['$alert-warning-border'] = u['$alert-warning-border'] || v['$state-warning-border'];
  v['$alert-danger-bg'] = u['$alert-danger-bg'] || v['$state-danger-bg'];
  v['$alert-danger-text'] = u['$alert-danger-text'] || v['$state-danger-text'];
  v['$alert-danger-border'] = u['$alert-danger-border'] || v['$state-danger-border'];
  v['$progress-height'] = u['$progress-height'] || '1rem';
  v['$progress-font-size'] = u['$progress-font-size'] || '.75rem';
  v['$progress-bg'] = u['$progress-bg'] || v['$gray-lighter'];
  v['$progress-border-radius'] = u['$progress-border-radius'] || v['$border-radius'];
  v['$progress-box-shadow'] = u['$progress-box-shadow'] || 'inset 0 .1rem .1rem ' + (0, _color2.default)(v['$black']).alpha(0.1).toString();
  v['$progress-bar-color'] = u['$progress-bar-color'] || v['$white'];
  v['$progress-bar-bg'] = u['$progress-bar-bg'] || v['$brand-primary'];
  v['$progress-bar-animation-timing'] = u['$progress-bar-animation-timing'] || '1s linear infinite';
  v['$list-group-color'] = u['$list-group-color'] || v['$body-color'];
  v['$list-group-bg'] = u['$list-group-bg'] || v['$white'];
  v['$list-group-border-color'] = u['$list-group-border-color'] || (0, _color2.default)(v['$black']).alpha(0.125).toString();
  v['$list-group-border-width'] = u['$list-group-border-width'] || v['$border-width'];
  v['$list-group-border-radius'] = u['$list-group-border-radius'] || v['$border-radius'];
  v['$list-group-item-padding-x'] = u['$list-group-item-padding-x'] || '1.25rem';
  v['$list-group-item-padding-y'] = u['$list-group-item-padding-y'] || '.75rem';
  v['$list-group-hover-bg'] = u['$list-group-hover-bg'] || v['$gray-lightest'];
  v['$list-group-active-color'] = u['$list-group-active-color'] || v['$component-active-color'];
  v['$list-group-active-bg'] = u['$list-group-active-bg'] || v['$component-active-bg'];
  v['$list-group-active-border'] = u['$list-group-active-border'] || v['$list-group-active-bg'];
  v['$list-group-disabled-color'] = u['$list-group-disabled-color'] || v['$gray-light'];
  v['$list-group-disabled-bg'] = u['$list-group-disabled-bg'] || v['$list-group-bg'];
  v['$list-group-link-color'] = u['$list-group-link-color'] || v['$gray'];
  v['$list-group-link-hover-color'] = u['$list-group-link-hover-color'] || v['$list-group-link-color'];
  v['$list-group-link-active-color'] = u['$list-group-link-active-color'] || v['$list-group-color'];
  v['$list-group-link-active-bg'] = u['$list-group-link-active-bg'] || v['$gray-lighter'];
  v['$thumbnail-padding'] = u['$thumbnail-padding'] || '.25rem';
  v['$thumbnail-bg'] = u['$thumbnail-bg'] || v['$body-bg'];
  v['$thumbnail-border-width'] = u['$thumbnail-border-width'] || v['$border-width'];
  v['$thumbnail-border-color'] = u['$thumbnail-border-color'] || '#ddd';
  v['$thumbnail-border-radius'] = u['$thumbnail-border-radius'] || v['$border-radius'];
  v['$thumbnail-box-shadow'] = u['$thumbnail-box-shadow'] || '0 1px 2px ' + (0, _color2.default)(v['$black']).alpha(0.75).toString();
  v['$thumbnail-transition'] = u['$thumbnail-transition'] || 'all .2s ease-in-out';
  v['$figure-caption-font-size'] = u['$figure-caption-font-size'] || '90%';
  v['$figure-caption-color'] = u['$figure-caption-color'] || v['$gray-light'];
  v['$breadcrumb-padding-y'] = u['$breadcrumb-padding-y'] || '.75rem';
  v['$breadcrumb-padding-x'] = u['$breadcrumb-padding-x'] || '1rem';
  v['$breadcrumb-item-padding'] = u['$breadcrumb-item-padding'] || '.5rem';
  v['$breadcrumb-bg'] = u['$breadcrumb-bg'] || v['$gray-lighter'];
  v['$breadcrumb-divider-color'] = u['$breadcrumb-divider-color'] || v['$gray-light'];
  v['$breadcrumb-active-color'] = u['$breadcrumb-active-color'] || v['$gray-light'];
  v['$breadcrumb-divider'] = u['$breadcrumb-divider'] || '"/"';
  v['$close-font-size'] = u['$close-font-size'] || rmUnit(v['$font-size-base']) * 1.5 + detectUnit(v['$font-size-base']);
  v['$close-font-weight'] = u['$close-font-weight'] || v['$font-weight-bold'];
  v['$close-color'] = u['$close-color'] || v['$black'];
  v['$close-text-shadow'] = u['$close-text-shadow'] || '0 1px 0 ' + v['$white'];
  v['$code-font-size'] = u['$code-font-size'] || '90%';
  v['$code-padding-x'] = u['$code-padding-x'] || '.4rem';
  v['$code-padding-y'] = u['$code-padding-y'] || '.2rem';
  v['$code-color'] = u['$code-color'] || '#bd4147';
  v['$code-bg'] = u['$code-bg'] || v['$gray-lightest'];
  v['$kbd-color'] = u['$kbd-color'] || v['$white'];
  v['$kbd-bg'] = u['$kbd-bg'] || v['$gray-dark'];
  v['$pre-color'] = u['$pre-color'] || v['$gray-dark'];
  v['$pre-scrollable-max-height'] = u['$pre-scrollable-max-height'] || '340px';
  return Object.assign({}, u, v);
}
module.exports = exports['default'];
});
unwrapExports(makeOriginal_1);

var makeExtend_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
exports.default = makeExtend;
var _color2 = _interopRequireDefault(color);
var _unitUtils2 = _interopRequireDefault(unitUtils);
var _makeOriginal2 = _interopRequireDefault(makeOriginal_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var rmUnit = _unitUtils2.default.rmUnit,
    UNIT = _unitUtils2.default.UNIT;
function makeExtend() {
  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _makeOriginal2.default)();
  var userTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var v = original;
  var u = userTheme;
  v['$header-navbar-border-color'] = u['$header-navbar-border-color'] || v['$gray-lighter'];
  v['$header-navbar-border-width'] = u['$header-navbar-border-width'] || v['$border-width'];
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || rmUnit(v['$card-spacer-y'], UNIT.REM) / 2 + UNIT.REM;
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || rmUnit(v['$card-spacer-x'], UNIT.REM) / 2 + UNIT.REM;
  v['$nav-link-hover-bg'] = u['$nav-link-hover-bg'] || (0, _color2.default)(v['$brand-inverse']).darken(0.03).toString();
  v['$navbar-max-height'] = u['$navbar-max-height'] || '400px';
  v['$navbar-height'] = u['$navbar-height'] || '70px';
  return _extends({}, u, v);
}
module.exports = exports['default'];
});
unwrapExports(makeExtend_1);

var makeTheme_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeTheme;
var _makeOriginal2 = _interopRequireDefault(makeOriginal_1);
var _makeExtend2 = _interopRequireDefault(makeExtend_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _makeExtend2.default)((0, _makeOriginal2.default)(userTheme), userTheme);
}
module.exports = exports['default'];
});
unwrapExports(makeTheme_1);

var makeTheme = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(makeTheme_1).default;
  }
});
Object.defineProperty(exports, 'makeTheme', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(makeTheme_1).default;
  }
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
var makeTheme$1 = unwrapExports(makeTheme);

var theme$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;
exports.default = (0, makeTheme.makeTheme)();
var makeTheme$$1 = exports.makeTheme = makeTheme.makeTheme;
});
unwrapExports(theme$1);

var hover_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = hover;
exports.hoverFocus = hoverFocus;
exports.plainHoverFocus = plainHoverFocus;
exports.hoverFocusActive = hoverFocusActive;
var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};
function hover(content) {
  return '\n    &:hover { ' + content + ' }\n  ';
}
function hoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return ' \n      &:focus { ' + content + ' }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus,\n    &:hover {\n      ' + content + '\n    }\n  ';
}
function plainHoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &, &:focus {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return ' \n    &, &:focus, &:hover {\n      ' + content + '\n    }\n  ';
}
function hoverFocusActive() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &:focus,\n      &:active {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus, &:active, &:hover {\n     ' + content + '\n    }\n  ';
}
hover.focus = hoverFocus;
hover.plainFocus = plainHoverFocus;
hover.activeFocus = hoverFocusActive;
exports.default = {
  defaultProps: defaultProps,
  hover: hover,
  hoverFocus: hoverFocus,
  plainHoverFocus: plainHoverFocus,
  hoverFocusActive: hoverFocusActive
};
});
unwrapExports(hover_1);

var _mapToCssModules = ( mapToCssModules_es && mapToCssModules ) || mapToCssModules_es;

var Close_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = { theme: _theme2.default };
var CloseUnstyled = function (_React$Component) {
  _inherits(CloseUnstyled, _React$Component);
  function CloseUnstyled() {
    _classCallCheck(this, CloseUnstyled);
    return _possibleConstructorReturn(this, (CloseUnstyled.__proto__ || Object.getPrototypeOf(CloseUnstyled)).apply(this, arguments));
  }
  _createClass(CloseUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          srOnly = _omit['sr-only'],
          onDismiss = _omit.onDismiss,
          closeLabel = _omit.closeLabel,
          cssModule = _omit.cssModule,
          attributes = _objectWithoutProperties(_omit, ['className', 'sr-only', 'onDismiss', 'closeLabel', 'cssModule']);
      return _react2.default.createElement(
        'button',
        _extends({
          className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'close', {
            'sr-only': srOnly
          }), cssModule),
          type: 'button',
          onClick: onDismiss
        }, attributes),
        closeLabel,
        _react2.default.createElement(
          'span',
          null,
          '\xD7'
        )
      );
    }
  }]);
  return CloseUnstyled;
}(_react2.default.Component);
CloseUnstyled.propTypes = {
  theme: _propTypes2.default.object,
  'sr-only': _propTypes2.default.bool,
  className: _propTypes2.default.string,
  closeLabel: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  onDismiss: _propTypes2.default.func.isRequired
};
var Close = (0, _styledComponents2.default)(CloseUnstyled).withConfig({
  displayName: 'Close'
})(['', ''], function (props) {
  return '\n    float: right;\n    font-size: ' + props.theme['$close-font-size'] + ';\n    font-weight: ' + props.theme['$close-font-weight'] + ';\n    line-height: 1;\n    color: ' + props.theme['$close-color'] + ';\n    text-shadow: ' + props.theme['$close-text-shadow'] + ';\n    opacity: .2;\n    \n    &:focus {outline:0;}\n    \n    ' + (0, hover_1.hoverFocus)(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$close-color'] + ';\n        text-decoration: none;\n        cursor: pointer;\n        opacity: .5;\n      ') + '\n    \n    /* Additional properties for button version\n     iOS requires the button element instead of an anchor tag.\n     If you want the anchor version, it requires \'href="#"\'.\n     See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n     */\n    \n    /* scss-lint:disable QualifyingElement */\n    &button.close {\n      padding: 0;\n      cursor: pointer;\n      background: transparent;\n      border: 0;\n      -webkit-appearance: none;\n    }\n    /* scss-lint:enable QualifyingElement */\n  ';
});
Close.defaultProps = defaultProps;
exports.default = Close;
module.exports = exports['default'];
});
unwrapExports(Close_1);

var Alert_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _CSSTransitionGroup2 = _interopRequireDefault(CSSTransitionGroup_1);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
var _Close2 = _interopRequireDefault(Close_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  transitionAppearTimeout: 150,
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150,
  theme: _theme2.default
};
var FirstChild = function FirstChild(_ref) {
  var children = _ref.children;
  return _react2.default.Children.toArray(children)[0] || null;
};
var AlertUnstyled = function (_React$Component) {
  _inherits(AlertUnstyled, _React$Component);
  function AlertUnstyled() {
    _classCallCheck(this, AlertUnstyled);
    return _possibleConstructorReturn(this, (AlertUnstyled.__proto__ || Object.getPrototypeOf(AlertUnstyled)).apply(this, arguments));
  }
  _createClass(AlertUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          color = _omit.color,
          isOpen = _omit.isOpen,
          toggle = _omit.toggle,
          children = _omit.children,
          transitionAppearTimeout = _omit.transitionAppearTimeout,
          transitionEnterTimeout = _omit.transitionEnterTimeout,
          transitionLeaveTimeout = _omit.transitionLeaveTimeout,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transitionAppearTimeout', 'transitionEnterTimeout', 'transitionLeaveTimeout']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);
      var alert$$1 = _react2.default.createElement(
        Tag,
        _extends({}, attributes, { className: classes, role: 'alert' }),
        toggle && _react2.default.createElement(_Close2.default, { onDismiss: toggle }),
        children
      );
      return _react2.default.createElement(
        _CSSTransitionGroup2.default,
        {
          component: FirstChild,
          transitionName: {
            appear: 'fade',
            appearActive: 'show',
            enter: 'fade',
            enterActive: 'show',
            leave: 'fade',
            leaveActive: 'out'
          },
          transitionAppear: transitionAppearTimeout > 0,
          transitionAppearTimeout: transitionAppearTimeout,
          transitionEnter: transitionEnterTimeout > 0,
          transitionEnterTimeout: transitionEnterTimeout,
          transitionLeave: transitionLeaveTimeout > 0,
          transitionLeaveTimeout: transitionLeaveTimeout
        },
        isOpen ? alert$$1 : null
      );
    }
  }]);
  return AlertUnstyled;
}(_react2.default.Component);
AlertUnstyled.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  color: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool,
  toggle: _propTypes2.default.func,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  transitionAppearTimeout: _propTypes2.default.number,
  transitionEnterTimeout: _propTypes2.default.number,
  transitionLeaveTimeout: _propTypes2.default.number,
  theme: _propTypes2.default.object
};
var Alert = (0, _styledComponents2.default)(AlertUnstyled).withConfig({
  displayName: 'Alert'
})(['', ''], function (props) {
  return '\n    /*\n    Base styles\n    */\n    \n    &.alert {\n      padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n      margin-bottom: ' + props.theme['$alert-margin-bottom'] + ';\n      border: ' + props.theme['$alert-border-width'] + ' solid transparent;\n      ' + (0, borderRadius_1.borderRadius)(props.theme['$enable-rounded'], props.theme['$alert-border-radius']) + '\n    }\n    \n    /* Headings for larger alerts */\n    &.alert-heading {\n      /* Specified to prevent conflicts of changing $headings-color */\n      color: inherit;\n    }\n    \n    /* Provide class for links that match alerts */\n    & .alert-link { \n      font-weight: ' + props.theme['$alert-link-font-weight'] + ';\n    }\n    \n    /* Dismissible alerts Expand the right padding and account for the close buttons positioning. */\n    \n    &.alert-dismissible {    \n      /* Adjust close link position */\n      & .close {\n        position: relative;\n        top: -' + props.theme['$alert-padding-y'] + ';\n        right: -' + props.theme['$alert-padding-x'] + ';\n        padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n        color: inherit;\n      }\n    }\n    /* Alternate styles Generate contextual modifier classes for colorizing the alert. */\n\n    &.alert-success {\n      ' + (0, alert.alertVariant)(props.theme['$alert-success-bg'], props.theme['$alert-success-border'], props.theme['$alert-success-text']) + '    \n    }\n    &.alert-info {\n      ' + (0, alert.alertVariant)(props.theme['$alert-info-bg'], props.theme['$alert-info-border'], props.theme['$alert-info-text']) + '\n    } \n    &.alert-warning {\n      ' + (0, alert.alertVariant)(props.theme['$alert-warning-bg'], props.theme['$alert-warning-border'], props.theme['$alert-warning-text']) + ' \n    }\n    &.alert-danger {\n      ' + (0, alert.alertVariant)(props.theme['$alert-danger-bg'], props.theme['$alert-danger-border'], props.theme['$alert-danger-text']) + ' \n    }\n  ';
});
Alert.defaultProps = defaultProps;
exports.default = (0, _styledComponents.withTheme)(Alert);
module.exports = exports['default'];
});
var Alert = unwrapExports(Alert_1);

var Small_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = { theme: _theme2.default };
var SmallUnstyled = function (_React$Component) {
  _inherits(SmallUnstyled, _React$Component);
  function SmallUnstyled() {
    _classCallCheck(this, SmallUnstyled);
    return _possibleConstructorReturn(this, (SmallUnstyled.__proto__ || Object.getPrototypeOf(SmallUnstyled)).apply(this, arguments));
  }
  _createClass(SmallUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          attributes = _objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, color ? 'text-' + color : false), cssModule);
      return _react2.default.createElement(
        'small',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return SmallUnstyled;
}(_react2.default.Component);
SmallUnstyled.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  theme: _propTypes2.default.object,
  color: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
var Small = (0, _styledComponents2.default)(SmallUnstyled).withConfig({
  displayName: 'Small'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    font-size: ' + props.theme['$small-font-size'] + ';\n    font-weight: normal;\n  ';
});
Small.defaultProps = defaultProps;
exports.default = Small;
module.exports = exports['default'];
});
var Small = unwrapExports(Small_1);

var boxShadow_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxShadow = boxShadow;
var defaultProps = exports.defaultProps = {
  '$enable-shadows': false
};
function boxShadow() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  if (enableShadows) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return '\n      box-shadow: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
exports.default = {
  defaultProps: defaultProps,
  boxShadow: boxShadow
};
});
unwrapExports(boxShadow_1);
var boxShadow_2 = boxShadow_1.boxShadow;

var transition_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = transition;
var defaultProps = exports.defaultProps = {
  '$enable-transitions': true
};
function transition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (enableTransitions && args.length) {
    return '\n      transition: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
exports.default = {
  transition: transition
};
});
unwrapExports(transition_1);

var forms = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.formControl = formControl;
exports.formControlValidation = formControlValidation;
exports.formControlFocus = formControlFocus;
exports.inputSize = inputSize;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-rounded': true,
  '$enable-transitions': true,
  '$enable-shadows': false,
  '$input-height': '2.5rem',
  '$input-padding-y': '.5rem',
  '$input-padding-x': '.75rem',
  '$font-size-base': '1rem',
  '$input-line-height': '1.25',
  '$input-color': '#464a4c',
  '$input-bg': '#fff',
  '$input-border-radius': '.25rem',
  '$input-btn-border-width': '1px',
  '$input-border-color': 'rgba(0, 0, 0, 0.15)',
  '$input-transition': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
  '$input-box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
  '$input-color-focus': '#464a4c',
  '$input-bg-focus': '#fff',
  '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
  '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(hsl(207.79999999999995, 98.2%, 53.4%),.6)',
  '$input-color-placeholder': '#636c72',
  '$input-bg-disabled': '#eceeef',
  '$cursor-disabled': 'not-allowed'
};
function formControl() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableTransitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-transitions'];
  var $enableShadows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-shadows'];
  var $inputHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$input-height'];
  var $inputPaddingY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$input-padding-y'];
  var $inputPaddingX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$input-padding-x'];
  var $fontSizeBase = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$font-size-base'];
  var $inputLineHeight = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$input-line-height'];
  var $inputColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$input-color'];
  var $inputBg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$input-bg'];
  var $inputBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$input-border-radius'];
  var $inputBtnBorderWidth = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$input-btn-border-width'];
  var $inputBorderColor = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$input-border-color'];
  var $inputTransition = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$input-transition'];
  var $inputBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$input-box-shadow'];
  var $inputColorFocus = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$input-color-focus'];
  var $inputBgFocus = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$input-bg-focus'];
  var $inputBorderFocus = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$input-border-focus'];
  var $inputBoxShadowFocus = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$input-box-shadow-focus'];
  var $inputColorPlaceholder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$input-color-placeholder'];
  var $inputBgDisabled = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$input-bg-disabled'];
  var $cursorDisabled = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$cursor-disabled'];
  return '\n      & .form-control {\n        display: block;\n        width: 100%;\n  \n        /* Make inputs at least the height of their button counterpart (base line-height + padding + border) */\n        /* height: ' + $inputHeight + '; */\n  \n        padding: ' + $inputPaddingY + ' ' + $inputPaddingX + ';\n        font-size: ' + $fontSizeBase + ';\n        line-height: ' + $inputLineHeight + ';\n        color: ' + $inputColor + ';\n        background-color: ' + $inputBg + ';\n  \n        /* Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214. */\n        background-image: none;\n        background-clip: padding-box;\n        /* Note: This has no effect on selects in some browsers, due to the limited stylability of selects in CSS. */\n        ' + ($enableRounded ? 'border-radius: ' + $inputBorderRadius + ';' : 'border-radius: 0;') + ' /* Manually use the if/else instead of the mixin to account for iOS override */\n        border: ' + $inputBtnBorderWidth + ' solid ' + $inputBorderColor + ';\n        ' + (0, transition_1.transition)($enableTransitions, $inputTransition) + '\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, $inputBoxShadow) + '\n  \n        /* Unstyle the caret on selects in IE10+. */\n        &::-ms-expand {\n          background-color: transparent;\n          border: 0;\n        }\n  \n        /* Customize the :focus state to imitate native WebKit styles. */\n        ' + formControlFocus($enableShadows, $inputColorFocus, $inputBgFocus, $inputBorderFocus, $inputBoxShadowFocus) + '\n  \n        /* Placeholder */\n        &::placeholder {\n          color: ' + $inputColorPlaceholder + ';\n          /* Override Firefox unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526. */\n          opacity: 1;\n        }\n  \n        /* Disabled and read-only inputs\n         HTML5 says that controls under a fieldset > legend:first-child will not be\n         disabled if the fieldset is disabled. Due to implementation difficulty, we\n         do not honor that edge case; we style them as disabled anyway.\n         */\n  \n        &:disabled,\n        &[readonly] {\n          background-color:' + $inputBgDisabled + ';\n          /* iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655. */\n          opacity: 1;\n        }\n  \n        &:disabled {\n          cursor: ' + $cursorDisabled + ';\n        }\n      }\n  ';
}
function formControlValidation() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var formColor = arguments[1];
  var inputBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-box-shadow'];
  return '\n    /* Color the label and help text */\n    & .form-control-feedback,\n    & .form-control-label,\n    & .col-form-label,\n    & .form-check-label,\n    & .custom-control {\n      color: ' + formColor + ';\n    }\n  \n    /* Set the border and box shadow on specific inputs to match */\n      \n    & .form-control,\n    & .custom-select,\n    & .custom-file-control {\n      border-color: ' + formColor + ';\n  \n      &:focus {\n        ' + (0, boxShadow_1.boxShadow)(enableShadows, inputBoxShadow + ', 0 0 6px ' + (0, _color2.default)(formColor).lighten(0.2).toString()) + '\n      }\n    }\n  \n    /* Set validation states also for addons */\n    .input-group-addon {\n      color: ' + formColor + ';\n      border-color: ' + formColor + ';\n      background-color: ' + (0, _color2.default)(formColor).lighten(0.40).toString() + ';\n    }\n  ';
}
function formControlFocus() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var inputColorFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$input-color-focus'];
  var inputBgFocus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-bg-focus'];
  var inputBorderFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$input-border-focus'];
  var inputBoxShadowFocus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$input-box-shadow-focus'];
  return '\n    &:focus {\n      color: ' + inputColorFocus + ';\n      background-color: ' + inputBgFocus + ';\n      border-color: ' + inputBorderFocus + ';\n      outline: none;\n      ' + (0, boxShadow_1.boxShadow)(enableShadows, inputBoxShadowFocus) + '\n    }\n  ';
}
function inputSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var parent = arguments[1];
  var inputHeight = arguments[2];
  var paddingY = arguments[3];
  var paddingX = arguments[4];
  var fontSize = arguments[5];
  var lineHeight = arguments[6];
  var inputBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$input-border-radius'];
  return '\n    ' + parent + ' {\n      height: ' + inputHeight + ';\n      padding: ' + paddingY + ' ' + paddingX + ';\n      font-size: ' + fontSize + ';\n      line-height: ' + lineHeight + ';\n      ' + (0, borderRadius_1.borderRadius)(enableRounded, inputBorderRadius) + '\n    }\n  \n    select' + parent + ' {\n      height: ' + inputHeight + ';\n      line-height: ' + inputHeight + ';\n    }\n  \n    textarea' + parent + ',\n      select[multiple]' + parent + ' {\n      height: auto;\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  formControl: formControl,
  formControlValidation: formControlValidation,
  formControlFocus: formControlFocus,
  inputSize: inputSize
};
});
unwrapExports(forms);

var breakpoints = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.breakpointNext = breakpointNext;
exports.breakpointMin = breakpointMin;
exports.breakpointMax = breakpointMax;
exports.breakpointInfix = breakpointInfix;
exports.mediaBreakpointUp = mediaBreakpointUp;
exports.mediaBreakpointDown = mediaBreakpointDown;
exports.mediaBreakpointBetween = mediaBreakpointBetween;
exports.mediaBreakpointOnly = mediaBreakpointOnly;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function breakpointNext(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var breakpointNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.keys(breakpoints);
  var n = breakpointNames.indexOf(name);
  if (n !== -1 && n + 1 < breakpointNames.length) {
    return breakpointNames[n + 1];
  }
  return null;
}
function breakpointMin(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var min = breakpoints[name];
  return min !== '0' ? min : null;
}
function breakpointMax(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var next = breakpointNext(name, breakpoints);
  if (next) {
    var min = _unitUtils2.default.rmUnit(breakpointMin(next, breakpoints), _unitUtils2.default.UNIT.PX);
    return (min - 1).toString() + _unitUtils2.default.UNIT.PX;
  }
  return null;
}
function breakpointInfix(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  return breakpointMin(name, breakpoints) == null ? '' : '-' + name;
}
function mediaBreakpointUp(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  var min = breakpointMin(name, breakpoints);
  if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointDown(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  var max = breakpointMax(name, breakpoints);
  if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointBetween(lower, upper) {
  var breakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-breakpoints'];
  var content = arguments[3];
  var min = breakpointMin(lower, breakpoints);
  var max = breakpointMax(upper, breakpoints);
  if (min && max) {
    return '\n      @media (min-width: ' + min + ') and (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  } else if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  } else if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointOnly(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  return mediaBreakpointBetween(name, name, breakpoints, content);
}
exports.default = {
  defaultProps: defaultProps,
  up: mediaBreakpointUp,
  down: mediaBreakpointDown,
  between: mediaBreakpointBetween,
  only: mediaBreakpointOnly
};
});
unwrapExports(breakpoints);

var customForms_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.customForms = customForms;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-rounded': true,
  '$enable-shadows': false,
  '$custom-control-checked-indicator-box-shadow': 'none',
  '$custom-control-active-indicator-box-shadow': 'none',
  '$custom-control-indicator-box-shadow': 'inset 0 .25rem .25rem rgba(0, 0, 0, 0.1)',
  '$custom-checkbox-indeterminate-box-shadow': 'none',
  '$custom-select-focus-box-shadow': 'inset 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 5px rgba(hsl(207.79999999999995, 98.2%, 53.4%), .5)',
  '$custom-file-focus-box-shadow': '0 0 0 .075rem #fff, 0 0 0 .2rem #0275d8',
  '$custom-file-box-shadow': 'inset 0 .2rem .4rem rgba(0, 0, 0, 0.05)',
  '$custom-select-border-radius': '.25rem',
  '$custom-file-border-radius': '.25rem',
  '$input-bg': '#fff',
  '$custom-select-line-height': '1.25px',
  '$line-height-base': '1.5',
  '$custom-control-gutter': '1.5rem',
  '$custom-control-spacer-x': '1rem',
  '$custom-control-checked-indicator-color': '#fff',
  '$custom-control-checked-indicator-bg': '#0275d8',
  '$custom-control-focus-indicator-box-shadow': '0 0 0 1px #fff, 0 0 0 3px #0275d8',
  '$custom-control-active-indicator-color': '#fff',
  '$custom-control-active-indicator-bg': 'hsl(207.79999999999995, 98.2%, 57.7%)',
  '$custom-control-disabled-cursor': 'not-allowed',
  '$custom-control-disabled-indicator-bg': '#eceeef',
  '$custom-control-disabled-description-color': '#636c72',
  '$custom-control-indicator-size': '1rem',
  '$custom-control-indicator-bg': '#ddd',
  '$custom-control-indicator-bg-size': '50% 50%',
  '$custom-checkbox-checked-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3E%3Cpath fill=\'#fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3E%3C/svg%3E")',
  '$custom-checkbox-indeterminate-bg': '#0275d8',
  '$custom-checkbox-indeterminate-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3E%3Cpath stroke=\'#fff\' d=\'M0 2h4\'/%3E%3C/svg%3E")',
  '$custom-radio-radius': '50%',
  '$custom-radio-checked-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3E%3Ccircle r=\'3\' fill=\'#fff\'/%3E%3C/svg%3E")',
  '$custom-control-spacer-y': '.25rem',
  '$border-width': '1px',
  '$input-height': '2.5rem',
  '$custom-select-padding-y': '.375rem',
  '$custom-select-padding-x': '.75rem ',
  '$custom-select-indicator-padding': '1rem',
  '$custom-select-color': '#464a4c',
  '$custom-select-bg': '#fff',
  '$custom-select-indicator': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'#333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E")',
  '$custom-select-bg-size': '8px 10px',
  '$custom-select-border-width': '1px',
  '$custom-select-border-color': 'rgba(0, 0, 0, 0.15)',
  '$custom-select-focus-border-color': 'hsl(207.79999999999995, 98.2%, 53.4%)',
  '$input-color': '#464a4c',
  '$custom-select-disabled-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$custom-select-disabled-bg': '#eceeef',
  '$custom-select-sm-font-size': '75%',
  '$custom-file-width': '14rem',
  '$custom-file-height': '2.5rem',
  '$custom-file-padding-x': '.5rem',
  '$custom-file-padding-y': '1rem',
  '$custom-file-line-height': '1.5',
  '$custom-file-color': '#464a4c',
  '$custom-file-bg': '#fff',
  '$custom-file-border-width': '1px',
  '$custom-file-border-color': 'rgba(0, 0, 0, 0.15)',
  '$custom-file-button-color': '#464a4c',
  '$custom-file-button-bg': '#eceeef',
  '$custom-checkbox-radius': '.25rem',
  '$custom-file-text': {
    'placeholder': {
      'en': 'Choose file...'
    },
    'button-label': {
      'en': 'Browse'
    }
  }
};
function customForms() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableShadows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-shadows'];
  var $customControlCheckedIndicatorBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$custom-control-checked-indicator-box-shadow'];
  var $customControlActiveIndicatorBoxShadow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$custom-control-active-indicator-box-shadow'];
  var $customControlIndicatorBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$custom-control-indicator-box-shadow'];
  var $customCheckboxIndeterminateBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$custom-checkbox-indeterminate-box-shadow'];
  var $customSelectFocusBoxShadow = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$custom-select-focus-box-shadow'];
  var $customFileFocusBoxShadow = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$custom-file-focus-box-shadow'];
  var $customFileBoxShadow = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$custom-file-box-shadow'];
  var $customSelectBorderRadius = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$custom-select-border-radius'];
  var $customFileBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$custom-file-border-radius'];
  var $customCheckboxRadius = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$custom-checkbox-radius'];
  var $inputBg = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$input-bg'];
  var $customSelectLineHeight = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$custom-select-line-height'];
  var $lineHeightBase = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$line-height-base'];
  var $customControlGutter = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$custom-control-gutter'];
  var $customControlSpacerX = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$custom-control-spacer-x'];
  var $customControlCheckedIndicatorColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$custom-control-checked-indicator-color'];
  var $customControlCheckedIndicatorBg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$custom-control-checked-indicator-bg'];
  var $customControlFocusIndicatorBoxShadow = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$custom-control-focus-indicator-box-shadow'];
  var $customControlActiveIndicatorColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$custom-control-active-indicator-color'];
  var $customControlActiveIndicatorBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$custom-control-active-indicator-bg'];
  var $customControlDisabledCursor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$custom-control-disabled-cursor'];
  var $customControlDisabledIndicatorBg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$custom-control-disabled-indicator-bg'];
  var $customControlDisabledDescriptionColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$custom-control-disabled-description-color'];
  var $customControlIndicatorSize = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$custom-control-indicator-size'];
  var $customControlIndicatorBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$custom-control-indicator-bg'];
  var $customControlIndicatorBgSize = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$custom-control-indicator-bg-size'];
  var $customCheckboxCheckedIcon = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$custom-checkbox-checked-icon'];
  var $customCheckboxIndeterminateBg = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$custom-checkbox-indeterminate-bg'];
  var $customCheckboxIndeterminateIcon = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps['$custom-checkbox-indeterminate-icon'];
  var $customRadioRadius = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps['$custom-radio-radius'];
  var $customRadioCheckedIcon = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps['$custom-radio-checked-icon'];
  var $customControlSpacerY = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps['$custom-control-spacer-y'];
  var $borderWidth = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps['$border-width'];
  var $inputHeight = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps['$input-height'];
  var $customSelectPaddingY = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps['$custom-select-padding-y'];
  var $customSelectPaddingX = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps['$custom-select-padding-x'];
  var $customSelectIndicatorPadding = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps['$custom-select-indicator-padding'];
  var $customSelectColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps['$custom-select-color'];
  var $customSelectBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps['$custom-select-bg'];
  var $customSelectIndicator = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps['$custom-select-indicator'];
  var $customSelectBgSize = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps['$custom-select-bg-size'];
  var $customSelectBorderWidth = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps['$custom-select-border-width'];
  var $customSelectBorderColor = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps['$custom-select-border-color'];
  var $customSelectFocusBorderColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps['$custom-select-focus-border-color'];
  var $inputColor = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps['$input-color'];
  var $customSelectDisabledColor = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps['$custom-select-disabled-color'];
  var $cursorDisabled = arguments.length > 48 && arguments[48] !== undefined ? arguments[48] : defaultProps['$cursor-disabled'];
  var $customSelectDisabledBg = arguments.length > 49 && arguments[49] !== undefined ? arguments[49] : defaultProps['$custom-select-disabled-bg'];
  var $customSelectSmFontSize = arguments.length > 50 && arguments[50] !== undefined ? arguments[50] : defaultProps['$custom-select-sm-font-size'];
  var $customFileWidth = arguments.length > 51 && arguments[51] !== undefined ? arguments[51] : defaultProps['$custom-file-width'];
  var $customFileHeight = arguments.length > 52 && arguments[52] !== undefined ? arguments[52] : defaultProps['$custom-file-height'];
  var $customFilePaddingX = arguments.length > 53 && arguments[53] !== undefined ? arguments[53] : defaultProps['$custom-file-padding-x'];
  var $customFilePaddingY = arguments.length > 54 && arguments[54] !== undefined ? arguments[54] : defaultProps['$custom-file-padding-y'];
  var $customFileLineHeight = arguments.length > 55 && arguments[55] !== undefined ? arguments[55] : defaultProps['$custom-file-line-height'];
  var $customFileColor = arguments.length > 56 && arguments[56] !== undefined ? arguments[56] : defaultProps['$custom-file-color'];
  var $customFileBg = arguments.length > 57 && arguments[57] !== undefined ? arguments[57] : defaultProps['$custom-file-bg'];
  var $customFileBorderWidth = arguments.length > 58 && arguments[58] !== undefined ? arguments[58] : defaultProps['$custom-file-border-width'];
  var $customFileBorderColor = arguments.length > 59 && arguments[59] !== undefined ? arguments[59] : defaultProps['$custom-file-border-color'];
  var $customFileButtonColor = arguments.length > 60 && arguments[60] !== undefined ? arguments[60] : defaultProps['$custom-file-button-color'];
  var $customFileButtonBg = arguments.length > 61 && arguments[61] !== undefined ? arguments[61] : defaultProps['$custom-file-button-bg'];
  var $customFileText = arguments.length > 62 && arguments[62] !== undefined ? arguments[62] : defaultProps['$custom-file-text'];
  var customFileControlBeforeList = [];
  Object.keys($customFileText.placeholder).forEach(function ($lang) {
    customFileControlBeforeList.push('\n      &:lang(' + $lang + ')::after {\n        content: "' + $customFileText.placeholder[$lang] + '";\n      }   \n    ');
  });
  var customFileControlAfterList = [];
  Object.keys($customFileText['button-label']).forEach(function ($lang) {
    customFileControlAfterList.push('\n      &:lang(' + $lang + ')::before {\n        content: "' + $customFileText['button-label'][$lang] + '";\n      }\n    ');
  });
  var selectBorderWidth = _unitUtils2.default.math.multiply($borderWidth, 2);
  var customSelectPaddingRight = _unitUtils2.default.math.addition($customSelectPaddingY, $customSelectIndicatorPadding);
  var lineHeightBaseMinusCustomControlIndicatorSize = _unitUtils2.default.math.subtract($lineHeightBase, $customControlIndicatorSize);
  return '\n    /* Embedded icons from Open Iconic. */\n    /* Released under MIT and copyright 2014 Waybury. */\n    /* https://useiconic.com/open */\n    \n    \n    /* Checkboxes and radios */\n    /* Base class takes care of all the key behavioral aspects. */\n    \n    & .custom-control {\n      position: relative;\n      display: inline-flex;\n      min-height: calc(1rem * ' + $lineHeightBase + ');\n      padding-left: ' + $customControlGutter + ';\n      margin-right: ' + $customControlSpacerX + ';\n    }\n    \n    & .custom-control-input {\n      position: absolute;\n      z-index: -1; /* Put the input behind the label so it does not overlay text */\n      opacity: 0;\n    \n      &:checked ~ .custom-control-indicator {\n        color: ' + $customControlCheckedIndicatorColor + ';\n        background-color: ' + $customControlCheckedIndicatorBg + ';\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, $customControlCheckedIndicatorBoxShadow) + '\n      }\n    \n      &:focus ~ .custom-control-indicator {\n        /* the mixin is not used here to make sure there is feedback */\n        box-shadow: ' + $customControlFocusIndicatorBoxShadow + ';\n      }\n    \n      &:active ~ .custom-control-indicator {\n        color: ' + $customControlActiveIndicatorColor + ';\n        background-color: ' + $customControlActiveIndicatorBg + ';\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, $customControlActiveIndicatorBoxShadow) + '\n      }\n    \n      &:disabled {\n        ~ .custom-control-indicator {\n          cursor: ' + $customControlDisabledCursor + ';\n          background-color: ' + $customControlDisabledIndicatorBg + ';\n        }\n    \n        ~ .custom-control-description {\n          color: ' + $customControlDisabledDescriptionColor + ';\n          cursor: ' + $customControlDisabledCursor + ';\n        }\n      }\n    }\n    \n    /* Custom indicator */\n    /* Generates a shadow element to create our makeshift checkbox/radio background. */\n    \n    & .custom-control-indicator {\n      position: absolute;\n      top: calc(' + lineHeightBaseMinusCustomControlIndicatorSize + ' / 2);\n      left: 0;\n      display: block;\n      width: ' + $customControlIndicatorSize + ';\n      height: ' + $customControlIndicatorSize + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customControlIndicatorBg + ';\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: ' + $customControlIndicatorBgSize + ';\n      ' + (0, boxShadow_1.boxShadow)($enableShadows, $customControlIndicatorBoxShadow) + '\n    }\n    \n    /* Checkboxes */\n    /* Tweak just a few things for checkboxes.  */\n    \n    & .custom-checkbox {\n      & .custom-control-indicator {\n        ' + (0, borderRadius_1.borderRadius)($enableRounded, $customCheckboxRadius) + '\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customCheckboxCheckedIcon + ';\n      }\n    \n      & .custom-control-input.indeterminate ~ .custom-control-indicator {\n        background-color: ' + $customCheckboxIndeterminateBg + ';\n        background-image: ' + $customCheckboxIndeterminateIcon + ';\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, $customCheckboxIndeterminateBoxShadow) + '\n      }\n    }\n    \n    /* Radios */\n    /* Tweak just a few things for radios. */\n    \n    & .custom-radio {\n      & .custom-control-indicator {\n        border-radius: ' + $customRadioRadius + ';\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customRadioCheckedIcon + ';\n      }\n    }\n    \n    \n    /* Layout options */\n    /* By default radios and checkboxes are inline-block with no additional spacing */\n    /* set. Use these optional classes to tweak the layout. */\n    \n    & .custom-controls-stacked {\n      display: flex;\n      flex-direction: column;\n    \n      & .custom-control {\n        margin-bottom: ' + $customControlSpacerY + ';\n    \n        + & .custom-control {\n          margin-left: 0;\n        }\n      }\n    }\n    \n    \n    /* Select */\n    /* Replaces the browser default select with a custom one, mostly pulled from */\n    /* http://primercss.io. */\n    \n    & .custom-select {\n      display: inline-block;\n      max-width: 100%;\n      height: calc(' + $inputHeight + ' + ' + selectBorderWidth + ');\n      padding: ' + $customSelectPaddingY + ' ' + customSelectPaddingRight + ' ' + $customSelectPaddingY + ' ' + $customSelectPaddingX + ';\n      line-height: ' + $customSelectLineHeight + ';\n      color: ' + $customSelectColor + ';\n      vertical-align: middle;\n      background: ' + $customSelectBg + ' ' + $customSelectIndicator + ' no-repeat right ' + $customSelectPaddingX + ' center;\n      background-size: ' + $customSelectBgSize + ';\n      border: ' + $customSelectBorderWidth + ' solid ' + $customSelectBorderColor + ';\n      ' + (0, borderRadius_1.borderRadius)($enableRounded, $customSelectBorderRadius) + '\n      /* Use vendor prefixes as appearance is not part of the CSS spec.  */\n      -moz-appearance: none;\n      -webkit-appearance: none;\n    \n      &:focus {\n        border-color: ' + $customSelectFocusBorderColor + ';\n        outline: none;\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, $customSelectFocusBoxShadow) + '\n    \n        ::-ms-value {\n          /* For visual consistency with other platforms/browsers, */\n          /* supress the default white text on blue background highlight given to */\n          /* the selected option text when the (still closed) <select> receives focus */\n          /* in IE and (under certain conditions) Edge. */\n          /* See https://github.com/twbs/bootstrap/issues/19398. */\n          color: ' + $inputColor + ';\n          background-color: ' + $inputBg + ';\n        }\n      }\n    \n      &:disabled {\n        color: ' + $customSelectDisabledColor + ';\n        cursor: ' + $cursorDisabled + ';\n        background-color: ' + $customSelectDisabledBg + ';\n      }\n    \n      /* Hides the default caret in IE11 */\n      ::-ms-expand {\n        opacity: 0;\n      }\n    }\n    \n    & .custom-select-sm {\n      padding-top: ' + $customSelectPaddingY + ';\n      padding-bottom: ' + $customSelectPaddingY + ';\n      font-size: ' + $customSelectSmFontSize + ';\n    \n      /* &:not([multiple]) { */\n      /*   height: 26px; */\n      /*   min-height: 26px; */\n      /* } */\n    }\n    \n    \n    /* File */\n    /* Custom file input. */\n    \n    & .custom-file {\n      position: relative;\n      display: inline-block;\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin-bottom: 0;\n    }\n    \n    & .custom-file-input {\n      min-width: ' + $customFileWidth + ';\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin: 0;\n      opacity: 0;\n    \n      &:focus ~ .custom-file-control {\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, $customFileFocusBoxShadow) + '\n      }\n    }\n    \n    & .custom-file-control {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      z-index: 5;\n      height: ' + $customFileHeight + ';\n      padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n      line-height: ' + $customFileLineHeight + ';\n      color: ' + $customFileColor + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customFileBg + ';\n      border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n      ' + (0, borderRadius_1.borderRadius)($enableRounded, $customFileBorderRadius) + '\n      ' + (0, boxShadow_1.boxShadow)($enableShadows, $customFileBoxShadow) + '\n      \n      ' + customFileControlBeforeList.join('\n') + '\n    \n      &::before {\n        position: absolute;\n        top: ' + $customFileBorderWidth + ';\n        right: ' + $customFileBorderWidth + ';\n        bottom: ' + $customFileBorderWidth + ';\n        z-index: 6;\n        display: block;\n        height: ' + $customFileHeight + ';\n        padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n        line-height: ' + $customFileLineHeight + ';\n        color: ' + $customFileButtonColor + ';\n        background-color: ' + $customFileButtonBg + ';\n        border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n        ' + (0, borderRadius_1.borderRadius)(0, $enableRounded, $customFileBorderRadius, $customFileBorderRadius, 0) + '\n      }\n\n      ' + customFileControlAfterList.join('\n') + '\n    }\n  ';
}
exports.default = {
  customForms: customForms
};
});
unwrapExports(customForms_1);

var grid = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.makeContainer = makeContainer;
exports.makeContainerMaxWidths = makeContainerMaxWidths;
exports.makeGutters = makeGutters;
exports.makeRow = makeRow;
exports.makeColReady = makeColReady;
exports.makeCol = makeCol;
exports.makeColOffset = makeColOffset;
exports.makeColPush = makeColPush;
exports.makeColPull = makeColPull;
exports.makeColModifier = makeColModifier;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$grid-gutter-widths': {
    xs: '30px',
    sm: '30px',
    md: '30px',
    lg: '30px',
    xl: '30px'
  },
  '$container-max-widths': {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  },
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$grid-columns': 12,
  '$enable-grid-classes': true
};
function makeContainer() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-gutter-widths'];
  if (enableGridClasses) {
    var columns = [];
    Object.keys(gridGutterWidths).forEach(function (breakpoint) {
      var gutter = gridGutterWidths[breakpoint];
      var column = (0, breakpoints.mediaBreakpointUp)(breakpoint, gutter, '\n        padding-right: ' + _unitUtils2.default.rmUnit(gutter) / 2 + _unitUtils2.default.detectUnit(gutter) + ';\n        padding-left:  ' + _unitUtils2.default.rmUnit(gutter) / 2 + _unitUtils2.default.detectUnit(gutter) + ';\n      ');
      columns.push(column);
    });
    return '\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;    \n      ' + columns.join('\n') + '\n    ';
  }
  return '';
}
function makeContainerMaxWidths() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var containerMaxWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$container-max-widths'];
  var gridBreakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-breakpoints'];
  if (enableGridClasses) {
    var maximumWidthList = [];
    Object.keys(containerMaxWidths).forEach(function (breakpoint) {
      var maximumWidth = (0, breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        width: ' + containerMaxWidths[breakpoint] + ';\n        max-width: 100%;\n      ');
      maximumWidthList.push(maximumWidth);
    });
    return '\n      ' + maximumWidthList.join('\n') + '\n    ';
  }
  return '';
}
function makeGutters() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-gutter-widths'];
  var breakpoints$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var gutterList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutterValue = gridGutterWidths[breakpoint];
    gutterValue = '' + _unitUtils2.default.rmUnit(gutterValue) / 2 + _unitUtils2.default.detectUnit(gutterValue);
    var gutter = (0, breakpoints.mediaBreakpointUp)(breakpoint, breakpoints$$1, '\n      padding-right: ' + gutterValue + ';\n      padding-left:  ' + gutterValue + ';\n    ');
    gutterList.push(gutter);
  });
  return '\n    ' + gutterList.join('\n') + '\n  ';
}
function makeRow() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-gutter-widths'];
  if (enableGridClasses) {
    var rowList = [];
    Object.keys(gridGutterWidths).forEach(function (breakpoint) {
      var gutter = gridGutterWidths[breakpoint];
      gutter = '' + _unitUtils2.default.rmUnit(gutter) / -2 + _unitUtils2.default.detectUnit(gutter);
      var row = '\n        margin-right: ' + gutter + ';\n        margin-left:  ' + gutter + ';\n      ';
      rowList.push(row);
    });
    return '\n      display: flex;\n      flex-wrap: wrap;\n      ' + rowList.join('\n') + '\n    ';
  }
  return '';
}
function makeColReady() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-gutter-widths'];
  var colReadyList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutter = gridGutterWidths[breakpoint];
    gutter = '' + _unitUtils2.default.rmUnit(gutter) / 2 + _unitUtils2.default.detectUnit(gutter);
    var colReady = (0, breakpoints.mediaBreakpointUp)(breakpoint, gridGutterWidths, '\n      padding-right: ' + gutter + ';\n      padding-left:  ' + gutter + ';\n    ');
    colReadyList.push(colReady);
  });
  return '\n    position: relative;\n    /* Prevent columns from becoming too narrow when at smaller grid tiers by */\n    /* always setting \'width: 100%;\'. This works because we use \'flex\' values */\n    /* later on to override this initial width. */\n    min-height: 1px; /* Prevent collapsing */\n    width: 100%;\n    ' + colReadyList.join('\n') + '\n  ';
}
function makeCol(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  return '\n    flex: 0 0 ' + _unitUtils2.default.toPercent(size, columns) + ';\n    /* Add a \'max-width\' to ensure content within each column does not blow out */\n    /* the width of the column. Applies to IE10+ and Firefox. Chrome and Safari */\n    /* do not appear to require this. */\n    max-width: ' + _unitUtils2.default.toPercent(size, columns) + ';\n  ';
}
function makeColOffset($size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  return '\n    margin-left: ' + _unitUtils2.default.toPercent($size, columns) + ';\n  ';
}
function makeColPush(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  return '\n    left: ' + (size > 0 ? _unitUtils2.default.toPercent(size, columns) : 'auto') + ';\n  ';
}
function makeColPull(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  return '\n    right: ' + (size > 0 ? _unitUtils2.default.toPercent(size, columns) : 'auto') + ';\n  ';
}
function makeColModifier(type, size, columns) {
  var TYPE = {
    PUSH: 'push',
    PULL: 'pull',
    OFFSET: 'offset'
  };
  var modifier = '';
  if (type === TYPE.PUSH) {
    modifier = makeColPush(size, columns);
  } else if (type === TYPE.PULL) {
    modifier = makeColPull(size, columns);
  } else if (type === TYPE.OFFSET) {
    modifier = makeColOffset(size, columns);
  }
  return '\n    ' + modifier + '\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  makeContainer: makeContainer,
  makeContainerMaxWidths: makeContainerMaxWidths,
  makeGutters: makeGutters,
  makeRow: makeRow,
  makeColReady: makeColReady,
  makeCol: makeCol,
  makeColOffset: makeColOffset,
  makeColPush: makeColPush,
  makeColPull: makeColPull,
  makeColModifier: makeColModifier
};
});
unwrapExports(grid);

var Form_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _unitUtils2 = _interopRequireDefault(unitUtils);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  theme: _theme2.default,
  tag: 'form'
};
var selectBorderWidth = _unitUtils2.default.math.multiply(_theme2.default['$border-width'], 2);
var FormUnstyled = function (_React$Component) {
  _inherits(FormUnstyled, _React$Component);
  function FormUnstyled() {
    _classCallCheck(this, FormUnstyled);
    return _possibleConstructorReturn(this, (FormUnstyled.__proto__ || Object.getPrototypeOf(FormUnstyled)).apply(this, arguments));
  }
  _createClass(FormUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          inline = _omit.inline,
          Tag = _omit.tag,
          getRef = _omit.getRef,
          rest = _objectWithoutProperties(_omit, ['className', 'cssModule', 'inline', 'tag', 'getRef']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, inline ? 'form-inline' : false), cssModule);
      return _react2.default.createElement(Tag, _extends({ ref: getRef, className: classes }, rest));
    }
  }]);
  return FormUnstyled;
}(_react2.default.Component);
FormUnstyled.propTypes = {
  children: _propTypes2.default.node,
  theme: _propTypes2.default.object,
  inline: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  getRef: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
var Form = (0, _styledComponents2.default)(FormUnstyled).withConfig({
  displayName: 'Form'
})(['  ', ''], function (props) {
  return '\n    /*\n     Textual form controls\n    */\n\n    ' + (0, forms.formControl)(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']) + '\n    \n    select.form-control {\n      &:not([size]):not([multiple]) {\n        height: calc(' + props.theme['$input-height'] + ' + ' + selectBorderWidth + ');\n      }\n\n      &:focus::-ms-value {\n        /* Suppress the nested default white text on blue background highlight given to\n         the selected option text when the (still closed) <select> receives focus\n         in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\n         match the appearance of the native widget.\n         See https://github.com/twbs/bootstrap/issues/19398.\n         */\n        color: ' + props.theme['$input-color'] + ';\n        background-color: ' + props.theme['$input-bg'] + ';\n      }\n    }\n\n    /* Make file inputs better match text inputs by forcing them to new lines. */\n    & .form-control-file,\n    .form-control-range {\n      display: block;\n    }\n\n    /*\n     Labels\n    */\n\n    /* For use with horizontal and inline forms, when you need the label text to */\n    /* align with the form controls. */\n    & .col-form-label {\n      padding-top: calc(' + props.theme['$input-padding-y'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      margin-bottom: 0; /* Override the \'<label>\' default */\n    }\n\n    & .col-form-label-lg {\n      padding-top: calc(' + props.theme['$input-padding-y-lg'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y-lg'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      font-size: ' + props.theme['$font-size-lg'] + ';\n    }\n\n    & .col-form-label-sm {\n      padding-top: calc(' + props.theme['$input-padding-y-sm'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y-sm'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      font-size: ' + props.theme['$font-size-sm'] + ';\n    }\n\n    /*\n     Legends\n    */\n\n    /* For use with horizontal and inline forms, when you need the legend text to */\n    /* be the same size as regular labels, and to align with the form controls. */\n    & .col-form-legend {\n      padding-top: ' + props.theme['$input-padding-y'] + ';\n      padding-bottom: ' + props.theme['$input-padding-y'] + ';\n      margin-bottom: 0;\n      font-size: ' + props.theme['$font-size-base'] + ';\n    }\n\n\n    /* Static form control text\n\n     Apply class to an element to make any string of text align with labels in a\n     horizontal form layout.\n    */\n\n    & .form-control-static {\n      padding-top: ' + props.theme['$input-padding-y'] + ';\n      padding-bottom: ' + props.theme['$input-padding-y'] + ';\n      margin-bottom: 0; /* match inputs if this class comes on inputs with default margins */\n      line-height: ' + props.theme['$input-line-height'] + ';\n      border: solid transparent;\n      border-width: ' + props.theme['$input-btn-border-width'] + ' 0;\n\n      &.form-control-sm,\n      &.form-control-lg {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n\n\n    /* Form control sizing\n\n     Build on .form-control with modifier classes to decrease or increase the\n     height and font-size of form controls.\n\n     The .form-group-* form-control variations are sadly duplicated to avoid the\n     issue documented in https://github.com/twbs/bootstrap/issues/15074.\n    */\n\n    & .form-control-sm {\n      padding: ' + props.theme['$input-padding-y-sm'] + ' ' + props.theme['$input-padding-x-sm'] + ';\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      ' + (0, borderRadius_1.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']) + '\n    }\n\n    select.form-control-sm {\n      &:not([size]):not([multiple]) {\n        height: ' + props.theme['$input-height-sm'] + ';\n      }\n    }\n\n    & .form-control-lg {\n      padding: ' + props.theme['$input-padding-y-lg'] + ' ' + props.theme['$input-padding-x-lg'] + ';\n      font-size: ' + props.theme['$font-size-lg'] + ';\n      ' + (0, borderRadius_1.borderRadius)(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']) + '\n    }\n\n    select.form-control-lg {\n      &:not([size]):not([multiple]) {\n        height: ' + props.theme['$input-height-lg'] + ';\n      }\n    }\n\n\n    /* Form groups Designed to help with the organization and spacing of vertical forms. For horizontal forms, use the predefined grid classes. */\n\n    &.form-group,\n     & .form-group {\n      margin-bottom: ' + props.theme['$form-group-margin-bottom'] + ';\n    }\n\n    & .form-text {\n      display: block;\n      margin-top: ' + props.theme['$form-text-margin-top'] + '\n    }\n\n\n    /* Checkboxes and radios Indent the labels to position radios/checkboxes as hanging controls. */\n\n    & .form-check {\n      position: relative;\n      display: block;\n      margin-bottom: ' + props.theme['$form-check-margin-bottom'] + ';\n\n      &.disabled {\n        .form-check-label {\n          color: ' + props.theme['$text-muted'] + ';\n          cursor: ' + props.theme['$cursor-disabled'] + ';\n        }\n      }\n    }\n\n    & .form-check-label {\n      padding-left: ' + props.theme['$form-check-input-gutter'] + ';\n      margin-bottom: 0; /* Override default <label> bottom margin */\n      cursor: pointer;\n    }\n\n    & .form-check-input {\n      position: absolute;\n      margin-top: ' + props.theme['$form-check-input-margin-y'] + ';\n      margin-left: -' + props.theme['$form-check-input-gutter'] + ';\n\n      &:only-child {\n        position: static;\n      }\n    }\n\n    /* Radios and checkboxes on same line */\n    & .form-check-inline {\n      display: inline-block;\n      .form-check-label {\n        vertical-align: middle;\n      }\n\n      + .form-check-inline {\n        margin-left: ' + props.theme['$form-check-inline-margin-x'] + ';\n      }\n\n      &.disabled {\n        color: ' + props.theme['$text-muted'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n      }\n    }\n\n\n    /* Form control feedback states Apply contextual and semantic states to individual form controls. */\n    & .form-control-feedback {\n      margin-top: ' + props.theme['$form-feedback-margin-top'] + ';\n    }\n\n    & .form-control-success,\n    & .form-control-warning,\n    & .form-control-danger {\n      padding-right: ' + _unitUtils2.default.math.multiply(props.theme['$input-padding-x'], 3) + ';\n      background-repeat: no-repeat;\n      background-position: center right ' + _unitUtils2.default.math.divide(props.theme['$input-height'], 4) + ';\n      background-size: ' + _unitUtils2.default.math.divide(props.theme['$input-height'], 2) + ' ' + _unitUtils2.default.math.divide(props.theme['$input-height'], 2) + ';\n    }\n\n    /* Form validation states */\n    & .has-success {\n      ' + (0, forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-success'], props.theme['$box-shadow']) + '\n\n      .form-control-success {\n        background-image: ' + props.theme['$form-icon-success'] + ';\n      }\n    }\n\n    & .has-warning {\n      ' + (0, forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-warning'], props.theme['$box-shadow']) + '\n\n      .form-control-warning {\n        background-image: ' + props.theme['$form-icon-warning'] + ';\n      }\n    }\n\n    & .has-danger {\n      ' + (0, forms.formControlValidation)(props.theme['$enable-shadows'], props.theme['$brand-danger'], props.theme['$box-shadow']) + '\n\n      .form-control-danger {\n        background-image: ' + props.theme['$form-icon-danger'] + ';\n      }\n    }\n\n\n    /* Inline forms\n\n     Make forms appear inline(-block) by adding the .form-inline class. Inline\n     forms begin stacked on extra small (mobile) devices and then go inline when\n     viewports reach <768px.\n\n     Requires wrapping inputs and labels with .form-group for proper display of\n     default HTML form controls and our custom form controls (e.g., input groups).\n    */\n\n    &.form-inline {\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center; /* Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height) */\n\n      & .form-check {\n         width: 100%;\n      }\n\n      /* Kick in the inline */\n      ' + (0, breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], '\n          label {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-bottom: 0;\n          }\n          \n          /* Inline-block all the things for inline */\n          & .form-group {\n            display: flex;\n            flex: 0 0 auto;\n            flex-flow: row wrap;\n            margin-bottom: 0;\n          }\n      \n          /* Allow folks to *not* use .form-group */\n          & .form-control {\n            display: inline-block;\n            width: auto; /* Prevent labels from stacking above inputs in .form-group */\n            vertical-align: middle;\n          }\n      \n          /* Make static controls behave like regular ones */\n          & .form-control-static {\n            display: inline-block;\n          }\n      \n          & .input-group {\n            width: auto;\n          }\n          \n          & .form-control-label {\n             margin-bottom: 0;\n            vertical-align: middle;\n          }\n      \n          /* Remove default margin on radios/checkboxes that were used for stacking, and */\n          /*  then undo the floating of radios and checkboxes to match. */\n          & .form-check {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: auto;\n            margin-top: 0;\n            margin-bottom: 0;\n          }\n          & .form-check-label {\n            padding-left: 0;\n          }\n          & .form-check-input {\n            position: relative;\n            margin-left: 0;\n            margin-top: 0;\n            margin-right: ' + props.theme['$form-check-input-margin-x'] + ';\n          }\n          \n          /* Custom form controls */\n          & .custom-control {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-left: 0;\n          }\n          \n          & .custom-control-indicator {\n            position: static;\n            display: inline-block;\n            margin-right: ' + props.theme['$form-check-input-margin-x'] + '; /* Flexbox alignment means we lose our HTML space here, so we compensate. */\n            vertical-align: text-bottom;\n          }\n          \n          /* Re-override the feedback icon. */\n          & .has-feedback .form-control-feedback {\n            top: 0;\n          }\n        ') + '\n    }\n    ' + (0, customForms_1.customForms)(props.theme['$enable-rounded'], props.theme['$enable-shadows'], props.theme['$custom-control-checked-indicator-box-shadow'], props.theme['$custom-control-active-indicator-box-shadow'], props.theme['$custom-control-indicator-box-shadow'], props.theme['$custom-checkbox-indeterminate-box-shadow'], props.theme['$custom-select-focus-box-shadow'], props.theme['$custom-file-focus-box-shadow'], props.theme['$custom-file-box-shadow'], props.theme['$custom-select-border-radius'], props.theme['$custom-file-border-radius'], props.theme['$custom-checkbox-radius'], props.theme['$input-bg'], props.theme['$custom-select-line-height'], props.theme['$line-height-base'], props.theme['$custom-control-gutter'], props.theme['$custom-control-spacer-x'], props.theme['$custom-control-checked-indicator-color'], props.theme['$custom-control-checked-indicator-bg'], props.theme['$custom-control-focus-indicator-box-shadow'], props.theme['$custom-control-active-indicator-color'], props.theme['$custom-control-active-indicator-bg'], props.theme['$custom-control-disabled-cursor'], props.theme['$custom-control-disabled-indicator-bg'], props.theme['$custom-control-disabled-description-color'], props.theme['$custom-control-indicator-size'], props.theme['$custom-control-indicator-bg'], props.theme['$custom-control-indicator-bg-size'], props.theme['$custom-checkbox-checked-icon'], props.theme['$custom-checkbox-indeterminate-bg'], props.theme['$custom-checkbox-indeterminate-icon'], props.theme['$custom-radio-radius'], props.theme['$custom-radio-checked-icon'], props.theme['$custom-control-spacer-y'], props.theme['$border-width'], props.theme['$input-height'], props.theme['$custom-select-padding-y'], props.theme['$custom-select-padding-x'], props.theme['$custom-select-indicator-padding'], props.theme['$custom-select-color'], props.theme['$custom-select-bg'], props.theme['$custom-select-indicator'], props.theme['$custom-select-bg-size'], props.theme['$custom-select-border-width'], props.theme['$custom-select-border-color'], props.theme['$custom-select-focus-border-color'], props.theme['$input-color'], props.theme['$custom-select-disabled-color'], props.theme['$cursor-disabled'], props.theme['$custom-select-disabled-bg'], props.theme['$custom-select-sm-font-size'], props.theme['$custom-file-width'], props.theme['$custom-file-height'], props.theme['$custom-file-padding-x'], props.theme['$custom-file-padding-y'], props.theme['$custom-file-line-height'], props.theme['$custom-file-color'], props.theme['$custom-file-bg'], props.theme['$custom-file-border-width'], props.theme['$custom-file-border-color'], props.theme['$custom-file-button-color'], props.theme['$custom-file-button-bg'], props.theme['$custom-file-text']) + '\n    & .row {\n      ' + (0, grid.makeRow)(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n  ';
});
Form.defaultProps = defaultProps;
exports.default = Form;
module.exports = exports['default'];
});
unwrapExports(Form_1);

var FormGroup_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  tag: 'div'
};
var FormGroup = function (_React$Component) {
  _inherits(FormGroup, _React$Component);
  function FormGroup() {
    _classCallCheck(this, FormGroup);
    return _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
  }
  _createClass(FormGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          row = _props.row,
          disabled = _props.disabled,
          inline = _props.inline,
          color = _props.color,
          check = _props.check,
          Tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'row', 'disabled', 'inline', 'color', 'check', 'tag']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, color ? 'has-' + color : false, row ? 'row' : false, check ? 'form-check' : 'form-group', check && disabled ? 'disabled' : false, inline ? 'form-check-inline' : false), cssModule);
      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormGroup;
}(_react2.default.Component);
FormGroup.propTypes = {
  inline: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  getRef: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  check: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  row: _propTypes2.default.bool
};
FormGroup.defaultProps = defaultProps;
exports.default = FormGroup;
module.exports = exports['default'];
});
unwrapExports(FormGroup_1);

var FormText_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  tag: 'small'
};
var FormText = function (_React$Component) {
  _inherits(FormText, _React$Component);
  function FormText() {
    _classCallCheck(this, FormText);
    return _possibleConstructorReturn(this, (FormText.__proto__ || Object.getPrototypeOf(FormText)).apply(this, arguments));
  }
  _createClass(FormText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          inline = _props.inline,
          color = _props.color,
          Tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'color', 'tag']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);
      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormText;
}(_react2.default.Component);
FormText.propTypes = {
  children: _propTypes2.default.node,
  inline: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  color: _propTypes2.default.string,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
FormText.defaultProps = defaultProps;
exports.default = FormText;
module.exports = exports['default'];
});
unwrapExports(FormText_1);

var FormFeedback_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  tag: 'div'
};
var FormFeedback = function (_React$Component) {
  _inherits(FormFeedback, _React$Component);
  function FormFeedback() {
    _classCallCheck(this, FormFeedback);
    return _possibleConstructorReturn(this, (FormFeedback.__proto__ || Object.getPrototypeOf(FormFeedback)).apply(this, arguments));
  }
  _createClass(FormFeedback, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'form-control-feedback'), cssModule);
      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormFeedback;
}(_react2.default.Component);
FormFeedback.propTypes = {
  children: _propTypes2.default.node,
  tag: _propTypes2.default.string,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
FormFeedback.defaultProps = defaultProps;
exports.default = FormFeedback;
module.exports = exports['default'];
});
unwrapExports(FormFeedback_1);

var conditional = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifThen = ifThen;
exports.ifElse = ifElse;
function ifThen(conditions, returnTrue) {
  return ifElse(conditions, returnTrue, '');
}
function ifElse(conditions, returnTrue, returnFalse) {
  return conditions ? returnTrue : returnFalse;
}
exports.default = {
  ifThen: ifThen,
  ifElse: ifElse
};
});
unwrapExports(conditional);

var buttons = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.buttonVariant = buttonVariant;
exports.buttonOutlineVariant = buttonOutlineVariant;
exports.buttonSize = buttonSize;
exports.button = button;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-shadows': true,
  '$enable-hover-media-query': false,
  '$enable-transitions': true,
  '$enable-rounded': true,
  '$font-weight-normal': 'normal',
  '$btn-font-weight': 'normal',
  '$btn-line-height': '1.25',
  '$btn-transition': 'all .2s ease-in-out',
  '$input-btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-padding-y': '.5rem',
  '$font-size-base': '1rem',
  '$btn-border-radius': '.25rem',
  '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
  '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
  '$cursor-disabled': 'not-allowed',
  '$link-color': '#0275d8',
  '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$link-hover-decoration': 'underline',
  '$btn-link-disabled-color': '#636c72',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-x-sm': '.5rem',
  '$btn-padding-y-sm': '.25rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-block-spacing-y': '.5rem',
  '$btn-primary-color': '#fff',
  '$btn-primary-bg': '#0275d8',
  '$btn-primary-border': '#0275d8',
  '$btn-secondary-color': '#292b2c',
  '$btn-secondary-bg': '#fff',
  '$btn-secondary-border': '#ccc',
  '$btn-info-color': '#fff',
  '$btn-info-bg': '#5bc0de',
  '$btn-info-border': '#5bc0de',
  '$btn-success-color': '#fff',
  '$btn-success-bg': '#5cb85c',
  '$btn-success-border': '#5cb85c',
  '$btn-warning-color': '#fff',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-warning-border': '#f0ad4e',
  '$btn-danger-color': '#fff',
  '$btn-danger-bg': '#d9534f',
  '$btn-danger-border': '#d9534f'
};
function buttonVariant() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var buttonColor = arguments[1];
  var background = arguments[2];
  var border = arguments[3];
  var btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-active-box-shadow'];
  var btnBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-box-shadow'];
  var activeBackground = (0, _color2.default)(background).darken(0.2).toString();
  var activeBorder = (0, _color2.default)(border).darken(0.12).toString();
  return '\n    color: ' + buttonColor + ';\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    ' + (0, boxShadow_1.boxShadow)(enableShadows, btnBoxShadow) + '\n  \n    ' + (0, hover_1.hover)('\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      border-color: ' + activeBorder + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      ' + (0, conditional.ifElse)('\n        box-shadow: ' + btnBoxShadow + ', 0 0 0 2px ' + (0, _color2.default)(border).alpha(0.5).toString() + ';\n      ', '\n        box-shadow: 0 0 0 2px ' + (0, _color2.default)(border).alpha(0.5).toString() + ';\n      ') + '\n    }\n  \n    /* Disabled comes first so active can properly restyle */\n    &.disabled,\n    &:disabled {\n      background-color: ' + background + ';\n      border-color: ' + border + ';\n    }\n    \n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      background-image: none;\n      border-color: ' + activeBorder + ';\n      ' + (0, boxShadow_1.boxShadow)(enableShadows, btnActiveBoxShadow) + '\n    }\n  ';
}
function buttonOutlineVariant(buttonColor) {
  var buttonColorHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
  return '\n    color: ' + buttonColor + ';\n    background-image: none;\n    background-color: transparent;\n    border-color: ' + buttonColor + ';\n  \n    ' + (0, hover_1.hover)('\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      box-shadow: 0 0 0 2px ' + (0, _color2.default)(buttonColor).alpha(0.5).toString() + ';\n    }\n  \n    &.disabled,\n    &:disabled {\n      color: ' + buttonColor + ';\n      border-color: transparent;\n    }\n    \n    &:active,\n    &.active,\n    & .open > &.dropdown-toggle {\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    }\n  ';
}
function buttonSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var btnBorderRadius = arguments[4];
  return '\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n    ' + (0, borderRadius_1.borderRadius)(enableRounded, btnBorderRadius) + '\n  ';
}
function button() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $enableTransitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-transitions'];
  var $enableRounded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$enable-rounded'];
  var $fontWeightNormal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$font-weight-normal'];
  var $btnFontWeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-font-weight'];
  var $btnLineHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$btn-line-height'];
  var $btnTransition = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$btn-transition'];
  var $inputBtnBorderWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$btn-padding-x'];
  var $btnPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$btn-padding-y'];
  var $fontSizeBase = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$font-size-base'];
  var $btnBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$btn-border-radius'];
  var $btnBoxShadow = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$btn-box-shadow'];
  var $btnFocusBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$btn-focus-box-shadow'];
  var $btnActiveBoxShadow = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$btn-active-box-shadow'];
  var $cursorDisabled = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$cursor-disabled'];
  var $linkColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$link-color'];
  var $linkHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$link-hover-decoration'];
  var $btnLinkDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$btn-link-disabled-color'];
  var $btnPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$btn-border-radius-sm'];
  var $btnBlockSpacingY = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$btn-block-spacing-y'];
  var $btnPrimaryColor = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps['$btn-primary-color'];
  var $btnPrimaryBg = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps['$btn-primary-bg'];
  var $btnPrimaryBorder = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps['$btn-primary-border'];
  var $btnSecondaryColor = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps['$btn-secondary-color'];
  var $btnSecondaryBg = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps['$btn-secondary-bg'];
  var $btnSecondaryBorder = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps['$btn-secondary-border'];
  var $btnInfoColor = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps['$btn-info-color'];
  var $btnInfoBg = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps['$btn-info-bg'];
  var $btnInfoBorder = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps['$btn-info-border'];
  var $btnSuccessColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps['$btn-success-color'];
  var $btnSuccessBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps['$btn-success-bg'];
  var $btnSuccessBorder = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps['$btn-success-border'];
  var $btnWarningColor = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps['$btn-warning-color'];
  var $btnWarningBg = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps['$btn-warning-bg'];
  var $btnWarningBorder = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps['$btn-warning-border'];
  var $btnDangerColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps['$btn-danger-color'];
  var $btnDangerBg = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps['$btn-danger-bg'];
  var $btnDangerBorder = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps['$btn-danger-border'];
  return '\n  \n    font-family: inherit;\n    \n    &.btn {\n      display: inline-block;\n      font-weight: ' + $btnFontWeight + ';\n      line-height: ' + $btnLineHeight + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: ' + $inputBtnBorderWidth + ' solid transparent;\n      ' + buttonSize($enableRounded, $btnPaddingY, $btnPaddingX, $fontSizeBase, $btnBorderRadius) + '\n      ' + (0, transition_1.transition)($enableTransitions, $btnTransition) + '\n      ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n\n      &:focus,\n      &.focus {\n        outline: 0;\n        box-shadow: ' + $btnFocusBoxShadow + ';\n      }\n\n      &.disabled,\n      &:disabled {\n        cursor: ' + $cursorDisabled + ';\n        opacity: .65;\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, 'none') + '\n      }  \n\n      &:active,\n      &.active {\n        background-image: none;\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, $btnFocusBoxShadow, $btnActiveBoxShadow) + '\n      }\n    }\n    \n    a.btn.disabled,\n    fieldset[disabled] a.btn {\n      pointer-events: none;\n    }\n   \n   \n    /* Alternate buttons */\n   \n    &.btn-primary {\n      ' + buttonVariant($enableShadows, $btnPrimaryColor, $btnPrimaryBg, $btnPrimaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-secondary {\n      ' + buttonVariant($enableShadows, $btnSecondaryColor, $btnSecondaryBg, $btnSecondaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-info {\n      ' + buttonVariant($enableShadows, $btnInfoColor, $btnInfoBg, $btnInfoBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-success {\n      ' + buttonVariant($enableShadows, $btnSuccessColor, $btnSuccessBg, $btnSuccessBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-warning {\n      ' + buttonVariant($enableShadows, $btnWarningColor, $btnWarningBg, $btnWarningBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-danger {\n      ' + buttonVariant($enableShadows, $btnDangerColor, $btnDangerBg, $btnDangerBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n   \n    &.btn-outline-primary {\n      ' + buttonOutlineVariant($btnPrimaryBg, $btnPrimaryColor) + '\n    }    \n    &.btn-outline-secondary {\n      ' + buttonOutlineVariant($btnSecondaryBorder, $btnSecondaryColor) + '\n    }    \n    &.btn-outline-info {\n      ' + buttonOutlineVariant($btnInfoBg, $btnInfoColor) + '\n    }    \n    &.btn-outline-success {\n      ' + buttonOutlineVariant($btnSuccessBg, $btnSuccessColor) + '\n    }\n    &.btn-outline-warning {\n      ' + buttonOutlineVariant($btnWarningBg, $btnWarningColor) + '\n    }\n    &.btn-outline-danger {\n      ' + buttonOutlineVariant($btnDangerBg, $btnDangerColor) + '\n    }\n   \n    /*\n     Link buttons\n    */\n   \n    &.btn-link {\n      font-weight: ' + $fontWeightNormal + ';\n      color: ' + $linkColor + ';\n      border-radius: 0;\n   \n      &,\n      &:active,\n      &.active,\n      &:disabled {\n        background-color: transparent;\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, 'none') + '\n      }\n     \n      &,\n      &:focus,\n      &:active {\n        border-color: transparent;\n      }\n     \n      ' + (0, hover_1.hover)('border-color: transparent;') + '\n     \n      ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, '\n        color: ' + $linkHoverColor + ';\n        text-decoration: ' + $linkHoverDecoration + ';\n        background-color: transparent;\n      ') + '\n     \n      &:disabled {\n        color: ' + $btnLinkDisabledColor + ';\n        ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, '\n          text-decoration: none;\n        ') + '\n      }\n    }\n  \n  \n    /*\n     Button Sizes\n    */\n   \n    &.btn-lg {\n      /* line-height: ensure even-numbered height of button next to large input */\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n   \n    &.btn-sm {\n      /* line-height: ensure proper height of button next to small input */\n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n   \n   \n    /*\n     Block button\n    */\n   \n    &.btn-block {\n      display: block;\n      width: 100%;\n    }\n   \n    /* Vertically space out multiple block buttons */\n    &.btn-block + .btn-block {\n      margin-top: ' + $btnBlockSpacingY + ';\n    }\n   \n    /* Specificity overrides */\n    input[type="submit"],\n    input[type="reset"],\n    input[type="button"] {\n      &.btn-block {\n        width: 100%;\n      }\n    }\n   \n    /* Reboot Scss */\n    touch-action: manipulation;\n    line-height: inherit;\n    &:focus{\n      outline: 1px dotted;\n      outline: 5px auto -webkit-focus-ring-color;\n    }\n    \n    &[type="button"],\n    &[type="reset"],\n    &[type="submit"] {\n      -webkit-appearance: button;\n    }\n    \n    &::-moz-focus-inner,\n    &[type="button"]::-moz-focus-inner,\n    &[type="reset"]::-moz-focus-inner,\n    &[type="submit"]::-moz-focus-inner {\n      padding: 0;\n      border-style: none;\n    }\n\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  buttonVariant: buttonVariant,
  buttonOutlineVariant: buttonOutlineVariant,
  buttonSize: buttonSize,
  button: button
};
});
unwrapExports(buttons);

var Label_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]);
var columnProps = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.shape({
  size: stringOrNumberProp,
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  children: _propTypes2.default.node,
  hidden: _propTypes2.default.bool,
  check: _propTypes2.default.bool,
  inline: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  for: _propTypes2.default.string,
  tag: _propTypes2.default.string,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  theme: _propTypes2.default.object
};
var defaultProps = {
  tag: 'label',
  theme: _theme2.default
};
var LabelUnstyled = function LabelUnstyled(props) {
  var _omit = (0, _lodash2.default)(props, ['theme']),
      className = _omit.className,
      cssModule = _omit.cssModule,
      hidden = _omit.hidden,
      Tag = _omit.tag,
      check = _omit.check,
      inline = _omit.inline,
      disabled = _omit.disabled,
      size = _omit.size,
      htmlFor = _omit.for,
      attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'hidden', 'tag', 'check', 'inline', 'disabled', 'size', 'for']);
  var colClasses = [];
  colSizes.forEach(function (colSize) {
    var columnProp = props[colSize];
    delete attributes[colSize];
    if (columnProp && columnProp.size) {
      var _cn;
      colClasses.push((0, _mapToCssModules2.default)((0, _classnames2.default)((_cn = {}, _defineProperty(_cn, 'col-' + colSize + '-' + columnProp.size, columnProp.size), _defineProperty(_cn, 'push-' + colSize + '-' + columnProp.push, columnProp.push), _defineProperty(_cn, 'pull-' + colSize + '-' + columnProp.pull, columnProp.pull), _defineProperty(_cn, 'offset-' + colSize + '-' + columnProp.offset, columnProp.offset), _cn))), cssModule);
    } else if (columnProp) {
      colClasses.push('col-' + colSize + '-' + columnProp);
    }
  });
  var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, hidden ? 'sr-only' : false, check ? 'form-check-' + (inline ? 'inline' : 'label') : false, check && inline && disabled ? 'disabled' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
  return _react2.default.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};
var Label = (0, _styledComponents2.default)(LabelUnstyled).withConfig({
  displayName: 'Label'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    /* Allow labels to use margin for spacing. */\n    display: inline-block;\n    margin-bottom: .5rem;\n\n    ' + (0, buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
exports.default = Label;
module.exports = exports['default'];
});
unwrapExports(Label_1);

var Input_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  theme: _theme2.default,
  type: 'text',
  tag: 'p'
};
var InputUnstyled = function (_React$Component) {
  _inherits(InputUnstyled, _React$Component);
  function InputUnstyled() {
    _classCallCheck(this, InputUnstyled);
    return _possibleConstructorReturn(this, (InputUnstyled.__proto__ || Object.getPrototypeOf(InputUnstyled)).apply(this, arguments));
  }
  _createClass(InputUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          type = _omit.type,
          size = _omit.size,
          state = _omit.state,
          tag = _omit.tag,
          addon = _omit.addon,
          staticInput = _omit.static,
          getRef = _omit.getRef,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'type', 'size', 'state', 'tag', 'addon', 'static', 'getRef']);
      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = selectInput || textareaInput ? type : 'input';
      var formControlClass = 'form-control';
      if (staticInput) {
        formControlClass = formControlClass + '-static';
        Tag = tag;
      } else if (fileInput) {
        formControlClass = formControlClass + '-file';
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, state ? 'form-control-' + state : false, size ? 'form-control-' + size : false, formControlClass), cssModule);
      if (Tag === 'input') {
        attributes.type = type;
      }
      return _react2.default.createElement(Tag, _extends({}, attributes, { ref: getRef, className: classes }));
    }
  }]);
  return InputUnstyled;
}(_react2.default.Component);
InputUnstyled.propTypes = {
  children: _propTypes2.default.node,
  type: _propTypes2.default.string,
  size: _propTypes2.default.string,
  state: _propTypes2.default.string,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  getRef: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  static: _propTypes2.default.bool,
  addon: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  indeterminate: _propTypes2.default.bool
};
var Input = (0, _styledComponents2.default)(InputUnstyled).withConfig({
  displayName: 'Input'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    \n    &[type="radio"],\n    &[type="checkbox"] {\n      box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */\n      padding: 0; /* 2. Remove the padding in IE 10- */\n      /*\n       Apply a disabled cursor for radios and checkboxes.\n       Note: Neither radios nor checkboxes can be readonly.\n      */\n   \n      &:disabled {\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n      }\n    }\n    \n    /* Normalize includes font: inherit;, so font-family. font-size, etc are */\n    /* properly inherited. However, line-height is not inherited there. */\n    line-height: inherit;\n   \n    &.disabled {\n      cursor: ' + props.theme['$cursor-disabled'] + ';\n    }\n   \n    &[type="date"],\n    &[type="time"],\n    &[type="datetime-local"],\n    &[type="month"] {\n    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari\n       bug where setting a custom line-height prevents text from being vertically\n       centered within the input.\n       Bug report: https://github.com/twbs/bootstrap/issues/11266\n     */\n      -webkit-appearance: listbox;\n    }\n      \n    /* Correct the cursor style of increment and decrement buttons in Chrome. */\n    &[type="number"]::-webkit-inner-spin-button,\n    &[type="number"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n    \n    &[type="search"] {\n      /* This overrides the extra rounded corners on search inputs in iOS so that our\n      .form-control class can properly style them. Note that this cannot simply\n       be added to .form-control as it is not specific enough. For details, see\n       https://github.com/twbs/bootstrap/issues/11586.\n       */\n      outline-offset: -2px; /* 2. Correct the outline style in Safari. */\n      -webkit-appearance: none;\n    }\n    \n    /* Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */\n    &[type="search"]::-webkit-search-cancel-button,\n    &[type="search"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n    \n    ' + (0, buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Input.defaultProps = defaultProps;
exports.default = Input;
module.exports = exports['default'];
});
unwrapExports(Input_1);

var FormCustom_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _Label2 = _interopRequireDefault(Label_1);
var _Input2 = _interopRequireDefault(Input_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var FormCustom = function (_React$Component) {
  _inherits(FormCustom, _React$Component);
  function FormCustom() {
    _classCallCheck(this, FormCustom);
    return _possibleConstructorReturn(this, (FormCustom.__proto__ || Object.getPrototypeOf(FormCustom)).apply(this, arguments));
  }
  _createClass(FormCustom, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          radio = _props.radio,
          children = _props.children,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'radio', 'children']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'custom-control', radio ? 'custom-radio' : 'custom-checkbox'), cssModule);
      var CustomInput = radio ? _react2.default.createElement(_Input2.default, { type: 'radio', id: radio.id, name: radio.name, className: 'custom-control-input' }) : _react2.default.createElement(_Input2.default, { type: 'checkbox', className: 'custom-control-input' });
      return _react2.default.createElement(
        _Label2.default,
        _extends({ className: classes }, attributes),
        CustomInput,
        _react2.default.createElement('span', { className: 'custom-control-indicator' }),
        _react2.default.createElement(
          'span',
          { className: 'custom-control-description' },
          children
        )
      );
    }
  }]);
  return FormCustom;
}(_react2.default.Component);
FormCustom.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  radio: _propTypes2.default.shape({
    id: _propTypes2.default.string,
    name: _propTypes2.default.string
  })
};
exports.default = FormCustom;
module.exports = exports['default'];
});
unwrapExports(FormCustom_1);

var Form = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Form_1).default;
  }
});
Object.defineProperty(exports, 'FormGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(FormGroup_1).default;
  }
});
Object.defineProperty(exports, 'FormText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(FormText_1).default;
  }
});
Object.defineProperty(exports, 'FormFeedback', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(FormFeedback_1).default;
  }
});
Object.defineProperty(exports, 'FormCustom', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(FormCustom_1).default;
  }
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
var Form$1 = unwrapExports(Form);

'use strict';
var NODE_ENV = "development";
var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1;
    throw error;
  }
};
var invariant_1 = invariant;

var createFieldProps_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var processProps = function processProps(type, props, _value) {
  var value = props.value;
  if (type === 'checkbox') {
    return _extends({}, props, {
      checked: !!value
    });
  }
  if (type === 'radio') {
    return _extends({}, props, {
      checked: value === _value,
      value: _value
    });
  }
  if (type === 'select-multiple') {
    return _extends({}, props, {
      value: value || []
    });
  }
  if (type === 'file') {
    return _extends({}, props, {
      value: value || undefined
    });
  }
  return props;
};
var createFieldProps = function createFieldProps(_ref2, name, _ref) {
  var getIn = _ref2.getIn,
      toJS = _ref2.toJS;
  var asyncError = _ref.asyncError,
      asyncValidating = _ref.asyncValidating,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onDrop = _ref.onDrop,
      onDragStart = _ref.onDragStart,
      dirty = _ref.dirty,
      dispatch = _ref.dispatch,
      onFocus = _ref.onFocus,
      form = _ref.form,
      format = _ref.format,
      initial = _ref.initial,
      parse = _ref.parse,
      pristine = _ref.pristine,
      props = _ref.props,
      state = _ref.state,
      submitError = _ref.submitError,
      submitFailed = _ref.submitFailed,
      submitting = _ref.submitting,
      syncError = _ref.syncError,
      syncWarning = _ref.syncWarning,
      validate = _ref.validate,
      value = _ref.value,
      _value = _ref._value,
      warn = _ref.warn,
      custom = _objectWithoutProperties(_ref, ['asyncError', 'asyncValidating', 'onBlur', 'onChange', 'onDrop', 'onDragStart', 'dirty', 'dispatch', 'onFocus', 'form', 'format', 'initial', 'parse', 'pristine', 'props', 'state', 'submitError', 'submitFailed', 'submitting', 'syncError', 'syncWarning', 'validate', 'value', '_value', 'warn']);
  var error = syncError || asyncError || submitError;
  var warning = syncWarning;
  var formatFieldValue = function formatFieldValue(value, format) {
    if (format === null) {
      return value;
    }
    var defaultFormattedValue = value == null ? '' : value;
    return format ? format(value, name) : defaultFormattedValue;
  };
  var formattedFieldValue = formatFieldValue(value, format);
  return {
    input: processProps(custom.type, {
      name: name,
      onBlur: onBlur,
      onChange: onChange,
      onDragStart: onDragStart,
      onDrop: onDrop,
      onFocus: onFocus,
      value: formattedFieldValue
    }, _value),
    meta: _extends({}, toJS(state), {
      active: !!(state && getIn(state, 'active')),
      asyncValidating: asyncValidating,
      autofilled: !!(state && getIn(state, 'autofilled')),
      dirty: dirty,
      dispatch: dispatch,
      error: error,
      form: form,
      initial: initial,
      warning: warning,
      invalid: !!error,
      pristine: pristine,
      submitting: !!submitting,
      submitFailed: !!submitFailed,
      touched: !!(state && getIn(state, 'touched')),
      valid: !error,
      visited: !!(state && getIn(state, 'visited'))
    }),
    custom: _extends({}, custom, props)
  };
};
exports.default = createFieldProps;
});
unwrapExports(createFieldProps_1);

var isEvent_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
var isEvent = function isEvent(candidate) {
  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
};
exports.default = isEvent;
});
unwrapExports(isEvent_1);

var getValue_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isEvent2 = _interopRequireDefault(isEvent_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var getSelectedValues = function getSelectedValues(options) {
  var result = [];
  if (options) {
    for (var index = 0; index < options.length; index++) {
      var option = options[index];
      if (option.selected) {
        result.push(option.value);
      }
    }
  }
  return result;
};
var getValue = function getValue(event, isReactNative) {
  if ((0, _isEvent2.default)(event)) {
    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
      return event.nativeEvent.text;
    }
    if (isReactNative && event.nativeEvent !== undefined) {
      return event.nativeEvent.text;
    }
    var detypedEvent = event;
    var _detypedEvent$target = detypedEvent.target,
        type = _detypedEvent$target.type,
        value = _detypedEvent$target.value,
        checked = _detypedEvent$target.checked,
        files = _detypedEvent$target.files,
        dataTransfer = detypedEvent.dataTransfer;
    if (type === 'checkbox') {
      return checked || '';
    }
    if (type === 'file') {
      return files || dataTransfer && dataTransfer.files;
    }
    if (type === 'select-multiple') {
      return getSelectedValues(event.target.options);
    }
    return value;
  }
  return event;
};
exports.default = getValue;
});
unwrapExports(getValue_1);

var isReactNative_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var isReactNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';
exports.default = isReactNative;
});
unwrapExports(isReactNative_1);

var onChangeValue_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _getValue2 = _interopRequireDefault(getValue_1);
var _isReactNative2 = _interopRequireDefault(isReactNative_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var onChangeValue = function onChangeValue(event, _ref) {
  var name = _ref.name,
      parse = _ref.parse,
      normalize = _ref.normalize;
  var value = (0, _getValue2.default)(event, _isReactNative2.default);
  if (parse) {
    value = parse(value, name);
  }
  if (normalize) {
    value = normalize(name, value);
  }
  return value;
};
exports.default = onChangeValue;
});
unwrapExports(onChangeValue_1);

var eventConsts = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataKey = exports.dataKey = 'text';
});
unwrapExports(eventConsts);

var splice_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
var splice = function splice(array, index, removeNum, value) {
  array = array || [];
  if (index < array.length) {
    if (value === undefined && !removeNum) {
      var _copy2 = [].concat(_toConsumableArray(array));
      _copy2.splice(index, 0, true);
      _copy2[index] = undefined;
      return _copy2;
    }
    if (value != null) {
      var _copy3 = [].concat(_toConsumableArray(array));
      _copy3.splice(index, removeNum, value);
      return _copy3;
    }
    var _copy = [].concat(_toConsumableArray(array));
    _copy.splice(index, removeNum);
    return _copy;
  }
  if (removeNum) {
    return array;
  }
  var copy = [].concat(_toConsumableArray(array));
  copy[index] = value;
  return copy;
};
exports.default = splice;
});
unwrapExports(splice_1);

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;

function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray;

var isArray$1 = Array.isArray;
var isArray_1 = isArray$1;

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;

var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;
var root$1 = _freeGlobal || freeSelf$1 || Function('return this')();
var _root = root$1;

var Symbol$2 = _root.Symbol;
var _Symbol = Symbol$2;

var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
var nativeObjectToString = objectProto$1.toString;
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag;

var objectProto$2 = Object.prototype;
var nativeObjectToString$1 = objectProto$2.toString;
function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}
var _objectToString = objectToString$1;

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}
var _baseGetTag = baseGetTag;

function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}
var isObjectLike_1 = isObjectLike$1;

var symbolTag$1 = '[object Symbol]';
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
}
var isSymbol_1 = isSymbol$1;

function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
var isObject_1 = isObject$1;

var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';
function isFunction$1(value) {
  if (!isObject_1(value)) {
    return false;
  }
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$1;

var coreJsData$1 = _root['__core-js_shared__'];
var _coreJsData = coreJsData$1;

var maskSrcKey$1 = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
function isMasked$1(func) {
  return !!maskSrcKey$1 && (maskSrcKey$1 in func);
}
var _isMasked = isMasked$1;

var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}
var _toSource = toSource$1;

var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype;
var objectProto$3 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
var reIsNative$1 = RegExp('^' +
  funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar$1, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
function baseIsNative$1(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(_toSource(value));
}
var _baseIsNative = baseIsNative$1;

function getValue$2(object, key) {
  return object == null ? undefined : object[key];
}
var _getValue$1 = getValue$2;

function getNative$1(object, key) {
  var value = _getValue$1(object, key);
  return _baseIsNative(value) ? value : undefined;
}
var _getNative = getNative$1;

var nativeCreate$1 = _getNative(Object, 'create');
var _nativeCreate = nativeCreate$1;

function hashClear$1() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}
var _hashGet = hashGet$1;

var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
}
var _hashHas = hashHas$1;

var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$2 : value;
  return this;
}
var _hashSet = hashSet$1;

function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = _hashClear;
Hash$1.prototype['delete'] = _hashDelete;
Hash$1.prototype.get = _hashGet;
Hash$1.prototype.has = _hashHas;
Hash$1.prototype.set = _hashSet;
var _Hash = Hash$1;

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;

function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}
var eq_1 = eq$1;

function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$1;

var arrayProto$1 = Array.prototype;
var splice$2 = arrayProto$1.splice;
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$2.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;

function listCacheGet$1(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
var _listCacheGet = listCacheGet$1;

function listCacheHas$1(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;

function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;

function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$1.prototype.clear = _listCacheClear;
ListCache$1.prototype['delete'] = _listCacheDelete;
ListCache$1.prototype.get = _listCacheGet;
ListCache$1.prototype.has = _listCacheHas;
ListCache$1.prototype.set = _listCacheSet;
var _ListCache = ListCache$1;

var Map$1 = _getNative(_root, 'Map');
var _Map = Map$1;

function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}
var _mapCacheClear = mapCacheClear$1;

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}
var _isKeyable = isKeyable$1;

function getMapData$1(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}
var _getMapData = getMapData$1;

function mapCacheDelete$1(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;

function mapCacheGet$1(key) {
  return _getMapData(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;

function mapCacheHas$1(key) {
  return _getMapData(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;

function mapCacheSet$1(key, value) {
  var data = _getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;

function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = _mapCacheClear;
MapCache$1.prototype['delete'] = _mapCacheDelete;
MapCache$1.prototype.get = _mapCacheGet;
MapCache$1.prototype.has = _mapCacheHas;
MapCache$1.prototype.set = _mapCacheSet;
var _MapCache = MapCache$1;

var FUNC_ERROR_TEXT = 'Expected a function';
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}
memoize.Cache = _MapCache;
var memoize_1 = memoize;

var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped;

var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});
var _stringToPath = stringToPath;

var INFINITY$1 = 1 / 0;
function toKey$1(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}
var _toKey = toKey$1;

var INFINITY$2 = 1 / 0;
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;
function baseToString(value) {
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
}
var _baseToString = baseToString;

function toString(value) {
  return value == null ? '' : _baseToString(value);
}
var toString_1 = toString;

function toPath(value) {
  if (isArray_1(value)) {
    return _arrayMap(value, _toKey);
  }
  return isSymbol_1(value) ? [value] : _copyArray(_stringToPath(toString_1(value)));
}
var toPath_1 = toPath;

var getIn_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _toPath3 = _interopRequireDefault(toPath_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var getIn = function getIn(state, field) {
  if (!state) {
    return state;
  }
  var path = (0, _toPath3.default)(field);
  var length = path.length;
  if (!length) {
    return undefined;
  }
  var result = state;
  for (var i = 0; i < length && result; ++i) {
    result = result[path[i]];
  }
  return result;
};
exports.default = getIn;
});
unwrapExports(getIn_1);

var setIn_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _toPath3 = _interopRequireDefault(toPath_1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var setInWithPath = function setInWithPath(state, value, path, pathIndex) {
  if (pathIndex >= path.length) {
    return value;
  }
  var first = path[pathIndex];
  var firstState = state && (Array.isArray(state) ? state[Number(first)] : state[first]);
  var next = setInWithPath(firstState, value, path, pathIndex + 1);
  if (!state) {
    if (isNaN(first)) {
      return _defineProperty({}, first, next);
    }
    var initialized = [];
    initialized[parseInt(first, 10)] = next;
    return initialized;
  }
  if (Array.isArray(state)) {
    var copy = [].concat(state);
    copy[parseInt(first, 10)] = next;
    return copy;
  }
  return _extends({}, state, _defineProperty({}, first, next));
};
var setIn = function setIn(state, field, value) {
  return setInWithPath(state, value, (0, _toPath3.default)(field), 0);
};
exports.default = setIn;
});
unwrapExports(setIn_1);

function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}
var _stackClear = stackClear;

function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete;

function stackGet(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet;

function stackHas(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas;

var LARGE_ARRAY_SIZE$1 = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet;

function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
var _Stack = Stack;

var HASH_UNDEFINED$3 = '__lodash_hash_undefined__';
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED$3);
  return this;
}
var _setCacheAdd = setCacheAdd$1;

function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;

function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = _setCacheAdd;
SetCache$1.prototype.has = _setCacheHas;
var _SetCache = SetCache$1;

function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome;

function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;

var COMPARE_PARTIAL_FLAG$1 = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
      arrLength = array.length,
      othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];
    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
var _equalArrays = equalArrays;

var Uint8Array = _root.Uint8Array;
var _Uint8Array = Uint8Array;

function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray;

function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray;

var COMPARE_PARTIAL_FLAG$2 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag$2 = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq_1(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == (other + '');
    case mapTag:
      var convert = _mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = _setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag$2:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag;

function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$1;

function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter;

function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;

var objectProto$8 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;

var argsTag$2 = '[object Arguments]';
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments;

var objectProto$10 = Object.prototype;
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;
var propertyIsEnumerable$2 = objectProto$10.propertyIsEnumerable;
var isArguments$1 = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$8.call(value, 'callee') &&
    !propertyIsEnumerable$2.call(value, 'callee');
};
var isArguments_1 = isArguments$1;

function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? _root.Buffer : undefined;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
var isBuffer = nativeIsBuffer || stubFalse_1;
module.exports = isBuffer;
});

var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;
function isIndex$1(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length &&
    (typeof value == 'number' || reIsUint$1.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$1;

var MAX_SAFE_INTEGER$2 = 9007199254740991;
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$2;
}
var isLength_1 = isLength$1;

var argsTag$3 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$2 = '[object Function]';
var mapTag$1 = '[object Map]';
var numberTag$1 = '[object Number]';
var objectTag$1 = '[object Object]';
var regexpTag$1 = '[object RegExp]';
var setTag$1 = '[object Set]';
var stringTag$1 = '[object String]';
var weakMapTag = '[object WeakMap]';
var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$1 = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$3] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$2] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray;

function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && _freeGlobal.process;
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());
module.exports = nodeUtil;
});

var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;

var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) &&
        !(skipIndexes && (
           key == 'length' ||
           (isBuff && (key == 'offset' || key == 'parent')) ||
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;

var objectProto$12 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$12;
  return value === proto;
}
var _isPrototype = isPrototype$1;

function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;

var nativeKeys = _overArg(Object.keys, Object);
var _nativeKeys = nativeKeys;

var objectProto$11 = Object.prototype;
var hasOwnProperty$9 = objectProto$11.hasOwnProperty;
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys;

function isArrayLike$1(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}
var isArrayLike_1 = isArrayLike$1;

function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}
var keys_1 = keys;

function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}
var _getAllKeys = getAllKeys;

var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$6.call(other, key))) {
      return false;
    }
  }
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];
    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
var _equalObjects = equalObjects;

var DataView = _getNative(_root, 'DataView');
var _DataView = DataView;

var Promise$1 = _getNative(_root, 'Promise');
var _Promise = Promise$1;

var Set = _getNative(_root, 'Set');
var _Set = Set;

var WeakMap$1 = _getNative(_root, 'WeakMap');
var _WeakMap = WeakMap$1;

var mapTag$2 = '[object Map]';
var objectTag$2 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';
var dataViewTag$2 = '[object DataView]';
var dataViewCtorString = _toSource(_DataView);
var mapCtorString = _toSource(_Map);
var promiseCtorString = _toSource(_Promise);
var setCtorString = _toSource(_Set);
var weakMapCtorString = _toSource(_WeakMap);
var getTag = _baseGetTag;
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag;

var COMPARE_PARTIAL_FLAG = 1;
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var objectTag = '[object Object]';
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag : _getTag(object),
      othTag = othIsArr ? arrayTag : _getTag(other);
  objTag = objTag == argsTag$1 ? objectTag : objTag;
  othTag = othTag == argsTag$1 ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$5.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$5.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep;

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var _baseIsEqual = baseIsEqual;

function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? _baseIsEqual(value, other, undefined, customizer) : !!result;
}
var isEqualWith_1 = isEqualWith;

var deepEqual_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isEqualWith3 = _interopRequireDefault(isEqualWith_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var customizer = function customizer(obj, other) {
  if (obj === other) return true;
  if ((obj == null || obj === '' || obj === false) && (other == null || other === '' || other === false)) {
    return !(obj === undefined && other === false || obj === false && other === undefined);
  }
  if (obj && other && obj._error !== other._error) return false;
  if (obj && other && obj._warning !== other._warning) return false;
};
var deepEqual = function deepEqual(a, b) {
  return (0, _isEqualWith3.default)(a, b, customizer);
};
exports.default = deepEqual;
});
unwrapExports(deepEqual_1);

var deleteIn_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _toPath3 = _interopRequireDefault(toPath_1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
function deleteInWithPath(state, first) {
  if (state === undefined || state === null || first === undefined || first === null) {
    return state;
  }
  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }
  if (rest.length) {
    if (Array.isArray(state)) {
      if (isNaN(first)) {
        throw new Error('Must access array elements with a number, not "' + String(first) + '".');
      }
      var firstIndex = Number(first);
      if (firstIndex < state.length) {
        var result = deleteInWithPath.apply(undefined, [state && state[firstIndex]].concat(_toConsumableArray(rest)));
        if (result !== state[firstIndex]) {
          var copy = [].concat(_toConsumableArray(state));
          copy[firstIndex] = result;
          return copy;
        }
      }
      return state;
    }
    if (first in state) {
      var _result = deleteInWithPath.apply(undefined, [state && state[first]].concat(_toConsumableArray(rest)));
      return state[first] === _result ? state : _extends({}, state, _defineProperty({}, first, _result));
    }
    return state;
  }
  if (Array.isArray(state)) {
    if (isNaN(first)) {
      throw new Error('Cannot delete non-numerical index from an array. Given: "' + String(first));
    }
    var _firstIndex = Number(first);
    if (_firstIndex < state.length) {
      var _copy = [].concat(_toConsumableArray(state));
      _copy.splice(_firstIndex, 1);
      return _copy;
    }
    return state;
  }
  if (first in state) {
    var _copy2 = _extends({}, state);
    delete _copy2[first];
    return _copy2;
  }
  return state;
}
var deleteIn = function deleteIn(state, field) {
  return deleteInWithPath.apply(undefined, [state].concat(_toConsumableArray((0, _toPath3.default)(field))));
};
exports.default = deleteIn;
});
unwrapExports(deleteIn_1);

var keys_1$2 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
function keys(value) {
  if (!value) {
    return [];
  }
  if (Array.isArray(value)) {
    return value.map(function (i) {
      return i.name;
    });
  }
  return Object.keys(value);
}
exports.default = keys;
});
unwrapExports(keys_1$2);

var plain = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _splice2 = _interopRequireDefault(splice_1);
var _getIn2 = _interopRequireDefault(getIn_1);
var _setIn2 = _interopRequireDefault(setIn_1);
var _deepEqual2 = _interopRequireDefault(deepEqual_1);
var _deleteIn2 = _interopRequireDefault(deleteIn_1);
var _keys2 = _interopRequireDefault(keys_1$2);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var structure = {
  allowsArrayErrors: true,
  empty: {},
  emptyList: [],
  getIn: _getIn2.default,
  setIn: _setIn2.default,
  deepEqual: _deepEqual2.default,
  deleteIn: _deleteIn2.default,
  forEach: function forEach(items, callback) {
    return items.forEach(callback);
  },
  fromJS: function fromJS(value) {
    return value;
  },
  keys: _keys2.default,
  size: function size(array) {
    return array ? array.length : 0;
  },
  some: function some(items, callback) {
    return items.some(callback);
  },
  splice: _splice2.default,
  toJS: function toJS(value) {
    return value;
  }
};
exports.default = structure;
});
unwrapExports(plain);

var ConnectedField = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _createFieldProps3 = _interopRequireDefault(createFieldProps_1);
var _onChangeValue2 = _interopRequireDefault(onChangeValue_1);
var _plain2 = _interopRequireDefault(plain);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propsToNotUpdateFor = ['_reduxForm'];
var isObject = function isObject(entity) {
  return entity && (typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) === 'object';
};
var isFunction = function isFunction(entity) {
  return entity && typeof entity === 'function';
};
var eventPreventDefault = function eventPreventDefault(event) {
  if (isObject(event) && isFunction(event.preventDefault)) {
    event.preventDefault();
  }
};
var eventDataTransferGetData = function eventDataTransferGetData(event, key) {
  if (isObject(event) && isObject(event.dataTransfer) && isFunction(event.dataTransfer.getData)) {
    return event.dataTransfer.getData(key);
  }
};
var eventDataTransferSetData = function eventDataTransferSetData(event, key, value) {
  if (isObject(event) && isObject(event.dataTransfer) && isFunction(event.dataTransfer.setData)) {
    event.dataTransfer.setData(key, value);
  }
};
var createConnectedField = function createConnectedField(structure) {
  var deepEqual = structure.deepEqual,
      getIn = structure.getIn;
  var getSyncError = function getSyncError(syncErrors, name) {
    var error = _plain2.default.getIn(syncErrors, name);
    return error && error._error ? error._error : error;
  };
  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name);
    return warning && warning._warning ? warning._warning : warning;
  };
  var ConnectedField = function (_Component) {
    _inherits(ConnectedField, _Component);
    function ConnectedField() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck(this, ConnectedField);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ConnectedField.__proto__ || Object.getPrototypeOf(ConnectedField)).call.apply(_ref, [this].concat(args))), _this), _this.saveRef = function (ref) {
        return _this.ref = ref;
      }, _this.isPristine = function () {
        return _this.props.pristine;
      }, _this.getValue = function () {
        return _this.props.value;
      }, _this.handleChange = function (event) {
        var _this$props = _this.props,
            name = _this$props.name,
            dispatch = _this$props.dispatch,
            parse = _this$props.parse,
            normalize = _this$props.normalize,
            onChange = _this$props.onChange,
            _reduxForm = _this$props._reduxForm,
            previousValue = _this$props.value;
        var newValue = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });
        var defaultPrevented = false;
        if (onChange) {
          onChange(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }
        if (!defaultPrevented) {
          dispatch(_reduxForm.change(name, newValue));
        }
      }, _this.handleFocus = function (event) {
        var _this$props2 = _this.props,
            name = _this$props2.name,
            dispatch = _this$props2.dispatch,
            onFocus = _this$props2.onFocus,
            _reduxForm = _this$props2._reduxForm;
        var defaultPrevented = false;
        if (onFocus) {
          onFocus(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }));
        }
        if (!defaultPrevented) {
          dispatch(_reduxForm.focus(name));
        }
      }, _this.handleBlur = function (event) {
        var _this$props3 = _this.props,
            name = _this$props3.name,
            dispatch = _this$props3.dispatch,
            parse = _this$props3.parse,
            normalize = _this$props3.normalize,
            onBlur = _this$props3.onBlur,
            _reduxForm = _this$props3._reduxForm,
            _value = _this$props3._value,
            previousValue = _this$props3.value;
        var newValue = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });
        if (newValue === _value && _value !== undefined) {
          newValue = previousValue;
        }
        var defaultPrevented = false;
        if (onBlur) {
          onBlur(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }
        if (!defaultPrevented) {
          dispatch(_reduxForm.blur(name, newValue));
          if (_reduxForm.asyncValidate) {
            _reduxForm.asyncValidate(name, newValue);
          }
        }
      }, _this.handleDragStart = function (event) {
        var _this$props4 = _this.props,
            onDragStart = _this$props4.onDragStart,
            value = _this$props4.value;
        eventDataTransferSetData(event, eventConsts.dataKey, value == null ? '' : value);
        if (onDragStart) {
          onDragStart(event);
        }
      }, _this.handleDrop = function (event) {
        var _this$props5 = _this.props,
            name = _this$props5.name,
            dispatch = _this$props5.dispatch,
            onDrop = _this$props5.onDrop,
            _reduxForm = _this$props5._reduxForm,
            previousValue = _this$props5.value;
        var newValue = eventDataTransferGetData(event, eventConsts.dataKey);
        var defaultPrevented = false;
        if (onDrop) {
          onDrop(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }
        if (!defaultPrevented) {
          dispatch(_reduxForm.change(name, newValue));
          eventPreventDefault(event);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(ConnectedField, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this2 = this;
        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.ref;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            component = _props.component,
            withRef = _props.withRef,
            name = _props.name,
            _reduxForm = _props._reduxForm,
            normalize = _props.normalize,
            onBlur = _props.onBlur,
            onChange = _props.onChange,
            onFocus = _props.onFocus,
            onDragStart = _props.onDragStart,
            onDrop = _props.onDrop,
            rest = _objectWithoutProperties(_props, ['component', 'withRef', 'name', '_reduxForm', 'normalize', 'onBlur', 'onChange', 'onFocus', 'onDragStart', 'onDrop']);
        var _createFieldProps = (0, _createFieldProps3.default)(structure, name, _extends({}, rest, {
          form: _reduxForm.form,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onDrop: this.handleDrop,
          onDragStart: this.handleDragStart,
          onFocus: this.handleFocus
        })),
            custom = _createFieldProps.custom,
            props = _objectWithoutProperties(_createFieldProps, ['custom']);
        if (withRef) {
          custom.ref = this.saveRef;
        }
        if (typeof component === 'string') {
          var input = props.input;
          return (0, _react.createElement)(component, _extends({}, input, custom));
        } else {
          return (0, _react.createElement)(component, _extends({}, props, custom));
        }
      }
    }]);
    return ConnectedField;
  }(_react.Component);
  ConnectedField.propTypes = {
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
    props: _propTypes2.default.object
  };
  var connector = (0, reactRedux.connect)(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;
    var formState = getFormState(state);
    var initialState = getIn(formState, 'initial.' + name);
    var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
    var value = getIn(formState, 'values.' + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, 'asyncErrors.' + name),
      asyncValidating: getIn(formState, 'asyncValidating') === name,
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, 'fields.' + name),
      submitError: getIn(formState, 'submitErrors.' + name),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      initial: initial,
      value: value,
      _value: ownProps.value
    };
  }, undefined, undefined, { withRef: true });
  return connector(ConnectedField);
};
exports.default = createConnectedField;
});
unwrapExports(ConnectedField);

var shallowCompare_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isEqualWith3 = _interopRequireDefault(isEqualWith_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var customizer = function customizer(objectValue, otherValue, indexOrkey, object, other, stack) {
  if (stack) {
    return objectValue === otherValue;
  }
};
var shallowCompare = function shallowCompare(instance, nextProps, nextState) {
  return !(0, _isEqualWith3.default)(instance.props, nextProps, customizer) || !(0, _isEqualWith3.default)(instance.state, nextState, customizer);
};
exports.default = shallowCompare;
});
unwrapExports(shallowCompare_1);

var prefixName = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatName = function formatName(_ref, name) {
  var sectionPrefix = _ref._reduxForm.sectionPrefix;
  return sectionPrefix ? sectionPrefix + '.' + name : name;
};
exports.default = formatName;
});
unwrapExports(prefixName);

var createField_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _invariant2 = _interopRequireDefault(invariant_1);
var _ConnectedField2 = _interopRequireDefault(ConnectedField);
var _shallowCompare2 = _interopRequireDefault(shallowCompare_1);
var _prefixName2 = _interopRequireDefault(prefixName);
var _plain2 = _interopRequireDefault(plain);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var createField = function createField(structure) {
  var ConnectedField$$1 = (0, _ConnectedField2.default)(structure);
  var setIn = structure.setIn;
  var Field = function (_Component) {
    _inherits(Field, _Component);
    function Field(props, context) {
      _classCallCheck(this, Field);
      var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props, context));
      _this.saveRef = function (ref) {
        return _this.ref = ref;
      };
      _this.normalize = function (name, value) {
        var normalize = _this.props.normalize;
        if (!normalize) {
          return value;
        }
        var previousValues = _this.context._reduxForm.getValues();
        var previousValue = _this.value;
        var nextValues = setIn(previousValues, name, value);
        return normalize(value, previousValue, nextValues, previousValues);
      };
      if (!context._reduxForm) {
        throw new Error('Field must be inside a component decorated with reduxForm()');
      }
      return _this;
    }
    _createClass(Field, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return (0, _shallowCompare2.default)(this, nextProps);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;
        this.context._reduxForm.register(this.name, 'Field', function () {
          return _this2.props.validate;
        }, function () {
          return _this2.props.warn;
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name ||
        !_plain2.default.deepEqual(this.props.validate, nextProps.validate) || !_plain2.default.deepEqual(this.props.warn, nextProps.warn)) {
          this.context._reduxForm.unregister(this.name);
          this.context._reduxForm.register((0, _prefixName2.default)(this.context, nextProps.name), 'Field', function () {
            return nextProps.validate;
          }, function () {
            return nextProps.warn;
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.context._reduxForm.unregister(this.name);
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to Field');
        return this.ref ? this.ref.getWrappedInstance().getRenderedComponent() : undefined;
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _react.createElement)(ConnectedField$$1, _extends({}, this.props, {
          name: this.name,
          normalize: this.normalize,
          _reduxForm: this.context._reduxForm,
          ref: this.saveRef
        }));
      }
    }, {
      key: 'name',
      get: function get() {
        return (0, _prefixName2.default)(this.context, this.props.name);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return !this.pristine;
      }
    }, {
      key: 'pristine',
      get: function get() {
        return !!(this.ref && this.ref.getWrappedInstance().isPristine());
      }
    }, {
      key: 'value',
      get: function get() {
        return this.ref && this.ref.getWrappedInstance().getValue();
      }
    }]);
    return Field;
  }(_react.Component);
  Field.propTypes = {
    name: _propTypes2.default.string.isRequired,
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
    format: _propTypes2.default.func,
    normalize: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    parse: _propTypes2.default.func,
    props: _propTypes2.default.object,
    validate: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func)]),
    warn: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func)]),
    withRef: _propTypes2.default.bool
  };
  Field.contextTypes = {
    _reduxForm: _propTypes2.default.object
  };
  return Field;
};
exports.default = createField;
});
unwrapExports(createField_1);

var immutable$1 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
  module.exports = factory();
}(commonjsGlobal, function () { 'use strict';var SLICE$0 = Array.prototype.slice;
  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }
  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }
  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }
  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }
  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }
  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }
  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }
  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }
  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }
  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }
  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;
  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;
  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
  var DELETE = 'delete';
  var SHIFT = 5;
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;
  var NOT_SET = {};
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };
  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }
  function SetRef(ref) {
    ref && (ref.value = true);
  }
  function OwnerID() {}
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }
  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }
  function wrapIndex(iter, index) {
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0;
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }
  function returnTrue() {
    return true;
  }
  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }
  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }
  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }
  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }
  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;
  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
  function Iterator(next) {
      this.next = next;
    }
    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };
  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;
  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); };
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };
  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }
  function iteratorDone() {
    return { value: undefined, done: true };
  }
  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }
  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }
  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }
  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }
  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }
    Seq.of = function(             ) {
      return Seq(arguments);
    };
    Seq.prototype.toSeq = function() {
      return this;
    };
    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };
    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };
    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };
    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };
  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }
    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };
  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }
    IndexedSeq.of = function(             ) {
      return IndexedSeq(arguments);
    };
    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };
    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };
    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };
    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };
  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }
    SetSeq.of = function(             ) {
      return SetSeq(arguments);
    };
    SetSeq.prototype.toSetSeq = function() {
      return this;
    };
  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;
  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
  Seq.prototype[IS_SEQ_SENTINEL] = true;
  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }
    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };
    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };
    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function()
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };
  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }
    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };
    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };
    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };
    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };
  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }
    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };
    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };
  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }
    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };
  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }
  var EMPTY_SEQ;
  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }
  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }
  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }
  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }
  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }
  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }
  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }
  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }
  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }
  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }
  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }
    if (a.size === 0 && b.size === 0) {
      return true;
    }
    var notAssociative = !isAssociative(a);
    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }
    var flipped = false;
    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }
    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });
    return allEqual && a.size === bSize;
  }
  createClass(Repeat, IndexedSeq);
    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }
    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };
    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };
    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };
    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };
    Repeat.prototype.reverse = function() {
      return this;
    };
    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };
    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };
    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };
    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function()
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };
    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };
  var EMPTY_REPEAT;
  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }
  createClass(Range, IndexedSeq);
    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }
    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };
    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };
    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };
    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };
    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };
    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };
    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };
    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };
    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };
  var EMPTY_RANGE;
  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }
  createClass(KeyedCollection, Collection);function KeyedCollection() {}
  createClass(IndexedCollection, Collection);function IndexedCollection() {}
  createClass(SetCollection, Collection);function SetCollection() {}
  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;
  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0;
      b = b | 0;
      var c = a & 0xffff;
      var d = b & 0xffff;
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0;
    };
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }
  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }
  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }
  function hashString(string) {
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }
  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }
    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }
    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }
      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }
    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }
    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }
    return hash;
  }
  var isExtensible = Object.isExtensible;
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1:
          return node.uniqueID;
        case 9:
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }
  var objHashUID = 0;
  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }
  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};
  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }
  createClass(Map, KeyedCollection);
    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }
    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };
    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };
    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };
    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };
    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };
    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };
    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };
    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };
    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };
    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };
    Map.prototype.merge = function(            ) {
      return mergeIntoMapWith(this, undefined, arguments);
    };
    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };
    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };
    Map.prototype.mergeDeep = function(            ) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };
    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };
    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };
    Map.prototype.sort = function(comparator) {
      return OrderedMap(sortFactory(this, comparator));
    };
    Map.prototype.sortBy = function(mapper, comparator) {
      return OrderedMap(sortFactory(this, comparator, mapper));
    };
    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };
    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };
    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };
    Map.prototype.wasAltered = function() {
      return this.__altered;
    };
    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };
    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };
    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };
  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }
  Map.isMap = isMap;
  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;
    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }
    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };
    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);
      if (removed && entries.length === 1) {
        return;
      }
      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new ArrayMapNode(ownerID, newEntries);
    };
    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }
    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };
    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;
      if (!exists && value === NOT_SET) {
        return this;
      }
      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }
      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }
      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }
      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }
      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };
    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }
    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };
    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];
      if (removed && !node) {
        return this;
      }
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }
      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }
      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };
    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }
    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };
    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var removed = value === NOT_SET;
      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);
      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };
    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }
    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };
    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }
      SetRef(didAlter);
      if (removed) {
        SetRef(didChangeSize);
        return;
      }
      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }
      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };
  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  };
  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  };
  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  };
  createClass(MapIterator, Iterator);
    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }
    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };
  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }
  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }
  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }
  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }
  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }
  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }
  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }
  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }
    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }
  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }
  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }
  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }
  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }
  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }
  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }
  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        };
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }
  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }
  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }
  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }
  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }
  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }
  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
  createClass(List, IndexedCollection);
    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }
    List.of = function(             ) {
      return this(arguments);
    };
    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };
    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };
    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };
    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };
    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };
    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };
    List.prototype.push = function(             ) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };
    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };
    List.prototype.unshift = function(             ) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };
    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };
    List.prototype.merge = function(            ) {
      return mergeIntoListWith(this, undefined, arguments);
    };
    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };
    List.prototype.mergeDeep = function(            ) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };
    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };
    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };
    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };
    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };
    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };
    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };
  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }
  List.isList = isList;
  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;
    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }
    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };
    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }
      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }
      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };
  var DONE = {};
  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;
    return iterateNodeOrLeaf(list._root, list._level, 0);
    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }
    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }
    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }
  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }
  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }
  function updateList(list, index, value) {
    index = wrapIndex(list, index);
    if (index !== index) {
      return list;
    }
    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value);
      });
    }
    index += list._origin;
    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }
    if (!didAlter.value) {
      return list;
    }
    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }
  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }
    var newNode;
    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }
    if (nodeHas && node.array[idx] === value) {
      return node;
    }
    SetRef(didAlter);
    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }
  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }
  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }
  function setListBounds(list, begin, end) {
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }
    if (newOrigin >= newCapacity) {
      return list.clear();
    }
    var newLevel = list._level;
    var newRoot = list._root;
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }
    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }
    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }
  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }
  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }
  createClass(OrderedMap, Map);
    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }
    OrderedMap.of = function(             ) {
      return this(arguments);
    };
    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };
    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };
    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };
    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };
    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };
    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };
    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };
    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };
    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };
  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }
  OrderedMap.isOrderedMap = isOrderedMap;
  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }
  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }
  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) {
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }
  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }
    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };
    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };
    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };
    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };
    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };
    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };
  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };
    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };
    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };
  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };
    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };
    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };
  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }
    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };
    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };
    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };
  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;
  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this);
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    };
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    };
    return flipSequence;
  }
  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    };
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    };
    return mappedSequence;
  }
  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue)
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }
  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    };
    return filterSequence;
  }
  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }
  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }
  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }
    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }
    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }
    var sliceSeq = makeSequence(iterable);
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;
    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      };
    }
    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };
    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    };
    return sliceSeq;
  }
  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c)
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }
  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }
  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});
    if (iters.length === 0) {
      return iterable;
    }
    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }
    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }
  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    };
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    };
    return flatSequence;
  }
  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }
  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k)
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }
  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }
  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }
  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }
  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    zipSequence.__iterate = function(fn, reverse) {
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }
  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }
  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }
  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }
  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }
  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }
  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }
  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }
  createClass(Record, KeyedCollection);
    function Record(defaultValues, name) {
      var hasInitialized;
      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };
      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;
      return RecordType;
    }
    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };
    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };
    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };
    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };
    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };
    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };
    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };
    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };
    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };
    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };
  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;
  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }
  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }
  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
    }
  }
  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }
  createClass(Set, SetCollection);
    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }
    Set.of = function(             ) {
      return this(arguments);
    };
    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };
    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };
    Set.prototype.has = function(value) {
      return this._map.has(value);
    };
    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };
    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };
    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };
    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };
    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };
    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };
    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };
    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };
    Set.prototype.sort = function(comparator) {
      return OrderedSet(sortFactory(this, comparator));
    };
    Set.prototype.sortBy = function(mapper, comparator) {
      return OrderedSet(sortFactory(this, comparator, mapper));
    };
    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };
    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };
    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };
    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };
  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }
  Set.isSet = isSet;
  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;
  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;
  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }
  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }
  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }
  createClass(OrderedSet, Set);
    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }
    OrderedSet.of = function(             ) {
      return this(arguments);
    };
    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };
    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };
  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }
  OrderedSet.isOrderedSet = isOrderedSet;
  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;
  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }
  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }
  createClass(Stack, IndexedCollection);
    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }
    Stack.of = function(             ) {
      return this(arguments);
    };
    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };
    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };
    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };
    Stack.prototype.push = function(             ) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack.prototype.pop = function() {
      return this.slice(1);
    };
    Stack.prototype.unshift = function(             ) {
      return this.push.apply(this, arguments);
    };
    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };
    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };
    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };
    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };
    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };
    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };
  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }
  Stack.isStack = isStack;
  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;
  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }
  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }
  Iterable.Iterator = Iterator;
  mixin(Iterable, {
    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },
    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },
    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },
    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },
    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },
    toMap: function() {
      return Map(this.toKeyedSeq());
    },
    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },
    toOrderedMap: function() {
      return OrderedMap(this.toKeyedSeq());
    },
    toOrderedSet: function() {
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },
    toSet: function() {
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },
    toSetSeq: function() {
      return new ToSetSequence(this);
    },
    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },
    toStack: function() {
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },
    toList: function() {
      return List(isKeyed(this) ? this.valueSeq() : this);
    },
    toString: function() {
      return '[Iterable]';
    },
    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },
    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },
    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },
    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },
    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },
    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },
    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },
    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },
    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },
    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },
    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },
    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },
    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },
    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },
    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },
    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },
    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },
    butLast: function() {
      return this.slice(0, -1);
    },
    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },
    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },
    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },
    equals: function(other) {
      return deepEqual(this, other);
    },
    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },
    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },
    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },
    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },
    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },
    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },
    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },
    first: function() {
      return this.find(returnTrue);
    },
    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },
    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },
    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },
    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },
    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },
    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },
    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },
    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },
    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },
    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },
    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },
    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },
    last: function() {
      return this.toSeq().reverse().first();
    },
    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },
    max: function(comparator) {
      return maxFactory(this, comparator);
    },
    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },
    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },
    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },
    rest: function() {
      return this.slice(1);
    },
    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },
    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },
    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },
    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },
    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },
    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },
    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },
    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },
    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },
    valueSeq: function() {
      return this.toIndexedSeq();
    },
    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }
  });
  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;
  mixin(KeyedIterable, {
    flip: function() {
      return reify(this, flipFactory(this));
    },
    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },
    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }
  });
  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};
  mixin(IndexedIterable, {
    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },
    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },
    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },
    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },
    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },
    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },
    splice: function(index, removeNum                ) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },
    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    first: function() {
      return this.get(0);
    },
    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },
    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },
    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },
    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },
    interleave: function(                ) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },
    keySeq: function() {
      return Range(0, this.size);
    },
    last: function() {
      return this.get(-1);
    },
    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },
    zip: function(                   ) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },
    zipWith: function(zipper                   ) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }
  });
  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
  mixin(SetIterable, {
    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },
    includes: function(value) {
      return this.has(value);
    },
    keySeq: function() {
      return this.valueSeq();
    }
  });
  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;
  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);
  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);
  function keyMapper(v, k) {
    return k;
  }
  function entryMapper(v, k) {
    return [k, v];
  }
  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }
  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }
  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }
  function defaultZipper() {
    return arrCopy(arguments);
  }
  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }
  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }
  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }
  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0;
  }
  var Immutable = {
    Iterable: Iterable,
    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,
    Record: Record,
    Range: Range,
    Repeat: Repeat,
    is: is,
    fromJS: fromJS
  };
  return Immutable;
}));
});

var deepEqual_1$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isEqualWith3 = _interopRequireDefault(isEqualWith_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var customizer = function customizer(obj, other) {
  if (obj == other) return true;
  if ((obj == null || obj === '' || obj === false) && (other == null || other === '' || other === false)) return true;
  if (immutable$1.Iterable.isIterable(obj) && immutable$1.Iterable.isIterable(other)) {
    return obj.count() === other.count() && obj.every(function (value, key) {
      return other.has(key) && (0, _isEqualWith3.default)(value, other.get(key), customizer);
    });
  }
  return void 0;
};
var deepEqual = function deepEqual(a, b) {
  return (0, _isEqualWith3.default)(a, b, customizer);
};
exports.default = deepEqual;
});
unwrapExports(deepEqual_1$1);

var keys_1$3 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _keys2 = _interopRequireDefault(keys_1$2);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var empty = (0, immutable$1.List)();
var keys = function keys(value) {
  if (immutable$1.List.isList(value)) {
    return value.map(function (i) {
      return i.name;
    });
  }
  if (immutable$1.Iterable.isIterable(value)) {
    return value.keySeq();
  }
  return value ? (0, immutable$1.List)((0, _keys2.default)(value)) : empty;
};
exports.default = keys;
});
unwrapExports(keys_1$3);

var setIn_1$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _toPath3 = _interopRequireDefault(toPath_1);
exports.default = setIn;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var arrayPattern = /\[(\d+)\]/;
var undefinedArrayMerge = function undefinedArrayMerge(previous, next) {
  return next !== undefined ? next : previous;
};
var mergeLists = function mergeLists(original, value) {
  return original && immutable$1.List.isList(original) ? original.mergeDeepWith(undefinedArrayMerge, value) : value;
};
function setIn(state, field, value) {
  var path = (0, _toPath3.default)(field);
  if (!field || typeof field !== 'string' || !arrayPattern.test(field)) {
    return state.setIn(path, value);
  }
  return state.withMutations(function (mutable) {
    var _loop = function _loop(pathIndex) {
      var nextPart = path[pathIndex + 1];
      if (isNaN(nextPart)) {
        return 'continue';
      }
      mutable = mutable.updateIn(path.slice(0, pathIndex + 1), function (value) {
        return mergeLists(value, new immutable$1.List().set(parseInt(nextPart, 10), new immutable$1.Map()));
      });
    };
    for (var pathIndex = 0; pathIndex < path.length - 1; ++pathIndex) {
      var _ret = _loop(pathIndex);
      if (_ret === 'continue') continue;
    }
    return mutable.setIn(path, value);
  });
}
});
unwrapExports(setIn_1$1);

var splice$3 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (list, index, removeNum, value) {
  list = immutable$1.List.isList(list) ? list : (0, immutable$1.List)();
  if (index < list.count()) {
    if (value === undefined && !removeNum) {
      return list.splice(index, 0, true)
      .set(index, undefined);
    }
    if (value != null) {
      return list.splice(index, removeNum, value);
    } else {
      return list.splice(index, removeNum);
    }
  }
  if (removeNum) {
    return list;
  }
  return list.set(index, value);
};
});
unwrapExports(splice$3);

var immutable = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _toPath3 = _interopRequireDefault(toPath_1);
var _deepEqual2 = _interopRequireDefault(deepEqual_1$1);
var _keys2 = _interopRequireDefault(keys_1$3);
var _setIn2 = _interopRequireDefault(setIn_1$1);
var _splice2 = _interopRequireDefault(splice$3);
var _getIn2 = _interopRequireDefault(getIn_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var emptyList = (0, immutable$1.List)();
var structure = {
  allowsArrayErrors: false,
  empty: (0, immutable$1.Map)(),
  emptyList: emptyList,
  getIn: function getIn(state, field) {
    return immutable$1.Iterable.isIterable(state) ? state.getIn((0, _toPath3.default)(field)) : (0, _getIn2.default)(state, field);
  },
  setIn: _setIn2.default,
  deepEqual: _deepEqual2.default,
  deleteIn: function deleteIn(state, field) {
    return state.deleteIn((0, _toPath3.default)(field));
  },
  forEach: function forEach(items, callback) {
    items.forEach(callback);
  },
  fromJS: function fromJS(jsValue) {
    return (0, immutable$1.fromJS)(jsValue, function (key, value) {
      return immutable$1.Iterable.isIndexed(value) ? value.toList() : value.toMap();
    });
  },
  keys: _keys2.default,
  size: function size(list) {
    return list ? list.size : 0;
  },
  some: function some(items, callback) {
    return items.some(callback);
  },
  splice: _splice2.default,
  toJS: function toJS(value) {
    return immutable$1.Iterable.isIterable(value) ? value.toJS() : value;
  }
};
exports.default = structure;
});
unwrapExports(immutable);

var Field = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createField2 = _interopRequireDefault(createField_1);
var _immutable2 = _interopRequireDefault(immutable);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = (0, _createField2.default)(_immutable2.default);
});
var Field$1 = unwrapExports(Field);

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());
var _defineProperty = defineProperty;

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue;

function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue;

function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor;

var baseFor = _createBaseFor();
var _baseFor = baseFor;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
module.exports = cloneBuffer;
});

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer;

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray;

var objectCreate = Object.create;
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());
var _baseCreate = baseCreate;

var getPrototype$1 = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$1;

function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}
var _initCloneObject = initCloneObject;

function isArrayLikeObject$1(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;

var objectTag$3 = '[object Object]';
var funcProto$3 = Function.prototype;
var objectProto$13 = Object.prototype;
var funcToString$3 = funcProto$3.toString;
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;
var objectCtorString = funcToString$3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$10.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$3.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject;

var objectProto$14 = Object.prototype;
var hasOwnProperty$11 = objectProto$14.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$11.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}
var _assignValue = assignValue;

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject;

function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;

var objectProto$15 = Object.prototype;
var hasOwnProperty$12 = objectProto$15.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$12.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;

function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}
var keysIn_1 = keysIn$1;

function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}
var toPlainObject_1 = toPlainObject;

function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);
  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || (srcIndex && isFunction_1(objValue))) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep;

function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    if (isObject_1(srcValue)) {
      stack || (stack = new _Stack);
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}
var _baseMerge = baseMerge;

function identity(value) {
  return value;
}
var identity_1 = identity;

function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;

var nativeMax$1 = Math.max;
function overRest(func, start, transform) {
  start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$1(args.length - start, 0),
        array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}
var _overRest = overRest;

function constant(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant;

var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};
var _baseSetToString = baseSetToString;

var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}
var _shortOut = shortOut;

var setToString = _shortOut(_baseSetToString);
var _setToString = setToString;

function baseRest$1(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}
var _baseRest = baseRest$1;

function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall;

function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;
    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner;

var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});
var merge_1 = merge;

function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}
var _baseForOwn = baseForOwn;

var COMPARE_PARTIAL_FLAG$4 = 1;
var COMPARE_UNORDERED_FLAG$2 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch;

function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}
var _isStrictComparable = isStrictComparable;

function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;
  while (length--) {
    var key = result[length],
        value = object[key];
    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}
var _getMatchData = getMatchData;

function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}
var _matchesStrictComparable = matchesStrictComparable;

function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches;

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}
var _isKey = isKey;

function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}
var _castPath = castPath;

function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
      length = path.length;
  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}
var _baseGet = baseGet;

function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}
var get_1 = get;

function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn;

function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;
  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}
var _hasPath = hasPath;

function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}
var hasIn_1 = hasIn;

var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}
var _baseMatchesProperty = baseMatchesProperty;

function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}
var _baseProperty = baseProperty;

function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep;

function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}
var property_1 = property;

function baseIteratee(value) {
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}
var _baseIteratee = baseIteratee;

function mapValues(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee, 3);
  _baseForOwn(object, function(value, key, object) {
    _baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}
var mapValues_1 = mapValues;

'use strict';
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var defineProperty$2 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    defineProperty$2(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
        return targetComponent;
    }
    return targetComponent;
};

var isPromise_1 = isPromise;
function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

var actionTypes = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var prefix = exports.prefix = '@@redux-form/';
var ARRAY_INSERT = exports.ARRAY_INSERT = prefix + 'ARRAY_INSERT';
var ARRAY_MOVE = exports.ARRAY_MOVE = prefix + 'ARRAY_MOVE';
var ARRAY_POP = exports.ARRAY_POP = prefix + 'ARRAY_POP';
var ARRAY_PUSH = exports.ARRAY_PUSH = prefix + 'ARRAY_PUSH';
var ARRAY_REMOVE = exports.ARRAY_REMOVE = prefix + 'ARRAY_REMOVE';
var ARRAY_REMOVE_ALL = exports.ARRAY_REMOVE_ALL = prefix + 'ARRAY_REMOVE_ALL';
var ARRAY_SHIFT = exports.ARRAY_SHIFT = prefix + 'ARRAY_SHIFT';
var ARRAY_SPLICE = exports.ARRAY_SPLICE = prefix + 'ARRAY_SPLICE';
var ARRAY_UNSHIFT = exports.ARRAY_UNSHIFT = prefix + 'ARRAY_UNSHIFT';
var ARRAY_SWAP = exports.ARRAY_SWAP = prefix + 'ARRAY_SWAP';
var AUTOFILL = exports.AUTOFILL = prefix + 'AUTOFILL';
var BLUR = exports.BLUR = prefix + 'BLUR';
var CHANGE = exports.CHANGE = prefix + 'CHANGE';
var CLEAR_SUBMIT = exports.CLEAR_SUBMIT = prefix + 'CLEAR_SUBMIT';
var CLEAR_SUBMIT_ERRORS = exports.CLEAR_SUBMIT_ERRORS = prefix + 'CLEAR_SUBMIT_ERRORS';
var CLEAR_ASYNC_ERROR = exports.CLEAR_ASYNC_ERROR = prefix + 'CLEAR_ASYNC_ERROR';
var DESTROY = exports.DESTROY = prefix + 'DESTROY';
var FOCUS = exports.FOCUS = prefix + 'FOCUS';
var INITIALIZE = exports.INITIALIZE = prefix + 'INITIALIZE';
var REGISTER_FIELD = exports.REGISTER_FIELD = prefix + 'REGISTER_FIELD';
var RESET = exports.RESET = prefix + 'RESET';
var SET_SUBMIT_FAILED = exports.SET_SUBMIT_FAILED = prefix + 'SET_SUBMIT_FAILED';
var SET_SUBMIT_SUCCEEDED = exports.SET_SUBMIT_SUCCEEDED = prefix + 'SET_SUBMIT_SUCCEEDED';
var START_ASYNC_VALIDATION = exports.START_ASYNC_VALIDATION = prefix + 'START_ASYNC_VALIDATION';
var START_SUBMIT = exports.START_SUBMIT = prefix + 'START_SUBMIT';
var STOP_ASYNC_VALIDATION = exports.STOP_ASYNC_VALIDATION = prefix + 'STOP_ASYNC_VALIDATION';
var STOP_SUBMIT = exports.STOP_SUBMIT = prefix + 'STOP_SUBMIT';
var SUBMIT = exports.SUBMIT = prefix + 'SUBMIT';
var TOUCH = exports.TOUCH = prefix + 'TOUCH';
var UNREGISTER_FIELD = exports.UNREGISTER_FIELD = prefix + 'UNREGISTER_FIELD';
var UNTOUCH = exports.UNTOUCH = prefix + 'UNTOUCH';
var UPDATE_SYNC_ERRORS = exports.UPDATE_SYNC_ERRORS = prefix + 'UPDATE_SYNC_ERRORS';
var UPDATE_SYNC_WARNINGS = exports.UPDATE_SYNC_WARNINGS = prefix + 'UPDATE_SYNC_WARNINGS';
});
unwrapExports(actionTypes);

var actions_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var arrayInsert = function arrayInsert(form, field, index, value) {
  return {
    type: actionTypes.ARRAY_INSERT,
    meta: { form: form, field: field, index: index },
    payload: value
  };
};
var arrayMove = function arrayMove(form, field, from, to) {
  return {
    type: actionTypes.ARRAY_MOVE,
    meta: { form: form, field: field, from: from, to: to }
  };
};
var arrayPop = function arrayPop(form, field) {
  return {
    type: actionTypes.ARRAY_POP,
    meta: { form: form, field: field }
  };
};
var arrayPush = function arrayPush(form, field, value) {
  return {
    type: actionTypes.ARRAY_PUSH,
    meta: { form: form, field: field },
    payload: value
  };
};
var arrayRemove = function arrayRemove(form, field, index) {
  return {
    type: actionTypes.ARRAY_REMOVE,
    meta: { form: form, field: field, index: index }
  };
};
var arrayRemoveAll = function arrayRemoveAll(form, field) {
  return {
    type: actionTypes.ARRAY_REMOVE_ALL,
    meta: { form: form, field: field }
  };
};
var arrayShift = function arrayShift(form, field) {
  return {
    type: actionTypes.ARRAY_SHIFT,
    meta: { form: form, field: field }
  };
};
var arraySplice = function arraySplice(form, field, index, removeNum, value) {
  var action = {
    type: actionTypes.ARRAY_SPLICE,
    meta: { form: form, field: field, index: index, removeNum: removeNum }
  };
  if (value !== undefined) {
    action.payload = value;
  }
  return action;
};
var arraySwap = function arraySwap(form, field, indexA, indexB) {
  if (indexA === indexB) {
    throw new Error('Swap indices cannot be equal');
  }
  if (indexA < 0 || indexB < 0) {
    throw new Error('Swap indices cannot be negative');
  }
  return { type: actionTypes.ARRAY_SWAP, meta: { form: form, field: field, indexA: indexA, indexB: indexB } };
};
var arrayUnshift = function arrayUnshift(form, field, value) {
  return {
    type: actionTypes.ARRAY_UNSHIFT,
    meta: { form: form, field: field },
    payload: value
  };
};
var autofill = function autofill(form, field, value) {
  return {
    type: actionTypes.AUTOFILL,
    meta: { form: form, field: field },
    payload: value
  };
};
var blur = function blur(form, field, value, touch) {
  return {
    type: actionTypes.BLUR,
    meta: { form: form, field: field, touch: touch },
    payload: value
  };
};
var change = function change(form, field, value, touch, persistentSubmitErrors) {
  return {
    type: actionTypes.CHANGE,
    meta: { form: form, field: field, touch: touch, persistentSubmitErrors: persistentSubmitErrors },
    payload: value
  };
};
var clearSubmit = function clearSubmit(form) {
  return {
    type: actionTypes.CLEAR_SUBMIT,
    meta: { form: form }
  };
};
var clearSubmitErrors = function clearSubmitErrors(form) {
  return {
    type: actionTypes.CLEAR_SUBMIT_ERRORS,
    meta: { form: form }
  };
};
var clearAsyncError = function clearAsyncError(form, field) {
  return {
    type: actionTypes.CLEAR_ASYNC_ERROR,
    meta: { form: form, field: field }
  };
};
var destroy = function destroy() {
  for (var _len = arguments.length, form = Array(_len), _key = 0; _key < _len; _key++) {
    form[_key] = arguments[_key];
  }
  return {
    type: actionTypes.DESTROY,
    meta: { form: form }
  };
};
var focus = function focus(form, field) {
  return {
    type: actionTypes.FOCUS,
    meta: { form: form, field: field }
  };
};
var initialize = function initialize(form, values, keepDirty) {
  var otherMeta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (keepDirty instanceof Object) {
    otherMeta = keepDirty;
    keepDirty = false;
  }
  return {
    type: actionTypes.INITIALIZE,
    meta: _extends({ form: form, keepDirty: keepDirty }, otherMeta),
    payload: values
  };
};
var registerField = function registerField(form, name, type) {
  return {
    type: actionTypes.REGISTER_FIELD,
    meta: { form: form },
    payload: { name: name, type: type }
  };
};
var reset = function reset(form) {
  return {
    type: actionTypes.RESET,
    meta: { form: form }
  };
};
var startAsyncValidation = function startAsyncValidation(form, field) {
  return {
    type: actionTypes.START_ASYNC_VALIDATION,
    meta: { form: form, field: field }
  };
};
var startSubmit = function startSubmit(form) {
  return {
    type: actionTypes.START_SUBMIT,
    meta: { form: form }
  };
};
var stopAsyncValidation = function stopAsyncValidation(form, errors) {
  return {
    type: actionTypes.STOP_ASYNC_VALIDATION,
    meta: { form: form },
    payload: errors,
    error: !!(errors && Object.keys(errors).length)
  };
};
var stopSubmit = function stopSubmit(form, errors) {
  return {
    type: actionTypes.STOP_SUBMIT,
    meta: { form: form },
    payload: errors,
    error: !!(errors && Object.keys(errors).length)
  };
};
var submit = function submit(form) {
  return {
    type: actionTypes.SUBMIT,
    meta: { form: form }
  };
};
var setSubmitFailed = function setSubmitFailed(form) {
  for (var _len2 = arguments.length, fields = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    fields[_key2 - 1] = arguments[_key2];
  }
  return {
    type: actionTypes.SET_SUBMIT_FAILED,
    meta: { form: form, fields: fields },
    error: true
  };
};
var setSubmitSucceeded = function setSubmitSucceeded(form) {
  for (var _len3 = arguments.length, fields = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    fields[_key3 - 1] = arguments[_key3];
  }
  return {
    type: actionTypes.SET_SUBMIT_SUCCEEDED,
    meta: { form: form, fields: fields },
    error: false
  };
};
var touch = function touch(form) {
  for (var _len4 = arguments.length, fields = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    fields[_key4 - 1] = arguments[_key4];
  }
  return {
    type: actionTypes.TOUCH,
    meta: { form: form, fields: fields }
  };
};
var unregisterField = function unregisterField(form, name) {
  var destroyOnUnmount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return {
    type: actionTypes.UNREGISTER_FIELD,
    meta: { form: form },
    payload: { name: name, destroyOnUnmount: destroyOnUnmount }
  };
};
var untouch = function untouch(form) {
  for (var _len5 = arguments.length, fields = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    fields[_key5 - 1] = arguments[_key5];
  }
  return {
    type: actionTypes.UNTOUCH,
    meta: { form: form, fields: fields }
  };
};
var updateSyncErrors = function updateSyncErrors(form) {
  var syncErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var error = arguments[2];
  return {
    type: actionTypes.UPDATE_SYNC_ERRORS,
    meta: { form: form },
    payload: { syncErrors: syncErrors, error: error }
  };
};
var updateSyncWarnings = function updateSyncWarnings(form) {
  var syncWarnings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var warning = arguments[2];
  return {
    type: actionTypes.UPDATE_SYNC_WARNINGS,
    meta: { form: form },
    payload: { syncWarnings: syncWarnings, warning: warning }
  };
};
var actions = {
  arrayInsert: arrayInsert,
  arrayMove: arrayMove,
  arrayPop: arrayPop,
  arrayPush: arrayPush,
  arrayRemove: arrayRemove,
  arrayRemoveAll: arrayRemoveAll,
  arrayShift: arrayShift,
  arraySplice: arraySplice,
  arraySwap: arraySwap,
  arrayUnshift: arrayUnshift,
  autofill: autofill,
  blur: blur,
  change: change,
  clearSubmit: clearSubmit,
  clearSubmitErrors: clearSubmitErrors,
  clearAsyncError: clearAsyncError,
  destroy: destroy,
  focus: focus,
  initialize: initialize,
  registerField: registerField,
  reset: reset,
  startAsyncValidation: startAsyncValidation,
  startSubmit: startSubmit,
  stopAsyncValidation: stopAsyncValidation,
  stopSubmit: stopSubmit,
  submit: submit,
  setSubmitFailed: setSubmitFailed,
  setSubmitSucceeded: setSubmitSucceeded,
  touch: touch,
  unregisterField: unregisterField,
  untouch: untouch,
  updateSyncErrors: updateSyncErrors,
  updateSyncWarnings: updateSyncWarnings
};
exports.default = actions;
});
unwrapExports(actions_1);

var asyncValidation_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isPromise2 = _interopRequireDefault(isPromise_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var asyncValidation = function asyncValidation(fn, start, stop, field) {
  start(field);
  var promise = fn();
  if (!(0, _isPromise2.default)(promise)) {
    throw new Error('asyncValidate function passed to reduxForm must return a promise');
  }
  var handleErrors = function handleErrors(rejected) {
    return function (errors) {
      if (errors && Object.keys(errors).length) {
        stop(errors);
        return errors;
      } else if (rejected) {
        stop();
        throw new Error('Asynchronous validation promise was rejected without errors.');
      }
      stop();
      return Promise.resolve();
    };
  };
  return promise.then(handleErrors(false), handleErrors(true));
};
exports.default = asyncValidation;
});
unwrapExports(asyncValidation_1);

var defaultShouldAsyncValidate_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultShouldAsyncValidate = function defaultShouldAsyncValidate(_ref) {
  var initialized = _ref.initialized,
      trigger = _ref.trigger,
      pristine = _ref.pristine,
      syncValidationPasses = _ref.syncValidationPasses;
  if (!syncValidationPasses) {
    return false;
  }
  switch (trigger) {
    case 'blur':
      return true;
    case 'submit':
      return !pristine || !initialized;
    default:
      return false;
  }
};
exports.default = defaultShouldAsyncValidate;
});
unwrapExports(defaultShouldAsyncValidate_1);

var defaultShouldValidate_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultShouldValidate = function defaultShouldValidate(_ref) {
  var values = _ref.values,
      nextProps = _ref.nextProps,
      initialRender = _ref.initialRender,
      lastFieldValidatorKeys = _ref.lastFieldValidatorKeys,
      fieldValidatorKeys = _ref.fieldValidatorKeys,
      structure = _ref.structure;
  if (initialRender) {
    return true;
  }
  return !structure.deepEqual(values, nextProps && nextProps.values) || !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys);
};
exports.default = defaultShouldValidate;
});
unwrapExports(defaultShouldValidate_1);

var silenceEvent_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isEvent2 = _interopRequireDefault(isEvent_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var silenceEvent = function silenceEvent(event) {
  var is = (0, _isEvent2.default)(event);
  if (is) {
    event.preventDefault();
  }
  return is;
};
exports.default = silenceEvent;
});
unwrapExports(silenceEvent_1);

var silenceEvents_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _silenceEvent2 = _interopRequireDefault(silenceEvent_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var silenceEvents = function silenceEvents(fn) {
  return function (event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return (0, _silenceEvent2.default)(event) ? fn.apply(undefined, args) : fn.apply(undefined, [event].concat(args));
  };
};
exports.default = silenceEvents;
});
unwrapExports(silenceEvents_1);

var generateValidator_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _plain2 = _interopRequireDefault(plain);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var toArray = function toArray(value) {
  return Array.isArray(value) ? value : [value];
};
var getError = function getError(value, values, props, validators) {
  var array = toArray(validators);
  for (var i = 0; i < array.length; i++) {
    var error = array[i](value, values, props);
    if (error) {
      return error;
    }
  }
};
var generateValidator = function generateValidator(validators, _ref) {
  var getIn = _ref.getIn;
  return function (values, props) {
    var errors = {};
    Object.keys(validators).forEach(function (name) {
      var value = getIn(values, name);
      var error = getError(value, values, props, validators[name]);
      if (error) {
        errors = _plain2.default.setIn(errors, name, error);
      }
    });
    return errors;
  };
};
exports.default = generateValidator;
});
unwrapExports(generateValidator_1);

var lib = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }
  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }
  return ExtendableBuiltin;
}
var ExtendableError = function (_extendableBuiltin2) {
  _inherits(ExtendableError, _extendableBuiltin2);
  function ExtendableError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    _classCallCheck(this, ExtendableError);
    var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));
    Object.defineProperty(_this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true
    });
    Object.defineProperty(_this, 'name', {
      configurable: true,
      enumerable: false,
      value: _this.constructor.name,
      writable: true
    });
    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(_this, _this.constructor);
      return _possibleConstructorReturn(_this);
    }
    Object.defineProperty(_this, 'stack', {
      configurable: true,
      enumerable: false,
      value: new Error(message).stack,
      writable: true
    });
    return _this;
  }
  return ExtendableError;
}(_extendableBuiltin(Error));
exports.default = ExtendableError;
module.exports = exports['default'];
});
unwrapExports(lib);

var SubmissionError_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _es6Error2 = _interopRequireDefault(lib);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var SubmissionError = function (_ExtendableError) {
  _inherits(SubmissionError, _ExtendableError);
  function SubmissionError(errors) {
    _classCallCheck(this, SubmissionError);
    var _this = _possibleConstructorReturn(this, (SubmissionError.__proto__ || Object.getPrototypeOf(SubmissionError)).call(this, 'Submit Validation Failed'));
    _this.errors = errors;
    return _this;
  }
  return SubmissionError;
}(_es6Error2.default);
exports.default = SubmissionError;
});
unwrapExports(SubmissionError_1);

var handleSubmit_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _isPromise2 = _interopRequireDefault(isPromise_1);
var _SubmissionError2 = _interopRequireDefault(SubmissionError_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
var handleSubmit = function handleSubmit(submit, props, valid, asyncValidate, fields) {
  var dispatch = props.dispatch,
      onSubmitFail = props.onSubmitFail,
      onSubmitSuccess = props.onSubmitSuccess,
      startSubmit = props.startSubmit,
      stopSubmit = props.stopSubmit,
      setSubmitFailed = props.setSubmitFailed,
      setSubmitSucceeded = props.setSubmitSucceeded,
      syncErrors = props.syncErrors,
      asyncErrors = props.asyncErrors,
      touch = props.touch,
      values = props.values,
      persistentSubmitErrors = props.persistentSubmitErrors;
  touch.apply(undefined, _toConsumableArray(fields));
  if (valid || persistentSubmitErrors) {
    var doSubmit = function doSubmit() {
      var result = void 0;
      try {
        result = submit(values, dispatch, props);
      } catch (submitError) {
        var error = submitError instanceof _SubmissionError2.default ? submitError.errors : undefined;
        stopSubmit(error);
        setSubmitFailed.apply(undefined, _toConsumableArray(fields));
        if (onSubmitFail) {
          onSubmitFail(error, dispatch, submitError, props);
        }
        if (error || onSubmitFail) {
          return error;
        } else {
          throw submitError;
        }
      }
      if ((0, _isPromise2.default)(result)) {
        startSubmit();
        return result.then(function (submitResult) {
          stopSubmit();
          setSubmitSucceeded();
          if (onSubmitSuccess) {
            onSubmitSuccess(submitResult, dispatch, props);
          }
          return submitResult;
        }, function (submitError) {
          var error = submitError instanceof _SubmissionError2.default ? submitError.errors : undefined;
          stopSubmit(error);
          setSubmitFailed.apply(undefined, _toConsumableArray(fields));
          if (onSubmitFail) {
            onSubmitFail(error, dispatch, submitError, props);
          }
          if (error || onSubmitFail) {
            return error;
          } else {
            throw submitError;
          }
        });
      } else {
        setSubmitSucceeded();
        if (onSubmitSuccess) {
          onSubmitSuccess(result, dispatch, props);
        }
      }
      return result;
    };
    var asyncValidateResult = asyncValidate && asyncValidate();
    if (asyncValidateResult) {
      return asyncValidateResult.then(function (asyncErrors) {
        if (asyncErrors) {
          throw asyncErrors;
        }
        return doSubmit();
      }).catch(function (asyncErrors) {
        setSubmitFailed.apply(undefined, _toConsumableArray(fields));
        if (onSubmitFail) {
          onSubmitFail(asyncErrors, dispatch, null, props);
        }
        return Promise.reject(asyncErrors);
      });
    } else {
      return doSubmit();
    }
  } else {
    setSubmitFailed.apply(undefined, _toConsumableArray(fields));
    var errors = _extends({}, asyncErrors, syncErrors);
    if (onSubmitFail) {
      onSubmitFail(errors, dispatch, null, props);
    }
    return errors;
  }
};
exports.default = handleSubmit;
});
unwrapExports(handleSubmit_1);

var hasError = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var getErrorKeys = function getErrorKeys(name, type) {
  switch (type) {
    case 'Field':
      return [name, name + '._error'];
    case 'FieldArray':
      return [name + '._error'];
    default:
      throw new Error('Unknown field type');
  }
};
var createHasError = function createHasError(_ref) {
  var getIn = _ref.getIn;
  var hasError = function hasError(field, syncErrors, asyncErrors, submitErrors) {
    if (!syncErrors && !asyncErrors && !submitErrors) {
      return false;
    }
    var name = getIn(field, 'name');
    var type = getIn(field, 'type');
    return getErrorKeys(name, type).some(function (key) {
      return getIn(syncErrors, key) || getIn(asyncErrors, key) || getIn(submitErrors, key);
    });
  };
  return hasError;
};
exports.default = createHasError;
});
unwrapExports(hasError);

var isValid = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _hasError2 = _interopRequireDefault(hasError);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var createIsValid = function createIsValid(structure) {
  var getIn = structure.getIn,
      keys = structure.keys;
  var hasError$$1 = (0, _hasError2.default)(structure);
  return function (form, getFormState) {
    var ignoreSubmitErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return function (state) {
      var nonNullGetFormState = getFormState || function (state) {
        return getIn(state, 'form');
      };
      var formState = nonNullGetFormState(state);
      var syncError = getIn(formState, form + '.syncError');
      if (syncError) {
        return false;
      }
      if (!ignoreSubmitErrors) {
        var error = getIn(formState, form + '.error');
        if (error) {
          return false;
        }
      }
      var syncErrors = getIn(formState, form + '.syncErrors');
      var asyncErrors = getIn(formState, form + '.asyncErrors');
      var submitErrors = ignoreSubmitErrors ? undefined : getIn(formState, form + '.submitErrors');
      if (!syncErrors && !asyncErrors && !submitErrors) {
        return true;
      }
      var registeredFields = getIn(formState, form + '.registeredFields');
      if (!registeredFields) {
        return true;
      }
      return !keys(registeredFields).filter(function (name) {
        return getIn(registeredFields, '[\'' + name + '\'].count') > 0;
      }).some(function (name) {
        return hasError$$1(getIn(registeredFields, '[\'' + name + '\']'), syncErrors, asyncErrors, submitErrors);
      });
    };
  };
};
exports.default = createIsValid;
});
unwrapExports(isValid);

var getDisplayName_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = _interopRequireWildcard(_react);
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
var getDisplayName = function getDisplayName(Comp) {
  return Comp.displayName || Comp.name || 'Component';
};
exports.default = getDisplayName;
});
unwrapExports(getDisplayName_1);

var createReduxForm_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _merge5 = _interopRequireDefault(merge_1);
var _mapValues3 = _interopRequireDefault(mapValues_1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var React = _interopRequireWildcard(_react);
var _hoistNonReactStatics2 = _interopRequireDefault(hoistNonReactStatics);
var _isPromise2 = _interopRequireDefault(isPromise_1);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _actions2 = _interopRequireDefault(actions_1);
var _asyncValidation2 = _interopRequireDefault(asyncValidation_1);
var _defaultShouldAsyncValidate2 = _interopRequireDefault(defaultShouldAsyncValidate_1);
var _defaultShouldValidate2 = _interopRequireDefault(defaultShouldValidate_1);
var _silenceEvent2 = _interopRequireDefault(silenceEvent_1);
var _silenceEvents2 = _interopRequireDefault(silenceEvents_1);
var _generateValidator2 = _interopRequireDefault(generateValidator_1);
var _handleSubmit2 = _interopRequireDefault(handleSubmit_1);
var _isValid2 = _interopRequireDefault(isValid);
var _plain2 = _interopRequireDefault(plain);
var _getDisplayName2 = _interopRequireDefault(getDisplayName_1);
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};
var arrayInsert = _actions2.default.arrayInsert,
    arrayMove = _actions2.default.arrayMove,
    arrayPop = _actions2.default.arrayPop,
    arrayPush = _actions2.default.arrayPush,
    arrayRemove = _actions2.default.arrayRemove,
    arrayRemoveAll = _actions2.default.arrayRemoveAll,
    arrayShift = _actions2.default.arrayShift,
    arraySplice = _actions2.default.arraySplice,
    arraySwap = _actions2.default.arraySwap,
    arrayUnshift = _actions2.default.arrayUnshift,
    blur = _actions2.default.blur,
    change = _actions2.default.change,
    focus = _actions2.default.focus,
    formActions = _objectWithoutProperties(_actions2.default, ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'blur', 'change', 'focus']);
var arrayActions = {
  arrayInsert: arrayInsert,
  arrayMove: arrayMove,
  arrayPop: arrayPop,
  arrayPush: arrayPush,
  arrayRemove: arrayRemove,
  arrayRemoveAll: arrayRemoveAll,
  arrayShift: arrayShift,
  arraySplice: arraySplice,
  arraySwap: arraySwap,
  arrayUnshift: arrayUnshift
};
var propsToNotUpdateFor = [].concat(_toConsumableArray(Object.keys(_actions2.default)), ['array', 'asyncErrors', 'initialValues', 'syncErrors', 'syncWarnings', 'values', 'registeredFields']);
var checkSubmit = function checkSubmit(submit) {
  if (!submit || typeof submit !== 'function') {
    throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
  }
  return submit;
};
var createReduxForm = function createReduxForm(structure) {
  var deepEqual = structure.deepEqual,
      empty = structure.empty,
      getIn = structure.getIn,
      setIn = structure.setIn,
      keys = structure.keys,
      fromJS = structure.fromJS;
  var isValid$$1 = (0, _isValid2.default)(structure);
  return function (initialConfig) {
    var config = _extends({
      touchOnBlur: true,
      touchOnChange: false,
      persistentSubmitErrors: false,
      destroyOnUnmount: true,
      shouldAsyncValidate: _defaultShouldAsyncValidate2.default,
      shouldValidate: _defaultShouldValidate2.default,
      enableReinitialize: false,
      keepDirtyOnReinitialize: false,
      getFormState: function getFormState(state) {
        return getIn(state, 'form');
      },
      pure: true,
      forceUnregisterOnUnmount: false
    }, initialConfig);
    return function (WrappedComponent) {
      var Form = function (_Component) {
        _inherits(Form, _Component);
        function Form() {
          var _ref;
          var _temp, _this, _ret;
          _classCallCheck(this, Form);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.destroyed = false, _this.fieldValidators = {}, _this.lastFieldValidatorKeys = [], _this.fieldWarners = {}, _this.lastFieldWarnerKeys = [], _this.innerOnSubmit = undefined, _this.submitPromise = undefined, _this.getValues = function () {
            return _this.props.values;
          }, _this.isValid = function () {
            return _this.props.valid;
          }, _this.isPristine = function () {
            return _this.props.pristine;
          }, _this.register = function (name, type, getValidator, getWarner) {
            _this.props.registerField(name, type);
            if (getValidator) {
              _this.fieldValidators[name] = getValidator;
            }
            if (getWarner) {
              _this.fieldWarners[name] = getWarner;
            }
          }, _this.unregister = function (name) {
            if (!_this.destroyed) {
              if (_this.props.destroyOnUnmount || _this.props.forceUnregisterOnUnmount) {
                _this.props.unregisterField(name);
                delete _this.fieldValidators[name];
                delete _this.fieldWarners[name];
              } else {
                _this.props.unregisterField(name, false);
              }
            }
          }, _this.getFieldList = function (options) {
            var registeredFields = _this.props.registeredFields;
            var list = [];
            if (!registeredFields) {
              return list;
            }
            var keySeq = keys(registeredFields);
            if (options && options.excludeFieldArray) {
              keySeq = keySeq.filter(function (name) {
                return getIn(registeredFields, '[\'' + name + '\'].type') !== 'FieldArray';
              });
            }
            return fromJS(keySeq.reduce(function (acc, key) {
              acc.push(key);
              return acc;
            }, list));
          }, _this.getValidators = function () {
            var validators = {};
            Object.keys(_this.fieldValidators).forEach(function (name) {
              var validator = _this.fieldValidators[name]();
              if (validator) {
                validators[name] = validator;
              }
            });
            return validators;
          }, _this.generateValidator = function () {
            var validators = _this.getValidators();
            return Object.keys(validators).length ? (0, _generateValidator2.default)(validators, structure) : undefined;
          }, _this.getWarners = function () {
            var warners = {};
            Object.keys(_this.fieldWarners).forEach(function (name) {
              var warner = _this.fieldWarners[name]();
              if (warner) {
                warners[name] = warner;
              }
            });
            return warners;
          }, _this.generateWarner = function () {
            var warners = _this.getWarners();
            return Object.keys(warners).length ? (0, _generateValidator2.default)(warners, structure) : undefined;
          }, _this.asyncValidate = function (name, value) {
            var _this$props = _this.props,
                asyncBlurFields = _this$props.asyncBlurFields,
                asyncErrors = _this$props.asyncErrors,
                asyncValidate = _this$props.asyncValidate,
                dispatch = _this$props.dispatch,
                initialized = _this$props.initialized,
                pristine = _this$props.pristine,
                shouldAsyncValidate = _this$props.shouldAsyncValidate,
                startAsyncValidation = _this$props.startAsyncValidation,
                stopAsyncValidation = _this$props.stopAsyncValidation,
                syncErrors = _this$props.syncErrors,
                values = _this$props.values;
            var submitting = !name;
            if (asyncValidate) {
              var valuesToValidate = submitting ? values : setIn(values, name, value);
              var syncValidationPasses = submitting || !getIn(syncErrors, name);
              var isBlurredField = !submitting && (!asyncBlurFields || ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+\]/g, '[]')));
              if ((isBlurredField || submitting) && shouldAsyncValidate({
                asyncErrors: asyncErrors,
                initialized: initialized,
                trigger: submitting ? 'submit' : 'blur',
                blurredField: name,
                pristine: pristine,
                syncValidationPasses: syncValidationPasses
              })) {
                return (0, _asyncValidation2.default)(function () {
                  return asyncValidate(valuesToValidate, dispatch, _this.props, name);
                }, startAsyncValidation, stopAsyncValidation, name);
              }
            }
          }, _this.submitCompleted = function (result) {
            delete _this.submitPromise;
            return result;
          }, _this.submitFailed = function (error) {
            delete _this.submitPromise;
            return error;
          }, _this.listenToSubmit = function (promise) {
            if (!(0, _isPromise2.default)(promise)) {
              return promise;
            }
            _this.submitPromise = promise;
            return promise.then(_this.submitCompleted, _this.submitFailed);
          }, _this.submit = function (submitOrEvent) {
            var _this$props2 = _this.props,
                onSubmit = _this$props2.onSubmit,
                blur = _this$props2.blur,
                change = _this$props2.change,
                dispatch = _this$props2.dispatch;
            if (!submitOrEvent || (0, _silenceEvent2.default)(submitOrEvent)) {
              if (!_this.submitPromise) {
                if (_this.innerOnSubmit && _this.innerOnSubmit !== _this.submit) {
                  return _this.innerOnSubmit();
                } else {
                  return _this.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(onSubmit), _extends({}, _this.props, (0, redux.bindActionCreators)({ blur: blur, change: change }, dispatch)), _this.props.validExceptSubmit, _this.asyncValidate, _this.getFieldList({ excludeFieldArray: true })));
                }
              }
            } else {
              return (0, _silenceEvents2.default)(function () {
                return !_this.submitPromise && _this.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(submitOrEvent), _extends({}, _this.props, (0, redux.bindActionCreators)({ blur: blur, change: change }, dispatch)), _this.props.validExceptSubmit, _this.asyncValidate, _this.getFieldList({ excludeFieldArray: true })));
              });
            }
          }, _this.reset = function () {
            return _this.props.reset();
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Form, [{
          key: 'getChildContext',
          value: function getChildContext() {
            var _this2 = this;
            return {
              _reduxForm: _extends({}, this.props, {
                getFormState: function getFormState(state) {
                  return getIn(_this2.props.getFormState(state), _this2.props.form);
                },
                asyncValidate: this.asyncValidate,
                getValues: this.getValues,
                sectionPrefix: undefined,
                register: this.register,
                unregister: this.unregister,
                registerInnerOnSubmit: function registerInnerOnSubmit(innerOnSubmit) {
                  return _this2.innerOnSubmit = innerOnSubmit;
                }
              })
            };
          }
        }, {
          key: 'initIfNeeded',
          value: function initIfNeeded(nextProps) {
            var enableReinitialize = this.props.enableReinitialize;
            if (nextProps) {
              if ((enableReinitialize || !nextProps.initialized) && !deepEqual(this.props.initialValues, nextProps.initialValues)) {
                var _keepDirty = nextProps.initialized && this.props.keepDirtyOnReinitialize;
                this.props.initialize(nextProps.initialValues, _keepDirty, {
                  lastInitialValues: this.props.initialValues
                });
              }
            } else if (this.props.initialValues && (!this.props.initialized || enableReinitialize)) {
              this.props.initialize(this.props.initialValues, this.props.keepDirtyOnReinitialize);
            }
          }
        }, {
          key: 'updateSyncErrorsIfNeeded',
          value: function updateSyncErrorsIfNeeded(nextSyncErrors, nextError, lastSyncErrors) {
            var _props = this.props,
                error = _props.error,
                updateSyncErrors = _props.updateSyncErrors;
            var noErrors = (!lastSyncErrors || !Object.keys(lastSyncErrors).length) && !error;
            var nextNoErrors = (!nextSyncErrors || !Object.keys(nextSyncErrors).length) && !nextError;
            if (!(noErrors && nextNoErrors) && (!_plain2.default.deepEqual(lastSyncErrors, nextSyncErrors) || !_plain2.default.deepEqual(error, nextError))) {
              updateSyncErrors(nextSyncErrors, nextError);
            }
          }
        }, {
          key: 'clearSubmitPromiseIfNeeded',
          value: function clearSubmitPromiseIfNeeded(nextProps) {
            var submitting = this.props.submitting;
            if (this.submitPromise && submitting && !nextProps.submitting) {
              delete this.submitPromise;
            }
          }
        }, {
          key: 'submitIfNeeded',
          value: function submitIfNeeded(nextProps) {
            var _props2 = this.props,
                clearSubmit = _props2.clearSubmit,
                triggerSubmit = _props2.triggerSubmit;
            if (!triggerSubmit && nextProps.triggerSubmit) {
              clearSubmit();
              this.submit();
            }
          }
        }, {
          key: 'validateIfNeeded',
          value: function validateIfNeeded(nextProps) {
            var _props3 = this.props,
                shouldValidate = _props3.shouldValidate,
                validate = _props3.validate,
                values = _props3.values;
            var fieldLevelValidate = this.generateValidator();
            if (validate || fieldLevelValidate) {
              var initialRender = nextProps === undefined;
              var fieldValidatorKeys = Object.keys(this.getValidators());
              var shouldValidateResult = shouldValidate({
                values: values,
                nextProps: nextProps,
                props: this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: this.lastFieldValidatorKeys,
                fieldValidatorKeys: fieldValidatorKeys,
                structure: structure
              });
              if (shouldValidateResult) {
                var propsToValidate = initialRender || !nextProps ? this.props : nextProps;
                var _merge2 = (0, _merge5.default)(validate ? validate(propsToValidate.values, propsToValidate) || {} : {}, fieldLevelValidate ? fieldLevelValidate(propsToValidate.values, propsToValidate) || {} : {}),
                    _error = _merge2._error,
                    nextSyncErrors = _objectWithoutProperties(_merge2, ['_error']);
                this.lastFieldValidatorKeys = fieldValidatorKeys;
                this.updateSyncErrorsIfNeeded(nextSyncErrors, _error, propsToValidate.syncErrors);
              }
            }
          }
        }, {
          key: 'updateSyncWarningsIfNeeded',
          value: function updateSyncWarningsIfNeeded(nextSyncWarnings, nextWarning, lastSyncWarnings) {
            var _props4 = this.props,
                warning = _props4.warning,
                syncWarnings = _props4.syncWarnings,
                updateSyncWarnings = _props4.updateSyncWarnings;
            var noWarnings = (!syncWarnings || !Object.keys(syncWarnings).length) && !warning;
            var nextNoWarnings = (!nextSyncWarnings || !Object.keys(nextSyncWarnings).length) && !nextWarning;
            if (!(noWarnings && nextNoWarnings) && (!_plain2.default.deepEqual(lastSyncWarnings, nextSyncWarnings) || !_plain2.default.deepEqual(warning, nextWarning))) {
              updateSyncWarnings(nextSyncWarnings, nextWarning);
            }
          }
        }, {
          key: 'warnIfNeeded',
          value: function warnIfNeeded(nextProps) {
            var _props5 = this.props,
                shouldValidate = _props5.shouldValidate,
                warn = _props5.warn,
                values = _props5.values;
            var fieldLevelWarn = this.generateWarner();
            if (warn || fieldLevelWarn) {
              var initialRender = nextProps === undefined;
              var fieldWarnerKeys = Object.keys(this.getWarners());
              var shouldWarnResult = shouldValidate({
                values: values,
                nextProps: nextProps,
                props: this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: this.lastFieldWarnerKeys,
                fieldValidatorKeys: fieldWarnerKeys,
                structure: structure
              });
              if (shouldWarnResult) {
                var propsToWarn = initialRender || !nextProps ? this.props : nextProps;
                var _merge3 = (0, _merge5.default)(warn ? warn(propsToWarn.values, propsToWarn) : {}, fieldLevelWarn ? fieldLevelWarn(propsToWarn.values, propsToWarn) : {}),
                    _warning = _merge3._warning,
                    nextSyncWarnings = _objectWithoutProperties(_merge3, ['_warning']);
                this.lastFieldWarnerKeys = fieldWarnerKeys;
                this.updateSyncWarningsIfNeeded(nextSyncWarnings, _warning, propsToWarn.syncWarnings);
              }
            }
          }
        }, {
          key: 'componentWillMount',
          value: function componentWillMount() {
            this.initIfNeeded();
            this.validateIfNeeded();
            this.warnIfNeeded();
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            this.initIfNeeded(nextProps);
            this.validateIfNeeded(nextProps);
            this.warnIfNeeded(nextProps);
            this.clearSubmitPromiseIfNeeded(nextProps);
            this.submitIfNeeded(nextProps);
            var onChange = nextProps.onChange,
                values = nextProps.values,
                dispatch = nextProps.dispatch;
            if (onChange && !deepEqual(values, this.props.values)) {
              onChange(values, dispatch, nextProps);
            }
          }
        }, {
          key: 'shouldComponentUpdate',
          value: function shouldComponentUpdate(nextProps) {
            var _this3 = this;
            if (!this.props.pure) return true;
            var _config$immutableProp = config.immutableProps,
                immutableProps = _config$immutableProp === undefined ? [] : _config$immutableProp;
            return Object.keys(nextProps).some(function (prop) {
              if (~immutableProps.indexOf(prop)) {
                return _this3.props[prop] !== nextProps[prop];
              }
              return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
            });
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var _props6 = this.props,
                destroyOnUnmount = _props6.destroyOnUnmount,
                destroy = _props6.destroy;
            if (destroyOnUnmount) {
              this.destroyed = true;
              destroy();
            }
          }
        }, {
          key: 'render',
          value: function render() {
            var _props7 = this.props,
                anyTouched = _props7.anyTouched,
                arrayInsert = _props7.arrayInsert,
                arrayMove = _props7.arrayMove,
                arrayPop = _props7.arrayPop,
                arrayPush = _props7.arrayPush,
                arrayRemove = _props7.arrayRemove,
                arrayRemoveAll = _props7.arrayRemoveAll,
                arrayShift = _props7.arrayShift,
                arraySplice = _props7.arraySplice,
                arraySwap = _props7.arraySwap,
                arrayUnshift = _props7.arrayUnshift,
                asyncErrors = _props7.asyncErrors,
                asyncValidate = _props7.asyncValidate,
                asyncValidating = _props7.asyncValidating,
                blur = _props7.blur,
                change = _props7.change,
                clearSubmit = _props7.clearSubmit,
                destroy = _props7.destroy,
                destroyOnUnmount = _props7.destroyOnUnmount,
                forceUnregisterOnUnmount = _props7.forceUnregisterOnUnmount,
                dirty = _props7.dirty,
                dispatch = _props7.dispatch,
                enableReinitialize = _props7.enableReinitialize,
                error = _props7.error,
                focus = _props7.focus,
                form = _props7.form,
                getFormState = _props7.getFormState,
                initialize = _props7.initialize,
                initialized = _props7.initialized,
                initialValues = _props7.initialValues,
                invalid = _props7.invalid,
                keepDirtyOnReinitialize = _props7.keepDirtyOnReinitialize,
                pristine = _props7.pristine,
                propNamespace = _props7.propNamespace,
                registeredFields = _props7.registeredFields,
                registerField = _props7.registerField,
                reset = _props7.reset,
                setSubmitFailed = _props7.setSubmitFailed,
                setSubmitSucceeded = _props7.setSubmitSucceeded,
                shouldAsyncValidate = _props7.shouldAsyncValidate,
                shouldValidate = _props7.shouldValidate,
                startAsyncValidation = _props7.startAsyncValidation,
                startSubmit = _props7.startSubmit,
                stopAsyncValidation = _props7.stopAsyncValidation,
                stopSubmit = _props7.stopSubmit,
                submitting = _props7.submitting,
                submitFailed = _props7.submitFailed,
                submitSucceeded = _props7.submitSucceeded,
                touch = _props7.touch,
                touchOnBlur = _props7.touchOnBlur,
                touchOnChange = _props7.touchOnChange,
                persistentSubmitErrors = _props7.persistentSubmitErrors,
                syncErrors = _props7.syncErrors,
                syncWarnings = _props7.syncWarnings,
                unregisterField = _props7.unregisterField,
                untouch = _props7.untouch,
                updateSyncErrors = _props7.updateSyncErrors,
                updateSyncWarnings = _props7.updateSyncWarnings,
                valid = _props7.valid,
                validExceptSubmit = _props7.validExceptSubmit,
                values = _props7.values,
                warning = _props7.warning,
                rest = _objectWithoutProperties(_props7, ['anyTouched', 'arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncErrors', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'clearSubmit', 'destroy', 'destroyOnUnmount', 'forceUnregisterOnUnmount', 'dirty', 'dispatch', 'enableReinitialize', 'error', 'focus', 'form', 'getFormState', 'initialize', 'initialized', 'initialValues', 'invalid', 'keepDirtyOnReinitialize', 'pristine', 'propNamespace', 'registeredFields', 'registerField', 'reset', 'setSubmitFailed', 'setSubmitSucceeded', 'shouldAsyncValidate', 'shouldValidate', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitting', 'submitFailed', 'submitSucceeded', 'touch', 'touchOnBlur', 'touchOnChange', 'persistentSubmitErrors', 'syncErrors', 'syncWarnings', 'unregisterField', 'untouch', 'updateSyncErrors', 'updateSyncWarnings', 'valid', 'validExceptSubmit', 'values', 'warning']);
            var reduxFormProps = _extends({
              anyTouched: anyTouched,
              asyncValidate: this.asyncValidate,
              asyncValidating: asyncValidating
            }, (0, redux.bindActionCreators)({ blur: blur, change: change }, dispatch), {
              clearSubmit: clearSubmit,
              destroy: destroy,
              dirty: dirty,
              dispatch: dispatch,
              error: error,
              form: form,
              handleSubmit: this.submit,
              initialize: initialize,
              initialized: initialized,
              initialValues: initialValues,
              invalid: invalid,
              pristine: pristine,
              reset: reset,
              submitting: submitting,
              submitFailed: submitFailed,
              submitSucceeded: submitSucceeded,
              touch: touch,
              untouch: untouch,
              valid: valid,
              warning: warning
            });
            var propsToPass = _extends({}, propNamespace ? _defineProperty({}, propNamespace, reduxFormProps) : reduxFormProps, rest);
            if (isClassComponent(WrappedComponent)) {
              propsToPass.ref = 'wrapped';
            }
            return (0, _react.createElement)(WrappedComponent, propsToPass);
          }
        }]);
        return Form;
      }(_react.Component);
      Form.displayName = 'Form(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
      Form.WrappedComponent = WrappedComponent;
      Form.childContextTypes = {
        _reduxForm: _propTypes2.default.object.isRequired
      };
      Form.propTypes = {
        destroyOnUnmount: _propTypes2.default.bool,
        forceUnregisterOnUnmount: _propTypes2.default.bool,
        form: _propTypes2.default.string.isRequired,
        initialValues: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
        getFormState: _propTypes2.default.func,
        onSubmitFail: _propTypes2.default.func,
        onSubmitSuccess: _propTypes2.default.func,
        propNamespace: _propTypes2.default.string,
        validate: _propTypes2.default.func,
        warn: _propTypes2.default.func,
        touchOnBlur: _propTypes2.default.bool,
        touchOnChange: _propTypes2.default.bool,
        triggerSubmit: _propTypes2.default.bool,
        persistentSubmitErrors: _propTypes2.default.bool,
        registeredFields: _propTypes2.default.any
      };
      var connector = (0, reactRedux.connect)(function (state, props) {
        var form = props.form,
            getFormState = props.getFormState,
            initialValues = props.initialValues,
            enableReinitialize = props.enableReinitialize,
            keepDirtyOnReinitialize = props.keepDirtyOnReinitialize;
        var formState = getIn(getFormState(state) || empty, form) || empty;
        var stateInitial = getIn(formState, 'initial');
        var initialized = !!stateInitial;
        var shouldUpdateInitialValues = enableReinitialize && initialized && !deepEqual(initialValues, stateInitial);
        var shouldResetValues = shouldUpdateInitialValues && !keepDirtyOnReinitialize;
        var initial = initialValues || stateInitial || empty;
        if (shouldUpdateInitialValues) {
          initial = stateInitial || empty;
        }
        var values = getIn(formState, 'values') || initial;
        if (shouldResetValues) {
          values = initial;
        }
        var pristine = shouldResetValues || deepEqual(initial, values);
        var asyncErrors = getIn(formState, 'asyncErrors');
        var syncErrors = getIn(formState, 'syncErrors') || {};
        var syncWarnings = getIn(formState, 'syncWarnings') || {};
        var registeredFields = getIn(formState, 'registeredFields');
        var valid = isValid$$1(form, getFormState, false)(state);
        var validExceptSubmit = isValid$$1(form, getFormState, true)(state);
        var anyTouched = !!getIn(formState, 'anyTouched');
        var submitting = !!getIn(formState, 'submitting');
        var submitFailed = !!getIn(formState, 'submitFailed');
        var submitSucceeded = !!getIn(formState, 'submitSucceeded');
        var error = getIn(formState, 'error');
        var warning = getIn(formState, 'warning');
        var triggerSubmit = getIn(formState, 'triggerSubmit');
        return {
          anyTouched: anyTouched,
          asyncErrors: asyncErrors,
          asyncValidating: getIn(formState, 'asyncValidating') || false,
          dirty: !pristine,
          error: error,
          initialized: initialized,
          invalid: !valid,
          pristine: pristine,
          registeredFields: registeredFields,
          submitting: submitting,
          submitFailed: submitFailed,
          submitSucceeded: submitSucceeded,
          syncErrors: syncErrors,
          syncWarnings: syncWarnings,
          triggerSubmit: triggerSubmit,
          values: values,
          valid: valid,
          validExceptSubmit: validExceptSubmit,
          warning: warning
        };
      }, function (dispatch, initialProps) {
        var bindForm = function bindForm(actionCreator) {
          return actionCreator.bind(null, initialProps.form);
        };
        var boundFormACs = (0, _mapValues3.default)(formActions, bindForm);
        var boundArrayACs = (0, _mapValues3.default)(arrayActions, bindForm);
        var boundBlur = function boundBlur(field, value) {
          return blur(initialProps.form, field, value, !!initialProps.touchOnBlur);
        };
        var boundChange = function boundChange(field, value) {
          return change(initialProps.form, field, value, !!initialProps.touchOnChange, !!initialProps.persistentSubmitErrors);
        };
        var boundFocus = bindForm(focus);
        var connectedFormACs = (0, redux.bindActionCreators)(boundFormACs, dispatch);
        var connectedArrayACs = {
          insert: (0, redux.bindActionCreators)(boundArrayACs.arrayInsert, dispatch),
          move: (0, redux.bindActionCreators)(boundArrayACs.arrayMove, dispatch),
          pop: (0, redux.bindActionCreators)(boundArrayACs.arrayPop, dispatch),
          push: (0, redux.bindActionCreators)(boundArrayACs.arrayPush, dispatch),
          remove: (0, redux.bindActionCreators)(boundArrayACs.arrayRemove, dispatch),
          removeAll: (0, redux.bindActionCreators)(boundArrayACs.arrayRemoveAll, dispatch),
          shift: (0, redux.bindActionCreators)(boundArrayACs.arrayShift, dispatch),
          splice: (0, redux.bindActionCreators)(boundArrayACs.arraySplice, dispatch),
          swap: (0, redux.bindActionCreators)(boundArrayACs.arraySwap, dispatch),
          unshift: (0, redux.bindActionCreators)(boundArrayACs.arrayUnshift, dispatch)
        };
        var computedActions = _extends({}, connectedFormACs, boundArrayACs, {
          blur: boundBlur,
          change: boundChange,
          array: connectedArrayACs,
          focus: boundFocus,
          dispatch: dispatch
        });
        return function () {
          return computedActions;
        };
      }, undefined, { withRef: true });
      var ConnectedForm = (0, _hoistNonReactStatics2.default)(connector(Form), WrappedComponent);
      ConnectedForm.defaultProps = config;
      return function (_Component2) {
        _inherits(ReduxForm, _Component2);
        function ReduxForm() {
          _classCallCheck(this, ReduxForm);
          return _possibleConstructorReturn(this, (ReduxForm.__proto__ || Object.getPrototypeOf(ReduxForm)).apply(this, arguments));
        }
        _createClass(ReduxForm, [{
          key: 'submit',
          value: function submit() {
            return this.ref && this.ref.getWrappedInstance().submit();
          }
        }, {
          key: 'reset',
          value: function reset() {
            if (this.ref) {
              this.ref.getWrappedInstance().reset();
            }
          }
        }, {
          key: 'render',
          value: function render() {
            var _this5 = this;
            var _props8 = this.props,
                initialValues = _props8.initialValues,
                rest = _objectWithoutProperties(_props8, ['initialValues']);
            return (0, _react.createElement)(ConnectedForm, _extends({}, rest, {
              ref: function ref(_ref3) {
                return _this5.ref = _ref3;
              },
              initialValues: fromJS(initialValues)
            }));
          }
        }, {
          key: 'valid',
          get: function get() {
            return !!(this.ref && this.ref.getWrappedInstance().isValid());
          }
        }, {
          key: 'invalid',
          get: function get() {
            return !this.valid;
          }
        }, {
          key: 'pristine',
          get: function get() {
            return !!(this.ref && this.ref.getWrappedInstance().isPristine());
          }
        }, {
          key: 'dirty',
          get: function get() {
            return !this.pristine;
          }
        }, {
          key: 'values',
          get: function get() {
            return this.ref ? this.ref.getWrappedInstance().getValues() : empty;
          }
        }, {
          key: 'fieldList',
          get: function get() {
            return this.ref ? this.ref.getWrappedInstance().getFieldList() : [];
          }
        }, {
          key: 'wrappedInstance',
          get: function get() {
            return this.ref && this.ref.getWrappedInstance().refs.wrapped;
          }
        }]);
        return ReduxForm;
      }(_react.Component);
    };
  };
};
exports.default = createReduxForm;
});
unwrapExports(createReduxForm_1);

var reduxForm = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createReduxForm2 = _interopRequireDefault(createReduxForm_1);
var _immutable2 = _interopRequireDefault(immutable);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = (0, _createReduxForm2.default)(_immutable2.default);
});
var reduxForm$1 = unwrapExports(reduxForm);

var Button_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  theme: _theme2.default,
  tag: 'button',
  color: 'secondary'
};
var ButtonUnstyled = function (_React$Component) {
  _inherits(ButtonUnstyled, _React$Component);
  function ButtonUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, ButtonUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonUnstyled.__proto__ || Object.getPrototypeOf(ButtonUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(ButtonUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          active = _omit.active,
          disabled = _omit.disabled,
          block = _omit.block,
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          color = _omit.color,
          outline = _omit.outline,
          size = _omit.size,
          getRef = _omit.getRef,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['active', 'disabled', 'block', 'className', 'cssModule', 'dropup', 'color', 'outline', 'size', 'getRef', 'tag']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'btn', (_cn = {
        dropup: dropup,
        active: active,
        disabled: disabled
      }, _defineProperty(_cn, 'btn-' + size, size), _defineProperty(_cn, 'btn-block', block), _cn), 'btn' + (outline ? '-outline' : '') + '-' + color), cssModule);
      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }
      return _react2.default.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined,
        className: classes,
        ref: getRef
      }, attributes, {
        onClick: this.onClick
      }));
    }
  }]);
  return ButtonUnstyled;
}(_react2.default.Component);
ButtonUnstyled.propTypes = {
  active: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  outline: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  getRef: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.string,
  dropup: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  theme: _propTypes2.default.object
};
var Button = (0, _styledComponents2.default)(ButtonUnstyled).withConfig({
  displayName: 'Button'
})(['', ' '], function (props) {
  return '\n    ' + (0, buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Button.defaultProps = defaultProps;
exports.default = Button;
module.exports = exports['default'];
});
unwrapExports(Button_1);

var navDivider_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navDivider = navDivider;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$spacer-y': '1rem'
};
function navDivider() {
  var spacerY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$spacer-y'];
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e5e5e5';
  var marginY = '' + _unitUtils2.default.rmUnit(spacerY, _unitUtils2.default.UNIT.REM) / 2 + _unitUtils2.default.UNIT.REM;
  return '\n    height: 1px;\n    margin: calc(' + marginY + ' / 2) 0;\n    overflow: hidden;\n    background-color: ' + dividerColor + ';\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  navDivider: navDivider
};
});
unwrapExports(navDivider_1);

var buttonGroup_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.buttonGroup = buttonGroup;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-shadows': true,
  '$enable-rounded': true,
  '$input-btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0,0,0,.125)',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-y-sm': '.25rem',
  '$btn-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-border-width': '1px'
};
function buttonGroup() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-rounded'];
  var $inputBtnBorderWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$btn-padding-x'];
  var $btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-active-box-shadow'];
  var $btnPaddingXLg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$btn-border-radius-sm'];
  return ' \n    /*  Make the div behave like a button */\n    &.btn-group,\n    & .btn-group,\n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      position: relative;\n      display: inline-flex;\n      vertical-align: middle; /* match .btn alignment given font-size hack above */\n    \n      > .btn {\n        position: relative;\n        flex: 0 1 auto;\n        margin-bottom: 0;\n    \n        /* Bring the "active" button to the front */\n        &:focus,\n        &:active,\n        &.active {\n          z-index: 2;\n        }\n        ' + (0, hover_1.hover)('\n          z-index: 2;\n        ') + '\n      }\n    }\n    \n    /*  Prevent double borders when buttons are next to each other */\n    &.btn-group,\n    & .btn-group {\n      .btn + .btn,\n      .btn + .btn-group,\n      .btn-group + .btn,\n      .btn-group + .btn-group {\n        margin-left: -' + $inputBtnBorderWidth + ';\n      }\n    }\n    \n    /* Optional: Group multiple button groups together for a toolbar */\n    &.btn-toolbar,\n    & .btn-toolbar {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n    \n      .input-group {\n        width: auto;\n      }\n    }\n     \n    &.btn-group,\n    & .btn-group {\n      > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n        border-radius: 0;\n      }\n    }\n    \n    /* Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match */\n    &.btn-group,\n    & .btn-group {\n      > .btn:first-child {\n        margin-left: 0;\n    \n        &:not(:last-child):not(.dropdown-toggle) {\n          ' + (0, borderRadius_1.borderRightRadius)($enableRounded, '0') + '\n        }\n      }\n    }\n    /* Need .dropdown-toggle since :last-child does not apply given a .dropdown-menu immediately after it */\n    &.btn-group > .btn:last-child:not(:first-child),\n    & .btn-group > .btn:last-child:not(:first-child),\n    &.btn-group > .dropdown-toggle:not(:first-child),\n    & .btn-group > .dropdown-toggle:not(:first-child) {\n      ' + (0, borderRadius_1.borderLeftRadius)($enableRounded, '0') + '\n    }\n    \n    /* Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group) */\n    &.btn-group > .btn-group,\n    & .btn-group > .btn-group {\n      float: left;\n    }\n    &.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    &.btn-group > .btn-group:first-child:not(:last-child),\n    & .btn-group > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + (0, borderRadius_1.borderRightRadius)($enableRounded, '0') + '\n      }\n    }\n    &.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + (0, borderRadius_1.borderLeftRadius)($enableRounded, '0') + '\n    }\n    \n    /* On active and open, do not show outline */\n    &.btn-group .dropdown-toggle:active,\n    & .btn-group .dropdown-toggle:active,\n    &.btn-group.open .dropdown-toggle,\n    & .btn-group.open .dropdown-toggle {\n      outline: 0;\n    }\n    \n    \n    /* \n    Sizing Remix the default button sizing classes into new ones for easier manipulation.\n    */\n    \n    &.btn-group-sm > .btn,\n    & .btn-group-sm > .btn { \n      ' + (0, buttons.buttonSize)($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n    &.btn-group-lg > .btn,\n    & .btn-group-lg > .btn {\n      ' + (0, buttons.buttonSize)($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n    \n    /*\n     Split button dropdowns\n    */\n    \n    & .btn + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingX, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingX, 0.75) + ';\n    \n      &::after {\n        margin-left: 0;\n      }\n    }\n    \n    & .btn-sm + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingXSm, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingXSm, 0.75) + ';\n    }\n    \n    & .btn-lg + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingXLg, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingXLg, 0.75) + ';\n    }\n    \n    \n    /* The clickable button for toggling the menu */\n    /* Remove the gradient and set the same inset shadow as the :active state */\n    &.btn-group.open .dropdown-toggle {\n      ' + (0, boxShadow_1.boxShadow)($enableShadows, $btnActiveBoxShadow) + '\n    \n      /* Show no shadow for .btn-link since it has no other button styles. */\n      &.btn-link {\n        ' + (0, boxShadow_1.boxShadow)($enableShadows, 'none') + '\n      }\n    }\n\n    /*\n     Vertical button groups\n    */\n    \n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      display: inline-flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n    \n      .btn,\n      .btn-group {\n        width: 100%;\n      }\n      \n      > .btn + .btn,\n      > .btn + .btn-group,\n      > .btn-group + .btn,\n      > .btn-group + .btn-group {\n        margin-top: -' + $inputBtnBorderWidth + ';\n        margin-left: 0;\n      }\n    }\n    \n    &.btn-group-vertical > .btn,\n    & .btn-group-vertical > .btn {\n      &:not(:first-child):not(:last-child) {\n        border-radius: 0;\n      }\n      &:first-child:not(:last-child) {\n        ' + (0, borderRadius_1.borderBottomRadius)($enableRounded, '0') + '\n      }\n      &:last-child:not(:first-child) {\n        ' + (0, borderRadius_1.borderTopRadius)($enableRounded, '0') + '\n      }\n    }\n    \n    &.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    \n    &.btn-group-vertical > .btn-group:first-child:not(:last-child),\n    & .btn-group-vertical > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + (0, borderRadius_1.borderBottomRadius)($enableRounded, '0') + '      \n      }\n    }\n    &.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + (0, borderRadius_1.borderTopRadius)($enableRounded, '0') + '\n    }\n    \n    &.btn-group {\n      > .btn,\n      > .btn-group > .btn {\n        input[type="radio"],\n        input[type="checkbox"] {\n          position: absolute;\n          clip: rect(0,0,0,0);\n          pointer-events: none;\n        }\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  buttonGroup: buttonGroup
};
});
unwrapExports(buttonGroup_1);

var DropdownMenu_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  children: _propTypes2.default.node.isRequired,
  right: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
var defaultProps = {
  tag: 'div'
};
var contextTypes = {
  isOpen: _propTypes2.default.bool.isRequired
};
var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag']);
  var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'dropdown-menu', { 'dropdown-menu-right': right }), cssModule);
  return _react2.default.createElement(Tag, _extends({}, attributes, { tabIndex: '-1', 'aria-hidden': !context.isOpen, role: 'menu', className: classes }));
};
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;
exports.default = DropdownMenu;
module.exports = exports['default'];
});
unwrapExports(DropdownMenu_1);

var tether = createCommonjsModule(function (module, exports) {
(function(root, factory) {
  if (typeof undefined === 'function' && undefined.amd) {
    undefined(factory);
  } else {
    module.exports = factory(commonjsRequire, exports, module);
  }
}(commonjsGlobal, function(require, exports, module) {
'use strict';
var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
var _get = function get(_x8, _x9, _x10) { var _again = true; _function: while (_again) { var object = _x8, property = _x9, receiver = _x10; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x8 = parent; _x9 = property; _x10 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var TetherBase = { modules: [] };
var zeroElement = null;
var deferred = [];
var defer = function defer(fn) {
  deferred.push(fn);
};
var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};
function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  args.forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });
  return out;
}
function getClassName(el) {
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}
function setClassName(el, className) {
  el.setAttribute('class', className);
}
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }
  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }
  return rect;
}
function getScrollParents(el) {
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];
  if (position === 'fixed') {
    return [el];
  }
  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}
    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }
    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }
  parents.push(el.ownerDocument.body);
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }
  return parents;
}
var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();
var zeroPosCache = {};
var getOrigin = function getOrigin() {
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });
    document.body.appendChild(node);
    zeroElement = node;
  }
  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);
    defer(function () {
      delete zeroPosCache[id];
    });
  }
  return zeroPosCache[id];
};
function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
}
function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }
  var docEl = doc.documentElement;
  var box = getActualBoundingClientRect(el);
  var origin = getOrigin();
  box.top -= origin.top;
  box.left -= origin.left;
  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }
  box.top -= docEl.clientTop;
  box.left -= docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;
  return box;
}
function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}
var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';
  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;
  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }
  document.body.removeChild(outer);
  var width = widthContained - widthScroll;
  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}
function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}
function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}
function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}
function updateClasses(el, add, all) {
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });
  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}
var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }
  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }
      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;
          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }
          handler.apply(context, args);
          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);
  return Evented;
})();
function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
  return a + diff >= b && b >= a - diff;
}
var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');
  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
  return '';
})();
var tethers = [];
var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};
function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}
(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;
  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      lastDuration = Math.min(lastDuration - 16, 250);
      pendingTimeout = setTimeout(tick, 250);
      return;
    }
    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      return;
    }
    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }
    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };
  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();
var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};
var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};
var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};
var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;
  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }
  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }
  return { left: left, top: top };
};
var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;
  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }
  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }
  return { left: left, top: top };
};
function addOffset() {
  var out = { top: 0, left: 0 };
  for (var _len3 = arguments.length, offsets = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    offsets[_key3] = arguments[_key3];
  }
  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;
    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }
    out.top += top;
    out.left += left;
  });
  return out;
}
function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }
  return offset;
}
var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');
  var _value$split2 = _slicedToArray(_value$split, 2);
  var top = _value$split2[0];
  var left = _value$split2[1];
  return { top: top, left: left };
};
var parseAttachment = parseOffset;
var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);
  function TetherClass(options) {
    var _this = this;
    _classCallCheck(this, TetherClass);
    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);
    tethers.push(this);
    this.history = [];
    this.setOptions(options, false);
    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });
    this.position();
  }
  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;
      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      }
      if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      }
      return key;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;
      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };
      this.options = extend(defaults, options);
      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;
      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;
      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }
      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }
        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });
      addClass(this.element, this.getClass('element'));
      if (this.options.addTargetClasses !== false) {
        addClass(this.target, this.getClass('target'));
      }
      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }
      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);
      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }
      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }
      if (this.options.enabled !== false) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          }
          var bounds = getBounds(this.target);
          var out = {
            height: bounds.height,
            width: bounds.width,
            top: bounds.top,
            left: bounds.left
          };
          out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
          out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
          out.height = Math.min(innerHeight, out.height);
          out.height -= 2;
          out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
          out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
          out.width = Math.min(innerWidth, out.width);
          out.width -= 2;
          if (out.top < pageYOffset) {
            out.top = pageYOffset;
          }
          if (out.left < pageXOffset) {
            out.left = pageXOffset;
          }
          return out;
        }
        if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;
            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }
          var style = getComputedStyle(target);
          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }
          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };
          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }
          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }
          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }
          return out;
        }
      }
      return getBounds(this.target);
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }
      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }
      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;
      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      if (this.options.addTargetClasses !== false) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;
      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });
      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;
      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;
      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;
      this.disable();
      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;
      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }
      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;
      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }
      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });
      defer(function () {
        if (typeof _this6._addAttachClasses === 'undefined') {
          return;
        }
        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (_this6.options.addTargetClasses !== false) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }
        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;
      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      if (!this.enabled) {
        return undefined;
      }
      this.clearCache();
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
      this.updateAttachClasses(this.attachment, targetAttachment);
      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });
      var width = elementPos.width;
      var height = elementPos.height;
      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }
      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
      var scrollbarSize = undefined;
      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;
      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });
        if (ret === false) {
          return false;
        }
        if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        }
        top = ret.top;
        left = ret.left;
      }
      var next = {
        page: { top: top, left: left },
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };
      var doc = this.target.ownerDocument;
      var win = doc.defaultView;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }
      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }
      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }
      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;
          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });
          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }
      this.move(next);
      this.history.unshift(next);
      if (this.history.length > 3) {
        this.history.pop();
      }
      if (flushChanges) {
        flush();
      }
      return true;
    }
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;
      if (typeof this.element.parentNode === 'undefined') {
        return;
      }
      var same = {};
      for (var type in pos) {
        same[type] = {};
        for (var key in pos[type]) {
          var found = false;
          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }
          if (!found) {
            same[type][key] = true;
          }
        }
      }
      var css = { top: '', left: '', right: '', bottom: '' };
      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }
          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }
          if (window.matchMedia) {
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }
          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
          if (transformKey !== 'msTransform') {
            css[transformKey] += ' translateZ(0)';
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }
          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };
      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });
          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }
          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }
      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }
            currentNode = currentNode.parentNode;
          }
          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];
        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }
      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);
  return TetherClass;
})(Evented);
TetherClass.modules = [];
TetherBase.position = position;
var Tether = extend(TetherClass, TetherBase);
var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }
  if (to === document) {
    to = to.documentElement;
  }
  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);
      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }
      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }
  return to;
}
TetherBase.modules.push({
  position: function position(_ref2) {
    var _this9 = this;
    var top = _ref2.top;
    var left = _ref2.left;
    var targetAttachment = _ref2.targetAttachment;
    if (!this.options.constraints) {
      return true;
    }
    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this9.element);
    });
    var height = _cache.height;
    var width = _cache.width;
    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize2 = this.lastSize;
      width = _lastSize2.width;
      height = _lastSize2.height;
    }
    var targetSize = this.cache('target-bounds', function () {
      return _this9.getTargetBounds();
    });
    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;
    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;
      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });
    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });
    var addClasses = [];
    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);
    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;
      if (typeof attachment === 'undefined') {
        attachment = '';
      }
      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');
        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }
      var bounds = getBoundingRect(_this9, to);
      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }
        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }
      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';
            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';
            eAttachment.top = 'bottom';
          }
        }
        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';
            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';
            eAttachment.top = 'top';
          }
        }
        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }
      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }
        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }
      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';
            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';
            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }
      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }
        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }
      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }
        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }
      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }
      pin = pin || [];
      var pinned = [];
      var oob = [];
      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }
      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }
      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }
      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }
      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this9.options.pinnedClass !== 'undefined') {
            pinnedClass = _this9.options.pinnedClass;
          } else {
            pinnedClass = _this9.getClass('pinned');
          }
          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }
      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this9.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this9.options.outOfBoundsClass;
          } else {
            oobClass = _this9.getClass('out-of-bounds');
          }
          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }
      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }
      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this9.attachment.top || eAttachment.left !== _this9.attachment.left) {
        _this9.updateAttachClasses(eAttachment, tAttachment);
        _this9.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });
    defer(function () {
      if (_this9.options.addTargetClasses !== false) {
        updateClasses(_this9.target, addClasses, allClasses);
      }
      updateClasses(_this9.element, addClasses, allClasses);
    });
    return { top: top, left: left };
  }
});
TetherBase.modules.push({
  position: function position(_ref3) {
    var _this10 = this;
    var top = _ref3.top;
    var left = _ref3.left;
    var _cache2 = this.cache('element-bounds', function () {
      return getBounds(_this10.element);
    });
    var height = _cache2.height;
    var width = _cache2.width;
    var targetPos = this.getTargetBounds();
    var bottom = top + height;
    var right = left + width;
    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }
    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }
    var allClasses = [];
    var addClasses = [];
    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this10.getClass('abutted') + '-' + side);
    });
    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }
    abutted.forEach(function (side) {
      addClasses.push(_this10.getClass('abutted') + '-' + side);
    });
    defer(function () {
      if (_this10.options.addTargetClasses !== false) {
        updateClasses(_this10.target, addClasses, allClasses);
      }
      updateClasses(_this10.element, addClasses, allClasses);
    });
    return true;
  }
});
TetherBase.modules.push({
  position: function position(_ref4) {
    var top = _ref4.top;
    var left = _ref4.left;
    if (!this.options.shift) {
      return undefined;
    }
    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }
    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];
      var _shift = shift;
      var _shift2 = _slicedToArray(_shift, 2);
      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];
      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }
    top += shiftTop;
    left += shiftLeft;
    return { top: top, left: left };
  }
});
return Tether;
}));
});

var TetherContent_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactDom2 = _interopRequireDefault(_reactDom);
var _tetherFix2 = _interopRequireDefault(tether);
var _lodash2 = _interopRequireDefault(lodash_omit);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  isOpen: false,
  tetherRef: function tetherRef() {}
};
var TetherContent = function (_React$Component) {
  _inherits(TetherContent, _React$Component);
  function TetherContent() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, TetherContent);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TetherContent.__proto__ || Object.getPrototypeOf(TetherContent)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.handleProps();
    }, _this.componentDidUpdate = function (prevProps) {
      if (_this.props.isOpen !== prevProps.isOpen) {
        _this.handleProps();
      } else if (_this.element) {
        _this.renderIntoSubtree();
      }
    }, _this.componentWillUnmount = function () {
      _this.hide();
    }, _this.getTarget = function () {
      var target = _this.props.tether.target;
      if ((0, _lodash2.default)(target)) {
        return target();
      }
      return target;
    }, _this.getTetherConfig = function () {
      var config = _extends({}, _this.props.tether);
      config.element = _this.element;
      config.target = _this.getTarget();
      return config;
    }, _this.handleDocumentClick = function (e) {
      var container = _this.element;
      if (e.target === container || !container.contains(e.target)) {
        _this.toggle();
      }
    }, _this.handleProps = function () {
      if (_this.props.isOpen) {
        _this.show();
      } else {
        _this.hide();
      }
    }, _this.hide = function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);
      if (_this.element) {
        document.body.removeChild(_this.element);
        _reactDom2.default.unmountComponentAtNode(_this.element);
        _this.element = null;
      }
      if (_this.tether) {
        _this.tether.destroy();
        _this.tether = null;
        _this.props.tetherRef(_this.tether);
      }
    }, _this.show = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
      _this.element = document.createElement('div');
      _this.element.className = _this.props.className;
      document.body.appendChild(_this.element);
      _this.renderIntoSubtree();
      _this.tether = new _tetherFix2.default(_this.getTetherConfig());
      _this.props.tetherRef(_this.tether);
      _this.tether.position();
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }
      return _this.props.toggle();
    }, _this.renderIntoSubtree = function () {
      _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, _this.renderChildren(), _this.element);
    }, _this.renderChildren = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style;
      return _react2.default.cloneElement(children, { style: style });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(TetherContent, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return TetherContent;
}(_react2.default.Component);
TetherContent.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  toggle: _propTypes2.default.func.isRequired,
  tether: _propTypes2.default.object.isRequired,
  tetherRef: _propTypes2.default.func,
  style: _propTypes2.default.node
};
TetherContent.defaultProps = defaultProps;
exports.default = TetherContent;
module.exports = exports['default'];
});
unwrapExports(TetherContent_1);

var Dropdown_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactDom2 = _interopRequireDefault(_reactDom);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
var _DropdownMenu2 = _interopRequireDefault(DropdownMenu_1);
var _TetherContent2 = _interopRequireDefault(TetherContent_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  isOpen: false,
  tag: 'div',
  theme: _theme2.default
};
var defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: { element: 'dropdown', enabled: 'show' },
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var DropdownUnstyled = function (_React$Component) {
  _inherits(DropdownUnstyled, _React$Component);
  function DropdownUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, DropdownUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownUnstyled.__proto__ || Object.getPrototypeOf(DropdownUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.getTetherConfig = function (childProps) {
      var target = function target() {
        return _this.getTetherTarget();
      };
      var vElementAttach = 'top';
      var hElementAttach = 'left';
      var vTargetAttach = 'bottom';
      var hTargetAttach = 'left';
      if (childProps.right) {
        hElementAttach = 'right';
        hTargetAttach = 'right';
      }
      if (_this.props.dropup) {
        vElementAttach = 'bottom';
        vTargetAttach = 'top';
      }
      return _extends({}, defaultTetherConfig, {
        attachment: vElementAttach + ' ' + hElementAttach,
        targetAttachment: vTargetAttach + ' ' + hTargetAttach,
        target: target
      }, _this.props.tether);
    }, _this.addEvents = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
    }, _this.removeEvents = function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);
    }, _this.handleDocumentClick = function (e) {
      var container = _reactDom2.default.findDOMNode(_this);
      if (container.contains(e.target) && container !== e.target) {
        return;
      }
      _this.toggle();
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }
      return _this.props.toggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(DropdownUnstyled, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getTetherTarget',
    value: function getTetherTarget() {
      var container = _reactDom2.default.findDOMNode(this);
      return container.querySelector('[data-toggle="dropdown"]');
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.tether) {
        return;
      }
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;
      var _props = this.props,
          tether = _props.tether,
          children = _props.children,
          attrs = _objectWithoutProperties(_props, ['tether', 'children']);
      attrs.toggle = this.toggle;
      return _react2.default.Children.map(_react2.default.Children.toArray(children), function (child) {
        if (tether && child.type === _DropdownMenu2.default) {
          var tetherConfig = _this2.getTetherConfig(child.props);
          return _react2.default.createElement(
            _TetherContent2.default,
            _extends({}, attrs, { tether: tetherConfig }),
            child
          );
        }
        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = (0, _lodash2.default)(this.props, ['toggle', 'tether', 'theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          Tag = _omit.tag,
          isOpen = _omit.isOpen,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'group', 'size', 'tag', 'isOpen']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, (_cn = {
        'btn-group': group
      }, _defineProperty(_cn, 'btn-group-' + size, !!size), _defineProperty(_cn, 'dropdown', !group), _defineProperty(_cn, 'show', isOpen), _defineProperty(_cn, 'dropup', dropup), _cn)), cssModule);
      return _react2.default.createElement(
        Tag,
        _extends({}, attributes, {
          className: classes
        }),
        this.renderChildren()
      );
    }
  }]);
  return DropdownUnstyled;
}(_react2.default.Component);
DropdownUnstyled.propTypes = {
  disabled: _propTypes2.default.bool,
  dropup: _propTypes2.default.bool,
  group: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  tether: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  toggle: _propTypes2.default.func,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  theme: _propTypes2.default.object
};
DropdownUnstyled.childContextTypes = {
  toggle: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired
};
var Dropdown = (0, _styledComponents2.default)(DropdownUnstyled).withConfig({
  displayName: 'Dropdown'
})(['', ''], function (props) {
  return '\n    &.dropup,\n    &.dropdown {\n      position: relative;\n    }\n\n    & .dropdown-hide {\n      display: none;\n    }\n    \n    & .dropdown-toggle {\n      /* Generate the caret automatically */\n      &::after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: ' + props.theme['$caret-width'] + ';\n        vertical-align: middle;\n        content: \'\';\n        border-top: ' + props.theme['$caret-width'] + ' solid;\n        border-right: ' + props.theme['$caret-width'] + ' solid transparent;\n        border-left: ' + props.theme['$caret-width'] + ' solid transparent;\n      }\n\n      /* Prevent the focus on the dropdown toggle when closing dropdowns */\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    &.dropup {\n      .dropdown-toggle {\n        &::after {\n          border-top: 0;\n          border-bottom: ' + props.theme['$caret-width'] + ' solid;\n        }\n      }\n    }\n\n    & .dropdown-menu {\n      clear: left;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown'] + ';\n      display: none; // none by default, but block on "open" of the menu\n      float: left;\n      min-width: ' + props.theme['$dropdown-min-width'] + ';\n      padding: ' + props.theme['$dropdown-padding-y'] + ' 0;\n      margin: ' + props.theme['$dropdown-margin-top'] + ' 0; /* override default ul */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      color: ' + props.theme['$body-color'] + ';\n      text-align: left; /* Ensures proper alignment if parent has it changed (e.g., modal footer) */\n      list-style: none;\n      background-color: ' + props.theme['$dropdown-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$dropdown-border-width'] + ' solid ' + props.theme['$dropdown-border-color'] + ';\n      ' + (0, borderRadius_1.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n      ' + (0, boxShadow_1.boxShadow)(props.theme['$enable-shadows'], props.theme['$dropdown-box-shadow']) + '\n    }\n\n    /* mixin from bootstrap 4, see : scss/mixins/_nav-divider.css */\n    & .dropdown-divider {\n      ' + (0, navDivider_1.navDivider)(props.theme['$spacer-y'], props.theme['$dropdown-divider-bg']) + '\n    }\n\n    & .dropdown-item {\n      display: block;\n      width: 100%; /* For <button>s */\n      padding: 3px ' + props.theme['$dropdown-item-padding-x'] + ';\n      clear: both;\n      font-weight: ' + props.theme['$font-weight-normal'] + ';\n      color: ' + props.theme['$dropdown-link-color'] + ';\n      text-align: inherit; /* For <button>s */\n      white-space: nowrap; /* prevent links from randomly breaking onto new lines */\n      background: none; /* For <button>s */\n      border: 0; /* For <button>s */\n\n      ' + (0, hover_1.hoverFocus)(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$dropdown-link-hover-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-hover-bg'] + '\n      ') + '\n\n      &.active,\n      &:active {\n        color: ' + props.theme['$dropdown-link-active-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-active-bg'] + '\n      }\n\n      &.disabled,\n      &:disabled{\n        color: ' + props.theme['$dropdown-link-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: transparent;\n        ' + (0, conditional.ifThen)(props.theme['$enabled-gradients'], 'background-image: none; /* Remove CSS gradient */') + '\n      }\n    }\n\n    &.show {\n      /* show the menu */\n      &>.dropdown-menu {\n        display: block;\n      }\n\n      & > a {\n        outline: 0;\n      }\n    }\n\n\n    /* Menu positioning */\n\n    /* Add extra class to .dropdown-menu to flip the alignment of the dropdown*\n    /* menu with the parent. */\n    & .dropdown-menu-right {\n      right: 0;\n      left: auto; /* Reset the default from .dropdown-menu */\n    }\n\n    & .dropdown-menu-left {\n      right: auto;\n      left: 0;\n    }\n\n    /* Dropdown section headers */\n    & .dropdown-header {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    /* Dropdown section footers */\n    & .dropdown-footer {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    \n\n    /* Backdrop to catch body clicks on mobile, etc. */\n    & .dropdown-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown-backdrop'] + ';\n    }\n\n    /* Allow for dropdowns to go bottom up (aka, dropup-menu) */\n\n    /* Just add .dropup after the standard .dropdown class and you\'re set. */\n    /* TODO: abstract this so that the navbar fixed styles are not placed here? */\n\n    &.dropup {\n      .dropdown-menu {\n        top: auto;\n        bottom: 100%;\n        margin-bottom: ' + props.theme['$dropdown-margin-top'] + ';\n      }\n    }\n        \n    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */\n    ' + (0, buttonGroup_1.buttonGroup)(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});
Dropdown.defaultProps = defaultProps;
exports.default = Dropdown;
module.exports = exports['default'];
});
unwrapExports(Dropdown_1);

var typography_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typography = typography;
var defaultProps = exports.defaultProps = {
  '$headings-margin-bottom': '0.5rem',
  '$headings-font-family': 'inherit',
  '$headings-font-weight': '500',
  '$headings-line-height': '1.1',
  '$headings-color': 'inherit',
  '$display1-size': '6rem',
  '$display2-size': '5.5rem',
  '$display3-size': '4.5rem',
  '$display4-size': '3.5rem',
  '$display1-weight': '300',
  '$display2-weight': '300',
  '$display3-weight': '300',
  '$display4-weight': '300'
};
function typography() {
  var $headingsMarginBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$headings-margin-bottom'];
  var $headingsFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$headings-font-family'];
  var $headingsFontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$headings-font-weight'];
  var $headingsLineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$headings-line-height'];
  var $headingsColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$headings-color'];
  var $display1Size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$display1-size'];
  var $display2Size = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$display2-size'];
  var $display3Size = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$display3-size'];
  var $display4Size = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$display4-size'];
  var $display1Weight = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$display1-weight'];
  var $display2Weight = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$display2-weight'];
  var $display3Weight = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$display3-weight'];
  var $display4Weight = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$display4-weight'];
  return '\n    margin-bottom: ' + $headingsMarginBottom + ';\n    font-family: ' + $headingsFontFamily + ';\n    font-weight: ' + $headingsFontWeight + ';\n    line-height: ' + $headingsLineHeight + ';\n    color: ' + $headingsColor + ';\n    \n    /* Type Scss */\n\n    &.display-1 {\n      font-size: ' + $display1Size + ';\n      font-weight: ' + $display1Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n\n    }\n    \n    &.display-2 {\n      font-size: ' + $display2Size + ';\n      font-weight: ' + $display2Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-3 {\n      font-size: ' + $display3Size + ';\n      font-weight: ' + $display3Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-4 {\n      font-size: ' + $display4Size + ';\n      font-weight: ' + $display4Weight + ';\n        line-height: ' + $headingsLineHeight + ';\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  typography: typography
};
});
unwrapExports(typography_1);

var H6_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = { theme: _theme2.default };
var H6Unstyled = function (_React$Component) {
  _inherits(H6Unstyled, _React$Component);
  function H6Unstyled() {
    _classCallCheck(this, H6Unstyled);
    return _possibleConstructorReturn(this, (H6Unstyled.__proto__ || Object.getPrototypeOf(H6Unstyled)).apply(this, arguments));
  }
  _createClass(H6Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = _objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return _react2.default.createElement(
        'h6',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H6Unstyled;
}(_react2.default.Component);
H6Unstyled.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  lead: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  color: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
var H6 = (0, _styledComponents2.default)(H6Unstyled).withConfig({
  displayName: 'H6'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h6'] + ';\n    ' + (0, typography_1.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    \n    &.lead {\n     font-size: ' + props.theme['$lead-font-size'] + ';\n     font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H6.defaultProps = defaultProps;
exports.default = H6;
module.exports = exports['default'];
});
unwrapExports(H6_1);

var DropdownItem_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _H2 = _interopRequireDefault(H6_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  tag: 'button'
};
var DropdownItem = function (_React$Component) {
  _inherits(DropdownItem, _React$Component);
  function DropdownItem() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, DropdownItem);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        e.preventDefault();
        return;
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
      _this.context.toggle();
    }, _this.getTabIndex = function () {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        return '-1';
      }
      return '0';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(DropdownItem, [{
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          divider = _props.divider,
          disabled = _props.disabled,
          Tag = _props.tag,
          header = _props.header,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'divider', 'disabled', 'tag', 'header']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
        disabled: disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);
      if (Tag === 'button') {
        if (header) {
          Tag = _H2.default;
        } else if (divider) {
          Tag = 'div';
        }
      }
      return _react2.default.createElement(Tag, _extends({
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }, attributes));
    }
  }]);
  return DropdownItem;
}(_react2.default.Component);
DropdownItem.propTypes = {
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  divider: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  header: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
DropdownItem.contextTypes = {
  toggle: _propTypes2.default.func
};
DropdownItem.defaultProps = defaultProps;
exports.default = DropdownItem;
module.exports = exports['default'];
});
unwrapExports(DropdownItem_1);

var tabFocus_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabFocus = tabFocus;
function tabFocus() {
  return "\n    /* WebKit-specific. Other browsers will keep their default outline style. */\n    /* (Initially tried to also force default via 'outline: initial', */\n    /* but that seems to erroneously remove the outline in Firefox altogether.) */\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  ";
}
exports.default = {
  tabFocus: tabFocus
};
});
unwrapExports(tabFocus_1);

var a_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.a = a;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$link-color': '#0275d8',
  '$link-decoration': 'none',
  '$link-hover-color': '#014C8D',
  '$link-hover-decoration': 'underline',
  '$enable-hover-media-query': false
};
function a() {
  var $linkColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$link-color'];
  var $linkDecoration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$link-decoration'];
  var $linkHoverColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$link-hover-decoration'];
  var $enableHoverMediaQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$enable-hover-media-query'];
  return '\n    color: ' + $linkColor + ';\n    text-decoration: ' + $linkDecoration + ';\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n  \n    ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, '\n      color: ' + $linkHoverColor + ';\n      text-decoration: ' + $linkHoverDecoration + ';\n    ') + '\n    \n    &:focus {\n      ' + (0, tabFocus_1.tabFocus)() + '\n    }\n\n    a:not([href]):not([tabindex]) {\n      color: inherit;\n      text-decoration: none;\n      \n      ' + (0, hover_1.hoverFocus)($enableHoverMediaQuery, '\n        color: inherit;\n        text-decoration: none;\n      ') + '\n\n      &:focus {\n        outline: 0;\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  a: a
};
});
unwrapExports(a_1);

var composeLink_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
exports.default = composeLink;
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  theme: _theme2.default
};
function composeLink(RouterLink) {
  var Link = function (_React$Component) {
    _inherits(Link, _React$Component);
    function Link() {
      _classCallCheck(this, Link);
      return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }
    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _omit = (0, _lodash2.default)(this.props, ['theme']),
            className = _omit.className,
            to = _omit.to,
            attributes = _objectWithoutProperties(_omit, ['className', 'to']);
        return _react2.default.createElement(RouterLink, _extends({ className: className, to: to }, attributes));
      }
    }]);
    return Link;
  }(_react2.default.Component);
  Link.propTypes = {
    className: _propTypes2.default.string,
    to: _propTypes2.default.string.isRequired,
    theme: _propTypes2.default.object
  };
  Link = (0, _styledComponents2.default)(Link).withConfig({
    displayName: 'composeLink__Link'
  })(['', ''], function (props) {
    return '\n      ' + (0, a_1.a)(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n    \n      ' + (0, buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n    ';
  });
  Link.defaultProps = defaultProps;
  return Link;
}
module.exports = exports['default'];
});
unwrapExports(composeLink_1);

var A_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeLink = undefined;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
Object.defineProperty(exports, 'composeLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(composeLink_1).default;
  }
});
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  tag: 'a',
  theme: _theme2.default
};
var AUnstyled = function (_React$Component) {
  _inherits(AUnstyled, _React$Component);
  function AUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, AUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AUnstyled.__proto__ || Object.getPrototypeOf(AUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(AUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          disabled = _omit.disabled,
          cssModule = _omit.cssModule,
          color = _omit.color,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'active', 'disabled', 'cssModule', 'color', 'tag']);
      var focus = this.state.focus;
      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, _defineProperty({
          focus: focus,
          active: active,
          disabled: disabled
        }, 'text-' + color, color)), cssModule)
      }, attributes));
    }
  }]);
  return AUnstyled;
}(_react2.default.Component);
AUnstyled.propTypes = {
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  color: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};
var A = (0, _styledComponents2.default)(AUnstyled).withConfig({
  displayName: 'A'
})(['', ''], function (props) {
  return '\n    ' + (0, a_1.a)(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n  ';
});
A.defaultProps = defaultProps;
exports.default = A;
});
unwrapExports(A_1);

var DropdownToggle_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _classnames2 = _interopRequireDefault(_classnames);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _Button2 = _interopRequireDefault(Button);
var _A2 = _interopRequireDefault(A_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary'
};
var DropdownToggle = function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);
  function DropdownToggle() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, DropdownToggle);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (_this.props.nav && !_this.props.tag) {
        e.preventDefault();
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
      _this.context.toggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(DropdownToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'caret', 'split', 'nav', 'tag']);
      var ariaLabel = attributes['aria-label'] || 'Toggle Dropdown';
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav
      }), cssModule);
      var children = attributes.children || _react2.default.createElement(
        'span',
        { className: 'sr-only' },
        ariaLabel
      );
      var Tag = void 0;
      if (nav && !tag) {
        Tag = _A2.default;
        attributes.href = '#';
      } else if (!tag) {
        Tag = _Button2.default;
      } else {
        Tag = tag;
      }
      return _react2.default.createElement(
        Tag,
        _extends({
          className: classes,
          onClick: this.onClick,
          'aria-haspopup': 'true',
          'aria-expanded': this.context.isOpen
        }, attributes),
        children
      );
    }
  }]);
  return DropdownToggle;
}(_react2.default.Component);
DropdownToggle.propTypes = {
  caret: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  'data-toggle': _propTypes2.default.string,
  'aria-haspopup': _propTypes2.default.bool,
  split: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  nav: _propTypes2.default.bool
};
DropdownToggle.contextTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  toggle: _propTypes2.default.func.isRequired
};
DropdownToggle.defaultProps = defaultProps;
exports.default = DropdownToggle;
module.exports = exports['default'];
});
unwrapExports(DropdownToggle_1);

var Dropdown = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Dropdown_1).default;
  }
});
Object.defineProperty(exports, 'DropdownItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(DropdownItem_1).default;
  }
});
Object.defineProperty(exports, 'DropdownToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(DropdownToggle_1).default;
  }
});
Object.defineProperty(exports, 'DropdownMenu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(DropdownMenu_1).default;
  }
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
unwrapExports(Dropdown);

var ButtonDropdown_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _Dropdown2 = _interopRequireDefault(Dropdown);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var propTypes = {
  children: _propTypes2.default.node,
  toggle: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired
};
var ButtonDropdown = function ButtonDropdown(props) {
  return _react2.default.createElement(_Dropdown2.default, _extends({}, props, { group: true }));
};
ButtonDropdown.propTypes = propTypes;
exports.default = ButtonDropdown;
module.exports = exports['default'];
});
unwrapExports(ButtonDropdown_1);

var Button = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Button_1).default;
  }
});
Object.defineProperty(exports, 'ButtonDropdown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(ButtonDropdown_1).default;
  }
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
var Button$1 = unwrapExports(Button);

var P_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _react2 = _interopRequireDefault(_react);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _classnames2 = _interopRequireDefault(_classnames);
var _lodash2 = _interopRequireDefault(lodash_omit);
var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);
var _theme2 = _interopRequireDefault(theme$1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var defaultProps = { theme: _theme2.default };
var PUnstyled = function (_React$Component) {
  _inherits(PUnstyled, _React$Component);
  function PUnstyled() {
    _classCallCheck(this, PUnstyled);
    return _possibleConstructorReturn(this, (PUnstyled.__proto__ || Object.getPrototypeOf(PUnstyled)).apply(this, arguments));
  }
  _createClass(PUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = _objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return _react2.default.createElement(
        'p',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return PUnstyled;
}(_react2.default.Component);
PUnstyled.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  theme: _propTypes2.default.object,
  color: _propTypes2.default.string,
  lead: _propTypes2.default.bool,
  cssModule: _propTypes2.default.object
};
var P = (0, _styledComponents2.default)(PUnstyled).withConfig({
  displayName: 'P'
})(['', ''], function (props) {
  return '\n    /* Type Scss */\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    &.h1{\n      font-size: ' + props.theme['$font-size-h1'] + ';\n      ' + (0, typography_1.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h2{\n      font-size: ' + props.theme['$font-size-h2'] + ';\n      ' + (0, typography_1.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h3{\n      font-size: ' + props.theme['$font-size-h3'] + ';\n      ' + (0, typography_1.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h4{\n      font-size: ' + props.theme['$font-size-h4'] + ';\n      ' + (0, typography_1.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h5{\n      font-size: ' + props.theme['$font-size-h5'] + ';\n      ' + (0, typography_1.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h6{\n      font-size: ' + props.theme['$font-size-h6'] + ';\n      ' + (0, typography_1.typography)(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;   \n    margin-bottom: 1rem;\n  ';
});
P.defaultProps = defaultProps;
exports.default = P;
module.exports = exports['default'];
});
var P = unwrapExports(P_1);

var theme$4 = makeTheme$3();
function makeTheme$3() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var newTheme = { loginForm: {} };
  var u = userTheme;
  newTheme.loginForm['$background-color'] = u.loginForm && u.loginForm['$background-color'] ? u.loginForm['$background-color'] : '#fff';
  newTheme.loginForm['$box-shadow'] = u.loginForm && u.loginForm['$box-shadow'] ? u.loginForm['$box-shadow'] : '0px 1px 3px rgba(0, 0, 0, 0.25)';
  newTheme.loginForm['$border-radius'] = u.loginForm && u.loginForm['$border-radius'] ? u.loginForm['$border-radius'] : '3px';
  newTheme.loginForm['$color-lighter'] = u.loginForm && u.loginForm['$color-lighter'] ? u.loginForm['$color-lighter'] : '#EDEDED';
  newTheme.loginForm['$max-width'] = u.loginForm && u.loginForm['$max-width'] ? u.loginForm['$max-width'] : '325px';
  newTheme.loginForm['$color-lighter'] = u.loginForm && u.loginForm['$color-lighter'] ? u.loginForm['$color-lighter'] : '#EDEDED';
  newTheme.loginForm['$color-light'] = u.loginForm && u.loginForm['$color-light'] ? u.loginForm['$color-light'] : '#999';
  newTheme.loginForm.$color = u.loginForm && u.loginForm.$color ? u.loginForm.$color : '#666';
  newTheme.loginForm['$color-dark'] = u.loginForm && u.loginForm['$color-dark'] ? u.loginForm['$color-dark'] : '#333';
  return newTheme;
}

var validate = function validate(values) {
  var errors = {};
  if (!values.get('username')) {
    errors.username = 'kopax.common.form.warning.required';
  } else if (values.get('username').length > 15) {
    errors.username = 'kopax.common.form.warning.usernameMaxLength';
  }
  if (!values.get('password')) {
    errors.password = 'kopax.common.form.warning.required';
  }
  return errors;
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var theme$3 = makeTheme$1(_extends({}, theme$4, theme));
var defaultProps$1 = {
  header: null,
  footer: null,
  beforeButton: null,
  onSubmit: null,
  loading: null,
  initialValues: {
    username: '',
    password: ''
  },
  placeHolder: {
    username: 'Santaclauze',
    password: '••••••••••'
  },
  theme: theme$3
};
var propTypes = {
  header: _propTypes.node,
  footer: _propTypes.node,
  beforeButton: _propTypes.node,
  className: _propTypes.string.isRequired,
  onSubmit: _propTypes.func,
  loading: _propTypes.bool,
  initialValues: _propTypes.shape({
    username: _propTypes.string,
    password: _propTypes.string
  }),
  placeHolder: _propTypes.shape({
    username: _propTypes.string,
    password: _propTypes.string
  }),
  theme: _propTypes.object
};
var ErrorParagraph = _styledComponents(P).withConfig({
  displayName: 'LoginForm__ErrorParagraph'
})(['position:absolute;font-size:0.8rem;right:0.2rem;bottom:0;margin-bottom:0;']);
var renderField = function renderField(_ref) {
  var input = _ref.input,
      placeHolder = _ref.placeHolder,
      unused = _ref.theme,
      type = _ref.type,
      label = _ref.label,
      name = _ref.name,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react.createElement(
    'div',
    null,
    _react.createElement('input', _extends({ className: 'form__field-input' }, input, { type: type, placeholder: placeHolder, name: name })),
    _react.createElement(
      'label',
      { className: 'form__field-label', htmlFor: name },
      label
    ),
    touched && error && _react.createElement(
      FadeInRight,
      { inline: false },
      _react.createElement(
        ErrorParagraph,
        { color: 'warning', className: 'form_field-error' },
        ' ',
        _react.createElement(FormattedMessage, { id: error }),
        ' ',
        _react.createElement('i', { className: 'fa fa-exclamation-circle' })
      )
    )
  );
};
var LoginFormUnstyled = function LoginFormUnstyled(props) {
  var className = props.className,
      placeHolder = props.placeHolder,
      header = props.header,
      footer = props.footer,
      beforeButton = props.beforeButton,
      loading = props.loading,
      reduxFormProps = objectWithoutProperties(props, ['className', 'placeHolder', 'header', 'footer', 'beforeButton', 'loading']);
  var anyTouched = reduxFormProps.anyTouched,
      asyncValidate = reduxFormProps.asyncValidate,
      asyncValidating = reduxFormProps.asyncValidating,
      blur = reduxFormProps.blur,
      change = reduxFormProps.change,
      clearSubmit = reduxFormProps.clearSubmit,
      destroy = reduxFormProps.destroy,
      dirty = reduxFormProps.dirty,
      dispatch = reduxFormProps.dispatch,
      success = reduxFormProps.success,
      error = reduxFormProps.error,
      handleSubmit = reduxFormProps.handleSubmit,
      initialize = reduxFormProps.initialize,
      initialized = reduxFormProps.initialized,
      initialValues = reduxFormProps.initialValues,
      invalid = reduxFormProps.invalid,
      pristine = reduxFormProps.pristine,
      reset = reduxFormProps.reset,
      submitFailed = reduxFormProps.submitFailed,
      submitSucceeded = reduxFormProps.submitSucceeded,
      submitting = reduxFormProps.submitting,
      touch = reduxFormProps.touch,
      untouch = reduxFormProps.untouch,
      valid = reduxFormProps.valid,
      warning = reduxFormProps.warning,
      pure = reduxFormProps.pure,
      triggerSubmit = reduxFormProps.triggerSubmit,
      autofill = reduxFormProps.autofill,
      clearSubmitErrors = reduxFormProps.clearSubmitErrors,
      clearAsyncError = reduxFormProps.clearAsyncError,
      submit = reduxFormProps.submit,
      array = reduxFormProps.array,
      onSubmit = reduxFormProps.onSubmit,
      validate$$1 = reduxFormProps.validate,
      warn = reduxFormProps.warn,
      onError = reduxFormProps.onError,
      rest = objectWithoutProperties(reduxFormProps, ['anyTouched', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'clearSubmit', 'destroy', 'dirty', 'dispatch', 'success', 'error', 'handleSubmit', 'initialize', 'initialized', 'initialValues', 'invalid', 'pristine', 'reset', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'untouch', 'valid', 'warning', 'pure', 'triggerSubmit', 'autofill', 'clearSubmitErrors', 'clearAsyncError', 'submit', 'array', 'onSubmit', 'validate', 'warn', 'onError']);
  return _react.createElement(
    Form$1,
    _extends({ name: 'login-form', className: _classnames('form', className), onSubmit: handleSubmit(onSubmit) }, rest),
    header,
    _react.createElement(
      'div',
      { className: 'form__field-wrapper' },
      _react.createElement(Field$1, {
        name: 'username',
        type: 'text',
        label: _react.createElement(FormattedMessage, messages.formUsername),
        placeHolder: placeHolder.username,
        component: renderField
      })
    ),
    _react.createElement(
      'div',
      { className: 'form__field-wrapper' },
      _react.createElement(Field$1, {
        name: 'password',
        type: 'password',
        label: _react.createElement(FormattedMessage, messages.formPassword),
        placeHolder: placeHolder.password,
        component: renderField
      })
    ),
    _react.createElement(
      'div',
      { className: 'form__submit-btn-wrapper' },
      _react.createElement(
        'div',
        null,
        beforeButton,
        _react.createElement(
          Button$1,
          { disabled: loading || submitting, color: 'success' },
          _react.createElement(FormattedMessage, messages.authLogin),
          (loading || submitting) && _react.createElement(
            'span',
            null,
            ' ',
            _react.createElement(LoadingIndicator, null)
          )
        )
      )
    ),
    footer
  );
};
LoginFormUnstyled.propTypes = propTypes;
var LoginFormStyled = _styledComponents(LoginFormUnstyled).withConfig({
  displayName: 'LoginForm__LoginFormStyled'
})(['', ''], function (props) {
  return '\n    .form__field-wrapper {\n      width: 100%;\n      position: relative;\n      padding-top: 1.75em;\n      border-top: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      border-bottom: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n    \n    .form__field-wrapper + .form__field-wrapper {\n      border-top: none;\n    }\n    \n    .form__field-input:focus ~ .form__field-label {\n      color: ' + props.theme.loginForm.$color + ';\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n    }\n    \n    .form__field-input:focus {\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n      color: ' + props.theme.loginForm['$color-dark'] + ';\n    }\n    \n    .form__field-label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 16px;\n      padding-top: 20px;\n      padding-bottom: 0;\n      margin: 0;\n      z-index: 1;\n      font-size: .8em;\n      color: ' + props.theme.loginForm['$color-light'] + ';\n      font-weight: 400;\n      user-select: none;\n      cursor: text;\n      \n      .form_field-error {\n        float: right;\n      }\n    }\n    \n    .form__field-input {\n      position: relative;\n      padding: 1.625em 16px;\n      width: 100%;\n      color: ' + props.theme.loginForm.$color + ';\n      border: none;\n      font-family: inherit;\n      outline: 0;\n      letter-spacing: 0.05em;\n    }\n    \n    .form__submit-btn-wrapper {\n      padding: 2em 1em;\n      width: 100%;\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n      display: flex;\n      justify-content: center;\n    }\n  ';
});
LoginFormStyled.defaultProps = defaultProps$1;
var LoginForm = reduxForm$1({
  form: 'login',
  enableReinitialize: false,
  validate: validate
})(LoginFormStyled);

var defaultProps$$1 = _extends({
  logo: null,
  version: null,
  notification: {
    text: '',
    type: 'info'
  },
  hideNotificationDelay: 3000
}, defaultProps$1);
var FormWrapperUnstyled = function (_React$Component) {
  inherits(FormWrapperUnstyled, _React$Component);
  function FormWrapperUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, FormWrapperUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FormWrapperUnstyled.__proto__ || Object.getPrototypeOf(FormWrapperUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      shacked: false
    }, _this.shack = function () {
      _this.setState({
        shacked: !_this.state.shacked
      }, _this.resetShack);
    }, _this.resetShack = function () {
      if (_this.state.shacked) {
        setTimeout(_this.props.hideNotification, _this.props.hideNotificationDelay);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass(FormWrapperUnstyled, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.notification.text !== this.props.notification.text) {
        this.shack();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hideNotification = _props.hideNotification,
          hideNotificationDelay = _props.hideNotificationDelay,
          logo = _props.logo,
          version = _props.version,
          notification = _props.notification,
          className = _props.className,
          formRest = objectWithoutProperties(_props, ['hideNotification', 'hideNotificationDelay', 'logo', 'version', 'notification', 'className']);
      return _react.createElement(
        'div',
        { className: _classnames(className, 'form-page__wrapper') },
        _react.createElement(
          'div',
          { className: _classnames('form-page__form-wrapper', { 'js-form__err-animation': this.state.shacked }) },
          _react.createElement(
            'div',
            { className: 'form-page__form-header text-center' },
            _react.createElement(
              'h2',
              { className: 'form-page__form-heading' },
              _react.createElement(FormattedMessage, messages.authLogin)
            ),
            logo
          ),
          notification.text.length > 0 && _react.createElement(
            Alert,
            { color: notification.type, className: 'mx-2' },
            _react.createElement(FormattedMessage, { id: notification.text })
          ),
          _react.createElement(LoginForm, formRest),
          version && _react.createElement(
            Small,
            { className: 'text-center d-block' },
            version
          )
        )
      );
    }
  }]);
  return FormWrapperUnstyled;
}(_react.Component);
FormWrapperUnstyled.defaultProps = defaultProps$$1;
FormWrapperUnstyled.propTypes = {
  className: _propTypes.string.isRequired,
  logo: _propTypes.any,
  version: _propTypes.any,
  notification: _propTypes.shape({
    text: _propTypes.string,
    type: _propTypes.oneOf(['info', 'success', 'danger', 'primary', 'secondary', 'warning'])
  }),
  hideNotification: _propTypes.func,
  hideNotificationDelay: _propTypes.number
};
var shake = keyframes(['0%{transform:translateX(0);}25%{transform:translateX(10px);}75%{transform:translateX(-10px);}100%{transform:translateX(0);}']);
var FormWrapper = _styledComponents(FormWrapperUnstyled).withConfig({
  displayName: 'FormWrapper'
})(['', ''], function (props) {
  return '\n\n    margin-top: calc(' + props.theme.$spacer * 1.25 + ');\n\n    &.form-page__wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n      width: 100%;\n    }\n\n    .form-page__form-wrapper {\n      max-width: ' + props.theme.loginForm['$max-width'] + ';\n      width: 100%;\n      border: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme.loginForm['$border-radius']) + '\n      ' + boxShadow_2(props.theme['$enable-shadows'], props.theme.loginForm['$box-shadow']) + '\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n\n    .form-page__form-heading {\n      text-align: center;\n      font-size: ' + props.theme['$font-size-base'] + ';\n      user-select: none;\n    }\n\n    .form-page__form-header {\n      padding: ' + props.theme.$spacer + ';\n    }\n\n    & .js-form__err-animation {\n      animation: ' + shake + ' ' + props.theme['$motion-delay'].md + ' ' + props.theme['$motion-timing-function'].easeInOut + '\n    }\n\n  ';
});
FormWrapper.defaultProps = defaultProps$$1;

export { FormWrapper as LoginForm, makeTheme$3 as makeThemeLoginForm, theme$4 as themeLoginForm };
//# sourceMappingURL=login-form.es.js.map
