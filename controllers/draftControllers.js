const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Draft = require("../models/draftModel");

const createDraft = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const draft = await Draft.create({ name, description });
  if (draft) {
    res.status(201).json({
      id: draft._id,
      name: draft.name,
      description: draft.description,
      createdAt: draft.createdAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

const getDrafts = asyncHandler(async (req, res) => {
  const drafts = await Draft.find({});
  res.json({ drafts });
});

const deleteDraft = asyncHandler(async (req, res) => {
  const { name } = req.body;
  console.log(name);
  await Draft.find({ name }).remove().exec();
  return res.json({ msg: "delete success" });
});

module.exports = { createDraft, getDrafts, deleteDraft };

//            dispatch(
//   moveItem({
//     id: d.id,
//     name: d.name,
//     x: event.x,
//     y: event.y,
//   })
// );
