// External Imports
const express = require("express");
const { addPeople, processLogin } = require("../controllers/loginController");

const router = express.Router();

// Register - Add People
router.post("/addPeople", addPeople);

// Login
router.post("/", processLogin);

module.exports = router;
