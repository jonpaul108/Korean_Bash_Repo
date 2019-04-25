import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/home.css';

const Home = (props) => {
  const {
    handleChangePage,
    page,
    user,
    points,
    language,
    userPic,
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
              <div className={styles.profileContainer}>
                <div className={styles.profilePic}> <img src={userPic} alt='profilePic' className={styles.profileImage}></img></div>
                <p>{user}</p>
              </div>
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
            <aside>
              <div>Next up:
                <div>{ language.map((el) => {
                    return(el.korean)
                  })
                }</div>
              </div>
              <div>Ready for Review</div>
            </aside>
          <footer className={styles.box}> </footer>
          </div>
        </div>
  )
}

Home.propTypes = {
  handleChangePage: PropTypes.func,
  page: PropTypes.string,
  user: PropTypes.string,
  points: PropTypes.number,
  language: PropTypes.array,
  userPic: PropTypes.string,
}

export default Home;