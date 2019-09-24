import React, {Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css';
import {Link} from 'react-router-dom'
import CardsLogic from './components/gameLogic'

class App extends Component {
  render() {
    return ( 
      <Router>
      <div>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={CardsLogic}/>
      </div>
       
      </Router>

    )
  }
}
export default App;
/*Ryan
<CardsLogic gameID="test" playerID="0" />
Allison
<CardsLogic gameID="test"  playerID="1" />*/
