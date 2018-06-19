import React, { createElement, Fragment } from 'react';
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
  beforeActions: null,
  isLoading: null,
  rememberMe: false,
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
  beforeActions: PropTypes.node,
  afterActions: PropTypes.node,
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  labelHidden: PropTypes.bool,
  rememberMe: PropTypes.bool,
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
  labelHidden,
  ...labelProps,
  ...props
}) => (
  <FormGroup color={touched && error ? 'danger' : ''}>
    {props.type === 'checkbox' ? (
      <Fragment>
        <Label {...labelProps} hidden={labelHidden}><Input {...inputProps} {...props} type={props.type} />{capitalizeFirstLetter(props.label)}</Label>
      </Fragment>
    ) : (
      <Fragment>
        <Label {...labelProps} hidden={labelHidden}>{capitalizeFirstLetter(props.label)}</Label>
        <Input {...inputProps} type={props.type} {...props} />
      </Fragment>
    )}

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
      labelHidden,
      rememberMe,
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
        {notification}
        <div className="field-wrapper mt-4">
          {Field ? (
            <Field
              name="username"
              label="usermame"
              type="text"
              placeholder={placeHolder.username}
              disabled={isLoading}
              component={renderInput}
              labelHidden={labelHidden}
            />
          ) : (
            createElement(renderInput, {
              label: 'username',
              placeholder: placeHolder.username,
              labelHidden,
            })
          )}
        </div>
        <div className="field-wrapper">
          {Field ? (
            <Field
              name="password"
              label="password"
              type="password"
              placeholder={placeHolder.password}
              disabled={isLoading}
              component={renderInput}
              labelHidden={labelHidden}
            />
          ) : (
            createElement(renderInput, {
              label: 'password',
              placeholder: placeHolder.password,
              labelHidden,
            })
          )}
        </div>
        {beforeActions}
        <div className="action-wrapper d-flex flex-column flex-md-row justify-content-between align-items-md-center py-3 my-3">
          {rememberMe ? (Field ? ( // eslint-disable-line no-nested-ternary
            <Field
              name="rememberMe"
              label="remember me"
              type="checkbox"
              disabled={isLoading}
              component={renderInput}
            />
          ) : (
            <FormGroup>
              <Label check>{capitalizeFirstLetter('remember me')}<Input type="checkbox" /></Label>
            </FormGroup>
          )) : null}
          <Button type="submit" disabled={isLoading || submitting} color="primary">
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
        .btn {
          width: 100%;
          ${mediaBreakpointUp('md', props.theme['$grid-breakpoints'], 'width: 50%')}
        }
        .form-group {
          margin-bottom: 0;
        }
        .form-check-input {
          margin-left: -8.5rem;
        }
      }
    `}
  `;

  LoginForm.defaultProps = defaultProps;
  return LoginForm;
};
