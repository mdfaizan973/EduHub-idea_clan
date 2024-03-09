// src/controllers/userController.js
const User = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, courses } = req.body;
    console.log("Received courses:", courses); // Add this line to check the courses data
    const newUser = new User({ name, email, password, courses });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { registerUser, getAllUsers };
