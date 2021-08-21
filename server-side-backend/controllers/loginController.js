// Internal Imports
const People = require("../models/People");

// Add People
async function addPeople(req, res, next) {
  let newPeople = new People(req.body);
  // Save People to Database or Send Error
  try {
    const result = await newPeople.save();
    res.status(200).json({
      message: "Your Registration was Successful.",
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addPeople,
};
