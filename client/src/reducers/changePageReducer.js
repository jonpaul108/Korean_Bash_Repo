import {CHANGE_PAGE} from '../actions/types.js';

const initialState = {
  item: 'signIn'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        state,
        item: action.payload
      }
    default:
      return state
  }


}
