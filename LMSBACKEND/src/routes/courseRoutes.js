// src/routes/courseRoutes.js
const express = require("express");
const {
  createCourse,
  getAllCourses,
} = require("../controllers/courseController");

const router = express.Router();

router.post("/courses", createCourse);
router.get("/courses", getAllCourses);

module.exports = router;
