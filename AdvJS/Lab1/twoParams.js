function twoParamsOnly() {
  if (arguments.length < 2) {
    throw new Error("You must provide at least two parameters");
  } else if (arguments.length > 2) {
    throw new Error("You must provide only two parameters");
  } else {
    return arguments;
  }
}
