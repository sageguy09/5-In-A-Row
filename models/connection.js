/* Import the mongoose module
 *
 */
const mongoose = require('mongoose');

/* Step 1.
 * set db name for mongoose/mongo
 */
const connectionString = process.env.MONGODB_URI || "mongodb://localhost/fir_game_db";


/* Step 2
 *
 * Open up a connection to the mongo database.
 *
 * NOTE: newUrlParser diables a deprecation warning
 */
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


/* 
 * Export the mongoose object.
 */
module.exports = mongoose
