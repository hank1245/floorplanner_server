const mongoose = require("mongoose");

const drawSchema = mongoose.Schema({
  draftId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Draft",
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

module.exports = mongoose.model("Draw", drawSchema);
