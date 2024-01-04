// Register user
const userName = document.querySelector("#name");
const userAge = document.querySelector("#age");
const selectedColor = document.querySelector("#color");
const registerButton = document.querySelector("#register");
const clearButton = document.querySelector("#clear");

function storageSave() {
  const userGender = document.querySelector("input[name='gender']:checked");

  localStorage.setItem("userName", userName.value);
  localStorage.setItem("userAge", userAge.value);
  localStorage.setItem("userGender", userGender ? userGender.value : "");
  localStorage.setItem("selectedColor", selectedColor.value);
  localStorage.setItem("visitCount", 1);
  console.log("Saved to localStorage.");

  if (userName.value === "") {
    alert("Please enter a name.");
  } else if (userAge.value === "") {
    alert("Please enter an age.");
  } else if (localStorage.getItem("userGender") === "") {
    alert("Please select a gender.");
  } else {
    window.location.href = "./profile.html";
  }
}

function clearStorage() {
  userName.value = "";
  userAge.value = "";
  selectedColor.value = "#000000";

  // Clear radio button selection
  const userGender = document.querySelector("input[name='gender']:checked");
  if (userGender) {
    userGender.checked = false;
  }

  localStorage.clear();
  console.log("Cleared localStorage.");
}

registerButton.addEventListener("click", storageSave);
clearButton.addEventListener("click", clearStorage);

/////////////////////////////////////////

function resetVisitCount() {
  localStorage.setItem("visitCount", 0);
}

resetVisitCount();
