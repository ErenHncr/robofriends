import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS
} from './constants.js';


export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}
// higher order function
export const requestRobots = () => (dispatch, test = false) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(data => {
      if (test) {
        dispatch({ type: REQUEST_ROBOTS_SUCCESS });
      }
      else {
        dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
      }
    })
    .catch(error => {
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    })
}
