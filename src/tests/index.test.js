import { LoginForm, makeThemeLoginForm, themeLoginForm } from '../index';

describe('should exports login forms', () => {
  describe('LoginForm', () => {
    it('should export LoginForm', () => {
      expect(typeof LoginForm).toEqual('function');
    });
    it('should export makeTheme', () => {
      expect(typeof makeThemeLoginForm).toEqual('function');
    });
    it('should export LoginForm', () => {
      expect(typeof themeLoginForm).toEqual('object');
    });
  });
});
