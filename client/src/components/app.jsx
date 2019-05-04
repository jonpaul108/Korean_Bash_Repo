import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../css/app.css';
import VisualConditionalRenderer from '../containers/pageConditionalRenderer';
import Auth from './auth.jsx';



const App = ({
  loggedIn
}) => {
  if (loggedIn === false) {
    return <Router>
      <div>
        <Auth loggedIn={loggedIn} />
      </div>
      </Router>
  } else {
    return <Router>
          <div className={styles.container}>
            <VisualConditionalRenderer />
          </div>
        </Router>
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
};

export default App;