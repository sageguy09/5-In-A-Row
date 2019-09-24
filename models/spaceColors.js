/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
/* 
 * model schema 
 */

const colorsSchema = new mongoose.Schema({
  colorName: {
    type: String,
    default: undefined
  },
  colorCode: {
    type: String,
    default: undefined
  }
})

/*
 * collection APIs
 */
const ColorsCollection = mongoose.model('SpaceColors', colorsSchema)

/* Step 4
 * model functions
 */

const getAllColors = () => {
   return ColorsCollection.find();
   }
const getSingleColor = (messageId) => {
   return ColorsCollection.findById(messageId);
}

const updateColor = (colorId, color) => {
   return ColorsCollection.findByIdAndUpdate(colorId, color, {new:true});
} 

const addColor = (color) => {
   return ColorsCollection.insertMany(color);
}

const deleteColor = (colorId) => {
   return ColorsCollection.findByIdAndDelete(colorId);
}

/* Step 5
 * TODO: exportfunctions
 */
module.exports = {
  addColor,
  deleteColor,
  getSingleColor,  
  getAllColors,
  updateColor
}
