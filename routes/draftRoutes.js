const express = require("express");
const router = express.Router();
const { createDraft, getDraft } = require("../controllers/draftControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(createDraft).get(getDraft);

module.exports = router;
