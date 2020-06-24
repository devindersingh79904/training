const mongoose = require('mongoose');
const config = require('config');
const mongoUri = config.get('mongoUri');

const connect = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('connected to dataBase Successfully');
  } catch (err) {
    console.error('Error Occurs : ' + err.message);
  }
};

module.exports = connect;
