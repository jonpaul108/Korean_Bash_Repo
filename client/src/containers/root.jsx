import {
  Provider
} from 'react-redux';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import VisualApp from './app';

const Root = ({
  store
}) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={VisualApp} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
