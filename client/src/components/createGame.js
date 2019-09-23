import React, { Component } from 'react';

class gameCreate extends React.Component {


    render()  {
        return (
        <div>
            <h1>Create Game</h1>

            <form action="#" id="createGame">
                Game Name: <input type="text" name="gameName"></input>
            </form>
            Select Player 1: <select name="users" form="createGame" id="userSelect" default="select player">
            <option value="none" selected disabled hidden>Select a User</option>
            <option value="player_1">Player 1</option>
            <option value="player_2">Player 2</option>
            </select>
            <br/>
            Select Player 2: <select name="users" form="createGame" id="userSelect" default="select player">
            <option value="none" selected disabled hidden>Select a User</option>
            <option value="player_1">Player 1</option>
            <option value="player_2">Player 2</option>
            </select>
            <br />
            <input type="submit" form="creaetGame" value="Create Game" />
            <br />
            <button>Add a player to the database</button>
            {/* {userListing(this.state.users)}
            {this.state.users.map(users => (
                userComp(users)
            ))} */}
        </div>
        )
    }
}

export default gameCreate;

