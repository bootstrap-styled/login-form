'use strict';

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _messageCommon = require('message-common');

var _messageCommon2 = _interopRequireDefault(_messageCommon);

var _bootstrapStyled = require('bootstrap-styled');

var _withLoginForm = require('../withLoginForm');

var _LoginFormRedux = require('../LoginFormRedux');

var _LoginFormRedux2 = _interopRequireDefault(_LoginFormRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<LoginForm />', function () {
  var theme = void 0;
  var props = void 0;
  beforeEach(function () {
    theme = _withLoginForm.defaultProps.theme;
    props = Object.assign(_withLoginForm.defaultProps, {
      loading: false,
      initialValues: {
        username: '',
        password: ''
      },
      onSubmit: jest.fn()
    });
  });

  it('should render an LoginForm', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(function (state) {
          return state;
        }, {}) },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: 'en', messages: _messageCommon2.default },
        _react2.default.createElement(
          _bootstrapStyled.BootstrapProvider,
          { theme: theme },
          _react2.default.createElement(_LoginFormRedux2.default, props)
        )
      )
    ));
    expect(renderedComponent.find('LoginFormUnstyled').length).toEqual(1);
  });

  it('should have a Button with a LoadingIndicator', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(function (state) {
          return state;
        }, {}) },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: 'en', messages: _messageCommon2.default },
        _react2.default.createElement(
          _bootstrapStyled.BootstrapProvider,
          { theme: theme },
          _react2.default.createElement(_LoginFormRedux2.default, Object.assign(props, { loading: true }))
        )
      )
    ));
    expect(renderedComponent.find('Button').find('LoadingIndicator').length).toEqual(1);
  });

  it('should have a localToggle', function () {
    var localToggle = '<div className="local-toggle">local toggle</div>';
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(function (state) {
          return state;
        }, {}) },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: 'en', messages: _messageCommon2.default },
        _react2.default.createElement(
          _bootstrapStyled.BootstrapProvider,
          { theme: theme },
          _react2.default.createElement(_LoginFormRedux2.default, Object.assign(props, { loading: false, beforeButton: localToggle }))
        )
      )
    ));
    expect(renderedComponent.find('.form__submit-btn-wrapper').text().indexOf('local toggle')).toBeGreaterThan(0);
  });

  it('should have a footer', function () {
    var footer = '<div className="footer">I am footer</div>';
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(function (state) {
          return state;
        }, {}) },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: 'en', messages: _messageCommon2.default },
        _react2.default.createElement(
          _bootstrapStyled.BootstrapProvider,
          { theme: theme },
          _react2.default.createElement(_LoginFormRedux2.default, Object.assign(props, { footer: footer }))
        )
      )
    ));
    expect(renderedComponent.text().indexOf('I am footer')).toBeGreaterThan(0);
  });
});