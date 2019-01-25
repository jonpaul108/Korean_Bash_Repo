import {LEARN_PAGE_SETUP} from '../../actions/types.js';

const initialState = {
    kCharacter: '',
    eCharacter: '',
    fileType: '',
    soundFile: '',
    learned: '',
    examples: '',
    words: '',
    character: 0
}

export default (state = initialState, action) => {
  console.log('action or learnpagesetup', action.type);
  switch(action.type) {
    case LEARN_PAGE_SETUP:
      return {
        state,
        kCharacter: action.kCharacter,
        eCharacter: action.eCharacter,
        fileType: action.fileType,
        soundFile: action.soundFile,
        learned: action.learned,
        character: action.character
      }
      default:
        return state
  }
}
