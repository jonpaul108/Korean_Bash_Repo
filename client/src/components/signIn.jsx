import React from 'react';
import styles from '../css/signIn.css';
import axios from 'axios';
import {
  connect
} from 'react-redux';
import signIn from '../actions/signIn.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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

  handleLogin(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.props.signIn(username, password);

  }

  render() {
    const loggedIn = this.props.loggedIn;
    const {
      page,
      username,
      password,
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
              <input className={styles.input} type='text' placeholder='username' name='username' value={username} onChange={handleOnChange}></input>
              <input className={styles.input}type='text' placeholder='password' name='password' value={password} onChange={handleOnChange}></input>
              <div className={styles.submitContainer}>
                <input className={styles.submit} type='submit' value='Submit'></input>
              </div>
            </form>
            <div className={styles.registerContainer}>
              <button className={styles.register}value='register' onClick={handlePageChange}>Need an account?</button>
              <span className={styles.message}>{message}</span>
            </div>
        </div>
        </div>
      </div>
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn.items
})

export default connect(mapStateToProps, {
  signIn
})(SignIn);