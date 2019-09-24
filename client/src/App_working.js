import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardsLogic from './components/gameLogic.js'
import Users from './components/users'
import User from './components/user'
import AddUserForm from './components/addUser'
import CreateGame from './components/createGame'




class App extends Component {
  state = 
{ users: [],
  colors: [],
  isAddUserActive: false
}

  componentDidMount   () {
    this.getAll()
    this.getColors()
}

getAll = () => {
    fetch('api/user/users')
    .then(res => res.json())
    .then((res) => {
        //console.log('from getALL: ' + res)
        this.setState({ users: res})
    })
}
getColors = () => {
  fetch('api/fir/colors/')
  .then(res => res.json())
  .then((res) => {
      console.log('from getAllColors: ' + res)
      this.setState({ colors: res})
  })
}
toggleAddUser = () => {
  this.setState((state) => {
      return {isAddUserActive : !state.isAddUserActive}
  })
}


  render () {
    return (
      <div>
        <CreateGame 
          allUsers={this.state.users}
          allColors={this.state.colors}
          toggleAddUser={this.toggleAddUser}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        { this.state.isAddUserActive ? <AddUserForm/> : null }
        Ryan
        <CardsLogic gameID="test" playerID="0" />
        Allison
        <CardsLogic gameID="test"  playerID="1" />
        </div>
    )
  }
}
export default App;
/*Ryan
<CardsLogic gameID="test" playerID="0" />
Allison
<CardsLogic gameID="test"  playerID="1" />*/
