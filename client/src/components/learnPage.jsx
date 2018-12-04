import React from 'react';
import axios from 'axios';
import styles from '../css/learnPage.css';
import sound from 'react-sound';

class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: "file",
      kCharacter: "",
      eCharacter: "",
      showExamples: false,
      character: 0,
      type: 'Building Block',
      examples: '아, 안',
      words: '안녕하세요',
      characterSet: 'place holder',
      sound
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
    this.audio = new Audio(this.state.sound);
  }


  handleNextClick(event) {
    let num = this.state.character;
    num++;
    console.log(num);
    if (num > 2) {
      num = 0;
    }
    this.setState({
      character: num
    });
    this.getCharacters();
  }

  handleBackClick(event) {
    let num = this.state.character;
    num--;
    console.log(num);
    if (num < 0) {
      num = 2;
    }
    this.setState({
      character: num
    });
    this.getCharacters();
  }

  getCharacters() {
    const id = this.state.character;
    axios.get(`/character/${id}`)
      .then((response) => {
        const res = response.data.rows[0];
        const kCharacter = res.korean;
        const eCharacter = res.english;
        const characterSet = this.characterSet;
        const soundFile = res.sound_file;
        this.setState({
          kCharacter,
          eCharacter,
          characterSet,
          soundFile
        })
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    const {
      kCharacter,
      eCharacter,
      type,
      examples,
      words
    } = this.state;
    const handlePageChange = this.props.handlePageChange;
    return (
      <div className={styles.background}>
        <div className={styles.quizContainer}>
          <button className={styles.changeCharacter}onClick={handlePageChange} >quiz</button>
        </div>
        <div className={styles.repeatSound}>
          <img src='./sound-icon.png'></img>
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

export default Learn;