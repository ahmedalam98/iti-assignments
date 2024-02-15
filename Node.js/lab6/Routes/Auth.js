const express = require("express");
const router = express.Router();

// Importing the User Controller
const UserController = require("../Controllers/UserController");

// Routes
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);

module.exports = router;
