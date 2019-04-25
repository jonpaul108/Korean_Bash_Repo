import { AUTH_PAGE } from '../../actions/types';

const initialState = {
  item: 'signIn'
}


 export default (state = initialState, action) => {
  switch (action.type){
    case AUTH_PAGE:
      return {
        state,
        item: action.payload
      }
      default:
        return state;
  }
}
