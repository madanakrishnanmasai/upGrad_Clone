  var json_data = localStorage.getItem('applicantDetails')
  var applicantDetails = JSON.parse(json_data)
  console.log(applicantDetails);

  var fName = document.querySelector('.first-name')
  fName.textContent = applicantDetails[0].firstName
  var lName = document.querySelector('.last-name')
  lName.textContent = applicantDetails[0].lastName
  var email = document.querySelector('.email')
  email.textContent = applicantDetails[0].email
  var dob = document.querySelector('.dob')
  dob.textContent = applicantDetails[0].dob
  var gender = document.querySelector('.gender')
  gender.textContent = applicantDetails[0].gender
  var city = document.querySelector('.city')
  city.textContent = applicantDetails[0].city
  var state = document.querySelector('.state')
  state.textContent = applicantDetails[0].state
  var country = document.querySelector('.country')
  country.textContent = applicantDetails[0].country

  function thankyou() {
    window.location.href = 'http://localhost:5000/upgrad/welcome'
  }