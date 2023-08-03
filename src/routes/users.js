var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/",  function (req, res, next) {
  res.send("respond with a resource");
});

const usersController = require("../controllers").user;

/* User Router */
router.get("/find", usersController.findAll);
router.get("/find/:id", usersController.findOne);
router.post("/create", usersController.create);
router.post("/update/:id", usersController.update);
router.post("/delete/:id", usersController.delete);

module.exports = router;
