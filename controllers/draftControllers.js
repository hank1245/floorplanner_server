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

module.exports = { createDraft, getDrafts };
