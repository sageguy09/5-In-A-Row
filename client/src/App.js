import React, {Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import {Link} from 'react-router-dom'
import TwoPlayerLocal from './components/twoPlayerLocal'
import ServerMultiplayer from './components/serverMultiplayer'
//import Lobby from './components/lobby/lobby'
class App extends Component {


  render() {
    return ( 
      <div>
        <ServerMultiplayer />
      </div>
    )
  }
}
export default App;