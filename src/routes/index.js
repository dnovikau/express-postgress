var express = require("express");
var router = express.Router();
var debug = require("debug")("app:router");

/* GET home page. */
router.get("/", function (req, res, next) {
  debug("navigated to index");
  res.render("index", { title: "Express" });
});

module.exports = router;
