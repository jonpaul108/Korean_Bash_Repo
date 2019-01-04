import React from 'react';
import ConditionalRenderer from './conditionalRenderer.jsx';
import styles from '../css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'signIn'
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    console.log('hello');
    const user = this.state.username;
    const password = this.state.password;
    axios(`/login/${username}/${password}`)
      .then((response) => {
        console.log('signed in');
      })
      .catch((err) => {
        console.log('login error', err);
      });

  }
  handleRegister(event) {

  }

  handlePageChange(event) {
    let page = event.target.value;
    this.setState({
      page
    });
  }

  render() {
    const {
      page,
    } = this.state;
    const handlePageChange = this.handlePageChange;
    const handleLogin = this.handleLogin;
    const handleRegister = this.handleRegister;
    return (
      <div className={styles.container}>
        <ConditionalRenderer
          page={page}
          handlePageChange={handlePageChange}
          handleLogin={handleLogin}
          handleregister={handleRegister}
          />
      </div>
    )
  }
}

export default App;