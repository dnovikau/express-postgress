var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

const productController = require("../controllers").product;

/* User Router */
router.get("/find", productController.findAll);
router.get("/find/:id", productController.findOne);
router.post("/create", productController.create);
// router.post("/add", productController.add);
router.post("/update/:id", productController.update);
router.post("/delete/:id", productController.delete);

module.exports = router;
