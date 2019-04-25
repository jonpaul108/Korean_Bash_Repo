import {} from '../action/types';

const initialState = {
  test: 'test',
  score: '0',
  win: 'undecided',
  quizPieces: [],
  currentPiece: '',
  chances: 3,
  soundFile: ''
}

export default ( state = initialState, action ) => {
  switch(action.type) {
    case :
    return {
      ...state,
      test: action.data
    }
    default:
      return state;
  }
}
