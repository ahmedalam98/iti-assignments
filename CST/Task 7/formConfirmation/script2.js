var urlParams = new URLSearchParams(window.location.search);

var name = urlParams.get("name");
var email = urlParams.get("email");
var address = urlParams.get("address");
var mobile = urlParams.get("mobile");
var gender = urlParams.get("gender");

var text = document.getElementById("text");

var welcomeMessage = "Welcome ";

if (name) {
  welcomeMessage += `${name} <br> <br>`;
}

if (email) {
  welcomeMessage += `Email: ${email} <br>`;
}

if (address) {
  welcomeMessage += `Address: ${address} <br>`;
}

if (mobile) {
  welcomeMessage += `Mobile: ${mobile} <br>`;
}

if (gender) {
  welcomeMessage += `Gender: ${gender} <br>`;
}

text.innerHTML = welcomeMessage;

console.log(navigator.userAgent);
