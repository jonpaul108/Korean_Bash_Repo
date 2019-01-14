import {SIGN_IN, INCORRECT_LOGIN_INFORMATION} from './types.js';
import axios from 'axios';

const signIn = (username, password) => (dispatch) => {
  axios.get(`/login/${username}/${password}`)
    .then((response) => {
      console.log('signed in');
      dispatch({
        type: SIGN_IN,
        payload: true
      })
    })
    .catch((err) => {
      dispatch({
        type: INCORRECT_LOGIN_INFORMATION
      });

    });
}

export default signIn;
