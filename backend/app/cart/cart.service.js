require("../cart/cart.model");
require("../product/product.model");

const isLength = require("validator/lib/isLength");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Cart = require("mongoose").model("Cart");
const Product = require("mongoose").model("Product");

const { ObjectId } = mongoose.Types;

exports.addToCart = async (req, res) => {
  if (!("authorization" in req.headers)) {
    console.log("authorization not found");
    return res.status(401).send("No access token");
  }

  const { productId, size, quantity } = req.body;
  console.log("productId, size, quantity", productId, size, quantity);

  console.log("authorization", req.headers.authorization);

  if (!isLength(size, { min: 1 })) {
    console.log("size is required");
    return res.status(401).send("Please select a size");
  }
  if (!quantity) {
    console.log("quantity is required");
    return res.status(401).send("Please select a quantity");
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    console.log("userId", userId);

    const cart = await Cart.findOne({ user: userId });
    console.log("cart", cart);

    const productExists = cart.products.some(
      (doc) => ObjectId(productId).equals(doc.product) && size === doc.size
    );

    console.log("productExists", productExists);

    let updatedCart;

    if (productExists) {
      updatedCart = await Cart.findOneAndUpdate(
        { _id: cart._id, "products.product": productId },
        { $inc: { "products.$.quantity": quantity } },
        { new: true }
      );
    } else {
      const newProduct = { product: productId, quantity, size };

      updatedCart = await Cart.findByIdAndUpdate(
        { _id: cart._id },
        { $addToSet: { products: newProduct } },
        { new: true }
      );
    }

    return res.status(200).json(updatedCart);
  } catch (error) {
    console.error(error);
    return res.status(403).send("PRoblem adding item to cart");
  }
};
