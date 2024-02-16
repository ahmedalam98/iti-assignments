const OrderValidate = require("../Validators/OrderValidate");
const OrderModel = require("../Models/OrderModel");

// ------------------------- Get All Orders ------------------------- //

let GetAllOrders = (req, res) => {
  var AllOrders = OrderModel.GetAll();
  res.status(200).json(AllOrders);
};

// ------------------------- Get Order By ID ------------------------- //

let GetOrderByID = (req, res) => {
  var ID = req.params.id;

  let getOrder = OrderModel.GetOrderById(ID);

  res.status(200).json(getOrder);
};

// ------------------------- Add New Order ------------------------- //

let AddNewOrder = (req, res) => {
  let newOrder = req.body;

  if (OrderValidate(newOrder)) {
    var Order = new OrderModel(newOrder.items, newOrder.price);
    let createdOrder = Order.SaveOrder();

    res.status(201).json({ Message: "Added Successfully", data: createdOrder });
  } else {
    res.status(404).json({ Message: OrderValidate.errors[0].message });
  }
};

// ------------------------- Update Order By ID ------------------------- //

let UpdateOrderByID = (req, res) => {
  let ID = req.params.id;

  let newData = req.body;

  if (OrderValidate(newData)) {
    let updated = OrderModel.UpdateOrderByID(ID, newData);
    res.status(201).json({ Message: "Updated Successfully", data: updated });
  } else {
    res.status(404).json({ Message: OrderValidate.errors[0].message });
  }
};

// ------------------------- Delete Order By ID ------------------------- //

let DeleteOrderByID = (req, res) => {
  let ID = req.params.id;

  let removedEle = OrderModel.DeleteOrderByID(ID);

  res.status(200).json({ Message: "Deleted Successfully", data: removedEle });
};

module.exports = {
  GetAllOrders,
  GetOrderByID,
  AddNewOrder,
  UpdateOrderByID,
  DeleteOrderByID,
};
