/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
const ObjectId = mongoose.Types.ObjectId
/* 
 * model schema 
 */


const gameSchema = new mongoose.Schema({
  gameName:  
  {
    type: String,
    default: "testGame"
  },
  createdAt: {
    type: Date, default: Date.now
  },

  createdBy: {
    type: ObjectId
  }
})

/*
// Sets the created_at parameter equal to the current time
gameSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
      this.created_at = now
  }
  next();
});
*/

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


const createGame = (userId, name) => {
  return GameCollection.create({
       gameName: name.gameName,
       createdBy: userId
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
