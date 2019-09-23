import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import CardsLogic from './components/gameLogic.js'
import Users from './components/users'
import User from './components/user'
class App extends Component {
  render () {
    return (
      <div>
        <Users />
        <User />
        {/* <CardsLogic /> */}
      </div>
    )
  }
}
export default App;
