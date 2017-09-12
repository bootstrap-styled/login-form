const exports = require('../index');

describe('should exports components', () => {
  Object.keys(exports).forEach((exported) => {
    it('should be function', () => {
      expect(typeof exports[exported]).toEqual('function');
    });
  });
});
