/* Step 1 import express
 */
const express = require('express')

/* Step 2
 * Import the api files from the models
 */
const templateApi = require('../models/template.js')

/* Step 3 
 * Routers
 */
const templateRouter = express.Router()

/* Step 4
 * Request handlers
 */

templateRouter.get('/', (req, res) => {
  res.send(templateApi.getHelloWorldString())
})

/* Step 6
 * Export routers
 */
module.exports = {
  templateRouter
}
