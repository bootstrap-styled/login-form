import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from 'message-common';
import { Alert, Small } from 'bootstrap-styled';
import { boxShadow, radius } from 'bootstrap-styled-mixins';
import LoginForm, { defaultProps as formDefaultProps } from './LoginForm';

export const defaultProps = {
  logo: null,
  version: null,
  notification: {
    text: '',
    type: 'info',
  },
  hideNotificationDelay: 3000,
  ...formDefaultProps,
};

class FormWrapperUnstyled extends React.Component {
  static defaultProps = defaultProps;
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
    hideNotificationDelay: PropTypes.number,
  }


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
    const { hideNotification, hideNotificationDelay, logo, version, notification, className, ...formRest } = this.props;
    return (
      <div className={cn(className, 'form-page__wrapper')}>
        <div className={cn('form-page__form-wrapper', { 'js-form__err-animation': this.state.shacked })}>
          <div className="form-page__form-header text-center">
            <h2 className="form-page__form-heading"><FormattedMessage {...messages.authLogin} /></h2>
            {logo}
          </div>
          {notification.text.length > 0 && <Alert color={notification.type} className="mx-2"><FormattedMessage id={notification.text} /></Alert>}
          <LoginForm
            {...formRest}
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

const FormWrapper = styled(FormWrapperUnstyled)`
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
      animation: ${shake} ${props.theme['$motion-delay'].md} ${props.theme['$motion-timing-function'].easeInOut}
    }

  `}
`;
FormWrapper.defaultProps = defaultProps;

export default FormWrapper;
