const express = require("express");
const Volunteer = require("../models/Volunteer");
const config = require("config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    result = await Volunteer.find();
    return res.json(result);
  } catch (err) {
    res.status(501).json({ msg: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { rollno, name, clas, batch, email, phnno } = req.body;

  try {
    //console.log("Duties : " + dutiesAssigned);
    var user = await Volunteer.findOne({ email });
    if (user) {
      return res.json({ msg: "User Already register" });
    }

    var newUser = new Volunteer({
      rollno,
      name,
      clas,
      batch,
      email,
      phnno,
      dutiesAssigned: 0,
      dutiesAccepted: 0,
      workDone: 0,
    });

    await newUser.save();
    //return res.json(newUser);
    return res.json({ msg: "Successfully Added" });
  } catch (error) {
    console.error("error ", error.message);
    res.status(501).json({ msg: "Server error" });
  }
});

router.delete("/", (req, res) => {});

router.patch("/", (req, res) => {});

router.patch("/", (req, res) => {});

router.patch("/", (req, res) => {});

module.exports = router;
