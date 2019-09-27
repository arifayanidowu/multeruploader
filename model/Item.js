const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    img: { type: String }
  },
  { timestamps: true }
);

module.exports = Item = mongoose.model("Item", itemSchema);
