import * as actions from './actions';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS
} from './constants.js';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }

  expect(actions.setSearchField(text)).toEqual(expectedAction)

})

it('handles requesting robots API', async () => {
  // const store = mockStore();
  // store.dispatch(actions.requestRobots());
  // const action = store.getActions();
  // const expectedAction = {
  //   type: REQUEST_ROBOTS_PENDING
  // }
  // expect(action[0]).toEqual(expectedAction)


  const expectedActions = [
    { type: REQUEST_ROBOTS_PENDING },
    { type: REQUEST_ROBOTS_SUCCESS }
  ];

  const store = mockStore()

  return store.dispatch(actions.requestRobots(test = true))
    .then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });


})