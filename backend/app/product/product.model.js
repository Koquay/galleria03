const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  list_price: Number,
  rating: String,
  images: [],
  category: String,
});

mongoose.model("Product", ProductSchema, "product");
