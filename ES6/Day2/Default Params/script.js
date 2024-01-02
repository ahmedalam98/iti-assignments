function courseDefaults({
  courseName = "JavaScript",
  courseDuration = "70 hrs",
  courseOwner = "ITI",
  ...props
}) {
  if (Object.keys(props).length > 0) {
    throw Error(
      "Only properties : courseName, courseDuration, and courseOwner are allowed to use."
    );
  }

  console.log(
    `    |- Course Info -| 
    Name: ${courseName}
    Duration: ${courseDuration}
    Owner: ${courseOwner} `
  );
}

courseDefaults({});

console.log("-------------------");

courseDefaults({
  courseName: "ES6",
  courseDuration: 50,
  courseOwner: "Eng/ Arwa",
});

console.log("-------------------");

courseDefaults({
  courseName: "ES6",
  courseDuration: 50,
  courseOwner: "Eng/ Arwa",
  courseLocation: "Smart Village",
});
