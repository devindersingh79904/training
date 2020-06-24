const express = require('express');
const auth = require('./routes/auth');
const db = require('./config/Db');
const app = express();

db();
app.use(express.json({ extened: false }));
app.use('/api/auth', auth);

app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to the Training and placement cell Management system',
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is start on Port  : ${PORT}`);
});
