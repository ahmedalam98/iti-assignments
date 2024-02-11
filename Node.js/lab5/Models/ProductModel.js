let Products = [
  {
    id: 10,
    name: "Iphone 15",
    price: 2500,
  },
  {
    id: 11,
    name: "Samsung Galaxy S20",
    price: 2000,
  },
];

let ProductID = 6;

class ProductClass {
  constructor(body = { id, name, price }) {
    this.id = body.id;
    this.name = body.name;
    this.price = body.price;
  }

  SaveProduct() {
    this.id = ++ProductID;
    Products.push(this);
  }

  static getAllProducts() {
    return Products;
  }
}

module.exports = { Products, ProductClass };
