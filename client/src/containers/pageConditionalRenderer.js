import { connect } from 'react-redux';
import ConditionalRenderer from '../components/conditionalRenderer.jsx';
import changePage from '../actions/changePage';



const mapStateToProps = state => ({
  page: state.page.item
});

const mapDispatchToProps = (dispatch) => {
  return {
    handlePageChange: (e) => {
      const page = e.target.value;
      dispatch(changePage(page));
    }
  }
}

const VisualConditionalRenderer = connect(mapStateToProps, mapDispatchToProps)(ConditionalRenderer);

export default VisualConditionalRenderer;
