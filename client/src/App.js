import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicGame from './components/game.js'
import CardsLogic from './components/cardLogic'

class App extends Component {
  render () {
    return (
      <div>
        {/* <TicGame /> */}
        <CardsLogic />
      </div>
    )
  }
}
export default App;
