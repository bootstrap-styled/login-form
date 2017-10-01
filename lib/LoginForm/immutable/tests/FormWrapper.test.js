'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _enzyme = require('enzyme');

var _bootstrapStyled = require('bootstrap-styled');

var _FormWrapper = require('../FormWrapper');

var _FormWrapper2 = _interopRequireDefault(_FormWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<FormWrapper />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _FormWrapper.defaultProps.theme;
    props = Object.assign(_FormWrapper.defaultProps, {
      onSubmit: jest.fn(),
      onError: jest.fn(),
      onChange: jest.fn()
    });
  });

  it('should render a FormWrapper', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(function (state) {
          return state;
        }, {}) },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { messages: {}, locale: 'en' },
        _react2.default.createElement(
          _bootstrapStyled.BootstrapProvider,
          { theme: theme },
          _react2.default.createElement(_FormWrapper2.default, props)
        )
      )
    ));
    expect(renderedComponent.length).toEqual(1);
  });

  it('should have a logo', function () {
    var logo = '<div className="custom-logo">Hello logo</div>';
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(function (state) {
          return state;
        }, {}) },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { messages: {}, locale: 'en' },
        _react2.default.createElement(
          _bootstrapStyled.BootstrapProvider,
          { theme: theme },
          _react2.default.createElement(_FormWrapper2.default, _extends({}, props, { logo: logo }))
        )
      )
    ));
    expect(renderedComponent.find('.form-page__form-header').text().indexOf('Hello logo')).toBeGreaterThan(0);
  });

  it('should have a version', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(function (state) {
          return state;
        }, {}) },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { messages: {}, locale: 'en' },
        _react2.default.createElement(
          _bootstrapStyled.BootstrapProvider,
          { theme: theme },
          _react2.default.createElement(_FormWrapper2.default, _extends({}, props, { version: 'Hello version' }))
        )
      )
    ));
    expect(renderedComponent.find('Small').length).toEqual(1);
  });

  it('should have a notification', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.createStore)(function (store) {
          return store;
        }, {}) },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { messages: { test: 'test message', test2: 'another test' }, locale: 'en' },
        _react2.default.createElement(
          _bootstrapStyled.BootstrapProvider,
          { theme: theme },
          _react2.default.createElement(_FormWrapper2.default, _extends({}, props, {
            notification: { text: 'test', type: 'info' }
          }))
        )
      )
    ));
    expect(renderedComponent.find('Alert').html().indexOf('test message')).toBeGreaterThan(0);
  });
});