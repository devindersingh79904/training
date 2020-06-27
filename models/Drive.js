const mongoose = require('mongoose');

const DriveSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('drive', DriveSchema);
