import React from 'react';
import styles from '../css/app.css';
import ConditionalRenderer from './conditionalRenderer.jsx';
import Auth from './auth.jsx';
import store from '../store/store.js';
import {
  connect
} from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const {
      loggedIn,
      page
    } = this.props;
    const handleLogIn = this.handleLogIn;
    const handleOnChange = this.handleOnChange;

    if (loggedIn === false) {
      return <div>
        <Auth
        page={page}
        loggedIn={loggedIn}
        />
      </div>
    } else {
      return <div className={styles.container}>
        <ConditionalRenderer
          page={page}
          loggedIn={loggedIn}
          />
      </div>
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn.item,
  page: state.page.item
});

export default connect(mapStateToProps)(App);