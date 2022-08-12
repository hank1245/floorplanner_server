const express = require("express");
const router = express.Router();
const {} = require("../controllers/draftControllers");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
