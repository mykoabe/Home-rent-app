const express = require("express");
const { login, getMe, register } = require("../controller/auth");
const { protect } = require("../middleware/auth");

const router = express.Router();
router.post("/register", register)
router.post("/login", login);
router.get("/me", protect, getMe);

module.exports = router;
