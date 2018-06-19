The LoginForm in its most simple aspect gives us as follows.
```js
const withFormWrapper = require('./withFormWrapper').default;
const withLoginForm = require('./withLoginForm').default;

const LoginFormExample = withFormWrapper(withLoginForm());

<LoginFormExample />

```

If you wish, you may strip the LoginForm from its defaultProps to render the form by itself.

```js
const withFormWrapper = require('./withFormWrapper').default;
const withLoginForm = require('./withLoginForm').default;

const LoginFormExample = withFormWrapper(withLoginForm());

<LoginFormExample footer={false} afterActions={false}/>

```
Other shit
```js
const withFormWrapper = require('./withFormWrapper').default;
const withLoginForm = require('./withLoginForm').default;


const LoginFormExample = withFormWrapper(withLoginForm());

<LoginFormExample
  logo="Login co." 
  version="1.0.1"
  rememberMe
  labelHidden
/>

```

