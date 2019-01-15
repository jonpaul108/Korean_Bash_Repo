import React from 'react';
import Learn from './learnPage.jsx';
import QuizBoard from './quizBoard.jsx';
import Register from './register.jsx';
import SignIn from './signIn.jsx';
import {
  connect
} from 'react-redux';

const ConditionalRenderer = (props) => {
  const handlePageChange = props.handlePageChange;
  if (props.page === 'gameboard') {
    return <div> <QuizBoard handlePageChange={handlePageChange}/> </div>
  } else if (props.page === 'learn_page') {
    return <div>
      <Learn
        handlePageChange={handlePageChange}
        />
  </div>
  }
}

export default connect()(ConditionalRenderer);