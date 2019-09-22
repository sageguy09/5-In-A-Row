import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardsLogic from './components/gameLogic'

class App extends Component {
  render () {
    return (
      <div>
        <CardsLogic />
      </div>
    )
  }
}
export default App;
