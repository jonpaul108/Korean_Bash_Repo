import React from 'react';
import styles from '../css/signIn.css';
import axios from 'axios';
import {
  connect
} from 'react-redux';
import signIn from '../actions/signIn.js';
import password from '../actions/password.js';
import username from '../actions/username.js';
import changePage from '../actions/changePage.js';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handlePageChange(event) {
    const page = event.target.value || 'signIn';
    this.props.changePage(page);
  }

  handleOnChange(event) {
    const func = this.props[event.target.name];
    const val = event.target.value;
    func(val);
  }

  handleLogin(event) {
    event.preventDefault();
    const user = this.props.currUsername;
    const pass = this.props.currPassword;
    this.props.signIn(user, pass);

  }

  render() {
    const loggedIn = this.props.loggedIn;
    const currPassword = this.props.currPassword;
    const currUsername = this.props.currUsername;
    console.log(currUsername);
    const {
      message
    } = this.state;
    const handlePageChange = this.handlePageChange;
    const handleLogin = this.handleLogin;
    const handleRegister = this.handleRegister;
    const handleLogIn = this.handleLogIn;
    const handleOnChange = this.handleOnChange;
    return <div className={styles.loginPage}>
      <span>{loggedIn}</span>
        <div className={styles.loginBox}>
        <div className={styles.logIn}>
          <span className={styles.signInText}>Sign in: </span>
            <form onSubmit={handleLogin} className={styles.logIn}>
              <input className={styles.input} type='text' placeholder='username' name='username' value={currUsername} onChange={handleOnChange}></input>
              <input className={styles.input}type='text' placeholder='password' name='password' value={currPassword} onChange={handleOnChange}></input>
              <div className={styles.submitContainer}>
                <input className={styles.submit} type='submit' value='Submit'></input>
              </div>
            </form>
            <div className={styles.registerContainer}>
              <button className={styles.register} value='register' onClick={handlePageChange}>Need an account?</button>
              <span className={styles.message}>{message}</span>
            </div>
        </div>
        </div>
      </div>
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn.item,
  currUsername: state.currUsername.item,
  currPassword: state.currPassword.item,
  page: state.page.item
})

export default connect(mapStateToProps, {
  signIn,
  username,
  password,
  changePage
})(SignIn);