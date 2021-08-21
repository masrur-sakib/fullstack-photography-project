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

// Process Login
async function processLogin(req, res, next) {
  try {
    const user = await People.findOne({ email: req.body.email });

    if (user && user._id) {
      const passwordIsValid = req.body.password === user.password;

      if (passwordIsValid) {
        const userData = {
          _id: user._id,
          email: user.email,
          role: user.role,
        };

        res.status(200).json({
          userData,
          message: "You are logged in successfully.",
        });
      }
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addPeople,
  processLogin,
};
