const getStudentsQuery = "select * from students";

const getStudentByIdQuery = `select * from students where id=$1`;

const checkStudentExist = "select * from students where email=$1";

const addStudentQuery =
  "insert into students (name,email,age,dob) values($1,$2,$3,$4)";

const deleteStudentUsingId = "delete from students where id in($1)";
const updateStudentQuery =
  "update students set name=$2,email=$3,age=$4,dob=$5 where id=$1";
module.exports = {
  getStudentsQuery,
  getStudentByIdQuery,
  checkStudentExist,
  addStudentQuery,
  deleteStudentUsingId,
  updateStudentQuery,
};
