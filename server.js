const express = require('express');
const db = require('./config/Db');
const path = require('path');
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

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is start on Port  : ${PORT}`);
});
