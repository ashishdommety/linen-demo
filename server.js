const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

//body-parser stuff
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
// app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, function() {
  console.log("App running on port:" + PORT);
});
