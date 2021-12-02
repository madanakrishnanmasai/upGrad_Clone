const express = require("express");
const Course = require("../models/course.model");

const router = express.Router();

// post
router.post("", async (req, res) => {
  const course = await Course.create(req.body);
  return res.status(201).send({
    course
  });
});

// get course
router.get("", async (req, res) => {
  const course = await Course.find().lean().exec();

  return res.status(200).send({
    course
  });
});

// delete by _id
router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndRemove(req.params.id).lean().exec();
  return res.status(204).send({
    course
  });
});

module.exports = router;
