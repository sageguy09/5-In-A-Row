/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
const ObjectId = mongoose.Types.ObjectId
/* 
 * model schema 
 */

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: "testuser"
  },
  password: {
    type: String,
    default: "testpass"
  },
  firstName: {
    type: String,
    default: "testFirst"
  },
  email: {
    type: String,
    default: "test@domain.com"
  },
  location: {
    type: String,
    default: 'Earth'
  },
  games: [
    {
      type: ObjectId,
      default: undefined
    }
  ]
})

/*
 * collection APIs
 */
const UserCollection = mongoose.model('Users', usersSchema)

/* Step 4
 * model functions
 */
function UserGetHelloWorldString() {
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
  UserGetHelloWorldString
}

