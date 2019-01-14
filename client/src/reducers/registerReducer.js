import {CREATE_ACCOUNT} from '../actions.types';

const initialState = {
  page: 'signIn'
}

export default (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ACCOUNT:
      return {
        ...state,
        items: action.data
      }
      default:
      return state;
    }
}
