// Importamos los models necesarios
const courseModel = require("../models/courseModel");

const getCourses = async (req, res) => {
  const cursos = await courseModel.getCourses();
  res.json(cursos);
};

const getCourseById = async (req, res) => {
  const id = parseInt(req.params.id);
  const course = await courseModel.getCourseById(id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Curso no encontrado" });
  }
};

const createCourse = async (req, res) => {
  const createdCourse = await courseModel.createCourse(req.body);
  if (createdCourse) {
    res.json(createdCourse);
  } else {
    res.status(500).json({ message: "Se rompió el servidor" });
  }
};

const updateCourse = async (req, res) => {
  const id = parseInt(req.params.id);
  const course = await courseModel.getCourseById(id);
  if (course) {
    const updatedCourse = await courseModel.updateCourse(parseInt(req.params.id), {
      ...course,
      ...req.body,
    });

    if (updatedCourse) {
      res.json(updatedCourse);
    } else {
      res.status(500).json({ message: "Se rompió el servidor" });
    }
  } else {
    res.status(404).json({ message: "Curso no encontrado" });
  }
};

const deleteCourse = async (req, res) => {
  const id = parseInt(req.params.id);
  const course = await courseModel.getCourseById(id);
  if (course) {
    const result = await courseModel.deleteCourse(parseInt(req.params.id));

    if (result) {
      res.json(course);
    } else {
      res.status(500).json({ message: "Se rompió el servidor" });
    }
  } else {
    res.status(404).json({ message: "Curso no encontrado" });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};