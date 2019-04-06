import axios from 'axios';
import { RETRIEVE_USER_INFO } from './types';

const retrieveUserInfo = (id, dispatch) => {
  console.log('this func ws called, userinfo: ', typeof id);
  axios.get(`/retrieveUserInfo/${id}`)
  .then((results) => {
    console.log('retreiveUserInfo: ', results);
    dispatch({
      type: RETRIEVE_USER_INFO,
      payload: results,
    });
  })
  .catch((err) => {
    console.log('retrieveUserInfo: ', err);

    dispatch({
    type: 'Error',
  });
  });
}


export default retrieveUserInfo;
