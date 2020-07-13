require("./user.model");
require("../cart/cart.model");
const chalk = require("chalk");
const User = require("mongoose").model("User");
const Cart = require("mongoose").model("Cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isEmail = require("validator/lib/isEmail");
const isLength = require("validator/lib/isLength");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // throw new Error('affdsdsf');

    if (!isLength(password, { min: 6 })) {
      return res.status(422).send("Password must be minumum 6 characters");
    } else if (!isEmail(email)) {
      return res.status(422).send("Invalid email");
    }

    const user = await User.findOne({ email }).select("+password");

    console.log("user", user);

    if (!user) {
      return res.status(404).send("User does not exist");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      console.log("token", token);

      const cart = await Cart.findOne({ user: user._id }).populate({
        path: "products.product",
        model: "Product",
      });
      console.log("cart", cart);

      res.status(200).json({ token, cart });
    } else {
      res.status(401).send("Invalid login information");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error logging in user!");
  }
};
