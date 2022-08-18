const asyncHandler = require("express-async-handler");
const Draw = require("../models/drawModel");

const createDraw = asyncHandler(async (req, res) => {
  const { draftId, walls, items } = req.body;
  const filter = { draftId };
  const update = { walls, items };
  await Draw.countDocuments(filter);
  let draw = await Draw.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
  });
  if (draw) {
    res.status(201).json({
      msg: "creation success",
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

const getDraw = asyncHandler(async (req, res) => {
  const { draftId } = req.query;
  console.log(draftId);
  const draw = await Draw.findOne({ draftId });
  if (draw) {
    res.status(200).json({
      walls: draw.walls,
      items: draw.items,
    });
  }
});

module.exports = { createDraw, getDraw };
