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
    type: String
  },
  created_at: {
    type: Date, default: Date.now
  }
  
})


// Sets the created_at parameter equal to the current time
user.pre('save', function(next){
  now = new Date();
  this.created_at = now
  next();
});

/*
 * collection APIs
 */
const MsgLogCollection = mongoose.model('Logs',  gamelogSchema)

/* Step 4
 * model functions
 */
function logMsgGetHelloWorldString() {
  return 'hello world'
}


const createLogMsg = (logMsg) => {
  return MsgLogCollecion.create({
       logTxt: (logMsg)
   })
}


const getAllLogMsgs = () => {
   return MsgLogCollection.find();
   }
const getSingleLogMsg = (msgLogId) => {
   return MsgLogCollection.findById(msgLogId);
}

const updateLogMsg = (msgLogId, logMsg) => {
   return MsgLogCollection.findByIdAndUpdate(msgLogId, logMsg, {new:true});
} 

const addLogMsg = (logMsg) => {
   return MsgLogCollection.insertMany(logMsg);
}

const deleteLogMsg = (msgLogId) => {
   return MsgLogCollection.findByIdAndDelete(msgLogId);
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
