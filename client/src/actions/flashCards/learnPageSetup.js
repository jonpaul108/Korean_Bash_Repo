import axios from 'axios';
import { LEARN_PAGE_SETUP, FAILED_TO_RETRIEVE_CHARACTERS } from '../types';

const learnPageSetup = (id, dispatch) => {
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
        data: {res,
        kCharacter,
        eCharacter,
        fileType,
        soundFile,
        learned,
        character,
      }
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILED_TO_RETRIEVE_CHARACTERS,
      });
      console.log('error: ', err);
    });
};

export default learnPageSetup;
