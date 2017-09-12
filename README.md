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
  - [LoginForm (default)](#loginform-default)
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

Our form can be imported from `login-form/lib/$Form`:
 
```jsx harmony
import React from 'react';
import { render } from 'react-dom';
import { BootstrapProvider, makeTheme }  from 'bootstrap-styled';
import { LoginForm, makeTheme as makeThemeLoginForm } from 'login-form/lib/LoginForm';

render(
	<BootstrapProvider theme={makeTheme(makeThemeLoginForm())}>
    <LoginForm />
	</BootstrapProvider>,
	document.getElementById('app')
);
```

**Explanation**

- We import `makeTheme` from 'bootstrap-styled' to get all the theme of `bootstrap-styled`
- We import `makeTheme` that will provide the `<LoginForm />` theme extensions.
- We do `makeTheme(makeThemeLoginForm())` to build a theme with `bootstrap-styled` and `<LoginForm />` theme extensions.

**Note**

If you don't want to edit the theme you can also import `theme` from `login-form/lib/LoginForm`, eg:

```jsx harmony
import React from 'react';
import { render } from 'react-dom';
import { BootstrapProvider, makeTheme }  from 'bootstrap-styled';
import { LoginForm, theme as themeLoginForm } from 'login-form/lib/LoginForm';

render(
	<BootstrapProvider theme={makeTheme(themeLoginForm)}>
    <LoginForm />
	</BootstrapProvider>,
	document.getElementById('app')
);
``` 

## LoginForm (default)

**props**

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

**messages** : 

| key           | value                             |
|---------------|-----------------------------------|
| `title`       | 'Login'                           |
| `username`    | 'Username'                        |
| `password`    | 'Password'                        |
| `buttonLogin` | 'Login'                           |
| `error`       | 'Please fill out the entire form' |

**theme** (Use with `<BootstrapProvider />`):



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
