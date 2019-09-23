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
  isAddUserActive: false
}

  componentDidMount   () {
    this.getAll()
}

getAll = () => {
    fetch('api/user/users')
    .then(res => res.json())
    .then((res) => {
        console.log('from getALL: ' + res)
        this.setState({ users: res})
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
        <Users /> 
        
        <CreateGame 
          allUsers={this.state.users}
          toggleAddUser={this.toggleAddUser}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <CardsLogic /> */}
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
