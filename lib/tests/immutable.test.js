'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _immutable = require('../immutable');

describe('should exports immutable login forms', function () {
  describe('LoginForm', function () {
    it('should export LoginForm', function () {
      expect(typeof _immutable.LoginForm === 'undefined' ? 'undefined' : _typeof(_immutable.LoginForm)).toEqual('function');
    });
    it('should export makeTheme', function () {
      expect(typeof _immutable.makeTheme === 'undefined' ? 'undefined' : _typeof(_immutable.makeTheme)).toEqual('function');
    });
    it('should export LoginForm', function () {
      expect(typeof _immutable.theme === 'undefined' ? 'undefined' : _typeof(_immutable.theme)).toEqual('object');
    });
  });
});