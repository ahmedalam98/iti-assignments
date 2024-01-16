show dbs
db.createCollection("instructors")
db.instructors.insertOne({firstName:"Ahmed",lastName:"Ibrahim"})
db.instructors.insertOne({})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

db.instructors.insertMany([
    {
        _id: 6,
        firstName: "noha",
        lastName: "hesham",
        age: 21,
        salary: 3500,
        address: { city: "cairo", street: 10, building: 8 },
        courses: ["js", "mvc", "signalR", "expressjs"]
    },
    {
        _id: 7,
        firstName: "mona",
        lastName: "ahmed",
        age: 21,
        salary: 3600,
        address: { city: "cairo", street: 20, building: 8 },
        courses: ["es6", "mvc", "signalR", "expressjs"]
    },
    {
        _id: 8,
        firstName: "mazen",
        lastName: "mohammed",
        age: 21,
        salary: 7040,
        address: { city: "Ismailia", street: 10, building: 8 },
        courses: ["asp.net", "mvc", "EF"]
    },
    {
        _id: 9,
        firstName: "ebtesam",
        lastName: "hesham",
        age: 21,
        salary: 7500,
        address: { city: "mansoura", street: 14, building: 3 },
        courses: ["js", "html5", "signalR", "expressjs", "bootstrap"]
    }
]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

db.instructors.find({});
db.instructors.find({}, { firstName: 1, lastName: 1, address: 1 });  //  returns only the firstName, lastName and address fields 
db.instructors.find({ age: 21 }, { firstName: 1, "address.city": 1 });
db.instructors.find({ "address.city": "mansoura" }, { firstName: 1, age: 1 });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1})
// (find) accepts two arguments: the query filter and the projections.
// So ,{lastName:"ahmed"} makes no sense here it also overrides the actual last name of the document with temporary value "ahmed"
// The correct syntax is db.instructors.find({firstName:"mona"},{firstName:1,lastName:1})


db.instructors.find({courses:"mvc"},{firstName:1,courses:1})