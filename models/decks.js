/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
const ObjectId = mongoose.Types.ObjectId
/* 
 * model schema 
 */


const deckSchema = new mongoose.Schema({
  created_at: {
    type: Date, default: Date.now
  },
  updated_at: {
    type: Date, default: Date.now
  },
  gameId: {
    type: ObjectId,
    default: undefined
  }
})


// Sets the created_at parameter equal to the current time
deckSchema.pre('save', function(next){
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
const deckCollection = mongoose.model('Deck', deckSchema)


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
//////////Deck Model Functions//////////
const getAllDecks = () => {
   return DeckCollection.find();
   }
const getSingleDeck = (deckId) => {
   return DeckCollection.findById(deckId);
}

const updateDeck = (deckId, deck) => {
   return DeckCollection.findByIdAndUpdate(deckId, deck, {new:true});
} 

const addDeck = (deck) => {
   return DeckCollection.insertMany(deck);
}

const deleteDeck = (deckId) => {
   return DeckCollection.findByIdAndDelete(deckId);
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
