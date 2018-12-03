import React from 'react';
import Learn from './learnPage.jsx';
import GameBoard from './gameBoard.jsx';

const ConditionalRenderer = (props) => {
  if (props.page === 'learn page') {
    return <div><Learn handlePageChange={props.handlePageChange}/></div>
  } else {
    return <div> <GameBoard handlePageChange={props.handlePageChange}/> </div>
  }
}

export default ConditionalRenderer;