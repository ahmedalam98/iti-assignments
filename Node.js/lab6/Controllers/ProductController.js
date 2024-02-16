const ProductValidate = require("../Validators/ProductValidate");
const ProductModel = require("../Models/ProductModel");
const AuthController = require("./AuthController");

const { error } = require("ajv/dist/vocabularies/applicator/dependencies");

// ------------------- Get All Products ------------------- //

let GetAllProducts = async (req, res) => {
  let permission = AuthController.authorize(req, res);
  if (permission) {
    var AllProducts = await ProductModel.find({}).exec();
    res.status(200).json(AllProducts);
  } else {
    res.status(404).json({ Message: "access denied" });
  }
};

// ------------------- Get Product By Name ------------------- //

let GetProductByName = async (req, res) => {
  let permission = AuthController.authorize(req, res);
  if (permission) {
    var Name = req.params.name;
    let getProduct = await ProductModel.find({ name: Name }).exec();
    res.status(200).json(getProduct);
  } else {
    res.status(404).json({ Message: "access denied" });
  }
};

// ------------------- Add New Product ------------------- //

let AddNewProduct = async (req, res) => {
  let permission = AuthController.authorize(req, res);
  if (permission) {
    let newProduct = req.body;

    var product = new ProductModel(newProduct);
    await product
      .save()
      .then((instance) => {
        res
          .status(201)
          .json({ Message: "Added Successfully", instance: instance });
      })
      .catch((err) => {
        res.status(404).json({ Message: err.message });
      });
  } else {
    res.status(404).json({ Message: "access denied" });
  }
};

// ------------------- Update Product ------------------- //

let UpdateProductByName = async (req, res) => {
  let permission = AuthController.authorize(req, res);
  if (permission) {
    let Name = req.params.name;
    let newData = req.body;
    if (ProductValidate(newData)) {
      await ProductModel.findOneAndUpdate(
        { name: Name },
        { $set: newData },
        { new: true }
      )
        .exec()
        .then((update) => {
          if (update) {
            res
              .status(201)
              .json({ Message: "Updated Successfully", data: update });
          } else {
            res.status(201).json({ Message: "no such product found" });
          }
        })
        .catch((err) => {
          res.status(404).json({ Message: err.message });
        });
    } else {
      res.status(404).json({ Message: ProductValidate.errors[0].message });
    }
  } else {
    res.status(404).json({ Message: "access denied" });
  }
};

// ------------------- Delete Product ------------------- //

let DeleteProductByName = async (req, res) => {
  let permission = AuthController.authorize(req, res);
  if (permission) {
    let Name = req.params.name;
    await ProductModel.findOneAndDelete({ name: Name })
      .exec()
      .then((deleted) => {
        if (deleted) {
          res
            .status(201)
            .json({ Message: "deleted Successfully", data: deleted });
        } else {
          res.status(201).json({ Error: "no such product found" });
        }
      })
      .catch((err) => {
        res.status(404).json({ Message: err.message });
      });
  } else {
    res.status(404).json({ Message: "access denied" });
  }
};

module.exports = {
  GetAllProducts,
  GetProductByName,
  AddNewProduct,
  UpdateProductByName,
  DeleteProductByName,
};
