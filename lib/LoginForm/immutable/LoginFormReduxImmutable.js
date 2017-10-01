'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('redux-form/immutable');

var _withLoginForm = require('../withLoginForm');

var _withLoginForm2 = _interopRequireDefault(_withLoginForm);

var _withFormWrapper = require('../withFormWrapper');

var _withFormWrapper2 = _interopRequireDefault(_withFormWrapper);

var _validate = require('./validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginFormRedux = (0, _immutable.reduxForm)({
  form: 'login',
  enableReinitialize: false,
  validate: _validate.validate
})((0, _withLoginForm2.default)(_immutable.Field));

exports.default = (0, _withFormWrapper2.default)(LoginFormRedux);
module.exports = exports['default'];