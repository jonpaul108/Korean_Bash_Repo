import { ACCOUNT_EMAIL } from '../types';

const accountEmail = email => (dispatch) => {
  dispatch({
    type: ACCOUNT_EMAIL,
    payload: email,
  });
};

export default accountEmail;
