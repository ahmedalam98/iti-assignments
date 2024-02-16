const express = require("express");
const router = express.Router();
const OrderController = require("../Controllers/OrderController");

router.get("/", OrderController.GetAllOrders);
router.get("/:id", OrderController.GetOrderByID);
router.post("/add", OrderController.AddNewOrder);
router.put("/:id", OrderController.UpdateOrderByID);
router.delete("/:id", OrderController.DeleteOrderByID);

module.exports = router;
