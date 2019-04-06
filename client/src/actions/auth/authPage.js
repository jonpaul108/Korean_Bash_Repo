import { AUTH_PAGE } from '../types';

const authPage = (page) => {
  return {
    type: AUTH_PAGE,
    payload: page
  }
}

export default authPage;
