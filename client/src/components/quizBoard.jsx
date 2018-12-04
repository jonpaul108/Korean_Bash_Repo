import React from 'react';
import QuizPiece from './quizPiece.jsx';
import styles from '../css/quizBoard.css';
import axios from 'axios';
import AudioPlayer from './audioPlayer.jsx';
import utils from '../utils/utils.js';

class QuizBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test',
      score: 0,
      win: 'undecided',
      quizPieces: ['ㅏ', 'ㅗ', 'ㅓ'],
      currentPiece: '',
      chances: 3,
      soundFile: ''
    }
    this.handlePoint = this.handlePoint.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
    this.setQuizPieces = this.setQuizPieces.bind(this);
    this.getPiece = this.getPiece.bind(this);
  }
  componentDidMount() {
    this.setQuizPieces();
    this.getPiece();
  }

  getPiece() {
    let id = Math.floor(Math.random() * 3);
    axios.get(`/character/current/${id}`)
      .then((response) => {
        const res = response.data.rows[0];
        const soundFile = res.sound_file;
        console.log('soundFile', soundFile)
        const currentPiece = res.korean;
        this.setState({
          currentPiece,
          soundFile
        })
      })
      .catch((err) => {
        console.log('err');
      });
  }

  setQuizPieces() {
    const quizPieces = utils.randomPieces(this.state.quizPieces);
    this.setState({
      quizPieces
    });
  }

  handlePoint(event) {
    const score = this.state.score + 1;
    if (score < 5) {
      this.setState({
        score
      });
      this.getPiece();
      this.setQuizPieces();
    } else {
      this.setState({
        score,
        win: true
      });
    }
  }
  handleIncorrect(event) {
    const chances = this.state.chances - 1;
    if (chances > 0) {
      this.setState({
        chances
      });
    } else {
      this.setState({
        chances,
        win: false
      })
    }
  }


  render() {
    const {
      quizPieces,
      currentPiece,
      win,
      score,
      chances,
      soundFile
    } = this.state;
    let point = false;
    if (win === true) {
      return (<div className={styles.quizPage} >
        <span className={styles.message}>
        You won!
        </span>
        <div className={styles.changePage}>
        <button  onClick={this.props.handlePageChange}>Back to Learn</button>
      </div></div>);
    } else if (win === false) {
      return (<div className={styles.quizPage}>
          <span className={styles.message}>
            <span>Try </span> <span> again!</span>
          </span>
        <div className={styles.changePage}>
          <button  onClick={this.props.handlePageChange}>Back to Learn</button>
        </div>
      </div>);
    }
    return (
      <div className={styles.quizPage}>
        <div>Quiz</div>
          <div className={styles.repeatSound}>
            <AudioPlayer
              soundFile={soundFile}
              key={currentPiece}
              />
          </div>
          <div className={styles.changePage}>
            <button  onClick={this.props.handlePageChange}>Back to Learn</button>
          </div>
          <div className={styles.scoreAndQuiz}>
            <span className={styles.info}>score: {score}</span>
            <span className={styles.info}>chances: {chances}</span>
          </div>
              <div className={styles.quizContainer}>
              {quizPieces.map((el) => {
                if (currentPiece === el) {
                   point = true;
                } else {
                  point = false;
                }
                return <div className={styles.quizPieceInnerContainer}><QuizPiece handleOnClick={point ? this.handlePoint : this.handleIncorrect}  character={el}/></div>
              })}
              </div>
        </div>
    )
  }
}


export default QuizBoard;