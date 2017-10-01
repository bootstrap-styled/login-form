import { makeTheme, theme } from '../theme';

describe('makeTheme', () => {
  it('should use default values', () => {
    expect(makeTheme()).toEqual(theme);
  });
  it('should use custom values', () => {
    const customTheme = {
      loginForm: {
        '$background-color': '#000',
        '$box-shadow': '5px 1px 3px rgba(0, 0, 0, 0.25)',
        '$border-radius': '6px',
        '$color-lighter': '#FDFDFD',
        '$max-width': '425px',
        $color: '#666',
        '$color-dark': '#333',
        '$color-light': '#999',
      },
    };
    expect(makeTheme(customTheme)).toEqual(customTheme);
  });
});
