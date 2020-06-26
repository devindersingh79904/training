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

router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  console.log("params : ", _id);

  try {
    var vol = await Volunteer.findById(req.params.id);
    if (!vol) {
      return res.status(401).json("No volunteer found.");
    }
    await Volunteer.findByIdAndRemove(req.params.id);
    res.json({ msg: "deleted Succussfuly" });
  } catch (error) {
    console.error(error.message);
    res.status(501).json({ msg: "Server error . " });
  }
});

router.put("/dasign/:id", async (req, res) => {
  try {
    var volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.json({ msg: "volunteer not found." });
    }

    volunteer = await Volunteer.findByIdAndUpdate(req.params.id, {
      $inc: {
        dutiesAssigned: 1,
      },
    });
    return res.json(volunteer);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({ msg: "Server error" });
  }
});

router.put("/daccept/:id", async (req, res) => {
  try {
    var volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.json({ msg: "volunteer not found." });
    }

    volunteer = await Volunteer.findByIdAndUpdate(req.params.id, {
      $inc: {
        dutiesAccepted: 1,
      },
    });
    return res.json(volunteer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

router.put("/work/:id", async (req, res) => {
  try {
    var volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.json({ msg: "volunteer not found." });
    }

    volunteer = await Volunteer.findByIdAndUpdate(req.params.id, {
      $inc: {
        workDone: 1,
      },
    });
    return res.json(volunteer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;