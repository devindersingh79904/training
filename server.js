const express = require("express");
const db = require("./config/Db");

const adminAuth = require("./routes/adminAuth");
const adminRegister = require("./routes/adminRegister");
const Volunteer = require("./routes/Volunteer");

const app = express();

db();
app.use(express.json({ extened: false }));

app.use("/api/adminAuth", adminAuth);
app.use("/api/adminRegister", adminRegister);
app.use("/api/Volunteer", Volunteer);

app.get("/", (req, res) => {
  return res.json({
    msg: "Welcome to the Training and placement cell Management system",
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is start on Port  : ${PORT}`);
});
