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
    },
  ],
  volunteersPresent: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'volunteers',
      },
    },
  ],

  studentsAttended: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
      },
      name: {
        type: String,
      },
      clas: {
        type: String,
      },
      batch: {
        type: String,
      },
      rollno: {
        type: Number,
      },
    },
  ],
  selectedStudents: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
      },
      package: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('drive', DriveSchema);
