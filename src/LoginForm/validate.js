export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'bootstrap-styled.login.form.warning.username.required';
  } else if (values.username.length > 15) {
    errors.username = 'bootstrap-styled.login.form.warning.username.maxLength';
  }
  if (!values.password) {
    errors.password = 'bootstrap-styled.login.form.warning.password.required';
  }
  return errors;
};
