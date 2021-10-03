// create user
const signUpBtn = document.getElementById('sign-up')

signUpBtn.addEventListener('click', async (e) => {
  e.preventDefault()
  const first_name = document.getElementById('f-name').value
  const last_name = document.getElementById('l-name').value
  const gender = document.getElementById('gender').value
  const email = document.getElementById('email').value
  const phone_number = document.getElementById('p-number').value
  const password = document.getElementById('password').value

  const res = await fetch('http://localhost:5000/users', {
    method: 'POST',
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      gender: gender,
      password: password,
      isLoggedIn: true
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await res.json()

  if (data.present) {
    alert('user already exist')
  } else {
    const userId = data.user._id
    const isLoggedIn = data.user.isLoggedIn
    localStorage.setItem('user', JSON.stringify({
      userId,
      isLoggedIn
    }))

    if (localStorage.getItem('course_id') !== null) {
      window.location.href = 'http://localhost:5000/upgrad/form'
    } else {
      window.location.href = 'http://localhost:5000/profile'
    }
  }


})

const login = document.getElementById('sign-in')

login.addEventListener('click', async (e) => {
  e.preventDefault()

  console.log('login')

  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value

  console.log(email, password)

  const res = await fetch(`http://localhost:5000/users/upgrad/login?email=${email}&password=${password}`)

  const data = await res.json()
  console.log(data)
  if (data.present === false) {
    alert('Enter email or password properly')
  } else {
    const userId = data.user[0]["_id"]
    const isLoggedIn = data.user[0]["isLoggedIn"]
    console.log(userId, isLoggedIn)
    localStorage.setItem('user', JSON.stringify({
      userId,
      isLoggedIn
    }))

    if (localStorage.getItem('course_id') !== null) {
      window.location.href = 'http://localhost:5000/upgrad/form'
    } else {
      window.location.href = 'http://localhost:5000/profile'
    }
  }

})