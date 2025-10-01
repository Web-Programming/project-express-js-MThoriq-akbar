var express = require('express');
var router = express.Router();
var products = require('../data/products.json');

const mainController = require("../controllers/main.js");

/* GET home page. */
router.get("/", mainController.index);

// Search
router.get("/search", mainController.search);

module.exports = router;
