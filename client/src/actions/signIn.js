import axios from 'axios';
import { SIGN_IN, INCORRECT_LOGIN_INFORMATION } from './types';
import retrieveUserInfo from './retrieveUserInfo';

const signIn = (username, password, dispatch) => {
  axios.get(`/login/${username}/${password}`)
    .then((results) => {
      let id = results.data;
      retrieveUserInfo(id, dispatch);
      dispatch({
        type: SIGN_IN,
        payload: true,
      });
    })
    .catch(() => {
      dispatch({
        type: INCORRECT_LOGIN_INFORMATION,
      });
    });
};


export default signIn;
