const { OrderClass, Orders } = require("../Models/OrderModel");
const OrderValidator = require("../Validators/OrderValidator");

// -------------------- Get All Orders -------------------- //

let getAllOrders = (req, res) => {
  let allOrders = OrderClass.getAllOrders();
  res.status(200).json(allOrders);
};

// -------------------- Get Order By Id -------------------- //

let getOrderById = (req, res) => {
  let orderId = req.params.id;

  let order = Orders.find((order) => order.id == orderId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.status(200).json({ message: "Order found", data: order });
};

// -------------------- Create Order -------------------- //

let createOrder = (req, res) => {
  let newOrder = req.body;

  if (OrderValidator(newOrder)) {
    let order = new OrderClass(newOrder);
    order.SaveOrder();
    res.status(201).json({ message: "Order created", data: newOrder });
  } else {
    // For debugging
    // console.log(OrderValidator.errors);

    let errorMessage = OrderValidator.errors
      .map((error) => {
        return `${error.instancePath.slice(1)} ${error.message}`;
      })
      .join(", ");
    res.status(404).json({
      message: errorMessage,
    });
  }
};

// -------------------- Update Order -------------------- //

let updateOrder = (req, res) => {
  let orderId = req.params.id;
  let updatedOrder = req.body;

  if (OrderValidator(updatedOrder)) {
    let order = Orders.find((order) => order.id == orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    order.name = updatedOrder.name;
    order.products = updatedOrder.products;
    order.totalPrice = updatedOrder.totalPrice;
    res.status(201).json({ message: "Order updated", data: order });
  } else {
    // For debugging
    // console.log(OrderValidator.errors);

    let errorMessage = OrderValidator.errors
      .map((error) => {
        return `${error.instancePath.slice(1)} ${error.message}`;
      })
      .join(", ");
    res.status(404).json({
      message: errorMessage,
    });
  }
};

// -------------------- Delete Order -------------------- //

let deleteOrder = (req, res) => {
  let orderId = req.params.id;
  let order = Orders.find((order) => order.id == orderId);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  let newOrders = Orders.filter((order) => order.id != orderId);
  res.status(200).json({ message: "Order deleted", data: newOrders });
};

// --------------------Bonus : Get All Products In Order -------------------- //

let getAllProductsInOrder = (req, res) => {
  let orderId = req.params.id;
  let order = Orders.find((order) => order.id == orderId);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.status(200).json({ message: "Products found", data: order.products });
};

// -------------------- Export All Functions -------------------- //

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getAllProductsInOrder,
};
