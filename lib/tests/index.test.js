'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _exports = require('../index');

describe('should exports components', function () {
  Object.keys(_exports).forEach(function (exported) {
    it('should be function', function () {
      expect(_typeof(_exports[exported])).toEqual('function');
    });
  });
});