const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    result = await Student.find();
    return res.json(result);
  } catch (err) {
    res.status(501).json({ msg: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, phnno, clas, rollno, batch, session } = req.body;
  try {
    var student = await Student.findOne({ email });
    if (student) {
      return res.status(401).json({ msg: "Student already exists" });
    }
    var newStudent = new Student({
      name,
      email,
      phnno,
      rollno,
      clas,
      batch,
      session,
    });

    await newStudent.save();
    console.log(newStudent);
    console.log("Added");
    return res.json(newStudent);
  } catch (error) {
    console.error("error ", error.message);
    res.status(501).json({ msg: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  const r = req.body;
  //console.log(r._id);
  console.log(req.params.id);
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  try {
    var student = await Student.findById(req.params.id);
    if (!student) {
      return res.json({ msg: "Student not found." });
    }

    student = await Student.findByIdAndUpdate(req.params.id, {
      $set: r,
    });
    return res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }

  const _id = req.params.id;
  console.log("params : ", _id);

  try {
    var vol = await Student.findById(req.params.id);
    if (!vol) {
      return res.status(401).json("No volunteer found.");
    }

    await Student.findByIdAndRemove(req.params.id);

    res.json({ msg: "deleted Successfuly" });
  } catch (error) {
    console.error(error.message);
    res.status(501).json({ msg: "Server error . " });
  }
});

module.exports = router;
