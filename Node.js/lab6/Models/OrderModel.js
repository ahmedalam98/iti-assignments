// Implemented OrdersModel as a Dummy data with static methods to simulate the database operations :

let Orders = [
  {
    id: 1,
    price: 500,
    items: [
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
    price: 1000,
    items: [
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
    price: 1500,
    items: [
      {
        id: 5,
        name: "MacBook Pro",
        price: 1500,
      },
    ],
  },
];

let orderId = 4;

// ---------------------------------------------------------- //

class OrdersModel {
  constructor(items, price) {
    this.items = items;
    this.price = price;
  }

  static GetAll() {
    return Orders;
  }

  SaveOrder() {
    this.id = ++orderId;
    Orders.push(this);
    return this;
  }

  static GetOrderById(ID) {
    return Orders.find((ele) => {
      return ele.id == ID;
    });
  }

  static UpdateOrderByID(ID, data) {
    return Products.find((ele) => {
      if (ele.id == ID) {
        ele.items = data.items;
        ele.price = ele.price;
        return ele;
      }
    });
  }

  static DeleteOrderByID(ID, data) {
    return Orders.find((ele, i) => {
      if (ele.id == ID) {
        return Orders.splice(i, 1);
      }
    });
  }
}

module.exports = OrdersModel;
