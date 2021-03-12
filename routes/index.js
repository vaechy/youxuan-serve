var express = require("express");
var router = express.Router();
const { getData } = require("../controller/Home");
const { getItemData } = require("../controller/Home");
require('./home')
require('./items')
router.get("/", function (req, res, next) {
  console.log();
  res.render("index", { title: "Express" });
});


module.exports = router;
