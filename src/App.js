import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
  render() {
    const map = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    return (
      <div className="h-100 ma3">
        <Board map={map} />
      </div>
    );
  }
}

export default App;
