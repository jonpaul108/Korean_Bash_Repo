import axios from 'axios';
import { SIGN_IN, INCORRECT_LOGIN_INFORMATION } from './types';
import retrieveUserInfo from './retrieveUserInfo';

const signIn = (username, password, dispatch) => {
  axios.get(`/login/${username}/${password}`)
    .then((results) => {
      console.log('results: ', results.data.rows[0].id);
      const id = results.data.rows[0].id;
      const points = results.data.rows[0].points;
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
