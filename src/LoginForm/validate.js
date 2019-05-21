export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'usernameRequired';
  } else if (values.username.length > 15) {
    errors.username = 'usernameMax';
  }
  if (!values.password) {
    errors.password = 'passwordRequired';
  }
  return errors;
};
