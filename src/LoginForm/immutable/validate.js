export const validate = (values) => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'bootstrap-styled.login.form.warning.required';
  } else if (values.get('username').length > 15) {
    errors.username = 'bootstrap-styled.login.form.warning.usernameMaxLength';
  }
  if (!values.get('password')) {
    errors.password = 'bootstrap-styled.login.form.warning.required';
  }
  return errors;
};
