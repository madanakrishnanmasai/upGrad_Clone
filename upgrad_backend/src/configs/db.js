const mongoose = require('mongoose')


const connect = () => {
  return mongoose.connect('mongodb+srv://upgrad:upgrad@upgrad.3lwot.mongodb.net/test')
}

module.exports = connect