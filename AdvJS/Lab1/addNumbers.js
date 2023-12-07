function addNumbers() {
  if (arguments.length === 0) {
    throw new Error("You must provide at least one parameter");
  }

  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new Error("Invalid input, Use only numbers");
    } else {
      sum += arguments[i];
    }
  }

  return sum;
}
