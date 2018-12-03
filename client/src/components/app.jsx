import React from 'react';
import ConditionalRenderer from './conditionalRenderer.jsx';
import styles from '../css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'learn page'
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    let page = '';
    if (this.state.page === 'learn page') {
      page = 'gameboard';
    } else {
      page = 'learn page';
    }
    this.setState({
      page
    });
  }

  render() {
    const {
      page,
    } = this.state;
    const handlePageChange = this.handlePageChange;
    return (
      <div className={styles.container}>
        <ConditionalRenderer
          page={page}
          handlePageChange={handlePageChange}
          />
      </div>
    )
  }
}

export default App;