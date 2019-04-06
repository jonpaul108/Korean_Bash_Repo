import { RETRIEVE_USER_INFO } from '../actions/types';

const initialState = {
  item: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_USER_INFO:
      return {
        state,
        item: action.payload
      }
      default:
        return state
  }
}
