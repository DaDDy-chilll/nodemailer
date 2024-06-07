const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const path = require('path')
const userRoute = require("./Routes/userRoute");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'..','client','dist')))

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our chat API...");
});

const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
mongoose.set('strictQuery', true);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
