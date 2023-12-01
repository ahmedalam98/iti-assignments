// 2 - Array Object

function getUserInput() {
  let userValues = [];
  for (let i = 0; i < 5; i++) {
    let value = parseInt(prompt(`Enter numerical value ${i + 1}:`));
    userValues.push(value);
  }
  return userValues;
}

const userValues = getUserInput();

const descendingOrder = userValues.sort((a, b) => b - a);

const ascendingOrder = userValues.sort((a, b) => a - b);

console.log("Original array:", userValues);
console.log("Descending order:", descendingOrder);
console.log("Ascending order:", ascendingOrder);
