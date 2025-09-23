const express = require("express");
const router = express.Router();

//user controllers

const { register, login, checkUser } = require("../controller/userController");

//Registration route

router.post("/register", register);

//Login users
router.post("/login", login);

//check users

router.get("/check", checkUser);

module.exports = router;
