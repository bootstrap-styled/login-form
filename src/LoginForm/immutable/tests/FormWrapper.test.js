import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { shallow, mount } from 'enzyme';
import { BootstrapProvider } from 'bootstrap-styled';
import FormWrapper, { defaultProps } from '../FormWrapper';

describe('<FormWrapper />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      onSubmit: jest.fn(),
      onError: jest.fn(),
      onChange: jest.fn(),
    });
  });

  it('should render a FormWrapper', () => {
    const renderedComponent = shallow(
      <Provider store={createStore((state) => state, {})}>
        <IntlProvider messages={{}} locale="en">
          <BootstrapProvider theme={theme}>
            <FormWrapper {...props} />
          </BootstrapProvider>
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.length).toEqual(1);
  });

  it('should have a logo', () => {
    const logo = '<div className="custom-logo">Hello logo</div>';
    const renderedComponent = mount(
      <Provider store={createStore((state) => state, {})}>
        <IntlProvider messages={{}} locale="en">
          <BootstrapProvider theme={theme}>
            <FormWrapper {...{ ...props, ...{ logo } }} />
          </BootstrapProvider>
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('.form-page__form-header').text().indexOf('Hello logo')).toBeGreaterThan(0);
  });

  it('should have a version', () => {
    const renderedComponent = mount(
      <Provider store={createStore((state) => state, {})}>
        <IntlProvider messages={{}} locale="en">
          <BootstrapProvider theme={theme}>
            <FormWrapper {...{ ...props, ...{ version: 'Hello version' } }} />
          </BootstrapProvider>
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('Small').length).toEqual(1);
  });


  it('should have a notification', () => {
    const renderedComponent = mount(
      <Provider store={createStore((store) => store, {})}>
        <IntlProvider messages={{ test: 'test message', test2: 'another test' }} locale="en">
          <BootstrapProvider theme={theme}>
            <FormWrapper
              {...props}
              notification={{ text: 'test', type: 'info' }}
            />
          </BootstrapProvider>
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('Alert').html().indexOf('test message')).toBeGreaterThan(0);
  });
});
