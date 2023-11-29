var x = parseInt(prompt("enter first number", "10"));
var y = parseInt(prompt("enter second number", "10"));
var z = prompt("enter string", "string");

function numbersRange(x, y, z) {
  switch (z) {
    case "odd":
      for (var i = x; i <= y; i++) {
        if (i % 2 != 0) {
          console.log(i);
        }
      }
      break;

    case "even":
      for (var i = x; i <= y; i++) {
        if (i % 2 == 0) {
          console.log(i);
        }
      }
      break;

    case "no": {
      for (var i = x; i <= y; i++) {
        console.log(i);
      }
    }

    default:
      console.log("invalid input");
  }
}

numbersRange(x, y, z);
