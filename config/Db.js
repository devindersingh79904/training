const mongoose = require('mongoose');
const config = require('config');
const mongoUri = config.get('mongoUri');

const connect = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to dataBase Successfully');
  } catch (err) {
    console.error('Error Occurs : ' + err.message);
  }
};

module.exports = connect;
