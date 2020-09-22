const cartService = require("./cart.service");

exports.addToCart = async (req, res) => {
  try {
    await cartService.addToCart(req, res);
  } catch (error) {
    throw error;
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await cartService.deleteItem(req, res);
  } catch (error) {
    throw error;
  }
};

exports.clearCart = async (req, res) => {
  try {
    await cartService.clearCart(req, res);
  } catch (error) {
    throw error;
  }
};
