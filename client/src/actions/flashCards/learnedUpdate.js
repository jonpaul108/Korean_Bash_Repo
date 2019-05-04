import axios from 'axios';
import LEARNED_NEW from '../types';

//this updates the progress column from new to beginner for each word/phrase/chracter
//might possibly be usable to update progress after practiced

const learnedNew = data =>  (dispatch) => {
  axios.put('/user/learnUpdate', data)
  .then(() => {
    //update points
    //update chars left, chars learned
  })
}


//for learn, should read the characters, then listen to options and choose the correct onChange
//need to update state for items learned, update points...
