const getCourses = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`http://localhost:5000/users/${user.userId}`)
  const data = await res.json()
  const initial = document.getElementById('initial')
  var name = data.user.first_name
  initial.textContent = name[0].toUpperCase()
  return data
}

async function render(course) {
  const container = document.getElementById('show_courses_jb')
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
  btn.innerHTML = "View Course &#10132";

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
  container.append(div)
}

async function renderCourses() {
  const data = await getCourses()
  data.user.courses.forEach((course) => {
    render(course)
  })
}

renderCourses()