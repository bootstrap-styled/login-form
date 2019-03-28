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
});
export const makeTheme = toMakeTheme(theme);

export default theme;
