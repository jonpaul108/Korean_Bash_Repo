import {CHANGE_PAGE} from '../actions/types';

const initialState = {
  item: 'home'
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
