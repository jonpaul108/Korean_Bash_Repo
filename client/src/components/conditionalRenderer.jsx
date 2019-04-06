import React from 'react';
import Learn from './learnPage.jsx';
import QuizBoard from './quizBoard.jsx';
import VisualHome from '../containers/homePageContainer';

const ConditionalRenderer = (props) => {
  console.log('in conditinoal renderer: ', props.page);
  if (props.page === 'home') {
    return <div><VisualHome /></div>
  } else if (props.page === 'gameboard') {
    return <div> <QuizBoard /> </div>
  } else if (props.page === 'learn_page') {
    return <div>
      <Learn />
  </div>
  }
}

export default ConditionalRenderer;