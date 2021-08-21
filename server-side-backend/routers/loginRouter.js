// External Imports
const express = require("express");
const { addPeople } = require("../controllers/loginController");

const router = express.Router();

// Register - Add People
router.post("/addPeople", addPeople);

// Login
router.get("/", (req, res) => {
  res.send("Get People Logged In");
});

module.exports = router;
