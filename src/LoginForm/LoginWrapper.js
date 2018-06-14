import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import Card from 'bootstrap-styled/lib/Cards';
import Alert from 'bootstrap-styled/lib/Alert';
import Small from 'bootstrap-styled/lib/Small';
import Input from 'bootstrap-styled/lib/Small';

import DefaultLoginForm from './withForm';

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

const LoginWrapper = ({
  className,
  loginForm = DefaultLoginForm(Input),
  logo,
  version,
  footer,
  hideNotificationDelay,
  ...rest
}) => (
  <MainWrapper className={classnames(className, 'main-wrapper')} {...sanitizeRestProps(rest)}>
    <LoginFormWrapperWrapper className="login-wrapper">
      <div className="logo-wrapper">
        {logo}
        {version && (
          <Small className="text-center d-block">
            {version}
          </Small>
        )}
      </div>
      {loginForm}
      {footer}
      <Alert />
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
