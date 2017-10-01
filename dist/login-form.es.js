import { Field, reduxForm as reduxForm$1 } from 'redux-form';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from 'message-common';
import { LoadingIndicator } from 'loaders';
import { FadeInRight, theme } from 'bootstrap-styled-motion';
import { Alert, Button, Form, P, Small, makeTheme } from 'bootstrap-styled';

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

var theme$1 = makeTheme(_extends({}, theme$2, theme));
var defaultProps = {
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
  displayName: 'withLoginForm__ErrorParagraph'
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
  return React.createElement(
    'div',
    null,
    React.createElement('input', _extends({ className: 'form__field-input' }, input, { type: type, placeholder: placeHolder, name: name })),
    React.createElement(
      'label',
      { className: 'form__field-label', htmlFor: name },
      label
    ),
    touched && error && React.createElement(
      FadeInRight,
      { inline: false },
      React.createElement(
        ErrorParagraph,
        { color: 'warning', className: 'form_field-error' },
        ' ',
        React.createElement(FormattedMessage, { id: error }),
        ' ',
        React.createElement('i', { className: 'fa fa-exclamation-circle' })
      )
    )
  );
};
var withLoginForm = (function (Field$$1) {
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
        validate = reduxFormProps.validate,
        warn = reduxFormProps.warn,
        onError = reduxFormProps.onError,
        rest = objectWithoutProperties(reduxFormProps, ['anyTouched', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'clearSubmit', 'destroy', 'dirty', 'dispatch', 'success', 'error', 'handleSubmit', 'initialize', 'initialized', 'initialValues', 'invalid', 'pristine', 'reset', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'untouch', 'valid', 'warning', 'pure', 'triggerSubmit', 'autofill', 'clearSubmitErrors', 'clearAsyncError', 'submit', 'array', 'onSubmit', 'validate', 'warn', 'onError']);
    return React.createElement(
      Form,
      _extends({ name: 'login-form', className: cn('form', className), onSubmit: handleSubmit(onSubmit) }, rest),
      header,
      React.createElement(
        'div',
        { className: 'form__field-wrapper' },
        React.createElement(Field$$1, {
          name: 'username',
          type: 'text',
          label: React.createElement(FormattedMessage, messages.formUsername),
          placeHolder: placeHolder.username,
          component: renderField
        })
      ),
      React.createElement(
        'div',
        { className: 'form__field-wrapper' },
        React.createElement(Field$$1, {
          name: 'password',
          type: 'password',
          label: React.createElement(FormattedMessage, messages.formPassword),
          placeHolder: placeHolder.password,
          component: renderField
        })
      ),
      React.createElement(
        'div',
        { className: 'form__submit-btn-wrapper' },
        React.createElement(
          'div',
          null,
          beforeButton,
          React.createElement(
            Button,
            { disabled: loading || submitting, color: 'success' },
            React.createElement(FormattedMessage, messages.authLogin),
            (loading || submitting) && React.createElement(
              'span',
              null,
              ' ',
              React.createElement(LoadingIndicator, null)
            )
          )
        )
      ),
      footer
    );
  };
  LoginFormUnstyled.propTypes = propTypes;
  var LoginForm = styled(LoginFormUnstyled).withConfig({
    displayName: 'withLoginForm__LoginForm'
  })(['', ''], function (props) {
    return '\n    .form__field-wrapper {\n      width: 100%;\n      position: relative;\n      padding-top: 1.75em;\n      border-top: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      border-bottom: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n    \n    .form__field-wrapper + .form__field-wrapper {\n      border-top: none;\n    }\n    \n    .form__field-input:focus ~ .form__field-label {\n      color: ' + props.theme.loginForm.$color + ';\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n    }\n    \n    .form__field-input:focus {\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n      color: ' + props.theme.loginForm['$color-dark'] + ';\n    }\n    \n    .form__field-label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 16px;\n      padding-top: 20px;\n      padding-bottom: 0;\n      margin: 0;\n      z-index: 1;\n      font-size: .8em;\n      color: ' + props.theme.loginForm['$color-light'] + ';\n      font-weight: 400;\n      user-select: none;\n      cursor: text;\n      \n      .form_field-error {\n        float: right;\n      }\n    }\n    \n    .form__field-input {\n      position: relative;\n      padding: 1.625em 16px;\n      width: 100%;\n      color: ' + props.theme.loginForm.$color + ';\n      border: none;\n      font-family: inherit;\n      outline: 0;\n      letter-spacing: 0.05em;\n    }\n    \n    .form__submit-btn-wrapper {\n      padding: 2em 1em;\n      width: 100%;\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n      display: flex;\n      justify-content: center;\n    }\n  ';
  });
  LoginForm.defaultProps = defaultProps;
  return LoginForm;
});

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}
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
var defaultProps$4 = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function borderRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderTopRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-top-right-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderRightRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-top-right-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderBottomRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-bottom-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderLeftRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-left-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
var borderRadius$1 = {
  defaultProps: defaultProps$4,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius
};
var defaultProps$5 = {
  '$enable-shadows': false
};
function boxShadow() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$5['$enable-shadows'];
  if (enableShadows) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return '\n      box-shadow: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
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
var parseTransition_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseTransition = function parseTransition(transitions) {
  if (!transitions) {
    return [];
  }
  var sample = transitions;
  var RULE_DELIMITER = ',';
  var PROPERTY_DELIMITER = ' ';
  var MS_UNIT = 'ms';
  var TMP_STR = 'TMP';
  var DEFAULT_PROPERTY = 'all';
  var DEFAULT_DURATION = 0;
  var DEFAULT_TIMING_FUNCTION = 'ease';
  var DEFAULT_DELAY = 0;
  var BEZIER_REGEX = /cubic-bezier\([^\)]+\)/gi;
  var cubicBezierList = transitions.match(BEZIER_REGEX);
  if (cubicBezierList) {
    sample = sample.replace(BEZIER_REGEX, TMP_STR);
  }
  var transitionList = sample.split(RULE_DELIMITER).map(function (rule) {
    var properties = rule.trim().split(PROPERTY_DELIMITER);
    return {
      property: properties[0] || DEFAULT_PROPERTY,
      duration: properties[1] && !(properties[1].indexOf(MS_UNIT) !== -1) ? parseFloat(properties[1]) * 1000 : parseFloat(properties[1]) || DEFAULT_DURATION,
      timingFunction: properties[2] && properties[2] !== TMP_STR ? properties[2] : cubicBezierList ? cubicBezierList.shift() : DEFAULT_TIMING_FUNCTION,
      delay: properties[3] && !(properties[3].indexOf(MS_UNIT) !== -1) ? parseFloat(properties[3]) * 1000 : parseFloat(properties[3]) || DEFAULT_DELAY
    };
  });
  return transitionList;
};
exports.default = parseTransition;
module.exports = exports['default'];
});

var defaultProps$1 = _extends({
  logo: null,
  version: null,
  notification: {
    text: '',
    type: 'info'
  },
  hideNotificationDelay: 3000
}, defaultProps);
var withFormWrapper = (function (LoginForm) {
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
        return React.createElement(
          'div',
          { className: cn(className, 'form-page__wrapper') },
          React.createElement(
            'div',
            { className: cn('form-page__form-wrapper', { 'js-form__err-animation': this.state.shacked }) },
            React.createElement(
              'div',
              { className: 'form-page__form-header text-center' },
              React.createElement(
                'h2',
                { className: 'form-page__form-heading' },
                React.createElement(FormattedMessage, messages.authLogin)
              ),
              logo
            ),
            notification.text.length > 0 && React.createElement(
              Alert,
              { color: notification.type, className: 'mx-2' },
              React.createElement(FormattedMessage, { id: notification.text })
            ),
            React.createElement(LoginForm, formRest),
            version && React.createElement(
              Small,
              { className: 'text-center d-block' },
              version
            )
          )
        );
      }
    }]);
    return FormWrapperUnstyled;
  }(React.Component);
  FormWrapperUnstyled.defaultProps = defaultProps$1;
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
    displayName: 'withFormWrapper__FormWrapper'
  })(['', ''], function (props) {
    return '\n      margin-top: calc(' + props.theme.$spacer * 1.25 + ');\n  \n      &.form-page__wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        width: 100%;\n      }\n  \n      .form-page__form-wrapper {\n        max-width: ' + props.theme.loginForm['$max-width'] + ';\n        width: 100%;\n        border: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n        ' + borderRadius$1.all(props.theme['$enable-rounded'], props.theme.loginForm['$border-radius']) + '\n        ' + boxShadow(props.theme['$enable-shadows'], props.theme.loginForm['$box-shadow']) + '\n        background-color: ' + props.theme.loginForm['$background-color'] + ';\n      }\n  \n      .form-page__form-heading {\n        text-align: center;\n        font-size: ' + props.theme['$font-size-base'] + ';\n        user-select: none;\n      }\n  \n      .form-page__form-header {\n        padding: ' + props.theme.$spacer + ';\n      }\n  \n      & .js-form__err-animation {\n        animation: ' + shake + ' ' + props.theme['$motion-delay'].md + ' ' + props.theme['$motion-timing-function'].easeInOut + '\n      }\n  \n    ';
  });
  FormWrapper.defaultProps = defaultProps$1;
  return FormWrapper;
});

var validate = function validate(values) {
  var errors = {};
  if (!values.username) {
    errors.username = 'kopax.common.form.warning.required';
  } else if (values.username.length > 15) {
    errors.username = 'kopax.common.form.warning.usernameMaxLength';
  }
  if (!values.password) {
    errors.password = 'kopax.common.form.warning.required';
  }
  return errors;
};

var LoginFormRedux = reduxForm$1({
  form: 'login',
  enableReinitialize: false,
  validate: validate
})(withLoginForm(Field));
var LoginFormRedux$1 = withFormWrapper(LoginFormRedux);

export { LoginFormRedux$1 as LoginForm, makeTheme$1 as makeTheme, theme$2 as theme };
export default LoginFormRedux$1;
//# sourceMappingURL=login-form.es.js.map
