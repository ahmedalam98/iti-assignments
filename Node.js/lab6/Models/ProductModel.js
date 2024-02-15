const mongoose = require("mongoose");

// URL to connect to the database ( MongoDB Compass ) with name of ( ITI_Node )
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/ITI_Node";

// Using mongoose to connect to the database
mongoose.connect(DB_URL);

// ----------------------------------------------------------- //

class ProductClass {
  constructor(body = { id, name, price }) {
    this.id = body.id;
    this.name = body.name;
    this.price = body.price;
  }

  SaveProduct() {
    Products.push(this);
  }

  static getAllProducts() {
    return Products;
  }
}

// Creating mongoose schema
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true, minLength: 3, maxLength: 20 },
  price: { type: Number, required: true },
});

// Creating mongoose model that accepts two parameters ( name of the collection || model , and the schema of the model )
const Products = mongoose.model("products", productSchema);

module.exports = { Products, ProductClass };
