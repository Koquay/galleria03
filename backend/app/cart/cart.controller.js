const cartService = require("./cart.service");

exports.addToCart = async (req, res) => {
  console.log("req.body", req.body);
  console.log("req.params", req.params);
  console.log("req.query", req.query);

  try {
    await cartService.addToCart(req, res);
  } catch (error) {
    throw error;
  }
};
