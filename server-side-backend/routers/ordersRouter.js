// External Imports
const express = require("express");

const router = express.Router();

// Add New Order
router.post("/addOrder", (req, res) => {
  res.send("Add New Order");
});

// Fetch All Orders
router.get("/", (req, res) => {
  res.send("Fetch All Orders");
});

module.exports = router;
