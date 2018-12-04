import React from 'react';
import styles from '../css/quizPiece.css';

const QuizPiece = (props) => {

    return (
      <div className={styles.quizPiece} >
          <button className={styles.quizPiece} onClick={props.handleOnClick}>{props.character}</button>
      </div>
    )

}

export default QuizPiece;
