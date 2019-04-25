import { CHARACTER_NUMBER } from '../types';

const charNum = num => {
  return {
    type: CHARACTER_NUMBER,
    payload: num,
  };
};

export default charNum;
