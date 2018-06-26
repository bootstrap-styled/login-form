export const makeTheme = (userTheme = { loginForm: {} }) => {
  const newTheme = { loginForm: {} };
  const v = newTheme.loginForm;
  const u = userTheme.loginForm || {};

  // LoginWrapper
  v['$wrapper-bg-color'] = u['$wrapper-bg-color'] || '#fff';
  v['$wrapper-max-width'] = u['$wrapper-max-width'] || '26rem';
  v['$footer-font-size'] = u['$footer-font-size'] || '.6rem';


  // LoginForm
  v['$checkbox-margin-left'] = u['$checkbox-margin-left'] || '-8.5rem';

  newTheme.loginForm = v;
  return { ...newTheme, ...userTheme };
};

export default makeTheme();
