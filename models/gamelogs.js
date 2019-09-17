/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
const ObjectId = mongoose.Types.ObjectId
/* 
 * model schema 
 */

const gamelogSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    default: undefined
  },
  gameId: {
    type: ObjectId,
    default: undefined
  },
  logTxt:  
  {
    type: String,
    default: "testLogMsg"
  },
  created_at: {
    type: Date, default: Date.now
  }
})


// Sets the created_at parameter equal to the current time
gamelogSchema.pre('save', function(next){
  now = new Date();
  this.created_at = now
  next();
});

/*
 * collection APIs
 */
const LogMsgCollection = mongoose.model('Logs',  gamelogSchema)

/* Step 4
 * model functions
 */
function logMsgGetHelloWorldString() {
  return 'hello world'
}


const createLogMsg = (logMsg) => {
  return LogMsgCollection.create({
       logTxt: (logMsg)
   })
}


const getAllLogMsgs = () => {
   return LogMsgCollection.find();
   }
const getSingleLogMsg = (logMsgId) => {
   return LogMsgCollection.findById(logMsgId);
}

const updateLogMsg = (logMsgId, logMsg) => {
   return LogMsgCollection.findByIdAndUpdate(logMsgId, logMsg, {new:true});
} 

const addLogMsg = (logMsg) => {
   return LogMsgCollection.insertMany(logMsg);
}

const deleteLogMsg = (logMsgId) => {
   return LogMsgCollection.findByIdAndDelete(logMsgId);
}

/* Step 5
 * exportfunctions
 */
module.exports = {
  addLogMsg,
  createLogMsg,
  deleteLogMsg,  
  getAllLogMsgs,
  getSingleLogMsg,
  updateLogMsg,
  logMsgGetHelloWorldString
}
