import {LEARN_PAGE_SETUP, FAILEd_TO_RETRIEVE_CHARACTERS} from '../types.js';
import axios from 'axios';

const learnPageSetup = (id) => (dispatch) => {
  axios.get(`/character/${id}`)
    .then((response) => {
      const res = response.data.rows[0];
      const kCharacter = res.korean;
      const eCharacter = res.english;
      // const characterSet = this.state.characterSet;
      const fileType = res.type;
      const soundFile = res.sound_file;
      const learned = res.learn;
      const character = id;
      dispatch({
        type: LEARN_PAGE_SETUP,
        res,
        kCharacter,
        eCharacter,
        fileType,
        soundFile,
        learned,
        character
      })
    })
    .catch((err) => {
      console.log('error: ', err);
    });
}

export default learnPageSetup;
