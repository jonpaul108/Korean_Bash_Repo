import React from 'react';
import SignIn from '../containers/signInContainer.jsx';
import Register from './register.jsx';

const Auth = (props) => {
  const handlePageChange = props.handlePageChange;
  if (props.page === 'signIn') {
    return <div><SignIn /></div>
  } else {
    return <div><Register
      handlePageChange={handlePageChange}
      /></div>
  }
}

export default Auth;