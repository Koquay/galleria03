const IndexRoutes = require("../index/index.routes");
const productRoutes = require("../product/product.routes");

module.exports = (app) => {
  app.use("/api/collection", productRoutes);
  app.use("/*", IndexRoutes);
};
