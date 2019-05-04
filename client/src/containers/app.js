import { connect } from 'react-redux';
import App from '../components/app.jsx';
import changePage from '../actions/changePage';



const mapStateToProps = state => ({
  loggedIn: state.loggedIn.item,
});

const mapDispatchToProps = dispatch => {
  return {
    handleChangePage: (page) => {
      dispatch(changePage(page))
    }
  }
}

const VisualApp =  connect(mapStateToProps, mapDispatchToProps)(App);

export default VisualApp;
