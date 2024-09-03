const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("Notes API developed by Shujauddin");
});

app.get("/note", (req, res) => {
  res.send("Node");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started at port " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
