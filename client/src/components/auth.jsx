import React from 'react';
import SignIn from './signIn.jsx';
import Register from './register.jsx';

const Auth = (props) => {
  const handlePageChange = props.handlePageChange;
  if (props.page === 'signIn') {
    return <div><SignIn
      handlePageChange={handlePageChange}
       /></div>
  } else {
    return <div><Register
      handlePageChange={handlePageChange}
      /></div>
  }
}

export default Auth;