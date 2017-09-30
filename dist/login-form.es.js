import { Component, createElement } from 'react';
import React__default from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from 'message-common';
import { Alert, Button, Form, P, Small, makeTheme } from 'bootstrap-styled';
import { LoadingIndicator } from 'loaders';
import { FadeInRight, theme } from 'bootstrap-styled-motion';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

var prefix = '@@redux-form/';
var ARRAY_INSERT = prefix + 'ARRAY_INSERT';
var ARRAY_MOVE = prefix + 'ARRAY_MOVE';
var ARRAY_POP = prefix + 'ARRAY_POP';
var ARRAY_PUSH = prefix + 'ARRAY_PUSH';
var ARRAY_REMOVE = prefix + 'ARRAY_REMOVE';
var ARRAY_REMOVE_ALL = prefix + 'ARRAY_REMOVE_ALL';
var ARRAY_SHIFT = prefix + 'ARRAY_SHIFT';
var ARRAY_SPLICE = prefix + 'ARRAY_SPLICE';
var ARRAY_UNSHIFT = prefix + 'ARRAY_UNSHIFT';
var ARRAY_SWAP = prefix + 'ARRAY_SWAP';
var AUTOFILL = prefix + 'AUTOFILL';
var BLUR = prefix + 'BLUR';
var CHANGE = prefix + 'CHANGE';
var CLEAR_SUBMIT = prefix + 'CLEAR_SUBMIT';
var CLEAR_SUBMIT_ERRORS = prefix + 'CLEAR_SUBMIT_ERRORS';
var CLEAR_ASYNC_ERROR = prefix + 'CLEAR_ASYNC_ERROR';
var DESTROY = prefix + 'DESTROY';
var FOCUS = prefix + 'FOCUS';
var INITIALIZE = prefix + 'INITIALIZE';
var REGISTER_FIELD = prefix + 'REGISTER_FIELD';
var RESET = prefix + 'RESET';
var SET_SUBMIT_FAILED = prefix + 'SET_SUBMIT_FAILED';
var SET_SUBMIT_SUCCEEDED = prefix + 'SET_SUBMIT_SUCCEEDED';
var START_ASYNC_VALIDATION = prefix + 'START_ASYNC_VALIDATION';
var START_SUBMIT = prefix + 'START_SUBMIT';
var STOP_ASYNC_VALIDATION = prefix + 'STOP_ASYNC_VALIDATION';
var STOP_SUBMIT = prefix + 'STOP_SUBMIT';
var SUBMIT = prefix + 'SUBMIT';
var TOUCH = prefix + 'TOUCH';
var UNREGISTER_FIELD = prefix + 'UNREGISTER_FIELD';
var UNTOUCH = prefix + 'UNTOUCH';
var UPDATE_SYNC_ERRORS = prefix + 'UPDATE_SYNC_ERRORS';
var UPDATE_SYNC_WARNINGS = prefix + 'UPDATE_SYNC_WARNINGS';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var arrayInsert$1 = function arrayInsert(form, field, index, value) {
  return {
    type: ARRAY_INSERT,
    meta: { form: form, field: field, index: index },
    payload: value
  };
};
var arrayMove$1 = function arrayMove(form, field, from, to) {
  return {
    type: ARRAY_MOVE,
    meta: { form: form, field: field, from: from, to: to }
  };
};
var arrayPop$1 = function arrayPop(form, field) {
  return {
    type: ARRAY_POP,
    meta: { form: form, field: field }
  };
};
var arrayPush$1 = function arrayPush(form, field, value) {
  return {
    type: ARRAY_PUSH,
    meta: { form: form, field: field },
    payload: value
  };
};
var arrayRemove$1 = function arrayRemove(form, field, index) {
  return {
    type: ARRAY_REMOVE,
    meta: { form: form, field: field, index: index }
  };
};
var arrayRemoveAll$1 = function arrayRemoveAll(form, field) {
  return {
    type: ARRAY_REMOVE_ALL,
    meta: { form: form, field: field }
  };
};
var arrayShift$1 = function arrayShift(form, field) {
  return {
    type: ARRAY_SHIFT,
    meta: { form: form, field: field }
  };
};
var arraySplice$1 = function arraySplice(form, field, index, removeNum, value) {
  var action = {
    type: ARRAY_SPLICE,
    meta: { form: form, field: field, index: index, removeNum: removeNum }
  };
  if (value !== undefined) {
    action.payload = value;
  }
  return action;
};
var arraySwap$1 = function arraySwap(form, field, indexA, indexB) {
  if (indexA === indexB) {
    throw new Error('Swap indices cannot be equal');
  }
  if (indexA < 0 || indexB < 0) {
    throw new Error('Swap indices cannot be negative');
  }
  return { type: ARRAY_SWAP, meta: { form: form, field: field, indexA: indexA, indexB: indexB } };
};
var arrayUnshift$1 = function arrayUnshift(form, field, value) {
  return {
    type: ARRAY_UNSHIFT,
    meta: { form: form, field: field },
    payload: value
  };
};
var autofill$1 = function autofill(form, field, value) {
  return {
    type: AUTOFILL,
    meta: { form: form, field: field },
    payload: value
  };
};
var blur$1 = function blur(form, field, value, touch) {
  return {
    type: BLUR,
    meta: { form: form, field: field, touch: touch },
    payload: value
  };
};
var change$1 = function change(form, field, value, touch, persistentSubmitErrors) {
  return {
    type: CHANGE,
    meta: { form: form, field: field, touch: touch, persistentSubmitErrors: persistentSubmitErrors },
    payload: value
  };
};
var clearSubmit = function clearSubmit(form) {
  return {
    type: CLEAR_SUBMIT,
    meta: { form: form }
  };
};
var clearSubmitErrors$1 = function clearSubmitErrors(form) {
  return {
    type: CLEAR_SUBMIT_ERRORS,
    meta: { form: form }
  };
};
var clearAsyncError = function clearAsyncError(form, field) {
  return {
    type: CLEAR_ASYNC_ERROR,
    meta: { form: form, field: field }
  };
};
var destroy$1 = function destroy() {
  for (var _len = arguments.length, form = Array(_len), _key = 0; _key < _len; _key++) {
    form[_key] = arguments[_key];
  }
  return {
    type: DESTROY,
    meta: { form: form }
  };
};
var focus$1 = function focus(form, field) {
  return {
    type: FOCUS,
    meta: { form: form, field: field }
  };
};
var initialize$1 = function initialize(form, values, keepDirty) {
  var otherMeta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (keepDirty instanceof Object) {
    otherMeta = keepDirty;
    keepDirty = false;
  }
  return {
    type: INITIALIZE,
    meta: _extends({ form: form, keepDirty: keepDirty }, otherMeta),
    payload: values
  };
};
var registerField$1 = function registerField(form, name, type) {
  return {
    type: REGISTER_FIELD,
    meta: { form: form },
    payload: { name: name, type: type }
  };
};
var reset$1 = function reset(form) {
  return {
    type: RESET,
    meta: { form: form }
  };
};
var startAsyncValidation$1 = function startAsyncValidation(form, field) {
  return {
    type: START_ASYNC_VALIDATION,
    meta: { form: form, field: field }
  };
};
var startSubmit$1 = function startSubmit(form) {
  return {
    type: START_SUBMIT,
    meta: { form: form }
  };
};
var stopAsyncValidation$1 = function stopAsyncValidation(form, errors) {
  return {
    type: STOP_ASYNC_VALIDATION,
    meta: { form: form },
    payload: errors,
    error: !!(errors && Object.keys(errors).length)
  };
};
var stopSubmit$1 = function stopSubmit(form, errors) {
  return {
    type: STOP_SUBMIT,
    meta: { form: form },
    payload: errors,
    error: !!(errors && Object.keys(errors).length)
  };
};
var submit$1 = function submit(form) {
  return {
    type: SUBMIT,
    meta: { form: form }
  };
};
var setSubmitFailed$1 = function setSubmitFailed(form) {
  for (var _len2 = arguments.length, fields = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    fields[_key2 - 1] = arguments[_key2];
  }
  return {
    type: SET_SUBMIT_FAILED,
    meta: { form: form, fields: fields },
    error: true
  };
};
var setSubmitSucceeded$1 = function setSubmitSucceeded(form) {
  for (var _len3 = arguments.length, fields = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    fields[_key3 - 1] = arguments[_key3];
  }
  return {
    type: SET_SUBMIT_SUCCEEDED,
    meta: { form: form, fields: fields },
    error: false
  };
};
var touch$1 = function touch(form) {
  for (var _len4 = arguments.length, fields = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    fields[_key4 - 1] = arguments[_key4];
  }
  return {
    type: TOUCH,
    meta: { form: form, fields: fields }
  };
};
var unregisterField$1 = function unregisterField(form, name) {
  var destroyOnUnmount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return {
    type: UNREGISTER_FIELD,
    meta: { form: form },
    payload: { name: name, destroyOnUnmount: destroyOnUnmount }
  };
};
var untouch$1 = function untouch(form) {
  for (var _len5 = arguments.length, fields = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    fields[_key5 - 1] = arguments[_key5];
  }
  return {
    type: UNTOUCH,
    meta: { form: form, fields: fields }
  };
};
var updateSyncErrors = function updateSyncErrors(form) {
  var syncErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var error = arguments[2];
  return {
    type: UPDATE_SYNC_ERRORS,
    meta: { form: form },
    payload: { syncErrors: syncErrors, error: error }
  };
};
var updateSyncWarnings = function updateSyncWarnings(form) {
  var syncWarnings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var warning = arguments[2];
  return {
    type: UPDATE_SYNC_WARNINGS,
    meta: { form: form },
    payload: { syncWarnings: syncWarnings, warning: warning }
  };
};
var actions = {
  arrayInsert: arrayInsert$1,
  arrayMove: arrayMove$1,
  arrayPop: arrayPop$1,
  arrayPush: arrayPush$1,
  arrayRemove: arrayRemove$1,
  arrayRemoveAll: arrayRemoveAll$1,
  arrayShift: arrayShift$1,
  arraySplice: arraySplice$1,
  arraySwap: arraySwap$1,
  arrayUnshift: arrayUnshift$1,
  autofill: autofill$1,
  blur: blur$1,
  change: change$1,
  clearSubmit: clearSubmit,
  clearSubmitErrors: clearSubmitErrors$1,
  clearAsyncError: clearAsyncError,
  destroy: destroy$1,
  focus: focus$1,
  initialize: initialize$1,
  registerField: registerField$1,
  reset: reset$1,
  startAsyncValidation: startAsyncValidation$1,
  startSubmit: startSubmit$1,
  stopAsyncValidation: stopAsyncValidation$1,
  stopSubmit: stopSubmit$1,
  submit: submit$1,
  setSubmitFailed: setSubmitFailed$1,
  setSubmitSucceeded: setSubmitSucceeded$1,
  touch: touch$1,
  unregisterField: unregisterField$1,
  untouch: untouch$1,
  updateSyncErrors: updateSyncErrors,
  updateSyncWarnings: updateSyncWarnings
};

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var Form$1 = function (_Component) {
  _inherits(Form$$1, _Component);
  function Form$$1(props, context) {
    _classCallCheck(this, Form$$1);
    var _this = _possibleConstructorReturn(this, (Form$$1.__proto__ || Object.getPrototypeOf(Form$$1)).call(this, props, context));
    if (!context._reduxForm) {
      throw new Error('Form must be inside a component decorated with reduxForm()');
    }
    return _this;
  }
  _createClass(Form$$1, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context._reduxForm.registerInnerOnSubmit(this.props.onSubmit);
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement('form', this.props);
    }
  }]);
  return Form$$1;
}(Component);
Form$1.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
Form$1.contextTypes = {
  _reduxForm: PropTypes.object
};

var formatName = function formatName(_ref, name) {
  var sectionPrefix = _ref._reduxForm.sectionPrefix;
  return sectionPrefix ? sectionPrefix + '.' + name : name;
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var FormSection = function (_Component) {
  _inherits$1(FormSection, _Component);
  function FormSection(props, context) {
    _classCallCheck$1(this, FormSection);
    var _this = _possibleConstructorReturn$1(this, (FormSection.__proto__ || Object.getPrototypeOf(FormSection)).call(this, props, context));
    if (!context._reduxForm) {
      throw new Error('FormSection must be inside a component decorated with reduxForm()');
    }
    return _this;
  }
  _createClass$1(FormSection, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var context = this.context,
          name = this.props.name;
      return {
        _reduxForm: _extends$1({}, context._reduxForm, {
          sectionPrefix: formatName(context, name)
        })
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          name = _props.name,
          component = _props.component,
          rest = _objectWithoutProperties(_props, ['children', 'name', 'component']);
      if (React__default.isValidElement(children)) {
        return children;
      }
      return createElement(component, _extends$1({}, rest, {
        children: children
      }));
    }
  }]);
  return FormSection;
}(Component);
FormSection.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
FormSection.defaultProps = {
  component: 'div'
};
FormSection.childContextTypes = {
  _reduxForm: PropTypes.object.isRequired
};
FormSection.contextTypes = {
  _reduxForm: PropTypes.object
};

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
var ExtendableError = unwrapExports(lib);

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var SubmissionError = function (_ExtendableError) {
  _inherits$2(SubmissionError, _ExtendableError);
  function SubmissionError(errors) {
    _classCallCheck$2(this, SubmissionError);
    var _this = _possibleConstructorReturn$2(this, (SubmissionError.__proto__ || Object.getPrototypeOf(SubmissionError)).call(this, 'Submit Validation Failed'));
    _this.errors = errors;
    return _this;
  }
  return SubmissionError;
}(ExtendableError);

var any = PropTypes.any;
var bool = PropTypes.bool;
var func = PropTypes.func;
var shape = PropTypes.shape;
var string = PropTypes.string;
var oneOfType = PropTypes.oneOfType;
var object = PropTypes.object;
var formPropTypes = {
  anyTouched: bool.isRequired,
  asyncValidating: oneOfType([bool, string]).isRequired,
  dirty: bool.isRequired,
  error: any,
  form: string.isRequired,
  invalid: bool.isRequired,
  initialized: bool.isRequired,
  initialValues: object,
  pristine: bool.isRequired,
  pure: bool.isRequired,
  submitting: bool.isRequired,
  submitFailed: bool.isRequired,
  submitSucceeded: bool.isRequired,
  valid: bool.isRequired,
  warning: any,
  array: shape({
    insert: func.isRequired,
    move: func.isRequired,
    pop: func.isRequired,
    push: func.isRequired,
    remove: func.isRequired,
    removeAll: func.isRequired,
    shift: func.isRequired,
    splice: func.isRequired,
    swap: func.isRequired,
    unshift: func.isRequired
  }),
  asyncValidate: func.isRequired,
  autofill: func.isRequired,
  blur: func.isRequired,
  change: func.isRequired,
  clearAsyncError: func.isRequired,
  destroy: func.isRequired,
  dispatch: func.isRequired,
  handleSubmit: func.isRequired,
  initialize: func.isRequired,
  reset: func.isRequired,
  touch: func.isRequired,
  submit: func.isRequired,
  untouch: func.isRequired,
  triggerSubmit: bool,
  clearSubmit: func.isRequired
};
var fieldInputPropTypes = {
  checked: bool,
  name: string.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  onDragStart: func.isRequired,
  onDrop: func.isRequired,
  onFocus: func.isRequired,
  value: any
};
var fieldMetaPropTypes = {
  active: bool.isRequired,
  asyncValidating: bool.isRequired,
  autofilled: bool.isRequired,
  dirty: bool.isRequired,
  dispatch: func.isRequired,
  error: string,
  form: string.isRequired,
  invalid: bool.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired,
  submitFailed: bool.isRequired,
  touched: bool.isRequired,
  valid: bool.isRequired,
  visited: bool.isRequired,
  warning: string
};
var fieldPropTypes = {
  input: shape(fieldInputPropTypes).isRequired,
  meta: shape(fieldMetaPropTypes).isRequired
};

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

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var processProps = function processProps(type, props, _value) {
  var value = props.value;
  if (type === 'checkbox') {
    return _extends$4({}, props, {
      checked: !!value
    });
  }
  if (type === 'radio') {
    return _extends$4({}, props, {
      checked: value === _value,
      value: _value
    });
  }
  if (type === 'select-multiple') {
    return _extends$4({}, props, {
      value: value || []
    });
  }
  if (type === 'file') {
    return _extends$4({}, props, {
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
      custom = _objectWithoutProperties$2(_ref, ['asyncError', 'asyncValidating', 'onBlur', 'onChange', 'onDrop', 'onDragStart', 'dirty', 'dispatch', 'onFocus', 'form', 'format', 'initial', 'parse', 'pristine', 'props', 'state', 'submitError', 'submitFailed', 'submitting', 'syncError', 'syncWarning', 'validate', 'value', '_value', 'warn']);
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
    meta: _extends$4({}, toJS(state), {
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
    custom: _extends$4({}, custom, props)
  };
};

var isEvent = function isEvent(candidate) {
  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
};

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
  if (isEvent(event)) {
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

var isReactNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';

var onChangeValue = function onChangeValue(event, _ref) {
  var name = _ref.name,
      parse = _ref.parse,
      normalize = _ref.normalize;
  var value = getValue(event, isReactNative);
  if (parse) {
    value = parse(value, name);
  }
  if (normalize) {
    value = normalize(name, value);
  }
  return value;
};

var dataKey = 'text';

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

function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var isArray = Array.isArray;

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function('return this')();

var Symbol$1 = root.Symbol;

var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
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

var objectProto$1 = Object.prototype;
var nativeObjectToString$1 = objectProto$1.toString;
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var symbolTag = '[object Symbol]';
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var coreJsData = root['__core-js_shared__'];

var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype;
var objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

function getValue$2(object, key) {
  return object == null ? undefined : object[key];
}

function getNative(object, key) {
  var value = getValue$2(object, key);
  return baseIsNative(value) ? value : undefined;
}

var nativeCreate = getNative(Object, 'create');

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var HASH_UNDEFINED = '__lodash_hash_undefined__';
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

function eq(value, other) {
  return value === other || (value !== value && other !== other);
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

var arrayProto = Array.prototype;
var splice$2 = arrayProto.splice;
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
    splice$2.call(data, index, 1);
  }
  --this.size;
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
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

var Map = getNative(root, 'Map');

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}
memoize.Cache = MapCache;

var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}

var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;
function baseToString(value) {
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

function toString(value) {
  return value == null ? '' : baseToString(value);
}

function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

var getIn = function getIn(state, field) {
  if (!state) {
    return state;
  }
  var path = toPath(field);
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

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
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
  return _extends$5({}, state, _defineProperty({}, first, next));
};
var setIn = function setIn(state, field, value) {
  return setInWithPath(state, value, toPath(field), 0);
};

function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

function stackGet(key) {
  return this.__data__.get(key);
}

function stackHas(key) {
  return this.__data__.has(key);
}

var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

function setCacheHas(value) {
  return this.__data__.has(value);
}

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

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

function cacheHas(cache, key) {
  return cache.has(key);
}

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
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
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
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
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

var Uint8Array = root.Uint8Array;

function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

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
var symbolTag$1 = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined;
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
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == (other + '');
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

function arrayPush$2(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush$2(result, symbolsFunc(object));
}

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

function stubArray() {
  return [];
}

var objectProto$7 = Object.prototype;
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var argsTag$1 = '[object Arguments]';
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}

var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

function stubFalse() {
  return false;
}

var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root.Buffer : undefined;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
var isBuffer = nativeIsBuffer || stubFalse;

var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$1 = '[object Function]';
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
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           key == 'length' ||
           (isBuff && (key == 'offset' || key == 'parent')) ||
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var objectProto$11 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$11;
  return value === proto;
}

function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var nativeKeys = overArg(Object.keys, Object);

var objectProto$10 = Object.prototype;
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$5.call(other, key))) {
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

var DataView = getNative(root, 'DataView');

var Promise$1 = getNative(root, 'Promise');

var Set = getNative(root, 'Set');

var WeakMap$1 = getNative(root, 'WeakMap');

var mapTag$2 = '[object Map]';
var objectTag$2 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';
var dataViewTag$2 = '[object DataView]';
var dataViewCtorString = toSource(DataView);
var mapCtorString = toSource(Map);
var promiseCtorString = toSource(Promise$1);
var setCtorString = toSource(Set);
var weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map && getTag(new Map) != mapTag$2) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag$2) ||
    (WeakMap$1 && getTag(new WeakMap$1) != weakMapTag$1)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';
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
var getTag$1 = getTag;

var COMPARE_PARTIAL_FLAG = 1;
var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var objectTag = '[object Object]';
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag$1(object),
      othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$4.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$4.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
}

var customizer = function customizer(obj, other) {
  if (obj === other) return true;
  if ((obj == null || obj === '' || obj === false) && (other == null || other === '' || other === false)) {
    return !(obj === undefined && other === false || obj === false && other === undefined);
  }
  if (obj && other && obj._error !== other._error) return false;
  if (obj && other && obj._warning !== other._warning) return false;
};
var deepEqual = function deepEqual(a, b) {
  return isEqualWith(a, b, customizer);
};

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
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
        var result = deleteInWithPath.apply(undefined, [state && state[firstIndex]].concat(_toConsumableArray$1(rest)));
        if (result !== state[firstIndex]) {
          var copy = [].concat(_toConsumableArray$1(state));
          copy[firstIndex] = result;
          return copy;
        }
      }
      return state;
    }
    if (first in state) {
      var _result = deleteInWithPath.apply(undefined, [state && state[first]].concat(_toConsumableArray$1(rest)));
      return state[first] === _result ? state : _extends$6({}, state, _defineProperty$1({}, first, _result));
    }
    return state;
  }
  if (Array.isArray(state)) {
    if (isNaN(first)) {
      throw new Error('Cannot delete non-numerical index from an array. Given: "' + String(first));
    }
    var _firstIndex = Number(first);
    if (_firstIndex < state.length) {
      var _copy = [].concat(_toConsumableArray$1(state));
      _copy.splice(_firstIndex, 1);
      return _copy;
    }
    return state;
  }
  if (first in state) {
    var _copy2 = _extends$6({}, state);
    delete _copy2[first];
    return _copy2;
  }
  return state;
}
var deleteIn = function deleteIn(state, field) {
  return deleteInWithPath.apply(undefined, [state].concat(_toConsumableArray$1(toPath(field))));
};

function keys$2(value) {
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

var structure = {
  allowsArrayErrors: true,
  empty: {},
  emptyList: [],
  getIn: getIn,
  setIn: setIn,
  deepEqual: deepEqual,
  deleteIn: deleteIn,
  forEach: function forEach(items, callback) {
    return items.forEach(callback);
  },
  fromJS: function fromJS(value) {
    return value;
  },
  keys: keys$2,
  size: function size(array) {
    return array ? array.length : 0;
  },
  some: function some(items, callback) {
    return items.some(callback);
  },
  splice: splice,
  toJS: function toJS(value) {
    return value;
  }
};

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
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
var createConnectedField = function createConnectedField(structure$$1) {
  var deepEqual = structure$$1.deepEqual,
      getIn = structure$$1.getIn;
  var getSyncError = function getSyncError(syncErrors, name) {
    var error = structure.getIn(syncErrors, name);
    return error && error._error ? error._error : error;
  };
  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name);
    return warning && warning._warning ? warning._warning : warning;
  };
  var ConnectedField = function (_Component) {
    _inherits$4(ConnectedField, _Component);
    function ConnectedField() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$4(this, ConnectedField);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$4(this, (_ref = ConnectedField.__proto__ || Object.getPrototypeOf(ConnectedField)).call.apply(_ref, [this].concat(args))), _this), _this.saveRef = function (ref) {
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
        var newValue = onChangeValue(event, { name: name, parse: parse, normalize: normalize });
        var defaultPrevented = false;
        if (onChange) {
          onChange(_extends$3({}, event, {
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
          onFocus(_extends$3({}, event, {
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
        var newValue = onChangeValue(event, { name: name, parse: parse, normalize: normalize });
        if (newValue === _value && _value !== undefined) {
          newValue = previousValue;
        }
        var defaultPrevented = false;
        if (onBlur) {
          onBlur(_extends$3({}, event, {
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
        eventDataTransferSetData(event, dataKey, value == null ? '' : value);
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
        var newValue = eventDataTransferGetData(event, dataKey);
        var defaultPrevented = false;
        if (onDrop) {
          onDrop(_extends$3({}, event, {
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
      }, _temp), _possibleConstructorReturn$4(_this, _ret);
    }
    _createClass$3(ConnectedField, [{
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
            rest = _objectWithoutProperties$1(_props, ['component', 'withRef', 'name', '_reduxForm', 'normalize', 'onBlur', 'onChange', 'onFocus', 'onDragStart', 'onDrop']);
        var _createFieldProps = createFieldProps(structure$$1, name, _extends$3({}, rest, {
          form: _reduxForm.form,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onDrop: this.handleDrop,
          onDragStart: this.handleDragStart,
          onFocus: this.handleFocus
        })),
            custom = _createFieldProps.custom,
            props = _objectWithoutProperties$1(_createFieldProps, ['custom']);
        if (withRef) {
          custom.ref = this.saveRef;
        }
        if (typeof component === 'string') {
          var input = props.input;
          return createElement(component, _extends$3({}, input, custom));
        } else {
          return createElement(component, _extends$3({}, props, custom));
        }
      }
    }]);
    return ConnectedField;
  }(Component);
  ConnectedField.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    props: PropTypes.object
  };
  var connector = connect(function (state, ownProps) {
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

var customizer$1 = function customizer(objectValue, otherValue, indexOrkey, object, other, stack) {
  if (stack) {
    return objectValue === otherValue;
  }
};
var shallowCompare = function shallowCompare(instance, nextProps, nextState) {
  return !isEqualWith(instance.props, nextProps, customizer$1) || !isEqualWith(instance.state, nextState, customizer$1);
};

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var createField = function createField(structure$$1) {
  var ConnectedField = createConnectedField(structure$$1);
  var setIn = structure$$1.setIn;
  var Field = function (_Component) {
    _inherits$3(Field, _Component);
    function Field(props, context) {
      _classCallCheck$3(this, Field);
      var _this = _possibleConstructorReturn$3(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props, context));
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
    _createClass$2(Field, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return shallowCompare(this, nextProps);
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
        !structure.deepEqual(this.props.validate, nextProps.validate) || !structure.deepEqual(this.props.warn, nextProps.warn)) {
          this.context._reduxForm.unregister(this.name);
          this.context._reduxForm.register(formatName(this.context, nextProps.name), 'Field', function () {
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
        invariant_1(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to Field');
        return this.ref ? this.ref.getWrappedInstance().getRenderedComponent() : undefined;
      }
    }, {
      key: 'render',
      value: function render() {
        return createElement(ConnectedField, _extends$2({}, this.props, {
          name: this.name,
          normalize: this.normalize,
          _reduxForm: this.context._reduxForm,
          ref: this.saveRef
        }));
      }
    }, {
      key: 'name',
      get: function get() {
        return formatName(this.context, this.props.name);
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
  }(Component);
  Field.propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    format: PropTypes.func,
    normalize: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    parse: PropTypes.func,
    props: PropTypes.object,
    validate: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
    warn: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
    withRef: PropTypes.bool
  };
  Field.contextTypes = {
    _reduxForm: PropTypes.object
  };
  return Field;
};

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
var immutable_1 = immutable$1.fromJS;
var immutable_2 = immutable$1.Map;
var immutable_3 = immutable$1.List;
var immutable_5 = immutable$1.Iterable;

var customizer$2 = function customizer(obj, other) {
  if (obj == other) return true;
  if ((obj == null || obj === '' || obj === false) && (other == null || other === '' || other === false)) return true;
  if (immutable_5.isIterable(obj) && immutable_5.isIterable(other)) {
    return obj.count() === other.count() && obj.every(function (value, key) {
      return other.has(key) && isEqualWith(value, other.get(key), customizer);
    });
  }
  return void 0;
};
var deepEqual$2 = function deepEqual(a, b) {
  return isEqualWith(a, b, customizer$2);
};

var empty = immutable_3();
var keys$3 = function keys(value) {
  if (immutable_3.isList(value)) {
    return value.map(function (i) {
      return i.name;
    });
  }
  if (immutable_5.isIterable(value)) {
    return value.keySeq();
  }
  return value ? immutable_3(keys$2(value)) : empty;
};

var arrayPattern = /\[(\d+)\]/;
var undefinedArrayMerge = function undefinedArrayMerge(previous, next) {
  return next !== undefined ? next : previous;
};
var mergeLists = function mergeLists(original, value) {
  return original && immutable_3.isList(original) ? original.mergeDeepWith(undefinedArrayMerge, value) : value;
};
function setIn$2(state, field, value) {
  var path = toPath(field);
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
        return mergeLists(value, new immutable_3().set(parseInt(nextPart, 10), new immutable_2()));
      });
    };
    for (var pathIndex = 0; pathIndex < path.length - 1; ++pathIndex) {
      var _ret = _loop(pathIndex);
      if (_ret === 'continue') continue;
    }
    return mutable.setIn(path, value);
  });
}

var splice$3 = (function (list, index, removeNum, value) {
  list = immutable_3.isList(list) ? list : immutable_3();
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
});

var emptyList = immutable_3();
var structure$1 = {
  allowsArrayErrors: false,
  empty: immutable_2(),
  emptyList: emptyList,
  getIn: function getIn$$1(state, field) {
    return immutable_5.isIterable(state) ? state.getIn(toPath(field)) : getIn(state, field);
  },
  setIn: setIn$2,
  deepEqual: deepEqual$2,
  deleteIn: function deleteIn(state, field) {
    return state.deleteIn(toPath(field));
  },
  forEach: function forEach(items, callback) {
    items.forEach(callback);
  },
  fromJS: function fromJS$$1(jsValue) {
    return immutable_1(jsValue, function (key, value) {
      return immutable_5.isIndexed(value) ? value.toList() : value.toMap();
    });
  },
  keys: keys$3,
  size: function size(list) {
    return list ? list.size : 0;
  },
  some: function some(items, callback) {
    return items.some(callback);
  },
  splice: splice$3,
  toJS: function toJS(value) {
    return immutable_5.isIterable(value) ? value.toJS() : value;
  }
};

var Field = createField(structure$1);

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass$5 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propsToNotUpdateFor$1 = ['_reduxForm'];
var createConnectedFields = function createConnectedFields(structure$$1) {
  var deepEqual = structure$$1.deepEqual,
      getIn = structure$$1.getIn,
      size = structure$$1.size;
  var getSyncError = function getSyncError(syncErrors, name) {
    return structure.getIn(syncErrors, name + '._error') || structure.getIn(syncErrors, name);
  };
  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name);
    return warning && warning._warning ? warning._warning : warning;
  };
  var ConnectedFields = function (_Component) {
    _inherits$6(ConnectedFields, _Component);
    function ConnectedFields(props) {
      _classCallCheck$6(this, ConnectedFields);
      var _this = _possibleConstructorReturn$6(this, (ConnectedFields.__proto__ || Object.getPrototypeOf(ConnectedFields)).call(this, props));
      _this.onChangeFns = {};
      _this.onFocusFns = {};
      _this.onBlurFns = {};
      _this.prepareEventHandlers = function (_ref) {
        var names = _ref.names;
        return names.forEach(function (name) {
          _this.onChangeFns[name] = function (event) {
            return _this.handleChange(name, event);
          };
          _this.onFocusFns[name] = function () {
            return _this.handleFocus(name);
          };
          _this.onBlurFns[name] = function (event) {
            return _this.handleBlur(name, event);
          };
        });
      };
      _this.handleChange = function (name, event) {
        var _this$props = _this.props,
            dispatch = _this$props.dispatch,
            parse = _this$props.parse,
            _reduxForm = _this$props._reduxForm;
        var value = onChangeValue(event, { name: name, parse: parse });
        dispatch(_reduxForm.change(name, value));
      };
      _this.handleFocus = function (name) {
        var _this$props2 = _this.props,
            dispatch = _this$props2.dispatch,
            _reduxForm = _this$props2._reduxForm;
        dispatch(_reduxForm.focus(name));
      };
      _this.handleBlur = function (name, event) {
        var _this$props3 = _this.props,
            dispatch = _this$props3.dispatch,
            parse = _this$props3.parse,
            _reduxForm = _this$props3._reduxForm;
        var value = onChangeValue(event, { name: name, parse: parse });
        dispatch(_reduxForm.blur(name, value));
        if (_reduxForm.asyncValidate) {
          _reduxForm.asyncValidate(name, value);
        }
      };
      _this.prepareEventHandlers(props);
      return _this;
    }
    _createClass$5(ConnectedFields, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;
        if (this.props.names !== nextProps.names && (size(this.props.names) !== size(nextProps.names) || nextProps.names.some(function (nextName) {
          return !_this2.props._fields[nextName];
        }))) {
          this.prepareEventHandlers(nextProps);
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this3 = this;
        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          return !~propsToNotUpdateFor$1.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'isDirty',
      value: function isDirty() {
        var _fields = this.props._fields;
        return Object.keys(_fields).some(function (name) {
          return _fields[name].dirty;
        });
      }
    }, {
      key: 'getValues',
      value: function getValues() {
        var _fields = this.props._fields;
        return Object.keys(_fields).reduce(function (accumulator, name) {
          return structure.setIn(accumulator, name, _fields[name].value);
        }, {});
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.refs.renderedComponent;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;
        var _props = this.props,
            component = _props.component,
            withRef = _props.withRef,
            _fields = _props._fields,
            _reduxForm = _props._reduxForm,
            rest = _objectWithoutProperties$3(_props, ['component', 'withRef', '_fields', '_reduxForm']);
        var sectionPrefix = _reduxForm.sectionPrefix,
            form = _reduxForm.form;
        var _Object$keys$reduce = Object.keys(_fields).reduce(function (accumulator, name) {
          var connectedProps = _fields[name];
          var _createFieldProps = createFieldProps(structure$$1, name, _extends$8({}, connectedProps, rest, {
            form: form,
            onBlur: _this4.onBlurFns[name],
            onChange: _this4.onChangeFns[name],
            onFocus: _this4.onFocusFns[name]
          })),
              custom = _createFieldProps.custom,
              fieldProps = _objectWithoutProperties$3(_createFieldProps, ['custom']);
          accumulator.custom = custom;
          var fieldName = sectionPrefix ? name.replace(sectionPrefix + '.', '') : name;
          return structure.setIn(accumulator, fieldName, fieldProps);
        }, {}),
            custom = _Object$keys$reduce.custom,
            props = _objectWithoutProperties$3(_Object$keys$reduce, ['custom']);
        if (withRef) {
          props.ref = 'renderedComponent';
        }
        return createElement(component, _extends$8({}, props, custom));
      }
    }]);
    return ConnectedFields;
  }(Component);
  ConnectedFields.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    _fields: PropTypes.object.isRequired,
    props: PropTypes.object
  };
  var connector = connect(function (state, ownProps) {
    var names = ownProps.names,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;
    var formState = getFormState(state);
    return {
      _fields: names.reduce(function (accumulator, name) {
        var initialState = getIn(formState, 'initial.' + name);
        var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
        var value = getIn(formState, 'values.' + name);
        var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
        var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
        var submitting = getIn(formState, 'submitting');
        var pristine = value === initial;
        accumulator[name] = {
          asyncError: getIn(formState, 'asyncErrors.' + name),
          asyncValidating: getIn(formState, 'asyncValidating') === name,
          dirty: !pristine,
          initial: initial,
          pristine: pristine,
          state: getIn(formState, 'fields.' + name),
          submitError: getIn(formState, 'submitErrors.' + name),
          submitFailed: getIn(formState, 'submitFailed'),
          submitting: submitting,
          syncError: syncError,
          syncWarning: syncWarning,
          value: value,
          _value: ownProps.value
        };
        return accumulator;
      }, {})
    };
  }, undefined, undefined, { withRef: true });
  return connector(ConnectedFields);
};

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var validateNameProp = function validateNameProp(prop) {
  if (!prop) {
    return new Error('No "names" prop was specified <Fields/>');
  }
  if (!Array.isArray(prop) && !prop._isFieldArray) {
    return new Error('Invalid prop "names" supplied to <Fields/>. Must be either an array of strings or the fields array generated by FieldArray.');
  }
};
var createFields = function createFields(structure$$1) {
  var ConnectedFields = createConnectedFields(structure$$1);
  var Fields = function (_Component) {
    _inherits$5(Fields, _Component);
    function Fields(props, context) {
      _classCallCheck$5(this, Fields);
      var _this = _possibleConstructorReturn$5(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).call(this, props, context));
      if (!context._reduxForm) {
        throw new Error('Fields must be inside a component decorated with reduxForm()');
      }
      return _this;
    }
    _createClass$4(Fields, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return shallowCompare(this, nextProps);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var error = validateNameProp(this.props.names);
        if (error) {
          throw error;
        }
        var context = this.context;
        var register = context._reduxForm.register;
        this.names.forEach(function (name) {
          return register(name, 'Field');
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!structure.deepEqual(this.props.names, nextProps.names)) {
          var context = this.context;
          var _context$_reduxForm = context._reduxForm,
              register = _context$_reduxForm.register,
              unregister = _context$_reduxForm.unregister;
          this.props.names.forEach(function (name) {
            return unregister(formatName(context, name));
          });
          nextProps.names.forEach(function (name) {
            return register(formatName(context, name), 'Field');
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var context = this.context;
        var unregister = context._reduxForm.unregister;
        this.props.names.forEach(function (name) {
          return unregister(formatName(context, name));
        });
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        invariant_1(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to Fields');
        return this.refs.connected.getWrappedInstance().getRenderedComponent();
      }
    }, {
      key: 'render',
      value: function render() {
        var context = this.context;
        return createElement(ConnectedFields, _extends$7({}, this.props, {
          names: this.props.names.map(function (name) {
            return formatName(context, name);
          }),
          _reduxForm: this.context._reduxForm,
          ref: 'connected'
        }));
      }
    }, {
      key: 'names',
      get: function get() {
        var context = this.context;
        return this.props.names.map(function (name) {
          return formatName(context, name);
        });
      }
    }, {
      key: 'dirty',
      get: function get() {
        return this.refs.connected.getWrappedInstance().isDirty();
      }
    }, {
      key: 'pristine',
      get: function get() {
        return !this.dirty;
      }
    }, {
      key: 'values',
      get: function get() {
        return this.refs.connected && this.refs.connected.getWrappedInstance().getValues();
      }
    }]);
    return Fields;
  }(Component);
  Fields.propTypes = {
    names: function names(props, propName) {
      return validateNameProp(props[propName]);
    },
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    format: PropTypes.func,
    parse: PropTypes.func,
    props: PropTypes.object,
    withRef: PropTypes.bool
  };
  Fields.contextTypes = {
    _reduxForm: PropTypes.object
  };
  return Fields;
};

createFields(structure$1);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

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

var baseFor = createBaseFor();

function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

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
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

function isStrictComparable(value) {
  return value === value && !isObject$1(value);
}

function getMatchData(object) {
  var result = keys(object),
      length = result.length;
  while (length--) {
    var key = result[length],
        value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

function identity(value) {
  return value;
}

function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

function baseIteratee(value) {
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);
  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

var _extends$10 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
function _objectWithoutProperties$5(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var createFieldArrayProps = function createFieldArrayProps(_ref2, name, form, sectionPrefix, getValue, _ref) {
  var getIn = _ref2.getIn;
  var arrayInsert = _ref.arrayInsert,
      arrayMove = _ref.arrayMove,
      arrayPop = _ref.arrayPop,
      arrayPush = _ref.arrayPush,
      arrayRemove = _ref.arrayRemove,
      arrayRemoveAll = _ref.arrayRemoveAll,
      arrayShift = _ref.arrayShift,
      arraySplice = _ref.arraySplice,
      arraySwap = _ref.arraySwap,
      arrayUnshift = _ref.arrayUnshift,
      asyncError = _ref.asyncError,
      dirty = _ref.dirty,
      length = _ref.length,
      pristine = _ref.pristine,
      submitError = _ref.submitError,
      state = _ref.state,
      submitFailed = _ref.submitFailed,
      submitting = _ref.submitting,
      syncError = _ref.syncError,
      syncWarning = _ref.syncWarning,
      value = _ref.value,
      props = _ref.props,
      rest = _objectWithoutProperties$5(_ref, ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncError', 'dirty', 'length', 'pristine', 'submitError', 'state', 'submitFailed', 'submitting', 'syncError', 'syncWarning', 'value', 'props']);
  var error = syncError || asyncError || submitError;
  var warning = syncWarning;
  var fieldName = sectionPrefix ? name.replace(sectionPrefix + '.', '') : name;
  var finalProps = _extends$10({
    fields: {
      _isFieldArray: true,
      forEach: function forEach(callback) {
        return (value || []).forEach(function (item, index) {
          return callback(fieldName + '[' + index + ']', index, finalProps.fields);
        });
      },
      get: getValue,
      getAll: function getAll() {
        return value;
      },
      insert: arrayInsert,
      length: length,
      map: function map(callback) {
        return (value || []).map(function (item, index) {
          return callback(fieldName + '[' + index + ']', index, finalProps.fields);
        });
      },
      move: arrayMove,
      name: name,
      pop: function pop() {
        arrayPop();
        return getIn(value, String(length - 1));
      },
      push: arrayPush,
      reduce: function reduce(callback, initial) {
        return (value || []).reduce(function (accumulator, item, index) {
          return callback(accumulator, fieldName + '[' + index + ']', index, finalProps.fields);
        }, initial);
      },
      remove: arrayRemove,
      removeAll: arrayRemoveAll,
      shift: function shift() {
        arrayShift();
        return getIn(value, '0');
      },
      swap: arraySwap,
      unshift: arrayUnshift
    },
    meta: {
      dirty: dirty,
      error: error,
      form: form,
      warning: warning,
      invalid: !!error,
      pristine: pristine,
      submitting: submitting,
      submitFailed: submitFailed,
      valid: !error
    }
  }, props, rest);
  return finalProps;
};

var _createClass$7 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$8(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var propsToNotUpdateFor$2 = ['_reduxForm', 'value'];
var createConnectedFieldArray = function createConnectedFieldArray(structure$$1) {
  var deepEqual = structure$$1.deepEqual,
      getIn = structure$$1.getIn,
      size = structure$$1.size;
  var getSyncError = function getSyncError(syncErrors, name) {
    return structure.getIn(syncErrors, name + '._error');
  };
  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    return getIn(syncWarnings, name + '._warning');
  };
  var ConnectedFieldArray = function (_Component) {
    _inherits$8(ConnectedFieldArray, _Component);
    function ConnectedFieldArray() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$8(this, ConnectedFieldArray);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$8(this, (_ref = ConnectedFieldArray.__proto__ || Object.getPrototypeOf(ConnectedFieldArray)).call.apply(_ref, [this].concat(args))), _this), _this.saveRef = function (ref) {
        _this.ref = ref;
      }, _this.getValue = function (index) {
        return _this.props.value && getIn(_this.props.value, String(index));
      }, _temp), _possibleConstructorReturn$8(_this, _ret);
    }
    _createClass$7(ConnectedFieldArray, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this2 = this;
        var thisValue = this.props.value;
        var nextValue = nextProps.value;
        if (thisValue && nextValue) {
          if (thisValue.length !== nextValue.length || nextProps.rerenderOnEveryChange && thisValue.some(function (val, index) {
            return !deepEqual(val, nextValue[index]);
          })) {
            return true;
          }
        }
        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          return !~propsToNotUpdateFor$2.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
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
            validate = _props.validate,
            warn = _props.warn,
            rerenderOnEveryChange = _props.rerenderOnEveryChange,
            rest = _objectWithoutProperties$4(_props, ['component', 'withRef', 'name', '_reduxForm', 'validate', 'warn', 'rerenderOnEveryChange']);
        var props = createFieldArrayProps(structure$$1, name, _reduxForm.form, _reduxForm.sectionPrefix, this.getValue, rest);
        if (withRef) {
          props.ref = this.saveRef;
        }
        return createElement(component, props);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return this.props.dirty;
      }
    }, {
      key: 'pristine',
      get: function get() {
        return this.props.pristine;
      }
    }, {
      key: 'value',
      get: function get() {
        return this.props.value;
      }
    }]);
    return ConnectedFieldArray;
  }(Component);
  ConnectedFieldArray.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    props: PropTypes.object,
    rerenderOnEveryChange: PropTypes.bool
  };
  ConnectedFieldArray.defaultProps = {
    rerenderOnEveryChange: false
  };
  ConnectedFieldArray.contextTypes = {
    _reduxForm: PropTypes.object
  };
  var connector = connect(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;
    var formState = getFormState(state);
    var initial = getIn(formState, 'initial.' + name) || initialValues && getIn(initialValues, name);
    var value = getIn(formState, 'values.' + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, 'asyncErrors.' + name + '._error'),
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, 'fields.' + name),
      submitError: getIn(formState, 'submitErrors.' + name + '._error'),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      value: value,
      length: size(value)
    };
  }, function (dispatch, ownProps) {
    var name = ownProps.name,
        _reduxForm = ownProps._reduxForm;
    var arrayInsert = _reduxForm.arrayInsert,
        arrayMove = _reduxForm.arrayMove,
        arrayPop = _reduxForm.arrayPop,
        arrayPush = _reduxForm.arrayPush,
        arrayRemove = _reduxForm.arrayRemove,
        arrayRemoveAll = _reduxForm.arrayRemoveAll,
        arrayShift = _reduxForm.arrayShift,
        arraySplice = _reduxForm.arraySplice,
        arraySwap = _reduxForm.arraySwap,
        arrayUnshift = _reduxForm.arrayUnshift;
    return mapValues({
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
    }, function (actionCreator) {
      return bindActionCreators(actionCreator.bind(null, name), dispatch);
    });
  }, undefined, { withRef: true });
  return connector(ConnectedFieldArray);
};

var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _createClass$6 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$7(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var toArray = function toArray(value) {
  return Array.isArray(value) ? value : [value];
};
var wrapError = function wrapError(fn, key) {
  return fn && function () {
    var validators = toArray(fn);
    for (var i = 0; i < validators.length; i++) {
      var result = validators[i].apply(validators, arguments);
      if (result) {
        return _defineProperty$2({}, key, result);
      }
    }
  };
};
var createFieldArray = function createFieldArray(structure) {
  var ConnectedFieldArray = createConnectedFieldArray(structure);
  var FieldArray = function (_Component) {
    _inherits$7(FieldArray, _Component);
    function FieldArray(props, context) {
      _classCallCheck$7(this, FieldArray);
      var _this = _possibleConstructorReturn$7(this, (FieldArray.__proto__ || Object.getPrototypeOf(FieldArray)).call(this, props, context));
      _this.saveRef = function (ref) {
        _this.ref = ref;
      };
      if (!context._reduxForm) {
        throw new Error('FieldArray must be inside a component decorated with reduxForm()');
      }
      return _this;
    }
    _createClass$6(FieldArray, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;
        this.context._reduxForm.register(this.name, 'FieldArray', function () {
          return wrapError(_this2.props.validate, '_error');
        }, function () {
          return wrapError(_this2.props.warn, '_warning');
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          this.context._reduxForm.unregister(this.name);
          this.context._reduxForm.register(formatName(this.context, nextProps.name), 'FieldArray');
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
        invariant_1(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to FieldArray');
        return this.ref && this.ref.getWrappedInstance().getRenderedComponent();
      }
    }, {
      key: 'render',
      value: function render() {
        return createElement(ConnectedFieldArray, _extends$9({}, this.props, {
          name: this.name,
          _reduxForm: this.context._reduxForm,
          ref: this.saveRef
        }));
      }
    }, {
      key: 'name',
      get: function get() {
        return formatName(this.context, this.props.name);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return !this.ref || this.ref.getWrappedInstance().dirty;
      }
    }, {
      key: 'pristine',
      get: function get() {
        return !!(this.ref && this.ref.getWrappedInstance().pristine);
      }
    }, {
      key: 'value',
      get: function get() {
        return this.ref ? this.ref.getWrappedInstance().value : undefined;
      }
    }]);
    return FieldArray;
  }(Component);
  FieldArray.propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    props: PropTypes.object,
    validate: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
    warn: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
    withRef: PropTypes.bool
  };
  FieldArray.contextTypes = {
    _reduxForm: PropTypes.object
  };
  return FieldArray;
};

createFieldArray(structure$1);

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

var createIsValid = function createIsValid(structure) {
  var getIn = structure.getIn,
      keys = structure.keys;
  var hasError = createHasError(structure);
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
        return hasError(getIn(registeredFields, '[\'' + name + '\']'), syncErrors, asyncErrors, submitErrors);
      });
    };
  };
};

createIsValid(structure$1);

function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;
var allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var objectCreate = Object.create;
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject$1(proto)) {
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

var getPrototype = overArg(Object.getPrototypeOf, Object);

function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

var objectTag$3 = '[object Object]';
var funcProto$2 = Function.prototype;
var objectProto$12 = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$9 = objectProto$12.hasOwnProperty;
var objectCtorString = funcToString$2.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$9.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var objectProto$13 = Object.prototype;
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$10.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

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
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
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

var objectProto$14 = Object.prototype;
var hasOwnProperty$11 = objectProto$14.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$11.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject$1(objValue) || (srcIndex && isFunction$1(objValue))) {
        newValue = initCloneObject(srcValue);
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
  assignMergeValue(object, key, newValue);
}

function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject$1(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var nativeMax = Math.max;
function overRest(func, start, transform) {
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
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

function constant(value) {
  return function() {
    return value;
  };
}

var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

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

var setToString = shortOut(baseSetToString);

function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

function isIterateeCall(value, index, object) {
  if (!isObject$1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
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

var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

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

var asyncValidation = function asyncValidation(fn, start, stop, field) {
  start(field);
  var promise = fn();
  if (!isPromise_1(promise)) {
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

var silenceEvent = function silenceEvent(event) {
  var is = isEvent(event);
  if (is) {
    event.preventDefault();
  }
  return is;
};

var silenceEvents = function silenceEvents(fn) {
  return function (event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return silenceEvent(event) ? fn.apply(undefined, args) : fn.apply(undefined, [event].concat(args));
  };
};

var toArray$1 = function toArray(value) {
  return Array.isArray(value) ? value : [value];
};
var getError = function getError(value, values, props, validators) {
  var array = toArray$1(validators);
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
        errors = structure.setIn(errors, name, error);
      }
    });
    return errors;
  };
};

var _extends$13 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
function _toConsumableArray$4(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
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
  touch.apply(undefined, _toConsumableArray$4(fields));
  if (valid || persistentSubmitErrors) {
    var doSubmit = function doSubmit() {
      var result = void 0;
      try {
        result = submit(values, dispatch, props);
      } catch (submitError) {
        var error = submitError instanceof SubmissionError ? submitError.errors : undefined;
        stopSubmit(error);
        setSubmitFailed.apply(undefined, _toConsumableArray$4(fields));
        if (onSubmitFail) {
          onSubmitFail(error, dispatch, submitError, props);
        }
        if (error || onSubmitFail) {
          return error;
        } else {
          throw submitError;
        }
      }
      if (isPromise_1(result)) {
        startSubmit();
        return result.then(function (submitResult) {
          stopSubmit();
          setSubmitSucceeded();
          if (onSubmitSuccess) {
            onSubmitSuccess(submitResult, dispatch, props);
          }
          return submitResult;
        }, function (submitError) {
          var error = submitError instanceof SubmissionError ? submitError.errors : undefined;
          stopSubmit(error);
          setSubmitFailed.apply(undefined, _toConsumableArray$4(fields));
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
        setSubmitFailed.apply(undefined, _toConsumableArray$4(fields));
        if (onSubmitFail) {
          onSubmitFail(asyncErrors, dispatch, null, props);
        }
        return Promise.reject(asyncErrors);
      });
    } else {
      return doSubmit();
    }
  } else {
    setSubmitFailed.apply(undefined, _toConsumableArray$4(fields));
    var errors = _extends$13({}, asyncErrors, syncErrors);
    if (onSubmitFail) {
      onSubmitFail(errors, dispatch, null, props);
    }
    return errors;
  }
};

var getDisplayName = function getDisplayName(Comp) {
  return Comp.displayName || Comp.name || 'Component';
};

var _createClass$9 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _extends$12 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck$10(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$10(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$10(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _toConsumableArray$3(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
function _objectWithoutProperties$7(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var isClassComponent = function isClassComponent(Component$$1) {
  return Boolean(Component$$1 && Component$$1.prototype && _typeof$1(Component$$1.prototype.isReactComponent) === 'object');
};
var arrayInsert$2 = actions.arrayInsert;
var arrayMove$2 = actions.arrayMove;
var arrayPop$2 = actions.arrayPop;
var arrayPush$4 = actions.arrayPush;
var arrayRemove$2 = actions.arrayRemove;
var arrayRemoveAll$2 = actions.arrayRemoveAll;
var arrayShift$2 = actions.arrayShift;
var arraySplice$2 = actions.arraySplice;
var arraySwap$2 = actions.arraySwap;
var arrayUnshift$2 = actions.arrayUnshift;
var blur$2 = actions.blur;
var change$2 = actions.change;
var focus$2 = actions.focus;
var formActions = _objectWithoutProperties$7(actions, ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'blur', 'change', 'focus']);
var arrayActions = {
  arrayInsert: arrayInsert$2,
  arrayMove: arrayMove$2,
  arrayPop: arrayPop$2,
  arrayPush: arrayPush$4,
  arrayRemove: arrayRemove$2,
  arrayRemoveAll: arrayRemoveAll$2,
  arrayShift: arrayShift$2,
  arraySplice: arraySplice$2,
  arraySwap: arraySwap$2,
  arrayUnshift: arrayUnshift$2
};
var propsToNotUpdateFor$3 = [].concat(_toConsumableArray$3(Object.keys(actions)), ['array', 'asyncErrors', 'initialValues', 'syncErrors', 'syncWarnings', 'values', 'registeredFields']);
var checkSubmit = function checkSubmit(submit) {
  if (!submit || typeof submit !== 'function') {
    throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
  }
  return submit;
};
var createReduxForm = function createReduxForm(structure$$1) {
  var deepEqual = structure$$1.deepEqual,
      empty = structure$$1.empty,
      getIn = structure$$1.getIn,
      setIn = structure$$1.setIn,
      keys = structure$$1.keys,
      fromJS = structure$$1.fromJS;
  var isValid = createIsValid(structure$$1);
  return function (initialConfig) {
    var config = _extends$12({
      touchOnBlur: true,
      touchOnChange: false,
      persistentSubmitErrors: false,
      destroyOnUnmount: true,
      shouldAsyncValidate: defaultShouldAsyncValidate,
      shouldValidate: defaultShouldValidate,
      enableReinitialize: false,
      keepDirtyOnReinitialize: false,
      getFormState: function getFormState(state) {
        return getIn(state, 'form');
      },
      pure: true,
      forceUnregisterOnUnmount: false
    }, initialConfig);
    return function (WrappedComponent) {
      var Form$$1 = function (_Component) {
        _inherits$10(Form$$1, _Component);
        function Form$$1() {
          var _ref;
          var _temp, _this, _ret;
          _classCallCheck$10(this, Form$$1);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn$10(this, (_ref = Form$$1.__proto__ || Object.getPrototypeOf(Form$$1)).call.apply(_ref, [this].concat(args))), _this), _this.destroyed = false, _this.fieldValidators = {}, _this.lastFieldValidatorKeys = [], _this.fieldWarners = {}, _this.lastFieldWarnerKeys = [], _this.innerOnSubmit = undefined, _this.submitPromise = undefined, _this.getValues = function () {
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
            return Object.keys(validators).length ? generateValidator(validators, structure$$1) : undefined;
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
            return Object.keys(warners).length ? generateValidator(warners, structure$$1) : undefined;
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
                return asyncValidation(function () {
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
            if (!isPromise_1(promise)) {
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
            if (!submitOrEvent || silenceEvent(submitOrEvent)) {
              if (!_this.submitPromise) {
                if (_this.innerOnSubmit && _this.innerOnSubmit !== _this.submit) {
                  return _this.innerOnSubmit();
                } else {
                  return _this.listenToSubmit(handleSubmit(checkSubmit(onSubmit), _extends$12({}, _this.props, bindActionCreators({ blur: blur, change: change }, dispatch)), _this.props.validExceptSubmit, _this.asyncValidate, _this.getFieldList({ excludeFieldArray: true })));
                }
              }
            } else {
              return silenceEvents(function () {
                return !_this.submitPromise && _this.listenToSubmit(handleSubmit(checkSubmit(submitOrEvent), _extends$12({}, _this.props, bindActionCreators({ blur: blur, change: change }, dispatch)), _this.props.validExceptSubmit, _this.asyncValidate, _this.getFieldList({ excludeFieldArray: true })));
              });
            }
          }, _this.reset = function () {
            return _this.props.reset();
          }, _temp), _possibleConstructorReturn$10(_this, _ret);
        }
        _createClass$9(Form$$1, [{
          key: 'getChildContext',
          value: function getChildContext() {
            var _this2 = this;
            return {
              _reduxForm: _extends$12({}, this.props, {
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
            if (!(noErrors && nextNoErrors) && (!structure.deepEqual(lastSyncErrors, nextSyncErrors) || !structure.deepEqual(error, nextError))) {
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
                structure: structure$$1
              });
              if (shouldValidateResult) {
                var propsToValidate = initialRender || !nextProps ? this.props : nextProps;
                var _merge2 = merge(validate ? validate(propsToValidate.values, propsToValidate) || {} : {}, fieldLevelValidate ? fieldLevelValidate(propsToValidate.values, propsToValidate) || {} : {}),
                    _error = _merge2._error,
                    nextSyncErrors = _objectWithoutProperties$7(_merge2, ['_error']);
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
            if (!(noWarnings && nextNoWarnings) && (!structure.deepEqual(lastSyncWarnings, nextSyncWarnings) || !structure.deepEqual(warning, nextWarning))) {
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
                structure: structure$$1
              });
              if (shouldWarnResult) {
                var propsToWarn = initialRender || !nextProps ? this.props : nextProps;
                var _merge3 = merge(warn ? warn(propsToWarn.values, propsToWarn) : {}, fieldLevelWarn ? fieldLevelWarn(propsToWarn.values, propsToWarn) : {}),
                    _warning = _merge3._warning,
                    nextSyncWarnings = _objectWithoutProperties$7(_merge3, ['_warning']);
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
              return !~propsToNotUpdateFor$3.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
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
                rest = _objectWithoutProperties$7(_props7, ['anyTouched', 'arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncErrors', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'clearSubmit', 'destroy', 'destroyOnUnmount', 'forceUnregisterOnUnmount', 'dirty', 'dispatch', 'enableReinitialize', 'error', 'focus', 'form', 'getFormState', 'initialize', 'initialized', 'initialValues', 'invalid', 'keepDirtyOnReinitialize', 'pristine', 'propNamespace', 'registeredFields', 'registerField', 'reset', 'setSubmitFailed', 'setSubmitSucceeded', 'shouldAsyncValidate', 'shouldValidate', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitting', 'submitFailed', 'submitSucceeded', 'touch', 'touchOnBlur', 'touchOnChange', 'persistentSubmitErrors', 'syncErrors', 'syncWarnings', 'unregisterField', 'untouch', 'updateSyncErrors', 'updateSyncWarnings', 'valid', 'validExceptSubmit', 'values', 'warning']);
            var reduxFormProps = _extends$12({
              anyTouched: anyTouched,
              asyncValidate: this.asyncValidate,
              asyncValidating: asyncValidating
            }, bindActionCreators({ blur: blur, change: change }, dispatch), {
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
            var propsToPass = _extends$12({}, propNamespace ? _defineProperty$3({}, propNamespace, reduxFormProps) : reduxFormProps, rest);
            if (isClassComponent(WrappedComponent)) {
              propsToPass.ref = 'wrapped';
            }
            return createElement(WrappedComponent, propsToPass);
          }
        }]);
        return Form$$1;
      }(Component);
      Form$$1.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
      Form$$1.WrappedComponent = WrappedComponent;
      Form$$1.childContextTypes = {
        _reduxForm: PropTypes.object.isRequired
      };
      Form$$1.propTypes = {
        destroyOnUnmount: PropTypes.bool,
        forceUnregisterOnUnmount: PropTypes.bool,
        form: PropTypes.string.isRequired,
        initialValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        getFormState: PropTypes.func,
        onSubmitFail: PropTypes.func,
        onSubmitSuccess: PropTypes.func,
        propNamespace: PropTypes.string,
        validate: PropTypes.func,
        warn: PropTypes.func,
        touchOnBlur: PropTypes.bool,
        touchOnChange: PropTypes.bool,
        triggerSubmit: PropTypes.bool,
        persistentSubmitErrors: PropTypes.bool,
        registeredFields: PropTypes.any
      };
      var connector = connect(function (state, props) {
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
        var valid = isValid(form, getFormState, false)(state);
        var validExceptSubmit = isValid(form, getFormState, true)(state);
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
        var boundFormACs = mapValues(formActions, bindForm);
        var boundArrayACs = mapValues(arrayActions, bindForm);
        var boundBlur = function boundBlur(field, value) {
          return blur$2(initialProps.form, field, value, !!initialProps.touchOnBlur);
        };
        var boundChange = function boundChange(field, value) {
          return change$2(initialProps.form, field, value, !!initialProps.touchOnChange, !!initialProps.persistentSubmitErrors);
        };
        var boundFocus = bindForm(focus$2);
        var connectedFormACs = bindActionCreators(boundFormACs, dispatch);
        var connectedArrayACs = {
          insert: bindActionCreators(boundArrayACs.arrayInsert, dispatch),
          move: bindActionCreators(boundArrayACs.arrayMove, dispatch),
          pop: bindActionCreators(boundArrayACs.arrayPop, dispatch),
          push: bindActionCreators(boundArrayACs.arrayPush, dispatch),
          remove: bindActionCreators(boundArrayACs.arrayRemove, dispatch),
          removeAll: bindActionCreators(boundArrayACs.arrayRemoveAll, dispatch),
          shift: bindActionCreators(boundArrayACs.arrayShift, dispatch),
          splice: bindActionCreators(boundArrayACs.arraySplice, dispatch),
          swap: bindActionCreators(boundArrayACs.arraySwap, dispatch),
          unshift: bindActionCreators(boundArrayACs.arrayUnshift, dispatch)
        };
        var computedActions = _extends$12({}, connectedFormACs, boundArrayACs, {
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
      var ConnectedForm = hoistNonReactStatics(connector(Form$$1), WrappedComponent);
      ConnectedForm.defaultProps = config;
      return function (_Component2) {
        _inherits$10(ReduxForm, _Component2);
        function ReduxForm() {
          _classCallCheck$10(this, ReduxForm);
          return _possibleConstructorReturn$10(this, (ReduxForm.__proto__ || Object.getPrototypeOf(ReduxForm)).apply(this, arguments));
        }
        _createClass$9(ReduxForm, [{
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
                rest = _objectWithoutProperties$7(_props8, ['initialValues']);
            return createElement(ConnectedForm, _extends$12({}, rest, {
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
      }(Component);
    };
  };
};

var reduxForm = createReduxForm(structure$1);

function createDeleteInWithCleanUp(_ref) {
  var deepEqual = _ref.deepEqual,
      empty = _ref.empty,
      getIn = _ref.getIn,
      deleteIn = _ref.deleteIn,
      setIn = _ref.setIn;
  var deleteInWithCleanUp = function deleteInWithCleanUp(state, path) {
    if (path[path.length - 1] === ']') {
      var pathTokens = toPath(path);
      pathTokens.pop();
      var parent = getIn(state, pathTokens.join('.'));
      return parent ? setIn(state, path) : state;
    }
    var result = state;
    if (getIn(state, path) !== undefined) {
      result = deleteIn(state, path);
    }
    var dotIndex = path.lastIndexOf('.');
    if (dotIndex > 0) {
      var parentPath = path.substring(0, dotIndex);
      if (parentPath[parentPath.length - 1] !== ']') {
        var _parent = getIn(result, parentPath);
        if (deepEqual(_parent, empty)) {
          return deleteInWithCleanUp(result, parentPath);
        }
      }
    }
    return result;
  };
  return deleteInWithCleanUp;
}

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties$8(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var isReduxFormAction = function isReduxFormAction(action) {
  return action && action.type && action.type.length > prefix.length && action.type.substring(0, prefix.length) === prefix;
};
function createReducer(structure$$1) {
  var _behaviors;
  var deepEqual = structure$$1.deepEqual,
      empty = structure$$1.empty,
      forEach = structure$$1.forEach,
      getIn = structure$$1.getIn,
      setIn = structure$$1.setIn,
      deleteIn = structure$$1.deleteIn,
      fromJS = structure$$1.fromJS,
      keys = structure$$1.keys,
      size = structure$$1.size,
      some = structure$$1.some,
      splice = structure$$1.splice;
  var deleteInWithCleanUp = createDeleteInWithCleanUp(structure$$1);
  var plainDeleteInWithCleanUp = createDeleteInWithCleanUp(structure);
  var doSplice = function doSplice(state, key, field, index, removeNum, value, force) {
    var existing = getIn(state, key + '.' + field);
    return existing || force ? setIn(state, key + '.' + field, splice(existing, index, removeNum, value)) : state;
  };
  var doPlainSplice = function doPlainSplice(state, key, field, index, removeNum, value, force) {
    var slice = getIn(state, key);
    var existing = structure.getIn(slice, field);
    return existing || force ? setIn(state, key, structure.setIn(slice, field, structure.splice(existing, index, removeNum, value))) : state;
  };
  var rootKeys = ['values', 'fields', 'submitErrors', 'asyncErrors'];
  var arraySplice = function arraySplice(state, field, index, removeNum, value) {
    var result = state;
    var nonValuesValue = value != null ? empty : undefined;
    result = doSplice(result, 'values', field, index, removeNum, value, true);
    result = doSplice(result, 'fields', field, index, removeNum, nonValuesValue);
    result = doPlainSplice(result, 'syncErrors', field, index, removeNum, undefined);
    result = doPlainSplice(result, 'syncWarnings', field, index, removeNum, undefined);
    result = doSplice(result, 'submitErrors', field, index, removeNum, undefined);
    result = doSplice(result, 'asyncErrors', field, index, removeNum, undefined);
    return result;
  };
  var behaviors = (_behaviors = {}, _defineProperty$4(_behaviors, ARRAY_INSERT, function (state, _ref) {
    var _ref$meta = _ref.meta,
        field = _ref$meta.field,
        index = _ref$meta.index,
        payload = _ref.payload;
    return arraySplice(state, field, index, 0, payload);
  }), _defineProperty$4(_behaviors, ARRAY_MOVE, function (state, _ref2) {
    var _ref2$meta = _ref2.meta,
        field = _ref2$meta.field,
        from = _ref2$meta.from,
        to = _ref2$meta.to;
    var array = getIn(state, 'values.' + field);
    var length = array ? size(array) : 0;
    var result = state;
    if (length) {
      rootKeys.forEach(function (key) {
        var path = key + '.' + field;
        if (getIn(result, path)) {
          var value = getIn(result, path + '[' + from + ']');
          result = setIn(result, path, splice(getIn(result, path), from, 1));
          result = setIn(result, path, splice(getIn(result, path), to, 0, value));
        }
      });
    }
    return result;
  }), _defineProperty$4(_behaviors, ARRAY_POP, function (state, _ref3) {
    var field = _ref3.meta.field;
    var array = getIn(state, 'values.' + field);
    var length = array ? size(array) : 0;
    return length ? arraySplice(state, field, length - 1, 1) : state;
  }), _defineProperty$4(_behaviors, ARRAY_PUSH, function (state, _ref4) {
    var field = _ref4.meta.field,
        payload = _ref4.payload;
    var array = getIn(state, 'values.' + field);
    var length = array ? size(array) : 0;
    return arraySplice(state, field, length, 0, payload);
  }), _defineProperty$4(_behaviors, ARRAY_REMOVE, function (state, _ref5) {
    var _ref5$meta = _ref5.meta,
        field = _ref5$meta.field,
        index = _ref5$meta.index;
    return arraySplice(state, field, index, 1);
  }), _defineProperty$4(_behaviors, ARRAY_REMOVE_ALL, function (state, _ref6) {
    var field = _ref6.meta.field;
    var array = getIn(state, 'values.' + field);
    var length = array ? size(array) : 0;
    return length ? arraySplice(state, field, 0, length) : state;
  }), _defineProperty$4(_behaviors, ARRAY_SHIFT, function (state, _ref7) {
    var field = _ref7.meta.field;
    return arraySplice(state, field, 0, 1);
  }), _defineProperty$4(_behaviors, ARRAY_SPLICE, function (state, _ref8) {
    var _ref8$meta = _ref8.meta,
        field = _ref8$meta.field,
        index = _ref8$meta.index,
        removeNum = _ref8$meta.removeNum,
        payload = _ref8.payload;
    return arraySplice(state, field, index, removeNum, payload);
  }), _defineProperty$4(_behaviors, ARRAY_SWAP, function (state, _ref9) {
    var _ref9$meta = _ref9.meta,
        field = _ref9$meta.field,
        indexA = _ref9$meta.indexA,
        indexB = _ref9$meta.indexB;
    var result = state;
    rootKeys.forEach(function (key) {
      var valueA = getIn(result, key + '.' + field + '[' + indexA + ']');
      var valueB = getIn(result, key + '.' + field + '[' + indexB + ']');
      if (valueA !== undefined || valueB !== undefined) {
        result = setIn(result, key + '.' + field + '[' + indexA + ']', valueB);
        result = setIn(result, key + '.' + field + '[' + indexB + ']', valueA);
      }
    });
    return result;
  }), _defineProperty$4(_behaviors, ARRAY_UNSHIFT, function (state, _ref10) {
    var field = _ref10.meta.field,
        payload = _ref10.payload;
    return arraySplice(state, field, 0, 0, payload);
  }), _defineProperty$4(_behaviors, AUTOFILL, function (state, _ref11) {
    var field = _ref11.meta.field,
        payload = _ref11.payload;
    var result = state;
    result = deleteInWithCleanUp(result, 'asyncErrors.' + field);
    result = deleteInWithCleanUp(result, 'submitErrors.' + field);
    result = setIn(result, 'fields.' + field + '.autofilled', true);
    result = setIn(result, 'values.' + field, payload);
    return result;
  }), _defineProperty$4(_behaviors, BLUR, function (state, _ref12) {
    var _ref12$meta = _ref12.meta,
        field = _ref12$meta.field,
        touch = _ref12$meta.touch,
        payload = _ref12.payload;
    var result = state;
    var initial = getIn(result, 'initial.' + field);
    if (initial === undefined && payload === '') {
      result = deleteInWithCleanUp(result, 'values.' + field);
    } else if (payload !== undefined) {
      result = setIn(result, 'values.' + field, payload);
    }
    if (field === getIn(result, 'active')) {
      result = deleteIn(result, 'active');
    }
    result = deleteIn(result, 'fields.' + field + '.active');
    if (touch) {
      result = setIn(result, 'fields.' + field + '.touched', true);
      result = setIn(result, 'anyTouched', true);
    }
    return result;
  }), _defineProperty$4(_behaviors, CHANGE, function (state, _ref13) {
    var _ref13$meta = _ref13.meta,
        field = _ref13$meta.field,
        touch = _ref13$meta.touch,
        persistentSubmitErrors = _ref13$meta.persistentSubmitErrors,
        payload = _ref13.payload;
    var result = state;
    var initial = getIn(result, 'initial.' + field);
    if (initial === undefined && payload === '') {
      result = deleteInWithCleanUp(result, 'values.' + field);
    } else if (payload !== undefined) {
      result = setIn(result, 'values.' + field, payload);
    }
    result = deleteInWithCleanUp(result, 'asyncErrors.' + field);
    if (!persistentSubmitErrors) {
      result = deleteInWithCleanUp(result, 'submitErrors.' + field);
    }
    result = deleteInWithCleanUp(result, 'fields.' + field + '.autofilled');
    if (touch) {
      result = setIn(result, 'fields.' + field + '.touched', true);
      result = setIn(result, 'anyTouched', true);
    }
    return result;
  }), _defineProperty$4(_behaviors, CLEAR_SUBMIT, function (state) {
    return deleteIn(state, 'triggerSubmit');
  }), _defineProperty$4(_behaviors, CLEAR_SUBMIT_ERRORS, function (state) {
    var result = state;
    result = deleteInWithCleanUp(result, 'submitErrors');
    result = deleteIn(result, 'error');
    return result;
  }), _defineProperty$4(_behaviors, CLEAR_ASYNC_ERROR, function (state, _ref14) {
    var field = _ref14.meta.field;
    return deleteIn(state, 'asyncErrors.' + field);
  }), _defineProperty$4(_behaviors, FOCUS, function (state, _ref15) {
    var field = _ref15.meta.field;
    var result = state;
    var previouslyActive = getIn(state, 'active');
    result = deleteIn(result, 'fields.' + previouslyActive + '.active');
    result = setIn(result, 'fields.' + field + '.visited', true);
    result = setIn(result, 'fields.' + field + '.active', true);
    result = setIn(result, 'active', field);
    return result;
  }), _defineProperty$4(_behaviors, INITIALIZE, function (state, _ref16) {
    var payload = _ref16.payload,
        _ref16$meta = _ref16.meta,
        keepDirty = _ref16$meta.keepDirty,
        keepSubmitSucceeded = _ref16$meta.keepSubmitSucceeded;
    var mapData = fromJS(payload);
    var result = empty;
    var warning = getIn(state, 'warning');
    if (warning) {
      result = setIn(result, 'warning', warning);
    }
    var syncWarnings = getIn(state, 'syncWarnings');
    if (syncWarnings) {
      result = setIn(result, 'syncWarnings', syncWarnings);
    }
    var error = getIn(state, 'error');
    if (error) {
      result = setIn(result, 'error', error);
    }
    var syncErrors = getIn(state, 'syncErrors');
    if (syncErrors) {
      result = setIn(result, 'syncErrors', syncErrors);
    }
    var registeredFields = getIn(state, 'registeredFields');
    if (registeredFields) {
      result = setIn(result, 'registeredFields', registeredFields);
    }
    var previousValues = getIn(state, 'values');
    var previousInitialValues = getIn(state, 'initial');
    var newInitialValues = mapData;
    var newValues = previousValues;
    if (keepDirty && registeredFields) {
      if (!deepEqual(newInitialValues, previousInitialValues)) {
        forEach(keys(registeredFields), function (name) {
          var previousInitialValue = getIn(previousInitialValues, name);
          var previousValue = getIn(previousValues, name);
          if (deepEqual(previousValue, previousInitialValue)) {
            var newInitialValue = getIn(newInitialValues, name);
            if (getIn(newValues, name) !== newInitialValue) {
              newValues = setIn(newValues, name, newInitialValue);
            }
          }
        });
        forEach(keys(newInitialValues), function (name) {
          var previousInitialValue = getIn(previousInitialValues, name);
          if (typeof previousInitialValue === 'undefined') {
            var newInitialValue = getIn(newInitialValues, name);
            newValues = setIn(newValues, name, newInitialValue);
          }
        });
      }
    } else {
      newValues = newInitialValues;
    }
    if (keepSubmitSucceeded && getIn(state, 'submitSucceeded')) {
      result = setIn(result, 'submitSucceeded', true);
    }
    result = setIn(result, 'values', newValues);
    result = setIn(result, 'initial', newInitialValues);
    return result;
  }), _defineProperty$4(_behaviors, REGISTER_FIELD, function (state, _ref17) {
    var _ref17$payload = _ref17.payload,
        name = _ref17$payload.name,
        type = _ref17$payload.type;
    var key = 'registeredFields[\'' + name + '\']';
    var field = getIn(state, key);
    if (field) {
      var count = getIn(field, 'count') + 1;
      field = setIn(field, 'count', count);
    } else {
      field = fromJS({ name: name, type: type, count: 1 });
    }
    return setIn(state, key, field);
  }), _defineProperty$4(_behaviors, RESET, function (state) {
    var result = empty;
    var registeredFields = getIn(state, 'registeredFields');
    if (registeredFields) {
      result = setIn(result, 'registeredFields', registeredFields);
    }
    var values = getIn(state, 'initial');
    if (values) {
      result = setIn(result, 'values', values);
      result = setIn(result, 'initial', values);
    }
    return result;
  }), _defineProperty$4(_behaviors, SUBMIT, function (state) {
    return setIn(state, 'triggerSubmit', true);
  }), _defineProperty$4(_behaviors, START_ASYNC_VALIDATION, function (state, _ref18) {
    var field = _ref18.meta.field;
    return setIn(state, 'asyncValidating', field || true);
  }), _defineProperty$4(_behaviors, START_SUBMIT, function (state) {
    return setIn(state, 'submitting', true);
  }), _defineProperty$4(_behaviors, STOP_ASYNC_VALIDATION, function (state, _ref19) {
    var payload = _ref19.payload;
    var result = state;
    result = deleteIn(result, 'asyncValidating');
    if (payload && Object.keys(payload).length) {
      var _error = payload._error,
          fieldErrors = _objectWithoutProperties$8(payload, ['_error']);
      if (_error) {
        result = setIn(result, 'error', _error);
      }
      if (Object.keys(fieldErrors).length) {
        result = setIn(result, 'asyncErrors', fromJS(fieldErrors));
      }
    } else {
      result = deleteIn(result, 'error');
    }
    return result;
  }), _defineProperty$4(_behaviors, STOP_SUBMIT, function (state, _ref20) {
    var payload = _ref20.payload;
    var result = state;
    result = deleteIn(result, 'submitting');
    result = deleteIn(result, 'submitFailed');
    result = deleteIn(result, 'submitSucceeded');
    if (payload && Object.keys(payload).length) {
      var _error = payload._error,
          fieldErrors = _objectWithoutProperties$8(payload, ['_error']);
      if (_error) {
        result = setIn(result, 'error', _error);
      } else {
        result = deleteIn(result, 'error');
      }
      if (Object.keys(fieldErrors).length) {
        result = setIn(result, 'submitErrors', fromJS(fieldErrors));
      } else {
        result = deleteIn(result, 'submitErrors');
      }
      result = setIn(result, 'submitFailed', true);
    } else {
      result = setIn(result, 'submitSucceeded', true);
      result = deleteIn(result, 'error');
      result = deleteIn(result, 'submitErrors');
    }
    return result;
  }), _defineProperty$4(_behaviors, SET_SUBMIT_FAILED, function (state, _ref21) {
    var fields = _ref21.meta.fields;
    var result = state;
    result = setIn(result, 'submitFailed', true);
    result = deleteIn(result, 'submitSucceeded');
    result = deleteIn(result, 'submitting');
    fields.forEach(function (field) {
      return result = setIn(result, 'fields.' + field + '.touched', true);
    });
    if (fields.length) {
      result = setIn(result, 'anyTouched', true);
    }
    return result;
  }), _defineProperty$4(_behaviors, SET_SUBMIT_SUCCEEDED, function (state) {
    var result = state;
    result = deleteIn(result, 'submitFailed');
    result = setIn(result, 'submitSucceeded', true);
    return result;
  }), _defineProperty$4(_behaviors, TOUCH, function (state, _ref22) {
    var fields = _ref22.meta.fields;
    var result = state;
    fields.forEach(function (field) {
      return result = setIn(result, 'fields.' + field + '.touched', true);
    });
    result = setIn(result, 'anyTouched', true);
    return result;
  }), _defineProperty$4(_behaviors, UNREGISTER_FIELD, function (state, _ref23) {
    var _ref23$payload = _ref23.payload,
        name = _ref23$payload.name,
        destroyOnUnmount = _ref23$payload.destroyOnUnmount;
    var result = state;
    var key = 'registeredFields[\'' + name + '\']';
    var field = getIn(result, key);
    if (!field) {
      return result;
    }
    var count = getIn(field, 'count') - 1;
    if (count <= 0 && destroyOnUnmount) {
      result = deleteIn(result, key);
      if (deepEqual(getIn(result, 'registeredFields'), empty)) {
        result = deleteIn(result, 'registeredFields');
      }
      var syncErrors = getIn(result, 'syncErrors');
      if (syncErrors) {
        syncErrors = plainDeleteInWithCleanUp(syncErrors, name);
        if (structure.deepEqual(syncErrors, structure.empty)) {
          result = deleteIn(result, 'syncErrors');
        } else {
          result = setIn(result, 'syncErrors', syncErrors);
        }
      }
      var syncWarnings = getIn(result, 'syncWarnings');
      if (syncWarnings) {
        syncWarnings = plainDeleteInWithCleanUp(syncWarnings, name);
        if (structure.deepEqual(syncWarnings, structure.empty)) {
          result = deleteIn(result, 'syncWarnings');
        } else {
          result = setIn(result, 'syncWarnings', syncWarnings);
        }
      }
      result = deleteInWithCleanUp(result, 'submitErrors.' + name);
      result = deleteInWithCleanUp(result, 'asyncErrors.' + name);
    } else {
      field = setIn(field, 'count', count);
      result = setIn(result, key, field);
    }
    return result;
  }), _defineProperty$4(_behaviors, UNTOUCH, function (state, _ref24) {
    var fields = _ref24.meta.fields;
    var result = state;
    fields.forEach(function (field) {
      return result = deleteIn(result, 'fields.' + field + '.touched');
    });
    var anyTouched = some(keys(getIn(result, 'registeredFields')), function (key) {
      return getIn(result, 'fields.' + key + '.touched');
    });
    result = anyTouched ? setIn(result, 'anyTouched', true) : deleteIn(result, 'anyTouched');
    return result;
  }), _defineProperty$4(_behaviors, UPDATE_SYNC_ERRORS, function (state, _ref25) {
    var _ref25$payload = _ref25.payload,
        syncErrors = _ref25$payload.syncErrors,
        error = _ref25$payload.error;
    var result = state;
    if (error) {
      result = setIn(result, 'error', error);
      result = setIn(result, 'syncError', true);
    } else {
      result = deleteIn(result, 'error');
      result = deleteIn(result, 'syncError');
    }
    if (Object.keys(syncErrors).length) {
      result = setIn(result, 'syncErrors', syncErrors);
    } else {
      result = deleteIn(result, 'syncErrors');
    }
    return result;
  }), _defineProperty$4(_behaviors, UPDATE_SYNC_WARNINGS, function (state, _ref26) {
    var _ref26$payload = _ref26.payload,
        syncWarnings = _ref26$payload.syncWarnings,
        warning = _ref26$payload.warning;
    var result = state;
    if (warning) {
      result = setIn(result, 'warning', warning);
    } else {
      result = deleteIn(result, 'warning');
    }
    if (Object.keys(syncWarnings).length) {
      result = setIn(result, 'syncWarnings', syncWarnings);
    } else {
      result = deleteIn(result, 'syncWarnings');
    }
    return result;
  }), _behaviors);
  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
    var action = arguments[1];
    var behavior = behaviors[action.type];
    return behavior ? behavior(state, action) : state;
  };
  var byForm = function byForm(reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { type: 'NONE' };
      var form = action && action.meta && action.meta.form;
      if (!form || !isReduxFormAction(action)) {
        return state;
      }
      if (action.type === DESTROY && action.meta && action.meta.form) {
        return action.meta.form.reduce(function (result, form) {
          return deleteInWithCleanUp(result, form);
        }, state);
      }
      var formState = getIn(state, form);
      var result = reducer(formState, action);
      return result === formState ? state : setIn(state, form, result);
    };
  };
  function decorate(target) {
    target.plugin = function plugin(reducers) {
      var _this = this;
      return decorate(function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { type: 'NONE' };
        return Object.keys(reducers).reduce(function (accumulator, key) {
          var previousState = getIn(accumulator, key);
          var nextState = reducers[key](previousState, action, getIn(state, key));
          return nextState === previousState ? accumulator : setIn(accumulator, key, nextState);
        }, _this(state, action));
      });
    };
    return target;
  }
  return decorate(byForm(reducer));
}

createReducer(structure$1);

var makeTheme$1 = function makeTheme$$1() {
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
};
var theme$2 = makeTheme$1();

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







var _extends$15 = Object.assign || function (target) {
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

var theme$1 = makeTheme(_extends$15({}, theme$2, theme));
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
  theme: theme$1
};
var propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  beforeButton: PropTypes.node,
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  initialValues: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }),
  placeHolder: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }),
  theme: PropTypes.object
};
var ErrorParagraph = styled(P).withConfig({
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
  return React__default.createElement(
    'div',
    null,
    React__default.createElement('input', _extends$15({ className: 'form__field-input' }, input, { type: type, placeholder: placeHolder, name: name })),
    React__default.createElement(
      'label',
      { className: 'form__field-label', htmlFor: name },
      label
    ),
    touched && error && React__default.createElement(
      FadeInRight,
      { inline: false },
      React__default.createElement(
        ErrorParagraph,
        { color: 'warning', className: 'form_field-error' },
        ' ',
        React__default.createElement(FormattedMessage, { id: error }),
        ' ',
        React__default.createElement('i', { className: 'fa fa-exclamation-circle' })
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
      blur$$1 = reduxFormProps.blur,
      change$$1 = reduxFormProps.change,
      clearSubmit = reduxFormProps.clearSubmit,
      destroy$$1 = reduxFormProps.destroy,
      dirty = reduxFormProps.dirty,
      dispatch = reduxFormProps.dispatch,
      success = reduxFormProps.success,
      error = reduxFormProps.error,
      handleSubmit = reduxFormProps.handleSubmit,
      initialize$$1 = reduxFormProps.initialize,
      initialized = reduxFormProps.initialized,
      initialValues = reduxFormProps.initialValues,
      invalid = reduxFormProps.invalid,
      pristine = reduxFormProps.pristine,
      reset$$1 = reduxFormProps.reset,
      submitFailed = reduxFormProps.submitFailed,
      submitSucceeded = reduxFormProps.submitSucceeded,
      submitting = reduxFormProps.submitting,
      touch$$1 = reduxFormProps.touch,
      untouch$$1 = reduxFormProps.untouch,
      valid = reduxFormProps.valid,
      warning = reduxFormProps.warning,
      pure = reduxFormProps.pure,
      triggerSubmit = reduxFormProps.triggerSubmit,
      autofill$$1 = reduxFormProps.autofill,
      clearSubmitErrors$$1 = reduxFormProps.clearSubmitErrors,
      clearAsyncError = reduxFormProps.clearAsyncError,
      submit$$1 = reduxFormProps.submit,
      array = reduxFormProps.array,
      onSubmit = reduxFormProps.onSubmit,
      validate$$1 = reduxFormProps.validate,
      warn = reduxFormProps.warn,
      onError = reduxFormProps.onError,
      rest = objectWithoutProperties(reduxFormProps, ['anyTouched', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'clearSubmit', 'destroy', 'dirty', 'dispatch', 'success', 'error', 'handleSubmit', 'initialize', 'initialized', 'initialValues', 'invalid', 'pristine', 'reset', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'untouch', 'valid', 'warning', 'pure', 'triggerSubmit', 'autofill', 'clearSubmitErrors', 'clearAsyncError', 'submit', 'array', 'onSubmit', 'validate', 'warn', 'onError']);
  return React__default.createElement(
    Form,
    _extends$15({ name: 'login-form', className: cn('form', className), onSubmit: handleSubmit(onSubmit) }, rest),
    header,
    React__default.createElement(
      'div',
      { className: 'form__field-wrapper' },
      React__default.createElement(Field, {
        name: 'username',
        type: 'text',
        label: React__default.createElement(FormattedMessage, messages.formUsername),
        placeHolder: placeHolder.username,
        component: renderField
      })
    ),
    React__default.createElement(
      'div',
      { className: 'form__field-wrapper' },
      React__default.createElement(Field, {
        name: 'password',
        type: 'password',
        label: React__default.createElement(FormattedMessage, messages.formPassword),
        placeHolder: placeHolder.password,
        component: renderField
      })
    ),
    React__default.createElement(
      'div',
      { className: 'form__submit-btn-wrapper' },
      React__default.createElement(
        'div',
        null,
        beforeButton,
        React__default.createElement(
          Button,
          { disabled: loading || submitting, color: 'success' },
          React__default.createElement(FormattedMessage, messages.authLogin),
          (loading || submitting) && React__default.createElement(
            'span',
            null,
            ' ',
            React__default.createElement(LoadingIndicator, null)
          )
        )
      )
    ),
    footer
  );
};
LoginFormUnstyled.propTypes = propTypes;
var LoginFormStyled = styled(LoginFormUnstyled).withConfig({
  displayName: 'LoginForm__LoginFormStyled'
})(['', ''], function (props) {
  return '\n    .form__field-wrapper {\n      width: 100%;\n      position: relative;\n      padding-top: 1.75em;\n      border-top: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      border-bottom: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n    \n    .form__field-wrapper + .form__field-wrapper {\n      border-top: none;\n    }\n    \n    .form__field-input:focus ~ .form__field-label {\n      color: ' + props.theme.loginForm.$color + ';\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n    }\n    \n    .form__field-input:focus {\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n      color: ' + props.theme.loginForm['$color-dark'] + ';\n    }\n    \n    .form__field-label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 16px;\n      padding-top: 20px;\n      padding-bottom: 0;\n      margin: 0;\n      z-index: 1;\n      font-size: .8em;\n      color: ' + props.theme.loginForm['$color-light'] + ';\n      font-weight: 400;\n      user-select: none;\n      cursor: text;\n      \n      .form_field-error {\n        float: right;\n      }\n    }\n    \n    .form__field-input {\n      position: relative;\n      padding: 1.625em 16px;\n      width: 100%;\n      color: ' + props.theme.loginForm.$color + ';\n      border: none;\n      font-family: inherit;\n      outline: 0;\n      letter-spacing: 0.05em;\n    }\n    \n    .form__submit-btn-wrapper {\n      padding: 2em 1em;\n      width: 100%;\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n      display: flex;\n      justify-content: center;\n    }\n  ';
});
LoginFormStyled.defaultProps = defaultProps$1;
var LoginForm = reduxForm({
  form: 'login',
  enableReinitialize: false,
  validate: validate
})(LoginFormStyled);

var defaultProps$$1 = _extends$15({
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
      return React__default.createElement(
        'div',
        { className: cn(className, 'form-page__wrapper') },
        React__default.createElement(
          'div',
          { className: cn('form-page__form-wrapper', { 'js-form__err-animation': this.state.shacked }) },
          React__default.createElement(
            'div',
            { className: 'form-page__form-header text-center' },
            React__default.createElement(
              'h2',
              { className: 'form-page__form-heading' },
              React__default.createElement(FormattedMessage, messages.authLogin)
            ),
            logo
          ),
          notification.text.length > 0 && React__default.createElement(
            Alert,
            { color: notification.type, className: 'mx-2' },
            React__default.createElement(FormattedMessage, { id: notification.text })
          ),
          React__default.createElement(LoginForm, formRest),
          version && React__default.createElement(
            Small,
            { className: 'text-center d-block' },
            version
          )
        )
      );
    }
  }]);
  return FormWrapperUnstyled;
}(React__default.Component);
FormWrapperUnstyled.defaultProps = defaultProps$$1;
FormWrapperUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  logo: PropTypes.any,
  version: PropTypes.any,
  notification: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.oneOf(['info', 'success', 'danger', 'primary', 'secondary', 'warning', 'inverse'])
  }),
  hideNotification: PropTypes.func,
  hideNotificationDelay: PropTypes.number
};
var shake = keyframes(['0%{transform:translateX(0);}25%{transform:translateX(10px);}75%{transform:translateX(-10px);}100%{transform:translateX(0);}']);
var FormWrapper = styled(FormWrapperUnstyled).withConfig({
  displayName: 'FormWrapper'
})(['', ''], function (props) {
  return '\n\n    margin-top: calc(' + props.theme.$spacer * 1.25 + ');\n\n    &.form-page__wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n      width: 100%;\n    }\n\n    .form-page__form-wrapper {\n      max-width: ' + props.theme.loginForm['$max-width'] + ';\n      width: 100%;\n      border: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme.loginForm['$border-radius']) + '\n      ' + boxShadow_2(props.theme['$enable-shadows'], props.theme.loginForm['$box-shadow']) + '\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n\n    .form-page__form-heading {\n      text-align: center;\n      font-size: ' + props.theme['$font-size-base'] + ';\n      user-select: none;\n    }\n\n    .form-page__form-header {\n      padding: ' + props.theme.$spacer + ';\n    }\n\n    & .js-form__err-animation {\n      animation: ' + shake + ' ' + props.theme['$motion-delay'].md + ' ' + props.theme['$motion-timing-function'].easeInOut + '\n    }\n\n  ';
});
FormWrapper.defaultProps = defaultProps$$1;

export { FormWrapper as LoginForm, makeTheme$1 as makeTheme, theme$2 as theme };
export default FormWrapper;
//# sourceMappingURL=login-form.es.js.map
