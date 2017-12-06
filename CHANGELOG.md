# Changelog

All notable changes to this project will be documented in this file.

## [0.1.10] - 2017-09-30

- Added pros `clearFields` to `LoginForm` so that it is not passed in `...rest` of `Form` component.
- Upgrade dependency [bootstrap-styled](https://module.kopaxgroup.com/styled-components/bootstrap-styled/tags/1.4.3) from 1.4.1 to 1.4.3.

## [0.1.9] - 2017-09-30

- Refactor with HoC. 

## [0.1.8] - 2017-09-30

- Added form `redux-form/immutable`.

## [0.1.7] - 2017-09-30

- Now work with `redux-form`. 

## [0.1.6] - 2017-09-30

- Using lib `redux-form`.

## [0.1.5] - 2017-09-30

- Theme exports named.

## [0.1.4] - 2017-09-30

- Remove useless named exports for `redux`.
- Export theme by default in `theme.js`.
- Using `export const` instead of `export function` for `makeTheme`.

## [0.1.3] - 2017-09-30

- Trying with `react-redux` namedExports.

## [0.1.2] - 2017-09-30

- Trying with many `redux` and `form-redux` namedExports.

## [0.1.1] - 2017-09-30

- organizing import for `redux-form`

## [0.1.0] - 2017-09-30

- rollup adding namedConfiguration for `react-redux`.

## [0.0.9] - 2017-09-30

- Export by default the `LoginForm`.

## [0.0.8] - 2017-09-30

The login form now require [redux-form](https://www.npmjs.com/package/redux-form).

- Upgrade CI image to `node8-jdk8-sonarscanner2-docker17-debian`.
- Add dependency [classnames](https://www.npmjs.com/package/classnames) from ^2.2.5.
- Add dependency [redux-form](https://www.npmjs.com/package/redux-form) from ^7.0.4.
- Add dependency [bootstrap-styled-mixins](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/tags/v1.0.0) 1.0.0.
- Add dependency [bootstrap-styled-motion](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion/tags/v1.0.1) 1.0.1.
- Add dependency [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16) ^1.0.0.
- Add dependency [immutable](https://www.npmjs.com/package/immutable) ^3.8.1.
- Add dependency [message-common](https://module.kopaxgroup.com/translation/message-common/tags/v1.4.1) 1.4.1.
- Add dependency [react-redux](https://www.npmjs.com/package/react-redux) ^5.0.6.
- Add dependency [react-intl](https://www.npmjs.com/package/react-intl) ^2.4.0.
- Add dependency [message-common](https://module.kopaxgroup.com/translation/message-common/tags/v1.4.0) 1.4.0.
- Remove dependency [prop-types](https://www.npmjs.com/package/prop-types).
- Remove dependency [react](https://www.npmjs.com/package/react).
- Remove dependency [react-addons-test-utils](https://www.npmjs.com/package/react-addons-test-utils).
- Remove dependency [react-dom](https://www.npmjs.com/package/react-dom).
- Remove dependency [react-test-renderer](https://www.npmjs.com/package/react-test-renderer).
- Remove dependency [rollup](https://www.npmjs.com/package/rollup).
- Remove dependency [rollup-plugin-replace](https://www.npmjs.com/package/rollup-plugin-replace).
- Remove dependency [toctoc](https://www.npmjs.com/package/toctoc).
- Remove dependency [react-transition-group](https://www.npmjs.com/package/react-transition-group).
- Remove dependency [styled-components](https://www.npmjs.com/package/styled-components).
- Remove dependency [redux](https://www.npmjs.com/package/redux).
- Upgrade dependency [bootstrap-styled](https://module.kopaxgroup.com/styled-components/bootstrap-styled/tags/v1.4.1) from 1.4.0 to 1.4.1.
- Upgrade dependency [enzyme](https://www.npmjs.com/package/enzyme) from ^2.9.1 to ^3.0.0.
- Upgrade dependency [loaders](https://www.npmjs.com/package/loaders) from 0.0.3 to 20024/styled-components/loaders.git#0.0.4.

## [0.0.7] - 2017-09-13

- Fix build warnings.

## [0.0.6] - 2017-09-13

- props `error` and `success` are now expecting string message.

## [0.0.5] - 2017-09-13

- Corrected customization of theme in `README.md`.
- Upgrade `bootstrap-styled` from v1.3.0 to v1.3.2. 
- Upgrade `loaders` from v0.0.1 to v0.0.2.
- Moved `LoginForm` readme in `src/LoginForm/README.md`.

## [0.0.4] - 2017-09-12

- Clarify explanation and usage of `theme` in `README.md`.
- Corrected default propTypes for prop `logo`.

## [0.0.3] - 2017-09-12

- Added `<FormLogin />` exports of component, makeTheme and theme in `index.js`.
- Added exports of makeTheme and theme of `<FormLogin />`.

## [0.0.2] - 2017-09-12

- Added makeTheme and theme explanation in `README.md`.

## [0.0.1] - 2017-09-12

- First release
