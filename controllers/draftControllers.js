const asyncHandler = require("express-async-handler");
const Draft = require("../models/DraftModel");

const createDraft = asyncHandler(async (req, res) => {
  const { cardId, walls, items } = req.body;
  const filter = { cardId };
  const update = { walls, items };
  await Draft.countDocuments(filter);
  let draft = await Draft.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
  });
  if (draft) {
    res.status(201).json({
      msg: "creation success",
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

const getDraft = asyncHandler(async (req, res) => {
  const { cardId } = req.query;
  console.log(cardId);
  const draft = await Draft.findOne({ cardId });
  if (draft) {
    res.status(200).json({
      walls: draft.walls,
      items: draft.items,
    });
  }
});

module.exports = { createDraft, getDraft };
