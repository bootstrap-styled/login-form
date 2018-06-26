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


## LoginForm

**props**:

| Name                | Type     | Default                        | Description               |
|---------------------|----------|--------------------------------|---------------------------|
| `logo`              | any      | null                           | used under the form title |
| `version`           | string   | null                           | display the version in the form footer   |
| `labelHidden`       | bool     | false                          | hide the input labels.   |
| `rememberMe`        | bool     | false                          | activate the Remember me checkbox   |
| `loginForm`         | node     | null                           | LoginForm component, should be passed as agurment to the withFormWrapper(), Hoc |
| `beforeActions`     | node     | null                           | LoginForm component, should be passed as agurment to the withFormWrapper(), Hoc |
| `afterActions`      | node     | DefaultLoginFormAfterActions                          | LoginForm component, should be passed as agurment to the withFormWrapper(), Hoc |
| `notification`      | object   | { text: '', type: 'info' }     | notification system |
| `hideNotification`  | func     | null                          | function hooked at the closing alert |
| `autoHideDuration`  | number   | null                          | notification delay before hidding |
| `header`            | any      | null                           | inserted in the header |
| `footer`            | node     | DefaultLoginFormFooter                           | inserted in the footer |
| `beforeButton`      | any      | null                           | inserted before the button |
| `onSubmit`          | function | null                           | handle onSubmit action    |
| `initialValues`     | object   | { username: '', password: '' } | form initial values                 |
| `placeHolder`       | object   | { username: 'Santaclauze', password: '••••••••••' } | form initial values                 |


**theme**:

| key         | sub-key             | value                             |
|-------------|---------------------|-----------------------------------|
| `loginForm` | `$wrapper-bg-color` | '#fff'                            |
|             | `$wrapper-max-width`| '26rem'                           |
|             | `$footer-font-size`    | '.6rem'                             |
|             | `$checkbox-margin-left`| '-8.5rem'                         |

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

