var arr = [
  '433% salary hike',
  '300+ placement partners',
  '1 MILLION+ total registered users',
  'INR 73 LPA Highest salary offered',
];

var text_changer = document.getElementById('text_changer_ms');

var index = 0;

setInterval(function () {
  index++;
  // var text = document.createElement("p");
  // text.setAttribute("text", arr[index % arr.length]);

  var div = document.createElement('div');

  div.setAttribute('text', arr[index % arr.length]);

  div.innerText = arr[index % arr.length];

  div.setAttribute('id', index);

  text_changer.append(div);
}, 2000);

setInterval(function () {
  var previous_text = index - 1;
  document.getElementById(previous_text).remove();
}, 2000);


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

var show_course_div = document.getElementById("show_courses_jb");

async function getData() {
  const res = await fetch("http://localhost:5000/courses");
  const data = await res.json();
  return data;
}

async function MBARender() {
  const data = await getData();
  data.course.forEach((course) => {
    //console.log(course.Category);
    if ("MBA" === course.Category) {
      render(course);
    }
  });
}
MBARender();

async function render(course) {
  // var show_course_div = document.getElementById("show_courses_jb");
  var div = document.createElement("div");

  var uImg = document.createElement("img");
  uImg.src = course.U_img;

  var logo_Uname_Div = document.createElement("div");
  logo_Uname_Div.setAttribute("class", "logodiv");

  var u_Log = document.createElement("img");
  u_Log.src = course.U_logo;

  var line = document.createElement("div");
  line.setAttribute("class", "line");
  line.innerHTML = "|";

  var uName = document.createElement("div");
  uName.setAttribute("class", "name");
  uName.innerText = course.U_name;
  logo_Uname_Div.append(u_Log, line, uName);

  var hori = document.createElement("hr");
  hori.setAttribute("class", "hori");

  var btn = document.createElement("button");
  btn.setAttribute("class", "btn1");
  btn.setAttribute('id', `${course._id}`)
  btn.innerHTML = "VIEW PROGRAM &#10132";
  btn.onclick = function (event) {
    localStorage.setItem('course_id', JSON.stringify(course._id))
    window.location.href = `http://localhost:5000/upgrad/${course.Category}`;
  };

  var time = document.createElement("p");
  var support = document.createElement("p");

  var book = document.createElement("div");
  var book_image = document.createElement("img");
  book.setAttribute("class", "bok");
  book_image.src = course.B_img;
  book.append(book_image, time);

  var men = document.createElement("div");
  var men_img = document.createElement("img");
  men.setAttribute("class", "men");
  men_img.src =
    "https://cdn4.iconfinder.com/data/icons/social-communication/142/users-512.png";
  men.append(men_img, support);

  var u_name = document.createElement("div");
  u_name.setAttribute("class", "u_na");
  u_name.innerHTML = course.Collage_name;

  time.innerHTML = course.Time_duration;
  support.innerHTML = course.Support;

  var certificate = document.createElement("div");
  certificate.setAttribute("class", "certi");
  certificate.innerText = course.Certificate;
  //for checking........................
  var category = document.createElement("p");
  category.innerText = course.Category;

  div.append(
    uImg,
    logo_Uname_Div,
    u_name,
    hori,
    book,
    men,
    certificate,
    btn
  );
  show_course_div.append(div);
}

const courses = document.querySelector(".courses");

courses.addEventListener("click", async (e) => {
  //show_course_div.style.display = "none";

  const value = e.target.getAttribute("data-value");
  const data = await getData();
  show_course_div.innerHTML = null;
  data.course.forEach((course) => {
    if (value === course.Category) {
      render(course);
    }
  });
});

var hover1 = document.getElementById("hover_jb1");
hover1.onmouseover = function (event) {
  hover1.style.backgroundColor = "#eb4d4b";
  hover1.style.color = "white";
};
hover1.onmouseout = function (event) {
  hover1.style.backgroundColor = "white";
  hover1.style.color = "black";
};

var hover2 = document.getElementById("hover_jb2");
hover2.onmouseover = function (event) {
  hover2.style.backgroundColor = "#eb4d4b";
  hover2.style.color = "white";
};
hover2.onmouseout = function (event) {
  hover2.style.backgroundColor = "white";
  hover2.style.color = "black";
};

var hover3 = document.getElementById("hover_jb3");
hover3.onmouseover = function (event) {
  hover3.style.backgroundColor = "#eb4d4b";
  hover3.style.color = "white";
};
hover3.onmouseout = function (event) {
  hover3.style.backgroundColor = "white";
  hover3.style.color = "black";
};

var hover4 = document.getElementById("hover_jb4");
hover4.onmouseover = function (event) {
  hover4.style.backgroundColor = "#eb4d4b";
  hover4.style.color = "white";
};
hover4.onmouseout = function (event) {
  hover4.style.backgroundColor = "white";
  hover4.style.color = "black";
};
var hover5 = document.getElementById("hover_jb5");
hover5.onmouseover = function (event) {
  hover5.style.backgroundColor = "#eb4d4b";
  hover5.style.color = "white";
};
hover5.onmouseout = function (event) {
  hover5.style.backgroundColor = "white";
  hover5.style.color = "black";
};
var hover6 = document.getElementById("hover_jb6");
hover6.onmouseover = function (event) {
  hover6.style.backgroundColor = "#eb4d4b";
  hover6.style.color = "white";
};
hover6.onmouseout = function (event) {
  hover6.style.backgroundColor = "white";
  hover6.style.color = "black";
};
var hover7 = document.getElementById("hover_jb7");
hover7.onmouseover = function (event) {
  hover7.style.backgroundColor = "#eb4d4b";
  hover7.style.color = "white";
};
hover7.onmouseout = function (event) {
  hover7.style.backgroundColor = "white";
  hover7.style.color = "black";
};
var hover8 = document.getElementById("hover_jb8");
hover8.onmouseover = function (event) {
  hover8.style.backgroundColor = "#eb4d4b";
  hover8.style.color = "white";
};
hover8.onmouseout = function (event) {
  hover8.style.backgroundColor = "white";
  hover8.style.color = "black";
};
var hover9 = document.getElementById("hover_jb9");
hover9.onmouseover = function (event) {
  hover9.style.backgroundColor = "#eb4d4b";
  hover9.style.color = "white";
};
hover9.onmouseout = function (event) {
  hover9.style.backgroundColor = "white";
  hover9.style.color = "black";
};

var hover91 = document.getElementById("hover_jb91");
hover91.onmouseover = function (event) {
  hover91.style.backgroundColor = "#eb4d4b";
  hover91.style.color = "white";
};
hover91.onmouseout = function (event) {
  hover91.style.backgroundColor = "white";
  hover91.style.color = "black";
};

var hover10 = document.getElementById("hover_jb10");
hover10.onmouseover = function (event) {
  hover10.style.backgroundColor = "#eb4d4b";
  hover10.style.color = "white";
};
hover10.onmouseout = function (event) {
  hover10.style.backgroundColor = "white";
  hover10.style.color = "black";
};
var hover11 = document.getElementById("hover_jb11");
hover11.onmouseover = function (event) {
  hover11.style.backgroundColor = "#eb4d4b";

  hover11.style.color = "white";
};
hover11.onmouseout = function (event) {
  hover11.style.backgroundColor = "white";
  hover11.style.color = "black";
};
var hover12 = document.getElementById("hover_jb12");
hover12.onmouseover = function (event) {
  hover12.style.backgroundColor = "#eb4d4b";
  hover12.style.color = "white";
};
hover12.onmouseout = function (event) {
  hover12.style.backgroundColor = "white";
  hover12.style.color = "black";
};

function signup() {
  window.location.href = 'http://localhost:5000/upgrad/signup'
}

function redirect() {
  window.location.href = 'http://localhost:5000/profile/myCourses'
}

function logOut() {
  localStorage.clear()
  window.location.href = 'http://localhost:5000'
}

const name = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`http://localhost:5000/users/${user.userId}`)
  const data = await res.json()
  var name = data.user.first_name
  const nameChange = document.getElementById('profile-name-change')
  nameChange.textContent = name
}

name()