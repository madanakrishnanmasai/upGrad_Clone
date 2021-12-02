const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phone_number: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  isLoggedIn: {
    type: Boolean,
    required: false,
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
    required: false
  }],
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'form',
    required: false
  }
}, {
  versionKey: false,
  timestamps: true
})

const User = mongoose.model('user', userSchema)

module.exports = User