require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const searchController = require("./controller/search-controller");

const app = express();

app.use("/search", searchController.sendData);

app.listen(PORT, console.log(`Server is running on ${PORT}`));
