import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import VisualLearn from '../containers/learnPageContainer';
import QuizBoard from './quizBoard.jsx';
import VisualHome from '../containers/homePageContainer';


const ConditionalRenderer = () => {
  return (<Switch>
    <Route path='/home' component={VisualHome} />
    <Route path='/gameboard' component={QuizBoard} />
    <Route path='/learn' component={VisualLearn} />
    <Route render={() => <Redirect to='/login' />} />
  </Switch>)
}

export default ConditionalRenderer;