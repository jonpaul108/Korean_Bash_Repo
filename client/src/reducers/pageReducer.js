import { SIGN_IN, CREATE_ACCOUNT} from '../actions/types.js';
import Redux from 'redux';


const initialState = {
  page: 'signIn'
}

console.log('in changepage reducer');
const pageReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'change_Page':
      return {
        ...state,
        items: action.data};
    default:
      return state;
  }
}



export default pageReducer;
