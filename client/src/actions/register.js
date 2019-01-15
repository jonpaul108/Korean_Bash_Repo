import {CREATE_ACCOUNT, ACCOUNT_ALREADY_EXITS} from './types';
import axios from 'axios';

const register = (username, password, email, callback) => (dispatch) => {
    axios.post(`/user`, {
        username,
        password,
        email
      })
      .then((response) => {
        dispatch({
          type: CREATE_ACCOUNT,
          payload: 'signIn'
        });
        callback();
      })
      .catch((err) => {
        dispatch({
          type: ACCOUNT_ALREADY_EXITS
        });
      })
  }


export default register;
