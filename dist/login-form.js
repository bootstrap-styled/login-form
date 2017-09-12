(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('bootstrap-styled'), require('styled-components'), require('classnames'), require('loaders')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'bootstrap-styled', 'styled-components', 'classnames', 'loaders'], factory) :
	(factory((global['login-form'] = {}),global.React,global.PropTypes,global.BootstrapStyled,global.styled,global.cn,global.loaders));
}(this, (function (exports,React,PropTypes,bootstrapStyled,styled,cn,loaders) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
var styled__default = 'default' in styled ? styled['default'] : styled;
cn = cn && cn.hasOwnProperty('default') ? cn['default'] : cn;

var theme$1 = makeTheme$1();
function makeTheme$1() {
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

var theme$2 = bootstrapStyled.makeTheme(theme$1);
var defaultProps$1 = {
  url: '/',
  header: null,
  footer: null,
  localToggle: null,
  formData: {
    username: '',
    password: ''
  },
  placeHolder: {
    username: 'Santaclauze',
    password: '••••••••••'
  },
  onSubmit: null,
  onChange: null,
  onError: null,
  isSending: false,
  theme: theme$2,
  messages: {
    title: 'Login',
    username: 'Username',
    password: 'Password',
    buttonLogin: 'Login',
    error: 'Please fill out the entire form'
  }
};
var loadingButtonDefaultProps = {
  theme: theme$2
};
var LoadingButton = styled__default(bootstrapStyled.Button).withConfig({
  displayName: 'LoginForm__LoadingButton'
})(['', ''], function (props) {
  return '\n    &>span:first-child {\n      padding-right: ' + props.theme['$padding-base-vertical'] + ';\n    }\n  ';
});
LoadingButton.defaultProps = loadingButtonDefaultProps;
var LoginFormUnstyled = function (_React$Component) {
  inherits(LoginFormUnstyled, _React$Component);
  function LoginFormUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, LoginFormUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = LoginFormUnstyled.__proto__ || Object.getPrototypeOf(LoginFormUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          formData = _this$props.formData,
          onSubmit = _this$props.onSubmit,
          onError = _this$props.onError,
          messages = _this$props.messages;
      var isValidated = _this.validateForm(formData);
      if (isValidated && onSubmit) {
        onSubmit(formData);
      } else if (!isValidated && onError) {
        onError(new Error(messages.error));
      }
    }, _this.changePassword = function (e) {
      var newState = _this.mergeFormData({
        password: e.target.value
      });
      _this.onChange(newState);
    }, _this.changeUsername = function (evt) {
      var newState = _this.mergeFormData({
        username: evt.target.value
      });
      _this.onChange(newState);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass(LoginFormUnstyled, [{
    key: 'onChange',
    value: function onChange(formData) {
      var onChange = this.props.onChange;
      onChange(formData);
    }
  }, {
    key: 'mergeFormData',
    value: function mergeFormData(newFormData) {
      var formData = this.props.formData;
      return Object.assign(formData, newFormData);
    }
  }, {
    key: 'validateForm',
    value: function validateForm(formData) {
      return formData.username.trim().length > 0 && formData.password.trim().length > 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          className = _props.className,
          isSending = _props.isSending,
          someMessages = _props.messages,
          placeHolder = _props.placeHolder,
          header = _props.header,
          footer = _props.footer,
          localToggle = _props.localToggle,
          props = objectWithoutProperties(_props, ['url', 'className', 'isSending', 'messages', 'placeHolder', 'header', 'footer', 'localToggle']);
      var messages = Object.assign({}, defaultProps$1.messages, someMessages);
      var formData = props.formData,
          onSubmit = props.onSubmit,
          onError = props.onError,
          onChange = props.onChange,
          rest = objectWithoutProperties(props, ['formData', 'onSubmit', 'onError', 'onChange']);
      return React.createElement(
        bootstrapStyled.Form,
        _extends({ action: url, name: 'login-form', className: cn('form', className), onSubmit: this.onSubmit }, rest),
        header,
        React.createElement(
          'div',
          { className: 'form__field-wrapper' },
          React.createElement('input', {
            className: 'form__field-input',
            name: 'username',
            type: 'text',
            placeholder: placeHolder.username,
            onChange: this.changeUsername,
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: 'false'
          }),
          React.createElement(
            'label',
            { className: 'form__field-label', htmlFor: 'username' },
            messages.username
          )
        ),
        React.createElement(
          'div',
          { className: 'form__field-wrapper' },
          React.createElement('input', {
            className: 'form__field-input',
            name: 'password',
            type: 'password',
            placeholder: placeHolder.password,
            onChange: this.changePassword
          }),
          React.createElement(
            'label',
            { className: 'form__field-label', htmlFor: 'password' },
            messages.password
          )
        ),
        React.createElement(
          'div',
          { className: 'form__submit-btn-wrapper' },
          isSending ? React.createElement(
            LoadingButton,
            { disabled: true, color: 'primary' },
            messages.buttonLogin,
            ' ',
            React.createElement(loaders.LoadingIndicator, null)
          ) : React.createElement(
            'div',
            null,
            localToggle,
            React.createElement(
              bootstrapStyled.Button,
              { color: 'success' },
              messages.buttonLogin
            )
          )
        ),
        footer
      );
    }
  }]);
  return LoginFormUnstyled;
}(React.Component);
LoginFormUnstyled.defaultProps = defaultProps$1;
LoginFormUnstyled.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  localToggle: PropTypes.node,
  url: PropTypes.string,
  isSending: PropTypes.bool,
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  formData: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }),
  placeHolder: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }),
  onError: PropTypes.func,
  messages: PropTypes.shape({
    title: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    buttonLogin: PropTypes.string,
    error: PropTypes.string
  })
};
var LoginForm = styled__default(LoginFormUnstyled).withConfig({
  displayName: 'LoginForm'
})(['', ''], function (props) {
  return '\n    .form__field-wrapper {\n      width: 100%;\n      position: relative;\n      padding-top: 1.75em;\n      border-top: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      border-bottom: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n    \n    .form__field-wrapper + .form__field-wrapper {\n      border-top: none;\n    }\n    \n    .form__field-input:focus ~ .form__field-label {\n      color: ' + props.theme.loginForm.$color + ';\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n    }\n    \n    .form__field-input:focus {\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n      color: ' + props.theme.loginForm['$color-dark'] + ';\n    }\n    \n    .form__field-label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 16px;\n      padding-top: 20px;\n      padding-bottom: 0;\n      margin: 0;\n      z-index: 1;\n      font-size: .8em;\n      color: ' + props.theme.loginForm['$color-light'] + ';\n      font-weight: 400;\n      user-select: none;\n      cursor: text;\n    }\n    \n    .form__field-input {\n      position: relative;\n      padding: 1.625em 16px;\n      width: 100%;\n      color: ' + props.theme.loginForm.$color + ';\n      border: none;\n      font-family: inherit;\n      outline: 0;\n      letter-spacing: 0.05em;\n    }\n    \n    .form__submit-btn-wrapper {\n      padding: 2em 1em;\n      width: 100%;\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n      display: flex;\n      justify-content: center;\n    }\n  ';
});
LoginForm.defaultProps = defaultProps$1;

var theme$$1 = bootstrapStyled.makeTheme(theme$1);
var defaultProps = {
  url: '/',
  logo: null,
  version: null,
  formData: {
    username: '',
    password: ''
  },
  onSubmit: null,
  onChange: null,
  onError: null,
  isSending: false,
  success: null,
  error: null,
  messages: {
    title: 'Login',
    username: 'Username',
    password: 'Password',
    buttonLogin: 'Login',
    error: 'Please fill out the entire form'
  },
  theme: theme$$1
};
var FormPageWrapperUnstyled = function (_React$Component) {
  inherits(FormPageWrapperUnstyled, _React$Component);
  function FormPageWrapperUnstyled() {
    classCallCheck(this, FormPageWrapperUnstyled);
    return possibleConstructorReturn(this, (FormPageWrapperUnstyled.__proto__ || Object.getPrototypeOf(FormPageWrapperUnstyled)).apply(this, arguments));
  }
  createClass(FormPageWrapperUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          logo = _props.logo,
          version = _props.version,
          className = _props.className,
          url = _props.url,
          isSending = _props.isSending,
          onSubmit = _props.onSubmit,
          onError = _props.onError,
          onChange = _props.onChange,
          formData = _props.formData,
          success = _props.success,
          error = _props.error,
          someMessages = _props.messages;
      var messages = Object.assign({}, defaultProps.messages, someMessages);
      return React.createElement(
        'div',
        { className: cn(className, 'form-page__wrapper') },
        React.createElement(
          'div',
          { className: 'form-page__form-wrapper' },
          React.createElement(
            'div',
            { className: 'form-page__form-header text-center' },
            React.createElement(
              'h2',
              { className: 'form-page__form-heading' },
              messages.title
            ),
            logo
          ),
          success && React.createElement(
            bootstrapStyled.Alert,
            { className: 'mx-2 alert-success' },
            success
          ),
          error && React.createElement(
            bootstrapStyled.Alert,
            { className: 'mx-2 alert-danger' },
            error
          ),
          React.createElement(LoginForm, {
            url: url,
            formData: formData,
            onSubmit: onSubmit,
            onChange: onChange,
            onError: onError,
            isSending: isSending,
            messages: messages
          }),
          version && React.createElement(
            bootstrapStyled.Small,
            { className: 'text-center d-block' },
            version
          )
        )
      );
    }
  }]);
  return FormPageWrapperUnstyled;
}(React.Component);
FormPageWrapperUnstyled.defaultProps = defaultProps;
FormPageWrapperUnstyled.propTypes = {
  logo: PropTypes.node,
  version: PropTypes.string,
  className: PropTypes.string.isRequired,
  url: PropTypes.string,
  isSending: PropTypes.bool,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  onChange: PropTypes.func,
  formData: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  success: PropTypes.any,
  error: PropTypes.any,
  messages: PropTypes.shape({
    title: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    buttonLogin: PropTypes.string,
    error: PropTypes.string
  })
};
var shake = styled.keyframes(['0%{transform:translateX(0);}25%{transform:translateX(10px);}75%{transform:translateX(-10px);}100%{transform:translateX(0);}']);
var FormPageWrapper = styled__default(FormPageWrapperUnstyled).withConfig({
  displayName: 'FormPageWrapper'
})(['', ''], function (props) {
  return '\n  \n    margin-top: calc(' + props.theme.$spacer * 1.25 + ');\n    \n    &.form-page__wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n      width: 100%;\n    }\n    \n    .form-page__form-wrapper {\n      max-width: ' + props.theme.loginForm['$max-width'] + ';\n      width: 100%;\n      border: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      ' + bootstrapStyled.radius.all(props.theme['$enable-rounded'], props.theme.loginForm['$border-radius']) + '      \n      ' + bootstrapStyled.boxShadow(props.theme['$enable-shadows'], props.theme.loginForm['$box-shadow']) + '\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n    \n    .form-page__form-heading {\n      text-align: center;\n      font-size: ' + props.theme['$font-size-base'] + ';\n      user-select: none;\n    }\n    \n    .form-page__form-header {\n      padding: ' + props.theme.$spacer + ';\n    }\n    \n    & .js-form__err-animation {\n      animation: ' + shake + ' ' + props.theme['$motion-delay'].sm + ' ' + props.theme['$motion-timing-function'].easeInOut + '\n    }\n\n  ';
});
FormPageWrapper.defaultProps = defaultProps;

exports.LoginForm = FormPageWrapper;
exports.makeThemeLoginForm = makeTheme$1;
exports.themeLoginForm = theme$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=login-form.js.map
