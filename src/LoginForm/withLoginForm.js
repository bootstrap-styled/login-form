import React, { createElement } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import cn from 'classnames';

import Label from 'bootstrap-styled/lib/Label';
import Input from 'bootstrap-styled/lib/Input';
import Button from 'bootstrap-styled/lib/Button';
import Form from 'bootstrap-styled/lib/Form';
import FormGroup from 'bootstrap-styled/lib/Form/FormGroup';
import FormFeedback from 'bootstrap-styled/lib/Form/FormFeedback';
import { mediaBreakpointUp } from 'bootstrap-styled-mixins/lib/breakpoints';

import { LoadingIndicator } from 'loaders';

export const defaultProps = {
  beforeButton: null,
  loading: null,
  initialValues: {
    username: '',
    password: '',
  },
  placeHolder: {
    username: 'Santaclauze',
    password: '••••••••••',
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  beforeButton: PropTypes.node,
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  loader: PropTypes.node,
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

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({ /* eslint-disable react/prop-types */
  meta: { touched, error } = {},
  input: { ...inputProps },
  labelProps,
  ...props
}) => (
  <FormGroup color={error && 'danger'}>
    <Label {...labelProps}>{capitalizeFirstLetter(props.label)}</Label>

    <Input {...inputProps} {...props} />
    {!!(touched && error) && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);


/** @component */
export default (Field) => {
  const LoginFormUnstyled = (props) => {
    const {
      className,
      placeHolder,
      loader = <LoadingIndicator />,
      beforeActions,
      afterActions,
      notification,
      isLoading,
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
      <Form name="login-form" className={cn('form', className)} onSubmit={handleSubmit ? handleSubmit(onSubmit) : onSubmit} {...rest}>
        <div className="field-wrapper">
          {notification}
          {Field ? (
            <Field
              name="username"
              type="text"
              label="username"
              placeHolder={placeHolder.username}
              disabled={isLoading}
              component={renderInput}
            />
          ) : (
            createElement(renderInput, {
              label: 'username',
              placeholder: placeHolder.username,
            })
          )}
        </div>
        <div className="field-wrapper">
          {Field ? (
            <Field
              name="password"
              type="password"
              label="password"
              placeHolder={placeHolder.username}
              disabled={isLoading}
              component={renderInput}
            />
          ) : (
            createElement(renderInput, {
              label: 'password',
              placeholder: placeHolder.password,
            })
          )}
        </div>
        {beforeActions}
        <div className="action-wrapper d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
          {Field ? (
            <Field
              name="rememberMe"
              type="check"
              label="rememberMe"
              disabled={isLoading}
              component={renderInput}
            />
          ) : (
            <FormGroup color={error && 'danger'}>
              <Label check>{capitalizeFirstLetter('remember me')} <Input type="checkbox" /></Label>
            </FormGroup>
          )}
          <Button type="submit" disabled={isLoading || submitting} color="success">
            Login
            {(isLoading || submitting) && loader}
          </Button>
        </div>
        {afterActions}
      </Form>
    );
  };

  LoginFormUnstyled.propTypes = propTypes;

  const LoginForm = styled(LoginFormUnstyled)`
    ${(props) => `
      .action-wrapper {     
        .form-check-input {
          margin-left: -9rem;
        }
        .btn {
          width: 100%;
          ${mediaBreakpointUp('md', props.theme['$grid-breakpoints'], 'width: 50%')}
        }
      }
    `}
  `;

  LoginForm.defaultProps = defaultProps;
  return LoginForm;
};
