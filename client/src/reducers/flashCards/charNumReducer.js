import {CHARACTER_NUMBER} from '../../actions/types.js';

const initialState = {
  item: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHARACTER_NUMBER:
      return {
        state,
        item: action.payload
      }
      default:
        return state
  }
}
