/* Step 1 import express
 */
const express = require('express')

/* Step 2
 * Import the api files from the models
 */
const gameLogApi = require('../models/gamelogs.js')
const messagesApi = require('../models/messages.js')
const gameApi = require('../models/games.js')
const deckApi = require('../models/decks.js')
const cardsApi = require('../models/cards.js')
/* Step 3 
 * Routers
 */
const gameRouter = express.Router()

/* Step 4
 * Request handlers
 */

///////////////hello world tests///////////////
gameRouter.get('/gamehello', (req, res) => {
  res.send(gameApi.gameGetHelloWorldString())
})


gameRouter.get('/gameloghello', (req, res) => {
  res.send(gameLogApi.logMsgGetHelloWorldString())
})

gameRouter.get('/messagehello', (req, res) => {
  res.send(messagesApi.messageGetHelloWorldString())
})

gameRouter.post('/card/:deckId', (req, res) => {
  console.log('asdf')
  cardsApi.addMultipleCards(req.params.deckId).then(cards => {
    res.send({cards})
  })
})

///////////////nested game handlers///////////////
gameRouter.post('/:userId/addGameCol', (req, res) => {
  gameApi.createGame(req.params.userId, req.body).then(newGame => {
    deckApi.createDeck(newGame._id).then(newDeck =>{
      cardsApi.createCardCollection(newGame._id, newDeck._id).then(newCards => {
      res.send({newGame}, {newDeck}, {newCards})
      })
    })
  })
})

gameRouter.post('/:userId/addGameColCards', (req, res) => {
  gameApi.createGame(req.params.userId, req.body).then(newGame => {
    deckApi.createDeck(newGame._id).then(newDeck =>{
      cardsApi.addMultipleCards(newGame._id, newDeck._id).then(newCards => {
      res.send({newGame}, {newDeck}, {newCards})
      })
    })
  })
})


//get all games
gameRouter.get('/games', (req, res) => {
  gameApi.getAllGames().then(games => {
      res.send(games)
  })
})
//get single game
gameRouter.get('/game/:gameId', (req, res) => {
  gameApi.getSingleGame(req.params.gameId).then(game => {
      res.send(game)
  })
})

//use createGame to create a game without body params. 
gameRouter.post('/games/addGame', (req, res) => {
  gameApi.addGame(req.body).then(newGame => {
  res.send(newGame)
  })
})

//update a game
gameRouter.put('/game/:gameId', (req,res) => {
  gameApi.updateGame(req.params.gameId, req.body).then(game => {
      res.send(game)
  })
})
//delete a game
gameRouter.delete('/game/:gameId', (req, res) => {
  gameApi.deleteGame(req.params.gameId).then(deletedGame => {
      res.send(deletedGame)
  })
})

///////////////deck handlers///////////////
gameRouter.post('/deck/:gameId', (req,res) => {
  deckApi.createDeck(req.params.gameId).then(newDeck => {
    res.send(newDeck)
  })
})



///////////////messages handlers///////////////
//get all messages
gameRouter.get('/messages', (req, res) => {
  messagesApi.getAllMessages().then(messages => {
      res.send(messages)
  })
})
//get single message
gameRouter.get('/message/:messageId', (req, res) => {
  messagesApi.getSingleMessage(req.params.messageId).then(message => {
      res.send(message)
  })
})

//use createMessage to create a message without body params. 
gameRouter.post('/messages/addMessage', (req, res) => {
  messagesApi.addMessage(req.body).then(newMessage => {
  res.send(newMessage)
  })
})

//update a message
gameRouter.put('/message/:messageId', (req,res) => {
  messagesApi.updateMessage(req.params.messageId, req.body).then(message => {
      res.send(message)
  })
})
//delete a message
gameRouter.delete('/message/:messageId', (req, res) => {
  messagesApi.deleteMessage(req.params.messageId).then(deletedMessage => {
      res.send(deletedMessage)
  })
})

///////////////Game Log Message handlers///////////////
//get all log messages
gameRouter.get('/logmsgs', (req, res) => {
  gameLogApi.getAllLogMsgs().then(logMsgs => {
      res.send(logMsgs)
  })
})
//get single log message
gameRouter.get('/logmsg/:logMsgId', (req, res) => {
  gameLogApi.getSingleLogMsg(req.params.logMsgId).then(logMsg => {
      res.send(logMsg)
  })
})

//use createLogMsg to create a log message without body params. 
gameRouter.post('/logmsgs/addLogMsg', (req, res) => {
  gameLogApi.addLogMsg(req.body).then(newLogMsg => {
  res.send(newLogMsg)
  })
})

//update a log message
gameRouter.put('/logmsg/:logMsgId', (req,res) => {
  gameLogApi.updateLogMsg(req.params.logMsgId, req.body).then(logMsg => {
      res.send(logMsg)
  })
})
//delete a log message
gameRouter.delete('/logmsg/:logMsgId', (req, res) => {
  gameLogApi.deleteLogMsg(req.params.logMsgId).then(deletedLogMsg => {
      res.send(deletedLogMsg)
  })
})


/* Step 6
 * Export routers
 */
module.exports = {
  gameRouter
}
