import { ACCOUNT_EMAIL } from '../types';

const accountEmail = email => {
  return {
    type: ACCOUNT_EMAIL,
    payload: email,
  };
};

export default accountEmail;
