import { connect } from 'react-redux';
import Home from '../components/home.jsx';
import changePage from '../actions/changePage';

const mapStateToProps = state => ({
  page: state.page.item,
  user: state.currUsername.item,
  points: state.userData.number,
  language: state.userData.item,
  userPic: state.userData.pic,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangePage: page => {
    dispatch(changePage(page));
  }
});

const VisualHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default VisualHome;
