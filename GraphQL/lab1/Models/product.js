const mongoose = require("mongoose");

productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

module.exports = mongoose.model('products', productSchema);