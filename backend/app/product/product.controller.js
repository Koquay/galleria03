const productService = require("./product.service");
const chalk = require("chalk");

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts(res, req.query.filters);
  } catch (error) {
    throw error;
  }
};
