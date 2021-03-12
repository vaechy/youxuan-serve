const express = require("express");
const router = express.Router();
const fs = require("fs");
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/a", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.set({
    "content-type": "text/html",
  });
  // fs.readFile("a.jpg", (err, data) => {
  //   if (!err) {
  //     res.send(data);
  //   }
  // });
  let data = [];
  const rs = fs.createReadStream("1.html");
  rs.on("data", (chunk) => {
    data.push(chunk);
  });
  rs.on("end", () => {
    res.send(Buffer.concat(data));
    rs.close;
  });
});
module.exports = router