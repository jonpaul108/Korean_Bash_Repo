const initialState = {
  page: 'home'
}

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
