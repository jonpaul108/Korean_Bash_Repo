import React from 'react';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../css/learnPage.css';
import AudioPlayer from './audioPlayer.jsx';
import learnPageSetup from '../actions/flashCards/learnPageSetup';
import charNum from '../actions/flashCards/charNum';
import changePage from '../actions/changePage';

class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExamples: false,
      examples: '아, 안',
      words: '안녕하세요',
      characterSet: 'place holder',
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.audio = new Audio(this.state.sound);
  }


  handleNextClick() {
    let num = this.props.character;
    num++;
    if (num > 2) {
      num = 0;
    }
    this.props.learnPageSetup(num);
  }

  handleBackClick() {
    let num = this.props.character;
    num--;
    if (num < 0) {
      num = 2;
    }
    this.props.learnPageSetup(num);
  }

  componentDidMount() {
    this.props.learnPageSetup(0);
  }

  render() {
    const {
      kCharacter,
      eCharacter,
      type,
      examples,
      words,
      soundFile
    } = this.props;
    const handlePageChange = this.props.handlePageChange;
    return (
      <div className={styles.background}>
        <div className={styles.quizContainer}>
          <button className={styles.changeCharacter} value="gameboard" onClick={handlePageChange} >quiz</button>
        </div>
        <div className={styles.repeatSound}>
          <AudioPlayer className={styles.repeatSound}
            soundFile={soundFile}
            />
        </div>
          <div className={styles.kLetterContainer}>
            <span className={styles.koreanCharacter}> {kCharacter}</span>
          </div>
          <div className={styles.englishCharacterContainer}>
            <span className={styles.englishCharacter}>{eCharacter}</span>
        </div>
        <div className={styles.changeCharacterContainer}>
          <div>
            <span>Type: </span><span>{type}</span>
          </div>
          <div>
            <span> Examples: </span><span>{examples}</span>
          </div>
          <div>
            <span>Words: </span><span>{words}</span>
          </div>
        </div>
        <div className={styles.changeCharacterContainer}>
          <div>
            <button className={styles.changeCharacter} onClick={this.handleBackClick}>Back</button>
          </div>
          <div>
            <button className={styles.changeCharacter} onClick={this.handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  kCharacter: state.learnPageSetup.kCharacter,
  eCharacter: state.learnPageSetup.eCharacter,
  type: state.learnPageSetup.fileType,
  examples: state.learnPageSetup.examples,
  words: state.learnPageSetup.words,
  soundFile: state.learnPageSetup.soundFile,
  character: state.learnPageSetup.character
});
export default connect(mapStateToProps, {
  learnPageSetup,
  charNum,
  changePage
})(Learn);

Learn.propTypes = {
  kCharacter: PropTypes.string,
  eCharacter: PropTypes.string,
  type: PropTypes.string,
  examples: PropTypes.string,
  words: PropTypes.string,
  soundFile: PropTypes.string,
  character: PropTypes.string,
  handlePageChange: PropTypes.func,
  learnPageSetup: PropTypes.func,
}