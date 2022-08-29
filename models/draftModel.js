const mongoose = require("mongoose");

const draftSchema = mongoose.Schema({
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Card",
  },
  walls: [
    {
      id: String,
      x1: Number,
      y1: Number,
      x2: Number,
      y2: Number,
    },
  ],
  items: [
    {
      id: String,
      name: String,
      x: Number,
      y: Number,
    },
  ],
});

module.exports = mongoose.model("Draft", draftSchema);
