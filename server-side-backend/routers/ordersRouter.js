// External Imports
const express = require("express");
const { addOrder, getOrders } = require("../controllers/ordersController");

const router = express.Router();

// Add New Order
router.post("/addOrder", addOrder);

// Fetch All Orders
router.get("/", getOrders);

module.exports = router;
