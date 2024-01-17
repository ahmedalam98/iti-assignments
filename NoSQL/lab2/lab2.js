// a ) Display all documents in instructors collection
db.instructors.find({});

// b ) Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.instructors.find({ salary: { $gt: 4000 } }, { firstName: 1, salary: 1 });

// c ) Display all instructors with ages less than or equal 25.
db.instructors.find({ age: { $lte: 25 } });

// d ) Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary).
db.instructors.find(
  {
    $and: [
      { "address.city": "mansoura" },
      { $or: [{ "address.streetNumber": 10 }, { "address.streetNumber": 14 }] },
    ],
  },
  { firstname: 1, address: 1, salary: 1 }
);

// e ) Display all instructors who have js and jquery in their courses (both of them not one of them).
db.instructors.find({ $and: [{ courses: "js" }, { courses: "jquery" }] });

// f ) Display number of courses for each instructor and display first name with number of courses.
db.instructors.find({ courses: { $exists: true } }).forEach((ele) => {
  print(`${ele.firstName} ${ele.courses.length}`);
});

// g ) Write mongodb query to get all instructors that have firstName and lastName properties , sort them by firstName ascending then by
// lastName descending and finally display their data FullName and age. Note: use mongoDb sort method not javascript array method
let data = db.instructors
  .find({ firstName: { $exists: true }, lastName: { $exists: true } })
  .sort({ firstName: 1, lastName: -1 });

let newData = [];
let operation = data.forEach((ins) => {
  let fullName = `${ins.firstName} + " " + ${ins.lastName}`;
  let age = ins.age;
  print(`FullName: ${fullName}, Age: ${age}`);
  newData.push(ins);
});

// Bonus : create new collection with step g values data
db.createCollection("instructorsData");
db.instructorsData.insertMany(newData);
print(newData);

// h ) Find all instructors that have fullName that contains “mohammed”.
db.instructors.find({
  $or: [{ firstName: "mohammed" }, { lastName: "mohammed" }],
});

// i ) Delete instructor with first name “ebtesam” and has only 5 courses in courses array
db.instructors.deleteOne({
  $and: [{ firstName: "ebtesam" }, { courses: { $size: 5 } }],
});

// j ) Add active property to all instructors and set its value to true.
db.instructors.updateMany({}, { $set: { active: true } });

// k ) Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowing EF Index)
db.instructors.updateOne(
  { firstName: "mazen", lastName: "mohammed", courses: "EF" },
  { $set: { "courses.$": "jquery" } }
);

// l ) Add jquery course for “noha hesham”.
db.instructors.updateOne(
  { fullName: /noha hesham/i },
  { $push: { courses: "jquery" } },
  { upsert: true }
);

// m ) Remove courses property for “ahmed mohammed ” instructor
db.Instructors.updateOne(
  { firstName: "ahmed", lastName: "mohammed" },
  { $unset: { courses: "" } }
);

// n ) Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.instructors.updateOne({ courses: { $size: 3 } }, { $inc: { salary: -500 } });

// o ) Rename address field for all instructors to fullAddress.
db.instructors.updateMany({}, { $rename: { address: "Full Address" } });

// p ) Change street number for noha hesham to 20
db.instructors.updateOne(
  { $and: [{ firstName: "noha" }, { lastName: "hesham" }] },
  { $set: { "Full Address.street": 20 } }
);
