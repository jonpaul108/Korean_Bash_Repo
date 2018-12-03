import React from 'react';

class GameBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test'
    }
  }


  render() {
    return (
      <div>
        gameboard
        <button onClick={this.props.handlePageChange}>Back to Learn</button>
      </div>
    )
  }
}

export default GameBoard;