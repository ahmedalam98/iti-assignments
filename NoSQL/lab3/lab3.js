// 1

use FacultySystemV2

db.createCollection("student",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["FirstName","LastName","IsFired","FacultyID"],
            additionalProperties:true,
            properties:{
                FirstName:{
                    bsonType:"string"
                },
                LastName:{
                    bsonType:"string"
                },
                IsFired:{
                    bsonType:"bool"
                },
                FacultyID:{
                    bsonType:"string"
                }
            }
        }
    }
})

db.createCollection("faculty",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id","FacultyName","Address"],
            additionalProperties:false,
            properties: {
                _id:{
                    bsonType:"string"
                },
                FacultyName:{
                    bsonType:"string"
                },
                Address:{
                    bsonType:"string"
                }
            }
        }
    }
})

db.createCollection("course",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id","CourseName","FinalMark"],
            additionalProperties:true,
            properties:{
                _id:{
                    bsonType:"string"
                },
                CourseName:{
                    bsonType:"string"
                },
                FinalMark:{
                    bsonType:"number"
                }
            }
        }
    }
})

db.student.insertMany([
  {
    "FirstName": "Ahmed",
    "LastName": "Ibrahim",
    "IsFired": false,
    "FacultyID": "F001",
    "Courses": [
      {
        "CourseID": "C001",
        "Grade": 90
      },
      {
        "CourseID": "C002",
        "Grade": 90
      },
      {
        "CourseID": "C003",
        "Grade": 90
      }
    ]
  },
  {
    "FirstName": "Mohamed",
    "LastName": "Ali",
    "IsFired": true,
    "FacultyID": "F002",
    "Courses": [
      {
        "CourseID": "C002",
        "Grade": 95
      },
      {
        "CourseID": "C004",
        "Grade": 80
      },
      {
        "CourseID": "C005",
        "Grade": 88
      }
    ]
  },
  {
    "FirstName": "Ibrahim",
    "LastName": "Khaled",
    "IsFired": false,
    "FacultyID": "F003",
    "Courses": [
      {
        "CourseID": "C001",
        "Grade": 82
      },
      {
        "CourseID": "C003",
        "Grade": 96
      },
      {
        "CourseID": "C004",
        "Grade": 89
      }
    ]
  }
])

db.faculty.insertMany([
  {
    "FacultyName": "Faculty of Social Sciences",
    "Address": "567 Pine Avenue, Villagetown",
    "_id": "F004"
  },
  {
    "FacultyName": "Faculty of Medicine",
    "Address": "890 Cedar Street, City Springs",
    "_id": "F005"
  },
  {
    "FacultyName": "Faculty of Business",
    "Address": "234 Maple Lane, Townsville",
    "_id": "F006"
  }
])

db.course.insertMany([
  {
    "_id": "C006",
    "CourseName": "Psychology 101",
    "FinalMark": 88
  },
  {
    "_id": "C007",
    "CourseName": "Medical Ethics",
    "FinalMark": 92
  },
  {
    "_id": "C008",
    "CourseName": "Financial Accounting",
    "FinalMark": 78
  },
  {
    "_id": "C009",
    "CourseName": "Introduction to Sociology",
    "FinalMark": 87
  },
  {
    "_id": "C010",
    "CourseName": "Software Engineering Principles",
    "FinalMark": 96
  }
])

////////////////////////////////////////////////////////////////

// 2

db.student.aggregate([{
 $match:{}
},{
    $project:{
        "fullName":{
            $concat:["$FirstName"," ","$LastName"]
        },
        "average":{
            $avg:"$Courses.Grade"
        }
    }
}
])

// 3

db.course.aggregate([
{
        "$group":{
            "_id":ObjectId(),
            "marksSum":{
                $sum:"$FinalMark"
        }
    }
}
])

// 4

db.student.aggregate([
{
    $match:{
        FirstName:"Ahmed"
    }
},{
    $lookup:{
        from:"course",
        localField:"Courses.CourseID",
        foreignField:"_id",
        as:"course"
    }
}
])