import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardsLogic from './components/gameLogic.js'
import Users from './components/users'
import User from './components/user'
import AddUserForm from './components/addUser'
import CreateGame from './components/createGame'
class App extends Component {
  render () {
    return (
      <div>
        <Users /> 
        <User />
        <AddUserForm/> 
        <CreateGame />
        {/* <CardsLogic /> */}

      </div>
    )
  }
}
export default App;
/*Ryan
<CardsLogic gameID="test" playerID="0" />
Allison
<CardsLogic gameID="test"  playerID="1" />*/
