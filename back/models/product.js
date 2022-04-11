const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  seller_id: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  photo: {
    type: String
    // required: true,
  },
  sold: {
    type: Boolean
    // required: true,
  },
  location: {
    type: String
    // required: true,
  },
  comments: {
    type: Array
    // required: true,
  },
  tags: {
    type: Object
    // required: true,
  }


});
// = new mongoose.Schema({fname:String,lname:String})
const product = mongoose.model("product", ProductSchema);
module.exports = product;
