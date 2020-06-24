const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'no token. Authorization denied.' });
  }

  try {
    const decode = jwt.verify(token, config.get('secret'));
    req.user = decode.user;

    // console.log('decode ');
    // console.log(decode.user);

    next();
  } catch (error) {
    return res.status(401).json({ msg: 'token is invalid' });
  }
};
