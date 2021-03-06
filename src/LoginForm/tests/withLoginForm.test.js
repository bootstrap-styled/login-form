import React from 'react';
import { mount } from 'enzyme';
import withLoginForm, { RenderInput } from '../withLoginForm';

const LoginForm = withLoginForm();
const Field = () => <div key="field">Field</div>;
const LoginFormWithField = withLoginForm(Field);

const renderComponent = (props = {}) => mount(
  <LoginForm {...props} />
);

const renderComponentInput = (props = {}) => mount(
  <RenderInput {...props} />
);

const renderComponentField = (props = {}) => mount(
  <LoginFormWithField {...props} />
);

describe('withLoginForm', () => {
  it('should be defined', () => {
    const renderedComponent = renderComponent({
      onSubmit: () => {},
    });
    expect(renderedComponent.find('withLoginForm__LoginForm').length).toBe(1);
  });
  it('should call onSubmit with handleSubmit', () => {
    const renderedComponent = renderComponent({
      onSubmit: jest.fn(),
      handleSubmit: jest.fn(),
    });
    expect(renderedComponent.find('Button').length).toBe(1);
    renderedComponent.find('Button').simulate('click');
    expect(renderedComponent.props().handleSubmit).toHaveBeenCalledWith(renderedComponent.props().onSubmit);
  });
  it('should display a loader if isLoading is true', () => {
    const renderedComponent = renderComponent({
      onSubmit: () => {},
      isLoading: true,
      loader: <div>loader</div>,
    });
    expect(renderedComponent.find('div').at(5).text()).toEqual('loader');
  });
  it('should have a checkbox rememberMe', () => {
    const renderedComponent = renderComponent({
      onSubmit: () => {},
      rememberMe: true,
    });
    expect(renderedComponent.find('Label').at(2).text()).toEqual('Remember me');
  });
  it('should display Field components', () => {
    const renderedComponent = renderComponentField({
      onSubmit: () => {},
      rememberMe: true,
    });
    expect(renderedComponent.find('Field').length).toBe(3);
  });
  it('RenderInput should display error FormGroup if touched and error true', () => {
    const renderedComponent = renderComponentInput({
      meta: { error: 'usernameRequired', touched: true },
    });
    expect(renderedComponent.find('FormGroup').props().color).toEqual('danger');
    expect(renderedComponent.find('FormFeedback').length).toBe(1);
  });
  it('RenderInput should display a checkboc', () => {
    const renderedComponent = renderComponentInput({
      type: 'checkbox',
    });
    expect(renderedComponent.find('Input').props().type).toEqual('checkbox');
    expect(renderedComponent.find('Input').length).toBe(1);
  });
});
