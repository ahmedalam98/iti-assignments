const { ProductClass, Products } = require("../Models/ProductModel");
const ProductValidator = require("../Validators/ProductValidator");

// -------------------- Get All Products -------------------- //

let getAllProducts = (req, res) => {
  let allProducts = ProductClass.getAllProducts();
  res.status(200).json(allProducts);
};

// -------------------- Get Product By Id -------------------- //

let getProductById = (req, res) => {
  let productId = req.params.id;

  let product = Products.find((product) => product.id == productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ message: "Product found", data: product });
};

// -------------------- Create Product -------------------- //

let createProduct = async (req, res) => {
  let newProduct = req.body;

  if (ProductValidator(newProduct)) {
    let product = new ProductClass(newProduct);
    product.SaveProduct();
    res.status(201).json({ message: "Product created", data: newProduct });
  } else {
    // For debugging
    // console.log(ProductValidator.errors);

    let errorMessage = ProductValidator.errors
      .map((error) => {
        return `${error.instancePath.slice(1)} ${error.message}`;
      })
      .join(", ");
    res.status(404).json({
      message: errorMessage,
    });
  }
};

// -------------------- Update Product -------------------- //

let updateProduct = (req, res) => {
  let productId = req.params.id;
  let updatedProduct = req.body;

  if (ProductValidator(updatedProduct)) {
    let product = Products.find((product) => product.id == productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.name = updatedProduct.name;
    product.price = updatedProduct.price;
    res.status(201).json({ message: "Product updated", data: product });
  } else {
    // For debugging
    // console.log(ProductValidator.errors);

    let errorMessage = ProductValidator.errors
      .map((error) => {
        return `${error.instancePath.slice(1)} ${error.message}`;
      })
      .join(", ");
    res.status(404).json({
      message: errorMessage,
    });
  }
};

// -------------------- Delete Product -------------------- //

let deleteProduct = (req, res) => {
  let productId = req.params.id;

  let product = Products.find((product) => product.id == productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  let newProducts = Products.filter((product) => product.id != productId);
  res.status(200).json({ message: "Product deleted", data: newProducts });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
