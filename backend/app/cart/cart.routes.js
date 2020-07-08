const router = require("express").Router();
const cartController = require("./cart.controller");

router.put("/1", cartController.addToCart);
router.delete('/1', cartController.deleteItem)

module.exports = router;
