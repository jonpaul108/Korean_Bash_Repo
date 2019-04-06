import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/home.css';

const Home = (props) => {
  const {
    handleChangePage
  } = props;
  return (
    <div className={styles.wrapper}>
        <div className={styles.grid}>
            <header className={styles.box}>
              <h1>Korean_Bash</h1>
              <a>Stats</a>
              <a>About</a>
              <a value='learnPage' onClick={handleChangePage}>Learn</a>
              <a>Review</a>
          <div className={styles.profilePic}> <img className={styles.profileImage}></img></div>
            </header>
            <main className={styles.box}>
              <div className={styles.learn} value='learn_page' onClick={ () => {return handleChangePage('learn_page')}}>
                Learn
              </div>
              <div className={styles.review} value='review' onClick={ () => {return handleChangePage('review')}}>
                Review
              </div >
              <div value='vocab' onClick={ () => {return handleChangePage('vocab')}}>
                Vocab
              </div>
              <div value='alphabet' onClick={ () => {return handleChangePage('alphabet')}}>
                Alphabet
              </div>
            </main>
          <footer className={styles.box}> </footer>
          </div>
        </div>
  )
}

Home.propTypes = {
  handleChangePage: PropTypes.func,
}

export default Home;