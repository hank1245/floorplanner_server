const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Please add a name"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);
