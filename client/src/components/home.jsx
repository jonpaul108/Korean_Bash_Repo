import React from 'react';
import {
  NavLink,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../css/home.css';

const Home = (props) => {
  const {
    handleChangePage,
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
              <NavLink to='/Stats'>Stats</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/learn'>Learn</NavLink>
              <NavLink to='/review'>Review</NavLink>
              <div className={styles.profileContainer}>
                <div className={styles.profilePic}> <img src={userPic} alt='profilePic' className={styles.profileImage}></img></div>
                <p>{user}</p>
              </div>
            </header>
            <main className={styles.box}>
              <Link to='/learn'>
                <div className={styles.learn} value='learn_page' onClick={ () => {return handleChangePage('learn_page')}}>
                  Learn
                </div>
              </Link>
              <Link to='/review'>
                <div className={styles.review}>
                  Review
                </div >
              </Link>
              <Link to='/vocab'>
                <div>
                  Vocab
                </div>
              </Link>
              <Link to='/alphabet'>
                <div>
                  Alphabet
                </div>
              </Link>
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
  page: PropTypes.string,
  user: PropTypes.string,
  points: PropTypes.number,
  language: PropTypes.array,
  userPic: PropTypes.string,
}

export default Home;