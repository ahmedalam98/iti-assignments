// Display user profile
const userProfile = document.querySelector("#userProfile");

function displayUserProfile() {
  console.log("Retrieved from localStorage.");

  userProfile.innerHTML = `
    <div style="text-align: center;">
      <img style="margin: 2.5rem auto;" src="${getProfilePic(
        localStorage.getItem("userGender")
      )}" />
      <h2 style="color: ${getFontColor(
        localStorage.getItem("userGender")
      )}">${localStorage.getItem("userName")}</h2>
      <h3>Age: ${localStorage.getItem("userAge")}</h3>
      <h3>Visits: ${localStorage.getItem("visitCount")}</h3>
    </div>
  `;
}

function increaseVisitCount() {
  const visitCount = localStorage.getItem("visitCount");
  localStorage.setItem("visitCount", parseInt(visitCount) + 1);
}

displayUserProfile();

window.addEventListener("beforeunload", increaseVisitCount);

/////////////////////////////////////////

function getFontColor(gender) {
  return gender === "male" ? "blue" : "palevioletred";
}

function getProfilePic(gender) {
  return gender === "male" ? "./1.jpg" : "./2.jpg";
}
