import { validate } from '../validate';

describe('validate', () => {
  it('should have no errors', () => {
    expect(validate({ username: 'ok', password: 'ok' })).toEqual({});
  });
  it('should require username', () => {
    expect(validate({ password: 'ok' })).toEqual({ username: 'kopax.common.form.warning.required' });
  });
  it('should require shorter username', () => {
    expect(validate({ username: 'okkkkkkkkkkkkkkkkkkkkkkkkkkk', password: 'ok' })).toEqual({ username: 'kopax.common.form.warning.usernameMaxLength' });
  });
  it('should require password', () => {
    expect(validate({ username: 'ok' })).toEqual({ password: 'kopax.common.form.warning.required' });
  });
});
