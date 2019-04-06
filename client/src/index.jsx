import {
  Provider
} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx';
import store from './store/store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));