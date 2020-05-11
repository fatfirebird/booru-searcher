"use strict";
exports.__esModule = true;
var express = require("express");
var imagesController_1 = require("../controllers/imagesController");
var router = express.Router();
router.get('/', imagesController_1["default"].render);
exports["default"] = router;
