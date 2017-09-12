'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('../index');

describe('should exports login forms', function () {
  describe('LoginForm', function () {
    it('should export LoginForm', function () {
      expect(typeof _index.LoginForm === 'undefined' ? 'undefined' : _typeof(_index.LoginForm)).toEqual('function');
    });
    it('should export makeTheme', function () {
      expect(typeof _index.makeThemeLoginForm === 'undefined' ? 'undefined' : _typeof(_index.makeThemeLoginForm)).toEqual('function');
    });
    it('should export LoginForm', function () {
      expect(typeof _index.themeLoginForm === 'undefined' ? 'undefined' : _typeof(_index.themeLoginForm)).toEqual('object');
    });
  });
});