import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import React from 'react';
import messages from 'message-common';
import { BootstrapProvider } from 'bootstrap-styled';
import LoginForm, { defaultProps } from '../LoginForm';

describe('<LoginForm />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      loading: false,
      initialValues: {
        username: '',
        password: '',
      },
      onSubmit: jest.fn(),
    });
  });

  it('should render an LoginForm', () => {
    const renderedComponent = mount(
      <Provider store={createStore((state) => state, {})}>
        <IntlProvider locale="en" messages={messages}>
          <BootstrapProvider theme={theme}>
            <LoginForm {...props} />
          </BootstrapProvider>
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('LoginFormUnstyled').length).toEqual(1);
  });

  it('should have a Button with a LoadingIndicator', () => {
    const renderedComponent = mount(
      <Provider store={createStore((state) => state, {})}>
        <IntlProvider locale="en" messages={messages}>
          <BootstrapProvider theme={theme}>
            <LoginForm {...Object.assign(props, { loading: true })} />
          </BootstrapProvider>
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('Button').find('LoadingIndicator').length).toEqual(1);
  });

  it('should have a localToggle', () => {
    const localToggle = '<div className="local-toggle">local toggle</div>';
    const renderedComponent = mount(
      <Provider store={createStore((state) => state, {})}>
        <IntlProvider locale="en" messages={messages}>
          <BootstrapProvider theme={theme}>
            <LoginForm {...Object.assign(props, { loading: false, beforeButton: localToggle })} />
          </BootstrapProvider>
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('.form__submit-btn-wrapper').text().indexOf('local toggle')).toBeGreaterThan(0);
  });

  it('should have a footer', () => {
    const footer = '<div className="footer">I am footer</div>';
    const renderedComponent = mount(
      <Provider store={createStore((state) => state, {})}>
        <IntlProvider locale="en" messages={messages}>
          <BootstrapProvider theme={theme}>
            <LoginForm {...Object.assign(props, { footer })} />
          </BootstrapProvider>
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.text().indexOf('I am footer')).toBeGreaterThan(0);
  });
});
