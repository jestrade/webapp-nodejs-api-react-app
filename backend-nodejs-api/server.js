"use strict";

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");

const config = require("./config");
const api = require("./api/v1");

mongoose.connect(config.db.url);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", api);
app.use("/api/v1", api);


const port = 8080;
const server = app.listen(port, function () {
  console.log("App now running...");
});
