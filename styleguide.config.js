const path = require('path');
const { config } = require('@yeutech/rollup-documentation/lib/styleguide.config');

module.exports = {
  ...config,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.dirname(componentPath)
    return `import ${name} from '${dir}';`
  }
};
