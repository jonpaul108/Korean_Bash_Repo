import axios from 'axios';
import { CREATE_ACCOUNT, ACCOUNT_ALREADY_EXITS } from './types';

const register = (username, password, email, callback) => (dispatch) => {
  axios.post('/user', {
    username,
    password,
    email,
  })
    .then(() => {
      dispatch({
        type: CREATE_ACCOUNT,
        payload: 'signIn',
      });
      callback();
    })
    .catch(() => {
      dispatch({
        type: ACCOUNT_ALREADY_EXITS,
      });
    });
};


export default register;
