import React from 'react';
import styles from '../css/signIn.css';
import store from '../store/store.js';
import zxcvbn from 'zxcvbn';
import {
  connect
} from 'react-redux';
import changePage from '../actions/changePage.js';
import username from '../actions/username.js';
import accountAlreadyExists from '../actions/auth/accountAlreadyExists.js';
import accountEmail from '../actions/auth/accountEmail.js';
import createPassword from '../actions/auth/createPassword.js';
import register from '../actions/register.js';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      score: '',
      feedback: ''
    }
    this.handlePageChange = this.props.handlePageChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handlePageChange() {
    this.props.changePage('signIn');
  }
  handleRegister(event) {
    event.preventDefault();
    const user = this.props.newUsername;
    const password = this.props.newPassword;
    const email = this.props.email;
    const toSignIn = this.props.changePage.bind(this);
    this.props.register(user, password, email, () => {
      this.props.changePage('signIn');
    });
  }

  handleOnChange(event) {
    const func = this.props[event.target.name];
    const val = event.target.value;
    func(val);
  }

  render() {
    const {
      newUsername,
      newPassword,
      email,
      message,
    } = this.props;
    const handleOnChange = this.handleOnChange;
    const handleRegister = this.handleRegister;
    const handlePageChange = this.handlePageChange;

    return <div className={styles.loginPage}>
      <span className={styles.message}>{message}</span>
      <span>password strength (out of 4): 1</span>
      <div className={styles.loginBox}>
      <div className={styles.logIn}>
        <span className={styles.signInText}>Make an account: </span>
          <form onSubmit={handleRegister} className={styles.logIn}>
            <input className={styles.input} type='text' placeholder='email' name='accountEmail' value={email} onChange={handleOnChange}></input>
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
  newUsername: state.currUsername.item,
  email: state.email.item,
  message: state.message.item
})
export default connect(mapStateToProps, {
  changePage,
  username,
  accountAlreadyExists,
  createPassword,
  accountEmail,
  register
})(Register);