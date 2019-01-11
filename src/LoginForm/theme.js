import { makeScopedTheme, toMakeTheme } from 'bootstrap-styled';

const theme = makeScopedTheme('loginForm', {
  '$wrapper-bg-color': '#fff',
  '$wrapper-max-width': '26rem',
  '$footer-font-size': '.6rem',
  '$checkbox-margin-left': '-8.5rem',
});
export const makeTheme = toMakeTheme(theme);

export default theme;
