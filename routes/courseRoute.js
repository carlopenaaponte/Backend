const express = require("express");
const courseRouter = express.Router();
// Importamos los controllers necesarios
const courseController = require("../controllers/courseController");

courseRouter.get("/", courseController.getCourses);

courseRouter.get("/:id", courseController.getCourseById);

courseRouter.post("/", courseController.createCourse);

courseRouter.put("/:id", courseController.updateCourse);

courseRouter.delete("/:id", courseController.deleteCourse);

module.exports = courseRouter;
