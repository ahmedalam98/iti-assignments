const express = require("express");
const router = express.Router();
const ProductController = require("../Controllers/ProductController");

router.get("/", ProductController.GetAllProducts);
router.get("/:name", ProductController.GetProductByName);
router.post("/add", ProductController.AddNewProduct);
router.put("/:name", ProductController.UpdateProductByName);
router.delete("/:name", ProductController.DeleteProductByName);

module.exports = router;
