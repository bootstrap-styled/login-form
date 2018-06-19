import React, { Fragment, createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import classnames from 'classnames';

import Small from 'bootstrap-styled/lib/Small';
import Alert from 'bootstrap-styled/lib/Alert';
import P from 'bootstrap-styled/lib/P';
import A from 'bootstrap-styled/lib/A';
import H1 from 'bootstrap-styled/lib/H1';

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
    By clicking you agree to the <A href="#">Terms & Conditions</A> and <A href="#">Privacy Policy</A>.
  </Small>
);

const DefaultLoginFormAfterActions = () => (
  <div className="text-center">
    <A href="#">Forgot your username or password?</A>
    <P className="mt-3">Dont have an account? <A href="#">Sign Up</A></P>
  </div>
);

export const defaultProps = {
  logo: null,
  version: null,
  labelHidden: false,
  rememberMe: false,
  afterActions: <DefaultLoginFormAfterActions />,
  footer: <DefaultLoginFormFooter />,
  autoHideDuration: null,
  onSubmit: () => console.warn('You must set an onSubmit() function to the LoginForm.'),
  ...formDefaultProps,
};

export const propTypes = {
  className: PropTypes.string.isRequired,
  /** if you have not specified a header component you can directly insert your Logo in the default header provided.*/
  logo: PropTypes.any,
  version: PropTypes.any,
  labelHidden: PropTypes.bool,
  notification: PropTypes.object,
  hideNotification: PropTypes.func,
  rememberMe: PropTypes.bool,
  input: PropTypes.object,
  meta: PropTypes.object,
  header: PropTypes.object,
  footer: PropTypes.object,
  onSubmit: PropTypes.func,
  loginForm: PropTypes.node,
  beforeActions: PropTypes.node,
  afterActions: PropTypes.node,
  autoHideDuration: PropTypes.number,
};

/** @component */
export default (LoginForm) => {
  class FormWrapperUnstyled extends React.Component {

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
        logo,
        version,
        loginForm,
        className,
        beforeActions,
        afterActions,
        rememberMe,
        ...formRest
      } = this.props;

      return (
        <div className={classnames(className, 'main-wrapper')}>
          <div className={classnames('login-wrapper')}>
            <div className={classnames('login-header-wrapper py-1 mb-5 py-md-3 d-flex justify-content-center align-items-center flex-column')}>
              {header || createElement(DefaultLoginFormHeader, {
                logo,
                version,
              })}
            </div>
            <div className="login-form-wrapper mb-5">
              {loginForm || createElement(LoginForm, {
                notification: notification && notification.message.length > 0 && <Alert color={notification.type} className="text-center w-100" autoHideDuration={notification.autoHideDuration || autoHideDuration}>{notification.message}</Alert>,
                beforeActions,
                afterActions,
                labelHidden,
                rememberMe,
                ...formRest,
              })}
            </div>
            <div className="login-footer-wrapper py-3">
              {footer}
            </div>
          </div>
        </div>
      );
    }
  }
  const FormWrapper = styled(FormWrapperUnstyled)`
    ${(props) => `
      &.main-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        height: 1px;
        align-items: center;
        justify-content: flex-start;
        background-color: white;
        
        .login-wrapper {
          width: 100%;
          
          .login-form-wrapper {
            margin: 0 auto;
            max-width: 26rem;
          }
          
          .login-footer-wrapper {
            max-width: 26rem;
            margin: 0 auto;
            
            .footer-terms-conditions {
              font-size: .6rem;
              line-height: .5;
            }
          }
        }
      }    
    `}
  `;

  FormWrapper.defaultProps = defaultProps;

  return FormWrapper;
};
