import React from 'react';
import styles from '../css/signIn.css';
import store from '../store/store.js';
import axios from 'axios';
import zxcvbn from 'zxcvbn';
import {
  connect
} from 'react-redux';
import changePage from '../actions/changePage.js';
import username from '../actions/username.js';
import accountAlreadyExists from '../actions/auth/accountAlreadyExists.js';
import accountEmail from '../actions/auth/accountEmail.js';
import createPassword from '../actions/auth/createPassword.js';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUsername: '',
      newPassword: '',
      email: '',
      loggedIn: false,
      message: '',
      score: '',
      feedback: '',
      isRegistered: false
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleDispatch() {
    console.log('dispatched from register');
    store.dispatch(changePage('signIn'));
  }
  handleRegister(event) {
    event.preventDefault();
    const user = this.state.newUsername;
    const password = this.state.newPassword;
    const email = this.state.email;
    axios.post(`/user`, {
        username: user,
        password: password,
        email
      })
      .then((response) => {
        this.handleDispatch();
      })
      .catch((err) => {
        let message = 'Username or Email already in use';
        console.log('in error');
        this.setState({
          message
        });
      })
  }

  handleOnChange(event) {
    const func = this.props[event.target.name];
    const val = event.target.value;
    func(val);

  }

  render() {
    const {
      score,
      isRegistered
    } = this.props;
    const newUsername = this.props.username;
    const newPassword = this.props.newPassword;
    const email = this.props.email;
    const message = this.props.message;
    const handlePageChange = this.props.changePage;
    const handleOnChange = this.handleOnChange;
    const handleRegister = this.handleRegister;

    return <div className={styles.loginPage}>
      <span className={styles.message}>{message}</span>
      <span>password strength (out of 4): {score}</span>
      <div className={styles.loginBox}>
      <div className={styles.logIn}>
        <span className={styles.signInText}>Make an account: </span>
          <form onSubmit={handleRegister} className={styles.logIn}>
            <input className={styles.input} type='text' placeholder='email' name='email' value={email} onChange={handleOnChange}></input>
            <input className={styles.input} type='text' placeholder='username' name='username' value={newUsername} onChange={handleOnChange}></input>
            <input className={styles.input}type='text' placeholder='password' name='createPassword' value={newPassword} onChange={handleOnChange}></input>
            <div className={styles.submitContainer}>
              <input className={styles.submit} type='submit' value='Submit'></input>
            </div>
          </form>
          <div className={styles.registerContainer}>
            <button className={styles.register} value='signIn' onClick={handlePageChange}> Already have an account?</button>
          </div>
      </div>
      </div>
    </div>
  }
}
const mapStateToProps = state => ({
  page: state.page.item,
  newPassword: state.newPassword.item,
  username: state.username.item,
  email: state.email.item,
})
export default connect(mapStateToProps, {
  changePage,
  username,
  accountAlreadyExists,
  createPassword,
  accountEmail
})(Register);