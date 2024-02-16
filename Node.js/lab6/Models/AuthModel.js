const validator = require("validator");
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 30 },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (val) => {
        return validator.isEmail(val);
      },
      message: "{email} Not Valid!!",
    },
  },
  password: { type: String, minLength: 5, required: true },

  isAdmin: { type: Boolean },
});

module.exports = mongoose.model("users", usersSchema);
