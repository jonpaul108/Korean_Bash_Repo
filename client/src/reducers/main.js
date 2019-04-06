import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import usernameReducer from './usernameReducer';
import passwordReducer from './passwordReducer';
import changePageReducer from './changePageReducer';
import accountEmailReducer from './auth/accountEmailReducer';
import createPasswordReducer from './auth/createPasswordReducer';
import messageReducer from './auth/messageReducer';
import learnPageSetupReducer from './flashCards/learnPageSetupReducer';
import retrieveUserInfoReducer from './retrieveUserInfoReducer';
import authPageReducer from './auth/authPageReducer';

export default combineReducers({
  loggedIn: signInReducer,
  currUsername: usernameReducer,
  currPassword: passwordReducer,
  page: changePageReducer,
  authPage: authPageReducer,
  newPassword: createPasswordReducer,
  email: accountEmailReducer,
  message: messageReducer,
  learnPageSetup: learnPageSetupReducer,
  kCharacter: learnPageSetupReducer,
  character: learnPageSetupReducer,
  userInfo: retrieveUserInfoReducer,
});
