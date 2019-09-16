/* Step 1
 *import mongoose connection
 */

//const mongoose = require('./connection.js')

/* Step 2
 * create model schema 
 */

//const SampleModelSchema = new mongoose.Schema({
//  name: String
//})

/* Step 3
 * create collection API
 */
//const SampleCollection = mongoose.model('Sample', SampleModelSchema)

/* Step 4
 * model functions
 */
function getHelloWorldString() {
  return 'hello world'
}

/* Step 5
 * TODO: exportfunctions
 */
module.exports = {
  getHelloWorldString
}
