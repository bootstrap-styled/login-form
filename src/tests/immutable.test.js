import { LoginForm, makeTheme, theme } from '../immutable';

describe('should exports immutable login forms', () => {
  describe('LoginForm', () => {
    it('should export LoginForm', () => {
      expect(typeof LoginForm).toEqual('function');
    });
    it('should export makeTheme', () => {
      expect(typeof makeTheme).toEqual('function');
    });
    it('should export LoginForm', () => {
      expect(typeof theme).toEqual('object');
    });
  });
});
