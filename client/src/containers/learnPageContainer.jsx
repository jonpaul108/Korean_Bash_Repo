import {
  connect
} from 'react-redux';
import LearnPage from '../components/learnPage.jsx';
import learnPageSetup from '../actions/flashCards/learnPageSetup';
import changePage from '../actions/changePage';
import charNum from '../actions/flashCards/charNum';

const mapStateToProps = state => ({
  kCharacter: state.learnPageSetup.kCharacter,
  eCharacter: state.learnPageSetup.eCharacter,
  type: state.learnPageSetup.fileType,
  examples: state.learnPageSetup.examples,
  words: state.learnPageSetup.words,
  soundFile: state.learnPageSetup.soundFile,
  character: state.learnPageSetup.character
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleNextClick: () => {
      let num = this.props.character;
      num++;
      if (num > 2) {
        num = 0;
      }
      learnPageSetup(num, dispatch);
    },
    handleBackClick: () => {
      let num = this.props.character;
      num--;
      if (num < 0) {
        num = 2;
      }
      learnPageSetup(num, dispatch));
  },
  charNum: (num) => {
      dispatch(charNum(num))
    },
    changePage: (e) => {
      const page = e.target.value;
      dispatch(changePage(page));
    }
}
};

const VisualLearnPage = connect(mapStateToProps, mapDispatchToProps)(LearnPage);

export default VisualLearnPage;