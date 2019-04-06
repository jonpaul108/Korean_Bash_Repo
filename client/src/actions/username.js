import { USERNAME } from './types';

const username = (username) => {
  return {
    type: USERNAME,
    payload: username
  };
}

export default username;
