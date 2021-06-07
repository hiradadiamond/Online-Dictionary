var express = require("express");
var bodyParser = require("body-parser");
var word = require("./word");
var path = require('path');
var connection = require("./connection");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');


app.get("/", function (req, res) {
  res.render("view");
});

app.post("/word", function (req, res) {
  const searchValue = req.body.searchKey;
  console.log(searchValue);
  word.word(searchValue, connection.connection, function (response) {
    res.render("view", { responses: response });
  });
});


var server = app.listen(3000, function () {
  console.log("Node server is running..");
});
