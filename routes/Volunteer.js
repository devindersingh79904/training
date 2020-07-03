const express = require("express");
const Volunteer = require("../models/Volunteer");
const router = express.Router();
const auth = require("../middleware/auth");
const Drive = require("../models/Drive");

router.get("/", async (req, res) => {
  try {
    result = await Volunteer.find();
    return res.json(result);
  } catch (err) {
    res.status(501).json({ msg: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    result = await Volunteer.findById(req.params.id);
    return res.json(result);
  } catch (err) {
    res.status(501).json({ msg: "Server error" });
  }
});

router.post("/", async (req, res) => {
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }

  const { rollno, name, clas, batch, email, phnno, companies } = req.body;
  console.log(rollno, name, clas, batch, email, phnno);
  try {
    //console.log("Duties : " + dutiesAssigned);
    var user = await Volunteer.findOne({ email });
    if (user) {
      return res.status(401).json({ msg: "User Already register" });
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
      present: 0,
      workshopAssigned: 0,
      workshopDone: 0,
      companies,
    });

    await newUser.save();
    return res.json(newUser);
    // return res.json({ msg: 'Successfully Added' });
  } catch (error) {
    console.error("error ", error.message);
    res.status(501).json({ msg: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  const _id = req.params.id;
  console.log("params : ", _id);

  try {
    var vol = await Volunteer.findById(req.params.id);
    if (!vol) {
      return res.status(401).json("No volunteer found.");
    }

    var companies = vol.companies;
    const voldetail = {
      _id: vol._id,
      name: vol.name,
      rollno: vol.rollno,
    };
    companies.map(async (comp) => {
      console.log(comp._id);
      await Drive.findByIdAndUpdate(comp._id, {
        $pull: { volunteersOnDuty: voldetail },
      });
    });
    await Volunteer.findByIdAndRemove(req.params.id);
    res.json({ msg: "deleted Succussfuly" });
  } catch (error) {
    console.error(error.message);
    res.status(501).json({ msg: "Server error . " });
  }
});

//Assignment Route
router.put("/dasign/:id", async (req, res) => {
  if (req.user.role != "Sadmin") {
    return res.status(401).json({ msg: "You are not Authorized user" });
  }
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

//Accepted Route
router.put("/daccept/:id", async (req, res) => {
  if (req.user.role != "Sadmin") {
    return res.status(401).json({ msg: "You are not Authorized user" });
  }
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

//Work Assigned Route
router.put("/workassigned/:id", async (req, res) => {
  if (req.user.role != "Sadmin") {
    return res.status(401).json({ msg: "You are not Authorized user" });
  }
  try {
    var volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.json({ msg: "volunteer not found." });
    }

    volunteer = await Volunteer.findByIdAndUpdate(req.params.id, {
      $inc: {
        workshopAssigned: 1,
      },
    });
    return res.json(volunteer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

//Work Done Route
router.put("/workdone/:id", async (req, res) => {
  if (req.user.role != "Sadmin") {
    return res.status(401).json({ msg: "You are not Authorized user" });
  }
  try {
    var volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.json({ msg: "volunteer not found." });
    }

    volunteer = await Volunteer.findByIdAndUpdate(req.params.id, {
      $inc: {
        workshopAssigned: 1,
      },
    });
    return res.json(volunteer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

//Updation Route
router.put("/update/:id", async (req, res) => {
  const r = req.body;
  console.log(r);
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  try {
    var volunteer = await Volunteer.findById(r._id);
    if (!volunteer) {
      return res.json({ msg: "volunteer not found." });
    }

    volunteer = await Volunteer.findByIdAndUpdate(r._id, {
      $set: r,
    });
    return res.json(volunteer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
