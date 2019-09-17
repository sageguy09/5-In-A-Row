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

userRouter.get('/', (req, res) => {
  res.send(userApi.UserGetHelloWorldString())
})

/* Step 6
 * Export routers
 */
module.exports = {
  userApi
}
