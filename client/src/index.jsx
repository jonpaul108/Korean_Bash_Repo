import React from 'react';
import ReactDom from 'react-dom';
import Root from './containers/root.jsx';
import store from './store/store';

ReactDom.render(
  <Root store={store} />,
  document.getElementById('app'));