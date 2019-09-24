import React, {Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css';
import {Link} from 'react-router-dom'
import CardsLogic from './components/gameLogic'
import CreateGame from './components/createGame'
class App extends Component {

  state = 
  { users: [],
    colors: []
    //isAddUserActive: false
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

  render() {
    const CreateGameComponent = () => (<CreateGame 
      allUsers={this.state.users}
      allColors={this.state.colors}
    />)
    return ( 
      <Router>
      <div>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" render={CreateGameComponent}/>
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
