import {connect} from 'react-redux';
import ConditionalRenderer from '../components/conditionalRenderer.jsx';
import changePage from '../actions/changePage';

console.log('in change page container');
const mapStateToProps = (state) => ({
  page: state.page
});

const mapDispatchToProps = (dispatch) => ({
  handleNewUserRegistration: (page) => {
    dispatch(changePage(page));
  }
});

const ChangePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConditionalRenderer);

export default ChangePageContainer;
