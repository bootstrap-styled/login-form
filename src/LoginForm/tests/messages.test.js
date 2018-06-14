/* eslint-disable function-paren-newline */
import React from 'react';
import { createStore } from 'redux';
import Provider from 'react-redux/lib/components/Provider';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';
import messages from '../messages';

import pkg from '../../package.json';

describe('messages', () => {
  let store;
  const translateMessage = {};
  beforeAll(() => {
    store = createStore(
      (state) => state,
      { locale: 'en' },
    );
  });

  it('should render the default language messages', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <IntlProvider locale="en" messages={translateMessage}>
          <FormattedMessage {...messages.test} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('FormattedMessage').props().id).toBe('dev-tools.rollup-umd.test');
  });

  it(`should have a ${pkg.translation.locale}.json file`, () => {
    const json = require(`../../translation/${pkg.translation.locale}.json`); // eslint-disable-line global-require
    expect(typeof json === 'object').toBe(true);
  });

  pkg.translation.locales.forEach((locale) => {
    it(`should have a ${locale}.json file`, () => {
      const json = require(`../../translation/${locale}.json`); // eslint-disable-line global-require
      expect(typeof json === 'object').toBe(true);
    });
  });
});

