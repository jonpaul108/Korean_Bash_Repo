import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/learnPage.css';
import AudioPlayer from './audioPlayer.jsx';

class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCharNum: 0,
      kor: props.words[0].korean,
      eng: props.words[0].english,
      examples: '아, 안',
      word: '안녕하세요',
      soundFile: props.words[0].sound_file,
      characterSet: 'place holder',
      type: 'building block',
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.audio = new Audio(this.state.sound);
  }


  handleNextClick() {
    let currCharNum = this.state.currCharNum;
    currCharNum += 1;
    const words = this.props.words;
    console.log('num: ', currCharNum, 'wordsLength: ', words.length);
    if (currCharNum > (words.length - 1)) {
      currCharNum = 0;
    }
    const kor = words[currCharNum].korean;
    const eng = words[currCharNum].english;
    const soundFile = words[currCharNum].sound_file;
    this.setState({
      currCharNum,
      kor,
      eng,
      soundFile,
    })
  }

  handleBackClick() {
    let currCharNum = this.state.currCharNum;
    currCharNum -= 1;
    const words = this.props.words;
    console.log('num: ', currCharNum, 'wordsLength: ', words.length);
    if (currCharNum < 0) {
      currCharNum = (words.length - 1);
    }
    const kor = words[currCharNum].korean;
    const eng = words[currCharNum].english;
    this.setState({
      currCharNum,
      kor,
      eng,
    })
  }


  render() {
    const {
      kor,
      eng,
      soundFile,
      word,
      examples,
      type,
    } = this.state;
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
            <span className={styles.koreanCharacter}> {kor}</span>
          </div>
          <div className={styles.englishCharacterContainer}>
            <span className={styles.englishCharacter}>{eng}</span>
        </div>
        <div className={styles.changeCharacterContainer}>
          <div>
            <span>Type: </span><span>{type}</span>
          </div>
          <div>
            <span> Examples: </span><span>{examples}</span>
          </div>
          <div>
            <span>Words: </span><span>{word}</span>
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

export default Learn;

Learn.propTypes = {
  words: PropTypes.array,
  handleChangePage: PropTypes.func,
}