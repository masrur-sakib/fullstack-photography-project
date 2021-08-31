// Internal Imports
const Order = require("../models/Order");

// Add Order
async function addOrder(req, res, next) {
  let newOrder = new Order(req.body);
  // Save Order to Database or Send Error
  try {
    const result = await newOrder.save();
    res.status(200).json({
      message: "Order placed successfully.",
    });
  } catch (err) {
    next(err);
  }
}

// Get All Services
async function getOrders(req, res, next) {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
}

// Update Order Status
async function updateOrderStatus(req, res, next) {
  try {
    const result = await Order.findOneAndUpdate(
      { _id: req.body.id },
      { status: req.body.status },
      { new: true }
    );
    // const result = await Order.updateOne(
    //   { _id: req.body.id },
    //   {
    //     status: req.body.status,
    //   }
    // );

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addOrder,
  getOrders,
  updateOrderStatus,
};
