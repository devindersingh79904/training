const express = require("express");
const Drive = require("../models/Drive");
const config = require("config");
const router = express.Router();
const auth = require("../middleware/auth");
const Volunteer = require("../models/Volunteer");

router.get("/", async (req, res) => {
  try {
    result = await Drive.find();
    return res.json(result);
  } catch (err) {
    res.status(501).json({ msg: "Server error" });
  }
});

router.post("/", async (req, res) => {
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  const { name, email, date, type, description, volunteersOnDuty } = req.body;

  console.log(name, email);
  try {
    //console.log("Duties : " + dutiesAssigned);
    var companyName = await Drive.findOne({ email, type });
    if (companyName) {
      return res.status(401).json({ msg: "Company already exists" });
    }

    var newCompany = new Drive({
      name,
      email,
      date,
      type,
      description,
      volunteersOnDuty,
    });

    const compdetail = {
      _id: newCompany._id,
      name: newCompany.name,
    };
    volunteersOnDuty.map(async (vol) => {
      console.log(vol._id);
      await Volunteer.findByIdAndUpdate(vol._id, {
        $push: { companies: { _id: newCompany._id, name: newCompany.name } },
      });
    });

    await newCompany.save();
    return res.json(newCompany);
  } catch (error) {
    console.error("error ", error.message);
    res.status(501).json({ msg: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  if (req.user.role != "Sadmin") {
    return res.status(401).json({ msg: "You are not Authorized user" });
  }

  // const _id = req.params.id;
  // console.log("params : ", _id);

  try {
    var comp = await Drive.findById(req.params.id);
    if (!comp) {
      return res.status(401).json("No Company found.");
    }
    await Drive.findByIdAndRemove(req.params.id);
    res.json({ msg: "deleted Sucessfully" });
  } catch (error) {
    console.error(error.message);
    res.status(501).json({ msg: "Server error . " });
  }
});

module.exports = router;
