import { makeScopedTheme, toMakeTheme } from 'bootstrap-styled';

const theme = makeScopedTheme('loginForm', {
  '$wrapper-bg-color': '#E9EAEC',
  '$login-font-size': '15px',
  '$login-wrapper-padding': '2rem 1.25rem',
  '$login-wrapper-bg-color': '#fff',
  '$login-wrapper-width': '25rem',
  '$login-wrapper-border-width': '0px',
  '$login-wrapper-border-color': 'grey',
  '$login-header-wrapper-margin': '0',
  '$login-footer-wrapper-margin': '1rem auto',
  '$login-footer-font-size': '.6rem',
  '$checkbox-margin-left': '-8.5rem',
});
export const makeTheme = toMakeTheme(theme);

export default theme;
