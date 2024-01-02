function courseDefaults({
  courseName = "JavaScript",
  courseDuration = "70 hrs",
  courseOwner = "ITI",
  ...props
}) {
  const myProps = ["courseName", "courseDuration", "courseOwner"];

  for (const prop in props) {
    if (!myProps.includes(prop)) {
      throw Error(
        `Property "${prop}" is not allowed. Only properties: ${myProps.join(
          ", "
        )} are allowed.`
      );
    }
  }

  console.log(
    `    |- Course Info -| 
    Name: ${courseName}
    Duration: ${courseDuration}
    Owner: ${courseOwner} `
  );
}

////////////////////////////////////////////////////////////

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
