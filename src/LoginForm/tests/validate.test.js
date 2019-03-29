import { validate } from '../validate';

describe('validate function', () => {
  const errors = {
    username: 'username_error',
    password: 'password_error',
  };

  it('should display an error if username is then 15 characters', () => {
    validate({ username: 'test' });
    expect(errors.username).toEqual('username_error');
  });
  it('should display an username if username is null', () => {
    validate({ username: null });
    expect(errors.username).toEqual('username_error');
  });
  it('should display an error if password is null', () => {
    validate({ password: null });
    expect(errors.password).toEqual('password_error');
  });
});
