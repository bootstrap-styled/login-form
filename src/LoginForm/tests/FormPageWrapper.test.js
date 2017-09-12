import React from 'react';
import { shallow, mount } from 'enzyme';
import { BootstrapProvider, theme as bsTheme } from 'bootstrap-styled';
import FormPageWrapper, { defaultProps } from '../FormPageWrapper';

describe('<FormPageWrapper />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = Object.assign(bsTheme, {
      loginForm: defaultProps.theme.loginForm,
    });
    props = Object.assign(defaultProps, {
      onSubmit: jest.fn(),
      onError: jest.fn(),
      onChange: jest.fn(),
    });
  });

  it('should render a FormPageWrapper', () => {
    const renderedComponent = shallow(
      <BootstrapProvider theme={theme}>
        <FormPageWrapper {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.length).toEqual(1);
  });

  it('should have a logo', () => {
    const logo = '<div className="custom-logo">Hello logo</div>';
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <FormPageWrapper {...Object.assign({}, props, { logo })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('.form-page__form-header').text().indexOf('Hello logo')).toBeGreaterThan(0);
  });

  it('should have a version', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <FormPageWrapper {...Object.assign({}, props, { version: 'Hello version' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Small').length).toEqual(1);
  });

  it('should have a success', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <FormPageWrapper {...Object.assign({}, props, { success: 'Hello success' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('.alert-success').text()).toEqual('Hello success');
  });

  it('should have a error', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <FormPageWrapper {...Object.assign({}, props, { error: 'Hello error' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('.alert-danger').text()).toEqual('Hello error');
  });

  it('should change the title', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <FormPageWrapper {...Object.assign({}, props, { messages: { title: 'new title' } })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('.form-page__form-heading').text()).toEqual('new title');
  });
});
