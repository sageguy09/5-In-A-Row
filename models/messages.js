/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
const ObjectId = mongoose.Types.ObjectId
/* 
 * model schema 
 */

const messageSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    default: undefined
  },
  gameId: {
    type: ObjectId,
    default: undefined
  },
  msgTxt:  
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
user.pre('save', function(next){
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
const MessageCollection = mongoose.model('Messages', messageSchema)

/* Step 4
 * model functions
 */
function MmssageGetHelloWorldString() {
  return 'hello world'
}


const createMessage = (message) => {
  return MessageCollection.create({
       msgTxt: (message)
   })
}


const getAllMessages = () => {
   return MessageCollection.find();
   }
const getSingleMessage = (messageId) => {
   return MessageCollection.findById(messageId);
}

const updateMessage = (messageId, message) => {
   return MessageCollection.findByIdAndUpdate(messageId, message, {new:true});
} 

const addMessage = (message) => {
   return MessageCollection.insertMany(message);
}

const deleteMessage = (messageId) => {
   return MessageCollection.findByIdAndDelete(messageId);
}

/* Step 5
 * TODO: exportfunctions
 */
module.exports = {
  addMessage,
  createMessage,
  deleteMessage,  
  getAllMessages,
  getSingleMessage,
  updateMessage,
  messageGetHelloWorldString
}
