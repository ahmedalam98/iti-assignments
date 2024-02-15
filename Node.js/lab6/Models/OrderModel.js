// We are using dummy data for now, but in a real-world scenario, this data would be fetched from a database.
let Orders = [
  {
    id: 1,
    totalPrice: 500,
    products: [
      {
        id: 1,
        name: "PlayStation 5",
        price: 200,
      },
      {
        id: 2,
        name: "Xbox Series X",
        price: 300,
      },
    ],
  },
  {
    id: 2,
    totalPrice: 1000,
    products: [
      {
        id: 3,
        name: "Nintendo Switch",
        price: 500,
      },
      {
        id: 4,
        name: "Gaming PC",
        price: 500,
      },
    ],
  },
  {
    id: 3,
    totalPrice: 1500,
    products: [
      {
        id: 5,
        name: "MacBook Pro",
        price: 1500,
      },
    ],
  },
];

let OrderID = 3;

// ---------------------------------------------------------- //

class OrderClass {
  constructor(body = { id, totalPrice, products }) {
    this.id = body.id;
    this.totalPrice = body.totalPrice;
    this.products = body.products;
  }

  SaveOrder() {
    this.id = ++OrderID;
    Orders.push(this);
  }

  static getAllOrders() {
    return Orders;
  }
}

module.exports = { Orders, OrderClass };
