import React from 'react';
import Learn from './learnPage.jsx';
import QuizBoard from './quizBoard.jsx';

const ConditionalRenderer = (props) => {
  if (props.page === 'learn page') {
    return <div><Learn handlePageChange={props.handlePageChange}/></div>
  } else {
    return <div> <QuizBoard handlePageChange={props.handlePageChange}/> </div>
  }
}

export default ConditionalRenderer;