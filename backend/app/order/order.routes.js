const router = require("express").Router();
const orderController = require("./order.controler");

router.put("/", orderController.placeOrder);

module.exports = router;
