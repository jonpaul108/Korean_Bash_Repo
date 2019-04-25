import axios from 'axios';
import { CREATE_ACCOUNT, ACCOUNT_ALREADY_EXITS } from './types';

const register = (email, password, username, dispatch, callback) => {
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
      console.log(callback);
      dispatch(callback('signIn'));
    })
    .catch(() => {
      dispatch({
        type: ACCOUNT_ALREADY_EXITS,
      });
    });
};


export default register;
