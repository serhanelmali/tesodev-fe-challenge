require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const searchController = require("./controller/search-controller");

const app = express();

app.use(cors());

app.use("/search", searchController.sendData);

app.listen(PORT, console.log(`Server is running on ${PORT}`));
