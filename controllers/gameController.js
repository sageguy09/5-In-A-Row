/* Step 1 import express
 */
const express = require('express')

/* Step 2
 * Import the api files from the models
 */
const gameLogApi = require('../models/gamelog.js')
const messagesApi = require('../models/messages.js')

/* Step 3 
 * Routers
 */
const gameRouter = express.Router()

/* Step 4
 * Request handlers
 */

gameRouter.get('/gameloghello', (req, res) => {
  res.send(gameLogApi.logMsgGetHelloWorldString())
})

gameRouter.get('/messagehello', (req, res) => {
  res.send(messagesApi.messageGetHelloWorldString())
})

/* Step 6
 * Export routers
 */
module.exports = {
  gameRouter
}
