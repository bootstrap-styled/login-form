export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'kopax.common.form.warning.required';
  } else if (values.username.length > 15) {
    errors.username = 'kopax.common.form.warning.usernameMaxLength';
  }
  if (!values.password) {
    errors.password = 'kopax.common.form.warning.required';
  }
  return errors;
};

