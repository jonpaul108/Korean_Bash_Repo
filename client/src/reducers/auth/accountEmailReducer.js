import {ACCOUNT_EMAIL} from '../../actions/types';

const initialState = {
  item: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_EMAIL:
      return {
        state,
        item: action.payload
      }
    default:
      return state
  }
}
