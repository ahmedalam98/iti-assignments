// 1 - String, Date and RegExp Objects
// 1.1

var response = prompt("What is your string?");
var specificChar = prompt("What character do you want to count?");
var caseSensitive = confirm("Do you want to count case sensitive?");

function countChar(string, char, caseSensitive) {
  var count = 0;
  if (caseSensitive) {
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i).toLowerCase() === char.toLowerCase()) {
        count++;
      }
    }
  } else {
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === char) {
        count++;
      }
    }
  }

  console.log(count);
  return count;
}

countChar(response, specificChar, caseSensitive);
