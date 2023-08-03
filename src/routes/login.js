const express = require("express");
const router = express.Router();

const loginController = require('../controllers').login;

/* Authorize user. */
router.post("/", loginController.login);

module.exports = router;