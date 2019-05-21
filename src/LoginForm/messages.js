import { defineMessages } from 'react-intl';

export const scope = 'bootstrap-styled.login.form';

export default defineMessages({
  username: {
    id: `${scope}.label.username`,
    defaultMessage: 'Username',
  },
  password: {
    id: `${scope}.label.password`,
    defaultMessage: 'Password',
  },
  rememberMe: {
    id: `${scope}.label.rememberMe`,
    defaultMessage: 'Remember me',
  },
  login: {
    id: `${scope}.button.login`,
    defaultMessage: 'Login',
  },
  clicking: {
    id: `${scope}.footer.clicking`,
    defaultMessage: 'By clicking you agree to the',
  },
  termsConditions: {
    id: `${scope}.footer.termsConditions`,
    defaultMessage: 'Terms & Conditions',
  },
  and: {
    id: `${scope}.footer.and`,
    defaultMessage: 'and',
  },
  privacyPolicy: {
    id: `${scope}.footer.privacyPolicy`,
    defaultMessage: 'Privacy policy',
  },
  forgotCredentials: {
    id: `${scope}.actions.forgotCredentials`,
    defaultMessage: 'Forgot your username or password?',
  },
  noAccount: {
    id: `${scope}.actions.noAccount`,
    defaultMessage: 'Don\'t have an account?',
  },
  signUp: {
    id: `${scope}.actions.signUp`,
    defaultMessage: 'Sign Up',
  },
  usernameRequired: {
    id: `${scope}.username.required`,
    defaultMessage: 'Username is required.',
  },
  usernameMax: {
    id: `${scope}.username.maxLength`,
    defaultMessage: 'Maximum length has been reached.',
  },
  passwordRequired: {
    id: `${scope}.password.required`,
    defaultMessage: 'Password is required.',
  },
});
