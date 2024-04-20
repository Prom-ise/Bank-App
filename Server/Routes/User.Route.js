const express = require("express");
const router = express.Router();
const { register, login, dashboard, profile, uploadPic } = require("../Controllers/User.Controller");

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", dashboard);
router.get("/profile", profile);
router.post("/uploadPic", uploadPic);

module.exports = router;