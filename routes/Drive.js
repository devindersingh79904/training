const express = require("express");
const Drive = require("../models/Drive");
const config = require("config");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    result = await Drive.find();
    return res.json(result);
  } catch (err) {
    res.status(501).json({ msg: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, date, type, description } = req.body;

  try {
    //console.log("Duties : " + dutiesAssigned);
    var companyName = await Drive.findOne({ email });
    if (companyName) {
      return res.json({ msg: "Company already exists" });
    }

    var newCompany = new Drive({
      name,
      email,
      date,
      type,
      description,
    });

    await newCompany.save();
    //return res.json(newUser);
    return res.json({ msg: "Successfully Added" });
  } catch (error) {
    console.error("error ", error.message);
    res.status(501).json({ msg: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  console.log("params : ", _id);

  try {
    var comp = await Drive.findById(req.params.id);
    if (!comp) {
      return res.status(401).json("No Company found.");
    }
    await Drive.findByIdAndRemove(req.params.id);
    res.json({ msg: "deleted Succussfuly" });
  } catch (error) {
    console.error(error.message);
    res.status(501).json({ msg: "Server error . " });
  }
});

module.exports = router;
