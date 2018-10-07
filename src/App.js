import React, { Component } from 'react';
import './App.css';
import Heatmap from './components/Heatmap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heatmap isMarkerShown />
      </div>
    );
  }
}

export default App;
