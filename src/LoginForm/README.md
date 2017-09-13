## LoginForm

**props**:

| Name        | Type     | Default                        | Description               |
|-------------|----------|--------------------------------|---------------------------|
| `logo`      | string   | null                           | used under the form title |
| `version`   | string   | null                           | used in the form footer   |
| `url`       | string   | '/'                            | form action url           |
| `isSending` | boolean  | false                          | toggle sending state      |
| `onSubmit`  | function | null                           | handle onSubmit action    |
| `onChange`  | function | null                           | handle onChange action    |
| `onError`   | function | null                           | handle onError action     |
| `formData`  | object   | { username: '', password: '' } | form data                 |
| `success`   | any      | null                           | toggle success state      |
| `error`     | any      | null                           | toggle error state        |
| `messages`  | object   | (see below)                    | change default messages   |

**props.messages**: 

| key           | value                             |
|---------------|-----------------------------------|
| `title`       | 'Login'                           |
| `username`    | 'Username'                        |
| `password`    | 'Password'                        |
| `buttonLogin` | 'Login'                           |
| `error`       | 'Please fill out the entire form' |

**theme**:

| key         | sub-key             | value                             |
|-------------|---------------------|-----------------------------------|
| `loginForm` | `$background-color` | '#fff'                            |
|             | `$box-shadow`       | '0px 1px 3px rgba(0, 0, 0, 0.25)' |
|             | `$border-radius`    | '3px'                             |
|             | `$color-lighter`    | '#EDEDED'                         |
|             | `$color-lighter`    | '#EDEDED'                         |
|             | `$color-light`      | '#999'                            |
|             | `$color`            | '#666'                            |
|             | `$color-dark`       | '#333'                            |
