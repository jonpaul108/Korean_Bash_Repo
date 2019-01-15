import {CHARACTER_NUMBER} from '../types.js';

const charNum = num => (dispatch) => {
  dispatch({
    type: CHARACTER_NUMBER,
    payload: num
  })
}

export default charNum;
