import React from 'react';
import Wrapper from '@rollup-umd/documentation/lib/Wrapper';

/* eslint-disable global-require */
export default (props) => (
  <Wrapper
    redux={require('redux')}
    react-redux={require('react-redux')}
    {...props}
  />
);
