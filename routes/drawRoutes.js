const express = require("express");
const router = express.Router();
const { createDraw, getDraw } = require("../controllers/drawControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(createDraw).get(getDraw);

module.exports = router;
