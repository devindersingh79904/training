const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ msg: 'geting loged in user' });
});

router.post('/', (req, res) => {
  console.log(req.body.name);
  return res.json({ msg: 'I am registering new User .' });
});

module.exports = router;
