const express = require("express");
const router = express.Router();
const { getData } = require("../controller/Home");
//banner

router.get("/banner", function (req, res, next) {
  getData('banner_1', (data) => res.send(data));
});

// indexPage_channels
router.get("/channels", function (req, res, next) {
  getData("indexPage_channels", (data) => res.send(data));
});
//indexPage_hotSellProduct
router.get("/hotproduct", function (req, res, next) {
  getData("indexPage_hotSellProduct", (data) => res.send(data));
});

router.get("/endemic", function (req, res, next) {
  getData("indexPage_endemic", (data) => res.send(data));
});

router.get("/arrival", function (req, res, next) {
  getData("indexPage_arrival", (data) => res.send(data));
});
router.get("/categorygoods",  function (req, res, next) {
  getData("indexPage_categoryGoods", (data) => res.send(data));
});
module.exports = router