// Internal Imports
const Service = require("../models/Service");

// Add Service
async function addService(req, res, next) {
  let newService = new Service(req.body);
  // Save Service to Database or Send Error
  try {
    const result = await newService.save();
    res.status(200).json({
      message: "Service added successfully.",
    });
  } catch (err) {
    next(err);
  }
}

// Get All Services
async function getServices(req, res, next) {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addService,
  getServices,
};
