import React from 'react';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../css/signIn.css';

class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.props.currUsername, this.props.currPassword);
  }

  render() {
    const {
      handleOnChange,
      loggedIn,
      currUsername,
      currPassword,
      message
    } = this.props;
    const handleSubmit = this.handleSubmit;

    return (<div className={styles.loginPage}>
      <span>{loggedIn}</span>
      <div className={styles.loginBox}>
        <div className={styles.logIn}>
          <span className={styles.signInText}>Sign in: </span>
          <form onSubmit={handleSubmit} className={styles.logIn} >
            <input className={styles.input} type='text' placeholder='username' name='username' value={currUsername} onChange={handleOnChange}></input>
            <input className={styles.input}type='text' placeholder='password' name='password' value={currPassword} onChange={handleOnChange}></input>
            <div className={styles.submitContainer}>
              <input className={styles.submit} type='submit' value='Submit'></input>
            </div>
          </form>
          <div className={styles.registerContainer}>
            <Link to='/register' >
              <button className={styles.register} value='register'>Need an account?</button>
            </Link>
            <span className={styles.message}>{message}</span>
          </div>
        </div>
      </div>
    </div>)
  }
}

SignIn.propTypes = {
  handleOnChange: PropTypes.func,
  handleLogin: PropTypes.func,
  loggedIn: PropTypes.bool,
  currUsername: PropTypes.string,
  currPassword: PropTypes.string,
  message: PropTypes.string,
};

export default SignIn;