import {
  connect
} from 'react-redux';
import SignIn from '../components/signIn.jsx';
import signIn from '../actions/signIn';
import password from '../actions/password';
import username from '../actions/username';
import authPage from '../actions/auth/authPage';


const mapStateToProps = state => ({
  loggedIn: state.loggedIn.item,
  currUsername: state.currUsername.item,
  currPassword: state.currPassword.item,
  page: state.page.item,
  message: state.message.item
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnChange: (e) => {
      let func;
      if (e.target.name === 'username') {
        func = username;
      } else {
        func = password;
      }
      const val = e.target.value;
      dispatch(func(val));
    },
    handleLogin: (user, pass) => {
      signIn(user, pass, dispatch);
    },
    handlePageChange: (e) => {
      const page = e.target.value;
      dispatch(authPage(page));
    }
  }
};

const VisualSignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default VisualSignIn;