import React from 'react';
import axios from 'axios';
import styles from '../css/learnPage.css';

class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: "file",
      kCharacter: "characterK",
      eCharacter: "chracterE",
      showExamples: false,
      character: 0,
      type: 'Building Block',
      examples: '아, 안',
      words: '안녕하세요'
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.getCharacters = this.getCharacters.bind(this);

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
        const eCharacter = res.romanization;
        this.setState({
          kCharacter,
          eCharacter
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
        <div className={styles.play}>
          <button onClick={handlePageChange} >Play</button>
        </div>
      </div>
    )
  }
}

export default Learn;