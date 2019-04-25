import { PASSWORD } from './types';

const password = pass => {
  return {
    type: PASSWORD,
    payload: pass,
  }
};


export default password;
