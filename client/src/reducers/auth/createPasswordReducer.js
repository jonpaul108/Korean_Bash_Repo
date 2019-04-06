import {CREATE_PASSWORD} from '../../actions/types';

const initialState = {
  item: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PASSWORD:
      return {
        state,
        item: action.payload
      }
    default:
      return state
  }
}
