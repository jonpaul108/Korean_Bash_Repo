import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import VisualSignIn from '../containers/signInContainer';
import VisualRegister from '../containers/registerContainer';

const Auth = () => {
  return (<Switch>
    <Route path='/login' component={VisualSignIn} />
    <Route path='/register' component={VisualRegister} />
    <Route render={() => <Redirect to='/login' />} />
  </Switch>)
}

export default Auth;