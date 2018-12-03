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
      character: 0
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
    console.log(id);
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
      eCharacter
    } = this.state;
    const handlePageChange = this.props.handlePageChange;
    return (
      <div className={styles.background}>
        <div>
          <button>Hear it again</button>
        </div>
        <div>
          <span> {kCharacter}</span>
          <span> Reading: {eCharacter}</span>
        </div>
        <div>
          <button onClick={this.handleNextClick}>Next</button>
        </div>
        <div>
          <button onClick={this.handleBackClick}>Back</button>
        </div>
        <div>
          <button className={styles.play} onClick={handlePageChange} >Play</button>
        </div>
      </div>
    )
  }
}

export default Learn;