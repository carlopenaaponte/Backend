// Trabajamos todo lo que tiene que ver con los datos de course en la base de datos
const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "platform",
  connectionLimit: 5,
});

const getCourses = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT id, name, name_teacher, name_student, date FROM course;"
    );

    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }
  return false;
};

const getCourseById = async (id) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT id, name, name_teacher, name_student, date FROM course WHERE id=?",
      [id]
    );

    return rows[0];
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }
  return false;
};

const createCourse = async (course) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const response = await conn.query(
      `INSERT INTO course(name, name_teacher, name_student, date) VALUE(?, ?, ?, ?)`,
      [course.name, course.name_teacher, course.name_student, course.date]
    );

    return { id: parseInt(response.insertId), ...course };
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }
  return false;
};

const updateCourse = async (id, course) => {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(
      `UPDATE course SET name=?, name_teacher=?, name_student=?, date=? WHERE id=?`,
      [course.name, course.name_teacher, course.name_student, course.date, course.id]
    );

    return { id, ...course };
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }
  return false;
};

const deleteCourse = async (id) => {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query("DELETE FROM course WHERE id=?", [id]);

    return true;
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }
  return false;
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};