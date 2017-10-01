'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = require('redux-form');

var _withLoginForm = require('./withLoginForm');

var _withLoginForm2 = _interopRequireDefault(_withLoginForm);

var _withFormWrapper = require('./withFormWrapper');

var _withFormWrapper2 = _interopRequireDefault(_withFormWrapper);

var _validate = require('./validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginFormRedux = (0, _reduxForm.reduxForm)({
  form: 'login',
  enableReinitialize: false,
  validate: _validate.validate
})((0, _withLoginForm2.default)(_reduxForm.Field));

exports.default = (0, _withFormWrapper2.default)(LoginFormRedux);
module.exports = exports['default'];