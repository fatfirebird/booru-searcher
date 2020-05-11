"use strict";
exports.__esModule = true;
var express = require("express");
var homeController_1 = require("../controllers/homeController");
var router = express.Router();
router.get('/', homeController_1["default"].render);
exports["default"] = router;
