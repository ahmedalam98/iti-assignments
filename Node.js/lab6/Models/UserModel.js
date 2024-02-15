const mongoose = require("mongoose");

// validator package
const validator = require("validator");

// ----------------------------------------------------------- //

// URL to connect to the database ( MongoDB Compass ) with name of ( ITI_Node )
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/ITI_Node";

// Using mongoose to connect to the database
mongoose.connect(DB_URL);

// ----------------------------------------------------------- //

// Creating mongoose schema
// - The schema is a way to define the structure of the data that will be stored in the database
// - It will not produce errors if the data is not matching the schema but it will not be saved in the database
// - We just add it as a bonus layer of validation

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 20 },

  // Using validator pkg as another way to validate the email
  email: {
    type: String,
    required: true,

    // you can rename (validate) to (customValidator) or any name you want BUT not with the (validator) function
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "{Email} is not a valid",
    },
  },

  password: { type: String, required: true },

  // Will be used with JWT
  isAdmin: { type: Boolean, default: false },
});

// Alternative way to the previous validation that you can add the validation to the schema in the UserController as validating from the Server side
// When a request to create a user is received, the UserController handles the validation logic.

// ----------------------------------------------------------- //

// Creating mongoose model that accepts two parameters ( name of the collection || model , and the schema of the model )
const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
