import {CREATE_PASSWORD} from './../types.js';

const createPassword = (password) => (dispatch) => {
  dispatch({
    type: CREATE_PASSWORD,
    payload: password
  })
}

export default createPassword;
