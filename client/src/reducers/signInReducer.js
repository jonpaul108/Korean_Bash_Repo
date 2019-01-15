import {SIGN_IN} from '../actions/types.js';

const initialState = {
  item: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
    return {
      state,
      item: action.payload
    }
    default:
    return state
  }
}
