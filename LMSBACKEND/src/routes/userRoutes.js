// src/routes/userRoutes.js
const express = require("express");
const {
  registerUser,
  getAllUsers,
  deleteUserById,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.get("/users", getAllUsers);
router.delete("/:id", deleteUserById);
module.exports = router;
