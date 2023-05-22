const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  E_mail: String,
  E_password: String,
  E_stats: Object
});

module.exports = mongoose.model("Product", productSchema);
