const express = require("express");
// const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// app.use(cors());
app.use(bodyParser.json());

app.get("/api/hi", (req, res) => {
  res.send("hi from /api/hi");
});

app.get("/api/env", (req, res) => {
  res.send({ env: process.env });
});

app.get("/hi", (req, res) => {
  res.send("hi from /hi");
});

app.listen(5000, err => {
  if (err) {
    console.log("API err", err);
  }
  console.log("Api Listening on: http://api:5000");
});
