/* Step 1 import express
 */
const express = require('express')

/* Step 2
 * Import the api files from the models
 */
const userApi = require('../models/users.js')
/* Step 3 
 * Routers
 */
const userRouter = express.Router()

/* Step 4
 * Request handlers
 */
///////////////hello world tests///////////////
userRouter.get('/userhello', (req, res) => {
  res.send(userApi.UserGetHelloWorldString())
})

///////////////users handlers///////////////
//get all users
userRouter.get('/users', (req, res) => {
  userApi.getAllUsers().then(users => {
      res.send(users)
  })
})
//get single user
userRouter.get('/user/:userId', (req, res) => {
  userApi.getSingleUser(req.params.userId).then(user => {
      res.send(user)
  })
})

//use createUser to create a user without body params. 
userRouter.post('/users/addUser', (req, res) => {
  userApi.addUser(req.body).then(newUser => {
  res.send(newUser)
  })
})

//update a user
userRouter.put('/user/:userId', (req,res) => {
  userApi.updateUser(req.params.userId, req.body).then(user => {
      res.send(user)
  })
})
//delete a user
userRouter.delete('/user/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId).then(deletedUser => {
      res.send(deletedUser)
  })
})

/* Step 6
 * Export routers
 */
module.exports = {
  userRouter
}
