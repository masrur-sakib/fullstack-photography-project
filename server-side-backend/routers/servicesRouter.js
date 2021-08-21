// External Imports
const express = require("express");
const {
  addService,
  getServices,
  getServiceDetail,
} = require("../controllers/servicesController");

const router = express.Router();

// Add New Service
router.post("/addService", addService);

// Get All Services
router.get("/", getServices);

// Get Selected Service Detail
router.get("/:serviceId", getServiceDetail);

module.exports = router;
