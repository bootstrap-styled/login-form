import React from 'react';
import { reduxForm, Field } from 'redux-form';
import withLoginForm from './withForm';
import LoginWrapper from './LoginWrapper';
import { validate as validateForm } from './validate';

const LoginForm = () =>(
  <LoginWrapper>
    {withLoginForm(Field)}
  </LoginWrapper>
)

const LoginFormRedux = reduxForm({
  form: 'login',
  enableReinitialize: false,
  validate: validateForm,
})(LoginForm);

/** @component */
export default LoginFormRedux;
