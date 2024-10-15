const express = require("express");
const studentRoutes = require("./src/student/router.js");
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello");
// });
app.use(express.json());
app.use("/api/v1/students", studentRoutes);
app.listen(PORT, () => console.log(`Server is listning on ${PORT}`));
