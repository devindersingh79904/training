const mongoose = require('mongoose');

const DriveSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
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
  volunteersAssigned: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'volunteers',
      },
      name: {
        type: String,
      },
      clas: {
        type: String,
      },
      rollno: {
        type: Number,
      },
    },
  ],
  volunteersAccepted: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'volunteers',
      },
      name: {
        type: String,
      },
      clas: {
        type: String,
      },
      rollno: {
        type: Number,
      },
    },
  ],
  volunteersOnDuty: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'volunteers',
      },
      name: {
        type: String,
      },
      clas: {
        type: String,
      },
      rollno: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model('drive', DriveSchema);
