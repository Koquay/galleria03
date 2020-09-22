require("./order.model");
require("../cart/cart.model");

const Order = require("mongoose").model("Order");
const Cart = require("mongoose").model("Cart");
const jwt = require("jsonwebtoken");

exports.placeOrder = async (req, res) => {
  const { orderData } = req.body;

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    const cart = await Cart.findOne({ user: userId }).populate({
      path: "products.product",
      model: "Product",
    });

    const { cartTotal, stripeTotal } = calculateCartTotal(cart.products);

    const order = await new Order({
      user: userId,
      email: orderData.email,
      total: cartTotal,
      products: cart.products,
    });

    const returnData = {
      order,
      message: "Your order was successfully placed.",
    };

    res.status(200).json(returnData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing order!");
  }
};

function calculateCartTotal(products) {
  const total = products.reduce((acc, el) => {
    acc += el.product.price * el.quantity;
    return acc;
  }, 0);

  const cartTotal = ((total * 100) / 100).toFixed(2);
  const stripeTotal = Number((total * 100).toFixed(2));

  return { cartTotal, stripeTotal };
}
