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
    throw new Error("Please fill all the fields");
  } else {
    location.assign("child.html");
  }
}

function setCookie(cookieName, cookieValue, expireDate) {
  if (typeof cookieName === "undefined" || typeof cookieValue === "undefined") {
    throw new Error("Cookie name and value are required");
  }

  var cookieString = cookieName + "=" + cookieValue;

  if (expireDate) {
    var expires = new Date(expireDate);
    cookieString += ";expires=" + expires.toUTCString();
  }
  document.cookie = cookieString;
}

function getCookie(cookieName) {
  if (typeof cookieName === "undefined") {
    throw new Error("Cookie name is required");
  }

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
  if (typeof cookieName === "undefined") {
    throw new Error("Cookie name is required");
  }
  document.cookie = cookieName + "=''; expires=Thu, 01 Jan 2020 00:00:00 UTC";
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
