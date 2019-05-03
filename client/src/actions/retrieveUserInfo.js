import axios from 'axios';
import { RETRIEVE_USER_INFO } from './types';

const retrieveUserInfo = (id, points, dispatch) => {
  axios.get(`/retrieveUserInfo/${id}`)
  .then((results) => {
    dispatch({
      type: RETRIEVE_USER_INFO,
      payload: [results.data, points]
    });
  })
  .catch((err) => {
    dispatch({
    type: 'Error',
    payload: err
  });
  });
}


export default retrieveUserInfo;
