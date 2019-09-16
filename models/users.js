/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')

/* 
 * model schema 
 */

const usersSchema = new mongoose.Schema({
  userName: {
    type: String
  },
  password: {
    type: String
  },
  firstName: {
    type: String
  },
  email: {
    type: String
  },
  location: {
    type: String
  }
})

/*
 * collection APIs
 */
const UserCollection = mongoose.model('Users', usersSchema)

/* Step 4
 * model functions
 */
function getHelloWorldString() {
  return 'hello world'
}


const createUser = (user) => {
  return UserCollection.create({
       userName: (name)
   })
}


const getAllUsers = () => {
   return UserCollection.find();
   }
const getSingleUser = (userId) => {
   return UserCollection.findById(userId);
}

const updateUser = (userId, user) => {
   return UserCollection.findByIdAndUpdate(userId, user, {new:true});
} 

const addUser = (user) => {
   return UserCollection.insertMany(user);
}

const deleteUser = (userId) => {
   return UserCollection.findByIdAndDelete(userId);
}

/* Step 5
 * TODO: exportfunctions
 */
module.exports = {
  addUser,
  createUser,
  deleteUser,  
  getAllUsers,
  getSingleUser,
  updateUser,
  getHelloWorldString
}
