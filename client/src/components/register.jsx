import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import zxcvbn from 'zxcvbn';
import PropTypes from 'prop-types';
import styles from '../css/signIn.css';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      score: '',
      feedback: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }


  handleRegister(event) {
    event.preventDefault();
    const user = this.props.newUsername;
    const password = this.props.newPassword;
    const email = this.props.email;
    this.props.register(email, password, user);
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
            <Link to='/login'>
              <button className={styles.register}> Already have an account?</button>
            </Link>
          </div>
      </div>
      </div>
    </div>
  }
}

export default Register;

Register.propTypes = {
  page: PropTypes.string,
  newPassword: PropTypes.string,
  newUsername: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
  changePage: PropTypes.func,
  accountAlreadyExists: PropTypes.func,
  accountEmail: PropTypes.func,
  createPassword: PropTypes.func,
  register: PropTypes.func,
}