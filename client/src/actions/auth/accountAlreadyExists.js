import { ACCOUNT_ALREADY_EXITS } from '../types';

const accountAlreadyExists = () => {
  return {
    type: ACCOUNT_ALREADY_EXITS,
    payload: 'Account Already Exists',
  };
};

export default accountAlreadyExists;
