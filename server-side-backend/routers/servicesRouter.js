// External Imports
const express = require("express");
const {
  addService,
  getServices,
} = require("../controllers/servicesController");

const router = express.Router();

// Add New Service
router.post("/addService", addService);

// Get All Services
router.get("/", getServices);

module.exports = router;
