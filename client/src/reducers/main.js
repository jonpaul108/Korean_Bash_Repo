import { combineReducers } from 'redux';
import signInReducer from './signInReducer.js';
import usernameReducer from './usernameReducer.js';
import passwordReducer from './passwordReducer.js';
import changePageReducer from './changePageReducer.js';
import accountEmailReducer from './auth/accountEmailReducer.js';
import createPasswordReducer from './auth/createPasswordReducer.js';
import messageReducer from './auth/messageReducer.js';
import learnPageSetupReducer from './flashCards/learnPageSetupReducer.js';
import charNumReducer from './flashCards/charNumReducer.js';

console.log('in root reducer');

export default combineReducers({
  loggedIn: signInReducer,
  currUsername: usernameReducer,
  currPassword: passwordReducer,
  page: changePageReducer,
  newPassword: createPasswordReducer,
  email: accountEmailReducer,
  message: messageReducer,
  learnPageSetup: learnPageSetupReducer,
  kCharacter: learnPageSetupReducer,
  character: learnPageSetupReducer
});
