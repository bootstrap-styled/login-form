'use strict';

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('makeTheme', function () {
  it('should use default values', function () {
    expect((0, _theme.makeTheme)()).toEqual(_theme2.default);
  });
  it('should use custom values', function () {
    var customTheme = {
      loginForm: {
        '$background-color': '#000',
        '$box-shadow': '5px 1px 3px rgba(0, 0, 0, 0.25)',
        '$border-radius': '6px',
        '$color-lighter': '#FDFDFD',
        '$max-width': '425px',
        $color: '#666',
        '$color-dark': '#333',
        '$color-light': '#999'
      }
    };
    expect((0, _theme.makeTheme)(customTheme)).toEqual(customTheme);
  });
});