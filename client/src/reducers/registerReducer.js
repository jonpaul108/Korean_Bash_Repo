import {CREATE_ACCOUNT} from '../actions/types';

const initialState = {
  item: 'signIn'
}

export default (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ACCOUNT:
      return {
        ...state,
        items: action.payload
      }
      default:
      return state;
    }
}
