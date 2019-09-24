import React, {Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import CardsLogic from './components/gameLogic.js'
import Users from './components/users'
import User from './components/user'
import AddUserForm from './components/addUser'
import CreateGame from './components/createGame'




class App extends Component {
  render() {
    return ( 
      <Router>
        <Switch>
          <Route exactpath="/" component={CardsLogic} />
        </Switch>
      </Router>
    )
  }
}
export default App;
/*Ryan
<CardsLogic gameID="test" playerID="0" />
Allison
<CardsLogic gameID="test"  playerID="1" />*/
