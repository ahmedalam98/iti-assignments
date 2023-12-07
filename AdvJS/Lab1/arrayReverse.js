function arrayReverse1(...params) {
  var arr = params;
  var newArray = arr.reverse();
  return newArray;
}

function arrayReverse2(oldArr) {
  var newArray = oldArr.reverse();
  return newArray;
}

function arrayReverse3() {
  console.log(Array.prototype.slice.call(arguments));
  var arr = Array.prototype.slice.call(arguments);

  return arr;
}
