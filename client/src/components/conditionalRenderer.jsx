import React from 'react';
import Learn from './learnPage.jsx';
import QuizBoard from './quizBoard.jsx';
import Register from './register.jsx';

const ConditionalRenderer = (props) => {
  if (props.page === 'learn page') {
    return <div><Learn handlePageChange={props.handlePageChange}/></div>
  } else if (props.page === 'gameboard') {
    return <div> <QuizBoard handlePageChange={props.handlePageChange}/> </div>
  } else if (props.page === 'register') {
    return <div>
      <Register
        handlePageChange={props.handlePageChange}
        handleLogIn={props.handleLogIn}
        loggedIn={props.loggedIn}
        />
  </div>
  }
}

export default ConditionalRenderer;