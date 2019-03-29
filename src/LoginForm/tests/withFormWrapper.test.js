import React from 'react';
import { mount } from 'enzyme';
import withFormWrapper, { DefaultLoginFormAfterActions, DefaultLoginFormFooter, DefaultLoginFormHeader } from '../withFormWrapper';
import withLoginForm from '../withLoginForm';

const FormWrapper = withFormWrapper(withLoginForm());

const renderComponent = (props = {}) => mount(
  <FormWrapper {...props} />
);

const renderComponentAfterActions = (props = {}) => mount(
  <DefaultLoginFormAfterActions {...props} />
);

const renderComponentFooter = (props = {}) => mount(
  <DefaultLoginFormFooter {...props} />
);

const renderComponentHeader = (props = {}) => mount(
  <DefaultLoginFormHeader {...props} />
);
describe('withFormWrapper', () => {
  it('should be defined', () => {
    const renderedComponent = renderComponent({
      onSubmit: () => {},
    });
    expect(renderedComponent.find('withFormWrapper__FormWrapper').length).toBe(1);
  });
  it('renderComponentAfterActions should be defined', () => {
    const renderedComponent = renderComponentAfterActions({});
    expect(renderedComponent.find('DefaultLoginFormAfterActions').length).toBe(1);
  });
  it('renderComponentFooter should be defined', () => {
    const renderedComponent = renderComponentFooter({});
    expect(renderedComponent.find('DefaultLoginFormFooter').length).toBe(1);
  });
  it('renderComponent Headershould be defined', () => {
    const renderedComponent = renderComponentHeader({});
    expect(renderedComponent.find('DefaultLoginFormHeader').length).toBe(1);
  });
  it('renderComponent Headershould with a versio number', () => {
    const renderedComponent = renderComponentHeader({
      version: 'test_version',
    });
    expect(renderedComponent.find('Small').text()).toEqual('test_version');
  });
});
