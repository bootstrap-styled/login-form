'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('../index');

describe('should exports login forms', function () {
  describe('LoginForm', function () {
    it('should export LoginForm', function () {
      expect(typeof _index.LoginForm === 'undefined' ? 'undefined' : _typeof(_index.LoginForm)).toEqual('function');
    });
    it('should export makeTheme', function () {
      expect(typeof _index.makeTheme === 'undefined' ? 'undefined' : _typeof(_index.makeTheme)).toEqual('function');
    });
    it('should export LoginForm', function () {
      expect(typeof _index.theme === 'undefined' ? 'undefined' : _typeof(_index.theme)).toEqual('object');
    });
  });
});