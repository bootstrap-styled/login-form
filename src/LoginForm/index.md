```js

const Input = require('bootstrap-styled/lib/Input').default;
const withFormWrapper = require('./withFormWrapper').default;
const withLoginForm = require('./withLoginForm').default;

const LoginFormExample = withFormWrapper(withLoginForm());

<LoginFormExample />

```

