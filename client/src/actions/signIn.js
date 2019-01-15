import {SIGN_IN, INCORRECT_LOGIN_INFORMATION, PASSWORD, USERNAME} from './types.js';
import changePage from './changePage.js';
import axios from 'axios';

const signIn = (username, password, callback) => (dispatch) => {
  axios.get(`/login/${username}/${password}`)
    .then((response) => {
      console.log('signed in');
      callback();
      dispatch({
        type: SIGN_IN,
        payload: true
      });
    })
    .catch((err) => {
      dispatch({
        type: INCORRECT_LOGIN_INFORMATION
      });

    });
}


export default signIn;
