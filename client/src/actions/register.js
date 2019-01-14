import {CREATE_ACCOUNT, ACCOUNT_ALREADY_EXITS} from './types';

const register = (username, password, email) => (dispatch) => {
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
      })
      .catch((err) => {
        dispatch({
          type: ACCOUNT_ALREADY_EXITS
        });
      })
  }


export default changeToSignIn;
