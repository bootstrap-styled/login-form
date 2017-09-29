import { fromJS } from 'immutable';
import { validate } from '../validate';

describe('validate', () => {
  let values;
  beforeEach(() => {
    values = fromJS({
      username: '',
      password: '',
    });
  });
  it('should have no errors', () => {
    const valideForm = values.set('username', 'ok').set('password', 'ok');
    expect(validate(valideForm)).toEqual({});
  });
  it('should require username', () => {
    expect(validate(values.set('password', 'ok'))).toEqual({ username: 'kopax.common.form.warning.required' });
  });
  it('should require shorter username', () => {
    expect(validate(values.set('username', 'okkkkkkkkkkkkkkkkkkkkkkkkkkk').set('password', 'ok'))).toEqual({ username: 'kopax.common.form.warning.usernameMaxLength' });
  });
  it('should require password', () => {
    expect(validate(values.set('username', 'ok'))).toEqual({ password: 'kopax.common.form.warning.required' });
  });
});
