'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
// import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';


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

var _bootstrapStyled = require('bootstrap-styled');

var _bootstrapStyledMixins = require('bootstrap-styled-mixins');

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = _extends({
  logo: null,
  version: null,
  notification: {
    text: '',
    type: 'info'
  },
  hideNotificationDelay: 3000
}, _LoginForm.defaultProps);

var FormWrapperUnstyled = function (_React$Component) {
  _inherits(FormWrapperUnstyled, _React$Component);

  function FormWrapperUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormWrapperUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormWrapperUnstyled.__proto__ || Object.getPrototypeOf(FormWrapperUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      shacked: false
    }, _this.shack = function () {
      _this.setState({
        shacked: !_this.state.shacked
      }, _this.resetShack);
    }, _this.resetShack = function () {
      if (_this.state.shacked) {
        setTimeout(_this.props.hideNotification, _this.props.hideNotificationDelay);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormWrapperUnstyled, [{
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
          formRest = _objectWithoutProperties(_props, ['hideNotification', 'hideNotificationDelay', 'logo', 'version', 'notification', 'className']);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, 'form-page__wrapper') },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('form-page__form-wrapper', { 'js-form__err-animation': this.state.shacked }) },
          _react2.default.createElement(
            'div',
            { className: 'form-page__form-header text-center' },
            _react2.default.createElement(
              'h2',
              { className: 'form-page__form-heading' },
              _react2.default.createElement(_reactIntl.FormattedMessage, _messageCommon2.default.authLogin)
            ),
            logo
          ),
          notification.text.length > 0 && _react2.default.createElement(
            _bootstrapStyled.Alert,
            { color: notification.type, className: 'mx-2' },
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: notification.text })
          ),
          _react2.default.createElement(_LoginForm2.default, formRest),
          version && _react2.default.createElement(
            _bootstrapStyled.Small,
            { className: 'text-center d-block' },
            version
          )
        )
      );
    }
  }]);

  return FormWrapperUnstyled;
}(_react2.default.Component);

FormWrapperUnstyled.defaultProps = defaultProps;
FormWrapperUnstyled.propTypes = {
  className: _propTypes2.default.string.isRequired,
  logo: _propTypes2.default.any,
  version: _propTypes2.default.any,
  notification: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(['info', 'success', 'danger', 'primary', 'secondary', 'warning', 'inverse'])
  }),
  hideNotification: _propTypes2.default.func,
  hideNotificationDelay: _propTypes2.default.number
};


var shake = (0, _styledComponents.keyframes)(['0%{transform:translateX(0);}25%{transform:translateX(10px);}75%{transform:translateX(-10px);}100%{transform:translateX(0);}']);

var FormWrapper = (0, _styledComponents2.default)(FormWrapperUnstyled).withConfig({
  displayName: 'FormWrapper'
})(['', ''], function (props) {
  return '\n\n    margin-top: calc(' + props.theme.$spacer * 1.25 + ');\n\n    &.form-page__wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n      width: 100%;\n    }\n\n    .form-page__form-wrapper {\n      max-width: ' + props.theme.loginForm['$max-width'] + ';\n      width: 100%;\n      border: 1px solid ' + props.theme.loginForm['$color-lighter'] + ';\n      ' + _bootstrapStyledMixins.radius.all(props.theme['$enable-rounded'], props.theme.loginForm['$border-radius']) + '\n      ' + (0, _bootstrapStyledMixins.boxShadow)(props.theme['$enable-shadows'], props.theme.loginForm['$box-shadow']) + '\n      background-color: ' + props.theme.loginForm['$background-color'] + ';\n    }\n\n    .form-page__form-heading {\n      text-align: center;\n      font-size: ' + props.theme['$font-size-base'] + ';\n      user-select: none;\n    }\n\n    .form-page__form-header {\n      padding: ' + props.theme.$spacer + ';\n    }\n\n    & .js-form__err-animation {\n      animation: ' + shake + ' ' + props.theme['$motion-delay'].md + ' ' + props.theme['$motion-timing-function'].easeInOut + '\n    }\n\n  ';
});
FormWrapper.defaultProps = defaultProps;

exports.default = FormWrapper;