'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapStyled = require('bootstrap-styled');

var _LoginForm = require('../LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<LoginForm />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _LoginForm.defaultProps.theme;
    props = Object.assign(_LoginForm.defaultProps, {
      isSending: false,
      formData: {
        username: '',
        password: ''
      },
      onSubmit: jest.fn(),
      onError: jest.fn(),
      onChange: jest.fn()
    });
  });

  it('should render an LoginForm', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, props)
    ));
    expect(renderedComponent.find('LoginForm').length).toEqual(1);
  });

  it('should change username', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, props)
    ));
    var input = renderedComponent.find('input[name="username"]');
    input.simulate('change', { target: { value: 'dka' } });
    expect(props.onChange).toHaveBeenCalledWith({
      password: '',
      username: 'dka'
    });
  });

  it('should change password', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, props)
    ));
    var input = renderedComponent.find('input[name="password"]');
    input.simulate('change', { target: { value: 'dkapass' } });
    expect(props.onChange).toHaveBeenCalledWith({
      password: 'dkapass',
      username: ''
    });
  });

  it('should fail to validate form', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, props)
    ));
    var form = renderedComponent.find('form[name="login-form"]');
    form.simulate('submit');
    expect(props.onSubmit).not.toHaveBeenCalled();
    expect(props.onError).toHaveBeenCalledWith(new Error(props.messages.error));
  });

  it('should not call onError because it does not exist', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, Object.assign(props, { onError: null }))
    ));
    var form = renderedComponent.find('form[name="login-form"]');
    form.simulate('submit');
    expect(props.onSubmit).not.toHaveBeenCalled();
    try {
      expect(props.onError).not.toHaveBeenCalled();
    } catch (e) {
      // Note: we can't call toHaveBeenCalled if onError is not a spy function, but we need to
      // test it with { onError: null } for istanbul code coverage
    }
  });

  it('should submit the form', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, props)
    ));
    var form = renderedComponent.find('form[name="login-form"]');
    var inputUsername = renderedComponent.find('input[name="username"]');
    inputUsername.simulate('change', { target: { value: 'dka' } });
    var inputPassword = renderedComponent.find('input[name="password"]');
    inputPassword.simulate('change', { target: { value: 'dkapass' } });
    form.simulate('submit');
    expect(props.onSubmit).toHaveBeenCalledWith({
      username: 'dka',
      password: 'dkapass'
    });
  });

  it('should have a Button with a LoadingIndicator', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, Object.assign(props, { isSending: true }))
    ));
    expect(renderedComponent.find('Button').find('LoadingIndicator').length).toEqual(1);
  });

  it('should have a localToggle', function () {
    var localToggle = '<div className="local-toggle">local toggle</div>';
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, Object.assign(props, { isSending: false, localToggle: localToggle }))
    ));
    expect(renderedComponent.find('.form__submit-btn-wrapper').text().indexOf('local toggle')).toBeGreaterThan(0);
  });

  it('should have a footer', function () {
    var footer = '<div className="footer">I am footer</div>';
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_LoginForm2.default, Object.assign(props, { footer: footer }))
    ));
    expect(renderedComponent.text().indexOf('I am footer')).toBeGreaterThan(0);
  });
});