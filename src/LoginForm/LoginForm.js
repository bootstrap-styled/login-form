/**
 * Form.react.js
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import { LoadingIndicator } from 'loaders';
import { Form, Button, makeTheme } from 'bootstrap-styled';
import { theme as themeLoginForm } from './theme';

const theme = makeTheme(themeLoginForm);

export const defaultProps = {
  url: '/',
  header: null,
  footer: null,
  localToggle: null,
  formData: {
    username: '',
    password: '',
  },
  placeHolder: {
    username: 'Santaclauze',
    password: '••••••••••',
  },
  onSubmit: null,
  onChange: null,
  onError: null,
  isSending: false,
  theme,
  messages: {
    title: 'Login',
    username: 'Username',
    password: 'Password',
    buttonLogin: 'Login',
    error: 'Please fill out the entire form',
  },
};

const loadingButtonDefaultProps = {
  theme,
};

const LoadingButton = styled(Button)`
  ${(props) => `
    &>span:first-child {
      padding-right: ${props.theme['$padding-base-vertical']};
    }
  `}
`;

LoadingButton.defaultProps = loadingButtonDefaultProps;

class LoginFormUnstyled extends React.Component {
  static defaultProps = defaultProps;
  static propTypes = {
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
      password: PropTypes.string,
    }),
    placeHolder: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }),
    onError: PropTypes.func,
    messages: PropTypes.shape({
      title: PropTypes.string,
      username: PropTypes.string,
      password: PropTypes.string,
      buttonLogin: PropTypes.string,
      error: PropTypes.string,
    }),
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { formData, onSubmit, onError, messages } = this.props;
    const isValidated = this.validateForm(formData);
    if (isValidated && onSubmit) {
      onSubmit(formData);
    } else if (!isValidated && onError) {
      onError(new Error(messages.error));
    }
  }

  onChange(formData) {
    const { onChange } = this.props;
    onChange(formData);
  }

  changePassword = (e) => {
    const newState = this.mergeFormData({
      password: e.target.value,
    });
    this.onChange(newState);
  }

  changeUsername = (evt) => {
    const newState = this.mergeFormData({
      username: evt.target.value,
    });
    this.onChange(newState);
  }

  mergeFormData(newFormData) {
    const { formData } = this.props;
    return Object.assign(formData, newFormData);
  }

  validateForm(formData) {
    return formData.username.trim().length > 0 && formData.password.trim().length > 0;
  }

  render() {
    const { url, className, isSending, messages: someMessages, placeHolder, header, footer, localToggle, ...props } = this.props;
    const messages = Object.assign({}, defaultProps.messages, someMessages);

    const { formData, onSubmit, onError, onChange, ...rest } = props;
    return (
      <Form action={url} name="login-form" className={cn('form', className)} onSubmit={this.onSubmit} {...rest}>
        {header}
        <div className="form__field-wrapper">
          <input
            className="form__field-input"
            name="username"
            type="text"
            placeholder={placeHolder.username}
            onChange={this.changeUsername}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <label className="form__field-label" htmlFor="username">{messages.username}</label>
        </div>
        <div className="form__field-wrapper">
          <input
            className="form__field-input"
            name="password"
            type="password"
            placeholder={placeHolder.password}
            onChange={this.changePassword}
          />
          <label className="form__field-label" htmlFor="password">{messages.password}</label>
        </div>
        <div className="form__submit-btn-wrapper">
          {isSending ? (
            <LoadingButton disabled color="primary">
              {messages.buttonLogin}{' '}
              <LoadingIndicator />
            </LoadingButton>
          ) : (
            <div>
              {localToggle}
              <Button color="success">
                {messages.buttonLogin}
              </Button>
            </div>
          )}
        </div>
        {footer}
      </Form>
    );
  }
}

const LoginForm = styled(LoginFormUnstyled)`
  ${(props) => `
    .form__field-wrapper {
      width: 100%;
      position: relative;
      padding-top: 1.75em;
      border-top: 1px solid ${props.theme.loginForm['$color-lighter']};
      border-bottom: 1px solid ${props.theme.loginForm['$color-lighter']};
      background-color: ${props.theme.loginForm['$background-color']};
    }
    
    .form__field-wrapper + .form__field-wrapper {
      border-top: none;
    }
    
    .form__field-input:focus ~ .form__field-label {
      color: ${props.theme.loginForm.$color};
      background-color: ${props.theme.loginForm['$color-lighter']};
    }
    
    .form__field-input:focus {
      background-color: ${props.theme.loginForm['$color-lighter']};
      color: ${props.theme.loginForm['$color-dark']};
    }
    
    .form__field-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 16px;
      padding-top: 20px;
      padding-bottom: 0;
      margin: 0;
      z-index: 1;
      font-size: .8em;
      color: ${props.theme.loginForm['$color-light']};
      font-weight: 400;
      user-select: none;
      cursor: text;
    }
    
    .form__field-input {
      position: relative;
      padding: 1.625em 16px;
      width: 100%;
      color: ${props.theme.loginForm.$color};
      border: none;
      font-family: inherit;
      outline: 0;
      letter-spacing: 0.05em;
    }
    
    .form__submit-btn-wrapper {
      padding: 2em 1em;
      width: 100%;
      background-color: ${props.theme.loginForm['$background-color']};
      display: flex;
      justify-content: center;
    }
  `}
`;

LoginForm.defaultProps = defaultProps;

export default LoginForm;
