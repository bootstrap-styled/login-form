/**
 * FormPageWrapper
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Small, boxShadow, radius, makeTheme } from 'bootstrap-styled';
import styled, { keyframes } from 'styled-components';
import cn from 'classnames';
import { theme as themeLoginForm } from './theme';
import LoginForm from './LoginForm';
const theme = makeTheme(themeLoginForm);

export const defaultProps = {
  url: '/',
  logo: null,
  version: null,
  formData: {
    username: '',
    password: '',
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
    error: 'Please fill out the entire form',
  },
  theme,
};

// eslint-disable-next-line react/prefer-stateless-function
class FormPageWrapperUnstyled extends React.Component {
  static defaultProps = defaultProps;
  static propTypes = {
    logo: PropTypes.string,
    version: PropTypes.string,
    className: PropTypes.string.isRequired,
    url: PropTypes.string,
    isSending: PropTypes.bool,
    onSubmit: PropTypes.func,
    onError: PropTypes.func,
    onChange: PropTypes.func,
    formData: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }).isRequired,
    success: PropTypes.any,
    error: PropTypes.any,
    messages: PropTypes.shape({
      title: PropTypes.string,
      username: PropTypes.string,
      password: PropTypes.string,
      buttonLogin: PropTypes.string,
      error: PropTypes.string,
    }),
  };

  render() {
    const {
      logo,
      version,
      className,
      url,
      isSending,
      onSubmit,
      onError,
      onChange,
      formData,
      success,
      error,
      messages: someMessages,
    } = this.props;

    const messages = Object.assign({}, defaultProps.messages, someMessages);

    return (
      <div className={cn(className, 'form-page__wrapper')}>
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header text-center">
            <h2 className="form-page__form-heading">{messages.title}</h2>
            {logo}
          </div>
          {success && <Alert className="mx-2 alert-success">{success}</Alert>}
          {error && <Alert className="mx-2 alert-danger">{error}</Alert>}
          <LoginForm
            url={url}
            formData={formData}
            onSubmit={onSubmit}
            onChange={onChange}
            onError={onError}
            isSending={isSending}
            messages={messages}
          />
          {version && (
            <Small className="text-center d-block">
              {version}
            </Small>
          )}
        </div>
      </div>
    );
  }
}

const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;

const FormPageWrapper = styled(FormPageWrapperUnstyled)`
  ${(props) => `
  
    margin-top: calc(${props.theme.$spacer * 1.25});
    
    &.form-page__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
    
    .form-page__form-wrapper {
      max-width: ${props.theme.loginForm['$max-width']};
      width: 100%;
      border: 1px solid ${props.theme.loginForm['$color-lighter']};
      ${radius.all(props.theme['$enable-rounded'], props.theme.loginForm['$border-radius'])}      
      ${boxShadow(props.theme['$enable-shadows'], props.theme.loginForm['$box-shadow'])}
      background-color: ${props.theme.loginForm['$background-color']};
    }
    
    .form-page__form-heading {
      text-align: center;
      font-size: ${props.theme['$font-size-base']};
      user-select: none;
    }
    
    .form-page__form-header {
      padding: ${props.theme.$spacer};
    }
    
    & .js-form__err-animation {
      animation: ${shake} ${props.theme['$motion-delay'].sm} ${props.theme['$motion-timing-function'].easeInOut}
    }

  `}
`;

FormPageWrapper.defaultProps = defaultProps;

export default FormPageWrapper;
