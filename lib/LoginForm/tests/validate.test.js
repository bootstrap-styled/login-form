'use strict';

var _validate = require('../validate');

describe('validate', function () {
  it('should have no errors', function () {
    expect((0, _validate.validate)({ username: 'ok', password: 'ok' })).toEqual({});
  });
  it('should require username', function () {
    expect((0, _validate.validate)({ password: 'ok' })).toEqual({ username: 'kopax.common.form.warning.required' });
  });
  it('should require shorter username', function () {
    expect((0, _validate.validate)({ username: 'okkkkkkkkkkkkkkkkkkkkkkkkkkk', password: 'ok' })).toEqual({ username: 'kopax.common.form.warning.usernameMaxLength' });
  });
  it('should require password', function () {
    expect((0, _validate.validate)({ username: 'ok' })).toEqual({ password: 'kopax.common.form.warning.required' });
  });
});