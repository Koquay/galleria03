const productService = require("./product.service");
const chalk = require("chalk");

exports.getProducts = async (req, res) => {
  console.log(chalk.blue("PRODUCT CONTROLLER"));
  console.log(chalk.cyan("req.query", req.query));

  try {
    const products = await productService.getProducts(res, req.query.filters);
    // console.log("products", products);
    // res.status(200).json(products);
  } catch (error) {
    throw error;
  }
};
