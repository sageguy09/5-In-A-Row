import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import CardsLogic from './components/gameLogic.js'
import Users from './components/users'

class App extends Component {
  render () {
    return (
      <div>
        <Users />
        {/* <CardsLogic /> */}
      </div>
    )
  }
}
export default App;
