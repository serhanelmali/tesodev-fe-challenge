require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const path = require("path");
const searchController = require("./controller/searchController");

const app = express();

app.use("/", express.static(path.join(__dirname, "../frontend/build")));
app.use("/search", searchController.sendData);

app.listen(PORT, console.log(`Server is running on ${PORT}`));
