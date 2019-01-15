import {USERNAME} from './types.js';

const username = (username) => (dispatch) => {
  dispatch({
    type: USERNAME,
    payload: username
  });
}

export default username;
