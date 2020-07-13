const router = require("express").Router();
const cartController = require("./cart.controller");

router.put("/1", cartController.addToCart);
router.delete("/1", cartController.deleteItem);
router.delete("/1/2", cartController.clearCart);

module.exports = router;
