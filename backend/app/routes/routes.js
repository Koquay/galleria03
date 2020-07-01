const IndexRoutes = require("../index/index.routes");
const productRoutes = require("../product/product.routes");
const cartRoutes = require("../cart/cart.routes");
const userRoutes = require("../user/user.routes");

module.exports = (app) => {
  app.use("/api/collection", productRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/login", userRoutes);
  app.use("/*", IndexRoutes);
};
