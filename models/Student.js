const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
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
  rollno: {
    type: Number,
    required: true,
  },
  clas: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
  },
  session: {
    type: String,
    required: true,
  },
  attendedCompanies: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "companies",
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
  selected: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
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
});

module.exports = mongoose.model("student", StudentSchema);
