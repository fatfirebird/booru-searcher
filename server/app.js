"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var homeRouter_1 = require("./routes/homeRouter");
var imagesRouter_1 = require("./routes/imagesRouter");
var app = express();
var PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());
app.use('/images', imagesRouter_1["default"]);
app.use('*', homeRouter_1["default"]);
app.listen(PORT, function () {
    console.log(PORT);
});
