const express = require("express");
const router = express.Router();
const { createDraft, getDrafts } = require("../controllers/draftControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(createDraft).get(getDrafts);

module.exports = router;
