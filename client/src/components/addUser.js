import React  from 'react';

export default class addUserForm extends React.Component {
    state = 
        { newUser: 
                {userName: "",
                password: "",
                firstName: "",
                email: "",
                location: ""
                //games: [{gameID: "5d83ea5a0fb61640b1698a7c"}]  
                }
        }
    handleTextInput = (evnt) => {
        //1. copy from state
        let newUser = {...this.state.newUser}
    
        //2. modify state
        newUser[evnt.target.name] = evnt.target.value
    
        //3. setState
        this.setState({ newUser })
      }
    
      handleSubmit = (evnt) => {
        evnt.preventDefault();
        console.log(this.state.newUser)
        this.addNewUser(this.state.newUser)
      }

      addNewUser = (newUser) => {
        fetch("/api/user/users/addUser", 
            {
                method: 'POST', 
                headers:{ 'Content-Type': 'application/json'},
                body: JSON.stringify(newUser) 
                }
            )
        }

    render()  {
        return (
        <div>
        <h1>Add User</h1>
            <form onSubmit={this.handleSubmit}>

                <input type="text" name="userName"
                onChange={this.handleTextInput} placeholder="Enter A UserName"/>

                <input type="text" name="password"
                onChange={this.handleTextInput} placeholder="create password"/>

                <input type="text" name="firstName"
                onChange={this.handleTextInput} placeholder="First Name"/>

                <input type="email" name="email"
                onChange={this.handleTextInput} placeholder="email address"/>

                <input type="text" name="location"
                onChange={this.handleTextInput} placeholder="City Name"/>
        
                <input type="submit" value="Add User" />
            </form>
        </div>
        )
    }
}



