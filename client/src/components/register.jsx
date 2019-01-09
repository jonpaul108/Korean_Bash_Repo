import React from 'react';
import styles from '../css/signIn.css';
import axios from 'axios';
import zxcvbn from 'zxcvbn';

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
        this.setState({
          isRegistered: true
        });
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
    let pass = 0;
    let feed = '';
    if (event.target.name === 'newPassword') {
      const {
        score
      } = zxcvbn(event.target.value);
      pass = score;
    }
    this.setState({
      [event.target.name]: event.target.value,
      score: pass
    })
  }

  render() {
    const {
      newUsername,
      newPassword,
      email,
      message,
      score,
      isRegistered
    } = this.props;
    const handlePageChange = this.props.handlePageChange;
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
            <input className={styles.input} type='text' placeholder='username' name='newUsername' value={newUsername} onChange={handleOnChange}></input>
            <input className={styles.input}type='text' placeholder='password' name='newPassword' value={newPassword} onChange={handleOnChange}></input>
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

export default Register;