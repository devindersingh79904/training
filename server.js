const express = require('express');
const db = require('./config/Db');

const adminAuth = require('./routes/adminAuth');
const adminRegister = require('./routes/adminRegister');
const Volunteer = require('./routes/volunteer');
const Drive = require('./routes/drive');
const company = require('./routes/company');
const student = require('./routes/student');
const app = express();

db();
app.use(express.json({ extened: false }));

app.use('/api/adminAuth', adminAuth);
app.use('/api/adminRegister', adminRegister);
app.use('/api/company', company);
app.use('/api/Volunteer', Volunteer);
app.use('/api/Drive', Drive);
app.use('/api/Student', student);

app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to the Training and placement cell Management system',
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is start on Port  : ${PORT}`);
});
