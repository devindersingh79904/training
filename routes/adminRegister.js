const express = require('express');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcryptjs = require('bcryptjs');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    var getUser = null;
    getUser = await Admin.findOne({ email });

    if (getUser) {
     
      throw new Error('User Already register');
    }

    var newUser = new Admin({
      name,
      email,
      password,
      role,
    });

    const salt = await bcryptjs.genSalt(10);
    newUser.password = await bcryptjs.hash(newUser.password, salt);

    await newUser.save();
   
    var Payload = {
      user: {
        id: newUser._id,
        role: newUser.role,
      },
    };

    jwt.sign(
      Payload,
      config.get('secret'),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      }
    );
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
});

module.exports = router;
