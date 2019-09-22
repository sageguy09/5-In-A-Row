import React, { Component } from 'react';


const userComp = (userObj) => {
    return (<div>
        <h2> { userObj.userName }</h2>
        <ul>
            <li>{userObj.password}</li>
            <li>{userObj.firstName}</li>
            <li>{userObj.email}</li>
            <li>{userObj.location}</li>
        </ul>
        </div>
    )
}
/*
const userdiv = ({name, assignments}) => (
    <div>
      <h3>{name}</h3>
      {courseAverage(assignments)}
      {assignmentList(assignments)}
    </div>
  )*/
const getAllUsers = () =>
    fetch('api/user/users')
    .then(res => res.json())
    .catch(() => [])



const getFirstUser = () =>
    getAllUsers().then(usr => usr.length < 1 ? { 
        userName: "naUser", 
        password: "naPass", 
        firstName: "naName", 
        email: "naEmail", 
        location: "naLocation"} : usr[0])
class usersList extends React.Component {
    state = 
       { users: 
            {userName: "testUserState",
            password: "testPassState",
            firstName: "testNameState",
            email: "testemailState",
            location: "testLocState"
            //games: [{gameID: "5d83ea5a0fb61640b1698a7c"}]  
            }
        }
    
    componentDidMount() {
        this.getUsersFromServer();
    }

    getUsersFromServer = () => {
        fetch('api/user/users')
            .then(res => res.json())
            .then ( users => {
                //console.log(users);
                //this.setListOfUsers(users)
                this.getUsers()
            })
        }
        //this line is no longer working...
        setListOfUsers = (users) => {
            let userList = {...this.state.users}
            console.log(userList)
            userList.users = users
            console.log(users)
            this.setState({ users: {...userList.users} })
        }
        //this line is just returngin the first user
        getUsers() {
            getFirstUser()
                .then(user => {
                    this.setState({ users: {...user}})
                })
        }




    //         {
    //             console.log(listOfUsers)
    //             this.setListOfUsers(listOfUsers)
    //         })
    // }

    /*

      getUsersFromServer() {
        fetch('api/fir/user/users')
            .then(listOfUsers => {
                console.log(listOfUsers)
                this.setListOfUsers(listOfUsers)
            })
    }
   

    
    }*/
/*

    getUsersFromServer = () => {
        fetch('api/fir/user/users')
        .then(res => res.json()) //converts from jso string to js object
                                //e.g: "{messages: ["message
        .then(listOfMessages => {
            this.setMessageList(listOfMessages)
        })
    }*/

    render()  {
        return (
        <div>
            <h1>message list h1</h1>
            {userComp(this.state.users)}
        </div>
        )
    }
}

export default usersList;



