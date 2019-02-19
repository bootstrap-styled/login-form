import React, { createElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import cn from 'classnames';
import Label from '@bootstrap-styled/v4/lib/Label';
import Input from '@bootstrap-styled/v4/lib/Input';
import Button from '@bootstrap-styled/v4/lib/Button';
import Form from '@bootstrap-styled/v4/lib/Form';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import FormFeedback from '@bootstrap-styled/v4/lib/Form/FormFeedback';
import bp from '@bootstrap-styled/mixins/lib/breakpoints';

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
  theme: {
    loginForm: {
      '$wrapper-bg-color': '#fff',
      '$wrapper-max-width': '26rem',
      '$footer-font-size': '.6rem',
      '$checkbox-margin-left': '-8.5rem',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
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
  translate: PropTypes.func,
};

const sanitizeRestProps = ({
  anyTouched,
  array,
  asyncValidate,
  asyncValidating,
  autofill,
  blur,
  change,
  clearAsyncError,
  clearFields,
  clearSubmit,
  clearSubmitErrors,
  destroy,
  dirty,
  dispatch,
  form,
  handleSubmit,
  initialize,
  initialized,
  initialValues,
  pristine,
  pure,
  redirect,
  reset,
  resetSection,
  save,
  submit,
  submitFailed,
  submitSucceeded,
  submitting,
  touch,
  translate,
  triggerSubmit,
  untouch,
  valid,
  validate,
  invalid,
  ...props
}) => props;

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({ /* eslint-disable react/prop-types */
  meta: { touched, error } = {},
  input: inputProps,
  labelHidden,
  translate,
  label,
  type,
  labelProps = {},
  ...props
}) => (
  <FormGroup color={touched && error ? 'danger' : ''}>
    {type === 'checkbox' ? (
      <Fragment>
        <Label {...labelProps} hidden={labelHidden}>
          <Input {...inputProps} {...props} type={type} />
          {label}
        </Label>
      </Fragment>
    ) : (
      <Fragment>
        <Label {...labelProps} hidden={labelHidden}>
          {label}
        </Label>
        <Input {...inputProps} type={type} {...props} />
      </Fragment>
    )}
    {!!(touched && error) && <FormFeedback>{translate ? translate(error) : error}</FormFeedback>}
  </FormGroup>
);


/** @component */
export default (Field) => {
  const LoginFormUnstyled = (props) => {
    const {
      className,
      placeHolder,
      beforeActions,
      afterActions,
      notification,
      isLoading,
      labelHidden,
      rememberMe,
      handleSubmit,
      onSubmit,
      submitting,
      translate,
      loader,
      ...rest
    } = omit(props, ['theme']);

    return (
      <Form name="login-form" className={cn('form', className)} onSubmit={handleSubmit ? handleSubmit(onSubmit) : onSubmit} {...sanitizeRestProps(rest)}>
        {notification}
        <div className="field-wrapper">
          {Field ? (
            <Field
              name="username"
              label={translate ? translate('kopax.common.form.label.username') : 'kopax.common.form.label.username'}
              type="text"
              placeholder={placeHolder.username}
              disabled={isLoading}
              component={renderInput}
              labelHidden={labelHidden}
              translate={translate}
            />
          ) : (
            createElement(renderInput, {
              label: 'Username',
              placeholder: placeHolder.username,
              labelHidden,
            })
          )}
        </div>
        <div className="field-wrapper">
          {Field ? (
            <Field
              name="password"
              label={translate ? translate('kopax.common.form.label.password') : 'kopax.common.form.label.password'}
              type="password"
              placeholder={placeHolder.password}
              disabled={isLoading}
              component={renderInput}
              labelHidden={labelHidden}
              translate={translate}
            />
          ) : (
            createElement(renderInput, {
              label: 'Password',
              placeholder: placeHolder.password,
              labelHidden,
            })
          )}
        </div>
        {beforeActions}
        <div className="action-wrapper d-flex flex-column flex-md-row justify-content-around align-items-md-center py-3 my-3">
          {rememberMe ? (Field ? ( // eslint-disable-line no-nested-ternary
            <Field
              name="rememberMe"
              label={translate ? translate('kopax.common.form.label.rememberMe') : 'kopax.common.form.label.rememberMe'}
              type="checkbox"
              disabled={isLoading}
              component={renderInput}
              translate={translate}
            />
          ) : (
            <FormGroup className="mb-0">
              <Label check>
                {'Remember me'}
                <Input type="checkbox" />
              </Label>
            </FormGroup>
          )) : null}
          <Button type="submit" disabled={isLoading || submitting} color="primary">
            {!(isLoading || submitting) ? translate ? translate('kopax.common.form.button.login') : 'kopax.common.form.button.login' : loader /* eslint-disable-line */}
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
          ${bp.up('md', props.theme['$grid-breakpoints'], 'width: 50%')}
        }
        .form-check-input {
          margin-left: ${props.theme.loginForm['$checkbox-margin-left']};
        }
      }
    `}
  `;

  LoginForm.defaultProps = defaultProps;
  return LoginForm;
};
