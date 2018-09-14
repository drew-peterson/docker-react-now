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
  res.json({ env: process.env });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (err) {
    console.log("API err", err);
  }
  console.log("Api Listening on: http://api:5000");
});
