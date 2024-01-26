const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/toDoRoute.js");

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

//connect mongodb
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to mongodb.."))
  .catch((err) => console.log(err));

app.use(router);
app.listen(PORT, () => console.log(`listening on ${PORT}`));
