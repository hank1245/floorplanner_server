const express = require("express");
const router = express.Router();
const {
  createCard,
  getCards,
  deleteCard,
} = require("../controllers/cardControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(createCard).get(getCards).delete(deleteCard);

module.exports = router;
