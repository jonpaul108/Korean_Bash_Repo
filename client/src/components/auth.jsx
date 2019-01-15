import React from 'react';
import SignIn from './signIn.jsx';
import Register from './register.jsx';

const Auth = (props) => {
  console.log('auth');
  if (props.page === 'signIn') {
    return <div><SignIn /></div>
  } else {
    return <div><Register /></div>
  }
}

export default Auth;