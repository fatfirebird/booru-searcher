"use strict";
exports.__esModule = true;
var path = require("path");
var render = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
};
exports["default"] = {
    render: render
};
