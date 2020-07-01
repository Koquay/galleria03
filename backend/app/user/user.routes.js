const router = require("express").Router();
const userController = require("./user.controller");

router.post("/", userController.login);

module.exports = router;
