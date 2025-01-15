const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.static("CSS"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.listen(3000, () => {
  console.log("Server started at 3000");
});
