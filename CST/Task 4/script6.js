// 3 - Math Object

function calculateCircleArea() {
  var radius = parseFloat(prompt("Enter the radius of the circle"));
  var area = Math.PI * Math.pow(radius, 2);
  alert("The area of the circle is: " + area.toFixed(2));
}

function calculateSquareRoot() {
  var value = parseFloat(prompt("Enter a value to calculate its square root"));
  var squareRoot = Math.sqrt(value);
  alert("The square root is: " + squareRoot.toFixed(2));
}

function calculateCosine() {
  var angle = parseFloat(
    prompt("Enter an angle (in degrees) to calculate its cosine")
  );
  var radians = (angle * Math.PI) / 180;
  var cosValue = Math.cos(radians);
  console.log("The cosine value is:", cosValue.toFixed(2));
}

calculateCircleArea();
calculateSquareRoot();
calculateCosine();
