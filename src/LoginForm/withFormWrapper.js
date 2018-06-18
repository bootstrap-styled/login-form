import React, { Fragment, createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import classnames from 'classnames';

import Small from 'bootstrap-styled/lib/Small';
import Alert from 'bootstrap-styled/lib/Alert';

import { defaultProps as formDefaultProps } from './withLoginForm';

const DefaultLoginFormHeader = ({ /* eslint-disable react/prop-types */
  logo, version,
}) => (
  <Fragment>
    {logo}
    {version && (
      <Small>
        {version}
      </Small>
    )}
  </Fragment>
);

export const defaultProps = {
  logo: null,
  version: null,
  footer: null,
  notification: {
    text: '',
    type: 'info',
  },
  autoHideDuration: null,
  onSubmit: () => console.warn('You must set an onSubmit() function to the LoginForm.'),
  ...formDefaultProps,
};

/** @component */
export default (LoginForm) => {
  class FormWrapperUnstyled extends React.Component {
    static propTypes = {
      className: PropTypes.string.isRequired,
      logo: PropTypes.any,
      version: PropTypes.any,
      notification: PropTypes.shape({
        text: PropTypes.string,
        type: PropTypes.oneOf([
          'info',
          'success',
          'danger',
          'primary',
          'secondary',
          'warning',
          'inverse',
        ]),
      }),
      hideNotification: PropTypes.func,
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

    static defaultProps = defaultProps;

    state = {
      shacked: false,
    }

    componentWillReceiveProps(newProps) {
      if (newProps.notification.text !== this.props.notification.text) {
        this.shack();
      }
    }

    shack = () => {
      this.setState({
        shacked: !this.state.shacked,
      }, this.resetShack);
    }

    resetShack = () => {
      if (this.state.shacked) {
        setTimeout(this.props.hideNotification, this.props.hideNotificationDelay);
      }
    }

    render() {
      const {
        header,
        footer,
        hideNotification,
        autoHideDuration,
        notification,
        logo,
        version,
        loginForm,
        className,
        onSubmit,
        beforeActions,
        afterActions,
        ...formRest
      } = this.props;

      return (
        <div className={classnames(className, 'main-wrapper')}>
          <div className={classnames('login-wrapper', { 'js-form__err-animation': this.state.shacked })}>
            <div className="login-header-wrapper py-1 py-md-3 d-flex align-items-center flex-column">
              {header || createElement(DefaultLoginFormHeader, {
                logo,
                version,
              })}
            </div>
            <div className="login-form-wrapper">
              {loginForm || createElement(LoginForm, {
                notification: notification.text.length > 0 && <Alert color={notification.type} className="text-center" autoHideDuration={autoHideDuration}>{notification.text}</Alert>,
                beforeActions,
                afterActions,
                onSubmit,
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
        
        .login-header-wrapper {
          border-bottom: 1px solid lightgrey;
        }
        
        .login-wrapper {
          width: 100%;
          
          .login-form-wrapper {
            padding: 2rem .75rem;
            max-width: 30rem;
            margin: 0 auto;
          }
        }
      }
      
      &.login-form {
        min-width: 300px;
        margin-top: 6em;
      }
    
    `}

  `;

  FormWrapper.defaultProps = defaultProps;

  return FormWrapper;
};
