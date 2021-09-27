require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const { sendData } = require("./controller/search-controller");

const app = express();

app.use("/search", sendData);

app.listen(PORT, console.log(`Server is running on ${PORT}`));
