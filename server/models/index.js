const models = Object.assign(
  require('./user'),
  require('./blog')
)

const mongoose = require('mongoose')
const config = require('../config')

const options = {
  useNewUrlParser: true,
}

mongoose.connect(config.mongodb, options).then(
  () => {
    console.log("connected to mongoDB")
  },
  err => {
    console.log(err.stack)
  }
)

module.exports = models
