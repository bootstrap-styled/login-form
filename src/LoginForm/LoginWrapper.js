import React, { cloneElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import Card from 'bootstrap-styled/lib/Cards';
import Alert from 'bootstrap-styled/lib/Alert';
import Small from 'bootstrap-styled/lib/Small';
import Input from 'bootstrap-styled/lib/Small';

import withForm from './withForm';

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 1px;
    align-items: center;
    justify-content: flex-start;
    background: url(https://source.unsplash.com/random/1600x900);
    background-repeat: no-repeat;
    background-size: cover;
`;

const LoginFormWrapperWrapper = styled(Card)`
    &.login-form {
        min-width: 300px;
        margin-top: 6em;
    }
`;

const sanitizeRestProps = ({
  className,
  location,
  title,
  array,
  theme,
  staticContext,
  ...rest
}) => rest;

const DefaultLoginFormHeader = ({ logo, version }) => (
  <Fragment>
    {logo}
    {version && (
      <Small>
        {version}
      </Small>
    )}
  </Fragment>
);
console.log((props) => React.createElement(withForm(), props));

const LoginForm = ({ props }) => (cloneElement(withForm(), { ...props }));

console.log(LoginForm);

const LoginWrapper = ({
  className,
  loginForm = <LoginForm />,
  logo,
  version,
  footer,
  action,
  header = <DefaultLoginFormHeader />,
  hideNotificationDelay,
  ...rest
}) => (
  <MainWrapper className={classnames(className, 'main-wrapper')} {...sanitizeRestProps(rest)}>
    <LoginFormWrapperWrapper className="login-wrapper">
      <div className="login-header-wrapper">
        {header}
      </div>
      <div className="login-form-wrapper">
        {loginForm}
      </div>
      <div className="login-footer-wrapper">
        {footer}
      </div>
    </LoginFormWrapperWrapper>
  </MainWrapper>
);

LoginWrapper.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  loginForm: PropTypes.func,
  logo: PropTypes.node,
  version: PropTypes.string,
  hideNotificationDelay: PropTypes.number,
};


export default LoginWrapper;
