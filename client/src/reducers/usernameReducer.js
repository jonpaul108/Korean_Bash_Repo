import {USERNAME} from '../actions/types.js';

const initialState = {
  item: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USERNAME:
    return {
      state,
      item: action.payload
    }
    default:
    return state
  }

}
