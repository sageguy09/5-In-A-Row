import React, { Component } from 'react';
//import { users } from './users';


// const userOption = (selectedUserId) => ({userName, _id}) => (
//     <option value = {_id} select={selectedUserId === _id}>{userName}</option>
// )
// const usersDropDown = (users, selectedUserId, onChange) => (
//     <select name="userId" onChange={onChange} >
//         {users.map(userOption(selectedUserId))}
//     </select>
//     )
class gameCreate extends React.Component {
    componentDidMount() {

        console.log(this.props.allUsers)
    }

    render()  {
        return (
        <div>
            <h1>Create Game</h1>

            <form action="#" id="createGame">
                Game Name: <input type="text" name="gameName"></input>
                {/* {usersDropDown(this.users, this.props.userName, this.props.handTextInput)} */}
            </form>
            Select Player 1: 
            <select name="users" form="createGame" id="userSelect" default="select player">
                {this.props.allUsers.map(user => (
                    <option value={user._id}>{user.userName}</option>
                ))
                }
            </select>
            <br/>
            Select Player 2:
            <select name="users" form="createGame" id="userSelect" default="select player">
                {this.props.allUsers.map(user => (
                    <option value={user._id}>{user.userName}</option>
                ))
                }
            </select>
            <br/>
            
            
            {/* <option value="none" selected disabled hidden>Select a User</option>
            <option value="player_1">Player 1</option>
            <option value="player_2">Player 2</option> */}
            {/* Select Player 2: <select name="users" form="createGame" id="userSelect" default="select player">
            <option value="none" selected disabled hidden>Select a User</option>
            <option value="player_1">Player 1</option>
            <option value="player_2">Player 2</option>
            </select> */}
            
            <br />
            <input type="submit" form="createGame" value="Create Game" />
            <br />
            <button onClick={this.props.toggleAddUser} >Add a player to the database</button>
            <br />
            <br />
            <br />

            
            
            {/* {userListing(this.state.users)}
            {this.state.users.map(users => (
                userComp(users)
            ))} 
            */}
        </div>
        )
    }
}

export default gameCreate;

