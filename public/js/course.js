// const config = {
//   type: 'carousel',
//   perView: 3,
// };
// new Glide('.glide', config).mount();

const glide = document.querySelectorAll('.glide');

Object.values(glide).map((gl) => {
  const config = {
    type: 'carousel',
    perView: 3,
  };
  new Glide(gl, config).mount();
});

const data = JSON.parse(localStorage.getItem('user'))

if (localStorage.getItem('user') !== null) {
  const open = document.getElementById('open')
  open.addEventListener('click', async () => {
    const course_id = JSON.parse(localStorage.getItem('course_id'))
    const user = JSON.parse(localStorage.getItem('user'))

    const res = await fetch(`http://localhost:5000/users/${user.userId}`)
    const data = await res.json()

    var flag = true

    for (let i = 0; i < data.user.courses.length; i++) {
      if (data.user.courses[i]["_id"] === course_id) {
        var flag = false
        alert('Already Enrolled')
        break;
      }
    }

    if (flag) {
      window.location.href = 'http://localhost:5000/upgrad/form'
    }
  })
} else {
  const open = document.getElementById('open')
  open.addEventListener('click', () => {
    window.location.href = 'http://localhost:5000/upgrad/signup'
  })
}

// ACCORDION
var open = document.getElementById('open')
var modal_container = document.querySelector('.modal-container')
var close = document.getElementById('close')
var number
var otp = document.getElementById('continue')

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});