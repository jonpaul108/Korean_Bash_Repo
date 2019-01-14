import React from 'react';
import ConditionalRenderer from './conditionalRenderer.jsx';
import Register from './register.jsx';
import styles from '../css/app.css';
import axios from 'axios';
import store from '../store/store.js';
import {
  connect
} from 'react-redux';
import {
  Provider
} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'signIn',
      loggedIn: false,
      username: '',
      password: '',
      message: ''
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentDidMount() {

  }
  handlePageChange(event) {
    const page = event.target.value || 'signIn';
    this.setState({
      page,
      loggedIn: true
    });
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    const {
      page,
      loggedIn,
      username,
      password,
      message
    } = this.state;
    const handlePageChange = this.handlePageChange;
    const handleLogin = this.handleLogin;
    const handleRegister = this.handleRegister;
    const handleLogIn = this.handleLogIn;
    const handleOnChange = this.handleOnChange;
    const handleNewUserRegistration = this.props.handleNewUserRegistration;
    return <provider store={store}>
      <div className={styles.container}>
        <ConditionalRenderer
          page={page}
          handlePageChange={handlePageChange}
          loggedIn={loggedIn}
          />
      </div>
    </provider>

  }
}

export default App;