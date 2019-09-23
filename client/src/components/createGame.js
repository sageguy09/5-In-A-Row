import React, { Component } from 'react';

class gameCreate extends React.Component {


    render()  {
        return (
        <div>
            <h1>Create Game</h1>
            <select name="users" id="userSelect" default="select player">
            <option value="none" selected disabled hidden>Select a User</option>
            <option value="player_1">Player 1</option>
            <option value="player_2">Player 2</option>
            </select>
            {/* {userListing(this.state.users)}
            {this.state.users.map(users => (
                userComp(users)
            ))} */}
        </div>
        )
    }
}

export default gameCreate;

