const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
  },
  location: {
    type: String
  },
  photo: {
    type: String
  },
  watchlist: {
    type: array
  }

});
// = new mongoose.Schema({fname:String,lname:String})
const User = mongoose.model("User", UserSchema);
module.exports = User;
