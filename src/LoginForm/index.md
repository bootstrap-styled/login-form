The LoginForm in its most simple aspect gives us as follows.

```js
<LoginFormExample />
```

If you wish, you may strip the LoginForm from its defaultProps to render the form by itself.

```js
<LoginFormExample footer={false} afterActions={false} header={false} />
```

## LoginForm

**props**:

| Name                | Type       | Default                        | Description               |
|---------------------|------------|--------------------------------|---------------------------|
| `logo`              | `any`      | `null`                           | used under the form title |
| `version`           | `string`   | `null`                           | display the version in the form footer   |
| `labelHidden`       | `bool`     | `false`                          | hide the input labels.   |
| `rememberMe`        | `bool`     | `false`                          | activate the Remember me checkbox   |
| `loginForm`         | `node`     | `null`                           | LoginForm component, should be passed as agurment to the withFormWrapper(), Hoc |
| `beforeActions`     | `node`     | `null`                           | LoginForm component, should be passed as agurment to the withFormWrapper(), Hoc |
| `afterActions`      | `node`     | `DefaultLoginFormAfterActions`                          | LoginForm component, should be passed as agurment to the withFormWrapper(), Hoc |
| `notification`      | `object`   | `{ text: '', type: 'info' }`     | notification system |
| `hideNotification`  | `func`     | `null`                          | function hooked at the closing alert |
| `autoHideDuration`  | `number`   | `null`                          | notification delay before hidding |
| `header`            | `any`      | `null`                           | inserted in the header |
| `footer`            | `node`     | `DefaultLoginFormFooter`                           | inserted in the footer |
| `beforeButton`      | `any`      | `null`                           | inserted before the button |
| `onSubmit`          | `function` | `null`                           | handle onSubmit action    |
| `initialValues`     | `object`   | `{ username: '', password: '' }` | form initial values                 |
| `placeHolder`       | `object`   | `{ username: 'Santaclauze', password: '••••••••••' }` | form initial values                 |


**theme**:

| key         | sub-key                         | value                             |
|-------------|---------------------------------|-----------------------------------|
| `loginForm` | `$wrapper-bg-color`             | `#E9EAEC`                         |
|             | `$login-font-size`              | `15px`                            |
|             | `$login-wrapper-padding`        | `2rem 1.25rem`                    |
|             | `$login-wrapper-bg-color`       | `#fff`                            |
|             | `$login-wrapper-width`          | `25rem`                           |
|             | `$login-wrapper-border-width`   | `0px`                             |
|             | `$login-wrapper-border-color`   | `grey`                            |
|             | `$login-header-wrapper-margin`  | `0`                               |
|             | `$login-footer-wrapper-margin`  | `1rem auto`                       |
|             | `$login-footer-font-size`       | `.6rem`                           |
|             | `$checkbox-margin-left`         | `-8.5rem`                         |
      
```js
<LoginFormExample
  logo="Login co." 
  version="1.0.1"
  rememberMe
  labelHidden
  isLoading
/>
```

