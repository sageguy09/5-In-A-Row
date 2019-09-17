/* Step 1 import express
 */
const express = require('express')

/* Step 2
 * Import the api files from the models
 */
const gameLogApi = require('../models/gamelogs.js')
const messagesApi = require('../models/messages.js')
const gameApi = require('../models/games.js')
/* Step 3 
 * Routers
 */
const gameRouter = express.Router()

/* Step 4
 * Request handlers
 */


gameRouter.get('/gamehello', (req, res) => {
  res.send(gameApi.gameGetHelloWorldString())
})


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
