export const validate = (values) => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'kopax.common.form.warning.required';
  } else if (values.get('username').length > 15) {
    errors.username = 'kopax.common.form.warning.usernameMaxLength';
  }
  if (!values.get('password')) {
    errors.password = 'kopax.common.form.warning.required';
  }
  return errors;
};

