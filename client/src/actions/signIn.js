import axios from 'axios';
import { SIGN_IN, INCORRECT_LOGIN_INFORMATION } from './types';
import retrieveUserInfo from './retrieveUserInfo';

const signIn = (username, password, dispatch) => {
  axios.get(`/login/${username}/${password}`)
    .then((results) => {
      const {id, points} = results.data.rows[0];
      retrieveUserInfo(id, points, dispatch);
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
