/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function

 */
import { fromJS } from 'immutable';
import { ON_TOGGLE_DEMO } from './constants';

// The initial application state
export const initialState = fromJS({
  demo: false,
});

// Takes care of changing the application state
function demoReducer(state = initialState, action) {
  switch (action.type) {
    case ON_TOGGLE_DEMO: {
      return state.set('demo', !state.get('demo'));
    }
    default:
      return state;
  }
}

export default demoReducer;

