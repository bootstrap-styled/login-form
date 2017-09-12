import { mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled';
import LoginForm, { defaultProps } from '../LoginForm';

describe('<LoginForm />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      isSending: false,
      formData: {
        username: '',
        password: '',
      },
      onSubmit: jest.fn(),
      onError: jest.fn(),
      onChange: jest.fn(),
    });
  });

  it('should render an LoginForm', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('LoginForm').length).toEqual(1);
  });

  it('should change username', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...props} />
      </BootstrapProvider>
    );
    const input = renderedComponent.find('input[name="username"]');
    input.simulate('change', { target: { value: 'dka' } });
    expect(props.onChange).toHaveBeenCalledWith({
      password: '',
      username: 'dka',
    });
  });

  it('should change password', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...props} />
      </BootstrapProvider>
    );
    const input = renderedComponent.find('input[name="password"]');
    input.simulate('change', { target: { value: 'dkapass' } });
    expect(props.onChange).toHaveBeenCalledWith({
      password: 'dkapass',
      username: '',
    });
  });

  it('should fail to validate form', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...props} />
      </BootstrapProvider>
    );
    const form = renderedComponent.find('form[name="login-form"]');
    form.simulate('submit');
    expect(props.onSubmit).not.toHaveBeenCalled();
    expect(props.onError).toHaveBeenCalledWith(new Error(props.messages.error));
  });

  it('should not call onError because it does not exist', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...Object.assign(props, { onError: null })} />
      </BootstrapProvider>
    );
    const form = renderedComponent.find('form[name="login-form"]');
    form.simulate('submit');
    expect(props.onSubmit).not.toHaveBeenCalled();
    try {
      expect(props.onError).not.toHaveBeenCalled();
    } catch (e) {
      // Note: we can't call toHaveBeenCalled if onError is not a spy function, but we need to
      // test it with { onError: null } for istanbul code coverage
    }
  });

  it('should submit the form', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...props} />
      </BootstrapProvider>
    );
    const form = renderedComponent.find('form[name="login-form"]');
    const inputUsername = renderedComponent.find('input[name="username"]');
    inputUsername.simulate('change', { target: { value: 'dka' } });
    const inputPassword = renderedComponent.find('input[name="password"]');
    inputPassword.simulate('change', { target: { value: 'dkapass' } });
    form.simulate('submit');
    expect(props.onSubmit).toHaveBeenCalledWith({
      username: 'dka',
      password: 'dkapass',
    });
  });

  it('should have a Button with a LoadingIndicator', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...Object.assign(props, { isSending: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Button').find('LoadingIndicator').length).toEqual(1);
  });

  it('should have a localToggle', () => {
    const localToggle = '<div className="local-toggle">local toggle</div>';
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...Object.assign(props, { isSending: false, localToggle })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('.form__submit-btn-wrapper').text().indexOf('local toggle')).toBeGreaterThan(0);
  });

  it('should have a footer', () => {
    const footer = '<div className="footer">I am footer</div>';
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <LoginForm {...Object.assign(props, { footer })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.text().indexOf('I am footer')).toBeGreaterThan(0);
  });
});
