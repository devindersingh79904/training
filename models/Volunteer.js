const mongoose = require('mongoose');

const VolunteerSchema = mongoose.Schema({
  rollno: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  clas: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phnno: {
    type: Number,
    required: true,
  },
  dutiesAssigned: {
    type: Number,

    defult: 0,
  },

  dutiesAccepted: {
    type: Number,
    defult: 0,
  },
  present: {
    type: Number,
    defult: 0,
  },
  presentArray: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'drives',
        unique: true,
      },
      name: {
        type: String,
      },
    },
  ],
  dutiesAssignedArray: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'drives',
        unique: true,
      },
      name: {
        type: String,
      },
      date: {
        type: Date,
      },
      type: {
        type: String,
      },
    },
  ],
  dutiesAcceptedArray: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'drives',
        unique: true,
      },
      name: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('volunteers', VolunteerSchema);
