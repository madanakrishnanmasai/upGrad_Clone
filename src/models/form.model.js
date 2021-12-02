const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name_of_institute: {
    type: String,
    required: true
  },
  field_of_study: {
    type: String,
    required: true
  },
  degree_level: {
    type: String,
    required: true
  },
  gpa: {
    type: String,
    required: true
  },
  month_and_graduation_year: {
    type: String,
    required: true
  },
  work_experience: {
    type: String,
    required: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
    required: true
  }],
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'form',
    required: true
  }
})

const Form = mongoose.model('form', formSchema)

module.exports = Form