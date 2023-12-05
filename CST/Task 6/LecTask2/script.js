// DOM Selectors

var inputs = document.querySelectorAll(
  'input[type="button"][value^="  "]:not([value=" C "]):not([value=" << "])'
);

var clearButton = document.querySelector('input[type="button"][value=" C "]');
var eraseButton = document.querySelector('input[type="button"][value=" << "]');

// Event Listeners

inputs.forEach(function (input) {
  input.addEventListener("click", function () {
    displayNum(input);
  });
});

clearButton.addEventListener("click", function () {
  clearData();
});

eraseButton.addEventListener("click", function () {
  eraseData();
});

// Functions

function displayNum(numObj) {
  var val = numObj.value.trim();
  document.getElementById("formula").value += val;
}

function clearData() {
  document.getElementById("formula").value = "";
}

function eraseData() {
  var val = document.getElementById("formula");
  val.value = val.value.substring(0, val.value.length - 1);
}
