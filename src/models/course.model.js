const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  U_img: {
    type: String,
    required: true
  },
  U_logo: {
    type: String,
    required: true
  },
  U_name: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  Collage_name: {
    type: String,
    required: true
  },
  B_img: {
    type: String,
    required: true
  },
  Time_duration: {
    type: String,
    required: true
  },
  Support: {
    type: String,
    required: true
  },
  Certificate: {
    type: String,
    required: true
  },
}, {
  versionKey: false,
  timestamps: true,
});
const Course = mongoose.model("course", courseSchema);

module.exports = Course;
