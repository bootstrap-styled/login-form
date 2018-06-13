import React from 'react';
import { combineReducers } from 'redux';
import Wrapper from '@yeutech/rollup-documentation/lib/components/Wrapper';
import reducer from '../../src/components/reducer';
import messages from '../../src/messages';

/* eslint-disable global-require */
export default (props) => (
  <Wrapper
    redux={require('redux')}
    react-redux={require('react-redux')}
    reducer={combineReducers({
      'bs.demo': reducer,
      locale: () => 'en',
    })}
    react-intl={require('react-intl')}
    messages={messages.en}
    {...props}
  />
);

