'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // eslint-disable-line no-unused-vars
// eslint-disable-line no-unused-vars


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactIntl = require('react-intl');

var _messageCommon = require('message-common');

var _messageCommon2 = _interopRequireDefault(_messageCommon);

var _loaders = require('loaders');

var _bootstrapStyledMotion = require('bootstrap-styled-motion');

var _bootstrapStyled = require('bootstrap-styled');

var _redux = require('redux');

var Redux = _interopRequireWildcard(_redux);

var _reactRedux = require('react-redux');

var ReactRedux = _interopRequireWildcard(_reactRedux);

var _reduxForm = require('redux-form/lib/immutable/reduxForm');

var _reduxForm2 = _interopRequireDefault(_reduxForm);

var _Field = require('redux-form/lib/immutable/Field');

var _Field2 = _interopRequireDefault(_Field);

var _theme = require('./theme');

var _validate = require('./validate');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var theme = (0, _bootstrapStyled.makeTheme)(_extends({}, _theme.theme, _bootstrapStyledMotion.theme));

var defaultProps = exports.defaultProps = {
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
  theme: theme
};

/* eslint-disable react/require-default-props */
var propTypes = exports.propTypes = {
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node,
  beforeButton: _propTypes2.default.node,
  className: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func,
  loading: _propTypes2.default.bool,
  initialValues: _propTypes2.default.shape({
    username: _propTypes2.default.string,
    password: _propTypes2.default.string
  }),
  placeHolder: _propTypes2.default.shape({
    username: _propTypes2.default.string,
    password: _propTypes2.default.string
  }),
  theme: _propTypes2.default.object
};
/* eslint-enable react/require-default-props */

var ErrorParagraph = (0, _styledComponents2.default)(_bootstrapStyled.P).withConfig({
  displayName: 'LoginForm__ErrorParagraph'
})(['position:absolute;font-size:0.8rem;right:0.2rem;bottom:0;margin-bottom:0;']);

/* eslint-disable react/require-default-props, react/prop-types, no-unused-vars */
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
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', _extends({ className: 'form__field-input' }, input, { type: type, placeholder: placeHolder, name: name })),
    _react2.default.createElement(
      'label',
      { className: 'form__field-label', htmlFor: name },
      label
    ),
    touched && error && _react2.default.createElement(
      _bootstrapStyledMotion.FadeInRight,
      { inline: false },
      _react2.default.createElement(
        ErrorParagraph,
        { color: 'warning', className: 'form_field-error' },
        ' ',
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: error }),
        ' ',
        _react2.default.createElement('i', { className: 'fa fa-exclamation-circle' })
      )
    )
  );
};
/* eslint-enable react/require-default-props, react/prop-types, no-unused-vars */

var LoginFormUnstyled = function LoginFormUnstyled(props) {
  var className = props.className,
      placeHolder = props.placeHolder,
      header = props.header,
      footer = props.footer,
      beforeButton = props.beforeButton,
      loading = props.loading,
      reduxFormProps = _objectWithoutProperties(props, ['className', 'placeHolder', 'header', 'footer', 'beforeButton', 'loading']);

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
      rest = _objectWithoutProperties(reduxFormProps, ['anyTouched', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'clearSubmit', 'destroy', 'dirty', 'dispatch', 'success', 'error', 'handleSubmit', 'initialize', 'initialized', 'initialValues', 'invalid', 'pristine', 'reset', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'untouch', 'valid', 'warning', 'pure', 'triggerSubmit', 'autofill', 'clearSubmitErrors', 'clearAsyncError', 'submit', 'array', 'onSubmit', 'validate', 'warn', 'onError']);

  return _react2.default.createElement(
    _bootstrapStyled.Form,
    _extends({ name: 'login-form', className: (0, _classnames2.default)('form', className), onSubmit: handleSubmit(onSubmit) }, rest),
    header,
    _react2.default.createElement(
      'div',
      { className: 'form__field-wrapper' },
      _react2.default.createElement(_Field2.default, {
        name: 'username',
        type: 'text',
        label: _react2.default.createElement(_reactIntl.FormattedMessage, _messageCommon2.default.formUsername),
        placeHolder: placeHolder.username,
        component: renderField
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'form__field-wrapper' },
      _react2.default.createElement(_Field2.default, {
        name: 'password',
        type: 'password',
        label: _react2.default.createElement(_reactIntl.FormattedMessage, _messageCommon2.default.formPassword),
        placeHolder: placeHolder.password,
        component: renderField
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'form__submit-btn-wrapper' },
      _react2.default.createElement(
        'div',
        null,
        beforeButton,
        _react2.default.createElement(
          _bootstrapStyled.Button,
          { disabled: loading || submitting, color: 'success' },
          _react2.default.createElement(_reactIntl.FormattedMessage, _messageCommon2.default.authLogin),
          (loading || submitting) && _react2.default.createElement(
            'span',
            null,
            ' ',
            _react2.default.createElement(_loaders.LoadingIndicator, null)
          )
        )
      )
    ),
    footer
  );
};

LoginFormUnstyled.propTypes = propTypes;

var LoginFormStyled = (0, _styledComponents2.default)(LoginFormUnstyled).withConfig({
  displayName: 'LoginForm__LoginFormStyled'
})(['', ''], function (props) {
  return '\n    .form__field-wrapper {\n      width: 100%;\n      position: relative;\n      padding-top: 1.75em;\n      border-top: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      border-bottom: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n    \n    .form__field-wrapper + .form__field-wrapper {\n      border-top: none;\n    }\n    \n    .form__field-input:focus ~ .form__field-label {\n      color: ' + props.theme.loginForm.$color + ';\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n    }\n    \n    .form__field-input:focus {\n      background-color: ' + props.theme.loginForm['$color-lighter'] + ';\n      color: ' + props.theme.loginForm['$color-dark'] + ';\n    }\n    \n    .form__field-label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 16px;\n      padding-top: 20px;\n      padding-bottom: 0;\n      margin: 0;\n      z-index: 1;\n      font-size: .8em;\n      color: ' + props.theme.loginForm['$color-light'] + ';\n      font-weight: 400;\n      user-select: none;\n      cursor: text;\n      \n      .form_field-error {\n        float: right;\n      }\n    }\n    \n    .form__field-input {\n      position: relative;\n      padding: 1.625em 16px;\n      width: 100%;\n      color: ' + props.theme.loginForm.$color + ';\n      border: none;\n      font-family: inherit;\n      outline: 0;\n      letter-spacing: 0.05em;\n    }\n    \n    .form__submit-btn-wrapper {\n      padding: 2em 1em;\n      width: 100%;\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n      display: flex;\n      justify-content: center;\n    }\n  ';
});

LoginFormStyled.defaultProps = defaultProps;

var LoginForm = (0, _reduxForm2.default)({
  form: 'login',
  enableReinitialize: false,
  validate: _validate.validate
})(LoginFormStyled);

exports.default = LoginForm;