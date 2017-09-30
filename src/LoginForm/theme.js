export const theme = makeTheme();

export const makeTheme = (userTheme = {}) => {
  const newTheme = { loginForm: {} };
  const u = userTheme;

  // FormPageWrapper
  newTheme.loginForm['$background-color'] = u.loginForm && u.loginForm['$background-color'] ? u.loginForm['$background-color'] : '#fff';
  newTheme.loginForm['$box-shadow'] = u.loginForm && u.loginForm['$box-shadow'] ? u.loginForm['$box-shadow'] : '0px 1px 3px rgba(0, 0, 0, 0.25)';
  newTheme.loginForm['$border-radius'] = u.loginForm && u.loginForm['$border-radius'] ? u.loginForm['$border-radius'] : '3px';
  newTheme.loginForm['$color-lighter'] = u.loginForm && u.loginForm['$color-lighter'] ? u.loginForm['$color-lighter'] : '#EDEDED';
  newTheme.loginForm['$max-width'] = u.loginForm && u.loginForm['$max-width'] ? u.loginForm['$max-width'] : '325px';

  // LoginForm
  newTheme.loginForm['$color-lighter'] = u.loginForm && u.loginForm['$color-lighter'] ? u.loginForm['$color-lighter'] : '#EDEDED';
  newTheme.loginForm['$color-light'] = u.loginForm && u.loginForm['$color-light'] ? u.loginForm['$color-light'] : '#999';
  newTheme.loginForm.$color = u.loginForm && u.loginForm.$color ? u.loginForm.$color : '#666';
  newTheme.loginForm['$color-dark'] = u.loginForm && u.loginForm['$color-dark'] ? u.loginForm['$color-dark'] : '#333';

  return newTheme;
};

export default theme;
