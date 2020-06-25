const productController = require("./product.controller");

const router = require("express").Router();

router.get("/", productController.getProducts);

module.exports = router;
