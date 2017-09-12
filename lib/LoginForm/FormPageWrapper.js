'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bootstrapStyled = require('bootstrap-styled');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('./theme');

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FormPageWrapper
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var theme = (0, _bootstrapStyled.makeTheme)(_theme.theme);

var defaultProps = exports.defaultProps = {
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
  theme: theme
};

// eslint-disable-next-line react/prefer-stateless-function

var FormPageWrapperUnstyled = function (_React$Component) {
  _inherits(FormPageWrapperUnstyled, _React$Component);

  function FormPageWrapperUnstyled() {
    _classCallCheck(this, FormPageWrapperUnstyled);

    return _possibleConstructorReturn(this, (FormPageWrapperUnstyled.__proto__ || Object.getPrototypeOf(FormPageWrapperUnstyled)).apply(this, arguments));
  }

  _createClass(FormPageWrapperUnstyled, [{
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

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, 'form-page__wrapper') },
        _react2.default.createElement(
          'div',
          { className: 'form-page__form-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'form-page__form-header text-center' },
            _react2.default.createElement(
              'h2',
              { className: 'form-page__form-heading' },
              messages.title
            ),
            logo
          ),
          success && _react2.default.createElement(
            _bootstrapStyled.Alert,
            { className: 'mx-2 alert-success' },
            success
          ),
          error && _react2.default.createElement(
            _bootstrapStyled.Alert,
            { className: 'mx-2 alert-danger' },
            error
          ),
          _react2.default.createElement(_LoginForm2.default, {
            url: url,
            formData: formData,
            onSubmit: onSubmit,
            onChange: onChange,
            onError: onError,
            isSending: isSending,
            messages: messages
          }),
          version && _react2.default.createElement(
            _bootstrapStyled.Small,
            { className: 'text-center d-block' },
            version
          )
        )
      );
    }
  }]);

  return FormPageWrapperUnstyled;
}(_react2.default.Component);

FormPageWrapperUnstyled.defaultProps = defaultProps;
FormPageWrapperUnstyled.propTypes = {
  logo: _propTypes2.default.node,
  version: _propTypes2.default.string,
  className: _propTypes2.default.string.isRequired,
  url: _propTypes2.default.string,
  isSending: _propTypes2.default.bool,
  onSubmit: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  formData: _propTypes2.default.shape({
    username: _propTypes2.default.string,
    password: _propTypes2.default.string
  }).isRequired,
  success: _propTypes2.default.any,
  error: _propTypes2.default.any,
  messages: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    username: _propTypes2.default.string,
    password: _propTypes2.default.string,
    buttonLogin: _propTypes2.default.string,
    error: _propTypes2.default.string
  })
};


var shake = (0, _styledComponents.keyframes)(['0%{transform:translateX(0);}25%{transform:translateX(10px);}75%{transform:translateX(-10px);}100%{transform:translateX(0);}']);

var FormPageWrapper = (0, _styledComponents2.default)(FormPageWrapperUnstyled).withConfig({
  displayName: 'FormPageWrapper'
})(['', ''], function (props) {
  return '\n  \n    margin-top: calc(' + props.theme.$spacer * 1.25 + ');\n    \n    &.form-page__wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n      width: 100%;\n    }\n    \n    .form-page__form-wrapper {\n      max-width: ' + props.theme.loginForm['$max-width'] + ';\n      width: 100%;\n      border: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      ' + _bootstrapStyled.radius.all(props.theme['$enable-rounded'], props.theme.loginForm['$border-radius']) + '      \n      ' + (0, _bootstrapStyled.boxShadow)(props.theme['$enable-shadows'], props.theme.loginForm['$box-shadow']) + '\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n    \n    .form-page__form-heading {\n      text-align: center;\n      font-size: ' + props.theme['$font-size-base'] + ';\n      user-select: none;\n    }\n    \n    .form-page__form-header {\n      padding: ' + props.theme.$spacer + ';\n    }\n    \n    & .js-form__err-animation {\n      animation: ' + shake + ' ' + props.theme['$motion-delay'].sm + ' ' + props.theme['$motion-timing-function'].easeInOut + '\n    }\n\n  ';
});

FormPageWrapper.defaultProps = defaultProps;

exports.default = FormPageWrapper;