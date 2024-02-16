// Implement the ProductModel schema using Database

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 30,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
});

module.exports = mongoose.model("Products", productSchema);
