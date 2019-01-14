import {ACCOUNT_ALREADY_EXITS} from './../types.js';

const accountAlreadyExists = () => (dispatch) => {
  dispatch({
    type: ACCOUNT_ALREADY_EXITS,
    payload: 'Account Already Exists'
  })
}

export default accountAlreadyExists;
