import React from 'react';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../css/app.css';
import VisualConditionalRenderer from '../containers/pageConditionalRenderer';
import Auth from './auth.jsx';
import changePage from '../actions/changePage';


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
      page,
      authPage
    } = this.props;
    const handlePageChange = this.handlePageChange;

    if (loggedIn === false) {
      return <div>
        <Auth
        page={authPage}
        loggedIn={loggedIn}
        handlePageChange={handlePageChange}
        />
      </div>
    } else {
      return <div className={styles.container}>
        <VisualConditionalRenderer />
      </div>
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn.item,
  page: state.page.item,
  authPage: state.authPage.item,
});

export default connect(mapStateToProps, {
  changePage
})(App);

App.propTypes = {
  loggedIn: PropTypes.bool,
  page: PropTypes.string,
  changePage: PropTypes.func,
};