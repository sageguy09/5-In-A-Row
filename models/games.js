/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
//const ObjectId = mongoose.Types.ObjectId
/* 
 * model schema 
 */

const gameSchema = new mongoose.Schema({
  gameName:  
  {
    type: String
  },
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
   return MessageCollection.insertMany(message);
}

const deleteGame = (gameId) => {
   return GameCollection.findByIdAndDelete(gameId);
}

/* Step 5
 * TODO: exportfunctions
 */
module.exports = {
  addGame,
  createGame,
  deleteGame,  
  getAllGames,
  getSingleGame,
  updateGame,
  gameGetHelloWorldString
}
