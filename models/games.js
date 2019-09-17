/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
const ObjectId = mongoose.Types.ObjectId
/* 
 * model schema 
 */

/*
const deckSchema = new mongoose.Schema({

})

const plyrHandsSchema = new mongoose.Schema({

})

const gameLogs = new mongoose.Schema({

})

const gameMessages = new mongoose.Schema({

})
*/

//define player hand
const handSchema = new mongoose.Schema ({
   cardOne: {
    type: ObjectId,
    default: undefined
  },
  cardTwo: {
    type: ObjectId,
    default: undefined
  },
  cardThree: {
    type: ObjectId,
    default: undefined
  },
  cardFour: {
    type: ObjectId,
    default: undefined
  },
  assignedPlyr: {
    type: ObjectId,
    default: undefined
  },
  assignedGame: {
    type: ObjectId,
    default: undefined
  }
})

//handSchema may need to be called on each insertMany
//call for each player being added. 

const gameSchema = new mongoose.Schema({
  gameName:  
  {
    type: String,
    default: "testGame"
  },
  playerOneHand: [handSchema],
  playerTwoHand: [handSchema],
  playerThreeHand: [handSchema],
  /*
  playerTwoHand: {
    type: ObjectId,
    default: "PlayerTwo"
  },
  playerThreeHand: {
    type: ObjectId,
    8default: "PlayerThree"
  },*/
  created_at: {
    type: Date, default: Date.now
  },
  updated_at: {
    type: Date, default: Date.now
  }
})


// Sets the created_at parameter equal to the current time
gameSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
      this.created_at = now
  }
  next();
});

/*
 * collection APIs
 */
const GameCollection = mongoose.model('Game', gameSchema)
const HandColleciton = mongoose.model('Hand', gameSchema)

/* Step 4
 * model functions
 */
function gameGetHelloWorldString() {
  return 'hello world'
}


const createGame = (name) => {
  return GameCollection.create({
       gameName: (name)
   })
}
const addPlayerHand = (gameId, playerId) => {
  HandColleciton.create({
    assignedPlyr: playerId,
    assignedGame: gameId
  })
}

const getAllGames = () => {
   return GameCollection.find();
   }
const getSingleGame = (gameId) => {
   return GameCollection.findById(gameId);
}

const updateGame = (gameId, game) => {
   return GameCollection.findByIdAndUpdate(gameId, game, {new:true});
} 

const addGame = (game) => {
   return GameCollection.insertMany(game);
}

const deleteGame = (gameId) => {
   return GameCollection.findByIdAndDelete(gameId);
}

/* Step 5
 * TODO: exportfunctions
 */
module.exports = {
  addGame,
  addPlayerHand,
  createGame,
  deleteGame,  
  getAllGames,
  getSingleGame,
  updateGame,
  gameGetHelloWorldString
}
