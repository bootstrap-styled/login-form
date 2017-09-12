'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _loaders = require('loaders');

var _bootstrapStyled = require('bootstrap-styled');

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Form.react.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The form with a username and a password input field, both of which are
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * controlled via the application state.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var theme = (0, _bootstrapStyled.makeTheme)(_theme.theme);

var defaultProps = exports.defaultProps = {
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
  theme: theme,
  messages: {
    title: 'Login',
    username: 'Username',
    password: 'Password',
    buttonLogin: 'Login',
    error: 'Please fill out the entire form'
  }
};

var loadingButtonDefaultProps = {
  theme: theme
};

var LoadingButton = (0, _styledComponents2.default)(_bootstrapStyled.Button).withConfig({
  displayName: 'LoginForm__LoadingButton'
})(['', ''], function (props) {
  return '\n    &>span:first-child {\n      padding-right: ' + props.theme['$padding-base-vertical'] + ';\n    }\n  ';
});

LoadingButton.defaultProps = loadingButtonDefaultProps;

var LoginFormUnstyled = function (_React$Component) {
  _inherits(LoginFormUnstyled, _React$Component);

  function LoginFormUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginFormUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginFormUnstyled.__proto__ || Object.getPrototypeOf(LoginFormUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginFormUnstyled, [{
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
          props = _objectWithoutProperties(_props, ['url', 'className', 'isSending', 'messages', 'placeHolder', 'header', 'footer', 'localToggle']);

      var messages = Object.assign({}, defaultProps.messages, someMessages);

      var formData = props.formData,
          onSubmit = props.onSubmit,
          onError = props.onError,
          onChange = props.onChange,
          rest = _objectWithoutProperties(props, ['formData', 'onSubmit', 'onError', 'onChange']);

      return _react2.default.createElement(
        _bootstrapStyled.Form,
        _extends({ action: url, name: 'login-form', className: (0, _classnames2.default)('form', className), onSubmit: this.onSubmit }, rest),
        header,
        _react2.default.createElement(
          'div',
          { className: 'form__field-wrapper' },
          _react2.default.createElement('input', {
            className: 'form__field-input',
            name: 'username',
            type: 'text',
            placeholder: placeHolder.username,
            onChange: this.changeUsername,
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: 'false'
          }),
          _react2.default.createElement(
            'label',
            { className: 'form__field-label', htmlFor: 'username' },
            messages.username
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form__field-wrapper' },
          _react2.default.createElement('input', {
            className: 'form__field-input',
            name: 'password',
            type: 'password',
            placeholder: placeHolder.password,
            onChange: this.changePassword
          }),
          _react2.default.createElement(
            'label',
            { className: 'form__field-label', htmlFor: 'password' },
            messages.password
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form__submit-btn-wrapper' },
          isSending ? _react2.default.createElement(
            LoadingButton,
            { disabled: true, color: 'primary' },
            messages.buttonLogin,
            ' ',
            _react2.default.createElement(_loaders.LoadingIndicator, null)
          ) : _react2.default.createElement(
            'div',
            null,
            localToggle,
            _react2.default.createElement(
              _bootstrapStyled.Button,
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
}(_react2.default.Component);

LoginFormUnstyled.defaultProps = defaultProps;
LoginFormUnstyled.propTypes = {
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node,
  localToggle: _propTypes2.default.node,
  url: _propTypes2.default.string,
  isSending: _propTypes2.default.bool,
  className: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  formData: _propTypes2.default.shape({
    username: _propTypes2.default.string,
    password: _propTypes2.default.string
  }),
  placeHolder: _propTypes2.default.shape({
    username: _propTypes2.default.string,
    password: _propTypes2.default.string
  }),
  onError: _propTypes2.default.func,
  messages: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    username: _propTypes2.default.string,
    password: _propTypes2.default.string,
    buttonLogin: _propTypes2.default.string,
    error: _propTypes2.default.string
  })
};


var LoginForm = (0, _styledComponents2.default)(LoginFormUnstyled).withConfig({
  displayName: 'LoginForm'
})(['', ''], function (props) {
  return '\n    .form__field-wrapper {\n      width: 100%;\n      position: relative;\n      padding-top: 1.75em;\n      border-top: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      border-bottom: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n    \n    .form__field-wrapper + .form__field-wrapper {\n      border-top: none;\n    }\n    \n    .form__field-input:focus ~ .form__field-label {\n      color: ' + props.theme.loginForm.$color + ';\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n    }\n    \n    .form__field-input:focus {\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n      color: ' + props.theme.loginForm['$color-dark'] + ';\n    }\n    \n    .form__field-label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 16px;\n      padding-top: 20px;\n      padding-bottom: 0;\n      margin: 0;\n      z-index: 1;\n      font-size: .8em;\n      color: ' + props.theme.loginForm['$color-light'] + ';\n      font-weight: 400;\n      user-select: none;\n      cursor: text;\n    }\n    \n    .form__field-input {\n      position: relative;\n      padding: 1.625em 16px;\n      width: 100%;\n      color: ' + props.theme.loginForm.$color + ';\n      border: none;\n      font-family: inherit;\n      outline: 0;\n      letter-spacing: 0.05em;\n    }\n    \n    .form__submit-btn-wrapper {\n      padding: 2em 1em;\n      width: 100%;\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n      display: flex;\n      justify-content: center;\n    }\n  ';
});

LoginForm.defaultProps = defaultProps;

exports.default = LoginForm;