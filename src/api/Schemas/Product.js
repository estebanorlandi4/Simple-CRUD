const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  stock: Number,
  price: Number,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
