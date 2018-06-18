import React, { Fragment, createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import classnames from 'classnames';

import Card from 'bootstrap-styled/lib/Cards';
import Small from 'bootstrap-styled/lib/Small';
import Alert from 'bootstrap-styled/lib/Alert';

import { defaultProps as formDefaultProps } from './withLoginForm';

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 1px;
    align-items: center;
    justify-content: flex-start;
    background: url(https://source.unsplash.com/random/1600x900);
    background-repeat: no-repeat;
    background-size: cover;
`;

const LoginFormWrapperWrapper = styled(Card)`
    &.login-form {
        min-width: 300px;
        margin-top: 6em;
    }
`;


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
  header: <DefaultLoginFormHeader />,
  notification: {
    text: '',
    type: 'info',
  },
  hideNotificationDelay: 3000,
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
        hideNotificationDelay,
        notification,
        loginForm,
        className,
        onSubmit,
        ...formRest
      } = this.props;

      return (
        <MainWrapper className={classnames(className, 'main-wrapper')}>
          <div className={classnames('form-page__form-wrapper', { 'js-form__err-animation': this.state.shacked })}>
            <LoginFormWrapperWrapper className="login-wrapper">
              <div className="login-header-wrapper">
                {header}
              </div>
              {notification.text.length > 0 && <Alert color={notification.type} className="mx-2">DURE</Alert>}
              <div className="login-form-wrapper">
                {loginForm || createElement(LoginForm, {
                  onSubmit,
                  ...formRest,
                })}
              </div>
              <div className="login-footer-wrapper">
                {footer}
              </div>
            </LoginFormWrapperWrapper>
          </div>
        </MainWrapper>
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
    ${shake}
  `;

  FormWrapper.defaultProps = defaultProps;

  return FormWrapper;
};
