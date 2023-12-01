// 1.3

var response = prompt("Enter your long string", "Welcome to JavaScript");

const words = response.split(" ");

function biggestWord(arr) {
  var demo = "";
  var condition = arr.length;

  for (var i = 0; i < condition; i++) {
    if (arr[i].length > demo.length) {
      demo = arr[i];
    }
  }

  console.log(demo);
  return demo;
}

biggestWord(words);
