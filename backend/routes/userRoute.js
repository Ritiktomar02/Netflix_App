const express = require("express");
const { Register, Login, Logout } = require("../controllers/user.js");

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", Logout);

module.exports = router;