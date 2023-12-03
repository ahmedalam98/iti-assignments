// Object Object

var demoObject = {
  name: "Ahmed",
  age: "25",
};

function dispVal(obj, prop) {
  if (obj[prop] != undefined) {
    var value = obj[prop];
    console.log(value);
    document.write("<h1>" + value + "<h1/>");
    return value;
  } else {
    console.log("There is no property with this name");
    document.write("<h1>There is no property with this name<h1/>");
  }
}

var x = prompt("Enter the property name", "name / age");

dispVal(demoObject, x);
