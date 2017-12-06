import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from 'message-common';
import { LoadingIndicator } from 'loaders';
import { FadeInRight, theme as themeMotion } from 'bootstrap-styled-motion';
import { Form, Button, P, makeTheme } from 'bootstrap-styled';
import { theme as themeLoginForm } from './theme';
const theme = makeTheme({ ...themeLoginForm, ...themeMotion });

export const defaultProps = {
  header: null,
  footer: null,
  beforeButton: null,
  onSubmit: null,
  loading: null,
  initialValues: {
    username: '',
    password: '',
  },
  placeHolder: {
    username: 'Santaclauze',
    password: '••••••••••',
  },
  theme,
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  beforeButton: PropTypes.node,
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  initialValues: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  placeHolder: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  theme: PropTypes.object,
};
/* eslint-enable react/require-default-props */

const ErrorParagraph = styled(P)`
  position: absolute;
  font-size: 0.8rem;
  right: 0.2rem;
  bottom: 0;
  margin-bottom: 0;
`;

/* eslint-disable react/require-default-props, react/prop-types, no-unused-vars */
const renderField = ({ input, placeHolder, theme: unused, type, label, name, meta: { touched, error } }) => (
  <div>
    <input className="form__field-input" {...input} type={type} placeholder={placeHolder} name={name} />
    <label className="form__field-label" htmlFor={name}>
      {label}
    </label>
    {touched && error && (
      <FadeInRight inline={false}>
        <ErrorParagraph color="warning" className="form_field-error">{' '}<FormattedMessage id={error} />{' '}<i className="fa fa-exclamation-circle" /></ErrorParagraph>
      </FadeInRight>
    )}
  </div>
);
/* eslint-enable react/require-default-props, react/prop-types, no-unused-vars */


export default (Field) => {
  const LoginFormUnstyled = (props) => {
    const {
      className,
      placeHolder,
      header, footer,
      beforeButton,
      loading,
      ...reduxFormProps
    } = props;
    const {
      anyTouched,
      asyncValidate,
      asyncValidating,
      blur,
      change,
      clearFields,
      clearSubmit,
      destroy,
      dirty,
      dispatch,
      success,
      error,
      handleSubmit,
      initialize,
      initialized,
      initialValues,
      invalid,
      pristine,
      reset,
      submitFailed,
      submitSucceeded,
      submitting,
      touch,
      untouch,
      valid,
      warning,
      pure,
      triggerSubmit,
      autofill,
      clearSubmitErrors,
      clearAsyncError,
      submit,
      array,
      onSubmit,
      validate,
      warn,
      onError,
      ...rest
    } = reduxFormProps;

    return (
      <Form name="login-form" className={cn('form', className)} onSubmit={handleSubmit(onSubmit)} {...rest}>
        {header}
        <div className="form__field-wrapper">
          <Field
            name="username"
            type="text"
            label={<FormattedMessage {...messages.formUsername} />}
            placeHolder={placeHolder.username}
            component={renderField}
          />
        </div>
        <div className="form__field-wrapper">
          <Field
            name="password"
            type="password"
            label={<FormattedMessage {...messages.formPassword} />}
            placeHolder={placeHolder.password}
            component={renderField}
          />
        </div>
        <div className="form__submit-btn-wrapper">
          <div>
            {beforeButton}
            <Button disabled={loading || submitting} color="success">
              {<FormattedMessage {...messages.authLogin} />}
              {(loading || submitting) && (<span>{' '}<LoadingIndicator /></span>)}
            </Button>
          </div>
        </div>
        {footer}
      </Form>
    );
  };

  LoginFormUnstyled.propTypes = propTypes;

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
      
      .form_field-error {
        float: right;
      }
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

  return LoginForm;
};
