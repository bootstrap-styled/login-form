'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoginForm = require('./LoginForm');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LoginForm).default;
  }
});
Object.defineProperty(exports, 'LoginForm', {
  enumerable: true,
  get: function get() {
    return _LoginForm.LoginForm;
  }
});
Object.defineProperty(exports, 'makeThemeLoginForm', {
  enumerable: true,
  get: function get() {
    return _LoginForm.makeTheme;
  }
});
Object.defineProperty(exports, 'themeLoginForm', {
  enumerable: true,
  get: function get() {
    return _LoginForm.theme;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }