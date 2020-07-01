const router = require("express").Router();
const cartController = require("./cart.controller");

router.put("/1", cartController.addToCart);

module.exports = router;
