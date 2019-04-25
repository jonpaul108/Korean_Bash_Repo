import { CREATE_PASSWORD } from '../types';

const createPassword = password => {
  return {
    type: CREATE_PASSWORD,
    payload: password,
  };
};

export default createPassword;
