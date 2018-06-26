export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'kopax.common.form.warning.username.required';
  } else if (values.username.length > 15) {
    errors.username = 'kopax.common.form.warning.username.maxLength';
  }
  if (!values.password) {
    errors.password = 'kopax.common.form.warning.password.required';
  }
  return errors;
};
