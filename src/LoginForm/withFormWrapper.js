import React, { Fragment, createElement } from 'react';
import { FormattedMessage } from 'react-intl';
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
import messages from './messages';

export const DefaultLoginFormHeader = ({ /* eslint-disable react/prop-types */
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

export const DefaultLoginFormFooter = () => (
  <Small className="footer-terms-conditions" color="muted">
    {<FormattedMessage {...messages.clicking} />}
    {' '}
    <A href="#">{<FormattedMessage {...messages.termsConditions} />}</A>
    {' '}
    {<FormattedMessage {...messages.and} />}
    {' '}
    <A href="#">{<FormattedMessage {...messages.privacyPolicy} />}</A>
.
  </Small>
);

export const DefaultLoginFormAfterActions = () => (
  <div className="text-center">
    <A href="#">{<FormattedMessage {...messages.forgotCredentials} />}</A>
    <P className="mt-1">
      {<FormattedMessage {...messages.noAccount} />}
      <A href="#">{<FormattedMessage {...messages.signUp} />}</A>
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
  header: DefaultLoginFormHeader,
  loader: 'Loading...',
  autoHideDuration: null,
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
      '$login-header-wrapper-border-width': '1px',
      '$login-header-wrapper-border-color': '#D9DADC',
      '$login-header-wrapper-margin-top': '2rem',
      '$login-header-wrapper-margin-bottom': '2rem',
      '$login-header-wrapper-padding-bottom': '2rem',
      '$login-footer-wrapper-border-width': '1px',
      '$login-footer-wrapper-border-color': '#D9DADC',
      '$login-footer-wrapper-margin': '2rem auto',
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
    PropTypes.func,
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
        ...formRest
      } = omit(this.props, ['theme']);
      return (
        <div className={classnames(className, 'main-wrapper')}>
          <div className={classnames('login-wrapper')}>
            {header && (
              <div className={classnames('login-header-wrapper d-flex justify-content-center align-items-center flex-column')}>
                {createElement(header, {
                  logo,
                  version,
                })}
              </div>
            )}
            <div>
              {loginForm || createElement(LoginForm, {
                notification: notification && notification.message.length > 0 && <Alert color={notification.type} className="text-center w-100" autoHideDuration={notification.autoHideDuration || autoHideDuration} onClick={hideNotification}>{notification.message}</Alert>,
                beforeActions,
                afterActions,
                labelHidden,
                rememberMe,
                loader,
                ...formRest,
              })}
            </div>
            {footer && (
              <div className="login-footer-wrapper">
                {footer}
              </div>
            )}
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
            border-bottom: ${props.theme.loginForm['$login-header-wrapper-border-width']} solid ${props.theme.loginForm['$login-header-wrapper-border-color']};
            margin-top: ${props.theme.loginForm['$login-header-wrapper-margin-top']};
            margin-bottom: ${props.theme.loginForm['$login-header-wrapper-margin-bottom']};
            padding-bottom: ${props.theme.loginForm['$login-header-wrapper-padding-bottom']};

          }
          .login-footer-wrapper {
            margin: ${props.theme.loginForm['$login-footer-wrapper-margin']};
            border-top: ${props.theme.loginForm['$login-footer-wrapper-border-width']} solid ${props.theme.loginForm['$login-footer-wrapper-border-color']};
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
