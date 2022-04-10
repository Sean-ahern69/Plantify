const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  intials: {
    type: String,
    // required: true,
  },
  comment: {
    type: Object,
    // required: true,
  }

});
// = new mongoose.Schema({fname:String,lname:String})
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
