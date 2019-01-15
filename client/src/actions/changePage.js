import {CHANGE_PAGE } from './types.js';

const changePage = (page) => (dispatch) => {
  console.log('page in changePage ', page)
  dispatch({
    type: CHANGE_PAGE,
    payload: page
  });
}

export default changePage;
