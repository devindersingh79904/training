const express = require('express');
const Drive = require('../models/Drive');
const Volunteer = require('../models/Volunteer');
const Student = require('../models/Student');
const config = require('config');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    result = await Drive.find();
    return res.json(result);
  } catch (err) {
    res.status(501).json({ msg: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    result = await Drive.findById(req.params.id);
    return res.json(result);
  } catch (err) {
    res.status(501).json({ msg: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  const {
    name,
    email,
    date,
    type,
    description,
    volunteersPresent,
    volunteersAssigned,
    volunteersAccepted,
    studentsAttended,
    selectedStudents,
  } = req.body;

  try {
    var companyName = await Drive.findOne({ date, type });
    // if (companyName) {
    //   return res.status(401).json({ msg: "Company already exists" });
    // }
    var newCompany = new Drive({
      name,
      email,
      date,
      type,
      description,
      volunteersPresent,
      volunteersAssigned,
      volunteersAccepted,
      studentsAttended,
      selectedStudents,
    });

    await newCompany.save();
    return res.json({ newCompany });
  } catch (error) {
    console.error('error ', error.message);
    res.status(501).json({ msg: 'Server error' });
  }
});

router.put('/assignDriveVol/:id', async (req, res) => {
  console.log(req.body);
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  try {
    var drive = await Drive.findById(req.params.id);
    if (!drive) {
      return res.json({ msg: 'Drive not found.' });
    }

    const compdetail = {
      _id: drive._id,
      name: drive.name,
      date: drive.date,
      type: drive.type,
    };
    const volunteersAssigned = req.body.assignVolunteers;

    volunteersAssigned.map(async (vol) => {
      const v = await Volunteer.findById(vol._id);
      console.log(v);
      const voldetail = {
        _id: v._id,
        name: v.name,
        clas: v.clas,
        rollno: v.rollno,
      };
      await Drive.findByIdAndUpdate(req.params.id, {
        $push: { volunteersAssigned: voldetail },
      });

      await Volunteer.findByIdAndUpdate(vol._id, {
        $push: { dutiesAssignedArray: compdetail },
      });
    });
    return res.json(volunteersAssigned);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.put('/acceptDriveVol/:id', async (req, res) => {
  console.log('I am in accept drive');
  console.log('id ' + req.params.id);
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  try {
    var drive = await Drive.findById(req.params.id);
    console.log(req.params.id);
    if (!drive) {
      return res.json({ msg: 'Drive not found.' });
    }

    const compdetail = {
      _id: drive._id,
      // ,
      // name: drive.name,
      // date: drive.date,
      // type: drive.type,
    };
    // console.log(compdetail);
    const volunteersAccepted = req.body.acceptVolunteers;

    volunteersAccepted.map(async (vol) => {
      const v = await Volunteer.findById(vol._id);
      console.log(v);
      const voldetail = {
        _id: v._id,
        // ,
        // name: v.name,
        // clas: v.clas,
        // rollno: v.rollno,
      };
      await Drive.findByIdAndUpdate(req.params.id, {
        $push: { volunteersAccepted: voldetail },
      });

      await Volunteer.findByIdAndUpdate(vol._id, {
        $push: { dutiesAcceptedArray: compdetail },
      });
    });
    return res.json({ msg: 'Success Drive accept ' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.put('/presentDriveVol/:id', async (req, res) => {
  console.log(req.body);
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  try {
    var drive = await Drive.findById(req.params.id);
    if (!drive) {
      return res.json({ msg: 'Drive not found.' });
    }

    const compdetail = {
      _id: drive._id,
      // ,
      // name: drive.name,
      // date: drive.date,
      // type: drive.type,
    };
    const volunteersPresent = req.body.doneVolunteers;

    volunteersPresent.map(async (vol) => {
      const v = await Volunteer.findById(vol._id);
      console.log(v);
      const voldetail = {
        _id: v._id,
        // ,
        // name: v.name,
        // clas: v.clas,
        // rollno: v.rollno,
      };
      await Drive.findByIdAndUpdate(req.params.id, {
        $push: { volunteersPresent: voldetail },
      });

      await Volunteer.findByIdAndUpdate(vol._id, {
        $push: { presentArray: compdetail },
      });
    });
    return res.json(volunteersPresent);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});
//karda save???hnn
router.put('/attendDriveStd/:id', async (req, res) => {
  console.log(req.body);
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }
  try {
    var drive = await Drive.findById(req.params.id);
    if (!drive) {
      return res.status.apply(405).json({ msg: 'Drive not found.' });
    }

    const compdetail = {
      _id: drive._id,
      name: drive.name,
      date: drive.date,
      type: drive.type,
    };
    const studentsAttended = req.body.studentsAttended;

    console.log(studentsAttended);

    studentsAttended.map(async (std) => {
      const s = await Student.findById(std._id);
      console.log(s);
      const stddetail = {
        _id: s._id,
        name: s.name,
        clas: s.clas,
        rollno: s.rollno,
        batch: s.batch,
      };
      await Drive.findByIdAndUpdate(req.params.id, {
        $push: { studentsAttended: stddetail },
      });

      await Student.findByIdAndUpdate(std._id, {
        $push: { driveAttended: compdetail },
      });
    });
    return res.json(studentsAttended);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.put('/selectDriveStd/:id', async (req, res) => {
  console.log(req.body);
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }

  try {
    var drive = await Drive.findById(req.params.id);
    if (!drive) {
      return res.json({ msg: 'Drive not found.' });
    }

    const compdetail = {
      _id: drive._id,
      package: req.body.salary,
    };
    const selectedStudents = req.body.selectedStudents;

    selectedStudents.map(async (std) => {
      const s = await Student.findById(std._id);
      console.log(s);
      const stddetail = {
        _id: s._id,
        package: req.body.salary,
      };
      await Drive.findByIdAndUpdate(req.params.id, {
        $push: { selectedStudents: stddetail },
      });

      await Student.findByIdAndUpdate(std._id, {
        $push: { driveShortlisted: compdetail },
      });
    });
    return res.json(selectedStudents);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }

  try {
    var comp = await Drive.findById(req.params.id);
    if (!comp) {
      return res.status(401).json('No Company found.');
    }
    const compdetail = {
      _id: comp._id,
      name: comp.name,
      date: comp.date,
      type: comp.type,
    };
    const volunteersPresent = comp.volunteersPresent;
    const volunteersAccepted = comp.volunteersAccepted;
    const volunteersAssigned = comp.volunteersAssigned;

    volunteersPresent.map(async (vol) => {
      console.log(vol._id);
      await Volunteer.findByIdAndUpdate(vol._id, {
        $pull: { presentArray: _id },
      });
    });

    volunteersAccepted.map(async (vol) => {
      console.log(vol._id);
      await Volunteer.findByIdAndUpdate(vol._id, {
        $pull: { dutiesAcceptedArray: _id },
      });
    });

    volunteersAssigned.map(async (vol) => {
      console.log(vol._id);
      await Volunteer.findByIdAndUpdate(vol._id, {
        $pull: { dutiesAssignedArray: compdetail },
      });
    });

    await Drive.findByIdAndRemove(req.params.id);
    res.json({ msg: 'deleted Sucessfully' });
  } catch (error) {
    console.error(error.message);
    res.status(501).json({ msg: 'Server error . ' });
  }
});

router.delete('/:id', async (req, res) => {
  // if (req.user.role != "Sadmin") {
  //   return res.status(401).json({ msg: "You are not Authorized user" });
  // }

  try {
    var comp = await Drive.findById(req.params.id);
    if (!comp) {
      return res.status(401).json('No Company found.');
    }
    const compdetail = {
      _id: comp._id,
      name: comp.name,
      date: comp.date,
      type: comp.type,
    };
    const volunteersOnDuty = comp.volunteersOnDuty;
    const volunteersAccepted = comp.volunteersAccepted;
    const volunteersAssigned = comp.volunteersAssigned;
    volunteersOnDuty.map(async (vol) => {
      console.log(vol._id);
      await Volunteer.findByIdAndUpdate(vol._id, {
        $pull: { presentArray: compdetail },
      });
    });

    volunteersAccepted.map(async (vol) => {
      console.log(vol._id);
      await Volunteer.findByIdAndUpdate(vol._id, {
        $pull: { dutiesAcceptedArray: compdetail },
      });
    });

    volunteersAssigned.map(async (vol) => {
      console.log(vol._id);
      await Volunteer.findByIdAndUpdate(vol._id, {
        $pull: { dutiesAssignedArray: compdetail },
      });
    });

    await Drive.findByIdAndRemove(req.params.id);
    res.json({ msg: 'deleted Sucessfully' });
  } catch (error) {
    console.error(error.message);
    res.status(501).json({ msg: 'Server error . ' });
  }
});

module.exports = router;

// const express = require('express');
// const Drive = require('../models/Drive');
// const config = require('config');
// const router = express.Router();
// const auth = require('../middleware/auth');
// const Volunteer = require('../models/Volunteer');

// router.get('/', async (req, res) => {
//   try {
//     result = await Drive.find();
//     return res.json(result);
//   } catch (err) {
//     res.status(501).json({ msg: 'Server error' });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     result = await Drive.findById(req.params.id);
//     return res.json(result);
//   } catch (err) {
//     res.status(501).json({ msg: 'Server error' });
//   }
// });

// router.post('/', async (req, res) => {
//   // if (req.user.role != "Sadmin") {
//   //   return res.status(401).json({ msg: "You are not Authorized user" });
//   // }
//   const {
//     name,
//     email,
//     date,
//     type,
//     description,
//     volunteersOnDuty,
//     volunteersAssigned,
//     volunteersAccepted,
//   } = req.body;

//   // console.log(name, email);
//   try {
//     //console.log("Duties : " + dutiesAssigned);
//     var companyName = await Drive.findOne({ date, type });
//     // if (companyName) {
//     //   return res.status(401).json({ msg: 'Company already exists' });
//     // }
//     var newCompany = new Drive({
//       name,
//       email,
//       date,
//       type,
//       description,
//       volunteersOnDuty,
//       volunteersAssigned,
//       volunteersAccepted,
//     });

//     await newCompany.save();
//     return res.json({ newCompany });
//   } catch (error) {
//     console.error('error ', error.message);
//     res.status(501).json({ msg: 'Server error' });
//   }
// });

// // router.post('/', async (req, res) => {
// //   // if (req.user.role != "Sadmin") {
// //   //   return res.status(401).json({ msg: "You are not Authorized user" });
// //   // }
// //   const { name, email, date, type, description, volunteersOnDuty } = req.body;

// //   // console.log(name, email);
// //   try {
// //     //console.log("Duties : " + dutiesAssigned);
// //     var companyName = await Drive.findOne({ date, type });
// //     if (companyName) {
// //       return res.status(401).json({ msg: 'Company already exists' });
// //     }
// //     var newCompany = new Drive({
// //       name,
// //       email,
// //       date,
// //       type,
// //       description,
// //       volunteersOnDuty,
// //     });

// //     const compdetail = {
// //       _id: newCompany._id,
// //       name: newCompany.name,
// //       date: newCompany.date,
// //       type: newCompany.type,
// //     };
// //     volunteersOnDuty.map(async (vol) => {
// //       console.log(vol._id);
// //       await Volunteer.findByIdAndUpdate(vol._id, {
// //         $push: { companies: compdetail },
// //       });
// //     });

// //     await newCompany.save();
// //     return res.json(newCompany);
// //   } catch (error) {
// //     console.error('error ', error.message);
// //     res.status(501).json({ msg: 'Server error' });
// //   }
// // });

// router.delete('/:id', async (req, res) => {
//   if (req.user.role != 'Sadmin') {
//     return res.status(401).json({ msg: 'You are not Authorized user' });
//   }

//   // const _id = req.params.id;
//   // console.log("params : ", _id);

//   try {
//     var comp = await Drive.findById(req.params.id);
//     if (!comp) {
//       return res.status(401).json('No Company found.');
//     }
//     await Drive.findByIdAndRemove(req.params.id);
//     res.json({ msg: 'deleted Sucessfully' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(501).json({ msg: 'Server error . ' });
//   }
// });

// module.exports = router;
