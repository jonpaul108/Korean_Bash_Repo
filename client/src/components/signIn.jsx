import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      newUsername: '',
      newPassword: '',
      loggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }


  handleLogin(event) {
    event.preventDefault();
    const user = this.state.username;
    console.log('hello', user);
    const password = this.state.password;
    axios.get(`/login/${user}/${password}`)
      .then((response) => {
        console.log('signed in');
      })
      .catch((err) => {
        console.log('login error', err);
      });
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
        console.log('receved post request for new user');
      })
      .catch((err) => {
        console.log(err);
      })
  }


  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const {
      username,
      email,
      password,
      newUsername,
      newPassword
    } = this.state;
    const handlePageChange = this.props.handlePageChange;
    const handleOnChange = this.handleOnChange;
    const handleRegister = this.handleRegister;
    const handleLogin = this.handleLogin;
    return (
      <div>
        <button value='learn page' onClick={handlePageChange}>Learn</button>
        <span>Sign in: </span>
        <div>
          <span>Sign in: </span>
            <form onSubmit={handleLogin}>
              <label>Username: </label>
              <input name='username' value={username} onChange={handleOnChange}></input>
              <label>password</label>
              <input name='password' value={password} onChange={handleOnChange}></input>
              <input type='submit' value='Submit'></input>
            </form>
        </div>
        <div>
          <span>Make an account: </span>
            <form onSubmit={handleRegister}>
              <label>email: </label>
              <input name='email' value={email} onChange={handleOnChange}></input>
              <label>Username: </label>
              <input type="text" name='newUsername' value={newUsername} onChange={handleOnChange}></input>
              <label>password</label>
              <input name='newPassword' value={newPassword} onChange={handleOnChange}></input>
              <input type='submit' value='Submit'></input>
            </form>
        </div>
      </div>
    )
  }
}

export default SignIn;