import {PASSWORD} from './types.js';

const password = (password)=> (dispatch) => {
  dispatch({
    type: PASSWORD,
    payload: password
  });
}


export default password;
