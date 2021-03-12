const express = require("express");
const router = express.Router();
const { getItemData } = require("../controller/Home");

router.get("/:index", async function (req, res, next) {
  res.send(await getItemData(req.params.index));
});
module.exports = router