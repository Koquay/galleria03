const router = require("express").Router();
const IndexController = require("./index.controller");

router.get("/", IndexController.getCollection);

module.exports = router;
