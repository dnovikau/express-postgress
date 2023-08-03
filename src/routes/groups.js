var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

const groupController = require("../controllers").group;

/* User Router */
router.get("/find", groupController.findAll);
router.get("/find/:id", groupController.findOne);
router.post("/create", groupController.create);
router.post("/add", groupController.add);
router.post("/update/:id", groupController.update);
router.post("/delete/:id", groupController.delete);

module.exports = router;
