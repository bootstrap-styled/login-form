import React, { createElement, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
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
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import messages from './messages';

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
  triggerSubmit,
  untouch,
  valid,
  validate,
  invalid,
  ...props
}) => props;

// see http://redux-form.com/6.4.3/examples/material-ui/
export const RenderInput = ({ /* eslint-disable react/prop-types */
  meta: { touched, error } = {},
  input: inputProps,
  labelHidden,
  label,
  type,
  labelProps = {},
  className,
  ...props
}) => (
  <FormGroup color={touched && error ? 'danger' : ''} className={className}>
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
    {!!(touched && error) && <FormFeedback><FormattedMessage {...messages[error]} /></FormFeedback>}
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
      usernameTranslateKey,
      usernameLabel,
      passwordTranslateKey,
      passwordLabel,
      rememberMeTranslateKey,
      rememberMeLabel,
      loginTranslateKey,
      loginLabel,
      ...rest
    } = omit(props, ['theme']);

    return (
      <Form name="login-form" className={cn('form', className)} onSubmit={handleSubmit ? handleSubmit(onSubmit) : onSubmit} {...sanitizeRestProps(rest)}>
        {notification}
        <div className="field-wrapper mb-2">
          {Field ? (
            <Field
              name="username"
              label={<FormattedMessage {...messages.username} />}
              type="text"
              placeholder={placeHolder.username}
              disabled={isLoading}
              component={RenderInput}
              labelHidden={labelHidden}
            />
          ) : (
            createElement(RenderInput, {
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
              label={<FormattedMessage {...messages.password} />}
              type="password"
              placeholder={placeHolder.password}
              disabled={isLoading}
              component={RenderInput}
              labelHidden={labelHidden}
            />
          ) : (
            createElement(RenderInput, {
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
              props={{ className: 'mb-0' }}
              label={<FormattedMessage {...messages.rememberMe} />}
              type="checkbox"
              disabled={isLoading}
              component={RenderInput}
            />
          ) : (
            <FormGroup className="mb-0">
              <Label check>
                <Input type="checkbox" />
                {'Remember me'}
              </Label>
            </FormGroup>
          )) : null}
          <Button type="submit" disabled={isLoading || submitting} color="primary">
            {!(isLoading || submitting) ? <FormattedMessage {...messages.login} /> : loader /* eslint-disable-line */}
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
      }
    `}
  `;

  LoginForm.defaultProps = defaultProps;
  return LoginForm;
};
