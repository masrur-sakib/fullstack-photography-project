// External Imports
const express = require("express");

const router = express.Router();

// Register - Add People
router.post("/addPeople", (req, res) => {
  res.send("Add People");
});

// Login
router.get("/", (req, res) => {
  res.send("Get People Logged In");
});

module.exports = router;
