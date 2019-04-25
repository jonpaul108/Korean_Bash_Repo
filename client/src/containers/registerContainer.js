import { connect } from 'react-redux';
import Register from '../components/register.jsx';
import changePage from '../actions/changePage';
import accountAlreadyExists from '../actions/auth/accountAlreadyExists';
import accountEmail from '../actions/auth/accountEmail';
import createPassword from '../actions/auth/createPassword';
import username  from '../actions/username';
import authPage from '../actions/auth/authPage';
import register from '../actions/register';

const mapStateToProps = (state) => {
  return {
    page: state.page.item,
    newPassword: state.newPassword.item,
    newUsername: state.currUsername.item,
    email: state.email.item,
    message: state.message.item,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => dispatch(changePage(page)),
    accountAlreadyExists: () => dispatch(accountAlreadyExists),
    accountEmail: (email) => dispatch(accountEmail(email)),
    createPassword: (pass) => dispatch(createPassword(pass)),
    username: (user) => { dispatch(username(user))},
    register: (email, pass, user) => register(email, pass, user, dispatch, authPage),
  }
}

const VisualRegister = connect(mapStateToProps, mapDispatchToProps)(Register);

export default VisualRegister;
