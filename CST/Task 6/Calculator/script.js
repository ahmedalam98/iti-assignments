var currentInput = "";
var currentCalculation = "";

function EnterNumber(value) {
  currentInput += value;
  document.getElementById("Answer").value = currentInput;
}

function EnterOperator(operator) {
  if (currentInput !== "") {
    currentCalculation += currentInput + " " + operator + " ";
    currentInput = "";
    document.getElementById("Answer").value = currentCalculation;
  }
}

function EnterEqual() {
  if (currentInput !== "") {
    currentCalculation += currentInput;
    currentInput = eval(currentCalculation);
    document.getElementById("Answer").value = currentInput;
    currentCalculation = "";
  }
}

function EnterClear() {
  currentInput = "";
  currentCalculation = "";
  document.getElementById("Answer").value = "";
}
