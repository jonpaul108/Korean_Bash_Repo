import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
