import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicGame from './components/game.js'


class App extends Component {
  render () {
    return (
      <div>
        <TicGame />
      </div>
    )
  }
}
export default App;
