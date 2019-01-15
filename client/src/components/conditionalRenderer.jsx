import React from 'react';
import Learn from './learnPage.jsx';
import QuizBoard from './quizBoard.jsx';
import Register from './register.jsx';
import SignIn from './signIn.jsx';
import {
  connect
} from 'react-redux';

const ConditionalRenderer = (props) => {
  console.log('page in conditions: ', props.page);
  if (props.page === 'gameboard') {
    return <div> <QuizBoard handlePageChange={handlePageChange}/> </div>
  } else if (props.page === 'learn_page') {
    return <div>
      <Learn />
  </div>
  }
}

export default connect()(ConditionalRenderer);