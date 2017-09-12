'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _bootstrapStyled = require('bootstrap-styled');

var _FormPageWrapper = require('../FormPageWrapper');

var _FormPageWrapper2 = _interopRequireDefault(_FormPageWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<FormPageWrapper />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = Object.assign(_bootstrapStyled.theme, {
      loginForm: _FormPageWrapper.defaultProps.theme.loginForm
    });
    props = Object.assign(_FormPageWrapper.defaultProps, {
      onSubmit: jest.fn(),
      onError: jest.fn(),
      onChange: jest.fn()
    });
  });

  it('should render a FormPageWrapper', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_FormPageWrapper2.default, props)
    ));
    expect(renderedComponent.length).toEqual(1);
  });

  it('should have a logo', function () {
    var logo = '<div className="custom-logo">Hello logo</div>';
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_FormPageWrapper2.default, Object.assign({}, props, { logo: logo }))
    ));
    expect(renderedComponent.find('.form-page__form-header').text().indexOf('Hello logo')).toBeGreaterThan(0);
  });

  it('should have a version', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_FormPageWrapper2.default, Object.assign({}, props, { version: 'Hello version' }))
    ));
    expect(renderedComponent.find('Small').length).toEqual(1);
  });

  it('should have a success', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_FormPageWrapper2.default, Object.assign({}, props, { success: 'Hello success' }))
    ));
    expect(renderedComponent.find('.alert-success').text()).toEqual('Hello success');
  });

  it('should have a error', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_FormPageWrapper2.default, Object.assign({}, props, { error: 'Hello error' }))
    ));
    expect(renderedComponent.find('.alert-danger').text()).toEqual('Hello error');
  });

  it('should change the title', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_FormPageWrapper2.default, Object.assign({}, props, { messages: { title: 'new title' } }))
    ));
    expect(renderedComponent.find('.form-page__form-heading').text()).toEqual('new title');
  });
});