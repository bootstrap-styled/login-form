import React, { Fragment, createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import omit from 'lodash.omit';

import Small from '@bootstrap-styled/v4/lib/Small';
import Alert from '@bootstrap-styled/v4/lib/Alert';
import P from '@bootstrap-styled/v4/lib/P';
import A from '@bootstrap-styled/v4/lib/A';
import H1 from '@bootstrap-styled/v4/lib/H1';

import { defaultProps as formDefaultProps } from './withLoginForm';

const DefaultLoginFormHeader = ({ /* eslint-disable react/prop-types */
  logo, version,
}) => (
  <Fragment>
    <H1>{logo}</H1>
    {version && (
      <Small color="muted">
        {version}
      </Small>
    )}
  </Fragment>
);

const DefaultLoginFormFooter = () => (
  <Small className="footer-terms-conditions" color="muted">
    By clicking you agree to the
    {' '}
    <A href="#">Terms & Conditions</A>
    {' '}
and
    {' '}
    <A href="#">Privacy Policy</A>
.
  </Small>
);

const DefaultLoginFormAfterActions = () => (
  <div className="text-center">
    <A href="#">Forgot your username or password?</A>
    <P className="mt-1">
Dont have an account?
      <A href="#">Sign Up</A>
    </P>
  </div>
);

export const defaultProps = {
  logo: null,
  version: null,
  labelHidden: false,
  rememberMe: false,
  afterActions: <DefaultLoginFormAfterActions />,
  footer: <DefaultLoginFormFooter />,
  loader: 'Loading...',
  autoHideDuration: null,
  hideNotification: false,
  onSubmit: () => console.warn('You must set an onSubmit() function to the LoginForm.'), // eslint-disable-line no-console
  ...formDefaultProps,
  theme: {
    loginForm: {
      '$wrapper-bg-color': '#E9EAEC',
      '$login-font-size': '15px',
      '$login-wrapper-padding': '2rem 1.25rem',
      '$login-wrapper-bg-color': '#fff',
      '$login-wrapper-width': '25rem',
      '$login-wrapper-border-width': '0px',
      '$login-wrapper-border-color': 'grey',
      '$login-header-wrapper-margin': '0',
      '$login-footer-wrapper-margin': '1rem auto',
      '$login-footer-font-size': '.6rem',
      '$checkbox-margin-left': '-8.5rem',
    },
  },
};
/* eslint-disable react/no-unused-prop-types */
export const propTypes = {
  className: PropTypes.string.isRequired,
  /** if you have not specified a header component you can directly insert your Logo in the default header provided. */
  logo: PropTypes.any,
  version: PropTypes.any,
  labelHidden: PropTypes.bool,
  notification: PropTypes.object,
  hideNotification: PropTypes.func,
  rememberMe: PropTypes.bool,
  input: PropTypes.object,
  meta: PropTypes.object,
  header: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loader: PropTypes.any,
  onSubmit: PropTypes.func,
  loginForm: PropTypes.node,
  beforeActions: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  afterActions: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  autoHideDuration: PropTypes.number,
  theme: PropTypes.object,
};
/* eslint-enable react/no-unused-prop-types */

/** @component */
export default (LoginForm) => {
  class FormWrapperUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render() {
      const {
        header,
        footer,
        hideNotification,
        autoHideDuration,
        labelHidden,
        notification,
        loader,
        logo,
        version,
        loginForm,
        className,
        beforeActions,
        afterActions,
        rememberMe,
        translate,
        ...formRest
      } = omit(this.props, ['theme']);

      return (
        <div className={classnames(className, 'main-wrapper')}>
          <div className={classnames('login-wrapper')}>
            <div className={classnames('login-header-wrapper d-flex justify-content-center align-items-center flex-column')}>
              {header || createElement(DefaultLoginFormHeader, {
                logo,
                version,
              })}
            </div>
            <div>
              {loginForm || createElement(LoginForm, {
                notification: !hideNotification && notification && notification.message.length > 0 && <Alert color={notification.type} className="text-center w-100" autoHideDuration={notification.autoHideDuration || autoHideDuration}>{notification.message}</Alert>,
                beforeActions,
                afterActions,
                labelHidden,
                rememberMe,
                translate,
                loader,
                ...formRest,
              })}
            </div>
            <div className="login-footer-wrapper">
              {footer}
            </div>
          </div>
        </div>
      );
    }
  }
  /* eslint-disable no-unused-vars */
  const FormWrapper = styled(FormWrapperUnstyled)`
    ${(props) => `
      &.main-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
        justify-content: flex-start;
        background-color: ${props.theme.loginForm['$wrapper-bg-color']};
        font-size: ${props.theme.loginForm['$login-font-size']};
        .login-wrapper {
          padding: ${props.theme.loginForm['$login-wrapper-padding']};
          background-color: ${props.theme.loginForm['$login-wrapper-bg-color']};
          margin: auto;
          width: ${props.theme.loginForm['$login-wrapper-width']};
          border: ${props.theme.loginForm['$login-wrapper-border-width']} solid ${props.theme.loginForm['$login-wrapper-border-color']};
  
          .login-header-wrapper {
            margin: ${props.theme.loginForm['$login-header-wrapper-margin']};
          }
          .login-footer-wrapper {
            margin: ${props.theme.loginForm['$login-footer-wrapper-margin']};
            
            .footer-terms-conditions {
              font-size: ${props.theme.loginForm['$login-footer-font-size']};
            }
          }
        }
      }    
    `}
  `;
  /* eslint-enable no-unused-vars */

  FormWrapper.defaultProps = defaultProps;

  return FormWrapper;
};
