import React from 'react';
import ConditionalRenderer from './conditionalRenderer.jsx';
import Register from './register.jsx';
import styles from '../css/app.css';
import axios from 'axios';

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
    const user = this.state.username;
    console.log('hello', user);
    const password = this.state.password;
    axios.get(`/login/${user}/${password}`)
      .then((response) => {
        console.log('signed in');
        this.setState({
          loggedIn: true,
          page: 'learn page'
        })
      })
      .catch((err) => {
        const message = 'Incorrect loggin information';
        console.log('login error');
        this.setState({
          message
        });

      });
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
    if (!loggedIn || page === 'signIn') {
      return <div className={styles.loginPage}>
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
    } else if (page === 'register') {
      return <div>
        <Register
          handlePageChange={handlePageChange}
          loggedIn={loggedIn}
          />
    </div>
    } else {
      return <div className={styles.container}>
          <ConditionalRenderer
            page={page}
            handlePageChange={handlePageChange}
            loggedIn={loggedIn}
            />
        </div>
    }
  }
}

export default App;