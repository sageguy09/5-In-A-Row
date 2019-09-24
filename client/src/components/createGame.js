import React, { Component } from 'react';

class gameCreate extends React.Component {

    state = 
    { newGame: 
            {gameName: "",
            player_0: "",
            player_1: ""
            }
    }
handleTextInput = (evnt) => {
    //1. copy from state
    let newGame = {...this.state.newGame}

    //2. modify state
    newGame[evnt.target.name] = evnt.target.value

    //3. setState
    this.setState({ newGame })
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault();
    console.log(this.state.newGame)
    this.addNewGame(this.state.newGame)
  }

  addNewGame = (newGame) => {
    fetch("/api/fir/games/addGame", 
        {
            method: 'POST', 
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(newGame) 
            }
        )
    }


    // this was a test to check allUsers
    //componentDidMount() {

    //     console.log(this.props.allUsers)
    // }

    render()  {
        return (
        <div>
            <h1>Create Game</h1>

            <form  onSubmit={this.handleSubmit}>
                Game Name: <input type="text"onChange={this.handleTextInput} name="gameName"></input>
                <br/>
            Select Player 1: 
            <select onChange={this.handleTextInput} name="player_0">
            <option value="none" selected disabled hidden>Select a User</option>
                {this.props.allUsers.map(user => (
                    <option value={user.userName}>{user.userName}</option>
                ))
                }
            </select>
            <br/>
            Select Player 2:
            <select onChange={this.handleTextInput} name="player_1">
                <option value="none" selected disabled hidden>Select a User</option>
                {this.props.allUsers.map(user => (
                    <option value={user.userName}>{user.userName}</option>
                ))
                }
            </select>
            <input type="submit"  value="Create Game" />
            </form>
            <br/>
            <button onClick={this.props.toggleAddUser} >Add a player to the database</button>
            <br />
        </div>
        )
    }
}

export default gameCreate;

 /* <option value="none" selected disabled hidden>Select a User</option>
            <option value="player_1">Player 1</option>
            <option value="player_2">Player 2</option> */
            /* Select Player 2: <select name="users" form="createGame" id="userSelect" default="select player">
            <option value="none" selected disabled hidden>Select a User</option>
            <option value="player_1">Player 1</option>
            <option value="player_2">Player 2</option>
            </select> 
            
                        {/* {userListing(this.state.users)}
            {this.state.users.map(users => (
                userComp(users)
            ))} 


            form="createGameForm"
            */