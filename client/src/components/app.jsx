import React from 'react';
import styles from '../css/app.css';
import ConditionalRenderer from './conditionalRenderer.jsx';
import Auth from './auth.jsx';
import store from '../store/store.js';
import {
  connect
} from 'react-redux';
import changePage from '../actions/changePage.js';


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
      page
    } = this.props;
    const handlePageChange = this.handlePageChange;

    if (loggedIn === false) {
      return <div>
        <Auth
        page={page}
        loggedIn={loggedIn}
        handlePageChange={handlePageChange}
        />
      </div>
    } else {
      return <div className={styles.container}>
        <ConditionalRenderer
          page={page}
          loggedIn={loggedIn}
          handlePageChange={handlePageChange}
          />
      </div>
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn.item,
  page: state.page.item
});

export default connect(mapStateToProps, {
  changePage
})(App);