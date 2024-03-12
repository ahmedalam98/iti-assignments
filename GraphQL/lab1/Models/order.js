const mongoose = require("mongoose");

orderSchema = new mongoose.Schema({
    name: String,
    totalPrice: Number,
    items: [mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model('orders', orderSchema);