// a
db.instructors.find({});

// b
db.instructors.find({ salary: { $gt: 4000 } }, { firstName: 1, salary: 1 });

// c
db.instructors.find({ age: { $lte: 25 } });

// d
db.instructors.find(
  {
    $and: [
      { "address.city": "mansoura" },
      { $or: [{ "address.streetNumber": 10 }, { "address.streetNumber": 14 }] },
    ],
  },
  { firstname: 1, address: 1, salary: 1 }
);

// e
db.instructors.find({ $and: [{ courses: "js" }, { courses: "jquery" }] });

// f
db.instructors.find({ courses: { $exists: true } }).forEach((ele) => {
  print(`${ele.firstName} ${ele.courses.length}`);
});

// g
db.instructors
  .find({ firstName: { $exists: true }, lastName: { $exists: true } })
  .sort({ firstName: 1, lastName: -1 })
  .forEach((ins) =>
    print(`FullName: ${ins.firstName} ${ins.lastName}, Age: ${ins.age}`)
  );

// h
db.instructors.find({
  $or: [{ firstName: "mohammed" }, { lastName: "mohammed" }],
});

// i
db.instructors.deleteOne({
  $and: [{ firstName: "ebtesam" }, { courses: { $size: 5 } }],
});

// j
db.instructors.updateMany({}, { $set: { active: true } });

// k
db.instructors.updateOne(
  { firstName: "mazen", lastName: "mohammed", courses: "EF" },
  { $set: { "courses.$": "jquery" } }
);

// l
db.instructors.updateOne(
  { firstName: "noha", lastName: "hesham" },
  { $addToSet: { courses: "jquery" } }
);

// m
db.Instructors.updateOne(
  { firstName: "ahmed", lastName: "mohammed" },
  { $unset: { courses: "" } }
);

// n
db.instructors.updateOne({ courses: { $size: 3 } }, { $inc: { salary: -500 } });

// o
db.instructors.updateMany({}, { $rename: { address: "Full Address" } });

// p
db.instructors.updateOne(
  { $and: [{ firstName: "noha" }, { lastName: "hesham" }] },
  { $set: { "Full Address.street": 20 } }
);
