const { response } = require("express");
const asyncHandler = require("express-async-handler");
const Card = require("../models/CardModel");

const createCard = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  console.log(name);
  const card = await Card.create({ name, description });
  if (card) {
    res.status(201).json({
      id: card._id,
      name: card.name,
      description: card.description,
      createdAt: card.createdAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

const getCards = asyncHandler(async (req, res) => {
  const cards = await Card.find({});
  res.json({ cards });
});

const deleteCard = asyncHandler(async (req, res) => {
  const { name } = req.body;
  console.log(name);
  await Card.deleteOne({ name });
  return res.json({ msg: "delete success" });
});

module.exports = { createCard, getCards, deleteCard };
