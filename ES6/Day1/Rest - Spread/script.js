const myArray = [3, 7, 1, 9, 4, 2];

function minMax(...numbers) {
  if (numbers.length === 0) {
    console.log("Array is empty");
    return;
  }

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return { max, min };
}

const myValues = minMax(...myArray);

console.log("Max value:", myValues.max);
console.log("Min value:", myValues.min);
