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

  if (!userName || !gender) {
    alert("Please fill all the fields");
  } else {
    displayUserProfile();
  }
}

function displayUserProfile() {
  // Get user profile details from cookies
  var userName = getCookie("userName");
  var gender = getCookie("gender");
  var visitCount = parseInt(getCookie("visitCount")) || 0;

  // Display user name and visit count
  var childWin = window.open("", "childWin", "width=100%,height=100%");
  var userProfileDiv = childWin.document.createElement("div");
  userProfileDiv.innerHTML = `
  //     <p>User : <span style="color: ${getFontColor(
    gender
  )}">${userName}</span></p>
        <p>Number of Visits : ${visitCount}</p>
        <img src="${getProfilePic(
          gender
        )}" alt="Profile Pic" style="padding-top: 24px;">
        `;

  userProfileDiv.style.display = "flex";
  userProfileDiv.style.flexDirection = "column";
  userProfileDiv.style.alignItems = "center";
  userProfileDiv.style.justifyContent = "center";

  // Increment visit count
  setCookie("visitCount", (visitCount + 1).toString());
}

function getFontColor(gender) {
  return gender === "male" ? "blue" : "palevioletred";
}

function getProfilePic(gender) {
  return gender === "male" ? "./1.jpg" : "./2.jpg";
}
