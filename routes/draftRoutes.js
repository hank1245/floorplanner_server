const express = require("express");
const router = express.Router();
const {
  createDraft,
  getDrafts,
  deleteDraft,
} = require("../controllers/draftControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(createDraft).get(getDrafts).delete(deleteDraft);

module.exports = router;
