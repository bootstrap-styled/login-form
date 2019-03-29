import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import LoginFormReduxImmutable from '../LoginFormReduxImmutable';

describe('validate function', () => {
  const initialState = { values: { username: null, password: null } };
  const mockStore = configureStore();

  let store;


  const renderComponent = (props = {}) => mount(
    <Provider store={store}>
      <LoginFormReduxImmutable {...props} />
    </Provider>
  );

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should be defined', () => {
    const renderedComponent = renderComponent({});
    expect(renderedComponent.find('withFormWrapper__FormWrapper').length).toBe(1);
  });
});
