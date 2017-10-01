'use strict';

var _immutable = require('immutable');

var _validate = require('../validate');

describe('validate', function () {
  var values = void 0;
  beforeEach(function () {
    values = (0, _immutable.fromJS)({
      username: '',
      password: ''
    });
  });
  it('should have no errors', function () {
    var valideForm = values.set('username', 'ok').set('password', 'ok');
    expect((0, _validate.validate)(valideForm)).toEqual({});
  });
  it('should require username', function () {
    expect((0, _validate.validate)(values.set('password', 'ok'))).toEqual({ username: 'kopax.common.form.warning.required' });
  });
  it('should require shorter username', function () {
    expect((0, _validate.validate)(values.set('username', 'okkkkkkkkkkkkkkkkkkkkkkkkkkk').set('password', 'ok'))).toEqual({ username: 'kopax.common.form.warning.usernameMaxLength' });
  });
  it('should require password', function () {
    expect((0, _validate.validate)(values.set('username', 'ok'))).toEqual({ password: 'kopax.common.form.warning.required' });
  });
});