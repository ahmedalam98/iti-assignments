function displayUserProfile() {
  // Get user profile details from cookies
  var userName = getCookie("userName");
  var gender = getCookie("gender");
  var visitCount = parseInt(getCookie("visitCount")) || 0;

  // Display user name and visit count
  var userProfileDiv = document.querySelector("#userProfile");
  userProfileDiv.innerHTML = `
      <p>User : <span style="color: ${getFontColor(
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

  console.log(userName);
  // deleteCookie("userName");
}

function getFontColor(gender) {
  return gender === "male" ? "blue" : "palevioletred";
}

function getProfilePic(gender) {
  return gender === "male" ? "./1.jpg" : "./2.jpg";
}

displayUserProfile();
