const express = require('express')

const User = require('../models/user.model')

const router = express.Router()

// create user
router.post('', signUpValidation, async (req, res) => {
  const user = await User.create(req.body)

  return res.status(201).send({
    user
  })
})

// get all user
router.get('', async (req, res) => {
  const user = await User.find().lean().exec()

  return res.status(200).send({
    user
  })
})

// get user by id
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).populate("courses").lean().exec()

  return res.status(200).send({
    user
  })
})

// verify
router.get('/upgrad/login', loginValidation, async (req, res) => {
  const user = await User.find({
    "email": req.query.email,
    "password": req.query.password
  }).lean().exec()

  return res.status(200).send({
    user
  })
})

// patch
router.patch('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id, {
      $push: {
        "courses": req.body.courses
      }
    }, {
      upsert: true,
      new: true
    }).lean().exec()

  return res.status(200).send({
    user
  })
})

async function signUpValidation(req, res, next) {
  const present = await User.find({
    phone_number: req.body.phone_number
  })

  if (present.length !== 0) {
    return res.send({
      present: true
    })
  } else {
    next()
  }
}

async function loginValidation(req, res, next) {
  const present = await User.find({
    "email": req.query.email,
    "password": req.query.password
  })
  if (present.length !== 0) {
    next()
  } else {
    return res.send({
      present: false
    })
  }
}

module.exports = router