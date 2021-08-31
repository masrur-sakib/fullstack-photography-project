// External Imports
const express = require("express");
const {
  addOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/ordersController");

const router = express.Router();

// Add New Order
router.post("/addOrder", addOrder);

// Fetch All Orders
router.get("/", getOrders);

// Update Order Status
router.patch("/updateOrderStatus", updateOrderStatus);

module.exports = router;
