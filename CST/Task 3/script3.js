function checkDivisable(x, y, z) {
  // make it chech x is divisable by y and z and console it

  if (x % y == 0 && x % z == 0) {
    console.log("first number is divisable by second and third number");
  } else if (x % y == 0 && x % z != 0) {
    console.log("first number is divisable by second number only");
  } else if (x % y != 0 && x % z == 0) {
    console.log("first number is divisable by third number only");
  } else {
    console.log("first number is not divisable by second and third number");
  }
}

var x = parseInt(prompt("enter first number", "10"));
var y = parseInt(prompt("enter second number", "10"));
var z = parseInt(prompt("enter third number", "10"));

checkDivisable(x, y, z);
