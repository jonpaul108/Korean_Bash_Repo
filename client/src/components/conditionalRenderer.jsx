import React from 'react';
import Learn from './learnPage.jsx';
import SignIn from './signIn.jsx';
import QuizBoard from './quizBoard.jsx';

const ConditionalRenderer = (props) => {
  if (props.page === 'learn page') {
    return <div><Learn handlePageChange={props.handlePageChange}/></div>
  } else if (props.page === 'gameboard') {
    return <div> <QuizBoard handlePageChange={props.handlePageChange}/> </div>
  } else if (props.page === 'signIn') {
    return <div><SignIn
       handlePageChange={props.handlePageChange}/>
  </div>
  }
}

export default ConditionalRenderer;