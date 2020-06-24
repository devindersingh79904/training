const express = require('express');
const Admin = require('../models/Admin');
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  var loginUser = await Admin.findById(req.user.id).select('-password');

  if (!loginUser) {
    res.status(401).json({ msg: 'No User Found' });
  }
  return res.json(loginUser);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    var newuser = await Admin.findOne({ email });

    if (!newuser) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    3;
    console.log(newuser);

    var isMatch = await bcrypt.compare(password, newuser.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    var Payload = {
      user: {
        id: newuser._id,
        role: newuser.role,
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
    console.error('error ', error.message);
    res.status(501).json({ msg: 'Server error' });
  }
});

module.exports = router;
