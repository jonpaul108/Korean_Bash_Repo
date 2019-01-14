import {CHANGE_PAGE } from './types.js';

const changePage = (page) => (dispatch) => {
  dispatch({
    type: CHANGE_PAGE,
    payload: page
  });
}

export default changePage;
