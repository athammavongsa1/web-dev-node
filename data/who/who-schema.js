const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    avatarIcon: String,
    userName: String,
    handle: String,
    key: Number,
  },

  { collection: "who" }
);
module.exports = schema;
