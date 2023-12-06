// Register user
function registerUser() {
  var gender;
  var userName = document.querySelector("#name").value;
  var genderInputs = document.querySelectorAll(
    'input[type="radio"][name="gender"]'
  );

  for (var input of genderInputs) {
    if (input.checked) {
      gender = input.value;
    }
  }

  setCookie("userName", userName);
  setCookie("gender", gender);
  setCookie("visitCount", "1");

  // If you want to set a persistent cookie, uncomment the following line
  // setCookie("persistentCookie", "persistent", "2024-12-31T00:00:00");

  if (!userName || !gender) {
    alert("Please fill all the fields");
  } else {
    location.assign("child.html");
  }
}

function setCookie(cookieName, cookieValue, expireDate) {
  var cookieString = cookieName + "=" + cookieValue;

  if (expireDate) {
    var expires = new Date(expireDate);
    cookieString += +" ;expires=" + expires;
  }
  document.cookie = cookieString;
}

function getCookie(cookieName) {
  var currentValue;
  var cookies = document.cookie.split("; ");
  for (var cookie of cookies) {
    var [name, value] = cookie.split("=");
    if (name === cookieName) {
      currentValue = value;
    }
  }
  return currentValue;
}

function deleteCookie(cookieName) {
  var check = document.cookie.includes(cookieName);
  if (check) {
    var date = new Date();
    var hours = date.getHours();
    hours--;
    date.setHours(hours);

    // second parameter is the cookie value
    setCookie(cookieName, "", date);
  }
}

function allCookieList() {
  var cookies = document.cookie.split("; ");
  for (var cookie of cookies) {
    var [name, value] = cookie.split("=");
    console.log("The name is : " + name + " and the value is : " + value);
  }
}

// Check if cookie exists
function hasCookie(cookieName) {
  return document.cookie.includes(cookieName);
}
