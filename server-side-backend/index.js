// External Imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Internal Imports
const loginRouter = require("./routers/loginRouter");
const servicesRouter = require("./routers/servicesRouter");
const ordersRouter = require("./routers/ordersRouter");

const app = express();
dotenv.config();

// cors error handling
app.use(cors());

// MondoDB Database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connection Successful."))
  .catch((err) => console.log(err));

// Request Parser
app.use(express.json());

// Routing Setup
app.use("/login", loginRouter);
app.use("/services", servicesRouter);
app.use("/orders", ordersRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening to port ${process.env.PORT}.`);
});
