# login-form

login-form npm package is a group of LoginForm components made with [bootstrap-styled](https://bootstrap-styled.kopaxgroup.com).

**Master**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/login-form/badges/master/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/login-form/commits/master)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/login-form/badges/master/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/login-form/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/login-form/badges/dev/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/login-form/commits/dev)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/login-form/badges/dev/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/login-form/commits/dev)

## Table of Contents

  - [Changelog](#changelog)
  - [Reminders](#reminders)
  - [Installation](#installation)
  - [Usage](#usage)
  - [LoginForm](#loginform)
  - [Quick start](#quick-start)
  - [Release](#release)
  - [License](#license)

---

## Changelog

  - View [Changelog](CHANGELOG.md)

## Reminders

**⚠️ When using this plugin, you must import in the first line of your application javascript entry file `babel-polyfill`: ⚠️**
  
    import "babel-polyfill";
    
To enable ES features in older browsers, you MUST include in the package.json

    "browserslist": ["ie >= 9", "last 2 versions"]
    // or
    "browserslist": ["ie >= 10", "last 2 versions"]
    
## Installation

Quick install

    npm install --save git+ssh://git@module.kopaxgroup.com:20024/bootstrap-styled/login-form.git
    
We recommend using a fixed version

    VERSION=0.0.1
    npm install --save git+ssh://git@module.kopaxgroup.com:20024/bootstrap-styled/login-form.git#$VERSION

## Usage

Our form can be imported from `login-form/lib/*`:
 
```jsx
import React from 'react';
import { render } from 'react-dom';
import { BootstrapProvider, makeTheme as makeThemeBootstrap }  from 'bootstrap-styled';
import { LoginForm, makeTheme as makeThemeLoginForm } from 'login-form/lib/LoginForm';

const customBootstrap = {
  '$enable-rounded': true,
};

const customLoginForm = {
  '$border-radius': '0',
};

const theme = {
  ...makeThemeBootstrap(customBootstrap),
  loginForm: makeThemeLoginForm(customLoginForm),
};

render(
	<BootstrapProvider theme={theme)}>
      <LoginForm />
	</BootstrapProvider>,
	document.getElementById('app')
);
```

If you don't want to customize the `theme` and use it's with it's default values, it is also possible to import `theme` (like in `bootstrap-styled`):

```jsx
import React from 'react';
import { render } from 'react-dom';
import { BootstrapProvider, makeTheme as makeThemeBootstrap }  from 'bootstrap-styled';
import { LoginForm, theme as themeLoginForm } from 'login-form/lib/LoginForm';

const customBootstrap = {
  '$enable-rounded': true,
};

const theme = {
  ...makeThemeBootstrap(customBootstrap),
  loginForm: themeLoginForm,
};

render(
	<BootstrapProvider theme={theme}>
      <LoginForm />
	</BootstrapProvider>,
	document.getElementById('app')
);
``` 

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

**messages**: 

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
|             | '$box-shadow`       | '0px 1px 3px rgba(0, 0, 0, 0.25)' |
|             | `$border-radius`    | '3px'                             |
|             | `$color-lighter`    | '#EDEDED'                         |
|             | `$color-lighter`    | '#EDEDED'                         |
|             | `$color-light`      | '#999'                            |
|             | `$color`            | '#666'                            |
|             | `$color-dark`       | '#333'                            |

## Quick start

Clone project

    git clone ssh://git@module.kopaxgroup.com:20024/bootstrap-styled/login-form.git

Install dependencies

    npm install

Build project

    npm run build
    
Run unit test
     
    npm test
    
Watch unit test
     
    npm run test:watch

Watch the `/dist` directory

    npm run build:dist:watch

Watch the `/lib` directory

    npm run build:lib:watch

# Contribute

`master` is used to release the version. 

- `master` only accept merge requests from `dev`

`dev` is the developement branch. It should be used by developers for applying their merge requests.

If you wish to implement new functionalities you need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 

You can now start working on your branch. Don't forget to check `Delete branch when merged`.

## Release

Merge `dev` into `master` will release a new version and prepare a new version in `dev`.

To release a new version, edit the [Changelog](CHANGELOG.md) and set the version in `package.json` and merge your change into `master`.

**⚠️ if you are releasing on a git repository instead of a npm repository, **DO NOT** forget to remove `build`, and `dist` from the `.gitignore` ⚠️**

    sed -i "/lib\|dist/d" .gitignore

## License

Copyright (c) 2017 Kopax Ltd. For more information `contact@kopaxgroup.com`. Made with [rollup-umd](https://module.kopaxgroup.com/dev-tools/rollup-umd/tags/0.1.3) 0.1.3
