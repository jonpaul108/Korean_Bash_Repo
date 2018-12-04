import React from 'react';
import QuizPiece from './quizPiece.jsx';
import styles from '../css/quizBoard.css';
import axios from 'axios';
import utils from '../utils/utils.js';

class QuizBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test',
      score: 0,
      win: 'undecided',
      time: 10,
      quizPieces: ['ㅏ', 'ㅗ', 'ㅓ'],
      currentPiece: 'ㅏ',
      chances: 2
    }
    this.handlePoint = this.handlePoint.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
  }
  componentDidMount() {
    const characters = utils.randomPieces(this.state.quizPieces);
    const currentPiece = characters[1];
    const quizPieces = characters[0];
    this.setState({
      currentPiece,
      quizPieces
    });
  }

  handlePoint(event) {
    const score = this.state.score + 1;
    if (score < 10) {
      this.setState({
        score
      });
    } else {
      this.setState({
        score,
        win: true
      })
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
      chances
    } = this.state;
    let point = false;
    if (win === true) {
      return (<div>You won! <div>
        <button onClick={this.props.handlePageChange}>Back to Learn</button>
      </div></div>);
    } else if (win === false) {
      return (<div>
        Too many errors.
        <div>
          <button onClick={this.props.handlePageChange}>Back to Learn</button>
        </div>
      </div>);
    }
    return (
      <div className={styles.quizPage}>
        <div>Quiz</div>
          <div>
            <button onClick={this.props.handlePageChange}>Back to Learn</button>
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