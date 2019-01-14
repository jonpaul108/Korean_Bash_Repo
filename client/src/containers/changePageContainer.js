import {connect} from 'react-redux';
import ConditionalRenderer from '../components/conditionalRenderer';
import changePage from '../actions/changPage.js';

console.log('in change page container');
const mapStateToProps = (state) => ({
  page: state.page
});

const mapDispatchToProps = (dispatch) => ({
  handleNewUserRegistration: (page) => {
    dispatch(changePage(page));
  }
});

const changePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConditionalRenderer);

export default ChangePageContainer;
