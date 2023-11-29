var sum = 0;

do {
  var response = prompt("Enter your value", "0");
  var numaricResponse = +response;
  sum += numaricResponse;
  console.log(sum);
} while (
  numaricResponse != 0 &&
  typeof numaricResponse == "number" &&
  sum < 100
);
