const express = require("express");
const router = express.Router();
const OrderController = require("../Controllers/OrderController");

router.get("/", OrderController.getAllOrders);
router.get("/:id", OrderController.getOrderById);
router.post("/", OrderController.createOrder);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);

// Bonus: Add a route to get all products in an order
router.get("/:id/products", OrderController.getAllProductsInOrder);

module.exports = router;
