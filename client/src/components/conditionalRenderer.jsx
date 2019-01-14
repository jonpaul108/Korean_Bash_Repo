import React from 'react';
import Learn from './learnPage.jsx';
import QuizBoard from './quizBoard.jsx';
import Register from './register.jsx';
import SignIn from './signIn.jsx';
import {
  connect
} from 'react-redux';

const ConditionalRenderer = ({
  page,
  handlePageChange,
  handleLogIn,
  loggedIn
}) => {
  console.log('page in conditions: ', page);
  if (page === 'learn page') {
    return <div><Learn handlePageChange={handlePageChange}/></div>
  } else if (page === 'gameboard') {
    return <div> <QuizBoard handlePageChange={handlePageChange}/> </div>
  } else if (page === 'register') {
    return <div>
      <Register
        handlePageChange={handlePageChange}
        handleLogIn={handleLogIn}
        loggedIn={loggedIn}
        />
  </div>
  } else if (page === 'signIn') {
    return <SignIn
      />
  }
}

export default connect()(ConditionalRenderer);