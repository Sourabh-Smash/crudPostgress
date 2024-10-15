const pool = require("../../db.js");
const {
  getStudentsQuery,
  getStudentByIdQuery,
  checkStudentExist,
  addStudentQuery,
  deleteStudentUsingId,
  updateStudentQuery,
} = require("./queries.js");

const getStudents = (req, res) => {
  pool.query(getStudentsQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  pool.query(getStudentByIdQuery, [parseInt(req?.params?.id)], (error, results) => {
    if (error) throw error;
    res.status(201).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  console.log(email);
  pool.query(checkStudentExist, [email], (err, result) => {
    console.log(result?.rows);
    if (err) throw new err();
    else if (result?.rows?.length > 0) throw new Error("Email already exists");

    pool.query(addStudentQuery, [name, email, age, dob], (err, result) => {
      if (err) throw err;
      res.status(201).json(result);
    });
  });
};

const deleteStudent = (req, res) => {
  pool.query(getStudentByIdQuery, [req.params.id], (error, result) => {
    if (error) throw error;
    if (result?.rows?.length === 0) throw new Error("Student does not exists");

    pool.query(deleteStudentUsingId, [req?.params?.id], (error, result) => {
      if (error) throw error;
      res.status(201).json(result);
    });
  });
};

const updateStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(getStudentByIdQuery, [req?.params?.id], (error, result) => {
    if (error) throw error;
    else if (result?.rows?.length === 0)
      throw new Error("wrong id no student found");

    pool.query(
      updateStudentQuery,
      [req?.params?.id, name, email, age, dob],
      (error, result) => {
        if (error) throw error;
        res.status(201).json(result);
      }
    );
  });
};
module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent,
};
