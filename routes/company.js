const express = require('express');
const Company = require('../models/Company');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  
  try {
    result = await Company.find({});
    return res.json(result);
  } catch (error) {
    console.error('error ', error.message);
    res.status(501).json({ msg: 'Server error' });
  }
});

router.post('/', auth, async (req, res) => {
  if (req.user.role != "Sadmin") {
    return res.status(401).json({ msg: "You are not Authorized user" });
  }
  const { name, email } = req.body;
  try {
    var companyName = await Company.findOne({ name });
    if (companyName) {
      return res.status(401).json({ msg: 'Company already exists' });
    }
    var newCompany = new Company({
      name,
      email,
    });

    await newCompany.save();
    return res.json(newCompany);
  } catch (error) {
    console.error('error ', error.message);
    res.status(501).json({ msg: 'Server error' });
  }
});
module.exports = router;
