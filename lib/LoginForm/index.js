'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FormPageWrapper = require('./FormPageWrapper');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormPageWrapper).default;
  }
});

var _theme = require('./theme');

Object.defineProperty(exports, 'makeTheme', {
  enumerable: true,
  get: function get() {
    return _theme.makeTheme;
  }
});
Object.defineProperty(exports, 'theme', {
  enumerable: true,
  get: function get() {
    return _theme.theme;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }