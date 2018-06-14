import React from 'react';
import { combineReducers } from 'redux';
import Wrapper from '@yeutech/rollup-documentation/lib/components/Wrapper';
import messages from '../../translation/en.json';

/* eslint-disable global-require */
export default (props) => (
  <Wrapper
    redux={require('redux')}
    react-redux={require('react-redux')}
    reducer={combineReducers({
      locale: () => 'en',
    })}
    react-intl={require('react-intl')}
    messages={messages.en}
    {...props}
  />
);

