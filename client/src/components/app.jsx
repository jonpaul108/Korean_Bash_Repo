import React from 'react';
import ConditionalRenderer from './conditionalRenderer.jsx';
import Register from './register.jsx';
import styles from '../css/app.css';
import axios from 'axios';
import store from '../store/store.js';
import {
  connect
} from 'react-redux';
import {
  Provider
} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentDidMount() {

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



  render() {
    const {
      username,
      password,
      message
    } = this.state;
    const loggedIn = this.props.loggedIn;
    const page = this.props.page;
    console.log('app: ', loggedIn);
    const handlePageChange = this.handlePageChange;
    const handleLogin = this.handleLogin;
    const handleRegister = this.handleRegister;
    const handleLogIn = this.handleLogIn;
    const handleOnChange = this.handleOnChange;
    const handleNewUserRegistration = this.props.handleNewUserRegistration;
    return <Provider store={store}>
      <div className={styles.container}>
        <ConditionalRenderer
          page={page}
          handlePageChange={handlePageChange}
          loggedIn={loggedIn}
          />
      </div>
    </Provider>

  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn.item,
  page: state.page.item

});

export default connect(mapStateToProps)(App);