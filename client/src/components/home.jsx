import React from 'react';
import styles from '../css/home.css';

const Home = (props) => {
  return (
    <div classNameName={styles.wrapper}>
        <div classNameName={styles.grid}>
            <header className={styles.box}>
              <h1>Korean_Bash</h1>
              <a>Stats</a>
              <a>About</a>
              <a>Learn</a>
              <a>Review</a>
          <div className={styles.profilePic}> <img className={styles.profileImage}></img></div>
            </header>
            <main className={styles.box}>
              <div className={styles.learn}>
                Learn
              </div>
              <div className={styles.review}>
                Review
              </div>
              <div>
                Vocab
              </div>
              <div>
                Alphabet
              </div>
            </main>
          <footer className={styles.box}> </footer>
          </div>
        </div>
  )
}

export default Home;