require("../cart/cart.model");
require("../product/product.model");

const isLength = require("validator/lib/isLength");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Cart = require("mongoose").model("Cart");
const Product = require("mongoose").model("Product");
const chalk = require("chalk");

const { ObjectId } = mongoose.Types;

exports.clearCart = async (req, res) => {
  if (!("authorization" in req.headers)) {
    res.status(402).send("No access token");
  }

  const { userId } = await jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );

  try {
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $set: { products: [] } },
      { new: true }
    );

    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).send("ERROR CLEARING CART!");
  }
};

exports.deleteItem = async (req, res) => {
  if (!("authorization" in req.headers)) {
    res.status(402).send("No access token");
  }
  const { productId, size } = req.query;

  const { userId } = await jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );

  try {
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { products: { product: productId, size: size } } },
      { new: true }
    ).populate({
      path: "products.product",
      model: "Product",
    });

    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).send("ERROR DELETING ITEM");
  }
};

exports.addToCart = async (req, res) => {
  if (!("authorization" in req.headers)) {
    return res.status(401).send("No access token");
  }

  const { productId, size, quantity } = req.body;

  if (!isLength(size, { min: 1 })) {
    return res.status(401).send("Please select a size");
  }
  if (!quantity) {
    return res.status(401).send("Please select a quantity");
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    const cart = await Cart.findOne({ user: userId });

    const productExists = cart.products.some(
      (doc) => ObjectId(productId).equals(doc.product) && size === doc.size
    );

    let updatedCart;

    if (productExists) {
      updatedCart = await Cart.findOneAndUpdate(
        { _id: cart._id, "products.product": productId },
        { $inc: { "products.$.quantity": quantity } },
        { new: true }
      ).populate({
        path: "products.product",
        model: "Product",
      });
    } else {
      const newProduct = { product: productId, quantity, size };

      updatedCart = await Cart.findByIdAndUpdate(
        { _id: cart._id },
        { $addToSet: { products: newProduct } },
        { new: true }
      ).populate({
        path: "products.product",
        model: "Product",
      });
    }

    return res.status(200).json(updatedCart);
  } catch (error) {
    console.error(error);
    return res.status(403).send("PRoblem adding item to cart");
  }
};
