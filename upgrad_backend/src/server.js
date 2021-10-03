const express = require('express')
const connect = require('./configs/db')
const userController = require('./controllers/user.controller')
const courseController = require('./controllers/course.controller')

const app = express()

app.use(express.json())

// Static
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set views
app.set('views', './views')
app.set('view engine', 'ejs')

// home page
app.get('', (req, res) => {
  res.render('index')
})

// blockchain
app.get('/upgrad/Blockchain', (req, res) => {
  res.render('blockchain')
})

// form
app.get('/upgrad/form', (req, res) => {
  res.render('form.ejs')
})

// preview
app.get('/upgrad/preview', (req, res) => {
  res.render('preview.ejs')
})

// welcome
app.get('/upgrad/welcome', (req, res) => {
  res.render('welcome.ejs')
})

// profile
app.get('/profile', (req, res) => {
  res.render('profileHome.ejs')
})

// my courses
app.get('/profile/myCourses', (req, res) => {
  res.render('myCourses.ejs')
})

// data science
app.get('/upgrad/Data%20Science%20%7C%20Machine%20Learning', (req, res) => {
  res.render('datascience.ejs')
})

// mba
app.get('/upgrad/MBA', (req, res) => {
  res.render('mba.ejs')
})

// login
app.get('/upgrad/signup', (req, res) => {
  res.render('login')
})

// user
app.use('/users', userController)
app.use('/courses', courseController)

app.listen(5000, () => {
  connect()
  console.log('Listening on port 5000');
})