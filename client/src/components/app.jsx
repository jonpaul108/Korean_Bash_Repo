import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../css/app.css';
import VisualConditionalRenderer from '../containers/pageConditionalRenderer';
import Auth from './auth.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(event) {
    const page = event.target.value;
    console.log(event.target.value);
    this.props.changePage(page);
  }

  render() {
    const {
      loggedIn,
    } = this.props;
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
}

App.propTypes = {
  loggedIn: PropTypes.bool,
  page: PropTypes.string,
  authPage: PropTypes.string,
  changePage: PropTypes.func,
};

export default App;