import { combineReducers } from 'redux';
import signInReducer from './signInReducer.js';
console.log('in root reducer');

export default combineReducers({
  loggedIn: signInReducer
});
