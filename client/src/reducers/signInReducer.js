import {SIGN_IN} from '../actions/types';

const initialState = {
  item: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
    return {
      state,
      item: action.payload[0],
    }
    default:
    return state
  }
}
