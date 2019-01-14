import {PASSWORD} from '../actions/types.js';

const initialState = {
  item: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case PASSWORD:
    return {
      state,
      item: action.payload
    }
    default:
    return state
  }
}
