import {ACCOUNT_ALREADY_EXITS} from '../../actions/types';

const initialState = {
  item: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_ALREADY_EXITS:
      return {
        state,
        item: action.payload
      }
    default:
      return state
  }
}
