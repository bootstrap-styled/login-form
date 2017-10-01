## LoginForm

**props**:

| Name                | Type     | Default                        | Description               |
|---------------------|----------|--------------------------------|---------------------------|
| `logo`              | any      | null                           | used under the form title |
| `version`           | string   | null                           | display the version in the form footer   |
| `notification`      | object   | { text: '', type: 'info' }     | notification system |
| `hideNotificationDelay`| number | 3000                          | notification delay before hidding |
| `header`            | any      | null                           | inserted in the header |
| `footer`            | any      | null                           | inserted in the footer |
| `beforeButton`      | any      | null                           | inserted before the button |
| `onSubmit`          | function | null                           | handle onSubmit action    |
| `initialValues`     | object   | { username: '', password: '' } | form initial values                 |
| `placeHolder`       | object   | { username: 'Santaclauze', password: '••••••••••' } | form initial values                 |


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
