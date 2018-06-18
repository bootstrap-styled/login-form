```js

const Input = require('bootstrap-styled/lib/Input').default;
const withFormWrapper = require('./withFormWrapper').default;
const withLoginForm = require('./withLoginForm').default;

const LoginFormExample = withFormWrapper(withLoginForm());

<LoginFormExample logo={<h1>Login co.</h1>} version="1.0.1" notification={{ type: 'warning', text: 'This is a Test Alert'}}/>

```

