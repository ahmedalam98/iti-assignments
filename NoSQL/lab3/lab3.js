// -------------------- 1 -------------------- //

use FacultySystemV2

db.createCollection("student");
db.createCollection("faculty");
db.createCollection("course");

let studentsInfo = [
  {
    _id: 1,
    firstName: "Ahmed",
    lastName: "Alam El-Deen",
    isFired: false,
    facultyId: 1,
    courses: [
      { courseId: 30, grade: 10 },
      { courseId: 1, grade: 20 },
      { courseId: 40, grade: 40 },
      { courseId: 80, grade: 70 },
    ],
  },
  {
    _id: 2,
    firstName: "Mohamed",
    lastName: "Ali",
    isFired: false,
    facultyId: 2,
    courses: [
      { courseId: 2, grade: 10 },
      { courseId: 10, grade: 20 },
      { courseId: 40, grade: 40 },
      { courseId: 80, grade: 70 },
    ],
  },
  {
    _id: 3,
    firstName: "Khaled",
    lastName: "Ibrahim",
    isFired: true,
    facultyId: 3,
    courses: [
      { courseId: 3, grade: 10 },
      { courseId: 10, grade: 20 },
      { courseId: 40, grade: 40 },
      { courseId: 80, grade: 70 },
    ],
  },
  {
    _id: 4,
    firstName: "Adam",
    lastName: "Mahmoud",
    isFired: false,
    facultyId: 4,
    courses: [
      { courseId: 4, grade: 10 },
      { courseId: 10, grade: 20 },
      { courseId: 40, grade: 40 },
      { courseId: 80, grade: 70 },
    ],
  },
];

let courseInfo = [
  { _id: 1, courseName: "html", finalMark: 100 },
  { _id: 2, courseName: "nodeJs", finalMark: 100 },
  { _id: 3, courseName: "js", finalMark: 200 },
  { _id: 4, courseName: "react", finalMark: 90 },
];

let facultyInfo = [
  { _id: 1, facultyName: "Portsaid", address: "Portsaid" },
  { _id: 2, facultyName: "AUC", address: "Cairo" },
  { _id: 3, facultyName: "Canal", address: "Ismaillia" },
  { _id: 4, facultyName: "Mansoura", address: "Mansoura" },
];

db.student.insertMany(studentsInfo);
db.course.insertMany(courseInfo);
db.faculty.insertMany(facultyInfo);

db.student.find();
db.faculty.find();
db.course.find();

// -------------------- 2 -------------------- //
db.student.aggregate([
  {
    $unwind: "$courses",
  }, //
  {
    $group: {
      _id: "$_id",
      avgGr: { $avg: "$courses.grade" },
      firstName: { $first: "$firstName" },
      lastName: { $first: "$lastName" },
    },
  },
  {
    $project: {
      avgGrade: {
        $concat: ["$firstName", " ", "$lastName", { $toString: "$avgGr" }],
      },
    },
  },
]);

// -------------------- 3 -------------------- //
db.course.aggregate([
  {
    $group: {
      _id: null,
      sumFinalMark: { $sum: "$finalMark" },
    },
  }, 
]);

// -------------------- 4 -------------------- //
db.student.aggregate([
  {
    $match: { firstName: "Merna" },
  },

  {
    $lookup: {
      from: "course",
      localField: "courses.courseId",
      foreignField: "_id",
      as: "result",
    },
  },
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      courseId: "$courses.courseId",
      result: 1,
    },
  },
]);

// -------------------- 4 -------------------- //
db.student.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      facultyId: 1,
    },
  },
  {
    $lookup: {
      from: "faculty",
      localField: "facultyId",
      foreignField: "_id",
      as: "result",
    },
  },
]);
