import { RETRIEVE_USER_INFO } from '../actions/types';

const initialState = {
  points: 0,
  item: [{korean: 'hey', english: 'hey'}],
  pic: 'http://placekitten.com/g/200/300',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_USER_INFO:
      return {
        state,
        item: action.payload[0],
        points: action.payload[1]
      }
      default:
        return state
  }
}
