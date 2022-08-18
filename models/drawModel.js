const mongoose = require("mongoose");

const drawSchema = mongoose.Schema({
  draftId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Draft",
  },
  walls: [[Number]],
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
