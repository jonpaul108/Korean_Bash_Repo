import { connect } from 'react-redux';
import Home from '../components/home.jsx';
import changePage from '../actions/changePage';

const mapStateToProps = state => ({
  page: state.page.item
});

const mapDispatchToProps = (dispatch) => ({
  handleChangePage: e => {
    const page = e.target.value;
    dispatch(changePage(page));
  }
});

const VisualHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default VisualHome;
