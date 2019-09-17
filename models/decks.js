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
  gameId: {
    type: ObjectId,
    default: undefined
  }
})


// Sets the created_at parameter equal to the current time
deckSchema.pre('save', function(next){
  now = new Date();
    this.created_at = now
});

/*
 * collection API
 */
const deckCollection = mongoose.model('Deck', deckSchema)


/* Step 4
 * model functions
 */
function deckGetHelloWorldString() {
  return 'hello world'
}

const createDeck = (gameId) => {
  return deckCollection.create({
       gameId: (gameId._id)
   })
}
//////////Deck Model Functions//////////
const getAllDecks = () => {
   return DeckCollection.find();
   }
const getSingleDeck = (deckId) => {
   return DeckCollection.findById(deckId);
}

const deleteDeck = (deckId) => {
   return DeckCollection.findByIdAndDelete(deckId);
}


/* Step 5
 * exportfunctions
 */
module.exports = {
  deckGetHelloWorldString,
  createDeck,
  deleteDeck,
  getSingleDeck,
  getAllDecks
}
