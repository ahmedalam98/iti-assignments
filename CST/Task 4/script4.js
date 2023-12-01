// 1.4

function validatesPrompts() {
  var Name;
  var phoneNumber;
  var mobileNumber;
  var email;
  var color;

  do {
    Name = prompt("Enter your name ( string only )");
    var nameRegex = /^[a-zA-Z]+$/;
    var nameResult = nameRegex.test(Name);

    if (!nameResult) {
      alert("Your name is invalid");
    }
  } while (!nameResult);

  do {
    phoneNumber = prompt("Enter your phone number ( 8 numbers only )");
    var phoneRegex = /^[0-9]{8}$/;
    var phoneResult = phoneRegex.test(phoneNumber);

    if (!phoneResult) {
      alert("Your phone number is invalid");
    }
  } while (!phoneResult);

  do {
    mobileNumber = prompt("Enter your mobile number ( 11 numbers only )");
    var mobileRegex = /^01([0|1|2|5])[0-9]{8}$/;
    var mobileResult = mobileRegex.test(mobileNumber);

    if (!mobileResult) {
      alert("Your mobile number is invalid");
    }
  } while (!mobileResult);

  do {
    email = prompt("Enter your email");
    var emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    var emailResult = emailRegex.test(email);

    if (!emailResult) {
      alert("Your email is invalid");
    }
  } while (!emailResult);

  do {
    color = prompt("Choose a color (red, green, or blue)");
    color = color.toLowerCase();
  } while (color !== "red" && color !== "green" && color !== "blue");

  var formattedText =
    "Welcome " +
    Name +
    "\n" +
    "Your phone number is " +
    phoneNumber +
    "\n" +
    "Your mobile number is " +
    mobileNumber +
    "\n" +
    "Your email is " +
    email;

  switch (color) {
    case "red":
      console.log("%c" + formattedText, "color: red");
      break;
    case "green":
      console.log("%c" + formattedText, "color: green");
      break;
    case "blue":
      console.log("%c" + formattedText, "color: blue");
      break;
  }
}

validatesPrompts();
